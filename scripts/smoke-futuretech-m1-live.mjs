import { chromium } from 'playwright';

const URL = 'https://ashwinjohn12.github.io/Mr.-John-s-Learning-Hub/courses/futuretech-lab/creator-foundations/mission-1-make-it-happen/';
const STORAGE_KEY = 'futuretech-level1-mission1-v2';
const checks = [];
const ok = (cond, label) => {
  if (!cond) throw new Error('LIVE SMOKE FAILED: ' + label);
  checks.push(label);
  console.log('✓', label);
};
const sleep = ms => new Promise(r => setTimeout(r, ms));

const browser = await chromium.launch({headless:true});
const context = await browser.newContext({viewport:{width:1366,height:768}});
const page = await context.newPage();
page.on('console', msg => { if (msg.type()==='error') console.log('BROWSER CONSOLE ERROR:', msg.text()); });
page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

await page.goto(URL,{waitUntil:'networkidle'});
ok((await page.locator('h1').innerText()).includes('Debug the System'),'production page is Mission 1 Debug the System');
await page.evaluate(k=>localStorage.removeItem(k),STORAGE_KEY);
await page.reload({waitUntil:'networkidle'});

// GET
ok(await page.getByText('SYSTEM TEST FAILED',{exact:true}).first().isVisible(),'GET shows failed-system hook');
await page.locator('[data-run-sim="get"]').click();
await page.waitForFunction(()=>document.querySelector('[data-simulator="get"] [data-sim-status]')?.textContent?.includes('FAILED'));
ok(true,'GET simulator runs and reports failure');
await page.getByRole('button',{name:'START MISSION'}).click();

// LEARN + TRY4 keyboard
ok(await page.getByText('Debugging is not guessing. It is testing.').isVisible(),'LEARN shows debugging model');
const try4Button=page.locator('[data-open-try4]').first();
await try4Button.focus();
await page.keyboard.press('Enter');
ok(await page.locator('[data-try4-dialog]').evaluate(el=>el.open),'TRY 4 opens from keyboard');
await page.keyboard.press('Escape');
ok(!(await page.locator('[data-try4-dialog]').evaluate(el=>el.open)),'TRY 4 closes with Escape');
await page.getByRole('button',{name:'CONTINUE TO TRY'}).click();

// TRY run-before-edit, incorrect + correct
const tryCommands=page.locator('[data-simulator="try"] .command-card');
ok(await tryCommands.first().isDisabled(),'TRY commands are locked before first run');
await page.locator('[data-run-sim="try"]').click();
await page.waitForFunction(()=>document.querySelector('[data-simulator="try"] [data-sim-status]')?.textContent==='TEST FAILED');
ok(!(await tryCommands.first().isDisabled()),'TRY commands unlock after test');
await tryCommands.nth(0).click();
ok((await page.locator('[data-simulator="try"] [data-sim-feedback]').innerText()).includes('Not yet'),'TRY incorrect diagnosis gives non-answer feedback');
await tryCommands.nth(1).click();
await page.locator('[data-simulator="try"] [data-replacement]').selectOption({label:'TURN LEFT'});
await page.locator('[data-simulator="try"] [data-apply-change]').click();
await page.locator('[data-run-sim="try"]').click();
await page.waitForFunction(()=>document.querySelector('[data-simulator="try"] [data-sim-status]')?.textContent?.includes('FIXED'));
ok(await page.locator('[data-try-complete]').isVisible(),'TRY correct repair unlocks completion');
await page.getByRole('button',{name:'GO TO BUILD'}).click();

// BUILD + hint + support levels
const buildCommands=page.locator('[data-simulator="build"] .command-card');
ok(await buildCommands.first().isDisabled(),'BUILD enforces run-before-edit');
await page.locator('[data-run-sim="build"]').click();
await page.waitForFunction(()=>document.querySelector('[data-simulator="build"] [data-sim-status]')?.textContent==='CALIBRATION FAILED');
await page.locator('[data-build-hint] summary').click();
ok((await page.locator('[data-build-hint]').innerText()).includes('first moment'),'BUILD Hint points to first mismatch');
await page.locator('[data-open-support]').click();
ok(await page.locator('[data-support-level="1"]').isVisible(),'Support Level 1 opens');
await page.locator('[data-more-support="2"]').click();
ok(await page.locator('[data-support-level="2"]').isVisible(),'Support Level 2 opens');
await page.locator('[data-more-support="3"]').click();
ok(await page.locator('[data-support-level="3"]').isVisible(),'Support Level 3 opens');
await page.locator('[data-support-dialog] .btn.primary').click();
await buildCommands.nth(3).click();
await page.locator('[data-simulator="build"] [data-replacement]').selectOption({label:'TURN RIGHT'});
await page.locator('[data-simulator="build"] [data-apply-change]').click();
await page.locator('[data-run-sim="build"]').click();
await page.waitForFunction(()=>document.querySelector('[data-simulator="build"] [data-sim-status]')?.textContent?.includes('PASSED'));
ok(await page.locator('[data-build-complete]').isVisible(),'BUILD correct repair passes calibration');
await page.getByRole('button',{name:'PROVE IT'}).click();

// PROVE failed-prediction recovery
await page.locator('[data-run-sim="prove"]').click();
await page.waitForFunction(()=>!document.querySelector('[data-prediction-form]')?.hidden);
await page.locator('[data-predict-command]').selectOption('1');
await page.locator('[data-predict-why]').fill('I think the turn caused the first mismatch.');
await page.locator('[data-predict-result]').fill('The unit should reach the target.');
await page.getByRole('button',{name:'LOCK IN PREDICTION'}).click();
await page.locator('[data-simulator="prove"] [data-replacement]').selectOption({label:'TURN RIGHT'});
await page.locator('[data-simulator="prove"] [data-apply-change]').click();
await page.locator('[data-run-sim="prove"]').click();
await page.waitForFunction(()=>document.querySelector('[data-simulator="prove"] [data-sim-feedback]')?.textContent?.includes('new prediction'));
ok(await page.locator('[data-prediction-form]').isVisible(),'failed PROVE prediction resets for a new prediction');
await page.locator('[data-predict-command]').selectOption('2');
await page.locator('[data-predict-why]').fill('The unit moves only one space where the route needs two.');
await page.locator('[data-predict-result]').fill('The unit should complete the route.');
await page.getByRole('button',{name:'LOCK IN PREDICTION'}).click();
await page.locator('[data-simulator="prove"] [data-replacement]').selectOption({label:'FORWARD 2'});
await page.locator('[data-simulator="prove"] [data-apply-change]').click();
await page.locator('[data-run-sim="prove"]').click();
await page.waitForFunction(()=>document.querySelector('[data-simulator="prove"] [data-sim-status]')?.textContent?.includes('EVIDENCE FOUND'));
await page.locator('[data-compare="yes"]').click();
ok(await page.locator('[data-prove-complete]').isVisible(),'correct PROVE repair unlocks evidence stage');
await page.getByRole('button',{name:'SHOW YOUR EVIDENCE'}).click();

// CHECK, persistence, Creator Extension
await page.locator('[name="changed"]').fill('FORWARD 1 to FORWARD 2');
await page.locator('[name="because"]').fill('the route first became short on the north movement');
await page.locator('[name="showed"]').fill('the unit reached the target');
await page.locator('[name="next"]').fill('the next command after the mismatch');
await page.getByRole('button',{name:'SUBMIT EVIDENCE'}).click();
ok(await page.locator('[data-evidence-saved]').isVisible(),'evidence submission reaches teacher-check state');
ok(await page.locator('[data-creator-extension]').isVisible(),'Creator Extension unlocks while waiting');

await page.locator('[data-creator-bug]').fill('Change one movement so the route stops early.');
await page.locator('[data-creator-command]').selectOption('2');
await page.locator('[data-creator-replacement]').selectOption('F1');
await page.locator('[data-create-bug]').click();
ok(await page.locator('[data-creator-broken]').isVisible(),'Creator Extension creates an actual broken command stack');
await page.locator('[data-hand-partner]').click();
await page.locator('[data-partner-command]').selectOption('2');
await page.locator('[data-partner-prediction]').fill('The third command is shorter than the intended route.');
await page.locator('[data-partner-test]').click();
ok((await page.locator('[data-creator-feedback]').innerText()).includes('Diagnosis confirmed'),'Creator Extension partner diagnosis verifies the changed command');

// Backup route
await page.locator('[data-open-backup]').click();
ok(await page.locator('[data-backup-dialog]').evaluate(el=>el.open),'Backup Route opens');
ok((await page.locator('[data-backup-dialog]').innerText()).includes('FORWARD 2'),'Backup Route uses matching command language');
await page.keyboard.press('Escape');

// Reload persistence
await page.reload({waitUntil:'networkidle'});
ok(await page.locator('[data-stage-panel="5"]').isVisible(),'reload resumes at CHECK');
ok(await page.locator('[data-evidence-saved]').isVisible(),'saved evidence survives reload');
ok((await page.locator('[name="changed"]').inputValue()).includes('FORWARD 1'),'evidence field values restore after reload');

// Teacher retry state reset
await page.locator('.teacher-check summary').click();
await page.locator('[data-teacher-retry]').click();
ok(await page.locator('[data-stage-panel="4"]').isVisible(),'One More Try returns student to PROVE');
ok(await page.locator('[data-evidence-saved]').isHidden(),'One More Try clears stale evidence-saved state');

// teacher verify via seeded valid CHECK state
await page.evaluate(k=>{
 localStorage.setItem(k,JSON.stringify({
   stage:5,unlocked:[0,1,2,3,4,5],tryFixed:true,buildFixed:true,proveFixed:true,
   evidenceSubmitted:true,evidence:{changed:'FORWARD 1 to FORWARD 2',because:'first mismatch',showed:'target reached',next:'next command'}
 }));
},STORAGE_KEY);
await page.reload({waitUntil:'networkidle'});
await page.locator('.teacher-check summary').click();
await page.locator('[data-passport-rating]').selectOption('D');
await page.locator('[data-teacher-verify]').click();
ok(await page.locator('[data-mission-complete]').isVisible(),'Teacher Verify completes mission');
ok((await page.locator('[data-rating-output]').innerText())==='D','teacher-selected Passport rating is shown');

// Fast Track on clean state
await page.evaluate(k=>localStorage.removeItem(k),STORAGE_KEY);
await page.reload({waitUntil:'networkidle'});
await page.getByRole('button',{name:'START MISSION'}).click();
await page.locator('[data-open-fast-track]').click();
await page.locator('[data-run-sim="fast"]').click();
await page.waitForFunction(()=>!document.querySelector('[data-fast-predict]')?.hidden);
await page.locator('[data-fast-command]').selectOption('2');
await page.locator('[data-fast-why]').fill('The later turn only looks wrong because the unit is already one space short.');
await page.locator('[data-fast-lock]').click();
await page.locator('[data-simulator="fast"] [data-replacement]').selectOption({label:'FORWARD 2'});
await page.locator('[data-simulator="fast"] [data-apply-change]').click();
await page.locator('[data-run-sim="fast"]').click();
await page.waitForFunction(()=>!document.querySelector('[data-fast-result]')?.hidden);
ok((await page.locator('[data-fast-result]').innerText()).includes('FAST TRACK VERIFIED'),'Fast Track verifies root-cause repair');

// Text alternatives / no drag
const a11y=await page.evaluate(()=>({
 grids:[...document.querySelectorAll('[data-grid]')].every(g=>Boolean(g.getAttribute('aria-label'))),
 draggable:document.querySelectorAll('[draggable="true"]').length,
 ariaLive:document.querySelectorAll('[aria-live="polite"]').length
}));
ok(a11y.grids,'all simulator grids have text alternatives');
ok(a11y.draggable===0,'no required drag interaction');
ok(a11y.ariaLive>0,'status updates include live regions');

// Reduced motion behavior
await page.emulateMedia({reducedMotion:'reduce'});
await page.evaluate(k=>localStorage.removeItem(k),STORAGE_KEY);
await page.reload({waitUntil:'networkidle'});
const reduced=await page.evaluate(()=>matchMedia('(prefers-reduced-motion: reduce)').matches);
ok(reduced,'reduced-motion preference is detected');
const t0=Date.now();
await page.locator('[data-run-sim="get"]').click();
await page.waitForFunction(()=>document.querySelector('[data-simulator="get"] [data-sim-status]')?.textContent?.includes('FAILED'));
ok(Date.now()-t0<900,'reduced-motion test avoids step animation delays');

// Overflow at requested widths, on BUILD-like dense state
for (const width of [1366,1024,390,375,320]) {
  await page.setViewportSize({width,height:width>=1000?768:780});
  await page.evaluate(k=>localStorage.setItem(k,JSON.stringify({stage:3,unlocked:[0,1,2,3],tryFixed:true})),STORAGE_KEY);
  await page.reload({waitUntil:'networkidle'});
  const dims=await page.evaluate(()=>({sw:document.documentElement.scrollWidth,cw:document.documentElement.clientWidth,bw:document.body.scrollWidth}));
  ok(dims.sw<=dims.cw+1 && dims.bw<=dims.cw+1,`no horizontal overflow at ${width}px`);
}

// Projector readability heuristic
await page.setViewportSize({width:1920,height:1080});
await page.evaluate(k=>localStorage.setItem(k,JSON.stringify({stage:3,unlocked:[0,1,2,3],tryFixed:true})),STORAGE_KEY);
await page.reload({waitUntil:'networkidle'});
const sizes=await page.evaluate(()=>{
 const css=s=>parseFloat(getComputedStyle(document.querySelector(s)).fontSize);
 return {h1:css('h1'),h2:css('[data-stage-panel="3"] h2'),cmd:css('.command-card'),status:css('.sim-status')};
});
ok(sizes.h1>=32 && sizes.h2>=24 && sizes.cmd>=13 && sizes.status>=10,'projector view keeps headings, commands, and status legible');

console.log(`LIVE MISSION 1 SMOKE PASSED: ${checks.length} checks`);
await browser.close();
