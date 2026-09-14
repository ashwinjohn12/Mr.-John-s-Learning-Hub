import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const sourceDir = path.join(root, 'resources-src', 'jcec', 'thermos');
const outDir = path.join(root, 'public', 'resources', 'jcec');
const outPath = path.join(outDir, 'JCEC_Thermos_Challenge_Printable_Packet.pdf');
const expectedPartLengths = [6000, 6000, 6000, 6000, 280];
const expectedEncodedLength = 24280;
const expectedBytes = 18210;
const expectedSha256 = '5d5c7be49bf19bb9bd5e3bb79e57cae5f5f3ef2f72e2daa698c5163ccd7549e5';

if (!fs.existsSync(sourceDir)) throw new Error(`Missing approved Thermos source directory: ${sourceDir}`);

const parts = fs.readdirSync(sourceDir)
  .filter((name) => /^thermos\.approved\.part\d+\.b64$/.test(name))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

if (parts.length !== expectedPartLengths.length) {
  throw new Error(`Expected ${expectedPartLengths.length} approved Thermos Base64 parts; found ${parts.length}`);
}

const partText = parts.map((name, index) => {
  const text = fs.readFileSync(path.join(sourceDir, name), 'utf8').replace(/\s+/g, '');
  if (text.length !== expectedPartLengths[index]) {
    throw new Error(`${name} length mismatch: expected ${expectedPartLengths[index]}, got ${text.length}`);
  }
  return text;
});

const encoded = partText.join('');
if (encoded.length !== expectedEncodedLength) {
  throw new Error(`Approved Thermos Base64 length mismatch: expected ${expectedEncodedLength}, got ${encoded.length}`);
}

const pdf = Buffer.from(encoded, 'base64');
const sha256 = crypto.createHash('sha256').update(pdf).digest('hex');

if (pdf.subarray(0, 5).toString('ascii') !== '%PDF-') {
  throw new Error('Materialized Thermos packet failed PDF header validation');
}
if (pdf.length !== expectedBytes) {
  throw new Error(`Materialized Thermos packet byte mismatch: expected ${expectedBytes}, got ${pdf.length}`);
}
if (sha256 !== expectedSha256) {
  throw new Error(`Materialized Thermos packet SHA-256 mismatch: expected ${expectedSha256}, got ${sha256}`);
}
if (!pdf.subarray(-6).equals(Buffer.from('%%EOF\n'))) {
  throw new Error('Materialized Thermos packet failed final %%EOF newline validation');
}

const latin1 = pdf.toString('latin1');
const pageObjects = latin1.match(/\/Type\s*\/Page\b/g) || [];
if (pageObjects.length !== 7 || !latin1.includes('/Count 7')) {
  throw new Error(`Materialized Thermos packet page-tree validation failed: found ${pageObjects.length} Page objects`);
}
if (!latin1.includes('xref') || !latin1.includes('trailer') || !latin1.includes('startxref')) {
  throw new Error('Materialized Thermos packet is missing required PDF cross-reference/trailer structure');
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outPath, pdf);
console.log(`Materialized approved JCEC_Thermos_Challenge_Printable_Packet.pdf (${pdf.length} bytes, 7 pages, sha256 ${sha256})`);
