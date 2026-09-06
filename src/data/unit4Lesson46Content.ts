import type { TopicContent } from './topicContent';

export const unit4Lesson46Content: TopicContent = {
  hook: 'Two friends split a $46.80 game equally. A student writes 46.80 ÷ 2 = 23 R0.80. What should the remainder mean in a money-sharing problem?',
  prerequisites: [
    'Use multiplication and division facts to reason about equal groups.',
    'Interpret a fraction as equal sharing from Lesson 4.3.',
    'Read decimal numbers by place value.',
    'Use standard division algorithms with natural numbers.',
    'Use estimation and compatible numbers.',
    'Understand that multiplication and division are related operations.'
  ],
  goals: [
    'estimate a decimal quotient using compatible numbers.',
    'explain decimal division using place-value units.',
    'divide a natural or decimal dividend by a natural-number divisor using partial quotients or a standard algorithm.',
    'continue a remainder into tenths or hundredths when the context requires a decimal answer.',
    'decide whether a remainder should be left over, rounded up, rounded down, or expressed as a decimal.',
    'solve money, measurement, and equal-sharing problems and check whether the quotient is reasonable.'
  ],
  estimatedTime: '90–110 min · best split into two sessions',
  materials: ['pencil', 'paper', 'optional base-10 blocks', 'optional grid paper', 'optional Canadian money'],
  successCriteria: [
    'I can estimate the size of a quotient before calculating.',
    'I can explain 9.6 ÷ 4 as 96 tenths ÷ 4.',
    'I can decompose a dividend into friendly parts and add partial quotients.',
    'I can use a standard division algorithm while keeping place value visible.',
    'I can explain what a remainder means in the story.',
    'I can use multiplication to check a division answer.'
  ],
  bigIdea: 'Decimal division is equal sharing carried out with place-value units, and the meaning of a remainder depends on the situation.',
  bigIdeaDetail: 'Division strategies you already know still work with decimal dividends. Place value tells you what the quotient digits mean. For example, 9.6 is 96 tenths, so 96 tenths ÷ 4 = 24 tenths = 2.4. When a remainder appears, the story decides whether it stays left over, causes you to use one more group, or continues into a decimal amount.',
  connection: 'How is 9.6 ÷ 4 connected to both 96 ÷ 4 and the fair-sharing ideas from Lesson 4.3?',
  concepts: [
    { title: 'Division can mean equal sharing', text: 'In $46.80 ÷ 2, the total amount is shared equally between two people. The quotient tells the amount in each share. This is the same equal-sharing idea you used when a fraction represented a quotient.', remember: 'Dividend = total being shared; divisor = number or size of equal groups.' },
    { title: 'Place-value units explain decimal quotients', text: 'Think of 9.6 as 96 tenths. Then 96 tenths ÷ 4 = 24 tenths = 2.4. Likewise, 4.26 is 426 hundredths, so 4.26 ÷ 2 = 213 hundredths = 2.13.', remember: 'Name the unit before deciding where the decimal belongs.' },
    { title: 'Partial quotients let you divide friendly parts', text: 'For 15.6 ÷ 12, split 15.6 into 12 + 3.6. Then 12 ÷ 12 = 1 and 3.6 ÷ 12 = 0.3. Add the partial quotients: 1 + 0.3 = 1.3.', remember: 'Choose parts that are easy to divide by the divisor.' },
    { title: 'The standard algorithm records the same place-value thinking', text: 'Long division is more compact than an area model, but each subtraction still removes groups of the divisor from a place-value amount. Decimal digits in the quotient represent tenths, hundredths, and so on.', remember: 'The algorithm is a record of grouping, not a decimal-point trick.' },
    { title: 'A remainder can become a decimal', text: 'For 15 ÷ 2, 7 R1 can continue as 15.0 ÷ 2 = 7.5. Thinking of 15 as 150 tenths lets the remaining 1 whole become 10 tenths that can be shared.', remember: 'You can regroup a remainder into smaller place-value units when the context allows sharing.' },
    { title: 'Context controls the remainder', text: '15 charms in groups of 2 makes 7 complete bracelets with 1 charm left. Fifteen people in seats of 2 require 8 seats. Fifteen dollars shared by 2 people gives $7.50 each. The same division can lead to different final interpretations.', remember: 'Do not automatically round every remainder the same way.' },
    { title: 'Compatible numbers make useful estimates', text: 'For 113.4 ÷ 18, numbers such as 100 and 20 are easy to divide, giving an estimate near 5. An estimate tells you whether an exact quotient is in a reasonable range.', remember: 'Choose nearby numbers that work well with known multiplication facts.' },
    { title: 'Multiplication checks division', text: 'If 15.6 ÷ 12 = 1.3, then 1.3 × 12 should return 15.6. This related multiplication fact is a powerful way to check both the size and accuracy of a quotient.', remember: 'quotient × divisor = dividend when there is no remainder.' }
  ],
  misconceptions: [
    { title: '“The decimal point in the quotient just goes straight up.”', text: 'That may appear to work in some standard-algorithm layouts, but the reason is place value. Explain what the dividend represents in tenths or hundredths and what each quotient digit means.' },
    { title: '“A remainder is always left over.”', text: 'A remainder might stay left over, require another container/seat, or be shared into smaller units as a decimal. Read the context.' },
    { title: '“The divisor can be a decimal because the dividend is decimal.”', text: 'In this Grade 6 lesson, the divisor is a natural number. Decimal divisors are later learning.' },
    { title: '“A smaller decimal dividend means the quotient must be less than 1.”', text: 'The quotient depends on both numbers. For example, 9.6 ÷ 4 = 2.4, which is greater than 1.' },
    { title: '“If there is a remainder, the answer is wrong.”', text: 'Remainders are expected in many division situations. The important question is how the remainder should be interpreted.' }
  ],
  examples: [
    { title: 'Example 1 · Place-value scaling', problem: 'Compare 96 ÷ 4 and 9.6 ÷ 4.', steps: ['96 ÷ 4 = 24.', '9.6 is one tenth of 96.', 'So the quotient should be one tenth of 24.', '9.6 ÷ 4 = 2.4.'], answer: '2.4' },
    { title: 'Example 2 · Partial quotients', problem: 'Find 15.6 ÷ 12.', steps: ['Decompose 15.6 into 12 + 3.6.', '12 ÷ 12 = 1.', '3.6 ÷ 12 = 0.3.', 'Add the partial quotients: 1 + 0.3 = 1.3.'], answer: '1.3' },
    { title: 'Example 3 · Continue a remainder', problem: 'Write 15 ÷ 2 as a decimal quotient.', steps: ['15 ÷ 2 = 7 R1.', 'Regroup the remaining 1 whole as 10 tenths.', '10 tenths ÷ 2 = 5 tenths.', 'So 15.0 ÷ 2 = 7.5.'], answer: '7.5' },
    { title: 'Example 4 · Decimal dividend', problem: 'Find 49.2 ÷ 3.', steps: ['Decompose 49.2 into 48 + 1.2.', '48 ÷ 3 = 16.', '1.2 ÷ 3 = 0.4.', 'Add 16 + 0.4 = 16.4.'], answer: '16.4' },
    { title: 'Example 5 · Two-digit divisor', problem: 'Find 108 ÷ 15 and write the answer as a decimal.', steps: ['Use 105 ÷ 15 = 7, leaving 3.', 'Write the remaining 3 as 3.0.', '3.0 ÷ 15 = 0.2.', 'So the quotient is 7.2.'], answer: '7.2' },
    { title: 'Example 6 · Estimate first', problem: 'Estimate 113.4 ÷ 18.', steps: ['113.4 is close to 100.', '18 is close to 20.', '100 ÷ 20 = 5.', 'So the exact quotient should be close to 5.'], answer: 'About 5.' }
  ],
  vocabulary: [
    { term: 'Dividend', definition: 'The total quantity being divided.', example: 'In 15.6 ÷ 12, 15.6 is the dividend.' },
    { term: 'Divisor', definition: 'The number of equal groups or the size of each group.', example: 'In 15.6 ÷ 12, 12 is the divisor.' },
    { term: 'Quotient', definition: 'The result of division.', example: 'The quotient of 15.6 ÷ 12 is 1.3.' },
    { term: 'Remainder', definition: 'The amount left after making as many complete groups as possible.', example: '15 ÷ 2 = 7 R1.' },
    { term: 'Partial quotient', definition: 'One part of a quotient found by dividing a friendly part of the dividend.', example: '1 and 0.3 are partial quotients in 15.6 ÷ 12.' },
    { term: 'Compatible numbers', definition: 'Nearby numbers chosen because they are easy to calculate with.', example: '100 and 20 are compatible for estimating 113.4 ÷ 18.' },
    { term: 'Standard algorithm', definition: 'An efficient written procedure for division organized by place value.', example: 'Long division is one standard algorithm.' },
    { term: 'Estimate', definition: 'A reasonable approximate value used to predict or check an answer.', example: '113.4 ÷ 18 is about 5.' },
    { term: 'Regroup', definition: 'To exchange a place-value unit for equivalent smaller units.', example: 'A remainder of 1 whole can become 10 tenths.' },
    { term: 'Reasonable', definition: 'Consistent with the size and context expected from the problem.', example: 'A quotient near 5 is reasonable for 113.4 ÷ 18.' }
  ],
  explorePrompt: 'Use Decimal Division Lab to share quantities, build partial quotients, decide what remainders mean, estimate with compatible numbers, and connect scaled quotients. Keep the divisor as a natural number and explain the place value of every decimal quotient.',
  exploreMode: 'add',
  handsOn: {
    title: 'Build an Equal-Share Division Model',
    instructions: ['Use play money, base-10 drawings, or a place-value chart to represent $15.00.', 'Share the amount equally between 2 people.', 'Record what happens to the 15 whole dollars before you split the remaining dollar into cents or tenths.', 'Write 15 ÷ 2, 15.0 ÷ 2, and the final decimal quotient.', 'Repeat with 9.6 ÷ 4 using tenths.', 'Check each quotient by multiplying it by the divisor.'],
    reflect: 'How did regrouping a remainder into smaller place-value units make equal sharing possible?'
  },
  practiceIntro: 'Foundations focuses on equal sharing, place-value scaling, and simple decimal quotients. Standard builds partial-quotient and standard-algorithm fluency. Challenge emphasizes compatible-number estimation, remainder decisions, money, and explanations.',
  questions: [
    { difficulty: 'foundations', prompt: 'If 96 ÷ 4 = 24, what is 9.6 ÷ 4?', choices: ['0.24', '2.4', '24', '240'], answer: 1, hint: '9.6 is one tenth of 96.', explain: 'The quotient is also one tenth as large: 2.4.' },
    { difficulty: 'foundations', prompt: 'How can 9.6 be described for division?', choices: ['96 tenths', '96 hundredths', '9 tenths', '960 ones'], answer: 0, hint: 'The 6 is in the tenths place.', explain: '9.6 = 96 tenths.' },
    { difficulty: 'foundations', prompt: 'Find 0.8 ÷ 4.', choices: ['0.02', '0.2', '2', '3.2'], answer: 1, hint: '8 tenths shared into 4 groups gives 2 tenths per group.', explain: '0.8 ÷ 4 = 0.2.' },
    { difficulty: 'standard', prompt: 'Find 15.6 ÷ 12.', choices: ['0.13', '1.3', '13', '3.6'], answer: 1, hint: 'Split 15.6 into 12 + 3.6.', explain: '12 ÷ 12 = 1 and 3.6 ÷ 12 = 0.3, so the quotient is 1.3.' },
    { difficulty: 'standard', prompt: 'Find 49.2 ÷ 3.', choices: ['1.64', '16.4', '164', '46.2'], answer: 1, hint: 'Use 48 + 1.2.', explain: '48 ÷ 3 = 16 and 1.2 ÷ 3 = 0.4, so 16.4.' },
    { difficulty: 'standard', prompt: 'Write 15 ÷ 2 as a decimal quotient.', choices: ['7.1', '7.5', '7.2', '8.0'], answer: 1, hint: 'Regroup the remainder 1 whole as 10 tenths.', explain: '10 tenths ÷ 2 = 5 tenths, so 15 ÷ 2 = 7.5.' },
    { difficulty: 'challenge', prompt: 'Fifteen people need seats that hold 2 people each. How many seats are needed?', choices: ['7', '7.5', '8', '15'], answer: 2, hint: 'A half-used seat is still a seat.', explain: '7 seats hold 14 people, so one more seat is needed for the 15th person.' },
    { difficulty: 'challenge', prompt: 'Which is the best estimate for 113.4 ÷ 18?', choices: ['about 0.5', 'about 5', 'about 50', 'about 500'], answer: 1, hint: 'Use nearby compatible numbers such as 100 and 20.', explain: '100 ÷ 20 = 5, so the quotient should be near 5.' }
  ],
  checkQuestions: [
    { difficulty: 'foundations', prompt: 'Find 4.26 ÷ 2.', choices: ['0.213', '2.13', '21.3', '4.24'], answer: 1, hint: '', explain: '426 hundredths ÷ 2 = 213 hundredths = 2.13.' },
    { difficulty: 'foundations', prompt: 'What is the dividend in 18.2 ÷ 14?', choices: ['18.2', '14', '1.3', '32.2'], answer: 0, hint: '', explain: 'The dividend is the quantity being divided: 18.2.' },
    { difficulty: 'foundations', prompt: 'What is the divisor in 92.5 ÷ 25?', choices: ['92.5', '25', '3.7', '925'], answer: 1, hint: '', explain: '25 is the divisor.' },
    { difficulty: 'foundations', prompt: 'If 925 ÷ 25 = 37, what is 92.5 ÷ 25?', choices: ['0.37', '3.7', '37', '370'], answer: 1, hint: '', explain: '92.5 is 925 tenths, so the quotient is 37 tenths = 3.7.' },
    { difficulty: 'standard', prompt: 'Find 77.4 ÷ 6.', choices: ['1.29', '12.9', '129', '71.4'], answer: 1, hint: '', explain: '77.4 ÷ 6 = 12.9.' },
    { difficulty: 'standard', prompt: 'Find 195.5 ÷ 5.', choices: ['3.91', '39.1', '391', '190.5'], answer: 1, hint: '', explain: '195.5 ÷ 5 = 39.1.' },
    { difficulty: 'standard', prompt: 'Find 108 ÷ 15 as a decimal.', choices: ['7.2', '7.8', '72', '0.72'], answer: 0, hint: '', explain: '105 ÷ 15 = 7 and the remaining 3 gives 0.2 more, so 7.2.' },
    { difficulty: 'standard', prompt: 'A $46.80 game is shared equally between 2 friends. What does each pay?', choices: ['$23.04', '$23.40', '$23.80', '$46.40'], answer: 1, hint: '', explain: '$46.80 ÷ 2 = $23.40.' },
    { difficulty: 'standard', prompt: 'Which decomposition works well for 15.6 ÷ 12?', choices: ['12 + 3.6', '10 + 5.6', '15 + 0.6', '6 + 9.6 only'], answer: 0, hint: '', explain: 'Both 12 and 3.6 divide cleanly by 12 into 1 and 0.3.' },
    { difficulty: 'standard', prompt: 'Which multiplication checks 15.6 ÷ 12 = 1.3?', choices: ['1.3 × 12 = 15.6', '15.6 × 12 = 1.3', '15.6 × 1.3 = 12', '12 ÷ 1.3 = 15.6'], answer: 0, hint: '', explain: 'quotient × divisor should reproduce the dividend.' },
    { difficulty: 'standard', prompt: 'Which estimate is most reasonable for 27.3 ÷ 21?', choices: ['about 0.13', 'about 1.3', 'about 13', 'about 130'], answer: 1, hint: '', explain: '28 ÷ 20 is about 1.4, so 1.3 is reasonable.' },
    { difficulty: 'standard', prompt: 'Find 12.4 ÷ 5.', choices: ['0.248', '2.48', '24.8', '7.4'], answer: 1, hint: '', explain: '12.4 ÷ 5 = 2.48.' },
    { difficulty: 'challenge', prompt: '15 charms are used in groups of 2. How many complete bracelets can be made?', choices: ['7', '7.5', '8', '15'], answer: 0, hint: '', explain: 'Only 7 complete groups of 2 can be made; 1 charm remains.' },
    { difficulty: 'challenge', prompt: '$15 is shared equally between 2 people. Which interpretation is correct?', choices: ['$7 each with $1 left over', '$7.50 each', '$8 each', '$15 each'], answer: 1, hint: '', explain: 'Money can be regrouped into cents, so the remainder becomes $0.50 per person.' },
    { difficulty: 'challenge', prompt: 'Why can a remainder be rounded up in a seat problem?', choices: ['Because any leftover person still needs another whole seat.', 'Because remainders are always rounded up.', 'Because decimal quotients are not allowed.', 'Because the divisor becomes larger.'], answer: 0, hint: '', explain: 'The context requires enough whole seats for everyone.' },
    { difficulty: 'challenge', prompt: 'Without calculating exactly, is 147.9 ÷ 30 greater or less than 5?', choices: ['Greater than 5', 'Less than 5', 'Exactly 5', 'Cannot tell'], answer: 1, hint: '', explain: '30 × 5 = 150, and 147.9 is less than 150, so the quotient is less than 5.' },
    { difficulty: 'challenge', prompt: 'A hiker walks 19.8 km in 3 hours at a constant pace. What is the pace?', choices: ['5.6 km/h', '6.6 km/h', '16.8 km/h', '59.4 km/h'], answer: 1, hint: '', explain: '19.8 ÷ 3 = 6.6 km/h.' },
    { difficulty: 'challenge', prompt: 'Which statement best explains why 630 ÷ 14 is ten times 63 ÷ 14?', choices: ['630 is ten times 63 while the divisor stays the same.', '14 is ten times larger.', 'Division always adds a zero.', '63 is a decimal number.'], answer: 0, hint: '', explain: 'Scaling only the dividend by 10 scales the quotient by 10.' }
  ],
  application: {
    title: 'Outdoor Education Supply Challenge',
    scenario: 'A Grade 6 outdoor education day has 58 students. The group has 535 granola bars, 19.8 L of water for 3 refill stations, and $18.35 to buy 5 identical notebooks for field observations.',
    tasks: ['Estimate how many complete granola bars each student can receive.', 'Calculate 535 ÷ 58 and explain what the remainder means.', 'Find how many litres of water go to each refill station.', 'Find the cost of one notebook.', 'For each answer, decide whether the context calls for a whole number, a decimal, or a remainder statement, and explain why.'],
    reveal: '535 ÷ 58 = 9 R13, so each student gets 9 complete bars with 13 bars left. 19.8 ÷ 3 = 6.6 L per station. $18.35 ÷ 5 = $3.67 per notebook.'
  },
  summary: ['Decimal division uses the same equal-sharing and grouping ideas as natural-number division.', 'Place-value units explain decimal quotients.', 'Partial quotients and area models make the grouping visible before the standard algorithm.', 'Compatible-number estimates help check the size of a quotient.', 'The context decides how a remainder should be interpreted.', 'Multiplication can check a quotient.'],
  support: ['Start with decimal dividends that divide evenly by a one-digit natural number.', 'Rename the dividend as tenths or hundredths before dividing.', 'Use partial quotients with friendly chunks before long division.', 'Write the meaning of the remainder in words before deciding how to report the answer.'],
  extension: ['Solve 18.2 ÷ 14 using two different decompositions and compare the partial quotients.', 'Create three different stories for 15 ÷ 2: one that rounds down, one that rounds up, and one that uses 7.5.', 'Explain why 27.3 ÷ 21 and 273 ÷ 21 have quotients related by a factor of 10.'],
  pat: { title: 'PAT-STYLE THINKING', prompt: 'A class calculates 15 ÷ 2 = 7 R1. Which answer is best for “How many 2-person seats are needed for 15 students?” A) 7 seats B) 7.5 seats C) 8 seats D) 15 seats. Explain why the remainder changes the final answer.', answer: 'C. Seven seats hold only 14 students. The remaining student still needs a seat, so one additional whole seat is required.' },
  review: ['I can estimate a decimal quotient.', 'I can explain decimal division using place-value units.', 'I can use partial quotients or a standard algorithm.', 'I can continue a remainder into decimal place-value units when appropriate.', 'I can interpret a remainder from the context.', 'I can check a quotient with multiplication.'],
  next: { title: 'Unit 4 Review & Math Arcade', slug: 'unit-review', status: 'planned' }
};
