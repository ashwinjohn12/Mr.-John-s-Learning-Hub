# Mr. John’s Learning Hub

A reusable Astro framework for Grade 6–7 Mathematics and Grade 7–9 Science.

## Local development

```sh
npm install
npm run dev
```

## Content model

Course and unit navigation is generated from `src/data/courses.ts`. Lesson text, vocabulary, practice questions, and review checks live separately in `src/data/topicContent.ts`. The reusable topic page at `src/pages/courses/[course]/[unit]/[topic].astro` turns that content into the shared learning rhythm:

**Big Ideas → Understand → Vocabulary → Explore → Practise → Apply → Review**

## Publishing

The included GitHub Actions workflow builds and deploys the site to GitHub Pages whenever the `main` branch is updated. In the repository settings, choose **GitHub Actions** as the Pages source.
