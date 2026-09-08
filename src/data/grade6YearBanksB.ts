import type { PracticeQuestion } from './topicContent';
const q=(difficulty:PracticeQuestion['difficulty'],prompt:string,choices:string[],answer:number,hint:string,explain:string):PracticeQuestion=>({difficulty,prompt,choices,answer,hint,explain});
export const yearBanksB:Record<string,PracticeQuestion[]>={
'decimals-fractions':[
q('standard','Find 1/4 + 1/6.',['2/10','5/12','1/10','2/12'],1,'Use twelfths as a common denominator.','1/4=3/12 and 1/6=2/12, so the sum is 5/12.'),
q('standard','Find 3 × 2/5.',['6/5','5/6','6/15','2/15'],0,'Think three groups of 2/5.','2/5 + 2/5 + 2/5 = 6/5.'),
q('foundations','Write 5 ÷ 4 as a fraction.',['4/5','5/4','1/5','9/4'],1,'A fraction bar can represent division.','5 ÷ 4 = 5/4.'),
q('standard','Find 12.6 + 3.48.',['15.18','16.08','16.80','15.108'],1,'Align equal place values.','12.60 + 3.48 = 16.08.'),
q('standard','Find 12.5 × 4.',['5.0','50','500','16.5'],1,'Break 12.5 into 12 + 0.5.','12×4=48 and 0.5×4=2, so the product is 50.'),
q('challenge','Find 49.2 ÷ 3.',['16.4','14.6','164','1.64'],0,'Divide 492 tenths by 3.','492 ÷ 3 = 164 tenths = 16.4.')],
'ratios-rates':[
q('foundations','Which percent is equivalent to 3/4?',['25%','34%','60%','75%'],3,'Convert the fraction to a decimal.','3/4 = 0.75 = 75%.'),
q('standard','What is 25% of 80?',['20','25','40','60'],0,'25% is one quarter.','One quarter of 80 is 20.'),
q('standard','Which ratio is equivalent to 2:3?',['4:5','6:8','8:12','10:12'],2,'Multiply both terms by the same factor.','2:3 multiplied by 4 gives 8:12.'),
q('challenge','Five pencils cost $10. At the same rate, how much do 8 pencils cost?',['$13','$16','$18','$20'],1,'Find the unit price first.','$10 ÷ 5 = $2 each; 8 × $2 = $16.'),
q('standard','$14.40 buys 6 identical notebooks. What is the unit price?',['$1.40','$2.40','$3.40','$8.40'],1,'Divide total cost by number of notebooks.','$14.40 ÷ 6 = $2.40 per notebook.'),
q('standard','A vehicle travels 180 km in 3 h. What is its unit rate?',['60 km/h','90 km/h','177 km/h','540 km/h'],0,'Divide distance by time.','180 ÷ 3 = 60 km/h.')],
'algebra':[
q('foundations','Simplify 3x + 5x.',['8','8x','15x','3x²'],1,'The terms are like terms.','Add the coefficients: 3x + 5x = 8x.'),
q('standard','Which expression is equivalent to 2(x + 4)?',['2x + 4','2x + 8','x + 8','6x'],1,'Use the distributive property.','2(x+4)=2x+8.'),
q('foundations','Solve x + 7 = 19.',['10','12','26','133'],1,'Undo +7 with −7.','x=12 because 12+7=19.'),
q('standard','Solve 3x = 21.',['6','7','18','63'],1,'Divide both sides by 3.','x=7.'),
q('challenge','Solve 2x + 5 = 17.',['5','6','11','12'],1,'Undo +5, then divide by 2.','2x=12, so x=6.'),
q('challenge','Does x=4 solve 3x − 2 = 10?',['Yes, both sides equal 10.','No, the left side is 8.','No, the left side is 14.','Cannot be checked.'],0,'Substitute 4 for x.','3(4)−2=10, so both sides are equal.')]
};
