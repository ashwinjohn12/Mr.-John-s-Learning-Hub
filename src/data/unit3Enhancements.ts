import type { TopicContent } from './topicContent';

const extraLesson31Checks: TopicContent['checkQuestions'] = [
  { difficulty: 'foundations', prompt: 'Which list shows all of the factors of 16?', choices: ['1, 2, 4, 8, 16', '1, 2, 8, 16', '2, 4, 8', '1, 4, 16'], answer: 0, hint: '', explain: 'The factor pairs are 1 × 16, 2 × 8, and 4 × 4, so the complete factor list is 1, 2, 4, 8, 16.' },
  { difficulty: 'foundations', prompt: 'Which number is prime?', choices: ['27', '31', '33', '39'], answer: 1, hint: '', explain: '31 has exactly two factors: 1 and 31. The other numbers can be split into smaller natural-number factors.' },
  { difficulty: 'foundations', prompt: 'Which fact proves that 27 is composite?', choices: ['27 is odd.', '27 = 3 × 9.', '27 is greater than 20.', '2 + 7 = 9.'], answer: 1, hint: '', explain: 'The factor pair 3 × 9 shows that 27 has factors other than 1 and itself, so it is composite.' },
  { difficulty: 'standard', prompt: 'Which is the complete prime factorization of 84?', choices: ['2 × 42', '3 × 28', '2 × 2 × 3 × 7', '6 × 14'], answer: 2, hint: '', explain: '2, 2, 3, and 7 are all prime and their product is 84.' },
  { difficulty: 'standard', prompt: 'Which is the complete prime factorization of 54?', choices: ['6 × 9', '2 × 3 × 3 × 3', '3 × 18', '2 × 27'], answer: 1, hint: '', explain: '54 = 2 × 3 × 3 × 3, and every factor shown is prime.' },
  { difficulty: 'standard', prompt: 'Which number is a common factor of 40 and 60?', choices: ['6', '12', '20', '30'], answer: 2, hint: '', explain: '40 ÷ 20 = 2 and 60 ÷ 20 = 3, so 20 divides both numbers exactly.' },
  { difficulty: 'standard', prompt: 'A number has prime factorization 2 × 2 × 3 × 3 × 5. Which number divides it evenly?', choices: ['16', '25', '27', '45'], answer: 3, hint: '', explain: '45 = 3 × 3 × 5. Those prime factors are all available in the given factorization.' },
  { difficulty: 'standard', prompt: 'A student writes 36 = 2 × 18 and says this is a prime factorization. What is the mistake?', choices: ['36 is prime.', '2 is not a factor of 36.', '18 is composite and must be factored again.', 'A prime factorization must include 1.'], answer: 2, hint: '', explain: 'A prime factorization can contain only prime factors. Since 18 is composite, the factorization is not finished.' },
  { difficulty: 'challenge', prompt: 'A number has prime factorization 2 × 2 × 2 × 3 × 7. Which number does NOT divide it evenly?', choices: ['14', '18', '21', '24'], answer: 1, hint: '', explain: '18 = 2 × 3 × 3 needs two factors of 3, but the given factorization contains only one 3.' },
  { difficulty: 'challenge', prompt: '72 = 2 × 2 × 2 × 3 × 3 and 54 = 2 × 3 × 3 × 3. What is the greatest factor that can be built from the prime factors they share?', choices: ['6', '9', '18', '27'], answer: 2, hint: '', explain: 'Both numbers share one factor 2 and two factors 3. Multiplying 2 × 3 × 3 gives 18.' }
];

const extraLesson32Checks: TopicContent['checkQuestions'] = [
  { difficulty: 'foundations', prompt: 'In 4⁵, what is the base?', choices: ['4', '5', '9', '20'], answer: 0, hint: '', explain: 'The base is the repeated factor, so the base is 4.' },
  { difficulty: 'foundations', prompt: 'In 7³, what does the exponent 3 tell you?', choices: ['The repeated factor is 3.', 'There are three factors of 7.', 'Multiply 7 by 3.', 'The value is 21.'], answer: 1, hint: '', explain: 'The exponent counts how many copies of the base appear as factors.' },
  { difficulty: 'foundations', prompt: 'Which power matches 8 × 8 × 8 × 8?', choices: ['8⁴', '4⁸', '8 × 4', '32²'], answer: 0, hint: '', explain: 'The repeated factor is 8 and there are four copies, so the power is 8⁴.' },
  { difficulty: 'standard', prompt: 'Which repeated multiplication matches 6²?', choices: ['6 × 2', '2 × 2 × 2 × 2 × 2 × 2', '6 × 6', '6 + 6'], answer: 2, hint: '', explain: '6² means two factors of 6: 6 × 6.' },
  { difficulty: 'standard', prompt: 'A student says 5⁴ = 5 × 4. What is the mistake?', choices: ['The base should be 4.', 'The exponent counts copies of 5; it does not multiply 5 by 4.', '5⁴ cannot be expanded.', 'Powers can only use prime bases.'], answer: 1, hint: '', explain: '5⁴ means 5 × 5 × 5 × 5, not 5 × 4.' },
  { difficulty: 'standard', prompt: 'Write 2 × 2 × 2 × 2 × 7 × 7 × 7 using powers.', choices: ['2⁴ × 7³', '2³ × 7⁴', '9⁷', '14⁷'], answer: 0, hint: '', explain: 'There are four 2s and three 7s, giving 2⁴ × 7³.' },
  { difficulty: 'standard', prompt: 'Which number is guaranteed to divide 6⁴ evenly?', choices: ['4', '5', '6', '7'], answer: 2, hint: '', explain: '6⁴ contains 6 as a factor, so it is divisible by its base 6.' },
  { difficulty: 'challenge', prompt: 'Which expression is NOT written correctly using powers?', choices: ['3 × 3 × 3 = 3³', '5 × 5 = 5²', '2 × 2 × 3 = 2³', '7 × 7 × 7 × 7 = 7⁴'], answer: 2, hint: '', explain: '2 × 2 × 3 contains only two factors of 2, so it is 2² × 3, not 2³.' },
  { difficulty: 'challenge', prompt: '108 = 2 × 2 × 3 × 3 × 3. Which power form is correct?', choices: ['2² × 3³', '2³ × 3²', '6⁵', '2⁵ × 3⁵'], answer: 0, hint: '', explain: 'Two 2s give 2² and three 3s give 3³.' },
  { difficulty: 'challenge', prompt: 'Which statement best explains why 9³ is divisible by 9?', choices: ['The exponent is 3.', '9 is one of the repeated factors in 9 × 9 × 9.', '9³ is an odd number.', 'Every power is divisible by its exponent.'], answer: 1, hint: '', explain: 'The base 9 appears as a factor, so 9³ can be divided by 9 exactly.' }
];

const extraLesson33Checks: TopicContent['checkQuestions'] = [
  { difficulty: 'foundations', prompt: 'What should be evaluated first in 6 + 2 × (7 − 4)?', choices: ['6 + 2', '2 × 7', '7 − 4', '6 + 4'], answer: 2, hint: '', explain: 'The operation inside the parentheses comes first.' },
  { difficulty: 'foundations', prompt: 'What should be evaluated first in 4 + 3² × 2?', choices: ['4 + 3', '3²', '3 × 2', '4 + 2'], answer: 1, hint: '', explain: 'Powers are evaluated before multiplication and addition.' },
  { difficulty: 'standard', prompt: 'Evaluate 48 ÷ 8 × 3.', choices: ['2', '18', '24', '144'], answer: 1, hint: '', explain: 'Multiplication and division share priority, so work left to right: 48 ÷ 8 = 6, then 6 × 3 = 18.' },
  { difficulty: 'standard', prompt: 'Evaluate 18 − 7 + 5.', choices: ['6', '10', '16', '20'], answer: 2, hint: '', explain: 'Addition and subtraction share priority: 18 − 7 = 11, then 11 + 5 = 16.' },
  { difficulty: 'standard', prompt: 'Evaluate 3 + 2 × (4² − 10).', choices: ['9', '12', '15', '21'], answer: 2, hint: '', explain: '4² = 16, then 16 − 10 = 6, then 2 × 6 = 12, then 3 + 12 = 15.' },
  { difficulty: 'standard', prompt: 'Which expression has a value of 18?', choices: ['6 + 2 × 3', '(6 + 2) × 3', '6 + 2³', '36 ÷ 6 × 3'], answer: 3, hint: '', explain: '36 ÷ 6 × 3 = 6 × 3 = 18 because multiplication and division share priority and are handled left to right.' },
  { difficulty: 'challenge', prompt: 'A student changes 4 + 2 × 5 into 6 × 5. What is the first error?', choices: ['They added before completing the multiplication.', 'They should divide first.', 'They should evaluate a power first.', 'There is no error.'], answer: 0, hint: '', explain: 'Multiplication has priority over addition, so 2 × 5 must be completed before adding 4.' },
  { difficulty: 'challenge', prompt: 'A student evaluates 20 − 6 + 4 as 20 − 10 = 10. What is the error?', choices: ['They added 6 + 4 before completing the subtraction to its left.', 'They should multiply first.', 'They forgot a power.', 'There is no error.'], answer: 0, hint: '', explain: 'Addition and subtraction share priority, so work left to right: 20 − 6 first.' },
  { difficulty: 'challenge', prompt: 'Which pair of expressions has different values?', choices: ['7 + 4 × 3 and 7 + 12', '(7 + 4) × 3 and 11 × 3', '5 + 2 × 4 and (5 + 2) × 4', '24 ÷ 6 × 2 and 4 × 2'], answer: 2, hint: '', explain: '5 + 2 × 4 = 13, while (5 + 2) × 4 = 28. Parentheses change the grouping and the value.' },
  { difficulty: 'challenge', prompt: 'Which is the correct next line after 5 + 2 × (3² − 4)?', choices: ['7 × (9 − 4)', '5 + 2 × (9 − 4)', '5 + 6 × (3 − 4)', '5 + 2 × 5²'], answer: 1, hint: '', explain: 'Evaluate the power 3² = 9 and keep every untouched part of the expression unchanged.' }
];

export function applyUnit3Enhancements(key: string, content: TopicContent): TopicContent {
  if (key === 'grade-6-math/number-operations/prime-factorization-divisibility') {
    const firstConcept = content.concepts[0]
      ? {
          ...content.concepts[0],
          text: 'A factor is a natural number, such as 1, 2, 3, …, that divides another natural number with a remainder of 0. For 24, factor pairs include 1 × 24, 2 × 12, 3 × 8, and 4 × 6.'
        }
      : content.concepts[0];

    return {
      ...content,
      hook: 'A school has 84 red tiles and 126 blue tiles. They need to be split into equal groups with none left over. What group sizes could work for both colours? How could factors help you figure it out?',
      explorePrompt: 'Work through all three parts of the Factor Lab. Predict first, build the factor structure yourself, and then use prime factors as evidence for divisibility.',
      concepts: firstConcept ? [firstConcept, ...content.concepts.slice(1)] : content.concepts,
      checkQuestions: [...content.checkQuestions, ...extraLesson31Checks]
    };
  }

  if (key === 'grade-6-math/number-operations/expressing-powers') {
    return {
      ...content,
      explorePrompt: 'Work through all three parts of the Power Lab. Identify what the base and exponent do, translate repeated multiplication into power notation, and compress repeated prime factors.',
      checkQuestions: [...content.checkQuestions, ...extraLesson32Checks]
    };
  }

  if (key === 'grade-6-math/number-operations/operations-parentheses-powers') {
    const correctedQuestions = content.questions.map((question) => question.prompt === 'Which expression has a value of 18?'
      ? { ...question, choices: ['6 + 2 × 3','(6 + 2) × 3','6 + 2³','36 ÷ 6 × 3'], answer: 3, explain: '36 ÷ 6 × 3 = 6 × 3 = 18 because multiplication and division share priority and are evaluated from left to right.' }
      : question);
    return {
      ...content,
      bigIdea: 'A shared order of operations gives every numerical expression one clear value.',
      bigIdeaDetail: 'When an expression contains several operations, changing the order can change the answer. Use this sequence: work inside parentheses first, then evaluate powers, then multiplication and division from left to right, then addition and subtraction from left to right. Multiplication and division share a priority level, and addition and subtraction share a priority level.',
      explorePrompt: 'Work through all three parts of the Order Lab. Choose each next step, practise equal-priority operations from left to right, and find the first error in worked solutions.',
      questions: correctedQuestions,
      checkQuestions: [...content.checkQuestions, ...extraLesson33Checks]
    };
  }

  return content;
}