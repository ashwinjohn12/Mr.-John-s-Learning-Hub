import { chromium } from 'playwright';
import fs from 'node:fs/promises';
const BASE='http://127.0.0.1:4321/Mr.-John-s-Learning-Hub/courses/grade-9-science/space-exploration/mars-readiness';
const urls={understand:BASE+'/understand/',travel:BASE+'/travel/',survive:BASE+'/survive/',operate:BASE+'/operate/'};
const OUT='artifacts/mars-whole-unit-visual-audit'; await fs.mkdir(OUT,{recursive:true});
const browser=await chromium.launch({headless:true});
const report={viewports:[],images:{},interactions:{},failures:[]};

async function waitImages(page){
  return page.evaluate(async()=>{
    const imgs=[...document.images];
    await Promise.all(imgs.map(img=>new Promise(resolve=>{
      img.loading='eager';
      if(img.complete) return resolve();
      const done=()=>resolve();
      img.addEventListener('load',done,{once:true});
      img.addEventListener('error',done,{once:true});
      setTimeout(done,15000);
    })));
    return imgs.map(img=>({src:img.currentSrc||img.src,alt:img.alt,ok:img.complete&&img.naturalWidth>0,w:img.naturalWidth,h:img.naturalHeight}));
  });
}

for(const [phase,url] of Object.entries(urls)){
  for(const [name,width,height] of [['desktop',1440,900],['tablet',1024,768],['390',390,844],['375',375,812],['320',320,700]]){
    const context=await browser.newContext({viewport:{width,height}});
    const page=await context.newPage(); const ce=[],pe=[];
    page.on('console',m=>{if(m.type()==='error')ce.push(m.text())}); page.on('pageerror',e=>pe.push(String(e)));
    await page.goto(url,{waitUntil:'networkidle'});
    const images=await waitImages(page);
    const d=await page.evaluate(()=>{
      const root=document.documentElement,ops=[...document.querySelectorAll('.mars-operation')];
      const controls=[...document.querySelectorAll('button,select,summary,.status-choice')]
       .filter(el=>{const r=el.getBoundingClientRect(),s=getComputedStyle(el);return r.width>0&&r.height>0&&s.display!=='none'&&s.visibility!=='hidden'});
      const figures=[...document.querySelectorAll('figure,.travel-intel-visual,.travel-propulsion-gallery,.survive-intel-visual,.operate-intel-visual,.operate-power-evidence')];
      return {
        pageOverflow:Math.max(0,root.scrollWidth-root.clientWidth),
        opOverflow:ops.map(x=>Math.max(0,x.scrollWidth-x.clientWidth)),
        figureOverflow:figures.map(x=>Math.max(0,x.scrollWidth-x.clientWidth)),
        minControl:controls.length?Math.min(...controls.map(x=>Math.round(x.getBoundingClientRect().height))):null,
        missingAlt:[...document.images].filter(i=>!i.alt).length,
        captionOverflow:[...document.querySelectorAll('figcaption')].filter(x=>x.scrollWidth>x.clientWidth+1).length,
        operationCount:ops.length,
        focusRule:[...document.styleSheets].some(ss=>{try{return [...ss.cssRules].some(r=>String(r.cssText).includes(':focus-visible'))}catch(e){return false}})
      };
    });
    await page.screenshot({path:`${OUT}/${phase}-${name}.png`,fullPage:true});
    report.viewports.push({phase,name,width,height,...d,images,consoleErrors:ce,pageErrors:pe});
    if(d.pageOverflow||d.opOverflow.some(Boolean)||d.figureOverflow.some(Boolean)||d.missingAlt||d.captionOverflow||images.some(i=>!i.ok)||ce.length||pe.length) report.failures.push(`${phase}-${name}-viewport`);
    await context.close();
  }
}

// Main accumulated-state interaction pass
const context=await browser.newContext({viewport:{width:1440,height:900}});
const page=await context.newPage(); const pageErrors=[]; page.on('pageerror',e=>pageErrors.push(String(e)));
await page.goto(urls.understand,{waitUntil:'networkidle'}); await page.evaluate(()=>localStorage.clear()); await page.reload({waitUntil:'networkidle'});
const out={};

// 01
let op=page.locator('[data-operation="01"]'); const z=[]; z.push(await op.locator('[data-zoom-position]').textContent()); for(let i=0;i<3;i++){await op.locator('[data-zoom-out]').click();z.push(await op.locator('[data-zoom-position]').textContent())}
await op.locator('input[name="op01-nebula"][value="inside"]').check(); await op.locator('[data-check-nebula]').click();
let a=op.locator('[data-address-slot]'); await a.nth(0).selectOption('solar');await a.nth(1).selectOption('galaxy');await a.nth(2).selectOption('universe');await op.locator('[data-check-address]').click();
out.op01={zoom:z,nebula:await op.locator('[data-nebula-feedback]').textContent(),address:await op.locator('[data-address-feedback]').textContent()};

// 02
op=page.locator('[data-operation="02"]'); await op.locator('[data-retro-stage="1"]').click();await op.locator('input[name="retrograde-answer"][value="viewpoint"]').check();await op.locator('[data-check-question="retrograde"]').click();await op.getByRole('tab',{name:/2 · Venus/}).click();await op.locator('[data-venus-position="full"]').click();await op.locator('input[name="venus-answer"][value="heliocentric"]').check();await op.locator('[data-check-question="venus"]').click();await op.getByRole('tab',{name:/3 · Prediction/}).click();const pd=await op.locator('[data-check-question="prediction"]').isDisabled();await op.locator('[data-reveal-observation]').click();await op.locator('input[name="prediction-answer"][value="increase"]').check();await op.locator('[data-check-question="prediction"]').click();out.op02={retro:await op.locator('[data-feedback="retrograde"]').textContent(),phase:await op.locator('[data-venus-phase-name]').textContent(),venus:await op.locator('[data-feedback="venus"]').textContent(),predictionDisabled:pd,prediction:await op.locator('[data-feedback="prediction"]').textContent()};

// 03
op=page.locator('[data-operation="03"]');await op.locator('[data-evidence-tab="radio"]').click();await op.locator('.op03-retrieval-check summary').click();await op.locator('[data-question-select]').selectOption('spectrum');await op.locator('[data-tool-select]').selectOption('spectrum');await op.locator('[data-check-tool]').click();let ms=op.locator('[data-evidence-matcher] [data-case] select');for(const [i,v] of ['surface','composition','radio','motion'].entries())await ms.nth(i).selectOption(v);await op.locator('[data-check-matcher]').click();out.op03={tool:await op.locator('[data-tool-feedback]').textContent(),score:await op.locator('.matcher-score').textContent()};

// 04
op=page.locator('[data-operation="04"]');await op.locator('[data-family="rocky"]').click();await op.locator('[data-env-tab="gravity"]').click();await op.locator('[data-env-check] select').selectOption('health');await op.locator('[data-check-env]').click();await op.locator('[data-evidence-select]').selectOption('gravity');await op.locator('[data-consequence-select]').selectOption('health');await op.locator('[data-system-select]').selectOption('health-system');await op.locator('[data-check-consequence]').click();out.op04={family:await op.locator('[data-family-readout] strong').textContent(),env:await op.locator('[data-env-feedback]').textContent(),consequence:await op.locator('[data-consequence-feedback]').textContent()};

// Save readiness 01-04
for(const n of ['01','02','03','04']){const f=page.locator('[data-readiness-call][data-operation="'+n+'"]');await f.locator('input[name="status"][value="developing"]').check();await f.locator('textarea').fill('Whole-unit audit evidence '+n);await f.getByRole('button',{name:'Save evidence + status'}).click()}

// Travel 05-08
await page.goto(urls.travel,{waitUntil:'networkidle'}); await waitImages(page);
op=page.locator('[data-operation="05"]');let orbit=op.locator('[data-orbit-model]');await orbit.locator('[data-prediction-angle]').fill('135');await orbit.locator('[data-prediction-angle]').dispatchEvent('input');await orbit.locator('[data-check-orbit]').click();out.op05={feedback:await orbit.locator('[data-orbit-feedback]').textContent()};
op=page.locator('[data-operation="06"]');let pos=op.locator('[data-position-lab]');await pos.locator('[data-view="B"]').click();await pos.locator('[data-azimuth]').fill('120');await pos.locator('[data-azimuth]').dispatchEvent('input');await pos.locator('[data-altitude]').fill('35');await pos.locator('[data-altitude]').dispatchEvent('input');await pos.locator('[data-check-position]').click();out.op06={feedback:await pos.locator('[data-position-feedback]').textContent()};
op=page.locator('[data-operation="07"]');let tr=op.locator('[data-transport-tradeoff]');await tr.locator('[data-priority]').nth(0).selectOption('Critical');await tr.locator('input[name="transport-choice"][value="Hybrid electric + chemical"]').check();await tr.locator('[data-strength]').fill('Electric propulsion can move cargo efficiently.');await tr.locator('[data-concern]').fill('Crew travel time and system complexity remain concerns.');await tr.locator('[data-save-transport]').click();out.op07={feedback:await tr.locator('[data-transport-feedback]').textContent()};
op=page.locator('[data-operation="08"]');out.op08={landing:await op.locator('.landing-sequence > div').count(),cycle:await op.locator('.engineering-cycle > div').count()};
for(const n of ['05','06','07','08']){const f=page.locator('[data-readiness-call][data-operation="'+n+'"]');await f.locator('input[name="status"][value="developing"]').check();await f.locator('textarea').fill('Whole-unit audit evidence '+n);await f.getByRole('button',{name:'Save evidence + status'}).click()}

// Survive 09-12
await page.goto(urls.survive,{waitUntil:'networkidle'});await waitImages(page);
op=page.locator('[data-operation="09"]');let hz=op.locator('[data-hazard-analyzer]');let hs=hz.locator('[data-hazard-select]');for(let i=0;i<await hs.count();i++)await hs.nth(i).selectOption(i===5?'Critical':'Serious');await hz.locator('[data-reveal-hazards]').click();await hz.locator('[data-hazard-reflection]').fill('Radiation remains a high priority because long-duration exposure must be managed.');await hz.locator('[data-save-hazards]').click();out.op09={feedback:await hz.locator('[data-hazard-feedback]').textContent()};
op=page.locator('[data-operation="10"]');let lf=op.locator('[data-life-support-flow]');await lf.locator('[data-toggle-system="co2"]').click();await lf.locator('[data-toggle-system="water"]').click();await lf.locator('[data-failure-choice]').selectOption('co2');await lf.locator('[data-failure-reasoning]').fill('CO2 builds up when removal stops.');await lf.locator('[data-save-life-support]').click();out.op10={feedback:await lf.locator('[data-life-support-feedback]').textContent()};
op=page.locator('[data-operation="11"]');let rs=op.locator('[data-resource-tradeoff]');for(const [n,v] of [['resource-oxygen','make'],['resource-water','hybrid'],['resource-propellant','hybrid'],['resource-materials','bring']])await rs.locator('input[name="'+n+'"][value="'+v+'"]').check();await rs.locator('[data-resource-choice]').fill('Use a hybrid water strategy.');await rs.locator('[data-resource-risk]').fill('Local equipment can fail.');await rs.locator('[data-save-resources]').click();out.op11={feedback:await rs.locator('[data-resource-feedback]').textContent()};
op=page.locator('[data-operation="12"]');out.op12={briefs:await op.locator('.water-brief').count(),cycle:await op.locator('.water-cycle > div').count(),warning:await op.locator('.water-warning').textContent()};
for(const n of ['09','10','11','12']){const f=page.locator('[data-readiness-call][data-operation="'+n+'"]');await f.locator('input[name="status"][value="developing"]').check();await f.locator('textarea').fill('Whole-unit audit evidence '+n);await f.getByRole('button',{name:'Save evidence + status'}).click()}

// Operate 13-16
await page.goto(urls.operate,{waitUntil:'networkidle'});await waitImages(page);
op=page.locator('[data-operation="13"]');let mt=op.locator('[data-mission-task-matcher]'),ts=mt.locator('[data-task] select');for(const [i,v] of ['orbiter','lander','rover','rover','orbiter','human'].entries())await ts.nth(i).selectOption(v);await mt.locator('[data-check-tasks]').click();await mt.locator('[data-method-reflection]').fill('A lander cannot travel between distant rock sites.');await mt.locator('[data-save-task-review]').click();out.op13={score:await mt.locator('[data-task-score]').textContent(),save:await mt.locator('[data-task-save-feedback]').textContent()};
op=page.locator('[data-operation="14"]');let nw=op.locator('[data-network-builder]');async function add(x,y){await nw.locator('[data-connection-from]').selectOption(x);await nw.locator('[data-connection-to]').selectOption(y);await nw.locator('[data-add-connection]').click()}await add('Earth','Relay Orbiter');await add('Relay Orbiter','Habitat');await add('Relay Orbiter','Rover');await add('Relay Orbiter','Science Station');await nw.locator('[data-check-network]').click();await nw.locator('input[name="mars-position-candidate"][value="B"]').check();await nw.locator('[data-check-position-network]').click();await nw.locator('[data-network-reflection]').fill('Earth GPS satellites orbit Earth, so Mars needs local reference infrastructure.');await nw.locator('[data-save-network]').click();out.op14={feedback:await nw.locator('[data-network-feedback]').textContent(),position:await nw.locator('[data-network-position-feedback]').textContent(),save:await nw.locator('[data-network-save-feedback]').textContent()};
op=page.locator('[data-operation="15"]');let cr=op.locator('[data-mission-crisis]');for(const id of ['science','food','rover','water'])await cr.locator('[data-crisis-system="'+id+'"]').click();await cr.locator('[data-incident-keep]').fill('Life support, thermal, shelter, communications, ISRU');await cr.locator('[data-incident-pause]').fill('Science, food, rover, water');await cr.locator('[data-incident-risk]').fill('Stored water covers short-term needs while survival systems remain powered.');await cr.locator('[data-incident-individual]').fill('Water recovery was hardest because water is essential, but reserves give short-term backup.');await cr.locator('[data-save-crisis]').click();out.op15={power:await cr.locator('[data-power-used]').textContent(),feedback:await cr.locator('[data-crisis-feedback]').textContent()};
for(const n of ['13','14','15']){const f=page.locator('[data-readiness-call][data-operation="'+n+'"]');await f.locator('input[name="status"][value="developing"]').check();await f.locator('textarea').fill('Whole-unit audit evidence '+n);await f.getByRole('button',{name:'Save evidence + status'}).click()}
op=page.locator('[data-operation="16"]');const dash=op.locator('[data-mars-dashboard]');await dash.locator('[data-system="operations"]').click();out.op16={cards:await dash.locator('[data-system]').count(),operationsHistory:await dash.locator('.evidence-history li').count(),detail:await dash.locator('.system-detail').innerText()};

// Readiness state should now hold 15 ops
out.readinessState=await page.evaluate(()=>JSON.parse(localStorage.getItem('mrjohn-mars-readiness-v1')||'{}'));
out.widgetKeys=await page.evaluate(()=>({
 matcher:localStorage.getItem('mrjohn-mars-evidence-matcher-v1'),
 orbit:localStorage.getItem('mrjohn-mars-orbit-model-v1'),
 position:localStorage.getItem('mrjohn-mars-position-lab-v1'),
 transport:localStorage.getItem('mrjohn-mars-transport-tradeoff-v1'),
 hazard:localStorage.getItem('mrjohn-mars-hazard-analyzer-v1'),
 life:localStorage.getItem('mrjohn-mars-life-support-flow-v1'),
 resource:localStorage.getItem('mrjohn-mars-resource-tradeoff-v1'),
 task:localStorage.getItem('mrjohn-mars-task-matcher-v1'),
 network:localStorage.getItem('mrjohn-mars-network-builder-v1'),
 crisis:localStorage.getItem('mrjohn-mars-mission-crisis-v1')
}));

// Verify readiness restore on each page
out.readinessRestore={};
for(const [phase,nums] of [['understand',['01','02','03','04']],['travel',['05','06','07','08']],['survive',['09','10','11','12']],['operate',['13','14','15']]]){
 await page.goto(urls[phase],{waitUntil:'networkidle'});
 out.readinessRestore[phase]={};
 for(const n of nums) out.readinessRestore[phase][n]=await page.locator('[data-readiness-call][data-operation="'+n+'"] .save-state').textContent();
}

// keyboard checks
await page.goto(urls.understand,{waitUntil:'networkidle'});await page.locator('[data-operation="01"] [data-cosmic-tab="mars"]').focus();await page.locator('[data-operation="01"] [data-cosmic-tab="mars"]').press('ArrowRight');out.keyboard01=await page.evaluate(()=>document.activeElement?.getAttribute('data-cosmic-tab'));await page.locator('[data-operation="03"] [data-evidence-tab="optical"]').focus();await page.locator('[data-operation="03"] [data-evidence-tab="optical"]').press('ArrowRight');out.keyboard03=await page.evaluate(()=>document.activeElement?.getAttribute('data-evidence-tab'));
out.pageErrors=pageErrors;
report.interactions=out;

// reduced motion
const rm=await browser.newContext({viewport:{width:1440,height:900},reducedMotion:'reduce'});const rp=await rm.newPage();await rp.goto(urls.understand,{waitUntil:'networkidle'});const rop=rp.locator('[data-operation="02"]');await rop.locator('[data-retro-play]').click();report.reducedMotion={stage:await rop.locator('[data-retrograde-stage]').getAttribute('data-retrograde-stage'),copy:await rop.locator('[data-retro-stage-copy]').textContent()};await rm.close();

// Final gates
const f=report.failures;
if(!out.op01.nebula.includes('Supported')||!out.op01.address.includes('Supported'))f.push('op01');
if(!out.op02.retro.includes('Supported')||out.op02.phase!=='Nearly full'||!out.op02.venus.includes('Supported')||!out.op02.predictionDisabled||!out.op02.prediction.includes('Supported'))f.push('op02');
if(out.op03.score!=='4 / 4 supported'||!out.op03.tool.includes('Supported'))f.push('op03');
if(!out.op04.env.includes('Supported')||!out.op04.consequence.includes('Correct connection'))f.push('op04');
if(!out.op05.feedback.includes('model position'))f.push('op05'); if(!out.op06.feedback.includes('Position acquired'))f.push('op06'); if(!out.op07.feedback.includes('saved'))f.push('op07'); if(out.op08.landing!==3||out.op08.cycle!==5)f.push('op08');
if(!out.op09.feedback.includes('saved')||!out.op10.feedback.includes('saved')||!out.op11.feedback.includes('saved')||out.op12.cycle!==5)f.push('op09-12');
if(out.op13.score!=='6 / 6 supported'||!out.op14.feedback.includes('main relay path')||out.op15.power!=='48 / 50'||!out.op15.feedback.includes('saved'))f.push('op13-15');
if(out.op16.cards!==7||out.op16.operationsHistory!==3)f.push('op16');
if(Object.keys(out.readinessState.operations||{}).length!==15)f.push('readiness-count');
for(const phase of Object.values(out.readinessRestore))for(const s of Object.values(phase))if(s!=='Saved on this device')f.push('readiness-restore');
if(Object.values(out.widgetKeys).some(v=>!v))f.push('widget-storage');
if(out.keyboard01!=='solar'||out.keyboard03!=='radio')f.push('keyboard');
if(report.reducedMotion.stage!=='2'||!report.reducedMotion.copy.includes('Reduced-motion'))f.push('reduced-motion');
if(pageErrors.length)f.push('page-errors');

await context.close();
await fs.writeFile(`${OUT}/report.json`,JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));await browser.close();if(f.length){console.error('FAIL',f);process.exit(1)}console.log('WHOLE-UNIT VISUAL INTEGRATION AUDIT PASSED');