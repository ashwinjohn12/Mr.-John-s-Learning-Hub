import type { TopicContent } from './topicContent';

export const unit4Content: Record<string, TopicContent> = {
  'grade-6-math/decimals-fractions/adding-subtracting-fractions': {
    hook: 'A recipe needs 3/4 cup of oats and 2/3 cup of seeds. Why would 5/7 cup be an impossible answer for the total, even though 3 + 2 = 5 and 4 + 3 = 7?',
    prerequisites: [
      'Recognize unit fractions and explain what the numerator and denominator mean.',
      'Create and recognize equivalent fractions.',
      'Find multiples of natural numbers and identify a least common multiple.',
      'Convert between improper fractions and mixed numbers.',
      'Express a fraction in simplest form.'
    ],
    goals: [
      'recognize when two fractions have related denominators.',
      'determine the factor that relates one denominator to another.',
      'express fractions with a common denominator using equivalent fractions.',
      'add and subtract fractions with related and unrelated denominators.',
      'solve real-life problems involving fraction addition and subtraction.'
    ],
    estimatedTime: '90–120 min',
    materials: ['pencil', 'paper', 'fraction strips or folded paper strips', 'optional ruler'],
    successCriteria: [
      'I can explain why fractions need the same-sized parts before I add or subtract them.',
      'I can find a useful common denominator and rename each fraction without changing its value.',
      'I can decide whether denominators are related or unrelated.',
      'I can add or subtract mixed numbers and improper fractions using a strategy that makes sense to me.',
      'I can simplify my answer and check whether it is reasonable.'
    ],
    bigIdea: 'Fractions can be added or subtracted when they are written using the same-sized fractional unit.',
    bigIdeaDetail: 'The denominator names the size of the pieces. Thirds and fourths are different-sized pieces, so their numerators cannot be combined directly. Equivalent fractions let us rename the same quantities using a shared denominator. Once both fractions use the same unit, we can combine or compare the number of those units. A lowest common denominator is useful because it is efficient, but any correct common denominator can work if the final answer is simplified.',
    connection: 'Why does changing 1/2 to 3/6 keep its value the same, while changing only the denominator from 1/2 to 1/6 changes the value?',
    concepts: [
      {
        title: 'Same denominator means same-sized units',
        text: 'Fractions with a common denominator are built from the same unit fraction. For example, 3/8 + 2/8 combines eighths with eighths, so the result is 5/8. The denominator stays 8 because the size of each piece has not changed.',
        remember: 'Add or subtract the counts of the pieces only after the pieces are the same size.'
      },
      {
        title: 'Related denominators can be matched efficiently',
        text: 'Two denominators are related when one is a multiple of the other. For 3/4 and 1/8, 4 × 2 = 8, so only 3/4 needs to be renamed: 3/4 = 6/8. Then both fractions use eighths.',
        remember: 'If one denominator is already a multiple of the other, that larger denominator is often the easiest common denominator.'
      },
      {
        title: 'Equivalent fractions rename a quantity without changing it',
        text: 'To create an equivalent fraction, multiply the numerator and denominator by the same factor. If 2/3 must be written in twelfths, multiply both parts by 4: 2/3 = 8/12. Multiplying only the denominator would change the size of the fraction.',
        remember: 'Whatever factor changes the denominator must also change the numerator.'
      },
      {
        title: 'Unrelated denominators need a shared multiple',
        text: 'If neither denominator is a multiple of the other, find a common multiple. For 1/3 and 1/4, 12 is the least common multiple, so twelfths are an efficient shared unit. Fraction strips, lists of multiples, or multiplication can all help you find a common denominator.',
        remember: 'Multiplying the denominators always gives a common denominator, but it may not be the lowest or most efficient one.'
      },
      {
        title: 'Mixed numbers use the same fraction ideas',
        text: 'The whole-number part does not control the common denominator. Work with the fractional parts, rename them with a common denominator, and then combine the whole numbers. If a fractional sum is improper, regroup it into an additional whole. If subtraction needs more fractional parts, regroup one whole.',
        remember: 'Only the fractional parts need a shared denominator.'
      },
      {
        title: 'A strong answer is simplified and reasonable',
        text: 'After calculating, express the result in simplest form when possible. Estimate first or compare with benchmark fractions such as 0, 1/2, and 1 so you can decide whether your exact answer makes sense.',
        remember: 'A correct method can use a non-lowest common denominator; simplifying at the end confirms the same final value.'
      }
    ],
    misconceptions: [
      {
        title: '“Add the tops and add the bottoms.”',
        text: 'For 1/2 + 1/3, writing 2/5 combines halves and thirds as if they were the same-sized pieces. Rename both fractions using a common unit first: 3/6 + 2/6 = 5/6.'
      },
      {
        title: '“I only need to change the denominator.”',
        text: 'Changing 2/3 to 2/12 changes the value. To keep the fraction equivalent, multiply both numerator and denominator by the same factor: 2/3 = 8/12.'
      },
      {
        title: '“I must always multiply the denominators.”',
        text: 'Multiplying denominators can produce a valid common denominator, but it may create extra work. For 3/4 and 1/8, using 32 works, but 8 is already a common denominator and is much more efficient.'
      },
      {
        title: '“The whole number also changes when I find a common denominator.”',
        text: 'In 2 1/3, the 2 still means two wholes. Only the fractional part is renamed when you create an equivalent fraction.'
      }
    ],
    examples: [
      {
        title: 'Example 1 · Related denominators',
        problem: 'Find 3/4 + 1/8.',
        steps: [
          'The denominators 4 and 8 are related because 4 × 2 = 8.',
          'Rename 3/4 in eighths: 3/4 = 6/8.',
          'Now add the same-sized units: 6/8 + 1/8 = 7/8.',
          '7/8 is already in simplest form.'
        ],
        answer: '7/8'
      },
      {
        title: 'Example 2 · Unrelated denominators',
        problem: 'Find 5/6 − 1/4.',
        steps: [
          'The denominators 6 and 4 are unrelated because neither is a multiple of the other.',
          'A lowest common denominator is 12.',
          'Rename both fractions: 5/6 = 10/12 and 1/4 = 3/12.',
          'Subtract: 10/12 − 3/12 = 7/12.'
        ],
        answer: '7/12'
      },
      {
        title: 'Example 3 · Mixed-number addition',
        problem: 'Find 1 3/4 + 2 5/8.',
        steps: [
          'The denominators 4 and 8 are related, so use eighths.',
          'Rename 3/4 as 6/8.',
          'Add: 1 6/8 + 2 5/8 = 3 11/8.',
          '11/8 = 1 3/8, so regroup: 3 + 1 3/8 = 4 3/8.'
        ],
        answer: '4 3/8'
      },
      {
        title: 'Example 4 · Mixed-number subtraction with regrouping',
        problem: 'Find 2 1/3 − 3/4.',
        steps: [
          'Use twelfths: 1/3 = 4/12 and 3/4 = 9/12.',
          '4/12 is smaller than 9/12, so regroup one whole from 2.',
          '2 4/12 = 1 16/12.',
          'Subtract: 1 16/12 − 9/12 = 1 7/12.'
        ],
        answer: '1 7/12'
      }
    ],
    vocabulary: [
      { term: 'Common denominator', definition: 'A denominator shared by two or more equivalent fractions.', example: '12 is a common denominator for 1/3 and 1/4.' },
      { term: 'Related denominators', definition: 'Denominators where one is a multiple of the other.', example: '4 and 12 are related because 4 × 3 = 12.' },
      { term: 'Unrelated denominators', definition: 'Denominators where neither is a multiple of the other.', example: '3 and 4 are unrelated denominators.' },
      { term: 'Multiple', definition: 'A number found by multiplying a given number by a natural number.', example: 'Multiples of 4 include 4, 8, 12, 16, and 20.' },
      { term: 'Least common multiple (LCM)', definition: 'The smallest positive number that is a multiple of two or more numbers.', example: 'The LCM of 6 and 8 is 24.' },
      { term: 'Lowest common denominator (LCD)', definition: 'The least common multiple of the denominators of a set of fractions.', example: 'The LCD of thirds and fourths is 12.' },
      { term: 'Equivalent fractions', definition: 'Fractions written with different numerators and denominators that represent the same value.', example: '1/2 = 2/4 = 3/6.' },
      { term: 'Addend', definition: 'A number or quantity that is being added.', example: 'In 2/3 + 1/4, both fractions are addends.' },
      { term: 'Simplest form', definition: 'A fraction whose numerator and denominator have no common factor greater than 1.', example: '6/8 simplifies to 3/4.' }
    ],
    explorePrompt: 'Work through all three parts of the Fraction Lab. First identify a shared unit, then build an equivalent fraction, and finally solve a fraction operation. Use the visual bars to explain why your choices preserve the value of each fraction.',
    exploreMode: 'add',
    handsOn: {
      title: 'Build Your Own Fraction Strips',
      instructions: [
        'Cut or fold six equal-length paper strips to represent one whole each.',
        'Partition and label the strips into halves, thirds, fourths, sixths, eighths, and twelfths.',
        'Line up 1/2 and 1/3. Find the first partition line where both strips align. Name the common denominator.',
        'Repeat with 1/4 and 1/6, then with 1/3 and 1/4.',
        'Choose one pair and use the aligned strips to write equivalent fractions with the same denominator.'
      ],
      reflect: 'How does the first shared alignment on the strips connect to the least common multiple of the denominators?'
    },
    practiceIntro: 'Start with Foundations if you need practice identifying related denominators and equivalent fractions. Standard questions combine the ideas. Challenge questions focus on mixed numbers, strategy choice, and explaining why a method works.',
    questions: [
      { difficulty: 'foundations', prompt: 'Which pair has related denominators?', choices: ['3 and 5', '4 and 8', '5 and 6', '7 and 9'], answer: 1, hint: 'Related denominators have a multiple relationship.', explain: '4 and 8 are related because 4 × 2 = 8.' },
      { difficulty: 'foundations', prompt: 'What is the lowest common denominator for fractions with denominators 3 and 6?', choices: ['3', '6', '9', '18'], answer: 1, hint: 'List the first few multiples of 3 and 6.', explain: '6 is the smallest number that is a multiple of both 3 and 6.' },
      { difficulty: 'foundations', prompt: 'Complete the equivalent fraction: 2/3 = ?/12', choices: ['4/12', '6/12', '8/12', '9/12'], answer: 2, hint: '3 × 4 = 12, so use the same factor on the numerator.', explain: 'Multiply numerator and denominator by 4: 2/3 = 8/12.' },
      { difficulty: 'standard', prompt: 'Find 3/4 + 1/8.', choices: ['4/12', '7/8', '4/8', '1'], answer: 1, hint: 'Rename 3/4 in eighths.', explain: '3/4 = 6/8, so 6/8 + 1/8 = 7/8.' },
      { difficulty: 'standard', prompt: 'Find 5/6 − 1/4.', choices: ['4/2', '7/12', '4/10', '3/8'], answer: 1, hint: 'A lowest common denominator for 6 and 4 is 12.', explain: '5/6 = 10/12 and 1/4 = 3/12, so the difference is 7/12.' },
      { difficulty: 'standard', prompt: 'Find 1 3/4 + 2 5/8.', choices: ['3 8/12', '3 11/8', '4 3/8', '4 1/4'], answer: 2, hint: 'Rename 3/4 as 6/8, then regroup the fractional sum if needed.', explain: '1 6/8 + 2 5/8 = 3 11/8 = 4 3/8.' },
      { difficulty: 'challenge', prompt: 'A student solves 1/4 + 1/6 using denominator 24: 6/24 + 4/24 = 10/24 = 5/12. Which statement is best?', choices: ['The method is wrong because 24 is not the LCD.', 'The method is valid, but 12 would be more efficient.', 'The method is wrong because fractions must use denominator 10.', 'The method only works for subtraction.'], answer: 1, hint: 'Any common denominator can work if the fractions stay equivalent.', explain: '24 is a valid common denominator. The answer simplifies correctly to 5/12, although using the LCD 12 creates less work.' },
      { difficulty: 'challenge', prompt: 'Find 2 1/3 − 3/4.', choices: ['1 7/12', '1 5/12', '2 7/12', '1/12'], answer: 0, hint: 'Rename in twelfths, then regroup one whole because 4/12 is less than 9/12.', explain: '2 4/12 = 1 16/12. Then 1 16/12 − 9/12 = 1 7/12.' }
    ],
    checkQuestions: [
      { difficulty: 'foundations', prompt: 'Which denominators are related?', choices: ['4 and 12', '5 and 8', '6 and 10', '7 and 9'], answer: 0, hint: '', explain: '12 is 3 × 4, so 4 and 12 are related.' },
      { difficulty: 'foundations', prompt: 'Which pair has unrelated denominators?', choices: ['3 and 9', '4 and 8', '6 and 18', '6 and 8'], answer: 3, hint: '', explain: 'Neither 6 nor 8 is a multiple of the other.' },
      { difficulty: 'foundations', prompt: 'What factor changes a denominator of 5 into 20?', choices: ['2', '3', '4', '5'], answer: 2, hint: '', explain: '5 × 4 = 20.' },
      { difficulty: 'foundations', prompt: 'What is the LCM of 8 and 12?', choices: ['12', '20', '24', '96'], answer: 2, hint: '', explain: '24 is the first number that appears in both lists of multiples.' },
      { difficulty: 'foundations', prompt: 'Which fraction is equivalent to 3/5 and has denominator 20?', choices: ['6/20', '9/20', '12/20', '15/20'], answer: 2, hint: '', explain: 'Multiply both numerator and denominator by 4: 3/5 = 12/20.' },
      { difficulty: 'foundations', prompt: 'Find 2/7 + 3/7.', choices: ['5/14', '5/7', '6/7', '5/49'], answer: 1, hint: '', explain: 'The units are already sevenths, so add the numerators: 5/7.' },
      { difficulty: 'standard', prompt: 'Find 1/2 + 3/8.', choices: ['4/10', '7/8', '4/8', '1 1/8'], answer: 1, hint: '', explain: '1/2 = 4/8, so 4/8 + 3/8 = 7/8.' },
      { difficulty: 'standard', prompt: 'Find 7/10 − 1/5.', choices: ['6/5', '1/2', '6/10', '3/10'], answer: 1, hint: '', explain: '1/5 = 2/10, so 7/10 − 2/10 = 5/10 = 1/2.' },
      { difficulty: 'standard', prompt: 'Find 2/3 + 3/4.', choices: ['5/7', '17/12', '1 5/12', 'Both 17/12 and 1 5/12'], answer: 3, hint: '', explain: '2/3 = 8/12 and 3/4 = 9/12. The sum is 17/12, which is the same value as 1 5/12.' },
      { difficulty: 'standard', prompt: 'Find 5/6 − 1/9.', choices: ['4/3', '13/18', '4/15', '7/18'], answer: 1, hint: '', explain: '5/6 = 15/18 and 1/9 = 2/18, so the difference is 13/18.' },
      { difficulty: 'standard', prompt: 'Find 1 1/2 + 2 2/3.', choices: ['3 3/5', '4 1/6', '3 5/6', '4 5/6'], answer: 1, hint: '', explain: '1/2 = 3/6 and 2/3 = 4/6. The fractional sum is 7/6 = 1 1/6, giving 4 1/6.' },
      { difficulty: 'challenge', prompt: 'Find 3 1/4 − 1 2/3.', choices: ['2 1/12', '1 7/12', '1 5/12', '2 7/12'], answer: 1, hint: '', explain: '3 3/12 − 1 8/12 requires regrouping: 2 15/12 − 1 8/12 = 1 7/12.' },
      { difficulty: 'standard', prompt: 'Which statement explains the mistake in 1/2 + 1/3 = 2/5?', choices: ['The numerators should be multiplied.', 'Halves and thirds are different-sized units and must be renamed first.', 'The denominator must always be 6.', 'The answer should be a whole number.'], answer: 1, hint: '', explain: 'The fractions must first be expressed using the same-sized unit, such as sixths.' },
      { difficulty: 'standard', prompt: 'Why is changing 2/3 to 2/12 incorrect?', choices: ['12 is too large.', 'Only the denominator changed, so the fraction no longer has the same value.', 'The numerator must always be larger than the denominator.', 'Thirds cannot be renamed.'], answer: 1, hint: '', explain: 'To keep an equivalent value, multiply both numerator and denominator by the same factor.' },
      { difficulty: 'challenge', prompt: 'For 1/4 and 1/6, which statement is true about denominator 24?', choices: ['24 cannot be used.', '24 is a common denominator but not the lowest one.', '24 is the LCD.', '24 changes both fraction values.'], answer: 1, hint: '', explain: '24 is divisible by both 4 and 6, so it works. The LCD is 12.' },
      { difficulty: 'challenge', prompt: 'Which common denominator is most efficient for 5/8 + 1/4?', choices: ['8', '12', '24', '32'], answer: 0, hint: '', explain: 'Because 4 is a factor of 8, eighths already provide the lowest common denominator.' },
      { difficulty: 'challenge', prompt: 'A recipe uses 3/4 cup of oats and 2/3 cup of seeds. How much is used altogether?', choices: ['5/7 cup', '1 5/12 cups', '17/24 cup', '1 1/7 cups'], answer: 1, hint: '', explain: '3/4 = 9/12 and 2/3 = 8/12. The sum is 17/12 = 1 5/12 cups.' },
      { difficulty: 'challenge', prompt: 'Which is the strongest reason to prefer an LCD when possible?', choices: ['It is the only denominator that works.', 'It keeps equivalent fractions smaller and often reduces later simplifying.', 'It makes the numerators stay unchanged.', 'It guarantees the answer is less than 1.'], answer: 1, hint: '', explain: 'Other common denominators can work, but the LCD is often the most efficient representation.' }
    ],
    application: {
      title: 'Community Garden Measurement Challenge',
      scenario: 'A class is measuring materials for a community garden. One border board is 3 1/2 m long and 1 3/4 m is cut away. A separate planting row needs 5/6 m of edging plus another 3/8 m piece.',
      tasks: [
        'Find the length of board remaining after 1 3/4 m is removed from 3 1/2 m.',
        'Find the total edging needed for the planting row: 5/6 m + 3/8 m.',
        'For each calculation, state the common denominator you chose and why it was useful.',
        'Choose one answer and estimate first to explain why your exact result is reasonable.'
      ],
      reveal: 'Board: 3 1/2 − 1 3/4 = 3 2/4 − 1 3/4 = 2 6/4 − 1 3/4 = 1 3/4 m. Edging: the LCD of 6 and 8 is 24, so 5/6 + 3/8 = 20/24 + 9/24 = 29/24 = 1 5/24 m. Other correct common denominators can also work if the fractions remain equivalent and the final answer is simplified.'
    },
    summary: [
      'Fractions need a common denominator so their pieces represent the same-sized unit.',
      'Related denominators have a multiple relationship; unrelated denominators do not.',
      'Equivalent fractions are created by multiplying the numerator and denominator by the same factor.',
      'The LCD is the least common multiple of the denominators and is often the most efficient shared unit.',
      'Mixed numbers follow the same fraction rules; regrouping may be needed.',
      'Any valid common denominator can work if the final answer is equivalent and simplified.'
    ],
    support: [
      'Use fraction strips to see equivalent fractions and common denominators before calculating.',
      'List multiples of both denominators and circle the first match.',
      'Write the multiplication factor beside both the numerator and denominator when renaming a fraction.',
      'Estimate with 0, 1/2, and 1 before solving so you know what size answer to expect.'
    ],
    extension: [
      'Solve 1/4 + 1/6 using two different common denominators and show why both methods give 5/12.',
      'Create a pair of fractions where multiplying the denominators gives a common denominator that is much larger than the LCD.',
      'Explain when fraction strips might be more useful than listing multiples and when listing multiples might be more efficient.'
    ],
    pat: {
      title: 'PAT-STYLE THINKING',
      prompt: 'Maya says 2/3 + 1/4 = 3/7. Which explanation best identifies her error? A) She should multiply the numerators. B) She combined thirds and fourths even though they are different-sized units. C) Fractions can only be added if both numerators are equal. D) Every fraction addition problem must have denominator 12.',
      answer: 'B. Thirds and fourths are different-sized units. Rename them with a common denominator first: 2/3 = 8/12 and 1/4 = 3/12, so the sum is 11/12.'
    },
    review: [
      'I can recognize related and unrelated denominators.',
      'I can find a useful common denominator.',
      'I can create equivalent fractions without changing their values.',
      'I can add and subtract fractions, including mixed numbers.',
      'I can explain and justify the strategy I used.'
    ],
    next: { title: 'Multiplying Fractions', slug: 'multiplying-fractions', status: 'planned' }
  }
};
