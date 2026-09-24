import { chromium } from 'playwright';
import fs from 'node:fs/promises';

const BASE = 'http://127.0.0.1:4321/Mr.-John-s-Learning-Hub';
const URL = BASE + '/courses/grade-9-science/space-exploration/mars-readiness/understand/';
const OUT = 'artifacts/understand-redesign';
await fs.mkdir(OUT, { recursive: true });

const browser = await chromium.launch({ headless: true });
const report = {
  url: URL,
  timestamp: new Date().toISOString(),
  viewports: [],
  interactions: {},
  accessibility: {},
  errors: []
};

const viewports = [
  ['desktop', 1440, 900],
  ['tablet', 1024, 768],
  ['390', 390, 844],
  ['375', 375, 812],
  ['320', 320, 700]
];

async function basicAudit(name, width, height) {
  const page = await browser.newPage({ viewport: { width, height } });
  const consoleErrors = [];
  const pageErrors = [];
  page.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', (err) => pageErrors.push(String(err)));
  await page.goto(URL, { waitUntil: 'networkidle' });

  const data = await page.evaluate(() => {
    const root = document.documentElement;
    const operationEls = [...document.querySelectorAll('.mars-operation')];
    const visibleCore = [...document.querySelectorAll(
      'button:not([hidden]), select:not([hidden]), summary, .status-choice, .op01-check label, .lab-question label'
    )].filter((el) => {
      const r = el.getBoundingClientRect();
      const style = getComputedStyle(el);
      return r.width > 0 && r.height > 0 && style.visibility !== 'hidden' && style.display !== 'none';
    });
    const targetSizes = visibleCore.map((el) => {
      const r = el.getBoundingClientRect();
      return { tag: el.tagName, cls: el.className || '', w: Math.round(r.width), h: Math.round(r.height), text: (el.textContent || '').trim().slice(0,55) };
    });
    const roleImages = [...document.querySelectorAll('[role="img"]')];
    const htmlImages = [...document.querySelectorAll('img')];
    return {
      pageOverflow: Math.max(0, root.scrollWidth - root.clientWidth),
      operationOverflow: operationEls.map((el) => Math.max(0, el.scrollWidth - el.clientWidth)),
      navLinks: document.querySelectorAll('.understand-op-nav a').length,
      systemPills: document.querySelectorAll('.understand-system-pill').length,
      scienceFocused: document.querySelector('.understand-system-pill[data-system="science"]')?.classList.contains('focus') || false,
      intelLegendCollapsed: !document.querySelector('.understand-intel-legend')?.open,
      minCoreTargetHeight: targetSizes.length ? Math.min(...targetSizes.map((x) => x.h)) : null,
      undersizedCoreTargets: targetSizes.filter((x) => x.h < 44),
      roleImagesMissingLabel: roleImages.filter((el) => !(el.getAttribute('aria-label') || el.getAttribute('aria-labelledby'))).length,
      htmlImagesMissingAlt: htmlImages.filter((el) => !el.getAttribute('alt')).length,
      opCount: operationEls.length
    };
  });

  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: true });
  report.viewports.push({ name, width, height, ...data, consoleErrors, pageErrors });
  if (consoleErrors.length || pageErrors.length) report.errors.push({ name, consoleErrors, pageErrors });
  await page.close();
}

for (const [name,width,height] of viewports) await basicAudit(name,width,height);

// Complete interaction / persistence audit at desktop.
{
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  const consoleErrors = [];
  const pageErrors = [];
  page.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', (err) => pageErrors.push(String(err)));
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: 'networkidle' });

  const out = {};

  // Global overview
  out.overview = await page.evaluate(() => ({
    nav: [...document.querySelectorAll('.understand-op-nav a')].map(a => (a.textContent || '').trim().replace(/\s+/g,' ')),
    systems: document.querySelectorAll('.understand-system-pill').length,
    scienceFocus: document.querySelector('.understand-system-pill[data-system="science"]')?.classList.contains('focus') || false,
    legendCollapsed: !document.querySelector('.understand-intel-legend')?.open
  }));

  // Operation 01
  const op1 = page.locator('[data-operation="01"]');
  await op1.locator('[data-zoom-out]').click();
  const zoom2 = await op1.locator('[data-zoom-position]').textContent();
  await op1.locator('[data-zoom-out]').click();
  await op1.locator('[data-zoom-out]').click();
  const zoom4 = await op1.locator('[data-zoom-position]').textContent();
  await op1.locator('input[name="op01-nebula"][value="inside"]').check();
  await op1.locator('[data-check-nebula]').click();
  const nebulaFeedback = await op1.locator('[data-nebula-feedback]').textContent();
  const addr = op1.locator('[data-address-slot]');
  await addr.nth(0).selectOption('solar');
  await addr.nth(1).selectOption('galaxy');
  await addr.nth(2).selectOption('universe');
  await op1.locator('[data-check-address]').click();
  const addressFeedback = await op1.locator('[data-address-feedback]').textContent();
  out.op01 = { zoom2, zoom4, nebulaFeedback, addressFeedback };

  // Operation 02
  const op2 = page.locator('[data-operation="02"]');
  await op2.locator('[data-retro-stage="1"]').click();
  await op2.locator('input[name="retrograde-answer"][value="viewpoint"]').check();
  await op2.locator('[data-check-question="retrograde"]').click();
  const retroFeedback = await op2.locator('[data-feedback="retrograde"]').textContent();
  await op2.getByRole('tab', { name: /2 · Venus/ }).click();
  await op2.locator('[data-venus-position="full"]').click();
  const phase = await op2.locator('[data-venus-phase-name]').textContent();
  await op2.locator('input[name="venus-answer"][value="heliocentric"]').check();
  await op2.locator('[data-check-question="venus"]').click();
  const venusFeedback = await op2.locator('[data-feedback="venus"]').textContent();
  await op2.getByRole('tab', { name: /3 · Prediction/ }).click();
  const predBefore = await op2.locator('[data-check-question="prediction"]').isDisabled();
  await op2.locator('[data-reveal-observation]').click();
  await op2.locator('input[name="prediction-answer"][value="increase"]').check();
  await op2.locator('[data-check-question="prediction"]').click();
  const predictionFeedback = await op2.locator('[data-feedback="prediction"]').textContent();
  await op2.locator('[data-model-synthesis] input[value="observations"]').check();
  await op2.locator('[data-model-synthesis] input[value="predictions"]').check();
  await op2.locator('[data-model-synthesis] input[value="evidence"]').check();
  await op2.locator('[data-check-synthesis]').click();
  const synthesisFeedback = await op2.locator('[data-synthesis-feedback]').textContent();
  out.op02 = { retroFeedback, phase, venusFeedback, predBefore, predictionFeedback, synthesisFeedback };

  // Reduced-motion check for retrograde Play.
  const rmPage = await context.newPage({ reducedMotion: 'reduce' });
  await rmPage.goto(URL, { waitUntil: 'domcontentloaded' });
  const rmOp2 = rmPage.locator('[data-operation="02"]');
  await rmOp2.locator('[data-retro-play]').click();
  out.reducedMotion = {
    stage: await rmOp2.locator('[data-retrograde-stage]').getAttribute('data-retrograde-stage'),
    copy: await rmOp2.locator('[data-retro-stage-copy]').textContent()
  };
  await rmPage.close();

  // Operation 03 question key + unchanged Evidence Matcher.
  const op3 = page.locator('[data-operation="03"]');
  await op3.getByRole('tab', { name: /Eyes cannot/ }).click();
  const radioHeading = await op3.locator('[data-evidence-panel="radio"] h5').textContent();
  await op3.locator('.op03-retrieval-check summary').click();
  await op3.locator('[data-question-select]').selectOption('spectrum');
  await op3.locator('[data-tool-select]').selectOption('spectrum');
  await op3.locator('[data-check-tool]').click();
  const toolFeedback = await op3.locator('[data-tool-feedback]').textContent();

  const matcherSelects = op3.locator('[data-evidence-matcher] [data-case] select');
  await matcherSelects.nth(0).selectOption('surface');
  await matcherSelects.nth(1).selectOption('composition');
  await matcherSelects.nth(2).selectOption('radio');
  await matcherSelects.nth(3).selectOption('motion');
  await op3.locator('[data-check-matcher]').click();
  const matcherScore = await op3.locator('.matcher-score').textContent();
  const matcherSaved = await page.evaluate(() => localStorage.getItem('mrjohn-mars-evidence-matcher-v1'));
  out.op03 = { radioHeading, toolFeedback, matcherScore, matcherSaved };

  // Operation 04
  const op4 = page.locator('[data-operation="04"]');
  await op4.locator('[data-family="other"]').click();
  const familyTitle = await op4.locator('[data-family-readout] strong').textContent();
  await op4.getByRole('tab', { name: /Gravity/ }).click();
  const gravityHeading = await op4.locator('[data-env-panel="gravity"] h5').textContent();
  await op4.locator('[data-env-check] select').selectOption('health');
  await op4.locator('[data-check-env]').click();
  const envFeedback = await op4.locator('[data-env-feedback]').textContent();
  await op4.locator('[data-evidence-select]').selectOption('gravity');
  await op4.locator('[data-consequence-select]').selectOption('health');
  await op4.locator('[data-system-select]').selectOption('health-system');
  await op4.locator('[data-check-consequence]').click();
  const consequenceFeedback = await op4.locator('[data-consequence-feedback]').textContent();
  out.op04 = { familyTitle, gravityHeading, envFeedback, consequenceFeedback };

  // Save all four Readiness Calls and verify common state + overview strip.
  for (const number of ['01','02','03','04']) {
    const form = page.locator('[data-readiness-call][data-operation="' + number + '"]');
    await form.locator('input[name="status"][value="' + (number === '01' ? 'insufficient' : 'developing') + '"]').check();
    await form.locator('textarea[name="evidence"]').fill('Operation ' + number + ' audit evidence');
    await form.getByRole('button', { name: 'Save evidence + status' }).click();
  }
  out.readinessBeforeReload = await page.evaluate(() => JSON.parse(localStorage.getItem('mrjohn-mars-readiness-v1') || '{}'));
  out.scienceStripAfterSave = await page.locator('[data-understand-status="science"]').textContent();

  await page.reload({ waitUntil: 'networkidle' });
  out.readinessAfterReload = {};
  for (const number of ['01','02','03','04']) {
    const form = page.locator('[data-readiness-call][data-operation="' + number + '"]');
    out.readinessAfterReload[number] = {
      saved: await form.locator('.save-state').textContent(),
      evidence: await form.locator('textarea[name="evidence"]').inputValue()
    };
  }
  out.matcherAfterReload = await page.locator('[data-operation="03"] [data-evidence-matcher] [data-case] select').evaluateAll((els) => els.map((e) => e.value));

  // Keyboard tab behaviour: Operation 01 and 03.
  const op1Tab = page.locator('[data-operation="01"] [data-cosmic-tab="mars"]');
  await op1Tab.focus();
  await op1Tab.press('ArrowRight');
  out.op01KeyboardFocus = await page.evaluate(() => document.activeElement?.getAttribute('data-cosmic-tab'));
  const op3Tab = page.locator('[data-operation="03"] [data-evidence-tab="optical"]');
  await op3Tab.focus();
  await op3Tab.press('ArrowRight');
  out.op03KeyboardFocus = await page.evaluate(() => document.activeElement?.getAttribute('data-evidence-tab'));

  out.consoleErrors = consoleErrors;
  out.pageErrors = pageErrors;
  report.interactions = out;
  if (consoleErrors.length || pageErrors.length) report.errors.push({ name: 'interaction', consoleErrors, pageErrors });
  await context.close();
}

await fs.writeFile(`${OUT}/report.json`, JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));

const failures = [];
for (const v of report.viewports) {
  if (v.pageOverflow !== 0) failures.push(v.name + ': page overflow ' + v.pageOverflow);
  if (v.operationOverflow.some((x) => x !== 0)) failures.push(v.name + ': operation overflow ' + JSON.stringify(v.operationOverflow));
  if (v.undersizedCoreTargets.length) failures.push(v.name + ': core targets under 44px ' + JSON.stringify(v.undersizedCoreTargets.slice(0,8)));
  if (v.roleImagesMissingLabel) failures.push(v.name + ': role=img missing labels ' + v.roleImagesMissingLabel);
  if (v.htmlImagesMissingAlt) failures.push(v.name + ': images missing alt ' + v.htmlImagesMissingAlt);
  if (v.navLinks !== 4 || v.systemPills !== 7 || !v.scienceFocused || !v.intelLegendCollapsed || v.opCount !== 4) failures.push(v.name + ': overview structure mismatch');
  if (v.consoleErrors.length || v.pageErrors.length) failures.push(v.name + ': JS errors');
}
const i = report.interactions;
if (!String(i.op01.nebulaFeedback).includes('Supported')) failures.push('op01 nebula check');
if (!String(i.op01.addressFeedback).includes('Supported')) failures.push('op01 address check');
if (!String(i.op02.retroFeedback).includes('Supported')) failures.push('op02 retrograde');
if (i.op02.phase !== 'Nearly full') failures.push('op02 Venus phase');
if (!String(i.op02.venusFeedback).includes('Supported')) failures.push('op02 Venus answer');
if (!i.op02.predBefore || !String(i.op02.predictionFeedback).includes('Supported')) failures.push('op02 prediction');
if (!String(i.op02.synthesisFeedback).includes('Supported')) failures.push('op02 synthesis');
if (i.reducedMotion.stage !== '2' || !String(i.reducedMotion.copy).includes('Reduced-motion')) failures.push('reduced motion');
if (!String(i.op03.toolFeedback).includes('Supported') || i.op03.matcherScore !== '4 / 4 supported') failures.push('op03 evidence');
if (!String(i.op04.envFeedback).includes('Supported') || !String(i.op04.consequenceFeedback).includes('Correct connection')) failures.push('op04 reasoning');
if (!i.readinessBeforeReload.operations || Object.keys(i.readinessBeforeReload.operations).length < 4) failures.push('readiness state');
for (const n of ['01','02','03','04']) if (i.readinessAfterReload[n]?.saved !== 'Saved on this device') failures.push('readiness restore ' + n);
if (JSON.stringify(i.matcherAfterReload) !== JSON.stringify(['surface','composition','radio','motion'])) failures.push('matcher restore');
if (i.op01KeyboardFocus !== 'solar') failures.push('op01 keyboard tabs');
if (i.op03KeyboardFocus !== 'radio') failures.push('op03 keyboard tabs');

if (failures.length) {
  console.error('AUDIT FAILURES', failures);
  process.exit(1);
}
console.log('UNDERSTAND REDESIGN AUDIT PASSED');
await browser.close();
