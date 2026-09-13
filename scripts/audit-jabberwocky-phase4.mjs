import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const passes = [];
const failures = [];
const rel = (p) => path.join(root, p);
const read = (p) => fs.readFileSync(rel(p), 'utf8');
const has = (text, token) => text.toLowerCase().includes(token.toLowerCase());
const check = (condition, message) => condition ? passes.push(message) : failures.push(message);

const files = {
  hub: 'src/pages/courses/grade-7-science/jabberwocky/phase-4/index.astro',
  m1: 'src/pages/courses/grade-7-science/jabberwocky/phase-4/mission-1/index.astro',
  progress: 'src/components/JcecPhase4Progress.astro',
  data: 'src/data/jabberwockyPhase4.ts',
  phase3Progress: 'src/components/JcecPhase3Progress.astro'
};
for (const file of Object.values(files)) check(fs.existsSync(rel(file)), `exists: ${file}`);
for (const n of [2,3,4,5]) check(!fs.existsSync(rel(`src/pages/courses/grade-7-science/jabberwocky/phase-4/mission-${n}/index.astro`)), `Mission ${n} is not built yet`);

const hub = read(files.hub);
const m1 = read(files.m1);
const progress = read(files.progress);
const data = read(files.data);
const p3progress = read(files.phase3Progress);

for (const token of ['PROJECT NEW HORIZON','JCEC STRUCTURAL SYSTEMS DIVISION','Read the Building Site','Trace the Forces','Choose What Holds','Keep It Standing','Authorize New Horizon']) check(has(hub, token), `Hub includes: ${token}`);
for (const token of ['Requirements ●','Forces ○','Materials ○','Stability ○','Authorization ○']) check(has(hub, token), `Hub progress includes: ${token}`);
check(hub.includes('jabberwocky-phase4-posting'), 'Phase 4 uses separate posting state');
for (const oldKey of ['jabberwocky-phase1-posting','jabberwocky-phase2-posting','jabberwocky-phase3-posting']) check(!hub.includes(`localStorage.setItem('${oldKey}'`), `Phase 4 does not overwrite ${oldKey}`);
check((hub.match(/status:'CURRENT'/g) || []).length === 1, 'Only Mission 1 is current');
check((hub.match(/status:'UPCOMING'/g) || []).length === 4, 'Missions 2–5 remain upcoming');
check(hub.includes('phase-4/mission-1/') && !hub.includes('phase-4/mission-2/') && !hub.includes('phase-4/mission-3/') && !hub.includes('phase-4/mission-4/') && !hub.includes('phase-4/mission-5/'), 'Hub releases only Mission 1');
for (const token of ['ENVIRONMENT','THERMAL REQUIREMENT','ECOLOGICAL RESTRICTION','SITE / LOAD WARNING']) check(has(hub, token), `Hub structural briefing includes: ${token}`);
check(has(hub, 'Three specialist teams worked here before you'), 'Hub explains specialist-team continuity');
check(has(hub, 'do not need to reopen old archives'), 'Hub prevents archive overload');

check(has(p3progress, 'Continue to Phase 4 → Project New Horizon'), 'Phase 3 conclusion hands forward to Project New Horizon');
check(has(p3progress, "const phase4Path = 'phase-' + '4/'"), 'Phase 3 handoff constructs the Phase 4 path');

for (const token of ['Mission 1 of 5','What does a structure need to do before we decide how to build it?','3 classes × 45 minutes','Your Mission','Learn the Science','Investigate','Make a Decision','Record It']) check(has(m1, token), `Mission 1 includes: ${token}`);
check(m1.includes('jabberwocky-phase4-posting'), 'Mission 1 carries Phase 4 posting');
check(!m1.includes('<select'), 'Mission 1 does not ask students to choose continent again');
for (const token of ['FUNCTION','FORM','MATERIAL','PERFORMANCE REQUIREMENT','FRAME','SHELL','FRAME + SHELL','FAILURE POINT']) check(has(m1, token), `Mission 1 science includes: ${token}`);
check(has(m1, 'Natural structures do not always fit'), 'Mission 1 avoids forcing every natural structure into one human-made category');
check(!has(m1, 'tension') && !has(m1, 'compression') && !has(m1, 'shearing') && !has(m1, 'bending'), 'Detailed force vocabulary is deferred to Mission 2');

check((m1.match(/BLACKFOOT CROSSING HISTORICAL PARK/g) || []).length >= 2, 'Mission 1 uses two Blackfoot Crossing source cards');
check(has(m1, 'https://blackfootcrossing.ca/our-culture/'), 'Mission 1 links Blackfoot Crossing culture source');
check(has(m1, 'A-Home-for-our-History-V5a-spreads.pdf'), 'Mission 1 links Blackfoot Crossing architecture source');
for (const token of ['four-pole framework','collapsed and transported','structural-steel poles','lodgepole pine poles','Same culture, different time']) check(has(m1, token), `Authentic comparison includes: ${token}`);
for (const token of ['Do not copy sacred designs','invent cultural meanings']) check(has(m1, token), `Mission 1 cultural safeguard includes: ${token}`);

check(has(m1, 'Structure Detective Investigation'), 'Mission 1 uses Structure Detective Investigation');
for (const token of ['WHAT IS ITS JOB?','WHAT FORM DOES IT USE?','WHAT MATERIAL MATTERS?','WHERE MIGHT IT FAIL?']) check(has(m1, token), `Detective routine includes: ${token}`);
for (const token of ['Cardboard box','Cup / container','Chair or desk frame','Plant stem / leaf','Open basket / rack']) check(has(m1, token), `Detective evidence includes: ${token}`);
check(has(m1, 'SAME JOB · DIFFERENT DESIGN'), 'Mission 1 compares same-function/different-design structures');
check(has(m1, 'NO-PURCHASE FALLBACK'), 'Mission 1 includes explicit no-purchase fallback');
check(has(m1, 'If physical examples are unavailable'), 'Mission 1 can run entirely from evidence cards');
check(m1.includes('print-phase4-mission1'), 'Mission 1 includes a printable investigation/record packet');

for (const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) check(data.includes(`id: '${continent}'`), `Phase 4 data includes ${continent}`);
check((data.match(/mission1Clues: \[/g) || []).length === 8, 'All eight continents have Mission 1 clues');
for (const token of ['snow','heavy rainfall','storm season','scarce fresh water','long storms','open prairie','severe winters','saturated ground']) check(has(data, token), `Phase 4 preserves established site evidence: ${token}`);
for (const forbidden of ['earthquake','tsunami','hurricane','volcano','grid failure','power failure']) check(!has(data, forbidden), `Phase 4 does not invent hazard: ${forbidden}`);
check(has(data, 'Do not drain'), 'Mimsy no-drainage restriction is preserved');
check(has(data, 'Avoid extensive forest clearing or fragmentation'), 'Gimble forest restriction is preserved');
check(has(data, 'Do not consume large amounts of scarce fresh water'), 'Slithy Toves water restriction is preserved');

check(has(m1, 'What are the three most important performance requirements for our structure?'), 'Mission 1 has one main team decision');
for (const token of ['Our structure must','That means it needs to','A useful structural form might be']) check(has(m1, token), `Mission 1 reasoning scaffold includes: ${token}`);
check(has(m1, '<strong>FUNCTION</strong>') && has(m1, '<strong>REQUIREMENT</strong>') && has(m1, '<strong>POSSIBLE FORM</strong>'), 'Mission 1 visibly uses Function → Requirement → Possible Form reasoning');
check(has(m1, 'New Horizon Requirements Card'), 'Mission 1 ends with one Requirements Card');
for (const token of ['CONTINENT','STRUCTURE PURPOSE','3 PERFORMANCE REQUIREMENTS','LIKELY STRUCTURAL FORM(S)','ONE LIKELY FAILURE POINT','ONE INHERITED ECOLOGICAL / SITE RESTRICTION']) check(has(m1, token), `Requirements Card includes: ${token}`);
check(has(m1, 'Why can two structures with the same purpose have very different designs?'), 'Mission 1 includes approved individual reflection');
check(has(m1, 'Mission 1 is finished when:'), 'Mission 1 has an explicit finish line');
check(has(m1, 'Mission 2 — Trace the Forces remains locked.'), 'Mission 2 remains locked');
check(!m1.includes('phase-4/mission-2/'), 'Mission 1 creates no Mission 2 route');

if (failures.length) {
  console.error(`\nJabberwocky Phase 4 readiness audit failed: ${failures.length} issue(s).`);
  failures.forEach((failure) => console.error(`  ✗ ${failure}`));
  process.exit(1);
}

console.log(`\nJabberwocky Phase 4 readiness audit: ${passes.length} checks passed.`);
passes.forEach((pass) => console.log(`  ✓ ${pass}`));
console.log('\nPhase 4 prototype is ready: separate posting state, four-card inherited briefing, authentic Siksika culture/time comparison, low-material Mission 1, one Requirements Card, and Missions 2–5 locked.');
