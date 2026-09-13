import { grade7Unit1Lessons } from "../src/data/grade7Unit1.ts";
import { grade7Unit1ApplySupport } from "../src/data/grade7Unit1Apply.ts";
import { grade7Unit1ExploreChecks } from "../src/data/grade7Unit1ExploreChecks.ts";
import { grade7Unit1UnitCheckBank } from "../src/data/grade7Unit1UnitCheck.ts";
declare const process: { exitCode?: number };

const failures: string[] = [];
const normalize = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

for (const lesson of grade7Unit1Lessons) {
  if (lesson.practice.length !== 8)
    failures.push(`${lesson.number}: expected 8 supported-practice questions`);
  if (lesson.check.length !== 30)
    failures.push(`${lesson.number}: expected 30 independent-bank questions`);
  if (lesson.exit.length !== 3)
    failures.push(`${lesson.number}: expected a three-question exit ticket`);
  if (lesson.explore.phases.length !== 4)
    failures.push(`${lesson.number}: expected four Explore phases`);
  if (grade7Unit1ExploreChecks[lesson.slug]?.length !== 4)
    failures.push(`${lesson.number}: Explore lacks four mathematical checkpoints`);
  if (grade7Unit1ApplySupport[lesson.slug]?.resources.length < 1)
    failures.push(`${lesson.number}: application lacks the data students need`);
  if (grade7Unit1ApplySupport[lesson.slug]?.checks.length < 2)
    failures.push(`${lesson.number}: application lacks mathematical validation`);
  if (lesson.apply.tasks.length < 4)
    failures.push(`${lesson.number}: application task is too thin`);
  if (!lesson.next?.href)
    failures.push(`${lesson.number}: missing forward route`);

  const practicePrompts = new Set(
    lesson.practice.map((item) => normalize(item.prompt)),
  );
  if (new Set(lesson.check.map((item) => normalize(item.prompt))).size !== 30)
    failures.push(`${lesson.number}: independent bank repeats a prompt`);
  lesson.check.forEach((item, index) => {
    if (practicePrompts.has(normalize(item.prompt)))
      failures.push(
        `${lesson.number}: Check item ${index + 1} repeats supported practice`,
      );
    if (!item.feedback.trim())
      failures.push(`${lesson.number}: Check item ${index + 1} lacks feedback`);
    if (
      !Number.isInteger(item.answer) ||
      item.answer < 0 ||
      item.answer >= item.choices.length
    )
      failures.push(
        `${lesson.number}: Check item ${index + 1} has an invalid answer`,
      );
    if (new Set(item.choices).size !== item.choices.length)
      failures.push(
        `${lesson.number}: Check item ${index + 1} repeats a choice`,
      );
  });

  const categories = new Set(lesson.check.map((item) => item.category));
  if (categories.size < 5)
    failures.push(`${lesson.number}: independent bank lacks category variety`);
  const answerPositions = new Set(lesson.check.map((item) => item.answer));
  const widestItem = Math.max(
    ...lesson.check.map((item) => item.choices.length),
  );
  const requiredPositions = widestItem > 2 ? 3 : 2;
  if (answerPositions.size < requiredPositions)
    failures.push(
      `${lesson.number}: correct answers are too predictable by position`,
    );
}

if (grade7Unit1UnitCheckBank.length !== 40)
  failures.push("Unit Check must contain exactly 40 independent questions");
const lessonCheckPrompts = new Set(
  grade7Unit1Lessons.flatMap((lesson) => lesson.check.map((item) => normalize(item.prompt))),
);
grade7Unit1UnitCheckBank.forEach((item, index) => {
  if (lessonCheckPrompts.has(normalize(item.prompt)))
    failures.push(`Unit Check item ${index + 1} repeats a lesson Check Yourself prompt`);
  if (!Number.isInteger(item.answer) || item.answer < 0 || item.answer >= item.choices.length)
    failures.push(`Unit Check item ${index + 1} has an invalid answer`);
});

const byNumber = Object.fromEntries(
  grade7Unit1Lessons.map((lesson) => [lesson.number, lesson]),
);
if (!byNumber["1.6"].outcome.startsWith("PR2"))
  failures.push("Lesson 1.6 must develop PR2, not PR3");
for (const marker of ["PR3", "PR6", "PR7"])
  if (!byNumber["1.8"].outcome.includes(marker))
    failures.push(`Lesson 1.8 is missing ${marker}`);
if (!byNumber["1.8"].outcome.includes("preservation of equality"))
  failures.push("Lesson 1.8 misstates PR3");
if (!byNumber["1.8"].outcome.includes("x + a = b"))
  failures.push("Lesson 1.8 misstates PR6");
if (!byNumber["1.8"].outcome.includes("ax = b"))
  failures.push("Lesson 1.8 misstates PR7");

const expectedNext = ["1.3", "1.4", "1.5", "1.6", "1.7", "1.8"];
grade7Unit1Lessons.slice(0, -1).forEach((lesson, index) => {
  if (!lesson.next?.title.includes(expectedNext[index]))
    failures.push(
      `${lesson.number}: forward sequence does not lead to ${expectedNext[index]}`,
    );
});
if (!grade7Unit1Lessons.at(-1)?.next?.href.includes("unit-review"))
  failures.push("Lesson 1.8 does not lead to the Unit Review");

if (failures.length) {
  console.error(`Grade 7 Unit 1 content audit failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`  ✗ ${failure}`));
  process.exitCode = 1;
} else {
  console.log(
    "Grade 7 Unit 1 content audit passed: question separation, answer distribution, lesson sequence, application depth, and curriculum labels verified.",
  );
}
