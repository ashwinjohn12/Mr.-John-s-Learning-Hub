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
  mission5: 'dist/courses/futuretech-lab/creator-foundations/mission-5-sense-think-act/index.html'
};

for (const name of ['home','lab','level1','mission1','mission2','mission3','mission4','mission5']) ok(existsSync(files[name]), `${name} route exists`);

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
ok(level1.includes('Missions 1–5 are open now'), 'Level 1 clearly names open missions');
ok(level1.includes('COMING NEXT · PREVIEW'), 'planned missions clearly marked preview');
ok(level1.includes('simple loop'), 'Level 1 Mission 2 summary includes loop prerequisite');
ok(level1.includes('mission-3-build-a-game/'), 'Mission 3 is linked from Level 1');
ok(level1.includes('mission-4-robot-rookie/'), 'Mission 4 is linked from Level 1');
ok(level1.includes('mission-5-sense-think-act/'), 'Mission 5 is linked from Level 1');
ok(level1.includes('Design It. Print It.') && level1.includes('COMING NEXT · PREVIEW'), 'Missions 6–8 remain locked previews');
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

console.log(`FutureTech Lab student usability audit passed: ${checks.length} checks.`);

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
ok(!level1.includes('mission-6-'), 'Mission 6 remains unlinked');
