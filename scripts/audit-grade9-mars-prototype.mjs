import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const LOCKED_UNDERSTAND_COMMIT = 'dae8d426a021909b5c71d4d77fa9caa424cad441';
const LOCKED_TRAVEL_COMMIT = '3cc0eda7d9199dac057d8a550c5dfd2108146d5f';
const LOCKED_SURVIVE_COMMIT = '0a478f11fd8200cb7a11e5befe732200e4f78dbe';

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
  'src/components/MarsMissionTaskMatcher.astro',
  'src/components/MarsNetworkBuilder.astro',
  'src/components/MarsMissionCrisis.astro',
  'src/styles/mars-readiness.css',
  'src/pages/courses/grade-9-science/space-exploration/mars-readiness/index.astro',
  'src/pages/courses/grade-9-science/space-exploration/mars-readiness/understand/index.astro',
  'src/pages/courses/grade-9-science/space-exploration/mars-readiness/travel/index.astro',
  'src/pages/courses/grade-9-science/space-exploration/mars-readiness/survive/index.astro',
  'src/pages/courses/grade-9-science/space-exploration/mars-readiness/operate/index.astro'
];

const failures = [];
const read = (path) => fs.readFileSync(path, 'utf8');

for (const path of required) {
  if (!fs.existsSync(path)) failures.push('Missing required Mars file: ' + path);
}

const combined = required.filter((path) => fs.existsSync(path)).map(read).join('\n');

for (const token of [
  'MISSION: MARS',
  'UNDERSTAND',
  'TRAVEL',
  'SURVIVE',
  'OPERATE & DECIDE',
  'Send the Robots',
  'Build the Network',
  'Respond to the Crisis',
  'Make the Call',
  'Mars Readiness',
  'REMOTE SENSING',
  'Artificial satellites',
  'Mars Telecommunications Network',
  'Blue Origin',
  'Terrain',
  '50 / 68',
  'SOL 137',
  'Canadian Space Agency',
  'APXS',
  'Canadarm2',
  'Canadarm3',
  'Jeremy Hansen',
  'planetary protection',
  'Artemis Accords',
  'showReadinessCall',
  'localStorage',
  'prefers-reduced-motion'
]) {
  if (!combined.toLowerCase().includes(token.toLowerCase())) failures.push('Missing required Phase 04 token: ' + token);
}

const marsCombined = required.filter((path) => fs.existsSync(path)).map(read).join('\n').toLowerCase();
for (const token of ['continental archive','pathfinder log','classified dossier','continent posting','mission 2190']) {
  if (marsCombined.includes(token)) failures.push('Jabberwocky identity leaked into Mars project: ' + token);
}

const phaseChecks = [
  { path:'src/pages/courses/grade-9-science/space-exploration/mars-readiness/understand/index.astro', name:'UNDERSTAND', expected:['01','02','03','04'], forbidden:['05','06','07','08','09','10','11','12','13','14','15','16'] },
  { path:'src/pages/courses/grade-9-science/space-exploration/mars-readiness/travel/index.astro', name:'TRAVEL', expected:['05','06','07','08'], forbidden:['09','10','11','12','13','14','15','16'] },
  { path:'src/pages/courses/grade-9-science/space-exploration/mars-readiness/survive/index.astro', name:'SURVIVE', expected:['09','10','11','12'], forbidden:['13','14','15','16'] },
  { path:'src/pages/courses/grade-9-science/space-exploration/mars-readiness/operate/index.astro', name:'OPERATE & DECIDE', expected:['13','14','15','16'], forbidden:['17','18','19','20'] }
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

const operatePath = 'src/pages/courses/grade-9-science/space-exploration/mars-readiness/operate/index.astro';
if (fs.existsSync(operatePath)) {
  const operate = read(operatePath);
  for (const component of ['MarsMissionTaskMatcher','MarsNetworkBuilder','MarsMissionCrisis']) {
    if (!operate.includes('<' + component)) failures.push('OPERATE & DECIDE missing approved interaction: ' + component);
  }
  if (!operate.includes('<MarsReadinessDashboard heading="Review the evidence you collected" />')) {
    failures.push('Operation 16 must reuse the existing full Mars Readiness Dashboard.');
  }
  if (!operate.includes('showReadinessCall={false}')) failures.push('Operation 16 must disable the standard readiness call.');
  for (const forbidden of [
    'readiness percentage',
    'mission approved',
    'mission rejected',
    'humanity is ready',
    'success probability'
  ]) {
    if (operate.toLowerCase().includes(forbidden)) failures.push('Operation 16 contains prohibited automated verdict language: ' + forbidden);
  }
}

for (const forbiddenComponent of [
  'MarsFinalScore',
  'MarsReadinessCalculator',
  'MarsMissionApproval',
  'MarsPolicySimulator'
]) {
  if (fs.existsSync('src/components/' + forbiddenComponent + '.astro')) failures.push('Unapproved final-phase component exists: ' + forbiddenComponent);
}

const operationComponent = read('src/components/MarsOperation.astro');
if (!operationComponent.includes('showReadinessCall?: boolean') ||
    !operationComponent.includes('showReadinessCall = true') ||
    !operationComponent.includes('{showReadinessCall && (')) {
  failures.push('MarsOperation showReadinessCall must be backward-compatible and default true.');
}

const crisisPath = 'src/components/MarsMissionCrisis.astro';
if (fs.existsSync(crisisPath)) {
  const crisis = read(crisisPath);
  const powers = [...crisis.matchAll(/data-power="(\d+)"/g)].map((match) => Number(match[1]));
  const total = powers.reduce((sum, value) => sum + value, 0);
  if (powers.length !== 9) failures.push('SOL 137 should contain exactly 9 power-demand systems; found ' + powers.length);
  if (total !== 68) failures.push('SOL 137 power systems must total 68 units; found ' + total);
  if (!crisis.includes("total + ' / 50'")) failures.push('SOL 137 must enforce/display the 50-unit power limit.');
  if (/score|points|winner/i.test(crisis.replace(/Mission Power Units/gi,''))) {
    failures.push('SOL 137 should use consequences, not points/scores/winner logic.');
  }
}

function assertUnchanged(commit, paths, label) {
  for (const path of paths) {
    try {
      const diff = execFileSync('git', ['diff', '--name-only', commit, 'HEAD', '--', path], { encoding:'utf8' }).trim();
      if (diff) failures.push('Locked ' + label + ' regression file changed unexpectedly: ' + path);
    } catch (error) {
      failures.push('Could not run ' + label + ' regression check for ' + path + ': ' + error.message);
    }
  }
}

assertUnchanged(LOCKED_UNDERSTAND_COMMIT, [
  'src/pages/courses/grade-9-science/space-exploration/mars-readiness/understand/index.astro',
  'src/components/MarsReadinessDashboard.astro',
  'src/components/MarsReadinessCall.astro',
  'src/components/MarsEvidenceMatcher.astro',
  'src/components/MarsIntelLegend.astro'
], 'UNDERSTAND');

assertUnchanged(LOCKED_TRAVEL_COMMIT, [
  'src/pages/courses/grade-9-science/space-exploration/mars-readiness/travel/index.astro',
  'src/components/MarsOrbitModel.astro',
  'src/components/MarsPositionLab.astro',
  'src/components/MarsTransportTradeoff.astro'
], 'TRAVEL');

assertUnchanged(LOCKED_SURVIVE_COMMIT, [
  'src/pages/courses/grade-9-science/space-exploration/mars-readiness/survive/index.astro',
  'src/components/MarsHazardAnalyzer.astro',
  'src/components/MarsLifeSupportFlow.astro',
  'src/components/MarsResourceTradeoff.astro'
], 'SURVIVE');

const stylePath='src/styles/mars-readiness.css';
if (fs.existsSync(stylePath)) {
  const css=read(stylePath);
  try {
    const lockedCss=execFileSync('git',['show',LOCKED_SURVIVE_COMMIT + ':' + stylePath],{encoding:'utf8',maxBuffer:10*1024*1024});
    if (!css.startsWith(lockedCss)) failures.push('Locked Hub/UNDERSTAND/TRAVEL/SURVIVE CSS was edited instead of appending Phase 04 styles.');
  } catch (error) {
    failures.push('Could not compare locked SURVIVE CSS: ' + error.message);
  }
  for (const token of [
    '@media (max-width: 390px)',
    '@media (max-width: 330px)',
    'prefers-reduced-motion',
    '.task-match-grid',
    '.network-layout',
    '.crisis-systems',
    '.final-review-instructions'
  ]) {
    if (!css.toLowerCase().includes(token.toLowerCase())) failures.push('Phase 04 visual/accessibility system missing: ' + token);
  }
}

const hubPath='src/pages/courses/grade-9-science/space-exploration/mars-readiness/index.astro';
if (fs.existsSync(hubPath)) {
  const hub=read(hubPath);
  for (const fragment of [
    "status: 'AVAILABLE', href: travelHref",
    "status: 'AVAILABLE', href: surviveHref",
    "status: 'AVAILABLE', href: operateHref"
  ]) {
    if (!hub.includes(fragment)) failures.push('Mars Hub phase availability missing: ' + fragment);
  }
}

if (failures.length) {
  console.error('\nGrade 9 Mars complete 16-class instructional experience audit FAILED\n');
  failures.forEach((item)=>console.error(' - ' + item));
  process.exit(1);
}

console.log('Grade 9 Mars complete 16-class instructional experience static audit passed.');
console.log('Scope: Hub + UNDERSTAND 01–04 + TRAVEL 05–08 + SURVIVE 09–12 + OPERATE & DECIDE 13–16 only.');
console.log('UNDERSTAND regression files remain locked at ' + LOCKED_UNDERSTAND_COMMIT + '.');
console.log('TRAVEL regression files remain locked at ' + LOCKED_TRAVEL_COMMIT + '.');
console.log('SURVIVE regression files remain locked at ' + LOCKED_SURVIVE_COMMIT + '.');
console.log('Locked Mars CSS is preserved byte-for-byte before appended Phase 04 styles.');
console.log('Operation 16 reuses the dashboard, disables only its standard readiness call, and includes no automatic final verdict.');
