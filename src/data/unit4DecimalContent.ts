import type { TopicContent } from './topicContent';

export const unit4DecimalContent: Record<string, TopicContent> = {
  'grade-6-math/decimals-fractions/adding-subtracting-decimals': {
    hook: 'In Lesson 4.3, you saw that 7/4 can also be written as 1.75. Now imagine combining 1.75 m and 0.8 m. A student lines up the last digits and gets 1.83 m. What went wrong?',
    prerequisites: [
      'Read decimal numbers using place value, including tenths, hundredths, and thousandths.',
      'Add and subtract natural numbers using place-value strategies and standard algorithms.',
      'Regroup across place values when needed.',
      'Recognize that equivalent fractions and decimals can represent the same quantity.',
      'Use money and metric measurements written as decimal numbers.',
      'Estimate sums and differences with friendly numbers.'
    ],
    goals: [
      'explain why decimal addition and subtraction depend on place value.',
      'align decimal numbers by place value before using a standard algorithm.',
      'use placeholder zeros without changing a decimal number’s value.',
      'add and subtract decimal numbers with different numbers of decimal places.',
      'solve money, measurement, population, and time problems using addition or subtraction.',
      'estimate to decide whether a decimal answer is reasonable.'
    ],
    estimatedTime: '80–100 min · easy to split into two sessions',
    materials: ['pencil', 'paper', 'optional place-value chart', 'optional play money or calculator for checking only'],
    successCriteria: [
      'I can explain that digits must line up with digits that represent the same place-value unit.',
      'I can use decimal points as a guide for lining up ones, tenths, hundredths, and thousandths.',
      'I can add placeholder zeros when they help me see place value clearly.',
      'I can regroup across the decimal point and explain the place-value exchange.',
      'I can choose addition or subtraction from the meaning of a problem, not only from a key word.',
      'I can estimate before or after calculating to check whether my answer makes sense.'
    ],
    bigIdea: 'Decimal addition and subtraction work because we combine or compare the same place-value units.',
    bigIdeaDetail: 'This connects directly to fractions. In Lesson 4.1, fractions had to use the same-sized fractional units before they could be combined. Decimal numbers already use named base-ten units such as ones, tenths, hundredths, and thousandths. When we line up decimal points, we are really lining up equal place-value units. The standard algorithms are efficient because each column combines or compares the same kind of unit.',
    connection: 'How is lining up tenths with tenths similar to changing fractions so they use the same-sized pieces?',
    concepts: [
      {
        title: 'Fractions and decimals both name units',
        text: 'A decimal such as 2.37 can be read as 2 ones, 3 tenths, and 7 hundredths. Just as thirds and fourths are different fractional units, tenths and hundredths are different place-value units. Strong decimal work starts by noticing what each digit represents.',
        remember: 'The decimal point separates the ones place from the fractional place-value units.'
      },
      {
        title: 'Align by place value, not by the last digit',
        text: 'For 12.45 + 8.7632, place the ones under the ones, tenths under tenths, and so on. Lining up the decimal points is a fast way to guarantee that the place values match.',
        remember: 'Do not slide one number so the final digits line up. Match the decimal points and place values instead.'
      },
      {
        title: 'Placeholder zeros can make the units visible',
        text: '12.45, 12.450, and 12.4500 are equal values. Adding zeros to the right of a decimal number does not change its value, but it can make subtraction easier to organize: 12.4500 − 8.7632.',
        remember: 'A zero to the right of the final decimal digit can be useful without changing the number.'
      },
      {
        title: 'Regrouping is still a place-value exchange',
        text: 'If there are not enough hundredths to subtract, regroup 1 tenth as 10 hundredths. If needed, regroup 1 one as 10 tenths. The decimal point does not stop regrouping; it simply marks where the place-value units change.',
        remember: 'Regrouping across the decimal point follows the same base-ten idea as regrouping with natural numbers.'
      },
      {
        title: 'Whole-number and decimal calculations can be scaled versions of each other',
        text: '153 + 481 = 634. Because 15.3 and 48.1 are each one tenth as large, 15.3 + 48.1 = 63.4, also one tenth as large. Place-value scaling helps you predict where the decimal belongs and whether an answer is reasonable.',
        remember: 'If every number in a sum is divided by 10, the sum is also divided by 10.'
      },
      {
        title: 'The story tells you which operation to use',
        text: 'A total amount usually requires combining quantities, while a comparison or change may require subtraction. But do not depend only on words such as “more,” “left,” or “difference.” Ask what quantities are known and what the problem is asking you to find.',
        remember: 'Represent the situation before calculating.'
      },
      {
        title: 'Estimation is an error detector',
        text: 'Before calculating 47.83 + 12.12, you can estimate 48 + 12 ≈ 60. An exact answer near 60 is reasonable; an answer such as 599.5 or 6.0 would signal a place-value mistake.',
        remember: 'A quick estimate can catch a misplaced decimal point even when your algorithm looks neat.'
      }
    ],
    misconceptions: [
      {
        title: '“Line up the last digits.”',
        text: 'In 5.8 + 0.47, the 8 is in the tenths place and the 7 is in the hundredths place. They should not be placed in the same column. Write 5.80 + 0.47 so equal place values line up.'
      },
      {
        title: '“Adding a zero changes the value.”',
        text: '5.8 and 5.80 name the same amount. The extra zero says there are 0 additional hundredths; it does not add a new quantity.'
      },
      {
        title: '“The decimal point can be placed after I finish.”',
        text: 'Decimal placement is not a decoration added at the end. The decimal point organizes the place-value columns before and during the calculation.'
      },
      {
        title: '“More decimal digits means a larger number.”',
        text: '3.8 is greater than 3.745 even though 3.745 has more digits. Compare equal place values: 3.800 > 3.745.'
      },
      {
        title: '“For subtraction, subtract the smaller digit from the larger digit in each column.”',
        text: 'The order of the numbers matters. Use regrouping when the digit in the top number is too small; do not reverse the subtraction inside one column.'
      }
    ],
    examples: [
      {
        title: 'Example 1 · Scale a familiar calculation',
        problem: 'How are 153 + 481 and 15.3 + 48.1 related?',
        steps: [
          'Calculate the natural-number sum: 153 + 481 = 634.',
          '15.3 is one tenth of 153 and 48.1 is one tenth of 481.',
          'So the decimal sum should be one tenth of 634.',
          '15.3 + 48.1 = 63.4.'
        ],
        answer: '63.4; the decimal sum is one tenth of 634.'
      },
      {
        title: 'Example 2 · Add different decimal lengths',
        problem: 'Find 12.45 + 8.7632.',
        steps: [
          'Line up the decimal points so ones, tenths, hundredths, and thousandths match.',
          'You may write 12.45 as 12.4500 to make the columns easier to see.',
          'Add from the smallest place value toward the left, regrouping when needed.',
          'The sum is 21.2132.'
        ],
        answer: '21.2132'
      },
      {
        title: 'Example 3 · Subtract with placeholder zeros',
        problem: 'Find 12.45 − 8.7632.',
        steps: [
          'Rewrite 12.45 as 12.4500 so both numbers show the same place-value columns.',
          'Align the decimal points.',
          'Regroup through the place-value columns as needed.',
          'Subtract to get 3.6868.'
        ],
        answer: '3.6868'
      },
      {
        title: 'Example 4 · Money and change',
        problem: 'A student buys chips for $2.50, two chocolate bars at $1.75 each, and a drink for $2.25. How much change from $20?',
        steps: [
          'Find the cost of two chocolate bars: $1.75 + $1.75 = $3.50.',
          'Add all purchases: $2.50 + $3.50 + $2.25 = $8.25.',
          'Subtract the total cost from $20.00.',
          '$20.00 − $8.25 = $11.75.'
        ],
        answer: '$11.75 change'
      },
      {
        title: 'Example 5 · Race-time improvement',
        problem: 'Anya swims 28.457 s at one meet and 27.989 s at the next. By how much did her time improve?',
        steps: [
          'A lower race time is faster, so improvement means the time decreased.',
          'Subtract the new time from the old time: 28.457 − 27.989.',
          'Align the decimal points and regroup.',
          'The difference is 0.468 seconds.'
        ],
        answer: '0.468 s faster'
      },
      {
        title: 'Example 6 · Compare population changes',
        problem: 'Grande Prairie changes from 64,141 to 69,377 people. Red Deer changes from 100,844 to 112,917. Which increase is greater?',
        steps: [
          'Grande Prairie increase: 69,377 − 64,141 = 5,236.',
          'Red Deer increase: 112,917 − 100,844 = 12,073.',
          'Compare the two increases.',
          '12,073 is greater than 5,236.'
        ],
        answer: 'Red Deer, with an increase of 12,073 people.'
      }
    ],
    vocabulary: [
      { term: 'Place value', definition: 'The value a digit has because of its position in a number.', example: 'In 4.372, the 7 represents 7 hundredths.' },
      { term: 'Decimal point', definition: 'The symbol that separates the ones place from decimal place-value positions.', example: 'In 12.45, the decimal point is between the 2 ones and 4 tenths.' },
      { term: 'Tenths', definition: 'The first place-value position to the right of the decimal point.', example: '0.6 means 6 tenths.' },
      { term: 'Hundredths', definition: 'The second place-value position to the right of the decimal point.', example: '0.06 means 6 hundredths.' },
      { term: 'Thousandths', definition: 'The third place-value position to the right of the decimal point.', example: '0.006 means 6 thousandths.' },
      { term: 'Sum', definition: 'The result of addition.', example: 'The sum of 2.4 and 1.3 is 3.7.' },
      { term: 'Difference', definition: 'The result of subtraction or the amount between two values.', example: 'The difference between 5.2 and 3.8 is 1.4.' },
      { term: 'Regroup', definition: 'To exchange one place-value unit for an equivalent amount in another place-value position.', example: 'Regroup 1 tenth as 10 hundredths.' },
      { term: 'Placeholder zero', definition: 'A zero written to show an empty place-value position without changing the number’s value.', example: '5.8 can be written as 5.80 when subtracting hundredths.' },
      { term: 'Standard algorithm', definition: 'An efficient written procedure organized by place value for performing an operation.', example: 'Vertical addition with matching place-value columns is a standard algorithm.' },
      { term: 'Estimate', definition: 'A close, reasonable value used to predict or check an exact answer.', example: '47.83 + 12.12 is about 48 + 12 = 60.' },
      { term: 'Reasonable', definition: 'Consistent with the size and meaning you expect from a problem.', example: 'A sum near 60 is reasonable for 47.83 + 12.12.' }
    ],
    explorePrompt: 'Use Decimal Alignment Lab to make the place-value decisions yourself. Align decimal points, test placeholder zeros, diagnose mistakes, and connect whole-number calculations to scaled decimal calculations. The goal is to understand why the standard algorithm works before relying on it.',
    exploreMode: 'add',
    handsOn: {
      title: 'Build a Place-Value Alignment Mat',
      instructions: [
        'Draw columns labelled tens, ones, decimal point, tenths, hundredths, thousandths, and ten-thousandths.',
        'Write 12.45 on one strip of paper and 8.7632 on another strip.',
        'Place both strips on your chart so digits with the same place value line up.',
        'Add placeholder zeros to 12.45 and explain why its value stays the same.',
        'Use the same chart to organize 12.45 − 8.7632 and mark where regrouping is needed.',
        'Create your own pair of decimal numbers with different lengths and challenge someone to align them correctly.'
      ],
      reflect: 'Why does lining up decimal points work? Explain using place-value units rather than saying “because that is the rule.”'
    },
    practiceIntro: 'Foundations focuses on place-value alignment and equivalent zeros. Standard builds calculation fluency. Challenge combines error analysis, scaling, money, and real contexts. Estimate before calculating when you can.',
    questions: [
      { difficulty: 'foundations', prompt: 'Which setup correctly aligns 3.4 + 0.056 by place value?', choices: ['3.400 + 0.056', '3.400 + 0.560', '0.340 + 0.056', '3.040 + 0.056'], answer: 0, hint: 'Write 3.4 with placeholder zeros so tenths, hundredths, and thousandths are visible.', explain: '3.4 = 3.400, so 3.400 + 0.056 lines up equal place-value units.' },
      { difficulty: 'foundations', prompt: 'Which statement is true?', choices: ['8.5 > 8.50', '8.5 < 8.50', '8.5 = 8.50', '8.50 = 85'], answer: 2, hint: 'A zero added to the right of the final decimal digit does not change the amount.', explain: '8.5 and 8.50 represent the same value.' },
      { difficulty: 'foundations', prompt: 'Find 2.75 + 1.6.', choices: ['2.91', '3.35', '4.35', '4.81'], answer: 2, hint: 'Rewrite 1.6 as 1.60 and line up the decimal points.', explain: '2.75 + 1.60 = 4.35.' },
      { difficulty: 'standard', prompt: 'Find 12.45 + 8.7632.', choices: ['20.0082', '21.2132', '21.8082', '212.132'], answer: 1, hint: 'Write 12.45 as 12.4500, then align decimal points.', explain: '12.4500 + 8.7632 = 21.2132.' },
      { difficulty: 'standard', prompt: 'Find 12.45 − 8.7632.', choices: ['3.6868', '4.3132', '3.3132', '36.868'], answer: 0, hint: 'Use 12.4500 − 8.7632 and regroup by place value.', explain: '12.4500 − 8.7632 = 3.6868.' },
      { difficulty: 'standard', prompt: 'If 153 + 481 = 634, what is 15.3 + 48.1?', choices: ['6.34', '63.4', '634', '6340'], answer: 1, hint: 'Both addends are one tenth as large.', explain: 'The sum is also one tenth as large: 63.4.' },
      { difficulty: 'challenge', prompt: 'A student writes 5.8 + 0.47 = 5.127. What is the main error?', choices: ['They should multiply instead.', 'They lined up the last digits instead of equal place values.', 'They added a placeholder zero.', 'They should ignore the decimal points.'], answer: 1, hint: 'Compare the place value of 8 and 7.', explain: 'Write 5.80 + 0.47. The 8 tenths must line up with 4 tenths, not 7 hundredths. The correct sum is 6.27.' },
      { difficulty: 'challenge', prompt: 'Chips cost $2.50, two chocolate bars cost $3.50 total, and a drink costs $2.25. What change should you receive from $20?', choices: ['$8.25', '$10.75', '$11.75', '$12.25'], answer: 2, hint: 'Find the total purchase cost first, then subtract it from $20.00.', explain: '$2.50 + $3.50 + $2.25 = $8.25, and $20.00 − $8.25 = $11.75.' }
    ],
    checkQuestions: [
      { difficulty: 'foundations', prompt: 'In 12.074, what place value does the digit 7 represent?', choices: ['tenths', 'hundredths', 'thousandths', 'ones'], answer: 1, hint: '', explain: 'The first digit after the decimal is tenths; the second is hundredths. The 7 represents 7 hundredths.' },
      { difficulty: 'foundations', prompt: 'Which number is equal to 4.2?', choices: ['4.02', '4.20', '42.0', '0.42'], answer: 1, hint: '', explain: '4.2 = 4.20 because a trailing zero does not change the value.' },
      { difficulty: 'foundations', prompt: 'Which setup correctly aligns 6.25 and 0.8 for addition?', choices: ['6.25 + 0.80', '6.25 + 8.00', '0.625 + 0.800', '6.250 + 0.008'], answer: 0, hint: '', explain: '0.8 can be written as 0.80, so equal place values line up.' },
      { difficulty: 'foundations', prompt: 'Find 0.999 + 1.001.', choices: ['1.000', '1.100', '2.000', '2.100'], answer: 2, hint: '', explain: '0.999 + 1.001 = 2.000, which is equal to 2.' },
      { difficulty: 'standard', prompt: 'Find 15.6347 + 2.925.', choices: ['18.5597', '18.6597', '17.9597', '185.597'], answer: 0, hint: '', explain: 'Write 2.925 as 2.9250 and add by place value: 18.5597.' },
      { difficulty: 'standard', prompt: 'Find 57.48 − 12.523.', choices: ['44.957', '45.043', '44.043', '449.57'], answer: 0, hint: '', explain: '57.480 − 12.523 = 44.957.' },
      { difficulty: 'standard', prompt: 'Find 2.005 − 0.89164.', choices: ['1.11336', '1.21464', '1.11364', '11.1336'], answer: 0, hint: '', explain: 'Write 2.00500 − 0.89164. The difference is 1.11336.' },
      { difficulty: 'standard', prompt: 'Find 10.05428 + 9.4567.', choices: ['19.51098', '19.50108', '20.51098', '195.1098'], answer: 0, hint: '', explain: 'Write 9.4567 as 9.45670, then add: 19.51098.' },
      { difficulty: 'standard', prompt: 'Which decimal makes the statement true? 3.1415 + 0.86 = ___', choices: ['3.2275', '4.0015', '4.015', '40.015'], answer: 1, hint: '', explain: '3.1415 + 0.8600 = 4.0015.' },
      { difficulty: 'standard', prompt: '481 − 153 = 328. What is 48.1 − 15.3?', choices: ['3.28', '32.8', '328', '3280'], answer: 1, hint: '', explain: 'Each number is one tenth as large, so the difference is one tenth as large: 32.8.' },
      { difficulty: 'standard', prompt: 'Why can 7.3 be written as 7.300 when subtracting?', choices: ['It makes the number larger.', 'It creates equivalent placeholder zeros so place values are easier to see.', 'It moves the decimal point.', 'It changes tenths into thousandths.'], answer: 1, hint: '', explain: '7.3 and 7.300 have the same value; the zeros simply show empty hundredths and thousandths places.' },
      { difficulty: 'standard', prompt: 'A snack costs $8.25. What change should you receive from $20.00?', choices: ['$11.25', '$11.75', '$12.75', '$28.25'], answer: 1, hint: '', explain: '$20.00 − $8.25 = $11.75.' },
      { difficulty: 'challenge', prompt: 'Anya swims 28.457 s and later 27.989 s. By how much did her time improve?', choices: ['0.368 s', '0.468 s', '0.568 s', '1.468 s'], answer: 1, hint: '', explain: '28.457 − 27.989 = 0.468 s.' },
      { difficulty: 'challenge', prompt: 'Ben swims 26.892 s and later 26.905 s. What happened?', choices: ['He improved by 0.013 s.', 'He was slower by 0.013 s.', 'He improved by 0.13 s.', 'His time stayed the same.'], answer: 1, hint: '', explain: '26.905 is greater than 26.892, so the second time is 0.013 s slower.' },
      { difficulty: 'challenge', prompt: 'A plant is 12.45 cm long and another is 8.7632 cm long. Which operation finds how much longer the first plant is?', choices: ['12.45 + 8.7632', '12.45 − 8.7632', '12.45 × 8.7632', '8.7632 − 12.45'], answer: 1, hint: '', explain: '“How much longer” asks for the difference between the lengths, so subtract the shorter length from the longer one.' },
      { difficulty: 'challenge', prompt: 'Which is the best estimate for 47.83 + 12.12?', choices: ['6', '36', '60', '600'], answer: 2, hint: '', explain: '48 + 12 is about 60, so an exact answer should be near 60.' },
      { difficulty: 'challenge', prompt: 'Which is the best estimate for 100.3 − 48.9?', choices: ['5', '51', '149', '510'], answer: 1, hint: '', explain: '100 − 49 is about 51.' },
      { difficulty: 'challenge', prompt: 'A student writes 3.8 < 3.745 because 745 has more digits than 8. Which response is best?', choices: ['Correct; more digits means a larger decimal.', 'Incorrect; write 3.8 as 3.800, so 3.800 > 3.745.', 'Incorrect; decimal numbers cannot be compared.', 'Correct; thousandths are always larger than tenths.'], answer: 1, hint: '', explain: 'Compare equal place values: 3.800 > 3.745.' }
    ],
    application: {
      title: 'Field Day Data Desk',
      scenario: 'You are helping organize a school field day. The snack station starts with a $75.00 supply budget. It spends $18.75 on fruit, $12.60 on drinks, and $9.95 on cups. A swimmer records 28.457 s in one trial and 27.989 s in the next.',
      tasks: [
        'Estimate the total snack-station spending before calculating exactly.',
        'Find the exact total spent and show how you aligned the decimal numbers.',
        'Find how much of the $75.00 budget remains.',
        'Determine how much the swimmer’s time improved.',
        'Explain why each answer is reasonable using place value or estimation.'
      ],
      reveal: 'Estimate: about $19 + $13 + $10 = $42. Exact spending: $18.75 + $12.60 + $9.95 = $41.30. Budget remaining: $75.00 − $41.30 = $33.70. Time improvement: 28.457 − 27.989 = 0.468 s. Each exact answer is close to a sensible estimate.'
    },
    summary: [
      'Decimal addition and subtraction are organized by place value.',
      'Aligning decimal points lines up equal place-value units.',
      'Trailing placeholder zeros can make place values visible without changing value.',
      'Regrouping across the decimal point is still a base-ten exchange.',
      'The meaning of the situation determines whether to add or subtract.',
      'Estimation helps detect misplaced decimals and other unreasonable answers.'
    ],
    support: [
      'Use a place-value chart and write one digit in each column.',
      'Rewrite shorter decimals with placeholder zeros before calculating.',
      'Underline the decimal points before you align the numbers.',
      'Estimate with whole numbers first, then compare your exact answer with the estimate.'
    ],
    extension: [
      'Create two different decimal addition problems with an answer between 9.99 and 10.01.',
      'Find two decimal numbers whose difference is exactly 0.001 and explain their place-value relationship.',
      'Explain why multiplying both 15.3 and 48.1 by 10 also multiplies their sum by 10.',
      'Write a real-life problem where a smaller decimal number represents a better result, such as a race time.'
    ],
    pat: {
      title: 'PAT-STYLE THINKING',
      prompt: 'A student calculates 5.8 + 0.47 and gets 5.127. Explain the mistake and give the correct sum.',
      answer: 'The student lined up the final digits instead of equal place values. Write 5.8 as 5.80, then align the decimal points: 5.80 + 0.47 = 6.27. The 8 tenths must be combined with the 4 tenths, not the 7 hundredths.'
    },
    review: [
      'I can align decimal numbers by place value.',
      'I can use placeholder zeros correctly.',
      'I can add and subtract decimal numbers using a standard algorithm.',
      'I can regroup across decimal place values.',
      'I can choose the correct operation in a real situation.',
      'I can use estimation to check whether my answer is reasonable.'
    ],
    next: { title: 'Lesson 4.5 · Multiplying Decimal Numbers', slug: 'multiplying-decimals', status: 'planned' }
  }
};
