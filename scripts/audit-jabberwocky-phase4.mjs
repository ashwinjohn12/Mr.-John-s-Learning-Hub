import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const passes = [];
const failures = [];
const rel = (p) => path.join(root, p);
const read = (p) => fs.readFileSync(rel(p), 'utf8');
const has = (text, token) => text.toLowerCase().includes(token.toLowerCase());
const check = (ok, message) => ok ? passes.push(message) : failures.push(message);

const files = {
  hub: 'src/pages/courses/grade-7-science/jabberwocky/phase-4/index.astro',
  m1: 'src/pages/courses/grade-7-science/jabberwocky/phase-4/mission-1/index.astro',
  m2: 'src/pages/courses/grade-7-science/jabberwocky/phase-4/mission-2/index.astro',
  m3: 'src/pages/courses/grade-7-science/jabberwocky/phase-4/mission-3/index.astro',
  m4: 'src/pages/courses/grade-7-science/jabberwocky/phase-4/mission-4/index.astro',
  progress: 'src/components/JcecPhase4Progress.astro',
  data: 'src/data/jabberwockyPhase4.ts',
  phase3Progress: 'src/components/JcecPhase3Progress.astro'
};

for (const file of Object.values(files)) check(fs.existsSync(rel(file)), `exists: ${file}`);
check(!fs.existsSync(rel('src/pages/courses/grade-7-science/jabberwocky/phase-4/mission-5/index.astro')), 'Mission 5 remains unbuilt');

const hub = read(files.hub);
const m1 = read(files.m1);
const m2 = read(files.m2);
const m3 = read(files.m3);
const m4 = read(files.m4);
const progress = read(files.progress);
const data = read(files.data);
const p3progress = read(files.phase3Progress);

// Hub, state and continuity
for (const token of ['PROJECT NEW HORIZON','Read the Building Site','Trace the Forces','Choose What Holds','Keep It Standing','Authorize New Horizon']) check(has(hub, token), `Hub includes ${token}`);
for (const token of ['Requirements ✓','Forces ✓','Materials ✓','Stability ●','Authorization ○']) check(has(hub, token), `Hub progress includes ${token}`);
check(hub.includes('jabberwocky-phase4-posting'), 'Phase 4 uses its own posting state');
check((hub.match(/status:'COMPLETE'/g) || []).length === 3, 'Hub marks Missions 1–3 complete');
check((hub.match(/status:'CURRENT'/g) || []).length === 1, 'Hub marks only Mission 4 current');
check((hub.match(/status:'UPCOMING'/g) || []).length === 1, 'Hub keeps only Mission 5 upcoming');
check(hub.includes('phase-4/mission-4/') && !hub.includes('phase-4/mission-5/'), 'Hub releases Mission 4 but not Mission 5');
check(has(hub, 'do not need to reopen old archives'), 'Hub prevents archive overload');
check(has(p3progress, 'Continue to Phase 4 → Project New Horizon'), 'Phase 3 handoff remains intact');

// Previous missions and navigation
for (const token of ['Mission 1 of 5','New Horizon Requirements Card']) check(has(m1, token), `Mission 1 remains intact: ${token}`);
for (const token of ['Mission 2 of 5','Structural Force Map']) check(has(m2, token), `Mission 2 remains intact: ${token}`);
for (const token of ['MISSION 3 OF 5','Material & Joint Recommendation']) check(has(m3, token), `Mission 3 remains intact: ${token}`);
check(has(progress, 'Next Mission → Trace the Forces'), 'Mission 1 links to Mission 2');
check(has(progress, 'Next Mission → Choose What Holds'), 'Mission 2 links to Mission 3');
check(has(progress, 'Next Mission → Keep It Standing'), 'Mission 3 links to Mission 4');
check(progress.includes('phase-4/mission-4/') && !progress.includes('phase-4/mission-5/'), 'Progress stops at Mission 4');

// Mission 4 student structure and continuity
for (const token of ['MISSION 4 OF 5','How can a structure remain stable and safe when conditions change?','4 classes × 45 minutes','Your Mission','Learn the Science','Investigate','Make a Decision','Record It']) check(has(m4, token), `Mission 4 includes ${token}`);
check(m4.includes('jabberwocky-phase4-posting'), 'Mission 4 carries the saved Phase 4 posting');
check(!m4.includes('<select'), 'Mission 4 does not ask students to choose a continent again');
check(has(m4, 'do not need to recreate either one'), 'Mission 4 avoids rebuilding previous Team Records');
check(has(m4, 'Mission 3 tested parts') && has(m4, 'whole system'), 'Mission 4 clearly distinguishes whole-system stability from Mission 3 part testing');

// Stability science and Grade 7 scope
for (const token of ['STABILITY','MASS DISTRIBUTION + FOUNDATION','STRENGTHENING THE DESIGN','MARGIN OF SAFETY']) check(has(m4, token), `Mission 4 teaches ${token}`);
check(has(m4, 'CENTRE OF GRAVITY — HELPFUL IDEA, NOT A CALCULATION'), 'Centre of gravity stays explanatory rather than computational');
check(has(m4, 'You do not need to calculate a centre of gravity'), 'Mission 4 avoids centre-of-gravity math');
check(has(m4, 'safety rule') && has(m4, 'not a mathematical safety-factor calculation'), 'Margin of safety remains conceptual');
for (const token of ['corrugation','lamination','change component shape','fastening / bracing']) check(has(m4, token), `Mission 4 strengthening options include ${token}`);

// Standardized investigation and problem-solving cycle
check(has(m4, 'Standardized Stability & Improvement Investigation'), 'Mission 4 uses standardized whole-system investigation');
check(has(m4, 'same small baseline model'), 'Teams begin from a common baseline instead of free-building');
check(has(m4, 'Change one factor at a time'), 'Mission 4 includes one-variable-at-a-time stability comparison');
for (const token of ['FOUNDATION / BASE','MASS DISTRIBUTION','controlled side pull','controlled base tilt']) check(has(m4, token), `Mission 4 stability test includes ${token}`);
check(has(m4, 'at least two') && has(m4, 'Possible improvement 1') && has(m4, 'Possible improvement 2'), 'Teams propose at least two alternatives before choosing');
for (const token of ['BEFORE','CHANGE','AFTER','Did the change solve the weakness? Did it create a new problem?']) check(has(m4, token), `Mission 4 modify/retest cycle includes ${token}`);
check(has(m4, 'TEST') && has(m4, 'IDENTIFY WEAKNESS') && has(m4, 'PROPOSE 2 ALTERNATIVES') && has(m4, 'MODIFY') && has(m4, 'RETEST') && has(m4, 'EXPLAIN'), 'Mission 4 makes the full problem-solving cycle visible');

// No competition, safety and low-material implementation
check(has(m4, 'NO STRONGEST / TALLEST MODEL COMPETITION'), 'Mission 4 explicitly rejects build competition');
check(has(m4, 'There is no prize for holding the most mass'), 'Mission 4 rejects maximum-load competition');
check(has(m4, 'teacher sets a maximum safe test load') || has(m4, 'Teacher-set maximum test load'), 'Mission 4 has a teacher-set testing ceiling');
for (const token of ['Index cards/cardstock','scrap cardboard','tape','binder clips','coins/washers','string']) check(has(m4, token), `Mission 4 low-material plan includes ${token}`);
for (const token of ['Desk-sized models only','Small classroom loads only','No snapping materials','No tall structures above desk height']) check(has(m4, token), `Mission 4 safety includes ${token}`);
check(has(m4, 'NO-PURCHASE / DISRUPTION FALLBACK'), 'Mission 4 includes explicit no-purchase fallback');
check(has(m4, 'model-training data') && has(m4, 'stability evidence'), 'Mission 4 fallback provides usable evidence');
check(m4.includes('print-phase4-mission4'), 'Mission 4 includes printable investigation/record materials');

// Continent cases and canon protection
for (const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) check(has(m4, `${continent}:`) || has(m4, `'${continent}':`), `Mission 4 contains ${continent} case`);
check((m4.match(/clues:\[/g) || []).length === 8, 'All eight continents have three stability/site clues');
for (const forbidden of ['earthquake','tsunami','volcano','hurricane','wind speed','soil bearing capacity']) check(!has(m4, forbidden), `Mission 4 avoids unsupported hazard/data: ${forbidden}`);
check(has(m4, 'do not prescribe one foundation') || has(m4, 'do not prescribe one foundation, one base width or one final design'), 'Mission 4 continent clues do not prescribe a single answer');

// Decision, Team Record and reflection
check(has(m4, 'What structural stability rule should JCEC require first on this site?'), 'Mission 4 has one main team decision');
for (const token of ['WEAKNESS','CHANGE','RETEST','SAFETY RULE']) check(has(m4, token), `Mission 4 reasoning scaffold includes ${token}`);
check(has(m4, 'New Horizon Safety Protocol'), 'Mission 4 ends with the approved Safety Protocol');
for (const token of ['Main stability risk','Foundation / mass-distribution rule','One strengthening technique','Environmental condition to consider','Margin-of-safety rule','One remaining uncertainty']) check(has(m4, token), `Mission 4 Team Record includes ${token}`);
check(has(m4, 'Do not copy your Mission 3 material recommendation'), 'Mission 4 Team Record avoids duplicating Mission 3 evidence');
check(has(m4, 'Why should a safe structure be able to handle more than the exact load we expect on a normal day?'), 'Mission 4 includes approved reflection');
check(has(m4, 'Mission 4 is finished when:'), 'Mission 4 has explicit finish line');
check(has(m4, 'Mission 5 — Authorize New Horizon remains locked.'), 'Mission 5 remains locked on Mission 4 page');
check(!m4.includes('phase-4/mission-5/'), 'Mission 4 creates no Mission 5 route');

// Pacing and canon/data protection
for (const token of ['What Makes a Structure Stable?','Test the Whole System','Improve and Retest','What Rule Should JCEC Require?']) check(has(m4, token), `Mission 4 pacing includes ${token}`);
for (const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) check(data.includes(`id: '${continent}'`), `Phase 4 data still includes ${continent}`);
for (const forbidden of ['earthquake','tsunami','hurricane','volcano','grid failure','power failure','wind speed','soil capacity']) check(!has(data, forbidden), `Phase 4 core data avoids unsupported hazard/data: ${forbidden}`);

if (failures.length) {
  console.error(`\nJabberwocky Phase 4 readiness audit failed: ${failures.length} issue(s).`);
  failures.forEach((failure) => console.error(`  ✗ ${failure}`));
  process.exit(1);
}

console.log(`\nJabberwocky Phase 4 readiness audit: ${passes.length} checks passed.`);
passes.forEach((pass) => console.log(`  ✓ ${pass}`));
console.log('\nPhase 4 now releases Mission 4 only: whole-system stability, foundation and mass-distribution reasoning, standardized baseline testing, two-alternative improvement planning, modify/retest troubleshooting, qualitative margin of safety, eight site-grounded stability cases, one Safety Protocol, and Mission 5 locked.');