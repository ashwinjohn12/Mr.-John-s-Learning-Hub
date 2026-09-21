import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const LOCKED_UNDERSTAND_COMMIT = 'dae8d426a021909b5c71d4d77fa9caa424cad441';

const required = [
  'src/data/marsReadiness.ts',
  'src/components/MarsProjectShell.astro',
  'src/components/MarsPhaseNav.astro',
  'src/components/MarsReadinessDashboard.astro',
  'src/components/MarsReadinessCall.astro',
  'src/components/MarsOperation.astro',
  'src/components/MarsEvidenceMatcher.astro',
  'src/components/MarsIntelLegend.astro',
  'src/components/MarsOrbitModel.astro',
  'src/components/MarsPositionLab.astro',
  'src/components/MarsTransportTradeoff.astro',
  'src/styles/mars-readiness.css',
  'src/pages/courses/grade-9-science/space-exploration/mars-readiness/index.astro',
  'src/pages/courses/grade-9-science/space-exploration/mars-readiness/understand/index.astro',
  'src/pages/courses/grade-9-science/space-exploration/mars-readiness/travel/index.astro'
];

const failures = [];
const read = (path) => fs.readFileSync(path, 'utf8');

for (const path of required) {
  if (!fs.existsSync(path)) failures.push('Missing required Mars file: ' + path);
}

const combined = required.filter((path) => fs.existsSync(path)).map(read).join('\n');
const requiredTokens = [
  'MISSION: MARS',
  'UNDERSTAND',
  'TRAVEL',
  'Predict the Target',
  'Find Your Position',
  'Choose the Transport',
  'Land the Payload',
  'Mars Readiness',
  'Science Knowledge',
  'Navigation',
  'Transportation',
  'Landing',
  'Survival',
  'Operations',
  'Long-Term Presence',
  'DEMONSTRATED',
  'DEVELOPING',
  'MAJOR CHALLENGE',
  'INSUFFICIENT EVIDENCE',
  'REAL MISSION INTEL',
  'THE PROBLEM',
  'WHAT WE KNOW',
  'YOUR ANALYSIS',
  'READINESS CALL',
  'localStorage',
  'prefers-reduced-motion',
  'NOT TO SCALE',
  'Parallax',
  'Azimuth',
  'Altitude',
  'Doppler',
  'All-chemical',
  'Nuclear thermal',
  'Hybrid electric + chemical',
  'Terrain-Relative Navigation',
  'SCREENS DOWN // BUILD + TEST'
];

for (const token of requiredTokens) {
  if (!combined.toLowerCase().includes(token.toLowerCase())) failures.push('Missing required Mars token: ' + token);
}

const marsCombined = required.filter((path) => fs.existsSync(path)).map(read).join('\n').toLowerCase();
for (const token of ['continental archive','pathfinder log','classified dossier','continent posting','mission 2190']) {
  if (marsCombined.includes(token)) failures.push('Jabberwocky identity leaked into Mars project: ' + token);
}

const studentFacing = [
  'src/pages/courses/grade-9-science/space-exploration/mars-readiness/index.astro',
  'src/pages/courses/grade-9-science/space-exploration/mars-readiness/understand/index.astro',
  'src/pages/courses/grade-9-science/space-exploration/mars-readiness/travel/index.astro',
  'src/components/MarsProjectShell.astro'
].filter(fs.existsSync).map(read).join('\n').toLowerCase();

for (const token of ['not in prototype','end of prototype slice','prototype // understand','prototype // travel']) {
  if (studentFacing.includes(token)) failures.push('Developer-facing prototype language leaked into student experience: ' + token);
}

const understandPath = 'src/pages/courses/grade-9-science/space-exploration/mars-readiness/understand/index.astro';
const travelPath = 'src/pages/courses/grade-9-science/space-exploration/mars-readiness/travel/index.astro';

if (fs.existsSync(understandPath)) {
  const understand = read(understandPath);
  for (const op of ['01','02','03','04']) {
    if (!understand.includes('number="' + op + '"')) failures.push('UNDERSTAND is missing Operation ' + op);
  }
  for (const op of ['05','06','07','08']) {
    if (understand.includes('number="' + op + '"')) failures.push('TRAVEL Operation leaked into UNDERSTAND: ' + op);
  }
}

if (fs.existsSync(travelPath)) {
  const travel = read(travelPath);
  for (const op of ['05','06','07','08']) {
    if (!travel.includes('number="' + op + '"')) failures.push('TRAVEL is missing Operation ' + op);
  }
  for (const op of ['09','10','11','12','13','14','15','16']) {
    if (travel.includes('number="' + op + '"')) failures.push('TRAVEL scope exceeded: found Operation ' + op);
  }
  if (/escape velocity|tsiolkovsky|specific impulse equation|hohmann transfer equation/i.test(travel)) {
    failures.push('TRAVEL includes advanced orbital/rocket mathematics outside the locked Grade 9 scope.');
  }
  if (/landing simulator|digital lander|drag-and-drop lander/i.test(travel)) {
    failures.push('Operation 08 must remain a physical engineering challenge, not a digital landing simulator.');
  }
}

for (const path of [
  'src/pages/courses/grade-9-science/space-exploration/mars-readiness/survive',
  'src/pages/courses/grade-9-science/space-exploration/mars-readiness/operate'
]) {
  if (fs.existsSync(path)) failures.push('Scope exceeded: future phase route exists: ' + path);
}

const transport = fs.existsSync('src/components/MarsTransportTradeoff.astro')
  ? read('src/components/MarsTransportTradeoff.astro').toLowerCase()
  : '';
for (const forbidden of ['best option is','winner is','recommended option is','you should choose']) {
  if (transport.includes(forbidden)) failures.push('Transport tool improperly declares a winner: ' + forbidden);
}

const lockedUnderFiles = [
  'src/pages/courses/grade-9-science/space-exploration/mars-readiness/understand/index.astro',
  'src/components/MarsReadinessDashboard.astro',
  'src/components/MarsReadinessCall.astro',
  'src/components/MarsEvidenceMatcher.astro',
  'src/components/MarsIntelLegend.astro'
];

for (const path of lockedUnderFiles) {
  try {
    const diff = execFileSync('git', ['diff', '--name-only', LOCKED_UNDERSTAND_COMMIT, 'HEAD', '--', path], { encoding: 'utf8' }).trim();
    if (diff) failures.push('Locked UNDERSTAND regression file changed unexpectedly: ' + path);
  } catch (error) {
    failures.push('Could not run UNDERSTAND regression check for ' + path + ': ' + error.message);
  }
}

const stylePath = 'src/styles/mars-readiness.css';
if (fs.existsSync(stylePath)) {
  const css = read(stylePath);
  try {
    const lockedCss = execFileSync('git', ['show', LOCKED_UNDERSTAND_COMMIT + ':' + stylePath], { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
    if (!css.startsWith(lockedCss)) failures.push('Existing locked Mars CSS was edited instead of appending TRAVEL styles.');
  } catch (error) {
    failures.push('Could not compare locked Mars CSS: ' + error.message);
  }
  for (const token of ['@media (max-width: 390px)','@media (max-width: 330px)','prefers-reduced-motion','.orbit-model','.position-lab','.transport-tradeoff']) {
    if (!css.toLowerCase().includes(token.toLowerCase())) failures.push('Visual/accessibility system missing: ' + token);
  }
}

const hubPath = 'src/pages/courses/grade-9-science/space-exploration/mars-readiness/index.astro';
if (fs.existsSync(hubPath)) {
  const hub = read(hubPath);
  if (!hub.includes('NASA/JPL-Caltech/ASU/MSSS')) failures.push('Hero Mars image credit is missing.');
  if (!hub.includes('jpegPIA26378.jpg')) failures.push('Real Mars hero imagery is missing.');
  if (!hub.includes("status: 'AVAILABLE', href: travelHref")) failures.push('TRAVEL is not exposed from the Mars Hub.');
}

if (failures.length) {
  console.error('\nGrade 9 Mars Hub + UNDERSTAND + TRAVEL audit FAILED\n');
  failures.forEach((item) => console.error(' - ' + item));
  process.exit(1);
}

console.log('Grade 9 Mars Hub + UNDERSTAND + TRAVEL static audit passed.');
console.log('Scope: Hub + UNDERSTAND Operations 01–04 + TRAVEL Operations 05–08 only.');
console.log('UNDERSTAND content regression files are unchanged from locked commit ' + LOCKED_UNDERSTAND_COMMIT + '.');
console.log('Existing Mars CSS is preserved byte-for-byte before appended TRAVEL styles.');
console.log('Protected identity, local persistence, maturity labels, accessibility markers, and real-source markers detected.');
