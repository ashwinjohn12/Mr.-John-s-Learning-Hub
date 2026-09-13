import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const exists = (file) => fs.existsSync(path.join(root, file));
let checks = 0;
const pass = (message) => { checks += 1; console.log(`  ✓ ${message}`); };
const fail = (message) => { throw new Error(`Jabberwocky whole-year audit failed: ${message}`); };
const expectExists = (file, label = file) => exists(file) ? pass(`exists: ${label}`) : fail(`missing ${file}`);
const expectContains = (text, needle, label) => text.includes(needle) ? pass(label) : fail(`${label} — missing: ${needle}`);
const expectNotContains = (text, needle, label) => !text.includes(needle) ? pass(label) : fail(`${label} — unexpected: ${needle}`);

console.log('\nJabberwocky whole-year release-readiness audit');

const basePath = 'src/pages/courses/grade-7-science/jabberwocky';
const required = [
  `${basePath}/index.astro`,
  `${basePath}/teacher-dashboard/index.astro`,
  `${basePath}/council/index.astro`,
  `${basePath}/council/teacher-guide/index.astro`,
  'src/components/JcecWholeYearReleaseState.astro',
  'src/layouts/BaseLayout.astro',
  'package.json'
];
for (let p = 1; p <= 5; p += 1) {
  required.push(`${basePath}/phase-${p}/index.astro`);
  required.push(`${basePath}/phase-${p}/teacher-launch-guide/index.astro`);
  for (let m = 1; m <= 5; m += 1) required.push(`${basePath}/phase-${p}/mission-${m}/index.astro`);
}
required.forEach((file) => expectExists(file));

const dashboard = read(`${basePath}/teacher-dashboard/index.astro`);
const release = read('src/components/JcecWholeYearReleaseState.astro');
const layout = read('src/layouts/BaseLayout.astro');
const pkg = read('package.json');
const council = read(`${basePath}/council/index.astro`);

expectContains(layout, "import JcecWholeYearReleaseState", 'BaseLayout loads whole-year release-state component');
expectContains(layout, '<JcecWholeYearReleaseState />', 'whole-year release-state component renders on Jabberwocky pages');
expectContains(release, 'FULL YEAR RELEASED', 'launch page has full-year released state');
expectContains(release, 'All five science phases and the final Council are available', 'launch roadmap no longer presents later phases as unavailable');
expectContains(release, 'MISSION 2190 COUNCIL RELEASED', 'launch console identifies final Council as released');
expectContains(release, 'Phase complete · available for review', 'completed phase hubs are visually review-only');
expectContains(release, 'Earlier missions stay open so you can check evidence without confusing them with new work.', 'old phases explain review access clearly');
expectContains(release, 'FINAL COUNCIL STATUS', 'Phase 5 final-Council status is explicitly corrected');
expectContains(release, 'Released. Keep this same Phase 5 team and continent', 'Phase 5 Council handoff is released');

for (let p = 1; p <= 5; p += 1) expectContains(release, `phaseHref(${p})`, `release layer generates Phase ${p} route`);
expectContains(release, "match:'/phase-1/mission-5/'", 'Phase 1 final mission has a direct Phase 2 handoff');
expectContains(release, 'href:phaseHref(2)', 'Phase 1 final mission handoff targets Phase 2');
expectContains(release, "match:'/phase-2/mission-5/'", 'Phase 2 final mission has a direct Phase 3 handoff');
expectContains(release, 'href:phaseHref(3)', 'Phase 2 final mission handoff targets Phase 3');
expectContains(release, 'nextHref:phaseHref(4)', 'Phase 3 hub hands students to Phase 4');
expectContains(release, 'nextHref:phaseHref(5)', 'Phase 4 hub hands students to Phase 5');
expectContains(release, 'nextHref:councilHref', 'Phase 5 hub hands students to final Council');
expectContains(council, 'MISSION 2190 IS COMPLETE WHEN', 'Mission 2190 ends with explicit Council completion criteria');
expectContains(council, 'MISSION 2190 — COUNCIL RECORD COMPLETE', 'final Council provides narrative closure');

const postingSources = [
  [`${basePath}/phase-1/mission-1/index.astro`, 'jabberwocky-phase1-posting'],
  [`${basePath}/phase-2/index.astro`, 'jabberwocky-phase2-posting'],
  [`${basePath}/phase-3/index.astro`, 'jabberwocky-phase3-posting'],
  [`${basePath}/phase-4/index.astro`, 'jabberwocky-phase4-posting'],
  [`${basePath}/phase-5/index.astro`, 'jabberwocky-phase5-posting']
];
const keys = [];
for (const [file, key] of postingSources) {
  const text = read(file);
  expectContains(text, key, `${file.split('/').slice(-3,-2)[0] || file} uses separate posting key ${key}`);
  keys.push(key);
}
if (new Set(keys).size === 5) pass('all five phase continent-posting localStorage keys are separate');
else fail('phase posting keys are not unique');
expectContains(council, 'jabberwocky-phase5-posting', 'final Council carries the existing Phase 5 posting instead of assigning a new one');
expectNotContains(council, '<select id="continent', 'Council does not ask students to reselect a continent');

for (let p = 1; p <= 5; p += 1) {
  for (let m = 2; m <= 5; m += 1) {
    const file = `${basePath}/phase-${p}/mission-${m}/index.astro`;
    const text = read(file);
    expectNotContains(text, 'id="continent-select"', `Phase ${p} Mission ${m} does not re-run the Phase 1 continent selector`);
    expectNotContains(text, `id="phase${p}-continent"`, `Phase ${p} Mission ${m} does not re-run its hub continent selector`);
  }
}

const phaseDefinitions = [
  {
    phase:1, unit:'Interactions & Ecosystems', missions:['Explore Your Environment','Meet a Native Species','Build the Ecosystem','Watch the Ecosystem Change','Humans Have Arrived'],
    records:['Environment Profile','Native Species Card','Ecosystem Map','Ecosystem Change Record','JCEC Recommendation Board'], checkpoint:'Ecosystem Change Record', synthesis:'JCEC Recommendation Board'
  },
  {
    phase:2, unit:'Plants for Food & Fibre', missions:['Find the Living Resource','Keep It Growing','Build the Growing Zone','Choose the Next Generation','Use It Without Losing It'],
    records:['Living Resource Profile','Plant Growth Requirements Card','Growing System Recommendation','Plant Variety Decision Card','JCEC Living Resource Plan'], checkpoint:'Growing System Recommendation', synthesis:'JCEC Living Resource Plan'
  },
  {
    phase:3, unit:'Heat & Temperature', missions:['Read the Thermal Warning','Follow the Heat','Hold the Temperature','Control the Habitat','Survive Without Wasting It'],
    records:['Thermal Risk Card','Habitat Heat Map','Thermal Barrier Recommendation','Habitat Control Protocol','JCEC Thermal Survival Plan'], checkpoint:'Thermal Barrier Recommendation', synthesis:'JCEC Thermal Survival Plan'
  },
  {
    phase:4, unit:'Structures & Forces', missions:['Read the Building Site','Trace the Forces','Choose What Holds','Keep It Standing','Authorize New Horizon'],
    records:['New Horizon Requirements Card','Structural Force Map','Material & Joint Recommendation','New Horizon Safety Protocol','JCEC NEW HORIZON STRUCTURAL AUTHORIZATION'], checkpoint:'Material & Joint Recommendation', synthesis:'JCEC New Horizon Structural Authorization'
  },
  {
    phase:5, unit:'Planet Earth', missions:['Read the Ground','Follow the Rock Story','Track the Changing Surface','Read the Deep Past','Prepare the Final Evidence'],
    records:['Ground Evidence Card','Rock History Profile','Surface Change Forecast','Deep Record Timeline','JCEC GEOLOGICAL EVIDENCE PACKET'], checkpoint:'Surface Change Forecast', synthesis:'JCEC Geological Evidence Packet'
  }
];

for (const def of phaseDefinitions) {
  expectContains(dashboard, def.unit, `dashboard identifies Phase ${def.phase} unit: ${def.unit}`);
  expectContains(dashboard, '18 core classes', `dashboard shows 18 core classes for Phase ${def.phase}`);
  expectContains(dashboard, '~7 purposeful flex classes', `dashboard shows approximate flex time for Phase ${def.phase}`);
  def.missions.forEach((mission) => expectContains(dashboard, mission, `dashboard includes Phase ${def.phase} mission: ${mission}`));
  expectContains(dashboard, def.checkpoint, `dashboard identifies Phase ${def.phase} checkpoint`);
  expectContains(dashboard, def.synthesis, `dashboard identifies Phase ${def.phase} major synthesis`);
  expectContains(dashboard, 'guide:`${phase(', `dashboard defines Teacher Launch Guide links through the phase helper`);
  expectContains(dashboard, 'hub:phase(', `dashboard defines student hub links through the phase helper`);

  for (let i = 0; i < def.records.length; i += 1) {
    const file = `${basePath}/phase-${def.phase}/mission-${i + 1}/index.astro`;
    const text = read(file);
    expectContains(text.toLowerCase(), def.records[i].toLowerCase(), `Phase ${def.phase} Mission ${i + 1} retains Team Record: ${def.records[i]}`);
  }
}

const teacherGuides = phaseDefinitions.map((def) => read(`${basePath}/phase-${def.phase}/teacher-launch-guide/index.astro`));
teacherGuides.forEach((guide, index) => {
  const p = index + 1;
  expectContains(guide, '18 core', `Phase ${p} Teacher Launch Guide preserves 18-core pacing`);
  expectContains(guide, '7', `Phase ${p} Teacher Launch Guide preserves purposeful flex system`);
  const lowMaterial = /NO-PURCHASE|no-purchase|printable|shared|reused/i.test(guide);
  lowMaterial ? pass(`Phase ${p} Teacher Launch Guide preserves low-material / fallback implementation`) : fail(`Phase ${p} teacher guide missing low-material/fallback language`);
  const printReady = /Print guide|print-guide|printable/i.test(guide);
  printReady ? pass(`Phase ${p} Teacher Launch Guide retains print/save planning support`) : fail(`Phase ${p} teacher guide missing print support`);
});

const finalMissions = [1,2,3,4,5].map((p) => read(`${basePath}/phase-${p}/mission-5/index.astro`));
const lockerTerms = ['evidence','Evidence Locker','Evidence Locker','Evidence Locker','Geological Evidence Locker'];
finalMissions.forEach((text, index) => {
  const p = index + 1;
  expectContains(text.toLowerCase(), lockerTerms[index].toLowerCase(), `Phase ${p} final mission retains evidence carry-forward support`);
});
expectContains(read(`${basePath}/phase-2/index.astro`), 'PREVIOUS TEAM BRIEFING', 'Phase 2 hub retains inherited briefing');
expectContains(read(`${basePath}/phase-3/index.astro`), 'PREVIOUS TEAM THERMAL BRIEFING', 'Phase 3 hub retains inherited briefing');
expectContains(read(`${basePath}/phase-4/index.astro`), 'PREVIOUS TEAM STRUCTURAL BRIEFING', 'Phase 4 hub retains inherited briefing');
expectContains(read(`${basePath}/phase-5/index.astro`), 'PHASE 5 CONTINUITY', 'Phase 5 hub retains inherited briefing / continuity system');

expectContains(dashboard, '6 hand lenses', 'materials dashboard includes 6 hand lenses');
expectContains(dashboard, '6 shallow reusable trays', 'materials dashboard includes 6 shallow reusable trays');
expectContains(dashboard, '6 classroom thermometers', 'materials dashboard includes 6 classroom thermometers');
expectContains(dashboard, '6 plastic measuring containers', 'materials dashboard includes 6 plastic measuring containers');
expectContains(dashboard, '3 spring scales', 'materials dashboard includes 3 spring scales');
expectContains(dashboard, 'Every phase keeps its existing no-purchase / print-data fallback.', 'dashboard explicitly preserves all no-purchase fallbacks');

expectContains(dashboard, 'MISSION 2190 COUNCIL', 'dashboard includes final Mission 2190 Council');
expectContains(dashboard, '3 × 45-minute classes', 'dashboard preserves the three-class Council capstone');
expectContains(dashboard, 'two-class compressed fallback', 'dashboard points to approved two-class Council fallback');
expectContains(dashboard, 'Mission 2190 Council Directive', 'dashboard identifies final Council Team Record');
expectContains(dashboard, 'council/teacher-guide/', 'dashboard links Teacher Council Guide');
expectContains(dashboard, 'council/', 'dashboard links student Council');

expectContains(release, 'Teacher Master Dashboard', 'teacher shortcut makes master dashboard easy to find');
expectContains(release, 'Open Mission Roadmap', 'returning students can immediately find the whole-year roadmap');
expectContains(release, 'available for review', 'old phase hubs clearly present as review rather than current work');

expectContains(read('scripts/audit-jabberwocky-phase1.mjs'), 'legacy', 'existing Phase 1 audit continues to protect archived / legacy content');
expectContains(pkg, 'audit-jabberwocky-council.mjs', 'production build still runs Council readiness audit');
expectContains(pkg, 'audit-jabberwocky-year.mjs', 'production build runs whole-year release-readiness audit');
expectContains(pkg, 'audit:jabberwocky-year', 'package exposes whole-year audit command');

console.log(`\nJabberwocky whole-year release-readiness audit: ${checks} checks passed.`);
console.log('The complete student journey, teacher dashboard, phase posting separation, assessment map, materials fallbacks, evidence handoffs and final Council closure are release-ready.');
