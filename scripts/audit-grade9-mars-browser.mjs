import fs from 'node:fs';
import { chromium } from 'playwright';

const origin = process.env.MARS_BASE_URL || 'http://127.0.0.1:4321/Mr.-John-s-Learning-Hub/';
const hubUrl = origin + 'courses/grade-9-science/space-exploration/mars-readiness/';
const understandUrl = hubUrl + 'understand/';
const travelUrl = hubUrl + 'travel/';
const surviveUrl = hubUrl + 'survive/';
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
  await page.waitForTimeout(300);
  const hubMetrics = await page.evaluate(() => ({
    systemCards: document.querySelectorAll('.readiness-system-card').length,
    h1: document.querySelector('h1')?.textContent?.trim() || '',
    heroImageAlt: document.querySelector('.mars-hero img')?.getAttribute('alt') || '',
    bodyFont: parseFloat(getComputedStyle(document.body).fontSize),
    travelLinks: document.querySelectorAll('a[href$="/mars-readiness/travel/"]').length,
    surviveLinks: document.querySelectorAll('a[href$="/mars-readiness/survive/"]').length
  }));
  hubMetrics.horizontalOverflow = await horizontalOverflow(page);

  if (hubMetrics.horizontalOverflow > 2) failures.push(viewport.name + ': hub horizontal overflow ' + hubMetrics.horizontalOverflow + 'px');
  if (hubMetrics.systemCards !== 7) failures.push(viewport.name + ': hub should render 7 readiness systems');
  if (!hubMetrics.h1.includes('MISSION')) failures.push(viewport.name + ': hub H1 missing');
  if (!hubMetrics.heroImageAlt) failures.push(viewport.name + ': real Mars hero image missing alt text');
  if (hubMetrics.bodyFont < 16) failures.push(viewport.name + ': body font below 16px');
  if (hubMetrics.travelLinks < 1 || hubMetrics.surviveLinks < 1) failures.push(viewport.name + ': completed phases are not reachable from Hub');

  const hubTargets = await undersizedTargets(page, '.mars-action, .mars-phase-nav a, .phase-index a, .readiness-system-card');
  if (hubTargets.length) failures.push(viewport.name + ': undersized Hub touch targets: ' + JSON.stringify(hubTargets));
  await page.screenshot({ path: outDir + '/' + viewport.name + '-hub.png', fullPage: true });

  await page.goto(understandUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(200);
  const understandMetrics = await page.evaluate(() => ({
    operations: document.querySelectorAll('.mars-operation').length,
    readinessCalls: document.querySelectorAll('[data-readiness-call]').length,
    matcherCases: document.querySelectorAll('[data-evidence-matcher] [data-case]').length,
    phaseLinks: document.querySelectorAll('#understand-operations a').length,
    compactDashboardButtons: document.querySelectorAll('.mars-readiness-dashboard.compact button.readiness-system-card').length,
    travelNavLinks: document.querySelectorAll('.mars-phase-nav a[href$="/travel/"]').length,
    surviveNavLinks: document.querySelectorAll('.mars-phase-nav a[href$="/survive/"]').length,
    h1: document.querySelector('.phase-intro h1')?.textContent?.trim() || ''
  }));
  understandMetrics.horizontalOverflow = await horizontalOverflow(page);

  if (understandMetrics.horizontalOverflow > 2) failures.push(viewport.name + ': UNDERSTAND horizontal overflow ' + understandMetrics.horizontalOverflow + 'px');
  if (understandMetrics.operations !== 4 || understandMetrics.readinessCalls !== 4 || understandMetrics.matcherCases !== 4 || understandMetrics.phaseLinks !== 4) {
    failures.push(viewport.name + ': locked UNDERSTAND structure regressed');
  }
  if (understandMetrics.compactDashboardButtons !== 0) failures.push(viewport.name + ': UNDERSTAND compact dashboard exposed fake controls');
  if (understandMetrics.travelNavLinks !== 1 || understandMetrics.surviveNavLinks !== 1) failures.push(viewport.name + ': shared navigation should expose TRAVEL and SURVIVE');
  if (understandMetrics.h1 !== 'What do we know—and how do we know it?') failures.push(viewport.name + ': UNDERSTAND heading changed unexpectedly');

  const underTargets = await undersizedTargets(page, '.mars-action, #understand-operations a, .mars-phase-nav a');
  if (underTargets.length) failures.push(viewport.name + ': undersized UNDERSTAND touch targets: ' + JSON.stringify(underTargets));
  await page.screenshot({ path: outDir + '/' + viewport.name + '-understand.png', fullPage: true });

  await page.goto(travelUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(250);
  const travelMetrics = await page.evaluate(() => ({
    operations: document.querySelectorAll('.mars-operation').length,
    readinessCalls: document.querySelectorAll('[data-readiness-call]').length,
    phaseLinks: document.querySelectorAll('#travel-operations a').length,
    orbitModels: document.querySelectorAll('[data-orbit-model]').length,
    positionLabs: document.querySelectorAll('[data-position-lab]').length,
    transportTools: document.querySelectorAll('[data-transport-tradeoff]').length,
    surviveNavLinks: document.querySelectorAll('.mars-phase-nav a[href$="/survive/"]').length,
    compactDashboardButtons: document.querySelectorAll('.mars-readiness-dashboard.compact button.readiness-system-card').length,
    h1: document.querySelector('.phase-intro h1')?.textContent?.trim() || '',
    screensDown: document.body.textContent.includes('SCREENS DOWN // BUILD + TEST')
  }));
  travelMetrics.horizontalOverflow = await horizontalOverflow(page);

  if (travelMetrics.horizontalOverflow > 2) failures.push(viewport.name + ': TRAVEL horizontal overflow ' + travelMetrics.horizontalOverflow + 'px');
  if (travelMetrics.operations !== 4 || travelMetrics.readinessCalls !== 4 || travelMetrics.phaseLinks !== 4) failures.push(viewport.name + ': locked TRAVEL structure regressed');
  if (travelMetrics.orbitModels !== 1 || travelMetrics.positionLabs !== 1 || travelMetrics.transportTools !== 1) failures.push(viewport.name + ': locked TRAVEL widgets regressed');
  if (travelMetrics.surviveNavLinks !== 1) failures.push(viewport.name + ': intentional navigation update should expose SURVIVE from TRAVEL');
  if (travelMetrics.compactDashboardButtons !== 0) failures.push(viewport.name + ': TRAVEL compact dashboard exposed fake controls');
  if (travelMetrics.h1 !== 'Can we actually get there?') failures.push(viewport.name + ': TRAVEL heading changed');
  if (!travelMetrics.screensDown) failures.push(viewport.name + ': locked landing physical handoff missing');

  const travelTargets = await undersizedTargets(page,
    '.mars-action, #travel-operations a, .mars-phase-nav a, .transport-priorities select, .transport-choice label, .tradeoff-prompts input'
  );
  if (travelTargets.length) failures.push(viewport.name + ': undersized TRAVEL touch targets: ' + JSON.stringify(travelTargets));
  await page.screenshot({ path: outDir + '/' + viewport.name + '-travel.png', fullPage: true });

  await page.goto(surviveUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(300);
  const surviveMetrics = await page.evaluate(() => ({
    operations: document.querySelectorAll('.mars-operation').length,
    readinessCalls: document.querySelectorAll('[data-readiness-call]').length,
    phaseLinks: document.querySelectorAll('#survive-operations a').length,
    hazardTools: document.querySelectorAll('[data-hazard-analyzer]').length,
    lifeSupportTools: document.querySelectorAll('[data-life-support-flow]').length,
    resourceTools: document.querySelectorAll('[data-resource-tradeoff]').length,
    waterSimulators: document.querySelectorAll('[data-water-simulator]').length,
    compactDashboardButtons: document.querySelectorAll('.mars-readiness-dashboard.compact button.readiness-system-card').length,
    h1: document.querySelector('.phase-intro h1')?.textContent?.trim() || '',
    screensDown: document.body.textContent.includes('SCREENS DOWN // TEST THE SYSTEM'),
    clearWaterWarning: document.body.textContent.includes('CLEAR WATER IS NOT NECESSARILY SAFE WATER.'),
    recoveryFormula: document.body.textContent.includes('RECOVERY %')
  }));
  surviveMetrics.horizontalOverflow = await horizontalOverflow(page);

  if (surviveMetrics.horizontalOverflow > 2) failures.push(viewport.name + ': SURVIVE horizontal overflow ' + surviveMetrics.horizontalOverflow + 'px');
  if (surviveMetrics.operations !== 4 || surviveMetrics.readinessCalls !== 4 || surviveMetrics.phaseLinks !== 4) failures.push(viewport.name + ': SURVIVE must render exactly Operations 09–12 with four readiness calls');
  if (surviveMetrics.hazardTools !== 1 || surviveMetrics.lifeSupportTools !== 1 || surviveMetrics.resourceTools !== 1) {
    failures.push(viewport.name + ': SURVIVE should contain exactly the approved hazard, life-support, and ISRU interactions');
  }
  if (surviveMetrics.waterSimulators !== 0) failures.push(viewport.name + ': Operation 12 must not include a digital water simulator');
  if (surviveMetrics.compactDashboardButtons !== 0) failures.push(viewport.name + ': SURVIVE compact dashboard exposed fake controls');
  if (surviveMetrics.h1 !== 'Can humans stay alive?') failures.push(viewport.name + ': SURVIVE heading missing');
  if (!surviveMetrics.screensDown || !surviveMetrics.clearWaterWarning || !surviveMetrics.recoveryFormula) failures.push(viewport.name + ': physical water challenge or safety/recovery teaching is incomplete');

  const surviveTargets = await undersizedTargets(page,
    '.mars-action, #survive-operations a, .mars-phase-nav a, .hazard-card select, .system-toggle, .failure-chain select, .resource-strategy-grid label, .tradeoff-prompts input'
  );
  if (surviveTargets.length) failures.push(viewport.name + ': undersized SURVIVE touch targets: ' + JSON.stringify(surviveTargets));

  await page.keyboard.press('Tab');
  const hasKeyboardFocus = await page.evaluate(() => document.activeElement && document.activeElement !== document.body);
  if (!hasKeyboardFocus) failures.push(viewport.name + ': keyboard focus did not enter a SURVIVE control');

  if (viewport.name === 'desktop-1440') {
    const hazards = page.locator('[data-hazard-analyzer]');
    const hazardSelects = hazards.locator('[data-hazard-select]');
    for (let i = 0; i < await hazardSelects.count(); i++) {
      await hazardSelects.nth(i).selectOption(i % 2 === 0 ? 'Serious' : 'Manageable with established approaches');
    }
    await hazards.locator('[data-reveal-hazards]').click();
    const visibleEvidence = await hazards.locator('[data-hazard-evidence]:visible').count();
    if (visibleEvidence !== 6) failures.push('Hazard Analyzer should reveal evidence for all six hazards.');
    await hazardSelects.nth(5).selectOption('Critical');
    await hazards.locator('[data-hazard-reflection]').fill('Radiation moved to Critical because a long Mars mission has far less natural shielding than life on Earth.');
    await hazards.locator('[data-save-hazards]').click();
    const hazardFeedback = (await hazards.locator('[data-hazard-feedback]').textContent()) || '';
    if (!/saved on this device/i.test(hazardFeedback)) failures.push('Hazard Analyzer did not save revised reasoning.');

    const life = page.locator('[data-life-support-flow]');
    await life.locator('[data-toggle-system="water"]').click();
    const waterConsequences = (await life.locator('[data-system-consequences]').textContent()) || '';
    if (!/Stored-water demand rises/i.test(waterConsequences)) failures.push('Life-support flow did not show water-recovery consequence.');
    await life.locator('[data-failure-choice]').selectOption('water');
    await life.locator('[data-failure-reasoning]').fill('Without water recovery, stored water is used faster and dependence on supplies from Earth increases.');
    await life.locator('[data-save-life-support]').click();
    const lifeFeedback = (await life.locator('[data-life-support-feedback]').textContent()) || '';
    if (!/saved on this device/i.test(lifeFeedback)) failures.push('Life-support flow analysis did not save.');

    const resource = page.locator('[data-resource-tradeoff]');
    await resource.locator('input[name="resource-oxygen"][value="make"]').check();
    await resource.locator('input[name="resource-water"][value="make"]').check();
    await resource.locator('input[name="resource-propellant"][value="hybrid"]').check();
    await resource.locator('input[name="resource-materials"][value="bring"]').check();
    await resource.locator('[data-resource-choice]').fill('Oxygen, because MOXIE demonstrated that oxygen can be produced from Martian carbon dioxide.');
    await resource.locator('[data-resource-risk]').fill('The crew would depend on processing equipment, power, and maintenance working reliably.');
    await resource.locator('[data-save-resources]').click();
    const resourceFeedback = (await resource.locator('[data-resource-feedback]').textContent()) || '';
    if (!/saved on this device/i.test(resourceFeedback)) failures.push('ISRU trade-off review did not save.');
    const resourceText = (await resource.textContent()) || '';
    if (/best option is|winner is|recommended option is|you should choose/i.test(resourceText)) failures.push('ISRU tool declared an automatic winner.');

    const saveReadiness = async (operation, system, status, evidence) => {
      const call = page.locator('[data-readiness-call][data-operation="' + operation + '"]');
      await call.locator('select[name="system"]').selectOption(system);
      await call.locator('input[name="status"][value="' + status + '"]').check();
      await call.locator('textarea[name="evidence"]').fill(evidence);
      await call.locator('button[type="submit"]').click();
    };

    await saveReadiness('09','survival','developing','Mars hazards require pressure, breathable air, thermal control, water, radiation protection, and reduced-gravity planning.');
    await saveReadiness('10','survival','demonstrated','Human life-support systems can recycle air and water, but a long Mars mission must make the system more independent and robust.');
    await saveReadiness('11','presence','developing','MOXIE demonstrated local oxygen production, but crew-scale ISRU would require much larger reliable systems.');
    await saveReadiness('12','survival','demonstrated','ISS systems have demonstrated very high water recovery, while safe potable water still requires treatment and testing.');

    const savedState = await page.evaluate(() => JSON.parse(localStorage.getItem('mrjohn-mars-readiness-v1') || '{}'));
    for (const op of ['09','10','11','12']) {
      if (!savedState.operations?.[op]) failures.push('Readiness persistence missing Operation ' + op);
    }

    await page.goto(hubUrl, { waitUntil: 'domcontentloaded' });
    const survivalStatus = ((await page.locator('[data-system-status="survival"]').textContent()) || '').trim();
    const presenceStatus = ((await page.locator('[data-system-status="presence"]').textContent()) || '').trim();
    if (!survivalStatus.toLowerCase().includes('demonstrated')) failures.push('Latest Survival readiness status did not persist to Hub.');
    if (!presenceStatus.toLowerCase().includes('developing')) failures.push('Long-Term Presence readiness status did not persist to Hub.');

    await page.locator('.readiness-system-card[data-system="survival"]').click();
    const survivalEvidenceCount = await page.locator('#mars-system-detail .evidence-history li').count();
    if (survivalEvidenceCount !== 3) failures.push('Survival dashboard should accumulate Operations 09, 10, and 12; found ' + survivalEvidenceCount);

    await page.goto(travelUrl, { waitUntil: 'domcontentloaded' });
    const transport = page.locator('[data-transport-tradeoff]');
    await transport.locator('[data-priority="Crew safety"]').selectOption('Critical');
    await transport.locator('input[name="transport-choice"][value="All-chemical"]').check();
    await transport.locator('[data-strength]').fill('High thrust and extensive chemical propulsion mission heritage.');
    await transport.locator('[data-concern]').fill('A human Mars architecture still has major propellant and system trade-offs.');
    await transport.locator('[data-save-transport]').click();
    if (!/saved on this device/i.test((await transport.locator('[data-transport-feedback]').textContent()) || '')) failures.push('Locked TRAVEL transport interaction regressed.');

    const orbit = page.locator('[data-orbit-model]');
    await orbit.locator('[data-mission-day]').fill('180');
    await orbit.locator('[data-prediction-angle]').fill('150');
    await orbit.locator('[data-check-orbit]').click();
    if (!(await orbit.locator('[data-mars-future-marker]').isVisible())) failures.push('Locked TRAVEL orbit model regressed.');

    await page.goto(understandUrl, { waitUntil: 'domcontentloaded' });
    const matcher = page.locator('[data-evidence-matcher]');
    const selects = matcher.locator('select');
    await selects.nth(0).selectOption('surface');
    await selects.nth(1).selectOption('composition');
    await selects.nth(2).selectOption('radio');
    await selects.nth(3).selectOption('motion');
    await matcher.locator('[data-check-matcher]').click();
    const score = ((await matcher.locator('.matcher-score').textContent()) || '').trim();
    if (score !== '4 / 4 supported') failures.push('Locked UNDERSTAND Evidence Matcher regressed.');

    await page.evaluate(() => {
      for (const key of [
        'mrjohn-mars-readiness-v1',
        'mrjohn-mars-evidence-matcher-v1',
        'mrjohn-mars-orbit-model-v1',
        'mrjohn-mars-position-lab-v1',
        'mrjohn-mars-transport-tradeoff-v1',
        'mrjohn-mars-hazard-analyzer-v1',
        'mrjohn-mars-life-support-flow-v1',
        'mrjohn-mars-resource-tradeoff-v1'
      ]) localStorage.removeItem(key);
    });
  }

  await page.goto(surviveUrl, { waitUntil: 'domcontentloaded' });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  const reduced = await page.evaluate(() => matchMedia('(prefers-reduced-motion: reduce)').matches);
  if (!reduced) failures.push(viewport.name + ': reduced-motion emulation not recognized');

  await page.screenshot({ path: outDir + '/' + viewport.name + '-survive.png', fullPage: true });

  const errors = meaningfulConsoleErrors(consoleErrors);
  if (errors.length) failures.push(viewport.name + ': console errors detected: ' + JSON.stringify(errors.slice(0, 5)));

  report.push({ viewport, hubMetrics, understandMetrics, travelMetrics, surviveMetrics, consoleErrors: errors, hubTargets, underTargets, travelTargets, surviveTargets });
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
console.log('Verified Hub + locked UNDERSTAND + locked TRAVEL + SURVIVE: no horizontal overflow, 12 total Operations across three phases, exactly the approved SURVIVE interactions, physical water handoff, local evidence accumulation, locked interaction regressions, keyboard entry, touch target sizing, reduced motion, and no console errors.');
