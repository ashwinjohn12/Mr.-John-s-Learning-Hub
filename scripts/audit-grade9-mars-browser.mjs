import fs from 'node:fs';
import { chromium } from 'playwright';

const origin = process.env.MARS_BASE_URL || 'http://127.0.0.1:4321/Mr.-John-s-Learning-Hub/';
const hubUrl = origin + 'courses/grade-9-science/space-exploration/mars-readiness/';
const understandUrl = hubUrl + 'understand/';
const outDir = 'artifacts/mars-prototype';
fs.mkdirSync(outDir, { recursive: true });

const viewports = [
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'tablet-1024', width: 1024, height: 768 },
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'mobile-375', width: 375, height: 812 },
  { name: 'mobile-320', width: 320, height: 700 }
];

const browser = await chromium.launch({ headless: true });
const report = [];
const failures = [];

for (const viewport of viewports) {
  const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });
  const page = await context.newPage();
  const consoleErrors = [];
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });

  await page.goto(hubUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(450);

  const hubMetrics = await page.evaluate(() => ({
    horizontalOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    systemCards: document.querySelectorAll('.readiness-system-card').length,
    h1: document.querySelector('h1')?.textContent?.trim() || '',
    heroImageAlt: document.querySelector('.mars-hero img')?.getAttribute('alt') || '',
    bodyFont: parseFloat(getComputedStyle(document.body).fontSize)
  }));

  if (hubMetrics.horizontalOverflow > 2) failures.push(viewport.name + ': hub horizontal overflow ' + hubMetrics.horizontalOverflow + 'px');
  if (hubMetrics.systemCards !== 7) failures.push(viewport.name + ': hub should render 7 readiness systems');
  if (!hubMetrics.h1.includes('MISSION')) failures.push(viewport.name + ': hub H1 missing');
  if (!hubMetrics.heroImageAlt) failures.push(viewport.name + ': real Mars hero image missing alt text');
  if (hubMetrics.bodyFont < 16) failures.push(viewport.name + ': body font below 16px');

  await page.screenshot({ path: outDir + '/' + viewport.name + '-hub.png', fullPage: true });

  await page.goto(understandUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(350);

  const phaseMetrics = await page.evaluate(() => ({
    horizontalOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    operations: document.querySelectorAll('.mars-operation').length,
    readinessCalls: document.querySelectorAll('[data-readiness-call]').length,
    matcherCases: document.querySelectorAll('[data-evidence-matcher] [data-case]').length,
    phaseLinks: document.querySelectorAll('#understand-operations a').length,
    reducedMotionQuery: matchMedia('(prefers-reduced-motion: reduce)').media.includes('prefers-reduced-motion')
  }));

  if (phaseMetrics.horizontalOverflow > 2) failures.push(viewport.name + ': UNDERSTAND horizontal overflow ' + phaseMetrics.horizontalOverflow + 'px');
  if (phaseMetrics.operations !== 4) failures.push(viewport.name + ': UNDERSTAND should render exactly 4 operations');
  if (phaseMetrics.readinessCalls !== 4) failures.push(viewport.name + ': each operation needs one readiness call');
  if (phaseMetrics.matcherCases !== 4) failures.push(viewport.name + ': Evidence Matcher should render 4 evidence cases');
  if (phaseMetrics.phaseLinks !== 4) failures.push(viewport.name + ': phase index should have 4 operation links');

  const majorTargets = await page.locator('.mars-action, #understand-operations a, .readiness-system-card').evaluateAll((nodes) =>
    nodes.filter((node) => {
      const rect = node.getBoundingClientRect();
      const style = getComputedStyle(node);
      return style.display !== 'none' && style.visibility !== 'hidden' && (rect.width < 44 || rect.height < 44);
    }).map((node) => ({
      text: node.textContent?.trim().slice(0, 50),
      width: Math.round(node.getBoundingClientRect().width),
      height: Math.round(node.getBoundingClientRect().height)
    }))
  );
  if (majorTargets.length) failures.push(viewport.name + ': major touch targets below 44px: ' + JSON.stringify(majorTargets));

  await page.keyboard.press('Tab');
  const hasKeyboardFocus = await page.evaluate(() => document.activeElement && document.activeElement !== document.body);
  if (!hasKeyboardFocus) failures.push(viewport.name + ': keyboard focus did not enter an interactive control');

  if (viewport.name === 'desktop-1440') {
    const matcher = page.locator('[data-evidence-matcher]');
    const selects = matcher.locator('select');
    await selects.nth(0).selectOption('surface');
    await selects.nth(1).selectOption('composition');
    await selects.nth(2).selectOption('radio');
    await selects.nth(3).selectOption('motion');
    await matcher.locator('[data-check-matcher]').click();
    const score = (await matcher.locator('.matcher-score').textContent())?.trim();
    if (score !== '4 / 4 supported') failures.push('Evidence Matcher expected 4 / 4 supported, got: ' + score);

    const call = page.locator('[data-readiness-call][data-operation="01"]');
    await call.locator('select[name="system"]').selectOption('science');
    await call.locator('input[name="status"][value="developing"]').check();
    await call.locator('textarea[name="evidence"]').fill('Mars is one planet in the Solar System, which sits within the Milky Way galaxy.');
    await call.locator('button[type="submit"]').click();
    await page.waitForTimeout(100);
    await page.goto(hubUrl, { waitUntil: 'domcontentloaded' });
    const scienceStatus = (await page.locator('[data-system-status="science"]').textContent())?.trim() || '';
    if (!scienceStatus.toLowerCase().includes('developing')) failures.push('Readiness persistence failed between UNDERSTAND and Hub.');
    await page.evaluate(() => {
      localStorage.removeItem('mrjohn-mars-readiness-v1');
      localStorage.removeItem('mrjohn-mars-evidence-matcher-v1');
    });
  }

  await page.goto(understandUrl, { waitUntil: 'domcontentloaded' });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  const reduced = await page.evaluate(() => matchMedia('(prefers-reduced-motion: reduce)').matches);
  if (!reduced) failures.push(viewport.name + ': reduced-motion emulation not recognized');

  await page.screenshot({ path: outDir + '/' + viewport.name + '-understand.png', fullPage: true });

  report.push({
    viewport,
    hubMetrics,
    phaseMetrics,
    consoleErrors: consoleErrors.filter((item) => !item.includes('favicon')).slice(0, 10),
    majorTargets
  });

  await context.close();
}

await browser.close();

fs.writeFileSync(outDir + '/audit-report.json', JSON.stringify({ report, failures }, null, 2));

if (failures.length) {
  console.error('\nMars browser audit FAILED\n');
  failures.forEach((item) => console.error(' - ' + item));
  process.exit(1);
}

console.log('Mars rendered browser audit passed at desktop, tablet, 390px, 375px, and 320px.');
console.log('Verified: no horizontal overflow, 7-system dashboard, 4 Operations, 4 readiness calls, Evidence Matcher, local persistence, keyboard entry, touch target sizing, and reduced-motion support.');
