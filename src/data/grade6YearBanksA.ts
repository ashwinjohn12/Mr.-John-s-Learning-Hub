import type { PracticeQuestion } from './topicContent';
const q=(difficulty:PracticeQuestion['difficulty'],prompt:string,choices:string[],answer:number,hint:string,explain:string):PracticeQuestion=>({difficulty,prompt,choices,answer,hint,explain});
export const yearBanksA:Record<string,PracticeQuestion[]>={
'positive-negative-numbers':[
q('foundations','Which value is greater: −6 or −11?',['−11','−6','They are equal','Cannot tell'],1,'Use a number line.','−6 is farther right than −11, so −6 is greater.'),
q('foundations','What is the magnitude of −14?',['−14','0','14','28'],2,'Magnitude is distance from zero.','−14 is 14 units from zero.'),
q('standard','Find (−8) + (+13).',['−21','−5','+5','+21'],2,'Different signs: compare magnitudes.','13 − 8 = 5 and the greater magnitude is positive, so +5.'),
q('standard','Find (−7) + (−9).',['−16','−2','+2','+16'],0,'The signs are the same.','7 + 9 = 16 and the common sign is negative, so −16.'),
q('standard','Find (+5) − (−7).',['−12','−2','+2','+12'],3,'Rewrite as addition of the opposite.','(+5) − (−7) = (+5) + (+7) = +12.'),
q('challenge','Which expression is equivalent to (−12) − (+5)?',['(+12)+(+5)','(−12)+(+5)','(−12)+(−5)','(+12)+(−5)'],2,'Keep the first integer and add the opposite of the second.','The additive inverse of +5 is −5, so (−12)+(−5).')],
'coordinates-design':[
q('foundations','Which point lies in Quadrant II?',['(3,4)','(−3,4)','(−3,−4)','(3,−4)'],1,'Quadrant II is left and up.','Quadrant II has negative x and positive y.'),
q('standard','Translate (−2,1) by 4 right and 3 down.',['(2,4)','(−6,−2)','(2,−2)','(−2,−2)'],2,'Add 4 to x and subtract 3 from y.','(−2+4,1−3)=(2,−2).'),
q('standard','Reflect (5,−2) across the y-axis.',['(−5,−2)','(5,2)','(−5,2)','(2,−5)'],0,'Across the y-axis, x changes sign.','The reflected point is (−5,−2).'),
q('standard','A polygon is rotated 90° about one of its vertices. Which statement must remain true?',['Its side lengths change.','Its size and shape stay the same.','It becomes a reflection.','The centre vertex moves.'],1,'Rotations are rigid transformations.','A rotation preserves lengths and angles, so the image is congruent.'),
q('challenge','What is the best way to demonstrate that two shapes are congruent?',['Compare only their areas.','Superimpose one on the other after movement.','Count only the sides.','Compare colour.'],1,'Congruent shapes match exactly in size and shape.','Exact superimposition demonstrates congruence.'),
q('challenge','Which pattern is a tessellation?',['Shapes repeat with small gaps.','Shapes cover a surface with no gaps or overlaps.','Shapes overlap at every edge.','Any repeating colour pattern.'],1,'A tessellation completely covers the surface.','A tessellation has no gaps and no overlaps.')],
'number-operations':[
q('foundations','Which expression composes the product 60 in a different way from 5 × 12?',['6 × 10','7 × 8','4 × 12','3 × 15'],0,'Find another product equal to 60.','6 × 10 = 60.'),
q('standard','What is the prime factorization of 84?',['2 × 42','3 × 28','2 × 2 × 3 × 7','4 × 3 × 7'],2,'Every factor must be prime.','84 = 2 × 2 × 3 × 7.'),
q('standard','18 = 2 × 3 × 3 and 24 = 2 × 2 × 2 × 3. Which is a common factor?',['4','6','8','9'],1,'Use shared prime factors.','Both contain 2 × 3, so 6 is a common factor.'),
q('foundations','Which expansion matches 4³?',['4 × 3','4 × 4 × 4','3 × 3 × 3 × 3','4 + 4 + 4'],1,'The exponent counts copies of the base.','4³ means 4 × 4 × 4.'),
q('challenge','Evaluate 6 + 2 × (5 − 2)².',['24','72','30','18'],0,'Parentheses, power, multiplication, addition.','5−2=3, 3²=9, 2×9=18, then 6+18=24.'),
q('standard','Evaluate 36 ÷ 6 × 3.',['2','6','18','108'],2,'Multiply and divide left to right.','36 ÷ 6 = 6, then 6 × 3 = 18.')]
};
