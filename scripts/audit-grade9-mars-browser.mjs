import fs from 'node:fs';
import { chromium } from 'playwright';

const origin = process.env.MARS_BASE_URL || 'http://127.0.0.1:4321/Mr.-John-s-Learning-Hub/';
const hubUrl = origin + 'courses/grade-9-science/space-exploration/mars-readiness/';
const understandUrl = hubUrl + 'understand/';
const travelUrl = hubUrl + 'travel/';
const surviveUrl = hubUrl + 'survive/';
const operateUrl = hubUrl + 'operate/';
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

async function gotoStable(page, url, wait=220) {
  await page.goto(url, { waitUntil:'domcontentloaded', timeout:30000 });
  await page.waitForTimeout(wait);
}

for (const viewport of viewports) {
  const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });
  const page = await context.newPage();
  const consoleErrors = [];
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });

  await gotoStable(page, hubUrl, 300);
  const hubMetrics = await page.evaluate(() => ({
    systemCards: document.querySelectorAll('.readiness-system-card').length,
    h1: document.querySelector('h1')?.textContent?.trim() || '',
    heroImageAlt: document.querySelector('.mars-hero img')?.getAttribute('alt') || '',
    bodyFont: parseFloat(getComputedStyle(document.body).fontSize),
    understandLinks: document.querySelectorAll('a[href$="/mars-readiness/understand/"]').length,
    travelLinks: document.querySelectorAll('a[href$="/mars-readiness/travel/"]').length,
    surviveLinks: document.querySelectorAll('a[href$="/mars-readiness/survive/"]').length,
    operateLinks: document.querySelectorAll('a[href$="/mars-readiness/operate/"]').length
  }));
  hubMetrics.horizontalOverflow = await horizontalOverflow(page);

  if (hubMetrics.horizontalOverflow > 2) failures.push(viewport.name + ': Hub horizontal overflow ' + hubMetrics.horizontalOverflow + 'px');
  if (hubMetrics.systemCards !== 7) failures.push(viewport.name + ': Hub should render 7 readiness systems');
  if (!hubMetrics.h1.includes('MISSION')) failures.push(viewport.name + ': Hub H1 missing');
  if (!hubMetrics.heroImageAlt) failures.push(viewport.name + ': Hub hero image alt text missing');
  if (hubMetrics.bodyFont < 16) failures.push(viewport.name + ': body font below 16px');
  if ([hubMetrics.understandLinks,hubMetrics.travelLinks,hubMetrics.surviveLinks,hubMetrics.operateLinks].some((n)=>n < 1)) {
    failures.push(viewport.name + ': all four phases must be reachable from Hub');
  }

  const hubTargets = await undersizedTargets(page, '.mars-action, .mars-phase-nav a, .phase-index a, .readiness-system-card');
  if (hubTargets.length) failures.push(viewport.name + ': undersized Hub targets: ' + JSON.stringify(hubTargets));
  await page.screenshot({ path: outDir + '/' + viewport.name + '-hub.png', fullPage:true });

  await gotoStable(page, understandUrl);
  const understandMetrics = await page.evaluate(() => ({
    operations: document.querySelectorAll('.mars-operation').length,
    readinessCalls: document.querySelectorAll('[data-readiness-call]').length,
    matcherCases: document.querySelectorAll('[data-evidence-matcher] [data-case]').length,
    phaseLinks: document.querySelectorAll('#understand-operations a').length,
    operateNavLinks: document.querySelectorAll('.mars-phase-nav a[href$="/operate/"]').length,
    h1: document.querySelector('.phase-intro h1')?.textContent?.trim() || ''
  }));
  understandMetrics.horizontalOverflow = await horizontalOverflow(page);
  if (understandMetrics.horizontalOverflow > 2) failures.push(viewport.name + ': UNDERSTAND horizontal overflow ' + understandMetrics.horizontalOverflow + 'px');
  if (understandMetrics.operations !== 4 || understandMetrics.readinessCalls !== 4 || understandMetrics.matcherCases !== 4 || understandMetrics.phaseLinks !== 4) {
    failures.push(viewport.name + ': locked UNDERSTAND structure regressed');
  }
  if (understandMetrics.operateNavLinks !== 1) failures.push(viewport.name + ': shared navigation should expose final phase from UNDERSTAND');
  if (understandMetrics.h1 !== 'What do we know—and how do we know it?') failures.push(viewport.name + ': UNDERSTAND heading changed');

  const underTargets = await undersizedTargets(page, '.mars-action, #understand-operations a, .mars-phase-nav a');
  if (underTargets.length) failures.push(viewport.name + ': undersized UNDERSTAND targets: ' + JSON.stringify(underTargets));
  await page.screenshot({ path: outDir + '/' + viewport.name + '-understand.png', fullPage:true });

  await gotoStable(page, travelUrl);
  const travelMetrics = await page.evaluate(() => ({
    operations: document.querySelectorAll('.mars-operation').length,
    readinessCalls: document.querySelectorAll('[data-readiness-call]').length,
    phaseLinks: document.querySelectorAll('#travel-operations a').length,
    orbitModels: document.querySelectorAll('[data-orbit-model]').length,
    positionLabs: document.querySelectorAll('[data-position-lab]').length,
    transportTools: document.querySelectorAll('[data-transport-tradeoff]').length,
    operateNavLinks: document.querySelectorAll('.mars-phase-nav a[href$="/operate/"]').length,
    h1: document.querySelector('.phase-intro h1')?.textContent?.trim() || '',
    screensDown: document.body.textContent.includes('SCREENS DOWN // BUILD + TEST')
  }));
  travelMetrics.horizontalOverflow = await horizontalOverflow(page);
  if (travelMetrics.horizontalOverflow > 2) failures.push(viewport.name + ': TRAVEL horizontal overflow ' + travelMetrics.horizontalOverflow + 'px');
  if (travelMetrics.operations !== 4 || travelMetrics.readinessCalls !== 4 || travelMetrics.phaseLinks !== 4) failures.push(viewport.name + ': locked TRAVEL structure regressed');
  if (travelMetrics.orbitModels !== 1 || travelMetrics.positionLabs !== 1 || travelMetrics.transportTools !== 1) failures.push(viewport.name + ': locked TRAVEL widgets regressed');
  if (travelMetrics.operateNavLinks !== 1) failures.push(viewport.name + ': shared navigation should expose final phase from TRAVEL');
  if (travelMetrics.h1 !== 'Can we actually get there?') failures.push(viewport.name + ': TRAVEL heading changed');
  if (!travelMetrics.screensDown) failures.push(viewport.name + ': locked landing physical handoff missing');

  const travelTargets = await undersizedTargets(page,
    '.mars-action, #travel-operations a, .mars-phase-nav a, .transport-priorities select, .transport-choice label, .tradeoff-prompts input'
  );
  if (travelTargets.length) failures.push(viewport.name + ': undersized TRAVEL targets: ' + JSON.stringify(travelTargets));
  await page.screenshot({ path: outDir + '/' + viewport.name + '-travel.png', fullPage:true });

  await gotoStable(page, surviveUrl);
  const surviveMetrics = await page.evaluate(() => ({
    operations: document.querySelectorAll('.mars-operation').length,
    readinessCalls: document.querySelectorAll('[data-readiness-call]').length,
    phaseLinks: document.querySelectorAll('#survive-operations a').length,
    hazardTools: document.querySelectorAll('[data-hazard-analyzer]').length,
    lifeSupportTools: document.querySelectorAll('[data-life-support-flow]').length,
    resourceTools: document.querySelectorAll('[data-resource-tradeoff]').length,
    operateNavLinks: document.querySelectorAll('.mars-phase-nav a[href$="/operate/"]').length,
    h1: document.querySelector('.phase-intro h1')?.textContent?.trim() || '',
    screensDown: document.body.textContent.includes('SCREENS DOWN // TEST THE SYSTEM'),
    clearWaterWarning: document.body.textContent.includes('CLEAR WATER IS NOT NECESSARILY SAFE WATER.')
  }));
  surviveMetrics.horizontalOverflow = await horizontalOverflow(page);
  if (surviveMetrics.horizontalOverflow > 2) failures.push(viewport.name + ': SURVIVE horizontal overflow ' + surviveMetrics.horizontalOverflow + 'px');
  if (surviveMetrics.operations !== 4 || surviveMetrics.readinessCalls !== 4 || surviveMetrics.phaseLinks !== 4) failures.push(viewport.name + ': locked SURVIVE structure regressed');
  if (surviveMetrics.hazardTools !== 1 || surviveMetrics.lifeSupportTools !== 1 || surviveMetrics.resourceTools !== 1) failures.push(viewport.name + ': locked SURVIVE widgets regressed');
  if (surviveMetrics.operateNavLinks !== 1) failures.push(viewport.name + ': shared navigation should expose final phase from SURVIVE');
  if (surviveMetrics.h1 !== 'Can humans stay alive?') failures.push(viewport.name + ': SURVIVE heading changed');
  if (!surviveMetrics.screensDown || !surviveMetrics.clearWaterWarning) failures.push(viewport.name + ': locked water-recovery handoff or safety warning missing');

  const surviveTargets = await undersizedTargets(page,
    '.mars-action, #survive-operations a, .mars-phase-nav a, .hazard-card select, .system-toggle, .failure-chain select, .resource-strategy-grid label, .tradeoff-prompts input'
  );
  if (surviveTargets.length) failures.push(viewport.name + ': undersized SURVIVE targets: ' + JSON.stringify(surviveTargets));
  await page.screenshot({ path: outDir + '/' + viewport.name + '-survive.png', fullPage:true });

  await gotoStable(page, operateUrl, 300);
  const operateMetrics = await page.evaluate(() => ({
    operations: document.querySelectorAll('.mars-operation').length,
    readinessCalls: document.querySelectorAll('[data-readiness-call]').length,
    operation16ReadinessCalls: document.querySelectorAll('[data-operation="16"] [data-readiness-call]').length,
    phaseLinks: document.querySelectorAll('#operate-operations a').length,
    taskMatchers: document.querySelectorAll('[data-mission-task-matcher]').length,
    networkBuilders: document.querySelectorAll('[data-network-builder]').length,
    crises: document.querySelectorAll('[data-mission-crisis]').length,
    fullDashboards: document.querySelectorAll('#final-readiness-dashboard .mars-readiness-dashboard:not(.compact)').length,
    h1: document.querySelector('.phase-intro h1')?.textContent?.trim() || '',
    crisisText: document.body.textContent.includes('50 of 68 Mission Power Units'),
    automaticVerdict: /readiness percentage|mission approved|mission rejected|success probability/i.test(document.body.textContent)
  }));
  operateMetrics.horizontalOverflow = await horizontalOverflow(page);

  if (operateMetrics.horizontalOverflow > 2) failures.push(viewport.name + ': OPERATE & DECIDE horizontal overflow ' + operateMetrics.horizontalOverflow + 'px');
  if (operateMetrics.operations !== 4 || operateMetrics.phaseLinks !== 4) failures.push(viewport.name + ': OPERATE & DECIDE should render exactly Operations 13–16');
  if (operateMetrics.readinessCalls !== 3 || operateMetrics.operation16ReadinessCalls !== 0) failures.push(viewport.name + ': Operations 13–15 need readiness calls and Operation 16 must not');
  if (operateMetrics.taskMatchers !== 1 || operateMetrics.networkBuilders !== 1 || operateMetrics.crises !== 1) failures.push(viewport.name + ': Phase 04 should contain exactly the 3 approved new interactions');
  if (operateMetrics.fullDashboards !== 1) failures.push(viewport.name + ': Operation 16 should reuse exactly one full Mars Readiness Dashboard');
  if (operateMetrics.h1 !== 'Could the mission work—and what should happen next?') failures.push(viewport.name + ': final phase heading missing');
  if (!operateMetrics.crisisText) failures.push(viewport.name + ': SOL 137 locked 50-of-68 scenario missing');
  if (operateMetrics.automaticVerdict) failures.push(viewport.name + ': prohibited automated final verdict text detected');

  const operateTargets = await undersizedTargets(page,
    '.mars-action, #operate-operations a, .mars-phase-nav a, .task-match-grid select, .connection-controls select, .position-candidates label, .crisis-systems button, .readiness-system-card'
  );
  if (operateTargets.length) failures.push(viewport.name + ': undersized OPERATE & DECIDE targets: ' + JSON.stringify(operateTargets));

  await page.keyboard.press('Tab');
  const hasKeyboardFocus = await page.evaluate(() => document.activeElement && document.activeElement !== document.body);
  if (!hasKeyboardFocus) failures.push(viewport.name + ': keyboard focus did not enter a final-phase control');

  if (viewport.name === 'desktop-1440') {
    const matcher = page.locator('[data-mission-task-matcher]');
    const taskSelects = matcher.locator('[data-task] select');
    const taskAnswers = ['orbiter','lander','rover','rover','orbiter','human'];
    for (let i=0; i<taskAnswers.length; i++) await taskSelects.nth(i).selectOption(taskAnswers[i]);
    await matcher.locator('[data-check-tasks]').click();
    const taskScore = ((await matcher.locator('[data-task-score]').textContent()) || '').trim();
    if (taskScore !== '6 / 6 supported') failures.push('Mission Task Matcher expected 6 / 6 supported, got ' + taskScore);
    await matcher.locator('[data-method-reflection]').fill('An orbiter is weaker than a rover for direct rock chemistry because it cannot place an instrument against several surface rocks.');
    await matcher.locator('[data-save-task-review]').click();
    if (!/saved on this device/i.test((await matcher.locator('[data-task-save-feedback]').textContent()) || '')) failures.push('Mission Task Matcher did not save.');

    const network = page.locator('[data-network-builder]');
    const addConnection = async (a,b) => {
      await network.locator('[data-connection-from]').selectOption({ label:a });
      await network.locator('[data-connection-to]').selectOption({ label:b });
      await network.locator('[data-add-connection]').click();
    };
    await addConnection('Earth','Relay Orbiter');
    await addConnection('Relay Orbiter','Habitat');
    await addConnection('Relay Orbiter','Rover');
    await addConnection('Relay Orbiter','Science Station');
    await network.locator('[data-check-network]').click();
    if (!/main relay path/i.test((await network.locator('[data-network-feedback]').textContent()) || '')) failures.push('Network Builder did not recognize required relay architecture.');
    await network.locator('input[name="mars-position-candidate"][value="B"]').check();
    await network.locator('[data-check-position-network]').click();
    if (!/matches all three/i.test((await network.locator('[data-network-position-feedback]').textContent()) || '')) failures.push('Network position check did not accept Candidate B.');
    await network.locator('[data-network-reflection]').fill("Earth's GPS satellites orbit Earth and are not positioned around Mars to provide a Mars navigation constellation.");
    await network.locator('[data-save-network]').click();
    if (!/saved on this device/i.test((await network.locator('[data-network-save-feedback]').textContent()) || '')) failures.push('Network Builder did not save.');

    const crisis = page.locator('[data-mission-crisis]');
    for (const id of ['isru','rover','science']) await crisis.locator('[data-crisis-system="' + id + '"]').click();
    const powerUsed = ((await crisis.locator('[data-power-used]').textContent()) || '').trim();
    if (powerUsed !== '50 / 50') failures.push('SOL 137 expected 50 / 50 after locked test allocation, got ' + powerUsed);
    await crisis.locator('[data-incident-keep]').fill('Life support, thermal control, storm shelter, communications, and water recovery remain protected.');
    await crisis.locator('[data-incident-pause]').fill('ISRU oxygen production, rover operations, and science instruments are paused.');
    await crisis.locator('[data-incident-risk]').fill('We accept lost science and local resource production because those losses are less immediate than crew survival during the solar event.');
    await crisis.locator('[data-incident-individual]').fill('ISRU was hardest to pause because local oxygen production reduces dependence on Earth, but stored resources can cover a temporary shutdown.');
    await crisis.locator('[data-save-crisis]').click();
    if (!/saved on this device/i.test((await crisis.locator('[data-crisis-feedback]').textContent()) || '')) failures.push('SOL 137 incident response did not save.');

    const saveReadiness = async (operation,status,evidence) => {
      const call=page.locator('[data-readiness-call][data-operation="' + operation + '"]');
      await call.locator('select[name="system"]').selectOption('operations');
      await call.locator('input[name="status"][value="' + status + '"]').check();
      await call.locator('textarea[name="evidence"]').fill(evidence);
      await call.locator('button[type="submit"]').click();
    };

    await saveReadiness('13','demonstrated','Orbiters, landers, rovers, and humans collect different kinds of evidence; active Mars missions already combine orbital and surface observations.');
    await saveReadiness('14','developing','Current orbiters relay Mars data, while NASA is developing a next-generation communications and navigation network for future missions.');
    await saveReadiness('15','challenge','A Mars base must keep critical systems operating during failures with limited power and no quick resupply from Earth.');

    const savedState = await page.evaluate(() => JSON.parse(localStorage.getItem('mrjohn-mars-readiness-v1') || '{}'));
    for (const op of ['13','14','15']) {
      if (!savedState.operations?.[op]) failures.push('Readiness persistence missing Operation ' + op);
    }
    if (savedState.operations?.['16']) failures.push('Operation 16 should not create a standard single-system readiness record.');

    const fullDashboard = page.locator('#final-readiness-dashboard');
    await fullDashboard.locator('.readiness-system-card[data-system="operations"]').click();
    const opEvidenceCount = await fullDashboard.locator('.evidence-history li').count();
    if (opEvidenceCount !== 3) failures.push('Final dashboard should accumulate Operations 13–15 under Operations; found ' + opEvidenceCount);

    await gotoStable(page, travelUrl);
    const transport = page.locator('[data-transport-tradeoff]');
    await transport.locator('[data-priority="Crew safety"]').selectOption('Critical');
    await transport.locator('input[name="transport-choice"][value="All-chemical"]').check();
    await transport.locator('[data-strength]').fill('High thrust and extensive chemical propulsion mission heritage.');
    await transport.locator('[data-concern]').fill('A human Mars architecture still has major propellant and system trade-offs.');
    await transport.locator('[data-save-transport]').click();
    if (!/saved on this device/i.test((await transport.locator('[data-transport-feedback]').textContent()) || '')) failures.push('Locked TRAVEL transport interaction regressed.');

    await gotoStable(page, surviveUrl);
    const life=page.locator('[data-life-support-flow]');
    await life.locator('[data-toggle-system="water"]').click();
    if (!/Stored-water demand rises/i.test((await life.locator('[data-system-consequences]').textContent()) || '')) failures.push('Locked SURVIVE life-support flow regressed.');

    await gotoStable(page, understandUrl);
    const evidenceMatcher=page.locator('[data-evidence-matcher]');
    const eSelects=evidenceMatcher.locator('select');
    await eSelects.nth(0).selectOption('surface');
    await eSelects.nth(1).selectOption('composition');
    await eSelects.nth(2).selectOption('radio');
    await eSelects.nth(3).selectOption('motion');
    await evidenceMatcher.locator('[data-check-matcher]').click();
    if (((await evidenceMatcher.locator('.matcher-score').textContent()) || '').trim() !== '4 / 4 supported') failures.push('Locked UNDERSTAND Evidence Matcher regressed.');

    await page.evaluate(() => {
      for (const key of [
        'mrjohn-mars-readiness-v1',
        'mrjohn-mars-evidence-matcher-v1',
        'mrjohn-mars-orbit-model-v1',
        'mrjohn-mars-position-lab-v1',
        'mrjohn-mars-transport-tradeoff-v1',
        'mrjohn-mars-hazard-analyzer-v1',
        'mrjohn-mars-life-support-flow-v1',
        'mrjohn-mars-resource-tradeoff-v1',
        'mrjohn-mars-task-matcher-v1',
        'mrjohn-mars-network-builder-v1',
        'mrjohn-mars-mission-crisis-v1'
      ]) localStorage.removeItem(key);
    });
  }

  await gotoStable(page, operateUrl);
  await page.emulateMedia({ reducedMotion:'reduce' });
  if (!(await page.evaluate(() => matchMedia('(prefers-reduced-motion: reduce)').matches))) failures.push(viewport.name + ': reduced-motion emulation not recognized');
  await page.screenshot({ path: outDir + '/' + viewport.name + '-operate.png', fullPage:true });

  const errors=meaningfulConsoleErrors(consoleErrors);
  if (errors.length) failures.push(viewport.name + ': console errors detected: ' + JSON.stringify(errors.slice(0,5)));

  report.push({ viewport, hubMetrics, understandMetrics, travelMetrics, surviveMetrics, operateMetrics, consoleErrors:errors, hubTargets, underTargets, travelTargets, surviveTargets, operateTargets });
  await context.close();
}

await browser.close();
fs.writeFileSync(outDir + '/audit-report.json', JSON.stringify({ report, failures }, null, 2));

if (failures.length) {
  console.error('\nMars rendered browser audit FAILED\n');
  failures.forEach((item)=>console.error(' - ' + item));
  process.exit(1);
}

console.log('Mars rendered browser audit passed at desktop, tablet, 390px, 375px, and 320px.');
console.log('Verified complete 16-class Mars experience: locked prior phases, exactly 4 final Operations, 3 standard readiness calls in Operations 13–15, no Operation 16 readiness call, full-dashboard final synthesis, task/network/crisis interactions, 50-of-68 consequence allocation, evidence accumulation, keyboard entry, touch targets, reduced motion, no horizontal overflow, and no console errors.');
