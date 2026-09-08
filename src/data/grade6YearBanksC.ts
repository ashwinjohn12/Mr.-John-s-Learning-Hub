import type { PracticeQuestion } from './topicContent';
const q=(difficulty:PracticeQuestion['difficulty'],prompt:string,choices:string[],answer:number,hint:string,explain:string):PracticeQuestion=>({difficulty,prompt,choices,answer,hint,explain});
export const yearBanksC:Record<string,PracticeQuestion[]>={
'measurement':[
q('foundations','Find the area of a parallelogram with base 8 cm and perpendicular height 5 cm.',['13 cm²','20 cm²','40 cm²','80 cm²'],2,'Area = base × perpendicular height.','8 × 5 = 40 cm².'),
q('standard','A parallelogram has area 42 cm² and base 7 cm. What is its height?',['5 cm','6 cm','7 cm','49 cm'],1,'Divide area by base.','42 ÷ 7 = 6 cm.'),
q('standard','Find the area of a triangle with base 10 cm and perpendicular height 6 cm.',['16 cm²','30 cm²','60 cm²','120 cm²'],1,'Triangle area is half of base × height.','10 × 6 ÷ 2 = 30 cm².'),
q('challenge','Two triangles have the same base and perpendicular height. What must be true?',['They are congruent.','They have the same area.','They have the same angles.','They point the same direction.'],1,'Area depends on base and perpendicular height.','Equal base and height give equal area even when the shapes look different.'),
q('standard','An 8 m × 6 m rectangle has a 2 m × 3 m rectangle removed. What is the remaining area?',['42 m²','48 m²','36 m²','18 m²'],0,'Subtract the removed area from the large area.','8×6=48 and 2×3=6, so 48−6=42 m².'),
q('standard','Find the volume of a 4 cm × 3 cm × 5 cm right rectangular prism.',['12 cm³','20 cm³','60 cm³','120 cm³'],2,'Multiply the three dimensions.','4 × 3 × 5 = 60 cm³.')],
'patterns':[
q('foundations','Which statement describes a function?',['One input may have two outputs.','Each input has exactly one output.','Every output must be different.','Only equations are functions.'],1,'Focus on each input.','A function assigns exactly one output to each input.'),
q('standard','For y = 2x + 3, what is y when x=4?',['8','9','11','14'],2,'Substitute 4 for x.','2(4)+3=11.'),
q('challenge','Inputs 1,2,3 give outputs 5,8,11. Which rule matches?',['y=2x+3','y=3x+2','y=5x','y=x+4'],1,'Test more than one input.','3(1)+2=5, 3(2)+2=8, and 3(3)+2=11.'),
q('foundations','A table row shows x=3 and y=7. Which ordered pair represents it?',['(7,3)','(3,7)','(3,3)','(7,7)'],1,'Ordered pairs are written (x,y).','The point is (3,7).'),
q('standard','For y = 4x + 1, what input gives output 21?',['4','5','6','20'],1,'Work backward: subtract 1, then divide by 4.','21−1=20 and 20÷4=5.'),
q('challenge','A graph contains (0,2),(1,5),(2,8), but a table lists (2,9). What should you conclude?',['All views match.','The table has a mismatch.','The graph is not a function.','The equation must be y=x+2.'],1,'The same function must show the same pairs.','At x=2 the graph shows y=8, so (2,9) does not match.')],
'statistics':[
q('foundations','What are the possible outcomes of flipping one fair coin?',['Heads only','Tails only','Heads and tails','1 and 2'],2,'List every result that could occur.','The possible outcomes are heads and tails.'),
q('standard','On a fair six-sided number cube, which outcomes are in the event “roll an even number”?',['{1,3,5}','{2,4,6}','{2}','{6}'],1,'An event can contain several outcomes.','The even outcomes are 2, 4, and 6.'),
q('foundations','Results H,H,T,H,T,T,H have what frequency for H?',['3','4','5','7'],1,'Count each H.','Heads occurs four times.'),
q('standard','18 students out of 30 choose basketball. What is the relative frequency?',['40%','50%','60%','80%'],2,'Write 18/30 and convert.','18/30=3/5=0.6=60%.'),
q('challenge','Which sample should usually give the more reliable estimate of a fair coin’s head rate?',['10 tosses','20 tosses','1000 tosses','They are always equal'],2,'Larger samples are usually less affected by short-run variation.','1000 tosses generally gives the more reliable estimate.'),
q('challenge','A fair coin gives 8 heads in 10 tosses and 51 heads in 100 tosses. Which conclusion is strongest?',['The coin is definitely biased.','The 100-toss sample is stronger evidence for a rate near 50%.','The 10-toss sample proves the true rate is 80%.','The next toss must be tails.'],1,'Use sample size and careful language.','The larger sample contains more evidence and 51% is close to the expected 50%.')]
};
