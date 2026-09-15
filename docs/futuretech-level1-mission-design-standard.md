# FutureTech Level 1 Mission Design Standard

**Status:** APPROVED / FROZEN INTERNAL STANDARD  
**Approved baseline:** Mission 1 — *Make It Happen* and Mission 2 — *Make It Think* at reviewed branch head `ccbf75f4db6b998cc02236048733094998a34ef1`  
**Applies to:** future Level 1 FutureTech student missions  
**Does not authorize:** changes to Missions 1–2, public-site publishing, or Mission 3 implementation.

## 1. Core design rule

Every mission must be usable by a Grade 8/9 beginner with minimal teacher explanation. The page should answer, in order:

1. What do I need?
2. What do I click or create first?
3. What should the blocks roughly look like?
4. What should happen when it works?
5. What do I do when it does not work?
6. What must I build on my own?
7. How do I prove I understand it?
8. How do I leave the station ready?

Use **visual structure before additional prose**. Add words only when a beginner could still reasonably misinterpret the task after seeing the model.

## 2. Locked mission architecture

Use the shared `FutureTechMissionFrame.astro` and preserve this exact six-stage sequence:

**1 Set Up → 2 First Code → 3 Make It React → 4 Build It → 5 Level It Up → 6 Checkpoint**

After Stage 6, always include:

**Skill Passport → Reset**

Required continuity:

- mission hero, mission question, and student-facing readiness statement;
- six-stage jump navigation;
- persistent TRY 4 reminder near the top;
- Stage 1 equipment/setup and partner-role reminder when relevant;
- Driver/Navigator role switch at Stage 3 for partnered work;
- Stage 4 as the student-owned creation task;
- Stage 5 optional only after the required build works;
- Stage 6 individual mastery check, even when the build was partnered;
- Skill Passport written as student "I can..." statements;
- Reset using the established numbered-kit routine.

Do not redesign this sequence for individual missions.

## 3. Beginner scaffolding level

Each mission should teach only the **smallest new concept set needed** for the next meaningful build.

Preferred progression inside a mission:

**tiny success → guided variation → combine ideas → personalize → explain/change independently**

Use:

- short steps;
- one action per sentence when possible;
- familiar student language first, precise technical vocabulary second;
- one clear example of a new structure;
- observable success statements;
- common-bug prompts tied to the exact task.

Avoid:

- long tutorials before students touch the tool;
- multiple equivalent examples of the same idea;
- explaining every possible MakeCode option;
- giving the finished Stage 4 solution;
- adding advanced concepts to the required pathway because they may be useful later.

A student should receive enough support to begin independently, but still need to make decisions during Build It.

## 4. Block-finder chips

When students must locate unfamiliar MakeCode blocks, include compact **block-finder chips** immediately above the relevant code model.

Format:

**Category → block name**

Examples:

- `Basic → show string`
- `Input → on button pressed`
- `Variables → set / change`
- `Logic → if / =`
- `Loops → repeat`

Rules:

- include only categories actually needed for that step;
- use MakeCode category names students will see on screen;
- keep chips visually secondary to the task;
- do not turn them into a full toolbox inventory.

## 5. Mini MakeCode models

Mini code models are the default visual support for **new block arrangement, order, or nesting**. They are simplified visual maps, not screenshots and not copy-the-answer templates.

### Use a code model when

A beginner must understand at least one of these:

- where a new block belongs;
- which event owns a set of instructions;
- the difference between two similar operations, such as SET vs CHANGE;
- execution order that affects the result;
- nested logic, such as IF containing REPEAT;
- two or more event stacks that must be compared;
- a structure that students are likely to assemble incorrectly from prose alone.

### Do not use a code model when

- the block arrangement has already been mastered in the same or previous mission;
- the task is mainly creative choice rather than structural understanding;
- the model would reveal the complete required Build It solution;
- a success indicator or one-line reminder is enough;
- the page would gain another example without reducing a realistic beginner error.

### Model design rules

- show only the blocks needed to communicate the structure;
- preserve visible nesting/indentation;
- label the model as an example or comparison point;
- explicitly allow student values, icons, messages, ranges, and themes to differ;
- pair the model with block-finder chips when blocks are new;
- prefer redrawable HTML/CSS block models over interface screenshots for ordinary coding structures.

Use literal screenshots only when the **interface location itself** is the learning problem, such as a repeatedly confusing device-connect or download workflow. Do not use screenshots merely to decorate a mission.

## 6. Success indicators

Every major guided coding step needs an observable **success indicator**.

Good success indicators describe what the student can see or make happen, for example:

- initials scroll on the real micro:bit;
- Button A increases the displayed score;
- shaking produces a value in the intended range;
- the special response happens only when the IF condition is true.

Avoid "you are done when your code is correct." Students need a result they can test.

Use the established green success treatment consistently.

## 7. TRY 4 troubleshooting

TRY 4 is course-wide and must remain unchanged in meaning:

1. **CHECK** — inspect the blocks, order, values, and nesting; compare with the code model when one exists.
2. **SIMULATE** — test the newest code on screen.
3. **DOWNLOAD** — send the newest version to the device.
4. **PARTNER** — explain what should happen and what actually happened.

Then ask the teacher and state what has already been tried.

Mission-specific warnings may add one or two likely bugs, but they must support TRY 4 rather than replace it.

## 8. Build It requirements

Stage 4 is the required student-owned creation.

Every Build It section must include:

- a short design brief;
- a scannable checklist of non-negotiable requirements;
- at least one meaningful student choice;
- testing on the intended physical device when hardware is part of the mission;
- no complete finished solution shown immediately beside the challenge.

Student choice may include theme, message, icon, value, range, input, repeated effect, layout, or other mission-appropriate feature.

The required build should demonstrate the mission's core skills without quietly adding optional advanced concepts.

## 9. Level It Up

Stage 5 is optional and begins **only after Build It works**.

Provide a small set of extensions that:

- deepen the same concept or introduce a controlled next-step idea;
- can be attempted independently;
- give early finishers productive work while waiting for a checkpoint;
- do not become hidden requirements for passing the mission.

Use concise extension cards. Prefer 3–4 strong options over a long list.

## 10. Individual checkpoint

Stage 6 verifies individual mastery.

Default checkpoint pattern:

1. **Make/identify** — student demonstrates or points to the relevant working feature.
2. **Explain** — student explains the event, variable, decision, loop, input/output, or other target concept.
3. **Change** — teacher requests one small change; student edits, tests, and explains it independently.

Keep checkpoints short enough to run during a multi-level maker class.

Partnered students may present the project together, but they complete the mastery check individually. One student's retry does not invalidate the other student's result.

Mission outcome language remains:

- **MISSION COMPLETE**
- **RETRY ONE SKILL**
- **SUPPORT ROUTE**

## 11. Skill Passport

After the checkpoint, include a compact list of student-facing skill statements.

Rules:

- write each as `I can...`;
- include only skills actually taught and checked in the mission;
- keep the list short and scannable;
- do not add enrichment-only skills as required passport items.

The passport records mastery; it is not a second assignment.

## 12. Reset

Every hardware mission ends with the established reset routine:

- project saved correctly;
- device returned to the numbered kit;
- matching cable returned and loosely coiled;
- kit complete and workspace clear;
- damage or missing equipment reported;
- passport/progress updated when used.

Keep the Reset section visually consistent across missions so students learn it as a routine rather than reread it as new instructions.

## 13. Responsive behaviour

Future mission pages must preserve the responsive behaviour demonstrated by Missions 1–2 and the shared mission frame.

Required:

- readable at desktop, Chromebook/tablet, 390 px, 375 px, and 320 px;
- no horizontal page scrolling;
- stage navigation reflows rather than shrinking below readability;
- two-column task/check/extension areas collapse to one column on narrow screens;
- code models stack vertically on narrow screens;
- nested blocks remain visibly indented after stacking;
- buttons/CTAs wrap safely and remain tappable;
- no essential meaning may depend on hover.

Every mission release should pass the existing FutureTech build/audit and rendered-preview smoke checks.

## 14. Accessibility

Maintain the existing accessibility baseline:

- semantic headings and section order;
- meaningful link text;
- visible keyboard focus states;
- `aria-label` on code-model regions where helpful;
- sufficient contrast for instructional text and status treatments;
- do not rely on colour alone to distinguish code meaning;
- plain-language text accompanies visual code models;
- reduced-width layouts must remain fully usable without zooming horizontally.

Visual models support comprehension but never replace the written task or success condition.

## 15. Visual language

Preserve the approved FutureTech visual system:

- dark/purple mission hero;
- compact mission-code styling;
- restrained cyan/green/orange status accents;
- numbered stage cards;
- purple concept callouts;
- green success boxes;
- orange warning/TRY 4 boxes;
- cyan Level It Up cards;
- dark pseudo-MakeCode workspaces with clearly differentiated block families;
- rounded, compact, high-contrast cards with generous spacing.

Future missions may add task-specific visuals, diagrams, hardware callouts, or code block families, but they should feel like extensions of this system rather than a redesign.

## 16. Final authoring test

Before a mission is considered ready, verify that a beginner can answer these without teacher explanation:

- Where do I start?
- What do I click or build next?
- Where do I find the new blocks?
- What should the important block structure look like?
- What should happen when it works?
- What should I try when it fails?
- Which parts must I personalize or decide myself?
- What do I need to show at the checkpoint?
- What do I do when I finish?

If the answer to one of these is unclear, prefer a **small visual refinement or clearer success cue** before adding more prose.

---

**Frozen reference implementation:**

- `src/components/FutureTechMissionFrame.astro`
- `src/pages/courses/futuretech-lab/creator-foundations/mission-1-make-it-happen.astro`
- `src/pages/courses/futuretech-lab/creator-foundations/mission-2-make-it-think.astro`

Mission 3 remains outside this specification task and is not implemented by this document.