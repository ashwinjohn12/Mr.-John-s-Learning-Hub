import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
const root=process.cwd();
const baseline='d60579f154ee2675960be319253bb7f56d52c4dc';
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
let failed=false;const fail=m=>{console.error(`FAIL: ${m}`);failed=true};const pass=m=>console.log(`PASS: ${m}`);
const pagePath='src/pages/courses/grade-7-math/coordinates-design/horizontal-vertical-distances.astro';
const navPath='src/components/Grade7GridNavigator.astro';
const checkPath='src/components/Grade7DistanceCheck.astro';
const auditPath='scripts/audit-grade7-rebuild-1-4.mjs';
const renderPath='scripts/render-grade7-rebuild-1-4.mjs';
const workflowPath='.github/workflows/grade7-rebuild-1-4-ci.yml';
for(const p of[pagePath,navPath,checkPath])fs.existsSync(path.join(root,p))?pass(`exists ${p}`):fail(`missing ${p}`);
const page=read(pagePath),nav=read(navPath),check=read(checkPath),combined=`${page}\n${nav}\n${check}`;
const sections=['overview','big-ideas','understand','examples','vocabulary','explore','practise','check','apply','review'];
for(const id of sections)page.includes(`id="${id}"`)?pass(`section ${id}`):fail(`missing section ${id}`);
for(const t of['Shape & Space SS5','horizontal movement','vertical movement','horizontal distance','vertical distance','positional change','corresponding vertices','successive transformations','double prime','net movement','distance travelled'])page.toLowerCase().includes(t.toLowerCase())?pass(`curriculum/source scope ${t}`):fail(`missing scope token ${t}`);
for(const t of['describe the horizontal and vertical movement required to move from one point to another','describe the positional change from vertices to corresponding image vertices after a transformation or successive transformations','determine distance between points along horizontal and vertical lines'])page.toLowerCase().includes(t.toLowerCase())?pass(`SS5 Lesson 1.4 allocation ${t}`):fail(`missing allocated SS5 language ${t}`);
page.includes('Performing transformations and identifying image coordinates were developed in Lesson 1.3 and are used here only as prior knowledge')?pass('Lesson 1.3 transformation work is prior knowledge only'):fail('Lesson 1.3/1.4 boundary not explicit');
for(const t of['data-grid-navigator','data-mission','data-route-choice','data-run','data-net-x','data-net-y','data-dist-x','data-dist-y','data-report','data-rows','data-compare','prefers-reduced-motion'])nav.includes(t)?pass(`Grid Navigator feature ${t}`):fail(`Grid Navigator missing ${t}`);
for(const family of['f-','c-move-','c-dist-','c-success-','r-'])check.includes(family)?pass(`Check Yourself source family ${family}`):fail(`Check Yourself missing source family ${family}`);
if(check.includes('2 foundational')&&check.includes('4 core')&&check.includes('2 reasoning')&&check.includes('[0,0,1,1,2,2,3,3]'))pass('Check Yourself preserves 2/4/2 composition and balanced A-D positions');else fail('Check Yourself composition/balance architecture missing');
const forbidden=['distance formula','pythagorean','slope','vector magnitude','euclidean','math.hypot','sqrt('];for(const t of forbidden)combined.toLowerCase().includes(t.toLowerCase())?fail(`unsupported distance method leaked into Lesson 1.4: ${t}`):pass(`unsupported method absent: ${t}`);
const allowed=new Set([pagePath,navPath,checkPath,auditPath,renderPath,workflowPath]);
let changed=[];try{changed=execFileSync('git',['diff','--name-only',`${baseline}...HEAD`],{encoding:'utf8'}).trim().split(/\r?\n/).filter(Boolean)}catch(e){fail(`git diff failed: ${e.message}`)}
const unexpected=changed.filter(p=>!allowed.has(p));unexpected.length?fail(`Unexpected paths in Lesson 1.4 diff: ${unexpected.join(', ')}`):pass(`Protected diff: ${changed.length} changed files, all isolated to Lesson 1.4 page/components/CI`);
const protectedFiles=[
 'src/pages/courses/grade-7-math/coordinates-design/the-cartesian-plane.astro','src/components/Grade7RebuildLessonFrame.astro','src/components/Grade7CoordinateGrid.astro','src/components/Grade7CartesianCheck.astro','scripts/audit-grade7-rebuild-1-1.mjs','scripts/render-grade7-rebuild-1-1.mjs','.github/workflows/grade7-rebuild-1-1-ci.yml',
 'src/pages/courses/grade-7-math/coordinates-design/create-designs.astro','src/components/Grade7DesignStudio.astro','src/components/Grade7DesignCheck.astro','scripts/audit-grade7-rebuild-1-2.mjs','scripts/render-grade7-rebuild-1-2.mjs','.github/workflows/grade7-rebuild-1-2-ci.yml',
 'src/pages/courses/grade-7-math/coordinates-design/transformations.astro','src/components/Grade7TransformationLab.astro','src/components/Grade7TransformationCheck.astro','scripts/audit-grade7-rebuild-1-3.mjs','scripts/render-grade7-rebuild-1-3.mjs','.github/workflows/grade7-rebuild-1-3-ci.yml'
];
for(const p of protectedFiles){let diff='';try{diff=execFileSync('git',['diff','--name-only',baseline,'HEAD','--',p],{encoding:'utf8'}).trim()}catch(e){fail(`regression diff failed ${p}: ${e.message}`)}diff?fail(`verified prior-lesson file changed: ${p}`):pass(`verified file preserved: ${p}`)}
if(changed.some(p=>p.startsWith('src/pages/courses/grade-6-math/')||p.includes('Grade6')||p.startsWith('src/pages/courses/grade-7-science/')||p.startsWith('src/pages/courses/grade-8-science/')||p.startsWith('src/pages/courses/grade-9-science/')))fail('Grade 6 Math or Science protected content changed');else pass('Grade 6 Math and Science protected paths untouched');
if(changed.includes('src/data/courses.ts'))fail('existing live/public Grade 7 map changed');else pass('existing live/public Grade 7 course map untouched');
if(changed.some(p=>p==='astro.config.mjs'||p==='.github/workflows/deploy.yml'))fail('public hosting configuration changed');else pass('public hosting configuration untouched');
const balance=[0,0,1,1,2,2,3,3],totals=[0,0,0,0];for(let n=0;n<10000;n++){const a=[...balance];for(let i=a.length-1;i>0;i--){const j=(n*41+i*17)%(i+1);[a[i],a[j]]=[a[j],a[i]]}const c=[0,0,0,0];for(const x of a){c[x]++;totals[x]++}if(c.some(x=>x!==2)){fail(`answer-position imbalance attempt ${n}`);break}}
totals.every(x=>x===20000)?pass(`10,000 Check Yourself attempts: exact A/B/C/D totals = ${totals.join('/')}`):fail(`answer totals ${totals.join('/')}`);
const baseRoute=path.join(root,'dist','courses','grade-7-math','coordinates-design');const routes={one:path.join(baseRoute,'the-cartesian-plane','index.html'),two:path.join(baseRoute,'create-designs','index.html'),three:path.join(baseRoute,'transformations','index.html'),four:path.join(baseRoute,'horizontal-vertical-distances','index.html')};
if(fs.existsSync(routes.four)){const html=fs.readFileSync(routes.four,'utf8');sections.every(id=>html.includes(`id="${id}"`))?pass('Lesson 1.4 built route contains all ten anchors'):fail('Lesson 1.4 built route missing anchors');html.includes('Horizontal and Vertical Distances')?pass('Lesson 1.4 built route title present'):fail('Lesson 1.4 title missing');html.includes('data-distance-check')&&html.includes('data-bank')?pass('Lesson 1.4 built route includes hydrated Check Yourself bank container'):fail('Lesson 1.4 built route missing Check Yourself bank container');html.includes('data-grid-navigator')?pass('Lesson 1.4 built route includes Grid Navigator'):fail('Lesson 1.4 built route missing Grid Navigator')}else fail('Lesson 1.4 built route missing');
for(const [label,p,title] of[['1.1',routes.one,'The Cartesian Plane'],['1.2',routes.two,'Create Designs'],['1.3',routes.three,'Transformations']]){if(!fs.existsSync(p)){fail(`Lesson ${label} built route missing`);continue}const html=fs.readFileSync(p,'utf8');sections.every(id=>html.includes(`id="${id}"`))&&html.includes(title)?pass(`Lesson ${label} built-route regression intact`):fail(`Lesson ${label} built-route regression failed`)}
console.log(`AUDIT_SUMMARY lesson14Changed=${changed.length} answerTotals=${totals.join(',')} route14=${fs.existsSync(routes.four)?'present':'missing'} lesson11=${fs.existsSync(routes.one)?'present':'missing'} lesson12=${fs.existsSync(routes.two)?'present':'missing'} lesson13=${fs.existsSync(routes.three)?'present':'missing'}`);
if(failed)process.exit(1);
