import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const passes=[];
const failures=[];
const rel=(p)=>path.join(root,p);
const read=(p)=>fs.readFileSync(rel(p),'utf8');
const has=(text,token)=>text.toLowerCase().includes(token.toLowerCase());
const check=(ok,message)=>ok?passes.push(message):failures.push(message);

const files={
  hub:'src/pages/courses/grade-7-science/jabberwocky/phase-5/index.astro',
  m1:'src/pages/courses/grade-7-science/jabberwocky/phase-5/mission-1/index.astro',
  m2:'src/pages/courses/grade-7-science/jabberwocky/phase-5/mission-2/index.astro',
  progress:'src/components/JcecPhase5Progress.astro',
  data:'src/data/jabberwockyPhase5.ts',
  phase4Progress:'src/components/JcecPhase4Progress.astro'
};
for(const file of Object.values(files)) check(fs.existsSync(rel(file)),`exists: ${file}`);
for(const mission of [3,4,5]) check(!fs.existsSync(rel(`src/pages/courses/grade-7-science/jabberwocky/phase-5/mission-${mission}/index.astro`)),`Mission ${mission} is not built yet`);
for(const route of ['final-council','mission-2190-council','final-decision']) check(!fs.existsSync(rel(`src/pages/courses/grade-7-science/jabberwocky/${route}/index.astro`)),`Final Council route is not built: ${route}`);

const hub=read(files.hub),m1=read(files.m1),m2=read(files.m2),progress=read(files.progress),data=read(files.data),phase4Progress=read(files.phase4Progress);

// Hub + continuity
for(const token of ['THE DEEP RECORD','JCEC GEOLOGICAL SURVEY DIVISION','Read the Ground','Follow the Rock Story','Track the Changing Surface','Read the Deep Past','Prepare the Final Evidence']) check(has(hub,token),`Hub includes ${token}`);
for(const token of ['Evidence ✓','Rock History ●','Surface Change ○','Deep Past ○','Geological Handoff ○']) check(has(hub,token),`Hub progression includes ${token}`);
check((hub.match(/status:'COMPLETE'/g)||[]).length===1,'Hub marks only Mission 1 complete');
check((hub.match(/status:'CURRENT'/g)||[]).length===1,'Hub marks only Mission 2 current');
check(hub.includes('phase-5/mission-1/')&&hub.includes('phase-5/mission-2/'),'Hub releases Missions 1 and 2');
check(!hub.includes('phase-5/mission-3/')&&!hub.includes('phase-5/mission-4/')&&!hub.includes('phase-5/mission-5/'),'Hub keeps Missions 3–5 locked/unbuilt');
check(hub.includes('jabberwocky-phase5-posting'),'Phase 5 uses separate posting state');
for(const token of ['SURFACE / ENVIRONMENT','STRUCTURAL SITE NEED','GROUND-DISTURBANCE LIMIT','OPEN GEOLOGICAL QUESTION']) check(has(hub,token),`Hub preserves geological briefing field ${token}`);
for(const token of ['EARTH REFERENCE EVIDENCE','REAL EARTH · AUTHENTIC SOURCE','JABBERWOCKY SURVEY EVIDENCE','MISSION 2190 SURVEY']) check(has(hub,token),`Hub preserves evidence-source label ${token}`);
check(has(hub,'Do not use an Earth example to assign a rock type or geological history to Jabberwocky automatically'),'Hub preserves Earth/Jabberwocky evidence safeguard');
check(!has(hub,'settlement vote'),'Hub still avoids final settlement decision');

// Progress + Mission 1 → 2 navigation
for(const token of ['Evidence','Rock History','Surface Change','Deep Past','Geological Handoff']) check(has(progress,token),`Progress includes ${token}`);
check(has(progress,'Next Mission → Follow the Rock Story'),'Progress injects Mission 1 → Mission 2 navigation');
check(progress.includes('/phase-5/mission-2/')&&!progress.includes('/phase-5/mission-3/'),'Progress releases Mission 2 and no later mission');
check(has(phase4Progress,'Begin Phase 5 → The Deep Record'),'Phase 4 still hands students to Phase 5');

// Mission 1 remains intact
for(const token of ['MISSION 1 OF 5','What can observations of rocks and minerals tell us about a site?','Ground Evidence Card','OBSERVATION','PROPERTY','ROCK','MINERAL','CLASSIFICATION']) check(has(m1,token),`Mission 1 retains ${token}`);
for(const token of ['EARTH REFERENCE EVIDENCE','JABBERWOCKY SURVEY EVIDENCE','NO-PURCHASE FALLBACK','Geologist\'s Evidence Stations']) check(has(m1,token),`Mission 1 retains ${token}`);

// Mission 2 five-step experience + posting
for(const token of ['MISSION 2 OF 5','How can rocks record the processes that formed and changed them?','3 classes × 45 minutes','Rock History Profile']) check(has(m2,token),`Mission 2 includes ${token}`);
for(const token of ['Your Mission','Learn the Science','Investigate','Make a Decision','Record It']) check(has(m2,token),`Mission 2 includes step ${token}`);
check(m2.includes('jabberwocky-phase5-posting'),'Mission 2 carries existing Phase 5 posting');
check(!m2.includes('<select'),'Mission 2 does not ask students to reselect continent');
check(has(m2,'MISSION 1 ALREADY DID THE SAMPLE DESCRIPTION'),'Mission 2 avoids archive reconstruction');

// Core science and misconceptions
for(const token of ['MINERAL','ROCK','IGNEOUS','SEDIMENTARY','METAMORPHIC']) check(has(m2,token),`Mission 2 science includes ${token}`);
for(const token of ['Molten material cools and solidifies','deposited, then compacted and cemented','heat and pressure without completely melting']) check(has(m2,token),`Mission 2 formation-first teaching includes ${token}`);
for(const token of ['EVIDENCE','PROCESS','ROCK CLASS']) check(has(m2,token),`Mission 2 visible reasoning includes ${token}`);
check(has(m2,'ONE CLUE ≠ PROOF'),'Mission 2 explicitly prevents single-clue overclaiming');
check(has(m2,'Loose sediment is not yet sedimentary rock'),'Mission 2 distinguishes sediment from sedimentary rock');
check(has(m2,'NOT ENOUGH EVIDENCE YET'),'Mission 2 legitimizes uncertainty');

// Rock-cycle process network
for(const token of ['MELTING','COOLING / SOLIDIFYING','WEATHERING / BREAKDOWN','EROSION / TRANSPORT','DEPOSITION','COMPACTION / CEMENTATION','HEAT / PRESSURE']) check(has(m2,token),`Rock-cycle network includes ${token}`);
check(has(m2,'There is no single route every rock must follow'),'Rock cycle is a process network rather than fixed circle');
for(const forbidden of ['radiometric dating calculation','crystallography calculation','mineral chemistry equation','plate vector']) check(!has(m2,forbidden),`Mission 2 avoids above-grade requirement: ${forbidden}`);

// Local Alberta evidence
check(has(m2,'LOCAL EARTH EVIDENCE · SOUTHERN ALBERTA'),'Mission 2 includes bounded local evidence component');
check(has(m2,'Calgary-area sand and gravel'),'Mission 2 uses local Calgary-area sediment example');
check(has(m2,'https://ags.aer.ca/publications/all-publications/ofr-1981-08'),'Mission 2 links authoritative Alberta Geological Survey source');
check(has(m2,'Bow and Elbow rivers'),'Mission 2 connects local evidence to recognizable Calgary waterways');
check(has(m2,'does not automatically establish'),'Mission 2 local evidence avoids automatic Jabberwocky transfer');

// Earth vs Jabberwocky safeguard
for(const token of ['EARTH REFERENCE EVIDENCE','JABBERWOCKY SURVEY EVIDENCE','Earth examples can teach a process']) check(has(m2,token),`Mission 2 evidence safeguard includes ${token}`);
check(has(m2,'do not automatically establish that rock class or history on Jabberwocky'),'Mission 2 keeps evidence systems separate');

// Rock Cycle Evidence Lab + materials
check(has(m2,'Rock Cycle Evidence Lab'),'Mission 2 includes main investigation');
for(const token of ['WHAT EVIDENCE?','WHICH PROCESS?','WHICH ROCK CLASS?','WHAT IS UNCERTAIN?']) check(has(m2,token),`Investigation routine includes ${token}`);
check((m2.match(/code:'[A-E]'/g)||[]).length===5,'Mission 2 defines five evidence cases');
for(const token of ['Coarse interlocking crystals','Layered cemented grains','Banded altered texture','Dark fine texture with holes','Fine dull sample with few clues']) check(has(m2,token),`Evidence Lab includes case ${token}`);
for(const token of ['existing school rock samples if useful','hand lenses if already available','printed/projected evidence cards','process cards','Do not buy a rock collection']) check(has(m2,token),`Mission 2 material plan includes ${token}`);
check(has(m2,'NO-PURCHASE FALLBACK'),'Mission 2 includes explicit no-purchase fallback');
check(has(m2,'No heating, melting, baking or chemical treatment'),'Mission 2 avoids unsafe/unnecessary rock transformation activities');

// Eight-continent data + canon guardrails
for(const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) check(data.includes(`id: '${continent}'`),`Phase 5 data includes ${continent}`);
check((data.match(/mission2RockHistoryClues:/g)||[]).length===9,'All eight continent objects plus interface define Mission 2 clues');
for(const forbidden of ['earthquake','tsunami','hurricane','volcano','ore body','mineral deposit','hazard probability','million years','billion years']) check(!has(data,forbidden),`Phase 5 Mission 2 data avoids unsupported canon: ${forbidden}`);
check(has(data,'not enough evidence yet'),'At least one continent can legitimately conclude evidence is insufficient');
check(has(data,'loose sediment is not automatically sedimentary rock'),'Continent clues protect sediment-vs-rock distinction');
check(has(data,'no fault or tectonic cause has been confirmed'),'Slithy Toves still avoids assuming tectonic faulting');

// Decision + record + reflection
check(has(m2,'What formation pathway best explains the geological material JCEC surveyed at our site?'),'Mission 2 has one main team decision');
for(const token of ['EVIDENCE','ROCK CLASS','PROCESS','POSSIBLE HISTORY']) check(has(m2,token),`Decision scaffold includes ${token}`);
for(const token of ['CONTINENT','KEY GEOLOGICAL MATERIAL / SAMPLE','LIKELY ROCK CLASS','FORMATION EVIDENCE 1','FORMATION EVIDENCE 2','LIKELY FORMATION PROCESS','ONE POSSIBLE LATER ROCK-CYCLE CHANGE','ONE UNCERTAINTY']) check(has(m2,token),`Rock History Profile includes ${token}`);
check(has(m2,'Why can the same rock material become a different kind of rock over a very long time?'),'Mission 2 includes approved reflection');
check(has(m2,'Mission 3 — Track the Changing Surface remains locked/upcoming'),'Mission 2 stops before Mission 3');
for(const token of ['Three Ways Rocks Form','Follow the Rock Story','What History Fits Our Evidence?']) check(has(m2,token),`Three-class pacing includes ${token}`);

if(failures.length){
  console.error(`\nJabberwocky Phase 5 readiness audit failed: ${failures.length} issue(s).`);
  failures.forEach((failure)=>console.error(`  ✗ ${failure}`));
  process.exit(1);
}
console.log(`\nJabberwocky Phase 5 readiness audit: ${passes.length} checks passed.`);
passes.forEach((pass)=>console.log(`  ✓ ${pass}`));
console.log('\nPhase 5 is aligned through Mission 2: Evidence → Rock History, formation-first rock classes, process-network rock cycle, local Alberta evidence, uncertainty, low-material fallbacks, and Missions 3–5/final Council still locked.');
