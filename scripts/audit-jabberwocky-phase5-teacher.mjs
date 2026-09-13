import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const passes = [];
const failures = [];
const rel = (p) => path.join(root, p);
const read = (p) => fs.readFileSync(rel(p), 'utf8');
const has = (text, token) => text.toLowerCase().includes(token.toLowerCase());
const check = (ok, message) => ok ? passes.push(message) : failures.push(message);

const files = {
  teacher: 'src/pages/courses/grade-7-science/jabberwocky/phase-5/teacher-launch-guide/index.astro',
  teacherDoc: 'docs/jabberwocky-phase-5-teacher-launch-guide.md',
  pacingDoc: 'docs/jabberwocky-phase-5-five-week-pacing-guide.md',
  m1: 'src/pages/courses/grade-7-science/jabberwocky/phase-5/mission-1/index.astro',
  m2: 'src/pages/courses/grade-7-science/jabberwocky/phase-5/mission-2/index.astro',
  m3: 'src/pages/courses/grade-7-science/jabberwocky/phase-5/mission-3/index.astro',
  m4: 'src/pages/courses/grade-7-science/jabberwocky/phase-5/mission-4/index.astro',
  m5: 'src/pages/courses/grade-7-science/jabberwocky/phase-5/mission-5/index.astro'
};

for (const file of Object.values(files)) check(fs.existsSync(rel(file)), `exists: ${file}`);
for (const route of ['final-council','mission-2190-council','final-decision','phase-6']) {
  check(!fs.existsSync(rel(`src/pages/courses/grade-7-science/jabberwocky/${route}/index.astro`)), `Final Council/next-phase route remains unbuilt: ${route}`);
}

const teacher = read(files.teacher);
const teacherDoc = read(files.teacherDoc);
const pacing = read(files.pacingDoc);
const teacherSystem = `${teacher}\n${teacherDoc}\n${pacing}`;
const missions = [read(files.m1), read(files.m2), read(files.m3), read(files.m4), read(files.m5)];

// Teacher/student mission architecture.
for (const token of [
  'Mission 1 — Read the Ground',
  'Mission 2 — Follow the Rock Story',
  'Mission 3 — Track the Changing Surface',
  'Mission 4 — Read the Deep Past',
  'Mission 5 — Prepare the Final Evidence'
]) {
  check(has(teacher, token), `Teacher guide includes ${token}`);
  check(has(teacherDoc, token), `Teacher documentation includes ${token}`);
  check(has(pacing, token), `Pacing guide includes ${token}`);
}
check((teacher.match(/day:/g)||[]).length === 25, 'Live teacher guide contains 18 core + 7 flex day records');
check((teacher.match(/route:'mission-[1-5]\//g)||[]).length === 18, 'Live teacher guide contains exactly 18 core class route records');
check((teacher.match(/title:'[^']+'/g)||[]).length >= 25, 'Live teacher guide includes titles for all core/flex records');
for (const day of [7,12,17,22,23,24,25]) check(has(teacher, `day:${day}`), `Teacher guide includes purposeful flex Day ${day}`);
check(has(teacher,'18 core classes + 7 purposeful flex periods = 25 classes'),'Teacher guide states the approved 25-class structure');
check(has(pacing,'18 core classes + 7 purposeful flex periods'),'Pacing documentation states 18 core + 7 flex');

// Required per-core planning fields.
for (const token of ['BEFORE CLASS','MATERIALS','STUDENTS SEE / DO','KEY SCIENCE','TEACHER EMPHASIS','COLLECT / ASSESS','IF TIME RUNS OUT']) {
  check(has(teacher, token), `Teacher guide includes planning field ${token}`);
  check(has(teacherDoc, token), `Teacher documentation includes planning field ${token}`);
}

// Low-material rule + required materials systems.
for (const token of ['ordinary classroom supplies','shared/reused equipment','printables/data fallbacks','specialty equipment only as optional enrichment']) check(has(teacher,token),`Teacher guide preserves low-material rule: ${token}`);
for (const token of [
  "Geologist's Evidence Stations",
  'real-sample option',
  'photo/property',
  'relative-hardness',
  'Rock Cycle Evidence Lab',
  'rock-class cards',
  'process cards',
  'Local Alberta',
  'Weathering evidence cards',
  'Surface Change Fair Test',
  'tray/sediment/water',
  'supplied quantitative dataset',
  'interpolation/extrapolation',
  'Earth Reference Evidence files',
  'Canadian Rockies/Cordillera',
  'global crustal-movement',
  'Alberta badlands',
  'fossil-context',
  'Deep Record Evidence Puzzle',
  'Earth Training Cross-Section',
  'Jabberwocky Deep Record Survey Files',
  'Geological Evidence Locker',
  'JCEC Geological Site Review',
  'JCEC Geological Evidence Packet'
]) check(has(teacher, token), `Materials/implementation system includes ${token}`);
for (const token of ['PREFERRED CLASSROOM VERSION','SHARED-EQUIPMENT PLAN','NO-PURCHASE FALLBACK','ABSENCE FALLBACK','CLEANUP / SAFETY']) check(has(teacher,token),`Materials master list includes ${token}`);
for (const forbidden of ['large rock/mineral collection','Mohs kit','loose glass','real fossils','stream table','rock saws','specialty geology']) check(has(teacherSystem,forbidden),`Teacher system explicitly handles/avoids dependency: ${forbidden}`);
check(has(teacherSystem,'no geology purchase'),'Phase 5 can run without geology purchases');

// Contingency playbook.
for (const token of [
  'No rock/mineral samples','Limited hand lenses','Students over-identify samples from one clue','Hardness testing becomes confusing',
  'Mission 2 rock classifications are ambiguous','Local Alberta evidence unavailable','Sediment/tray materials unavailable','Surface Change Fair Test runs long',
  'Water spills/device concerns','Groups get contradictory erosion data','Graph/data interpretation takes too long','Student absent during the fair test',
  'Students erase anomalous results','Students over-extrapolate model data','Mission 4 vocabulary becomes overwhelming','Students confuse fracture with fault',
  'Students assume Earth-reference volcanoes/earthquakes exist on Jabberwocky','Students treat fossils as dinosaur trivia','Students struggle with relative sequencing',
  'Printing/projector failure','Mission 5 Evidence Locker becomes an answer key','Students confuse the geological handoff with the final settlement decision','A class is lost'
]) check(has(teacher,token),`Teacher contingency exists: ${token}`);

// Assessment alignment.
for (const token of ['FORMATIVE','STRONGER CHECKPOINT','FORMATIVE SYNTHESIS','MAJOR SYNTHESIS','30% Mission 3','55% Mission 5','15% optional individual Planet Earth science check','35% Mission 3','65% Mission 5']) check(has(teacher,token),`Teacher assessment system includes ${token}`);
for (const record of ['Ground Evidence Card','Rock History Profile','Surface Change Forecast','Deep Record Timeline','JCEC Geological Evidence Packet']) {
  check(has(teacher,record),`Teacher guide includes Team Record ${record}`);
  check(missions.some((m)=>has(m,record)),`Student missions include Team Record ${record}`);
}
check(has(teacher,'Do not heavily grade all five Team Records'),'Teacher guide protects light-assessment philosophy');
check(has(teacher,'Optional individual Planet Earth science check'),'Teacher guide includes optional individual science check');

// Curriculum coverage.
for (const token of [
  'Gradual + sudden surface change','Layered Earth model + supporting evidence','Earth-study tools / techniques','Rock/mineral terminology + classification',
  'Rocks vs minerals','Igneous / sedimentary / metamorphic + formation evidence','Rock cycle','Local rocks / sediments',
  'Weathering / erosion / sedimentation-deposition','Long-term incremental change','Controlled variables + predictions/hypotheses',
  'Qualitative + quantitative data / measurement','Tables / appropriate displays / trends','Interpolation / extrapolation','Discrepancies / anomalies',
  'Mountain formation patterns / fold mountains / fault mountains','Crustal movement / qualitative Grade 7 plate tectonics',
  'Fossils + fossil formation / interpretation','Geological time','Uncertainty + accumulated evidence','New questions from evidence',
  'Evidence-based explanations','Collaboration','Stewardship','Safety'
]) check(has(teacher,token),`Teacher curriculum map includes ${token}`);
for (const token of ['radiometric-dating calculations','advanced seismology','detailed plate vectors','advanced plate-boundary taxonomy','crystallography','mineral chemistry','geological engineering calculations']) check(has(teacher,token),`Teacher scope guard excludes ${token}`);
check(has(teacher,'https://education.alberta.ca/media/159716/sci7to9.pdf'),'Teacher guide links official Alberta Science 7–9 program');

// Evidence-source separation + authentic references.
for (const token of ['EARTH REFERENCE EVIDENCE','REAL EARTH · AUTHENTIC SOURCE','JABBERWOCKY SURVEY EVIDENCE','MISSION 2190 SURVEY']) check(has(teacher,token),`Teacher guide preserves evidence-source label ${token}`);
for (const url of [
  'https://ags.aer.ca/publications/all-publications/ofr-1981-08',
  'https://parks.canada.ca/culture/spm-whs/sites-canada/sec02h',
  'https://www.usgs.gov/maps/dynamic-planet-world-map-volcanoes-earthquakes-impact-craters-and-plate-tectonics',
  'https://tyrrellmuseum.com/learn/Badlands_Goodlands',
  'https://www.tyrrellmuseum.com/research/found_a_fossil'
]) check(has(teacher,url),`Teacher guide preserves approved authoritative source ${url}`);
check(has(teacherSystem,'buried fossils') && has(teacherSystem,'left in place') && has(teacherSystem,'report'), 'Teacher system preserves Royal Tyrrell fossil-context/stewardship safeguard');
check(has(teacher,'Never transfer') && has(teacher,'Earth earthquake') && has(teacher,'Jabberwocky'),'Teacher guide prevents Earth-reference evidence becoming Jabberwocky canon');

// Distinct science progression and student/teacher match.
for (const token of ['observe/classify','formation history','ongoing surface change','geological handoff']) check(has(teacher,token),`Readiness audit keeps mission distinction: ${token}`);
check(has(teacher,'Read the Deep Past') && has(teacher,'reconstruct') && has(teacher,'relative sequence'),'Readiness audit keeps Mission 4 distinct as deep-past reconstruction');
check(has(missions[0],"Geologist's Evidence Stations"),'M1 student experience matches teacher sample investigation');
check(has(missions[1],'Rock Cycle Evidence Lab'),'M2 student experience matches teacher rock-history investigation');
check(has(missions[2],'Surface Change Fair Test'),'M3 student experience matches teacher checkpoint investigation');
check(has(missions[3],'Deep Record Evidence Puzzle'),'M4 student experience matches teacher deep-record investigation');
check(has(missions[4],'Geological Evidence Locker') && has(missions[4],'JCEC Geological Site Review'),'M5 student experience matches teacher synthesis system');
for (const phrase of ['Evidence ✓','Rock History ✓','Surface Change ✓','Deep Past ✓','Geological Handoff ●']) check(has(read('src/pages/courses/grade-7-science/jabberwocky/phase-5/index.astro'), phrase),`Student hub retains completed progression ${phrase}`);

// Teacher readiness questions + stop point.
for (const token of [
  'Do I know what to prepare tomorrow?','Do I know what students should finish each day?','Can I run the unit with no geology purchases?',
  'Do I know which activities actually need physical materials?','Do I know what is formative, checkpoint and major assessment?',
  'Can I recover if a lab, dataset, sample set or class goes wrong?','Do Missions 1–5 remain scientifically distinct?',
  'Does the teacher system preserve evidence-first geology?','Do Earth Reference Evidence and Jabberwocky Survey Evidence stay separate?',
  'Does Mission 5 still stop before the final Mission 2190 Council decision?','Do teacher and student systems match?'
]) check(has(teacher,token),`Teacher launch-readiness audit includes ${token}`);
check(has(teacher,'Do not begin the final Mission 2190 Council decision yet'),'Teacher guide has explicit final-Council stop point');
check(has(teacherDoc,'final Mission 2190 Council decision is not part of this guide'),'Teacher documentation stops before final Council');
check(has(pacing,'STOP HERE. The final Mission 2190 Council decision has not yet begun'),'Pacing guide stops before final Council');

if (failures.length) {
  console.error(`\nJabberwocky Phase 5 teacher-system audit failed: ${failures.length} issue(s).`);
  failures.forEach((failure)=>console.error(`  ✗ ${failure}`));
  process.exit(1);
}

console.log(`\nJabberwocky Phase 5 teacher-system audit: ${passes.length} checks passed.`);
passes.forEach((pass)=>console.log(`  ✓ ${pass}`));
console.log('\nPhase 5 teacher + student systems are aligned: five missions, 18 core classes, seven purposeful flex periods, low-material/no-purchase fallbacks, Planet Earth curriculum coverage, evidence-source safeguards, checkpoint/synthesis assessment, and no final Mission 2190 Council route.');
