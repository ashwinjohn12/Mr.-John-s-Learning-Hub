import { chromium } from 'playwright';
import fs from 'node:fs/promises';

const BASE='http://127.0.0.1:4321/Mr.-John-s-Learning-Hub';
const URL=BASE+'/courses/grade-9-science/space-exploration/mars-readiness/understand/';
const OUT='artifacts/understand-authentic-visuals';
await fs.mkdir(OUT,{recursive:true});
const browser=await chromium.launch({headless:true});
const report={url:URL,viewports:[],interactions:{},imageAudit:{},errors:[]};

async function waitImages(page){
  return await page.evaluate(async()=>{
    const imgs=[...document.images];
    await Promise.all(imgs.map(img=>new Promise(resolve=>{
      img.loading='eager';
      if(img.complete) return resolve();
      const done=()=>resolve();
      img.addEventListener('load',done,{once:true});
      img.addEventListener('error',done,{once:true});
      setTimeout(done,12000);
    })));
    return imgs.map(img=>({
      src:img.currentSrc||img.src,
      alt:img.alt,
      ok:img.complete&&img.naturalWidth>0,
      w:img.naturalWidth,
      h:img.naturalHeight
    }));
  });
}

const viewports=[
 ['desktop',1440,900],
 ['tablet',1024,768],
 ['390',390,844],
 ['375',375,812],
 ['320',320,700]
];

for(const [name,width,height] of viewports){
  const context=await browser.newContext({viewport:{width,height}});
  const page=await context.newPage();
  const consoleErrors=[],pageErrors=[];
  page.on('console',m=>{if(m.type()==='error') consoleErrors.push(m.text())});
  page.on('pageerror',e=>pageErrors.push(String(e)));
  await page.goto(URL,{waitUntil:'networkidle'});
  const images=await waitImages(page);
  const data=await page.evaluate(()=>{
    const root=document.documentElement;
    const ops=[...document.querySelectorAll('.mars-operation')];
    const controls=[...document.querySelectorAll('button,select,summary,.status-choice,.op01-check label,.lab-question label')]
      .filter(el=>{const r=el.getBoundingClientRect(),s=getComputedStyle(el);return r.width>0&&r.height>0&&s.display!=='none'&&s.visibility!=='hidden'});
    const heights=controls.map(el=>Math.round(el.getBoundingClientRect().height));
    return {
      pageOverflow:Math.max(0,root.scrollWidth-root.clientWidth),
      operationOverflow:ops.map(el=>Math.max(0,el.scrollWidth-el.clientWidth)),
      minTarget:heights.length?Math.min(...heights):null,
      undersized:heights.filter(h=>h<44).length,
      ops:ops.length,
      authenticFigures:document.querySelectorAll('figure.authentic-evidence').length,
      allImgs:[...document.images].length,
      missingAlt:[...document.images].filter(i=>!i.alt).length
    };
  });
  await page.screenshot({path:`${OUT}/${name}.png`,fullPage:true});
  report.viewports.push({name,width,height,...data,images,consoleErrors,pageErrors});
  if(data.pageOverflow||data.operationOverflow.some(x=>x)||data.undersized||data.missingAlt||images.some(i=>!i.ok)||consoleErrors.length||pageErrors.length){
    report.errors.push({name,data,imageFailures:images.filter(i=>!i.ok),consoleErrors,pageErrors});
  }
  await context.close();
}

const context=await browser.newContext({viewport:{width:1440,height:900}});
const page=await context.newPage();
const consoleErrors=[],pageErrors=[];
page.on('console',m=>{if(m.type()==='error') consoleErrors.push(m.text())});
page.on('pageerror',e=>pageErrors.push(String(e)));
await page.goto(URL,{waitUntil:'networkidle'});
await page.evaluate(()=>localStorage.clear());
await page.reload({waitUntil:'networkidle'});
await waitImages(page);
const out={};

// Op01
const op1=page.locator('[data-operation="01"]');
const zoom=[];
zoom.push(await op1.locator('[data-zoom-position]').textContent());
for(let i=0;i<3;i++){await op1.locator('[data-zoom-out]').click();zoom.push(await op1.locator('[data-zoom-position]').textContent());}
await op1.locator('input[name="op01-nebula"][value="inside"]').check();
await op1.locator('[data-check-nebula]').click();
const a=op1.locator('[data-address-slot]');
await a.nth(0).selectOption('solar');await a.nth(1).selectOption('galaxy');await a.nth(2).selectOption('universe');
await op1.locator('[data-check-address]').click();
out.op01={zoom,nebula:await op1.locator('[data-nebula-feedback]').textContent(),address:await op1.locator('[data-address-feedback]').textContent()};

// Op02
const op2=page.locator('[data-operation="02"]');
await op2.locator('[data-retro-stage="1"]').click();
await op2.locator('input[name="retrograde-answer"][value="viewpoint"]').check();
await op2.locator('[data-check-question="retrograde"]').click();
await op2.getByRole('tab',{name:/2 · Venus/}).click();
await op2.locator('[data-venus-position="full"]').click();
await op2.locator('input[name="venus-answer"][value="heliocentric"]').check();
await op2.locator('[data-check-question="venus"]').click();
await op2.getByRole('tab',{name:/3 · Prediction/}).click();
const predDisabled=await op2.locator('[data-check-question="prediction"]').isDisabled();
await op2.locator('[data-reveal-observation]').click();
await op2.locator('input[name="prediction-answer"][value="increase"]').check();
await op2.locator('[data-check-question="prediction"]').click();
out.op02={
 retro:await op2.locator('[data-feedback="retrograde"]').textContent(),
 venus:await op2.locator('[data-feedback="venus"]').textContent(),
 phase:await op2.locator('[data-venus-phase-name]').textContent(),
 predDisabled,
 prediction:await op2.locator('[data-feedback="prediction"]').textContent(),
 northStarImg:await op2.locator('.north-star-visual img').evaluate(i=>({ok:i.complete&&i.naturalWidth>0,alt:i.alt,src:i.currentSrc||i.src}))
};

// Op03
const op3=page.locator('[data-operation="03"]');
const toolPanels={};
for(const tab of ['optical','radio','spectrum','doppler']){
  await op3.locator('[data-evidence-tab="'+tab+'"]').click();
  toolPanels[tab]=await op3.locator('[data-evidence-panel="'+tab+'"] h5').textContent();
}
await op3.locator('.op03-retrieval-check summary').click();
await op3.locator('[data-question-select]').selectOption('spectrum');
await op3.locator('[data-tool-select]').selectOption('spectrum');
await op3.locator('[data-check-tool]').click();
const matcher=op3.locator('[data-evidence-matcher] [data-case] select');
await matcher.nth(0).selectOption('surface');await matcher.nth(1).selectOption('composition');await matcher.nth(2).selectOption('radio');await matcher.nth(3).selectOption('motion');
await op3.locator('[data-check-matcher]').click();
out.op03={toolPanels,toolFeedback:await op3.locator('[data-tool-feedback]').textContent(),matcherScore:await op3.locator('.matcher-score').textContent(),matcherSaved:await page.evaluate(()=>localStorage.getItem('mrjohn-mars-evidence-matcher-v1'))};

// Op04
const op4=page.locator('[data-operation="04"]');
await op4.locator('[data-family="rocky"]').click();
const env={};
for(const tab of ['atmosphere','temperature','gravity','water']){
  await op4.locator('[data-env-tab="'+tab+'"]').click();
  env[tab]=await op4.locator('[data-env-panel="'+tab+'"] h5').textContent();
}
await op4.locator('[data-env-tab="gravity"]').click();
await op4.locator('[data-env-check] select').selectOption('health');
await op4.locator('[data-check-env]').click();
await op4.locator('[data-evidence-select]').selectOption('gravity');
await op4.locator('[data-consequence-select]').selectOption('health');
await op4.locator('[data-system-select]').selectOption('health-system');
await op4.locator('[data-check-consequence]').click();
out.op04={family:await op4.locator('[data-family-readout] strong').textContent(),env,envFeedback:await op4.locator('[data-env-feedback]').textContent(),consequence:await op4.locator('[data-consequence-feedback]').textContent()};

// Readiness persistence
for(const n of ['01','02','03','04']){
 const form=page.locator('[data-readiness-call][data-operation="'+n+'"]');
 await form.locator('input[name="status"][value="'+(n==='01'?'insufficient':'developing')+'"]').check();
 await form.locator('textarea[name="evidence"]').fill('Authentic visual audit '+n);
 await form.getByRole('button',{name:'Save evidence + status'}).click();
}
out.readinessState=await page.evaluate(()=>JSON.parse(localStorage.getItem('mrjohn-mars-readiness-v1')||'{}'));
await page.reload({waitUntil:'networkidle'});
out.readinessRestore={};
for(const n of ['01','02','03','04']){
 const form=page.locator('[data-readiness-call][data-operation="'+n+'"]');
 out.readinessRestore[n]={saved:await form.locator('.save-state').textContent(),evidence:await form.locator('textarea[name="evidence"]').inputValue()};
}
out.matcherRestore=await page.locator('[data-operation="03"] [data-evidence-matcher] select').evaluateAll(es=>es.map(e=>e.value));

// Keyboard
await page.locator('[data-operation="01"] [data-cosmic-tab="mars"]').focus();
await page.locator('[data-operation="01"] [data-cosmic-tab="mars"]').press('ArrowRight');
out.op01Keyboard=await page.evaluate(()=>document.activeElement?.getAttribute('data-cosmic-tab'));
await page.locator('[data-operation="03"] [data-evidence-tab="optical"]').focus();
await page.locator('[data-operation="03"] [data-evidence-tab="optical"]').press('ArrowRight');
out.op03Keyboard=await page.evaluate(()=>document.activeElement?.getAttribute('data-evidence-tab'));
out.consoleErrors=consoleErrors;out.pageErrors=pageErrors;
report.interactions=out;
await context.close();

const failures=[];
for(const v of report.viewports){
 if(v.pageOverflow) failures.push(v.name+' page overflow '+v.pageOverflow);
 if(v.operationOverflow.some(x=>x)) failures.push(v.name+' op overflow '+JSON.stringify(v.operationOverflow));
 if(v.undersized) failures.push(v.name+' undersized '+v.undersized);
 if(v.missingAlt) failures.push(v.name+' missing alt '+v.missingAlt);
 if(v.images.some(i=>!i.ok)) failures.push(v.name+' image failure '+JSON.stringify(v.images.filter(i=>!i.ok)));
 if(v.consoleErrors.length||v.pageErrors.length) failures.push(v.name+' errors');
}
if(out.op01.zoom.length!==4||!out.op01.nebula?.includes('Supported')||!out.op01.address?.includes('Supported')) failures.push('Op01 interaction');
if(!out.op02.retro?.includes('Supported')||!out.op02.venus?.includes('Supported')||out.op02.phase!=='Nearly full'||!out.op02.predDisabled||!out.op02.prediction?.includes('Supported')||!out.op02.northStarImg.ok) failures.push('Op02 interaction');
if(out.op03.matcherScore!=='4 / 4 supported'||!out.op03.toolFeedback?.includes('Supported')) failures.push('Op03 interaction');
if(!out.op04.envFeedback?.includes('Supported')||!out.op04.consequence?.includes('Correct connection')) failures.push('Op04 interaction');
if(Object.keys(out.readinessState.operations||{}).length!==4) failures.push('Readiness save');
for(const n of ['01','02','03','04']) if(out.readinessRestore[n]?.saved!=='Saved on this device') failures.push('Readiness restore '+n);
if(JSON.stringify(out.matcherRestore)!==JSON.stringify(['surface','composition','radio','motion'])) failures.push('Matcher restore');
if(out.op01Keyboard!=='solar'||out.op03Keyboard!=='radio') failures.push('Keyboard');
if(out.consoleErrors.length||out.pageErrors.length) failures.push('Interaction errors');

report.failures=failures;
await fs.writeFile(`${OUT}/report.json`,JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));
await browser.close();
if(failures.length){console.error('FAIL',failures);process.exit(1);}
console.log('AUTHENTIC VISUAL AUDIT PASSED');
