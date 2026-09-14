import fs from 'node:fs';
import path from 'node:path';

const target = path.resolve(
  process.cwd(),
  'dist/courses/grade-7-science/jabberwocky/phase-5/mission-5/index.html'
);

const councilHref = '../../council/';
const councilLabel = 'Begin Final Council → Mission 2190 Council';
const councilAnchor = `<a class="phase5-next-mission-link" href="${councilHref}">${councilLabel}</a>`;

if (!fs.existsSync(target)) {
  throw new Error(`Phase 5 Mission 5 build output is missing: ${target}`);
}

let html = fs.readFileSync(target, 'utf8');

const countCouncilLinks = (source) =>
  (source.match(/class="phase5-next-mission-link"/g) || []).length;

if (countCouncilLinks(html) === 0) {
  const finishedBox = /(<div class="finished-box"[^>]*>[^]*?Phase 5 is finished when:[^]*?)(<\/div>)/;
  const match = html.match(finishedBox);

  if (!match) {
    throw new Error('Could not find the Phase 5 Mission 5 completion box in the generated page.');
  }

  html = html.replace(finishedBox, `$1${councilAnchor}$2`);
  fs.writeFileSync(target, html);
}

const finalHtml = fs.readFileSync(target, 'utf8');
const linkCount = countCouncilLinks(finalHtml);

if (linkCount !== 1) {
  throw new Error(`Expected exactly one Phase 5 → Council completion link, found ${linkCount}.`);
}

if (!finalHtml.includes(`href="${councilHref}"`) || !finalHtml.includes(councilLabel)) {
  throw new Error('The generated Phase 5 → Council completion link is incomplete or points to the wrong route.');
}

console.log('Verified generated Phase 5 Mission 5 → Mission 2190 Council transition.');
