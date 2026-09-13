import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const passes = [];
const failures = [];
const rel = (p) => path.join(root, p);
const read = (p) => fs.readFileSync(rel(p), 'utf8');
const has = (text, token) => text.toLowerCase().includes(token.toLowerCase());
const check = (ok, message) => ok ? passes.push(message) : failures.push(message);

const files = {
  hub: 'src/pages/courses/grade-7-science/jabberwocky/phase-5/index.astro',
  m1: 'src/pages/courses/grade-7-science/jabberwocky/phase-5/mission-1/index.astro',
  m2: 'src/pages/courses/grade-7-science/jabberwocky/phase-5/mission-2/index.astro',
  m3: 'src/pages/courses/grade-7-science/jabberwocky/phase-5/mission-3/index.astro',
  m4: 'src/pages/courses/grade-7-science/jabberwocky/phase-5/mission-4/index.astro',
  progress: 'src/components/JcecPhase5Progress.astro',
  data: 'src/data/jabberwockyPhase5.ts',
  phase4Progress: 'src/components/JcecPhase4Progress.astro'
};
for (const file of Object.values(files)) check(fs.existsSync(rel(file)), `exists: ${file}`);
check(!fs.existsSync(rel('src/pages/courses/grade-7-science/jabberwocky/phase-5/mission-5/index.astro')), 'Mission 5 is not built yet');
for (const route of ['final-council','mission-2190-council','final-decision']) check(!fs.existsSync(rel(`src/pages/courses/grade-7-science/jabberwocky/${route}/index.astro`)), `Final Council route is not built: ${route}`);

const hub=read(files.hub),m1=read(files.m1),m2=read(files.m2),m3=read(files.m3),m4=read(files.m4),progress=read(files.progress),data=read(files.data),phase4Progress=read(files.phase4Progress);

// Hub + continuity.
for (const token of ['THE DEEP RECORD','JCEC GEOLOGICAL SURVEY DIVISION','Read the Ground','Follow the Rock Story','Track the Changing Surface','Read the Deep Past','Prepare the Final Evidence']) check(has(hub,token),`Hub includes ${token}`);
for (const token of ['Evidence ✓','Rock History ✓','Surface Change ✓','Deep Past ●','Geological Handoff ○']) check(has(hub,token),`Hub progression includes ${token}`);
check((hub.match(/status:'COMPLETE'/g)||[]).length===3,'Hub marks Missions 1–3 complete');
check((hub.match(/status:'CURRENT'/g)||[]).length===1,'Hub marks only Mission 4 current');
check(hub.includes('phase-5/mission-1/')&&hub.includes('phase-5/mission-2/')&&hub.includes('phase-5/mission-3/')&&hub.includes('phase-5/mission-4/'),'Hub releases Missions 1–4');
check(!hub.includes('phase-5/mission-5/'),'Hub keeps Mission 5 locked/unbuilt');
check(hub.includes('jabberwocky-phase5-posting'),'Phase 5 preserves separate posting state');
for(const token of ['SURFACE / ENVIRONMENT','STRUCTURAL SITE NEED','GROUND-DISTURBANCE LIMIT','OPEN GEOLOGICAL QUESTION']) check(has(hub,token),`Hub preserves inherited field ${token}`);
for(const token of ['EARTH REFERENCE EVIDENCE','REAL EARTH · AUTHENTIC SOURCE','JABBERWOCKY SURVEY EVIDENCE','MISSION 2190 SURVEY']) check(has(hub,token),`Hub preserves evidence-source label ${token}`);
check(has(hub,'Do not transfer an Earth fossil, fault, earthquake, volcano or other event to Jabberwocky unless its survey evidence supports it'),'Hub keeps Earth/Jabberwocky deep-past safeguard');
check(!has(hub,'settlement vote'),'Hub still stops before final settlement decision');

// Progress + prior missions.
for(const token of ['Evidence','Rock History','Surface Change','Deep Past','Geological Handoff']) check(has(progress,token),`Progress includes ${token}`);
for(const token of ['Next Mission → Follow the Rock Story','Next Mission → Track the Changing Surface','Next Mission → Read the Deep Past']) check(has(progress,token),`Progress includes ${token}`);
check(progress.includes('/phase-5/mission-4/')&&!progress.includes('/phase-5/mission-5/'),'Progress releases Mission 4 and no later mission');
check(has(phase4Progress,'Begin Phase 5 → The Deep Record'),'Phase 4 still hands students to Phase 5');
for(const token of ['MISSION 1 OF 5','Ground Evidence Card']) check(has(m1,token),`Mission 1 retains ${token}`);
for(const token of ['MISSION 2 OF 5','Rock History Profile']) check(has(m2,token),`Mission 2 retains ${token}`);
for(const token of ['MISSION 3 OF 5','Surface Change Forecast','Surface Change Fair Test']) check(has(m3,token),`Mission 3 retains ${token}`);

// Mission 4 student routine + continuity.
for(const token of ['MISSION 4 OF 5','How can layers, landforms and fossils reveal events we never observed?','4 classes × 45 minutes','FORMATIVE SYNTHESIS','Deep Record Timeline']) check(has(m4,token),`Mission 4 includes ${token}`);
for(const token of ['Your Mission','Learn the Science','Investigate','Make a Decision','Record It']) check(has(m4,token),`Mission 4 includes step ${token}`);
check(m4.includes('jabberwocky-phase5-posting'),'Mission 4 carries existing Phase 5 posting');
check(!m4.includes('<select'),'Mission 4 does not ask students to reselect continent');
check(has(m4,'MISSIONS 1–3 ARE ALREADY DONE'),'Mission 4 avoids reopening prior Team Records');

// Core deep-past science.
for(const token of ['STRATA / LAYERS','FOLDING','FAULTING','CRUSTAL MOVEMENT','FOSSIL EVIDENCE','GEOLOGICAL TIME','UNCERTAINTY']) check(has(m4,token),`Mission 4 core science includes ${token}`);
for(const token of ['OBSERVATION','PATTERN','SCIENTIFIC EXPLANATION']) check(has(m4,token),`Mission 4 science reasoning includes ${token}`);
for(const forbidden of ['radiometric-dating calculations','seismic-wave mathematics','detailed plate vectors','advanced tectonic terminology']) check(has(m4,forbidden),`Mission 4 explicitly excludes ${forbidden}`);
check(has(m4,'A fracture is not automatically a fault unless movement is supported by evidence'),'Mission 4 prevents fracture=fault misconception');

// Authentic Earth Reference Evidence.
for(const token of ['EARTH REFERENCE EVIDENCE','JABBERWOCKY SURVEY EVIDENCE']) check(has(m4,token),`Mission 4 evidence system includes ${token}`);
check(has(m4,'CANADIAN ROCKIES / CORDILLERA'),'Mission 4 includes Rockies/Cordillera reference file');
check(has(m4,'https://parks.canada.ca/culture/spm-whs/sites-canada/sec02h'),'Mission 4 links Parks Canada source');
for(const token of ['faulted','folded','uplifted sedimentary rocks']) check(has(m4,token),`Rockies reference includes ${token}`);
check(has(m4,'GLOBAL CRUSTAL-MOVEMENT PATTERNS'),'Mission 4 includes global crustal-pattern file');
check(has(m4,'https://www.usgs.gov/maps/dynamic-planet-world-map-volcanoes-earthquakes-impact-craters-and-plate-tectonics'),'Mission 4 links USGS Dynamic Planet source');
check(has(m4,'without memorizing detailed boundary categories'),'Mission 4 keeps plate tectonics qualitative');
check(has(m4,'ALBERTA BADLANDS / ROYAL TYRRELL'),'Mission 4 includes Alberta badlands reference');
check(has(m4,'https://tyrrellmuseum.com/learn/Badlands_Goodlands'),'Mission 4 links Royal Tyrrell badlands source');
check(has(m4,'https://www.tyrrellmuseum.com/research/found_a_fossil'),'Mission 4 links Royal Tyrrell fossil stewardship source');
check(has(m4,'do not create folds, faults, earthquakes, volcanoes or fossil beds on your Jabberwocky continent'),'Mission 4 keeps Earth examples out of Jabberwocky canon');

// Fossils + geological time.
for(const token of ['BODY FOSSIL','TRACE FOSSIL','MOLD / CAST-TYPE EVIDENCE']) check(has(m4,token),`Mission 4 fossil set includes ${token}`);
check(has(m4,'context matters'),'Mission 4 teaches fossil context');
check(has(m4,'location is scientifically important'),'Mission 4 includes Alberta fossil stewardship reason');
check(has(m4,'buried fossils should be left in place and reported'),'Mission 4 includes Alberta fossil handling safeguard');
check(has(m4,'What can a fossil tell us—and what can it NOT tell us by itself?'),'Mission 4 treats fossils as evidence rather than trivia');
for(const token of ['PRECAMBRIAN','PALEOZOIC','MESOZOIC','CENOZOIC']) check(has(m4,token),`Geological-time strip includes ${token}`);
check(has(m4,'You do not need to memorize numerical boundaries or calculate ages in millions/billions of years'),'Mission 4 avoids huge-number memorization/calculation');

// Deep Record Evidence Puzzle.
check(has(m4,'Deep Record Evidence Puzzle'),'Mission 4 includes approved main investigation');
check(has(m4,'EARTH TRAINING CROSS-SECTION'),'Mission 4 begins with common Earth training case');
check((m4.match(/code:'[A-F]'/g)||[]).length===6,'Training puzzle defines six evidence/event cards');
for(const token of ['LOWEST LAYER','SECOND LAYER','THIRD LAYER','FAULT EVENT','EROSION SURFACE','YOUNGEST LAYER']) check(has(m4,token),`Training puzzle includes ${token}`);
for(const token of ['FIRST','NEXT','LATER','MOST RECENT']) check(has(m4,token),`Training sequence includes ${token}`);
for(const token of ['lower deposited layers are generally older','fold or fault happened after the layers it affected','erosion surface formed after','later layer/deposit formed after']) check(has(m4,token),`Mission 4 relative-history rule includes ${token}`);
check(has(m4,'RELATIVE SEQUENCE · NO ABSOLUTE AGES'),'Mission 4 keeps investigation relative rather than absolute');
check(!has(m4,'half-life'),'Mission 4 does not introduce radiometric half-life math');
check(has(m4,'ONE CLUE')&&has(m4,'SEVERAL CLUES THAT AGREE'),'Mission 4 teaches accumulated evidence');
check(has(m4,'AMBIGUOUS CLUE'),'Mission 4 preserves uncertainty with ambiguous evidence');
check(has(m4,'cannot by itself date the surface'),'Mission 4 prevents overclaiming from a moved fossil fragment');

// Materials reality.
check(has(m4,'MATERIALS REALITY CHECK / NO-PURCHASE FALLBACK'),'Mission 4 includes explicit no-purchase implementation');
for(const token of ['cross-section','layer/event cards','fossil/evidence cards','pencils']) check(has(m4,token),`Mission 4 paper-first materials include ${token}`);
for(const token of ['No real fossils','rock saws','specialty geology kits','purchases']) check(has(m4,token),`Mission 4 avoids purchase/equipment dependency: ${token}`);

// Eight Jabberwocky deep files.
for(const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) check(m4.includes(`${continent}:`)||m4.includes(`'${continent}':`),`Mission 4 Deep Record Survey File includes ${continent}`);
check((m4.match(/No confirmed fossil evidence/g)||[]).length>=5,'Most continent files explicitly allow no confirmed fossil evidence');
check(has(m4,'does not establish that the fracture is a fault'),'Slithy Toves preserves fracture/fault uncertainty');
check(has(m4,'deeper bedrock history remains incomplete'),'Bandersnatch preserves incomplete deep history');
check(has(m4,'deeper geological history remains highly uncertain'),'Mimsy preserves deep-history uncertainty');
for(const forbidden of ['exact geological age of','confirmed active fault beneath','confirmed volcano on','confirmed fossil bed','confirmed mineral deposit']) check(!has(m4,forbidden),`Mission 4 avoids unsupported Jabberwocky claim: ${forbidden}`);
check(has(m4,'A missing fossil, fold or fault is a valid result'),'Mission 4 legitimizes absent evidence');

// Decision + record.
check(has(m4,'What past geological change best explains the evidence at our site, and what remains uncertain?'),'Mission 4 has one main team interpretation');
for(const token of ['OBSERVATION','SEQUENCE','PROCESS','INTERPRETATION','UNCERTAINTY']) check(has(m4,token),`Mission 4 decision scaffold includes ${token}`);
check(has(m4,'Our explanation is stronger because these clues agree'),'Mission 4 requires accumulated evidence in reasoning');
for(const token of ['CONTINENT','IMPORTANT LAYERS / EVIDENCE','RELATIVE EVENT SEQUENCE','FOLDING / FAULTING / CRUSTAL EVIDENCE','FOSSIL EVIDENCE','LIKELY LANDSCAPE / GEOLOGICAL CHANGE','ACCUMULATED EVIDENCE 1','ACCUMULATED EVIDENCE 2','ONE UNCERTAINTY']) check(has(m4,token),`Deep Record Timeline includes ${token}`);
check(has(m4,'OR none confirmed'),'Timeline allows absent deformation/fossil evidence');
check(has(m4,'Why do scientists become more confident when many different pieces of geological evidence support the same explanation?'),'Mission 4 includes approved reflection');
check(has(m4,'Mission 5 — Prepare the Final Evidence remains locked/upcoming'),'Mission 4 stops before Mission 5');
for(const token of ['When Earth’s Layers Bend and Break','Fossils and Geological Time','Reconstruct the Deep Record','What Happened at Our Site?']) check(has(m4,token),`Four-class pacing includes ${token}`);

// Existing continent data remains intact.
for(const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) check(data.includes(`id: '${continent}'`),`Phase 5 core data includes ${continent}`);
check((data.match(/mission3SurfaceChangeClues:/g)||[]).length===9,'Phase 5 keeps all Mission 3 surface-change clue sets');

if(failures.length){
  console.error(`\nJabberwocky Phase 5 readiness audit failed: ${failures.length} issue(s).`);
  failures.forEach((failure)=>console.error(`  ✗ ${failure}`));
  process.exit(1);
}
console.log(`\nJabberwocky Phase 5 readiness audit: ${passes.length} checks passed.`);
passes.forEach((pass)=>console.log(`  ✓ ${pass}`));
console.log('\nPhase 5 is aligned through Mission 4: Evidence → Rock History → Surface Change → Deep Past, authentic Earth-reference evidence, paper-first relative-history reasoning, accumulated evidence, uncertainty, continent-specific deep files, and Mission 5/final Council still locked.');
