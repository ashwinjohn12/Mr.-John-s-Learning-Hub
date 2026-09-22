import { existsSync, readFileSync } from 'node:fs';

const checks = [];
const ok = (condition, label) => {
  checks.push(label);
  if (!condition) throw new Error(`FutureTech audit failed: ${label}`);
};

const files = {
  home: 'dist/index.html',
  lab: 'dist/courses/futuretech-lab/index.html',
  level1: 'dist/courses/futuretech-lab/creator-foundations/index.html',
  mission1: 'dist/courses/futuretech-lab/creator-foundations/mission-1-make-it-happen/index.html',
  mission2: 'dist/courses/futuretech-lab/creator-foundations/mission-2-make-it-think/index.html',
  mission3: 'dist/courses/futuretech-lab/creator-foundations/mission-3-build-a-game/index.html',
  mission4: 'dist/courses/futuretech-lab/creator-foundations/mission-4-robot-rookie/index.html',
  mission5: 'dist/courses/futuretech-lab/creator-foundations/mission-5-sense-think-act/index.html',
  mission6: 'dist/courses/futuretech-lab/creator-foundations/mission-6-design-it-print-it/index.html',
  mission7: 'dist/courses/futuretech-lab/creator-foundations/mission-7-choose-your-path/index.html',
  mission8: 'dist/courses/futuretech-lab/creator-foundations/mission-8-creator-certification/index.html'
};

for (const name of ['home','lab','level1','mission1','mission2','mission3','mission4','mission5','mission6','mission7','mission8']) ok(existsSync(files[name]), `${name} route exists`);

const home = readFileSync(files.home, 'utf8');
ok(home.includes('FutureTech Lab'), 'homepage names FutureTech Lab');
ok(home.includes('courses/futuretech-lab/'), 'homepage links to FutureTech Lab');
ok(home.includes('Enter the lab'), 'homepage gives FutureTech-specific CTA');

const lab = readFileSync(files.lab, 'utf8');
for (const text of ['Creator Foundations','Builder','Designer','Engineer','Innovator','Start Level 1']) ok(lab.includes(text), `lab contains ${text}`);
ok(lab.includes('New students start at Level 1'), 'lab explains new-student entry');
ok(lab.includes('Returning students continue from where they left off'), 'lab explains returning-student entry');

const level1 = readFileSync(files.level1, 'utf8');
for (const text of ['Make It Happen','Make It Think','Build a Game','Robot Rookie','Sense → Think → Act','Design It. Print It.','Choose Your Path','Creator Certification']) ok(level1.includes(text), `Level 1 contains ${text}`);
ok(level1.includes('All 8 Level 1 missions are open now'), 'Level 1 clearly states all Level 1 missions are open');
ok(!level1.includes('COMING NEXT · PREVIEW'), 'Level 1 has no remaining locked mission preview');
ok(level1.includes('simple loop'), 'Level 1 Mission 2 summary includes loop prerequisite');
ok(level1.includes('mission-3-build-a-game/'), 'Mission 3 is linked from Level 1');
ok(level1.includes('mission-4-robot-rookie/'), 'Mission 4 is linked from Level 1');
ok(level1.includes('mission-5-sense-think-act/'), 'Mission 5 is linked from Level 1');
ok(level1.includes('mission-6-design-it-print-it/'), 'Mission 6 is linked from Level 1');
ok(level1.includes('Creator Certification') && level1.includes('CREATOR CERTIFICATION'), 'Mission 8 is presented as the final certification mission');
ok(level1.includes('Work independently by default'), 'Level 1 mission map reflects individual-first workflow');

for (const [name, file] of [['mission1',files.mission1],['mission2',files.mission2],['mission3',files.mission3],['mission4',files.mission4],['mission5',files.mission5]]) {
  const html = readFileSync(file, 'utf8');
  for (let i=1;i<=6;i++) ok(html.includes(`id="stage-${i}"`), `${name} stage-${i}`);
  for (const text of ['TRY 4','Ready-for-Check','Checkpoint','SKILL PASSPORT','Reset','Start at Stage 1 and work in order']) ok(html.includes(text), `${name} contains ${text}`);
  ok(html.includes('Check → Simulate → Download → Partner'), `${name} has persistent TRY 4 route`);
}

const mission1 = readFileSync(files.mission1, 'utf8');
ok(mission1.includes('Individual mission:'), 'Mission 1 is individual by default');
ok(!mission1.includes('DRIVER') && !mission1.includes('NAVIGATOR') && !mission1.includes('SWITCH ROLES NOW'), 'Mission 1 removes default partner-role workflow');
ok(mission1.includes('MISSION COMPLETE') && mission1.includes('RETRY ONE SKILL') && mission1.includes('SUPPORT ROUTE'), 'Mission 1 uses standard checkpoint outcomes');
ok(mission1.includes('Checkpoint complete? Continue'), 'Mission 1 next-mission gate uses checkpoint language');
ok(mission1.includes('mission-2-make-it-think/'), 'Mission 1 links to Mission 2');

const mission2 = readFileSync(files.mission2, 'utf8');
ok(mission2.includes('https://makecode.microbit.org/'), 'Mission 2 links directly to MakeCode');
ok(mission2.includes('SET replaces. CHANGE adjusts.'), 'Mission 2 preserves set/change support');
ok(mission2.includes('TRUE') && mission2.includes('FALSE'), 'Mission 2 preserves IF true/false support');
ok(mission2.includes('repeat 3 times'), 'Mission 2 explicitly teaches a simple repeat loop');
ok(mission2.includes('The special result uses one repeat loop'), 'Mission 2 Build It requires loop application');
ok(mission2.includes('Explain the Decision + Loop'), 'Mission 2 checkpoint assesses loop understanding');
ok(mission2.includes('I can use a simple repeat loop'), 'Mission 2 Skill Passport records loop mastery');
ok(mission2.includes('Individual mission:'), 'Mission 2 is individual by default');
ok(!mission2.includes('DRIVER') && !mission2.includes('NAVIGATOR') && !mission2.includes('SWITCH ROLES NOW'), 'Mission 2 removes default partner-role workflow');
ok(mission2.includes('MISSION COMPLETE') && mission2.includes('RETRY ONE SKILL') && mission2.includes('SUPPORT ROUTE'), 'Mission 2 uses standard checkpoint outcomes');
ok(mission2.includes('Checkpoint complete? Continue') && mission2.includes('mission-3-build-a-game/'), 'Mission 2 links to Mission 3 with checkpoint gate');


const mission3 = readFileSync(files.mission3, 'utf8');
for (const text of ['PATH A','PATH B','Kitronik :GAME Controller','ELECFREAKS Retro Arcade','Fire 1','MakeCode Arcade','READ ONLY YOUR PATH','STAY ON YOUR PATH','PLAY','NOTICE','CHANGE','RETEST','MISSION COMPLETE','RETRY ONE SKILL','SUPPORT ROUTE']) ok(mission3.includes(text), `Mission 3 contains ${text}`);
ok(mission3.includes('CODE MODEL 1 OF 4') && mission3.includes('CODE MODEL 4 OF 4'), 'Mission 3 has exactly the approved four-model sequence labels');
ok((mission3.match(/CODE MODEL [1-4] OF 4/g) || []).length === 4, 'Mission 3 contains four code models only');
ok(mission3.includes('on button Fire 1 (P15) press down'), 'Mission 3 uses verified Kitronik Fire 1 event wording');
ok(mission3.includes('player x &gt; 120') || mission3.includes('player x > 120'), 'Mission 3 uses simple Path B horizontal target comparison');
ok(mission3.includes('Ready-for-Check'), 'Mission 3 preserves Ready-for-Check workflow');
ok(mission3.includes('Checkpoint complete? Continue') && mission3.includes('mission-4-robot-rookie/'), 'Mission 3 links to Mission 4 with checkpoint gate');


const mission4 = readFileSync(files.mission4, 'utf8');
for (const text of ['Hummingbird Bit Controller','LED Port 1','Servo Port 1','CODE MODEL 1 OF 2','CODE MODEL 2 OF 2','CONNECT / CHANGE','POWER OFF','TEST','POWER ON','CENTER THE SERVO FIRST','Robot Signal','Ready-for-Check','MISSION COMPLETE','RETRY ONE SKILL','SUPPORT ROUTE','SKILL PASSPORT','Reset']) ok(mission4.includes(text), `Mission 4 contains ${text}`);
ok((mission4.match(/CODE MODEL [12] OF 2/g) || []).length === 2, 'Mission 4 contains exactly two code models');
ok(mission4.includes('Start Hummingbird'), 'Mission 4 uses verified Start Hummingbird block label');
ok(mission4.includes('Hummingbird LED'), 'Mission 4 uses verified Hummingbird LED block label');
ok(mission4.includes('Hummingbird Position Servo'), 'Mission 4 uses verified Hummingbird Position Servo block label');
ok(mission4.includes('HB-01') && mission4.includes('HB station number'), 'Mission 4 includes station identification and fault reporting');
ok(!mission4.includes('Hummingbird</b> → Sensor') && !mission4.includes('Hummingbird</b> → Rotation Servo'), 'Mission 4 block-finder inventory excludes sensors and rotation servo');
ok(!mission4.includes('CODE MODEL 3'), 'Mission 4 does not add a third code model');
ok(mission4.includes('Checkpoint complete? Continue') && mission4.includes('mission-5-sense-think-act/'), 'Mission 4 links to Mission 5 with checkpoint gate');
const mission5 = readFileSync(files.mission5, 'utf8');
for (const text of ['Hummingbird Light Sensor','Sensor Port 1','LED Port 1','3 WIRES','2 WIRES','SENSE','THINK','ACT','MY COVERED VALUE','MY UNCOVERED VALUE','WHAT IS A THRESHOLD?','CODE MODEL 1 OF 2','CODE MODEL 2 OF 2','Build It — Reactive Signal','Ready-for-Check','MISSION COMPLETE','RETRY ONE SKILL','SUPPORT ROUTE','SKILL PASSPORT','Reset']) ok(mission5.includes(text), `Mission 5 contains ${text}`);
ok((mission5.match(/CODE MODEL [12] OF 2/g) || []).length === 2, 'Mission 5 contains exactly two code models');
ok(mission5.includes('Start Hummingbird'), 'Mission 5 uses verified Start Hummingbird label');
ok(mission5.includes('Hummingbird Light 1'), 'Mission 5 uses Hummingbird Light sensor block wording');
ok(mission5.includes('Hummingbird LED'), 'Mission 5 uses verified Hummingbird LED label');
ok(mission5.includes('40 is only an example'), 'Mission 5 guards against hard-coded threshold thinking');
ok(mission5.includes('LED NEVER CHANGES? DO NOT GUESS FIRST.'), 'Mission 5 uses evidence-based reactive troubleshooting');
ok(!mission5.includes('Distance Sensor') && !mission5.includes('Sound Sensor') && !mission5.includes('Dial Sensor'), 'Mission 5 core pathway excludes second sensor types');
ok(mission5.includes('Servo Reaction') && mission5.includes('optional'), 'Mission 5 keeps servo optional in Level It Up');
ok(!mission5.includes('CODE MODEL 3'), 'Mission 5 does not add a third code model');
ok(mission5.includes('Checkpoint complete? Continue') && mission5.includes('mission-6-design-it-print-it/'), 'Mission 5 links to Mission 6 with checkpoint gate');
const mission6 = readFileSync(files.mission6, 'utf8');
for (let i=1;i<=6;i++) ok(mission6.includes(`id="stage-${i}"`), `mission6 stage-${i}`);
for (const text of ['TRY 4','Ready-for-Check','Checkpoint','SKILL PASSPORT','Reset','Start at Stage 1 and work in order']) ok(mission6.includes(text), `mission6 contains ${text}`);
ok(mission6.includes('Check → View → Undo / Retry → Partner'), 'Mission 6 uses CAD-specific persistent TRY 4 route');
ok(mission6.includes('https://www.tinkercad.com/3d-design/'), 'Mission 6 links directly to Tinkercad 3D Design');
for (const text of ['Tinkercad','FIND NOW','FIND LATER','WORKPLANE','BASIC SHAPES','WIDTH · 40 mm','LENGTH · 20 mm','HEIGHT · 4 mm','JOIN SOLIDS','CUT MATERIAL','Solid + Solid + Group','Solid + Hole + Group','Build It — Maker Tag','LEVEL 1 PRINT-QUEUE LIMITS','PRINTABLE','CHECK AGAIN','EXPORT CHECK','READY-FOR-CHECK','PRINT QUEUE','STL / .STL','MISSION COMPLETE','RETRY ONE SKILL','SUPPORT ROUTE']) ok(mission6.includes(text), `Mission 6 contains ${text}`);
ok(mission6.includes('60 mm × 40 mm') && mission6.includes('8 mm') && mission6.includes('3 mm') && mission6.includes('5 mm'), 'Mission 6 includes Level 1 classroom print limits');
ok(mission6.includes('One Mission 6 print candidate per student'), 'Mission 6 limits print queue submissions');
ok(mission6.includes('A physical print is not required to finish Mission 6'), 'Mission 6 separates printing from mastery');
ok(mission6.includes('Solid + Solid + Group') && mission6.includes('Solid + Hole + Group'), 'Mission 6 distinguishes join versus cut grouping');
ok(!mission6.includes('Circuits') && !mission6.includes('Codeblocks') && !mission6.includes('Sim Lab'), 'Mission 6 required pathway excludes unrelated Tinkercad domains');
ok(level1.includes('mission-7-choose-your-path/'), 'Mission 7 is linked from Level 1 release candidate');
ok(level1.includes('All 8 Level 1 missions are open now'), 'Level 1 release copy confirms all Level 1 missions are open');
ok(level1.includes('mission-8-creator-certification/'), 'Mission 8 is linked from Level 1 release candidate');
ok(level1.includes('Creator Certification') && level1.includes('COMING NEXT · PREVIEW'), 'Mission 8 remains a locked preview');
ok(mission6.includes('Checkpoint complete? Continue') && mission6.includes('mission-7-choose-your-path/'), 'Mission 6 links to Mission 7 with checkpoint gate');

const mission7 = readFileSync(files.mission7, 'utf8');
for (let i=1;i<=6;i++) ok(mission7.includes(`id="stage-${i}"`), `mission7 stage-${i}`);
for (const text of ['Set Up','Plan It','Prototype It','Build It','Level It Up','Checkpoint']) ok(mission7.includes(text), `Mission 7 contains stage label ${text}`);
for (const text of ['PATH A','PATH B','PATH C','SOFTWARE CREATOR','SYSTEMS BUILDER','PRODUCT DESIGNER']) ok(mission7.includes(text), `Mission 7 contains ${text}`);
ok(mission7.includes('https://makecode.microbit.org/'), 'Mission 7 links to MakeCode for micro:bit');
ok(mission7.includes('https://arcade.makecode.com/'), 'Mission 7 links to MakeCode Arcade');
ok(mission7.includes('https://www.tinkercad.com/3d-design/'), 'Mission 7 links to Tinkercad 3D Design');
for (const text of ['MY PATH','MY CREATION','WHAT IT WILL DO','LEVEL 1 SKILLS','SUCCESS + CHALLENGE']) ok(mission7.includes(text), `Mission 7 Creator Plan contains ${text}`);
ok(mission7.includes('TOOLS') && mission7.includes('MATERIALS'), 'Mission 7 Creator Plan contains Tools and Materials prompt');
for (const text of ['GO','SHRINK IT','REPLAN','WAITING FOR A GO CHECK?']) ok(mission7.includes(text), `Mission 7 approval flow contains ${text}`);
for (const text of ['CODING — YOUR FIRST TARGET','ROBOTICS — YOUR FIRST TARGET','3D DESIGN — YOUR FIRST TARGET','DOES THE CORE IDEA WORK?']) ok(mission7.includes(text), `Mission 7 prototype flow contains ${text}`);
for (const text of ['One meaningful input','One variable or changing value','One IF or IF/ELSE decision','One repeating behaviour or loop']) ok(mission7.includes(text), `Mission 7 Coding minimum contains ${text}`);
for (const text of ['At least one physical output','One coded behaviour','One meaningful input, trigger or decision','Correct hardware ports']) ok(mission7.includes(text), `Mission 7 Robotics minimum contains ${text}`);
for (const text of ['Intentional dimensions','At least three intentionally placed shapes','At least one grouped construction','At least one purposeful cut, hole, slot or recess','A printability check']) ok(mission7.includes(text), `Mission 7 3D minimum contains ${text}`);
for (const text of ['STUCK? TRY 4','CHECK','TRACE','CHANGE ONE THING','TEST AGAIN','I expected','I checked','I changed']) ok(mission7.includes(text), `Mission 7 TRY 4 contains ${text}`);
for (const text of ['Test It Like a Creator','I TESTED','I EXPECTED','WHAT HAPPENED','Change Something for a Reason','AFTER THE CHANGE']) ok(mission7.includes(text), `Mission 7 test/revision evidence contains ${text}`);
for (const text of ['READY-FOR-CHECK','SHOW IT','EXPLAIN IT','TELL ME WHAT CHANGED','MISSION COMPLETE','RETRY ONE SKILL','SUPPORT ROUTE']) ok(mission7.includes(text), `Mission 7 checkpoint contains ${text}`);
ok(mission7.includes('ADD YOUR NAME TO THE CLASS READY-FOR-CHECK SYSTEM'), 'Mission 7 Ready-for-Check gives a real classroom action');
for (const text of ['SKILL PASSPORT','Creator Independence','I can plan a project that fits the tools and time available.','I can troubleshoot one part of a system at a time.','I can explain an important technical decision I made.']) ok(mission7.includes(text), `Mission 7 Skill Passport contains ${text}`);
for (const text of ['Build Your Own. Help Each Other.','MISSION 8 — CREATOR CERTIFICATION','COMING NEXT · PREVIEW']) ok(mission7.includes(text), `Mission 7 closeout contains ${text}`);
ok(mission7.includes('Save, Reset') && mission7.includes('Return'), 'Mission 7 contains save/reset/return closeout');
ok((mission7.match(/Open only your path\./g) || []).length >= 2, 'Mission 7 repeatedly helps students ignore unused pathways');
ok(mission7.includes('10–15 minutes'), 'Mission 7 keeps Creator Plan time-bounded');
ok(mission7.includes('Make it work before you make it bigger, prettier or more complicated.'), 'Mission 7 prioritizes core prototype before expansion');
ok(!mission7.includes('href="mission-8-') && !mission7.includes('href="../mission-8-') && !mission7.includes('/mission-8-'), 'Mission 8 remains unlinked from Mission 7');
ok(level1.includes('mission-7-choose-your-path/'), 'Mission 7 release candidate is active on Level 1');
ok(!lab.includes('courses/futuretech-lab/builder/'), 'Level 2 remains unlinked');
ok(!mission7.includes('courses/futuretech-lab/builder/') && !mission7.includes('LEVEL 02'), 'Mission 7 does not expose Level 2');

const mission8 = readFileSync(files.mission8, 'utf8');
for (let i=1;i<=6;i++) ok(mission8.includes(`id="stage-${i}"`), `mission8 stage-${i}`);
for (const text of ['Retrieve It','Inspect It','Improve It','Prove It','Prepare to Certify','Creator Certification Check']) ok(mission8.includes(text), `Mission 8 contains ${text}`);
ok(mission8.includes('FINAL MISSION'), 'Mission 8 hero identifies the final mission');
ok(mission8.includes('THIS IS NOT ANOTHER PROJECT'), 'Mission 8 explicitly prevents a second major project');
ok(mission8.includes('same Creator Challenge you used in Mission 7') && mission8.includes('STAY ON YOUR MISSION 7 PATH'), 'Mission 8 reuses the Mission 7 artifact and pathway');
ok(!mission8.includes('Start a new project') && !mission8.includes('Choose a new path'), 'Mission 8 does not introduce a new-project workflow');
for (const text of ['PATH A','PATH B','PATH C','SOFTWARE CREATOR','SYSTEMS BUILDER','PRODUCT DESIGNER']) ok(mission8.includes(text), `Mission 8 contains ${text}`);
ok(!mission8.includes('<details class="path-detail coding" open') && !mission8.includes('<details class="path-detail robotics" open') && !mission8.includes('<details class="path-detail design" open'), 'Mission 8 does not auto-open a pathway');
ok(mission8.includes('Open only your path.'), 'Mission 8 helps students ignore unused pathways');
ok(mission8.includes('https://makecode.microbit.org/'), 'Mission 8 links to MakeCode for micro:bit');
ok(mission8.includes('https://arcade.makecode.com/'), 'Mission 8 links to MakeCode Arcade');
ok(mission8.includes('https://www.tinkercad.com/3d-design/'), 'Mission 8 links to Tinkercad 3D Design');
for (const text of ['WORKS','NOTICE','CHOOSE','Pick ONE improvement that matters.','ONE CHANGE FOR A REASON']) ok(mission8.includes(text), `Mission 8 one-improvement flow contains ${text}`);
for (const text of ['STUCK? TRY 4','CHECK','TRACE','CHANGE ONE THING','TEST AGAIN']) ok(mission8.includes(text), `Mission 8 TRY 4 contains ${text}`);
ok(mission8.includes('ROBOTICS SAFETY') && mission8.includes('Safety problems do not require TRY 4 first'), 'Mission 8 includes the robotics safety exception');
for (const text of ['I NOTICED','I CHANGED','I TESTED','AFTER THE CHANGE']) ok(mission8.includes(text), `Mission 8 concise evidence contains ${text}`);
for (const text of ['RUN ONE CLEAN FINAL TEST','What did you test?','What happened?','How do you know it worked?']) ok(mission8.includes(text), `Mission 8 final proof contains ${text}`);
ok(mission8.includes('STOP ADDING FEATURES'), 'Mission 8 stops feature accumulation after proof');
for (const text of ['CERTIFICATION READY?','ADD YOUR NAME TO THE CLASS READY-FOR-CHECK SYSTEM']) ok(mission8.includes(text), `Mission 8 Ready-for-Check contains ${text}`);
for (const text of ['SHOW IT','EXPLAIN IT','TELL WHAT YOU IMPROVED','PREDICT ONE CHANGE']) ok(mission8.includes(text), `Mission 8 certification flow contains ${text}`);
for (const text of ['WORKS','UNDERSTANDS','IMPROVES','TRANSFERS']) ok(mission8.includes(text), `Mission 8 certification evidence contains ${text}`);
for (const text of ['LEVEL 1 CREATOR CERTIFIED','CREATOR FOUNDATIONS COMPLETE','RETRY ONE SKILL','SUPPORT ROUTE','Level 1 Creator Passport']) ok(mission8.includes(text), `Mission 8 outcome contains ${text}`);
ok(mission8.includes('physical print is NOT required for certification') || mission8.includes('A physical print is NOT required for certification'), 'Mission 8 makes physical printing unnecessary for certification');
ok(mission8.includes('about 3–4 minutes'), 'Mission 8 keeps the certification conversation time-bounded');
ok(mission8.includes('You are already certified. This part is just for sharing.'), 'Mission 8 keeps showcase optional and non-assessed');
ok(mission8.includes('Save, Reset') && mission8.includes('Return'), 'Mission 8 contains cleanup and reset');
ok(!mission8.includes('NEXT MISSION') && !mission8.includes('Checkpoint complete? Continue'), 'Mission 8 has no next-mission route');
ok(mission7.includes('Checkpoint complete? Continue') && mission7.includes('mission-8-creator-certification/'), 'Mission 7 links to Mission 8 with checkpoint gate');
ok(!mission8.includes('LEVEL 02') && !mission8.includes('courses/futuretech-lab/builder/') && !mission8.includes('Builder Level'), 'Mission 8 does not expose Level 2');
ok(mission8.length < mission7.length, 'Mission 8 remains shorter than Mission 7');
ok(level1.includes('mission-8-creator-certification/'), 'Mission 8 release candidate is active on Level 1');
ok(level1.includes('All 8 Level 1 missions are open now'), 'Release candidate states all Level 1 missions are open');
ok(mission7.includes('mission-8-creator-certification/'), 'Mission 7 release candidate links to Mission 8');
ok(!lab.includes('courses/futuretech-lab/builder/'), 'Level 2 remains unlinked in the final Level 1 release candidate');
ok(!level1.includes('courses/futuretech-lab/builder/') && !level1.includes('LEVEL 02'), 'Creator Foundations does not expose Level 2');
ok(!mission8.includes('courses/futuretech-lab/builder/') && !mission8.includes('LEVEL 02'), 'Mission 8 does not expose Level 2');
ok(mission8.includes('CREATOR FOUNDATIONS COMPLETE'), 'Mission 8 ends at Creator Foundations completion');

console.log(`FutureTech Lab student usability audit passed: ${checks.length} checks.`);



