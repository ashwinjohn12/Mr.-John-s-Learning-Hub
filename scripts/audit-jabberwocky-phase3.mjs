import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const rel = (p) => path.join(root, p);
const read = (p) => fs.readFileSync(rel(p), 'utf8');
const has = (text, token) => text.toLowerCase().includes(token.toLowerCase());
const passes = [];
const failures = [];
const check = (condition, message) => condition ? passes.push(message) : failures.push(message);

const files = {
  hub:'src/pages/courses/grade-7-science/jabberwocky/phase-3/index.astro',
  m1:'src/pages/courses/grade-7-science/jabberwocky/phase-3/mission-1/index.astro',
  m2:'src/pages/courses/grade-7-science/jabberwocky/phase-3/mission-2/index.astro',
  m3:'src/pages/courses/grade-7-science/jabberwocky/phase-3/mission-3/index.astro',
  m4:'src/pages/courses/grade-7-science/jabberwocky/phase-3/mission-4/index.astro',
  m5:'src/pages/courses/grade-7-science/jabberwocky/phase-3/mission-5/index.astro',
  progress:'src/components/JcecPhase3Progress.astro',
  data:'src/data/jabberwockyPhase3.ts',
  teacher:'src/pages/courses/grade-7-science/jabberwocky/phase-3/teacher-launch-guide/index.astro',
  teacherDoc:'docs/jabberwocky-phase-3-teacher-launch-guide.md',
  pacingDoc:'docs/jabberwocky-phase-3-five-week-pacing-guide.md'
};
for (const file of Object.values(files)) check(fs.existsSync(rel(file)), `exists: ${file}`);

const hub=read(files.hub), m1=read(files.m1), m2=read(files.m2), m3=read(files.m3), m4=read(files.m4), m5=read(files.m5), progress=read(files.progress), data=read(files.data), teacher=read(files.teacher), teacherDoc=read(files.teacherDoc), pacingDoc=read(files.pacingDoc);
const allMissions=`${m1}\n${m2}\n${m3}\n${m4}\n${m5}`;

// Five-mission release state and navigation.
for (const token of ['SURVIVING JABBERWOCKY','Read the Thermal Warning','Follow the Heat','The Director Is Coming','Control the Habitat','Survive Without Wasting It']) check(has(hub,token),`hub includes ${token}`);
for (const token of ['Temperature ✓','Heat Transfer ✓','Thermal Design ✓','Habitat Control ✓','Sustainable Survival ●']) check(has(hub,token),`hub progression includes ${token}`);
check(has(hub,'jabberwocky-phase3-posting'),'Phase 3 keeps separate posting state');
for (const n of [1,2,3,4,5]) check(hub.includes(`phase-3/mission-${n}/`),`hub links Mission ${n}`);
check(has(progress,'Next Mission → The Director Is Coming'),'Mission 2 now hands students to the Thermos Challenge');
check(has(progress,'Next Mission → Control the Habitat'),'Thermos Challenge hands students to Mission 4');
check(has(progress,'Thermal Design'),'progress component uses Thermal Design');

// Shared five-step architecture and posting continuity.
for (const [name,text] of [['M1',m1],['M2',m2],['M3',m3],['M4',m4],['M5',m5]]) {
  for (const token of ['Your Mission','Learn the Science','Investigate','Make a Decision','Record It']) check(has(text,token),`${name} includes ${token}`);
  check(has(text,'jabberwocky-phase3-posting'),`${name} carries Phase 3 posting`);
}
check(!m2.includes('<select') && !m3.includes('<select') && !m4.includes('<select') && !m5.includes('<select'),'Missions 2–5 do not reselect continent');

// Mission 2 prerequisites.
for (const token of ['CONDUCTION','CONVECTION','RADIATION','Heat Pathway Stations','Habitat Heat Map']) check(has(m2,token),`Mission 2 teaches prerequisite ${token}`);

// Thermos Challenge science/engineering checkpoint.
for (const token of [
  'THE DIRECTOR IS COMING','THE JCEC THERMOS CHALLENGE','4 classes × 45 minutes','200 mL','0 minutes','5, 10, 15, 20, 25 and 30 minutes',
  'CONDUCTION','CONVECTION','RADIATION','INSULATION','THERMAL CONDUCTOR','THERMAL INSULATOR','Temperature change = initial temperature − final temperature',
  'TIME–TEMPERATURE GRAPH','PLAN','BUILD','TEST','GRAPH','EXPLAIN','REDESIGN','RETEST','Prototype Test','Final Test + Compare','JCEC Thermos Design Report','SCIENCE REASONING CHECKPOINT'
]) check(has(m3,token),`Mission 3 includes ${token}`);
check(has(m3,'same teacher-provided inner test cup/container'),'Mission 3 standardizes the inner test cup');
check(has(m3,'20 cm maximum width/diameter'),'Mission 3 preserves size constraint');
check(has(m3,'pre-existing insulated bottle or commercial thermos'),'Mission 3 prevents prebuilt thermos use');
check(has(m3,'teacher controls heating/pouring'),'Mission 3 makes hot-water safety explicit');
check(has(m3,'No boiling water'),'Mission 3 prohibits boiling water');
check(has(m3,'wet materials away from Chromebooks'),'Mission 3 protects devices from water');
check(has(m3,'Four to six shared thermometers are plenty') || has(m3,'4–6 shared thermometers'),'Mission 3 supports shared thermometers');
check(has(m3,'NO USABLE THERMOMETERS'),'Mission 3 includes no-thermometer dataset fallback');
check(has(m3,'NO BUILD MATERIALS'),'Mission 3 includes no-construction fallback');
check(has(m3,'A redesign that performs worse can still teach JCEC something important'),'Mission 3 treats failed redesign as evidence');
check(!has(m3,'which team kept water hottest wins'),'Mission 3 does not frame checkpoint as a hottest-cup competition');

// Mission 3 checkpoint product and transfer to Mission 4/5.
for (const token of ['JCEC Thermos Design Report','two thermal-design principles','one limitation','Which part of your thermos design did the most']) check(has(m3,token),`Mission 3 record/reflection includes ${token}`);
check(has(progress,'scale your thermos design thinking up'),'Mission 4 handoff explicitly scales thermos thinking to habitat control');
for (const token of ['GENERATE','TRANSFER','REMOVE','CONTROL','Habitat Control Loop Challenge','Habitat Control Protocol']) check(has(m4,token),`Mission 4 remains intact: ${token}`);
check(has(progress,'M3 · THERMAL DESIGN'),'Mission 5 rendered Evidence Locker relabels M3 as THERMAL DESIGN');
check(has(progress,'one strong thermos-test result plus one useful thermal-design principle'),'Mission 5 receives thermos evidence without archive reopening');
for (const token of ['Thermal Energy Budget Challenge','Thermal Evidence Locker','JCEC Thermal Survival Plan']) check(has(m5,token),`Mission 5 remains intact: ${token}`);

// Pacing and assessment remain unchanged.
for (const [text,token,label] of [[m1,'3 classes × 45 minutes','Mission 1'],[m2,'3 classes × 45 minutes','Mission 2'],[m3,'4 classes × 45 minutes','Mission 3'],[m4,'4 classes × 45 minutes','Mission 4'],[m5,'4 classes × 45 minutes','Mission 5']]) check(has(text,token),`${label} pacing matches approved plan`);
check([3,3,4,4,4].reduce((a,b)=>a+b,0)===18,'Phase 3 remains 18 core classes');
for (const token of ['Thermal Risk Card','Habitat Heat Map','JCEC Thermos Design Report','Habitat Control Protocol','JCEC Thermal Survival Plan']) check(has(allMissions,token),`Phase 3 retains Team Record ${token}`);
check(has(m5,'MAJOR PHASE 3 SYNTHESIS'),'Mission 5 remains major synthesis');

// Teacher system, materials, assessment and curriculum alignment.
for (const token of ['Phase 3 TEACHER LAUNCH GUIDE','18 core classes + 7 purposeful flex periods','Mission 3 · The Director Is Coming','JCEC Thermos Design Report','Design for Heat Retention','Prototype Test','Evidence → Redesign','Final Test + JCEC Decision']) check(has(teacher,token),`Teacher guide includes ${token}`);
for (const token of ['BEFORE CLASS','MATERIALS','STUDENTS SEE / DO','KEY SCIENCE','TEACHER EMPHASIS','COLLECT / ASSESS','IF TIME RUNS OUT']) check(has(teacher,token),`Teacher guide includes planning field ${token}`);
check((teacher.match(/route:'mission-/g)||[]).length===18,'Teacher guide contains exactly 18 core day records');
for (const day of [7,12,17,22,23,24,25]) check(has(teacher,`day:${day}`),`Teacher guide contains flex Day ${day}`);
for (const token of ['ordinary classroom supplies','shared/reused equipment','printables/data fallbacks','specialty equipment only as optional enrichment']) check(has(teacher,token),`Teacher guide preserves low-material rule ${token}`);
for (const token of ['same inner cup per team','200 mL','4–6 shared thermometers','No-purchase fallback','supplied Prototype/Final datasets']) check(has(teacher,token),`Teacher Thermos implementation includes ${token}`);
for (const token of ['Limited thermometers','Hot-water setup is unavailable','Starting temperatures differ','A cup leaks','Student absent during the thermos test','A class is lost']) check(has(teacher,token),`Teacher contingency includes ${token}`);
for (const token of ['30% M3 / 55% M5 / 15% individual check','35% checkpoint / 65% synthesis']) check(has(teacher,token),`Teacher assessment keeps ${token}`);
for (const token of ['Conduction / convection / radiation','Conductivity / insulation','Fair testing / repeated quantitative temperature data / graphing / redesign / limitations','Passive + active solar','Thermal-energy sources','Thermometers / thermostats / feedback','Energy use + renewable/non-renewable considerations','Conservation + environmental consequences']) check(has(teacher,token),`Teacher curriculum map includes ${token}`);
for (const token of ['advanced calorimetry','specific-heat calculations','gas laws','detailed refrigeration cycles','formal efficiency equations']) check(has(teacher,token),`Teacher scope guard keeps out ${token}`);

// Documentation mirrors revised Phase 3.
for (const source of [teacherDoc,pacingDoc]) {
  for (const token of ['18 core','7 purposeful flex','Read the Thermal Warning','Follow the Heat','The Director Is Coming','Control the Habitat','Survive Without Wasting It','JCEC Thermos Design Report']) check(has(source,token),`Teacher documentation includes ${token}`);
}
check(has(pacingDoc,'25 periods total = 18 core + 7 purposeful flex'),'Pacing guide keeps 25-period structure');
for (const day of [7,12,17,22,23,24,25]) check(has(pacingDoc,`| ${day} | FLEX |`),`Pacing guide includes flex Day ${day}`);

// Canon remains frozen.
for (const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) check(data.includes(`id: '${continent}'`),`Phase 3 data retains ${continent}`);
check(data.includes('40°C') && data.includes('−5°C'),'Slithy Toves temperatures preserved');
check(data.includes('−30°C') && data.includes('+30°C'),'Bandersnatch temperatures preserved');
check(data.includes('−40°C') && data.includes('+24°C'),'Gimble temperatures preserved');
check(!has(data,'power failure') && !has(data,'grid failure'),'Manxome still avoids invented grid-failure canon');

if (failures.length) {
  console.error(`\nPhase 3 readiness audit failed (${failures.length}):`);
  failures.forEach((f)=>console.error(`  ✗ ${f}`));
  process.exit(1);
}
console.log(`\nJabberwocky Phase 3 readiness audit: ${passes.length} checks passed.`);
passes.forEach((p)=>console.log(`  ✓ ${p}`));
console.log('\nPhase 3 is aligned around Temperature → Heat Transfer → Thermal Design → Habitat Control → Sustainable Survival, with the JCEC Thermos Challenge as the stronger checkpoint.');
