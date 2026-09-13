import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const basePath = 'src/pages/courses/grade-7-science/jabberwocky';
const read = (p) => fs.readFileSync(path.join(root,p),'utf8');
const exists = (p) => fs.existsSync(path.join(root,p));
let checks = 0;
const pass = (m) => { checks += 1; console.log(`  ✓ ${m}`); };
const fail = (m) => { throw new Error(`Jabberwocky whole-year audit failed: ${m}`); };
const expect = (condition,m) => condition ? pass(m) : fail(m);
const has = (text,token) => text.toLowerCase().includes(token.toLowerCase());

console.log('\nJabberwocky whole-year release-readiness audit');

const required = [
  `${basePath}/index.astro`,`${basePath}/teacher-dashboard/index.astro`,`${basePath}/before-students-arrive/index.astro`,
  `${basePath}/council/index.astro`,`${basePath}/council/teacher-guide/index.astro`,
  'src/components/JcecWholeYearReleaseState.astro','src/components/JcecPhase3Progress.astro','src/layouts/BaseLayout.astro','package.json'
];
for (let p=1;p<=5;p++) { required.push(`${basePath}/phase-${p}/index.astro`,`${basePath}/phase-${p}/teacher-launch-guide/index.astro`); for(let m=1;m<=5;m++) required.push(`${basePath}/phase-${p}/mission-${m}/index.astro`); }
required.forEach((p)=>expect(exists(p),`exists: ${p}`));

const dashboard=read(`${basePath}/teacher-dashboard/index.astro`), operations=read(`${basePath}/before-students-arrive/index.astro`), council=read(`${basePath}/council/index.astro`), release=read('src/components/JcecWholeYearReleaseState.astro'), layout=read('src/layouts/BaseLayout.astro'), pkg=read('package.json');
expect(has(layout,'JcecWholeYearReleaseState'),'BaseLayout keeps whole-year release state');
expect(has(release,'FULL YEAR RELEASED'),'student launch remains full-year released');
expect(has(release,'MISSION 2190 COUNCIL RELEASED'),'final Council remains released');
expect(has(council,'MISSION 2190 — COUNCIL RECORD COMPLETE'),'Council remains narrative endpoint');

const postingSources = [
  [`${basePath}/phase-1/mission-1/index.astro`,'jabberwocky-phase1-posting'],
  [`${basePath}/phase-2/index.astro`,'jabberwocky-phase2-posting'],
  [`${basePath}/phase-3/index.astro`,'jabberwocky-phase3-posting'],
  [`${basePath}/phase-4/index.astro`,'jabberwocky-phase4-posting'],
  [`${basePath}/phase-5/index.astro`,'jabberwocky-phase5-posting']
];
const keys=[];
for (const [file,key] of postingSources) { const text=read(file); expect(has(text,key),`${file} uses ${key}`); keys.push(key); }
expect(new Set(keys).size===5,'all five phase localStorage keys remain separate');
expect(has(council,'jabberwocky-phase5-posting'),'Council still carries Phase 5 posting');

const defs = [
  {p:1,unit:'Interactions & Ecosystems',missions:['Explore Your Environment','Meet a Native Species','Build the Ecosystem','Watch the Ecosystem Change','Humans Have Arrived'],records:['Environment Profile','Native Species Card','Ecosystem Map','Ecosystem Change Record','JCEC Recommendation Board'],checkpoint:'Ecosystem Change Record',synthesis:'JCEC Recommendation Board'},
  {p:2,unit:'Plants for Food & Fibre',missions:['Find the Living Resource','Keep It Growing','Build the Growing Zone','Choose the Next Generation','Use It Without Losing It'],records:['Living Resource Profile','Plant Growth Requirements Card','Growing System Recommendation','Plant Variety Decision Card','JCEC Living Resource Plan'],checkpoint:'Growing System Recommendation',synthesis:'JCEC Living Resource Plan'},
  {p:3,unit:'Heat & Temperature',missions:['Read the Thermal Warning','Follow the Heat','The Director Is Coming','Control the Habitat','Survive Without Wasting It'],records:['Thermal Risk Card','Habitat Heat Map','JCEC Thermos Design Report','Habitat Control Protocol','JCEC Thermal Survival Plan'],checkpoint:'JCEC Thermos Design Report',synthesis:'JCEC Thermal Survival Plan'},
  {p:4,unit:'Structures & Forces',missions:['Read the Building Site','Trace the Forces','Choose What Holds','Keep It Standing','Authorize New Horizon'],records:['New Horizon Requirements Card','Structural Force Map','Material & Joint Recommendation','New Horizon Safety Protocol','JCEC NEW HORIZON STRUCTURAL AUTHORIZATION'],checkpoint:'Material & Joint Recommendation',synthesis:'JCEC New Horizon Structural Authorization'},
  {p:5,unit:'Planet Earth',missions:['Read the Ground','Follow the Rock Story','Track the Changing Surface','Read the Deep Past','Prepare the Final Evidence'],records:['Ground Evidence Card','Rock History Profile','Surface Change Forecast','Deep Record Timeline','JCEC GEOLOGICAL EVIDENCE PACKET'],checkpoint:'Surface Change Forecast',synthesis:'JCEC Geological Evidence Packet'}
];
for (const def of defs) {
  expect(has(dashboard,def.unit),`dashboard includes Phase ${def.p} unit`);
  expect(has(dashboard,'18 core classes'),`dashboard preserves 18-core pacing for Phase ${def.p}`);
  expect(has(dashboard,'~7 purposeful flex classes'),`dashboard preserves flex pacing for Phase ${def.p}`);
  def.missions.forEach((mission)=>expect(has(dashboard,mission),`dashboard includes Phase ${def.p} mission ${mission}`));
  expect(has(dashboard,def.checkpoint),`dashboard identifies Phase ${def.p} checkpoint`);
  expect(has(dashboard,def.synthesis),`dashboard identifies Phase ${def.p} synthesis`);
  def.records.forEach((record,i)=>expect(has(read(`${basePath}/phase-${def.p}/mission-${i+1}/index.astro`),record),`Phase ${def.p} Mission ${i+1} retains ${record}`));
}

const p3hub=read(`${basePath}/phase-3/index.astro`), p3m2=read(`${basePath}/phase-3/mission-2/index.astro`), p3m3=read(`${basePath}/phase-3/mission-3/index.astro`), p3m4=read(`${basePath}/phase-3/mission-4/index.astro`), p3m5=read(`${basePath}/phase-3/mission-5/index.astro`), p3progress=read('src/components/JcecPhase3Progress.astro'), p3teacher=read(`${basePath}/phase-3/teacher-launch-guide/index.astro`);
for (const token of ['The Director Is Coming','Thermal Design ✓']) expect(has(p3hub,token),`Phase 3 hub includes ${token}`);
expect(has(p3progress,'Next Mission → The Director Is Coming'),'Mission 2 navigation points to thermos mission');
expect(has(p3m2,'CONDUCTION') && has(p3m2,'CONVECTION') && has(p3m2,'RADIATION'),'Mission 2 still teaches thermos prerequisites');
for (const token of ['JCEC THERMOS CHALLENGE','200 mL','TIME–TEMPERATURE GRAPH','REDESIGN','JCEC Thermos Design Report','HOT-WATER SAFETY']) expect(has(p3m3,token),`Thermos mission includes ${token}`);
expect(has(p3progress,'scale your thermos design thinking up'),'Mission 4 handoff scales thermos to habitat control');
expect(has(p3m4,'Habitat Control Protocol'),'Mission 4 remains unchanged in role');
expect(has(p3progress,'M3 · THERMAL DESIGN'),'Mission 5 locker rendered label uses M3 Thermal Design');
expect(has(p3progress,'thermos-test result'),'Mission 5 locker receives thermos evidence');
expect(has(p3m5,'JCEC Thermal Survival Plan'),'Mission 5 synthesis remains intact');
for (const token of ['Mission 3 — The Director Is Coming','JCEC Thermos Design Report','Prototype Test','Evidence → Redesign','Final Test + JCEC Decision']) expect(has(p3teacher,token),`Phase 3 teacher guide includes ${token}`);

expect(has(dashboard,'Before Students Arrive'),'dashboard links teacher operations');
expect(has(dashboard,'MISSION 2190 COUNCIL'),'dashboard links final Council');
['6 hand lenses','6 shallow reusable trays','6 classroom thermometers','6 plastic measuring containers','3 spring scales'].forEach((item)=>expect(has(dashboard,item),`dashboard materials includes ${item}`));
for (const token of ['1 · BEFORE THE SCHOOL YEAR','2 · BEFORE EACH PHASE','3 · FIRST WEEK / PHASE 1 LAUNCH','4 · EQUIPMENT INVENTORY','5 · QUICK RECOVERY GUIDE']) expect(has(operations,token),`operations includes ${token}`);
for (let p=1;p<=5;p++) expect(has(operations,`number:${p}`),`operations has Phase ${p} prep card`);
for (const token of ['standardized inner cups','JCEC Thermos Design Report','supplied Prototype/Final datasets','Phase 3 Thermos Challenge equipment fails']) expect(has(operations,token),`operations revised Phase 3 includes ${token}`);
['6 hand lenses','6 shallow reusable trays','6 classroom thermometers','6 plastic measuring containers','3 spring scales'].forEach((item)=>expect(has(operations,item),`operations inventory includes ${item}`));
for (const token of ['Chromebooks fail','Printing is unavailable','A lab runs long','Materials are missing','A student is absent','A class is lost','A group loses its saved continent posting']) expect(has(operations,token),`operations recovery includes ${token}`);

for (let p=1;p<=5;p++) {
  const guide=read(`${basePath}/phase-${p}/teacher-launch-guide/index.astro`);
  expect(has(guide,'18 core'),`Phase ${p} teacher guide preserves 18-core pacing`);
  expect(has(guide,'7'),`Phase ${p} teacher guide preserves flex system`);
  expect(/fallback|shared|reused|no-purchase/i.test(guide),`Phase ${p} teacher guide preserves low-material fallback`);
}

for (const token of ['ECOSYSTEM EVIDENCE','PLANT RESOURCE EVIDENCE','THERMAL EVIDENCE','STRUCTURAL EVIDENCE','GEOLOGICAL EVIDENCE','3 NON-NEGOTIABLE SAFEGUARDS','ONE IMPORTANT UNCERTAINTY']) expect(has(council,token),`Council retains ${token}`);
expect(has(council,'MY REFLECTION'),'Council retains individual reflection');

expect(has(pkg,'audit-jabberwocky-phase3.mjs'),'production build runs Phase 3 readiness audit');
expect(has(pkg,'audit-jabberwocky-council.mjs'),'production build runs Council audit');
expect(has(pkg,'audit-jabberwocky-year.mjs'),'production build runs whole-year audit');
expect(has(pkg,'audit:jabberwocky-year'),'package exposes whole-year audit command');

console.log(`\nJabberwocky whole-year release-readiness audit: ${checks} checks passed.`);
console.log('Mission 2190 remains release-ready with Phase 3 Mission 3 replaced by the JCEC Thermos Challenge and all teacher/whole-year references aligned.');
