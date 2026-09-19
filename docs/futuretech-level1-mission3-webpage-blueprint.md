# FutureTech Lab — Level 1 Mission 3 Student Webpage Blueprint

**Mission:** 3 — Build a Game  
**Status:** STUDENT-FACING PAGE BLUEPRINT ONLY — no Astro page implemented  
**Source specification:** `docs/futuretech-level1-mission3-instructional-spec.md`  
**Governing design standard:** `docs/futuretech-level1-mission-design-standard.md`

This blueprint defines the exact student-facing page structure for Mission 3 while preserving the frozen FutureTech mission frame:

**1 Set Up → 2 First Code → 3 Make It React → 4 Build It → 5 Level It Up → 6 Checkpoint → Skill Passport → Reset**

The page must feel like **one mission with two hardware paths**, not two separate lessons.

---

## 1. Mission hero and brief

Use the existing `FutureTechMissionFrame.astro` hero and six-stage jump navigation.

### Mission title
**Mission 3 — Build a Game**

### Tagline
**Turn code into a game another person can play.**

### Mission Question
> **How can I combine controls, rules, score and testing to make a game another person can play?**

### You Are Ready When...
> **I can create a playable timing game, use a controller input to trigger a rule, change score or end the game, and improve the game after a playtest.**

### Persistent support strip
Keep the locked mission help:

**Start at Stage 1 and work in order.**  
**Stuck anywhere? TRY 4: Check → Simulate → Download → Partner.**

Immediately below that, add one compact mission flow strip:

**MOVE → PRESS → CHECK → SCORE / END**

Student caption:

> **Both controller paths use the same game idea. The hardware and blocks may look different.**

---

# Stage 1 — Set Up

## Section goal
Students understand the common mission, receive one hardware pathway and know they will remain on it for the entire mission.

### Stage header
**01 — GET READY**  
**Set Up**

### Intro copy
> Grab your usual micro:bit kit, find your assigned controller station, and check your partner roles. You will stay on the same controller path for this whole mission.

### Equipment checklist
- ☐ Computer
- ☐ micro:bit V2
- ☐ USB data cable
- ☐ Assigned controller
- ☐ Mission page open

### Partner-role strip
Reuse the existing Driver/Navigator treatment.

**DRIVER**  
Controls the computer and device.

**NAVIGATOR**  
Reads the next step, predicts results and checks requirements.

Green success cue:

> **Switch roles when you reach Stage 3. Both partners must be able to explain the game.**

## Hardware assignment panel

Use two equal path cards side by side on wide screens.

Each physical controller station should carry the same visible identifier used on the webpage:

- **A1, A2, A3...** for Kitronik :GAME stations
- **B1, B2, B3...** for Retro Arcade stations

The teacher assigns a pair both a **path letter and station number**. Students record/remember the station code for the mission. The webpage itself does not need a form field; the physical label and teacher assignment are sufficient.

### Path A card
**PATH A**  
**Kitronik :GAME Controller**  
**Editor:** micro:bit MakeCode  
**Action button:** Fire 1  
**Display:** micro:bit 5×5 LEDs

Status label:
**STAY ON PATH A**

### Path B card
**PATH B**  
**ELECFREAKS Retro Arcade**  
**Editor:** MakeCode Arcade  
**Action button:** A  
**Display:** colour screen

Status label:
**STAY ON PATH B**

Below both cards:

> **Do not switch controller type during this mission. Your checkpoint is based on the game ideas, not which controller you used.**

Add one compact **MY PATH** strip immediately below the assignment panel:

- **PATH A students:** remember **A · :GAME · micro:bit MakeCode · Fire 1**
- **PATH B students:** remember **B · RETRO · MakeCode Arcade · A button**

This strip is a visual memory aid, not an interactive selector. It should reappear in shortened form immediately before every later path split so students do not have to scroll back to Stage 1 to remember which instructions are theirs.

## 60-second recap card

Title: **Quick Reboot**

Prompt:
> Point to or explain one example of each:
>
> **EVENT → IF → LOOP**

No code model here. Use three compact vocabulary chips only.

### Stage 1 success cue
> ✓ **You are ready when:** you know your Path A/B assignment, your partner role, and the common game rule: **move → press → decide → score/end**.

---

# Stage 2 — First Code

## Section goal
Every pair creates one visible object that moves repeatedly before adding scoring or controller rules.

### Stage header
**02 — FIRST GAME MOTION**  
**First Code**

### Shared intro
> First, make something move. Do not add score, target logic or controller actions yet.

### Shared ordered steps
1. Create a new project.
2. Create one visible game object.
3. Make it move horizontally.
4. Keep the movement repeating.
5. Keep it in the playable area.
6. Slow it enough that a player can react.
7. Test it in the simulator.

Project-name reminder:
**FirstName_L1_M3**

## Two small implementation cards

These cards contain only the path-specific blocks. Avoid repeating the seven shared steps inside both cards.

Immediately before the two cards, add a compact path reminder:

> **READ ONLY YOUR PATH:** A = :GAME / micro:bit MakeCode · B = Retro Arcade / MakeCode Arcade

Each path card begins with a bold **YOUR NEXT STEP** line so the first action is unmistakable. Do not use tabs or accordions that hide the other path.

---

## Path A implementation card — micro:bit MakeCode

Header:
**PATH A — LED TARGET SNAP**

Subtext:
> Build one moving LED dot on the micro:bit.

**YOUR NEXT STEP:** Open **micro:bit MakeCode** and create `FirstName_L1_M3`.

### Block-finder chips
Use exactly:

- **Game → create sprite**
- **Loops → forever**
- **Game → move**
- **Game → if on edge, bounce**
- **Basic → pause**

### Mini code model
Show one dark pseudo-MakeCode workspace:

**on start**
- set `player` to **create sprite at x 0, y 2**

**forever**
- `player` **move 1**
- `player` **if on edge, bounce**
- **pause 300 ms**

Model note:

> The exact starting side and speed can change. The important idea is that **move + bounce + pause stay inside forever**.

### Success cue
> ✓ One LED dot moves back and forth across the display without you pressing a button.

### Likely bug warning
> Dot only moves once? Check whether the movement blocks are inside **forever**.  
> Too fast? Increase the **pause**.

---

## Path B implementation card — MakeCode Arcade

Header:
**PATH B — ARCADE TARGET SNAP**

Subtext:
> Build one simple sprite moving across the Retro Arcade screen.

**YOUR NEXT STEP:** Open **MakeCode Arcade** and create `FirstName_L1_M3`.

### Block-finder chips
Use exactly:

- **Sprites → set mySprite to sprite of kind Player**
- **Sprites → set velocity vx / vy**
- **Sprites → set bounce on wall ON**

Do not add Controller, Info or Game chips yet.

### Mini code model
Show one simplified pseudo-block workspace:

**on start**
- set `player` to **sprite of kind Player**
- set `player` velocity to **vx 40, vy 0**
- set `player` **bounce on wall ON**

Model note:

> Keep the sprite image simple. Mission 3 is about the game rule, not artwork.

### Success cue
> ✓ One sprite moves left and right across the screen without you pressing A.

### Likely bug warning
> Sprite disappears? Check **bounce on wall**.  
> Too fast? Lower the horizontal velocity.

---

## Shared Stage 2 finish strip

Use one green full-width success card:

> **Both paths are ready for Stage 3 when a game object moves repeatedly without the player pressing the action button.**

No controller setup yet.

---

# Stage 3 — Make It React

## Section goal
Students connect one physical action button to the same conceptual rule:

**ACTION INPUT → IF TARGET RULE → SCORE OR END**

### Stage header
**03 — INPUT → RULE → RESULT**  
**Make It React**

Green role-switch banner:

> **WORKING WITH A PARTNER? SWITCH ROLES NOW.**

Use a common route strip:

**PRESS → CHECK TARGET → TRUE: SCORE → FALSE: END**

Immediately below the route strip, repeat the shortened path reminder:

> **STAY ON YOUR PATH:** A = :GAME / Fire 1 · B = Retro Arcade / A button

Then split into Path A and Path B. Each path card should begin with **PATH A STUDENTS — CONTINUE HERE** or **PATH B STUDENTS — CONTINUE HERE**.

---

## Path A — Kitronik :GAME Controller

**PATH A STUDENTS — CONTINUE HERE**

### Part A1 — Familiar input first

Student copy:
> Before using the controller, make the rule work with micro:bit **Button A**.

### Block-finder chips
Use exactly:

- **Input → on button A pressed**
- **Game → get sprite x**
- **Logic → if / =**
- **Game → add score**
- **Game → game over**

### Mini rule model
Dark pseudo-MakeCode model:

**on button A pressed**
- **if** `player x = 2`
  - **add score 1**
- **else**
  - **game over**

Model note:

> The target number can change later. For now, **x = 2** means the centre LED column.

### Prediction card
Two small prompts:

**If player x = 2 → ?**  
**If player x ≠ 2 → ?**

### Success cue
> ✓ Button A scores at the centre and ends the round when the dot is not at the centre.

---

## Path A — tiny hardware mapping card

Header:
**CONNECT YOUR :GAME CONTROLLER**

Keep this card to four lines:

1. **Power off first.** Insert the micro:bit firmly into the controller edge connector. Do not force it.
2. **Action button:** Fire 1.
3. **MakeCode:** add the **Kitronik :GAME Controller** extension and use **Fire 1 Down**.
4. **Test first:** temporarily make **Fire 1 → show icon** if the controller does not respond.

Transfer message:

> **Replace the input event. Keep the IF rule the same.**

### Path A controller success cue
> ✓ Fire 1 now triggers the same score/end rule that Button A triggered.

---

## Path B — ELECFREAKS Retro Arcade

**PATH B STUDENTS — CONTINUE HERE**

### Hardware/setup card first

Header:
**RETRO ARCADE SETUP**

Keep the card short:

1. Insert the micro:bit V2 securely. Do not force it.
2. Open **Microsoft MakeCode Arcade**.
3. Use the prepared micro:bit V2 / Retro Arcade hardware target.
4. **Action button:** A.

Troubleshooting line:

> If A works in the Arcade simulator but not on the physical unit, check the selected hardware target, newest download and micro:bit seating.

### Block-finder chips
Use exactly:

- **Controller → on A button pressed**
- **Sprites → player x**
- **Logic → if / comparison**
- **Info → change score by**
- **Game → game over**

### Mini rule model
Use one dark pseudo-Arcade workspace with a **teacher-defined target x-value or very small target range already supplied on the page**:

**on A button pressed**
- **if** `player x matches the target check shown in the model`
  - **change score by 1**
- **else**
  - **game over**

The student should not have to invent the target comparison in Stage 3.

Implementation note for eventual build:
Before implementation, resolve the simplest current Arcade block pattern for the target check and hard-code that one beginner model. Prefer a single clear horizontal-position comparison. If the current editor requires a small range check, show that exact range without introducing collision events, extra sprites, functions, or nested conditions. The model must be fully understandable from the page rather than using the phrase “inside target zone” as an unexplained abstraction.

### Prediction card
**If the sprite is in the target zone → ?**  
**If the sprite is outside the target zone → ?**

### Success cue
> ✓ Pressing A in the target scores. Pressing A outside the target ends the round.

---

## Shared Stage 3 concept card

Purple concept callout:

> **The button does not decide whether you win. The IF rule decides. The button only triggers the check.**

### Shared Stage 3 success cue
> ✓ Your assigned controller can now trigger a working score/end decision.

---

# Stage 4 — Build It

## Stage header
**04 — YOUR GAME**  
**Build It — Timing Target Game**

### Intro copy
> Turn the guided example into a game another student can play. Keep the core game simple, then make at least one meaningful choice of your own.

## Goal / Control / Rule planning strip

Three compact cards in one row on wide screens.

### GOAL
> What is the player trying to do?

Student prompt:
**Press at the right moment to score.**

### CONTROL
> Which physical button does the player press?

Student fills mentally/selects:
**Fire 1** or **A**

### RULE
> What decides success or failure?

Student prompt:
**IF the moving object is at/in the target → score. Otherwise → end.**

No written worksheet.

## Common Build It checklist

Use the established two-column check-list treatment.

- ☐ One visible moving game object
- ☐ Movement repeats continuously
- ☐ One physical controller action
- ☐ One clear target/success rule
- ☐ One IF decision
- ☐ Success increases score
- ☐ Failure ends the round/game
- ☐ Game works on physical hardware
- ☐ Player can understand the game quickly
- ☐ At least one meaningful personalization
- ☐ Another student playtested it
- ☐ We improved one thing and retested

## Meaningful choice cards

Use four small idea cards only:

**Speed**  
Make the timing easier or harder.

**Target**  
Change where/when success happens.

**Score**  
Change how many points success earns.

**Theme**  
Change the look/message without changing the core rule.

Do not offer advanced Arcade-only mechanics here.

## Common success indicator

> ✓ **Build It is ready when:** another student can understand the goal, use the controller, experience success and failure, and you can explain one improvement you made after testing.

## TRY 4 box

Keep course-wide wording:

1. **CHECK** — blocks, values, order and nesting.
2. **SIMULATE** — test the newest version.
3. **DOWNLOAD** — send the newest version.
4. **PARTNER** — explain expected vs actual.

Then:
> Still stuck? Ask for help and say what you already tried.

---

# Playtest / Improve workflow

Place this inside Stage 4 after the Build It checklist, not as a separate mission stage.

Use a horizontal process strip:

**PLAY → NOTICE → CHANGE → RETEST**

### Player card
> Play the game once without the creators helping.

### Creator card
Ask only three questions:

- Could the player tell what to do?
- Was the timing fair?
- Did score/failure work correctly?

### Improvement card
> Change **one thing** based on what happened.

Examples:
- speed;
- target size/location;
- scoring amount;
- instructions;
- difficulty.

### Retest success cue
> ✓ A second playtest should show whether your change helped.

---

# Stage 5 — Level It Up

## Stage header
**05 — OPTIONAL CHALLENGE**  
**Level It Up**

Intro:
> Only after every Build It requirement works. Choose **one** while you wait for your checkpoint.

Use four equal cards.

### Speed Tuner
Change movement speed and decide which version is most playable.

### Random Target
Use randomness to change the target position/location between rounds.

### Two Controls
Add one second meaningful controller action.

### Win Goal
Add a simple score target or another clear ending rule.

Footer warning:
> **Do not add advanced Arcade scenes, enemies, tilemaps or multiple levels in Mission 3.**

Ready-for-Check cue:
> When every Build It box is checked and your improvement is retested, add your name/pair to Ready-for-Check. Keep Leveling Up until you are called.

---

# Stage 6 — Checkpoint

## Stage header
**06 — SHOW WHAT YOU KNOW**  
**Checkpoint**

Intro:
> Bring your controller and open your code when you are called. Each student completes the checkpoint individually, even if the game was built with a partner.

Use four compact cards.

### Check 1 — Play / Identify
> Demonstrate the game. Point to the physical action button and the code event that responds to it.

### Check 2 — Explain the System
> Explain:
> - what keeps the object moving;
> - what the IF rule checks;
> - what success does to the score;
> - what causes the game to end.

### Check 3 — Change It
> Make one teacher-selected change:
> - target position/location;
> - movement speed;
> - scoring amount/behaviour;
> - action button.

Then predict and test.

### After Your Check
- **MISSION COMPLETE**
- **RETRY ONE SKILL**
- **SUPPORT ROUTE**

Do not mention Path A or Path B in the mastery result.

---

# Skill Passport

## Stage header
**✓ — SKILL PASSPORT**  
**Mission 3 Skills**

Use the existing checklist treatment.

- ☐ I can create and move a game object.
- ☐ I can use repeated code to keep a game active.
- ☐ I can use a controller button to trigger a game action.
- ☐ I can use an IF rule to change score or end a game.
- ☐ I can playtest a game and make one useful improvement.
- ☐ I can change, test and explain my game independently.

No controller-specific skill statements.

---

# Reset

## Stage header
**↺ — LEAVE IT READY**  
**Reset**

Common checklist:

- ☐ Project saved correctly
- ☐ micro:bit returned to numbered kit
- ☐ USB cable returned and loosely coiled
- ☐ Controller returned to its labelled station
- ☐ Workspace clear
- ☐ Faults/damage reported
- ☐ Passport/progress updated

Exit question:

> **What made your game fair—or unfair—to the player?**

---

# Visual distinction between Path A and Path B

The paths must be identifiable **without colour**.

## Required path identifiers

Every path-specific card must include all three:

1. a text badge: **PATH A** or **PATH B**;
2. hardware name in the heading;
3. a simple device icon/shape label:
   - Path A: **5×5 LED / :GAME**
   - Path B: **SCREEN / RETRO ARCADE**

Colour may support the distinction but cannot carry it alone.

## Suggested accent treatment

- Path A: purple/indigo accent with label **PATH A — :GAME**
- Path B: cyan/teal accent with label **PATH B — RETRO**

Keep the main FutureTech purple/navy system unchanged.

## No duplicated page

Do not create tabs that completely hide one pathway or create two separate Mission 3 routes.

Recommended structure:
- shared content;
- two visible side-by-side path cards;
- shared content again.

Students should be able to scroll past the other path without having to read it in detail.

---

# Exact code-model inventory

Mission 3 should contain **four instructional code models total**:

1. **Path A Stage 2 movement**
   - create sprite
   - forever
   - move
   - bounce
   - pause

2. **Path B Stage 2 movement**
   - create sprite
   - horizontal velocity
   - bounce on wall

3. **Path A Stage 3 rule**
   - Button A / Fire 1 trigger
   - sprite x comparison
   - score / game over

4. **Path B Stage 3 rule**
   - A button event
   - sprite x/target-zone comparison
   - change score / game over

Do not add a complete Stage 4 code model.

---

# Exact block-finder inventory

## Path A — Stage 2
- **Game → create sprite**
- **Loops → forever**
- **Game → move**
- **Game → if on edge, bounce**
- **Basic → pause**

## Path A — Stage 3
- **Input → on button A pressed**
- **Game → get sprite x**
- **Logic → if / =**
- **Game → add score**
- **Game → game over**

Controller mapping card:
- **Kitronik :GAME Controller → Fire 1 Down**

## Path B — Stage 2
- **Sprites → set mySprite to sprite of kind Player**
- **Sprites → set velocity vx / vy**
- **Sprites → set bounce on wall ON**

## Path B — Stage 3
- **Controller → on A button pressed**
- **Sprites → player x**
- **Logic → if / comparison**
- **Info → change score by**
- **Game → game over**

At implementation time, confirm labels against the current editors before hard-coding the chips. The conceptual inventory must not expand unless a required block is missing.

---

# Responsive blueprint

## Desktop — 1200 px+

- mission frame remains max-width aligned with Missions 1–2;
- Path A and Path B cards display **2 columns**;
- Stage 2 implementation cards display side by side;
- Stage 3 pathway cards display side by side;
- Goal / Control / Rule displays in **3 columns**;
- checklists may use **2 columns**;
- code models use full available card width.

## Chromebook / tablet — ~1024 px

- retain **2-column Path A / Path B** cards if each card remains at least ~360 px wide;
- Stage 3 split may remain two columns;
- Goal / Control / Rule may remain three compact columns or collapse to two + one if text wraps poorly;
- no code model may shrink text below the Mission 1/2 baseline.

## 390 px and 375 px

- Path A and Path B stack vertically;
- keep **Path badge + hardware name** visible at the top of every path card;
- repeat the compact **STAY ON YOUR PATH** reminder immediately before each stacked Path A/Path B pair;
- the non-assigned path may remain visible, but its card must begin far enough below the assigned-path heading that students do not visually merge the two sets of instructions;
- all block-finder chips wrap;
- code models become one vertical stack;
- Goal / Control / Rule becomes one column;
- Build It checklist becomes one column;
- playtest workflow becomes vertical:
  **PLAY ↓ NOTICE ↓ CHANGE ↓ RETEST**;
- Level It Up cards become one column;
- no horizontal scrolling.

## 320 px

Apply all 390 px rules plus:

- path badge and hardware title may wrap onto separate lines;
- use short button text;
- hardware setup numbered steps become full-width;
- code block labels must wrap safely rather than reduce font size excessively;
- nested blocks retain visible indentation but cap indentation so text remains readable;
- long editor names may wrap:
  **Microsoft MakeCode Arcade**;
- Ready-for-Check/CTA buttons become full-width;
- no fixed-width device diagrams.

---

# Accessibility blueprint

- preserve semantic section order and existing heading hierarchy;
- every code-model region gets a useful `aria-label`;
- Path A/Path B distinction appears in text, not colour only;
- success and warning states include written labels/symbols;
- keyboard focus must remain visible on links and stage navigation;
- hardware cards use numbered steps;
- code-model meaning is restated in plain language;
- no essential instruction is hidden behind hover;
- no path switcher may make one pathway unreachable without JavaScript;
- external editor links must clearly identify destination:
  - **Open micro:bit MakeCode ↗**
  - **Open MakeCode Arcade ↗**

---

# Final pre-implementation audit decisions

## Beginner-student perspective

The blueprint passes the beginner test after these guardrails:

- path identity is established in Stage 1 and refreshed before every later path split;
- students are explicitly told **READ ONLY YOUR PATH** rather than being expected to infer this from colour;
- every path card begins with a clear continuation label;
- Stage 2 gives one immediate next action before any block list;
- the four-code-model ceiling remains intact;
- Stage 4 shows requirements and choices but no finished solution;
- Path B's target rule must be shown as one concrete beginner comparison at implementation time, not left as an unexplained “target zone” phrase;
- the checkpoint asks the same conceptual questions regardless of hardware.

## Classroom-teacher perspective

The blueprint passes the multi-station test after these guardrails:

- physical stations use matching **A1/A2/A3** and **B1/B2/B3** identifiers;
- pairs stay on one path and one station assignment for the mission;
- scarce hardware is concentrated in later physical testing rather than required for every minute;
- shared instructions are written once;
- controller-specific troubleshooting remains inside the relevant path card;
- Ready-for-Check stays separate from hardware availability;
- no platform-specific visual feature changes the mastery standard.

## What remains deliberately unchanged

- six-stage mission architecture;
- TRY 4;
- Driver/Navigator switch;
- four code models total;
- common Build It checklist;
- common playtest requirement;
- four Level It Up options;
- common individual checkpoint;
- common Skill Passport;
- common Reset;
- no Mission 3 implementation in this task.

---

# Final page-authoring test

Before implementation is accepted, a Grade 8/9 beginner should be able to answer:

- Which controller path am I on?
- Which editor do I open?
- What do I make first?
- Which blocks make the object move?
- Which button triggers my game rule?
- What does the IF statement decide?
- What should happen on success?
- What should happen on failure?
- What must I personalize?
- How do I playtest?
- What do I do if I get stuck?
- What do I need to show at the checkpoint?
- Where does my hardware go when I finish?

If any answer requires reading the other pathway's instructions, the page needs simplification before implementation.

---

**Implementation boundary:** This document is a blueprint only. It does not create the Mission 3 route, modify Missions 1–2, alter the shared FutureTech frame, or publish any site changes.
