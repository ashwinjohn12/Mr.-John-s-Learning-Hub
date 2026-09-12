import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const passes = [];
const failures = [];
const rel = (p) => path.join(root, p);
const read = (p) => fs.readFileSync(rel(p), 'utf8');
const check = (condition, message) => condition ? passes.push(message) : failures.push(message);
const has = (text, token) => text.toLowerCase().includes(token.toLowerCase());

const hubPath = 'src/pages/courses/grade-7-science/jabberwocky/phase-2/index.astro';
const missionPaths = [1,2,3,4,5].map((n) => `src/pages/courses/grade-7-science/jabberwocky/phase-2/mission-${n}/index.astro`);
const progressPath = 'src/components/JcecPhase2Progress.astro';
const dataPath = 'src/data/jabberwockyPhase2.ts';

for (const file of [hubPath, ...missionPaths, progressPath, dataPath]) check(fs.existsSync(rel(file)), `exists: ${file}`);

const hub = read(hubPath);
const missions = missionPaths.map(read);
const progress = read(progressPath);
const data = read(dataPath);

check(hub.includes('JcecPhase2Progress active={5}'), 'Phase 2 hub shows Mission 5 as current');
check(hub.includes("number: 4") && hub.includes("status: 'COMPLETE'") && hub.includes("number: 5") && hub.includes("status: 'CURRENT'"), 'Phase 2 hub marks Missions 1–4 complete and Mission 5 current');
for (let n = 1; n <= 5; n += 1) check(hub.includes(`phase-2/mission-${n}/`), `Phase 2 hub links to Mission ${n}`);
for (const title of ['Find the Living Resource','Keep It Growing','Build the Growing Zone','Choose the Next Generation','Use It Without Losing It']) check(hub.includes(title), `Phase 2 hub includes ${title}`);
check(hub.includes('Missions 1–4 found the resource, learned what it needs, designed a growing system and explored useful traits. Mission 5 asks what level of development the continent can actually handle.'), 'Phase 2 hub explains final story progression');
check(hub.includes('jabberwocky-phase2-posting'), 'Phase 2 hub preserves separate Phase 2 posting state');
check(!hub.includes('phase-3/'), 'Phase 2 hub does not create a Phase 3 route');

for (let i = 0; i < missions.length; i += 1) {
  const content = missions[i];
  const n = i + 1;
  for (const token of ['Your Mission','Learn the Science','Investigate','Make a Decision','Record It']) check(content.includes(token), `Phase 2 Mission ${n} includes five-step structure: ${token}`);
  check(content.includes('jabberwocky-phase2-posting'), `Phase 2 Mission ${n} carries the Phase 2 continent posting`);
}

const [mission1, mission2, mission3, mission4, mission5] = missions;

// Mission 1: structures, functions and resource use.
for (const token of ['Roots','Stem','Leaves','Flowers / reproductive structures']) check(has(mission1, token), `Mission 1 includes plant structure: ${token}`);
check(has(mission1, 'Plant Structure Investigation'), 'Mission 1 includes the real-plant structure investigation');
check(has(mission1, 'Living Resource Profile'), 'Mission 1 ends with the Living Resource Profile');
check(has(mission1, 'possible human use'), 'Mission 1 connects plant science to human resource use');
check(has(mission1, 'adaptation'), 'Mission 1 connects plant structures to adaptation');

// Mission 2: required plant processes and ongoing Growth Trial.
for (const token of ['Diffusion','Osmosis','transport','Transpiration','Photosynthesis','gas exchange','germination','reproduction','propagation']) check(has(mission2, token), `Mission 2 includes plant process: ${token}`);
check(has(mission2, 'JCEC Growth Trial'), 'Mission 2 preserves the JCEC Growth Trial');
check(mission2.includes('jabberwocky-phase2-growth-condition'), 'Mission 2 saves the teacher-selected Growth Trial condition');
check(has(mission2, '7–10 days'), 'Mission 2 keeps the Growth Trial running across days');
check(has(mission2, 'Plant Growth Requirements Card'), 'Mission 2 ends with the Plant Growth Requirements Card');
check(progress.includes('Next Mission → Build the Growing Zone'), 'Mission 2 receives clear Mission 3 navigation');

// Mission 3: soils, growing media, inputs and growing technologies.
for (const token of ['SOIL PARTICLES','WATER IN SOIL','MATERIALS PLANTS NEED','CHANGE THE ENVIRONMENT']) check(mission3.includes(token), `Mission 3 includes practical science idea: ${token}`);
for (const token of ['sand-rich','clay-rich','organic-rich','Drainage','retention','Compaction']) check(has(mission3, token), `Mission 3 includes soil concept: ${token}`);
check(has(mission3, 'Fertilizer can add nutrients'), 'Mission 3 introduces fertilizer at a simple level');
for (const token of ['Irrigation','Protected growing','Raised / contained bed','Soilless / hydroponic growing']) check(has(mission3, token), `Mission 3 includes growing technology: ${token}`);
check(has(mission3, 'Soil / Growing Medium Investigation'), 'Mission 3 includes the main soil/growing-medium investigation');
check(has(mission3, 'Bring Back the Growth Trial'), 'Mission 3 explicitly reuses Mission 2 Growth Trial evidence');
check(mission3.includes('jabberwocky-phase2-growth-condition'), 'Mission 3 reads the saved Growth Trial condition');
check(has(mission3, 'Growing System Challenge'), 'Mission 3 includes a simple prototype challenge');
check(has(mission3, 'What growing system should JCEC test first on your continent?'), 'Mission 3 has one main team decision');
check(has(mission3, 'Growing System Recommendation'), 'Mission 3 ends with one Growing System Recommendation');
check(mission3.includes('print-phase2-mission3'), 'Mission 3 includes printable investigation and recommendation pages');
check(progress.includes('Next Mission → Choose the Next Generation'), 'Mission 3 receives clear Mission 4 navigation');

// Mission 4: reproduction, variation, selective breeding and pest risk without Grade 9 genetics.
for (const token of ['REPRODUCTION','PLANT VARIETY','SELECTIVE BREEDING','MONOCULTURE / LOW VARIETY']) check(mission4.includes(token), `Mission 4 includes core science idea: ${token}`);
check(has(mission4, 'pollination'), 'Mission 4 connects pollination to seed reproduction');
check(has(mission4, 'You do not need Punnett squares, alleles, genotype, phenotype or dominant/recessive inheritance here.'), 'Mission 4 keeps Grade 9 genetics out of the required pathway');
check(has(mission4, 'Selective Breeding Simulation'), 'Mission 4 includes the main selective-breeding simulation');
check(has(mission4, 'mixed starting population'), 'Mission 4 starts with visible plant variation');
check(has(mission4, '2–3 generations'), 'Mission 4 models repeated selection over a few simplified generations');
check(has(mission4, 'Real offspring vary and selective breeding usually takes many generations.'), 'Mission 4 clearly labels the simulation as a simplified model');
check(has(mission4, 'reveal the surprise event'), 'Mission 4 includes a surprise pest/environment event');
check(has(mission4, 'Selective breeding can be useful.') && has(mission4, 'Variety and safeguards still matter.'), 'Mission 4 presents selective breeding as useful with trade-offs');
for (const token of ['Biological control','Physical / cultural control','Chemical control']) check(has(mission4, token), `Mission 4 introduces pest-management approach: ${token}`);
check(has(mission4, 'Which trait should JCEC favour in this plant, and what risk must remain part of the plan?'), 'Mission 4 has one main team decision');
check(has(mission4, 'Plant Variety Decision Card'), 'Mission 4 ends with one Plant Variety Decision Card');
check(mission4.includes('print-phase2-mission4'), 'Mission 4 includes printable simulation and decision materials');
check(progress.includes('Next Mission → Use It Without Losing It'), 'Mission 4 receives clear Mission 5 navigation');

// Mission 5: final sustainability synthesis.
for (const token of ['LAND USE','PRODUCTION INPUTS','VARIETY &amp; RESILIENCE','SUSTAINABILITY']) check(mission5.includes(token), `Mission 5 includes synthesis science idea: ${token}`);
check(has(mission5, 'Can we produce this resource?') && has(mission5, 'Can we keep producing it without damaging the system?'), 'Mission 5 distinguishes production from sustainable production');
check(has(mission5, 'Production Footprint Challenge'), 'Mission 5 includes the main Production Footprint Challenge');
check(has(mission5, 'six map zones') || has(mission5, '6 ZONES'), 'Mission 5 keeps the footprint model small and bounded');
check(has(mission5, 'three constraints') || has(mission5, '3 CONSTRAINTS'), 'Mission 5 uses three earlier-evidence constraints');
check(has(mission5, 'revise exactly one part'), 'Mission 5 requires one consequence-driven revision');
check(has(mission5, 'Evidence Locker'), 'Mission 5 includes the simplified Evidence Locker');
for (const token of ['MISSION 1 · RESOURCE','MISSION 2 · GROWTH','MISSION 3 · GROWING ZONE','MISSION 4 · VARIETY']) check(mission5.includes(token), `Mission 5 Evidence Locker includes ${token}`);
check(mission5.includes('jabberwocky-phase2-growth-condition'), 'Mission 5 can reuse the saved Mission 2 Growth Trial condition');
for (const token of ['Limited monitored harvest','Small managed cultivation','Controlled-environment cultivation','Do not develop yet']) check(has(mission5, token), `Mission 5 includes final strategy: ${token}`);
check(has(mission5, 'What is the safest realistic way humans should use this plant resource?'), 'Mission 5 has one major final team decision');
check(has(mission5, 'DECISION') && has(mission5, 'EVIDENCE') && has(mission5, 'CONSEQUENCE / SAFEGUARD'), 'Mission 5 uses Decision → Evidence → Consequence/Safeguard reasoning');
check(has(mission5, 'JCEC Living Resource Plan'), 'Mission 5 ends with the JCEC Living Resource Plan');
check(has(mission5, '3–5 sentence explanation'), 'Mission 5 limits the final written explanation');
check(has(mission5, 'What is one thing humans could do that would make plant production more successful but less sustainable? What would you choose instead?'), 'Mission 5 includes the approved individual reflection');
check(has(mission5, 'Science understanding → use of evidence → reasoning → sustainable practical decision'), 'Mission 5 states the intended assessment focus');
check(mission5.includes('print-phase2-mission5'), 'Mission 5 includes printable footprint and Living Resource Plan pages');
check(has(mission5, 'Stop here. Do not begin Phase 3'), 'Mission 5 explicitly stops before Phase 3');
check(!mission5.includes('phase-3/'), 'Mission 5 does not create a Phase 3 route');

// Continent-specific continuity and footprint cases.
for (const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) {
  check(mission3.includes(`${continent}:`) || mission3.includes(`'${continent}':`), `Mission 3 includes growing case: ${continent}`);
  check(mission4.includes(`${continent}:`) || mission4.includes(`'${continent}':`), `Mission 4 includes selection case: ${continent}`);
  check(mission5.includes(`${continent}:`) || mission5.includes(`'${continent}':`), `Mission 5 includes footprint case: ${continent}`);
}
for (const plant of ['Skyroot','Rainspout Tree','Storm Palm','Reservoir Thorn','Ember Moss','Goldstem Grain','Ironwood','Floatroot']) check(data.includes(plant), `Phase 2 canon still includes ${plant}`);
check(has(data, 'flowering seed plant—not a true moss'), 'Phase 2 canon keeps the Ember Moss classification safeguard');

// Overall curriculum and pacing coherence.
check(progress.includes('Resource') && progress.includes('Growth') && progress.includes('Growing Zone') && progress.includes('Variety') && progress.includes('Sustainable Use'), 'Phase 2 progress retains the approved five-mission sequence');
const combined = missions.join('\n');
for (const token of ['roots','stems','leaves','reproduction','photosynthesis','transpiration','soil','fertilizer','irrigation','selective breeding','pest','food','fibre','sustainability']) check(has(combined, token), `Phase 2 curriculum coverage includes: ${token}`);
check(has(mission1, '3 classes × 45 minutes'), 'Mission 1 is designed for 3 core classes');
check(has(mission2, '4 classes × 45 minutes'), 'Mission 2 is designed for 4 core classes');
check(has(mission3, '4 classes × 45 minutes'), 'Mission 3 is designed for 4 core classes');
check(has(mission4, '3 classes × 45 minutes'), 'Mission 4 is designed for 3 core classes');
check(has(mission5, '4 classes × 45 minutes'), 'Mission 5 is designed for 4 core classes');
check(3 + 4 + 4 + 3 + 4 === 18, 'Phase 2 core mission pacing totals 18 classes');

console.log(`\nJabberwocky Phase 2 readiness audit: ${passes.length} checks passed.`);
for (const item of passes) console.log(`  ✓ ${item}`);
if (failures.length) {
  console.error(`\n${failures.length} Phase 2 readiness check(s) failed:`);
  for (const item of failures) console.error(`  ✗ ${item}`);
  process.exit(1);
}
console.log('\nPhase 2 Missions 1–5 are internally consistent: separate continent state, structures/functions, plant processes, Growth Trial evidence, soils and growing systems, selective breeding and pest risk, sustainable resource-use synthesis, print resources, 18 core classes, and no Phase 3 student route.');
