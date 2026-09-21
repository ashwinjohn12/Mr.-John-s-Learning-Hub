import fs from 'node:fs';
import { chromium } from 'playwright';

const origin = process.env.MARS_BASE_URL || 'http://127.0.0.1:4321/Mr.-John-s-Learning-Hub/';
const hubUrl = origin + 'courses/grade-9-science/space-exploration/mars-readiness/';
const understandUrl = hubUrl + 'understand/';
const travelUrl = hubUrl + 'travel/';
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

function meaningfulConsoleErrors(errors) {
  return errors.filter((item) => !item.includes('favicon') && !item.includes('Failed to load resource: net::ERR_BLOCKED_BY_CLIENT'));
}

async function horizontalOverflow(page) {
  return page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
}

async function undersizedTargets(page, selector) {
  return page.locator(selector).evaluateAll((nodes) =>
    nodes.filter((node) => {
      const rect = node.getBoundingClientRect();
      const style = getComputedStyle(node);
      return style.display !== 'none' && style.visibility !== 'hidden' && (rect.width < 44 || rect.height < 44);
    }).map((node) => ({
      text: node.textContent?.trim().slice(0, 60),
      width: Math.round(node.getBoundingClientRect().width),
      height: Math.round(node.getBoundingClientRect().height)
    }))
  );
}

for (const viewport of viewports) {
  const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });
  const page = await context.newPage();
  const consoleErrors = [];
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });

  await page.goto(hubUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(350);

  const hubMetrics = await page.evaluate(() => ({
    systemCards: document.querySelectorAll('.readiness-system-card').length,
    h1: document.querySelector('h1')?.textContent?.trim() || '',
    heroImageAlt: document.querySelector('.mars-hero img')?.getAttribute('alt') || '',
    bodyFont: parseFloat(getComputedStyle(document.body).fontSize),
    travelLinks: document.querySelectorAll('a[href$="/mars-readiness/travel/"]').length
  }));
  hubMetrics.horizontalOverflow = await horizontalOverflow(page);

  if (hubMetrics.horizontalOverflow > 2) failures.push(viewport.name + ': hub horizontal overflow ' + hubMetrics.horizontalOverflow + 'px');
  if (hubMetrics.systemCards !== 7) failures.push(viewport.name + ': hub should render 7 readiness systems');
  if (!hubMetrics.h1.includes('MISSION')) failures.push(viewport.name + ': hub H1 missing');
  if (!hubMetrics.heroImageAlt) failures.push(viewport.name + ': real Mars hero image missing alt text');
  if (hubMetrics.bodyFont < 16) failures.push(viewport.name + ': body font below 16px');
  if (hubMetrics.travelLinks < 1) failures.push(viewport.name + ': TRAVEL is not reachable from the Hub');

  const hubTargets = await undersizedTargets(page, '.mars-action, .mars-phase-nav a, .phase-index a, .readiness-system-card');
  if (hubTargets.length) failures.push(viewport.name + ': undersized Hub touch targets: ' + JSON.stringify(hubTargets));
  await page.screenshot({ path: outDir + '/' + viewport.name + '-hub.png', fullPage: true });

  await page.goto(understandUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(250);

  const understandMetrics = await page.evaluate(() => ({
    operations: document.querySelectorAll('.mars-operation').length,
    readinessCalls: document.querySelectorAll('[data-readiness-call]').length,
    matcherCases: document.querySelectorAll('[data-evidence-matcher] [data-case]').length,
    phaseLinks: document.querySelectorAll('#understand-operations a').length,
    compactDashboardButtons: document.querySelectorAll('.mars-readiness-dashboard.compact button.readiness-system-card').length,
    travelNavLinks: document.querySelectorAll('.mars-phase-nav a[href$="/travel/"]').length,
    h1: document.querySelector('.phase-intro h1')?.textContent?.trim() || ''
  }));
  understandMetrics.horizontalOverflow = await horizontalOverflow(page);

  if (understandMetrics.horizontalOverflow > 2) failures.push(viewport.name + ': UNDERSTAND horizontal overflow ' + understandMetrics.horizontalOverflow + 'px');
  if (understandMetrics.operations !== 4) failures.push(viewport.name + ': UNDERSTAND should still render exactly 4 Operations');
  if (understandMetrics.readinessCalls !== 4) failures.push(viewport.name + ': UNDERSTAND should still render 4 readiness calls');
  if (understandMetrics.matcherCases !== 4) failures.push(viewport.name + ': Evidence Matcher regression: expected 4 cases');
  if (understandMetrics.phaseLinks !== 4) failures.push(viewport.name + ': UNDERSTAND phase index should still have 4 links');
  if (understandMetrics.compactDashboardButtons !== 0) failures.push(viewport.name + ': UNDERSTAND compact dashboard exposed fake controls');
  if (understandMetrics.travelNavLinks !== 1) failures.push(viewport.name + ': intentional shared nav update should expose exactly one TRAVEL link');
  if (understandMetrics.h1 !== 'What do we know—and how do we know it?') failures.push(viewport.name + ': UNDERSTAND heading changed unexpectedly');

  const underTargets = await undersizedTargets(page, '.mars-action, #understand-operations a, .mars-phase-nav a');
  if (underTargets.length) failures.push(viewport.name + ': undersized UNDERSTAND touch targets: ' + JSON.stringify(underTargets));
  await page.screenshot({ path: outDir + '/' + viewport.name + '-understand.png', fullPage: true });

  await page.goto(travelUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(300);

  const travelMetrics = await page.evaluate(() => ({
    operations: document.querySelectorAll('.mars-operation').length,
    readinessCalls: document.querySelectorAll('[data-readiness-call]').length,
    phaseLinks: document.querySelectorAll('#travel-operations a').length,
    orbitModels: document.querySelectorAll('[data-orbit-model]').length,
    positionLabs: document.querySelectorAll('[data-position-lab]').length,
    transportTools: document.querySelectorAll('[data-transport-tradeoff]').length,
    compactDashboardButtons: document.querySelectorAll('.mars-readiness-dashboard.compact button.readiness-system-card').length,
    h1: document.querySelector('.phase-intro h1')?.textContent?.trim() || '',
    screensDown: document.body.textContent.includes('SCREENS DOWN // BUILD + TEST'),
    digitalLandingSimulator: /landing simulator|digital lander|drag-and-drop lander/i.test(document.body.textContent)
  }));
  travelMetrics.horizontalOverflow = await horizontalOverflow(page);

  if (travelMetrics.horizontalOverflow > 2) failures.push(viewport.name + ': TRAVEL horizontal overflow ' + travelMetrics.horizontalOverflow + 'px');
  if (travelMetrics.operations !== 4) failures.push(viewport.name + ': TRAVEL should render exactly 4 Operations');
  if (travelMetrics.readinessCalls !== 4) failures.push(viewport.name + ': TRAVEL should render exactly 4 readiness calls');
  if (travelMetrics.phaseLinks !== 4) failures.push(viewport.name + ': TRAVEL phase index should have 4 links');
  if (travelMetrics.orbitModels !== 1 || travelMetrics.positionLabs !== 1 || travelMetrics.transportTools !== 1) {
    failures.push(viewport.name + ': TRAVEL should contain exactly the 3 approved digital interactions');
  }
  if (travelMetrics.compactDashboardButtons !== 0) failures.push(viewport.name + ': TRAVEL compact dashboard exposed fake controls');
  if (travelMetrics.h1 !== 'Can we actually get there?') failures.push(viewport.name + ': TRAVEL phase heading missing');
  if (!travelMetrics.screensDown) failures.push(viewport.name + ': Operation 08 physical-build handoff missing');
  if (travelMetrics.digitalLandingSimulator) failures.push(viewport.name + ': Operation 08 contains prohibited digital landing simulator language');

  const travelTargets = await undersizedTargets(page,
    '.mars-action, #travel-operations a, .mars-phase-nav a, .transport-priorities select, .transport-choice label, .tradeoff-prompts input'
  );
  if (travelTargets.length) failures.push(viewport.name + ': undersized TRAVEL touch targets: ' + JSON.stringify(travelTargets));

  await page.keyboard.press('Tab');
  const hasKeyboardFocus = await page.evaluate(() => document.activeElement && document.activeElement !== document.body);
  if (!hasKeyboardFocus) failures.push(viewport.name + ': keyboard focus did not enter a TRAVEL control');

  if (viewport.name === 'desktop-1440') {
    const orbit = page.locator('[data-orbit-model]');
    await orbit.locator('[data-mission-day]').fill('180');
    await orbit.locator('[data-prediction-angle]').fill('150');
    await orbit.locator('[data-check-orbit]').click();
    if (!(await orbit.locator('[data-mars-future-marker]').isVisible())) failures.push('Orbit model did not reveal future Mars position.');
    const orbitFeedback = (await orbit.locator('[data-orbit-feedback]').textContent()) || '';
    if (!/model position|Mars moved/i.test(orbitFeedback)) failures.push('Orbit model feedback did not explain moving-target reasoning.');

    const position = page.locator('[data-position-lab]');
    await position.locator('[data-view="B"]').click();
    await position.locator('[data-parallax-distance]').fill('3');
    await position.locator('[data-azimuth]').fill('120');
    await position.locator('[data-altitude]').fill('35');
    await position.locator('[data-check-position]').click();
    const positionFeedback = (await position.locator('[data-position-feedback]').textContent()) || '';
    if (!positionFeedback.includes('Position acquired')) failures.push('Angular-position activity did not accept the correct coordinates.');

    const transport = page.locator('[data-transport-tradeoff]');
    await transport.locator('[data-priority="Crew safety"]').selectOption('Critical');
    await transport.locator('input[name="transport-choice"][value="All-chemical"]').check();
    await transport.locator('[data-strength]').fill('High thrust and extensive chemical propulsion mission heritage.');
    await transport.locator('[data-concern]').fill('A human-scale Mars architecture still requires major propellant and system decisions.');
    await transport.locator('[data-save-transport]').click();
    const transportFeedback = (await transport.locator('[data-transport-feedback]').textContent()) || '';
    if (!/saved on this device/i.test(transportFeedback)) failures.push('Transport trade-off review did not save.');
    const transportText = (await transport.textContent()) || '';
    if (/best option is|winner is|recommended option is|you should choose/i.test(transportText)) failures.push('Transport tool declared an automatic winner.');

    const saveReadiness = async (operation, system, status, evidence) => {
      const call = page.locator('[data-readiness-call][data-operation="' + operation + '"]');
      await call.locator('select[name="system"]').selectOption(system);
      await call.locator('input[name="status"][value="' + status + '"]').check();
      await call.locator('textarea[name="evidence"]').fill(evidence);
      await call.locator('button[type="submit"]').click();
    };

    await saveReadiness('05','navigation','developing','Mars moves during the trip, so mission planners must predict its future position.');
    await saveReadiness('06','navigation','demonstrated','Angular position, parallax, Doppler, ranging, and tracking provide different navigation evidence.');
    await saveReadiness('07','transportation','developing','NASA is still comparing propulsion approaches with different speed, resource, and maturity trade-offs.');
    await saveReadiness('08','landing','challenge','Robotic precision landing is demonstrated, but human-scale Mars landing remains an open engineering challenge.');

    const savedState = await page.evaluate(() => JSON.parse(localStorage.getItem('mrjohn-mars-readiness-v1') || '{}'));
    for (const op of ['05','06','07','08']) {
      if (!savedState.operations?.[op]) failures.push('Readiness persistence missing Operation ' + op);
    }

    await page.goto(hubUrl, { waitUntil: 'domcontentloaded' });
    const navStatus = ((await page.locator('[data-system-status="navigation"]').textContent()) || '').trim();
    const transportStatus = ((await page.locator('[data-system-status="transportation"]').textContent()) || '').trim();
    const landingStatus = ((await page.locator('[data-system-status="landing"]').textContent()) || '').trim();
    if (!navStatus.toLowerCase().includes('demonstrated')) failures.push('Latest Navigation readiness status did not persist to Hub.');
    if (!transportStatus.toLowerCase().includes('developing')) failures.push('Transportation readiness status did not persist to Hub.');
    if (!landingStatus.toLowerCase().includes('major challenge')) failures.push('Landing readiness status did not persist to Hub.');

    await page.locator('.readiness-system-card[data-system="navigation"]').click();
    const navigationEvidenceCount = await page.locator('#mars-system-detail .evidence-history li').count();
    if (navigationEvidenceCount !== 2) failures.push('Navigation dashboard should accumulate evidence from Operations 05 and 06; found ' + navigationEvidenceCount);

    await page.goto(understandUrl, { waitUntil: 'domcontentloaded' });
    const matcher = page.locator('[data-evidence-matcher]');
    const selects = matcher.locator('select');
    await selects.nth(0).selectOption('surface');
    await selects.nth(1).selectOption('composition');
    await selects.nth(2).selectOption('radio');
    await selects.nth(3).selectOption('motion');
    await matcher.locator('[data-check-matcher]').click();
    const score = ((await matcher.locator('.matcher-score').textContent()) || '').trim();
    if (score !== '4 / 4 supported') failures.push('UNDERSTAND Evidence Matcher regression: expected 4 / 4 supported, got ' + score);

    await page.evaluate(() => {
      for (const key of [
        'mrjohn-mars-readiness-v1',
        'mrjohn-mars-evidence-matcher-v1',
        'mrjohn-mars-orbit-model-v1',
        'mrjohn-mars-position-lab-v1',
        'mrjohn-mars-transport-tradeoff-v1'
      ]) localStorage.removeItem(key);
    });
  }

  await page.goto(travelUrl, { waitUntil: 'domcontentloaded' });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  const reduced = await page.evaluate(() => matchMedia('(prefers-reduced-motion: reduce)').matches);
  if (!reduced) failures.push(viewport.name + ': reduced-motion emulation not recognized');

  await page.screenshot({ path: outDir + '/' + viewport.name + '-travel.png', fullPage: true });

  const errors = meaningfulConsoleErrors(consoleErrors);
  if (errors.length) failures.push(viewport.name + ': console errors detected: ' + JSON.stringify(errors.slice(0, 5)));

  report.push({ viewport, hubMetrics, understandMetrics, travelMetrics, consoleErrors: errors, hubTargets, underTargets, travelTargets });
  await context.close();
}

await browser.close();
fs.writeFileSync(outDir + '/audit-report.json', JSON.stringify({ report, failures }, null, 2));

if (failures.length) {
  console.error('\nMars rendered browser audit FAILED\n');
  failures.forEach((item) => console.error(' - ' + item));
  process.exit(1);
}

console.log('Mars rendered browser audit passed at desktop, tablet, 390px, 375px, and 320px.');
console.log('Verified Hub + locked UNDERSTAND + TRAVEL: no horizontal overflow, 7-system dashboard, 8 total Operations across two phases, exactly 3 TRAVEL widgets, physical landing handoff, local evidence accumulation, keyboard entry, touch target sizing, reduced motion, and no console errors.');
