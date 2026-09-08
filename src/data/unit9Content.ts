import type { TopicContent } from './topicContent';
import { unit9Lesson1 } from './unit9Lesson1';
import { unit9Lesson2 } from './unit9Lesson2';
import { unit9Lesson3 } from './unit9Lesson3';
import { applyGrade6CurriculumAlignment } from './grade6Alignment';

export const unit9Content: Record<string, TopicContent> = {
  'grade-6-math/statistics/conducting-experiments': applyGrade6CurriculumAlignment('grade-6-math/statistics/conducting-experiments',unit9Lesson1),
  'grade-6-math/statistics/relative-frequency': applyGrade6CurriculumAlignment('grade-6-math/statistics/relative-frequency',unit9Lesson2),
  'grade-6-math/statistics/analyzing-relative-frequency': applyGrade6CurriculumAlignment('grade-6-math/statistics/analyzing-relative-frequency',unit9Lesson3)
};
