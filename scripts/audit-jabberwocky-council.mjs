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
  student: 'src/pages/courses/grade-7-science/jabberwocky/council/index.astro',
  teacher: 'src/pages/courses/grade-7-science/jabberwocky/council/teacher-guide/index.astro',
  data: 'src/data/jabberwockyCouncil.ts',
  progress: 'src/components/JcecPhase5Progress.astro',
  phase1: 'src/pages/courses/grade-7-science/jabberwocky/phase-1/mission-5/index.astro',
  phase2: 'src/pages/courses/grade-7-science/jabberwocky/phase-2/mission-5/index.astro',
  phase3: 'src/pages/courses/grade-7-science/jabberwocky/phase-3/mission-5/index.astro',
  phase4: 'src/pages/courses/grade-7-science/jabberwocky/phase-4/mission-5/index.astro',
  phase5: 'src/pages/courses/grade-7-science/jabberwocky/phase-5/mission-5/index.astro',
  teacherDoc: 'docs/jabberwocky-mission-2190-council-teacher-guide.md',
  package: 'package.json'
};

for (const file of Object.values(files)) check(fs.existsSync(rel(file)), `exists: ${file}`);
if (failures.length) {
  console.error(`\nMission 2190 Council audit failed before content checks:\n${failures.map((x)=>`  ✗ ${x}`).join('\n')}`);
  process.exit(1);
}

const student=read(files.student), teacher=read(files.teacher), data=read(files.data), progress=read(files.progress), teacherDoc=read(files.teacherDoc), pkg=read(files.package);
const allPhases=[read(files.phase1),read(files.phase2),read(files.phase3),read(files.phase4),read(files.phase5)];

// Final route + role + pacing.
for (const token of ['MISSION 2190','COUNCIL','JCEC Council Delegation','3 classes × 45 minutes','Open the Evidence Vault','The Council Deliberates','Issue the Directive']) check(has(student,token),`Student Council includes ${token}`);
check(has(student,'Keep your Phase 5 team + continent'),'Council keeps the Phase 5 team and continent');
check(student.includes("jabberwocky-phase5-posting"),'Council carries the existing Phase 5 posting');
check(!student.includes('<select'),'Council does not assign/reselect a new continent');
check(has(student,'No regrouping. No archive search.'),'Council explicitly prevents regrouping/archive search');
check(has(progress,'Begin Final Council → Mission 2190 Council'),'Phase 5 hands students into the final Council');
check(progress.includes('/jabberwocky/council/'),'Phase 5 Council navigation uses the approved Council route');

// Exactly five Evidence Vault cards per continent.
for (const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) check(data.includes(`id: '${continent}'`),`Council data includes ${continent}`);
check((data.match(/cards: \[/g)||[]).length===8,'Council data defines one Evidence Vault for each of eight continents');
check((data.match(/id:'ecosystem'/g)||[]).length===8,'Every continent has one ecosystem card');
check((data.match(/id:'plant'/g)||[]).length===8,'Every continent has one plant-resource card');
check((data.match(/id:'thermal'/g)||[]).length===8,'Every continent has one thermal card');
check((data.match(/id:'structural'/g)||[]).length===8,'Every continent has one structural card');
check((data.match(/id:'geology'/g)||[]).length===8,'Every continent has one geology card');
check((data.match(/id:'ecosystem'|id:'plant'|id:'thermal'|id:'structural'|id:'geology'/g)||[]).length===40,'Council data contains exactly 40 phase cards = five per continent');
for(const token of ['ECOSYSTEM EVIDENCE','ECOLOGICAL SAFEGUARD','PLANT RESOURCE EVIDENCE','SUSTAINABILITY RULE','THERMAL EVIDENCE','SURVIVAL / ENERGY RULE','STRUCTURAL EVIDENCE','SAFETY / SITE RULE','GEOLOGICAL EVIDENCE','LIMIT / UNCERTAINTY / PROTECTION RULE']) check(has(data,token),`Evidence Vault data includes ${token}`);
check(!has(data,'LONG-TERM PRESENCE WITH STRONG SAFEGUARDS')&&!has(data,'RESEARCH-ONLY PRESENCE')&&!has(data,'DELAY LONG-TERM EXPANSION'),'Evidence Vault cards contain evidence/constraints rather than final outcome labels');

// All five phases genuinely feed the final Council.
for (let i=0;i<allPhases.length;i++) check(allPhases[i].length>500,`Phase ${i+1} final mission source remains present for year-long continuity`);
for(const token of ['PHASE 1 · ECOSYSTEMS','PHASE 2 · PLANT RESOURCES','PHASE 3 · THERMAL SURVIVAL','PHASE 4 · STRUCTURES & FORCES','PHASE 5 · GEOLOGY']) check(has(data,token),`Council evidence identifies ${token}`);
check(has(student,'Five scientific divisions have finished their investigations'),'Council story explicitly joins all five science divisions');

// Five-Lens Council Review.
for(const token of ['Five-Lens Council Review','SUPPORTS','LIMITS','PROTECTS','UNCERTAIN']) check(has(student,token),`Council Review includes ${token}`);
for(const token of ['ECOSYSTEM','PLANT RESOURCES','THERMAL SURVIVAL','STRUCTURAL SAFETY','GEOLOGY']) check(has(student,token),`Council Review includes science lens ${token}`);
check(has(student,'Do not decide first and search for evidence later'),'Council requires evidence before outcome selection');
check(has(student,'If new evidence appears later, could your plan be reduced, changed or stopped?'),'Council includes reversibility/revision check');

// Students must compare at least two outcomes.
check(has(student,'Select at least two plausible Council outcomes'),'Council requires at least two candidate outcomes');
check(has(student,'COMPARE TWO PLAUSIBLE OPTIONS'),'Council includes two-option comparison board');
for(const token of ['LONG-TERM PRESENCE WITH STRONG SAFEGUARDS','LIMITED / SEASONAL PRESENCE','RESEARCH-ONLY PRESENCE','PROTECTED AREA / RESTRICTED HUMAN ACTIVITY','DELAY LONG-TERM EXPANSION / COLLECT MORE EVIDENCE']) check(has(student,token),`Council offers final outcome ${token}`);
check(has(student,'combine a presence decision with a protection restriction'),'Council permits evidence-supported mixed directives');
check(has(student,'No continent has a predetermined correct answer'),'Council explicitly rejects predetermined continent outcomes');

// Reasoning + one main decision.
for(const token of ['EVIDENCE','IMPLICATION','SAFEGUARD','UNCERTAINTY','DIRECTIVE']) check(has(student,token),`Council reasoning includes ${token}`);
check(has(student,'ONE MAIN TEAM DECISION'),'Council page identifies one main team decision');
check(has(student,'What human-presence directive best fits all five science lenses—and what must remain protected?'),'Council asks the approved main decision');

// One final Team Record with required fields.
check(has(student,'MISSION 2190 COUNCIL DIRECTIVE'),'Council uses the approved final Team Record');
for(const token of ['CONTINENT','OUR HUMAN-PRESENCE DIRECTIVE','WHERE / SCALE','ECOSYSTEM EVIDENCE','PLANT RESOURCE EVIDENCE','THERMAL EVIDENCE','STRUCTURAL EVIDENCE','GEOLOGICAL EVIDENCE','3 NON-NEGOTIABLE SAFEGUARDS','WHAT MUST REMAIN PROTECTED?','ONE IMPORTANT UNCERTAINTY','WHAT SHOULD JCEC INVESTIGATE NEXT?','FINAL COUNCIL MESSAGE · 4–6 SENTENCES']) check(has(student,token),`Council Directive includes ${token}`);
for(const token of ['TEAM WORK','TEAM RECORD','MY REFLECTION']) check(has(student,token),`Council collaboration system includes ${token}`);
check(has(student,'Which piece of evidence most changed your thinking about human presence on Jabberwocky, and what new evidence could make you change your decision again?'),'Council includes approved individual reflection');
check(has(student,'MISSION 2190 IS COMPLETE WHEN'),'Council has explicit completion criteria');
check(has(student,'MISSION 2190 — COUNCIL RECORD COMPLETE'),'Mission 2190 ends clearly after the Council Directive');

// No unsupported canon shortcuts in final Council data.
for(const forbidden of ['confirmed new mineral deposit','known ore body','new active fault','new volcano','new earthquake zone','new fossil bed','new energy resource','new power grid','new species discovered for council']) check(!has(data,forbidden),`Council data avoids unsupported canon: ${forbidden}`);
check(has(student,'They will not tell you which Council outcome to choose'),'Evidence Vault is not an answer key');

// Teacher implementation matches the student experience.
for(const token of ['3-class year-long transfer task','JCEC Council Delegation','Open the Evidence Vault','The Council Deliberates','Issue the Mission 2190 Directive']) check(has(teacher,token)||has(teacherDoc,token),`Teacher system includes ${token}`);
for(const field of ['BEFORE CLASS','MATERIALS','STUDENTS SEE / DO','KEY SCIENCE / SYNTHESIS','TEACHER EMPHASIS','COLLECT / ASSESS','IF TIME RUNS OUT']) check(has(teacher,field),`Teacher guide includes planning field ${field}`);
check((teacher.match(/day:\d/g)||[]).length===3,'Teacher guide defines exactly three core Council classes');
check(has(teacher,'2-CLASS COMPRESSED FALLBACK'),'Teacher guide includes approved two-class fallback');
check(has(teacher,'NO-PURCHASE FALLBACK'),'Teacher guide includes no-purchase fallback');
check(has(teacher,'No new content unit')||has(teacher,'not a sixth science unit'),'Teacher guide frames Council as transfer rather than new content');
check(has(teacher,'NO VOCABULARY TEST'),'Teacher guide prevents vocabulary-test drift');
check(has(teacher,'NO PREDETERMINED OUTCOME'),'Teacher guide prevents hidden correct-answer drift');
check(has(teacher,'NO NEW JABBERWOCKY CANON'),'Teacher guide prevents unsupported canon additions');
check(has(teacher,'five Evidence Vault cards'),'Teacher guide matches five-card student evidence system');
check(has(teacher,'one Mission 2190 Council Directive')||has(teacher,'1 Mission 2190 Council Directive'),'Teacher guide matches one main Team Record');
check(has(teacher,'one reflection')||has(teacher,'1 short reflection'),'Teacher guide matches individual reflection');

// Low-material implementation.
for(const token of ['Evidence Vault','Council Review','Council Directive','pencils','Chromebooks']) check(has(teacher,token),`Teacher materials include ${token}`);
check(has(teacher,'no new purchases'),'Council teacher guide is essentially no-purchase');
check(has(teacher,'No lab equipment, model, kit or new purchase is needed')||has(teacherDoc,'No lab equipment, model, kit or new purchase is needed'),'Council requires no specialist equipment');

// Whole-year usability/narrative safeguards.
for(const token of ['No old Team Records','No archive search','No continent has a predetermined correct answer','one Mission 2190 Council Directive']) check(has(`${student}\n${teacher}\n${teacherDoc}`,token),`Whole-year usability safeguard present: ${token}`);
check(has(student,'environmental safeguards')||has(student,'what must remain protected'),'Environmental safeguards remain central to the final decision');
check(has(student,'what is still uncertain')&&has(student,'ONE IMPORTANT UNCERTAINTY'),'Uncertainty remains required in the final decision');
check(has(student,'Five science phases.')&&has(student,'Mission complete.'),'Narrative closure explicitly ends the year-long mission');

// Build integration.
check(has(pkg,'audit-jabberwocky-council.mjs'),'Package build runs the Council readiness audit');
check(has(pkg,'audit:jabberwocky-council'),'Package exposes a Council audit script');

if (failures.length) {
  console.error(`\nMission 2190 Council readiness audit FAILED: ${failures.length} issue(s).`);
  for (const failure of failures) console.error(`  ✗ ${failure}`);
  process.exit(1);
}

console.log(`\nMission 2190 Council readiness audit: ${passes.length} checks passed.`);
for (const pass of passes) console.log(`  ✓ ${pass}`);
console.log('\nThe final Council uses exactly five phase evidence cards, one Five-Lens Review, one evidence-supported directive, one reflection, a matching three-class teacher system, and a clear Mission 2190 ending.');
