import { chromium } from 'playwright';
import fs from 'node:fs/promises';

const URL='http://127.0.0.1:4321/Mr.-John-s-Learning-Hub/courses/grade-9-science/space-exploration/mars-readiness/travel/';
const OUT='artifacts/travel-authentic-visuals';
await fs.mkdir(OUT,{recursive:true});
const browser=await chromium.launch({headless:true});
const report={viewports:[],interactions:{},failures:[]};

async function waitImages(page){
  return page.evaluate(async()=>{
    const imgs=[...document.images];
    await Promise.all(imgs.map(img=>new Promise(resolve=>{
      img.loading='eager';
      if(img.complete) return resolve();
      const done=()=>resolve();
      img.addEventListener('load',done,{once:true});
      img.addEventListener('error',done,{once:true});
      setTimeout(done,12000);
    })));
    return imgs.map(img=>({src:img.currentSrc||img.src,alt:img.alt,ok:img.complete&&img.naturalWidth>0,w:img.naturalWidth,h:img.naturalHeight}));
  });
}

for(const [name,width,height] of [['desktop',1440,900],['tablet',1024,768],['390',390,844],['375',375,812],['320',320,700]]){
  const context=await browser.newContext({viewport:{width,height}});
  const page=await context.newPage();
  const consoleErrors=[],pageErrors=[];
  page.on('console',m=>{if(m.type()==='error')consoleErrors.push(m.text())});
  page.on('pageerror',e=>pageErrors.push(String(e)));
  await page.goto(URL,{waitUntil:'networkidle'});
  const images=await waitImages(page);
  const data=await page.evaluate(()=>{
    const root=document.documentElement;
    const ops=[...document.querySelectorAll('.mars-operation')];
    const controls=[...document.querySelectorAll('button,select,input[type="range"],input[type="radio"],summary,.status-choice')]
      .filter(el=>{const r=el.getBoundingClientRect(),s=getComputedStyle(el);return r.width>0&&r.height>0&&s.display!=='none'&&s.visibility!=='hidden'});
    const blockOverflow=[...document.querySelectorAll('.travel-intel-visual,.travel-propulsion-gallery,.travel-authentic-figure')]
      .map(el=>Math.max(0,el.scrollWidth-el.clientWidth));
    return {
      pageOverflow:Math.max(0,root.scrollWidth-root.clientWidth),
      opOverflow:ops.map(el=>Math.max(0,el.scrollWidth-el.clientWidth)),
      visualOverflow:blockOverflow,
      minControl:controls.length?Math.min(...controls.map(el=>Math.round(el.getBoundingClientRect().height))):null,
      missingAlt:[...document.images].filter(i=>!i.alt).length,
      imageCount:document.images.length,
      opCount:ops.length
    };
  });
  await page.screenshot({path:`${OUT}/${name}.png`,fullPage:true});
  report.viewports.push({name,width,height,...data,images,consoleErrors,pageErrors});
  if(data.pageOverflow||data.opOverflow.some(x=>x)||data.visualOverflow.some(x=>x)||data.missingAlt||images.some(i=>!i.ok)||consoleErrors.length||pageErrors.length){
    report.failures.push({name,data,imageFailures:images.filter(i=>!i.ok),consoleErrors,pageErrors});
  }
  await context.close();
}

const context=await browser.newContext({viewport:{width:1440,height:900}});
const page=await context.newPage();
const errors=[];
page.on('pageerror',e=>errors.push(String(e)));
await page.goto(URL,{waitUntil:'networkidle'});
await page.evaluate(()=>localStorage.clear());
await page.reload({waitUntil:'networkidle'});
await waitImages(page);
const out={};

// Op05 orbit model: set day/prediction, reveal, save
const op5=page.locator('[data-operation="05"]');
const orbit=op5.locator('[data-orbit-model]');
await orbit.locator('[data-mission-day]').fill('180');
await orbit.locator('[data-prediction-angle]').fill('135');
await orbit.locator('[data-prediction-angle]').dispatchEvent('input');
const revealDisabled=await orbit.locator('[data-check-orbit]').isDisabled();
await orbit.locator('[data-check-orbit]').click();
out.op05={revealDisabled,feedback:await orbit.locator('[data-orbit-feedback]').textContent(),stored:await page.evaluate(()=>localStorage.getItem('mrjohn-mars-orbit-model-v1'))};

// Op06 position lab
const op6=page.locator('[data-operation="06"]');
const pos=op6.locator('[data-position-lab]');
await pos.locator('[data-view="B"]').click();
await pos.locator('[data-parallax-distance]').fill('3');
await pos.locator('[data-parallax-distance]').dispatchEvent('input');
await pos.locator('[data-azimuth]').fill('120');
await pos.locator('[data-azimuth]').dispatchEvent('input');
await pos.locator('[data-altitude]').fill('35');
await pos.locator('[data-altitude]').dispatchEvent('input');
await pos.locator('[data-check-position]').click();
out.op06={feedback:await pos.locator('[data-position-feedback]').textContent(),stored:await page.evaluate(()=>localStorage.getItem('mrjohn-mars-position-lab-v1'))};

// Op07 tradeoff exists + priorities still functional
const op7=page.locator('[data-operation="07"]');
const trade=op7.locator('[data-transport-tradeoff]');
const selectors=trade.locator('[data-priority]');
await selectors.nth(0).selectOption('Critical');
out.op07={cards:await trade.locator('.transport-cards article').count(),summary:await trade.locator('[data-priority-summary]').textContent()};

// Op08 protected engineering sequence
const op8=page.locator('[data-operation="08"]');
out.op08={
  landingSteps:await op8.locator('.landing-sequence > div').count(),
  cycleSteps:await op8.locator('.engineering-cycle > div').count(),
  screensDown:await op8.locator('.screens-down').textContent()
};

// Readiness Calls
for(const n of ['05','06','07','08']){
  const form=page.locator('[data-readiness-call][data-operation="'+n+'"]');
  await form.locator('input[name="status"][value="developing"]').check();
  await form.locator('textarea[name="evidence"]').fill('TRAVEL authentic visual audit '+n);
  await form.getByRole('button',{name:'Save evidence + status'}).click();
}
out.readinessBefore=await page.evaluate(()=>JSON.parse(localStorage.getItem('mrjohn-mars-readiness-v1')||'{}'));
await page.reload({waitUntil:'networkidle'});
out.readinessAfter={};
for(const n of ['05','06','07','08']){
  const form=page.locator('[data-readiness-call][data-operation="'+n+'"]');
  out.readinessAfter[n]={saved:await form.locator('.save-state').textContent(),evidence:await form.locator('textarea').inputValue()};
}
out.orbitRestored=await page.evaluate(()=>localStorage.getItem('mrjohn-mars-orbit-model-v1'));
out.positionRestored=await page.evaluate(()=>localStorage.getItem('mrjohn-mars-position-lab-v1'));
out.errors=errors;
report.interactions=out;

if(revealDisabled) report.failures.push('Orbit reveal did not enable');
if(!String(out.op05.feedback).includes('model position')) report.failures.push('Orbit model feedback');
if(!String(out.op06.feedback).includes('Position acquired')) report.failures.push('Position lab');
if(out.op07.cards!==3) report.failures.push('Transport cards changed');
if(out.op08.landingSteps!==3||out.op08.cycleSteps!==5) report.failures.push('Op08 engineering sequence changed');
if(Object.keys(out.readinessBefore.operations||{}).filter(n=>['05','06','07','08'].includes(n)).length!==4) report.failures.push('Readiness save');
for(const n of ['05','06','07','08']) if(out.readinessAfter[n]?.saved!=='Saved on this device') report.failures.push('Readiness restore '+n);
if(errors.length) report.failures.push('Page errors');

await context.close();
await fs.writeFile(`${OUT}/report.json`,JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));
await browser.close();
if(report.failures.length){console.error('FAIL',report.failures);process.exit(1);}
console.log('TRAVEL AUTHENTIC VISUAL AUDIT PASSED');
