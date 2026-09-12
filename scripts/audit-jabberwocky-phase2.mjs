import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const passes = [];
const failures = [];
const rel = (p) => path.join(root, p);
const read = (p) => fs.readFileSync(rel(p), 'utf8');
const check = (condition, message) => condition ? passes.push(message) : failures.push(message);

const hubPath = 'src/pages/courses/grade-7-science/jabberwocky/phase-2/index.astro';
const missionPaths = [1,2,3,4].map((n) => `src/pages/courses/grade-7-science/jabberwocky/phase-2/mission-${n}/index.astro`);
const progressPath = 'src/components/JcecPhase2Progress.astro';
const dataPath = 'src/data/jabberwockyPhase2.ts';

for (const file of [hubPath, ...missionPaths, progressPath, dataPath]) check(fs.existsSync(rel(file)), `exists: ${file}`);

const hub = read(hubPath);
const missions = missionPaths.map(read);
const progress = read(progressPath);
const data = read(dataPath);

check(hub.includes('JcecPhase2Progress active={4}'), 'Phase 2 hub shows Mission 4 as current');
check(hub.includes("number: 4") && hub.includes("status: 'CURRENT'") && hub.includes("number: 5") && hub.includes("status: 'UPCOMING'"), 'Phase 2 hub keeps Mission 4 current and Mission 5 upcoming');
for (let n = 1; n <= 4; n += 1) check(hub.includes(`phase-2/mission-${n}/`), `Phase 2 hub links to Mission ${n}`);
for (const title of ['Find the Living Resource','Keep It Growing','Build the Growing Zone','Choose the Next Generation','Use It Without Losing It']) check(hub.includes(title), `Phase 2 hub includes ${title}`);
check(hub.includes('Missions 1–3 found the resource, learned what it needs and designed a growing system. Mission 4 asks which traits humans should encourage next.'), 'Phase 2 hub explains Mission 4 story progression');
check(hub.includes('jabberwocky-phase2-posting'), 'Phase 2 hub preserves separate Phase 2 posting state');

for (let i = 0; i < missions.length; i += 1) {
  const content = missions[i];
  const n = i + 1;
  for (const token of ['Your Mission','Learn the Science','Investigate','Make a Decision','Record It']) check(content.includes(token), `Phase 2 Mission ${n} includes five-step structure: ${token}`);
  check(content.includes('jabberwocky-phase2-posting'), `Phase 2 Mission ${n} carries the Phase 2 continent posting`);
}

const mission2 = missions[1];
check(mission2.includes('JCEC Growth Trial'), 'Mission 2 preserves the JCEC Growth Trial');
check(mission2.includes('jabberwocky-phase2-growth-condition'), 'Mission 2 saves the teacher-selected Growth Trial condition');
check(mission2.includes('evidence for this mission and Mission 3'), 'Mission 2 tells students Growth Trial evidence carries forward');
check(progress.includes('Next Mission → Build the Growing Zone'), 'Mission 2 receives clear next-mission navigation');

const mission3 = missions[2];
for (const token of ['SOIL PARTICLES','WATER IN SOIL','MATERIALS PLANTS NEED','CHANGE THE ENVIRONMENT']) check(mission3.includes(token), `Mission 3 includes practical science idea: ${token}`);
for (const token of ['sand-rich','clay-rich','organic-rich','Drainage','retention','Compaction']) check(mission3.toLowerCase().includes(token.toLowerCase()), `Mission 3 includes soil concept: ${token}`);
check(mission3.includes('Fertilizer can add nutrients'), 'Mission 3 introduces fertilizer at a simple level');
for (const token of ['Irrigation','Protected growing','Raised / contained bed','Soilless / hydroponic growing']) check(mission3.includes(token), `Mission 3 includes growing technology: ${token}`);
check(mission3.includes('Soil / Growing Medium Investigation'), 'Mission 3 includes the main soil/growing-medium investigation');
check(mission3.includes('Fair comparison:'), 'Mission 3 gives simple fair-comparison guidance');
check(mission3.includes('Bring Back the Growth Trial'), 'Mission 3 explicitly reuses Mission 2 Growth Trial evidence');
check(mission3.includes('jabberwocky-phase2-growth-condition'), 'Mission 3 reads the saved Growth Trial condition');
check(mission3.includes('Growing System Challenge'), 'Mission 3 includes a simple prototype challenge');
check(mission3.includes('This is evidence for a decision, not an engineering competition.'), 'Mission 3 limits prototype cognitive load');
check(mission3.includes('What growing system should JCEC test first on your continent?'), 'Mission 3 has one main team decision');
check(mission3.includes('Growing System Recommendation'), 'Mission 3 ends with one Growing System Recommendation');
check(mission3.includes('What is one way humans can help a plant grow that could also create an environmental problem?'), 'Mission 3 includes the approved individual reflection');
check(mission3.includes('print-phase2-mission3'), 'Mission 3 includes printable soil investigation and recommendation pages');
check(progress.includes('Next Mission → Choose the Next Generation'), 'Mission 3 receives clear Mission 4 navigation');

const mission4 = missions[3];
for (const token of ['REPRODUCTION','PLANT VARIETY','SELECTIVE BREEDING','MONOCULTURE / LOW VARIETY']) check(mission4.includes(token), `Mission 4 includes core science idea: ${token}`);
check(mission4.includes('Pollination') || mission4.includes('pollination'), 'Mission 4 connects pollination to seed reproduction');
check(mission4.includes('You do not need Punnett squares, alleles, genotype, phenotype or dominant/recessive inheritance here.'), 'Mission 4 keeps Grade 9 genetics out of the required pathway');
check(mission4.includes('Selective Breeding Simulation'), 'Mission 4 includes the main selective-breeding simulation');
check(mission4.includes('mixed starting population'), 'Mission 4 starts with visible plant variation');
check(mission4.includes('2–3 generations'), 'Mission 4 models repeated selection over a few simplified generations');
check(mission4.includes('Real offspring vary and selective breeding usually takes many generations.'), 'Mission 4 clearly labels the simulation as a simplified model');
check(mission4.includes('reveal the surprise event'), 'Mission 4 includes a surprise pest/environment event');
check(mission4.includes('Selective breeding can be useful.') && mission4.includes('Variety and safeguards still matter.'), 'Mission 4 presents selective breeding as useful with trade-offs');
for (const token of ['Biological control','Physical / cultural control','Chemical control']) check(mission4.includes(token), `Mission 4 introduces pest-management approach: ${token}`);
check(mission4.includes('Which trait should JCEC favour in this plant, and what risk must remain part of the plan?'), 'Mission 4 has one main team decision');
check(mission4.includes('We would select ______ because ______.') && mission4.includes('But we would need to watch for ______.'), 'Mission 4 uses the approved simple reasoning scaffold');
check(mission4.includes('Plant Variety Decision Card'), 'Mission 4 ends with one Plant Variety Decision Card');
check(mission4.includes('Why might the plant with the highest yield not always be the best choice?'), 'Mission 4 includes the approved individual reflection');
check(mission4.includes('print-phase2-mission4'), 'Mission 4 includes printable simulation and decision materials');
check(mission4.includes('Mission 5 — Use It Without Losing It — is upcoming. Do not start it yet.'), 'Mission 5 remains locked/upcoming');

for (const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) {
  check(mission3.includes(`${continent}:`) || mission3.includes(`'${continent}':`), `Mission 3 includes growing case: ${continent}`);
  check(mission4.includes(`${continent}:`) || mission4.includes(`'${continent}':`), `Mission 4 includes selection case: ${continent}`);
}
for (const plant of ['Skyroot','Rainspout Tree','Storm Palm','Reservoir Thorn','Ember Moss','Goldstem Grain','Ironwood','Floatroot']) check(data.includes(plant), `Phase 2 canon still includes ${plant}`);

check(progress.includes('Resource') && progress.includes('Growth') && progress.includes('Growing Zone') && progress.includes('Variety') && progress.includes('Sustainable Use'), 'Phase 2 progress retains the approved five-mission sequence');

console.log(`\nJabberwocky Phase 2 readiness audit: ${passes.length} checks passed.`);
for (const item of passes) console.log(`  ✓ ${item}`);
if (failures.length) {
  console.error(`\n${failures.length} Phase 2 readiness check(s) failed:`);
  for (const item of failures) console.error(`  ✗ ${item}`);
  process.exit(1);
}
console.log('\nPhase 2 Missions 1–4 are internally consistent: separate continent state, Growth Trial carry-forward, soil/growing-system science, observable selective breeding, trade-off reasoning, print resources, and Mission 5 still upcoming.');
