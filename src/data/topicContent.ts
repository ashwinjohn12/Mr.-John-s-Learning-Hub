export type VocabularyWord = { term: string; definition: string; example: string };
export type PracticeQuestion = {
  difficulty: 'foundations' | 'standard' | 'challenge';
  prompt: string;
  choices: string[];
  answer: number;
  hint: string;
  explain: string;
};

export const topicContent = {
  'grade-6-math/number/factors-and-multiples': {
    goals: [
      'find all factor pairs of a whole number.',
      'distinguish factors from multiples.',
      'identify prime and composite numbers.'
    ],
    bigIdea: 'Multiplication and division reveal the hidden structure of whole numbers.',
    bigIdeaDetail: 'When one whole number divides another with no remainder, it is a factor. Multiples are created by multiplying. These relationships help us organize objects, simplify calculations, and recognize patterns.',
    connection: 'How could arranging 24 students into equal rows help you find every factor of 24?',
    concepts: [
      { title: 'Factors divide exactly', text: 'A factor pair multiplies to make a number. For 24, the pairs are 1 × 24, 2 × 12, 3 × 8, and 4 × 6.' },
      { title: 'Multiples keep growing', text: 'Start with a number and multiply by 1, 2, 3, … The first multiples of 6 are 6, 12, 18, 24, and 30.' },
      { title: 'Prime means exactly two', text: 'A prime number has only 1 and itself as factors. A composite number has more than two factors.' }
    ],
    misconception: '<strong>Factors fit inside a number.</strong> Multiples extend outward from a number. For 6, the factors stop at 6, but the list of multiples never ends.',
    vocabulary: [
      { term: 'Factor', definition: 'A whole number that divides another whole number exactly.', example: '3 is a factor of 12 because 12 ÷ 3 = 4.' },
      { term: 'Multiple', definition: 'A number found by multiplying a given number by a whole number.', example: '12 is a multiple of 3 because 3 × 4 = 12.' },
      { term: 'Prime number', definition: 'A whole number greater than 1 with exactly two factors: 1 and itself.', example: '7 is prime because its only factors are 1 and 7.' },
      { term: 'Composite number', definition: 'A whole number greater than 1 with more than two factors.', example: '12 is composite because it has six factors.' }
    ] satisfies VocabularyWord[],
    questions: [
      { difficulty: 'foundations', prompt: 'Which number is a factor of 18?', choices: ['4', '6', '8', '12'], answer: 1, hint: 'A factor divides 18 with no remainder.', explain: '18 ÷ 6 = 3, so 6 is a factor of 18.' },
      { difficulty: 'standard', prompt: 'Which list contains all the factors of 20?', choices: ['1, 2, 4, 5, 10, 20', '2, 4, 5, 10', '1, 2, 5, 10, 20', '1, 4, 5, 20'], answer: 0, hint: 'Start with factor pairs: 1 × 20, 2 × 10, and 4 × 5.', explain: 'The three factor pairs give 1, 2, 4, 5, 10, and 20.' },
      { difficulty: 'standard', prompt: 'Which number is a common multiple of 6 and 8?', choices: ['14', '24', '36', '42'], answer: 1, hint: 'List a few multiples of each number and find the first match.', explain: '24 = 6 × 4 and 24 = 8 × 3.' },
      { difficulty: 'challenge', prompt: 'A number has exactly three factors. Which number could it be?', choices: ['8', '9', '10', '12'], answer: 1, hint: 'Test the factor pairs for each choice.', explain: 'The factors of 9 are 1, 3, and 9—exactly three factors.' }
    ] satisfies PracticeQuestion[],
    review: ['I can find factor pairs.', 'I can list multiples.', 'I can explain prime and composite.', 'I can use factors in a real situation.']
  }
} as const;
