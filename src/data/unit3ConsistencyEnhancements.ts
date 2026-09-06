import type { TopicContent } from './topicContent';

export function applyUnit3ConsistencyEnhancements(key: string, content: TopicContent): TopicContent {
  if (key !== 'grade-6-math/number-operations/prime-factorization-divisibility') return content;

  return {
    ...content,
    application: {
      title: 'Shared Factor Packing Challenge',
      scenario: 'A class has 84 red tiles and 126 blue tiles. The tiles must be split into the same number of equal packs, with no tiles left over.',
      tasks: [
        'Use the prime factorizations of 84 and 126 to identify the prime factors they share.',
        'Build a common factor from those shared prime factors.',
        'Use that common factor as the number of packs. How many red tiles and blue tiles go in each pack?',
        'Explain why your number of packs works for both colours.'
      ],
      reveal: '84 = 2 × 2 × 3 × 7 and 126 = 2 × 3 × 3 × 7. They share 2 × 3 × 7 = 42, so 42 packs work. Each pack gets 2 red tiles and 3 blue tiles. The goal is to reason from shared prime factors, not memorize a separate greatest-common-factor procedure.'
    }
  };
}
