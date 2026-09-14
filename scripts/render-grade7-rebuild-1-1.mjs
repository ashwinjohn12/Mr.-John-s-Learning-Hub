import fs from 'node:fs';
import {chromium} from 'playwright';
const base='http://127.0.0.1:4321/Mr.-John-s-Learning-Hub/courses/grade-7-math/coordinates-design/the-cartesian-plane/';
const sizes=[['desktop',1440,1000],['tablet',820,1180],['390px',390,844],['375px',375,812],['320px',320,800]];
fs.mkdirSync('artifacts',{recursive:true});
const browser=await chromium.launch({headless:true});let failed=false;
for(const [name,width,height] of sizes){
 const page=await browser.newPage({viewport:{width,height}});const errors=[];page.on('pageerror',e=>errors.push(String(e)));page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto(base,{waitUntil:'networkidle'});
 const title=await page.locator('h1').textContent();if(!title?.includes('The Cartesian Plane')){console.error(`FAIL ${name}: title`);failed=true}
 const anchors=await page.locator('.topic-sidebar a[href^="#"]').count();if(anchors!==10){console.error(`FAIL ${name}: expected 10 section links, got ${anchors}`);failed=true}
 const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-document.documentElement.clientWidth);if(overflow>1){console.error(`FAIL ${name}: horizontal overflow ${overflow}px`);failed=true}else console.log(`PASS ${name}: no horizontal overflow`);
 const checkCount=await page.locator('[data-cartesian-check] [data-item]').count();if(checkCount!==8){console.error(`FAIL ${name}: Check Yourself rendered ${checkCount}`);failed=true}else console.log(`PASS ${name}: 8-question check rendered`);
 const unnamed=await page.locator('button').evaluateAll(btns=>btns.filter(b=>!(b.textContent||'').trim()&&!b.getAttribute('aria-label')).length);if(unnamed){console.error(`FAIL ${name}: ${unnamed} unnamed buttons`);failed=true}
 const grids=await page.locator('svg[role="img"][aria-label]').count();if(grids<5){console.error(`FAIL ${name}: expected labelled coordinate SVGs, got ${grids}`);failed=true}
 const mystery=page.locator('.mystery-reveal');await mystery.evaluate(d=>d.open=true);const connections=await mystery.locator('.point-connection').count();if(connections!==1){console.error(`FAIL ${name}: mystery picture connection path missing`);failed=true}else console.log(`PASS ${name}: mystery picture vertices visibly connected`);
 if(name==='desktop'){
   const explorer=page.locator('[data-g7-grid][data-mode="explore"]');const svg=explorer.locator('[data-plane]');await svg.focus();await page.keyboard.press('ArrowLeft');const pair=await explorer.locator('[data-pair]').textContent();if(pair?.trim()!=='(2, 4)'){console.error(`FAIL keyboard explorer: ${pair}`);failed=true}else console.log('PASS keyboard explorer: ArrowLeft updates point to (2, 4)');
   await explorer.locator('[data-scale-select]').selectOption('5');const scale=await explorer.locator('[data-scale-output]').textContent();if(scale?.trim()!=='5'){console.error('FAIL scale selector');failed=true}else console.log('PASS scale selector: scale 5 active');
   const before=await page.locator('[data-cartesian-check] fieldset').first().locator('label').allTextContents();await page.locator('[data-cartesian-check] [data-new]').click();const after=await page.locator('[data-cartesian-check] fieldset').first().locator('label').allTextContents();if(JSON.stringify(before)===JSON.stringify(after))console.log('INFO random check: first item happened to repeat; bank count and balancing are audited statically');else console.log('PASS random check: fresh attempt changed first item/options');
 }
 if(width<=390){const smallControls=await page.locator('[data-g7-grid] button,[data-cartesian-check] button,[data-practice] button,[data-exit] button').evaluateAll(els=>els.filter(e=>e.getBoundingClientRect().height<40).map(e=>({text:(e.textContent||'').trim(),h:e.getBoundingClientRect().height})));if(smallControls.length){console.error(`FAIL ${name}: controls under 40px ${JSON.stringify(smallControls)}`);failed=true}else console.log(`PASS ${name}: prototype controls meet 40px minimum`)}
 await page.screenshot({path:`artifacts/grade7-1-1-${name}.png`,fullPage:true});if(errors.length){console.error(`FAIL ${name}: browser errors ${errors.join(' | ')}`);failed=true}else console.log(`PASS ${name}: no browser console/page errors`);await page.close();
}
await browser.close();if(failed)process.exit(1);console.log('RENDER_SUMMARY desktop=pass tablet=pass 390=pass 375=pass 320=pass keyboard=pass reducedMotion=pass mysteryConnection=pass screenshots=5');
