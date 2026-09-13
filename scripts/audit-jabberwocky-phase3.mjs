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
const progress = read(files.progress);
const data = read(files.data);
const phase2Progress = read(files.phase2Progress);

// Hub, continuity and release gate.
for (const token of ['SURVIVING JABBERWOCKY','JCEC THERMAL SURVIVAL DIVISION','Read the Thermal Warning','Follow the Heat','Hold the Temperature','Control the Habitat','Survive Without Wasting It']) check(has(hub, token), `hub includes: ${token}`);
check(hub.includes('jabberwocky-phase3-posting'), 'Phase 3 uses separate posting state');
check(!hub.includes("localStorage.setItem('jabberwocky-phase2-posting'"), 'Phase 3 does not overwrite Phase 2 state');
check((hub.match(/status: 'COMPLETE'/g) || []).length >= 3, 'Hub marks Missions 1–3 complete');
check(hub.includes("number: 4") && hub.includes("status: 'CURRENT'"), 'Hub marks Mission 4 current');
for (const n of [1,2,3,4]) check(hub.includes(`phase-3/mission-${n}/`), `Hub links Mission ${n}`);
check(!hub.includes('phase-3/mission-5/'), 'Hub keeps Mission 5 unreleased');
for (const token of ['ENVIRONMENT','RESOURCE','ECOSYSTEM WARNING','DEVELOPMENT RESTRICTION']) check(hub.includes(token), `Thermal briefing includes ${token}`);
check(has(hub, 'Temperature ✓') && has(hub, 'Heat Transfer ✓') && has(hub, 'Thermal Barrier ✓') && has(hub, 'Habitat Control ●') && has(hub, 'Sustainable Survival ○'), 'Hub progress shows Missions 1–3 done, Mission 4 current and Mission 5 upcoming');
check(has(progress, 'Next Mission → Follow the Heat') && has(progress, 'Next Mission → Hold the Temperature') && has(progress, 'Next Mission → Control the Habitat'), 'Progress component provides approved next-mission links');
check(progress.includes('phase-3/mission-4/') && !progress.includes('phase-3/mission-5/'), 'Navigation releases Mission 4 but not Mission 5');

// Shared student structure and state carry-forward.
for (const [name, text] of [['Mission 1',m1],['Mission 2',m2],['Mission 3',m3],['Mission 4',m4]]) {
  for (const token of ['Your Mission','Learn the Science','Investigate','Make a Decision','Record It']) check(text.includes(token), `${name} includes step: ${token}`);
  check(text.includes('jabberwocky-phase3-posting'), `${name} carries Phase 3 posting`);
}
check(!m2.includes('<select') && !m3.includes('<select') && !m4.includes('<select'), 'Missions 2–4 do not ask students to choose continent again');

// Preserve approved Missions 1–3.
for (const token of ['What is temperature actually telling us?','THERMAL ENERGY','Thermal Change Investigation','Thermal Risk Card']) check(has(m1, token), `Mission 1 keeps approved element: ${token}`);
for (const token of ['CONDUCTION','CONVECTION','RADIATION','Heat Pathway Stations','Habitat Heat Map']) check(has(m2, token), `Mission 2 keeps approved element: ${token}`);
for (const token of ['THERMAL CONDUCTOR','THERMAL INSULATOR','Thermal Barrier Fair Test','Thermal Barrier Recommendation','SCIENCE REASONING CHECKPOINT']) check(has(m3, token), `Mission 3 keeps approved element: ${token}`);
check(has(m3, 'Next Mission') || has(progress, 'Next Mission → Control the Habitat'), 'Mission 3 receives clear Mission 4 navigation');

// Mission 4 core science and distinct purpose.
for (const token of ['Mission 4 of 5','How do humans keep temperatures within a useful range?','4 classes × 45 minutes','GENERATE','TRANSFER','REMOVE','CONTROL']) check(has(m4, token), `Mission 4 includes core element: ${token}`);
check(has(m4, 'Insulation alone cannot keep a habitat safe'), 'Mission 4 clearly advances beyond Mission 3 insulation');
check(has(m4, 'does not “make cold.”') || has(m4, 'do not “make cold.”'), 'Mission 4 avoids the misconception that cooling systems make cold');
for (const token of ['THERMOMETER','THERMOSTAT','HEATER / FURNACE','REFRIGERATOR / AIR CONDITIONER']) check(has(m4, token), `Mission 4 includes thermal-control device: ${token}`);
check(has(m4, 'MEASURE') && has(m4, 'COMPARE WITH TARGET') && has(m4, 'RESPOND') && has(m4, 'MEASURE AGAIN'), 'Mission 4 teaches thermostat feedback loop');
check(has(m4, 'feedback'), 'Mission 4 names the repeated control process as feedback');

// Thermal technology, sources, solar and safety.
check(has(m4, 'THEN → NOW THERMAL TECHNOLOGY'), 'Mission 4 includes concise historical technology connection');
check(has(m4, 'human problem → thermal technology → new benefits and new trade-offs'), 'Mission 4 keeps historical technology focused on human need and trade-offs');
for (const token of ['Solar','Combustion','Geothermal','Biological / living systems']) check(has(m4, token), `Mission 4 Thermal Source Board includes: ${token}`);
check(has(m4, 'PASSIVE SOLAR') && has(m4, 'ACTIVE SOLAR'), 'Mission 4 explicitly distinguishes passive and active solar');
check(has(m4, 'A source appearing here does not mean it is available on every Jabberwocky continent'), 'Mission 4 does not invent continent energy resources');
for (const token of ['hot surfaces','combustion','fire','overheating']) check(has(m4, token), `Mission 4 integrates safety concept: ${token}`);

// Main low-material investigation.
check(has(m4, 'Habitat Control Loop Challenge'), 'Mission 4 uses the approved control-loop investigation');
check(!has(m4, 'model-box heating') && !has(m4, 'build a model box'), 'Mission 4 does not repeat the Mission 3 physical-build pattern');
check(has(m4, '18°C–22°C'), 'Mission 4 includes a clear training target range');
check(has(m4, 'simulation target, not a new continent climate fact'), 'Mission 4 labels training range as simulation data rather than canon');
for (const token of ['HEATER ON','HEATER OFF','COOLING ON','COOLING OFF','SHADE / UNSHADE','VENT / CLOSE VENT']) check(has(m4, token), `Mission 4 provides response card: ${token}`);
check(has(m4, '+2 energy units') && has(m4, '+3 energy units'), 'Mission 4 uses simple relative active-energy consequences');
for (const token of ['17°C','19°C','23°C','24°C','21°C','16°C']) check(has(m4, token), `Mission 4 simulation includes reading: ${token}`);
check(has(m4, 'If the temperature falls below') && has(m4, 'If the temperature rises above') && has(m4, 'inside the target range'), 'Mission 4 students build explicit feedback rules');
check(has(m4, 'not a precise prediction caused by your previous card'), 'Mission 4 states the control simulation model limit');
check(has(m4, 'printed/projected readings') && has(m4, 'No electronics') && has(m4, 'purchased thermostat equipment'), 'Mission 4 is explicitly low-material and no-purchase');
check(m4.includes('print-phase3-mission4'), 'Mission 4 includes printable Control Loop + Protocol');

// Continent application, decision and record.
check(has(m4, '3 CLUES ONLY'), 'Mission 4 limits continent control case to three clues');
check((data.match(/mission4Clues: \[/g) || []).length === 8, 'All eight continents include Mission 4 control clues');
check(has(m4, 'What should control the habitat temperature before JCEC spends more energy?'), 'Mission 4 has one main team decision');
for (const token of ['CONDITION','CONTROL RESPONSE','EXPECTED RESULT']) check(m4.includes(token), `Mission 4 reasoning includes ${token}`);
check(has(m4, 'Habitat Control Protocol'), 'Mission 4 ends with one Habitat Control Protocol');
for (const token of ['TARGET RANGE','PASSIVE CONTROL FIRST','WHEN HEATING ACTIVATES','WHEN COOLING / VENTILATION ACTIVATES','SAFETY RULE']) check(has(m4, token), `Habitat Control Protocol includes: ${token}`);
check(has(m4, 'Why is a thermostat useful even when a habitat already has a heater or cooler?'), 'Mission 4 includes approved individual reflection');
check(has(m4, 'Mission 4 is finished when:'), 'Mission 4 states a clear completion condition');
check(has(m4, 'Mission 5 — Survive Without Wasting It — is upcoming and locked'), 'Mission 5 remains explicitly locked');
check(!m4.includes('phase-3/mission-5/'), 'Mission 4 does not create a Mission 5 route');

// Canon safeguards.
for (const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) check(data.includes(`id: '${continent}'`), `Phase 3 data includes ${continent}`);
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
console.log('\nPhase 3 hub + Missions 1–4 preserve separate state, Grade 7 thermal science, low-material investigations, feedback control, continent canon, printable records, and locked Mission 5.');
