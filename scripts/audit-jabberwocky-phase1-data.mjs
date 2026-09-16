import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const failures = [];
const passes = [];
const rel = (p) => path.join(root, p);
const read = (p) => fs.readFileSync(rel(p), 'utf8');
const check = (condition, message) => condition ? passes.push(message) : failures.push(message);

const collectorPath = 'src/components/JcecPhase1DataCollector.astro';
const teamPath = 'src/components/JcecPhase1TeamSetup.astro';
const layoutPath = 'src/layouts/BaseLayout.astro';
const appScriptPath = 'docs/jabberwocky-phase1-collector-apps-script.gs';
const planPath = 'docs/jabberwocky-phase1-data-collection-plan.md';
const missionPaths = [1,2,3,4,5].map((n) => `src/pages/courses/grade-7-science/jabberwocky/phase-1/mission-${n}/index.astro`);

for (const file of [collectorPath, teamPath, layoutPath, appScriptPath, planPath, ...missionPaths]) {
  check(fs.existsSync(rel(file)), `exists: ${file}`);
}

const collector = read(collectorPath);
const team = read(teamPath);
const layout = read(layoutPath);
const appScript = read(appScriptPath);
const plan = read(planPath);
const missions = missionPaths.map(read);

check(layout.includes("import JcecPhase1DataCollector"), 'BaseLayout imports the Phase 1 collector');
check(layout.includes('<JcecPhase1DataCollector />'), 'BaseLayout renders the Phase 1 collector');
check(collector.includes("/courses/grade-7-science/jabberwocky/phase-1/"), 'collector is scoped to the Phase 1 route');
check(!collector.includes('/phase-2/') && !collector.includes('/phase-3/') && !collector.includes('/phase-4/') && !collector.includes('/phase-5/'), 'collector does not target later phase routes');

for (const token of [
  'jabberwocky-phase1-team-profile',
  'jabberwocky-phase1-posting',
  'jabberwocky-phase1-submit-queue',
  'teamId',
  'eventId',
  'pendingCount',
  "window.addEventListener('online'"
]) check(collector.includes(token), `collector includes resilience/state token: ${token}`);

check(collector.includes('queue.slice(-50)'), 'collector bounds the local retry queue');
check(collector.includes("reason: 'offline'"), 'collector preserves queued events while offline');
check(collector.includes("reason: 'endpoint-not-configured'"), 'collector safely queues while the endpoint is not configured');
check(collector.includes('localStorage.setItem'), 'collector checkpoints save locally before central observation');
check(collector.includes('Storage.prototype.setItem'), 'collector integrates with existing approved Save actions');
check(collector.includes('jabberwocky-mission4-record'), 'collector recognizes Mission 4 continent-specific save keys');
check(collector.includes('mission3-digital-checkpoint'), 'Mission 3 receives a compact Ecosystem Map report checkpoint');
check(collector.includes('mission5-digital-checkpoint'), 'Mission 5 receives a compact Recommendation Board report checkpoint');

for (const title of ['Environment Profile','Native Species Card','Ecosystem Map','Ecosystem Change Record','JCEC Recommendation Board']) {
  check(collector.includes(title), `collector includes checkpoint title: ${title}`);
}

check(team.includes('Member name') && team.includes('First name'), 'Team Setup asks for first names');
check(team.includes('3–5 members'), 'Team Setup preserves 3–5 member rule');
for (const role of ['Lead Scientist','Evidence Recorder','Materials Manager','Data Analyst','Communicator']) {
  check(team.includes(role), `Team Setup retains approved role: ${role}`);
}

check(missions[0].includes("jabberwocky-mission1-team-record"), 'Mission 1 keeps its existing local Team Record key');
check(missions[1].includes("jabberwocky-mission2-team-record"), 'Mission 2 keeps its existing local Team Record key');
check(missions[3].includes("jabberwocky-mission4-record"), 'Mission 4 keeps its existing local Team Record key');

for (const token of [
  "const SPREADSHEET_ID = '1RjnX1NqWH33IkUqRk_qilzJMr7aZy6hkv5-ONNNchd8'",
  'function doPost',
  'LockService.getScriptLock',
  'eventExists_',
  'upsertDirectory_',
  'upsertProgress_',
  "new Set(['team_profile', 'continent', 'mission_record'])",
  'ALLOWED_ROLES',
  'firstName_',
  'safeCell_',
  'record-too-large'
]) check(appScript.includes(token), `Apps Script contains protection/report logic: ${token}`);

check(appScript.includes("/^[=+\\-@]/"), 'Apps Script protects Sheets from formula-prefix injection');
check(appScript.includes("values[9] === 6 ? 'Complete'"), 'Mission Progress computes Phase 1 completion from profile + five mission records');
check(appScript.includes("event.eventType === 'mission_record'"), 'Apps Script updates mission progress only for final mission records');
check(!collector.toLowerCase().includes('email') && !collector.toLowerCase().includes('reflection'), 'collector does not transmit email or individual reflection fields');
check(!collector.includes('ASSESSMENT_KEY') && !collector.includes('prediction-reason'), 'collector does not collect Mission 1 prediction data');

try {
  new Function(appScript);
  passes.push('Apps Script source is valid JavaScript syntax');
} catch (error) {
  failures.push(`Apps Script syntax error: ${error.message}`);
}

for (const tab of ['Setup','Intake','Team Directory','Mission Progress','Missing Records','Class Summary']) {
  check(plan.includes(tab), `deployment plan documents workbook tab: ${tab}`);
}
check(plan.includes('Execute as') && plan.includes('/exec'), 'deployment plan documents production Web App deployment');
check(plan.includes('localStorage') && plan.includes('Event ID'), 'deployment plan documents local-first retry/deduplication model');

console.log(`\nJabberwocky Phase 1 data-collection audit: ${passes.length} checks passed.`);
for (const item of passes) console.log(`  ✓ ${item}`);
if (failures.length) {
  console.error(`\n${failures.length} data-collection check(s) failed:`);
  for (const item of failures) console.error(`  ✗ ${item}`);
  process.exit(1);
}
console.log('\nPhase 1 data collection is isolated, local-first, first-name-only, retryable, deduplicated, and mapped to the teacher workbook.');
