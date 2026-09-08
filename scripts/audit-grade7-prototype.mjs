import { existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root=resolve(import.meta.dirname,'..');
const route='courses/grade-7-math/patterns-relations/patterns-in-division';
const file=join(root,'dist',route,'index.html');
const failures=[];
if(!existsSync(file)) failures.push(`Missing /${route}/`);
else {
  const html=readFileSync(file,'utf8');
  const visible=html.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,' ').replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,' ').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ');
  for(const id of ['overview','big-ideas','understand','examples','vocabulary','explore','practise','check','apply','review']) if(!html.includes(`id="${id}"`)) failures.push(`Missing #${id}`);
  for(const marker of ['Divisibility Pattern Lab','PRACTISE WITH SUPPORT','CHECK YOURSELF','Community Supply Packing Plan','Rule','Evidence','Conclusion','last two digits','last three digits']) if(!visible.includes(marker)) failures.push(`Missing visible marker: ${marker}`);
  for(const widget of ['data-pattern-lab','data-supported-practice','data-independent-check','data-application']) if(!html.includes(widget)) failures.push(`Missing ${widget}`);
  if(/href="[^"]*more-patterns-in-division/.test(html)) failures.push('Lesson links to unbuilt Lesson 1.2.');
  if(/prototype|approved specification|draft lesson/i.test(visible)) failures.push('Development-stage language is visible.');
}
if(failures.length){console.error(`Grade 7 prototype audit failed (${failures.length}):`);failures.forEach(x=>console.error(`  ✗ ${x}`));process.exitCode=1;}
else console.log('Grade 7 prototype audit passed: route, ten sections, interactives, reasoning language, and next-step guard verified.');
