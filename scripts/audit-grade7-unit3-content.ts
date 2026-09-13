import{grade7Unit3Lessons}from'../src/data/grade7Unit3.ts';
import{grade7Unit3UnitCheckBank}from'../src/data/grade7Unit3UnitCheck.ts';
let checks=0;
const ok=(v:any,m:string)=>{if(!v)throw new Error(m);checks++};
const banned=/verification score|stored result|case \d+|not enough information|placeholder lesson/i;
const titles=['Fractions to Decimals','Comparing and Ordering Fractions and Decimals','Adding and Subtracting Decimals','Multiplying Decimals','Dividing Decimals','Order of Operations with Decimals','Relating Fractions, Decimals, and Percents','Solving Percent Problems'];
ok(grade7Unit3Lessons.length===8,'eight lessons');
const allIds:string[]=[];
const valueOf=(s:string)=>{const clean=s.replace(/−/g,'-').trim();if(clean.includes('÷')){const[a,b]=clean.split('÷').map(Number);return a/b}return Number(clean.replace(/[$,%]/g,''))};
grade7Unit3Lessons.forEach((lesson,i)=>{
 ok(lesson.number===`3.${i+1}`,'sequence');ok(lesson.title===titles[i],'title');ok(/N[2347]/.test(lesson.outcome),'outcome');
 ok(lesson.practice.length===8,'eight supported');ok(lesson.check.length===30,'thirty check');ok(lesson.exit.length===3,'three exits');
 ok(lesson.understand.length===4,'four concepts');ok(lesson.examples.length===4,'four examples');ok(lesson.vocabulary.length>=4,'vocabulary');
 ok(lesson.explore.phases.length===5,'five phases');ok(lesson.apply.values.length===4,'four apply values');
 ok(new Set(lesson.check.map(x=>x.id)).size===30,'unique bank ids');ok(new Set(lesson.check.map(x=>x.responseType||'choice')).size>=5,'five response types');
 ok(lesson.practice.every(x=>x.hint&&x.hint2&&x.hint!==x.hint2),'two hints');
 ok(!lesson.practice.some(x=>x.prompt===lesson.warmup.prompt),'warm-up is separate from practice');
 ok(new Set(lesson.practice.map(x=>x.hint)).size===8,'question-specific first hints');
 for(const item of lesson.check.filter(x=>x.responseType==='multi-select')){const target=valueOf(item.choices[item.answer]);ok((item.answers||[]).every(index=>Math.abs(valueOf(item.choices[index])-target)<1e-8),'every accepted multiselect expression is equivalent');}
 ok(lesson.practice.every(x=>x.hint2!==x.feedback&&!/the (correct|verified) (answer|value) is/i.test(x.hint2)),'hint two does not reveal');
 ok(lesson.check.every(x=>x.route&&!x.route.includes('..')),'local repair anchors');
 for(const pool of[lesson.practice,lesson.check,lesson.exit])for(const item of pool){
  allIds.push(item.id);ok(!banned.test(item.prompt),'no placeholder');ok(item.prompt.length>12,'complete prompt');ok(item.feedback.length>20,'feedback');
  ok(item.answer>=0,'answer index');if(item.responseType==='multi-select')ok((item.answers?.length||0)>1,'true multiselect');
  if(item.responseType==='order')ok((item.orderAnswer?.length||0)>=3,'true order');if(item.responseType==='number')ok(Number.isFinite(item.numericAnswer),'numeric answer');
 }
});
ok(grade7Unit3UnitCheckBank.length===40,'forty unit questions');
for(let i=1;i<=8;i++)ok(grade7Unit3UnitCheckBank.filter(x=>x.category===`Lesson 3.${i}`).length===5,'five per lesson');
ok(new Set(grade7Unit3UnitCheckBank.map(x=>x.id)).size===40,'unit ids');ok(new Set(grade7Unit3UnitCheckBank.map(x=>x.responseType)).size===5,'unit response variety');
ok(grade7Unit3UnitCheckBank.every(x=>x.repairLabel&&!/[\/#]|\.\./.test(x.repairLabel)),'friendly repair labels');
for(const item of grade7Unit3UnitCheckBank.filter(x=>x.responseType==='multi-select')){const target=valueOf(item.choices[item.answer]);ok((item.answers||[]).every(index=>Math.abs(valueOf(item.choices[index])-target)<1e-8),'unit multiselect equivalence');}
allIds.push(...grade7Unit3UnitCheckBank.map(x=>x.id));ok(new Set(allIds).size===allIds.length,'pool id separation');
const independent=grade7Unit3Lessons.flatMap(l=>[...l.practice,...l.exit]).concat(grade7Unit3UnitCheckBank).map(x=>x.prompt);
ok(new Set(independent).size===independent.length,'supported exit and unit prompts independent');
for(let attempt=0;attempt<10000;attempt++){
 const groups=Array.from({length:8},(_,i)=>grade7Unit3UnitCheckBank.filter(x=>x.category===`Lesson 3.${i+1}`));
 const first=groups.map(g=>g[Math.floor(Math.random()*g.length)]);
 const extras=[...groups].sort(()=>Math.random()-.5).slice(0,2).map(g=>g.filter(x=>!first.some(y=>y.id===x.id))[Math.floor(Math.random()*4)]);
 const set=[...first,...extras];ok(set.length===10,'ten items');ok(new Set(set.map(x=>x.id)).size===10,'unique attempt');
 const counts=groups.map((_,i)=>set.filter(x=>x.category===`Lesson 3.${i+1}`).length);
 ok(counts.every(n=>n===1||n===2),'one or two each');ok(counts.filter(n=>n===2).length===2,'two lessons doubled');
}
console.log(`Grade 7 Unit 3 content audit: ${checks} checks passed.`);
