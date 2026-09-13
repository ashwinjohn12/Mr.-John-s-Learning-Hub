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
  hub: 'src/pages/courses/grade-7-science/jabberwocky/phase-5/index.astro',
  m1: 'src/pages/courses/grade-7-science/jabberwocky/phase-5/mission-1/index.astro',
  m2: 'src/pages/courses/grade-7-science/jabberwocky/phase-5/mission-2/index.astro',
  m3: 'src/pages/courses/grade-7-science/jabberwocky/phase-5/mission-3/index.astro',
  m4: 'src/pages/courses/grade-7-science/jabberwocky/phase-5/mission-4/index.astro',
  m5: 'src/pages/courses/grade-7-science/jabberwocky/phase-5/mission-5/index.astro',
  progress: 'src/components/JcecPhase5Progress.astro',
  data: 'src/data/jabberwockyPhase5.ts',
  phase4Progress: 'src/components/JcecPhase4Progress.astro'
};

for (const file of Object.values(files)) check(fs.existsSync(rel(file)), `exists: ${file}`);
for (const route of ['final-council','mission-2190-council','final-decision']) {
  check(!fs.existsSync(rel(`src/pages/courses/grade-7-science/jabberwocky/${route}/index.astro`)), `Final Council route is not built: ${route}`);
}
check(!fs.existsSync(rel('src/pages/courses/grade-7-science/jabberwocky/phase-6/index.astro')), 'No Phase 6 route is created');

const hub=read(files.hub),m1=read(files.m1),m2=read(files.m2),m3=read(files.m3),m4=read(files.m4),m5=read(files.m5),progress=read(files.progress),data=read(files.data),phase4Progress=read(files.phase4Progress);

// Complete Phase 5 hub + progression.
for (const token of ['THE DEEP RECORD','JCEC GEOLOGICAL SURVEY DIVISION','Read the Ground','Follow the Rock Story','Track the Changing Surface','Read the Deep Past','Prepare the Final Evidence']) check(has(hub,token),`Hub includes ${token}`);
for (const token of ['Evidence ✓','Rock History ✓','Surface Change ✓','Deep Past ✓','Geological Handoff ●']) check(has(hub,token),`Hub final progression includes ${token}`);
check((hub.match(/status:'COMPLETE'/g)||[]).length===4,'Hub marks Missions 1–4 complete');
check((hub.match(/status:'CURRENT'/g)||[]).length===1,'Hub marks only Mission 5 current');
for (const n of [1,2,3,4,5]) check(hub.includes(`phase-5/mission-${n}/`),`Hub releases Mission ${n}`);
check(hub.includes('jabberwocky-phase5-posting'),'Hub preserves separate Phase 5 posting state');
for(const token of ['SURFACE / ENVIRONMENT','STRUCTURAL SITE NEED','GROUND-DISTURBANCE LIMIT','OPEN GEOLOGICAL QUESTION']) check(has(hub,token),`Hub preserves inherited field ${token}`);
check(has(hub,'Do not reopen Missions 1–4'),'Hub prevents archive overload at Mission 5');
check(has(hub,'Geological Evidence Locker'),'Hub tells students Mission 5 provides an Evidence Locker');
check(has(hub,'Mission 5 is not the final human-settlement decision'),'Hub explicitly separates geological handoff from final settlement decision');
check(has(hub,'FINAL COUNCIL STATUS'),'Hub includes visible final-Council stop state');
check(has(hub,'Not released'),'Hub states final Council is not released');

// Progress + route release.
for(const token of ['Evidence','Rock History','Surface Change','Deep Past','Geological Handoff']) check(has(progress,token),`Progress includes ${token}`);
for(const token of ['Next Mission → Follow the Rock Story','Next Mission → Track the Changing Surface','Next Mission → Read the Deep Past','Next Mission → Prepare the Final Evidence']) check(has(progress,token),`Progress navigation includes ${token}`);
check(progress.includes('/phase-5/mission-5/'),'Progress releases Mission 5');
check(!progress.includes('phase-6')&&!progress.includes('final-council'),'Progress creates no post-Phase-5 decision route');
check(has(phase4Progress,'Begin Phase 5 → The Deep Record'),'Phase 4 still hands students into Phase 5');

// Earlier missions remain intact and distinct.
for(const token of ['MISSION 1 OF 5','Ground Evidence Card','Geologist\'s Evidence Stations','OBSERVATION','PROPERTY','ROCK','MINERAL','CLASSIFICATION']) check(has(m1,token),`Mission 1 retains ${token}`);
for(const token of ['MISSION 2 OF 5','Rock History Profile','IGNEOUS','SEDIMENTARY','METAMORPHIC','Rock Cycle Evidence Lab']) check(has(m2,token),`Mission 2 retains ${token}`);
for(const token of ['MISSION 3 OF 5','Surface Change Forecast','Surface Change Fair Test','WEATHERING','EROSION','DEPOSITION / SEDIMENTATION','INTERPOLATION / EXTRAPOLATION']) check(has(m3,token),`Mission 3 retains ${token}`);
for(const token of ['MISSION 4 OF 5','Deep Record Timeline','STRATA / LAYERS','FOLDING','FAULTING','CRUSTAL MOVEMENT','FOSSIL EVIDENCE','GEOLOGICAL TIME','Deep Record Evidence Puzzle']) check(has(m4,token),`Mission 4 retains ${token}`);
check(has(m4,'No radiometric-dating calculations'),'Mission 4 keeps radiometric calculation outside the pathway');
check(has(m4,'A missing fossil, fold or fault is a valid result'),'Mission 4 keeps absent evidence legitimate');

// Mission 5 routine, role, pacing and continuity.
for(const token of ['MISSION 5 OF 5','What geological evidence must JCEC carry into the final Mission 2190 decision?','MAJOR PHASE 5 SYNTHESIS','4 classes × 45 minutes','JCEC Geological Evidence Packet']) check(has(m5,token),`Mission 5 includes ${token}`);
for(const token of ['Your Mission','Learn the Science','Investigate','Make a Decision','Record It']) check(has(m5,token),`Mission 5 includes step ${token}`);
check(m5.includes('jabberwocky-phase5-posting'),'Mission 5 carries the existing Phase 5 posting');
check(!m5.includes('<select'),'Mission 5 does not ask students to choose continent again');
check(has(m5,'MISSIONS 1–4 ARE ALREADY DONE'),'Mission 5 avoids reopening earlier missions');
check(has(m5,'Do not reopen four mission pages'),'Mission 5 explicitly prevents archive overload');
check(has(m5,'If your real classroom evidence is stronger, use it instead'),'Mission 5 allows stronger actual classroom evidence');
check(has(m5,'THIS IS NOT THE FINAL HUMAN-SETTLEMENT DECISION'),'Mission 5 makes its limited decision role obvious');

// Minimal synthesis vocabulary: known / inferred / uncertain / protect-monitor.
for(const token of ['WHAT DO WE KNOW?','WHAT HAVE WE INFERRED?','WHAT REMAINS UNCERTAIN?','WHAT SHOULD BE PROTECTED OR MONITORED?']) check(has(m5,token),`Mission 5 site-review framework includes ${token}`);
check(has(m5,'Direct observations or measurements'),'Mission 5 defines known evidence through observation/measurement');
check(has(m5,'An explanation supported by evidence'),'Mission 5 distinguishes inference from direct observation');
check(has(m5,'A question the available evidence cannot yet answer confidently'),'Mission 5 normalizes uncertainty');
for(const token of ['GEOLOGICAL CLAIM','EVIDENCE','CHANGE / SITE CONSEQUENCE','UNCERTAINTY','HANDOFF RULE']) check(has(m5,token),`Mission 5 reasoning chain includes ${token}`);

// Geological Evidence Locker.
check(has(m5,'GEOLOGICAL EVIDENCE LOCKER'),'Mission 5 includes Geological Evidence Locker');
for(const token of ['M1 · GROUND','M2 · ROCK HISTORY','M3 · SURFACE CHANGE','M4 · DEEP PAST']) check(has(m5,token),`Evidence Locker includes ${token}`);
check(has(m5,'Choose your strongest three'),'Evidence Locker asks for three strongest evidence items');
check(has(m5,'at least three different missions'),'Evidence Locker encourages mission diversity');
check(has(m5,'These are concise JCEC reminders—not replacements for your actual classroom work'),'Evidence Locker is a memory support rather than answer key');

// Main Geological Site Review.
check(has(m5,'JCEC Geological Site Review'),'Mission 5 includes approved main investigation');
for(const token of ['KNOWN · INFERRED · UNCERTAIN · PROTECT/MONITOR','WHAT DO WE KNOW?','WHAT HAVE WE INFERRED?','WHAT REMAINS UNCERTAIN?','WHAT SHOULD BE PROTECTED OR MONITORED?']) check(has(m5,token),`Site Review includes ${token}`);
check(has(m5,'FINAL GEOLOGICAL REVIEW CONCERN'),'Each continent receives one final review concern');
check(has(m5,'ONE USEFUL IMPLICATION / SAFEGUARD'),'Site Review requires a useful implication/safeguard');

// Eight continent-specific final reviews remain grounded and open-ended.
for(const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) check(m5.includes(`${continent}:`)||m5.includes(`'${continent}':`),`Mission 5 final review includes ${continent}`);
for(const forbidden of ['confirmed mineral deposit','known ore body','confirmed active fault beneath','confirmed fossil bed','exact geological age of','hazard probability','tsunami history is confirmed','volcano on']) check(!has(m5,forbidden),`Mission 5 avoids new unsupported geological canon: ${forbidden}`);
check(has(m5,'the fracture is not confirmed as a fault'),'Slithy Toves keeps fracture/fault uncertainty in final synthesis');
check(has(m5,'deeper bedrock history remains highly uncertain'),'Mimsy preserves major deep-history uncertainty');
check(has(m5,'limited rock exposure does not support a complete deep sequence'),'Bandersnatch preserves incomplete deep evidence');
check(has(m5,'No confirmed fossil evidence')||has(m5,'no confirmed fossil evidence'),'Mission 5 does not invent fossil evidence to force synthesis');

// STS resource/reclamation application stays small and correctly labelled.
check(has(m5,'MISSION 2190 APPLICATION · NOT A SEPARATE PLANET EARTH OUTCOME'),'Resource/reclamation box is clearly labelled as application rather than core outcome');
check(has(m5,'What evidence would JCEC need before disturbing geological material?'),'Mission 5 asks evidence-first resource question');
check(has(m5,'what would need to be protected, monitored or restored'),'Mission 5 includes bounded restoration/stewardship question');
check(has(m5,'does not invent a mine or resource deposit'),'Mission 5 explicitly avoids inventing geological resources');
check(has(m5,'not an extraction/reclamation project'),'Mission 5 avoids turning STS application into a separate project');

// Handoff choices: one geological decision, not settlement.
check(has(m5,'What should JCEC do geologically before final settlement planning continues?'),'Mission 5 asks one geological handoff decision');
for(const token of ['CONTINUE GEOLOGICAL PLANNING','CONTINUE WITH GROUND-DISTURBANCE LIMITS','PROTECT A GEOLOGICAL FEATURE / RECORD','COLLECT MORE GEOLOGICAL EVIDENCE']) check(has(m5,token),`Mission 5 includes handoff status ${token}`);
check(has(m5,'No continent has a predetermined status'),'Mission 5 states handoff is evidence-based, not predetermined');
check(has(m5,'Choose the option your evidence supports'),'Mission 5 directs teams to evidence-based handoff choice');
check(has(m5,'This is NOT the final human-settlement decision'),'Mission 5 repeats decision boundary in the handoff section');

// Final Team Record remains one manageable packet.
for(const token of ['CONTINENT','SURFACE / GROUND EVIDENCE','LIKELY ROCK HISTORY','ACTIVE SURFACE-CHANGE PROCESS','DEEP-HISTORY EVIDENCE','3 STRONGEST GEOLOGICAL EVIDENCE ITEMS','ONE IMPORTANT UNCERTAINTY','ONE FEATURE / PROCESS TO PROTECT OR MONITOR','GROUND-DISTURBANCE RULE','WHAT SHOULD JCEC INVESTIGATE NEXT?','GEOLOGICAL HANDOFF STATUS','MESSAGE TO THE FINAL JCEC COUNCIL · 3–5 SENTENCES']) check(has(m5,token),`Geological Evidence Packet includes ${token}`);
check(has(m5,'geological understanding → evidence use → uncertainty → responsible handoff'),'Mission 5 assessment focus matches blueprint');
check(has(m5,'It does not assess artistic appearance, a physical model'),'Mission 5 does not grade model/art appearance');
check(has(m5,'What is one geological conclusion JCEC should not make yet because the evidence is still too limited?'),'Mission 5 includes approved individual reflection');
check(has(m5,'Phase 5 is finished when'),'Mission 5 has explicit completion criteria');
check(has(m5,'STOP HERE. The final Mission 2190 Council decision has not yet begun.'),'Mission 5 stops before the final Council');

// Materials: nearly paper-only and no purchase.
check(has(m5,'MATERIALS REALITY CHECK'),'Mission 5 includes materials reality check');
for(const token of ['projected/printed Evidence Locker','Geological Site Review','Evidence Packet','pencils']) check(has(m5,token),`Mission 5 materials include ${token}`);
for(const token of ['No geology purchase','specialty kit','physical final model','new field collection']) check(has(m5,token),`Mission 5 avoids equipment dependency: ${token}`);
check(has(m5,'complete no-purchase fallback'),'Mission 5 makes projected implementation a full fallback');
check(has(m5,'Print Site Review + Evidence Packet'),'Mission 5 provides printable implementation');

// Four-class pacing and full 18-core structure.
for(const token of ['Gather the Strongest Evidence','Review the Geological Site','Decide the Geological Handoff','Prepare the Final Evidence']) check(has(m5,token),`Mission 5 four-class pacing includes ${token}`);
check(has(m1,'3 × 45')||has(m1,'3 classes × 45'),'Mission 1 remains 3 core classes');
check(has(m2,'3 × 45')||has(m2,'3 classes × 45'),'Mission 2 remains 3 core classes');
check(has(m3,'4 classes × 45'),'Mission 3 remains 4 core classes');
check(has(m4,'4 classes × 45'),'Mission 4 remains 4 core classes');
check(has(m5,'4 classes × 45'),'Mission 5 remains 4 core classes');
check(3+3+4+4+4===18,'Phase 5 mission pacing totals 18 core classes');

// Phase-wide conceptual coherence.
const teamRecords = ['Ground Evidence Card','Rock History Profile','Surface Change Forecast','Deep Record Timeline','JCEC GEOLOGICAL EVIDENCE PACKET'];
for(const token of teamRecords) check(has(`${m1}\n${m2}\n${m3}\n${m4}\n${m5}`,token),`Phase 5 retains distinct Team Record ${token}`);
for(const token of ['EARTH REFERENCE EVIDENCE','JABBERWOCKY SURVEY EVIDENCE']) {
  check([m1,m2,m3,m4].every((m)=>has(m,token)),`Missions 1–4 preserve evidence-source distinction: ${token}`);
}
check(has(m5,'surface materials')&&has(m5,'rock history')&&has(m5,'surface change')&&has(m5,'deeper record'),'Mission 5 story explicitly synthesizes Missions 1–4');
check(has(m5,'known')&&has(m5,'inferred')&&has(m5,'uncertain'),'Mission 5 maintains observation/inference/uncertainty discipline');
check(!m5.includes('/final-council/')&&!m5.includes('/mission-2190-council/')&&!m5.includes('/final-decision/'),'Mission 5 creates no final Council navigation');

// Existing continent canon still present in Phase 5 data.
for(const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) check(data.includes(`id: '${continent}'`),`Phase 5 core data includes ${continent}`);
check((data.match(/mission1SurveyPacket:/g)||[]).length===9,'All sites retain Mission 1 survey packets');
check((data.match(/mission2RockHistoryClues:/g)||[]).length===9,'All sites retain Mission 2 rock-history clues');
check((data.match(/mission3SurfaceChangeClues:/g)||[]).length===9,'All sites retain Mission 3 surface-change clues');

if(failures.length){
  console.error(`\nJabberwocky Phase 5 readiness audit failed: ${failures.length} issue(s).`);
  failures.forEach((failure)=>console.error(`  ✗ ${failure}`));
  process.exit(1);
}
console.log(`\nJabberwocky Phase 5 readiness audit: ${passes.length} checks passed.`);
passes.forEach((pass)=>console.log(`  ✓ ${pass}`));
console.log('\nPhase 5 student experience is complete: Evidence → Rock History → Surface Change → Deep Past → Geological Handoff. Mission 5 synthesizes prior evidence without archive overload, preserves uncertainty and stewardship, uses a paper-first no-purchase design, and explicitly stops before the final Mission 2190 Council decision.');
