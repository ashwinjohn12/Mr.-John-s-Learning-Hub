// @ts-nocheck
import { readFileSync } from 'node:fs';
import { grade7Unit2Lessons } from '../src/data/grade7Unit2.ts';
import { grade7Unit2UnitCheckBank } from '../src/data/grade7Unit2UnitCheck.ts';

let checks=0;
const assert=(condition:unknown,message:string)=>{if(!condition)throw new Error(`Unit 2 student-experience audit failed: ${message}`);checks++;};
const normalize=(value:string)=>value.toLowerCase().replace(/[^a-z0-9+-]+/g,' ').trim();
const rotateAnswer=(answer:number,length:number,shift:number)=>(answer+shift%length)%length;

const pools:{name:string;prompts:string[]}[]=[];
for(const lesson of grade7Unit2Lessons){
 pools.push({name:`${lesson.number} supported`,prompts:lesson.practice.map(x=>normalize(x.prompt))});
 pools.push({name:`${lesson.number} check`,prompts:lesson.check.map(x=>normalize(x.prompt))});
 pools.push({name:`${lesson.number} exit`,prompts:lesson.exit.map(x=>normalize(x.prompt))});
 const practicePositions=new Set(lesson.practice.map((x,i)=>rotateAnswer(x.answer,x.choices.length,i+lesson.slug.length)));
 const exitPositions=new Set(lesson.exit.map((x,i)=>rotateAnswer(x.answer,x.choices.length,i+Number(lesson.number.split('.')[1])+1)));
 const applyPositions=new Set(lesson.applySupport.checks.map((x,i)=>rotateAnswer(x.answer,x.choices.length,i+Number(lesson.number.split('.')[1]))));
 assert(practicePositions.size>=3,`${lesson.number} displayed supported answers use at least three positions`);
 assert(exitPositions.size>=2,`${lesson.number} displayed exit answers are not fixed`);
 assert(applyPositions.size>=2,`${lesson.number} displayed application answers are not fixed`);
}
pools.push({name:'Unit Check',prompts:grade7Unit2UnitCheckBank.map(x=>normalize(x.prompt))});
for(let i=0;i<pools.length;i++)for(let j=i+1;j<pools.length;j++)assert(!pools[i].prompts.some(x=>pools[j].prompts.includes(x)),`${pools[i].name} and ${pools[j].name} are disjoint`);

let seed=246813579;
const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
const shuffle=<T,>(items:T[])=>{const out=[...items];for(let i=out.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;};
const byLesson=new Map<string,typeof grade7Unit2UnitCheckBank>();
for(const item of grade7Unit2UnitCheckBank)byLesson.set(item.category!,[...(byLesson.get(item.category!)||[]),item]);
const reached=new Set<string>();const positions=[0,0,0,0,0];
for(let attempt=0;attempt<10000;attempt++){
 const selected=[...byLesson.entries()].flatMap(([lesson,items])=>shuffle(items).slice(0,2).map(item=>({lesson,item})));
 const counts=new Map<string,number>();
 for(const {lesson,item} of selected){counts.set(lesson,(counts.get(lesson)||0)+1);reached.add(item.prompt);if(item.kind!=='number'&&item.kind!=='order'){const labels=item.choices.map((_,index)=>({correct:(item.answers||[item.answer]).includes(index)}));const mixed=shuffle(labels);const first=mixed.findIndex(x=>x.correct);positions[first]++;}}
 assert([...counts.values()].every(value=>value===2)&&counts.size===5,`attempt ${attempt+1} samples exactly two per lesson`);
}
assert(reached.size===40,'all 40 Unit Check questions are reachable');
assert(positions.slice(0,4).every(value=>value>1000),'runtime choice randomization reaches every common answer position');

const checkSource=readFileSync(new URL('../src/components/Grade7Unit2Check.astro',import.meta.url),'utf8');
assert(checkSource.includes("type==='multi-select'")&&checkSource.includes('type="checkbox"'),'multi-select renders checkboxes');
assert(checkSource.includes("type==='number'")&&checkSource.includes('inputmode="text"'),'numeric items render signed mobile-safe text entry');
assert(checkSource.includes("type==='order'")&&checkSource.includes('order-response'),'ordering items render ordered positions');
assert(checkSource.includes("type==='matching'")&&checkSource.includes('matching-response'),'matching items render row-specific controls');
assert(checkSource.includes('control.disabled=true'),'submitted answers lock until a new set is generated');
assert(checkSource.includes('lesson-scores')&&checkSource.includes('Prioritized repair route'),'lesson scores and prioritized repair routes display');

const exploreSource=readFileSync(new URL('../src/components/Grade7Unit2Explore.astro',import.meta.url),'utf8');
for(const token of ['const n=shift%items.length;return n?','data-second-p','data-second-n','data-magnitude','data-line-end','data-line-direction','data-line-repair','data-route-change-two','data-route-end-two','data-route-change-three','data-route-end-three',"expectedRepair=phase===4?'start':phase===5?'label':'none'",'routeTwo===7&&routeEndTwo===2&&routeThree===-4&&routeEndThree===-2','Matching chip model','data-sub-end','data-distance','data-directed-change','data-model-choice','data-symbol-repair','data-line-count-repair','Added ${pairs} complete zero pair','delete panel.dataset.checkpointPassed','data-build-reverse','data-rebuild-minuend','data-repair-unmatched'])
 assert(exploreSource.includes(token),`Explore regression guard: ${token}`);
assert(exploreSource.includes("index<3?'Core':'Extension'"),'Explore limits the two-session core route to three phases');
const exploreCases={
 representing:[[-7,0,-7,2,9],[5,0,5,8,3],[0,0,0,6,6],[-4,0,-4,3,7],[6,0,6,9,3]],
 adding:[[-7,12,5],[8,-11,-3],[-5,-4,-9],[6,-6,0],[9,-4,5],[-10,3,-7],[-4,9,5],[7,-12,-5],[-6,11,5],[3,-7,-4],[-5,5,0],[-8,14,6],[4,-9,-5]],
 subtracting:[[7,3,4,0],[4,10,-6,6],[-3,-8,5,5],[2,-5,7,5],[-6,4,-10,4],[9,5,4,0],[-5,-9,4,4],[3,-7,10,7],[-7,-6,-1],[3,-10,13],[-2,-7,5],[-8,3,-11],[6,-4,10],[-5,8,-13],[-8,-11,3],[3,-8,11]]
};
for(const [a,b,result,p,n] of exploreCases.representing){
 assert(p-n===result,`representing Explore ${p}P - ${n}N equals ${result}`);
 assert(exploreSource.includes(`{a:${a},b:${b},result:${result},p:${p},n:${n}`),`representing Explore case ${a} is present in the tool`);
}
for(const [a,b,result] of exploreCases.adding){
 assert(a+b===result,`addition Explore ${a} + ${b} equals ${result}`);
 assert(exploreSource.includes(`{a:${a},b:${b},result:${result}`),`addition Explore case ${a}, ${b} is present in the tool`);
}
for(const [a,b,result,pairs] of exploreCases.subtracting){
 assert(a-b===result,`subtraction Explore ${a} - (${b}) equals ${result}`);
 assert(exploreSource.includes(`{a:${a},b:${b},result:${result}`),`subtraction Explore case ${a}, ${b} is present in the tool`);
 if(pairs!==undefined){
  const available=b>=0?Math.max(a,0):Math.max(-a,0);
  const required=Math.max(0,Math.abs(b)-available);
  assert(pairs===required,`subtraction Explore ${a} - (${b}) uses the minimum ${pairs} zero pairs`);
 }
}

const builtRoutes=['representing-integers','adding-integers-tiles','adding-integers-number-line','subtracting-integers-tiles','subtracting-integers-number-line','unit-review'];
for(const slug of builtRoutes){
 const html=readFileSync(new URL(`../dist/courses/grade-7-math/integers/${slug}/index.html`,import.meta.url),'utf8');
 const markup=html.replace(/<script\b[\s\S]*?<\/script>/gi,'').replace(/<style\b[\s\S]*?<\/style>/gi,'');
 const ids=[...markup.matchAll(/\sid="([^"]+)"/g)].map(x=>x[1]);
 assert(ids.length===new Set(ids).size,`${slug} has no duplicate IDs`);
 for(const button of markup.matchAll(/<button\b[^>]*>([\s\S]*?)<\/button>/g))assert(button[1].replace(/<[^>]+>/g,'').trim().length>0,`${slug} button has an accessible text name`);
 assert(!/style="[^"]*width:\s*\d{4,}px/i.test(markup),`${slug} has no fixed four-digit content width`);
}

const arcade=readFileSync(new URL('../src/components/Grade7Unit2Arcade.astro',import.meta.url),'utf8');
for(const token of ['data-expected="11,-8,5"','data-expected="5,-3,2"','data-expected="-6"','data-expected="0"','data-expected="-4,9,-7"','data-expected="-3,6,-1"','data-chip-start-p','data-chip-start-n','data-chip-cancel','pv-nv===-6','nv-cv===0','data-build-final-line','finalLineVerified','Final mathematical evidence changed'])assert(arcade.includes(token),`Arcade verifies ${token}`);
assert(!arcade.includes('inputmode="numeric"'),'signed integer fields do not force a mobile keypad that may omit minus');
const lessonPage=readFileSync(new URL('../src/components/Grade7Unit2LessonPage.astro',import.meta.url),'utf8');
const applySource=readFileSync(new URL('../src/components/Grade7Unit2Apply.astro',import.meta.url),'utf8');
for(const token of ['Context, models, and relationships','Independent calculation and model record','Subtraction workshop record','data-design-a','data-equivalent-target','Evidence changed. Verify every mathematical requirement again.'])
 assert(applySource.includes(token),`Apply regression guard: ${token}`);
const practiceSource=readFileSync(new URL('../src/components/Grade7Unit2Practice.astro',import.meta.url),'utf8');
assert(practiceSource.includes('item.hint2')&&!practiceSource.includes('${item.feedback}'),'supported practice uses separate second-level hints and never copies feedback');
const reviewSource=readFileSync(new URL('../src/pages/courses/grade-7-math/integers/unit-review.astro',import.meta.url),'utf8');
for(const token of ['station-visual','Correct answer:','An answer changed. Build your route again.','Answer changed. Check the station again.'])
 assert(reviewSource.includes(token),`Review regression guard: ${token}`);
const route=(start:number,changes:number[])=>changes.reduce<number[]>((points,change)=>[...points,points.at(-1)!+change],[start]);
const north=route(-6,[11,-8,5]),south=route(1,[-4,9,-7]);
assert(north.join(',')==='-6,5,-3,2'&&Math.min(...north)===-6&&Math.min(...north)-(-6)===0,'North includes the start, lowest -6, and a zero-degree safety margin');
assert(south.join(',')==='1,-3,6,-1'&&Math.min(...south)===-3&&Math.min(...south)-(-6)===3,'South endpoints, lowest temperature, and safety margin are correct');
assert(!/\.length\s*[<>]=?\s*\d+/.test(arcade)&&!arcade.includes('.includes('),'Arcade does not score prose by length or keywords');

console.log(`Grade 7 Unit 2 student-experience audit: ${checks} checks passed; 10,000 balanced Unit Check attempts simulated.`);
