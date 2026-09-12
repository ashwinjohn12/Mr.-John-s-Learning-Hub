import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const failures = [];
const passes = [];

const rel = (p) => path.join(root, p);
const read = (p) => fs.readFileSync(rel(p), 'utf8');
const check = (condition, message) => {
  if (condition) passes.push(message);
  else failures.push(message);
};

const requiredFiles = [
  'src/pages/courses/grade-7-science/jabberwocky/phase-1/index.astro',
  'src/pages/courses/grade-7-science/jabberwocky/phase-1/mission-1/index.astro',
  'src/pages/courses/grade-7-science/jabberwocky/phase-1/mission-2/index.astro',
  'src/pages/courses/grade-7-science/jabberwocky/phase-1/mission-3/index.astro',
  'src/pages/courses/grade-7-science/jabberwocky/phase-1/mission-4/index.astro',
  'src/pages/courses/grade-7-science/jabberwocky/phase-1/mission-5/index.astro',
  'src/pages/courses/grade-7-science/jabberwocky/phase-1/teacher-launch-guide/index.astro',
  'src/components/JcecMissionProgress.astro',
  'src/components/JcecSimplifiedMissionNavigation.astro',
  'src/components/JcecSubmissionIntegration.astro',
  'src/components/JcecPhase1PacingRefinements.astro',
  'src/layouts/BaseLayout.astro',
  'docs/jabberwocky-phase-1-five-week-pacing-guide.md',
  'docs/jabberwocky-phase-1-teacher-launch-guide.md',
  ...Array.from({ length: 7 }, (_, i) => `src/pages/courses/grade-7-science/jabberwocky/phase-1/operation-${String(i + 2).padStart(2, '0')}/index.astro`),
  ...Array.from({ length: 7 }, (_, i) => `src/data/jabberwockyOperation${String(i + 2).padStart(2, '0')}.ts`),
  ...Array.from({ length: 7 }, (_, i) => `docs/jabberwocky-operation-${String(i + 2).padStart(2, '0')}-teacher-guide.md`)
];

for (const file of requiredFiles) check(fs.existsSync(rel(file)), `exists: ${file}`);

const simplifiedHubPath = 'src/pages/courses/grade-7-science/jabberwocky/phase-1/index.astro';
const simplifiedHub = fs.existsSync(rel(simplifiedHubPath)) ? read(simplifiedHubPath) : '';
check(simplifiedHub.includes('JcecMissionProgress active={5}'), 'simplified Phase 1 hub shows Mission 5 as current');
check(simplifiedHub.includes('mission-5/'), 'simplified Phase 1 hub links to Mission 5');
check(simplifiedHub.includes("title: 'Humans Have Arrived'") && simplifiedHub.includes("status: 'CURRENT'"), 'Mission 5 is current and available');

const mission1Path = 'src/pages/courses/grade-7-science/jabberwocky/phase-1/mission-1/index.astro';
const mission1 = fs.existsSync(rel(mission1Path)) ? read(mission1Path) : '';
for (const token of ['Your Mission', 'Learn the Science', 'Investigate', 'Make a Decision', 'Record It']) check(mission1.includes(token), `Mission 1 includes step: ${token}`);
check(mission1.includes('jabberwocky-phase1-posting'), 'Mission 1 saves the continent for later missions');
check(mission1.includes('Environment Profile'), 'Mission 1 creates the simplified Environment Profile');

const mission2Path = 'src/pages/courses/grade-7-science/jabberwocky/phase-1/mission-2/index.astro';
const mission2 = fs.existsSync(rel(mission2Path)) ? read(mission2Path) : '';
check(mission2.includes('jabberwockyOperation03'), 'Mission 2 reuses the established Operation 03 species data');
check(mission2.includes('jabberwocky-phase1-posting'), 'Mission 2 carries forward the Mission 1 continent');
for (const token of ['Structure', 'Function', 'Adaptation', 'Needs']) check(mission2.includes(token), `Mission 2 includes core science idea: ${token}`);
for (const token of ['Survival Structures Lab', 'EVIDENCE FIRST — IMAGINATION SECOND', 'Feature', 'Evidence', 'How it helps', 'Native Species Card']) check(mission2.includes(token), `Mission 2 includes simplified learning element: ${token}`);
check(mission2.includes('slice(0, 4)'), 'Mission 2 limits each species investigation to four clues');
check(mission2.includes('print-mission2-packet'), 'Mission 2 includes its printable lab and species card');
check(mission2.includes('at least two full adaptation rows'), 'Mission 2 requires two strong evidence-based adaptations rather than unnecessary extra work');

const mission3Path = 'src/pages/courses/grade-7-science/jabberwocky/phase-1/mission-3/index.astro';
const mission3 = fs.existsSync(rel(mission3Path)) ? read(mission3Path) : '';
check(mission3.includes('jabberwockyOperation04'), 'Mission 3 reuses the established Operation 04 ecosystem data');
check(mission3.includes('jabberwocky-phase1-posting'), 'Mission 3 carries forward the Mission 1 continent');
for (const token of ['Producer', 'Consumer', 'Decomposer', 'Food web']) check(mission3.includes(token), `Mission 3 includes core science idea: ${token}`);
for (const token of ['Energy flows', 'Matter cycles', 'FOOD', 'EATER', 'String Food Web', 'Matter Moves Too', 'Ecosystem Map']) check(mission3.includes(token), `Mission 3 includes simplified ecosystem element: ${token}`);
check(mission3.includes('.slice(0, 6)'), 'Mission 3 limits each continent food web to six core feeding links');
check(mission3.includes("node.name !== 'Surface Skimmer'"), 'Mission 3 keeps the largest Mimsy network within the simplified organism target');
check(mission3.includes('WATER PATH') && mission3.includes('CARBON PATH'), 'Mission 3 integrates simple water and carbon paths');
check(mission3.includes('Energy') && mission3.includes('Matter') && mission3.includes('can be reused and cycled'), 'Mission 3 distinguishes energy flow from matter cycling');
check(mission3.includes('If this changes, then') && mission3.includes('may change because'), 'Mission 3 uses the approved simple reasoning scaffold');
check(mission3.includes('print-mission3-packet'), 'Mission 3 includes printable string-web cards and Ecosystem Map');
check(mission3.includes('4 classes × 45 minutes'), 'Mission 3 is designed for four 45-minute classes');
check(!mission3.includes('mutualism') && !mission3.includes('commensalism') && !mission3.includes('parasitism'), 'Mission 3 keeps formal symbiosis categories out of the core student pathway');

const mission4Path = 'src/pages/courses/grade-7-science/jabberwocky/phase-1/mission-4/index.astro';
const mission4 = fs.existsSync(rel(mission4Path)) ? read(mission4Path) : '';
check(mission4.includes('jabberwockyOperation05') && mission4.includes('jabberwockyOperation06'), 'Mission 4 reuses the established population and recovery data');
check(mission4.includes('jabberwocky-phase1-posting'), 'Mission 4 carries forward the Mission 1 continent');
for (const token of ['Population', 'Limiting factor', 'Sample', 'Succession']) check(mission4.includes(token), `Mission 4 includes core science idea: ${token}`);
for (const token of ['Population Sampling', 'Your Population Case', 'Disturbance and Recovery', 'Earth Connection', 'Ecosystem Change Record']) check(mission4.includes(token), `Mission 4 includes simplified change element: ${token}`);
check(mission4.includes('population.series.slice(0, 2)') && mission4.includes('population.evidence.slice(0, 2)'), 'Mission 4 limits continent population evidence to two graphs and two field notes');
check(mission4.includes('[recovery.stages[0], recovery.stages[2], recovery.stages[3]]'), 'Mission 4 shows three clear recovery time points plus the comparison area');
check(mission4.includes('same population can give different sample results'), 'Mission 4 connects sampling to population distribution');
check(mission4.includes('Mostly recovering') && mission4.includes('Mixed — some recovery, some concern') && mission4.includes('Reason for concern'), 'Mission 4 uses one simple overall team decision');
check(mission4.includes('Evidence 1 — population evidence') && mission4.includes('Evidence 2 — recovery evidence'), 'Mission 4 uses the approved Claim + 2 evidence + explanation scaffold');
check(mission4.includes('Do not invent or generalize an Indigenous perspective'), 'Mission 4 keeps the authentic-source rule for the local Earth connection');
check(mission4.includes('No extra JCEC submission is needed for this Earth connection'), 'Mission 4 avoids creating another student submission');
check(mission4.includes('print-mission4-packet'), 'Mission 4 includes its printable sampling grid and change record');
check(mission4.includes('4 classes × 45 minutes'), 'Mission 4 is designed for four 45-minute classes');
check(!mission4.includes('Alternative explanation considered') && !mission4.includes('Uncertainty / next measurement'), 'Mission 4 removes the old advanced CER burden from the core student pathway');

const mission5Path = 'src/pages/courses/grade-7-science/jabberwocky/phase-1/mission-5/index.astro';
const mission5 = fs.existsSync(rel(mission5Path)) ? read(mission5Path) : '';
check(mission5.includes('jabberwockyOperation07') && mission5.includes('jabberwockyOperation08'), 'Mission 5 reuses the established incident and ecological-planning data');
check(mission5.includes('jabberwocky-phase1-posting'), 'Mission 5 carries forward the Mission 1 continent');
for (const token of ['Introduced species', 'Invasive species', 'Pollutant', 'Conservation']) check(mission5.includes(token), `Mission 5 includes core science idea: ${token}`);
for (const token of ['Stowaway Spread Simulation', 'Your Continent Incident', 'Pollution in a Food Chain', 'What Could Be at Risk?', 'JCEC Recommendation Board']) check(mission5.includes(token), `Mission 5 includes simplified human-impact element: ${token}`);
check(mission5.includes('evidence it is spreading') && mission5.includes('evidence it is causing ecological harm'), 'Mission 5 preserves introduced-versus-invasive evidence rule');
check(mission5.includes('incident.evidence.slice(0, 2)'), 'Mission 5 limits each incident to two extra impact clues');
check(mission5.includes('spreadStages: [first, middle, last]'), 'Mission 5 simplifies spread evidence to three time points');
check(mission5.includes('16 producers') && mission5.includes('4 consumers') && mission5.includes('1 predator'), 'Mission 5 uses the short teacher-guided pollutant token model');
check(mission5.includes('Endangered') && mission5.includes('Local extinction') && mission5.includes('Global extinction'), 'Mission 5 includes accessible conservation-risk concepts');
check(mission5.includes('Decision') && mission5.includes('Evidence') && mission5.includes('Possible consequence'), 'Mission 5 uses the approved Decision → Evidence → Possible consequence scaffold');
for (const choice of ['Explore carefully', 'Explore with strong rules', 'Very limited exploration', 'Stop for now']) check(mission5.includes(choice), `Mission 5 includes final recommendation choice: ${choice}`);
check(mission5.includes('three different earlier missions'), 'Mission 5 asks teams to synthesize evidence across earlier missions');
check(mission5.includes('At the start of Phase 1, what did you think about your continent?'), 'Mission 5 includes the approved final individual reflection');
check(mission5.includes('print-mission5-board'), 'Mission 5 includes a printable one-page Recommendation Board');
check(mission5.includes('4 classes × 45 minutes'), 'Mission 5 is designed for four 45-minute classes');
check(mission5.includes('Mission 5 — and Phase 1 — are finished when:'), 'Mission 5 gives students a clear Phase 1 finish line');

const op3Data = read('src/data/jabberwockyOperation03.ts');
const op4Data = read('src/data/jabberwockyOperation04.ts');
const op5Data = read('src/data/jabberwockyOperation05.ts');
const op6Data = read('src/data/jabberwockyOperation06.ts');
const op7Data = read('src/data/jabberwockyOperation07.ts');
const op8Data = read('src/data/jabberwockyOperation08.ts');
const focalSpecies = ['Ridgeback Grazer', 'Canopy Glider', 'Tide Skipper', 'Dune Runner', 'Snow Burrower', 'Plains Strider', 'Barkclimber', 'Reedcrawler'];
for (const species of focalSpecies) {
  check(op3Data.includes(species), `Mission 2 source data preserves species: ${species}`);
  check(op4Data.includes(species), `Mission 3 source data preserves focal species: ${species}`);
  check(op5Data.includes(species), `Mission 4 population source data preserves focal species: ${species}`);
}
for (const continent of ['Gyre', 'Brillig', 'Manxome', 'Slithy Toves', 'Wabe', 'Bandersnatch', 'Gimble', 'Mimsy']) {
  check(op6Data.includes(continent), `Mission 4 recovery source data preserves continent: ${continent}`);
  check(op8Data.includes(continent), `Mission 5 planning source data preserves continent: ${continent}`);
}
for (const stowaway of ['Earth Ryegrass', 'Earth Compost Worm', 'Earth Shore Snail', 'Earth Drought Grass', 'Earth Coldgrass', 'Earth Brome Grass', 'Earth Bark Beetle', 'Earth Marsh Grass']) {
  check(op7Data.includes(stowaway), `Mission 5 source data preserves introduced organism: ${stowaway}`);
}

const simpleNavPath = 'src/components/JcecSimplifiedMissionNavigation.astro';
const simpleNav = fs.existsSync(rel(simpleNavPath)) ? read(simpleNavPath) : '';
check(simpleNav.includes('Next Mission → Meet a Native Species'), 'Mission 1 has a clear next-mission handoff');
check(simpleNav.includes('Next Mission → Build the Ecosystem'), 'Mission 2 has a clear next-mission handoff');
check(simpleNav.includes('Next Mission → Watch the Ecosystem Change'), 'Mission 3 has a clear next-mission handoff');
check(simpleNav.includes('Next Mission → Humans Have Arrived'), 'Mission 4 has a clear next-mission handoff');
check(simpleNav.includes('Reveal JCEC field name'), 'Mission 2 keeps species reconstruction evidence-first before revealing the field name');

const operationPages = Object.fromEntries(
  Array.from({ length: 7 }, (_, i) => {
    const op = String(i + 2).padStart(2, '0');
    const p = `src/pages/courses/grade-7-science/jabberwocky/phase-1/operation-${op}/index.astro`;
    return [op, fs.existsSync(rel(p)) ? read(p) : ''];
  })
);

for (const [op, content] of Object.entries(operationPages)) {
  check(content.includes(`jabberwockyOperation${op}`), `Operation ${op} imports its continent data`);
}

const printTokens = {
  '02': 'print-field-sheet',
  '03': 'print-op3-packet',
  '04': 'print-op4-packet',
  '05': 'print-op5-packet',
  '06': 'print-op6-packet',
  '07': 'print-op7-packet',
  '08': 'print-op8-packet'
};
for (const [op, token] of Object.entries(printTokens)) {
  check(operationPages[op].includes(token), `Operation ${op} includes its printable resource control`);
}

const formId = '1FAIpQLSdziTI_SBqRzQbIWU3ZDtZrNtCG3WB78ttvZdtEmq29kapujg';
for (const [op, content] of Object.entries(operationPages)) {
  check(content.includes(formId), `Operation ${op} points to the JCEC Submission Portal`);
}

const integrationPath = 'src/components/JcecSubmissionIntegration.astro';
const integration = fs.existsSync(rel(integrationPath)) ? read(integrationPath) : '';
for (const next of ['operation-03/', 'operation-04/', 'operation-05/', 'operation-06/', 'operation-07/', 'operation-08/']) {
  check(integration.includes(next), `legacy navigation integration includes ${next}`);
}
check(integration.includes(formId), 'shared JCEC submission dock uses the expected Form');

const pacingPath = 'src/components/JcecPhase1PacingRefinements.astro';
const pacing = fs.existsSync(rel(pacingPath)) ? read(pacingPath) : '';
check(pacing.includes('planetary-cycles-checkpoint'), 'legacy Day 8 carbon/water cycle checkpoint is preserved');
check(pacing.includes('earth-field-link-2'), 'legacy local Earth Field Link is preserved');
check(pacing.includes('conservation-risk-checkpoint'), 'Operation 07 conservation-risk checkpoint is present');
check(pacing.includes('19 core classes + 6 flex classes'), 'legacy five-week core pacing is preserved while simplified missions are finalized');

const layoutPath = 'src/layouts/BaseLayout.astro';
const layout = fs.existsSync(rel(layoutPath)) ? read(layoutPath) : '';
check(layout.includes('JcecSubmissionIntegration'), 'BaseLayout loads JCEC submission integration');
check(layout.includes('JcecPhase1PacingRefinements'), 'BaseLayout loads Phase 1 pacing/curriculum refinements');
check(layout.includes('JcecSimplifiedMissionNavigation'), 'BaseLayout loads simplified mission handoff support');

const launchPagePath = 'src/pages/courses/grade-7-science/jabberwocky/phase-1/teacher-launch-guide/index.astro';
const launchPage = fs.existsSync(rel(launchPagePath)) ? read(launchPagePath) : '';
for (let day = 1; day <= 19; day += 1) check(launchPage.includes(`day: ${day},`), `Teacher Launch Guide includes Day ${day}`);
for (const url of [
  'https://www.calgary.ca/water/stormwater/source-water-protection.html',
  'https://www.calgary.ca/water/stormwater/riparian-areas.html',
  'https://tsuutina.com/wp-content/uploads/2025/06/Niska.Newsletter.June10.2025.final_.pdf'
]) check(launchPage.includes(url), `Day 13 source is included: ${url}`);

console.log(`\nJabberwocky Phase 1 readiness audit: ${passes.length} checks passed.`);
for (const item of passes) console.log(`  ✓ ${item}`);

if (failures.length) {
  console.error(`\n${failures.length} readiness check(s) failed:`);
  for (const item of failures) console.error(`  ✗ ${item}`);
  process.exit(1);
}

console.log('\nPhase 1 source routes, simplified Missions 1–5, legacy operation resources, print controls, submission wiring, pacing inserts, data imports, and teacher guides are internally consistent.');
