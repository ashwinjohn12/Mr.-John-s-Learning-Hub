# Grade 7 Math Unit 7 — Data Analysis and Probability

Internal implementation specification. This file is development-only and does not change the public course map or hosting configuration.

## Approved sequence
1. **7.1 Mean and Mode** — SP1
2. **7.2 Median and Range** — SP1
3. **7.3 The Effects of Outliers on Average** — SP2
4. **7.4 Applications of Averages** — SP1, SP2
5. **7.5 Different Ways to Express Probability** — SP4
6. **7.6 Tree Diagrams and Two-Event Experiments** — SP5, SP6
7. **Unit Review & Math Arcade — Board Game Fairness Lab**

SP3 (circle graphs) remains in approved Unit 4 and is not duplicated here.

## Alberta achievement-indicator coverage
- **SP1:** determine mean, median, and mode and explain why values may be equal/different; determine range; identify contexts where mean/median/mode is most appropriate; solve problems involving measures of central tendency.
- **SP2:** identify outliers; explain their effect on measures of central tendency; justify including or excluding an outlier when reporting; identify situations where outliers should or should not be used.
- **SP4:** determine probability and express it as ratio, fraction, and percent; recognize 0/0% as impossible and 1/100% as certain.
- **SP5:** give and explain examples of two independent events; identify the sample space of two independent events using a tree diagram, table, or other organizer.
- **SP6:** determine theoretical probability for two independent events; conduct/interpret an experiment comparing experimental and theoretical probability; solve problems involving two independent events.

## Architecture
Each lesson retains the audited ten sections: Overview, Big Ideas, Understand, Examples, Vocabulary, Explore, Practise, Check Yourself, Apply, Review. Each has a prerequisite readiness check, two-session core pathway, four concept cards, four worked examples, five-phase Predict → Build → Verify → Repair → Create Explore, 8 supported questions, separate 30-question independent bank, strict Apply validator, three-question exit ticket, and previous/next navigation.

Data/probability representations are validated as mathematical objects, not decorations. Correct calculations cannot pass when paired with a misleading graph, unsuitable scale, missing/incorrect label or unit, invalid probability model, or unsupported interpretation/decision. Equivalent mathematically valid representations and strategies are accepted where more than one is appropriate. Free-written reasoning is never auto-graded by length, keywords, digits, or similarity.

## Review architecture
The Unit Review includes a six-strand Quick Route Finder, one accessible model station per lesson, 20 supported mixed-review questions, at least 10 authentic misconception repairs, a separate 40-question Unit Check, balanced 10-question attempts that include all six lessons, total and lesson-specific percentage scoring with exact repair routes, a dependent five-stage Board Game Fairness Lab Math Arcade, and a final synthesis. Unit 8 is shown only as coming later and is not linked.

## Release gate
Run one full build and Units 1–6 regression gate after implementation; run Unit 7 structural/content audits including 10,000 balanced Unit Check attempts and 100,000 actual answer-choice shuffles. Verify protected-content diff is additive Unit 7/development-CI only. Attempt one rendered pass at desktop, tablet, 390 px, 375 px, and 320 px only when supervised-browser infrastructure exists. Publish exactly one owner-private preview version only after reliable gates pass. Never deploy this branch to public GitHub Pages.