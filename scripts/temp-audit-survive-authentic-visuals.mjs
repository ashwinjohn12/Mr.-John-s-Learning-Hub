import { chromium } from 'playwright';
import fs from 'node:fs/promises';

const URL='http://127.0.0.1:4321/Mr.-John-s-Learning-Hub/courses/grade-9-science/space-exploration/mars-readiness/survive/';
const OUT='artifacts/survive-authentic-visuals';
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
    const controls=[...document.querySelectorAll('button,select,summary,.status-choice')]
      .filter(el=>{const r=el.getBoundingClientRect(),s=getComputedStyle(el);return r.width>0&&r.height>0&&s.display!=='none'&&s.visibility!=='hidden'});
    const visualOverflow=[...document.querySelectorAll('.survive-intel-visual,.survive-authentic-figure')]
      .map(el=>Math.max(0,el.scrollWidth-el.clientWidth));
    return {
      pageOverflow:Math.max(0,root.scrollWidth-root.clientWidth),
      opOverflow:ops.map(el=>Math.max(0,el.scrollWidth-el.clientWidth)),
      visualOverflow,
      minControl:controls.length?Math.min(...controls.map(el=>Math.round(el.getBoundingClientRect().height))):null,
      undersized:controls.filter(el=>el.getBoundingClientRect().height<44).map(el=>({tag:el.tagName,text:(el.textContent||'').trim().slice(0,50),h:Math.round(el.getBoundingClientRect().height)})),
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
const pageErrors=[];
page.on('pageerror',e=>pageErrors.push(String(e)));
await page.goto(URL,{waitUntil:'networkidle'});
await page.evaluate(()=>localStorage.clear());
await page.reload({waitUntil:'networkidle'});
await waitImages(page);
const out={};

// Op09 Hazard Analyzer
const op9=page.locator('[data-operation="09"]');
const hazard=op9.locator('[data-hazard-analyzer]');
const hazardSelects=hazard.locator('[data-hazard-select]');
for(let i=0;i<await hazardSelects.count();i++) await hazardSelects.nth(i).selectOption(i===5?'Critical':'Serious');
await hazard.locator('[data-reveal-hazards]').click();
await hazardSelects.nth(4).selectOption('Manageable with established approaches');
await hazard.locator('[data-hazard-reflection]').fill('Radiation remained a high priority because the evidence shows long-duration exposure must be managed.');
await hazard.locator('[data-save-hazards]').click();
out.op09={
  cards:await hazard.locator('[data-hazard]').count(),
  feedback:await hazard.locator('[data-hazard-feedback]').textContent(),
  stored:await page.evaluate(()=>localStorage.getItem('mrjohn-mars-hazard-analyzer-v1'))
};

// Op10 Life Support Flow
const op10=page.locator('[data-operation="10"]');
const life=op10.locator('[data-life-support-flow]');
await life.locator('[data-toggle-system="co2"]').click();
await life.locator('[data-toggle-system="water"]').click();
await life.locator('[data-failure-choice]').selectOption('co2');
await life.locator('[data-failure-reasoning]').fill('If CO2 removal stops, carbon dioxide builds up and cabin air becomes unsafe.');
await life.locator('[data-save-life-support]').click();
out.op10={
  toggles:await life.locator('[data-toggle-system]').count(),
  feedback:await life.locator('[data-life-support-feedback]').textContent(),
  stored:await page.evaluate(()=>localStorage.getItem('mrjohn-mars-life-support-flow-v1'))
};

// Op11 Resource Tradeoff
const op11=page.locator('[data-operation="11"]');
const resource=op11.locator('[data-resource-tradeoff]');
for(const [name,value] of [['resource-oxygen','make'],['resource-water','hybrid'],['resource-propellant','hybrid'],['resource-materials','bring']]){
  await resource.locator('input[name="'+name+'"][value="'+value+'"]').check();
}
await resource.locator('[data-resource-choice]').fill('Use a hybrid water strategy so stored reserves back up local recovery.');
await resource.locator('[data-resource-risk]').fill('Local equipment can fail or resources may be harder to access than expected.');
await resource.locator('[data-save-resources]').click();
out.op11={
  groups:await resource.locator('[data-resource]').count(),
  feedback:await resource.locator('[data-resource-feedback]').textContent(),
  stored:await page.evaluate(()=>localStorage.getItem('mrjohn-mars-resource-tradeoff-v1'))
};

// Op12 protected classroom engineering sequence
const op12=page.locator('[data-operation="12"]');
out.op12={
  engineeringBriefs:await op12.locator('.engineering-brief.water-brief').count(),
  cycleSteps:await op12.locator('.engineering-cycle.water-cycle > div').count(),
  warning:await op12.locator('.water-warning').textContent(),
  formula:await op12.locator('.recovery-formula').textContent()
};

// Readiness calls
for(const n of ['09','10','11','12']){
  const form=page.locator('[data-readiness-call][data-operation="'+n+'"]');
  await form.locator('input[name="status"][value="developing"]').check();
  await form.locator('textarea[name="evidence"]').fill('SURVIVE authentic visual audit '+n);
  await form.getByRole('button',{name:'Save evidence + status'}).click();
}
out.readinessBefore=await page.evaluate(()=>JSON.parse(localStorage.getItem('mrjohn-mars-readiness-v1')||'{}'));
await page.reload({waitUntil:'networkidle'});
out.readinessAfter={};
for(const n of ['09','10','11','12']){
  const form=page.locator('[data-readiness-call][data-operation="'+n+'"]');
  out.readinessAfter[n]={saved:await form.locator('.save-state').textContent(),evidence:await form.locator('textarea').inputValue()};
}
out.hazardRestored=await page.evaluate(()=>localStorage.getItem('mrjohn-mars-hazard-analyzer-v1'));
out.lifeRestored=await page.evaluate(()=>localStorage.getItem('mrjohn-mars-life-support-flow-v1'));
out.resourceRestored=await page.evaluate(()=>localStorage.getItem('mrjohn-mars-resource-tradeoff-v1'));
out.pageErrors=pageErrors;
report.interactions=out;

if(out.op09.cards!==6||!String(out.op09.feedback).includes('saved')) report.failures.push('Op09 hazard analyzer');
if(out.op10.toggles!==4||!String(out.op10.feedback).includes('saved')) report.failures.push('Op10 life support');
if(out.op11.groups!==4||!String(out.op11.feedback).includes('saved')) report.failures.push('Op11 resource tradeoff');
if(out.op12.engineeringBriefs!==2||out.op12.cycleSteps!==5||!String(out.op12.warning).includes('Do not drink')||!String(out.op12.formula).includes('× 100')) report.failures.push('Op12 engineering sequence');
if(Object.keys(out.readinessBefore.operations||{}).filter(n=>['09','10','11','12'].includes(n)).length!==4) report.failures.push('Readiness save');
for(const n of ['09','10','11','12']) if(out.readinessAfter[n]?.saved!=='Saved on this device') report.failures.push('Readiness restore '+n);
if(!out.hazardRestored||!out.lifeRestored||!out.resourceRestored) report.failures.push('Widget storage restore');
if(pageErrors.length) report.failures.push('Page errors');

await context.close();
await fs.writeFile(`${OUT}/report.json`,JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));
await browser.close();
if(report.failures.length){console.error('FAIL',report.failures);process.exit(1);}
console.log('SURVIVE AUTHENTIC VISUAL AUDIT PASSED');
