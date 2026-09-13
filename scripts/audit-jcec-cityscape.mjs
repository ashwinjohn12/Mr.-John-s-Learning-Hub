import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
let checks = 0;
const failures = [];

function read(rel){
  const full = path.join(root, rel);
  if (!fs.existsSync(full)) { failures.push(`missing: ${rel}`); return ''; }
  checks++;
  return fs.readFileSync(full, 'utf8');
}
function requireText(source, needle, label){
  if (!source.includes(needle)) failures.push(`${label}: missing ${needle}`);
  else checks++;
}
function requireApprovedPdf(rel, expectedBytes, expectedSha256){
  const full = path.join(root, rel);
  if (!fs.existsSync(full)) { failures.push(`missing: ${rel}`); return; }
  const buf = fs.readFileSync(full);
  checks++;
  if (buf.subarray(0,5).toString('ascii') === '%PDF-') checks++; else failures.push(`${rel}: does not start with %PDF-`);
  if (buf.length === expectedBytes) checks++; else failures.push(`${rel}: expected ${expectedBytes} bytes, got ${buf.length}`);
  const sha256 = crypto.createHash('sha256').update(buf).digest('hex');
  if (sha256 === expectedSha256) checks++; else failures.push(`${rel}: expected sha256 ${expectedSha256}, got ${sha256}`);
}

const component = read('src/components/JcecCityscapeIntegration.astro');
const alignment = read('src/components/JcecCityscapeRecordAlignment.astro');
const layout = read('src/layouts/BaseLayout.astro');
const teacher = read('src/pages/courses/grade-7-science/jabberwocky/phase-4/teacher-launch-guide/index.astro');
const teacherDoc = read('docs/jabberwocky-phase-4-teacher-launch-guide.md');
const pacingDoc = read('docs/jabberwocky-phase-4-five-week-pacing-guide.md');
const hub = read('src/pages/courses/grade-7-science/jabberwocky/phase-4/index.astro');
const missions = [1,2,3,4,5].map(n => read(`src/pages/courses/grade-7-science/jabberwocky/phase-4/mission-${n}/index.astro`));

const sourceDir = path.join(root, 'resources-src/jcec/cityscape');
const sourceNames = fs.existsSync(sourceDir) ? fs.readdirSync(sourceDir) : [];
const fieldParts = sourceNames.filter(n => /^field\.approved\.part\d+\.b64$/.test(n)).sort();
const teacherParts = sourceNames.filter(n => /^teacher\.approved\.part\d+\.b64$/.test(n)).sort();
if (fieldParts.length === 9) checks++; else failures.push(`expected 9 approved Field File base64 parts, got ${fieldParts.length}`);
if (teacherParts.length === 4) checks++; else failures.push(`expected 4 approved Teacher Guide base64 parts, got ${teacherParts.length}`);

requireApprovedPdf(
  'public/resources/jcec/Project_New_Horizon_CityScape_Field_File.pdf',
  37427,
  '50c914abbfc1eace66a518805f76d8f5981cb11a47c829c376eb0f2257996c18'
);
requireApprovedPdf(
  'public/resources/jcec/Project_New_Horizon_CityScape_Teacher_Guide.pdf',
  17580,
  'f7f781ee1155152b8c9fabe8e366a61f386b5f8b4703b3d98d2c9374dfd89cb0'
);

requireText(layout, "import JcecCityscapeIntegration", 'BaseLayout imports CityScape integration');
requireText(layout, '<JcecCityscapeIntegration />', 'BaseLayout renders CityScape integration');
requireText(layout, "import JcecCityscapeRecordAlignment", 'BaseLayout imports packet record alignment');
requireText(layout, '<JcecCityscapeRecordAlignment />', 'BaseLayout renders packet record alignment');

for (const token of [
  'Project New Horizon — JCEC CityScape Prototype Challenge',
  'three-building research district prototype',
  'Primary Structural Test Building',
  'DEFINE → ANALYZE → CHOOSE → TEST & IMPROVE → DEFEND',
  'building geometry, geometric constructions, measured blueprint and resource mathematics',
  '18 core classes + 7 purposeful flex periods',
  'Pages 3, 6 and 10 individually',
  'standardized reference model / fallback dataset',
  'no new physical build is required',
  'final Mission 2190 Council later decides whether human presence should actually proceed',
  'Project_New_Horizon_CityScape_Field_File.pdf',
  'Project_New_Horizon_CityScape_Teacher_Guide.pdf',
  'Open / Print Student Field File · 14 pages',
  'Open Teacher Marking & Setup Guide · 7 pages',
  'Packet is the record source of truth',
  'The website record below is a planning/reference version if its wording differs'
]) requireText(component, token, 'CityScape integration component');

requireText(component, 'mission-([1-5])', 'CityScape shared Mission 1–5 route matcher');
requireText(component, 'teacher-launch-guide', 'CityScape teacher-guide route support');

const teamRecords = [
  'New Horizon Requirements Card',
  'Structural Force Map',
  'Material & Joint Recommendation',
  'New Horizon Safety Protocol',
  'JCEC NEW HORIZON STRUCTURAL AUTHORIZATION'
];
teamRecords.forEach((record,i) => requireText(missions[i], record, `Mission ${i+1} retains recognizable Team Record`));

for (const token of [
  'data-packet-aligned-record',
  'New Horizon Requirements Card',
  'Inherited finding · Environment',
  'Primary Structural Test Building · tentative choice',
  'Structural Force Map',
  'Mass tells us ______ · mass units ______',
  'Material & Joint Recommendation',
  'Load–deformation data + fixed / flexible joint evidence',
  'One thing our test does NOT prove is',
  'New Horizon Safety Protocol',
  'Final CityScape Readiness',
  'JCEC New Horizon Structural Authorization',
  'COST / COMPLEXITY',
  'ENVIRONMENTAL IMPACT',
  'Required modification / restriction / next evidence',
  'using evidence from at least three different missions',
  'The Primary Structural Test Building is the normal test object',
  'reference model is the fallback, not the default',
  'Field File Page 10 is separate individual Math Resource Mathematics evidence',
  'Prepare one standardized small baseline model per team or shared station',
  'Have teams bring their Primary Structural Test Building',
  'Set identical/near-identical baseline models',
  'Use each team’s Primary Structural Test Building when the comparison is fair',
  'No new physical build in Mission 5',
  'adding more material make a structure less efficient'
]) requireText(alignment, token, 'Packet-aligned Phase 4 records/testing policy');

for (const token of ['PROJECT NEW HORIZON','18 core','7 purposeful flex']) requireText(teacher, token, 'Phase 4 live teacher guide remains intact');
for (const token of ['Read the Building Site','Trace the Forces','Choose What Holds','Keep It Standing','Authorize New Horizon']) requireText(hub, token, 'Phase 4 hub keeps five-mission Science sequence');

requireText(component, 'Field File: Pages 1–5', 'M1 packet handoff');
requireText(component, 'Field File: Page 7', 'M2 packet handoff');
requireText(component, 'Field File: Pages 8–10', 'M3 packet handoff');
requireText(component, 'Field File: Pages 11–13', 'M4 packet handoff');
requireText(component, 'Field File: Page 14', 'M5 packet handoff');
requireText(component, 'Science still comes first', 'M1 science-first safeguard');
requireText(component, 'Mission 2 remains the force lesson', 'M2 science-first safeguard');
requireText(component, 'The checkpoint is not “which material held the most?”', 'M3 checkpoint safeguard');
requireText(component, 'Only the Primary Building completes the full testing cycle', 'M4 workload safeguard');
requireText(component, 'This is structural authorization only', 'M5 storyline safeguard');

for (const token of [
  'Integrated CityScape rule',
  'Primary Building is the default test object',
  'Page 3 — Building Geometry',
  'Page 6 — Geometric Constructions / measured blueprint work',
  'Page 10 — Resource Mathematics',
  '18 core + 7 flex Science schedule',
  'No new physical build is required',
  'does not make the final Mission 2190 settlement decision'
]) requireText(teacherDoc, token, 'Teacher implementation document');

for (const token of [
  '18 core classes + 7 purposeful flex periods',
  'CityScape cross-curricular overlay',
  'Primary Structural Test Building',
  'Math runs alongside this Science pacing rather than inside it',
  'No new physical build is required'
]) requireText(pacingDoc, token, 'Pacing integration document');

if (failures.length){
  console.error('\nJCEC CityScape integration audit FAILED');
  for (const f of failures) console.error(`  ✗ ${f}`);
  process.exit(1);
}
console.log(`\nJCEC CityScape integration audit: ${checks} checks passed.`);
console.log('Approved PDFs match exact hashes; Phase 4 keeps its five-mission Science spine while CityScape supplies the integrated physical project thread, Primary Building testing cycle, separate Math evidence, packet-aligned records and teacher implementation support.');
