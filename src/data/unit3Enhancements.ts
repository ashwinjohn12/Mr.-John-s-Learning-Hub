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

export function applyUnit3Enhancements(key: string, content: TopicContent): TopicContent {
  if (key !== 'grade-6-math/number-operations/prime-factorization-divisibility') return content;

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
