import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, normalize, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const dist = join(root, 'dist');
const base = '/Mr.-John-s-Learning-Hub/';
const lessonSections = ['overview', 'big-ideas', 'understand', 'examples', 'vocabulary', 'explore', 'practise', 'check', 'apply', 'review'];
const units = {
  'positive-negative-numbers': [
    'understanding-positive-negative', 'what-are-integers-add', 'adding-integers',
    'subtracting-integers-models', 'subtracting-integers'
  ],
  'coordinates-design': [
    'describing-location-cartesian-plane', 'translating-shapes', 'reflecting-shapes',
    'rotating-shapes', 'congruence-symmetry', 'tessellations'
  ],
  'number-operations': [
    'prime-factorization-divisibility', 'expressing-powers', 'operations-parentheses-powers'
  ],
  'decimals-fractions': [
    'adding-subtracting-fractions', 'multiplying-fractions', 'fractions-equal-shares',
    'adding-subtracting-decimals', 'multiplying-decimals', 'dividing-decimals'
  ]
};

const failures = [];
const checks = [];
const pass = (message) => checks.push(message);
const fail = (message) => failures.push(message);
const routeFile = (route) => join(dist, route, 'index.html');
const visibleText = (html) => html
  .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&amp;/g, '&')
  .replace(/\s+/g, ' ')
  .trim();

if (!existsSync(dist)) fail('dist/ is missing; run the build first.');

for (const [unit, lessons] of Object.entries(units)) {
  const unitRoute = `courses/grade-6-math/${unit}`;
  const reviewRoute = `${unitRoute}/unit-review`;
  for (const route of [unitRoute, reviewRoute, ...lessons.map((lesson) => `${unitRoute}/${lesson}`)]) {
    if (!existsSync(routeFile(route))) fail(`Missing expected route: /${route}/`);
  }

  const landingHtml = readFileSync(routeFile(unitRoute), 'utf8');
  for (const destination of [...lessons, 'unit-review']) {
    const expectedHref = `${base}${unitRoute}/${destination}/`;
    if (!landingHtml.includes(`href="${expectedHref}"`)) {
      fail(`/${unitRoute}/ does not link to ${destination}.`);
    }
  }

  for (const [lessonIndex, lesson] of lessons.entries()) {
    const route = `${unitRoute}/${lesson}`;
    const html = readFileSync(routeFile(route), 'utf8');
    for (const section of lessonSections) {
      if (!new RegExp(`id=["']${section}["']`).test(html)) fail(`/${route}/ is missing #${section}.`);
    }
    const text = visibleText(html);
    if (!text.includes('PRACTISE WITH SUPPORT')) fail(`/${route}/ is missing supported Practice.`);
    if (!text.includes('CHECK YOURSELF')) fail(`/${route}/ is missing Check Yourself.`);
    if (!/New set/i.test(text)) fail(`/${route}/ is missing the independent New set control.`);
    if (/\bprototype\b|\bcoming soon\b|\bplanned\b|next build/i.test(text)) {
      fail(`/${route}/ exposes development-stage language.`);
    }
    const nextDestination = lessons[lessonIndex + 1] ?? 'unit-review';
    const nextHref = `${base}${unitRoute}/${nextDestination}/`;
    const nextStep = html.slice(html.indexOf('class="next-step"'));
    if (!nextStep.includes(`href="${nextHref}"`)) {
      fail(`/${route}/ does not continue to ${nextDestination}.`);
    }
  }

  const reviewText = visibleText(readFileSync(routeFile(reviewRoute), 'utf8'));
  if (!/Unit Check/i.test(reviewText)) fail(`/${reviewRoute}/ is missing Unit Check.`);
  if (!/Math Arcade/i.test(reviewText)) fail(`/${reviewRoute}/ is missing Math Arcade.`);
}

const htmlFiles = Object.entries(units).flatMap(([unit, lessons]) => {
  const unitRoute = `courses/grade-6-math/${unit}`;
  return [unitRoute, `${unitRoute}/unit-review`, ...lessons.map((lesson) => `${unitRoute}/${lesson}`)];
});

for (const route of htmlFiles) {
  const file = routeFile(route);
  const html = readFileSync(file, 'utf8');
  const ids = new Set([...html.matchAll(/\sid=["']([^"']+)["']/g)].map((match) => match[1]));
  const hrefs = [...html.matchAll(/\shref=["']([^"']+)["']/g)].map((match) => match[1]);
  for (const href of hrefs) {
    if (href.startsWith('#')) {
      if (!ids.has(href.slice(1))) fail(`/${route}/ has a broken section link: ${href}`);
      continue;
    }
    if (/^(https?:|mailto:|tel:)/.test(href)) continue;
    const cleanHref = href.split('#')[0].split('?')[0];
    if (!cleanHref || /\.[a-z0-9]+$/i.test(cleanHref)) continue;
    let target;
    if (cleanHref.startsWith(base)) target = cleanHref.slice(base.length);
    else if (cleanHref.startsWith('/')) continue;
    else target = normalize(join(dirname(route), cleanHref));
    if (!existsSync(routeFile(target.replace(/\/$/, '')))) {
      fail(`/${route}/ links to missing internal route: ${href}`);
    }
  }
}

const css = readFileSync(join(root, 'src/styles/global.css'), 'utf8');
for (const safeguard of [
  '@media (max-width:900px)',
  '.topic-shell{grid-template-columns:1fr}',
  '.topic-sidebar nav{display:flex;overflow:auto',
  '@media (max-width:680px)',
  '.concept-grid,.choice-list,.challenge-card,.review-grid{grid-template-columns:1fr}'
]) {
  if (!css.includes(safeguard)) fail(`Missing mobile safeguard in global.css: ${safeguard}`);
}

if (!failures.length) {
  pass(`${htmlFiles.length} Unit 1–4 landing, lesson, and review pages audited.`);
  pass(`${Object.values(units).flat().length} lessons contain all 10 lesson sections.`);
  pass('Internal route links and lesson section anchors resolve.');
  pass('Unit landing pages and lesson-to-lesson navigation cover each complete sequence.');
  pass('Practice, Check Yourself, Unit Check, and Math Arcade markers are present.');
  pass('No development-stage language is exposed on ready lesson pages.');
  pass('Core tablet and phone layout safeguards are present.');
  console.log(`Grade 6 regression audit passed (${checks.length} groups):`);
  for (const check of checks) console.log(`  ✓ ${check}`);
} else {
  console.error(`Grade 6 regression audit failed (${failures.length} issue${failures.length === 1 ? '' : 's'}):`);
  for (const failure of failures) console.error(`  ✗ ${failure}`);
  process.exitCode = 1;
}
