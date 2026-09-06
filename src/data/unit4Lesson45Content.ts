import type { TopicContent } from './topicContent';

export const unit4Lesson45Content: TopicContent = {
  hook: 'A student says 4 × 10.3 must have the same digits as 4 × 103, so both products should be about 400. What does place value tell you before you calculate?',
  prerequisites: [
    'Recall multiplication facts and use standard algorithms with natural numbers.',
    'Read decimal numbers by place value.',
    'Use repeated addition to explain multiplication.',
    'Decompose numbers into expanded form.',
    'Use the place-value and estimation ideas from Lesson 4.4.',
    'Evaluate short expressions with parentheses using the conventional order of operations.'
  ],
  goals: [
    'estimate a decimal product before calculating.',
    'explain a decimal factor using tenths or hundredths.',
    'multiply a decimal number by a natural number using models, partial products, and a standard algorithm.',
    'explain why the decimal point belongs where it does in a product.',
    'solve money, measurement, and multi-step problems involving decimal multiplication.',
    'use an estimate to decide whether a product is reasonable.'
  ],
  estimatedTime: '80–100 min · easy to split into two sessions',
  materials: ['pencil', 'paper', 'optional base-10 blocks', 'optional grid paper', 'optional play money'],
  successCriteria: [
    'I can predict a reasonable range for a product before calculating.',
    'I can read 2.1 as 21 tenths and use that to explain 4 × 2.1.',
    'I can break factors apart and add partial products.',
    'I can connect an area model or expanded form to the standard algorithm.',
    'I can explain decimal placement using place value, not a memorized decimal-point trick.',
    'I can tell when multiplication is the correct operation in a real situation.'
  ],
  bigIdea: 'Decimal multiplication is natural-number multiplication carried out with place-value units.',
  bigIdeaDetail: 'The multiplication facts and algorithms you already know still work. The new question is what unit the digits represent. For example, 2.1 is 21 tenths. So 4 × 2.1 is 4 × 21 tenths = 84 tenths = 8.4. Estimation gives you a target range, and models or partial products show why the standard algorithm works.',
  connection: 'How does 4 × 10.3 compare with 4 × 103? What changed: the digits, the place value, or both?',
  concepts: [
    { title: 'Estimate before you calculate', text: 'A quick estimate gives your exact answer a target. For 6 × 4.71, use nearby natural numbers: 6 × 4 = 24 and 6 × 5 = 30. The exact product should be between 24 and 30.', remember: 'An estimate is an error detector, not just an extra step.' },
    { title: 'Repeated addition still explains multiplication', text: '$11.10 paid three times can be written as $11.10 + $11.10 + $11.10 or 3 × $11.10. Multiplication is an efficient way to represent equal groups.', remember: 'The meaning of multiplication has not changed because one factor is decimal.' },
    { title: 'Name the decimal unit', text: 'Think of 2.1 as 21 tenths. Then 4 × 21 tenths = 84 tenths = 8.4. Similarly, 2.13 is 213 hundredths, so 2 × 2.13 = 426 hundredths = 4.26.', remember: 'The unit explains the decimal placement.' },
    { title: 'Expanded form reveals the partial products', text: 'For 34 × 5.7, write 34 = 30 + 4 and 5.7 = 5 + 0.7. Multiply every part: 30×5, 30×0.7, 4×5, and 4×0.7, then add the partial products.', remember: 'Every part of one factor must multiply every part of the other factor.' },
    { title: 'Area models organize the same thinking', text: 'An area model places the decomposed parts along the sides of a rectangle. Each smaller rectangle is one partial product. Adding all the smaller areas gives the total product.', remember: 'The area model and expanded form are two views of the same distributive reasoning.' },
    { title: 'The standard algorithm compresses the partial products', text: 'The standard algorithm is efficient, but the carried values and partial-product rows still represent place-value units. It is a shorter record of the expanded-form work, not a separate magic rule.', remember: 'Efficiency comes after meaning.' },
    { title: 'Context tells you what the factors mean', text: 'If one item costs $1.25 and you buy 5 items, the factors mean cost per item × number of items. In multi-step problems, calculate the multiplication that the story requires before adding or subtracting other amounts.', remember: 'Label the factors before calculating.' }
  ],
  misconceptions: [
    { title: '“Multiply as natural numbers, then just count decimal places.”', text: 'That shortcut can hide the meaning and can fail when students lose track of the units. Explain the factor as tenths or hundredths, estimate the product, and use place value to place the decimal.' },
    { title: '“The decimal point should line up in multiplication.”', text: 'Decimal points line up for addition and subtraction because like units share columns. Multiplication is different: the product depends on the units represented by the factors.' },
    { title: '“4 × 10.3 should be about the same size as 4 × 103.”', text: '10.3 is one tenth of 103, so its product with 4 is also one tenth as large: 41.2 instead of 412.' },
    { title: '“34 × 5.7 only needs 30×5 and 4×0.7.”', text: 'Every part of 34 must multiply every part of 5.7. Missing cross-products leaves out part of the total area.' },
    { title: '“In a money problem, add every dollar amount first.”', text: 'The units alone do not decide the operation. If someone earns $17 per hour for 8.5 hours, multiply those values before adding tips.' }
  ],
  examples: [
    { title: 'Example 1 · Estimate a product', problem: 'Estimate 6 × 4.71.', steps: ['4.71 is between 4 and 5.', '6 × 4 = 24.', '6 × 5 = 30.', 'So the exact product is between 24 and 30 and should be closer to 30.'], answer: 'Between 24 and 30.' },
    { title: 'Example 2 · Place-value units', problem: 'Find 4 × 2.1.', steps: ['Read 2.1 as 21 tenths.', '4 × 21 tenths = 84 tenths.', '84 tenths = 8.4.', 'Check: 4 × about 2 is about 8, so 8.4 is reasonable.'], answer: '8.4' },
    { title: 'Example 3 · Area / partial products', problem: 'Find 34 × 5.7 using partial products.', steps: ['Decompose 34 into 30 + 4 and 5.7 into 5 + 0.7.', '30×5 = 150; 30×0.7 = 21.', '4×5 = 20; 4×0.7 = 2.8.', 'Add 150 + 21 + 20 + 2.8 = 193.8.'], answer: '193.8' },
    { title: 'Example 4 · Standard algorithm explained by units', problem: 'Find 12.8 × 39.', steps: ['Write 12.8 as 128 tenths.', 'Multiply 128 × 39 = 4992.', 'The product is 4992 tenths.', '4992 tenths = 499.2.'], answer: '499.2' },
    { title: 'Example 5 · Money', problem: 'One bag of chips costs $1.25. What do 5 bags cost?', steps: ['Think of $1.25 as 125 cents.', '125 × 5 = 625 cents.', '625 cents = $6.25.', 'Estimate: $1.25 is a little more than $1, so a total a little more than $5 makes sense.'], answer: '$6.25' },
    { title: 'Example 6 · Multi-step earnings', problem: 'Kayla earns $17 per hour for 8.5 hours and receives $43.35 in tips. What are her total earnings?', steps: ['Multiply hourly pay by hours: 17 × 8.5 = 144.5.', 'Write the earnings as $144.50.', 'Add the tips: $144.50 + $43.35.', 'The total is $187.85.'], answer: '$187.85' }
  ],
  vocabulary: [
    { term: 'Factor', definition: 'A number being multiplied.', example: 'In 6 × 4.71, 6 and 4.71 are factors.' },
    { term: 'Product', definition: 'The result of multiplication.', example: 'The product of 4 and 2.1 is 8.4.' },
    { term: 'Partial product', definition: 'One product found after decomposing the factors.', example: '21 is a partial product in 30 × 0.7.' },
    { term: 'Expanded form', definition: 'A number written as the sum of its place-value parts.', example: '5.7 = 5 + 0.7.' },
    { term: 'Area model', definition: 'A rectangular model that organizes partial products.', example: '34 × 5.7 can be split into four smaller rectangles.' },
    { term: 'Standard algorithm', definition: 'An efficient written procedure built from place-value reasoning.', example: 'The multiplication algorithm records partial products in compact form.' },
    { term: 'Estimate', definition: 'A reasonable approximate value used to predict or check an answer.', example: '6 × 4.71 is between 24 and 30.' },
    { term: 'Reasonable', definition: 'Consistent with the size and meaning expected from a problem.', example: '193.8 is reasonable for 34 × 5.7 because 34 × about 6 is about 204.' },
    { term: 'Tenths', definition: 'Place-value units worth one tenth of a whole.', example: '2.1 is 21 tenths.' },
    { term: 'Hundredths', definition: 'Place-value units worth one hundredth of a whole.', example: '2.13 is 213 hundredths.' }
  ],
  explorePrompt: 'Use Decimal Product Studio to estimate first, name decimal units, build partial products, and translate the reasoning into a standard algorithm. Do not rely on a decimal-point shortcut before you can explain the place value.',
  exploreMode: 'add',
  handsOn: {
    title: 'Build a Decimal Area Model',
    instructions: ['Draw a rectangle for 12 × 4.3.', 'Split 12 into 10 + 2 and 4.3 into 4 + 0.3.', 'Label all four smaller rectangles with their partial products.', 'Add the partial products to find the total.', 'Estimate 12 × 4.3 using 12 × 4 and 12 × 5 to check your total.', 'Explain how the area model would connect to a standard multiplication algorithm.'],
    reflect: 'Which partial product shows the decimal place-value unit most clearly? Why?'
  },
  practiceIntro: 'Foundations focuses on estimation and place-value units. Standard builds partial-product and algorithm fluency. Challenge adds error analysis, scaling, money, and multi-step expressions. Estimate before calculating whenever possible.',
  questions: [
    { difficulty: 'foundations', prompt: 'Which is the best range for 6 × 4.71?', choices: ['Between 2.4 and 3', 'Between 24 and 30', 'Between 240 and 300', 'Between 4 and 5'], answer: 1, hint: 'Use 6 × 4 and 6 × 5.', explain: '4.71 lies between 4 and 5, so the product lies between 24 and 30.' },
    { difficulty: 'foundations', prompt: 'How can 2.1 be described for multiplication?', choices: ['21 tenths', '21 hundredths', '2 tenths', '210 ones'], answer: 0, hint: 'The 1 is in the tenths place.', explain: '2.1 = 21 tenths.' },
    { difficulty: 'foundations', prompt: 'Find 3 × 0.7.', choices: ['0.21', '2.1', '21', '3.7'], answer: 1, hint: '3 groups of 7 tenths is 21 tenths.', explain: '21 tenths = 2.1.' },
    { difficulty: 'standard', prompt: 'Find 4.2 × 36.', choices: ['15.12', '151.2', '1512', '40.2'], answer: 1, hint: 'Think 42 tenths × 36.', explain: '42 × 36 = 1512, so 1512 tenths = 151.2.' },
    { difficulty: 'standard', prompt: 'Which partial products are needed for 34 × 5.7?', choices: ['30×5, 30×0.7, 4×5, 4×0.7', '30×5 and 4×0.7 only', '34×5 only', '30×7 and 4×5 only'], answer: 0, hint: 'Every part of one factor multiplies every part of the other.', explain: 'All four cross-products are required.' },
    { difficulty: 'standard', prompt: 'Find 12.8 × 39.', choices: ['49.92', '499.2', '4992', '4.992'], answer: 1, hint: '12.8 = 128 tenths.', explain: '128 × 39 = 4992, so 4992 tenths = 499.2.' },
    { difficulty: 'challenge', prompt: 'A student says 4 × 10.3 = 4120 because 4 × 103 = 412. What is wrong?', choices: ['10.3 is one tenth of 103, so the product should be one tenth of 412.', 'Multiplication cannot use decimals.', '4 × 103 is 41.2.', '10.3 is ten times 103.'], answer: 0, hint: 'Compare 10.3 and 103 by place value.', explain: '10.3 is one tenth as large, so 4 × 10.3 = 41.2.' },
    { difficulty: 'challenge', prompt: 'Evaluate 15.6 + (3.1 × 4).', choices: ['27.0', '62.4', '18.7', '74.8'], answer: 0, hint: 'Multiply inside the parentheses expression before adding.', explain: '3.1 × 4 = 12.4, then 15.6 + 12.4 = 28.0.' }
  ],
  checkQuestions: [
    { difficulty: 'foundations', prompt: 'What is the product of 5 × 0.3?', choices: ['0.15', '1.5', '15', '5.3'], answer: 1, hint: '', explain: '5 groups of 3 tenths = 15 tenths = 1.5.' },
    { difficulty: 'foundations', prompt: 'Which estimate is most reasonable for 9 × 5.2?', choices: ['about 5', 'about 45', 'about 450', 'about 0.45'], answer: 1, hint: '', explain: '9 × about 5 is about 45.' },
    { difficulty: 'foundations', prompt: '2.13 is equal to how many hundredths?', choices: ['21.3', '213', '2.13', '2130'], answer: 1, hint: '', explain: '2.13 = 213 hundredths.' },
    { difficulty: 'foundations', prompt: 'Find 2 × 6.3.', choices: ['1.26', '12.6', '126', '8.3'], answer: 1, hint: '', explain: '2 × 63 tenths = 126 tenths = 12.6.' },
    { difficulty: 'standard', prompt: 'Find 15 × 74.8.', choices: ['112.2', '1122', '11,220', '89.8'], answer: 1, hint: '', explain: '74.8 × 15 = 1122.' },
    { difficulty: 'standard', prompt: 'Find 24.8 × 8.', choices: ['19.84', '198.4', '1984', '32.8'], answer: 1, hint: '', explain: '248 tenths × 8 = 1984 tenths = 198.4.' },
    { difficulty: 'standard', prompt: 'A toy car costs $2.15. What do 3 cars cost?', choices: ['$5.45', '$6.45', '$6.15', '$64.50'], answer: 1, hint: '', explain: '$2.15 × 3 = $6.45.' },
    { difficulty: 'standard', prompt: 'Which expression matches 4 bags at $3.25 each?', choices: ['4 + 3.25', '4 × 3.25', '4 − 3.25', '3.25 ÷ 4'], answer: 1, hint: '', explain: 'Equal groups use multiplication.' },
    { difficulty: 'standard', prompt: 'Which is a partial product in 34 × 5.7?', choices: ['30 × 0.7 = 21', '30 + 0.7 = 30.7', '34 − 5 = 29', '4 ÷ 0.7'], answer: 0, hint: '', explain: '21 is one of the four partial products.' },
    { difficulty: 'standard', prompt: 'If 4 × 103 = 412, what is 4 × 10.3?', choices: ['4.12', '41.2', '412', '4120'], answer: 1, hint: '', explain: '10.3 is one tenth of 103, so the product is one tenth of 412.' },
    { difficulty: 'standard', prompt: 'Which statement best explains 12.8 × 39 = 499.2?', choices: ['128 tenths × 39 = 4992 tenths.', 'Line up the decimal points.', 'Move the decimal one place because there is one digit after it.', 'Decimals always make products smaller.'], answer: 0, hint: '', explain: 'Place-value units explain the decimal placement.' },
    { difficulty: 'standard', prompt: 'Find 17 × 8.5.', choices: ['14.45', '144.5', '145.5', '1,445'], answer: 1, hint: '', explain: '17 × 8.5 = 144.5.' },
    { difficulty: 'challenge', prompt: 'Which product should be between 56 and 64?', choices: ['8 × 7.3', '8 × 73', '0.8 × 7.3', '8 + 7.3'], answer: 0, hint: '', explain: '7.3 lies between 7 and 8, so 8 × 7.3 lies between 56 and 64.' },
    { difficulty: 'challenge', prompt: 'Why is 19 × 7.8 ≈ 20 × 8 a reasonable estimate?', choices: ['Both factors were replaced by nearby friendly numbers.', 'The exact product must equal 160.', 'Decimal factors cannot be estimated.', '19 and 7.8 were both divided by 10.'], answer: 0, hint: '', explain: '20 and 8 are close to the original factors and easy to multiply.' },
    { difficulty: 'challenge', prompt: 'Find 12 × 85.3.', choices: ['102.36', '1023.6', '10,236', '97.3'], answer: 1, hint: '', explain: '85.3 × 12 = 1023.6.' },
    { difficulty: 'challenge', prompt: 'Evaluate 24.8 × (5.6 + 2.4).', choices: ['198.4', '33.6', '62.0', '248.0'], answer: 0, hint: '', explain: '5.6 + 2.4 = 8, then 24.8 × 8 = 198.4.' },
    { difficulty: 'challenge', prompt: 'A worker earns $17 per hour for 8.5 hours and receives $43.35 in tips. What is the total?', choices: ['$144.50', '$160.85', '$187.85', '$204.35'], answer: 2, hint: '', explain: '$17 × 8.5 = $144.50; add $43.35 to get $187.85.' },
    { difficulty: 'challenge', prompt: 'A student aligns decimal points vertically before multiplying 6.2 × 14. What should you tell them?', choices: ['Alignment is not the reason multiplication works; use place-value units and partial products.', 'That is always required for multiplication.', 'Delete both decimal points permanently.', 'Turn 14 into 1.4.'], answer: 0, hint: '', explain: 'Unlike addition/subtraction, multiplication does not require decimal points to align. Place value determines the product.' }
  ],
  application: {
    title: 'School Market Budget Challenge',
    scenario: 'A student council is preparing a snack table. Granola bars cost $2.15 each, fruit cups cost $1.35 each, and reusable water bottles cost $6.40 each. They need 12 granola bars, 8 fruit cups, and 5 bottles.',
    tasks: ['Estimate the cost of each group before calculating.', 'Calculate the exact cost of each group.', 'Find the total purchase cost.', 'Explain one product using place-value units or partial products.', 'If the budget is $75.00, decide whether the purchase fits and explain how your estimates could have warned you before exact calculation.'],
    reveal: 'Granola: 12×$2.15 = $25.80. Fruit: 8×$1.35 = $10.80. Bottles: 5×$6.40 = $32.00. Total = $68.60, so the purchase fits under $75.00 with $6.40 remaining.'
  },
  summary: ['Estimate first to give the product a reasonable target.', 'Decimal multiplication uses the same multiplication facts and algorithms as natural-number multiplication.', 'Place-value units such as tenths and hundredths explain decimal placement.', 'Area models and expanded form reveal the partial products behind the standard algorithm.', 'Context determines what each factor means and whether more operations are needed.'],
  support: ['Start with one-digit natural-number factors and decimals such as 0.7, 2.1, or 4.3.', 'Say the decimal as tenths or hundredths before multiplying.', 'Use an area model or expanded form before the standard algorithm.', 'Estimate before every exact calculation until decimal placement feels predictable.'],
  extension: ['Solve 12.8 × 39 using both an area model and a standard algorithm, then compare the records.', 'Create two decimal products that have the same digits in the answer but decimal points in different places.', 'Design a money problem that requires decimal multiplication followed by addition or subtraction.'],
  pat: { title: 'PAT-STYLE THINKING', prompt: 'Without completing the full standard algorithm, which statement best explains why 4 × 10.3 is about 40 rather than about 400? A) Multiplication always makes decimals smaller. B) 10.3 is about 10, so 4 × 10.3 should be near 4 × 10 = 40. C) Move the decimal one place. D) 10.3 has three digits.', answer: 'B. Estimation and place value show the size of the product before exact calculation.' },
  review: ['I can estimate a decimal product.', 'I can explain a decimal factor using tenths or hundredths.', 'I can use partial products or an area model.', 'I can use and explain the standard algorithm.', 'I can solve a decimal multiplication problem in context and check reasonableness.'],
  next: { title: 'Dividing Decimal Numbers', slug: 'dividing-decimals', status: 'planned' }
};
