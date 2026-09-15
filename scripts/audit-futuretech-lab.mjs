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
  mission3: 'dist/courses/futuretech-lab/creator-foundations/mission-3-build-a-game/index.html'
};

for (const name of ['home','lab','level1','mission1','mission2']) ok(existsSync(files[name]), `${name} route exists`);
ok(!existsSync(files.mission3), 'Mission 3 is not accidentally built');

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
ok(level1.includes('Missions 1–2 are open now'), 'Level 1 clearly names open missions');
ok(level1.includes('COMING NEXT · PREVIEW'), 'planned missions clearly marked preview');
ok(level1.includes('simple loop'), 'Level 1 Mission 2 summary includes loop prerequisite');
ok(!level1.includes('mission-3-build-a-game/'), 'planned Mission 3 is not linked');

for (const [name, file] of [['mission1',files.mission1],['mission2',files.mission2]]) {
  const html = readFileSync(file, 'utf8');
  for (let i=1;i<=6;i++) ok(html.includes(`id="stage-${i}"`), `${name} stage-${i}`);
  for (const text of ['TRY 4','Ready-for-Check','Checkpoint','SKILL PASSPORT','Reset','Start at Stage 1 and work in order']) ok(html.includes(text), `${name} contains ${text}`);
  ok(html.includes('Check → Simulate → Download → Partner'), `${name} has persistent TRY 4 route`);
}

const mission1 = readFileSync(files.mission1, 'utf8');
ok(mission1.includes('DRIVER') && mission1.includes('NAVIGATOR'), 'Mission 1 teaches partner roles');
ok(mission1.includes('SWITCH ROLES NOW'), 'Mission 1 prompts Stage 3 role switch');
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

console.log(`FutureTech Lab student usability audit passed: ${checks.length} checks.`);
