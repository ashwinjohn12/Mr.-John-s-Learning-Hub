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
  m2: 'src/pages/courses/grade-7-science/jabberwocky/phase-4/mission-2/index.astro',
  progress: 'src/components/JcecPhase4Progress.astro',
  data: 'src/data/jabberwockyPhase4.ts',
  phase3Progress: 'src/components/JcecPhase3Progress.astro'
};
for (const file of Object.values(files)) check(fs.existsSync(rel(file)), `exists: ${file}`);
for (const n of [3,4,5]) check(!fs.existsSync(rel(`src/pages/courses/grade-7-science/jabberwocky/phase-4/mission-${n}/index.astro`)), `Mission ${n} is not built yet`);

const hub = read(files.hub);
const m1 = read(files.m1);
const m2 = read(files.m2);
const progress = read(files.progress);
const data = read(files.data);
const p3progress = read(files.phase3Progress);

for (const token of ['PROJECT NEW HORIZON','JCEC STRUCTURAL SYSTEMS DIVISION','Read the Building Site','Trace the Forces','Choose What Holds','Keep It Standing','Authorize New Horizon']) check(has(hub, token), `Hub includes: ${token}`);
for (const token of ['Requirements ✓','Forces ●','Materials ○','Stability ○','Authorization ○']) check(has(hub, token), `Hub progress includes: ${token}`);
check(hub.includes('jabberwocky-phase4-posting'), 'Phase 4 uses separate posting state');
for (const oldKey of ['jabberwocky-phase1-posting','jabberwocky-phase2-posting','jabberwocky-phase3-posting']) check(!hub.includes(`localStorage.setItem('${oldKey}'`), `Phase 4 does not overwrite ${oldKey}`);
check((hub.match(/status:'COMPLETE'/g) || []).length === 1, 'Mission 1 is complete');
check((hub.match(/status:'CURRENT'/g) || []).length === 1, 'Only Mission 2 is current');
check((hub.match(/status:'UPCOMING'/g) || []).length === 3, 'Missions 3–5 remain upcoming');
check(hub.includes('phase-4/mission-1/') && hub.includes('phase-4/mission-2/'), 'Hub releases Missions 1 and 2');
check(!hub.includes('phase-4/mission-3/') && !hub.includes('phase-4/mission-4/') && !hub.includes('phase-4/mission-5/'), 'Hub keeps Missions 3–5 locked');
for (const token of ['ENVIRONMENT','THERMAL REQUIREMENT','ECOLOGICAL RESTRICTION','SITE / LOAD WARNING']) check(has(hub, token), `Hub structural briefing includes: ${token}`);
check(has(hub, 'do not need to reopen old archives'), 'Hub prevents archive overload');

check(has(p3progress, 'Continue to Phase 4 → Project New Horizon'), 'Phase 3 conclusion hands forward to Project New Horizon');
for (const token of ['Mission 1 of 5','New Horizon Requirements Card','What are the three most important performance requirements for our structure?']) check(has(m1, token), `Mission 1 still includes: ${token}`);
check(has(progress, 'Next Mission → Trace the Forces'), 'Mission 1 receives Next Mission → Trace the Forces');
check(progress.includes('phase-4/mission-2/') && !progress.includes('phase-4/mission-3/'), 'Progress navigation releases Mission 2 only');

for (const token of ['MISSION 2 OF 5','TRACE THE','What forces will our structure need to resist?','3 classes × 45 minutes','Your Mission','Learn the Science','Investigate','Make a Decision','Record It']) check(has(m2, token), `Mission 2 includes: ${token}`);
check(m2.includes('jabberwocky-phase4-posting'), 'Mission 2 carries Phase 4 posting');
check(!m2.includes('<select'), 'Mission 2 does not ask students to choose continent again');
check(has(m2, 'do not need to reopen Mission 1'), 'Mission 2 avoids Mission 1 archive burden');

for (const token of ['MASS','grams (g)','kilograms (kg)','FORCE / LOAD','newtons (N)','not the same measurement']) check(has(m2, token), `Mission 2 mass/force safeguard includes: ${token}`);
for (const forbidden of ['F=mg','9.8 m/s','gravitational acceleration']) check(!has(m2, forbidden), `Mission 2 avoids advanced force math: ${forbidden}`);

for (const token of ['EXTERNAL FORCE / LOAD','INTERNAL FORCE','TENSION','PULL','COMPRESSION','SQUEEZE','SHEARING','SLIDE PAST','BENDING','CURVE UNDER LOAD','FRICTION CAN HELP']) check(has(m2, token), `Mission 2 science includes: ${token}`);
check(has(m2, 'LOAD / EXTERNAL FORCE') && has(m2, 'POSSIBLE DEFORMATION / FAILURE'), 'Mission 2 uses load → internal force → failure model');
check(has(m2, 'Torsion means twisting') && has(m2, 'optional enrichment'), 'Torsion is optional Learn More only');

check(has(m2, 'Force Pattern Stations'), 'Mission 2 uses Force Pattern Stations');
for (const token of ['MEASURE A LOAD','MAKE INTERNAL FORCES VISIBLE','FRICTION HELPS']) check(has(m2, token), `Mission 2 station includes: ${token}`);
for (const token of ['string','sponge','stacked cards','ruler','Do not snap rulers or break materials']) check(has(m2, token), `Mission 2 safe low-material setup includes: ${token}`);
check(has(m2, 'One scale for the whole class is enough'), 'Mission 2 supports one shared force meter');
check(has(m2, 'JCEC fallback load readings'), 'Mission 2 includes fallback mass/force data');
check(has(m2, 'NO PURCHASE REQUIRED'), 'Mission 2 labels no-purchase fallback');
check(has(m2, 'teacher force-measurement demonstration') && has(m2, 'internal-force observation cards'), 'Mission 2 includes complete no-purchase fallback');
check(m2.includes('print-phase4-mission2'), 'Mission 2 includes printable stations/record packet');
for (const token of ['LOAD / ACTION','INTERNAL FORCE','EVIDENCE','POSSIBLE FAILURE']) check(has(m2, token), `Mission 2 compact evidence routine includes: ${token}`);

for (const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) check(data.includes(`id: '${continent}'`), `Phase 4 data includes ${continent}`);
check((data.match(/mission2Clues: \[/g) || []).length === 8, 'All eight continents have Mission 2 force/load clues');
for (const token of ['snow','heavy rainfall','storm-season','scarce fresh water','long storms','open prairie','severe winter','saturated ground']) check(has(data, token), `Mission 2 clues preserve established canon: ${token}`);
for (const forbidden of ['earthquake','tsunami','hurricane','volcano','grid failure','power failure','wind speed','soil capacity']) check(!has(data, forbidden), `Mission 2 does not invent unsupported hazard/data: ${forbidden}`);
check(has(data, 'foundation design will be investigated later in Mission 4'), 'Mission 2 keeps Gyre foundation science for later');
check(has(data, 'Mission 2 does not assume a new flood, storm or other disaster'), 'Mimsy clue avoids invented disaster');

check(has(m2, 'Which force/load problem should JCEC design for first on our continent?'), 'Mission 2 has one main decision');
for (const token of ['The important load/force is','It may create','If the structure cannot resist it']) check(has(m2, token), `Mission 2 reasoning scaffold includes: ${token}`);
check(has(m2, 'Structural Force Map'), 'Mission 2 ends with Structural Force Map');
for (const token of ['External load arrows','Internal-force labels','Friction example if relevant','Circled priority load/force','Likely failure if ignored']) check(has(m2, token), `Structural Force Map includes: ${token}`);
check(has(m2, 'SCIENCE DIAGRAM · NOT AN ART PROJECT'), 'Structural Force Map is explicitly science, not art');
check(has(m2, 'Why can the same external load create different internal forces in different parts of a structure?'), 'Mission 2 includes approved reflection');
check(has(m2, 'Mission 2 is finished when:'), 'Mission 2 has explicit finish line');
check(has(m2, 'Mission 3 — Choose What Holds remains locked.'), 'Mission 3 remains locked on Mission 2 page');
check(!m2.includes('phase-4/mission-3/'), 'Mission 2 creates no Mission 3 route');

if (failures.length) {
  console.error(`\nJabberwocky Phase 4 readiness audit failed: ${failures.length} issue(s).`);
  failures.forEach((failure) => console.error(`  ✗ ${failure}`));
  process.exit(1);
}

console.log(`\nJabberwocky Phase 4 readiness audit: ${passes.length} checks passed.`);
passes.forEach((pass) => console.log(`  ✓ ${pass}`));
console.log('\nPhase 4 now releases Mission 2 only: mass-vs-force safeguard, four required internal-force patterns, friction application, shared/no-purchase force stations, eight canon-grounded continent cases, one Structural Force Map, and Missions 3–5 locked.');
