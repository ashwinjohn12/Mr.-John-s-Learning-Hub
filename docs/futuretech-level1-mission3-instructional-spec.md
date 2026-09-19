# FutureTech Lab — Level 1 Mission 3 Instructional Specification

**Mission:** 3 — Build a Game  
**Status:** DUAL-CONTROLLER PRE-BUILD SPECIFICATION — webpage not built  
**Audience:** Grade 8/9 beginners who have passed Missions 1 and 2  
**Target length:** one 90-minute class  
**Locked architecture:** Set Up → First Code → Make It React → Build It → Level It Up → Checkpoint → Skill Passport → Reset  
**Governing standard:** `docs/futuretech-level1-mission-design-standard.md`

## 1. Locked implementation decision

Mission 3 supports two equivalent hardware pathways because classroom inventory includes approximately 2–3 of each controller type:

- **Path A — Kitronik :GAME Controller + micro:bit V2**
- **Path B — ELECFREAKS micro:bit Retro Arcade + micro:bit V2**

Students are assigned one pathway for the complete mission and **do not switch platforms mid-mission**.

The two paths do not use identical code or identical displays. They do use the same computational-thinking targets:

**moving object → repeated motion → one action input → IF target rule → score / end condition → playtest → improvement**

The common checkpoint and Skill Passport assess those shared ideas rather than controller-specific syntax.

Advanced MakeCode Arcade features are deliberately withheld from Path B. Mission 3 is not a full Arcade unit.

---

## 2. Progression prerequisites

Students who have passed Missions 1–2 are expected to independently:

- create/name a project;
- use events and visible outputs;
- read a sequence in order;
- create/set/change a variable;
- use a random value;
- explain one IF condition;
- use a simple repeat loop;
- predict, modify and test code;
- use TRY 4;
- download/test on physical hardware;
- join Ready-for-Check;
- complete an individual checkpoint;
- update Skill Passport and Reset equipment.

These routines are referenced briefly, not retaught.

---

## 3. Mission purpose

Mission 3 is the first **integration mission**.

The progression is:

**EVENTS + VARIABLES + IF + LOOPS → PLAYABLE GAME SYSTEM**

Students combine previously learned programming ideas into a game another person can understand and play.

### Mission question

> **How can I combine controls, rules, score and testing to make a game another person can play?**

### Student success statement

> **I can create a playable timing game, use a controller input to trigger a rule, change score or end the game, and improve the game after a playtest.**

---

## 4. Equivalent core game

Both pathways build the same **type** of game rather than identical code.

### Common game rule

1. A visible object repeatedly moves past or toward a target.
2. The player presses one action button at the correct moment.
3. An IF rule decides whether the timing was successful.
4. Success increases score.
5. Failure ends the round/game.
6. Another student can understand the game quickly.
7. The creators make one evidence-based improvement after playtesting.

### Path A — LED Target Snap

- display: micro:bit 5×5 LED matrix;
- moving object: one game sprite/dot moving horizontally;
- target: centre position;
- action control: **Fire 1** on the Kitronik :GAME Controller;
- correct timing: score increases;
- miss: game over/end condition.

### Path B — Arcade Target Snap

- display: ELECFREAKS Retro Arcade colour TFT;
- moving object: one simple Arcade sprite moving horizontally;
- target: one simple visible target zone/marker;
- action control: **A button**;
- correct timing: score increases;
- miss: game over/end condition.

Path B must remain visually simple. Do not introduce scenes, tilemaps, collisions, enemies, lives, animation systems, multiple sprites, story elements, or full Arcade game design in the required pathway.

---

## 5. New learning and equivalency

### Shared new ideas

Both pathways teach:

- a visible game object/sprite;
- continuous/repeated game motion;
- one controller action;
- one IF-based timing rule;
- score as game state;
- one end/failure condition;
- playtesting and evidence-based improvement.

### Platform-specific vocabulary

**Path A**
- micro:bit MakeCode game sprite;
- sprite x-position;
- `forever`;
- Kitronik controller Fire 1 event.

**Path B**
- MakeCode Arcade sprite;
- horizontal sprite movement/position;
- Arcade update/repeating movement structure;
- controller **A button** event;
- Arcade score and game-over tools.

Students do not need to master the other pathway's syntax.

### Difficulty-equivalence rule

Neither pathway may require extra assessed concepts merely because its hardware can do more.

Path B's larger screen is used only to make the equivalent moving object and target visible. Richer Arcade capabilities are saved for later FutureTech levels.

---

## 6. Six-stage mission sequence

## Stage 1 — Set Up — SHARED

**Purpose:** establish one mission, one goal and one hardware assignment.

All students:

- collect computer, numbered micro:bit V2 kit, USB cable and assigned controller;
- confirm Driver/Navigator roles;
- receive a **Path A** or **Path B** station assignment;
- work independently through the mission and remain on that same pathway for the complete mission;
- complete a 60-second recap identifying an event, IF and loop;
- read the common game rule: **move → press → decide → score/end**.

### Hardware-station rule

A controller station is assigned to a student when hardware is available. Students keep their own project and code even when controller hardware must be shared.

If there are more students than controller stations, students begin the shared planning/simulator work while a controller is unavailable and use their assigned pathway hardware when a station opens. No student changes from Path A to Path B simply because another controller becomes free.

---

## Stage 2 — First Code — SHARED LEARNING PATHWAY

**Purpose:** every pair gets a moving game object working before scoring or controller-specific logic.

Stage 2 is shared in **goal, sequence, pacing and success criterion**, but each platform uses a tiny implementation card because the editors differ.

Common sequence:

1. create a new project using the established naming convention;
2. create one visible game object;
3. make it move horizontally;
4. keep the movement repeating;
5. keep the object within/playable across the visible game area;
6. slow the motion enough for a player to react;
7. test in the relevant simulator.

### Path A implementation card — micro:bit MakeCode

Use one mini code model showing:

**create sprite → forever → move → bounce at edge → pause**

Block-finder chips include only the unfamiliar game/sprite blocks plus the known loop/pause tools.

**Success looks like:** one LED dot repeatedly travels across the micro:bit display and changes direction at an edge.

### Path B implementation card — MakeCode Arcade

Use one mini code model showing the simplest equivalent structure:

**create one sprite → give it simple horizontal motion → keep it on/reverse within the playable area**

The model must use the minimum current Arcade blocks needed to produce a repeated horizontal target motion. Do not introduce a full Arcade tutorial.

**Success looks like:** one simple sprite repeatedly moves across the Retro Arcade screen at a speed a player can react to.

### Shared Stage 2 success criterion

> **A visible game object moves repeatedly without the player pressing the action button.**

No score, target rule or controller action is added yet.

---

## Stage 3 — Make It React — PATH SPLIT

Both pathways follow the same conceptual sequence:

**ACTION INPUT → IF TARGET RULE → SCORE OR END**

### Path A — Kitronik :GAME Controller + micro:bit V2

#### First, familiar input

Before using Fire 1, make the target rule work with micro:bit **Button A**:

- if the moving dot/sprite is at the target position → add one point;
- otherwise → end the game/round.

Students predict the result for target vs non-target positions before testing.

#### Then transfer to controller

Use the Kitronik :GAME Controller **Fire 1** event for the same action.

The IF rule does not change.

**Success looks like:** Fire 1 causes exactly the scoring/end decision previously triggered by Button A.

### Path B — ELECFREAKS Retro Arcade + micro:bit V2

Path B is already in MakeCode Arcade, so the familiar-input bridge is conceptual rather than a second editor.

Use the Arcade **A button** as the single action event:

- if the moving sprite is in the target zone/position → increase score;
- otherwise → end the game/round.

Students predict the result for target vs non-target positions before testing.

**Success looks like:** pressing A at the target scores; pressing A away from the target ends the round/game.

### Common teaching message

> **The button does not decide whether you win. The IF rule decides. The button only triggers the check.**

---

## 7. Minimal hardware/setup cards

These are the only controller-specific setup instructions shown in the student mission.

### Path A setup card — Kitronik :GAME Controller

1. **Connect safely:** controller off; insert micro:bit V2 firmly into the edge connector with the LED display facing the front of the controller; do not force it.
2. **Action control:** Fire 1.
3. **MakeCode:** normal micro:bit MakeCode; add the Kitronik :GAME Controller extension and use the Fire 1 button event.
4. **Not responding:** temporarily test **Fire 1 → show icon**. Check controller power, micro:bit seating and the extension before debugging the game rule.

### Path B setup card — ELECFREAKS Retro Arcade

1. **Connect safely:** insert the micro:bit V2 into the Retro Arcade as designed, connect/download through the micro:bit USB connection, and do not force the board into the connector.
2. **Action control:** A button.
3. **MakeCode:** use **Microsoft MakeCode Arcade**. The classroom devices should have the required micro:bit V2/Retro Arcade experimental hardware target prepared before the lesson whenever possible.
4. **Not responding:** run a tiny A-button test in the Arcade simulator first. If the simulator works but the physical unit does not, check the selected Arcade hardware target, the download on the MICROBIT drive and the micro:bit seating before debugging the game rule.

Do not place experimental-hardware configuration into the normal student learning sequence unless a device actually requires setup.

---

## Stage 4 — Build It — COMMON RUBRIC

**Challenge:** Build It — Timing Target Game

Students personalize the guided game while preserving the core computational structure.

### Common non-negotiable requirements

Every Path A and Path B project must have:

- one visible moving game object;
- repeated/continuous movement;
- one physical controller action;
- one clear target/success rule;
- an IF decision;
- score increasing after a successful action;
- a clear failure/end result;
- working physical hardware;
- simple player instructions that can be understood in about 20 seconds;
- at least one meaningful change from the guided baseline;
- one peer playtest;
- one improvement based on that playtest;
- a retest after the change.

### Meaningful personalization may include

- speed;
- target location/size;
- action button choice where appropriate;
- scoring value/behaviour;
- visual theme;
- failure message/result;
- difficulty.

### Fairness rule

Path B students are **not** required to create more artwork or more complex screens simply because the Retro Arcade can display them.

Path A students are **not** assessed more leniently because the micro:bit display is smaller.

### Build It success indicator

> **Another student can understand the goal, use the controller, experience both success and failure, and the creators can explain one improvement made after playtesting.**

TRY 4 remains unchanged:

**CHECK → SIMULATE → DOWNLOAD → PARTNER**

Platform-specific warning cards may support TRY 4 but never replace it.

---

## Stage 5 — Level It Up — EQUIVALENT EXTENSIONS

Only after the required game works.

Offer four conceptually equivalent choices. The exact blocks may differ by platform.

### Speed Tuner
Change movement speed and decide which setting is most playable.

### Random Target
Use Mission 2 randomness to vary the target position/location between rounds.

### Two Controls
Add one second meaningful controller action.

### Win Goal
Add a score target or another simple end condition.

Students choose **one**, not all four.

Do not offer advanced Arcade-only features as standard Level It Up options in Mission 3.

---

## Stage 6 — Checkpoint — COMMON INDIVIDUAL ASSESSMENT

The checkpoint is platform-neutral in concept and completed individually.

### Check 1 — Play / Identify

Student:

- demonstrates the game;
- identifies the physical action control;
- identifies the event/input that responds to it.

### Check 2 — Explain the System

Student explains:

- what keeps the object moving;
- what the IF rule checks;
- what success does to the score;
- what causes the game/round to end.

### Check 3 — Change It

Teacher selects one small change appropriate to either pathway:

- change target position/location;
- change movement speed;
- change scoring amount/behaviour;
- change the action control to another available button.

Student:

1. predicts the effect;
2. makes the change;
3. tests it independently;
4. explains whether the result matched the prediction.

### Common outcomes

- **MISSION COMPLETE** — playable game + correct explanation + independent change/test.
- **RETRY ONE SKILL** — revisit one specific target and retry it.
- **SUPPORT ROUTE** — student needs guided support before independent retry.

No controller-specific feature may be required for mastery unless both pathways assess an equivalent concept.

---

## 8. Skill Passport — COMMON

- ☐ I can create and move a game object.
- ☐ I can use repeated code to keep a game active.
- ☐ I can use a controller button to trigger a game action.
- ☐ I can use an IF rule to change score or end a game.
- ☐ I can playtest a game and make one useful improvement.
- ☐ I can change, test and explain my game independently.

Do not add Path A- or Path B-only skills to the required Passport.

---

## 9. Reset — COMMON ROUTINE WITH HARDWARE RETURN

All students:

- save the project correctly;
- return micro:bit V2 to the numbered kit;
- return the matching USB cable;
- return the assigned controller to its labelled station/container;
- clear the workspace;
- report controller/device faults;
- update Passport/progress.

Retro Arcade projects should be saved in a way that allows the same pair to reopen the same project later if required.

---

## 10. Hardware-station and individual-work management

### Inventory assumption

Approximately:

- 2–3 Kitronik :GAME Controller stations;
- 2–3 ELECFREAKS Retro Arcade stations.

With 4–6 controller stations, 4–6 students can physically test at once while other students continue simulator work, planning, code refinement, or peer playtesting.

### Assignment procedure

At the start of Mission 3:

1. assign each student **Path A** or **Path B**;
2. record the controller/station number when hardware is assigned;
3. that student keeps the same pathway for the mission;
4. each student keeps their own project and code;
5. every student completes the checkpoint individually.

### If there are more students than controllers

Do not make students switch controller type.

Instead:

- students without hardware begin Stage 1 and Stage 2 simulator/planning work independently;
- use a visible controller-station queue;
- when the assigned pathway hardware becomes available, the student continues with physical testing;
- Ready-for-Check remains separate from the hardware queue.

If necessary, Stage 2 simulator time and peer playtesting can overlap so scarce controller time is concentrated in Stages 3–4.

---

## 11. Visual scaffolding rules

### Shared visual

Use one small common game-flow diagram:

**MOVE → PRESS → CHECK → SCORE / END**

### Path A models

- Stage 2: movement model only;
- Stage 3: Button A IF-rule model;
- tiny Fire 1 mapping card.

### Path B models

- Stage 2: simplest Arcade movement model only;
- Stage 3: A-button IF-rule model;
- tiny Retro Arcade setup/download card.

### Over-scaffolding guardrail

Do not show a complete finished game for either pathway in Stage 4.

Do not add extra Path B screenshots merely because Arcade is visually rich.

Screenshots are justified only for a genuinely hard-to-find interface/hardware-setting step.

---

## 12. Complexity ceiling

The required mission stays below this ceiling for **both** paths:

- one main moving object;
- one main action button;
- one target rule;
- one IF decision;
- one score system;
- one failure/end rule;
- one repeated-motion structure;
- no required multiple levels;
- no required lives;
- no required enemies;
- no required collisions beyond the simple target check;
- no tilemaps;
- no story/scenes;
- no multiplayer/radio;
- no functions/arrays;
- no JavaScript/Python;
- no advanced animation system;
- no competition between teams.

The Retro Arcade's richer screen must not raise the required difficulty.

---

## 13. Responsive and accessibility requirements

The eventual webpage must preserve the frozen FutureTech standard and pass:

- desktop;
- Chromebook/tablet;
- 390 px;
- 375 px;
- 320 px;
- no horizontal overflow.

Dual-path cards must:

- be clearly labelled **Path A** and **Path B** in text;
- not rely on colour alone;
- stack cleanly on narrow screens;
- use meaningful headings;
- keep code-model nesting readable;
- keep controller setup steps tappable/readable without horizontal zoom;
- provide keyboard-visible focus;
- accompany visual code models with plain-language explanations.

---

## 14. Pacing target

Approximate 90-minute pacing:

- **0–10 min** — shared Set Up + pathway assignment + recap
- **10–27 min** — shared Stage 2 goal with path-specific movement implementation
- **27–45 min** — Stage 3 path-specific controller/rule work
- **45–68 min** — common Build It requirements
- **68–80 min** — playtest, improve, Ready-for-Check / Level It Up
- **80–87 min** — rolling individual checkpoints
- **87–90 min** — Passport + Reset

Hardware queues may shift physical testing without changing the instructional sequence.

---

## 15. Final pre-build decision

Mission 3 is now locked as a **dual-controller integration mission**.

### Path A
**Kitronik :GAME Controller + micro:bit V2 + normal micro:bit MakeCode + Fire 1**

### Path B
**ELECFREAKS micro:bit Retro Arcade + micro:bit V2 + MakeCode Arcade + A button**

Both pathways assess the same mastery:

**repeated motion + controller input + IF target rule + score/end condition + playtest + improvement + independent explanation/change**

The two pathways are equivalent in difficulty expectations, not identical in code.

Advanced MakeCode Arcade sprites, scenes, collisions and richer game design are reserved for later FutureTech levels.

Mission 3 webpage implementation remains outside this specification revision.
