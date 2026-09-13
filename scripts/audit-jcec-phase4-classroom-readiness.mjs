import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const failures = [];
let checks = 0;

const read = (rel) => {
  const full = path.join(root, rel);
  if (!fs.existsSync(full)) { failures.push(`missing: ${rel}`); return ''; }
  checks++;
  return fs.readFileSync(full, 'utf8');
};
const requireText = (source, token, label) => {
  if (!source.includes(token)) failures.push(`${label}: missing ${token}`);
  else checks++;
};
const requireOrder = (source, first, second, label) => {
  if (source.indexOf(first) === -1 || source.indexOf(second) === -1 || source.indexOf(first) >= source.indexOf(second)) {
    failures.push(`${label}: expected ${first} before ${second}`);
  } else checks++;
};
const sha256 = (buffer) => crypto.createHash('sha256').update(buffer).digest('hex');

const layout = read('src/layouts/BaseLayout.astro');
const component = read('src/components/JcecPhase4ClassroomReadiness.astro');
const packageJson = read('package.json');
const correction = read('scripts/apply-jcec-cityscape-field-file-classroom-fix.mjs');
const patchPaths = [0, 1, 2, 3].map((index) => path.join(root, 'resources-src', 'jcec', 'cityscape', `field.classroom-ready.incremental.part${String(index).padStart(2, '0')}.bin`));
patchPaths.forEach((patchPath) => {
  if (!fs.existsSync(patchPath)) failures.push(`missing: ${path.relative(root, patchPath)}`);
  else checks++;
});

for (const token of [
  "import JcecPhase4ClassroomReadiness",
  '<JcecPhase4ClassroomReadiness />'
]) requireText(layout, token, 'BaseLayout classroom-readiness integration');
requireOrder(layout, '<JcecWholeYearReleaseState />', '<JcecPhase4ClassroomReadiness />', 'Phase 4 readiness must run after whole-year release-state rewriting');

for (const token of [
  "document.querySelector('#phase4-hub')",
  "hub.querySelector('.whole-year-release-handoff')?.remove()",
  "step.classList.remove('done', 'current', 'future')",
  "step.classList.add('current')",
  "status.textContent = index === 0 ? 'START HERE' : 'READY'",
  "'Start Mission 1 →'",
  "'Requirements ●'",
  "'Mission 1 starts with the requirements.'",
  "'Once the teacher-assigned continent is saved, begin Mission 1: Read the Building Site.'"
]) requireText(component, token, 'Phase 4 first-day student state');

for (const token of [
  'APPROVED_BYTES = 37427',
  "APPROVED_SHA256 = '50c914abbfc1eace66a518805f76d8f5981cb11a47c829c376eb0f2257996c18'",
  'PATCH_BYTES = 3437',
  "PATCH_SHA256 = 'bf837976297f95616d2ef748fa71ff7f1ef1bd3a4d675c10e047ecfa17266ad2'",
  'CLASSROOM_READY_BYTES = 40864',
  "CLASSROOM_READY_SHA256 = '50f6a913c392e2ce4505028c37189e1d7a1a159c3eddb35f08df29b75adaae29'",
  "buffer.subarray(0, 5).toString('ascii') !== '%PDF-'",
  'Classroom-ready Field File no longer preserves the exact approved PDF as its prefix'
]) requireText(correction, token, 'Field File correction guard');

const patchParts = patchPaths.map((patchPath) => fs.existsSync(patchPath) ? fs.readFileSync(patchPath) : Buffer.alloc(0));
const expectedPartBytes = [1000, 1000, 1000, 437];
patchParts.forEach((part, index) => {
  if (part.length === expectedPartBytes[index]) checks++; else failures.push(`patch part ${index}: expected ${expectedPartBytes[index]} bytes, got ${part.length}`);
});
const patch = Buffer.concat(patchParts);
if (patch.length === 3437) checks++; else failures.push(`patch source: expected 3437 bytes, got ${patch.length}`);
if (sha256(patch) === 'bf837976297f95616d2ef748fa71ff7f1ef1bd3a4d675c10e047ecfa17266ad2') checks++; else failures.push('patch source: SHA-256 mismatch');

const fieldPath = path.join(root, 'public', 'resources', 'jcec', 'Project_New_Horizon_CityScape_Field_File.pdf');
if (!fs.existsSync(fieldPath)) failures.push('missing final classroom-ready CityScape Field File');
else {
  const field = fs.readFileSync(fieldPath);
  checks++;
  if (field.subarray(0, 5).toString('ascii') === '%PDF-') checks++; else failures.push('final Field File: invalid PDF header');
  if (field.length === 40864) checks++; else failures.push(`final Field File: expected 40864 bytes, got ${field.length}`);
  if (sha256(field) === '50f6a913c392e2ce4505028c37189e1d7a1a159c3eddb35f08df29b75adaae29') checks++; else failures.push('final Field File: classroom-ready SHA-256 mismatch');
}

const teacherPath = path.join(root, 'public', 'resources', 'jcec', 'Project_New_Horizon_CityScape_Teacher_Guide.pdf');
if (!fs.existsSync(teacherPath)) failures.push('missing CityScape Teacher Guide');
else {
  const teacher = fs.readFileSync(teacherPath);
  checks++;
  if (teacher.length === 17580) checks++; else failures.push(`Teacher Guide: expected 17580 bytes, got ${teacher.length}`);
  if (sha256(teacher) === 'f7f781ee1155152b8c9fabe8e366a61f386b5f8b4703b3d98d2c9374dfd89cb0') checks++; else failures.push('Teacher Guide: SHA-256 changed unexpectedly');
}

for (const token of [
  'node scripts/materialize-jcec-cityscape-pdfs.mjs',
  'node scripts/audit-jcec-cityscape.mjs',
  'node scripts/apply-jcec-cityscape-field-file-classroom-fix.mjs',
  'node scripts/audit-jcec-phase4-classroom-readiness.mjs',
  'astro build'
]) requireText(packageJson, token, 'Production build classroom-readiness chain');
requireOrder(packageJson, 'node scripts/materialize-jcec-cityscape-pdfs.mjs', 'node scripts/audit-jcec-cityscape.mjs', 'Production build validates approved PDF before correction');
requireOrder(packageJson, 'node scripts/audit-jcec-cityscape.mjs', 'node scripts/apply-jcec-cityscape-field-file-classroom-fix.mjs', 'Production build applies correction only after approved CityScape audit');
requireOrder(packageJson, 'node scripts/apply-jcec-cityscape-field-file-classroom-fix.mjs', 'node scripts/audit-jcec-phase4-classroom-readiness.mjs', 'Production build audits final corrected artifact');
requireOrder(packageJson, 'node scripts/audit-jcec-phase4-classroom-readiness.mjs', 'astro build', 'Production build audits classroom readiness before Astro output');

if (failures.length) {
  console.error(`\nPhase 4 classroom-readiness audit FAILED: ${failures.length} issue(s).`);
  failures.forEach((failure) => console.error(`  ✗ ${failure}`));
  process.exit(1);
}
console.log(`\nPhase 4 classroom-readiness audit: ${checks} checks passed.`);
console.log('Phase 4 now opens at Mission 1 for a new class, the exact approved PDF remains validated as provenance, and the public Field File receives a separately guarded Page 2 classroom-readiness correction before the site is built.');
