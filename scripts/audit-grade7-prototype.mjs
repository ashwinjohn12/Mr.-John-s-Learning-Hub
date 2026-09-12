import { existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root=resolve(import.meta.dirname,'..');
const route='courses/grade-7-math/patterns-relations/patterns-in-division';
const file=join(root,'dist',route,'index.html');
const failures=[];
const readSource=(relative)=>readFileSync(join(root,relative),'utf8');
const extractArray=(source,name)=>{
  const match=source.match(new RegExp(`const ${name} = (\\[[\\s\\S]*?\\n\\]);`));
  if(!match) throw new Error(`Could not find ${name}`);
  return Function(`return ${match[1]}`)();
};
if(!existsSync(file)) failures.push(`Missing /${route}/`);
else {
  const html=readFileSync(file,'utf8');
  const visible=html.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,' ').replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,' ').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ');
  for(const id of ['overview','big-ideas','understand','examples','vocabulary','explore','practise','check','apply','review']) if(!html.includes(`id="${id}"`)) failures.push(`Missing #${id}`);
  for(const marker of ['Divisibility Pattern Lab','PRACTISE WITH SUPPORT','CHECK YOURSELF','Community Supply Packing Plan','Rule','Evidence','Conclusion','last two digits','last three digits']) if(!visible.includes(marker)) failures.push(`Missing visible marker: ${marker}`);
  for(const widget of ['data-pattern-lab','data-supported-practice','data-independent-check','data-application']) if(!html.includes(widget)) failures.push(`Missing ${widget}`);
  for(const marker of ['aria-controls="lab-panel-chart"','aria-controls="lab-panel-tester"','aria-controls="lab-panel-builder"','aria-controls="lab-panel-sort"','data-shipment-status','data-counter-feedback','Swipe table →']) if(!html.includes(marker)) failures.push(`Missing accessibility or feedback marker: ${marker}`);
  if((html.match(/aria-pressed=/g)||[]).length<7) failures.push('Warm-up controls do not expose pressed state.');
  if(!/href="[^"]*more-patterns-in-division/.test(html)) failures.push('Lesson does not link to completed Lesson 1.2.');
  if(/prototype|approved specification|draft lesson/i.test(visible)) failures.push('Development-stage language is visible.');
}
try {
  const practice=extractArray(readSource('src/components/DivisibilityPractice.astro'),'questions');
  if(practice.length!==8) failures.push(`Supported practice has ${practice.length} questions, expected 8.`);
  practice.forEach((q,index)=>{
    if(!Number.isInteger(q.answer)||q.answer<0||q.answer>=q.choices.length) failures.push(`Practice question ${index+1} has an invalid answer index.`);
    for(const field of ['rule','hint','nearby','proof']) if(!q[field]) failures.push(`Practice question ${index+1} is missing ${field} support.`);
  });
  const bank=extractArray(readSource('src/components/DivisibilityCheck.astro'),'bank');
  if(bank.length!==30) failures.push(`Check Yourself bank has ${bank.length} questions, expected 30.`);
  const minimums={foundation:6,standard:8,reasoning:6,construct:6,applied:4};
  for(const [type,minimum] of Object.entries(minimums)) if(bank.filter(q=>q.type===type).length<minimum) failures.push(`Check Yourself needs at least ${minimum} ${type} questions.`);
  bank.forEach((q,index)=>{if(!Number.isInteger(q.a)||q.a<0||q.a>=q.c.length||!q.e) failures.push(`Check Yourself item ${index+1} has incomplete answer feedback.`)});
} catch(error) { failures.push(error.message); }
if(failures.length){console.error(`Grade 7 prototype audit failed (${failures.length}):`);failures.forEach(x=>console.error(`  ✗ ${x}`));process.exitCode=1;}
else console.log('Grade 7 prototype audit passed: route, ten sections, interactives, reasoning language, and next-step guard verified.');
