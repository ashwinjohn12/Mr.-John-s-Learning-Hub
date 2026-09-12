import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const failures = [];
const passes = [];
const rel = (p) => path.join(root, p);
const read = (p) => fs.readFileSync(rel(p), 'utf8');
const check = (condition, message) => condition ? passes.push(message) : failures.push(message);

const missionPaths = Array.from({ length: 5 }, (_, i) => `src/pages/courses/grade-7-science/jabberwocky/phase-1/mission-${i + 1}/index.astro`);
const legacyPages = Array.from({ length: 7 }, (_, i) => `src/pages/courses/grade-7-science/jabberwocky/phase-1/operation-${String(i + 2).padStart(2, '0')}/index.astro`);
const legacyData = Array.from({ length: 7 }, (_, i) => `src/data/jabberwockyOperation${String(i + 2).padStart(2, '0')}.ts`);
const legacyGuides = Array.from({ length: 7 }, (_, i) => `docs/jabberwocky-operation-${String(i + 2).padStart(2, '0')}-teacher-guide.md`);

const requiredFiles = [
  'src/pages/courses/grade-7-science/jabberwocky/phase-1/index.astro',
  ...missionPaths,
  'src/pages/courses/grade-7-science/jabberwocky/phase-1/teacher-launch-guide/index.astro',
  'src/components/JcecMissionProgress.astro',
  'src/components/JcecSimplifiedMissionNavigation.astro',
  'src/components/JcecPhase1PacingRefinements.astro',
  'src/layouts/BaseLayout.astro',
  'docs/jabberwocky-phase-1-five-week-pacing-guide.md',
  'docs/jabberwocky-phase-1-teacher-launch-guide.md',
  ...legacyPages,
  ...legacyData,
  ...legacyGuides
];
for (const file of requiredFiles) check(fs.existsSync(rel(file)), `exists: ${file}`);

const hub = read('src/pages/courses/grade-7-science/jabberwocky/phase-1/index.astro');
check(hub.includes('JcecMissionProgress active={5}'), 'Phase 1 hub shows Mission 5 as current');
for (let i = 1; i <= 5; i += 1) check(hub.includes(`mission-${i}/`), `Phase 1 hub links to Mission ${i}`);
for (const title of ['Explore Your Environment','Meet a Native Species','Build the Ecosystem','Watch the Ecosystem Change','Humans Have Arrived']) check(hub.includes(title), `Phase 1 hub includes mission: ${title}`);

const missions = missionPaths.map(read);
for (let i = 0; i < missions.length; i += 1) {
  const content = missions[i];
  const num = i + 1;
  for (const token of ['Your Mission','Learn the Science','Investigate','Make a Decision','Record It']) check(content.includes(token), `Mission ${num} includes five-step structure: ${token}`);
  check(content.includes('jabberwocky-phase1-posting'), `Mission ${num} uses/carries the continent posting`);
}

check(missions[0].includes('print-field-sheet'), 'Mission 1 includes printable environmental field sheet');
check(missions[0].includes('Environment Profile'), 'Mission 1 ends with Environment Profile');
check(missions[1].includes('print-mission2-packet'), 'Mission 2 includes printable lab/species packet');
check(missions[1].includes('Native Species Card'), 'Mission 2 ends with Native Species Card');
check(missions[2].includes('print-mission3-packet'), 'Mission 3 includes printable food-web/ecosystem packet');
check(missions[2].includes('Ecosystem Map'), 'Mission 3 ends with Ecosystem Map');
check(missions[2].includes('WATER PATH') && missions[2].includes('CARBON PATH'), 'Mission 3 contains water and carbon cycling');
check(missions[2].includes('can be reused and cycled'), 'Mission 3 distinguishes matter cycling from energy flow');
check(missions[3].includes('print-mission4-packet'), 'Mission 4 includes printable sampling/change packet');
check(missions[3].includes('Ecosystem Change Record'), 'Mission 4 ends with Ecosystem Change Record');
check(missions[3].includes('Do not invent or generalize an Indigenous perspective'), 'Mission 4 preserves authentic Indigenous-source safeguard');
check(missions[3].includes('Population') && missions[3].includes('Succession'), 'Mission 4 includes population and succession science');
const mission5Lower = missions[4].toLowerCase();
check(missions[4].includes('print-mission5-board'), 'Mission 5 includes printable Recommendation Board');
check(missions[4].includes('JCEC Recommendation Board'), 'Mission 5 ends with JCEC Recommendation Board');
check(missions[4].includes('Introduced does not automatically mean invasive'), 'Mission 5 preserves introduced-versus-invasive evidence rule');
check(mission5Lower.includes('local extinction') && mission5Lower.includes('global extinction'), 'Mission 5 includes local/global extinction concepts');
for (const choice of ['Explore carefully','Explore with strong rules','Very limited exploration','Stop for now']) check(missions[4].includes(choice), `Mission 5 includes recommendation: ${choice}`);

const nav = read('src/components/JcecSimplifiedMissionNavigation.astro');
for (const token of [
  'Next Mission → Meet a Native Species',
  'Next Mission → Build the Ecosystem',
  'Next Mission → Watch the Ecosystem Change',
  'Next Mission → Humans Have Arrived'
]) check(nav.includes(token), `Simplified mission navigation includes: ${token}`);

const teacherPage = read('src/pages/courses/grade-7-science/jabberwocky/phase-1/teacher-launch-guide/index.astro');
const teacherDoc = read('docs/jabberwocky-phase-1-teacher-launch-guide.md');
const pacingDoc = read('docs/jabberwocky-phase-1-five-week-pacing-guide.md');

for (const source of [teacherPage, teacherDoc, pacingDoc]) {
  check(source.includes('18 core') || source.includes('18 CORE') || source.includes('18 core mission'), 'teacher pacing source includes 18 core classes');
  check(source.includes('7 purposeful') || source.includes('7 PURPOSEFUL') || source.includes('7 flex'), 'teacher pacing source includes 7 purposeful flex classes');
  for (const title of ['Explore Your Environment','Meet a Native Species','Build the Ecosystem','Watch the Ecosystem Change','Humans Have Arrived']) check(source.includes(title), `teacher pacing source uses five-mission name: ${title}`);
}
check(!teacherPage.includes('19 CORE + 6 FLEX'), 'live Teacher Launch Guide no longer presents old 19+6 pacing');
check(!teacherDoc.includes('19 core periods'), 'teacher documentation no longer presents old 19-core operation pacing');
check(!pacingDoc.includes('19 core mission'), 'five-week pacing guide no longer presents old operation pacing');

const coreDays = [...Array.from({length:14},(_,i)=>i+1),16,17,18,19];
const flexDays = [15,20,21,22,23,24,25];
for (const day of coreDays) check(teacherPage.includes(`day:${day},`), `Teacher Launch Guide includes core Day ${day}`);
for (const day of flexDays) check(teacherPage.includes(`day:${day},`), `Teacher Launch Guide includes flex Day ${day}`);

for (const token of ['BEFORE CLASS','MATERIALS','STUDENTS SEE / DO','KEY SCIENCE','TEACHER EMPHASIS','COLLECT / ASSESS','IF TIME RUNS OUT']) check(teacherPage.includes(token), `Teacher Launch Guide includes planning field: ${token}`);
for (const token of ['MISSION MATERIALS MASTER LIST','FORMATIVE','CHECKPOINT','MAJOR SYNTHESIS','55%','30%','15%']) check(teacherPage.includes(token), `Teacher Launch Guide includes assessment/materials element: ${token}`);
for (const material of ['Thermometer','tweezers','yarn/string','5×5 grid','6 cups/zones','JCEC Recommendation Board']) check(teacherPage.includes(material), `Teacher materials plan includes: ${material}`);

const localUrls = [
  'https://www.calgary.ca/water/stormwater/source-water-protection.html',
  'https://www.calgary.ca/water/stormwater/riparian-areas.html',
  'https://tsuutina.com/wp-content/uploads/2025/06/Niska.Newsletter.June10.2025.final_.pdf'
];
for (const url of localUrls) {
  check(teacherPage.includes(url), `live Teacher Launch Guide includes local source: ${url}`);
  check(teacherDoc.includes(url), `teacher documentation includes local source: ${url}`);
}
check(teacherPage.includes('do not invent or generalize an Indigenous perspective'), 'live Teacher Launch Guide preserves authentic-source rule');
check(teacherDoc.includes('do not ask students to invent or generalize an Indigenous perspective'), 'teacher documentation preserves authentic-source rule');

for (const phrase of ['Lab runs long','A class is lost','Outdoor work cancelled','Device failure','Student misses a lab','Students overwhelmed']) check(teacherPage.includes(phrase), `Teacher Launch Guide has contingency: ${phrase}`);
for (const question of ['Do I know what to prepare tomorrow?','Do I know what students should finish?','Do I know what to assess?','Can I recover if time is lost?','Do teacher and student systems match?']) check(teacherPage.includes(question), `Teacher Launch Guide readiness audit includes: ${question}`);

const legacyRefinement = read('src/components/JcecPhase1PacingRefinements.astro');
check(legacyRefinement.includes('ARCHIVED REFERENCE ROUTE'), 'legacy Operation pages are clearly marked as archived reference routes');
for (let i=1;i<=5;i+=1) check(legacyRefinement.includes(`mission-${i}/`), `legacy reference component can route to current Mission ${i}`);
check(!legacyRefinement.includes('19 core classes + 6 flex classes'), 'legacy pacing component no longer injects old 19+6 student pacing');

for (let i = 0; i < legacyPages.length; i += 1) {
  const op = String(i + 2).padStart(2,'0');
  const page = read(legacyPages[i]);
  check(page.includes(`jabberwockyOperation${op}`), `legacy Operation ${op} still imports its established data`);
}
for (const file of legacyGuides) check(read(file).length > 200, `legacy teacher guide preserved: ${file}`);

const layout = read('src/layouts/BaseLayout.astro');
check(layout.includes('JcecPhase1PacingRefinements'), 'BaseLayout keeps legacy reference notice integration');
check(layout.includes('JcecSimplifiedMissionNavigation'), 'BaseLayout keeps simplified mission navigation');

console.log(`\nJabberwocky Phase 1 readiness audit: ${passes.length} checks passed.`);
for (const item of passes) console.log(`  ✓ ${item}`);
if (failures.length) {
  console.error(`\n${failures.length} readiness check(s) failed:`);
  for (const item of failures) console.error(`  ✗ ${item}`);
  process.exit(1);
}
console.log('\nPhase 1 student Missions 1–5, five-mission teacher pacing, materials, assessment plan, local-source safeguards, navigation, print resources, contingencies, and archived Operation references are internally consistent.');
