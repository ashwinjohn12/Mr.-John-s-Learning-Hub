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
  progress:'src/components/JcecPhase4Progress.astro',
  data:'src/data/jabberwockyPhase4.ts'
};
for(const file of Object.values(files)) check(fs.existsSync(rel(file)),`exists: ${file}`);
check(!fs.existsSync(rel('src/pages/courses/grade-7-science/jabberwocky/phase-5/index.astro')),'Phase 5 hub is not built');
check(!fs.existsSync(rel('src/pages/courses/grade-7-science/jabberwocky/phase-5/mission-1/index.astro')),'Phase 5 student content is not built');

const hub=read(files.hub),m1=read(files.m1),m2=read(files.m2),m3=read(files.m3),m4=read(files.m4),m5=read(files.m5),progress=read(files.progress),data=read(files.data);
const all=[m1,m2,m3,m4,m5].join('\n');

// Final hub and navigation state
for(const token of ['PROJECT NEW HORIZON','Read the Building Site','Trace the Forces','Choose What Holds','Keep It Standing','Authorize New Horizon']) check(has(hub,token),`Hub includes ${token}`);
for(const token of ['Requirements ✓','Forces ✓','Materials ✓','Stability ✓','Authorization ●']) check(has(hub,token),`Hub final progress includes ${token}`);
check((hub.match(/status:'COMPLETE'/g)||[]).length===4,'Hub marks Missions 1–4 complete');
check((hub.match(/status:'CURRENT'/g)||[]).length===1,'Hub marks only Mission 5 current');
check((hub.match(/status:'UPCOMING'/g)||[]).length===0,'Hub has no upcoming Phase 4 mission after Mission 5');
check(hub.includes('phase-4/mission-5/'),'Hub releases Mission 5');
check(hub.includes('jabberwocky-phase4-posting'),'Hub keeps separate Phase 4 posting state');
check(has(hub,'Structural Evidence Locker'),'Hub tells students the final mission uses compact evidence rather than reopening archives');
for(const token of ['Next Mission → Trace the Forces','Next Mission → Choose What Holds','Next Mission → Keep It Standing','Next Mission → Authorize New Horizon']) check(has(progress,token),`Progress navigation includes ${token}`);
check(progress.includes('phase-4/mission-5/')&&!progress.includes('/phase-5/'),'Navigation ends at Mission 5 with no Phase 5 route');

// All five missions keep standard student structure and distinct records
const missions=[m1,m2,m3,m4,m5];
const records=['New Horizon Requirements Card','Structural Force Map','Material & Joint Recommendation','New Horizon Safety Protocol','JCEC NEW HORIZON STRUCTURAL AUTHORIZATION'];
missions.forEach((mission,i)=>{
  for(const token of ['Your Mission','Learn the Science','Investigate','Make a Decision','Record It']) check(has(mission,token),`Mission ${i+1} includes ${token}`);
  check(has(mission,records[i]),`Mission ${i+1} keeps distinct Team Record: ${records[i]}`);
});
check(m2.includes('jabberwocky-phase4-posting')&&m3.includes('jabberwocky-phase4-posting')&&m4.includes('jabberwocky-phase4-posting')&&m5.includes('jabberwocky-phase4-posting'),'Missions 2–5 carry the existing Phase 4 posting');
check(!m2.includes('<select')&&!m3.includes('<select')&&!m4.includes('<select')&&!m5.includes('<select'),'Missions 2–5 do not ask students to reselect a continent');

// Mission 5 structure and cognitive-load safeguards
for(const token of ['MISSION 5 OF 5','What structural system should JCEC authorize for this continent?','4 classes × 45 minutes','JCEC Structural Design Review','conceptual design-review simulation']) check(has(m5,token),`Mission 5 includes ${token}`);
check(has(m5,'You do not need to reopen or copy your old Team Records'),'Mission 5 prevents archive/paperwork overload');
for(const token of ['FUNCTION','RELIABILITY','SAFETY','MATERIAL EFFICIENCY','CONSTRUCTION COST / COMPLEXITY','ENVIRONMENTAL IMPACT']) check(has(m5,token),`Mission 5 review includes ${token}`);
check(has(m5,'LOW / MEDIUM / HIGH resource demand')&&has(m5,'1 / 2 / 3 JCEC construction units'),'Mission 5 keeps construction cost/complexity relative and Grade 7 friendly');
check(has(m5,'not calculating real construction budgets'),'Mission 5 avoids real structural economics');

// Structural Design Toolkit
for(const token of ['STRUCTURAL FORM','Frame','Shell','Frame + shell','SUPPORT APPROACH','Distributed / wider support','Limited / elevated support','Compact support footprint','Modular / lightweight approach','MATERIAL PROPERTIES','Strong under tension','Strong under compression','CONNECTIONS','STRENGTHENING','Corrugation','Lamination','Bracing / improved fastening']) check(has(m5,token),`Mission 5 toolkit includes ${token}`);
check(has(m5,'PROPERTIES FIRST')&&has(m5,'steel or titanium'),'Mission 5 prioritizes properties instead of assuming named materials');
check(has(m5,'Do not require them to physically build a final habitat')||has(m5,'not a final construction project'),'Mission 5 is not a large final build');

// Design Review Matrix and Evidence Locker
check(has(m5,'DESIGN REVIEW MATRIX'),'Mission 5 includes the six-part Design Review Matrix');
check((m5.match(/criterion\.name/g)||[]).length>=1,'Mission 5 renders the review criteria dynamically');
for(const token of ['Strong enough evidence?','Concern','Possible revision']) check(has(m5,token),`Design Review Matrix includes ${token}`);
for(const token of ['M1 · REQUIREMENTS','M2 · FORCES','M3 · MATERIALS','M4 · SAFETY']) check(has(m5,token),`Structural Evidence Locker includes ${token}`);
check(has(m5,'OUR 3 STRONGEST PIECES OF EVIDENCE'),'Mission 5 asks students to choose three strongest evidence items');
check(has(m5,'real investigation evidence is stronger or different'),'Mission 5 lets classroom evidence override reminder cards');

// All eight review concerns remain grounded and open-ended
for(const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) check(has(m5,`${continent}:`)||has(m5,`'${continent}':`),`Mission 5 contains ${continent} design-review case`);
check((m5.match(/concern:/g)||[]).length===8,'All eight continents receive one Mission 5 review concern');
for(const forbidden of ['earthquake','tsunami','volcano','hurricane','wind speed','soil bearing capacity']) check(!has(m5,forbidden),`Mission 5 avoids unsupported hazard/data: ${forbidden}`);
check(has(m5,'No continent has an automatically correct status'),'Authorization status is not predetermined by continent');
check(has(m5,'REQUIRED REVISION'),'Mission 5 requires one concern-driven revision');

// Final decision and authorization statuses
check(has(m5,'What structural system should JCEC authorize, and what rules must humans follow when building it?'),'Mission 5 has one obvious final team decision');
for(const token of ['STRUCTURAL CHOICE','EVIDENCE','FAILURE RISK','SAFETY RULE','ENVIRONMENTAL SAFEGUARD']) check(has(m5,token),`Mission 5 reasoning includes ${token}`);
for(const token of ['PROCEED','PROCEED AFTER REQUIRED MODIFICATIONS','LIMIT THE BUILD','HOLD FOR MORE EVIDENCE']) check(has(m5,token),`Mission 5 authorization includes ${token}`);

// Final Team Record and assessment
for(const token of ['CONTINENT / SITE','STRUCTURE FUNCTION','PRIMARY STRUCTURAL FORM','MAIN LOAD / FORCE RISK','REQUIRED MATERIAL PROPERTIES','JOINT / CONNECTION RULE','FOUNDATION / STABILITY RULE','STRENGTHENING METHOD','MARGIN-OF-SAFETY RULE','3 STRONGEST PIECES OF EVIDENCE','RELATIVE CONSTRUCTION / RESOURCE DEMAND','ENVIRONMENTAL SAFEGUARD','AUTHORIZATION STATUS','WHY · 3–5 SENTENCES']) check(has(m5,token),`Structural Authorization includes ${token}`);
check(has(m5,'not an art or architectural-drawing assessment'),'Final assessment does not reward artistic polish');
check(has(m5,'science understanding → evidence use → structural reasoning → safety → environmental responsibility'),'Mission 5 states approved major-synthesis assessment focus');
check(has(m5,'What design change could make a structure stronger or easier to build but create a new environmental or safety problem?'),'Mission 5 includes approved reflection');
check(has(m5,'PHASE 4 IS FINISHED WHEN:'),'Mission 5 has an explicit Phase 4 finish line');
check(has(m5,'Phase 5 has not been released'),'Mission 5 explicitly stops before Phase 5');
check(!m5.includes('/phase-5/'),'Mission 5 creates no Phase 5 route');
check(m5.includes('print-phase4-mission5'),'Mission 5 includes printable/savable final record');

// Low-material implementation
for(const token of ['Printable/projected toolkit cards','pencils','No final large physical habitat','NO-PURCHASE IMPLEMENTATION']) check(has(m5,token),`Mission 5 low-material system includes ${token}`);
check(has(m5,'Mission 5 works even if nothing is physically built'),'Mission 5 can run without new purchases');

// Pacing and assessment balance
for(const token of ['Assemble the Structural System','JCEC Design Review','Evidence and Revision','Authorize New Horizon']) check(has(m5,token),`Mission 5 pacing includes ${token}`);
check(has(m1,'3 classes')||has(m1,'3 × 45')||has(m1,'3 classes × 45'),'Mission 1 remains about 3 classes');
check(has(m2,'3 classes')||has(m2,'3 × 45')||has(m2,'3 classes × 45'),'Mission 2 remains about 3 classes');
check(has(m3,'4 classes')||has(m3,'4 × 45')||has(m3,'4 classes × 45'),'Mission 3 remains about 4 classes');
check(has(m4,'4 classes')||has(m4,'4 × 45')||has(m4,'4 classes × 45'),'Mission 4 remains about 4 classes');
check(has(m5,'4 classes × 45 minutes'),'Mission 5 remains 4 classes');
check(has(m3,'SCIENCE REASONING CHECKPOINT')||has(m3,'stronger structural-science reasoning checkpoint')||has(m3,'checkpoint'),'Mission 3 remains the stronger checkpoint');
check(has(m5,'MAJOR PHASE 4 SYNTHESIS'),'Mission 5 is the major synthesis');
check(has(m4,'Do not copy your Mission 3 material recommendation'),'Mission 4 record remains distinct from Mission 3');

// Core Alberta Structures & Forces coverage across the five missions
const coreTokens=[
  'FRAME','SHELL','function','performance requirement','natural',
  'mass','newtons','friction','TENSION','COMPRESSION','SHEARING','BENDING',
  'STRENGTH','FLEXIBILITY','STIFFNESS','DEFORMATION','FIXED JOINT','FLEXIBLE JOINT','Natural and synthetic','BONE','CARTILAGE','LIGAMENT',
  'MASS DISTRIBUTION + FOUNDATION','corrugation','lamination','fastening / bracing','MARGIN OF SAFETY',
  'RELIABILITY','MATERIAL EFFICIENCY','CONSTRUCTION COST / COMPLEXITY','ENVIRONMENTAL IMPACT'
];
for(const token of coreTokens) check(has(all,token),`Phase 4 core coverage includes ${token}`);
check(has(m3,'load-versus-deformation graph'),'Phase 4 includes quantitative graphing in Mission 3');
check(has(m3,'Same load, compare deformation')||has(m3,'same specified load'),'Mission 3 includes controlled-variable fair testing');
check(has(m4,'PROPOSE 2 ALTERNATIVES')&&has(m4,'RETEST'),'Mission 4 includes prototype alternatives, modification and retesting');
check(has(m4,'Did the change solve the weakness? Did it create a new problem?'),'Mission 4 includes troubleshooting');
check(has(m5,'six checks before authorization')||has(m5,'Six checks before authorization'),'Mission 5 evaluates the complete design against multiple criteria');

// Canon and phase coherence
for(const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) check(data.includes(`id: '${continent}'`),`Phase 4 core data still includes ${continent}`);
for(const forbidden of ['earthquake','tsunami','hurricane','volcano','grid failure','power failure','wind speed','soil capacity']) check(!has(data,forbidden),`Phase 4 core data avoids unsupported hazard/data: ${forbidden}`);
check(has(m1,'New Horizon Requirements Card')&&has(m2,'Structural Force Map')&&has(m3,'Material & Joint Recommendation')&&has(m4,'New Horizon Safety Protocol')&&has(m5,'STRUCTURAL EVIDENCE LOCKER'),'Final synthesis reuses distinct evidence from Missions 1–4');

if(failures.length){
  console.error(`\nJabberwocky Phase 4 readiness audit failed: ${failures.length} issue(s).`);
  failures.forEach((failure)=>console.error(`  ✗ ${failure}`));
  process.exit(1);
}
console.log(`\nJabberwocky Phase 4 readiness audit: ${passes.length} checks passed.`);
passes.forEach((pass)=>console.log(`  ✓ ${pass}`));
console.log('\nPhase 4 student experience is complete: five missions, Requirements → Forces → Materials → Stability → Authorization, low-material investigations, Mission 3 checkpoint, Mission 5 major synthesis, and no Phase 5 route.');