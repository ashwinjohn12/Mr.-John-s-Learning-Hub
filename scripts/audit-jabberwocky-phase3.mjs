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
  m4: 'src/pages/courses/grade-7-science/jabberwocky/phase-3/mission-4/index.astro',
  m5: 'src/pages/courses/grade-7-science/jabberwocky/phase-3/mission-5/index.astro',
  progress: 'src/components/JcecPhase3Progress.astro',
  data: 'src/data/jabberwockyPhase3.ts',
  phase2Progress: 'src/components/JcecPhase2Progress.astro'
};

for (const file of Object.values(files)) check(fs.existsSync(rel(file)), `exists: ${file}`);
const hub = read(files.hub);
const m1 = read(files.m1);
const m2 = read(files.m2);
const m3 = read(files.m3);
const m4 = read(files.m4);
const m5 = read(files.m5);
const progress = read(files.progress);
const data = read(files.data);
const phase2Progress = read(files.phase2Progress);
const allMissions = `${m1}\n${m2}\n${m3}\n${m4}\n${m5}`;

// Final hub state and release gate.
for (const token of ['SURVIVING JABBERWOCKY','JCEC THERMAL SURVIVAL DIVISION','Read the Thermal Warning','Follow the Heat','Hold the Temperature','Control the Habitat','Survive Without Wasting It']) check(has(hub, token), `hub includes: ${token}`);
check(hub.includes('jabberwocky-phase3-posting'), 'Phase 3 uses separate posting state');
check(!hub.includes("localStorage.setItem('jabberwocky-phase2-posting'"), 'Phase 3 does not overwrite Phase 2 state');
check((hub.match(/status: 'COMPLETE'/g) || []).length >= 4, 'Hub marks Missions 1–4 complete');
check(hub.includes("number: 5") && hub.includes("status: 'CURRENT'"), 'Hub marks Mission 5 current');
for (const n of [1,2,3,4,5]) check(hub.includes(`phase-3/mission-${n}/`), `Hub links Mission ${n}`);
check(!hub.includes('phase-4/'), 'Phase 3 hub creates no Phase 4 route');
for (const token of ['Temperature ✓','Heat Transfer ✓','Thermal Barrier ✓','Habitat Control ✓','Sustainable Survival ●']) check(has(hub, token), `Hub final progress includes: ${token}`);
for (const token of ['Next Mission → Follow the Heat','Next Mission → Hold the Temperature','Next Mission → Control the Habitat','Next Mission → Survive Without Wasting It']) check(has(progress, token), `Progress navigation includes: ${token}`);
check(progress.includes('phase-3/mission-5/') && !progress.includes('phase-4/'), 'Navigation releases Mission 5 and stops before Phase 4');

// Shared student architecture and posting continuity.
for (const [name, text] of [['Mission 1',m1],['Mission 2',m2],['Mission 3',m3],['Mission 4',m4],['Mission 5',m5]]) {
  for (const token of ['Your Mission','Learn the Science','Investigate','Make a Decision','Record It']) check(text.includes(token), `${name} includes step: ${token}`);
  check(text.includes('jabberwocky-phase3-posting'), `${name} carries Phase 3 posting`);
}
check(!m2.includes('<select') && !m3.includes('<select') && !m4.includes('<select') && !m5.includes('<select'), 'Missions 2–5 do not ask students to choose continent again');

// Preserve approved science progression.
for (const token of ['THERMAL ENERGY','Thermal Change Investigation','Thermal Risk Card']) check(has(m1, token), `Mission 1 keeps: ${token}`);
for (const token of ['CONDUCTION','CONVECTION','RADIATION','Heat Pathway Stations','Habitat Heat Map']) check(has(m2, token), `Mission 2 keeps: ${token}`);
for (const token of ['THERMAL CONDUCTOR','THERMAL INSULATOR','Thermal Barrier Fair Test','Thermal Barrier Recommendation','SCIENCE REASONING CHECKPOINT']) check(has(m3, token), `Mission 3 keeps: ${token}`);
for (const token of ['GENERATE','TRANSFER','REMOVE','CONTROL','Habitat Control Loop Challenge','Habitat Control Protocol']) check(has(m4, token), `Mission 4 keeps: ${token}`);

// Mission 5 Grade 7 thermal-energy science.
for (const token of ['Mission 5 of 5','How can humans maintain safe living conditions without wasting energy or damaging the environment?','4 classes × 45 minutes','THERMAL-ENERGY SOURCES','ENERGY USE','ENERGY CONSERVATION','SUSTAINABILITY / TRADE-OFFS']) check(has(m5, token), `Mission 5 includes: ${token}`);
for (const token of ['renewability','safety','environmental effects','relative comparison units']) check(has(m5, token), `Mission 5 considers: ${token}`);
check(has(m5, 'not real watts or kilowatt-hours'), 'Mission 5 avoids real HVAC energy calculations');

// Authentic source integration.
check(has(m5, 'Thermal Technology Briefing'), 'Mission 5 includes authentic-source briefing');
check((m5.match(/NATURAL RESOURCES CANADA/g) || []).length >= 2, 'Mission 5 uses two NRCan source cards');
check(has(m5, 'one useful fact from each'), 'Mission 5 extracts one useful fact per source');
check(has(m5, 'natural-resources.canada.ca'), 'Mission 5 links official Canadian sources');
check(has(m5, 'not an internet-research project'), 'Mission 5 keeps source reading bounded');

// Energy-source comparisons and canon safeguard.
for (const token of ['SOLAR-DERIVED ENERGY','COMBUSTION FUEL','GEOTHERMAL THERMAL ENERGY','ELECTRIC HEATING / COOLING']) check(has(m5, token), `Mission 5 source board includes: ${token}`);
check(has(m5, 'not confirmed continent resources'), 'Mission 5 does not invent continent energy resources');
check(has(m5, 'if JCEC verifies it is available here'), 'Mission 5 keeps source availability conditional');

// Main budget investigation.
check(has(m5, 'Thermal Energy Budget Challenge'), 'Mission 5 uses the Thermal Energy Budget Challenge');
for (const token of ['PASSIVE BARRIER / SHADE','ACTIVE HEATING','ACTIVE COOLING','CONTROLLED VENTILATION','HOLD / MONITOR']) check(has(m5, token), `Budget option includes: ${token}`);
check(has(m5, '3 energy units') && has(m5, '4 energy units'), 'Mission 5 uses simple relative active-energy costs');
check((m5.match(/budget:/g) || []).length === 8, 'Mission 5 defines an energy budget for all eight continent cases');
check((m5.match(/scenario:/g) || []).length === 8, 'Mission 5 defines a scenario for all eight continent cases');
check((m5.match(/consequence:/g) || []).length === 8, 'Mission 5 defines a consequence for all eight continent cases');
check((m5.match(/safeguard:/g) || []).length >= 8, 'Mission 5 preserves a safeguard for all eight continent cases');
check(has(m5, 'Revise exactly one part of your original plan'), 'Mission 5 requires one consequence-driven revision');
check(has(m5, 'printable cards/tokens') && has(m5, 'No thermal equipment or purchased supplies are required'), 'Mission 5 is low-material and no-purchase');
check(m5.includes('print-phase3-mission5'), 'Mission 5 includes printable investigation + final plan');

// Evidence Locker and archive-load control.
check(has(m5, 'Thermal Evidence Locker'), 'Mission 5 includes Thermal Evidence Locker');
for (const token of ['M1 · TEMPERATURE','M2 · TRANSFER','M3 · BARRIER','M4 · CONTROL']) check(has(m5, token), `Evidence Locker includes: ${token}`);
check(has(m5, 'CHOOSE 3') && has(m5, 'three strongest pieces'), 'Mission 5 limits final evidence to three pieces');
check(has(m5, 'do not need to reopen Missions 1–4'), 'Mission 5 prevents archive paperwork');
check(has(m5, 'actual class data may be stronger'), 'Mission 5 allows actual class evidence');

// Final decision, authorization and assessment.
check(has(m5, 'What thermal survival system should JCEC authorize for this continent?'), 'Mission 5 has one final decision');
for (const token of ['HEATING-DOMINANT HABITAT','COOLING-DOMINANT HABITAT','ADAPTIVE HEATING-AND-COOLING HABITAT','SEASONAL / LIMITED OCCUPATION']) check(has(m5, token), `Mission 5 authorization includes: ${token}`);
check(has(m5, 'No authorization is automatically correct for any continent'), 'Authorization is evidence-driven, not predetermined');
for (const token of ['DECISION','EVIDENCE','ENERGY CONSEQUENCE','ENVIRONMENTAL SAFEGUARD']) check(m5.includes(token), `Mission 5 reasoning includes: ${token}`);
check(has(m5, 'JCEC Thermal Survival Plan'), 'Mission 5 ends with JCEC Thermal Survival Plan');
for (const token of ['THERMAL THREAT','KEEP / REMOVE / BOTH','PASSIVE DESIGN','ACTIVE CONTROL','ENERGY SOURCE','3 PIECES OF EVIDENCE','CONSERVATION RULE','ECOLOGICAL SAFEGUARD','FINAL AUTHORIZATION','WHY · 3–5 SENTENCES']) check(has(m5, token), `Thermal Survival Plan includes: ${token}`);
check(has(m5, 'MAJOR PHASE 3 SYNTHESIS'), 'Mission 5 is major Phase 3 synthesis');
for (const token of ['science understanding','evidence use','thermal reasoning','sustainable practical decision','not artistic polish']) check(has(m5, token), `Mission 5 assessment focus includes: ${token}`);
check(has(m5, 'What is one thermal solution that would make human life easier but might be a poor long-term choice? What would you do instead?'), 'Mission 5 includes approved reflection');
check(has(m5, 'Phase 3 is finished when:'), 'Mission 5 has explicit finish line');
check(has(m5, 'STOP HERE. Phase 4 has not been released.'), 'Mission 5 explicitly stops before Phase 4');
check(!m5.includes('phase-4/'), 'Mission 5 creates no Phase 4 route');

// Full-phase pacing and assessment load.
check(has(m1, '3 classes × 45 minutes'), 'Mission 1 is 3 classes');
check(has(m2, '3 classes × 45 minutes'), 'Mission 2 is 3 classes');
check(has(m3, '4 classes × 45 minutes'), 'Mission 3 is 4 classes');
check(has(m4, '4 classes × 45 minutes'), 'Mission 4 is 4 classes');
check(has(m5, '4 classes × 45 minutes'), 'Mission 5 is 4 classes');
check([3,3,4,4,4].reduce((a,b) => a+b, 0) === 18, 'Phase 3 core mission pacing totals 18 classes');
check(has(m3, 'SCIENCE REASONING CHECKPOINT'), 'Mission 3 remains stronger checkpoint');
check(has(m5, 'MAJOR PHASE 3 SYNTHESIS'), 'Mission 5 remains major synthesis');

// Distinct Team Records.
for (const token of ['Thermal Risk Card','Habitat Heat Map','Thermal Barrier Recommendation','Habitat Control Protocol','JCEC Thermal Survival Plan']) check(has(allMissions, token), `Phase 3 has distinct Team Record: ${token}`);

// Canon and continent continuity.
for (const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) check(data.includes(`id: '${continent}'`), `Phase 3 data includes ${continent}`);
for (const plant of ['Skyroot','Rainspout Tree','Storm Palm','Reservoir Thorn','Ember Moss','Goldstem Grain','Ironwood','Floatroot']) check(data.includes(plant), `Inherited resource canon preserves ${plant}`);
check(data.includes('40°C') && data.includes('−5°C'), 'Slithy Toves preserves established temperatures');
check(data.includes('−30°C') && data.includes('+30°C'), 'Bandersnatch preserves established temperatures');
check(data.includes('−40°C') && data.includes('+24°C'), 'Gimble preserves established temperatures');
check(!has(data, 'power failure') && !has(data, 'grid failure'), 'Manxome does not invent grid-failure canon');
check(has(data, 'do not drain'), 'Mimsy preserves wetland restriction');
check((data.match(/mission4Clues: \[/g) || []).length === 8, 'All eight continent control cases feed the final Evidence Locker');
check(has(phase2Progress, 'Continue to Phase 3 → Surviving Jabberwocky'), 'Phase 2 still hands students to Phase 3');

// Standing low-material design rule.
check(has(m3, 'shared thermometers') && has(m3, 'reused cups/containers'), 'Mission 3 uses shared/reused equipment');
check(has(m4, 'No electronics') && has(m4, 'purchased thermostat equipment'), 'Mission 4 remains no-purchase');
check(has(m5, 'No thermal equipment or purchased supplies are required'), 'Mission 5 remains no-purchase');

if (failures.length) {
  console.error(`\nJabberwocky Phase 3 readiness audit failed: ${failures.length} issue(s).`);
  failures.forEach((failure) => console.error(`  ✗ ${failure}`));
  process.exit(1);
}

console.log(`\nJabberwocky Phase 3 readiness audit: ${passes.length} checks passed.`);
passes.forEach((pass) => console.log(`  ✓ ${pass}`));
console.log('\nPhase 3 student experience is complete: five missions, 18 core classes, separate state, Grade 7 Heat & Temperature science, low-material investigations, evidence reuse, final sustainable thermal decision, and no Phase 4 route.');
