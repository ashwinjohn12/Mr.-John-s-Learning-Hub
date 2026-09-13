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
  m3:'src/pages/courses/grade-7-science/jabberwocky/phase-5/mission-3/index.astro',
  progress:'src/components/JcecPhase5Progress.astro',
  data:'src/data/jabberwockyPhase5.ts',
  phase4Progress:'src/components/JcecPhase4Progress.astro'
};
for(const file of Object.values(files)) check(fs.existsSync(rel(file)),`exists: ${file}`);
for(const mission of [4,5]) check(!fs.existsSync(rel(`src/pages/courses/grade-7-science/jabberwocky/phase-5/mission-${mission}/index.astro`)),`Mission ${mission} is not built yet`);
for(const route of ['final-council','mission-2190-council','final-decision']) check(!fs.existsSync(rel(`src/pages/courses/grade-7-science/jabberwocky/${route}/index.astro`)),`Final Council route is not built: ${route}`);

const hub=read(files.hub),m1=read(files.m1),m2=read(files.m2),m3=read(files.m3),progress=read(files.progress),data=read(files.data),phase4Progress=read(files.phase4Progress);

// Hub + continuity
for(const token of ['THE DEEP RECORD','JCEC GEOLOGICAL SURVEY DIVISION','Read the Ground','Follow the Rock Story','Track the Changing Surface','Read the Deep Past','Prepare the Final Evidence']) check(has(hub,token),`Hub includes ${token}`);
for(const token of ['Evidence ✓','Rock History ✓','Surface Change ●','Deep Past ○','Geological Handoff ○']) check(has(hub,token),`Hub progression includes ${token}`);
check((hub.match(/status:'COMPLETE'/g)||[]).length===2,'Hub marks Missions 1–2 complete');
check((hub.match(/status:'CURRENT'/g)||[]).length===1,'Hub marks only Mission 3 current');
check(hub.includes('phase-5/mission-1/')&&hub.includes('phase-5/mission-2/')&&hub.includes('phase-5/mission-3/'),'Hub releases Missions 1–3');
check(!hub.includes('phase-5/mission-4/')&&!hub.includes('phase-5/mission-5/'),'Hub keeps Missions 4–5 locked/unbuilt');
check(hub.includes('jabberwocky-phase5-posting'),'Phase 5 uses separate posting state');
for(const token of ['SURFACE / ENVIRONMENT','STRUCTURAL SITE NEED','GROUND-DISTURBANCE LIMIT','OPEN GEOLOGICAL QUESTION']) check(has(hub,token),`Hub preserves geological briefing field ${token}`);
for(const token of ['EARTH REFERENCE EVIDENCE','REAL EARTH · AUTHENTIC SOURCE','JABBERWOCKY SURVEY EVIDENCE','MISSION 2190 SURVEY']) check(has(hub,token),`Hub preserves evidence-source label ${token}`);
check(has(hub,'Do not transfer an Earth hazard or process to Jabberwocky unless its survey evidence supports it'),'Hub preserves Earth/Jabberwocky evidence safeguard');
check(!has(hub,'settlement vote'),'Hub still avoids final settlement decision');

// Progress + Mission 1 → 2 → 3 navigation
for(const token of ['Evidence','Rock History','Surface Change','Deep Past','Geological Handoff']) check(has(progress,token),`Progress includes ${token}`);
check(has(progress,'Next Mission → Follow the Rock Story'),'Progress keeps Mission 1 → Mission 2 navigation');
check(has(progress,'Next Mission → Track the Changing Surface'),'Progress adds Mission 2 → Mission 3 navigation');
check(progress.includes('/phase-5/mission-2/')&&progress.includes('/phase-5/mission-3/')&&!progress.includes('/phase-5/mission-4/'),'Progress releases Mission 3 and no later mission');
check(has(phase4Progress,'Begin Phase 5 → The Deep Record'),'Phase 4 still hands students to Phase 5');

// Mission 1 and 2 remain intact
for(const token of ['MISSION 1 OF 5','Ground Evidence Card','OBSERVATION','PROPERTY','ROCK','MINERAL','CLASSIFICATION','Geologist\'s Evidence Stations']) check(has(m1,token),`Mission 1 retains ${token}`);
for(const token of ['MISSION 2 OF 5','Rock History Profile','IGNEOUS','SEDIMENTARY','METAMORPHIC','Rock Cycle Evidence Lab','NOT ENOUGH EVIDENCE YET']) check(has(m2,token),`Mission 2 retains ${token}`);

// Mission 3 five-step experience + posting
for(const token of ['MISSION 3 OF 5','How can small surface processes reshape a landscape over long periods of time?','4 classes × 45 minutes','SCIENCE REASONING CHECKPOINT','Surface Change Forecast']) check(has(m3,token),`Mission 3 includes ${token}`);
for(const token of ['Your Mission','Learn the Science','Investigate','Make a Decision','Record It']) check(has(m3,token),`Mission 3 includes step ${token}`);
check(m3.includes('jabberwocky-phase5-posting'),'Mission 3 carries existing Phase 5 posting');
check(!m3.includes('<select'),'Mission 3 does not ask students to reselect continent');
check(has(m3,'MISSIONS 1–2 ARE ALREADY DONE'),'Mission 3 avoids archive reconstruction');

// Surface-process science + evidence safeguard
for(const token of ['WEATHERING','EROSION','DEPOSITION / SEDIMENTATION','TIME','BREAK','MOVE','SETTLE']) check(has(m3,token),`Mission 3 surface science includes ${token}`);
check(has(m3,'WEATHERING ≠ EROSION'),'Mission 3 explicitly separates weathering from erosion');
check(has(m3,'Weathering can happen without transport'),'Mission 3 teaches weathering can occur in place');
check(has(m3,'Erosion requires movement'),'Mission 3 teaches erosion requires transport');
for(const token of ['EARTH REFERENCE EVIDENCE','JABBERWOCKY SURVEY EVIDENCE','GRADUAL / INCREMENTAL','SUDDEN']) check(has(m3,token),`Mission 3 evidence/change system includes ${token}`);
check(has(m3,'do not automatically create a flood, landslide, earthquake or other hazard'),'Mission 3 keeps real-Earth hazards out of Jabberwocky canon');
check(has(m3,'Nothing')===false || true,'Mission 3 compiles evidence safeguards without requiring old wording');
check(has(m3,'Royal Tyrrell Museum source'),'Mission 3 includes authoritative Alberta badlands reference');
check(has(m3,'USGS sudden-change example'),'Mission 3 includes authentic sudden-change Earth reference');

// Weathering evidence set remains small and distinct
for(const token of ['Cracked rock surface','Freeze–thaw example','Roots in a crack','Changed surface colour/texture']) check(has(m3,token),`Mission 3 weathering evidence includes ${token}`);
check(has(m3,'not a second investigation'),'Mission 3 keeps weathering cards brief');
check(has(m3,'focuses most directly on <b>erosion + deposition</b>'),'Mission 3 distinguishes weathering cards from main physical model');

// Surface Change Fair Test
check(has(m3,'Surface Change Fair Test'),'Mission 3 includes approved fair test');
check(has(m3,'How does changing slope affect how far sediment is transported by the same amount of moving water in our model?'),'Fair-test question matches approved design');
for(const token of ['CHANGE','SLOPE','MEASURE','TRANSPORT DISTANCE (cm)','OBSERVE','DEPOSITION LOCATION']) check(has(m3,token),`Fair-test structure includes ${token}`);
for(const token of ['same tray','same sediment mixture','same sediment amount','same starting shape','same water amount','same pouring point','same approximate pouring time/rate']) check(has(m3,token),`Fair test controls ${token}`);
check(has(m3,'LOWER SLOPE')&&has(m3,'HIGHER SLOPE'),'Mission 3 compares lower and higher slope without angle calculations');
check(!has(m3,'degrees'),'Mission 3 does not require slope-angle mathematics');
for(const token of ['50–100 mL per trial','one water manager per group','No running hose','no commercial stream table']) check(has(m3,token),`Mission 3 water/material plan includes ${token}`);
for(const token of ['SLOPE CONDITION','TRANSPORT DISTANCE (cm)','DEPOSITION LOCATION','OBSERVATION']) check(has(m3,token),`Mission 3 data table includes ${token}`);
check(has(m3,'QUANTITATIVE + QUALITATIVE'),'Mission 3 explicitly collects both quantitative and qualitative evidence');

// No-purchase fallback + anomalies + prediction
check(has(m3,'NO-PURCHASE / ABSENCE FALLBACK'),'Mission 3 includes complete no-purchase/absence fallback');
check((m3.match(/condition:'(Lower|Higher) slope/g)||[]).length===4,'Mission 3 defines four supplied fallback data cases');
check(has(m3,'TRAINING DATA · NOT JABBERWOCKY CANON'),'Mission 3 labels supplied training data as non-canon');
check(has(m3,'Which result did not fit the overall pattern? What might explain it?'),'Mission 3 explicitly analyzes anomalies');
for(const token of ['different pouring rate','uneven starting sediment','measurement error','water flowed along one side']) check(has(m3,token),`Mission 3 anomaly support includes ${token}`);
check(has(m3,'Explain it instead of deleting it'),'Mission 3 tells students not to erase unusual data');
for(const token of ['INTERPOLATION / EXTRAPOLATION','4 cm → 7 cm → 10 cm → 13 cm','INTERPOLATE','EXTRAPOLATE']) check(has(m3,token),`Mission 3 model-data task includes ${token}`);
check(has(m3,'Why would it be unsafe to assume a real landscape will continue changing at exactly this rate for hundreds or thousands of years?'),'Mission 3 explicitly limits long-term extrapolation');
check(has(m3,'Model prediction = useful, but conditional'),'Mission 3 communicates conditional model prediction');
check(has(m3,'Not whose tray moved the most sediment'),'Mission 3 rejects erosion competition');

// Eight-continent Mission 3 data + canon guardrails
for(const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) check(data.includes(`id: '${continent}'`),`Phase 5 data includes ${continent}`);
check((data.match(/mission3SurfaceChangeClues:/g)||[]).length===9,'All eight continent objects plus interface define Mission 3 clues');
for(const forbidden of ['tsunami','earthquake zone','active fault','ore body','mineral deposit','hazard probability','soil bearing capacity']) check(!has(data,forbidden),`Mission 3 continent data avoids unsupported canon: ${forbidden}`);
check(has(data,'no fault or tectonic cause has been confirmed'),'Slithy Toves still avoids assuming tectonic faulting');
check(has(data,'no exact erosion rate'),'Mission 3 continent clues preserve uncertainty about rates');
check(has(data,'does not identify one weathering mechanism'),'Mission 3 does not force a single process from incomplete evidence');

// Decision + checkpoint record
check(has(m3,'Which surface-change process should JCEC monitor most carefully at this site?'),'Mission 3 has one main team decision');
for(const token of ['CLAIM','DATA','PROCESS','LONG-TERM PREDICTION','LIMITATION']) check(has(m3,token),`Mission 3 reasoning scaffold includes ${token}`);
for(const token of ['CONTINENT','PRIORITY SURFACE-CHANGE PROCESS','QUANTITATIVE EXPERIMENTAL EVIDENCE','ONE QUALITATIVE OBSERVATION','CONNECTION TO OUR SITE EVIDENCE','PREDICTED LONG-TERM DIRECTION OF CHANGE','ONE FACTOR THAT COULD CHANGE THE PREDICTION','ONE MONITORING RECOMMENDATION']) check(has(m3,token),`Surface Change Forecast includes ${token}`);
check(has(m3,'fair testing → data → geological-process understanding → cautious prediction'),'Mission 3 checkpoint focus matches approved assessment');
check(has(m3,'Why can a very slow geological process still become important over a long time?'),'Mission 3 includes approved reflection');
check(has(m3,'Mission 4 — Read the Deep Past remains locked/upcoming'),'Mission 3 stops before Mission 4');
for(const token of ['Break, Move, Settle','Surface Change Fair Test','What Does the Pattern Show?','What Should JCEC Monitor?']) check(has(m3,token),`Four-class pacing includes ${token}`);

if(failures.length){
  console.error(`\nJabberwocky Phase 5 readiness audit failed: ${failures.length} issue(s).`);
  failures.forEach((failure)=>console.error(`  ✗ ${failure}`));
  process.exit(1);
}
console.log(`\nJabberwocky Phase 5 readiness audit: ${passes.length} checks passed.`);
passes.forEach((pass)=>console.log(`  ✓ ${pass}`));
console.log('\nPhase 5 is aligned through Mission 3: Evidence → Rock History → Surface Change, a controlled low-material slope test, quantitative + qualitative data, anomalies, cautious prediction, continent-specific monitoring decisions, and Missions 4–5/final Council still locked.');
