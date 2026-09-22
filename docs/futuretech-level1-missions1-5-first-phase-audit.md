# FutureTech Level 1 — Missions 1–5 First-Phase Progression Audit

**Status:** APPROVED / FROZEN FIRST PHASE  
**Missions:**  
1 — Make It Happen  
2 — Make It Think  
3 — Build a Game  
4 — Robot Rookie  
5 — Sense → Think → Act  

**Scope:** whole-sequence progression and consistency audit before Mission 6  
**Source of truth:** implemented student-facing mission pages on `dev/futuretech-lab-framework-20260915-v2`

---

# Final decision

Missions 1–5 form a coherent first phase of FutureTech Level 1 and are frozen together.

One real sequence-level inconsistency required correction:

- Missions 1 and 2 already used checkpoint-gated next-mission handoffs.
- Missions 3 and 4 did not yet link forward because Missions 4 and 5 did not exist when those missions were originally frozen.

The sequence now consistently uses:

**Checkpoint complete? Continue →**

for:

- Mission 1 → Mission 2
- Mission 2 → Mission 3
- Mission 3 → Mission 4
- Mission 4 → Mission 5

Mission 5 intentionally has no next-mission CTA because Mission 6 has not been designed or released.

No other student-facing redesign is warranted.

---

# 1. Concept progression

## Mission 1 — Make It Happen

Core progression:

**input → event → sequence → output**

Students learn:

- micro:bit / MakeCode workflow;
- Button A / Button B as inputs;
- LED display as output;
- events;
- instruction order / sequence;
- simulator → download → physical device;
- change and test.

The required Build It task, **Interactive Badge**, uses only the concepts introduced in the mission.

## Mission 2 — Make It Think

Core progression:

**remember → randomize → repeat → decide**

Students add:

- variables;
- SET versus CHANGE;
- randomness;
- simple repeat loop;
- IF condition;
- execution order and nesting.

The required **Chance Machine** combines those concepts without adding an unrelated new hardware or interface demand.

## Mission 3 — Build a Game

Core progression:

**movement → input → rule → score/end → playtest → improve**

Mission 3 integrates prior coding skills rather than treating them as separate exercises:

- events / controller input;
- repeated motion;
- IF/ELSE game rule;
- score or game-over response;
- testing;
- improvement after another person plays.

The two hardware pathways remain computationally equivalent.

The extra four-code-model count is justified because each controller pathway needs its own movement model and rule model. A student reads only the assigned path rather than all four as one required tutorial.

## Mission 4 — Robot Rookie

Core progression:

**code → port → physical output**

Students extend input/output thinking beyond the micro:bit itself:

- Hummingbird startup;
- physical port mapping;
- external LED brightness;
- position-servo angle;
- button event → external light/motion;
- hardware safety / power state.

The required **Robot Signal** asks students to combine light and motion into two meaningful physical states.

## Mission 5 — Sense → Think → Act

Core progression:

**sensor → value → threshold → IF/ELSE → output → repeat**

Students add:

- sensor value;
- evidence-based threshold;
- repeated sensing;
- automatic two-state response;
- reactive-system debugging.

The required **Reactive Signal** closes the coding/robotics arc by turning Mission 4 outputs into responses driven by environmental input.

## Sequence verdict

The five missions now form a clear conceptual ladder:

**events/sequences  
→ variables/logic  
→ integrated game system  
→ physical robot outputs  
→ reactive sensing**

No concept is missing between Missions 1–5.

No advanced concept is required before students need it.

---

# 2. Scaffolding progression

## Mission 1 — highest scaffolding

Students receive:

- explicit hardware identification;
- first-click guidance;
- two visual code models;
- direct success cues;
- highly bounded Build It requirements.

This is appropriate for the course entry point.

## Mission 2 — guided conceptual scaffolding

Students already know the MakeCode/device workflow.

The page shifts support toward:

- SET vs CHANGE;
- nested IF + repeat;
- execution order;
- conceptual explanations rather than hardware basics.

Students make more decisions in Build It than in Mission 1.

## Mission 3 — integration scaffolding

The page provides more visible structure because students enter one of two hardware/editor pathways.

However:

- each student follows only one path;
- the code models are path-specific rather than repeated examples of one concept;
- Stage 4 does not reveal the finished game;
- playtesting and improvement increase independence.

## Mission 4 — hardware scaffolding

Support rises temporarily around **hardware safety and port mapping**, not around previously mastered programming ideas.

This is appropriate domain-specific scaffolding rather than regression.

The page does not reteach all prior coding concepts.

## Mission 5 — reasoning scaffolding

Support is concentrated on:

- distinguishing sensor vs output wiring;
- reading real sensor values;
- selecting a threshold;
- interpreting IF/ELSE;
- debugging from evidence.

The student must choose and justify the threshold rather than copy one fixed value.

## Sequence verdict

Scaffolding does **not** simply decrease in raw page length.

Instead, it decreases in **how much of the actual solution is supplied**.

That is the correct pattern for this course:

**more support for new tool/hardware risks  
+ less support for previously mastered thinking  
+ increasing ownership of design decisions**

No scaffolding reduction is needed.

---

# 3. Visuals and mini code models

## Model count

- Mission 1: 2
- Mission 2: 2
- Mission 3: 4 total, split across two equivalent controller paths
- Mission 4: 2
- Mission 5: 2

## Visual progression

Mission 1:
- block placement;
- multiple events;
- sequence.

Mission 2:
- variable behavior;
- nesting and order.

Mission 3:
- movement structure;
- controller-specific rule structure.

Mission 4:
- Hummingbird startup / LED output;
- position servo control.

Mission 5:
- sensor reader;
- complete reactive loop.

## Sequence verdict

The mini models are not repetitive copies of the same code.

Each model exists because the block arrangement, nesting, editor mapping, or hardware relationship is genuinely new.

The course correctly avoids:

- screenshots for decoration;
- complete Stage 4 solutions;
- extra models for already mastered structures.

The visual/model system remains strong and should continue into later missions.

---

# 4. Student independence

All five missions now state or enforce individual ownership.

Students independently own:

- project file;
- code;
- design choices;
- physical build where hardware permits;
- explanation;
- checkpoint result.

Collaboration is restricted to useful moments:

- TRY 4 troubleshooting conversation;
- Mission 3 peer playtesting;
- temporary hardware sharing.

Progression in independence:

### Mission 1
Follow a model → create a personalized badge.

### Mission 2
Combine several concepts into a themed Chance Machine.

### Mission 3
Create and refine a playable game another student can use.

### Mission 4
Choose the meaning, angles and light states for a physical Robot Signal.

### Mission 5
Use real readings to choose and justify a threshold for a Reactive Signal.

## Sequence verdict

Student independence increases appropriately.

Mission 5 requires the strongest evidence-based design decision of the sequence so far.

---

# 5. TRY 4 progression

The recognizable course-wide structure remains:

**CHECK → SIMULATE → DOWNLOAD → PARTNER**

Mission-specific CHECK guidance becomes more sophisticated over time.

## Mission 1

Compare basic block structure, simulator, cable and newest download.

## Mission 2

Check variables, order and nesting.

## Mission 3

Check movement/rule structure and physical controller behavior.

## Mission 4

Check:

**power → wire order → port → code/value → servo angle**

## Mission 5

Check:

**power → 3-wire sensor / 2-wire LED → ports → current sensor value → threshold → IF/ELSE → newest code**

Mission 5 also establishes an important debugging habit:

**measure first; do not guess first.**

## Sequence verdict

TRY 4 remains familiar while the quality of the CHECK step matures with the technology.

That is appropriate scaffolding growth.

---

# 6. Build It progression

## Mission 1 — Interactive Badge

Student choice:
- two responses;
- visual/message content;
- sequence content.

## Mission 2 — Chance Machine

Student choice:
- theme;
- random range;
- special value;
- repeated response;
- visual result.

## Mission 3 — Timing Target Game

Student choice:
- speed;
- target;
- score behavior;
- theme;
- improvement after playtest.

## Mission 4 — Robot Signal

Student choice:
- physical theme;
- servo angle A;
- servo angle B;
- LED behavior;
- meaning of two physical states.

## Mission 5 — Reactive Signal

Student choice:
- threshold based on real evidence;
- State 1 brightness;
- State 2 brightness;
- theme;
- meaning of two automatic responses.

## Sequence verdict

Build It ownership increases meaningfully.

The tasks move from personalization to system design and finally to evidence-based system tuning.

No Build It task is merely a renamed guided example.

---

# 7. Checkpoint progression

All five missions use the same recognizable structure:

**demonstrate / identify → explain → change → test**

All five use:

- **MISSION COMPLETE**
- **RETRY ONE SKILL**
- **SUPPORT ROUTE**

## Mission 1

- identify input/output;
- explain event;
- make a simple change.

## Mission 2

- explain variable / IF / loop;
- change a logic-related value.

## Mission 3

- demonstrate game;
- explain integrated rule system;
- independently alter target/speed/scoring/action.

## Mission 4

- trace code → port → physical output;
- explain brightness / angle / power;
- change physical-output behavior.

## Mission 5

- trace sensor → value → threshold → decision → output;
- justify threshold;
- explain IF/ELSE and repeated sensing;
- alter the reactive system.

## Sequence verdict

The checkpoint structure stays familiar while cognitive demand rises.

This is a strong mastery progression.

---

# 8. Skill Passport progression

## Mission 1

- run code;
- input;
- output;
- event / sequence;
- change/test.

## Mission 2

- variable;
- value change;
- repeat;
- randomness;
- IF;
- explain/change/test.

## Mission 3

- game object / repeated motion;
- controller input;
- IF game rule;
- score/end state;
- playtest/improve;
- independent explanation/change.

## Mission 4

- safe Hummingbird connection;
- physical port mapping;
- external LED;
- position servo;
- input → robot output;
- independent physical-system change/test.

## Mission 5

- sensor connection;
- sensor value;
- threshold;
- IF/ELSE;
- automatic sensor-driven output;
- Sense → Think → Act;
- independent reactive-system change/test.

## Sequence verdict

Passport statements are cumulative without simply copying old skills into every mission.

Repeated change/test/explain language is purposeful because independent modification is a course-wide mastery behavior.

---

# 9. Hardware setup and Reset consistency

## Missions 1–2

Establish:

- numbered micro:bit kit;
- USB data cable;
- careful handling;
- saved project;
- return / reset routine.

## Mission 3

Adds:

- controller station;
- assigned hardware path;
- controller return / fault reporting.

## Mission 4

Adds:

- HB station ID;
- Hummingbird power;
- power-off / test-on routine;
- LED + servo return;
- hardware fault reporting by station.

## Mission 5

Reuses:

- HB station ID;
- power state;
- Sensor Port / LED Port checks;
- HB fault-reporting routine.

## Sequence verdict

Hardware routines expand only when the technology requires it.

Mission 5 does not invent a new classroom-management system; it reuses Mission 4.

Reset remains recognizable across the phase.

---

# 10. 90-minute workload

The implemented pages become longer across the sequence, but raw word count is not equal to student workload.

Approximate visible page words:

- Mission 1: ~900
- Mission 2: ~1,150
- Mission 3: ~1,670
- Mission 4: ~1,630
- Mission 5: ~1,680

Interpretation matters:

## Mission 3

The page contains both Path A and Path B directions.

A student follows only one assigned path, so the effective reading burden is substantially lower than the full page count.

## Mission 4

Stage 1 is longer because wiring, power and servo safety cannot be compressed without increasing hardware errors.

The required code scope is intentionally small.

## Mission 5

The page includes sensor-value and threshold reasoning, but the required hardware scope is reduced to one sensor and one LED.

The reading-memory strip and threshold visual replace what would otherwise require repeated teacher explanation.

## Sequence verdict

All five missions remain realistic for the established 90-minute pattern:

**Set Up → First Success → Guided New Skill → Build It → Level It Up / Checkpoint → Reset**

Missions 3–5 are at the upper end of the 90-minute target but remain bounded by:

- optional Level It Up;
- rolling checkpoints;
- narrow required hardware;
- no open research;
- no required advanced extension.

No workload reduction is justified before classroom evidence suggests otherwise.

---

# 11. Concept timing / duplication audit

## Appropriately timed

- events before logic;
- variables before integrated game state;
- IF before reactive sensing;
- physical outputs before sensors;
- threshold reasoning only after students understand variables and IF;
- IF/ELSE applied to a meaningful automatic system in Mission 5.

## Purposeful repetition

Repeated routines:

- MakeCode opening / naming;
- simulator / download;
- TRY 4;
- Ready-for-Check;
- checkpoint;
- Passport;
- Reset.

These repetitions should become habits.

## Not unnecessarily repeated

- Mission 4 does not reteach variables/randomness/game systems.
- Mission 5 does not reteach servo construction in the core path.
- Mission 3 does not reteach Mission 1 event basics in full.
- Hardware diagrams appear only when new hardware mapping is genuinely required.

## Sequence verdict

No core concept is being taught too early or repeated unnecessarily.

---

# 12. Readiness for Mission 6 — 3D design

Missions 1–5 do not need to pre-teach CAD.

They already establish the maker habits Mission 6 can rely on:

- open / name / save a project;
- follow a staged workflow independently;
- use visual models without copying a final solution;
- test against observable requirements;
- change one variable / parameter intentionally;
- troubleshoot before asking the teacher;
- make design choices within constraints;
- explain why a design choice works;
- complete an individual checkpoint;
- Reset and leave shared tools ready.

Mission 6 can therefore introduce 3D-specific concepts as a new tool domain:

- coordinate/spatial workspace;
- dimensions;
- primitives;
- alignment;
- grouping / holes;
- printability.

Those do not need to appear in Missions 1–5.

## Sequence verdict

Missions 1–5 provide a sufficiently strong **maker-process foundation** to move into 3D design.

The transition should be framed as:

**same creator workflow, new tool**

rather than requiring a coding-to-CAD conceptual bridge.

---

# 13. Frozen first-phase rules

Missions 1–5 are now the approved FutureTech Level 1 first phase.

Preserve:

- individual ownership by default;
- short explanations;
- strong visuals;
- mini models only for genuinely new structure;
- observable success cues;
- course-wide TRY 4;
- student-owned Build It;
- rolling Ready-for-Check;
- individual mastery checkpoint;
- cumulative Skill Passport;
- consistent Reset;
- checkpoint-gated next-mission handoffs where the next mission is released.

Do not reopen Missions 1–5 for stylistic redesign.

Future changes should be limited to evidence-based:

- usability;
- accessibility;
- hardware support;
- safety;
- factual correction;
- classroom evidence showing a pacing problem.

**Mission 6 remains unbuilt and outside this audit.**
