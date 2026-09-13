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
const progressPath = 'src/components/JcecPhase3Progress.astro';
const dataPath = 'src/data/jabberwockyPhase3.ts';
const phase2ProgressPath = 'src/components/JcecPhase2Progress.astro';

for (const file of [hubPath, mission1Path, mission2Path, progressPath, dataPath, phase2ProgressPath]) check(fs.existsSync(rel(file)), `exists: ${file}`);

const hub = read(hubPath);
const mission1 = read(mission1Path);
const mission2 = read(mission2Path);
const progress = read(progressPath);
const data = read(dataPath);
const phase2Progress = read(phase2ProgressPath);

// Phase 3 hub and continuity.
check(has(hub, 'SURVIVING JABBERWOCKY'), 'Phase 3 hub includes approved phase title');
check(has(hub, 'JCEC THERMAL SURVIVAL DIVISION'), 'Phase 3 hub identifies Thermal Survival Division');
check(hub.includes('jabberwocky-phase3-posting'), 'Phase 3 stores a separate posting state');
check(!hub.includes("localStorage.setItem('jabberwocky-phase2-posting'"), 'Phase 3 does not overwrite Phase 2 posting state');
for (const title of ['Read the Thermal Warning','Follow the Heat','Hold the Temperature','Control the Habitat','Survive Without Wasting It']) check(has(hub, title), `Phase 3 hub includes mission: ${title}`);
check(hub.includes("number: 1") && hub.includes("status: 'COMPLETE'"), 'Phase 3 hub marks Mission 1 complete');
check(hub.includes("number: 2") && hub.includes("status: 'CURRENT'"), 'Phase 3 hub marks Mission 2 current');
check(hub.includes('phase-3/mission-1/'), 'Phase 3 hub links to Mission 1');
check(hub.includes('phase-3/mission-2/'), 'Phase 3 hub links to Mission 2');
for (const n of [3,4,5]) check(!hub.includes(`phase-3/mission-${n}/`), `Phase 3 hub does not build/link Mission ${n} yet`);
for (const token of ['ENVIRONMENT','RESOURCE','ECOSYSTEM WARNING','DEVELOPMENT RESTRICTION']) check(hub.includes(token), `Previous Team Thermal Briefing includes: ${token}`);
check(has(hub, 'You do not need the old archives'), 'Phase 3 continuity avoids archive-management burden');
check(has(hub, 'Temperature ✓') && has(hub, 'Heat Transfer ●') && has(hub, 'Thermal Barrier ○'), 'Phase 3 hub visibly shows Mission 1 complete, Mission 2 current and later missions upcoming');
for (const token of ['Temperature','Heat Transfer','Thermal Barrier','Habitat Control','Sustainable Survival']) check(progress.includes(token), `Phase 3 progress includes: ${token}`);
check(has(progress, 'Next Mission → Follow the Heat'), 'Mission 1 receives clear Mission 2 navigation');
check(progress.includes('phase-3/mission-2/'), 'Phase 3 progress navigation links Mission 1 to Mission 2');

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
check(has(mission2, 'Mission 1 told your team what thermal condition JCEC must prepare for'), 'Mission 2 story advances from temperature problem to transfer pathway');
for (const token of ['CONDUCTION','CONVECTION','RADIATION']) check(mission2.includes(token), `Mission 2 includes heat-transfer pathway: ${token}`);
check(has(mission2, 'It does not happen only in solids'), 'Mission 2 does not imply conduction occurs only in solids');
check(has(mission2, 'Fluids include') && has(mission2, 'liquids and gases'), 'Mission 2 explicitly teaches that fluids include liquids and gases');
check(has(mission2, 'Warmer fluid becomes less dense') && has(mission2, 'cooler fluid moves in'), 'Mission 2 keeps convection density explanation qualitative');
check(has(mission2, 'Radiation does not need matter between the source and receiver'), 'Mission 2 states that radiation does not require matter between source and receiver');
check(has(mission2, 'Sunlight is the clearest example'), 'Mission 2 uses sunlight as the primary radiation example');
for (const token of ['TOUCHING MATERIALS','MOVING LIQUID / GAS','ENERGY ACROSS SPACE']) check(mission2.includes(token), `Mission 2 includes pathway comparison cue: ${token}`);
check(has(mission2, 'all three can happen in the same habitat at the same time'), 'Mission 2 unifies the three pathways as one habitat problem');
check(has(mission2, 'Need Help? / Learn More'), 'Mission 2 keeps deeper transfer explanations behind optional help');
check(has(mission2, 'AIR IS A FLUID'), 'Mission 2 reinforces air convection without a second major lab');

// Heat Pathway Stations and low-material implementation.
check(has(mission2, 'Heat Pathway Stations'), 'Mission 2 includes the main Heat Pathway Stations investigation');
check(has(mission2, 'Where did thermal energy move?') && has(mission2, 'What evidence shows that it moved?'), 'All Mission 2 stations use the same two evidence questions');
for (const token of ['STATION A','STATION B','STATION C']) check(mission2.includes(token), `Mission 2 includes ${token}`);
for (const token of ['metal','plastic','wood']) check(has(mission2, token), `Conduction station includes ordinary material: ${token}`);
check(has(mission2, 'Warm water only') && has(mission2, 'no boiling water'), 'Mission 2 conduction station uses warm water with explicit safety limit');
check(has(mission2, 'Do not use your skin as a thermometer'), 'Mission 2 avoids unsafe touch-based temperature testing');
check(has(mission2, 'coloured-water'), 'Mission 2 convection station uses a simple fluid observation option');
check(has(mission2, 'dark/light') && has(mission2, 'exposed/shaded'), 'Mission 2 radiation station provides simple comparison options');
check(has(mission2, 'equal time and distance'), 'Mission 2 radiation comparison includes a basic fair-test cue');
for (const token of ['cups','warm water','shared thermometers','sunlight or an existing lamp']) check(has(mission2, token), `Mission 2 low-material list includes: ${token}`);
check(has(mission2, 'No infrared camera') && has(mission2, 'specialty heat-transfer kit') && has(mission2, 'purchased sensor'), 'Mission 2 explicitly requires no specialty thermal equipment');
check(has(mission2, 'No-purchase fallback'), 'Mission 2 includes explicit no-purchase fallback');
for (const token of ['CONDUCTION CARD','CONVECTION CARD','RADIATION CARD']) check(mission2.includes(token), `Mission 2 includes fallback observation evidence: ${token}`);
check(has(mission2, 'ONE SMALL STATION SHEET — NOT THREE LAB REPORTS'), 'Mission 2 keeps evidence recording to one small station sheet');
for (const token of ['WHAT MOVED?','EVIDENCE','PATHWAY']) check(mission2.includes(token), `Mission 2 station record includes: ${token}`);
check(mission2.includes('print-phase3-mission2'), 'Mission 2 includes printable station sheet and Habitat Heat Map');

// Continent application and one decision.
check(has(mission2, '3 CLUES ONLY'), 'Mission 2 limits continent pathway case to three clues');
check(has(mission2, 'More than one pathway may matter'), 'Mission 2 permits multiple pathways while requiring one priority');
check(has(mission2, 'Which heat-transfer pathway should our habitat control most carefully?'), 'Mission 2 has one main team decision');
check(has(mission2, 'We think ______ is the priority') && has(mission2, 'because we observed ______') && has(mission2, 'On our continent, this matters because ______'), 'Mission 2 uses Pathway → Evidence → Why It Matters reasoning');
check(!has(mission2, 'claim-evidence-reasoning') && !has(mission2, 'full CER'), 'Mission 2 does not require a formal CER');

// One team record and one individual reflection.
check(has(mission2, 'Habitat Heat Map'), 'Mission 2 ends with the Habitat Heat Map');
check(has(mission2, 'science diagram, not an art project'), 'Mission 2 clearly frames the Habitat Heat Map as a science diagram');
for (const token of ['one basic habitat outline','arrows showing likely thermal-energy movement','one circled priority pathway','one short evidence statement']) check(has(mission2, token), `Habitat Heat Map includes: ${token}`);
check(has(mission2, 'Which form of heat transfer was easiest to observe? Which was hardest to see directly? Why?'), 'Mission 2 includes approved individual reflection');
check(has(mission2, 'Mission 2 is finished when:'), 'Mission 2 states a clear completion condition');
check(has(mission2, 'Mission 3 — Hold the Temperature — is upcoming and locked'), 'Mission 3 remains explicitly locked');
check(!mission2.includes('phase-3/mission-3/'), 'Mission 2 does not create a Mission 3 route');

// Continent canon and pathway cases.
for (const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) check(data.includes(`id: '${continent}'`), `Phase 3 data includes continent: ${continent}`);
for (const plant of ['Skyroot','Rainspout Tree','Storm Palm','Reservoir Thorn','Ember Moss','Goldstem Grain','Ironwood','Floatroot']) check(data.includes(plant), `Phase 3 inherited resource evidence preserves: ${plant}`);
check((data.match(/mission2Clues:/g) || []).length === 9, 'Phase 3 data defines Mission 2 clue field plus eight continent clue sets');
check((data.match(/mission2Clues: \[/g) || []).length === 8, 'All eight continents include exactly one Mission 2 clue set');
check(data.includes('40°C') && data.includes('−5°C'), 'Slithy Toves preserves established day-night temperature range');
check(data.includes('−30°C') && data.includes('+30°C'), 'Bandersnatch preserves established seasonal temperature range');
check(data.includes('−40°C') && data.includes('+24°C'), 'Gimble preserves established seasonal temperature range');
check(!has(data, 'power failure') && !has(data, 'grid failure'), 'Manxome does not invent a power-grid failure canon');
check(has(data, 'Do not drain') || has(data, 'do not drain'), 'Mimsy preserves wetland-development restriction');
check(has(data, 'conduction') && has(data, 'convection') && has(data, 'radiation'), 'Mission 2 continent cases apply all three transfer pathways across the canon');
check(has(phase2Progress, 'Continue to Phase 3 → Surviving Jabberwocky'), 'Phase 2 conclusion continues to hand students to Phase 3');

if (failures.length) {
  console.error(`\nJabberwocky Phase 3 readiness audit failed: ${failures.length} issue(s).`);
  failures.forEach((failure) => console.error(`  ✗ ${failure}`));
  process.exit(1);
}

console.log(`\nJabberwocky Phase 3 readiness audit: ${passes.length} checks passed.`);
passes.forEach((pass) => console.log(`  ✓ ${pass}`));
console.log('\nPhase 3 hub + Missions 1–2 preserve separate state, inherited evidence, Grade 7 temperature and heat-transfer science, low-material investigations, continent canon, printable records, one-decision cognitive load, and locked Missions 3–5.');
