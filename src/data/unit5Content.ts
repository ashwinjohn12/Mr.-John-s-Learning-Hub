import type { TopicContent } from './topicContent';

export const unit5Content: Record<string, TopicContent> = {
  'grade-6-math/ratios-rates/relating-fractions-decimals-percentages': {
    hook: 'A $60 game is 25% off. Is the discount $25, $15, or something else? Percent makes much more sense when you connect it to fractions, decimals, and a ratio out of 100.',
    prerequisites: [
      'Recognize equivalent fractions and simplify familiar fractions.',
      'Connect common fractions to decimal numbers, such as 1/2 = 0.5 and 1/4 = 0.25.',
      'Multiply and divide natural numbers and decimal numbers.',
      'Interpret a ratio as a comparison of two quantities.',
      'Use multiplication or division to scale a relationship.'
    ],
    goals: [
      'connect fractions, decimal numbers, ratios, and percentages that describe the same part-whole relationship.',
      'explain why a percentage is a comparison to 100.',
      'use proportional reasoning to determine a percent of a number.',
      'work backward to find a missing whole or missing percentage.',
      'solve real-life problems involving discounts, tax, surveys, and other percentages within 100%.'
    ],
    estimatedTime: '90–120 min',
    materials: ['pencil', 'paper', 'optional 10 × 10 grid paper', 'calculator for checking only'],
    successCriteria: [
      'I can show the same part-whole relationship as a fraction, decimal, and percentage.',
      'I can explain what the whole is in a percentage problem.',
      'I can use 100 as a reference point and keep both parts of a proportion in the same relationship.',
      'I can find common benchmark percentages such as 50%, 25%, 10%, 5%, and 1%.',
      'I can tell whether a problem is asking for the part, the percent, or the whole.',
      'I can check whether my answer is reasonable before I move on.'
    ],
    bigIdea: 'A percentage is a part-whole relationship written as an equivalent ratio out of 100.',
    bigIdeaDetail: 'Fractions, decimal numbers, ratios, and percentages can describe the same amount in different ways. For example, 1/4, 0.25, 25 : 100, and 25% all describe the same part of a whole. Percentage problems are proportional: when one side of the relationship is scaled, the other side must be scaled by the same factor. You can use this idea to find a part, a percent, or the whole without relying on a shortcut you do not understand.',
    connection: 'If 25% means 25 out of 100, why is 25% of 60 not equal to 25?',
    concepts: [
      {
        title: 'Percent means “out of 100”',
        text: 'The symbol % means percent, or “per hundred.” A percentage compares a part with a whole of 100. So 37% means 37 out of 100, which can be written as 37/100 or 0.37.',
        remember: 'The percent tells a relationship, not a fixed amount. 25% can represent different amounts depending on the whole.'
      },
      {
        title: 'Fractions, decimals, and percentages can name the same amount',
        text: 'The same part-whole relationship can be represented in several forms. For example, 3/4 = 75/100 = 0.75 = 75%. Moving between forms helps you choose a useful strategy for a problem.',
        remember: 'Changing the representation does not change the amount.'
      },
      {
        title: 'A proportion keeps the relationship equal',
        text: 'A proportion shows two equivalent ratios. If 20% of a group is being described, you can think of 20 : 100 and compare it with part : whole. Scale both parts of the relationship by the same factor so the ratios stay equivalent.',
        remember: 'Do the same scaling to both parts of the ratio. Do not change only one number.'
      },
      {
        title: 'Benchmark percentages make mental math easier',
        text: 'Useful benchmarks include 50% = one-half, 25% = one-quarter, 10% = one-tenth, 5% = half of 10%, and 1% = one-hundredth. More complicated percentages can often be built from these. For example, 15% = 10% + 5%.',
        remember: 'Look for a friendly percentage before reaching for a longer calculation.'
      },
      {
        title: 'You might be finding the part, the percent, or the whole',
        text: 'Read the question before calculating. “What is 30% of 80?” asks for the part. “18 is what percent of 60?” asks for the percent. “12 is 25% of what number?” asks for the whole. The relationship is the same, but the missing value changes.',
        remember: 'Name the missing piece first: part, percent, or whole.'
      },
      {
        title: 'Percent of a number can be calculated in more than one correct way',
        text: 'You can use a proportion, a benchmark strategy, or multiply the whole by the percentage and divide by 100. For 30% of 60: 60 × 30 ÷ 100 = 18. A benchmark method gives the same result because 10% of 60 is 6, so 30% is 3 × 6 = 18.',
        remember: 'A good strategy should make the proportional relationship visible and give a reasonable answer.'
      },
      {
        title: 'Real-life percent problems often have more than one step',
        text: 'A discount tells the amount taken off, not automatically the final price. A tax tells the extra amount added. Read the wording carefully, calculate the percentage amount, and then decide whether to add or subtract it from the original amount.',
        remember: 'Discount: subtract. Tax: add.'
      }
    ],
    misconceptions: [
      {
        title: '“25% of a number means subtract 25.”',
        text: 'Twenty-five percent is a relationship, not the number 25. For a whole of 60, 25% is one-quarter of 60, which is 15.'
      },
      {
        title: '“If the percent is 40%, the answer must be 40.”',
        text: 'The percent describes how large the part is compared with the whole. Forty percent of 25 is 10, while 40% of 200 is 80.'
      },
      {
        title: '“A 20% discount means the final price is 20% of the original.”',
        text: 'A 20% discount removes 20% of the original price, so 80% of the original price remains.'
      },
      {
        title: '“I can scale one side of a proportion but leave the other side alone.”',
        text: 'That changes the relationship. Equivalent ratios stay equivalent only when both terms are scaled by the same factor.'
      },
      {
        title: '“I should always cross-multiply.”',
        text: 'Cross-multiplication can hide the relationship you are trying to understand. In Grade 6, focus on equivalent ratios, benchmark percentages, and scaling both parts of the proportion.'
      }
    ],
    examples: [
      {
        title: 'Example 1 · Same amount, four forms',
        problem: 'Write 3/4 as a ratio out of 100, a decimal number, and a percentage.',
        steps: [
          'Make an equivalent fraction with denominator 100: 3/4 = 75/100.',
          'Read 75/100 as the ratio 75 : 100.',
          'Write 75/100 as a decimal: 0.75.',
          'Because percent means out of 100, 75/100 = 75%.'
        ],
        answer: '3/4 = 75/100 = 0.75 = 75%'
      },
      {
        title: 'Example 2 · Find the part',
        problem: 'Find 30% of 60.',
        steps: [
          'Identify the whole: 60. The missing value is the part.',
          'Use a benchmark: 10% of 60 is 6.',
          'Thirty percent is three groups of 10%, so 3 × 6 = 18.',
          'Check: 18 is less than half of 60, which makes sense because 30% is less than 50%.'
        ],
        answer: '18'
      },
      {
        title: 'Example 3 · Find the whole',
        problem: '12 is 25% of what number?',
        steps: [
          'The missing value is the whole.',
          'Recognize that 25% = 1/4.',
          'If one-quarter of the whole is 12, four equal quarters make the whole.',
          'Calculate 12 × 4 = 48.'
        ],
        answer: '48'
      },
      {
        title: 'Example 4 · Discount and final price',
        problem: 'A $60 game is 25% off. What is the discount, and what is the sale price?',
        steps: [
          'Find 25% of $60. Since 25% = 1/4, the discount is $60 ÷ 4 = $15.',
          'The discount is the amount taken off, so subtract it from the original price.',
          '$60 − $15 = $45.',
          'Check: a 25% discount leaves 75% of the original price, and $45 is 75% of $60.'
        ],
        answer: 'Discount: $15; sale price: $45'
      }
    ],
    vocabulary: [
      { term: 'Percent', definition: 'A comparison of a quantity to 100.', example: '35% means 35 out of 100.' },
      { term: 'Percentage', definition: 'A number written with the percent symbol that describes a part-whole relationship out of 100.', example: 'If 18 of 60 students chose an option, the percentage is 30%.' },
      { term: 'Ratio', definition: 'A comparison of two quantities in a specific order.', example: '25 : 100 compares 25 parts with 100 total parts.' },
      { term: 'Proportion', definition: 'A statement showing that two ratios are equivalent.', example: '25 : 100 = 15 : 60.' },
      { term: 'Proportional relationship', definition: 'A relationship in which equivalent ratios keep the same comparison as quantities scale.', example: '10% of 80 is 8, so 20% of 80 is 16.' },
      { term: 'Whole', definition: 'The total quantity that represents 100% in a percentage problem.', example: 'In 25% of 80, the whole is 80.' },
      { term: 'Part', definition: 'The amount being compared with the whole.', example: 'In 25% of 80 = 20, the part is 20.' },
      { term: 'Benchmark percentage', definition: 'A familiar percentage that is useful for mental calculations.', example: '50%, 25%, 10%, 5%, and 1% are useful benchmarks.' },
      { term: 'Discount', definition: 'An amount subtracted from an original price.', example: 'A 25% discount on $60 is $15.' }
    ],
    explorePrompt: 'Use the Percent Lab in order. First connect one amount to several representations, then predict a percent of a number, and finally solve missing-value challenges where the part, percent, or whole may be unknown.',
    exploreMode: 'compare',
    handsOn: {
      title: 'Build a 100-Square Percent Model',
      instructions: [
        'Draw or print a 10 × 10 grid so there are 100 equal squares.',
        'Shade 25 squares. Label the model as 25/100, 0.25, and 25%.',
        'Shade a new grid to show 40%. Write a simplified fraction and decimal for the same amount.',
        'Choose a percentage that can be built from 10% and 5%, such as 15%, 35%, or 65%. Explain how your shading connects to the benchmark percentages.',
        'Create one challenge for someone else: give either the part, the percent, or the whole and leave one value missing.'
      ],
      reflect: 'How does the 100-square model help explain why the percent stays the same even when the real-life whole is not 100?'
    },
    practiceIntro: 'Start with Foundations to connect fractions, decimals, and percentages. Standard questions ask you to find a part or whole. Challenge questions mix representations and real-life decisions. Use the hint only after you have made a first attempt.',
    questions: [
      { difficulty: 'foundations', prompt: 'Which decimal is equal to 25%?', choices: ['0.025', '0.25', '2.5', '25.0'], answer: 1, hint: '25% means 25 out of 100.', explain: '25% = 25/100 = 0.25.' },
      { difficulty: 'foundations', prompt: 'Which percentage is equal to 3/5?', choices: ['35%', '50%', '60%', '80%'], answer: 2, hint: 'Write 3/5 with denominator 100.', explain: '3/5 = 60/100, so it is 60%.' },
      { difficulty: 'foundations', prompt: 'What is 10% of 90?', choices: ['9', '10', '18', '81'], answer: 0, hint: 'Ten percent is one-tenth.', explain: '90 ÷ 10 = 9, so 10% of 90 is 9.' },
      { difficulty: 'standard', prompt: 'What is 25% of 80?', choices: ['20', '25', '40', '60'], answer: 0, hint: '25% is one-quarter.', explain: 'One-quarter of 80 is 20.' },
      { difficulty: 'standard', prompt: 'What is 40% of 25?', choices: ['10', '12.5', '15', '40'], answer: 0, hint: 'Find 20% or 10% first, then scale.', explain: '10% of 25 is 2.5, so 40% is 4 × 2.5 = 10.' },
      { difficulty: 'standard', prompt: '12 is 25% of what number?', choices: ['24', '36', '48', '60'], answer: 2, hint: '25% is one-quarter. If one quarter is 12, how large are four quarters?', explain: '12 × 4 = 48, so 12 is 25% of 48.' },
      { difficulty: 'standard', prompt: '18 is what percent of 60?', choices: ['18%', '25%', '30%', '42%'], answer: 2, hint: 'Ask what fraction 18/60 represents, or scale 60 to 100.', explain: '18/60 = 3/10 = 30/100, so 18 is 30% of 60.' },
      { difficulty: 'challenge', prompt: 'A $120 jacket is 25% off. What is the discount?', choices: ['$25', '$30', '$90', '$95'], answer: 1, hint: 'Find one-quarter of $120.', explain: '25% of $120 is $30. That is the discount amount; the sale price would be $90.' },
      { difficulty: 'challenge', prompt: 'Which statement is true?', choices: ['20% of every number is 20.', 'A 20% discount leaves 20% of the price.', '15% can be found by adding 10% and 5%.', 'To keep a proportion equal, only the whole must be scaled.'], answer: 2, hint: 'Think about benchmark percentages and equivalent ratios.', explain: '15% = 10% + 5%, so the two benchmark amounts can be added.' }
    ],
    checkQuestions: [
      { difficulty: 'foundations', prompt: 'What fraction out of 100 represents 42%?', choices: ['42/10', '42/100', '100/42', '4.2/100'], answer: 1, hint: '', explain: 'Percent means out of 100, so 42% = 42/100.' },
      { difficulty: 'foundations', prompt: 'Which percentage is equal to 0.6?', choices: ['6%', '60%', '0.6%', '600%'], answer: 1, hint: '', explain: '0.6 = 60/100 = 60%.' },
      { difficulty: 'foundations', prompt: 'Which fraction is equal to 75%?', choices: ['1/4', '1/3', '2/3', '3/4'], answer: 3, hint: '', explain: '75% = 75/100 = 3/4.' },
      { difficulty: 'foundations', prompt: 'What is 50% of 36?', choices: ['18', '25', '36', '72'], answer: 0, hint: '', explain: '50% means one-half, and half of 36 is 18.' },
      { difficulty: 'standard', prompt: 'What is 20% of 70?', choices: ['7', '14', '20', '56'], answer: 1, hint: '', explain: '10% of 70 is 7, so 20% is 14.' },
      { difficulty: 'standard', prompt: 'What is 15% of 200?', choices: ['15', '20', '30', '45'], answer: 2, hint: '', explain: '10% of 200 is 20 and 5% is 10, so 15% is 30.' },
      { difficulty: 'standard', prompt: '8 is 20% of what number?', choices: ['16', '32', '40', '80'], answer: 2, hint: '', explain: '20% is one-fifth. If one-fifth is 8, the whole is 8 × 5 = 40.' },
      { difficulty: 'standard', prompt: '21 is what percent of 70?', choices: ['21%', '30%', '35%', '49%'], answer: 1, hint: '', explain: '21/70 = 3/10 = 30%.' },
      { difficulty: 'standard', prompt: 'A $60 item is 25% off. What is the sale price?', choices: ['$15', '$35', '$45', '$75'], answer: 2, hint: '', explain: 'The discount is $15, so the sale price is $60 − $15 = $45.' },
      { difficulty: 'challenge', prompt: 'A student says 30% of 50 is 30 because “percent means the percent number.” What is the best correction?', choices: ['30% of any number is always 30.', '30% means 30/100 of the whole, so 30% of 50 is 15.', '30% means subtract 30 from 50.', '30% means divide 50 by 30.'], answer: 1, hint: '', explain: 'A percentage is a relationship to the whole. 30/100 × 50 = 15.' },
      { difficulty: 'challenge', prompt: 'Which gives the same result as 35% of 80?', choices: ['30% of 80 + 5% of 80', '35 + 80', '80 − 35', '3.5% of 80 × 100'], answer: 0, hint: '', explain: '35% can be decomposed into 30% + 5%, so the matching parts can be added.' },
      { difficulty: 'challenge', prompt: 'A class has 24 students. Eighteen are present. What percentage of the class is present?', choices: ['18%', '24%', '50%', '75%'], answer: 3, hint: '', explain: '18/24 = 3/4 = 75%.' }
    ],
    application: {
      title: 'Sale Day Percent Mission',
      scenario: 'You are the price checker for a school game night. A board game costs $60 and is 25% off. A second game costs $80 and is 15% off. After discounts, a 5% tax is added to the price of the second game.',
      tasks: [
        'Find the discount and sale price of the $60 game.',
        'Find the discount and sale price of the $80 game.',
        'Find 5% of the discounted $80 game price and then the final price including tax.',
        'Explain which benchmark percentages you used and why they were helpful.',
        'Bonus: Explain why a larger percentage discount does not always guarantee a larger dollar discount when original prices are different.'
      ],
      reveal: 'Game 1: 25% of $60 = $15, so the sale price is $45. Game 2: 15% of $80 = $12, so the sale price is $68. Five percent of $68 is $3.40, so the final price is $71.40. Useful benchmarks include 25% = 1/4, 15% = 10% + 5%, and 5% = half of 10%.'
    },
    summary: [
      'Percent means a comparison to 100.',
      'Fractions, decimals, ratios, and percentages can describe the same part-whole relationship.',
      'Equivalent ratios and benchmark percentages help you find a percent of a number.',
      'A percentage problem may ask for the part, the percent, or the whole.',
      'Discounts are subtracted from the original amount; taxes are added.',
      'Reasonable estimates help catch mistakes.'
    ],
    support: [
      'Use a 10 × 10 grid to make the “out of 100” meaning visible.',
      'Start with 50%, 25%, 10%, 5%, and 1% before combining percentages.',
      'Label the three pieces in each problem: percent, part, whole.',
      'Write an equivalent ratio beside your calculation so you can see how both parts scale.'
    ],
    extension: [
      'Find three different strategies for 35% of 240 and compare which feels most efficient.',
      'Create a sale problem where the larger percentage discount saves fewer dollars than the smaller percentage discount.',
      'Invent a missing-whole problem and solve it using both a proportion and a benchmark-percentage strategy.',
      'Explain why 1% is a powerful benchmark even when the final percentage is not a multiple of 10.'
    ],
    pat: {
      title: 'PAT-STYLE THINKING',
      prompt: 'A student says that 25% of 80 is 25 because “25% means 25 out of 100.” Which response best explains the error? A) 25% always equals 20. B) The 25 describes a ratio out of 100; the actual part depends on the whole, so 25% of 80 is 20. C) Percent cannot be used when the whole is not 100. D) 25% of 80 is found by 80 − 25.',
      answer: 'B. The percent describes the relationship. Since 25% is one-quarter, one-quarter of 80 is 20.'
    },
    review: [
      'I can connect a fraction, decimal number, ratio, and percentage that represent the same amount.',
      'I can explain percent as a comparison to 100.',
      'I can find a percent of a number using proportional reasoning.',
      'I can work backward to find a missing whole or missing percentage.',
      'I can solve multi-step discount and tax problems and explain my strategy.'
    ],
    next: { title: 'Equivalent Ratios', slug: 'equivalent-ratios', status: 'planned' }
  }
};
