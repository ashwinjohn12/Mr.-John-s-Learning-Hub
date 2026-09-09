# Jabberwocky Collaboration Standard

This is the default collaboration model for all new Jabberwocky: Mission 2190 operations.

## Core rule

**Everyone explores → Team discusses → One official team decision → Each student reflects**

The website remains the shared JCEC mission environment. Students can open the same evidence, simulations, maps, transmissions, and investigation tools on their own Chromebooks, but the project should not require each student to complete identical group work independently.

## Three work modes

### 👤 Individual Pathfinder
Use for personal predictions, reflections, explanations, changes in thinking, and individual accountability.

Typical destinations:
- student device local storage
- Pathfinder Log
- individual class document when assigned

Do not imply that local browser storage submits work to the teacher.

### 👥 Team Investigation
Use when students should investigate evidence together, discuss observations, compare explanations, solve a problem, or reach a shared conclusion.

The website should explicitly tell students to collaborate rather than silently presenting an activity to four separate devices.

Whenever possible, include a short team protocol such as:
1. Explore the evidence together.
2. Make sure every team member can explain what the evidence shows.
3. Compare ideas before choosing a conclusion.
4. Support the conclusion with evidence.

### 🗂️ Continental Archive
Use for the team's official scientific record that future teams will inherit.

There should normally be **one archive entry per team**, not one duplicate entry per student.

Archive entries may include:
- evidence summaries
- maps
- ecological concerns
- revised ratings
- management recommendations
- unresolved questions
- handoff notes

The archive is class-wide work and must remain conceptually separate from browser-local student progress.

## Required design language for new operations

Every substantial task in future Jabberwocky operations should visibly identify its work mode using the reusable `JcecWorkMode.astro` component:

- `mode="individual"`
- `mode="team"`
- `mode="archive"`

A single operation can intentionally move through all three modes.

Recommended sequence:

1. **Team Investigation** — gather and analyze evidence.
2. **Continental Archive** — record the team's official finding.
3. **Individual Pathfinder** — reflect on what changed in the student's own thinking.

## Data rules

- Individual device interactions may use local browser storage.
- Local browser storage is never described as teacher submission.
- Team work is not considered shared merely because every student can see the same webpage.
- Continental Archive data must eventually use a teacher-managed or genuinely shared class workflow.
- Future class-wide mission state must remain resettable to the default expedition state.

## Operation 02 onward

Operation 02: Environmental Survey and every later investigation should be designed from this collaboration standard first, rather than adding collaboration after the activity has already been built.
