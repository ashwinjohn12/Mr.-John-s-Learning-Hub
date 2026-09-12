import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const dist = join(root, "dist");
const astroConfig = readFileSync(join(root, "astro.config.mjs"), "utf8");
const configuredBase = astroConfig.match(/\bbase:\s*["']([^"']+)["']/)?.[1] ?? "/";
const publicBase = configuredBase.endsWith("/")
  ? configuredBase
  : `${configuredBase}/`;
const base = "/courses/grade-7-math/patterns-relations/";
const routes = [
  "",
  "patterns-in-division/",
  "more-patterns-in-division/",
  "algebraic-expressions/",
  "relationships-in-patterns/",
  "patterns-tables/",
  "graphing-relations/",
  "reading-writing-equations/",
  "equations-algebra-tiles/",
  "unit-review/",
];
const failures = [];
const removePublicBase = (pathname) => {
  if (publicBase === "/") return pathname;
  if (pathname === publicBase.slice(0, -1)) return "/";
  return pathname.startsWith(publicBase)
    ? `/${pathname.slice(publicBase.length)}`
    : pathname;
};
const fileFor = (pathname) => {
  const localPath = removePublicBase(pathname);
  return localPath.endsWith("/")
    ? join(dist, localPath.slice(1), "index.html")
    : join(dist, localPath.slice(1));
};

for (const suffix of routes) {
  const route = base + suffix,
    file = fileFor(route);
  if (!existsSync(file)) {
    failures.push(`${route}: missing built page`);
    continue;
  }
  const html = readFileSync(file, "utf8");
  const markup = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "");
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicates.length)
    failures.push(
      `${route}: duplicate ids ${[...new Set(duplicates)].join(", ")}`,
    );
  for (const match of markup.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>/g)) {
    const href = match[1];
    if (/^(https?:|mailto:|tel:)/.test(href)) continue;
    const target = new URL(href, `https://unit.test${route}`),
      targetFile = fileFor(target.pathname);
    if (!existsSync(targetFile)) {
      failures.push(`${route}: broken link ${href}`);
      continue;
    }
    if (target.hash) {
      const targetHtml = readFileSync(targetFile, "utf8"),
        id = decodeURIComponent(target.hash.slice(1));
      if (!targetHtml.includes(`id="${id}"`))
        failures.push(`${route}: missing anchor target ${href}`);
    }
  }
  for (const match of markup.matchAll(/role="tab"[^>]*aria-controls="([^"]+)"/g))
    if (!html.includes(`id="${match[1]}"`))
      failures.push(`${route}: tab controls missing panel ${match[1]}`);
  if (!html.includes('name="viewport"'))
    failures.push(`${route}: missing responsive viewport metadata`);
}

const explore = readFileSync(
  join(root, "src/components/Grade7Unit1Explore.astro"),
  "utf8",
);
for (const marker of [
  "ArrowRight",
  "ArrowLeft",
  "Home",
  "End",
  "@media(max-width:760px)",
  "prefers-reduced-motion",
])
  if (!explore.includes(marker))
    failures.push(`Explore accessibility marker missing: ${marker}`);
const lesson = readFileSync(
  join(root, "src/components/Grade7Unit1LessonPage.astro"),
  "utf8",
);
for (const marker of [
  "aria-label={`Evidence for task",
  "firstUnanswered",
  "focus-visible",
  "@media(max-width:700px)",
])
  if (
    !lesson.includes(marker) &&
    !readFileSync(
      join(root, "src/components/Grade7Unit1Check.astro"),
      "utf8",
    ).includes(marker)
  )
    failures.push(`Lesson usability marker missing: ${marker}`);

if (failures.length) {
  console.error(
    `Grade 7 Unit 1 navigation/accessibility audit failed (${failures.length}):`,
  );
  failures.forEach((failure) => console.error(`  ✗ ${failure}`));
  process.exitCode = 1;
} else
  console.log(
    "Grade 7 Unit 1 navigation/accessibility audit passed: internal routes, anchors, IDs, tab targets, focus recovery, and responsive safeguards verified.",
  );
