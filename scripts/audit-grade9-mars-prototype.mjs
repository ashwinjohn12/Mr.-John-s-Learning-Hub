import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const LOCKED_UNDERSTAND_COMMIT = 'dae8d426a021909b5c71d4d77fa9caa424cad441';
const LOCKED_TRAVEL_COMMIT = '3cc0eda7d9199dac057d8a550c5dfd2108146d5f';

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
  'src/components/MarsHazardAnalyzer.astro',
  'src/components/MarsLifeSupportFlow.astro',
  'src/components/MarsResourceTradeoff.astro',
  'src/styles/mars-readiness.css',
  'src/pages/courses/grade-9-science/space-exploration/mars-readiness/index.astro',
  'src/pages/courses/grade-9-science/space-exploration/mars-readiness/understand/index.astro',
  'src/pages/courses/grade-9-science/space-exploration/mars-readiness/travel/index.astro',
  'src/pages/courses/grade-9-science/space-exploration/mars-readiness/survive/index.astro'
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
  'SURVIVE',
  'Identify the Hazards',
  'Close the Loop',
  'Use What Mars Provides',
  'Recover the Water',
  'Mars Readiness',
  'Science Knowledge',
  'Navigation',
  'Transportation',
  'Landing',
  'Survival',
  'Long-Term Presence',
  'DEMONSTRATED',
  'IN DEVELOPMENT / PLANNED',
  'ACTIVE',
  'REAL MISSION INTEL',
  'READINESS CALL',
  'localStorage',
  'prefers-reduced-motion',
  'NASA',
  'CANADIAN SPACE AGENCY',
  'MOXIE',
  'MELiSSA',
  '98%',
  'CLEAR WATER IS NOT NECESSARILY SAFE WATER',
  'RECOVERY %',
  'SCREENS DOWN // TEST THE SYSTEM',
  'ISRU',
  'in-situ resource utilization'
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
  'src/pages/courses/grade-9-science/space-exploration/mars-readiness/survive/index.astro',
  'src/components/MarsProjectShell.astro'
].filter(fs.existsSync).map(read).join('\n').toLowerCase();

for (const token of ['not in prototype','end of prototype slice','prototype // understand','prototype // travel','prototype // survive']) {
  if (studentFacing.includes(token)) failures.push('Developer-facing prototype language leaked into student experience: ' + token);
}

const phaseChecks = [
  {
    path: 'src/pages/courses/grade-9-science/space-exploration/mars-readiness/understand/index.astro',
    name: 'UNDERSTAND',
    expected: ['01','02','03','04'],
    forbidden: ['05','06','07','08','09','10','11','12']
  },
  {
    path: 'src/pages/courses/grade-9-science/space-exploration/mars-readiness/travel/index.astro',
    name: 'TRAVEL',
    expected: ['05','06','07','08'],
    forbidden: ['09','10','11','12','13','14','15','16']
  },
  {
    path: 'src/pages/courses/grade-9-science/space-exploration/mars-readiness/survive/index.astro',
    name: 'SURVIVE',
    expected: ['09','10','11','12'],
    forbidden: ['13','14','15','16']
  }
];

for (const phase of phaseChecks) {
  if (!fs.existsSync(phase.path)) continue;
  const source = read(phase.path);
  for (const op of phase.expected) {
    if (!source.includes('number="' + op + '"')) failures.push(phase.name + ' is missing Operation ' + op);
  }
  for (const op of phase.forbidden) {
    if (source.includes('number="' + op + '"')) failures.push(phase.name + ' scope exceeded: found Operation ' + op);
  }
}

if (fs.existsSync('src/pages/courses/grade-9-science/space-exploration/mars-readiness/operate')) {
  failures.push('Scope exceeded: OPERATE & DECIDE route exists before approval.');
}

const survivePath = 'src/pages/courses/grade-9-science/space-exploration/mars-readiness/survive/index.astro';
if (fs.existsSync(survivePath)) {
  const survive = read(survivePath);
  for (const advanced of [
    'radiation dose calculation',
    'gas law calculation',
    'electrolysis equation',
    'sabatier equation',
    'stoichiometry exercise',
    'closed-loop mass-balance equation'
  ]) {
    if (survive.toLowerCase().includes(advanced)) failures.push('SURVIVE exceeds Grade 9 calculation scope: ' + advanced);
  }
  if (/water[- ]filtration simulator|digital water[- ]recovery simulator|virtual filter builder/i.test(survive)) {
    failures.push('Operation 12 must remain a physical water-recovery challenge, not a digital simulator.');
  }
  for (const component of ['MarsHazardAnalyzer','MarsLifeSupportFlow','MarsResourceTradeoff']) {
    if (!survive.includes('<' + component)) failures.push('SURVIVE missing approved interaction: ' + component);
  }
}

for (const forbiddenComponent of ['MarsWaterSimulator','MarsRadiationSimulator','MarsGreenhouseBuilder','MarsHabitatDesigner']) {
  if (fs.existsSync('src/components/' + forbiddenComponent + '.astro')) failures.push('Unapproved SURVIVE interaction component exists: ' + forbiddenComponent);
}

const lockedUnderFiles = [
  'src/pages/courses/grade-9-science/space-exploration/mars-readiness/understand/index.astro',
  'src/components/MarsReadinessDashboard.astro',
  'src/components/MarsReadinessCall.astro',
  'src/components/MarsEvidenceMatcher.astro',
  'src/components/MarsIntelLegend.astro'
];

const lockedTravelFiles = [
  'src/pages/courses/grade-9-science/space-exploration/mars-readiness/travel/index.astro',
  'src/components/MarsOrbitModel.astro',
  'src/components/MarsPositionLab.astro',
  'src/components/MarsTransportTradeoff.astro',
  'src/components/MarsOperation.astro'
];

function assertUnchanged(commit, paths, label) {
  for (const path of paths) {
    try {
      const diff = execFileSync('git', ['diff', '--name-only', commit, 'HEAD', '--', path], { encoding: 'utf8' }).trim();
      if (diff) failures.push('Locked ' + label + ' regression file changed unexpectedly: ' + path);
    } catch (error) {
      failures.push('Could not run ' + label + ' regression check for ' + path + ': ' + error.message);
    }
  }
}
assertUnchanged(LOCKED_UNDERSTAND_COMMIT, lockedUnderFiles, 'UNDERSTAND');
assertUnchanged(LOCKED_TRAVEL_COMMIT, lockedTravelFiles, 'TRAVEL');

const transport = fs.existsSync('src/components/MarsTransportTradeoff.astro')
  ? read('src/components/MarsTransportTradeoff.astro').toLowerCase()
  : '';
for (const forbidden of ['best option is','winner is','recommended option is','you should choose']) {
  if (transport.includes(forbidden)) failures.push('Locked Transport tool improperly declares a winner: ' + forbidden);
}

const resource = fs.existsSync('src/components/MarsResourceTradeoff.astro')
  ? read('src/components/MarsResourceTradeoff.astro').toLowerCase()
  : '';
for (const forbidden of ['best option is','winner is','recommended option is','you should choose']) {
  if (resource.includes(forbidden)) failures.push('ISRU trade-off tool improperly declares a winner: ' + forbidden);
}

const stylePath = 'src/styles/mars-readiness.css';
if (fs.existsSync(stylePath)) {
  const css = read(stylePath);
  try {
    const lockedCss = execFileSync('git', ['show', LOCKED_TRAVEL_COMMIT + ':' + stylePath], { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
    if (!css.startsWith(lockedCss)) failures.push('Locked Hub/UNDERSTAND/TRAVEL CSS was edited instead of appending SURVIVE styles.');
  } catch (error) {
    failures.push('Could not compare locked TRAVEL CSS: ' + error.message);
  }
  for (const token of [
    '@media (max-width: 390px)',
    '@media (max-width: 330px)',
    'prefers-reduced-motion',
    '.hazard-list',
    '.life-support-map',
    '.resource-strategy-grid',
    '.water-safety-callout'
  ]) {
    if (!css.toLowerCase().includes(token.toLowerCase())) failures.push('Visual/accessibility system missing: ' + token);
  }
}

const hubPath = 'src/pages/courses/grade-9-science/space-exploration/mars-readiness/index.astro';
if (fs.existsSync(hubPath)) {
  const hub = read(hubPath);
  if (!hub.includes('NASA/JPL-Caltech/ASU/MSSS')) failures.push('Hero Mars image credit is missing.');
  if (!hub.includes('jpegPIA26378.jpg')) failures.push('Real Mars hero imagery is missing.');
  if (!hub.includes("status: 'AVAILABLE', href: travelHref")) failures.push('TRAVEL is not exposed from the Mars Hub.');
  if (!hub.includes("status: 'AVAILABLE', href: surviveHref")) failures.push('SURVIVE is not exposed from the Mars Hub.');
}

if (failures.length) {
  console.error('\nGrade 9 Mars Hub + UNDERSTAND + TRAVEL + SURVIVE audit FAILED\n');
  failures.forEach((item) => console.error(' - ' + item));
  process.exit(1);
}

console.log('Grade 9 Mars Hub + UNDERSTAND + TRAVEL + SURVIVE static audit passed.');
console.log('Scope: Hub + UNDERSTAND 01–04 + TRAVEL 05–08 + SURVIVE 09–12 only.');
console.log('UNDERSTAND content regression files are unchanged from locked commit ' + LOCKED_UNDERSTAND_COMMIT + '.');
console.log('TRAVEL content/widget regression files are unchanged from locked commit ' + LOCKED_TRAVEL_COMMIT + '.');
console.log('Locked Mars CSS is preserved byte-for-byte before appended SURVIVE styles.');
console.log('SURVIVE contains exactly the approved hazard, life-support, and ISRU digital interactions plus a physical water challenge.');
