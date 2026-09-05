import type { PracticeQuestion, TopicContent, VocabularyWord } from './topicContent';

type Difficulty = PracticeQuestion['difficulty'];
const signed = (n: number) => n > 0 ? `+${n}` : `${n}`;
const keyFor = (course: string, unit: string, topic: string) => `${course}/${unit}/${topic}`;

function choiceQuestion(
  difficulty: Difficulty,
  prompt: string,
  choices: string[],
  answer: number,
  hint: string,
  explain: string
): PracticeQuestion {
  return { difficulty, prompt, choices, answer, hint, explain };
}

function numberQuestion(
  difficulty: Difficulty,
  prompt: string,
  correct: number,
  distractors: number[],
  hint: string,
  explain: string,
  slot = 0,
  formatter: (n: number) => string = signed
): PracticeQuestion {
  const values: number[] = [];
  [correct, ...distractors].forEach((value) => { if (!values.includes(value)) values.push(value); });
  let bump = 1;
  while (values.length < 4) {
    const candidate = correct + bump * (bump % 2 ? 1 : -1);
    if (!values.includes(candidate)) values.push(candidate);
    bump++;
  }
  const wrong = values.filter((value) => value !== correct).slice(0, 3);
  const answerIndex = Math.max(0, Math.min(3, slot % 4));
  const ordered = [...wrong];
  ordered.splice(answerIndex, 0, correct);
  return { difficulty, prompt, choices: ordered.map(formatter), answer: answerIndex, hint, explain };
}

function additionSet(pairs: [number, number][], difficulty: Difficulty, startSlot = 0): PracticeQuestion[] {
  return pairs.map(([a, b], i) => {
    const sum = a + b;
    return numberQuestion(
      difficulty,
      `Find ${signed(a)} + (${signed(b)}).`,
      sum,
      [a - b, b - a, -sum],
      a === 0 || b === 0 ? 'Adding zero leaves the other integer unchanged.' : Math.sign(a) === Math.sign(b) ? 'The signs match. Combine the magnitudes and keep that sign.' : 'The signs are different. Compare the magnitudes first.',
      `${signed(a)} + (${signed(b)}) = ${signed(sum)}.`,
      startSlot + i
    );
  });
}

function subtractionSet(pairs: [number, number][], difficulty: Difficulty, startSlot = 0): PracticeQuestion[] {
  return pairs.map(([a, b], i) => {
    const diff = a - b;
    return numberQuestion(
      difficulty,
      `Find ${signed(a)} − (${signed(b)}).`,
      diff,
      [a + b, b - a, -diff],
      'Start with the first integer. Think about what it means to remove the second integer.',
      `${signed(a)} − (${signed(b)}) = ${signed(diff)}.`,
      startSlot + i
    );
  });
}

function symbolicSubtractionSet(pairs: [number, number][], difficulty: Difficulty, startSlot = 0): PracticeQuestion[] {
  return pairs.map(([a, b], i) => {
    const diff = a - b;
    return numberQuestion(
      difficulty,
      `Rewrite, then solve: ${signed(a)} − (${signed(b)}).`,
      diff,
      [a + b, b - a, -diff],
      `Keep ${signed(a)}. Change subtraction to addition and use the additive inverse of ${signed(b)}.`,
      `${signed(a)} − (${signed(b)}) = ${signed(a)} + (${signed(-b)}) = ${signed(diff)}.`,
      startSlot + i
    );
  });
}

const comparePairs: [number, number][] = [[-7,-2],[-4,3],[0,-6],[-9,-5],[5,-1],[-3,2],[-8,0],[-1,-6]];
const compareExtras = comparePairs.map(([a,b]) => {
  const greater = a > b ? a : b;
  const symbol = a > b ? '>' : '<';
  const wrongSymbol = symbol === '>' ? '<' : '>';
  return choiceQuestion('standard', `Which comparison is true for ${signed(a)} and ${signed(b)}?`, [
    `${signed(a)} ${symbol} ${signed(b)}`,
    `${signed(a)} ${wrongSymbol} ${signed(b)}`,
    `${signed(a)} = ${signed(b)}`,
    `They cannot be compared`
  ], 0, 'Picture both values on a number line.', `${signed(greater)} is farther right on the number line, so it has the greater value.`);
});

const lesson11Practice: PracticeQuestion[] = [
  ...[-12,-5,-1,4].map((n,i)=>numberQuestion('foundations',`What is the magnitude of ${signed(n)}?`,Math.abs(n),[-Math.abs(n),0,Math.abs(n)+1],'Magnitude is distance from zero.',`${signed(n)} is ${Math.abs(n)} unit${Math.abs(n)===1?'':'s'} from zero, so its magnitude is ${Math.abs(n)}.`,i,(v)=>`${v}`)),
  choiceQuestion('foundations','Which number represents 9 m below sea level?',['−9','+9','0','9'],0,'Below the reference point is the negative direction.','9 m below sea level is −9.'),
  choiceQuestion('foundations','Which number represents a gain of 6 points?',['−6','0','+6','−12'],2,'A gain is a positive change.','A gain of 6 points is +6.'),
  choiceQuestion('foundations','Which value is at the reference point?',['−1','+1','0','−0.5'],2,'The reference point is zero.','Zero is the reference point between positive and negative values.'),
  choiceQuestion('foundations','Which number is positive?',['−2.5','−1','0','+0.4'],3,'Positive numbers are greater than zero.','+0.4 is greater than zero.'),
  ...compareExtras,
  choiceQuestion('challenge','Which list is ordered from least to greatest?',['−8, −3, 0, 5','−3, −8, 0, 5','5, 0, −3, −8','−8, 0, −3, 5'],0,'Move from left to right on a number line.','−8 is farthest left, then −3, then 0, then 5.'),
  choiceQuestion('challenge','Which value is greatest?',['−0.8','−0.08','−8','−0.18'],1,'For negative values, the number closest to zero is greater.','−0.08 is closest to zero, so it is greatest.'),
  choiceQuestion('challenge','Which value is least?',['−12','−2','+1','0'],0,'The least value is farthest left on a number line.','−12 is farthest left.'),
  choiceQuestion('challenge','Two numbers have magnitude 6. Which pair could they be?',['−6 and +6','−6 and 0','+6 and +12','−3 and +3'],0,'Equal magnitude means equal distance from zero.','−6 and +6 are both 6 units from zero.'),
  choiceQuestion('challenge','A submarine is at −25 m and a diver is at −18 m. Who is higher?',['Submarine','Diver','They are equal','Not enough information'],1,'Higher means the greater value.','−18 is greater than −25, so the diver is higher.'),
  choiceQuestion('challenge','Which statement is true?',['−4 has greater magnitude than −9','−9 is greater than −4','−4 is greater than −9','0 is less than −4'],2,'Compare value and magnitude separately.','−4 is farther right than −9, so −4 is greater, although −9 has greater magnitude.'),
  choiceQuestion('challenge','A temperature changes from −7 °C to −2 °C. What happened?',['It became 5 °C colder','It became 5 °C warmer','It became 9 °C warmer','It did not change'],1,'Moving right/up on the number line means the temperature increases.','The change is +5 °C, so it became 5 °C warmer.'),
  choiceQuestion('challenge','Which number is 3 units to the left of 0?',['+3','−3','0','−6'],1,'Left of zero is the negative direction.','Three units left of zero is −3.')
];

const lesson11Check: PracticeQuestion[] = [
  ...[-14,-2,7,11].map((n,i)=>numberQuestion(i<2?'foundations':'standard',`What is the magnitude of ${signed(n)}?`,Math.abs(n),[-Math.abs(n),0,Math.abs(n)+2],'',`The distance from ${signed(n)} to zero is ${Math.abs(n)}.`,i,(v)=>`${v}`)),
  choiceQuestion('foundations','Which value represents 4 floors below ground level?',['+4','−4','0','+8'],1,'','Below ground is negative, so the value is −4.'),
  choiceQuestion('foundations','Which value is neither positive nor negative?',['−1','0','+1','−0.1'],1,'','Zero is neither positive nor negative.'),
  choiceQuestion('standard','Which is greater: −11 or −6?',['−11','−6','They are equal','Cannot tell'],1,'','−6 is farther right, so it is greater.'),
  choiceQuestion('standard','Which is least?',['−0.5','−5','0','+5'],1,'','−5 is farthest left.'),
  choiceQuestion('standard','Order from least to greatest.',['−4, −1, 2','2, −1, −4','−1, −4, 2','−4, 2, −1'],0,'','The order from left to right is −4, −1, 2.'),
  choiceQuestion('standard','Which pair has the same magnitude?',['−8 and +8','−8 and +4','−4 and +8','0 and +8'],0,'','−8 and +8 are each 8 units from zero.'),
  choiceQuestion('challenge','Which temperature is warmest?',['−12 °C','−1 °C','−7 °C','−4 °C'],1,'','−1 °C is closest to zero and is the greatest value.'),
  choiceQuestion('challenge','A point is 6 units above zero on a vertical number line. What is its value?',['−6','0','+6','+12'],2,'','Above zero is positive, so the value is +6.'),
  choiceQuestion('challenge','Which statement is false?',['−3 < +2','−9 < −4','0 > −1','−2 < −7'],3,'','−2 is greater than −7, so −2 < −7 is false.')
];

const lesson12Practice: PracticeQuestion[] = [
  choiceQuestion('foundations','Which number is an integer?',['−4.5','3/4','−12','2.1'],2,'Integers have no fractional or decimal part.','−12 is an integer.'),
  choiceQuestion('foundations','Which number is NOT an integer?',['0','−15','+9','4.2'],3,'Integers are whole-number values, their negatives, and zero.','4.2 has a decimal part, so it is not an integer.'),
  ...[-11,5,-3].map((n,i)=>numberQuestion('foundations',`What is the additive inverse of ${signed(n)}?`,-n,[n,0,n*2],'The additive inverse has the same magnitude and opposite sign.',`The additive inverse of ${signed(n)} is ${signed(-n)}.`,i)),
  choiceQuestion('foundations','How many zero pairs can be made from 6 positive chips and 6 negative chips?',['0','3','6','12'],2,'Each pair needs one positive and one negative chip.','Six +1 chips pair with six −1 chips to make six zero pairs.'),
  choiceQuestion('foundations','What is (+8) + (−8)?',['−16','0','+8','+16'],1,'The addends are additive inverses.','Eight zero pairs cancel completely, so the sum is 0.'),
  choiceQuestion('foundations','Which pair is a zero pair?',['+1 and +1','−1 and −1','+1 and −1','0 and +1'],2,'A zero pair contains opposite values.','+1 and −1 combine to make zero.'),
  ...[[4,-7],[-5,2],[6,-3],[-2,8],[7,-9],[-6,6],[3,-8],[-9,4]].map(([a,b],i)=>numberQuestion('standard',`A chip model combines ${Math.abs(a)} ${a>=0?'positive':'negative'} chips and ${Math.abs(b)} ${b>=0?'positive':'negative'} chips. What is the sum?`,a+b,[a-b,b-a,-(a+b)],'Pair one positive chip with one negative chip until no more pairs can be made.',`After zero pairs are removed, the model has value ${signed(a+b)}.`,i)),
  choiceQuestion('challenge','You start with 7 negative chips. What must you add to finish with +2?',['2 positive chips','5 positive chips','7 positive chips','9 positive chips'],3,'First cancel all seven negatives, then two positives must remain.','Nine positive chips make seven zero pairs and leave +2.'),
  choiceQuestion('challenge','You start with 4 positive chips. What must you add to finish with −3?',['3 negative chips','4 negative chips','7 negative chips','7 positive chips'],2,'Cancel the four positives first, then three negatives must remain.','Seven negative chips cancel four positives and leave −3.'),
  choiceQuestion('challenge','Which number-line trip represents (−5) + (+8)?',['5 left, then 8 right','5 right, then 8 left','5 left, then 8 left','8 right only'],0,'Start at zero and follow each addend in order.','Move 5 left to −5, then 8 right to +3.'),
  choiceQuestion('challenge','Which model has value 0?',['5 positive and 3 negative','4 negative and 4 positive','6 positive and 1 negative','3 negative only'],1,'Zero requires equal positive and negative units.','Four positives and four negatives form four zero pairs.'),
  choiceQuestion('challenge','Which statement best explains why (+3)+(−7)=−4?',['Add 3 and 7 and make it negative','Three zero pairs cancel, leaving four negative chips','The first number is positive','The larger written number always wins'],1,'Think about what remains after zero pairs are removed.','Three positive chips cancel three negatives, leaving four negative chips.'),
  choiceQuestion('challenge','A number-line trip ends at 0 after the first move is +9. What must the second addend be?',['+9','−9','0','−18'],1,'The second addend must undo the first move.','−9 is the additive inverse of +9.'),
  choiceQuestion('challenge','Which expression shows three zero pairs and two extra positives?',['(+5)+(−3)','(+3)+(−5)','(+2)+(−3)','(+3)+(−3)'],0,'Three opposite pairs cancel and two positives remain.','Five positives and three negatives leave +2.'),
  choiceQuestion('challenge','Why can zero pairs be added to a model?',['They always make the answer positive','They have total value 0','They double the value','They change addition into subtraction'],1,'Think about +1 + (−1).','A zero pair has value 0, so adding it does not change the model’s total.')
];

const lesson12Check: PracticeQuestion[] = [
  choiceQuestion('foundations','Which is an integer?',['−2.7','−20','1/5','3.14'],1,'','−20 is an integer.'),
  choiceQuestion('foundations','What is the additive inverse of +16?',['+16','−16','0','−32'],1,'','The additive inverse has the opposite sign.'),
  choiceQuestion('foundations','Five +1 chips and five −1 chips have a total value of:',['−10','0','+5','+10'],1,'','They form five zero pairs.'),
  ...additionSet([[2,-6],[-7,3],[5,-9],[-4,10],[8,-2],[-6,1]],'standard',1),
  choiceQuestion('challenge','A model has 8 negative chips and 5 positive chips. What remains after zero pairs are removed?',['3 positive','3 negative','13 negative','Nothing'],1,'','Five zero pairs cancel, leaving three negative chips.'),
  choiceQuestion('challenge','What must be added to −6 to make 0?',['−6','0','+6','+12'],2,'','+6 is the additive inverse of −6.'),
  choiceQuestion('challenge','Which model represents (+4)+(−9)?',['4 positive, 9 negative','4 negative, 9 positive','13 positive','13 negative'],0,'','The model must show the two addends before zero pairs are removed.'),
  choiceQuestion('challenge','Which statement is true?',['Zero pairs change the value','An integer can contain a decimal part','Additive inverses sum to zero','All negative numbers are non-integers'],2,'','Additive inverses have equal magnitude, opposite signs, and sum to zero.')
];

const addFoundPairs: [number,number][] = [[-8,-5],[7,6],[-11,-4],[9,3],[-6,-7],[12,5],[-10,-2],[4,8]];
const addStandardPairs: [number,number][] = [[13,-8],[-16,7],[18,-11],[-20,6],[14,-19],[-9,17],[21,-13],[-24,9]];
const addChallengePairs: [number,number][] = [[35,-18],[-27,12],[44,-29],[-31,48],[52,-37],[-46,19],[63,-28],[-55,34]];
const lesson13Practice: PracticeQuestion[] = [
  ...additionSet(addFoundPairs,'foundations',0),
  ...additionSet(addStandardPairs,'standard',1),
  ...additionSet(addChallengePairs,'challenge',2)
];
const lesson13Check: PracticeQuestion[] = [
  ...additionSet([[-9,-7],[15,4],[-12,-6]],'foundations',1),
  ...additionSet([[16,-9],[-22,8],[19,-25],[27,-11],[30,-17],[11,-18]],'standard',0),
  ...additionSet([[42,-19],[-38,21],[57,-33],[26,-41]],'challenge',2)
];

const lesson14Practice: PracticeQuestion[] = [
  choiceQuestion('foundations','In (+9) − (+4), which number is the subtrahend?',['+9','+4','+5','−4'],1,'The subtrahend is the number being removed.','+4 is the subtrahend.'),
  choiceQuestion('foundations','Subtracting a positive integer on a number line means moving:',['right','left','up only','nowhere'],1,'Positive is the amount being removed.','Subtracting a positive moves in the negative direction, or left.'),
  choiceQuestion('foundations','Subtracting a negative integer on a number line means moving:',['left','right','to zero every time','in no direction'],1,'A negative subtrahend reverses the subtraction direction.','Subtracting a negative moves right.'),
  choiceQuestion('foundations','What is a zero pair worth?',['−2','−1','0','+2'],2,'One +1 and one −1 combine.','A zero pair has value 0.'),
  ...subtractionSet([[6,2],[-7,-2],[5,4],[-8,-5]],'foundations',0),
  ...subtractionSet([[4,-3],[-3,5],[2,-7],[-6,4],[7,-8],[-9,6],[5,-6],[-4,9]],'standard',1),
  choiceQuestion('challenge','How many zero pairs are minimally needed to model (+2) − (−6)?',['2','4','6','8'],2,'You need six negative chips available to remove.','A +2 model has no negatives, so six zero pairs provide six negative chips.'),
  choiceQuestion('challenge','How many zero pairs are minimally needed to model (−4) − (+7)?',['3','4','7','11'],2,'You need seven positive chips available to remove.','Seven zero pairs provide seven positive chips without changing −4.'),
  ...subtractionSet([[-10,-14],[9,-7],[-12,8],[11,15]],'challenge',2),
  choiceQuestion('challenge','Why can subtracting −8 increase a value?',['Removing negative value has the same direction as adding positive value','Subtraction always increases values','Eight is an even number','Zero pairs add extra value'],0,'Think about removing negative chips.','Removing negative value moves the result in the positive direction.'),
  choiceQuestion('challenge','Which model does NOT need zero pairs?',['(+3)−(−2)','(−3)−(+2)','(+6)−(+4)','(−2)−(−6)'],2,'Check whether the needed chip type is already present.','A +6 model already has at least four positive chips to remove.')
];
const lesson14Check: PracticeQuestion[] = [
  choiceQuestion('foundations','The first number in a subtraction expression is the:',['subtrahend','difference','minuend','inverse'],2,'','The minuend is the starting number.'),
  choiceQuestion('foundations','To subtract +5 on a number line, move:',['5 right','5 left','to zero','10 left'],1,'','Subtracting a positive moves left.'),
  choiceQuestion('foundations','To subtract −3 on a number line, move:',['3 left','3 right','6 right','to zero'],1,'','Subtracting a negative moves right.'),
  ...subtractionSet([[8,3],[-9,-4],[3,-5],[-5,7],[6,-8],[-11,2]],'standard',0),
  choiceQuestion('challenge','How many zero pairs are needed for (+1) − (−4)?',['1','3','4','5'],2,'','Four negative chips are needed, so four zero pairs must be added.'),
  choiceQuestion('challenge','How many zero pairs are needed for (−2) − (+6)?',['2','4','6','8'],2,'','Six positive chips are needed, so six zero pairs must be added.'),
  ...subtractionSet([[-7,-12],[10,-9]],'challenge',2)
];

function rewriteQuestion(a:number,b:number,difficulty:Difficulty,slot:number): PracticeQuestion {
  const correct = `${signed(a)} + (${signed(-b)})`;
  const options = [correct, `${signed(-a)} + (${signed(-b)})`, `${signed(a)} + (${signed(b)})`, `${signed(-a)} + (${signed(b)})`];
  const answerIndex = slot % 4;
  const ordered = options.filter((_,i)=>i!==0);
  ordered.splice(answerIndex,0,correct);
  return choiceQuestion(difficulty,`Which addition expression is equivalent to ${signed(a)} − (${signed(b)})?`,ordered,answerIndex,`Keep ${signed(a)} and use the additive inverse of ${signed(b)}.`,`${signed(a)} − (${signed(b)}) = ${correct}.`);
}
const lesson15Practice: PracticeQuestion[] = [
  ...[[5,2],[-6,3],[7,-4],[-8,-5],[10,6],[-9,-2],[4,-7],[-3,8]].map(([a,b],i)=>rewriteQuestion(a,b,'foundations',i)),
  ...symbolicSubtractionSet([[12,5],[-13,4],[8,-9],[-15,-6],[17,21],[-20,-7],[14,-12],[6,19]],'standard',1),
  ...symbolicSubtractionSet([[35,-18],[-28,17],[42,56],[-33,-21],[50,-26],[-47,15],[61,-39],[-54,-70]],'challenge',2)
];
const lesson15Check: PracticeQuestion[] = [
  ...[[6,4],[-7,-3],[9,-5]].map(([a,b],i)=>rewriteQuestion(a,b,'foundations',i+1)),
  ...symbolicSubtractionSet([[14,8],[-16,5],[11,-7],[-18,-9],[23,30],[-25,-6]],'standard',0),
  ...symbolicSubtractionSet([[39,-22],[-41,18],[58,71],[46,-35]],'challenge',2)
];

const extraPractice: Record<string, PracticeQuestion[]> = {
  [keyFor('grade-6-math','positive-negative-numbers','understanding-positive-negative')]: lesson11Practice,
  [keyFor('grade-6-math','positive-negative-numbers','what-are-integers-add')]: lesson12Practice,
  [keyFor('grade-6-math','positive-negative-numbers','adding-integers')]: lesson13Practice,
  [keyFor('grade-6-math','positive-negative-numbers','subtracting-integers-models')]: lesson14Practice,
  [keyFor('grade-6-math','positive-negative-numbers','subtracting-integers')]: lesson15Practice
};
const extraCheck: Record<string, PracticeQuestion[]> = {
  [keyFor('grade-6-math','positive-negative-numbers','understanding-positive-negative')]: lesson11Check,
  [keyFor('grade-6-math','positive-negative-numbers','what-are-integers-add')]: lesson12Check,
  [keyFor('grade-6-math','positive-negative-numbers','adding-integers')]: lesson13Check,
  [keyFor('grade-6-math','positive-negative-numbers','subtracting-integers-models')]: lesson14Check,
  [keyFor('grade-6-math','positive-negative-numbers','subtracting-integers')]: lesson15Check
};

const lesson11Vocab: VocabularyWord[] = [
  { term: 'Positive number', definition: 'A number greater than zero.', example: '+8, 8, and 2.5 are positive numbers.' },
  { term: 'Negative number', definition: 'A number less than zero.', example: '−4 and −1.7 are negative numbers.' },
  { term: 'Magnitude', definition: 'How far a number is from zero.', example: 'The magnitude of −9 is 9.' },
  { term: 'Number line', definition: 'A line that shows numbers in order and where they are compared with zero.', example: '−3 is left of 0 and +3 is right of 0.' }
];

const overrides: Record<string, Partial<TopicContent>> = {
  [keyFor('grade-6-math','positive-negative-numbers','understanding-positive-negative')]: {
    vocabulary: lesson11Vocab,
    materials: ['pencil', 'on-page number line', 'optional ruler'],
    concepts: [
      { title: 'The sign shows direction', text: 'A positive sign means the positive direction from zero; a negative sign means the opposite direction. On a horizontal number line, positive is right and negative is left. On a vertical number line, positive is up and negative is down.', remember: 'A positive number may be written with or without the + sign: +6 and 6 mean the same value.' },
      { title: 'Zero is the reference point', text: 'Zero is neither positive nor negative. It separates positive and negative values and gives us the point from which magnitude is measured.', remember: 'Think of zero as the starting line, sea level, or ground floor in a model.' },
      { title: 'Magnitude is distance from zero', text: 'Magnitude tells how many units a number is from zero. Both +7 and −7 have magnitude 7 because each is 7 units from zero.', remember: 'Distance is never negative, so magnitude is written as a positive amount.' },
      { title: 'Position tells which value is greater', text: 'On a horizontal number line, the number farther right is greater. On a vertical number line, the number higher up is greater. This works for positive numbers, negative numbers, and zero.', remember: 'For negative numbers, closer to zero means greater value.' },
      { title: 'Opposite numbers are the same distance from zero', text: '+4 and −4 are both 4 units from zero, but they point in opposite directions. In Lesson 1.2, you will learn the mathematical name for this relationship.', remember: 'Same magnitude does not mean same value.' }
    ]
  },
  [keyFor('grade-6-math','positive-negative-numbers','what-are-integers-add')]: {
    materials: ['pencil', 'on-page integer chips and number line', 'optional paper chips'],
    concepts: [
      { title: 'Integers are whole numbers, their negatives, and zero', text: 'Integers include … −3, −2, −1, 0, 1, 2, 3 … . Fractions and decimal values such as 2.5 or −1.3 are not integers.', remember: 'Zero is an integer, but it is neither positive nor negative.' },
      { title: 'Additive inverses are opposites', text: 'Two integers are additive inverses when they have equal magnitude and opposite signs. Examples include +6 and −6, or +12 and −12.', remember: 'An integer plus its additive inverse always equals 0.' },
      { title: 'A zero pair has value zero', text: 'One +1 chip and one −1 chip make a zero pair. You may add or remove zero pairs from a model without changing its value.', remember: 'Zero pairs change the appearance of a model, not the total.' },
      { title: 'Adding with chips means combine, pair, and count', text: 'Build both addends. Combine all chips. Match one positive with one negative until no more zero pairs are possible. The unpaired chips show the sum.', remember: 'If nothing remains, the sum is 0.' },
      { title: 'A number line tells the same story', text: 'Start at zero, move according to the first integer, then continue from that point according to the second integer. Positive movement goes right/up; negative movement goes left/down.', remember: 'The endpoint of the second move is the sum.' }
    ],
    vocabulary: [
      { term: 'Integer', definition: 'A whole number, its negative opposite, or zero.', example: '−8, 0, and +13 are integers; 2.5 is not.' },
      { term: 'Additive inverse', definition: 'The number with the same magnitude but the opposite sign.', example: 'The additive inverse of +7 is −7.' },
      { term: 'Zero pair', definition: 'A positive unit and a negative unit that combine to make zero.', example: '+1 + (−1) = 0.' },
      { term: 'Addend', definition: 'A number being added.', example: 'In 4 + (−6), the addends are 4 and −6.' },
      { term: 'Sum', definition: 'The answer to an addition question.', example: 'The sum of +4 and −6 is −2.' }
    ],
    next: { title: 'Adding Integers', slug: 'adding-integers', status: 'ready' }
  },
  [keyFor('grade-6-math','positive-negative-numbers','adding-integers')]: {
    materials: ['pencil', 'on-page strategy tools', 'optional integer chips or number line'],
    goals: ['add any two integers without a model when you are ready.','choose a strategy by looking at the signs.','use magnitude to decide the sign when the signs are different.','break numbers apart or rearrange addends to make a calculation easier.'],
    bigIdeaDetail: 'The models from Lesson 1.2 show a pattern. If the signs are the same, both addends move in the same direction: add the magnitudes and keep the sign. If the signs are different, opposite parts cancel: find the difference between the magnitudes and use the sign of the number farther from zero. You can also break an addend apart to make a zero pair.',
    practiceIntro: 'Predict whether the answer will be positive, negative, or zero before you calculate. If you get stuck, use the chip or number-line model to check your thinking.'
  },
  [keyFor('grade-6-math','positive-negative-numbers','subtracting-integers-models')]: {
    materials: ['pencil', 'on-page subtraction models', 'optional integer chips or algebra tiles']
  },
  [keyFor('grade-6-math','positive-negative-numbers','subtracting-integers')]: {
    hook: 'The questions (+9) − (−5) and (+9) + (+5) both give +14. What changed in the second question, and why does the answer stay the same?',
    materials: ['pencil', 'on-page equivalence tool', 'optional integer chips or number line'],
    goals: ['rewrite an integer subtraction question as an addition question.','find the opposite of the number being subtracted.','use integer addition strategies to find a difference.','explain why the subtraction and addition forms have the same answer.'],
    bigIdea: 'Subtracting an integer gives the same result as adding its opposite.',
    bigIdeaDetail: 'A subtraction question can be rewritten as an addition question without changing the answer. Keep the first integer exactly the same. Change subtraction to addition. Then replace the number being subtracted with its opposite (its additive inverse). After that, use the addition strategies from Lesson 1.3.',
    concepts: [
      { title: 'Rewrite subtraction as addition', text: 'Keep the first integer. Change the subtraction sign to addition. Then use the opposite of the second integer.', remember: 'For a − b, rewrite it as a + (the opposite of b).' },
      { title: 'Only the second integer changes', text: 'For (+8) − (−1), keep +8. The opposite of −1 is +1, so the new question is (+8) + (+1).', remember: 'Do not change the sign of the first integer.' },
      { title: 'The two forms have the same answer', text: 'The subtraction form and the rewritten addition form look different, but they have the same value. Mathematicians call statements like these equivalent.', remember: '(+9) − (−5) and (+9) + (+5) are both +14.' },
      { title: 'Use your addition strategy next', text: 'After rewriting, look at the signs of the two addends. Use the same-sign or different-sign strategy from Lesson 1.3.', remember: 'Rewrite first. Calculate second.' },
      { title: 'The models explain why it works', text: 'Taking away negative chips has the same effect as adding positive value. On a number line, subtracting a negative makes you move in the positive direction.', remember: 'The shortcut should match what you already saw with chips and number lines.' }
    ],
    vocabulary: [
      { term: 'Equivalent statements', definition: 'Two math statements that look different but have the same value.', example: '(+4) − (+2) and (+4) + (−2) are equivalent.' },
      { term: 'Additive inverse', definition: 'A number with the same magnitude and the opposite sign.', example: 'The additive inverse of −8 is +8.' },
      { term: 'Minuend', definition: 'The first, or starting, number in a subtraction question.', example: 'In −7 − (+3), −7 is the minuend.' },
      { term: 'Subtrahend', definition: 'The number being taken away.', example: 'In −7 − (+3), +3 is the subtrahend.' },
      { term: 'Difference', definition: 'The answer to a subtraction question.', example: 'The difference of −7 and +3 is −10.' }
    ],
    practiceIntro: 'Use the same two steps every time: first rewrite subtraction as addition of the opposite; then use your integer-addition strategy.',
    next: { title: 'Unit 1 Review & Math Arcade', slug: 'unit-review', status: 'ready' }
  }
};

export function applyUnit1Enhancements(key: string, content: TopicContent): TopicContent {
  const override = overrides[key] ?? {};
  const filteredChecks = key.endsWith('/subtracting-integers')
    ? content.checkQuestions.filter((q) => !q.prompt.includes('decreases by −4'))
    : content.checkQuestions;
  return {
    ...content,
    ...override,
    questions: [...content.questions, ...(extraPractice[key] ?? [])],
    checkQuestions: [...filteredChecks, ...(extraCheck[key] ?? [])]
  };
}
