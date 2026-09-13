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
  hub: 'src/pages/courses/grade-7-science/jabberwocky/phase-4/index.astro',
  m1: 'src/pages/courses/grade-7-science/jabberwocky/phase-4/mission-1/index.astro',
  m2: 'src/pages/courses/grade-7-science/jabberwocky/phase-4/mission-2/index.astro',
  m3: 'src/pages/courses/grade-7-science/jabberwocky/phase-4/mission-3/index.astro',
  progress: 'src/components/JcecPhase4Progress.astro',
  data: 'src/data/jabberwockyPhase4.ts',
  phase3Progress: 'src/components/JcecPhase3Progress.astro'
};

for (const file of Object.values(files)) check(fs.existsSync(rel(file)), `exists: ${file}`);
for (const n of [4,5]) check(!fs.existsSync(rel(`src/pages/courses/grade-7-science/jabberwocky/phase-4/mission-${n}/index.astro`)), `Mission ${n} remains unbuilt`);

const hub = read(files.hub);
const m1 = read(files.m1);
const m2 = read(files.m2);
const m3 = read(files.m3);
const progress = read(files.progress);
const data = read(files.data);
const p3progress = read(files.phase3Progress);

// Hub, state and continuity
for (const token of ['PROJECT NEW HORIZON','Read the Building Site','Trace the Forces','Choose What Holds','Keep It Standing','Authorize New Horizon']) check(has(hub, token), `Hub includes ${token}`);
for (const token of ['Requirements ✓','Forces ✓','Materials ●','Stability ○','Authorization ○']) check(has(hub, token), `Hub progress includes ${token}`);
check(hub.includes('jabberwocky-phase4-posting'), 'Phase 4 uses its own posting state');
check((hub.match(/status:'COMPLETE'/g) || []).length === 2, 'Hub marks Missions 1–2 complete');
check((hub.match(/status:'CURRENT'/g) || []).length === 1, 'Hub marks only Mission 3 current');
check((hub.match(/status:'UPCOMING'/g) || []).length === 2, 'Hub keeps Missions 4–5 upcoming');
check(hub.includes('phase-4/mission-3/') && !hub.includes('phase-4/mission-4/') && !hub.includes('phase-4/mission-5/'), 'Hub releases Mission 3 only');
check(has(hub, 'do not need to reopen old archives'), 'Hub prevents archive overload');
check(has(p3progress, 'Continue to Phase 4 → Project New Horizon'), 'Phase 3 handoff remains intact');

// Previous missions and navigation remain intact
for (const token of ['Mission 1 of 5','New Horizon Requirements Card']) check(has(m1, token), `Mission 1 remains intact: ${token}`);
for (const token of ['Mission 2 of 5','Structural Force Map']) check(has(m2, token), `Mission 2 remains intact: ${token}`);
check(has(progress, 'Next Mission → Trace the Forces'), 'Mission 1 links to Mission 2');
check(has(progress, 'Next Mission → Choose What Holds'), 'Mission 2 links to Mission 3');
check(progress.includes('phase-4/mission-3/') && !progress.includes('phase-4/mission-4/'), 'Progress stops at Mission 3');

// Mission 3 student structure and continuity
for (const token of ['MISSION 3 OF 5','How do materials and joints change what a structure can handle?','4 classes × 45 minutes','Your Mission','Learn the Science','Investigate','Make a Decision','Record It']) check(has(m3, token), `Mission 3 includes ${token}`);
check(m3.includes('jabberwocky-phase4-posting'), 'Mission 3 carries the saved Phase 4 posting');
check(!m3.includes('<select'), 'Mission 3 does not ask students to choose a continent again');
check(has(m3, 'do not need to recreate it'), 'Mission 3 does not require rebuilding the Mission 2 Force Map');

// Material-property science and Grade 7 scope
for (const token of ['STRENGTH','FLEXIBILITY','STIFFNESS','DEFORMATION']) check(has(m3, token), `Mission 3 teaches ${token}`);
check(has(m3, 'the material that bends least is the strongest'), 'Mission 3 explicitly challenges least-bending = strongest');
check(has(m3, 'flexibility = the amount of deformation under the same specified load'), 'Mission 3 operationally defines flexibility');
check(has(m3, 'strength = the greatest safe test load handled before the agreed failure limit is reached'), 'Mission 3 operationally defines strength');
check(has(m3, 'You do not need stress/strain equations, elastic modulus or advanced engineering mathematics'), 'Mission 3 keeps advanced engineering math out of the required pathway');
check(has(m3, 'Less deformation under this same load suggests greater stiffness') && has(m3, 'greater strength'), 'Mission 3 distinguishes stiffness evidence from strength evidence');

// Joints and living-material connections
for (const token of ['FIXED JOINT','FLEXIBLE JOINT','Which joint behaviour fits this structural part']) check(has(m3, token), `Mission 3 joint science includes ${token}`);
for (const token of ["NATURE'S MATERIALS",'BONE','CARTILAGE','LIGAMENT','PLANT TISSUES / LAYERS',"Why don't living structures use one material everywhere?"]) check(has(m3, token), `Mission 3 living-material strip includes ${token}`);
check(has(m3, 'Natural and synthetic'), 'Mission 3 includes natural vs synthetic material comparison');

// Fair test, data and safe strength testing
check(has(m3, 'Material & Joint Fair Test'), 'Mission 3 uses the approved fair test');
for (const token of ['length','width','span','load position','loading method']) check(has(m3, token), `Mission 3 fair test controls ${token}`);
for (const token of ['Same load, compare deformation','Safe stepped-load test','greatest safe test load']) check(has(m3, token), `Mission 3 testing includes ${token}`);
check(has(m3, 'do not need to snap or destroy a sample'), 'Mission 3 does not require destructive testing');
check(has(m3, 'teacher maximum'), 'Mission 3 uses a teacher-set safety ceiling');
check(has(m3, 'load-versus-deformation graph'), 'Mission 3 requires one manageable quantitative graph');
check(has(m3, 'Reached the teacher maximum without failing') && has(m3, 'exact breaking strength'), 'Mission 3 interprets capped strength evidence correctly');

// Low-material implementation and fallback
for (const token of ['paper/cardstock','recycled cardboard','rulers','tape','binder clips','coins/washers/books']) check(has(m3, token), `Mission 3 low-material plan includes ${token}`);
check(has(m3, 'NO-PURCHASE / NOISY-DATA FALLBACK'), 'Mission 3 includes an explicit no-purchase fallback');
check(has(m3, 'supplied results from one standardized classroom setup'), 'Mission 3 fallback includes quantitative evidence');
check(has(m3, 'supplied evidence cards'), 'Mission 3 joint check can fall back to evidence cards');
for (const token of ['Desk-sized samples','small loads','teacher maximum','no deliberate snapping','No hot glue, knives, saws']) check(has(m3, token), `Mission 3 safety includes ${token}`);
check(m3.includes('print-phase4-mission3'), 'Mission 3 includes printable investigation/record materials');

// Continent cases and canon protection
for (const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) check(has(m3, `${continent}:`) || has(m3, `'${continent}':`), `Mission 3 contains ${continent} case`);
check((m3.match(/clues:\[/g) || []).length === 8, 'All eight continents have three material/joint clues');
for (const forbidden of ['earthquake','tsunami','volcano','hurricane','soil bearing capacity']) check(!has(m3, forbidden), `Mission 3 avoids unsupported hazard/data: ${forbidden}`);
check(has(m3, 'properties first'), 'Mission 3 recommends properties before named materials');
check(has(m3, 'steel or titanium'), 'Named materials appear only inside the warning against prescribing a material too early');
check(has(m3, 'foundation design itself waits until Mission 4'), 'Mission 3 keeps foundation science for Mission 4');

// One decision, checkpoint record and no build competition
check(has(m3, 'What material properties and joint type should JCEC prioritize for the most important parts of our structure?'), 'Mission 3 has one main team decision');
for (const token of ['CLAIM','TEST DATA','APPLICATION','LIMITATION']) check(has(m3, token), `Mission 3 reasoning scaffold includes ${token}`);
check(has(m3, 'Material & Joint Recommendation'), 'Mission 3 ends with the approved checkpoint record');
for (const token of ['Important structural part / job','Required material property or properties','Quantitative test evidence','Where a fixed joint may help','Where controlled flexibility may help','Connection to the priority force / load','One limitation or uncertainty']) check(has(m3, token), `Mission 3 Team Record includes ${token}`);
check(has(m3, 'fair testing → evidence → material-property understanding → structural application'), 'Mission 3 states checkpoint assessment focus');
check(has(m3, 'model appearance') && has(m3, 'held the most mass'), 'Mission 3 explicitly rejects appearance/maximum-load competition grading');
check(has(m3, 'Why is the strongest material not automatically the best material for every part of a structure?'), 'Mission 3 includes the approved reflection');
check(has(m3, 'Mission 3 is finished when:'), 'Mission 3 has an explicit finish line');
check(has(m3, 'Mission 4 — Keep It Standing remains locked.'), 'Mission 4 remains locked');
check(!m3.includes('phase-4/mission-4/'), 'Mission 3 creates no Mission 4 route');

// Canon/data remains protected
for (const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) check(data.includes(`id: '${continent}'`), `Phase 4 data still includes ${continent}`);
for (const forbidden of ['earthquake','tsunami','hurricane','volcano','grid failure','power failure','wind speed','soil capacity']) check(!has(data, forbidden), `Phase 4 data avoids unsupported hazard/data: ${forbidden}`);

if (failures.length) {
  console.error(`\nJabberwocky Phase 4 readiness audit failed: ${failures.length} issue(s).`);
  failures.forEach((failure) => console.error(`  ✗ ${failure}`));
  process.exit(1);
}

console.log(`\nJabberwocky Phase 4 readiness audit: ${passes.length} checks passed.`);
passes.forEach((pass) => console.log(`  ✓ ${pass}`));
console.log('\nPhase 4 now releases Mission 3 only: controlled material-property testing, operational definitions, joints, living structural materials, eight site-grounded property cases, one checkpoint recommendation, and Missions 4–5 locked.');
