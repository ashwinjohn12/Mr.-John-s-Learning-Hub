import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, normalize, resolve } from 'node:path';

const root=resolve(import.meta.dirname,'..');
const dist=join(root,'dist');
const base='/Mr.-John-s-Learning-Hub/';
const sections=['overview','big-ideas','understand','examples','vocabulary','explore','practise','check','apply','review'];
const units={
 'positive-negative-numbers':['understanding-positive-negative','what-are-integers-add','adding-integers','subtracting-integers-models','subtracting-integers'],
 'coordinates-design':['describing-location-cartesian-plane','translating-shapes','reflecting-shapes','rotating-shapes','congruence-symmetry','tessellations'],
 'number-operations':['prime-factorization-divisibility','expressing-powers','operations-parentheses-powers'],
 'decimals-fractions':['adding-subtracting-fractions','multiplying-fractions','fractions-equal-shares','adding-subtracting-decimals','multiplying-decimals','dividing-decimals'],
 'ratios-rates':['relating-fractions-decimals-percentages','equivalent-ratios','unit-rates'],
 'algebra':['simplifying-algebraic-expressions','solving-equations','solving-equations-algebraically'],
 'measurement':['area-parallelogram','area-triangle','area-composite-shapes','understanding-volume'],
 'patterns':['investigating-functions-tables-graphs','representing-functions','solving-problems-functions'],
 'statistics':['conducting-experiments','relative-frequency','analyzing-relative-frequency']
};
const failures=[];const passes=[];
const fail=m=>failures.push(m);const pass=m=>passes.push(m);
const routeFile=route=>join(dist,route,'index.html');
const text=html=>html.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,' ').replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,' ').replace(/<[^>]+>/g,' ').replace(/&(?:nbsp|amp);/g,' ').replace(/&#(?:x27|39);/g,"'").replace(/\s+/g,' ').trim();
if(!existsSync(dist))fail('dist/ is missing; run npm run build first.');
const routes=[];
for(const [unit,lessons] of Object.entries(units)){
 const landing=`courses/grade-6-math/${unit}`;const review=`${landing}/unit-review`;
 routes.push(landing,review,...lessons.map(lesson=>`${landing}/${lesson}`));
 for(const route of [landing,review,...lessons.map(lesson=>`${landing}/${lesson}`)])if(!existsSync(routeFile(route)))fail(`Missing route /${route}/`);
 if(!existsSync(routeFile(landing))||!existsSync(routeFile(review)))continue;
 const landingHtml=readFileSync(routeFile(landing),'utf8');
 for(const destination of [...lessons,'unit-review']){
  const href=`${base}${landing}/${destination}/`;
  if(!landingHtml.includes(`href="${href}"`))fail(`/${landing}/ does not link to ${destination}.`);
 }
 const reviewText=text(readFileSync(routeFile(review),'utf8'));
 if(!/Unit Check/i.test(reviewText))fail(`/${review}/ is missing Unit Check.`);
 if(!/Math Arcade/i.test(reviewText))fail(`/${review}/ is missing Math Arcade.`);
 if(!/SPIRALLING BACK/i.test(reviewText))fail(`/${review}/ is missing Spiralling Back.`);
 for(const lesson of lessons){
  const route=`${landing}/${lesson}`;if(!existsSync(routeFile(route)))continue;
  const html=readFileSync(routeFile(route),'utf8');const visible=text(html);
  for(const section of sections)if(!new RegExp(`id=["']${section}["']`).test(html))fail(`/${route}/ is missing #${section}.`);
  if(!visible.includes('PRACTISE WITH SUPPORT'))fail(`/${route}/ is missing supported Practice.`);
  if(!visible.includes('CHECK YOURSELF'))fail(`/${route}/ is missing Check Yourself.`);
  if(/QUICK LAUNCH/i.test(visible))fail(`/${route}/ has a Quick Launch section.`);
  if(/\bprototype\b|\bcoming soon\b|\bplanned\b|next build/i.test(visible))fail(`/${route}/ exposes development-stage language.`);
 }
}

const year='courses/grade-6-math/year-review';routes.push(year);
if(!existsSync(routeFile(year)))fail('Missing Grade 6 Year Review route.');
else{
 const yearText=text(readFileSync(routeFile(year),'utf8'));
 for(const marker of ['Year Review','Balanced 18-question check','15-question Number set','40-question cumulative set','No calculator','Unit 9'])if(!yearText.includes(marker))fail(`Year Review is missing marker: ${marker}`);
}
const courseRoute='courses/grade-6-math';routes.push(courseRoute);
if(existsSync(routeFile(courseRoute))){const courseHtml=readFileSync(routeFile(courseRoute),'utf8');if(!courseHtml.includes(`${base}courses/grade-6-math/year-review/`))fail('Grade 6 course overview does not link to Year Review.');}
else fail('Grade 6 course overview route is missing.');

const unit12='courses/grade-6-math/positive-negative-numbers/what-are-integers-add';
if(existsSync(routeFile(unit12))){const t=text(readFileSync(routeFile(unit12),'utf8'));if(!/natural numbers/i.test(t))fail('Unit 1.2 does not use current natural-number integer terminology.');if(/Integers are whole numbers/i.test(t))fail('Unit 1.2 still exposes legacy whole-number integer wording.');}
const unit31='courses/grade-6-math/number-operations/prime-factorization-divisibility';
if(existsSync(routeFile(unit31))&&!/product can be composed in multiple ways/i.test(text(readFileSync(routeFile(unit31),'utf8'))))fail('Unit 3.1 is missing explicit multiple product composition.');
const unit91='courses/grade-6-math/statistics/conducting-experiments';
if(existsSync(routeFile(unit91))){const t=text(readFileSync(routeFile(unit91),'utf8'));if(!/\bEvent\b/.test(t))fail('Unit 9.1 is missing Event terminology.');if(!/one or more outcomes|group of outcomes/i.test(t))fail('Unit 9.1 does not define an event as one or more outcomes.');}
for(const unit of ['patterns','statistics'])if(existsSync(routeFile(`courses/grade-6-math/${unit}`))&&/Coming next|planned/i.test(text(readFileSync(routeFile(`courses/grade-6-math/${unit}`),'utf8'))))fail(`/${unit}/ still exposes planned/Coming next metadata.`);

for(const route of routes){
 const file=routeFile(route);if(!existsSync(file))continue;const html=readFileSync(file,'utf8');const ids=new Set([...html.matchAll(/\sid=["']([^"']+)["']/g)].map(m=>m[1]));
 for(const href of [...html.matchAll(/\shref=["']([^"']+)["']/g)].map(m=>m[1])){
  if(href.startsWith('#')){if(!ids.has(href.slice(1)))fail(`/${route}/ has broken section link ${href}.`);continue;}
  if(/^(https?:|mailto:|tel:|javascript:)/.test(href))continue;const clean=href.split('#')[0].split('?')[0];if(!clean||/\.[a-z0-9]+$/i.test(clean))continue;
  let target;if(clean.startsWith(base))target=clean.slice(base.length);else if(clean.startsWith('/'))continue;else target=normalize(join(dirname(route),clean));
  if(!existsSync(routeFile(target.replace(/\/$/,''))))fail(`/${route}/ links to missing route ${href}.`);
 }
}
const css=readFileSync(join(root,'src/styles/global.css'),'utf8');
for(const safeguard of ['@media (max-width:900px)','.topic-shell{grid-template-columns:1fr}','.topic-sidebar nav{display:flex;overflow:auto','@media (max-width:680px)'])if(!css.includes(safeguard))fail(`Missing mobile safeguard: ${safeguard}`);

if(failures.length){console.error(`Grade 6 regression audit failed (${failures.length} issues):`);failures.forEach(item=>console.error(`  ✗ ${item}`));process.exitCode=1;}
else{
 pass('55 Grade 6 course, unit, lesson, review, and year-review pages audited.');
 pass('36 lessons contain all 10 permanent lesson sections and no Quick Launch.');
 pass('All 9 Unit Reviews contain Unit Check, Math Arcade, and Spiralling Back.');
 pass('Current Alberta alignment checks pass for integer terminology, product composition, and statistical events.');
 pass('Unit 8 and Unit 9 expose ready content rather than planned metadata.');
 pass('Year Review includes 18-question diagnostic plus 15- and 40-question calculator-free PAT-style sets.');
 pass('Internal Grade 6 routes and section anchors resolve.');
 console.log(`Grade 6 regression audit passed (${passes.length} groups):`);passes.forEach(item=>console.log(`  ✓ ${item}`));
}
