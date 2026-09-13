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
  hub: 'src/pages/courses/grade-7-science/jabberwocky/phase-3/index.astro',
  m1: 'src/pages/courses/grade-7-science/jabberwocky/phase-3/mission-1/index.astro',
  m2: 'src/pages/courses/grade-7-science/jabberwocky/phase-3/mission-2/index.astro',
  m3: 'src/pages/courses/grade-7-science/jabberwocky/phase-3/mission-3/index.astro',
  progress: 'src/components/JcecPhase3Progress.astro',
  data: 'src/data/jabberwockyPhase3.ts',
  phase2Progress: 'src/components/JcecPhase2Progress.astro'
};

for (const file of Object.values(files)) check(fs.existsSync(rel(file)), `exists: ${file}`);
const hub = read(files.hub);
const m1 = read(files.m1);
const m2 = read(files.m2);
const m3 = read(files.m3);
const progress = read(files.progress);
const data = read(files.data);
const phase2Progress = read(files.phase2Progress);

// Hub, continuity and release gate.
for (const token of ['SURVIVING JABBERWOCKY','JCEC THERMAL SURVIVAL DIVISION','Read the Thermal Warning','Follow the Heat','Hold the Temperature','Control the Habitat','Survive Without Wasting It']) check(has(hub, token), `hub includes: ${token}`);
check(hub.includes('jabberwocky-phase3-posting'), 'Phase 3 uses separate posting state');
check(!hub.includes("localStorage.setItem('jabberwocky-phase2-posting'"), 'Phase 3 does not overwrite Phase 2 state');
check((hub.match(/status: 'COMPLETE'/g) || []).length >= 2, 'Hub marks Missions 1–2 complete');
check(hub.includes("number: 3") && hub.includes("status: 'CURRENT'"), 'Hub marks Mission 3 current');
for (const n of [1,2,3]) check(hub.includes(`phase-3/mission-${n}/`), `Hub links Mission ${n}`);
for (const n of [4,5]) check(!hub.includes(`phase-3/mission-${n}/`), `Hub keeps Mission ${n} unreleased`);
for (const token of ['ENVIRONMENT','RESOURCE','ECOSYSTEM WARNING','DEVELOPMENT RESTRICTION']) check(hub.includes(token), `Thermal briefing includes ${token}`);
check(has(hub, 'Temperature ✓') && has(hub, 'Heat Transfer ✓') && has(hub, 'Thermal Barrier ●'), 'Hub progress shows Missions 1–2 done and Mission 3 current');
check(has(progress, 'Next Mission → Follow the Heat') && has(progress, 'Next Mission → Hold the Temperature'), 'Progress component provides approved next-mission links');
check(progress.includes('phase-3/mission-3/') && !progress.includes('phase-3/mission-4/'), 'Navigation releases Mission 3 but not Mission 4');

// Shared student structure and state carry-forward.
for (const [name, text] of [['Mission 1',m1],['Mission 2',m2],['Mission 3',m3]]) {
  for (const token of ['Your Mission','Learn the Science','Investigate','Make a Decision','Record It']) check(text.includes(token), `${name} includes step: ${token}`);
  check(text.includes('jabberwocky-phase3-posting'), `${name} carries Phase 3 posting`);
}
check(!m2.includes('<select') && !m3.includes('<select'), 'Missions 2–3 do not ask students to choose continent again');

// Mission 1 approved foundation.
for (const token of ['What is temperature actually telling us?','TEMPERATURE','THERMAL ENERGY','average kinetic energy','Thermal Change Investigation','Thermal Risk Card','No boiling water','print-phase3-mission1']) check(has(m1, token), `Mission 1 keeps approved element: ${token}`);

// Mission 2 approved heat-transfer experience.
for (const token of ['How does thermal energy get from one place to another?','CONDUCTION','CONVECTION','RADIATION','liquids and gases','Radiation does not need matter between the source and receiver','Heat Pathway Stations','No-purchase fallback','Habitat Heat Map','science diagram, not an art project','print-phase3-mission2']) check(has(m2, token), `Mission 2 keeps approved element: ${token}`);

// Mission 3 science and cognitive load.
for (const token of ['Mission 3 of 5','How can materials and design slow unwanted thermal-energy transfer?','4 classes × 45 minutes','THERMAL CONDUCTOR','THERMAL INSULATOR','TRAPPED AIR CAN HELP','DESIGN MATTERS']) check(has(m3, token), `Mission 3 includes core element: ${token}`);
check(has(m3, 'does not create heat or cold'), 'Mission 3 prevents insulation misconception');
check(has(m3, 'slows thermal energy leaving') && has(m3, 'slow thermal energy entering'), 'Mission 3 explains barriers work in either direction');
check(has(m3, 'Mission 2') && has(m3, 'Habitat Heat Map') && has(m3, 'without recreating it'), 'Mission 3 reuses Mission 2 evidence without paperwork burden');

// Mission 3 fair-test checkpoint.
for (const token of ['Thermal Barrier Fair Test','Which material slows temperature change most effectively','Barrier material','Temperature change','Container · water amount · starting temperature · coverage · time','CONTROL','BARRIER','about 10 minutes','starting temperature − ending temperature','class bar graph','Did any result not fit the overall pattern?']) check(has(m3, token), `Mission 3 fair-test includes: ${token}`);
check(has(m3, 'Do not mix several design changes into the test itself'), 'Mission 3 protects fair-test validity');
for (const token of ['identical reused cups/containers','warm water','shared thermometers','paper / cardboard / fabric','LOW-MATERIAL CLASSROOM MODE','reduces the number of thermometers and materials needed']) check(has(m3, token), `Mission 3 low-material system includes: ${token}`);
check(has(m3, 'No-purchase fallback') && has(m3, 'JCEC backup dataset'), 'Mission 3 includes no-purchase data fallback');
check(has(m3, 'not a universal ranking of materials'), 'Backup data is labelled as model evidence');
check(has(m3, 'Warm water only') && has(m3, 'no boiling water'), 'Mission 3 includes safe warm-water rule');
check(m3.includes('print-phase3-mission3'), 'Mission 3 includes printable investigation/recommendation packet');

// Mission 3 continent application, reasoning and assessment.
check(has(m3, '3 CLUES ONLY'), 'Mission 3 limits continent reading to three clues');
check(has(m3, 'The same material does not automatically solve every thermal problem'), 'Mission 3 avoids a universal-answer misconception');
check(has(m3, 'Which material/design strategy should protect our habitat first?'), 'Mission 3 has one main team decision');
for (const token of ['CLAIM','DATA','THERMAL EXPLANATION','LIMITATION / UNCERTAINTY']) check(m3.includes(token), `Mission 3 reasoning includes ${token}`);
check(has(m3, 'Thermal Barrier Recommendation'), 'Mission 3 has one Team Record');
check(has(m3, 'SCIENCE REASONING CHECKPOINT'), 'Mission 3 is the stronger reasoning checkpoint');
check(has(m3, 'fairness of your evidence') && has(m3, 'not decoration'), 'Checkpoint emphasizes evidence/science, not polish');
check(has(m3, 'Why is the thickest-looking material not automatically the best insulator?'), 'Mission 3 includes approved reflection');
check(has(m3, 'Mission 3 is finished when:'), 'Mission 3 has explicit finish line');
check(has(m3, 'Mission 4 — Control the Habitat — is upcoming and locked'), 'Mission 4 remains locked');
check(!m3.includes('phase-3/mission-4/'), 'Mission 3 does not create Mission 4 route');

// Canon and continent cases.
for (const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) check(data.includes(`id: '${continent}'`), `Phase 3 data includes ${continent}`);
for (const plant of ['Skyroot','Rainspout Tree','Storm Palm','Reservoir Thorn','Ember Moss','Goldstem Grain','Ironwood','Floatroot']) check(data.includes(plant), `Inherited resource canon preserves ${plant}`);
check((data.match(/mission2Clues: \[/g) || []).length === 8, 'All eight continents retain Mission 2 clues');
check((data.match(/mission3Clues: \[/g) || []).length === 8, 'All eight continents include Mission 3 clues');
check(data.includes('40°C') && data.includes('−5°C'), 'Slithy Toves preserves established temperatures');
check(data.includes('−30°C') && data.includes('+30°C'), 'Bandersnatch preserves established temperatures');
check(data.includes('−40°C') && data.includes('+24°C'), 'Gimble preserves established temperatures');
check(!has(data, 'power failure') && !has(data, 'grid failure'), 'Manxome does not invent grid-failure canon');
check(has(data, 'do not drain'), 'Mimsy preserves wetland restriction');
check(has(phase2Progress, 'Continue to Phase 3 → Surviving Jabberwocky'), 'Phase 2 still hands students to Phase 3');

if (failures.length) {
  console.error(`\nJabberwocky Phase 3 readiness audit failed: ${failures.length} issue(s).`);
  failures.forEach((failure) => console.error(`  ✗ ${failure}`));
  process.exit(1);
}

console.log(`\nJabberwocky Phase 3 readiness audit: ${passes.length} checks passed.`);
passes.forEach((pass) => console.log(`  ✓ ${pass}`));
console.log('\nPhase 3 hub + Missions 1–3 preserve separate state, low-material Grade 7 thermal investigations, fair-test reasoning, continent canon, printable records, and locked Missions 4–5.');
