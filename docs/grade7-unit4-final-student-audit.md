# Grade 7 Math Unit 4 final student audit

Audited source: owner-private preview version 15, commit `1df4feee4eab79ca4c6aaa3a6970a540fd667dfd`.

## Curriculum and pathway

- SS1 is allocated to Lessons 4.1–4.2 and supports circle-graph central angles in 4.6–4.7. The lessons address radius/diameter, construction, central-angle totals, circumference measurement, `C ÷ d ≈ π`, formula choice, applications, units, and rounding.
- SS2 is allocated to Lessons 4.3–4.5. The lessons derive parallelogram and triangle area through rearrangement, distinguish perpendicular height, estimate circle area, derive `A = πr²`, and solve composite circle-area contexts.
- SP3 is allocated to Lessons 4.6–4.7. The lessons read titles, labels, totals, percents, angles, and counts; identify misleading graphs; construct proportional sectors; and verify 100% and 360° totals.
- Every lesson retains the ten approved sections and an achievable two-session core route. Repair/Create, extended practice, extra examples, and Apply remain consolidation or extension.

## Must-fix findings resolved

1. **Explore dependency invalidation:** editing an earlier phase previously cleared only that phase. It now clears that phase and every dependent model, transcript, checkpoint, completion state, and message.
2. **Explore Create constraints:** arbitrary positive values could satisfy some numerical targets while producing invalid central angles, sector counts, percentages, or category states. Lesson-specific domain constraints now reject those constructions while accepting equivalent valid ones.
3. **Apply model completeness:** each lesson previously checked only two model quantities. Apply now checks every required labelled relationship, including the three garden angles, track radius/diameter/circumference/rail count, unused slanted side, flag totals, concentric-circle areas, graph count/angle data, and all four Activity-Day sectors.
4. **Apply stale state:** changing a calculation, estimate, unit, comparison, decision, or model dependency could leave a displayed model marked as built. Any dependency change now clears the model, transcript, completion, and success state.
5. **Water Park model validity:** stages 2, 4, and 5 could pass with incomplete models. Every stage now verifies at least three labelled quantities or lists, including both deck shapes and combined area, percent/count/angle, and all four allocation percents and angles.
6. **Quick Route Finder validity:** distractors were decorative and implausible. Each lesson now uses authentic misconceptions that a Grade 7 student must distinguish from the correct representation.

## Should-improve findings resolved

1. Check Yourself hints now refer to the exact prompt, representation, operation, and unit without revealing the answer.
2. Unit Check model distractors now show lesson-specific mathematical misconceptions instead of generic non-model text.
3. Answer-position testing now shuffles actual selectable Unit 4 items rather than testing an unrelated random-number bucket.
4. Automated guards now reject incomplete Apply and Arcade model specifications, missing dependency invalidation, unconstrained circle/sector Create states, and shallow Quick Route Finder choices.

## Passed student-perspective checks

- Seven lesson-specific readiness tasks are distinct from supported practice and independent assessment.
- All 56 supported questions have two distinct, item-specific hints, corrective feedback, and repair routes.
- All 210 Check Yourself items remain mathematically separate within their lesson pools and use number, choice, multi-select, ordering, and rendered-model responses.
- Results remain delayed, submitted controls lock, new attempts regenerate, repair links name real sections, and focus moves to results or a new attempt.
- All 21 exit items are separate transfer questions with corrective feedback and exact-section links.
- All seven Explore systems provide checkable prediction, operable controls, visible model, transcript, checkpoint, evidence, Repair, Create, and dependency invalidation.
- All seven Apply systems independently check calculations, estimates, models, units, comparisons, decisions, and evidence presence without grading prose wording.
- Review includes seven accurate model stations, 20 supported mixed questions, ten authentic misconception repairs, a separate 40-item Unit Check, balanced ten-item attempts, percentage-first recommendations, and exact destinations.
- Water Park Designer validates five connected stages and a dependent final synthesis; arbitrary models cannot accompany correct numbers to pass.
- Keyboard targets, visible focus, status announcements, non-colour text feedback, reduced-motion rules, and narrow-screen layout guards remain present.

## Rendered testing note

The supervised browser reached the preview service but the framework's public-base development route returned a 404; the prefixed route was blocked by the browser client. Source, generated HTML, private-root asset paths, responsive CSS, and interaction audits remain available, but a human desktop-and-phone rendering check is still required before a live merge.
