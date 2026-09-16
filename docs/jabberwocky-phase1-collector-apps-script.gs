const SPREADSHEET_ID = '1RjnX1NqWH33IkUqRk_qilzJMr7aZy6hkv5-ONNNchd8';
const INTAKE_SHEET = 'Intake';
const DIRECTORY_SHEET = 'Team Directory';
const PROGRESS_SHEET = 'Mission Progress';
const SETUP_SHEET = 'Setup';
const ALLOWED_EVENTS = new Set(['team_profile', 'continent', 'mission_record']);
const ALLOWED_ROLES = new Set(['Lead Scientist', 'Evidence Recorder', 'Materials Manager', 'Data Analyst', 'Communicator']);
const CONTINENTS = {
  gyre: 'Gyre',
  brillig: 'Brillig',
  manxome: 'Manxome',
  'slithy-toves': 'Slithy Toves',
  wabe: 'Wabe',
  bandersnatch: 'Bandersnatch',
  gimble: 'Gimble',
  mimsy: 'Mimsy'
};

function doGet() {
  return json_({ ok: true, service: 'Jabberwocky Phase 1 collector', version: '1' });
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    const payloadText = e && e.parameter ? e.parameter.payload : '';
    if (!payloadText || payloadText.length > 20000) return json_({ ok: false, error: 'invalid-payload' });

    let incoming;
    try { incoming = JSON.parse(payloadText); }
    catch (error) { return json_({ ok: false, error: 'invalid-json' }); }

    const event = normalizeEvent_(incoming);
    if (!event.ok) return json_({ ok: false, error: event.error });

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const intake = requireSheet_(ss, INTAKE_SHEET);
    const directory = requireSheet_(ss, DIRECTORY_SHEET);
    const progress = requireSheet_(ss, PROGRESS_SHEET);

    if (eventExists_(intake, event.eventId)) {
      return json_({ ok: true, duplicate: true, eventId: event.eventId });
    }

    const receivedAt = new Date();
    appendIntake_(intake, event, receivedAt);
    upsertDirectory_(directory, event, receivedAt);
    upsertProgress_(progress, event, receivedAt);

    return json_({ ok: true, duplicate: false, eventId: event.eventId });
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    return json_({ ok: false, error: 'server-error' });
  } finally {
    try { lock.releaseLock(); } catch (error) {}
  }
}

function normalizeEvent_(raw) {
  if (!raw || raw.phase !== 1) return { ok: false, error: 'wrong-phase' };
  const eventType = clean_(raw.eventType, 30);
  if (!ALLOWED_EVENTS.has(eventType)) return { ok: false, error: 'event-not-allowed' };

  const eventId = id_(raw.eventId);
  const teamId = id_(raw.team && raw.team.teamId);
  if (!eventId || !teamId) return { ok: false, error: 'missing-id' };

  let mission = '';
  if (eventType === 'mission_record') {
    mission = Number(raw.mission);
    if (!Number.isInteger(mission) || mission < 1 || mission > 5) return { ok: false, error: 'invalid-mission' };
  }

  const team = raw.team || {};
  const members = Array.isArray(team.members) ? team.members.slice(0, 5).map(function(member) {
    const name = firstName_(member && member.name);
    const role = clean_(member && member.role, 40);
    return { name: name, role: ALLOWED_ROLES.has(role) ? role : '' };
  }).filter(function(member) { return member.name || member.role; }) : [];

  if (eventType === 'team_profile') {
    if (members.length < 3 || members.length > 5 || members.some(function(member) { return !member.name || !member.role; })) {
      return { ok: false, error: 'invalid-members' };
    }
  }

  const continentSlug = clean_(raw.continent, 40).toLowerCase();
  if (continentSlug && !CONTINENTS[continentSlug]) return { ok: false, error: 'invalid-continent' };

  const record = sanitizeRecord_(raw.record || {});
  const recordText = JSON.stringify(record);
  if (recordText.length > 6000) return { ok: false, error: 'record-too-large' };

  return {
    ok: true,
    eventId: eventId,
    eventType: eventType,
    mission: mission,
    recordTitle: clean_(raw.recordTitle, 80),
    record: record,
    team: {
      teamId: teamId,
      teamName: clean_(team.teamName, 40),
      logo: clean_(team.logo, 8),
      missionStatement: clean_(team.missionStatement, 180),
      members: members
    },
    continentSlug: continentSlug,
    continent: continentSlug ? CONTINENTS[continentSlug] : '',
    clientUpdatedAt: clean_(raw.clientUpdatedAt, 40),
    sourceVersion: clean_(raw.sourceVersion, 40)
  };
}

function sanitizeRecord_(value, depth) {
  depth = depth || 0;
  if (depth > 3) return '';
  if (value === null || value === undefined) return '';
  if (typeof value === 'string') return clean_(value, 600);
  if (typeof value === 'number' || typeof value === 'boolean') return value;
  if (Array.isArray(value)) return value.slice(0, 12).map(function(item) { return sanitizeRecord_(item, depth + 1); });
  if (typeof value === 'object') {
    const output = {};
    Object.keys(value).slice(0, 30).forEach(function(key) {
      output[clean_(key, 50)] = sanitizeRecord_(value[key], depth + 1);
    });
    return output;
  }
  return '';
}

function firstName_(value) {
  const text = clean_(value, 40).trim();
  if (!text) return '';
  return text.split(/\s+/)[0];
}

function clean_(value, maxLength) {
  const text = String(value === null || value === undefined ? '' : value)
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLength || 500);
  return safeCell_(text);
}

function id_(value) {
  const text = String(value || '').trim();
  return /^[A-Za-z0-9._:-]{8,100}$/.test(text) ? text : '';
}

function safeCell_(text) {
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function requireSheet_(ss, title) {
  const sheet = ss.getSheetByName(title);
  if (!sheet) throw new Error('Missing sheet: ' + title);
  return sheet;
}

function eventExists_(sheet, eventId) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return false;
  return Boolean(sheet.getRange(2, 2, lastRow - 1, 1).createTextFinder(eventId).matchEntireCell(true).findNext());
}

function appendIntake_(sheet, event, receivedAt) {
  const members = event.team.members;
  const member = function(index, field) {
    return members[index] ? members[index][field] || '' : '';
  };
  sheet.appendRow([
    receivedAt,
    event.eventId,
    event.team.teamId,
    '',
    event.eventType,
    event.mission || '',
    event.team.teamName,
    event.team.logo,
    event.team.missionStatement,
    member(0, 'name'), member(0, 'role'),
    member(1, 'name'), member(1, 'role'),
    member(2, 'name'), member(2, 'role'),
    member(3, 'name'), member(3, 'role'),
    member(4, 'name'), member(4, 'role'),
    event.continent,
    event.recordTitle,
    JSON.stringify(event.record),
    event.clientUpdatedAt,
    event.sourceVersion
  ]);
}

function findTeamRow_(sheet, teamId) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return 0;
  const found = sheet.getRange(2, 1, lastRow - 1, 1).createTextFinder(teamId).matchEntireCell(true).findNext();
  return found ? found.getRow() : 0;
}

function upsertDirectory_(sheet, event, receivedAt) {
  const row = findTeamRow_(sheet, event.team.teamId) || sheet.getLastRow() + 1;
  const existing = row <= sheet.getLastRow() ? sheet.getRange(row, 1, 1, 18).getValues()[0] : new Array(18).fill('');
  const members = event.team.members;
  const member = function(index, field) { return members[index] ? members[index][field] || '' : ''; };
  const values = [
    event.team.teamId,
    existing[1] || '',
    event.team.teamName || existing[2] || '',
    event.team.logo || existing[3] || '',
    event.team.missionStatement || existing[4] || '',
    member(0, 'name') || existing[5] || '', member(0, 'role') || existing[6] || '',
    member(1, 'name') || existing[7] || '', member(1, 'role') || existing[8] || '',
    member(2, 'name') || existing[9] || '', member(2, 'role') || existing[10] || '',
    member(3, 'name') || existing[11] || '', member(3, 'role') || existing[12] || '',
    member(4, 'name') || existing[13] || '', member(4, 'role') || existing[14] || '',
    event.continent || existing[15] || '',
    receivedAt,
    event.sourceVersion || existing[17] || ''
  ];
  sheet.getRange(row, 1, 1, 18).setValues([values]);
}

function upsertProgress_(sheet, event, receivedAt) {
  const row = findTeamRow_(sheet, event.team.teamId) || sheet.getLastRow() + 1;
  const existing = row <= sheet.getLastRow() ? sheet.getRange(row, 1, 1, 12).getValues()[0] : new Array(12).fill('');

  const values = existing.slice();
  values[0] = event.team.teamId;
  values[1] = event.team.teamName || values[1] || '';
  values[2] = event.continent || values[2] || '';
  if (event.eventType === 'team_profile') values[3] = '✓';
  if (event.eventType === 'mission_record') values[3 + Number(event.mission)] = '✓';
  values[9] = [3,4,5,6,7,8].reduce(function(total, index) { return total + (values[index] === '✓' ? 1 : 0); }, 0);
  values[10] = receivedAt;
  values[11] = values[9] === 6 ? 'Complete' : values[9] > 0 || values[2] ? 'In progress' : 'Not started';
  sheet.getRange(row, 1, 1, 12).setValues([values]);
}

function json_(object) {
  return ContentService.createTextOutput(JSON.stringify(object)).setMimeType(ContentService.MimeType.JSON);
}
