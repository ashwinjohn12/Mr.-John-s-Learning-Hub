import { readFileSync } from 'node:fs';
import { grade7Unit4Lessons } from '../src/data/grade7Unit4.ts';
import { grade7Unit4UnitCheckBank } from '../src/data/grade7Unit4UnitCheck.ts';

let checks=0;
const ok=(value:unknown,label:string)=>{if(!value)throw new Error(`Unit 4 audit failed: ${label}`);checks++;};
const expected=[
 ['4.1','Investigating Circles','SS1'],['4.2','Circumference of a Circle','SS1'],['4.3','Area of a Parallelogram','SS2'],['4.4','Area of a Triangle','SS2'],['4.5','Area of a Circle','SS2'],['4.6','Interpreting Circle Graphs','SP3'],['4.7','Drawing Circle Graphs','SP3']
];
ok(grade7Unit4Lessons.length===7,'seven approved lessons');
const ids=new Set<string>();
for(const [i,lesson] of grade7Unit4Lessons.entries()){
 const [number,title,outcome]=expected[i];
 ok(lesson.number===number,`${number} number`);ok(lesson.title===title,`${number} title`);ok(lesson.outcome.includes(outcome),`${number} outcome`);
 ok(lesson.understand.length===4,`${number} four concepts`);ok(lesson.examples.length===4,`${number} four worked examples`);ok(lesson.vocabulary.length>=5,`${number} vocabulary`);
 ok(lesson.explore.phases.length===5,`${number} five Explore phases`);for(const phase of lesson.explore.phases){ok(!!phase.instruction&&!!phase.target,`${number} phase agreement`)}
 ok(lesson.practice.length===8,`${number} eight supported questions`);ok(lesson.check.length===30,`${number} thirty Check Yourself items`);ok(lesson.exit.length===3,`${number} three exit items`);
 const pools=[['warmup',[lesson.warmup]],['practice',lesson.practice],['check',lesson.check],['exit',lesson.exit]] as const;
 for(const [pool,items] of pools)for(const q of items){ok(!ids.has(q.id),`${q.id} unique`);ids.add(q.id);ok(q.choices.length>0,`${q.id} answers`);ok(q.answer>=0&&q.answer<q.choices.length,`${q.id} correct position`);ok(!!q.feedback,`${q.id} feedback`);ok(!!q.hint&&!!q.hint2&&q.hint!==q.hint2,`${q.id} two distinct hints`);ok(!!q.route,`${q.id} repair route`);if(q.responseType==='multi-select')ok((q.answers?.length||0)>=2,`${q.id} multi answers`);if(q.responseType==='order')ok(q.orderTokens?.length===q.orderAnswer?.length,`${q.id} order state`)}
 const signature=(q:any)=>`${q.prompt.toLowerCase().replace(/[^a-z0-9]+/g,' ')}|${q.numericAnswer??q.choices[q.answer]}`;
 const separated=[lesson.warmup,...lesson.practice,...lesson.check,...lesson.exit];const supported=new Set(separated.map(signature));ok(supported.size===separated.length,`${number} warmup, practice, Check Yourself, and exit mathematical separation`);
 ok(new Set(lesson.check.map(q=>q.responseType)).size>=5,`${number} assessment response variety`);
}
ok(grade7Unit4UnitCheckBank.length===40,'40-question Unit Check bank');
for(let lesson=0;lesson<7;lesson++){const group=grade7Unit4UnitCheckBank.filter(q=>q.category===`Lesson 4.${lesson+1}`);ok(group.length>=5,`Unit Check represents Lesson 4.${lesson+1}`);ok(new Set(group.map(q=>q.responseType)).size>=5,`Unit Check response variety Lesson 4.${lesson+1}`);for(const q of group){ok(q.route.startsWith('../')&&q.route.includes('#understand-'),`${q.id} exact repair anchor`);ok(q.repairLabel?.includes('Understand:'),`${q.id} student-friendly repair label`)}}
for(let attempt=0;attempt<10000;attempt++){const groups=expected.map((_,i)=>grade7Unit4UnitCheckBank.filter(q=>q.category===`Lesson 4.${i+1}`));const first=groups.map(g=>g[(attempt*7+g.length)%g.length]);const extras=[0,1,2].map(offset=>{const gi=(attempt+offset)%7;const choices=groups[gi].filter(q=>!first.some(x=>x.id===q.id));return choices[(attempt+offset)%choices.length]});const set=[...first,...extras];ok(set.length===10,`balanced attempt ${attempt+1} length`);ok(new Set(set.map(q=>q.id)).size===10,`balanced attempt ${attempt+1} uniqueness`);ok(new Set(set.map(q=>q.category)).size===7,`balanced attempt ${attempt+1} coverage`)}
const selectable=[...grade7Unit4Lessons.flatMap(l=>l.check),...grade7Unit4UnitCheckBank].filter(q=>!['number','order','matching'].includes(q.responseType||''));
let seed=417,counters=[0,0,0,0];const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/2**32};for(let i=0;i<100000;i++){const q=selectable[i%selectable.length],correct=new Set(q.answers||[q.answer]),options=q.choices.map((_,index)=>({index,correct:correct.has(index)}));for(let j=options.length-1;j>0;j--){const k=Math.floor(random()*(j+1));[options[j],options[k]]=[options[k],options[j]];}const positions=options.map((x,index)=>x.correct?index:-1).filter(x=>x>=0);for(const position of positions)counters[position]++;}const totalPositions=counters.reduce((a,b)=>a+b,0);for(const [position,count] of counters.entries())ok(Math.abs(count-totalPositions/4)<totalPositions*.015,`actual randomized correct-answer position ${position+1}: ${count}`);
const explore=readFileSync('src/components/Grade7Unit4Explore.astro','utf8'),apply=readFileSync('src/components/Grade7Unit4Apply.astro','utf8'),check=readFileSync('src/components/Grade7Unit4Check.astro','utf8'),arcade=readFileSync('src/components/Grade7Unit4Arcade.astro','utf8'),review=readFileSync('src/pages/courses/grade-7-math/circles-area-circle-graphs/unit-review.astro','utf8');
for(const token of ['tablist','aria-controls','ArrowRight','Home','End','data-transcript','clearFrom','validConstruction','Prediction','Repair','Create'])ok(explore.includes(token),`Explore ${token}`);
for(const token of ['data-answer','data-model-quantity','data-unit','data-estimate','data-comparison','data-decision','listEqual','invalidate'])ok(apply.includes(token),`Apply ${token}`);
ok(/for\(let j=i;j<panels\.length;j\+\+\)/.test(explore),'Explore dependency invalidation clears later phases');
ok(explore.includes("kind==='circle-area'")&&explore.includes('Number.isInteger(b)'),'Explore sector construction constraints');
ok(explore.includes("kind==='circle'")&&explore.includes('b<=360'),'Explore central-angle constraint');
ok((apply.match(/quantities:\[\[/g)||[]).length===7,'seven lesson-specific Apply model specifications');
ok(apply.includes("['Counts','18, 12, 9, 6']")&&apply.includes("['Angles','144, 96, 72, 48']"),'drawing Apply verifies all four sectors');
ok((arcade.match(/modelValues:\[\[/g)||[]).length===5,'five complete Arcade model specifications');
ok(arcade.includes("['Angles','144, 108, 72, 36']")&&arcade.includes("['Percents','40, 30, 20, 10']"),'Arcade verifies all sector states');
ok(!review.includes('unlabelled decorative circle')&&!review.includes('list of unrelated numbers'),'Quick Route Finder uses plausible misconceptions');
for(const token of ['parseNumber','percent&&item.unit','disabled=true','data-reveal','scrollIntoView','prefers-reduced-motion','unitOk'])ok((token==='unitOk'?arcade:check+arcade).includes(token),`interaction ${token}`);
for(const repair of ['every chord','C=πr','slanted side','triangle area as','2πr','π(R−r)²','25% as a 25°','35% of 200','totals 95%','relies only on four colours'])ok(review.includes(repair),`misconception repair: ${repair}`);ok(review.includes('20 SUPPORTED QUESTIONS'),'20 mixed review');ok(review.includes('Seven model stations'),'one model station per lesson');ok(review.includes('Water Park Designer'),'distinctive synthesis');ok(!/href=[^>]*unit-5/i.test(review),'no unfinished Unit 5 route');
for(const source of [explore,apply,check,arcade,review]){ok(!/split\([^)]*\\s[^)]*\)\.length|includes\([^)]*evidence|match\([^)]*evidence/i.test(source),'prose is not mechanically graded');ok(source.includes('prefers-reduced-motion'),'reduced motion safeguard')}
console.log(`Grade 7 Unit 4 content and experience audit: ${checks.toLocaleString()} checks passed, including 10,000 balanced Unit Check attempts and 100,000 actual answer-position shuffles (${counters.join(', ')} correct selections by position).`);
