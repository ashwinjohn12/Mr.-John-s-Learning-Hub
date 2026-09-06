import type { TopicContent } from './topicContent';

export const applyUnit4StudentEnhancements = (key: string, raw: TopicContent): TopicContent => {
  if (key !== 'grade-6-math/decimals-fractions/adding-subtracting-fractions') return raw;

  return {
    ...raw,
    hook: 'A recipe needs 3/4 cup of oats and 2/3 cup of seeds. A student says the total is 5/7 cup because 3 + 2 = 5 and 4 + 3 = 7. What is wrong with that idea? Make a prediction before you learn the method.',
    estimatedTime: '90–120 min · easy to split into two sessions',
    bigIdea: 'To add or subtract fractions, first make sure the pieces are the same size.',
    bigIdeaDetail: 'The denominator tells the size of the pieces. Thirds and fourths are different-sized pieces, so we cannot combine their numerators yet. Equivalent fractions let us rename the same amount using a shared denominator. Once the pieces have the same size, we can add or subtract how many pieces we have. The lowest common denominator is often the most efficient choice, but another correct common denominator can also work.',
    connection: 'Look at 1/2 = 3/6. What changed in the fraction? What stayed exactly the same?',
    explorePrompt: 'Complete Parts A, B, and C in order. First find a shared unit, then rename a fraction without changing its value, and finally solve by choosing the common unit before the answer. Use the bars as evidence for your thinking.',
    practiceIntro: 'Choose the level that fits you today. Foundations builds the common-denominator ideas, Standard combines the steps, and Challenge adds mixed numbers and strategy choices. Use a hint when you are stuck, then read the feedback before moving on.'
  };
};
