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
  teacher: 'src/pages/courses/grade-7-science/jabberwocky/phase-3/teacher-launch-guide/index.astro',
  teacherDoc: 'docs/jabberwocky-phase-3-teacher-launch-guide.md',
  pacingDoc: 'docs/jabberwocky-phase-3-five-week-pacing-guide.md',
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
const teacher = read(files.teacher);
const teacherDoc = read(files.teacherDoc);
const pacingDoc = read(files.pacingDoc);
const phase2Progress = read(files.phase2Progress);
const allMissions = `${m1}\n${m2}\n${m3}\n${m4}\n${m5}`;

// Final student release state.
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

// Approved mission science and products.
for (const token of ['THERMAL ENERGY','Thermal Change Investigation','Thermal Risk Card']) check(has(m1, token), `Mission 1 keeps: ${token}`);
for (const token of ['CONDUCTION','CONVECTION','RADIATION','Heat Pathway Stations','Habitat Heat Map']) check(has(m2, token), `Mission 2 keeps: ${token}`);
for (const token of ['THERMAL CONDUCTOR','THERMAL INSULATOR','Thermal Barrier Fair Test','Thermal Barrier Recommendation','SCIENCE REASONING CHECKPOINT']) check(has(m3, token), `Mission 3 keeps: ${token}`);
for (const token of ['GENERATE','TRANSFER','REMOVE','CONTROL','Habitat Control Loop Challenge','Habitat Control Protocol']) check(has(m4, token), `Mission 4 keeps: ${token}`);
for (const token of ['THERMAL-ENERGY SOURCES','ENERGY USE','ENERGY CONSERVATION','SUSTAINABILITY / TRADE-OFFS','Thermal Energy Budget Challenge','Thermal Evidence Locker','JCEC Thermal Survival Plan']) check(has(m5, token), `Mission 5 keeps: ${token}`);

// Mission 5 synthesis boundaries.
check(has(m5, 'not real watts or kilowatt-hours'), 'Mission 5 avoids real HVAC energy calculations');
check(has(m5, 'Thermal Technology Briefing'), 'Mission 5 includes authentic-source briefing');
check((m5.match(/NATURAL RESOURCES CANADA/g) || []).length >= 2, 'Mission 5 uses two NRCan source cards');
check(has(m5, 'one useful fact from each'), 'Mission 5 extracts one useful fact per source');
check(has(m5, 'not an internet-research project'), 'Mission 5 keeps source reading bounded');
for (const token of ['SOLAR-DERIVED ENERGY','COMBUSTION FUEL','GEOTHERMAL THERMAL ENERGY','ELECTRIC HEATING / COOLING']) check(has(m5, token), `Mission 5 source board includes: ${token}`);
check(has(m5, 'not confirmed continent resources'), 'Mission 5 does not invent continent energy resources');
check((m5.match(/budget:/g) || []).length === 8, 'Mission 5 defines an energy budget for all eight continent cases');
check((m5.match(/scenario:/g) || []).length === 8, 'Mission 5 defines a scenario for all eight continent cases');
check((m5.match(/consequence:/g) || []).length === 8, 'Mission 5 defines a consequence for all eight continent cases');
check((m5.match(/safeguard:/g) || []).length >= 8, 'Mission 5 preserves a safeguard for all eight continent cases');
check(has(m5, 'Revise exactly one part of your original plan'), 'Mission 5 requires one consequence-driven revision');
check(has(m5, 'No thermal equipment or purchased supplies are required'), 'Mission 5 is low-material');
for (const token of ['M1 · TEMPERATURE','M2 · TRANSFER','M3 · BARRIER','M4 · CONTROL']) check(has(m5, token), `Evidence Locker includes: ${token}`);
for (const token of ['HEATING-DOMINANT HABITAT','COOLING-DOMINANT HABITAT','ADAPTIVE HEATING-AND-COOLING HABITAT','SEASONAL / LIMITED OCCUPATION']) check(has(m5, token), `Mission 5 authorization includes: ${token}`);
for (const token of ['THERMAL THREAT','KEEP / REMOVE / BOTH','PASSIVE DESIGN','ACTIVE CONTROL','ENERGY SOURCE','3 PIECES OF EVIDENCE','CONSERVATION RULE','ECOLOGICAL SAFEGUARD','FINAL AUTHORIZATION','WHY · 3–5 SENTENCES']) check(has(m5, token), `Thermal Survival Plan includes: ${token}`);
check(has(m5, 'STOP HERE. Phase 4 has not been released.'), 'Mission 5 explicitly stops before Phase 4');
check(!m5.includes('phase-4/'), 'Mission 5 creates no Phase 4 route');

// Full-phase pacing and assessment load.
for (const [text, token, label] of [[m1,'3 classes × 45 minutes','Mission 1'],[m2,'3 classes × 45 minutes','Mission 2'],[m3,'4 classes × 45 minutes','Mission 3'],[m4,'4 classes × 45 minutes','Mission 4'],[m5,'4 classes × 45 minutes','Mission 5']]) check(has(text, token), `${label} pacing matches approved plan`);
check([3,3,4,4,4].reduce((a,b) => a+b, 0) === 18, 'Phase 3 core mission pacing totals 18 classes');
check(has(m3, 'SCIENCE REASONING CHECKPOINT'), 'Mission 3 remains stronger checkpoint');
check(has(m5, 'MAJOR PHASE 3 SYNTHESIS'), 'Mission 5 remains major synthesis');
for (const token of ['Thermal Risk Card','Habitat Heat Map','Thermal Barrier Recommendation','Habitat Control Protocol','JCEC Thermal Survival Plan']) check(has(allMissions, token), `Phase 3 has distinct Team Record: ${token}`);

// Canon and continent continuity.
for (const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) check(data.includes(`id: '${continent}'`), `Phase 3 data includes ${continent}`);
for (const plant of ['Skyroot','Rainspout Tree','Storm Palm','Reservoir Thorn','Ember Moss','Goldstem Grain','Ironwood','Floatroot']) check(data.includes(plant), `Inherited resource canon preserves ${plant}`);
check(data.includes('40°C') && data.includes('−5°C'), 'Slithy Toves preserves established temperatures');
check(data.includes('−30°C') && data.includes('+30°C'), 'Bandersnatch preserves established temperatures');
check(data.includes('−40°C') && data.includes('+24°C'), 'Gimble preserves established temperatures');
check(!has(data, 'power failure') && !has(data, 'grid failure'), 'Manxome does not invent grid-failure canon');
check(has(data, 'do not drain'), 'Mimsy preserves wetland restriction');
check(has(phase2Progress, 'Continue to Phase 3 → Surviving Jabberwocky'), 'Phase 2 still hands students to Phase 3');

// Teacher-facing five-mission system.
for (const token of ['Phase 3 Teacher Launch Guide','18 core classes','7 purposeful flex','Mission 1 — Read the Thermal Warning','Mission 2 — Follow the Heat','Mission 3 — Hold the Temperature','Mission 4 — Control the Habitat','Mission 5 — Survive Without Wasting It']) check(has(teacher, token), `Teacher guide includes: ${token}`);
for (const token of ['BEFORE CLASS','MATERIALS','STUDENTS SEE / DO','KEY SCIENCE','TEACHER EMPHASIS','COLLECT / ASSESS','IF TIME RUNS OUT']) check(has(teacher, token), `Teacher guide planning field: ${token}`);
check((teacher.match(/route:'mission-/g) || []).length === 18, 'Teacher guide contains 18 core day entries');
const flexSlice = teacher.slice(teacher.indexOf('const flexDays'), teacher.indexOf('const materials'));
check((flexSlice.match(/day:/g) || []).length === 7, 'Teacher guide contains 7 purposeful flex periods');
for (const token of ['ordinary classroom supplies','shared/reused equipment','printables/data fallbacks','specialty equipment only as optional enrichment']) check(has(teacher, token), `Teacher guide preserves low-material rule: ${token}`);

// Materials master list and thermometer-sharing plan.
for (const token of ['Thermal Change Investigation','thermometer practice','Heat Pathway Stations','Thermal Barrier Fair Test','Habitat Control Loop Challenge','Thermal Technology Briefing','Thermal Energy Budget Challenge','JCEC Thermal Survival Plan']) check(has(teacher, token), `Materials/implementation system includes: ${token}`);
check(has(teacher, '4–6 shared thermometers'), 'Teacher guide uses a realistic 4–6 thermometer sharing target');
check(has(teacher, 'You do not need one thermometer per team'), 'Teacher guide explicitly removes one-thermometer-per-team assumption');
check(has(teacher, '1–2 thermometers'), 'Teacher guide includes very-limited-thermometer fallback');
for (const token of ['No-purchase fallback','optional enrichment']) check(has(teacher, token), `Teacher guide includes materials safeguard: ${token}`);

// Contingency playbook.
for (const token of ['Limited thermometers','Missing station materials','Convection demonstration fails','Radiation station shows little difference','Fair-test data is noisy or contradictory','Student absent during an investigation','A class is lost','Control Loop Challenge runs long','Thermal Energy Budget Challenge runs long','Source websites are unavailable']) check(has(teacher, token), `Teacher guide contingency: ${token}`);

// Assessment map.
for (const token of ['M1/M2/M4 formative','M3 checkpoint','M5 major synthesis']) check(has(teacher, token), `Teacher readiness summary includes assessment role: ${token}`);
check(has(teacher, '30%') && has(teacher, '55%') && has(teacher, '15%'), 'Teacher guide includes 30/55/15 grading option');
check(has(teacher, '35% checkpoint / 65% synthesis'), 'Teacher guide includes no-individual-check grading alternative');
check(has(teacher, 'INDIVIDUAL SCIENCE CHECK'), 'Teacher guide includes optional individual science check');

// Alberta Heat & Temperature coverage and above-grade boundary.
for (const token of ['Temperature measurement + thermometers','Heat vs temperature + particle model','Expansion / contraction + changes of state','Conduction / convection / radiation','Conductivity / insulation','Fair testing / quantitative data / graphing / discrepancies','Passive + active solar','Thermal-energy sources','Thermometers / thermostats / feedback','Heating / cooling systems','Historical thermal technology','Safety','Energy use + renewable/non-renewable considerations','Conservation + environmental consequences','Evidence-based decisions']) check(has(teacher, token), `Teacher curriculum map includes: ${token}`);
for (const token of ['advanced calorimetry','specific-heat calculations','gas laws','detailed refrigeration cycles','formal efficiency equations']) check(has(teacher, token), `Teacher guide keeps above-grade topic out: ${token}`);
check(has(teacher, 'education.alberta.ca/media/159716/sci7to9.pdf'), 'Teacher guide links official Alberta Science 7–9 program');

// Teacher documentation and pacing mirror the live guide.
for (const source of [teacherDoc,pacingDoc]) {
  for (const token of ['18 core','7 purposeful flex','Read the Thermal Warning','Follow the Heat','Hold the Temperature','Control the Habitat','Survive Without Wasting It']) check(has(source, token), `Teacher documentation mirrors approved pacing: ${token}`);
  check(!has(source, 'Phase 4 student content'), 'Teacher documentation does not introduce Phase 4 student content');
}
check(has(teacherDoc, '4–6 shared thermometers'), 'Teacher documentation includes thermometer-sharing plan');
check(has(teacherDoc, 'No-purchase fallback'), 'Teacher documentation includes no-purchase fallbacks');
check(has(pacingDoc, '25 periods total = 18 core + 7 purposeful flex'), 'Pacing guide states 25-period structure');
for (const day of [7,12,17,22,23,24,25]) check(has(pacingDoc, `| ${day} | FLEX |`), `Pacing guide includes flex Day ${day}`);

// Final teacher launch-readiness audit.
for (const token of ['Do I know what to prepare tomorrow?','Do I know what students should finish each day?','Do I know when thermometers/shared equipment are needed?','Can I run the unit if equipment is limited?','Do I know what is formative, checkpoint and major assessment?','Can I recover if a class or investigation is disrupted?','Do teacher and student systems match?']) check(has(teacher, token), `Teacher launch-readiness audit includes: ${token}`);
check(has(teacher, 'STOP BEFORE PHASE 4'), 'Teacher guide has explicit Phase 4 stop point');
check(!teacher.includes('phase-4/'), 'Teacher launch guide creates no Phase 4 route');

if (failures.length) {
  console.error(`\nJabberwocky Phase 3 readiness audit failed: ${failures.length} issue(s).`);
  failures.forEach((failure) => console.error(`  ✗ ${failure}`));
  process.exit(1);
}

console.log(`\nJabberwocky Phase 3 readiness audit: ${passes.length} checks passed.`);
passes.forEach((pass) => console.log(`  ✓ ${pass}`));
console.log('\nPhase 3 student + teacher systems are aligned: five missions, 18 core classes, seven purposeful flex periods, low-material fallbacks, Heat & Temperature curriculum coverage, checkpoint/synthesis assessment, and no Phase 4 route.');
