import type { TopicContent, PracticeQuestion } from './topicContent';

const key = (unit: string, topic: string) => `grade-6-math/${unit}/${topic}`;
const uniquePush = <T>(items: readonly T[], item: T, same: (a:T,b:T)=>boolean) => items.some(existing => same(existing,item)) ? [...items] : [...items,item];

const replaceLegacyIntegerWording = (text: string) => text
  .replace(/Integers are whole-number values, their negatives, and zero\.?/g, 'Integers include natural numbers, their negative additive inverses, and zero.')
  .replace(/Integers are whole numbers, their negatives, and zero\.?/g, 'Integers include natural numbers, their negative additive inverses, and zero.')
  .replace(/whole-number values and their opposites/g, 'natural numbers and their negative additive inverses');

const mapQuestionText = (question: PracticeQuestion): PracticeQuestion => ({
  ...question,
  prompt: replaceLegacyIntegerWording(question.prompt),
  hint: replaceLegacyIntegerWording(question.hint),
  explain: replaceLegacyIntegerWording(question.explain),
  choices: question.choices.map(replaceLegacyIntegerWording)
});

export function applyGrade6CurriculumAlignment(topicKey: string, content: TopicContent): TopicContent {
  if (topicKey === key('positive-negative-numbers','what-are-integers-add')) {
    const concepts = content.concepts.map((concept,index) => index === 0 ? {
      title: 'Integers include natural numbers, their additive inverses, and zero',
      text: 'The Grade 6 curriculum describes integers using natural numbers and additive inverses. The integers extend in both directions: … −3, −2, −1, 0, 1, 2, 3 … . Decimal and fractional values such as 2.5 or −1.3 are not integers.',
      remember: 'Zero is an integer. Positive and negative integers lie on opposite sides of zero.'
    } : concept);
    const vocabulary = content.vocabulary.map(word => word.term === 'Integer' ? {
      ...word,
      definition: 'A natural number, its negative additive inverse, or zero.',
      example: '−8, 0, and +13 are integers; 2.5 is not.'
    } : word);
    return {
      ...content,
      bigIdea: 'Integers include natural numbers, their negative additive inverses, and zero; additive inverses combine to make zero.',
      bigIdeaDetail: 'The integers extend the natural numbers in both directions from zero. A positive unit and a negative unit form a zero pair because +1 + (−1) = 0. Zero pairs let us model sums without changing the total value. A number line shows the same idea as movement in positive and negative directions.',
      concepts,
      vocabulary,
      questions: content.questions.map(mapQuestionText),
      checkQuestions: content.checkQuestions.map(mapQuestionText),
      summary: content.summary.map(replaceLegacyIntegerWording)
    };
  }

  if (topicKey === key('number-operations','prime-factorization-divisibility')) {
    const composeConcept = {
      title: 'A product can be composed in multiple ways',
      text: 'The same natural number can be built from different factor groupings. For example, 72 = 8 × 9 = 6 × 12 = 2 × 4 × 3 × 3. Prime factorization keeps decomposing until every factor is prime.',
      remember: 'Different products can have the same value; prime factorization shows the number’s prime building blocks.'
    };
    const practice: PracticeQuestion = {
      difficulty:'standard',
      prompt:'Which expression is another way to compose the product 72?',
      choices:['6 × 12','7 × 10','8 × 8','9 × 9'],
      answer:0,
      hint:'Look for a factor pair whose product is exactly 72.',
      explain:'6 × 12 = 72, so it is a different composition of the same product.'
    };
    const check: PracticeQuestion = {
      difficulty:'challenge',
      prompt:'Which pair of expressions represents the same product in two different ways?',
      choices:['4 × 15 and 6 × 10','5 × 11 and 6 × 10','8 × 9 and 7 × 10','3 × 20 and 4 × 16'],
      answer:0,
      hint:'Evaluate or reason about each product.',
      explain:'4 × 15 = 60 and 6 × 10 = 60. The same product can be composed using different factors.'
    };
    const concepts = content.concepts.some(c=>c.title===composeConcept.title) ? [...content.concepts] : [content.concepts[0], composeConcept, ...content.concepts.slice(1)];
    return {
      ...content,
      goals: uniquePush(content.goals,'compose the same product in multiple ways using different factors.',(a,b)=>a===b),
      successCriteria: uniquePush(content.successCriteria,'I can show more than one factor composition for the same product and explain why the values are equal.',(a,b)=>a===b),
      concepts,
      questions: uniquePush(content.questions,practice,(a,b)=>a.prompt===b.prompt),
      checkQuestions: uniquePush(content.checkQuestions,check,(a,b)=>a.prompt===b.prompt),
      summary: uniquePush(content.summary,'The same product can be composed in multiple ways before it is decomposed into prime factors.',(a,b)=>a===b),
      review: uniquePush(content.review,'I can compose the same product in more than one way.',(a,b)=>a===b)
    };
  }

  if (topicKey === key('statistics','conducting-experiments')) {
    const concepts = content.concepts.map((concept,index)=> index === 0 ? {
      title:'Outcomes are single results; an event can include one or more outcomes',
      text:'The possible outcomes are all individual results that could occur. An event is the outcome or group of outcomes you are interested in. For a fair number cube, the event “roll an even number” contains the outcomes {2, 4, 6}.',
      remember:'Outcome = one result. Event = one or more outcomes grouped by a condition.'
    } : concept);
    const eventExample = {
      title:'Example 4 · Describe an event',
      problem:'A fair number cube is rolled. What outcomes make up the event “roll a number greater than 4”?',
      steps:['List the possible outcomes: 1, 2, 3, 4, 5, 6.','Apply the event condition: greater than 4.','Keep the outcomes that satisfy the condition.'],
      answer:'The event contains {5, 6}.'
    };
    const examples = [...content.examples];
    if (examples.length >= 4) examples[3] = eventExample; else examples.push(eventExample);
    const eventWord = { term:'Event', definition:'One outcome or a group of outcomes from an experiment that match a condition.', example:'On a number cube, “roll an even number” is the event {2, 4, 6}.' };
    const practice: PracticeQuestion = {
      difficulty:'standard',
      prompt:'A fair number cube is rolled. Which outcomes are in the event “roll a number greater than 4”?',
      choices:['{1,2,3,4}','{4,5,6}','{5,6}','{6}'],
      answer:2,
      hint:'An event can contain more than one outcome. Keep every result greater than 4.',
      explain:'The outcomes greater than 4 are 5 and 6, so the event is {5,6}.'
    };
    const check: PracticeQuestion = {
      difficulty:'challenge',
      prompt:'Which statement correctly describes the event “roll an even number” on a fair six-sided number cube?',
      choices:['The event is {2,4,6}.','The event is only {2}.','The event is {1,3,5}.','An event cannot contain several outcomes.'],
      answer:0,
      hint:'',
      explain:'An event may combine several possible outcomes. The even outcomes are 2, 4, and 6.'
    };
    return {
      ...content,
      goals:[content.goals[0],'describe an event as one outcome or a combination of outcomes.',...content.goals.slice(1)],
      successCriteria: uniquePush(content.successCriteria,'I can describe an event and list the outcomes that belong to it.',(a,b)=>a===b),
      concepts,
      examples,
      vocabulary: content.vocabulary.some(v=>v.term==='Event') ? [...content.vocabulary] : [content.vocabulary[0],content.vocabulary[1],eventWord,...content.vocabulary.slice(2)],
      explorePrompt:'Run the Experiment Lab. Before collecting data, name the possible outcomes and an event you could track—for example, “roll an even number.” Then compare a coin, number cube, equal spinner, and unequal spinner, and organize the frequencies.',
      questions: uniquePush(content.questions,practice,(a,b)=>a.prompt===b.prompt),
      checkQuestions: uniquePush(content.checkQuestions,check,(a,b)=>a.prompt===b.prompt),
      summary: uniquePush(content.summary,'An event can contain one outcome or several outcomes that match a condition.',(a,b)=>a===b),
      review: uniquePush(content.review,'I can describe an event and identify the outcomes it contains.',(a,b)=>a===b)
    };
  }

  return content;
}
