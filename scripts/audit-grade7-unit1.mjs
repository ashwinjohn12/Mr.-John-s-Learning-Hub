import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
const root = resolve(import.meta.dirname, ".."),
  base = "courses/grade-7-math/patterns-relations";
const lessons = [
  [
    "patterns-in-division",
    "Patterns in Division",
    "Divisibility Pattern Lab",
    "Community Supply Packing Plan",
  ],
  [
    "more-patterns-in-division",
    "More Patterns in Division",
    "Digit-Sum Detective & Zero-Group Simulator",
    "Festival Shipment Validator",
  ],
  [
    "algebraic-expressions",
    "Algebraic Expressions",
    "Expression Composer",
    "Youth Program Pay Choice",
  ],
  [
    "relationships-in-patterns",
    "Relationships in Patterns",
    "Growing Design Builder",
    "Community Clean-up Plans",
  ],
  [
    "patterns-tables",
    "Patterns and Relationships in Tables",
    "Mystery Machine Forensics",
    "Refill Station Supply Plan",
  ],
  [
    "graphing-relations",
    "Graphing Relations",
    "Graph Story Studio",
    "Recreation Pass Decision",
  ],
  [
    "reading-writing-equations",
    "Reading and Writing Equations",
    "Equation or Expression? Case Files",
    "School Event Equation Audit",
  ],
  [
    "equations-algebra-tiles",
    "Solving Equations Using Algebra Tiles",
    "Balance Lab: Same Move, Both Sides",
    "Robotics Parts Packing Repair",
  ],
];
const exploreModels = {
  "more-patterns-in-division": "digit-model",
  "algebraic-expressions": "bar-model",
  "relationships-in-patterns": "tile-model",
  "patterns-tables": "pair-table",
  "graphing-relations": "data-graph-point",
  "reading-writing-equations": "data-classify",
  "equations-algebra-tiles": "balance-model",
};
const failures = [];
const strip = (html) =>
  html
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ");
const decode = (s) =>
  s
    .replace(/&quot;|&#34;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
for (const [slug, title, explore, apply] of lessons) {
  const file = join(root, "dist", base, slug, "index.html");
  if (!existsSync(file)) {
    failures.push(`Missing ${slug}`);
    continue;
  }
  const html = readFileSync(file, "utf8"),
    visible = strip(html);
  for (const id of [
    "overview",
    "big-ideas",
    "understand",
    "examples",
    "vocabulary",
    "explore",
    "practise",
    "check",
    "apply",
    "review",
  ])
    if (!html.includes(`id="${id}"`)) failures.push(`${slug}: missing #${id}`);
  for (const marker of [
    title,
    explore,
    apply,
    "PRACTISE WITH SUPPORT",
    "CHECK YOURSELF",
    "3-QUESTION EXIT TICKET",
  ])
    if (!visible.includes(marker)) failures.push(`${slug}: missing ${marker}`);
  if (slug !== "patterns-in-division") {
    const practice = (html.match(/data-item(?:\s|>)/g) || []).length;
    if (practice !== 8)
      failures.push(`${slug}: ${practice} supported items, expected 8`);
    const match = html.match(/data-independent-check[^>]*data-bank="([^"]+)"/);
    if (!match) failures.push(`${slug}: missing independent bank`);
    else
      try {
        const bank = JSON.parse(decode(match[1]));
        if (bank.length !== 30)
          failures.push(`${slug}: bank has ${bank.length}, expected 30`);
        bank.forEach((q, i) => {
          if (
            !Array.isArray(q.choices) ||
            !Number.isInteger(q.answer) ||
            q.answer < 0 ||
            q.answer >= q.choices.length ||
            !q.feedback
          )
            failures.push(`${slug}: invalid bank item ${i + 1}`);
          if (new Set(q.choices).size !== q.choices.length)
            failures.push(`${slug}: duplicate options in bank item ${i + 1}`);
        });
      } catch (error) {
        failures.push(
          `${slug}: bank JSON could not be audited (${error.message})`,
        );
      }
    if (!html.includes("data-explanation="))
      failures.push(`${slug}: practice explanations not embedded`);
    if ((html.match(/<fieldset data-exit-item/g) || []).length !== 3)
      failures.push(`${slug}: exit ticket is not 3 questions`);
    if ((html.match(/data-task-response/g) || []).length < 4)
      failures.push(
        `${slug}: application lacks a response surface for each task`,
      );
    if (!html.includes(exploreModels[slug]))
      failures.push(`${slug}: missing its lesson-specific Explore model`);
    if (!html.includes('role="tablist"') || !html.includes('tabindex="-1"'))
      failures.push(`${slug}: Explore tabs lack roving-keyboard semantics`);
    if (!html.includes('aria-labelledby="'))
      failures.push(`${slug}: Explore panels are not labelled by their tabs`);
    if (!html.includes('class="lesson-nav"') || !html.includes("PREVIOUS"))
      failures.push(`${slug}: previous/next lesson navigation is incomplete`);
    if (!html.includes("data-warmup") || !html.includes("QUICK READINESS"))
      failures.push(`${slug}: missing a lesson-specific readiness check`);
  }
}
const unitFile = join(root, "dist", base, "index.html");
if (!existsSync(unitFile)) failures.push("Missing Unit 1 landing page");
else {
  const html = readFileSync(unitFile, "utf8");
  for (const [slug] of lessons)
    if (!html.includes(`/patterns-relations/${slug}/`))
      failures.push(`Unit landing missing ${slug}`);
  if (!html.includes("/patterns-relations/unit-review/"))
    failures.push("Unit landing missing review link");
}
const reviewFile = join(root, "dist", base, "unit-review", "index.html");
if (!existsSync(reviewFile)) failures.push("Missing Unit 1 Review");
else {
  const html = readFileSync(reviewFile, "utf8"),
    visible = strip(html);
  for (const marker of [
    "Five concept stations",
    "Supported mixed practice",
    "Repair Shop",
    "INDEPENDENT UNIT CHECK",
    "Pattern Machine Mission",
    "SPIRALLING BACK",
    "40-item unit bank",
  ])
    if (!visible.includes(marker)) failures.push(`Review missing ${marker}`);
  for (const widget of [
    "data-supported-practice",
    "data-independent-check",
    "data-unit-arcade",
  ])
    if (!html.includes(widget)) failures.push(`Review missing ${widget}`);
  if ((html.match(/class="station-example"/g) || []).length !== 5)
    failures.push("Review does not contain five worked concept stations");
  if ((html.match(/<summary[^>]*>“/g) || []).length !== 8)
    failures.push("Repair Shop does not route all eight lesson misconceptions");
  if (html.includes('href="/courses/grade-7-math/integers/"'))
    failures.push("Review links students into unfinished Unit 2");
  const match = html.match(/data-independent-check[^>]*data-bank="([^"]+)"/);
  if (match)
    try {
      const bank = JSON.parse(decode(match[1]));
      if (bank.length !== 40)
        failures.push(`Unit bank has ${bank.length}, expected 40`);
      const categories = Object.groupBy(bank, (item) => item.category);
      for (const lesson of lessons.map((_, index) => `Lesson 1.${index + 1}`))
        if ((categories[lesson] || []).length !== 5)
          failures.push(`Unit bank does not contain five balanced items for ${lesson}`);
      if (new Set(bank.map((item) => item.prompt)).size !== bank.length)
        failures.push("Unit bank repeats a question prompt");
    } catch (error) {
      failures.push(`Unit bank JSON could not be audited (${error.message})`);
    }
}
const source = readFileSync(join(root, "src/data/grade7Unit1.ts"), "utf8");
for (const marker of [
  "PR3 — demonstrate preservation of equality (developed)",
  "PR6 — model and solve x + a = b problems (introduced)",
  "PR7 — model and solve ax = b problems (introduced)",
])
  if (!source.includes(marker))
    failures.push(`Lesson 1.8 alignment missing ${marker}`);
const unitSource =
  readFileSync(join(root, "src/data/courses.ts"), "utf8").match(
    /slug: 'patterns-relations'[\s\S]*?\n      \},/i,
  )?.[0] || "";
if (/status: 'planned'/.test(unitSource))
  failures.push("A Unit 1 topic is still planned");
if (!source.includes("PR2 — graph and analyze relations from tables of values"))
  failures.push("Lesson 1.6 is not aligned to PR2");
if (source.includes("PR3 — graph and analyze"))
  failures.push("Lesson 1.6 still mislabels graphing as PR3");
const checkSource = readFileSync(
  join(root, "src/components/Grade7Unit1Check.astro"),
  "utf8",
);
if (checkSource.includes("Complete all five"))
  failures.push(
    "Check Yourself still contains a hard-coded five-question message",
  );
if (!checkSource.includes("Review these lessons next:"))
  failures.push("Unit Check does not provide missed-lesson routing");
if (failures.length) {
  console.error(`Grade 7 Unit 1 audit failed (${failures.length}):`);
  failures.forEach((x) => console.error(`  ✗ ${x}`));
  process.exitCode = 1;
} else
  console.log(
    "Grade 7 Unit 1 audit passed: 8 lessons, ten-section architecture, practice, separate banks, review, arcade, and approved Lesson 1.8 alignment verified.",
  );
