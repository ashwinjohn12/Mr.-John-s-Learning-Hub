import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const passes=[];
const failures=[];
const rel=(p)=>path.join(root,p);
const read=(p)=>fs.readFileSync(rel(p),'utf8');
const has=(text,token)=>text.toLowerCase().includes(token.toLowerCase());
const check=(ok,message)=>ok?passes.push(message):failures.push(message);

const files={
  hub:'src/pages/courses/grade-7-science/jabberwocky/phase-4/index.astro',
  m1:'src/pages/courses/grade-7-science/jabberwocky/phase-4/mission-1/index.astro',
  m2:'src/pages/courses/grade-7-science/jabberwocky/phase-4/mission-2/index.astro',
  m3:'src/pages/courses/grade-7-science/jabberwocky/phase-4/mission-3/index.astro',
  m4:'src/pages/courses/grade-7-science/jabberwocky/phase-4/mission-4/index.astro',
  m5:'src/pages/courses/grade-7-science/jabberwocky/phase-4/mission-5/index.astro',
  teacher:'src/pages/courses/grade-7-science/jabberwocky/phase-4/teacher-launch-guide/index.astro',
  teacherDoc:'docs/jabberwocky-phase-4-teacher-launch-guide.md',
  pacingDoc:'docs/jabberwocky-phase-4-five-week-pacing-guide.md',
  progress:'src/components/JcecPhase4Progress.astro',
  data:'src/data/jabberwockyPhase4.ts'
};
for(const file of Object.values(files)) check(fs.existsSync(rel(file)),`exists: ${file}`);
check(fs.existsSync(rel('src/pages/courses/grade-7-science/jabberwocky/phase-5/index.astro')),'Approved Phase 5 hub now exists');
check(fs.existsSync(rel('src/pages/courses/grade-7-science/jabberwocky/phase-5/mission-1/index.astro')),'Approved Phase 5 Mission 1 prototype now exists');

const hub=read(files.hub),m1=read(files.m1),m2=read(files.m2),m3=read(files.m3),m4=read(files.m4),m5=read(files.m5),teacher=read(files.teacher),teacherDoc=read(files.teacherDoc),pacingDoc=read(files.pacingDoc),progress=read(files.progress),data=read(files.data);
const all=[m1,m2,m3,m4,m5].join('\n');
const teacherAll=[teacher,teacherDoc,pacingDoc].join('\n');

for(const token of ['PROJECT NEW HORIZON','Read the Building Site','Trace the Forces','Choose What Holds','Keep It Standing','Authorize New Horizon']) check(has(hub,token),`Hub includes ${token}`);
for(const token of ['Requirements ✓','Forces ✓','Materials ✓','Stability ✓','Authorization ●']) check(has(hub,token),`Hub final progress includes ${token}`);
check((hub.match(/status:'COMPLETE'/g)||[]).length===4,'Hub marks Missions 1–4 complete');
check((hub.match(/status:'CURRENT'/g)||[]).length===1,'Hub marks only Mission 5 current');
check(hub.includes('phase-4/mission-5/'),'Hub releases Mission 5');
check(hub.includes('jabberwocky-phase4-posting'),'Hub keeps separate Phase 4 posting state');
for(const token of ['Next Mission → Trace the Forces','Next Mission → Choose What Holds','Next Mission → Keep It Standing','Next Mission → Authorize New Horizon']) check(has(progress,token),`Progress navigation includes ${token}`);
check(progress.includes('phase-4/mission-5/'),'Phase 4 navigation releases Mission 5');
check(progress.includes('Begin Phase 5 → The Deep Record')&&progress.includes('/phase-5/'),'Phase 4 conclusion now hands students to the approved Phase 5 hub');
check(has(progress,'The final Mission 2190 Council decision has not begun yet'),'Phase 4 handoff releases Phase 5 without starting the final Council');

const missions=[m1,m2,m3,m4,m5];
const records=['New Horizon Requirements Card','Structural Force Map','Material & Joint Recommendation','New Horizon Safety Protocol','JCEC NEW HORIZON STRUCTURAL AUTHORIZATION'];
missions.forEach((mission,i)=>{
  for(const token of ['Your Mission','Learn the Science','Investigate','Make a Decision','Record It']) check(has(mission,token),`Mission ${i+1} includes ${token}`);
  check(has(mission,records[i]),`Mission ${i+1} keeps distinct Team Record: ${records[i]}`);
});
check(m2.includes('jabberwocky-phase4-posting')&&m3.includes('jabberwocky-phase4-posting')&&m4.includes('jabberwocky-phase4-posting')&&m5.includes('jabberwocky-phase4-posting'),'Missions 2–5 carry the existing Phase 4 posting');
check(!m2.includes('<select')&&!m3.includes('<select')&&!m4.includes('<select')&&!m5.includes('<select'),'Missions 2–5 do not ask students to reselect a continent');

const coreTokens=[
  'FRAME','SHELL','function','performance requirement','natural',
  'mass','newtons','friction','TENSION','COMPRESSION','SHEARING','BENDING',
  'STRENGTH','FLEXIBILITY','STIFFNESS','DEFORMATION','FIXED JOINT','FLEXIBLE JOINT','Natural and synthetic','BONE','CARTILAGE','LIGAMENT',
  'MASS DISTRIBUTION + FOUNDATION','corrugation','lamination','fastening / bracing','MARGIN OF SAFETY',
  'RELIABILITY','MATERIAL EFFICIENCY','CONSTRUCTION COST / COMPLEXITY','ENVIRONMENTAL IMPACT'
];
for(const token of coreTokens) check(has(all,token),`Phase 4 core coverage includes ${token}`);
check(has(m3,'load-versus-deformation graph'),'Mission 3 includes quantitative graphing');
check(has(m3,'same specified load')||has(m3,'Same load, compare deformation'),'Mission 3 includes controlled material testing');
check(has(m4,'PROPOSE 2 ALTERNATIVES')&&has(m4,'RETEST'),'Mission 4 includes alternatives, modification and retesting');
check(has(m4,'Did the change solve the weakness? Did it create a new problem?'),'Mission 4 includes troubleshooting');
check(has(m4,'NO STRONGEST / TALLEST MODEL COMPETITION'),'Mission 4 rejects build competition');
check(has(m5,'DESIGN REVIEW MATRIX'),'Mission 5 includes complete design review');
for(const token of ['FUNCTION','RELIABILITY','SAFETY','MATERIAL EFFICIENCY','CONSTRUCTION COST / COMPLEXITY','ENVIRONMENTAL IMPACT']) check(has(m5,token),`Mission 5 review includes ${token}`);
for(const token of ['M1 · REQUIREMENTS','M2 · FORCES','M3 · MATERIALS','M4 · SAFETY']) check(has(m5,token),`Evidence Locker includes ${token}`);
for(const token of ['PROCEED','PROCEED AFTER REQUIRED MODIFICATIONS','LIMIT THE BUILD','HOLD FOR MORE EVIDENCE']) check(has(m5,token),`Mission 5 authorization includes ${token}`);
check(has(m5,'science understanding → evidence use → structural reasoning → safety → environmental responsibility'),'Mission 5 keeps approved synthesis focus');
check(has(m3,'checkpoint'),'Mission 3 remains the stronger checkpoint');
check(has(m5,'MAJOR PHASE 4 SYNTHESIS'),'Mission 5 remains the major synthesis');

for(const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) check(data.includes(`id: '${continent}'`),`Phase 4 core data includes ${continent}`);
for(const forbidden of ['earthquake','tsunami','hurricane','volcano','grid failure','power failure','wind speed','soil capacity']) check(!has(data,forbidden),`Phase 4 core data avoids unsupported hazard/data: ${forbidden}`);

for(const token of ['PHASE 4 TEACHER LAUNCH GUIDE','18 core classes','7 purposeful flex','Mission 1 — Read the Building Site','Mission 2 — Trace the Forces','Mission 3 — Choose What Holds','Mission 4 — Keep It Standing','Mission 5 — Authorize New Horizon']) check(has(teacher,token),`Teacher guide includes ${token}`);
for(const token of ['BEFORE CLASS','MATERIALS','STUDENTS SEE / DO','KEY SCIENCE','TEACHER EMPHASIS','COLLECT / ASSESS','IF TIME RUNS OUT']) check(has(teacher,token),`Teacher guide planning field: ${token}`);
check((teacher.match(/day:/g)||[]).length>=25,'Teacher guide contains 18 core + 7 flex day records');
for(const day of [7,12,17,22,23,24,25]) check(has(teacher,`day:${day}`),`Teacher guide includes purposeful flex Day ${day}`);
check(has(pacingDoc,'18 core classes + 7 purposeful flex periods'),'Pacing guide states 25-period structure');
for(const day of [7,12,17,22,23,24,25]) check(has(pacingDoc,`Day ${day}`),`Pacing guide includes flex Day ${day}`);

for(const token of ['Structure Detective','Blackfoot Crossing','Force Pattern Stations','spring-scale','force-measurement','Material & Joint Fair Test','load-versus-deformation','Joint Check','Nature’s Materials','Standardized Stability & Improvement Investigation','JCEC Structural Design Review','Structural Design Toolkit','Design Review Matrix','Evidence Locker','JCEC New Horizon Structural Authorization']) check(has(teacherAll,token),`Teacher materials/implementation system includes ${token}`);
for(const token of ['ordinary classroom supplies','shared/reused equipment','printables/data fallbacks','specialty equipment only as optional enrichment']) check(has(teacherAll,token),`Teacher system preserves low-material rule: ${token}`);
check(has(teacher,'One teacher station or 1–3 shared force meters is enough')||has(teacher,'1–3 shared spring scales'),'Teacher guide uses realistic spring-scale sharing');
check(has(teacher,'Never purchase one per group')||has(teacherDoc,'class set is unnecessary'),'Teacher guide removes one-scale-per-group assumption');
for(const token of ['NO-PURCHASE FALLBACK','no-purchase fallback','fallback']) check(has(teacherAll,token),`Teacher system includes fallback language: ${token}`);
for(const forbidden of ['large quantities of craft sticks','hot glue','saws','utility knives','large physical final structure']) check(has(teacherAll,forbidden)||has(teacherAll,forbidden.replace('large physical final structure','No final physical build'))||has(teacherAll,forbidden.replace('large quantities of craft sticks','large craft-stick purchases')),`Teacher system explicitly avoids ${forbidden}`);

for(const token of ['No spring scale available','Missing station materials','Noisy or contradictory material-test data','Uneven material samples','Student absent during an investigation','A class is lost','Mission 3 testing runs long','Graphing takes too long','Baseline stability models behave differently','A model fails before meaningful data','Students begin competing for maximum load','Mission 4 modification/retest runs long','Mission 5 Design Review runs long','Printing/device failure']) check(has(teacherAll,token),`Teacher contingency exists: ${token}`);

for(const token of ['Mission 1','Mission 2','Mission 3','Mission 4','Mission 5','Formative','Checkpoint','Major synthesis','30%','55%','15%','optional individual Structures & Forces science check']) check(has(teacherAll,token),`Teacher assessment system includes ${token}`);
check(has(teacher,'M3 tests components/materials')&&has(teacher,'M4 tests whole-system stability'),'Teacher guide keeps Mission 3 and Mission 4 distinct');
check(has(teacher,'There is no strongest-model prize')||has(teacher,'science-first'),'Teacher guide protects science-first implementation');

for(const token of ['function/performance requirements','frame/shell/frame-and-shell','same-function design variation','natural structures','different cultures/times','failure points','mass vs force units','loads','friction','tension','compression','shearing','bending','strength','flexibility','stiffness/deformation','controlled material testing','fixed/flexible joints','natural/synthetic materials','structural materials in plants/animals','mass distribution','foundations','stability','corrugation','lamination','component shape','fastening/bracing','environmental factors','margin of safety','prototype alternatives','modification/retesting','troubleshooting','quantitative/qualitative evidence','tables/graphs','evidence-based structural decisions']) check(has(teacherDoc,token),`Teacher curriculum documentation includes ${token}`);
for(const token of ['formal stress/strain equations','torque calculations','beam mathematics','numerical safety-factor calculations','advanced engineering economics','torsion as a required fifth internal-force type']) check(has(teacherAll,token),`Teacher scope guard excludes ${token}`);
check(has(teacher,'https://education.alberta.ca/media/159716/sci7to9.pdf'),'Teacher guide links official Alberta Science 7–9 program');

for(const token of ['https://blackfootcrossing.ca/our-culture/','A-Home-for-our-History-V5a-spreads.pdf','do not generalize','invent cultural meaning','reproduce sacred designs']) check(has(teacherAll,token),`Teacher system preserves authentic-source safeguard: ${token}`);

for(const token of ['Do I know what to prepare tomorrow?','Do I know what students should finish each day?','Do I know when spring scales/shared equipment are needed?','Can I run the whole unit without buying specialized equipment?','Do I know what is formative, checkpoint and major assessment?','Can I recover if a test, model or class goes wrong?','Do Mission 3 and Mission 4 remain different?','Does this stay science-first rather than competition-first?','Do teacher and student systems match?']) check(has(teacher,token),`Teacher launch-readiness audit includes ${token}`);
check(has(teacher,'Do not begin Phase 5')&&has(teacherDoc,'Do not begin Phase 5')&&has(pacingDoc,'No Phase 5'),'Phase 4 teacher materials remain scoped to Phase 4 rather than teaching Phase 5 content early');
check(!teacher.includes('/phase-5/')&&!teacherDoc.includes('/phase-5/')&&!pacingDoc.includes('/phase-5/'),'Phase 4 teacher implementation does not embed Phase 5 lessons');

if(failures.length){
  console.error(`\nJabberwocky Phase 4 readiness audit failed: ${failures.length} issue(s).`);
  failures.forEach((failure)=>console.error(`  ✗ ${failure}`));
  process.exit(1);
}
console.log(`\nJabberwocky Phase 4 readiness audit: ${passes.length} checks passed.`);
passes.forEach((pass)=>console.log(`  ✓ ${pass}`));
console.log('\nPhase 4 remains internally aligned and now hands students forward to the approved Phase 5 Deep Record hub; the Phase 4 teacher system remains scoped to its own unit.');
