import type { TopicContent } from './topicContent';
import { unit4Lesson45Content } from './unit4Lesson45Content';

export const unit4Lesson45QAContent: TopicContent = {
  ...unit4Lesson45Content,
  questions: unit4Lesson45Content.questions.map((question) => {
    if (question.prompt === 'Evaluate 15.6 + (3.1 × 4).') {
      return {
        ...question,
        choices: ['28.0', '62.4', '18.7', '74.8'],
        answer: 0,
        explain: '3.1 × 4 = 12.4, then 15.6 + 12.4 = 28.0.'
      };
    }
    return question;
  })
};
