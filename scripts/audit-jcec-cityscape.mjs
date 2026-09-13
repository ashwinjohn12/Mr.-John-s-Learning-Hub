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
function requireFile(rel, minBytes=1){
  const full = path.join(root, rel);
  if (!fs.existsSync(full)) { failures.push(`missing: ${rel}`); return Buffer.alloc(0); }
  const buf = fs.readFileSync(full);
  if (buf.length < minBytes) failures.push(`${rel}: expected at least ${minBytes} bytes, got ${buf.length}`);
  else checks++;
  return buf;
}

const component = read('src/components/JcecCityscapeIntegration.astro');
const layout = read('src/layouts/BaseLayout.astro');
const teacher = read('src/pages/courses/grade-7-science/jabberwocky/phase-4/teacher-launch-guide/index.astro');
const hub = read('src/pages/courses/grade-7-science/jabberwocky/phase-4/index.astro');
const missions = [1,2,3,4,5].map(n => read(`src/pages/courses/grade-7-science/jabberwocky/phase-4/mission-${n}/index.astro`));

const sourceDir = path.join(root, 'resources-src/jcec/cityscape');
const sourceNames = fs.existsSync(sourceDir) ? fs.readdirSync(sourceDir) : [];
const fieldParts = sourceNames.filter(n => /^field\.part\d+\.b64$/.test(n)).sort();
const teacherParts = sourceNames.filter(n => /^teacher\.part\d+\.b64$/.test(n)).sort();
if (fieldParts.length === 7) checks++; else failures.push(`expected 7 Field File base64 parts, got ${fieldParts.length}`);
if (teacherParts.length === 4) checks++; else failures.push(`expected 4 Teacher Guide base64 parts, got ${teacherParts.length}`);

const fieldPdf = requireFile('public/resources/jcec/Project_New_Horizon_CityScape_Field_File.pdf', 30000);
const teacherPdf = requireFile('public/resources/jcec/Project_New_Horizon_CityScape_Teacher_Guide.pdf', 14000);
if (fieldPdf.subarray(0,5).toString('ascii') === '%PDF-') checks++; else failures.push('Field File does not start with %PDF-');
if (teacherPdf.subarray(0,5).toString('ascii') === '%PDF-') checks++; else failures.push('Teacher Guide does not start with %PDF-');

requireText(layout, "import JcecCityscapeIntegration", 'BaseLayout imports CityScape integration');
requireText(layout, '<JcecCityscapeIntegration />', 'BaseLayout renders CityScape integration');

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
  'Open Teacher Marking & Setup Guide · 7 pages'
]) requireText(component, token, 'CityScape integration component');

for (const route of ['mission-1','mission-2','mission-3','mission-4','mission-5','teacher-launch-guide']) requireText(component, route, `CityScape route support ${route}`);

const teamRecords = [
  'New Horizon Requirements Card',
  'Structural Force Map',
  'Material & Joint Recommendation',
  'New Horizon Safety Protocol',
  'JCEC NEW HORIZON STRUCTURAL AUTHORIZATION'
];
teamRecords.forEach((record,i) => requireText(missions[i], record, `Mission ${i+1} retains approved Team Record`));

for (const token of ['PROJECT NEW HORIZON','18 core','7 purposeful flex']) requireText(teacher, token, 'Phase 4 teacher guide remains intact');
for (const token of ['Read the Building Site','Trace the Forces','Choose What Holds','Keep It Standing','Authorize New Horizon']) requireText(hub, token, 'Phase 4 hub keeps five-mission Science sequence');

requireText(component, 'Field File: Pages 1–5', 'M1 packet handoff');
requireText(component, 'Field File: Page 7', 'M2 packet handoff');
requireText(component, 'Field File: Pages 8–10', 'M3 packet handoff');
requireText(component, 'Field File: Pages 11–13', 'M4 packet handoff');
requireText(component, 'Field File: Page 14', 'M5 packet handoff');
requireText(component, 'Math runs alongside the Science project', 'Math stays alongside Science rather than replacing it');
requireText(component, 'Science still comes first', 'M1 science-first safeguard');
requireText(component, 'Mission 2 remains the force lesson', 'M2 science-first safeguard');
requireText(component, 'The checkpoint is not “which material held the most?”', 'M3 checkpoint safeguard');
requireText(component, 'Only the Primary Building completes the full testing cycle', 'M4 workload safeguard');
requireText(component, 'This is structural authorization only', 'M5 storyline safeguard');

if (failures.length){
  console.error('\nJCEC CityScape integration audit FAILED');
  for (const f of failures) console.error(`  ✗ ${f}`);
  process.exit(1);
}
console.log(`\nJCEC CityScape integration audit: ${checks} checks passed.`);
console.log('Phase 4 keeps its five-mission Science spine while CityScape supplies the integrated physical project thread, individual Math evidence, Primary Building testing cycle, permanent PDFs and teacher implementation support.');
