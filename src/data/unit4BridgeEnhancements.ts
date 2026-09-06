import type { TopicContent } from './topicContent';

export const applyUnit4BridgeEnhancements = (key: string, raw: TopicContent): TopicContent => {
  if (key !== 'grade-6-math/decimals-fractions/fractions-equal-shares') return raw;

  return {
    ...raw,
    hook: 'Five pizzas are shared equally among four families. Each family gets more than 1 pizza. How can 5 ÷ 4, 5/4, 1 1/4, and 1.25 all describe the same share?',
    estimatedTime: '80–100 min · easy to split into two sessions',
    bigIdea: 'A fraction can be a division answer: total amount ÷ number of equal shares.',
    bigIdeaDetail: 'Equal sharing connects fractions and division. If 5 pizzas are shared among 4 families, the situation is 5 ÷ 4 and also 5/4. Each family receives 5/4 = 1 1/4 pizzas. The same quantity can sometimes be written as a fraction, mixed number, or decimal. The best form depends on the situation: fractions can show an exact share clearly, while decimals are often useful for money and measurement.',
    connection: 'If 5/4 and 1.25 are the same value, what has changed: the amount, or only the way we write it?',
    explorePrompt: 'Work through Parts A–D of Fair Share Studio and try each part more than once. First build equal shares, then compare sharing methods, translate between fractions and division, and finally choose the representation that communicates an answer best for the context.',
    practiceIntro: 'Choose the level that fits you today. Foundations focuses on equal sharing and fraction ↔ division. Standard adds mixed numbers and decimals. Challenge asks you to choose representations, explain errors, and model multi-step sharing situations.',
    next: { title: 'Lesson 4.4 · Adding & Subtracting Decimal Numbers', slug: 'adding-subtracting-decimals', status: 'ready' }
  };
};
