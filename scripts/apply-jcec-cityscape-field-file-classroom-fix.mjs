import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const pdfPath = path.join(root, 'public', 'resources', 'jcec', 'Project_New_Horizon_CityScape_Field_File.pdf');
const patchPaths = [0, 1, 2, 3].map((index) => path.join(root, 'resources-src', 'jcec', 'cityscape', `field.classroom-ready.incremental.part${String(index).padStart(2, '0')}.bin`));

const APPROVED_BYTES = 37427;
const APPROVED_SHA256 = '50c914abbfc1eace66a518805f76d8f5981cb11a47c829c376eb0f2257996c18';
const PATCH_BYTES = 3437;
const PATCH_SHA256 = 'bf837976297f95616d2ef748fa71ff7f1ef1bd3a4d675c10e047ecfa17266ad2';
const CLASSROOM_READY_BYTES = 40864;
const CLASSROOM_READY_SHA256 = '50f6a913c392e2ce4505028c37189e1d7a1a159c3eddb35f08df29b75adaae29';

const sha256 = (buffer) => crypto.createHash('sha256').update(buffer).digest('hex');

function requirePdf(buffer, expectedBytes, expectedSha, label) {
  if (buffer.subarray(0, 5).toString('ascii') !== '%PDF-') {
    throw new Error(`${label} failed PDF header validation`);
  }
  if (buffer.length !== expectedBytes) {
    throw new Error(`${label} byte mismatch: expected ${expectedBytes}, got ${buffer.length}`);
  }
  const actualSha = sha256(buffer);
  if (actualSha !== expectedSha) {
    throw new Error(`${label} SHA-256 mismatch: expected ${expectedSha}, got ${actualSha}`);
  }
}

if (!fs.existsSync(pdfPath)) throw new Error(`Missing approved Field File: ${pdfPath}`);
for (const patchPath of patchPaths) {
  if (!fs.existsSync(patchPath)) throw new Error(`Missing classroom-readiness patch source: ${patchPath}`);
}

const approved = fs.readFileSync(pdfPath);
requirePdf(approved, APPROVED_BYTES, APPROVED_SHA256, 'Approved CityScape Field File input');
if (approved.subarray(-6).toString('ascii') !== '%%EOF\n') {
  throw new Error('Approved CityScape Field File does not end with the expected %%EOF newline');
}

const patchParts = patchPaths.map((patchPath) => fs.readFileSync(patchPath));
const expectedPartBytes = [1000, 1000, 1000, 437];
patchParts.forEach((part, index) => {
  if (part.length !== expectedPartBytes[index]) {
    throw new Error(`Classroom-readiness patch part ${index} byte mismatch: expected ${expectedPartBytes[index]}, got ${part.length}`);
  }
});
const patch = Buffer.concat(patchParts);
if (patch.length !== PATCH_BYTES) {
  throw new Error(`Classroom-readiness patch byte mismatch: expected ${PATCH_BYTES}, got ${patch.length}`);
}
const patchSha = sha256(patch);
if (patchSha !== PATCH_SHA256) {
  throw new Error(`Classroom-readiness patch SHA-256 mismatch: expected ${PATCH_SHA256}, got ${patchSha}`);
}
if (patch.subarray(0, 9).toString('ascii') !== '\n1 0 obj\n') {
  throw new Error('Classroom-readiness patch does not begin with the guarded incremental PDF object');
}

const classroomReady = Buffer.concat([approved, patch]);
if (!classroomReady.subarray(0, approved.length).equals(approved)) {
  throw new Error('Classroom-ready Field File no longer preserves the exact approved PDF as its prefix');
}
requirePdf(classroomReady, CLASSROOM_READY_BYTES, CLASSROOM_READY_SHA256, 'Classroom-ready CityScape Field File');
if (classroomReady.subarray(-6).toString('ascii') !== '%%EOF\n') {
  throw new Error('Classroom-ready CityScape Field File does not end with %%EOF newline');
}

fs.writeFileSync(pdfPath, classroomReady);
console.log(`Applied classroom-readiness Field File correction (${classroomReady.length} bytes, sha256 ${CLASSROOM_READY_SHA256}).`);
