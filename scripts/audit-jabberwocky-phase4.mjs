import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const passes = [];
const failures = [];
const rel = (p) => path.join(root, p);
const read = (p) => fs.readFileSync(rel(p), 'utf8');
const has = (text, token) => text.toLowerCase().includes(token.toLowerCase());
const check = (ok, message) => ok ? passes.push(message) : failures.push(message);

const files = {
  hub:'src/pages/courses/grade-7-science/jabberwocky/phase-4/index.astro',
  m1:'src/pages/courses/grade-7-science/jabberwocky/phase-4/mission-1/index.astro',
  m2:'src/pages/courses/grade-7-science/jabberwocky/phase-4/mission-2/index.astro',
  m3:'src/pages/courses/grade-7-science/jabberwocky/phase-4/mission-3/index.astro',
  m4:'src/pages/courses/grade-7-science/jabberwocky/phase-4/mission-4/index.astro',
  progress:'src/components/JcecPhase4Progress.astro',
  data:'src/data/jabberwockyPhase4.ts'
};
for (const file of Object.values(files)) check(fs.existsSync(rel(file)), `exists: ${file}`);
check(!fs.existsSync(rel('src/pages/courses/grade-7-science/jabberwocky/phase-4/mission-5/index.astro')), 'Mission 5 remains unbuilt');

const hub=read(files.hub), m1=read(files.m1), m2=read(files.m2), m3=read(files.m3), m4=read(files.m4), progress=read(files.progress), data=read(files.data);

for (const token of ['PROJECT NEW HORIZON','Read the Building Site','Trace the Forces','Choose What Holds','Keep It Standing','Authorize New Horizon']) check(has(hub,token),`Hub includes ${token}`);
for (const token of ['Requirements ✓','Forces ✓','Materials ✓','Stability ●','Authorization ○']) check(has(hub,token),`Hub progress includes ${token}`);
check((hub.match(/status:'COMPLETE'/g)||[]).length===3,'Hub marks Missions 1–3 complete');
check((hub.match(/status:'CURRENT'/g)||[]).length===1,'Hub marks only Mission 4 current');
check((hub.match(/status:'UPCOMING'/g)||[]).length===1,'Hub keeps only Mission 5 upcoming');
check(hub.includes('phase-4/mission-4/')&&!hub.includes('phase-4/mission-5/'),'Hub releases Mission 4 only');
check(hub.includes('jabberwocky-phase4-posting'),'Phase 4 keeps separate posting state');

for (const token of ['Mission 1 of 5','New Horizon Requirements Card']) check(has(m1,token),`Mission 1 intact: ${token}`);
for (const token of ['Mission 2 of 5','Structural Force Map']) check(has(m2,token),`Mission 2 intact: ${token}`);
for (const token of ['MISSION 3 OF 5','Material & Joint Recommendation']) check(has(m3,token),`Mission 3 intact: ${token}`);
check(has(progress,'Next Mission → Trace the Forces'),'Mission 1 links to Mission 2');
check(has(progress,'Next Mission → Choose What Holds'),'Mission 2 links to Mission 3');
check(has(progress,'Next Mission → Keep It Standing'),'Mission 3 links to Mission 4');
check(progress.includes('phase-4/mission-4/')&&!progress.includes('phase-4/mission-5/'),'Navigation stops at Mission 4');

for (const token of ['MISSION 4 OF 5','How can a structure remain stable and safe when conditions change?','4 classes × 45 minutes','Your Mission','Learn the Science','Investigate','Make a Decision','Record It']) check(has(m4,token),`Mission 4 includes ${token}`);
check(m4.includes('jabberwocky-phase4-posting'),'Mission 4 carries Phase 4 posting');
check(!m4.includes('<select'),'Mission 4 does not reselect continent');
check(has(m4,'Mission 3 tested parts')&&has(m4,'whole system'),'Mission 4 is clearly whole-system testing, not Mission 3 repeated');

for (const token of ['STABILITY','MASS DISTRIBUTION + FOUNDATION','STRENGTHENING THE DESIGN','MARGIN OF SAFETY']) check(has(m4,token),`Mission 4 teaches ${token}`);
check(has(m4,'CENTRE OF GRAVITY — HELPFUL IDEA, NOT A CALCULATION'),'Centre of gravity stays explanatory');
check(has(m4,'not a mathematical safety-factor calculation'),'No formal safety-factor math required');
for (const token of ['corrugation','lamination','change component shape','fastening / bracing']) check(has(m4,token),`Strengthening option present: ${token}`);

check(has(m4,'Standardized Stability & Improvement Investigation'),'Mission 4 uses standardized baseline investigation');
check(has(m4,'same small baseline model'),'Teams begin from a common baseline');
check(has(m4,'Change one factor at a time'),'Mission 4 protects fair comparison');
check(has(m4,'at least two')&&has(m4,'Possible improvement 1')&&has(m4,'Possible improvement 2'),'Teams propose two alternatives before choosing');
for (const token of ['TEST','IDENTIFY WEAKNESS','PROPOSE 2 ALTERNATIVES','MODIFY','RETEST','EXPLAIN']) check(has(m4,token),`Problem-solving cycle includes ${token}`);
check(has(m4,'Did the change solve the weakness? Did it create a new problem?'),'Mission 4 includes troubleshooting after retest');

check(has(m4,'NO STRONGEST / TALLEST MODEL COMPETITION'),'Mission 4 rejects build competition');
check(has(m4,'There is no prize for holding the most mass'),'Mission 4 rejects maximum-load competition');
check(has(m4,'maximum safe test load')||has(m4,'maximum test load'),'Mission 4 includes a teacher-set test ceiling');
for (const token of ['Index cards/cardstock','scrap cardboard','tape','binder clips','coins/washers','string']) check(has(m4,token),`Low-material plan includes ${token}`);
for (const token of ['Desk-sized models only','Small classroom loads only','No snapping materials','No tall structures above desk height']) check(has(m4,token),`Safety includes ${token}`);
check(has(m4,'NO-PURCHASE / DISRUPTION FALLBACK'),'Mission 4 includes no-purchase fallback');
check(has(m4,'model-training data'),'Fallback is clearly training evidence, not new canon');
check(m4.includes('print-phase4-mission4'),'Mission 4 includes printable investigation/record material');

for (const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) check(has(m4,`${continent}:`)||has(m4,`'${continent}':`),`Mission 4 contains ${continent} case`);
check((m4.match(/clues:\[/g)||[]).length===8,'All eight continents have Mission 4 clues');
for (const forbidden of ['earthquake','tsunami','volcano','hurricane','wind speed','soil bearing capacity']) check(!has(m4,forbidden),`Mission 4 avoids unsupported hazard/data: ${forbidden}`);
check(has(m4,'one base width or one final design'),'Continent clues explicitly avoid prescribing a single design answer');

check(has(m4,'What structural stability rule should JCEC require first on this site?'),'Mission 4 has one main decision');
for (const token of ['WEAKNESS','CHANGE','RETEST','SAFETY RULE']) check(has(m4,token),`Mission 4 reasoning includes ${token}`);
check(has(m4,'New Horizon Safety Protocol'),'Mission 4 ends with approved Team Record');
for (const token of ['Main stability risk','Foundation / mass-distribution rule','One strengthening technique','Environmental condition to consider','Margin-of-safety rule','One remaining uncertainty']) check(has(m4,token),`Safety Protocol includes ${token}`);
check(has(m4,'Do not copy your Mission 3 material recommendation'),'Mission 4 does not duplicate Mission 3 record');
check(has(m4,'Why should a safe structure be able to handle more than the exact load we expect on a normal day?'),'Mission 4 includes approved reflection');
check(has(m4,'Mission 4 is finished when:'),'Mission 4 has explicit finish line');
check(has(m4,'Mission 5 — Authorize New Horizon remains locked.'),'Mission 5 remains locked');
check(!m4.includes('phase-4/mission-5/'),'Mission 4 creates no Mission 5 route');

for (const token of ['What Makes a Structure Stable?','Test the Whole System','Improve and Retest','What Rule Should JCEC Require?']) check(has(m4,token),`Mission 4 pacing includes ${token}`);
for (const continent of ['gyre','brillig','manxome','slithy-toves','wabe','bandersnatch','gimble','mimsy']) check(data.includes(`id: '${continent}'`),`Phase 4 core data still includes ${continent}`);

if(failures.length){console.error(`\nJabberwocky Phase 4 readiness audit failed: ${failures.length} issue(s).`);failures.forEach((f)=>console.error(`  ✗ ${f}`));process.exit(1);}
console.log(`\nJabberwocky Phase 4 readiness audit: ${passes.length} checks passed.`);passes.forEach((p)=>console.log(`  ✓ ${p}`));
console.log('\nPhase 4 now releases Mission 4 only: whole-system stability, foundation and mass distribution, standardized baseline testing, two-alternative improvement planning, modify/retest troubleshooting, conceptual margin of safety, eight site-grounded cases, one Safety Protocol, and Mission 5 locked.');