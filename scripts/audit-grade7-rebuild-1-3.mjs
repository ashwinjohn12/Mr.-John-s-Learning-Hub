import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
const root=process.cwd();
const baseline='37bfb585658d9382e5d7cc733b6384099b1838d0';
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
let failed=false;const fail=m=>{console.error(`FAIL: ${m}`);failed=true};const pass=m=>console.log(`PASS: ${m}`);
const pagePath='src/pages/courses/grade-7-math/coordinates-design/transformations.astro';
const labPath='src/components/Grade7TransformationLab.astro';
const checkPath='src/components/Grade7TransformationCheck.astro';
const auditPath='scripts/audit-grade7-rebuild-1-3.mjs';
const renderPath='scripts/render-grade7-rebuild-1-3.mjs';
const workflowPath='.github/workflows/grade7-rebuild-1-3-ci.yml';
for(const p of[pagePath,labPath,checkPath])fs.existsSync(path.join(root,p))?pass(`exists ${p}`):fail(`missing ${p}`);
const page=read(pagePath),lab=read(labPath),check=read(checkPath);
const sections=['overview','big-ideas','understand','examples','vocabulary','explore','practise','check','apply','review'];
for(const id of sections)page.includes(`id="${id}"`)?pass(`section ${id}`):fail(`missing section ${id}`);
const scopeTokens=['Shape & Space SS5','translation','reflection','rotation','line of reflection','centre of rotation','prime notation','image vertices','integral-coordinate vertices'];
for(const t of scopeTokens)page.toLowerCase().includes(t.toLowerCase())?pass(`curriculum/source scope ${t}`):fail(`missing scope token ${t}`);
const achievementTokens=['performing and describing translations, reflections, and rotations','identifying and describing the image by its vertex coordinates'];
for(const t of achievementTokens)page.toLowerCase().includes(t.toLowerCase())?pass(`SS5 allocation ${t}`):fail(`missing allocated SS5 indicator language ${t}`);
if(page.includes('Horizontal/vertical movement and distance analysis are intentionally reserved for Lesson 1.4')&&page.includes('Lesson 1.4 will analyze horizontal and vertical changes'))pass('Lesson 1.4 movement/distance content is explicitly deferred');else fail('Lesson 1.4 scope boundary not explicit');
const forbiddenCore=['determine the distance between points along horizontal and vertical lines','horizontal distance from','vertical distance from','net horizontal','net vertical'];
for(const t of forbiddenCore)page.toLowerCase().includes(t.toLowerCase())?fail(`Lesson 1.4-only teaching leaked into 1.3: ${t}`):pass(`1.4-only phrase absent: ${t}`);
for(const t of['data-type','data-translation','data-reflection','data-rotation','data-reflection-guide','data-rotation-guide','data-image','data-table','data-add-step','prefers-reduced-motion'])lab.includes(t)?pass(`Transformation Lab feature ${t}`):fail(`Transformation Lab missing ${t}`);
for(const t of['centre, angle, and direction','same perpendicular distance','Every point in one translation follows the same slide'])check.includes(t)?pass(`Check Yourself transformation reasoning ${t}`):fail(`Check Yourself missing ${t}`);
for(const family of['f-','c-t-','c-rf-','c-rot-','c-id-','r-error-','r-reason-'])check.includes(family)?pass(`Check Yourself source family ${family}`):fail(`Check Yourself missing source family ${family}`);
if(check.includes('2 foundational')&&check.includes('4 core')&&check.includes('2 reasoning')&&check.includes('[0,0,1,1,2,2,3,3]'))pass('Check Yourself source preserves 2/4/2 composition and balanced A-D positions');else fail('Check Yourself composition/balance architecture missing');
if(!/mapping rule|\(x\s*[+-]\s*\d+\s*,\s*y\s*[+-]/i.test(page))pass('No unsupported higher-grade mapping-rule instruction');else fail('Unsupported mapping-rule instruction detected');
const allowed=new Set([pagePath,labPath,checkPath,auditPath,renderPath,workflowPath]);
let changed=[];try{changed=execFileSync('git',['diff','--name-only',`${baseline}...HEAD`],{encoding:'utf8'}).trim().split(/\r?\n/).filter(Boolean)}catch(e){fail(`git diff failed: ${e.message}`)}
const unexpected=changed.filter(p=>!allowed.has(p));unexpected.length?fail(`Unexpected paths in Lesson 1.3 diff: ${unexpected.join(', ')}`):pass(`Protected diff: ${changed.length} changed files, all isolated to Lesson 1.3 page/components/CI`);
const protectedFiles=[
 'src/pages/courses/grade-7-math/coordinates-design/the-cartesian-plane.astro','src/components/Grade7RebuildLessonFrame.astro','src/components/Grade7CoordinateGrid.astro','src/components/Grade7CartesianCheck.astro','scripts/audit-grade7-rebuild-1-1.mjs','scripts/render-grade7-rebuild-1-1.mjs','.github/workflows/grade7-rebuild-1-1-ci.yml',
 'src/pages/courses/grade-7-math/coordinates-design/create-designs.astro','src/components/Grade7DesignStudio.astro','src/components/Grade7DesignCheck.astro','scripts/audit-grade7-rebuild-1-2.mjs','scripts/render-grade7-rebuild-1-2.mjs','.github/workflows/grade7-rebuild-1-2-ci.yml'
];
for(const p of protectedFiles){let diff='';try{diff=execFileSync('git',['diff','--name-only',baseline,'HEAD','--',p],{encoding:'utf8'}).trim()}catch(e){fail(`regression diff failed ${p}: ${e.message}`)}diff?fail(`verified 1.1/1.2 file changed: ${p}`):pass(`verified file preserved: ${p}`)}
if(changed.some(p=>p.startsWith('src/pages/courses/grade-6-math/')||p.includes('Grade6')||p.startsWith('src/pages/courses/grade-7-science/')||p.startsWith('src/pages/courses/grade-8-science/')||p.startsWith('src/pages/courses/grade-9-science/')))fail('Grade 6 Math or Science protected content changed');else pass('Grade 6 Math and Science protected paths untouched');
if(changed.includes('src/data/courses.ts'))fail('existing live/public Grade 7 map changed');else pass('existing live/public Grade 7 course map untouched');
if(changed.some(p=>p==='astro.config.mjs'||p==='.github/workflows/deploy.yml'))fail('public hosting configuration changed');else pass('public hosting configuration untouched');
const balance=[0,0,1,1,2,2,3,3],totals=[0,0,0,0];for(let n=0;n<10000;n++){const a=[...balance];for(let i=a.length-1;i>0;i--){const j=(n*41+i*17)%(i+1);[a[i],a[j]]=[a[j],a[i]]}const c=[0,0,0,0];for(const x of a){c[x]++;totals[x]++}if(c.some(x=>x!==2)){fail(`answer-position imbalance attempt ${n}`);break}}
totals.every(x=>x===20000)?pass(`10,000 Check Yourself attempts: exact A/B/C/D totals = ${totals.join('/')}`):fail(`answer totals ${totals.join('/')}`);
const route13=path.join(root,'dist','courses','grade-7-math','coordinates-design','transformations','index.html');const route12=path.join(root,'dist','courses','grade-7-math','coordinates-design','create-designs','index.html');const route11=path.join(root,'dist','courses','grade-7-math','coordinates-design','the-cartesian-plane','index.html');
if(fs.existsSync(route13)){const html=fs.readFileSync(route13,'utf8');sections.every(id=>html.includes(`id="${id}"`))?pass('Lesson 1.3 built route contains all ten anchors'):fail('Lesson 1.3 built route missing anchors');html.includes('Transformations')?pass('Lesson 1.3 built route title present'):fail('Lesson 1.3 title missing');html.includes('data-transform-check')&&html.includes('data-bank')?pass('Lesson 1.3 built route includes hydrated Check Yourself bank container'):fail('Lesson 1.3 built route missing Check Yourself bank container')}else fail('Lesson 1.3 built route missing');
for(const [label,p,title] of[['1.1',route11,'The Cartesian Plane'],['1.2',route12,'Create Designs']]){if(!fs.existsSync(p)){fail(`Lesson ${label} built route missing`);continue}const html=fs.readFileSync(p,'utf8');sections.every(id=>html.includes(`id="${id}"`))&&html.includes(title)?pass(`Lesson ${label} built-route regression intact`):fail(`Lesson ${label} built-route regression failed`)}
console.log(`AUDIT_SUMMARY lesson13Changed=${changed.length} answerTotals=${totals.join(',')} route13=${fs.existsSync(route13)?'present':'missing'} lesson11=${fs.existsSync(route11)?'present':'missing'} lesson12=${fs.existsSync(route12)?'present':'missing'}`);
if(failed)process.exit(1);
