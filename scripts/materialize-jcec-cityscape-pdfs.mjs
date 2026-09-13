import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const sourceDir = path.join(root, 'resources-src', 'jcec', 'cityscape');
const outDir = path.join(root, 'public', 'resources', 'jcec');

const resources = [
  {
    pattern: /^field\.approved\.part\d+\.b64$/,
    expectedParts: 9,
    out: 'Project_New_Horizon_CityScape_Field_File.pdf',
    expectedBytes: 37427,
    expectedSha256: '50c914abbfc1eace66a518805f76d8f5981cb11a47c829c376eb0f2257996c18',
    restoreFinalNewline: true,
    normalizeApprovedTransport: true
  },
  {
    pattern: /^teacher\.approved\.part\d+\.b64$/,
    expectedParts: 4,
    out: 'Project_New_Horizon_CityScape_Teacher_Guide.pdf',
    expectedBytes: 17580,
    expectedSha256: 'f7f781ee1155152b8c9fabe8e366a61f386b5f8b4703b3d98d2c9374dfd89cb0'
  }
];

fs.mkdirSync(outDir, { recursive: true });
if (!fs.existsSync(sourceDir)) throw new Error(`Missing CityScape source directory: ${sourceDir}`);

for (const resource of resources) {
  const parts = fs.readdirSync(sourceDir)
    .filter((name) => resource.pattern.test(name))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  if (parts.length !== resource.expectedParts) {
    throw new Error(`Expected ${resource.expectedParts} approved base64 parts for ${resource.out}; found ${parts.length}`);
  }

  const partText = parts.map((name) => fs.readFileSync(path.join(sourceDir, name), 'utf8').replace(/\s+/g, ''));

  // One character in Field File source part 02 is normalized by GitHub's text
  // transport. Correct only that known transport artifact, then require the
  // exact approved byte count and SHA-256 below before the PDF is written.
  if (resource.normalizeApprovedTransport) {
    const partIndex = 2;
    const charIndex = 780;
    const expectedTransportChar = 'R';
    const approvedChar = 'M';
    const chunk = partText[partIndex];
    if (chunk.length !== 6000 || chunk[charIndex] !== expectedTransportChar) {
      throw new Error(`Unexpected Field File source transport state in approved part 02`);
    }
    partText[partIndex] = `${chunk.slice(0, charIndex)}${approvedChar}${chunk.slice(charIndex + 1)}`;
  }

  const encoded = partText.join('');
  let pdf = Buffer.from(encoded, 'base64');

  // GitHub's text transport can normalize the final Base64 character for the
  // Field File. Restore only the canonical final newline after %%EOF, then
  // require the exact approved byte count and SHA-256 below.
  if (
    resource.restoreFinalNewline &&
    pdf.length === resource.expectedBytes - 1 &&
    pdf.subarray(-5).toString('ascii') === '%%EOF'
  ) {
    pdf = Buffer.concat([pdf, Buffer.from('\n')]);
  }

  const sha256 = crypto.createHash('sha256').update(pdf).digest('hex');

  if (pdf.subarray(0, 5).toString('ascii') !== '%PDF-') {
    throw new Error(`Materialized ${resource.out} failed PDF header validation`);
  }
  if (pdf.length !== resource.expectedBytes) {
    throw new Error(`Materialized ${resource.out} byte mismatch: expected ${resource.expectedBytes}, got ${pdf.length}`);
  }
  if (sha256 !== resource.expectedSha256) {
    throw new Error(`Materialized ${resource.out} SHA-256 mismatch: expected ${resource.expectedSha256}, got ${sha256}`);
  }

  fs.writeFileSync(path.join(outDir, resource.out), pdf);
  console.log(`Materialized approved ${resource.out} (${pdf.length} bytes, sha256 ${sha256})`);
}
