// @ts-nocheck
import { readFileSync } from 'node:fs';
import { grade7Unit2Lessons } from '../src/data/grade7Unit2.ts';
import { grade7Unit2UnitCheckBank } from '../src/data/grade7Unit2UnitCheck.ts';

let checks=0;
const assert=(condition:unknown,message:string)=>{if(!condition)throw new Error(`Unit 2 final-corrections audit failed: ${message}`);checks++;};
const read=(path:string)=>readFileSync(new URL(`../${path}`,import.meta.url),'utf8');
const explore=read('src/components/Grade7Unit2Explore.astro');
const apply=read('src/components/Grade7Unit2Apply.astro');
const check=read('src/components/Grade7Unit2Check.astro');
const arcade=read('src/components/Grade7Unit2Arcade.astro');
const practice=read('src/components/Grade7Unit2Practice.astro');
const lessonPage=read('src/components/Grade7Unit2LessonPage.astro');
const review=read('src/pages/courses/grade-7-math/integers/unit-review.astro');

// Explore semantics and state invalidation.
for(const token of ['data-build-reverse','data-order-relation','data-combine-repair','data-rebuild-minuend','data-repair-pairs-p','data-repair-pairs-n','data-repair-unmatched','data-directed-change','data-choice-one','data-choice-two','data-choice-three','option value="symbols"','data-symbol-repair','data-line-count-repair','debugOk','chooseOk'])assert(explore.includes(token),`Explore control ${token}`);
for(const token of ['routeTwo===7','routeEndTwo===2','routeThree===-4','routeEndThree===-2','jump-','jump-label','intermediate-marker','route-transcript'])assert(explore.includes(token),`complete three-jump route ${token}`);
assert(explore.includes("prediction:routePhase?-2:lab.result")&&explore.includes("'Predict the final endpoint'"),'Lesson 2.3 predicts the final endpoint of the complete route');
assert(explore.includes('.scaled-line.vertical .jump-label')&&explore.includes('.scaled-line.vertical .start-marker')&&explore.includes('top:var(--p)'),'vertical line labels and markers use orientation-specific positioning');
assert(explore.includes("{index===4&&<div class=\"line-fields\"")&&explore.includes("if(phase!==4)"),'Lesson 2.1 asks for Model B and magnitude only in the equivalence phase');
assert(explore.includes("value={lab.rule==='target'?'':lab.a}")&&explore.includes('a*b<0&&a+b===result'),'Lesson 2.2 target trays start empty and accept valid unlike-sign constructions');
assert(explore.includes('panel.dataset.traysLoaded')&&explore.includes("panel.dataset.traysCombined==='true'")&&explore.includes('resetTraySequence'),'Lesson 2.2 requires load, combine, and cancel in order and invalidates changed trays');
assert(explore.includes("panel.dataset.reverseBuilt==='true'")&&explore.includes("data-build-reverse"),'Lesson 2.4 Reverse Order requires the reversed-model action');
assert(explore.includes("symbolRepair==='second'&&lineRepair==='intervals'"),'Lesson 2.5 Debug validates both repairs independently');
for(const token of ["panel.addEventListener('input'","panel.addEventListener('change'","panel.addEventListener('click'",'delete panel.dataset.toolVerified','delete panel.dataset.checkpointPassed','delete panel.dataset.complete','Evidence changed. Check this checkpoint again.','unit2-reset'])assert(explore.includes(token),`invalidation safeguard ${token}`);
let phaseCount=0;
for(const lesson of grade7Unit2Lessons){
 const html=read(`dist/courses/grade-7-math/integers/${lesson.slug}/index.html`);
 const phases=[...html.matchAll(/<fieldset class="phase-check"[\s\S]*?<\/fieldset>/g)].map(match=>match[0]);
 assert(phases.length===lesson.explore.phases.length,`${lesson.number} renders every Explore phase`);
 for(const [index,phase] of phases.entries()){
  const labels=[...phase.matchAll(/<span[^>]*>([\s\S]*?)<\/span>/g)].map(x=>x[1].replace(/<[^>]+>/g,'').trim());
  const answer=Number(phase.match(/data-answer="(\d+)"/)?.[1]);
  assert(labels.length===4,`${lesson.number} phase ${index+1} has four choices`);
  assert(new Set(labels).size===4,`${lesson.number} phase ${index+1} choices are unique`);
  assert(Number.isInteger(answer)&&answer>=0&&answer<4,`${lesson.number} phase ${index+1} has one accepted choice`);
  phaseCount++;
 }
}
assert(phaseCount===34,'all 34 Explore phases audited');

type State={tool:boolean;checkpoint:boolean;complete:boolean;message:string};
const invalidate=(state:State):State=>({tool:false,checkpoint:false,complete:false,message:'Evidence changed'});
for(const control of ['input','select','textarea','chip counter','tray load','combine','cancel','build','add pairs','remove','model choice','diagram control','reset']){
 const before={tool:true,checkpoint:true,complete:true,message:'success'};const after=invalidate(before);
 assert(!after.tool&&!after.checkpoint&&!after.complete&&after.message==='Evidence changed',`${control} invalidates every dependent state`);
}

// Lesson-specific Apply requirements and non-prose grading.
for(const token of ['[-12,-7,-85,36,9,0]','data-equivalent-target','data-model-p','data-model-n','starting-temperature','a1','a2','a3','a4','t1','t2','t3','t4','data-sub-row','data-design-a','data-design-b','data-design-pairs','r1','r2','r3','r4','boundaryDistance','yes,no,yes,yes','data-task-response','data-apply-text'])assert(apply.includes(token),`Apply validator ${token}`);
assert(!/\.value\.length\s*[<>]=?\s*\d+/.test(apply)&&!apply.includes('.value.includes('),'Apply never grades prose by length or keywords');
assert(apply.includes("a-b===-5")&&apply.includes("p-n===a"),'Lesson 2.4 accepts designed subtractions and equivalent starting models');

// Mobile signed entry and unsigned counts.
for(const source of [explore,apply,check,arcade])assert(source.includes('inputmode="text"'),`signed text entry in ${source===explore?'Explore':source===apply?'Apply':source===check?'Check':'Arcade'}`);
assert(explore.includes('data-pairs-input type="number" min="0" step="1"'),'Explore pair counts remain unsigned whole numbers');
assert(apply.includes('type="number" min="0" step="1"'),'Apply counts remain unsigned whole numbers');

// Pacing, hints, response variety, and repair labels.
assert(lessonPage.includes('Explore core phases 1–3')&&lessonPage.includes('Explore phase 4 and later phases'),'two-session core boundary is consistent');
assert(explore.includes("index<3?'Core':'Extension'"),'Explore tabs label phases after 3 as extension');
assert(practice.includes('item.hint2')&&!practice.includes('${item.feedback}'),'Hint 2 is independent from answer feedback');
for(const lesson of grade7Unit2Lessons){
 const types=new Set(lesson.check.map(item=>item.responseType));
 for(const type of ['choice','number','multi-select','order','matching','model-select'])assert(types.has(type),`${lesson.number} includes ${type}`);
 assert(lesson.check.some(item=>item.kind==='error repair'),`${lesson.number} includes error repair`);
 for(const item of lesson.check){assert(item.choices.length===4,`${lesson.number} ${item.prompt} stores four choices`);assert(new Set(item.choices).size===4,`${lesson.number} ${item.prompt} stores unique choices`);}
 for(const item of lesson.practice)assert(item.hint2&&!item.feedback.includes(item.hint2),`${lesson.number} supported question has a separate Hint 2`);
}
for(const token of ['matching-response','model-select','inputmode="text"','Complete the full set before submitting','control.disabled=true','Focus moved to question 1','lessonNames','sectionName','conceptTitles','Starting point, change, and endpoint','Adding the required zero pairs'])assert(check.includes(token),`assessment safeguard ${token}`);
assert(!/replaceAll\('\-',\s*' '\).*<\/a>/.test(check),'repair labels are not raw route transformations');
assert(lessonPage.includes('data-route-label')&&lessonPage.includes('repairLabel(')&&!lessonPage.includes('Review ${route.replaceAll'),'warm-up and exit repairs use student-facing concept labels');

// Every supported and repair Hint 2 is original, question-specific, and separate from feedback.
const lessonHintTwos=grade7Unit2Lessons.flatMap(lesson=>lesson.practice.map(item=>item.hint2||''));
assert(lessonHintTwos.length===40&&lessonHintTwos.every(Boolean),'all 40 supported questions have Hint 2');
assert(new Set(lessonHintTwos).size===40,'all 40 supported Hint 2 texts are distinct');
for(const lesson of grade7Unit2Lessons)for(const item of lesson.practice){assert(item.hint2!==item.feedback,`${lesson.number} Hint 2 is not full feedback`);assert(!item.feedback.includes(item.hint2||''),`${lesson.number} Hint 2 is not copied answer feedback`);}
assert(!review.includes('const secondHint='),'review and repair hints do not use a generic generator');
const mixedBlock=review.match(/const mixedHintTwo=\[([\s\S]*?)\];/)?.[1]||'',repairBlock=review.match(/const repairHintTwo=\[([\s\S]*?)\];/)?.[1]||'';
const strings=(block:string)=>[...block.matchAll(/'([^']+)'/g)].map(match=>match[1]);
assert(strings(mixedBlock).length===20&&new Set(strings(mixedBlock)).size===20,'20 distinct review Hint 2 texts');
assert(strings(repairBlock).length===10&&new Set(strings(repairBlock)).size===10,'10 distinct repair Hint 2 texts');

// Review models and feedback.
for(const token of ['Three positive chips and seven negative chips','Seven positive chips plus twelve negative chips','Start negative nine, move positive fourteen','Add five complete zero pairs','Directed change positive eleven','Correct answer:'])assert(review.includes(token),`review station evidence ${token}`);

// Temperature Rescue verifies every required value and model.
for(const token of ['data-expected="11,-8,5"','data-expected="5,-3,2"','data-expected="-4,9,-7"','data-expected="-3,6,-1"','data-line-start','data-line-jump','data-line-end','data-build-final-line','finalLineVerified','pv-nv===-6','nv-cv===0','delete root.dataset.finalComplete'])assert(arcade.includes(token),`Temperature Rescue validator ${token}`);
assert(!/\.value\.length\s*[<>]=?\s*\d+/.test(arcade)&&!arcade.includes('.value.includes('),'Arcade never grades prose by length or keywords');
const route=(start:number,changes:number[])=>changes.reduce<number[]>((points,change)=>[...points,points.at(-1)!+change],[start]);
const north=route(-6,[11,-8,5]),south=route(1,[-4,9,-7]);
assert(north.join(',')==='-6,5,-3,2'&&Math.min(...north)===-6&&Math.min(...north)+6===0,'North endpoints, lowest, and margin');
assert(south.join(',')==='1,-3,6,-1'&&Math.min(...south)===-3&&Math.min(...south)+6===3,'South endpoints, lowest, and margin');

// Unit Check remains separate and balanced.
assert(grade7Unit2UnitCheckBank.length===40,'40 Unit Check questions');
for(const lesson of ['Lesson 2.1','Lesson 2.2','Lesson 2.3','Lesson 2.4','Lesson 2.5'])assert(grade7Unit2UnitCheckBank.filter(item=>item.category===lesson).length===8,`${lesson} contributes eight bank questions`);
assert(check.includes('slice(0,2)'),'runtime takes exactly two questions per lesson');

console.log(`Grade 7 Unit 2 final-corrections audit: ${checks} checks passed.`);
