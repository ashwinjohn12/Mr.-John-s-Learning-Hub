import type { PracticeQuestion } from './topicContent';

export type SpiralQuestion = PracticeQuestion & { source:string; reviewHref?:string };

const q = (source:string,prompt:string,choices:string[],answer:number,hint:string,explain:string,reviewHref?:string):SpiralQuestion => ({
  difficulty:'standard',source,prompt,choices,answer,hint,explain,reviewHref
});

export const grade6SpiralBanks: Record<string, SpiralQuestion[]> = {
  'positive-negative-numbers':[
    q('Earlier learning · Order of operations','Evaluate 18 − 3 × 4.',['60','6','12','15'],1,'Multiply before subtracting.','3 × 4 = 12, then 18 − 12 = 6.'),
    q('Earlier learning · Fractions','Which fraction is greater?',['2/3','3/5','They are equal','Cannot tell'],0,'Use a common denominator or compare decimals.','2/3 = 10/15 and 3/5 = 9/15, so 2/3 is greater.'),
    q('Preview · Coordinates','Which ordered pair is 4 right and 3 up from the origin?',['(4,3)','(3,4)','(−4,3)','(4,−3)'],0,'The x-coordinate describes horizontal movement first.','4 right gives x=4 and 3 up gives y=3, so the point is (4,3).'),
    q('Earlier learning · Multiplication','What is 8 × 7?',['54','56','63','64'],1,'Use a multiplication fact or repeated groups.','8 × 7 = 56.'),
    q('Earlier learning · Place value','What is the value of the 6 in 42.67?',['6','0.6','0.06','60'],1,'The 6 is in the tenths place.','The 6 represents six tenths, or 0.6.')
  ],
  'coordinates-design':[
    q('Unit 1 · Integers','Which is greater: −3 or −8?',['−8','−3','They are equal','Cannot tell'],1,'Picture both values on a number line.','−3 is farther right, so −3 is greater.','/courses/grade-6-math/positive-negative-numbers/unit-review/'),
    q('Unit 1 · Magnitude','What is the magnitude of −12?',['−12','0','12','24'],2,'Magnitude is distance from zero.','−12 is 12 units from zero.','/courses/grade-6-math/positive-negative-numbers/unit-review/'),
    q('Earlier learning · Fractions','Which fraction is equivalent to 3/4?',['6/8','4/7','9/16','12/20'],0,'Multiply numerator and denominator by the same factor.','3/4 × 2/2 = 6/8.'),
    q('Unit 1 · Addition','Find (−5) + (+9).',['−14','−4','+4','+14'],2,'Different signs: compare magnitudes.','9 − 5 = 4 and the greater magnitude is positive, so the sum is +4.','/courses/grade-6-math/positive-negative-numbers/unit-review/'),
    q('Earlier learning · Geometry','How many sides does a hexagon have?',['5','6','7','8'],1,'The prefix hex- refers to six.','A hexagon has 6 sides.')
  ],
  'number-operations':[
    q('Unit 2 · Coordinates','Which point lies in Quadrant III?',['(4,5)','(−4,5)','(−4,−5)','(4,−5)'],2,'Quadrant III is left and down.','Both coordinates are negative in Quadrant III.','/courses/grade-6-math/coordinates-design/unit-review/'),
    q('Unit 2 · Reflection','Reflect (3,−2) across the y-axis.',['(−3,−2)','(3,2)','(−3,2)','(2,−3)'],0,'Across the y-axis, the x-coordinate changes sign.','(3,−2) becomes (−3,−2).','/courses/grade-6-math/coordinates-design/unit-review/'),
    q('Earlier learning · Place value','Which number lies between 4.2 and 4.3?',['4.03','4.25','4.31','4.4'],1,'Compare the tenths and hundredths.','4.25 is greater than 4.2 and less than 4.3.'),
    q('Unit 1 · Integers','Find (+7) − (+10).',['−17','−3','+3','+17'],1,'Subtracting +10 moves 10 units left.','7 − 10 = −3.','/courses/grade-6-math/positive-negative-numbers/unit-review/'),
    q('Earlier learning · Part-whole','What percent of one dollar is 25 cents?',['4%','25%','40%','75%'],1,'One dollar is 100 cents.','25 out of 100 is 25%.')
  ],
  'decimals-fractions':[
    q('Unit 3 · Powers','Which expansion matches 3³?',['3 × 3','3 × 3 × 3','3 × 3 × 3 × 3','3 + 3 + 3'],1,'The exponent counts copies of the base as factors.','3³ = 3 × 3 × 3.','/courses/grade-6-math/number-operations/unit-review/'),
    q('Unit 3 · Order of operations','Evaluate 20 ÷ 5 × 3.',['4','12','15','60'],1,'Multiplication and division have equal priority. Work left to right.','20 ÷ 5 = 4, then 4 × 3 = 12.','/courses/grade-6-math/number-operations/unit-review/'),
    q('Earlier learning · Equivalent fractions','Which fraction is equivalent to 5/6?',['10/12','6/7','15/24','20/30'],0,'Multiply numerator and denominator by the same number.','5/6 × 2/2 = 10/12.'),
    q('Unit 2 · Coordinates','What is the x-coordinate of (−7,4)?',['−7','4','7','−4'],0,'The first coordinate is x.','The x-coordinate is −7.','/courses/grade-6-math/coordinates-design/unit-review/'),
    q('Unit 1 · Integers','Find (−6) + (+6).',['−12','0','+6','+12'],1,'The numbers are additive inverses.','Additive inverses sum to 0.','/courses/grade-6-math/positive-negative-numbers/unit-review/')
  ],
  'ratios-rates':[
    q('Unit 4 · Fractions','Find 1/3 + 1/6.',['1/9','1/2','2/9','2/6 only'],1,'Use sixths as a common unit.','1/3 = 2/6, so 2/6 + 1/6 = 3/6 = 1/2.','/courses/grade-6-math/decimals-fractions/unit-review/'),
    q('Unit 4 · Decimals','Find 4.8 + 2.35.',['6.15','7.15','7.05','7.25'],1,'Align equal place values.','4.80 + 2.35 = 7.15.','/courses/grade-6-math/decimals-fractions/unit-review/'),
    q('Unit 4 · Equal sharing','What is 5 ÷ 4 as a fraction?',['4/5','5/4','1/5','9/4'],1,'A fraction bar can represent division.','5 ÷ 4 = 5/4.','/courses/grade-6-math/decimals-fractions/unit-review/'),
    q('Unit 3 · Factors','Which is a factor of 42?',['5','6','8','9'],1,'A factor divides with remainder 0.','42 ÷ 6 = 7, so 6 is a factor.','/courses/grade-6-math/number-operations/unit-review/'),
    q('Unit 1 · Integers','Which value is least?',['−9','−2','0','+3'],0,'The least value is farthest left on a number line.','−9 is the least value.','/courses/grade-6-math/positive-negative-numbers/unit-review/')
  ],
  'algebra':[
    q('Unit 5 · Percent','What is 25% of 80?',['20','25','40','60'],0,'25% is one quarter.','One quarter of 80 is 20.','/courses/grade-6-math/ratios-rates/unit-review/'),
    q('Unit 5 · Unit rate','$18 for 6 notebooks is how much per notebook?',['$2','$3','$6','$12'],1,'Divide the total cost by the number of notebooks.','18 ÷ 6 = 3, so the unit price is $3 per notebook.','/courses/grade-6-math/ratios-rates/unit-review/'),
    q('Unit 4 · Fractions','What is 3 × 2/5?',['6/5','5/6','6/15','2/15'],0,'Think three groups of 2/5.','2/5 + 2/5 + 2/5 = 6/5.','/courses/grade-6-math/decimals-fractions/unit-review/'),
    q('Unit 1 · Integers','Find (−8) + (+3).',['−11','−5','+5','+11'],1,'Different signs: compare magnitudes.','8 − 3 = 5 and the greater magnitude is negative, so −5.','/courses/grade-6-math/positive-negative-numbers/unit-review/'),
    q('Unit 3 · Order of operations','Evaluate 5 + 2 × 4.',['28','13','11','20'],1,'Multiply before adding.','2 × 4 = 8, then 5 + 8 = 13.','/courses/grade-6-math/number-operations/unit-review/')
  ],
  'measurement':[
    q('Unit 6 · Equations','Solve x + 7 = 19.',['10','12','26','133'],1,'Undo +7 with −7.','x = 12 because 12 + 7 = 19.','/courses/grade-6-math/algebra/unit-review/'),
    q('Unit 6 · Expressions','Simplify 3x + 5x.',['8','8x','15x','3x²'],1,'The terms are like terms.','3x + 5x = 8x.','/courses/grade-6-math/algebra/unit-review/'),
    q('Unit 5 · Unit rate','A cyclist travels 24 km in 3 h. What is the unit rate?',['6 km/h','8 km/h','21 km/h','72 km/h'],1,'Divide distance by time.','24 ÷ 3 = 8 km/h.','/courses/grade-6-math/ratios-rates/unit-review/'),
    q('Unit 4 · Multiplication','Estimate 19.8 × 6 using a compatible nearby number.',['about 12','about 60','about 120','about 200'],2,'19.8 is close to 20.','20 × 6 = 120, so about 120 is reasonable.','/courses/grade-6-math/decimals-fractions/unit-review/'),
    q('Unit 2 · Coordinates','Which point is 5 units right of (−2,3)?',['(3,3)','(−7,3)','(−2,8)','(5,3)'],0,'A horizontal move changes x only.','−2 + 5 = 3, so the point is (3,3).','/courses/grade-6-math/coordinates-design/unit-review/')
  ],
  'patterns':[
    q('Unit 6 · Equations','Solve 3x = 21.',['6','7','18','63'],1,'Undo multiplication by 3 with division by 3.','x = 7.','/courses/grade-6-math/algebra/unit-review/'),
    q('Unit 6 · Equivalent expressions','Which expression is equivalent to 2(x + 4)?',['2x + 4','2x + 8','x + 8','6x'],1,'Use the distributive property.','2(x + 4) = 2x + 8.','/courses/grade-6-math/algebra/unit-review/'),
    q('Unit 2 · Coordinates','Which ordered pair has x=4 and y=−3?',['(−3,4)','(4,−3)','(−4,3)','(3,−4)'],1,'Coordinates are written (x,y).','The ordered pair is (4,−3).','/courses/grade-6-math/coordinates-design/unit-review/'),
    q('Unit 7 · Area','What is the area of a triangle with base 10 cm and height 6 cm?',['16 cm²','30 cm²','60 cm²','120 cm²'],1,'Triangle area is half of base × height.','10 × 6 ÷ 2 = 30 cm².','/courses/grade-6-math/measurement/unit-review/'),
    q('Unit 5 · Proportions','If 2 tickets cost $6, what do 5 tickets cost at the same rate?',['$10','$12','$15','$30'],2,'Find the unit price first.','$6 ÷ 2 = $3 each, and 5 × $3 = $15.','/courses/grade-6-math/ratios-rates/unit-review/')
  ],
  'statistics':[
    q('Unit 8 · Functions','If y = 3x + 2, what is y when x=4?',['9','12','14','18'],2,'Substitute 4 for x.','3(4)+2 = 14.','/courses/grade-6-math/patterns/unit-review/'),
    q('Unit 8 · Tables','A rule adds 5 to every input. What output matches input 7?',['2','5','12','35'],2,'Apply the same rule to the input.','7 + 5 = 12.','/courses/grade-6-math/patterns/unit-review/'),
    q('Unit 5 · Percent','18 out of 30 is what percent?',['40%','50%','60%','80%'],2,'18/30 simplifies to 3/5.','3/5 = 0.6 = 60%.','/courses/grade-6-math/ratios-rates/unit-review/'),
    q('Unit 4 · Fractions/decimals','Which decimal equals 3/4?',['0.25','0.34','0.75','1.25'],2,'Three quarters is 75 hundredths.','3/4 = 0.75.','/courses/grade-6-math/decimals-fractions/unit-review/'),
    q('Unit 7 · Volume','What is the volume of a 4 cm × 3 cm × 5 cm rectangular prism?',['12 cm³','20 cm³','60 cm³','120 cm³'],2,'Multiply the three dimensions.','4 × 3 × 5 = 60 cm³.','/courses/grade-6-math/measurement/unit-review/')
  ]
};
