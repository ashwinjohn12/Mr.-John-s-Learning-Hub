import type { TopicContent } from './topicContent';
import { unit8Lesson1 } from './unit8Lesson1';
import { unit8Lesson2 } from './unit8Lesson2';
import { unit8Lesson3 } from './unit8Lesson3';

export const unit8Content: Record<string, TopicContent> = {
  'grade-6-math/patterns/investigating-functions-tables-graphs': unit8Lesson1,
  'grade-6-math/patterns/representing-functions': unit8Lesson2,
  'grade-6-math/patterns/solving-problems-functions': unit8Lesson3
};
