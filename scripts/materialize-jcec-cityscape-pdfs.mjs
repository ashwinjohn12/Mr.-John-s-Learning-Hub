import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const sourceDir = path.join(root, 'resources-src', 'jcec', 'cityscape');
const outDir = path.join(root, 'public', 'resources', 'jcec');

const resources = [
  {
    prefix: 'field.part',
    out: 'Project_New_Horizon_CityScape_Field_File.pdf',
    minBytes: 30000
  },
  {
    prefix: 'teacher.part',
    out: 'Project_New_Horizon_CityScape_Teacher_Guide.pdf',
    minBytes: 14000
  }
];

fs.mkdirSync(outDir, { recursive: true });

for (const resource of resources) {
  if (!fs.existsSync(sourceDir)) throw new Error(`Missing CityScape source directory: ${sourceDir}`);
  const parts = fs.readdirSync(sourceDir)
    .filter((name) => name.startsWith(resource.prefix) && name.endsWith('.b64'))
    .sort();
  if (!parts.length) throw new Error(`No base64 parts found for ${resource.out}`);
  const encoded = parts.map((name) => fs.readFileSync(path.join(sourceDir, name), 'utf8').trim()).join('');
  const pdf = Buffer.from(encoded, 'base64');
  if (pdf.subarray(0, 5).toString('ascii') !== '%PDF-' || pdf.length < resource.minBytes) {
    throw new Error(`Materialized ${resource.out} failed PDF header/size validation`);
  }
  fs.writeFileSync(path.join(outDir, resource.out), pdf);
  console.log(`Materialized ${resource.out} (${pdf.length} bytes)`);
}
