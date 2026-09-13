import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const passes = [];
const failures = [];
const rel = (p) => path.join(root, p);
const read = (p) => fs.readFileSync(rel(p), 'utf8');
const has = (text, token) => text.toLowerCase().includes(token.toLowerCase());
const check = (condition, message) => condition ? passes.push(message) : failures.push(message);

const files = {
  hub: 'src/pages/courses/grade-7-science/jabberwocky/phase-4/index.astro',
  m1: 'src/pages/courses/grade-7-science/jabberwocky/phase-4/mission-1/index.astro',
  m2: 'src/pages/courses/grade-7-science/jabberwocky/phase-4/mission-2/index.astro',
  m3: 'src/pages/courses/grade-7-science/jabberwocky/phase-4/mission-3/index.astro',
  progress: 'src/components/JcecPhase4Progress.astro',
  data: 'src/data/jabberwockyPhase4.ts',
  phase3Progress: 'src/components/JcecPhase3Progress.astro'
};

for (const file of Object.values(files)) check(fs.existsSync(rel(file)), `exists: ${file}`);
for (const n of [4,5]) check(!fs.existsSync(rel(`src/pages/courses/grade-7-science/jabberwocky/phase-4/mission-${n}/index.astro`)), `Mission ${n} is not built yet`);

const hub = read(files.hub);
const m1 = read(files.m1);
const m2 = read(files.m2);
const m3 = read(files.m3);
const progress = read(files.progress);
const data = read(files.data);
const p3progress = read(files.phase3Progress);

// Phase 4 hub and continuity
for (const token of ['PROJECT NEW HORIZON','JCEC STRUCTURAL SYSTEMS DIVISION','Read the Building Site','Trace the Forces','Choose What Holds','Keep It Standing','Authorize New Horizon']) check(has(hub, token), `Hub includes: ${token}`);
for (const token of ['Requirements ✓','Forces ✓','Materials ●','Stability ○','Authorization ○']) check(has(hub, token), `Hub progress includes: ${token}`);
check(hub.includes('jabberwocky-phase4-posting'), 'Phase 4 uses separate posting state');
check((hub.match(/status:'COMPLETE'/g) || []).length === 2, 'Missions 1–2 are complete');
check((hub.match(/status:'CURRENT'/g) || []).length === 1, 'Only Mission 3 is current');
check((hub.match(/status:'UPCOMING'/g) || []).length === 2, 'Missions 4–5 remain upcoming');
check(hub.includes('phase-4/mission-1/') && hub.includes('phase-4/mission-2/') && hub.includes('phase-4/mission-3/'), 'Hub releases Missions 1–3');
check(!hub.includes('phase-4/mission-4/') && !hub.includes('phase-4/mission-5/'), 'Hub keeps Missions 4–5 locked');
for (const token of ['ENVIRONMENT','THERMAL REQUIREMENT','ECOLOGICAL RESTRICTION','SITE / LOAD WARNING']) check(has(hub, token), `Hub structural briefing includes: ${token}`);
check(has(hub, 'do not need to reopen old archives'), 'Hub prevents archive overload');
check(has(p3progress, 'Continue to Phase 4 → Project New Horizon'), 'Phase 3 conclusion still hands forward to Project New Horizon');

// Previous missions stay intact and navigation advances only to Mission 3
for (const token of ['Mission 1 of 5','New Horizon Requirements Card','What are the three most important performance requirements for our structure?']) check(has(m1, token), `Mission 1 still includes: ${token}`);
for (const token of ['Mission 2 of 5','Structural Force Map','What forces will our structure need to resist?']) check(has(m2, token), `Mission 2 still includes: ${token}`);
check(has(progress, 'Next Mission → Trace the Forces'), 'Mission 1 receives Next Mission → Trace the Forces');
check(has(progress, 'Next Mission → Choose What Holds'), 'Mission 2 receives Next Mission → Choose What Holds');
check(progress.includes('phase-4/mission-3/') && !progress.includes('phase-4/mission-4/'), 'Progress releases Mission 3 only');

// Mission 3 structure
for (const token of ['MISSION 3 OF 5','CHOOSE WHAT','How do materials and joints change what a structure can handle?','4 classes × 45 minutes','Your Mission','Learn the Science','Investigate','Make a Decision','Record It']) check(has(m3, token), `Mission 3 includes: ${token}`);
check(m3.includes('jabberwocky-phase4-posting'), 'Mission 3 carries Phase 4 posting');
check(!m3.includes('<select'), 'Mission 3 does not ask students to choose continent again');
check(has(m3, 'do not need to recreate it'), 'Mission 3 avoids Mission 2 reconstruction burden');

// Material science and Grade 7 scope
for (const token of ['STRENGTH','FLEXIBILITY','STIFFNESS','DEFORMATION']) check(has(m3, token), `Mission 3 science includes: ${token}`);
check(has(m3, 'the material that bends least is the strongest'), 'Mission 3 directly addresses the stiffness=strength misconception');
check(has(m3, 'flexibility = the amount of deformation under the same specified load'), 'Mission 3 operationally defines flexibility');
check(has(m3, 'strength = the greatest safe test load handled before the agreed failure limit is reached'), 'Mission 3 operationally defines strength');
check(has(m3, 'You do not need stress/strain equations, elastic modulus or advanced engineering mathematics'), 'Mission 3 explicitly keeps advanced engineering math outside the required pathway');
for (const forbidden of ["Hooke's law", 'Young’s modulus', 'Young\'s modulus =', 'stress = force / area']) check(!has(m3, forbidden), `Mission 3 contains no advanced formula requirement: ${forbidden}`);

// Joints and living structural materials
for (const token of ['FIXED JOINT','FLEXIBLE JOINT','Which joint behaviour fits this structural part']) check(has(m3, token), `Mission 3 joints include: ${token}`);
for (const token of ["NATURE'S MATERIALS",'BONE','CARTILAGE','LIGAMENT','PLANT TISSUES / LAYERS',"Why don't living structures use one material everywhere?"]) check(has(m3, token), `Mission 3 living-material connection includes: ${token}`);
check(has(m3, 'Natural and synthetic'), 'Mission 3 includes natural vs synthetic material comparison');

// Fair test, quantitative evidence and interpretation
check(has(m3, 'Material & Joint Fair Test'), 'Mission 3 uses the approved Material & Joint Fair Test');
for (const token of ['length','width','span','load position','loading method']) check(has(m3, token), `Mission 3 keeps comparison condition similar: ${token}`);
for (const token of ['FLEXIBILITY / STIFFNESS','Same load, compare deformation','Safe stepped-load test','greatest safe test load']) check(has(m3, token), `Mission 3 test includes: ${token}`);
check(has(m3, 'do not need to snap or destroy a sample'), 'Mission 3 does not require destructive testing');
check(has(m3, 'teacher maximum'), 'Mission 3 uses a teacher-set test ceiling');
check(has(m3, 'load-versus-deformation graph'), 'Mission 3 requires one manageable graph');
check(has(m3, 'Reached the teacher maximum without failing') && has(m3, 'exact breaking strength'), 'Mission 3 interprets capped strength evidence correctly');
check(has(m3, 'Less deformation under this same load suggests greater stiffness') && has(m3, 'does not') && has(m3, 'greater strength'), 'Mission 3 distinguishes stiffness evidence from strength evidence');

// Low-material and safe implementation
for (const token of ['paper/cardstock','recycled cardboard','rulers','tape','binder clips','coins/washers/books']) check(has(m3, token), `Mission 3 low-material setup includes: ${token}`);
check(has(m3, 'NO-PURCHASE / NOISY-DATA FALLBACK'), 'Mission 3 includes an explicit no-purchase/noisy-data fallback');
check(has(m3, 'supplied results from one standardized classroom setup'), 'Mission 3 fallback provides usable quantitative evidence');
check(has(m3, 'fixed connection') && has(m3, 'controlled movement') && has(m3, 'supplied evidence cards'), 'Mission 3 joint check can run from evidence cards if needed');
for (const token of ['Desk-sized samples','small loads','teacher maximum','no deliberate snapping','No hot glue, knives, saws']) check(has(m3, token), `Mission 3 safety includes: ${token}`);
check(m3.includes('print-phase4-mission3'), 'Mission 3 includes printable investigation/record packet');

// Eight continent cases, property-first reasoning and canon protection
for (const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) check(has(m3, `${continent}:`) || has(m3, `'${continent}':`), `Mission 3 contains continent case: ${continent}`);
check((m3.match(/clues:\[/g) || []).length === 8, 'All eight continents have Mission 3 material/joint clues');
for (const forbidden of ['earthquake','tsunami','volcano','hurricane','soil bearing capacity']) check(!has(m3, forbidden), `Mission 3 avoids unsupported structural hazard/data: ${forbidden}`);
check(has(m3, 'Recommend properties first') || has(m3, 'properties first'), 'Mission 3 prioritizes properties before named materials');
check(has(m3, 'rather than simply naming a material such as steel or titanium'), 'Mission 3 uses named materials only as an example of what not to prescribe');
check(has(m3, 'foundation design itself waits until Mission 4'), 'Mission 3 keeps Mimsy foundation science for Mission 4');

// One decision, one checkpoint record and no build competition
check(has(m3, 'What material properties and joint type should JCEC prioritize for the most important parts of our structure?'), 'Mission 3 has one main team decision');
for (const token of ['CLAIM','TEST DATA','APPLICATION','LIMITATION']) check(has(m3, token), `Mission 3 checkpoint scaffold includes: ${token}`);
check(has(m3, 'Material & Joint Recommendation'), 'Mission 3 ends with Material & Joint Recommendation');
for (const token of ['Important structural part / job','Required material property or properties','Quantitative test evidence','Where a fixed joint may help','Where controlled flexibility may help','Connection to the priority force / load','One limitation or uncertainty']) check(has(m3, token), `Mission 3 Team Record includes: ${token}`);
check(has(m3, 'fair testing → evidence → material-property understanding → structural application'), 'Mission 3 states checkpoint assessment focus');
check(has(m3, 'model appearance') && has(m3, "held the most mass"), 'Mission 3 explicitly rejects appearance/maximum-load competition grading');
check(has(m3, 'Why is the strongest material not automatically the best material for every part of a structure?'), 'Mission 3 includes approved reflection');
check(has(m3, 'Mission 3 is finished when:'), 'Mission 3 has explicit finish line');
check(has(m3, 'Mission 4 — Keep It Standing remains locked.'), 'Mission 4 remains locked on Mission 3 page');
check(!m3.includes('phase-4/mission-4/'), 'Mission 3 creates no Mission 4 route');

// Canon/data protections remain intact
for (const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) check(data.includes(`id: '${continent}'`), `Phase 4 data still includes ${continent}`);
for (const forbidden of ['earthquake','tsunami','hurricane','volcano','grid failure','power failure','wind speed','soil capacity']) check(!has(data, forbidden), `Phase 4 data still avoids unsupported hazard/data: ${forbidden}`);

if (failures.length) {
  console.error(`\nJabberwocky Phase 4 readiness audit failed: ${failures.length} issue(s).`);
  failures.forEach((failure) => console.error(`  ✗ ${failure}`));
  process.exit(1);
}

console.log(`\nJabberwocky Phase 4 readiness audit: ${passes.length} checks passed.`);
passes.forEach((pass) => console.log(`  ✓ ${pass}`));
console.log('\nPhase 4 now releases Mission 3 only: fair material-property testing, operational definitions, fixed/flexible joints, living structural materials, eight site-grounded property cases, one checkpoint recommendation, and Missions 4–5 locked.');
