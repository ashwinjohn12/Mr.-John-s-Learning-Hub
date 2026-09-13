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
  progress:'src/components/JcecPhase5Progress.astro',
  data:'src/data/jabberwockyPhase5.ts',
  phase4Progress:'src/components/JcecPhase4Progress.astro'
};
for(const file of Object.values(files)) check(fs.existsSync(rel(file)),`exists: ${file}`);
for(const mission of [2,3,4,5]) check(!fs.existsSync(rel(`src/pages/courses/grade-7-science/jabberwocky/phase-5/mission-${mission}/index.astro`)),`Mission ${mission} is not built yet`);
for(const route of ['final-council','mission-2190-council','final-decision']) check(!fs.existsSync(rel(`src/pages/courses/grade-7-science/jabberwocky/${route}/index.astro`)),`Final Council route is not built: ${route}`);

const hub=read(files.hub),m1=read(files.m1),progress=read(files.progress),data=read(files.data),phase4Progress=read(files.phase4Progress);

for(const token of ['THE DEEP RECORD','JCEC GEOLOGICAL SURVEY DIVISION','Read the Ground','Follow the Rock Story','Track the Changing Surface','Read the Deep Past','Prepare the Final Evidence']) check(has(hub,token),`Phase 5 hub includes ${token}`);
for(const token of ['Evidence ●','Rock History ○','Surface Change ○','Deep Past ○','Geological Handoff ○']) check(has(hub,token),`Hub progression includes ${token}`);
check(hub.includes('jabberwocky-phase5-posting'),'Phase 5 uses a separate posting state');
check(hub.includes('jabberwocky-phase4-posting'),'Hub can warn about an automatic Phase 4 repeat without overwriting Phase 4 state');
check(has(hub,'continent you have not investigated before'),'Hub encourages a new continent when practical');
for(const token of ['SURFACE / ENVIRONMENT','STRUCTURAL SITE NEED','GROUND-DISTURBANCE LIMIT','OPEN GEOLOGICAL QUESTION']) check(has(hub,token),`Previous Team Geological Briefing includes ${token}`);
check((hub.match(/<article><small>/g)||[]).length>=4,'Hub renders four briefing/evidence cards');
for(const token of ['EARTH REFERENCE EVIDENCE','REAL EARTH · AUTHENTIC SOURCE','JABBERWOCKY SURVEY EVIDENCE','MISSION 2190 SURVEY','Earth Reference Evidence teaches us what evidence can mean','Do not assume an Earth process exists on Jabberwocky']) check(has(hub,token),`Hub evidence-source safeguard includes ${token}`);
check(hub.includes('phase-5/mission-1/'),'Hub releases Mission 1');
check(!hub.includes('phase-5/mission-2/')&&!hub.includes('phase-5/mission-3/')&&!hub.includes('phase-5/mission-4/')&&!hub.includes('phase-5/mission-5/'),'Hub keeps Missions 2–5 unbuilt/locked');
check(!hub.includes('settlement vote'),'Hub does not create a final settlement vote');

for(const token of ['Evidence','Rock History','Surface Change','Deep Past','Geological Handoff']) check(has(progress,token),`Phase 5 progress includes ${token}`);
check(!progress.includes('/mission-2/')&&!progress.includes('/mission-3/')&&!progress.includes('/mission-4/')&&!progress.includes('/mission-5/'),'Phase 5 progress component does not release later mission routes');
check(has(phase4Progress,'Begin Phase 5 → The Deep Record')&&has(phase4Progress,'phase-5/'),'Phase 4 conclusion hands students to Phase 5');
check(has(phase4Progress,'final Mission 2190 Council decision has not begun yet'),'Phase 4 handoff stops before final Council');

for(const token of ['MISSION 1 OF 5','What can observations of rocks and minerals tell us about a site?','3 classes × 45 minutes','Ground Evidence Card']) check(has(m1,token),`Mission 1 includes ${token}`);
for(const token of ['Your Mission','Learn the Science','Investigate','Make a Decision','Record It']) check(has(m1,token),`Mission 1 includes step ${token}`);
check(m1.includes('jabberwocky-phase5-posting'),'Mission 1 automatically carries the Phase 5 posting');
check(!m1.includes('<select'),'Mission 1 does not ask students to select a continent again');
for(const token of ['SURFACE / ENVIRONMENT','STRUCTURAL SITE NEED','GROUND-DISTURBANCE LIMIT','OPEN GEOLOGICAL QUESTION']) check(has(m1,token),`Mission 1 carries briefing card ${token}`);
for(const token of ['EARTH REFERENCE EVIDENCE','JABBERWOCKY SURVEY EVIDENCE','Do not assume an Earth process exists on Jabberwocky']) check(has(m1,token),`Mission 1 preserves evidence-source safeguard: ${token}`);

for(const token of ['OBSERVATION','PROPERTY','ROCK','MINERAL','CLASSIFICATION']) check(has(m1,token),`Mission 1 core science includes ${token}`);
for(const token of ['COLOUR','LUSTRE','TRANSPARENCY','RELATIVE HARDNESS','EXISTING SURFACES']) check(has(m1,token),`Mission 1 sample-description system includes ${token}`);
check(has(m1,'fingernail → copper reference if available → teacher-approved steel reference'),'Mission 1 uses relative hardness without requiring a Mohs kit');
check(has(m1,'Mohs kit is optional enrichment'),'Mohs scale remains optional enrichment');
check(has(m1,'No loose glass plates are needed'),'Mission 1 does not require glass plates');
check(has(m1,'do not strike or deliberately break samples'),'Mission 1 prevents destructive cleavage/fracture testing');

for(const token of ['SURFACE OBSERVATIONS','SAMPLES / CORES','SEISMIC EVIDENCE','PATTERNS','MODELS','CRUST','MANTLE','CORE']) check(has(m1,token),`Mission 1 interior-evidence model includes ${token}`);
for(const token of ['HAND LENS + SAMPLE TOOLS','CORING DRILL','SEISMOGRAPH','MAPS + MODELS']) check(has(m1,token),`Mission 1 Earth-study tools include ${token}`);
check(has(m1,'https://pubs.usgs.gov/gip/interior/'),'Mission 1 links an authentic USGS Earth-interior source');
check(has(m1,'https://www.usgs.gov/programs/earthquake-hazards/science-earthquakes'),'Mission 1 links an authentic USGS sudden-change source');
for(const token of ['GRADUAL / INCREMENTAL CHANGE','SUDDEN CHANGE','preview']) check(has(m1,token),`Mission 1 change preview includes ${token}`);
check(has(m1,'Nothing here proves that your Jabberwocky continent has earthquakes'),'Mission 1 does not transfer Earth earthquake evidence into Jabberwocky canon');

for(const token of ["Geologist's Evidence Stations",'OBSERVE','TEST','DESCRIBE','CLASSIFY','STATE UNCERTAINTY']) check(has(m1,token),`Mission 1 investigation includes ${token}`);
for(const token of ['school samples already owned','hand lenses if available','teacher-provided copper reference if available','teacher-approved steel comparison tool','No new mineral kit']) check(has(m1,token),`Mission 1 low-material plan includes ${token}`);
for(const token of ['ROCK','POSSIBLE MINERAL','UNCERTAIN']) check(has(m1,token),`Classification key includes ${token}`);
check((m1.match(/code:'[A-E]'/g)||[]).length===5,'Mission 1 defines five photo/data fallback station cards');
check(has(m1,'PHOTO / DATA FALLBACK CARD'),'Mission 1 renders the fallback-card label for station cards');
check(has(m1,'NO-PURCHASE FALLBACK'),'Mission 1 has an explicit no-purchase fallback');
check(has(m1,'sample photographs plus the property-data cards'),'Mission 1 can run from photo/data evidence');

for(const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) check(data.includes(`id: '${continent}'`),`Phase 5 data includes ${continent}`);
check((data.match(/mission1SurveyPacket:/g)||[]).length===9,'All eight continent objects plus the interface define Mission 1 Survey Sample Packets');
for(const token of ['surfaceEnvironment','structuralSiteNeed','groundDisturbanceLimit','openGeologicalQuestion']) check((data.match(new RegExp(`${token}:`,'g'))||[]).length===9,`All eight sites plus the interface carry briefing field ${token}`);
for(const forbidden of ['earthquake','tsunami','hurricane','volcano','ore body','mineral deposit','hazard probability','million years','billion years']) check(!has(data,forbidden),`Phase 5 survey canon avoids unsupported addition: ${forbidden}`);
check(has(data,'no fault or tectonic cause has been confirmed'),'Slithy Toves fracture observation explicitly avoids assuming a tectonic fault');

check(has(m1,'observations only'),'Mission 1 labels continent survey evidence as observations only');
for(const token of ['exact rock identity','geological age','fault','fossil bed','mineral deposit','hazard']) check(has(m1,token),`Mission 1 tells students not to infer unsupported ${token}`);
check(has(m1,"Which observations give JCEC the strongest evidence about our site's surface materials?"),'Mission 1 has one main team decision');
for(const token of ['WHAT WE OBSERVED','WHAT WE THINK IT MAY MEAN','OBSERVATION','TEST','PROPERTY','INTERPRETATION']) check(has(m1,token),`Decision scaffold includes ${token}`);
for(const token of ['CONTINENT','SAMPLE / MATERIAL OBSERVED','3 USEFUL PROPERTIES','TEST / OBSERVATION EVIDENCE','CLASSIFICATION','ONE UNCERTAINTY','ONE EARTH-STUDY TOOL THAT COULD ADD EVIDENCE']) check(has(m1,token),`Ground Evidence Card includes ${token}`);
check(has(m1,'Why is “I know what this rock is” weaker scientific evidence than explaining how you identified it?'),'Mission 1 includes approved individual reflection');
check(has(m1,'Mission 2 — Follow the Rock Story remains locked'),'Mission 1 stops before Mission 2');
for(const token of ['How Do Geologists Know?','Read the Samples','What Does Our Ground Evidence Tell Us?']) check(has(m1,token),`Three-class pacing includes ${token}`);

if(failures.length){
  console.error(`\nJabberwocky Phase 5 prototype audit failed: ${failures.length} issue(s).`);
  failures.forEach((failure)=>console.error(`  ✗ ${failure}`));
  process.exit(1);
}
console.log(`\nJabberwocky Phase 5 prototype audit: ${passes.length} checks passed.`);
passes.forEach((pass)=>console.log(`  ✓ ${pass}`));
console.log('\nPhase 5 prototype is ready: The Deep Record hub + Mission 1, separate geological posting, Earth-vs-Jabberwocky evidence guardrail, low-material sample investigation, and Missions 2–5/final Council still locked.');
