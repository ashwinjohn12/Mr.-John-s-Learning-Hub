export type VocabularyWord = { term: string; definition: string; example: string };
export type PracticeQuestion = {
  difficulty: 'foundations' | 'standard' | 'challenge';
  prompt: string;
  choices: string[];
  answer: number;
  hint: string;
  explain: string;
};
export type TopicContent = {
  hook: string;
  prerequisites: readonly string[];
  goals: readonly string[];
  estimatedTime: string;
  materials: readonly string[];
  successCriteria: readonly string[];
  bigIdea: string;
  bigIdeaDetail: string;
  connection: string;
  concepts: readonly { title: string; text: string; remember?: string }[];
  misconceptions: readonly { title: string; text: string }[];
  examples: readonly { title: string; problem: string; steps: readonly string[]; answer: string }[];
  vocabulary: readonly VocabularyWord[];
  explorePrompt: string;
  exploreMode: 'compare' | 'add';
  handsOn: { title: string; instructions: readonly string[]; reflect: string };
  practiceIntro: string;
  questions: readonly PracticeQuestion[];
  checkQuestions: readonly PracticeQuestion[];
  application: { title: string; scenario: string; tasks: readonly string[]; reveal: string };
  summary: readonly string[];
  support: readonly string[];
  extension: readonly string[];
  pat: { title: string; prompt: string; answer: string };
  review: readonly string[];
  next: { title: string; slug: string | null; status: 'ready' | 'planned' };
};

export const topicContent: Record<string, TopicContent> = {
  'grade-6-math/positive-negative-numbers/understanding-positive-negative': {
    hook: 'The forecast says −18 °C, a diver is 12 m below sea level, and a bank statement shows a $25 deposit. What does the sign tell you before you even look at the size of the number?',
    prerequisites: ['Read and place whole numbers and decimals on a number line.','Use <, >, and = to compare familiar positive numbers.','Understand that zero can be used as a reference point.'],
    goals: ['identify positive and negative numbers in real-life situations.','explain magnitude as distance from zero.','place positive and negative numbers on horizontal and vertical number lines.','compare and order positive and negative numbers using <, >, and =.'],
    estimatedTime: '60–90 min',
    materials: ['number line', 'pencil', 'optional ruler'],
    successCriteria: ['I can explain what the + or − sign means in a situation.','I can distinguish a number’s value from its magnitude.','I can compare negative numbers by using their positions on a number line.','I can justify my comparison instead of only naming the answer.'],
    bigIdea: 'Positive and negative numbers describe both distance from zero and direction from zero.',
    bigIdeaDetail: 'Zero is the reference point. Positive numbers are on one side of zero and negative numbers are on the opposite side. Magnitude tells how far a number is from zero, while the sign tells the direction. On a horizontal number line, values increase as you move right. On a vertical number line, values increase as you move up.',
    connection: 'Why is −3 greater than −8 even though 8 has a greater magnitude than 3?',
    concepts: [
      { title: 'The sign shows direction', text: 'A positive sign means the positive direction from zero; a negative sign means the opposite direction. On a horizontal number line, positive is right and negative is left. On a vertical number line, positive is up and negative is down.', remember: 'A positive number may be written with or without the + sign: +6 and 6 mean the same value.' },
      { title: 'Zero is the reference point', text: 'Zero is neither positive nor negative. It separates positive and negative values and gives us the point from which magnitude is measured.', remember: 'Think of zero as the starting line, sea level, or ground floor in a model.' },
      { title: 'Magnitude is distance from zero', text: 'Magnitude tells how many units a number is from zero. Both +7 and −7 have magnitude 7 because each is 7 units from zero.', remember: 'Distance is never negative, so magnitude is written as a positive amount.' },
      { title: 'Position tells which value is greater', text: 'On a horizontal number line, the number farther right is greater. On a vertical number line, the number higher up is greater. This works for positive numbers, negative numbers, and zero.', remember: 'For negative numbers, closer to zero means greater value.' },
      { title: 'Opposite directions can have equal magnitude', text: '+4 and −4 are the same distance from zero but in opposite directions. They are connected by symmetry around zero and will later be called additive inverses.', remember: 'Same magnitude does not mean same value.' }
    ],
    misconceptions: [
      { title: '“−8 is greater than −3 because 8 is bigger than 3.”', text: 'The digits alone do not decide the value. On a number line, −3 is farther right than −8, so −3 > −8.' },
      { title: '“A negative sign means subtract.”', text: 'In this lesson, the sign can describe a number. Read −5 as “negative five,” not “subtract five.”' },
      { title: '“Zero is positive.”', text: 'Zero is neither positive nor negative. It is the reference point between the two directions.' }
    ],
    examples: [
      { title: 'Example 1 · Real-life meaning', problem: 'Write a number for a temperature 6.5 °C below zero.', steps: ['The word “below” tells us the direction is negative.','The magnitude is 6.5.','Combine the sign and magnitude.'], answer: '−6.5 °C' },
      { title: 'Example 2 · Magnitude', problem: 'Compare the magnitudes of +9 and −4.', steps: ['+9 is 9 units from zero, so its magnitude is 9.','−4 is 4 units from zero, so its magnitude is 4.','Compare the distances: 9 > 4.'], answer: '+9 has the greater magnitude.' },
      { title: 'Example 3 · Compare negative values', problem: 'Which is greater: −2.5 or −6?', steps: ['Picture or draw a number line.','−2.5 is closer to zero and lies to the right of −6.','The number farther right is greater.'], answer: '−2.5 > −6' }
    ],
    vocabulary: [
      { term: 'Positive number', definition: 'A number greater than zero.', example: '+8, 8, and 2.5 are positive numbers.' },
      { term: 'Negative number', definition: 'A number less than zero, written with a negative sign.', example: '−4 and −1.7 are negative numbers.' },
      { term: 'Magnitude', definition: 'The distance a number is from zero on a number line.', example: 'The magnitude of −9 is 9.' },
      { term: 'Number line', definition: 'A line that represents numbers in order and shows their positions relative to one another.', example: '−3 is left of 0 and +3 is right of 0.' },
      { term: 'Additive inverses', definition: 'Two numbers with the same magnitude in opposite directions from zero.', example: '+5 and −5 are additive inverses.' }
    ],
    explorePrompt: 'Change the values and make predictions before reading the explanation. The goal is to notice how position, sign, magnitude, and value are connected.',
    exploreMode: 'compare',
    handsOn: { title: 'Human Number Line', instructions: ['Mark a spot on the floor as 0.','Choose two nearby locations to represent positive and negative directions.','Have a partner call out values such as −4, +2, 0, and −1.5 while you move to each position.','Choose two values and explain which is greater using your location rather than a memorized rule.'], reflect: 'How did your physical distance from zero help you distinguish magnitude from value?' },
    practiceIntro: 'Use the level selector to practise with immediate feedback. Read the explanation even when you are correct so you can compare it with your own reasoning.',
    questions: [
      { difficulty: 'foundations', prompt: 'Which number represents 7 metres below sea level?', choices: ['+7', '−7', '0', '7 below'], answer: 1, hint: 'Below the reference point is the negative direction.', explain: 'Below sea level is represented with a negative sign, so the number is −7.' },
      { difficulty: 'foundations', prompt: 'What is the magnitude of −8?', choices: ['−8', '0', '8', '+16'], answer: 2, hint: 'Magnitude is distance from zero.', explain: '−8 is 8 units from zero, so its magnitude is 8.' },
      { difficulty: 'standard', prompt: 'Which comparison is true?', choices: ['−9 > −4', '−4 > −9', '−4 = −9', '0 < −4'], answer: 1, hint: 'Picture the numbers on a horizontal number line.', explain: '−4 is farther right than −9, so −4 > −9.' },
      { difficulty: 'standard', prompt: 'Which list is ordered from least to greatest?', choices: ['−6, −2, 0, 3', '3, 0, −2, −6', '−2, −6, 0, 3', '0, −6, −2, 3'], answer: 0, hint: 'Move from left to right on a number line.', explain: 'From left to right, the values are −6, −2, 0, and 3.' },
      { difficulty: 'challenge', prompt: 'Which statement is correct about −7 and +7?', choices: ['They have the same value.', 'They have the same magnitude and opposite directions.', '−7 has greater magnitude.', '+7 is 14 units from zero.'], answer: 1, hint: 'Compare distance from zero and direction separately.', explain: 'Both are 7 units from zero, so they have equal magnitude, but they are in opposite directions.' },
      { difficulty: 'challenge', prompt: 'City A is −3.5 °C and City B is −8 °C. Which city is warmer?', choices: ['City A', 'City B', 'They are equal', 'Not enough information'], answer: 0, hint: 'Warmer means the greater temperature value.', explain: '−3.5 is greater than −8 because it is farther right on the number line, so City A is warmer.' }
    ],
    checkQuestions: [
      { difficulty: 'foundations', prompt: 'Which value is negative?', choices: ['+4', '0', '−0.6', '12'], answer: 2, hint: '', explain: '−0.6 is less than zero, so it is negative.' },
      { difficulty: 'foundations', prompt: 'Which number has magnitude 5?', choices: ['−5 only', '+5 only', 'Both −5 and +5', '0'], answer: 2, hint: '', explain: 'Both −5 and +5 are 5 units from zero.' },
      { difficulty: 'standard', prompt: 'Fill the blank: −10 ___ −3', choices: ['<', '>', '=', 'cannot compare'], answer: 0, hint: '', explain: '−10 lies left of −3, so −10 < −3.' },
      { difficulty: 'standard', prompt: 'Which is greatest?', choices: ['−0.2', '−2', '0', '−0.02'], answer: 2, hint: '', explain: 'Zero is greater than every negative number.' },
      { difficulty: 'standard', prompt: 'Which pair has equal magnitude?', choices: ['−4 and +5', '−6 and +6', '0 and +1', '−3 and −8'], answer: 1, hint: '', explain: '−6 and +6 are both 6 units from zero.' },
      { difficulty: 'challenge', prompt: 'Order from greatest to least: −1.2, 4, −0.5, 0', choices: ['4, 0, −0.5, −1.2', '4, −0.5, 0, −1.2', '−1.2, −0.5, 0, 4', '0, 4, −0.5, −1.2'], answer: 0, hint: '', explain: 'From greatest to least: 4, 0, −0.5, −1.2.' },
      { difficulty: 'challenge', prompt: 'A point is 3.5 units below zero on a vertical number line. What number is it?', choices: ['+3.5', '−3.5', '3.5', '0'], answer: 1, hint: '', explain: 'Below zero is the negative direction, so the point is −3.5.' }
    ],
    application: { title: 'Weather Station Challenge', scenario: 'A school weather station records: 6 a.m. −12 °C, 9 a.m. −5 °C, noon +2 °C, and 3 p.m. −1 °C.', tasks: ['Order the temperatures from coldest to warmest.','Which temperature has the greatest magnitude?','How far is each negative temperature from zero?','Explain why −1 °C is warmer than −5 °C without saying “because the rule says so.”'], reveal: 'Coldest to warmest: −12, −5, −1, +2. The greatest magnitude is 12 at −12 °C. Magnitudes of the negative temperatures are 12, 5, and 1. −1 is warmer because it is closer to zero and farther right/higher on the number line.' },
    summary: ['The sign shows direction from zero.','Magnitude is distance from zero.','Zero is neither positive nor negative.','Numbers increase as you move right or up on a number line.','For negative numbers, the value closer to zero is greater.'],
    support: ['Use a physical or drawn number line for every comparison.','Circle the sign and underline the magnitude before comparing.','Start with whole numbers before moving to decimals.'],
    extension: ['Create four temperatures including decimals that have magnitudes 2, 4, 6, and 8, then order the temperatures.','Write a real-life story in which −3 is a better outcome than −8.','Explain why magnitude alone cannot tell which of two numbers is greater.'],
    pat: { title: 'PAT-STYLE THINKING', prompt: 'Which statement best explains why −2 is greater than −7? A) 2 is less than 7. B) −2 is closer to zero and lies to the right of −7. C) Negative numbers are always greater when their digits are smaller. D) −2 has greater magnitude.', answer: 'B. The strongest explanation uses position and value: −2 is to the right of −7 on a number line.' },
    review: ['I can identify positive and negative numbers in context.','I can explain magnitude.','I can compare and order positive and negative values.','I can justify a comparison using a number line.'],
    next: { title: 'What Are Integers and How Do You Add Them?', slug: 'what-are-integers-add', status: 'ready' }
  },

  'grade-6-math/positive-negative-numbers/what-are-integers-add': {
    hook: 'Imagine you have 5 “+1” chips and 7 “−1” chips. If every +1 can cancel with one −1, what is left? That cancellation idea is the heart of adding integers with models.',
    prerequisites: ['Identify positive numbers, negative numbers, and zero.','Use magnitude and direction on a number line.','Recognize opposite values such as +4 and −4.'],
    goals: ['identify integers and distinguish them from non-integers.','explain additive inverses and zero pairs.','express zero as sums of opposite integers.','model the sum of two integers using chips and number lines.'],
    estimatedTime: '75–100 min',
    materials: ['integer chips or paper +1/−1 chips', 'number line', 'pencil'],
    successCriteria: ['I can tell whether a number is an integer.','I can identify an additive inverse.','I can build and remove zero pairs correctly.','I can model an integer sum in more than one way and explain why both models agree.'],
    bigIdea: 'Integers include zero, positive whole-number values, and their negative opposites; additive inverses combine to make zero.',
    bigIdeaDetail: 'A positive chip and a negative chip form a zero pair because +1 + (−1) = 0. Zero pairs let us model sums without changing the total value. When adding integers, combine all positive and negative units, remove opposite pairs, and interpret whatever remains. A number line shows the same idea as movement in positive and negative directions.',
    connection: 'How can adding something make the total smaller? Use +5 + (−7) to explain.',
    concepts: [
      { title: 'Integers are whole-number values and their opposites', text: 'Integers include … −3, −2, −1, 0, 1, 2, 3 … . Fractions and decimal values such as 2.5 or −1.3 are not integers.', remember: 'The sign does not decide whether a number is an integer; the number must be a whole-number amount.' },
      { title: 'Additive inverses are opposites', text: 'Two integers are additive inverses when they have equal magnitude and opposite signs. Examples include +6 and −6, or +12 and −12.', remember: 'An integer plus its additive inverse always equals 0.' },
      { title: 'A zero pair has value zero', text: 'One +1 chip and one −1 chip make a zero pair. You may add or remove zero pairs from a model without changing its value.', remember: 'Zero pairs change the appearance of a model, not the total.' },
      { title: 'Adding with chips means combine, pair, and count', text: 'Build both addends. Combine all chips. Match one positive with one negative until no more zero pairs are possible. The unpaired chips show the sum.', remember: 'If nothing remains, the sum is 0.' },
      { title: 'A number line tells the same story', text: 'Start at zero, move according to the first integer, then continue from that point according to the second integer. Positive movement goes right/up; negative movement goes left/down.', remember: 'The endpoint of the second move is the sum.' }
    ],
    misconceptions: [
      { title: '“All positive and negative numbers are integers.”', text: 'Integers do not include fractional or decimal parts. −3 is an integer, but −3.5 is not.' },
      { title: '“A positive chip and negative chip make −2 because there are two chips.”', text: 'The chips have opposite values. +1 + (−1) = 0, so together they form a zero pair.' },
      { title: '“Adding always makes a number bigger.”', text: 'Adding a negative integer moves in the negative direction, so a total can become smaller. For example, +5 + (−7) = −2.' }
    ],
    examples: [
      { title: 'Example 1 · Is it an integer?', problem: 'Is −12.4 an integer?', steps: ['Integers do not contain fractional or decimal parts.','−12.4 has a decimal part.','Therefore it is not an integer.'], answer: 'No, −12.4 is not an integer.' },
      { title: 'Example 2 · Zero pairs', problem: 'Find (+4) + (−4) with chips.', steps: ['Build 4 positive chips.','Add 4 negative chips.','Pair each +1 with a −1.','All 4 pairs have value 0, so nothing remains.'], answer: '0' },
      { title: 'Example 3 · Mixed signs', problem: 'Model (+5) + (−7).', steps: ['Build 5 positive chips and 7 negative chips.','Remove 5 zero pairs.','Two negative chips remain.','The remaining chips determine the sum.'], answer: '−2' },
      { title: 'Example 4 · Number-line model', problem: 'Model (−3) + (+5).', steps: ['From 0, move 3 units left to −3.','From −3, move 5 units right.','The second move ends at +2.'], answer: '+2' }
    ],
    vocabulary: [
      { term: 'Integer', definition: 'A positive or negative whole-number value, including zero.', example: '−8, 0, and +13 are integers; 2.5 is not.' },
      { term: 'Additive inverse', definition: 'The number with the same magnitude but the opposite sign.', example: 'The additive inverse of +7 is −7.' },
      { term: 'Zero pair', definition: 'A positive unit and a negative unit that combine to make zero.', example: '+1 + (−1) = 0.' },
      { term: 'Addend', definition: 'A number being added in an addition expression.', example: 'In 4 + (−6), the addends are 4 and −6.' },
      { term: 'Sum', definition: 'The result of addition.', example: 'The sum of +4 and −6 is −2.' }
    ],
    explorePrompt: 'Use both models with the same pairs of integers. Before changing the sliders, predict what will remain and where the number-line endpoint will land.',
    exploreMode: 'add',
    handsOn: { title: 'Make Your Own Integer Chips', instructions: ['Cut 12 small paper squares or circles.','Mark 6 with +1 and 6 with −1.','Build (+4) + (−6), remove zero pairs, and record the result.','Build (−3) + (+7), then show the same sum on a number line.','Create a sum whose result is exactly 0.'], reflect: 'What part of the chip model matches the overlapping/opposite movement you see on a number line?' },
    practiceIntro: 'Stay with models first. The goal here is to understand why the sums work; Lesson 1.3 will focus more on efficient symbolic strategies.',
    questions: [
      { difficulty: 'foundations', prompt: 'Which number is an integer?', choices: ['3.5', '−7', '−2.4', '1/2'], answer: 1, hint: 'Integers do not have fractional or decimal parts.', explain: '−7 is a whole-number value, so it is an integer.' },
      { difficulty: 'foundations', prompt: 'What is the additive inverse of −9?', choices: ['−9', '0', '+9', '+18'], answer: 2, hint: 'Same magnitude, opposite sign.', explain: '+9 has the same magnitude as −9 and the opposite sign.' },
      { difficulty: 'foundations', prompt: 'What is (+6) + (−6)?', choices: ['−12', '0', '+12', '+6'], answer: 1, hint: 'The two addends are additive inverses.', explain: '+6 and −6 form six zero pairs, so the sum is 0.' },
      { difficulty: 'standard', prompt: 'Five positive chips and eight negative chips are combined. What remains after zero pairs are removed?', choices: ['3 positive chips', '3 negative chips', '13 negative chips', 'Nothing'], answer: 1, hint: 'Remove one positive with one negative until one sign runs out.', explain: 'Five pairs cancel, leaving three negative chips, so the sum is −3.' },
      { difficulty: 'standard', prompt: 'What sum is represented by starting at 0, moving 4 left, then 7 right?', choices: ['−11', '−3', '+3', '+11'], answer: 2, hint: 'Where do you end after the second move?', explain: '0 → −4 → +3, so (−4) + (+7) = +3.' },
      { difficulty: 'standard', prompt: 'Which expression represents exactly three zero pairs?', choices: ['(+3) + (−3)', '(+3) + (+3)', '(−3) + (−2)', '(+6) + (−3)'], answer: 0, hint: 'Each zero pair needs one +1 and one −1.', explain: '(+3) + (−3) makes three pairs with a total of zero.' },
      { difficulty: 'challenge', prompt: 'You start with 5 negative chips. What must you add to finish with +3?', choices: ['3 positive chips', '5 positive chips', '8 positive chips', '8 negative chips'], answer: 2, hint: 'First cancel the five negatives, then you still need three positives left.', explain: 'Eight positive chips make five zero pairs with the negatives and leave three positive chips.' },
      { difficulty: 'challenge', prompt: 'Which statement best explains (+2) + (−5) = −3?', choices: ['2 and 5 make 7, then use a negative sign.', 'Two zero pairs are removed, leaving three negative units.', 'A positive plus a negative is always negative.', 'The number with the smaller magnitude decides the sign.'], answer: 1, hint: 'Think about the chip model.', explain: 'Two positive chips cancel two of the five negative chips, leaving three negatives.' }
    ],
    checkQuestions: [
      { difficulty: 'foundations', prompt: 'Which is NOT an integer?', choices: ['−11', '0', '+6', '−1.5'], answer: 3, hint: '', explain: '−1.5 has a decimal part, so it is not an integer.' },
      { difficulty: 'foundations', prompt: 'The additive inverse of +13 is:', choices: ['−13', '+13', '0', '−26'], answer: 0, hint: '', explain: 'The additive inverse has equal magnitude and opposite sign.' },
      { difficulty: 'foundations', prompt: 'How many zero pairs are in four +1 chips and four −1 chips?', choices: ['0', '2', '4', '8'], answer: 2, hint: '', explain: 'Each positive pairs with one negative, giving four zero pairs.' },
      { difficulty: 'standard', prompt: 'Evaluate using a model: (−6) + (+2)', choices: ['−8', '−4', '+4', '+8'], answer: 1, hint: '', explain: 'Two zero pairs are removed, leaving four negative units: −4.' },
      { difficulty: 'standard', prompt: 'Evaluate: (+3) + (−8)', choices: ['−11', '−5', '+5', '+11'], answer: 1, hint: '', explain: 'Three zero pairs cancel, leaving five negative units.' },
      { difficulty: 'standard', prompt: 'Which addition statement equals 0?', choices: ['−4 + (−4)', '+4 + (−4)', '+4 + (+4)', '−4 + 0'], answer: 1, hint: '', explain: '+4 and −4 are additive inverses, so their sum is 0.' },
      { difficulty: 'challenge', prompt: 'A number-line journey starts at 0, moves 7 units right, then 10 units left. Where does it end?', choices: ['−17', '−3', '+3', '+17'], answer: 1, hint: '', explain: '+7 + (−10) ends at −3.' },
      { difficulty: 'challenge', prompt: 'Which chip description models (−2) + (+6)?', choices: ['2 negative and 6 positive; remove 2 zero pairs; 4 positive remain', '2 negative and 6 positive; remove 6 pairs; 4 negative remain', '8 positive chips', '8 negative chips'], answer: 0, hint: '', explain: 'Two negative chips pair with two positives, leaving four positive chips.' }
    ],
    application: { title: 'Game Score Comeback', scenario: 'A game uses integer score changes. You gain 6 points, lose 9 points, then gain 4 points.', tasks: ['Model the first two changes using chips.','What is the score change after +6 and −9?','Add the final +4 using a number line.','Write one sentence explaining where zero pairs appear in the situation.'], reveal: '+6 + (−9) = −3 because six zero pairs cancel and three negatives remain. Then −3 + (+4) = +1, so the total change is +1.' },
    summary: ['Integers are whole-number values and their negative opposites, including zero.','Additive inverses have equal magnitude and opposite signs.','A +1 and −1 form a zero pair.','Integer chips show addition by combining, cancelling zero pairs, and counting what remains.','Number lines model the same addition as movement in positive and negative directions.'],
    support: ['Keep a +1/−1 zero-pair example beside your work.','Use small integer values until the model makes sense.','Model every question with chips before trying it mentally.'],
    extension: ['Find three different pairs of integers with a sum of −4 and model each one.','Explain why you can add any number of zero pairs to a chip model without changing its value.','Design an integer sum where one addend has magnitude 8 and the sum is +3.'],
    pat: { title: 'PAT-STYLE THINKING', prompt: 'A student models (+4) + (−7) with chips. After removing all zero pairs, what should the model show? A) 11 negative chips B) 3 negative chips C) 3 positive chips D) 0 chips', answer: 'B. Four positive chips pair with four of the seven negative chips, leaving three negative chips.' },
    review: ['I can identify integers.','I can find additive inverses.','I can create and remove zero pairs.','I can model an integer sum with chips.','I can model the same sum on a number line.'],
    next: { title: 'Adding Integers', slug: 'adding-integers', status: 'planned' }
  }
};
