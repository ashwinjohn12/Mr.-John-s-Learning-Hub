import fs from 'node:fs';

const read = (path) => fs.readFileSync(path, 'utf8');
const exists = (path) => fs.existsSync(path);
const has = (text, token) => text.includes(token);
const failures = [];
const passes = [];
const check = (condition, label) => {
  if (condition) passes.push(label);
  else failures.push(label);
};

const paths = {
  base: 'src/layouts/BaseLayout.astro',
  readiness: 'src/components/JcecWholeYearClassroomReadiness.astro',
  release: 'src/components/JcecWholeYearReleaseState.astro',
  phase4: 'src/components/JcecPhase4ClassroomReadiness.astro',
  council: 'src/components/JcecPhase5Progress.astro',
  package: 'package.json'
};

for (const [key, path] of Object.entries(paths)) check(exists(path), `exists: ${path}`);

if (failures.length) {
  console.error('Whole-year classroom-readiness audit failed before content checks:');
  for (const failure of failures) console.error(`  ✗ ${failure}`);
  process.exit(1);
}

const base = read(paths.base);
const readiness = read(paths.readiness);
const release = read(paths.release);
const phase4 = read(paths.phase4);
const councilProgress = read(paths.council);
const pkg = read(paths.package);

check(has(base, "import JcecWholeYearClassroomReadiness"), 'BaseLayout imports whole-year classroom readiness layer');
check(has(base, '<JcecWholeYearClassroomReadiness />'), 'BaseLayout renders whole-year classroom readiness layer');
check(base.indexOf('<JcecWholeYearReleaseState />') < base.indexOf('<JcecWholeYearClassroomReadiness />'), 'classroom readiness runs after whole-year release state');
check(base.indexOf('<JcecPhase4ClassroomReadiness />') < base.indexOf('<JcecWholeYearClassroomReadiness />'), 'whole-year classroom layer runs after Phase 4 classroom fix');

for (const token of [
  'availability is not progress',
  'READY TO BEGIN',
  'BEGIN WITH PHASE 1',
  'Begin Phase 1 →',
  'FINAL CAPSTONE · LATER',
  'YOUR FIRST TASK:',
  'PHASE 1 · FIRST CONTACT'
]) check(has(readiness, token), `launch distinguishes release from student progress: ${token}`);

check(has(readiness, "Phase 1 · First Contact — START HERE"), 'launch archive starts at Phase 1 rather than showing the year complete');
check(!has(readiness, "Mission 2190 Council Directive</li>"), 'classroom layer does not preserve the release-state completed archive');

for (const token of [
  '#simplified-phase1-hub',
  'Mission 1 ready',
  'Begin Mission 1 — Explore Your Environment.',
  'Five missions. One ecology investigation.',
  "missionHref(1, 1)"
]) check(has(readiness, token), `Phase 1 fresh-start correction includes: ${token}`);

for (const token of [
  '#phase2-hub',
  'Mission 1 starts with the living resource.',
  'Start Mission 1 →',
  'Then begin Mission 1 — Find the Living Resource.',
  '.whole-year-release-handoff'
]) check(has(readiness, token), `Phase 2 fresh-start correction includes: ${token}`);

for (const token of [
  '#phase3-hub',
  'Temperature ●',
  'Start by measuring the thermal problem',
  'new Phase 4 Structural Systems team'
]) check(has(readiness, token), `Phase 3 fresh-start/transition correction includes: ${token}`);

for (const token of [
  '#phase5-hub',
  'Your final science phase begins here.',
  'Evidence ●',
  'Briefing loaded. Now begin by reading the ground.',
  '<strong>FINAL COUNCIL</strong><span>Later. Finish Missions 1–5 first.'
]) check(has(readiness, token), `Phase 5 release-state override is corrected: ${token}`);

check(has(phase4, 'availability is not student progress'), 'Phase 4 retains its existing classroom-start safeguard');
check(has(readiness, "addPhaseTeamNote(phase3"), 'Phase 3 hub explicitly receives new-team rule');
check(has(readiness, "addPhaseTeamNote(phase4"), 'Phase 4 hub explicitly receives new-team rule');
check(has(readiness, "addPhaseTeamNote(phase5"), 'Phase 5 hub explicitly receives new-team rule');

for (const token of [
  'new Phase 2 team and assign a new Phase 2 continent',
  'new Phase 3 team and assign a new Phase 3 continent',
  'new Phase 4 Structural Systems team and assign a new Phase 4 continent',
  'new Phase 5 Geological Survey team and assign a new Phase 5 continent'
]) check(has(readiness, token), `phase handoff explicitly stops for regrouping: ${token}`);

check(has(readiness, "phase2Final.querySelector('.whole-year-next-phase')?.remove()"), 'Phase 2 final handoff removes duplicate whole-year next-phase link');
check(has(readiness, 'Keep this same Phase 5 team and continent.'), 'Phase 5 → Council preserves same-team/same-continent exception');
check(has(councilProgress, 'Begin Final Council → Mission 2190 Council'), 'Phase 5 Mission 5 still hands to the single Council route');

check(has(readiness, 'TEAM CONTINUITY RULE'), 'Teacher Master Dashboard receives explicit team-continuity rule');
check(has(readiness, 'Regroup students and assign a new phase continent at the start of Phases 2, 3, 4 and 5.'), 'Teacher dashboard states when regrouping occurs');
check(has(readiness, 'BEFORE EACH NEW PHASE'), 'Before Students Arrive receives per-phase regrouping reminder');
check(has(readiness, 'Phases 2–5 use new teams/new postings; the final Council keeps the Phase 5 team and continent.'), 'Teacher operations preserves Council team exception');

check(has(release, "completePhaseHub"), 'release layer remains preserved as provenance/release behavior');
check(has(readiness, "querySelector('.whole-year-release-handoff')?.remove()"), 'classroom layer removes misleading completion handoffs on active phase hubs');

check(has(pkg, 'audit:jcec-whole-year-classroom-readiness'), 'package exposes whole-year classroom-readiness audit command');
check(has(pkg, 'audit-jcec-whole-year-classroom-readiness.mjs'), 'production build runs whole-year classroom-readiness audit');

if (failures.length) {
  console.error(`\nWhole-year classroom-readiness audit FAILED: ${failures.length} issue(s).`);
  for (const failure of failures) console.error(`  ✗ ${failure}`);
  process.exit(1);
}

console.log(`\nWhole-year classroom-readiness audit: ${passes.length} checks passed.`);
for (const pass of passes) console.log(`  ✓ ${pass}`);
console.log('\nMission 2190 now distinguishes released content from student progress, opens every science phase at Mission 1, makes regrouping/new-posting handoffs explicit, preserves the Phase 5-team Council exception, and keeps teacher operations aligned.');
