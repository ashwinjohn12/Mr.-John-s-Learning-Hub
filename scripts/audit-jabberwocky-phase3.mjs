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
const mission2Path = 'src/pages/courses/grade-7-science/jabberwocky/phase-3/mission-2/index.astro';
const mission3Path = 'src/pages/courses/grade-7-science/jabberwocky/phase-3/mission-3/index.astro';
const progressPath = 'src/components/JcecPhase3Progress.astro';
const dataPath = 'src/data/jabberwockyPhase3.ts';
const phase2ProgressPath = 'src/components/JcecPhase2Progress.astro';

for (const file of [hubPath, mission1Path, mission2Path, mission3Path, progressPath, dataPath, phase2ProgressPath]) check(fs.existsSync(rel(file)), `exists: ${file}`);

const hub = read(hubPath);
const mission1 = read(mission1Path);
const mission2 = read(mission2Path);
const mission3 = read(mission3Path);
const progress = read(progressPath);
const data = read(dataPath);
const phase2Progress = read(phase2ProgressPath);

// Phase 3 hub and continuity.
check(has(hub, 'SURVIVING JABBERWOCKY'), 'Phase 3 hub includes approved phase title');
check(has(hub, 'JCEC THERMAL SURVIVAL DIVISION'), 'Phase 3 hub identifies Thermal Survival Division');
check(hub.includes('jabberwocky-phase3-posting'), 'Phase 3 stores a separate posting state');
check(!hub.includes("localStorage.setItem('jabberwocky-phase2-posting'"), 'Phase 3 does not overwrite Phase 2 posting state');
for (const title of ['Read the Thermal Warning','Follow the Heat','Hold the Temperature','Control the Habitat','Survive Without Wasting It']) check(has(hub, title), `Phase 3 hub includes mission: ${title}`);
check(hub.includes("number: 1") && hub.includes("number: 2") && (hub.match(/status: 'COMPLETE'/g) || []).length >= 2, 'Phase 3 hub marks Missions 1–2 complete');
check(hub.includes("number: 3") && hub.includes("status: 'CURRENT'"), 'Phase 3 hub marks Mission 3 current');
for (const n of [1,2,3]) check(hub.includes(`phase-3/mission-${n}/`), `Phase 3 hub links to Mission ${n}`);
for (const n of [4,5]) check(!hub.includes(`phase-3/mission-${n}/`), `Phase 3 hub does not build/link Mission ${n} yet`);
for (const token of ['ENVIRONMENT','RESOURCE','ECOSYSTEM WARNING','DEVELOPMENT RESTRICTION']) check(hub.includes(token), `Previous Team Thermal Briefing includes: ${token}`);
check(has(hub, 'You do not need the old archives'), 'Phase 3 continuity avoids archive-management burden');
check(has(hub, 'Temperature ✓') && has(hub, 'Heat Transfer ✓') && has(hub, 'Thermal Barrier ●') && has(hub, 'Habitat Control ○'), 'Phase 3 hub visibly shows Missions 1–2 complete, Mission 3 current and later missions upcoming');
for (const token of ['Temperature','Heat Transfer','Thermal Barrier','Habitat Control','Sustainable Survival']) check(progress.includes(token), `Phase 3 progress includes: ${token}`);
check(has(progress, 'Next Mission → Follow the Heat'), 'Mission 1 receives clear Mission 2 navigation');
check(has(progress, 'Next Mission → Hold the Temperature'), 'Mission 2 receives clear Mission 3 navigation');
check(progress.includes('phase-3/mission-2/') && progress.includes('phase-3/mission-3/'), 'Phase 3 progress navigation links approved Missions 1→2→3');
check(!progress.includes('phase-3/mission-4/'), 'Phase 3 progress does not release Mission 4 yet');

// Mission 1 remains the approved temperature foundation.
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
check(has(mission1, 'If equipment is limited'), 'Mission 1 includes shared-station/no-purchase fallback');
check(has(mission1, 'Thermal Risk Card'), 'Mission 1 ends with Thermal Risk Card');
check(mission1.includes('print-phase3-mission1'), 'Mission 1 includes printable investigation and record packet');

// Mission 2: one question, three transfer pathways.
for (const token of ['Your Mission','Learn the Science','Investigate','Make a Decision','Record It']) check(mission2.includes(token), `Mission 2 includes five-step structure: ${token}`);
check(mission2.includes('jabberwocky-phase3-posting'), 'Mission 2 automatically carries the existing Phase 3 posting');
check(!mission2.includes('<select'), 'Mission 2 does not ask students to choose their continent again');
check(!has(mission2, 'PREVIOUS TEAM THERMAL BRIEFING'), 'Mission 2 does not repeat the full inherited briefing');
check(has(mission2, 'Mission 2 of 5'), 'Mission 2 clearly identifies its place in the phase');
check(has(mission2, 'How does thermal energy get from one place to another?'), 'Mission 2 includes approved essential question');
check(has(mission2, '3 classes × 45 minutes'), 'Mission 2 is designed for three core classes');
for (const token of ['CONDUCTION','CONVECTION','RADIATION']) check(mission2.includes(token), `Mission 2 includes heat-transfer pathway: ${token}`);
check(has(mission2, 'It does not happen only in solids'), 'Mission 2 does not imply conduction occurs only in solids');
check(has(mission2, 'Fluids include') && has(mission2, 'liquids and gases'), 'Mission 2 explicitly teaches that fluids include liquids and gases');
check(has(mission2, 'Radiation does not need matter between the source and receiver'), 'Mission 2 states that radiation does not require matter between source and receiver');
check(has(mission2, 'Heat Pathway Stations'), 'Mission 2 includes the main Heat Pathway Stations investigation');
check(has(mission2, 'Where did thermal energy move?') && has(mission2, 'What evidence shows that it moved?'), 'All Mission 2 stations use the same evidence questions');
check(has(mission2, 'No-purchase fallback'), 'Mission 2 includes explicit no-purchase fallback');
check(has(mission2, 'Habitat Heat Map'), 'Mission 2 ends with the Habitat Heat Map');
check(has(mission2, 'science diagram, not an art project'), 'Mission 2 clearly frames the Habitat Heat Map as a science diagram');
check(mission2.includes('print-phase3-mission2'), 'Mission 2 includes printable station sheet and Habitat Heat Map');

// Mission 3: thermal barrier science, fair testing and checkpoint reasoning.
for (const token of ['Your Mission','Learn the Science','Investigate','Make a Decision','Record It']) check(mission3.includes(token), `Mission 3 includes five-step structure: ${token}`);
check(mission3.includes('jabberwocky-phase3-posting'), 'Mission 3 automatically carries the existing Phase 3 posting');
check(!mission3.includes('<select'), 'Mission 3 does not ask students to choose their continent again');
check(has(mission3, 'Mission 3 of 5'), 'Mission 3 clearly identifies its place in the phase');
check(has(mission3, 'How can materials and design slow unwanted thermal-energy transfer?'), 'Mission 3 includes approved essential question');
check(has(mission3, '4 classes × 45 minutes'), 'Mission 3 is designed for four core classes');
check(has(mission3, 'Mission 2') && has(mission3, 'Habitat Heat Map') && has(mission3, 'do not recreate'), 'Mission 3 reuses Mission 2 evidence without archive/paperwork burden');
for (const token of ['THERMAL CONDUCTOR','THERMAL INSULATOR','TRAPPED AIR CAN HELP','DESIGN MATTERS']) check(mission3.includes(token), `Mission 3 includes core barrier idea: ${token}`);
check(has(mission3, 'does not create heat or cold'), 'Mission 3 prevents the misconception that insulation creates heat/cold');
check(has(mission3, 'slows thermal energy leaving') && has(mission3, 'slow thermal energy entering'), 'Mission 3 explains that a barrier slows transfer in either direction');
check(has(mission3, 'coverage, gaps and air spaces'), 'Mission 3 connects material performance to practical design details');

// Mission 3 fair-test design.
check(has(mission3, 'Thermal Barrier Fair Test'), 'Mission 3 includes one main thermal-barrier investigation');
check(has(mission3, 'Which material slows temperature change most effectively'), 'Mission 3 uses a clear testable question');
for (const token of ['Barrier material','Temperature change','Container · water amount · starting temperature · coverage · time']) check(has(mission3, token), `Mission 3 fair-test planner includes: ${token}`);
check(has(mission3, 'CONTROL') && has(mission3, 'BARRIER'), 'Mission 3 uses a matched control and barrier setup');
check(has(mission3, 'same amount of warm water') && has(mission3, 'same amount of time'), 'Mission 3 explicitly controls key variables');
check(has(mission3, 'about 10 minutes'), 'Mission 3 uses a realistic classroom test interval');
check(has(mission3, 'starting temperature − ending temperature'), 'Mission 3 gives a simple temperature-change calculation');
check(has(mission3, 'class bar graph'), 'Mission 3 turns class data into one simple graph');
check(has(mission3, 'Did any result not fit the overall pattern?'), 'Mission 3 explicitly asks students to analyze discrepant data');
check(has(mission3, 'Do not mix several design changes into the test itself'), 'Mission 3 separates fair material testing from later design refinement');

// Mission 3 low-material and safety rules.
for (const token of ['identical reused cups/containers','warm water','shared thermometers','paper / cardboard / fabric']) check(has(mission3, token), `Mission 3 low-material list includes: ${token}`);
check(has(mission3, 'Warm water only') && has(mission3, 'no boiling water'), 'Mission 3 includes explicit thermal safety limit');
check(has(mission3, 'LOW-MATERIAL CLASSROOM MODE'), 'Mission 3 defaults to shared low-material implementation');
check(has(mission3, 'reduces the number of thermometers and materials needed'), 'Mission 3 shared-station mode explicitly reduces equipment burden');
check(has(mission3, 'No-purchase fallback') && has(mission3, 'JCEC backup dataset'), 'Mission 3 includes an explicit no-purchase/data fallback');
check(has(mission3, 'not a universal ranking of materials'), 'Mission 3 labels fallback data as model evidence rather than universal material truth');
check(!has(mission3, 'infrared camera') && !has(mission3, 'thermal imaging'), 'Mission 3 does not require specialty thermal imaging equipment');
check(mission3.includes('print-phase3-mission3'), 'Mission 3 includes printable fair-test and recommendation pages');

// Mission 3 continent application, reasoning and assessment.
check(has(mission3, '3 CLUES ONLY'), 'Mission 3 limits continent barrier case to three clues');
check(has(mission3, 'The same material does not automatically solve every thermal problem'), 'Mission 3 avoids a one-material-fits-all answer');
check(has(mission3, 'Which material/design strategy should protect our habitat first?'), 'Mission 3 has one main team decision');
for (const token of ['CLAIM','DATA','THERMAL EXPLANATION','LIMITATION / UNCERTAINTY']) check(mission3.includes(token), `Mission 3 checkpoint reasoning includes: ${token}`);
check(has(mission3, 'Thermal Barrier Recommendation'), 'Mission 3 ends with one Thermal Barrier Recommendation');
check(has(mission3, 'SCIENCE REASONING CHECKPOINT'), 'Mission 3 is clearly the stronger reasoning checkpoint');
check(has(mission3, 'fairness of your evidence') && has(mission3, 'not decoration'), 'Mission 3 assessment focuses on science/evidence rather than polish');
check(has(mission3, 'Why is the thickest-looking material not automatically the best insulator?'), 'Mission 3 includes approved individual reflection');
check(has(mission3, 'Mission 3 is finished when:'), 'Mission 3 states a clear completion condition');
check(has(mission3, 'Mission 4 — Control the Habitat — is upcoming and locked'), 'Mission 4 remains explicitly locked');
check(!mission3.includes('phase-3/mission-4/'), 'Mission 3 does not create a Mission 4 route');

// Continent canon and Mission 3 barrier cases.
for (const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) check(data.includes(`id: '${continent}'`), `Phase 3 data includes continent: ${continent}`);
for (const plant of ['Skyroot','Rainspout Tree','Storm Palm','Reservoir Thorn','Ember Moss','Goldstem Grain','Ironwood','Floatroot']) check(data.includes(plant), `Phase 3 inherited resource evidence preserves: ${plant}`);
check((data.match(/mission2Clues:/g) || []).length === 9, 'Phase 3 data retains Mission 2 clue field plus eight continent clue sets');
check((data.match(/mission2Clues: \[/g) || []).length === 8, 'All eight continents retain one Mission 2 clue set');
check((data.match(/mission3Clues:/g) || []).length === 9, 'Phase 3 data defines Mission 3 clue field plus eight continent clue sets');
check((data.match(/mission3Clues: \[/g) || []).length === 8, 'All eight continents include exactly one Mission 3 clue set');
check(data.includes('40°C') && data.includes('−5°C'), 'Slithy Toves preserves established day-night temperature range');
check(data.includes('−30°C') && data.includes('+30°C'), 'Bandersnatch preserves established seasonal temperature range');
check(data.includes('−40°C') && data.includes('+24°C'), 'Gimble preserves established seasonal temperature range');
check(!has(data, 'power failure') && !has(data, 'grid failure'), 'Manxome does not invent a power-grid failure canon');
check(has(data, 'Do not drain') || has(data, 'do not drain'), 'Mimsy preserves wetland-development restriction');
check(has(data, 'barrier') && has(data, 'coverage') && has(data, 'gaps'), 'Mission 3 continent cases connect barrier science to real design constraints');
check(has(phase2Progress, 'Continue to Phase 3 → Surviving Jabberwocky'), 'Phase 2 conclusion continues to hand students to Phase 3');

if (failures.length) {
  console.error(`\nJabberwocky Phase 3 readiness audit failed: ${failures.length} issue(s).`);
  failures.forEach((failure) => console.error(`  ✗ ${failure}`));
  process.exit(1);
}

console.log(`\nJabberwocky Phase 3 readiness audit: ${passes.length} checks passed.`);
passes.forEach((pass) => console.log(`  ✓ ${pass}`));
console.log('\nPhase 3 hub + Missions 1–3 preserve separate state, Grade 7 thermal science, low-material fair testing, continent canon, printable records, checkpoint reasoning, one-decision cognitive load, and locked Missions 4–5.');
