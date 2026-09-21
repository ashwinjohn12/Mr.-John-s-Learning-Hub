import fs from 'node:fs';

const required = [
  'src/data/marsReadiness.ts',
  'src/components/MarsProjectShell.astro',
  'src/components/MarsPhaseNav.astro',
  'src/components/MarsReadinessDashboard.astro',
  'src/components/MarsReadinessCall.astro',
  'src/components/MarsOperation.astro',
  'src/components/MarsEvidenceMatcher.astro',
  'src/styles/mars-readiness.css',
  'src/pages/courses/grade-9-science/space-exploration/mars-readiness/index.astro',
  'src/pages/courses/grade-9-science/space-exploration/mars-readiness/understand/index.astro'
];

const failures = [];

for (const path of required) {
  if (!fs.existsSync(path)) failures.push('Missing required prototype file: ' + path);
}

const read = (path) => fs.readFileSync(path, 'utf8');
const combined = required.filter((path) => fs.existsSync(path)).map(read).join('\n');

const requiredTokens = [
  'MISSION: MARS',
  'UNDERSTAND',
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
  'NASA',
  'CANADIAN SPACE AGENCY',
  'Rosalind Franklin',
  'Indigenous',
  'Geocentric',
  'Heliocentric',
  'Doppler',
  'radio telescope',
  'spectrum',
  'nebula'
];

for (const token of requiredTokens) {
  if (!combined.toLowerCase().includes(token.toLowerCase())) failures.push('Missing required prototype token: ' + token);
}

const marsFiles = required.filter((path) => fs.existsSync(path) && path.includes('mars'));
const marsCombined = marsFiles.map(read).join('\n').toLowerCase();

const forbiddenIdentity = [
  'continental archive',
  'pathfinder log',
  'classified dossier',
  'continent posting',
  'mission 2190'
];

for (const token of forbiddenIdentity) {
  if (marsCombined.includes(token)) failures.push('Jabberwocky identity leaked into Mars prototype: ' + token);
}

const understandPath = 'src/pages/courses/grade-9-science/space-exploration/mars-readiness/understand/index.astro';
if (fs.existsSync(understandPath)) {
  const understand = read(understandPath);
  for (const op of ['01','02','03','04']) {
    if (!understand.includes('number="' + op + '"')) failures.push('UNDERSTAND is missing Operation ' + op);
  }
  for (const op of ['05','06','07','08','09','10','11','12','13','14','15','16']) {
    if (understand.includes('number="' + op + '"')) failures.push('Prototype scope exceeded: found Operation ' + op);
  }
}

const futureRouteRoots = [
  'src/pages/courses/grade-9-science/space-exploration/mars-readiness/travel',
  'src/pages/courses/grade-9-science/space-exploration/mars-readiness/survive',
  'src/pages/courses/grade-9-science/space-exploration/mars-readiness/operate'
];
for (const path of futureRouteRoots) {
  if (fs.existsSync(path)) failures.push('Prototype scope exceeded: future phase route exists: ' + path);
}

const stylePath = 'src/styles/mars-readiness.css';
if (fs.existsSync(stylePath)) {
  const css = read(stylePath).toLowerCase();
  for (const token of ['#f4f1eb','#202327','#ad4e32','#326d95','@media (max-width: 390px)','@media (max-width: 330px)','prefers-reduced-motion']) {
    if (!css.includes(token)) failures.push('Visual/accessibility system missing: ' + token);
  }
}

const hubPath = 'src/pages/courses/grade-9-science/space-exploration/mars-readiness/index.astro';
if (fs.existsSync(hubPath)) {
  const hub = read(hubPath);
  if (!hub.includes('NASA/JPL-Caltech/ASU/MSSS')) failures.push('Hero Mars image credit is missing.');
  if (!hub.includes('jpegPIA26378.jpg')) failures.push('Real Mars hero imagery is missing.');
}

if (failures.length) {
  console.error('\nGrade 9 Mars prototype audit FAILED\n');
  failures.forEach((item) => console.error(' - ' + item));
  process.exit(1);
}

console.log('Grade 9 Mars prototype static audit passed.');
console.log('Scope: Hub + UNDERSTAND + Operations 01–04 only.');
console.log('Protected identity check: no Jabberwocky project mechanics detected in Mars prototype files.');
console.log('Persistence, maturity labels, accessibility breakpoints, and real-source markers detected.');
