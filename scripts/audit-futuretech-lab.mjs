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

for (const [name, file] of Object.entries(files)) ok(existsSync(file), `${name} route exists`);

const home = readFileSync(files.home, 'utf8');
ok(home.includes('FutureTech Lab'), 'homepage names FutureTech Lab');
ok(home.includes('courses/futuretech-lab/'), 'homepage links to FutureTech Lab');

const lab = readFileSync(files.lab, 'utf8');
ok(lab.includes('Creator Foundations'), 'FutureTech Lab names Creator Foundations');
ok(lab.includes('New students start at Level 1'), 'lab explains new-student entry');
ok(lab.includes('Returning students continue from where they left off'), 'lab explains returning-student entry');
ok(!lab.includes('courses/futuretech-lab/builder/'), 'Level 2 remains unlinked');

const level1 = readFileSync(files.level1, 'utf8');
for (const text of ['FOUNDATIONS','EXPLORE','CREATE','CERTIFY']) ok(level1.includes(text), `Level 1 contains phase ${text}`);
for (const text of [
  'Welcome to FutureTech: Debug the System','Control It','Make It Respond','Make It Smarter',
  'Sense → Think → Act',"Don&#39;t Crash",'Design It','Product Design Challenge','Make It Better',
  'Pathway Bootcamp','Pathway Challenge','Define It','Build It','Break It','Improve It','Creator Certification'
]) ok(level1.includes(text), `Level 1 contains mission ${text}`);
ok(level1.includes('16') && level1.includes('missions'), 'Level 1 identifies the 16-mission architecture');
ok(level1.includes('mission-1-make-it-happen/'), 'Level 1 links to redesigned Mission 1');
ok(level1.includes('REDESIGN PENDING'), 'unbuilt Missions 2–16 remain explicitly locked');
ok(!level1.includes('All 8 Level 1 missions are open now'), 'old eight-mission release state is removed');
ok(!level1.includes('courses/futuretech-lab/builder/'), 'Level 1 does not expose Level 2');

const mission1 = readFileSync(files.mission1, 'utf8');
for (const text of ['GET','LEARN','TRY','BUILD','PROVE','CHECK']) ok(mission1.includes(text), `Mission 1 includes stage ${text}`);
ok(mission1.includes('Welcome to FutureTech: Debug the System'), 'Mission 1 uses production-locked title');
ok(mission1.includes('SYSTEM TEST FAILED'), 'GET opens with the failed-system hook');
ok(mission1.includes('Find the problem. Fix it. Prove it.'), 'GET preserves concise mission framing');
for (const text of ['EXPECT','OBSERVE','CHANGE ONE THING','TEST']) ok(mission1.includes(text), `Mission 1 debugging model contains ${text}`);
for (const text of ['RE-READ','CHECK','TEST','ASK']) ok(mission1.includes(text), `Mission 1 TRY 4 contains ${text}`);
ok(mission1.includes('Explain what you expected, what happened, and what you tried.'), 'TRY 4 peer step requires explanation rather than answer-seeking');
ok(mission1.includes('SYSTEMS CALIBRATION'), 'BUILD uses mature systems-calibration framing');
ok(mission1.includes('Checkpoint A') && mission1.includes('Delivery Zone B'), 'BUILD includes checkpoint and delivery-zone target');
ok(mission1.includes('RUN TEST'), 'simulators expose explicit test action');
ok(mission1.includes('CHANGE READY TO TEST'), 'editing returns students to testing');
ok(mission1.includes("!runtime[name].hasRun"), 'command editing is locked until a test has run');
ok(mission1.includes('Need a hint?'), 'Mission 1 includes contextual Hint access');
ok(mission1.includes('SUPPORT ROUTE'), 'Mission 1 includes Support Route');
for (const text of ['1 · COMPARE','2 · NARROW IT DOWN','3 · TRACE IT']) ok(mission1.includes(text), `Support Route includes ${text}`);
ok(mission1.includes('RETURNING CREATOR?'), 'returning-student route is present');
ok(mission1.includes('Fast Track'), 'Mission 1 contains Fast Track');
ok(mission1.includes('first true fault'), 'Fast Track targets root-cause reasoning');
ok(mission1.includes('later suspicious command'), 'Fast Track distinguishes root cause from later symptom');
ok(mission1.includes('predict the problem before you change anything'), 'PROVE requires prediction before editing');
ok(mission1.includes('LOCK IN PREDICTION'), 'PROVE includes explicit prediction lock');
ok(mission1.includes('Did the test match your prediction?'), 'PROVE compares prediction with evidence');
ok(mission1.includes('make a new prediction'), 'failed PROVE attempt supports evidence-based retry');
for (const text of ['I changed:','Because:','My test showed:','If it still failed, I would test:']) ok(mission1.includes(text), `CHECK evidence contains ${text}`);
ok(mission1.includes('EVIDENCE SAVED'), 'CHECK confirms saved evidence');
ok(mission1.includes('Ready for teacher check'), 'CHECK supports rapid teacher verification');
ok(mission1.includes('VERIFY MISSION') && mission1.includes('ONE MORE TRY'), 'teacher check has verify and retry outcomes');
ok(mission1.includes('Troubleshoots systematically'), 'Mission 1 uses one primary Skill Passport competency');
for (const rating of ['P — Proficient','D — Developing','E — Emerging','NY — Not Yet']) ok(mission1.includes(rating), `Skill Passport includes ${rating}`);
ok(mission1.includes('Break It on Purpose'), 'Creator Extension is present');
ok(mission1.includes('one fair bug'), 'Creator Extension restricts bug to a fair single cause');
ok(mission1.includes('HAND TO PARTNER'), 'Creator Extension includes peer diagnosis');
ok(mission1.includes('TEST MY DIAGNOSIS'), 'Creator Extension includes partner diagnosis check');
ok(mission1.includes('Backup Route'), 'Mission 1 includes a technology-failure Backup Route');
ok(mission1.includes('FORWARD 2 · TURN LEFT · FORWARD 2 · TURN LEFT · FORWARD 2 · STOP'), 'Backup Route mirrors the BUILD command language');
ok(mission1.includes('futuretech-level1-mission1-v2'), 'Mission 1 has persistent local mission state');
ok(mission1.includes('localStorage.getItem') && mission1.includes('localStorage.setItem'), 'Mission 1 persists and resumes state');
ok(mission1.includes('prefers-reduced-motion: reduce'), 'Mission 1 supports reduced motion');
ok(mission1.includes('aria-live="polite"'), 'Mission 1 announces meaningful state changes');
ok(mission1.includes('aria-label="Systems calibration map'), 'Mission 1 provides text alternatives for calibration maps');
ok(!mission1.includes('draggable="true"'), 'Mission 1 does not require drag interactions');
ok(mission1.includes('@media(max-width:700px)') && mission1.includes('@media(max-width:480px)'), 'Mission 1 defines narrow-screen layouts');
ok(mission1.includes('overflow-x:auto'), 'wide step/process rows remain contained on narrow screens');
ok(mission1.includes('RETURN TO MISSION MAP') && mission1.includes('href="../"'), 'completion returns to the Level 1 mission map');
ok(!mission1.includes('mission-2-make-it-think/'), 'redesigned Mission 1 does not launch legacy Mission 2');
ok(!mission1.includes('makecode.microbit.org'), 'Mission 1 requires no external software or account');

for (const legacy of ['mission2','mission3','mission4','mission5','mission6','mission7','mission8']) {
  const html = readFileSync(files[legacy], 'utf8');
  ok(html.length > 1000, `${legacy} legacy route still builds while redesign remains locked`);
}

console.log(`FutureTech Level 1 prototype audit passed: ${checks.length} checks.`);
