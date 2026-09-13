import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const passes = [];
const failures = [];
const rel = (p) => path.join(root, p);
const read = (p) => fs.readFileSync(rel(p), 'utf8');
const check = (condition, message) => condition ? passes.push(message) : failures.push(message);
const has = (text, token) => text.toLowerCase().includes(token.toLowerCase());

const hubPath = 'src/pages/courses/grade-7-science/jabberwocky/phase-3/index.astro';
const mission1Path = 'src/pages/courses/grade-7-science/jabberwocky/phase-3/mission-1/index.astro';
const progressPath = 'src/components/JcecPhase3Progress.astro';
const dataPath = 'src/data/jabberwockyPhase3.ts';
const phase2ProgressPath = 'src/components/JcecPhase2Progress.astro';

for (const file of [hubPath, mission1Path, progressPath, dataPath, phase2ProgressPath]) check(fs.existsSync(rel(file)), `exists: ${file}`);

const hub = read(hubPath);
const mission1 = read(mission1Path);
const progress = read(progressPath);
const data = read(dataPath);
const phase2Progress = read(phase2ProgressPath);

check(has(hub, 'SURVIVING JABBERWOCKY'), 'Phase 3 hub includes approved phase title');
check(has(hub, 'JCEC THERMAL SURVIVAL DIVISION'), 'Phase 3 hub identifies Thermal Survival Division');
check(hub.includes('jabberwocky-phase3-posting'), 'Phase 3 stores a separate posting state');
check(!hub.includes("localStorage.setItem('jabberwocky-phase2-posting'"), 'Phase 3 does not overwrite Phase 2 posting state');
for (const title of ['Read the Thermal Warning','Follow the Heat','Hold the Temperature','Control the Habitat','Survive Without Wasting It']) check(has(hub, title), `Phase 3 hub includes mission: ${title}`);
check(hub.includes("status: 'CURRENT'") && hub.includes("status: 'UPCOMING'"), 'Phase 3 hub keeps Mission 1 current and later missions upcoming');
check(hub.includes('phase-3/mission-1/'), 'Phase 3 hub links to Mission 1');
for (const n of [2,3,4,5]) check(!hub.includes(`phase-3/mission-${n}/`), `Phase 3 hub does not build/link Mission ${n} yet`);
for (const token of ['ENVIRONMENT','RESOURCE','ECOSYSTEM WARNING','DEVELOPMENT RESTRICTION']) check(hub.includes(token), `Previous Team Thermal Briefing includes: ${token}`);
check(has(hub, 'You do not need the old archives'), 'Phase 3 continuity avoids archive-management burden');
for (const token of ['Temperature','Heat Transfer','Thermal Barrier','Habitat Control','Sustainable Survival']) check(progress.includes(token), `Phase 3 progress includes: ${token}`);

for (const token of ['Your Mission','Learn the Science','Investigate','Make a Decision','Record It']) check(mission1.includes(token), `Mission 1 includes five-step structure: ${token}`);
check(mission1.includes('jabberwocky-phase3-posting'), 'Mission 1 carries Phase 3 posting automatically');
check(has(mission1, 'What is temperature actually telling us?'), 'Mission 1 includes approved essential question');
check(has(mission1, '3 classes × 45 minutes'), 'Mission 1 is designed for three core classes');
for (const token of ['TEMPERATURE','THERMAL ENERGY','HEATING &amp; COOLING','MATTER RESPONDS']) check(mission1.includes(token), `Mission 1 includes core science idea: ${token}`);
check(has(mission1, 'average kinetic energy'), 'Mission 1 connects temperature to average kinetic energy');
check(has(mission1, 'not the same thing'), 'Mission 1 distinguishes temperature from thermal energy');
check(has(mission1, '60°C') && has(mission1, '40°C'), 'Mission 1 includes small-hot versus large-warm comparison');
for (const token of ['Read the scale','Check the unit','Read at eye level','Wait for the reading to stabilize','Record the number and unit','Handle the thermometer safely']) check(has(mission1, token), `Mission 1 thermometer skill includes: ${token}`);
check(!has(mission1, 'Fahrenheit') && !has(mission1, 'Kelvin'), 'Mission 1 does not add Fahrenheit/Kelvin conversion content');
check(has(mission1, 'Thermal Change Investigation'), 'Mission 1 includes main Thermal Change Investigation');
for (const token of ['room-temperature water','cool water','warm water']) check(has(mission1, token), `Mission 1 measures: ${token}`);
check(has(mission1, 'No boiling water'), 'Mission 1 includes explicit hot-water safety limit');
for (const token of ['ice melting','condensing','Expansion / contraction','Liquid expansion','Solid expansion']) check(has(mission1, token), `Mission 1 includes matter-response evidence: ${token}`);
check(has(mission1, 'liquid thermometer') && has(mission1, 'expands'), 'Mission 1 connects expansion to a temperature-responsive device');
check(has(mission1, 'If equipment is limited'), 'Mission 1 includes shared-station/no-purchase fallback');
check(has(mission1, 'shared thermometers'), 'Mission 1 defaults to shared thermometer access');
check(has(mission1, '3 CLUES ONLY'), 'Mission 1 limits continent thermal case to three clues');
check(has(mission1, 'What is the biggest thermal condition JCEC must prepare for on your continent?'), 'Mission 1 has one main team decision');
for (const token of ['Losing heat too quickly','Gaining too much heat','Large temperature change','Prolonged cold']) check(has(mission1, token), `Mission 1 includes helpful non-mandatory category: ${token}`);
check(has(mission1, 'Thermal Risk Card'), 'Mission 1 ends with Thermal Risk Card');
check(has(mission1, 'Why is temperature useful evidence, but not the same thing as thermal energy?'), 'Mission 1 includes approved individual reflection');
check(has(mission1, 'Mission 2 — Follow the Heat — is coming next. Do not start it yet.'), 'Mission 2 remains locked/upcoming');
check(mission1.includes('print-phase3-mission1'), 'Mission 1 includes printable investigation and record packet');

for (const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) check(data.includes(`id: '${continent}'`), `Phase 3 data includes continent: ${continent}`);
for (const plant of ['Skyroot','Rainspout Tree','Storm Palm','Reservoir Thorn','Ember Moss','Goldstem Grain','Ironwood','Floatroot']) check(data.includes(plant), `Phase 3 inherited resource evidence preserves: ${plant}`);
check(data.includes('40°C') && data.includes('−5°C'), 'Slithy Toves preserves established day-night temperature range');
check(data.includes('−30°C') && data.includes('+30°C'), 'Bandersnatch preserves established seasonal temperature range');
check(data.includes('−40°C') && data.includes('+24°C'), 'Gimble preserves established seasonal temperature range');
check(!has(data, 'power failure') && !has(data, 'grid failure'), 'Manxome does not invent a power-grid failure canon');
check(has(data, 'Do not drain') || has(data, 'do not drain'), 'Mimsy preserves wetland-development restriction');
check(has(phase2Progress, 'Continue to Phase 3 → Surviving Jabberwocky'), 'Phase 2 conclusion now hands students to Phase 3');

if (failures.length) {
  console.error(`\nJabberwocky Phase 3 readiness audit failed: ${failures.length} issue(s).`);
  failures.forEach((failure) => console.error(`  ✗ ${failure}`));
  process.exit(1);
}

console.log(`\nJabberwocky Phase 3 readiness audit: ${passes.length} checks passed.`);
passes.forEach((pass) => console.log(`  ✓ ${pass}`));
console.log('\nPhase 3 hub + Mission 1 prototype preserve separate state, four-item inherited evidence, low-material thermal investigation, Grade 7 temperature/particle science, continent canon, printable records, and locked Missions 2–5.');
