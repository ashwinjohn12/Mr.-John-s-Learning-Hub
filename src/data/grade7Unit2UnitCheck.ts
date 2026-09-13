import type { Unit2Question } from './grade7Unit2';
let questionIndex=0;
const q=(prompt:string,choices:string[],answer:number,feedback:string,category:string,route:string,kind:string):Unit2Question=>{
  const target=questionIndex++%choices.length;
  const shift=(target-answer+choices.length)%choices.length;
  return {
    prompt,
    choices:[...choices.slice(-shift),...choices.slice(0,-shift)],
    answer:target,
    feedback,
    category,
    route,
    kind
  };
};
export const grade7Unit2UnitCheckBank:Unit2Question[]=[
q('Integer for 23 m below a reference?',['+23','-23','0','23 above'],1,'Below the reference is -23.','Lesson 2.1','../representing-integers/#understand-1','context'),
(questionIndex++,{prompt:'Select every expression whose value is an integer.',choices:['-19','0','8÷2','+21','-6.5'],answer:1,answers:[0,1,2,3],feedback:'-19, 0, 8÷2=4, and +21 are integers; -6.5 is not.',category:'Lesson 2.1',route:'../representing-integers/#understand-1',kind:'multi-select',responseType:'multi-select'}),
q('What value is 14P/9N?',['+23','-5','+5','-23'],2,'Nine zero pairs cancel and 5P remain.','Lesson 2.1','../representing-integers/#understand-3','model'),
q('Which 12-chip model represents -6?',['3P/9N','9P/3N','6P/6N','0P/12N'],0,'3-9=-6 and 3+9=12.','Lesson 2.1','../representing-integers/#understand-4','construction'),
q('Order -12,+3,-1,0 from least to greatest.',['-12,-1,0,+3','+3,0,-1,-12','-12,0,-1,+3','-1,-12,0,+3'],0,'Read from left to right on a number line.','Lesson 2.1','../representing-integers/#understand-5','order'),
q('All values possible with exactly 4 chips are…',['-4,-2,0,+2,+4','-4,-3,-2,-1,0,+1,+2,+3,+4','-4,0,+4','-3,-1,+1,+3'],0,'Replacing one sign changes value by 2.','Lesson 2.1','../representing-integers/#understand-4','reasoning'),
q('Repair “10P/7N equals +17.”',['Seven pairs cancel; value +3','Add the counts; +17 is correct','Value -3','Remove three positives'],0,'Chip value is P-N, not total pieces.','Lesson 2.1','../representing-integers/#understand-3','error analysis'),
q('Add two zero pairs to 6P/11N. Which model results?',['8P/13N','4P/9N','8P/11N','6P/13N'],0,'Adding 2P and 2N preserves -5.','Lesson 2.1','../representing-integers/#understand-4','equivalence'),
q('Calculate (-13)+(-8).',['+21','-21','-5','+5'],1,'Twenty-one negative chips remain.','Lesson 2.2','../adding-integers-tiles/#examples','number'),
q('Calculate (+17)+(-25).',['+42','-42','+8','-8'],3,'Seventeen pairs cancel and 8N remain.','Lesson 2.2','../adding-integers-tiles/#understand-2','number'),
q('12N combined with 7P leaves…',['5P, +5','5N, -5','19N, -19','zero'],1,'Seven pairs cancel; five negatives remain.','Lesson 2.2','../adding-integers-tiles/#understand-2','model'),
q('Solve x+(+9)=-4.',['x=+13','x=-13','x=+5','x=-5'],1,'-13+9=-4.','Lesson 2.2','../adding-integers-tiles/#understand-5','missing value'),
q('Calculate (-9)+(+4)+(+9)+(-6).',['-2','+2','-6','+6'],0,'-9 and +9 cancel, leaving 4-6=-2.','Lesson 2.2','../adding-integers-tiles/#understand-5','multi-step'),
q('Which unlike-sign sum equals -10?',['(-14)+(+4)','(+14)+(-4)','(-6)+(-4)','(+6)+(+4)'],0,'Four pairs cancel and 10N remain.','Lesson 2.2','../adding-integers-tiles/#understand-4','construction'),
q('Gain 18, lose 27, then gain 6. Overall change?',['+51','-51','-3','+3'],2,'18-27+6=-3.','Lesson 2.2','../adding-integers-tiles/#apply','context'),
q('Why is (-11)+(+7) negative?',['Seven pairs cancel and 4N remain','The first sign always wins','Both signs become negative','Magnitudes are added'],0,'The greater magnitude is negative and four negatives remain.','Lesson 2.2','../adding-integers-tiles/#understand-4','reasoning'),
q('Start -8 and add +15. Endpoint?',['-23','+23','+7','-7'],2,'Move right 15 from -8 to +7.','Lesson 2.3','../adding-integers-number-line/#understand-1','route'),
q('Start +11 and add -18. Endpoint?',['-7','+7','-29','+29'],0,'Move left 18 from +11 to -7.','Lesson 2.3','../adding-integers-number-line/#examples','route'),
q('What signed jump goes from -14 to +4?',['-18','+18','+10','-10'],1,'The movement is 18 intervals right.','Lesson 2.3','../adding-integers-number-line/#understand-2','missing jump'),
q('Add -9 and end at -3. What was the start?',['-12','+12','-6','+6'],3,'+6+(-9)=-3.','Lesson 2.3','../adding-integers-number-line/#understand-1','missing start'),
q('Start -2; changes +8,-11,+4. Which endpoints follow?',['+6,-5,-1','+8,-11,+4','-10,-21,-17','+6,+3,+7'],0,'Apply each change from the previous endpoint.','Lesson 2.3','../adding-integers-number-line/#understand-5','multi-step'),
q('Which transcript matches (-7)+(+12)?',['start -7; right 12; end +5','start 0; right 12; end +12','start -7; left 12; end -19','start +12; left 7; end +5'],0,'The first addend is start and the second is movement.','Lesson 2.3','../adding-integers-number-line/#understand-1','model match'),
q('Repair: an arrow from +3 left 8 ends at -8.',['It ends -5; -8 is the change','It ends +11','Start should be 0','The statement is correct'],0,'Count eight intervals left from +3.','Lesson 2.3','../adding-integers-number-line/#understand-2','error analysis'),
q('Elevator at -4 rises 9, then falls 6. Final floor?',['-1','+1','+11','-19'],0,'Endpoints are +5 then -1.','Lesson 2.3','../adding-integers-number-line/#apply','application'),
q('Model (+11)-(+15).',['4 pairs needed; -4','15 pairs; +26','No pairs; -4','4 pairs; +4'],0,'Add four pairs, remove 15P, leave 4N.','Lesson 2.4','../subtracting-integers-tiles/#understand-3','number/model'),
q('Model (-10)-(-6).',['No pairs; -4','6 pairs; -16','4 pairs; +4','10 pairs; 0'],0,'Remove 6N directly and leave 4N.','Lesson 2.4','../subtracting-integers-tiles/#understand-2','number/model'),
q('Model (+7)-(-5).',['5 pairs; +12','No pairs; +2','5 pairs; -12','7 pairs; +5'],0,'Add five pairs, remove 5N, leave 12P.','Lesson 2.4','../subtracting-integers-tiles/#understand-3','number/model'),
q('Model (-6)-(+8).',['8 pairs; -14','2 pairs; +2','No pairs; -14','8 pairs; +14'],0,'Add eight pairs, remove 8P, leave 14N.','Lesson 2.4','../subtracting-integers-tiles/#understand-4','number/model'),
q('Minimum pairs for (-2)-(-11)?',['2','9','11','13'],1,'The model has 2N and needs 11N, a shortage of 9.','Lesson 2.4','../subtracting-integers-tiles/#understand-3','minimum pairs'),
q('Compare (+3)-(-9) with its reversed subtraction.',['+12 and -12','-6 and -6','+6 and +6','-12 and +12'],0,'Reversing the order gives opposite differences.','Lesson 2.4','../subtracting-integers-tiles/#understand-5','compare'),
q('A student removes 5P from a 3P model. Repair.',['Add 2 zero pairs first; result -2','Remove only 3P; result 0','Add 2P only','Change the minuend to -3'],0,'Two complete pairs supply the missing positives.','Lesson 2.4','../subtracting-integers-tiles/#understand-3','error analysis'),
q('Which subtraction equals +6 and requires adding four zero pairs before removal?',['(+2)-(-4)','(+8)-(+2)','(-2)-(+4)','(+2)+(+4)'],0,'Removing -4 from a +2 model requires adding four complete zero pairs and leaves +6.','Lesson 2.4','../subtracting-integers-tiles/#explore','construction'),
q('Rewrite and solve (-15)-(-8).',['(-15)+(+8)=-7','(+15)+(+8)=+23','(-15)+(-8)=-23','(+15)+(-8)=+7'],0,'Keep -15 and add the opposite +8.','Lesson 2.5','../subtracting-integers-number-line/#understand-2','rewrite/solve'),
q('Rewrite and solve (+6)-(-13).',['(+6)+(+13)=+19','(-6)+(+13)=+7','(+6)+(-13)=-7','(-6)+(-13)=-19'],0,'The opposite of -13 is +13.','Lesson 2.5','../subtracting-integers-number-line/#understand-2','rewrite/solve'),
q('Initial -5, final +12. Directed change?',['-17','+17','7','-7'],1,'Final-initial=12-(-5)=+17.','Lesson 2.5','../subtracting-integers-number-line/#understand-4','directed change'),
q('Initial +9, final -7. Directed change?',['+16','-16','+2','-2'],1,'Final-initial=-7-(+9)=-16.','Lesson 2.5','../subtracting-integers-number-line/#understand-4','directed change'),
q('Distance between -16 and +3?',['-19','13','19','-13'],2,'Distance is the nonnegative separation, 19.','Lesson 2.5','../subtracting-integers-number-line/#understand-4','distance'),
q('Solve (-4)-x=+7.',['x=+11','x=-11','x=+3','x=-3'],1,'-4-(-11)=-4+11=+7.','Lesson 2.5','../subtracting-integers-number-line/#examples','missing subtrahend'),
q('Repair (+2)-(-6)=(-2)+(+6).',['Keep +2: (+2)+(+6)=+8','Change both signs','Move left 6','The original is correct'],0,'Only the second integer changes to its opposite.','Lesson 2.5','../subtracting-integers-number-line/#understand-2','error analysis'),
q('A freezer rises from -18 to -7, then returns to -18. Changes?',['+11 then -11','-11 then +11','+25 then -25','-7 then -18'],0,'Final-initial gives +11, then -11.','Lesson 2.5','../subtracting-integers-number-line/#apply','application')
];

const numericKinds=new Set(['number','directed change','distance','minimum pairs','missing jump','missing start','missing subtrahend']);
grade7Unit2UnitCheckBank.forEach(item=>{
 if(numericKinds.has(item.kind||'')){
  item.responseType='number';
  item.numericAnswer=Number(String(item.choices[item.answer]).replace(/−/g,'-').match(/[+-]?\d+/)?.[0]);
 }
});
