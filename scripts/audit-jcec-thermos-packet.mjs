import fs from 'node:fs';

const checks = [];
const failures = [];
const root = process.cwd();

function read(path) {
  const full = `${root}/${path}`;
  if (!fs.existsSync(full)) {
    failures.push(`missing: ${path}`);
    return '';
  }
  return fs.readFileSync(full, 'utf8');
}

function requireFile(path, label = path) {
  const full = `${root}/${path}`;
  const ok = fs.existsSync(full);
  checks.push(`${ok ? '✓' : '✗'} exists: ${label}`);
  if (!ok) failures.push(`missing: ${path}`);
}

function requireText(source, needle, label) {
  const ok = source.includes(needle);
  checks.push(`${ok ? '✓' : '✗'} ${label}`);
  if (!ok) failures.push(`${label} (missing: ${needle})`);
}

const packetPath = 'public/resources/jcec/JCEC_Thermos_Challenge_Printable_Packet.pdf';
const componentPath = 'src/components/JcecThermosPacketLink.astro';
const layoutPath = 'src/layouts/BaseLayout.astro';
const missionPath = 'src/pages/courses/grade-7-science/jabberwocky/phase-3/mission-3/index.astro';
const teacherPath = 'src/pages/courses/grade-7-science/jabberwocky/phase-3/teacher-launch-guide/index.astro';

requireFile(packetPath, '7-page JCEC Thermos Challenge PDF');
requireFile(componentPath, 'Thermos packet download component');
requireFile(layoutPath, 'BaseLayout integration point');
requireFile(missionPath, 'Phase 3 Mission 3');
requireFile(teacherPath, 'Phase 3 Teacher Launch Guide');

if (fs.existsSync(`${root}/${packetPath}`)) {
  const pdf = fs.readFileSync(`${root}/${packetPath}`);
  const header = pdf.subarray(0, 5).toString('ascii');
  const valid = header === '%PDF-' && pdf.length > 10000;
  checks.push(`${valid ? '✓' : '✗'} thermos packet is a non-trivial PDF resource`);
  if (!valid) failures.push('thermos packet PDF header/size check failed');
}

const component = read(componentPath);
const layout = read(layoutPath);
const mission = read(missionPath);
const teacher = read(teacherPath);

requireText(layout, "import JcecThermosPacketLink", 'BaseLayout imports thermos packet resource component');
requireText(layout, '<JcecThermosPacketLink />', 'BaseLayout renders thermos packet resource component');
requireText(component, '/phase-3/mission-3/', 'resource appears on Phase 3 Mission 3 only when appropriate');
requireText(component, '/phase-3/teacher-launch-guide/', 'resource appears on Phase 3 Teacher Launch Guide');
requireText(component, 'JCEC_Thermos_Challenge_Printable_Packet.pdf', 'resource points to permanent thermos packet PDF');
requireText(component, 'Download / Print the JCEC Thermos Challenge Packet', 'student-facing download/print label is present');
requireText(component, 'Student Investigation Packet — 7 pages', 'teacher-facing 7-page packet label is present');

for (const [needle, label] of [
  ['200 mL', 'Mission 3 uses the standardized 200 mL test volume'],
  ['5, 10, 15, 20, 25 and 30 minutes', 'Mission 3 uses the approved 0–30 minute five-minute schedule'],
  ['CONDUCTION', 'Mission 3 explicitly includes conduction'],
  ['CONVECTION', 'Mission 3 explicitly includes convection'],
  ['RADIATION', 'Mission 3 explicitly includes radiation'],
  ['INSULATION', 'Mission 3 explicitly includes insulation'],
  ['TIME–TEMPERATURE GRAPH', 'Mission 3 explicitly includes time-temperature graphing'],
  ['REDESIGN', 'Mission 3 explicitly includes evidence-based redesign'],
  ['Final Test + Compare', 'Mission 3 explicitly includes the Final Test'],
  ['same core procedure', 'Mission 3 explicitly preserves fair/comparable testing'],
  ['JCEC Thermos Design Report', 'Mission 3 ends with the approved Team Record'],
  ['Which part of your thermos design did the most', 'Mission 3 includes the approved individual reflection'],
  ['HOT-WATER SAFETY', 'Mission 3 makes hot-water safety explicit'],
  ['Four to six shared thermometers', 'Mission 3 supports shared thermometers'],
  ['NO USABLE THERMOMETERS', 'Mission 3 includes a no-thermometer data fallback']
]) requireText(mission, needle, label);

for (const [needle, label] of [
  ['Mission 3 — The Director Is Coming', 'teacher guide uses the approved Mission 3 title'],
  ['JCEC Thermos Design Report', 'teacher guide uses the approved Mission 3 checkpoint record'],
  ['Prototype Test', 'teacher guide includes the Prototype Test'],
  ['Evidence → Redesign', 'teacher guide includes evidence-based redesign'],
  ['Final Test + JCEC Decision', 'teacher guide includes the Final Test and decision'],
  ['4–6 shared thermometers', 'teacher guide includes the shared-thermometer plan'],
  ['No-purchase fallback', 'teacher guide preserves the no-purchase fallback']
]) requireText(teacher, needle, label);

console.log('\nJCEC Thermos Challenge packet integration audit');
for (const check of checks) console.log(`  ${check}`);

if (failures.length) {
  console.error(`\nThermos packet integration audit failed (${failures.length} issue${failures.length === 1 ? '' : 's'}):`);
  for (const failure of failures) console.error(`  - ${failure}`);
  process.exit(1);
}

console.log(`\nJCEC Thermos Challenge packet integration audit: ${checks.length} checks passed.`);
console.log('The permanent 7-page packet is linked from Mission 3 and the Phase 3 Teacher Launch Guide without changing the approved Mission 3 science or pacing.');
