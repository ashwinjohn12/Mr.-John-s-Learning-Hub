import type { TopicContent } from './topicContent';

export const unit4RemainingContent: Record<string, TopicContent> = {
  'grade-6-math/decimals-fractions/multiplying-fractions': {
    hook: 'Which should be larger: 6 × 3 or 6 × 1/3? Both are multiplication. Why might one product be greater than 6 while the other is less than 6?',
    prerequisites: [
      'Recognize unit fractions and explain the numerator and denominator.',
      'Add fractions with common or related denominators.',
      'Express improper fractions and mixed numbers in equivalent forms.',
      'Recall multiplication and division facts.',
      'Use the words factor, product, and simplest form.'
    ],
    goals: [
      'relate natural-number × fraction multiplication to repeated addition.',
      'multiply a natural number by a unit fraction and by any fraction.',
      'model a fraction of a natural-number quantity.',
      'explain the difference between groups-of and part-of models.',
      'relate multiplication by a unit fraction to division.',
      'predict whether a product will be less than, equal to, or greater than the natural number.',
      'solve real-life problems using fraction and natural-number multiplication.'
    ],
    estimatedTime: '90–120 min · easy to split into two sessions',
    materials: ['pencil', 'paper', 'counters or small objects', 'fraction strips or number line', 'optional play money'],
    successCriteria: [
      'I can explain a natural number times a fraction as repeated groups.',
      'I can model a fraction of a natural-number quantity.',
      'I can explain why the denominator stays the same when I repeatedly add the same fraction.',
      'I can use the size of the fractional factor to predict the size of the product.',
      'I can connect multiplying by 1/n to dividing by n.',
      'I can solve and simplify products without using a fraction × fraction rule.'
    ],
    bigIdea: 'Multiplying a natural number and a fraction can mean repeated groups of a fraction or taking a fractional part of a quantity.',
    bigIdeaDetail: 'In Grade 6, the focus is multiplication between natural numbers and fractions—not a general fraction × fraction algorithm. A natural number times a fraction can be understood as repeated addition. A fraction times a natural number can be understood as taking part of a quantity. These expressions have the same product because multiplication is commutative, but the models tell different stories. Multiplication does not always make a number larger: a proper fractional factor makes a positive natural-number quantity smaller, while an improper fractional factor can make it larger.',
    connection: 'How can 4 × 2/5 and 2/5 of 4 have the same product even though one means “four groups” and the other means “take two-fifths of a quantity”?',
    concepts: [
      {
        title: 'Repeated addition builds fraction multiplication',
        text: 'The expression 4 × 2/5 means four groups of 2/5. Repeated addition shows the meaning: 2/5 + 2/5 + 2/5 + 2/5 = 8/5. The denominator stays 5 because the size of each fractional unit has not changed.',
        remember: 'The natural number tells how many equal groups of the fraction you have.'
      },
      {
        title: 'A natural number can multiply a unit fraction',
        text: 'For 6 × 1/4, think of six groups of one fourth. The product is 6/4, which simplifies to 3/2 or 1 1/2. You are counting fourths, so the denominator remains 4.',
        remember: 'Multiply the numerator by the natural number; do not multiply the denominator by the natural number.'
      },
      {
        title: 'A fraction of a quantity is another multiplication meaning',
        text: 'The expression 3/5 × 20 asks for three-fifths of 20. Split 20 into 5 equal parts first: 20 ÷ 5 = 4. Then take 3 of those parts: 3 × 4 = 12.',
        remember: 'The denominator tells how many equal parts to make; the numerator tells how many of those parts to keep.'
      },
      {
        title: 'Groups-of and part-of are different models',
        text: '4 × 2/5 can be shown as four groups of 2/5 on a number line. 2/5 × 4 can be shown by partitioning a quantity of 4 into fifths and keeping two-fifths. The product is equal because multiplication is commutative, but a strong explanation can tell which model fits the situation.',
        remember: 'Same answer does not mean the two stories or diagrams look the same.'
      },
      {
        title: 'Multiplication does not always make a number larger',
        text: 'If the fractional factor is between 0 and 1, you are taking only part of a positive quantity, so the product is smaller than the natural number. If the fractional factor is exactly 1, the size stays the same. If the fractional factor is greater than 1, the product can be greater than the natural number.',
        remember: 'Predict the product size before calculating. It is a powerful error check.'
      },
      {
        title: 'Multiplying by a unit fraction is division',
        text: 'Taking one-fourth of 12 means dividing 12 into 4 equal parts. So 1/4 × 12 = 12 ÷ 4 = 3. This is why multiplication by a unit fraction connects naturally to division.',
        remember: 'a × 1/n and a ÷ n describe the same equal-sharing amount.'
      },
      {
        title: 'Fraction multiplication can appear inside larger expressions',
        text: 'A problem may require you to multiply first and then add or subtract. Parentheses can show which amount is being changed. Use the same order-of-operations reasoning you learned in Unit 3.',
        remember: 'Write one expression that matches the story before calculating.'
      }
    ],
    misconceptions: [
      {
        title: '“Multiply the numerator and denominator by the natural number.”',
        text: 'For 3 × 2/5, multiplying both parts would give 6/15, which is only 2/5 again. Repeated addition shows that three groups of 2/5 make 6/5, not 6/15.'
      },
      {
        title: '“Multiplication always makes numbers bigger.”',
        text: 'Multiplying 12 by 1/3 gives 4 because one-third means only one of three equal parts of 12. A factor between 0 and 1 can make a positive quantity smaller.'
      },
      {
        title: '“4 × 2/5 and 2/5 × 4 must use the same model.”',
        text: 'They have the same product, but the first naturally shows four groups of 2/5 while the second naturally shows two-fifths of a quantity of 4.'
      },
      {
        title: '“The denominator changes when I add more groups.”',
        text: 'If you repeatedly add fifths, the pieces are still fifths. Only the number of fifths changes.'
      },
      {
        title: '“This lesson means fraction × fraction.”',
        text: 'Not yet. In Grade 6, this lesson focuses on multiplication between fractions and natural numbers. General fraction × fraction multiplication comes later.'
      }
    ],
    examples: [
      {
        title: 'Example 1 · Repeated groups',
        problem: 'Find 4 × 2/5 and explain what it means.',
        steps: [
          'Read the expression as four groups of 2/5.',
          'Write repeated addition: 2/5 + 2/5 + 2/5 + 2/5.',
          'Add the fifths: 8/5.',
          'Convert if useful: 8/5 = 1 3/5.'
        ],
        answer: '8/5, or 1 3/5'
      },
      {
        title: 'Example 2 · A fraction of a quantity',
        problem: 'Find 3/4 of 20.',
        steps: [
          'The denominator 4 tells us to split 20 into 4 equal parts.',
          '20 ÷ 4 = 5, so one fourth of 20 is 5.',
          'The numerator 3 tells us to take 3 of those parts.',
          '3 × 5 = 15.'
        ],
        answer: '15'
      },
      {
        title: 'Example 3 · Predict the product type',
        problem: 'Predict, then find 7 × 3/8.',
        steps: [
          'The fractional factor 3/8 is less than 1, so the product should be less than 7.',
          'Multiply the numerator by the natural number: 7 × 3 = 21.',
          'Keep the eighth-sized unit: 21/8.',
          '21/8 = 2 5/8, which is less than 7 as predicted.'
        ],
        answer: '21/8, or 2 5/8'
      },
      {
        title: 'Example 4 · Unit fraction and division',
        problem: 'Explain why 1/6 × 30 = 30 ÷ 6.',
        steps: [
          'One sixth of a quantity means split the quantity into 6 equal parts.',
          '30 ÷ 6 = 5.',
          'So one sixth of 30 is 5.',
          'Therefore 1/6 × 30 and 30 ÷ 6 have the same value.'
        ],
        answer: '5'
      },
      {
        title: 'Example 5 · Improper fractional factor',
        problem: 'Will 5 × 3/2 be less than or greater than 5? Then calculate.',
        steps: [
          '3/2 is greater than 1, so the product should be greater than 5.',
          '5 × 3/2 = 15/2.',
          '15/2 = 7 1/2.',
          '7 1/2 is greater than 5, so the prediction was reasonable.'
        ],
        answer: '15/2, or 7 1/2'
      },
      {
        title: 'Example 6 · Multi-step context',
        problem: 'A club has 30 stickers. It gives 2/5 of them away, then receives 8 new stickers. How many stickers does it have now?',
        steps: [
          'Write one expression: 30 − (2/5 × 30) + 8.',
          'Find two-fifths of 30: 30 ÷ 5 = 6, then 2 × 6 = 12.',
          'Subtract the 12 stickers that were given away: 30 − 12 = 18.',
          'Add the 8 new stickers: 18 + 8 = 26.'
        ],
        answer: '26 stickers'
      }
    ],
    vocabulary: [
      { term: 'Unit fraction', definition: 'A fraction with a numerator of 1.', example: '1/7 is a unit fraction.' },
      { term: 'Factor', definition: 'A number or quantity being multiplied.', example: 'In 4 × 2/5, 4 and 2/5 are factors.' },
      { term: 'Product', definition: 'The result of multiplication.', example: 'The product of 4 × 2/5 is 8/5.' },
      { term: 'Repeated addition', definition: 'Adding the same amount several times.', example: '3 × 2/5 can be shown as 2/5 + 2/5 + 2/5.' },
      { term: 'Fraction of a quantity', definition: 'A fractional part of a total amount.', example: '3/4 of 20 is 15.' },
      { term: 'Commutative property', definition: 'A multiplication property that lets factors change order without changing the product.', example: '4 × 2/5 = 2/5 × 4.' },
      { term: 'Quotient', definition: 'The result of division.', example: 'The quotient of 20 ÷ 5 is 4.' },
      { term: 'Simplest form', definition: 'A fraction whose numerator and denominator have no common factor greater than 1.', example: '6/8 simplifies to 3/4.' },
      { term: 'Proper fraction', definition: 'A positive fraction less than 1 whose numerator is less than its denominator.', example: '3/5 is a proper fraction.' },
      { term: 'Improper fraction', definition: 'A fraction whose numerator is greater than or equal to its denominator.', example: '8/5 is an improper fraction.' }
    ],
    explorePrompt: 'Complete all four parts of the Fraction Multiplier Lab. Build repeated groups, find a fraction of a quantity, predict product size before calculating, and connect unit fractions to division. The goal is to explain what the multiplication means—not just get a product.',
    exploreMode: 'add',
    handsOn: {
      title: 'Counters: Groups Of vs Part Of',
      instructions: [
        'Place 12 counters on your desk.',
        'Model 3 × 1/4 using four-part fraction strips or a number line. Describe it as three groups of one fourth.',
        'Now model 1/4 of 12 counters by splitting the 12 counters into 4 equal groups and keeping 1 group.',
        'Choose a new example such as 2/3 of 12 or 4 × 2/3 and build a model.',
        'Write one sentence explaining whether your model shows repeated groups or a fraction of a quantity.'
      ],
      reflect: 'How can two multiplication expressions have equal products but be represented by different models?'
    },
    practiceIntro: 'Foundations focuses on meaning and unit fractions. Standard combines models and calculations. Challenge asks you to predict product size, compare models, and use multiplication inside real situations. Use a hint only after you have made a prediction.',
    questions: [
      { difficulty: 'foundations', prompt: 'Which repeated-addition statement matches 3 × 2/7?', choices: ['3/7 + 3/7', '2/7 + 2/7 + 2/7', '2/21', '3/2 + 3/7'], answer: 1, hint: 'The natural number tells how many groups of the fraction.', explain: '3 × 2/7 means three groups of 2/7, so it is 2/7 + 2/7 + 2/7.' },
      { difficulty: 'foundations', prompt: 'Find 5 × 1/6.', choices: ['5/30', '5/6', '6/5', '1/30'], answer: 1, hint: 'Think of five groups of one sixth.', explain: 'Five groups of 1/6 make 5/6. The pieces remain sixths.' },
      { difficulty: 'foundations', prompt: 'Which division statement has the same value as 1/4 × 20?', choices: ['20 ÷ 4', '20 ÷ 1', '4 ÷ 20', '20 × 4'], answer: 0, hint: 'Taking one fourth means splitting into four equal parts.', explain: '1/4 × 20 = 20 ÷ 4 = 5.' },
      { difficulty: 'standard', prompt: 'Find 3/5 of 25.', choices: ['5', '10', '15', '20'], answer: 2, hint: 'Find one fifth first, then take three parts.', explain: '25 ÷ 5 = 5 and 3 × 5 = 15.' },
      { difficulty: 'standard', prompt: 'Find 4 × 3/8 in simplest form.', choices: ['12/32', '3/2', '7/8', '12/8'], answer: 1, hint: 'Four groups of 3/8 make 12/8, then simplify.', explain: '4 × 3/8 = 12/8 = 3/2.' },
      { difficulty: 'standard', prompt: 'Before calculating, what should be true about 9 × 2/3?', choices: ['The product is less than 9.', 'The product is greater than 9.', 'The product must equal 9.', 'There is no way to predict.'], answer: 0, hint: '2/3 is between 0 and 1.', explain: 'Multiplying a positive quantity by a proper fraction gives only part of the quantity, so the product is less than 9.' },
      { difficulty: 'challenge', prompt: 'Which description best matches 2/5 × 30?', choices: ['Two groups of 30/5', 'Two-fifths of a quantity of 30', 'Thirty groups of 2/5 only', 'Divide 2 by 30'], answer: 1, hint: 'Read a fraction placed first as a fraction of the quantity.', explain: '2/5 × 30 can be interpreted as two-fifths of 30.' },
      { difficulty: 'challenge', prompt: 'A student says 4 × 3/5 = 12/20 because both numerator and denominator should be multiplied by 4. What is the best correction?', choices: ['The student is correct.', 'Only the denominator should be multiplied.', 'Repeated addition gives 3/5 + 3/5 + 3/5 + 3/5 = 12/5.', 'Fractions cannot be multiplied by natural numbers.'], answer: 2, hint: 'Write the multiplication as repeated addition.', explain: 'Four groups of 3/5 make 12 fifths, or 12/5. The size of the pieces remains fifths.' }
    ],
    checkQuestions: [
      { difficulty: 'foundations', prompt: 'What does 6 × 1/5 mean?', choices: ['Six groups of one fifth', 'One group of six fifths only', 'Six divided by one', 'One fifth plus six'], answer: 0, hint: '', explain: 'A natural number times a fraction can be read as repeated groups of that fraction.' },
      { difficulty: 'foundations', prompt: 'Find 7 × 1/8.', choices: ['7/8', '7/56', '8/7', '1/56'], answer: 0, hint: '', explain: 'Seven groups of one eighth make seven eighths.' },
      { difficulty: 'foundations', prompt: 'Which expression is equal to 18 ÷ 6?', choices: ['1/6 × 18', '1/18 × 6', '6 × 18', '18 × 6'], answer: 0, hint: '', explain: 'Multiplication by 1/6 is equivalent to division by 6.' },
      { difficulty: 'foundations', prompt: 'Find 2/3 of 12.', choices: ['4', '6', '8', '18'], answer: 2, hint: '', explain: '12 ÷ 3 = 4 and 2 × 4 = 8.' },
      { difficulty: 'foundations', prompt: 'In 5 × 3/7, why does the denominator stay 7?', choices: ['Because the pieces are still sevenths', 'Because denominators never matter', 'Because 5 + 7 = 12', 'Because the numerator is smaller'], answer: 0, hint: '', explain: 'Repeated addition changes how many sevenths you have, not the size of each seventh.' },
      { difficulty: 'standard', prompt: 'Find 3 × 4/5.', choices: ['12/5', '12/15', '7/5', '4/15'], answer: 0, hint: '', explain: 'Three groups of 4/5 make 12/5.' },
      { difficulty: 'standard', prompt: 'Find 5/8 of 24.', choices: ['10', '15', '18', '20'], answer: 1, hint: '', explain: '24 ÷ 8 = 3, then 5 × 3 = 15.' },
      { difficulty: 'standard', prompt: 'Which is the best prediction for 10 × 3/4?', choices: ['Less than 10', 'Exactly 10', 'Greater than 10', 'Negative'], answer: 0, hint: '', explain: '3/4 is less than 1, so the product is less than 10.' },
      { difficulty: 'standard', prompt: 'Which is the best prediction for 6 × 5/4?', choices: ['Less than 6', 'Exactly 6', 'Greater than 6', 'Zero'], answer: 2, hint: '', explain: '5/4 is greater than 1, so the product is greater than 6.' },
      { difficulty: 'standard', prompt: 'Simplify 4 × 3/8.', choices: ['3/2', '12/32', '7/8', '1/2'], answer: 0, hint: '', explain: '4 × 3/8 = 12/8 = 3/2.' },
      { difficulty: 'standard', prompt: 'Which model best represents 3/4 × 20?', choices: ['Split 20 into 4 equal parts and keep 3', 'Make 20 groups of 4', 'Split 3 into 20 parts', 'Add 3 + 4 + 20'], answer: 0, hint: '', explain: 'Three-fourths of 20 means partition 20 into fourths and take three of the four equal groups.' },
      { difficulty: 'standard', prompt: 'What is 1/7 × 42?', choices: ['6', '7', '35', '49'], answer: 0, hint: '', explain: 'One seventh of 42 is 42 ÷ 7 = 6.' },
      { difficulty: 'challenge', prompt: 'Which statement about 4 × 2/5 and 2/5 × 4 is strongest?', choices: ['They have different products.', 'They have the same product but can represent different models.', 'Only the first is multiplication.', 'Only the second can be modelled.'], answer: 1, hint: '', explain: 'The commutative property gives the same product, but “four groups of 2/5” and “2/5 of 4” naturally use different models.' },
      { difficulty: 'challenge', prompt: 'A student claims 8 × 1/4 should be greater than 8 because multiplication makes numbers larger. Which response is best?', choices: ['Correct', '1/4 means one of four equal parts, so the product is 2', 'The product is 32', 'The product cannot be found'], answer: 1, hint: '', explain: 'One fourth of 8 is 8 ÷ 4 = 2. Multiplication by a proper fraction can make a positive number smaller.' },
      { difficulty: 'challenge', prompt: 'Which expression matches: “Take three-fifths of 25, then add 4”?', choices: ['3/5 × (25 + 4)', '(3/5 × 25) + 4', '25 ÷ (3/5 + 4)', '3/5 + 25 × 4'], answer: 1, hint: '', explain: 'First find three-fifths of 25, then add 4, so the multiplication belongs together.' },
      { difficulty: 'challenge', prompt: 'A camp has 36 water bottles and uses 2/3 of them. How many are used?', choices: ['12', '18', '24', '30'], answer: 2, hint: '', explain: '36 ÷ 3 = 12 and 2 × 12 = 24.' },
      { difficulty: 'challenge', prompt: 'Find 8 × 3/4 and classify the result.', choices: ['6, natural number', '6/4, proper fraction', '24/32, proper fraction', '8, natural number'], answer: 0, hint: '', explain: '8 × 3/4 = 24/4 = 6, which is a natural number.' },
      { difficulty: 'challenge', prompt: 'Which equation is false?', choices: ['1/5 × 30 = 30 ÷ 5', '3 × 2/7 = 6/7', '2/3 × 18 = 12', '4 × 3/5 = 12/20'], answer: 3, hint: '', explain: '4 × 3/5 = 12/5, not 12/20. The denominator remains 5 when counting groups of fifths.' }
    ],
    application: {
      title: 'Community Breakfast Planner',
      scenario: 'Your class is preparing a community breakfast. One tray uses 3/4 cup of oats. You need 6 trays. You also have 40 fruit cups, and 3/5 of them will be placed on the breakfast tables while the rest are saved for later.',
      tasks: [
        'Find the total amount of oats needed for 6 trays. Show the multiplication as repeated addition or groups.',
        'Find 3/5 of 40 fruit cups. Show how the denominator and numerator guide your steps.',
        'For each calculation, state whether your model is groups-of or part-of.',
        'Before calculating, explain why 3/5 of 40 must be less than 40.',
        'Write one sentence connecting a unit fraction such as 1/5 of 40 to division.'
      ],
      reveal: 'Oats: 6 × 3/4 = 18/4 = 9/2 = 4 1/2 cups. Fruit cups: 3/5 × 40 = 24 because 40 ÷ 5 = 8 and 3 × 8 = 24. The oats calculation naturally shows repeated groups; the fruit calculation naturally shows a fraction of a quantity. One fifth of 40 equals 40 ÷ 5.'
    },
    summary: [
      'A natural number times a fraction can be understood as repeated addition.',
      'A fraction times a natural number can represent a fraction of a quantity.',
      'The denominator names the size of the fractional units and does not change just because more groups are added.',
      'A proper fractional factor can make a positive quantity smaller.',
      'Multiplying by a unit fraction is equivalent to dividing by its denominator.',
      'Grade 6 focuses on fraction–natural-number multiplication, not a general fraction × fraction algorithm.'
    ],
    support: [
      'Rewrite natural × fraction multiplication as repeated addition.',
      'For “fraction of” questions, find one unit fraction first by dividing.',
      'Use a number line, counters, or fraction strips before writing the symbolic calculation.',
      'Make a less/equal/greater prediction before you calculate.'
    ],
    extension: [
      'Create two different word problems for 4 × 3/5 and 3/5 × 4. Explain why the diagrams would look different even though the products match.',
      'Find three different natural numbers that give a natural-number product when multiplied by 3/4. Explain the pattern.',
      'Write a multi-step expression involving a fraction of a quantity, addition, and parentheses, then solve it.'
    ],
    pat: {
      title: 'PAT-STYLE THINKING',
      prompt: 'A student says 8 × 3/4 must be greater than 8 because multiplication always increases a number. Which explanation best corrects the student?',
      answer: 'Three-fourths is less than 1, so 3/4 of 8 is only part of 8. Split 8 into 4 equal groups of 2 and take 3 groups: 6. Multiplication by a proper fraction can make a positive quantity smaller.'
    },
    review: [
      'I can show natural number × fraction as repeated addition.',
      'I can find a fraction of a natural-number quantity.',
      'I can explain groups-of versus part-of models.',
      'I can predict product size using the size of the fractional factor.',
      'I can connect multiplication by a unit fraction to division.',
      'I can solve and simplify fraction–natural-number multiplication problems.'
    ],
    next: { title: 'Lesson 4.3 · Relating Fractions to Equal Shares', slug: 'fractions-equal-shares', status: 'ready' }
  },

  'grade-6-math/decimals-fractions/fractions-equal-shares': {
    hook: 'Five pizzas are shared equally among four families. Does each family get 5 pizzas, 4/5 of a pizza, or more than 1 pizza? How can the fraction 5/4 tell the whole story?',
    prerequisites: [
      'Interpret unit fractions and fractions greater than one.',
      'Convert between improper fractions and mixed numbers.',
      'Simplify equivalent fractions.',
      'Multiply a fraction and a natural number from Lesson 4.2.',
      'Recall multiplication and division facts.',
      'Use the words quotient, numerator, denominator, factor, and product.'
    ],
    goals: [
      'model an equal-sharing situation in more than one way.',
      'describe equal sharing using a fraction.',
      'express a fraction as a division statement and a division statement as a fraction.',
      'interpret improper fractions and mixed numbers as equal shares.',
      'convert a fraction quotient to decimal form using division.',
      'choose whether a fraction, mixed number, or decimal is the most useful representation in a context.',
      'write one numerical expression for a multi-step equal-sharing situation.'
    ],
    estimatedTime: '90–120 min · easy to split into two sessions',
    materials: ['pencil', 'paper', 'rectangular paper models or counters', 'optional play money', 'optional calculator for checking only'],
    successCriteria: [
      'I can identify the quantity being shared and the number of equal shares.',
      'I can write total ÷ number of shares as numerator/denominator.',
      'I can model the same sharing situation in at least two ways.',
      'I can explain why an equal share can be greater than one whole.',
      'I can decide when a fraction is exact and when a decimal is more practical.',
      'I can use division to turn a fraction quotient into a decimal when appropriate.'
    ],
    bigIdea: 'A fraction can represent a quotient: the numerator is the quantity being shared and the denominator is the number of equal shares.',
    bigIdeaDetail: 'Equal sharing connects fractions and division. If 5 pizzas are shared among 4 families, the situation is 5 ÷ 4 and also 5/4. Each family receives 5/4 = 1 1/4 pizzas. Fractions, mixed numbers, and decimal numbers can describe the same quotient in different ways. The most useful form depends on the context: an exact fraction may be clearer for pieces of food, while a decimal can be more practical for money or measurement.',
    connection: 'Why can 5 ÷ 4, 5/4, 1 1/4, and 1.25 all describe the same amount?',
    concepts: [
      {
        title: 'Equal sharing starts with two questions',
        text: 'Ask: How much is being shared? How many equal shares are needed? The total quantity becomes the numerator and the number of shares becomes the denominator.',
        remember: 'total quantity ÷ number of shares = numerator/denominator.'
      },
      {
        title: 'One whole can be shared into fractional parts',
        text: 'If one chocolate bar is shared among four people, each person receives 1/4. The fraction shows one total item divided into four equal shares.',
        remember: 'Equal sharing does not require a natural-number answer.'
      },
      {
        title: 'Several wholes can produce a share greater than one',
        text: 'If 5 pizzas are shared among 4 families, give each family one whole first. One pizza remains, so split it into fourths. Each family receives 1 1/4 pizzas. The same amount is 5/4.',
        remember: 'An improper fraction can be a perfectly sensible equal share.'
      },
      {
        title: 'The fraction bar means division',
        text: 'The horizontal fraction bar is called a vinculum. It represents division. For example, 7/4 means 7 ÷ 4. This connection explains why a fraction can be converted to decimal form using division.',
        remember: 'Numerator ÷ denominator gives the quotient represented by the fraction.'
      },
      {
        title: 'Fractions can be exact when decimals repeat',
        text: 'If 5 bars are shared among 9 athletes, each gets exactly 5/9 of a bar. The decimal form repeats, so writing 0.555… is less convenient and a rounded decimal would only be an approximation.',
        remember: 'A fraction can sometimes communicate an exact value more clearly than a decimal.'
      },
      {
        title: 'Decimals can be practical for money and measurement',
        text: 'If $19 is shared equally by 2 people, $9.50 is usually more useful than $19/2 in a money context. Both are equal, but the decimal matches how money is written and used.',
        remember: 'Choose a representation that fits the situation, not just the form you used first.'
      },
      {
        title: 'Remainders depend on the context',
        text: 'A remainder can stay as leftover items, become part of another whole, or continue into a fraction or decimal. Sharing 7 litres among 4 people can continue to 1.75 L each, while packing 7 large objects into boxes may leave an object unpacked.',
        remember: 'Interpret the remainder using the meaning of the problem.'
      },
      {
        title: 'One expression can represent a whole sharing process',
        text: 'If 3 granola bars are each cut into 4 pieces and all 12 pieces are shared among 6 students, write (3 × 4) ÷ 6. Parentheses show that the pieces are created before they are shared.',
        remember: 'A complete expression should match the order of events in the story.'
      }
    ],
    misconceptions: [
      {
        title: '“The numerator is the number of people.”',
        text: 'In an equal-sharing fraction, the numerator is the quantity being shared. The denominator is the number of equal shares. Five pizzas among four families is 5/4, not 4/5.'
      },
      {
        title: '“An equal share must be less than one.”',
        text: 'If there is more than one whole available per group, each equal share can be greater than one. Five pizzas among four families gives 1 1/4 pizzas per family.'
      },
      {
        title: '“A decimal is always more exact.”',
        text: 'Some fractions become repeating decimals. 5/9 is exact, while a rounded decimal such as 0.56 is only an approximation.'
      },
      {
        title: '“A remainder always means leftover.”',
        text: 'In continuous quantities such as money, liquid, length, or food that can be divided, the remainder can often be shared further as a fraction or decimal.'
      },
      {
        title: '“I can write separate calculations in any order.”',
        text: 'A multi-step sharing situation should be represented by an expression that matches the story. Parentheses help show which action happens first.'
      }
    ],
    examples: [
      {
        title: 'Example 1 · One whole shared',
        problem: 'One chocolate bar is shared equally among 4 people. How much does each person receive?',
        steps: [
          'The total quantity being shared is 1 chocolate bar.',
          'There are 4 equal shares.',
          'Write the sharing as 1 ÷ 4.',
          'Write the same quotient as a fraction: 1/4.'
        ],
        answer: '1/4 of a chocolate bar each'
      },
      {
        title: 'Example 2 · More wholes than shares',
        problem: 'Five pizzas are shared equally among 4 families. How much does each family receive?',
        steps: [
          'Write the quotient: 5 ÷ 4 = 5/4.',
          'Give each family 1 whole pizza. That uses 4 pizzas.',
          'Split the final pizza into 4 equal pieces and give one piece to each family.',
          'Each share is 1 1/4 pizzas.'
        ],
        answer: '5/4 = 1 1/4 pizzas per family'
      },
      {
        title: 'Example 3 · Exact fraction or decimal?',
        problem: 'Five protein bars are shared equally among 9 athletes. How much does each athlete get?',
        steps: [
          'Write the quotient: 5 ÷ 9 = 5/9.',
          'The fraction 5/9 is already in simplest form.',
          'The decimal form repeats: 0.555… .',
          'The fraction 5/9 is an exact and clear answer for this sharing context.'
        ],
        answer: '5/9 of a bar each'
      },
      {
        title: 'Example 4 · Fraction bar as division',
        problem: 'Write 7/4 as a division statement, mixed number, and decimal.',
        steps: [
          'The fraction bar means division, so 7/4 = 7 ÷ 4.',
          '7 ÷ 4 gives 1 whole with 3 fourths remaining: 1 3/4.',
          'Continue the division using decimal place value: 7 ÷ 4 = 1.75.',
          'All three forms represent the same quotient.'
        ],
        answer: '7 ÷ 4 = 7/4 = 1 3/4 = 1.75'
      },
      {
        title: 'Example 5 · Money chooses a useful form',
        problem: '$19 is shared equally between 2 people. How much does each person receive?',
        steps: [
          'Write the sharing as 19 ÷ 2 = 19/2.',
          'The mixed number is 9 1/2.',
          'In a money context, one half dollar is $0.50.',
          'Write the final amount as $9.50.'
        ],
        answer: '$9.50 each'
      },
      {
        title: 'Example 6 · One complete expression',
        problem: 'Three granola bars are each cut into 4 equal pieces. The pieces are shared equally among 6 students. How many pieces does each student get?',
        steps: [
          'First find the total number of pieces: 3 × 4.',
          'Represent the whole situation as (3 × 4) ÷ 6.',
          'Evaluate the parentheses: 12 ÷ 6.',
          '12 ÷ 6 = 2.'
        ],
        answer: '2 pieces each'
      }
    ],
    vocabulary: [
      { term: 'Equal sharing', definition: 'Dividing a quantity into groups so every group receives the same amount.', example: '5 pizzas shared among 4 families is an equal-sharing situation.' },
      { term: 'Quotient', definition: 'The result of division.', example: 'The quotient of 7 ÷ 4 is 1.75, or 7/4.' },
      { term: 'Vinculum', definition: 'The horizontal bar in a fraction; it represents division.', example: 'The vinculum in 7/4 means 7 divided by 4.' },
      { term: 'Improper fraction', definition: 'A fraction whose numerator is greater than or equal to its denominator.', example: '5/4 is an improper fraction.' },
      { term: 'Mixed number', definition: 'A number written using a natural-number part and a proper fraction.', example: '1 1/4 is the mixed-number form of 5/4.' },
      { term: 'Decimal representation', definition: 'A way to write a number using place value to the right of a decimal point.', example: '1.25 is the decimal representation of 5/4.' },
      { term: 'Exact value', definition: 'A representation that gives the complete value without rounding.', example: '5/9 is exact.' },
      { term: 'Approximation', definition: 'A value close to the exact value, often created by rounding.', example: '0.56 is an approximation of 5/9.' },
      { term: 'Remainder', definition: 'An amount left after dividing into equal groups when the division is not complete in natural numbers.', example: '7 ÷ 4 has a remainder of 3 before continuing into fractions or decimals.' }
    ],
    explorePrompt: 'Use the Fair Share Studio to model the same equal share in different ways, translate between fraction and division forms, and decide which representation fits a real situation best. Focus on what the numerator and denominator mean in every scenario.',
    exploreMode: 'add',
    handsOn: {
      title: 'Paper Pizza Fair Share',
      instructions: [
        'Draw or cut 5 equal rectangles to represent 5 pizzas. Rectangles are easier than circles to partition accurately.',
        'Share the 5 rectangles equally among 4 labelled families by giving out wholes first, then partitioning the leftover.',
        'Start again with 5 new rectangles, but this time cut every rectangle into fourths before sharing.',
        'Compare the two methods and record each family’s share as a fraction and mixed number.',
        'Try the same idea with 3 wholes shared among 5 people.'
      ],
      reflect: 'Why do “share the wholes first” and “cut every whole first” produce the same equal share?'
    },
    practiceIntro: 'Foundations identifies the total and the number of shares. Standard translates among sharing stories, fractions, division, mixed numbers, and decimals. Challenge asks you to choose the best representation and interpret a sharing situation, not just calculate.',
    questions: [
      { difficulty: 'foundations', prompt: 'Three cakes are shared equally among 4 people. Which fraction represents each share?', choices: ['4/3', '3/4', '3/7', '1/4'], answer: 1, hint: 'The numerator is the quantity shared; the denominator is the number of equal shares.', explain: '3 cakes shared among 4 people is 3 ÷ 4 = 3/4 per person.' },
      { difficulty: 'foundations', prompt: 'Which division statement matches 7/5?', choices: ['5 ÷ 7', '7 ÷ 5', '7 ÷ 1', '5 ÷ 1'], answer: 1, hint: 'The fraction bar represents division.', explain: '7/5 means 7 divided by 5.' },
      { difficulty: 'foundations', prompt: 'Five pizzas shared among 4 families gives which mixed number per family?', choices: ['1 1/4', '1 4/5', '4 1/5', '5 1/4'], answer: 0, hint: 'Each family gets one whole, then one quarter of the remaining pizza.', explain: '5/4 = 1 1/4.' },
      { difficulty: 'standard', prompt: 'Write 7 ÷ 4 as a fraction.', choices: ['4/7', '7/4', '7/11', '1 3/4 only'], answer: 1, hint: 'Dividend becomes numerator; divisor becomes denominator.', explain: '7 ÷ 4 is represented by the fraction 7/4.' },
      { difficulty: 'standard', prompt: 'Which is the decimal form of 7/4?', choices: ['1.4', '1.25', '1.75', '7.4'], answer: 2, hint: 'Divide 7 by 4.', explain: '7 ÷ 4 = 1.75.' },
      { difficulty: 'standard', prompt: '$19 is shared equally between 2 people. Which final form is most practical?', choices: ['$9.50', '19/2 dollars only', '9 R1 dollars', '0.95 dollars'], answer: 0, hint: 'Think about how money is normally written.', explain: '19 ÷ 2 = 9.5, so $9.50 is the most practical money representation.' },
      { difficulty: 'challenge', prompt: 'Why might 5/9 be a better answer than 0.56 for five bars shared among nine athletes?', choices: ['5/9 is exact while 0.56 is rounded', 'Decimals are never allowed', '5/9 is larger', '0.56 is negative'], answer: 0, hint: 'Think about repeating decimals and rounding.', explain: '5/9 is exact. A finite value such as 0.56 is only an approximation of the repeating decimal.' },
      { difficulty: 'challenge', prompt: 'Which expression represents 3 bars cut into 4 pieces each, then shared among 6 students?', choices: ['3 × (4 ÷ 6)', '(3 × 4) ÷ 6', '3 + 4 ÷ 6', '6 ÷ (3 × 4)'], answer: 1, hint: 'Create all the pieces before sharing them.', explain: '(3 × 4) ÷ 6 matches the order of events: make 12 pieces, then share them among 6 students.' }
    ],
    checkQuestions: [
      { difficulty: 'foundations', prompt: 'One pan of lasagna is shared among 5 people. What fraction does each person receive?', choices: ['5/1', '1/5', '1/6', '5'], answer: 1, hint: '', explain: '1 whole shared among 5 people is 1 ÷ 5 = 1/5.' },
      { difficulty: 'foundations', prompt: 'Eight pies are shared among 3 families. Which fraction represents each family’s share?', choices: ['3/8', '8/3', '8/11', '1/3'], answer: 1, hint: '', explain: '8 total pies ÷ 3 shares = 8/3 per family.' },
      { difficulty: 'foundations', prompt: 'Which fraction represents 9 ÷ 4?', choices: ['4/9', '9/4', '13/4', '9/13'], answer: 1, hint: '', explain: 'The dividend 9 is the numerator and the divisor 4 is the denominator.' },
      { difficulty: 'foundations', prompt: 'Which division statement represents 3/7?', choices: ['7 ÷ 3', '3 ÷ 7', '3 × 7', '7 − 3'], answer: 1, hint: '', explain: 'A fraction bar represents division: 3/7 = 3 ÷ 7.' },
      { difficulty: 'foundations', prompt: 'What is 6 ÷ 6 as a fraction in simplest form?', choices: ['6/6 = 1', '1/6', '6', '0'], answer: 0, hint: '', explain: '6 ÷ 6 = 6/6 = 1.' },
      { difficulty: 'standard', prompt: 'Convert 9/4 to a mixed number.', choices: ['2 1/4', '1 4/9', '2 4/9', '4 1/9'], answer: 0, hint: '', explain: '9 ÷ 4 = 2 remainder 1, so 9/4 = 2 1/4.' },
      { difficulty: 'standard', prompt: 'Convert 3/4 to a decimal.', choices: ['0.34', '0.43', '0.75', '3.4'], answer: 2, hint: '', explain: '3 ÷ 4 = 0.75.' },
      { difficulty: 'standard', prompt: 'Seven litres of juice are shared equally among 5 people. Which expression represents each share?', choices: ['7 ÷ 5', '5 ÷ 7', '7 × 5', '7 − 5'], answer: 0, hint: '', explain: 'The total 7 litres is divided among 5 equal shares.' },
      { difficulty: 'standard', prompt: 'Which final representation is most natural for $15 shared between 2 people?', choices: ['$7.50', '7 R1 dollars', '15/2 only', '$0.75'], answer: 0, hint: '', explain: '$15 ÷ 2 = $7.50, which matches normal money notation.' },
      { difficulty: 'standard', prompt: 'Which statement about 5/9 and its decimal form is true?', choices: ['5/9 is exact and the decimal repeats', '5/9 equals exactly 0.56', '5/9 cannot be divided', 'The decimal must be a natural number'], answer: 0, hint: '', explain: '5 ÷ 9 produces a repeating decimal, so 5/9 is often the cleaner exact representation.' },
      { difficulty: 'standard', prompt: 'What does the vinculum in 11/4 represent?', choices: ['Addition', 'Subtraction', 'Multiplication', 'Division'], answer: 3, hint: '', explain: 'The horizontal fraction bar represents division.' },
      { difficulty: 'standard', prompt: 'Five pizzas are shared among four families. Which pair gives equivalent forms of one share?', choices: ['5/4 and 1 1/4', '4/5 and 1 1/4', '5/4 and 0.54', '4/5 and 1.25'], answer: 0, hint: '', explain: '5/4 = 1 1/4.' },
      { difficulty: 'challenge', prompt: 'Why is 4/5 the wrong fraction for 5 pizzas shared among 4 families?', choices: ['It reverses the total and number of shares', 'It is not a fraction', 'It is greater than 1', 'It cannot be simplified'], answer: 0, hint: '', explain: 'The total quantity 5 should be the numerator and the 4 equal shares should be the denominator.' },
      { difficulty: 'challenge', prompt: 'A 10 m ribbon is cut into 4 equal pieces. How long is each piece?', choices: ['2.5 m', '4 m', '6 m', '40 m'], answer: 0, hint: '', explain: '10 ÷ 4 = 10/4 = 2.5 m.' },
      { difficulty: 'challenge', prompt: 'Which expression best represents 4 boxes with 6 muffins each, shared equally among 3 friends?', choices: ['(4 × 6) ÷ 3', '4 × (6 ÷ 3) only as the story order', '3 ÷ (4 × 6)', '4 + 6 + 3'], answer: 0, hint: '', explain: 'First determine the total muffins in the 4 boxes, then share that total among 3 friends.' },
      { difficulty: 'challenge', prompt: 'A student writes 6 ÷ 8 = 8/6. What is the error?', choices: ['The numerator and denominator are reversed', 'The fraction should be 14/1', 'Division cannot be a fraction', '6 must be larger than 8'], answer: 0, hint: '', explain: '6 ÷ 8 is 6/8, which simplifies to 3/4.' },
      { difficulty: 'challenge', prompt: 'Which is the strongest reason to leave 5 bars shared among 9 athletes as 5/9?', choices: ['It is the exact share and the decimal repeats', 'Fractions are always shorter', 'Decimals are forbidden', '5/9 is a natural number'], answer: 0, hint: '', explain: '5/9 gives the exact value, while a rounded decimal would be approximate.' },
      { difficulty: 'challenge', prompt: 'Three bars are cut into 4 equal pieces each and shared among 6 students. How many pieces does each receive?', choices: ['1', '2', '3', '4'], answer: 1, hint: '', explain: '(3 × 4) ÷ 6 = 12 ÷ 6 = 2 pieces each.' }
    ],
    application: {
      title: 'Community Food Share Station',
      scenario: 'A neighbourhood food-share event has 7 large trays of flatbread for 5 tables, $63 in snack vouchers for 6 volunteers, and 3 large fruit bars that will each be cut into 8 pieces and shared among 4 groups.',
      tasks: [
        'Find the equal flatbread share for each table. Show it as a fraction and mixed number.',
        'Find the equal voucher amount for each volunteer. Choose the most useful final representation for money.',
        'Write one expression for the fruit-bar situation and determine how many pieces each group receives.',
        'For one of the three situations, draw or describe two different equal-sharing models.',
        'Explain why the best final representation is not always the same for food, money, and countable pieces.'
      ],
      reveal: 'Flatbread: 7 ÷ 5 = 7/5 = 1 2/5 trays per table. Vouchers: $63 ÷ 6 = $10.50 per volunteer; the decimal is practical for money. Fruit bars: (3 × 8) ÷ 4 = 24 ÷ 4 = 6 pieces per group. Different contexts make fractions, mixed numbers, decimals, or natural-number counts more useful.'
    },
    summary: [
      'A fraction can represent an equal-sharing quotient.',
      'The numerator is the quantity being shared; the denominator is the number of equal shares.',
      'The fraction bar (vinculum) represents division.',
      'Improper fractions and mixed numbers can describe shares greater than one.',
      'Fractions can be exact while some decimal forms repeat.',
      'Decimals are often practical for money and measurement.',
      'Remainders must be interpreted according to the situation.'
    ],
    support: [
      'Write “total ÷ shares” before writing the fraction.',
      'Use rectangles or strips to model equal shares; they are easy to partition accurately.',
      'For an improper share, give out whole units first and then partition the leftover.',
      'Use long division only after you can explain what the fraction and quotient mean.'
    ],
    extension: [
      'Find a sharing situation where a fraction is clearly better than a rounded decimal, and explain why.',
      'Create a context where the same remainder should be left over, rounded up, and continued into a decimal depending on the story.',
      'Write one multi-step equal-sharing expression that uses parentheses and explain the order of operations.'
    ],
    pat: {
      title: 'PAT-STYLE THINKING',
      prompt: 'Four students share 7 identical sandwiches equally. Which statement best represents each student’s share?',
      answer: 'Each student receives 7/4 = 1 3/4 sandwiches. The total quantity being shared, 7, is the numerator; the 4 equal shares form the denominator. The share is greater than one because there are more sandwiches than students.'
    },
    review: [
      'I can model an equal-sharing situation in more than one way.',
      'I can write sharing as both division and a fraction.',
      'I can convert improper fraction shares to mixed numbers.',
      'I can convert suitable fraction quotients to decimal form using division.',
      'I can choose a useful representation for a context.',
      'I can write one expression for a multi-step equal-sharing situation.'
    ],
    next: { title: 'Lesson 4.4 · Adding & Subtracting Decimal Numbers', slug: 'adding-subtracting-decimals', status: 'planned' }
  }
};
