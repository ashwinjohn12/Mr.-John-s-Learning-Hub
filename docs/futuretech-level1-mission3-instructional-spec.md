# FutureTech Lab — Level 1 Mission 3 Instructional Specification

**Mission:** 3 — Build a Game  
**Status:** LOCKED INSTRUCTIONAL SPECIFICATION — webpage not built  
**Audience:** Grade 8/9 beginners who have passed Missions 1 and 2  
**Target length:** one 90-minute class  
**Locked architecture:** Set Up → First Code → Make It React → Build It → Level It Up → Checkpoint → Skill Passport → Reset

## 1. Progression audit result

Mission 1 establishes events, input/output, sequence, simulator-to-device transfer, basic modification/testing, TRY 4, partner roles, checkpoint, Passport and Reset.

Mission 2 establishes variables, SET versus CHANGE, randomness, IF true/false logic, modification/testing and the same workflow routines.

### Material prerequisite gap found and corrected

The audited Mission 2 did not explicitly teach a loop even though Level 1 progression expects loops before game design. Mission 2 is therefore corrected before Mission 3 is released: students now use one simple `repeat` loop inside the special-result logic, must apply it in Build It, explain it at Checkpoint and record it in the Skill Passport.

No other Mission 1–2 prerequisite requires correction before Mission 3.

---

## 2. What a student should now be able to do independently

A student who has passed Missions 1 and 2 may be expected to do the following without reteaching.

### Coding prerequisites

- create and name a MakeCode project;
- recognize `on start` and input events;
- use Button A, Button B and shake as inputs;
- create visible LED outputs;
- read a short sequence of blocks in order;
- create a variable;
- distinguish SET from CHANGE;
- change a stored number up or down;
- generate a random number;
- read and explain one IF condition as a true/false question;
- use a simple repeat loop;
- make a small requested code change and test it;
- explain what should happen before running the program.

### Hardware and file routines

- identify the micro:bit, LED display, buttons and USB connection;
- connect the micro:bit without forcing connectors;
- test in the simulator first when useful;
- download the newest code to the physical micro:bit;
- recognize when the simulator works but the physical device needs a cable/download check;
- save using the established mission naming routine;
- return the numbered kit, cable and workspace correctly.

### Troubleshooting prerequisites

Students already know the permanent TRY 4 routine and should use it without reteaching:

1. **CHECK** the blocks.
2. **SIMULATE** the newest code.
3. **DOWNLOAD** the newest version.
4. **PARTNER** — explain what should happen.

If they still need help, they should be able to state what they expected and what they already tried.

### Collaboration prerequisites

- Driver controls the computer/device;
- Navigator reads, predicts and checks requirements;
- partners switch at Stage 3;
- both partners must understand the code;
- the project may belong to a pair, but the checkpoint is individual.

### Workflow prerequisites

Students already know how to:

- work through the six stages in order;
- move to Level It Up only after Build It works;
- add their name/pair to Ready-for-Check;
- continue working while waiting;
- complete an individual checkpoint;
- update their Skill Passport;
- complete Reset before leaving.

These routines should be referenced briefly, not retaught.

---

## 3. Mission 3 purpose

Mission 3 is the first **integration mission**.

Missions 1 and 2 taught individual coding ideas. Mission 3 combines known ideas into a playable system with a goal, rules, score, failure state and another human player.

The conceptual progression is:

**EVENTS → VARIABLES / IF / LOOPS → GAME SYSTEM**

Mission 3 should feel like a noticeable step forward while introducing only a small number of genuinely new ideas.

---

## 4. Mission question and success criteria

### Mission question

> **How can I combine controls, rules, score and testing to make a game another person can play?**

### Student success statement

> **I can create a playable micro:bit game, control it with a game controller, use a rule to change the score or end the game, and improve it after a playtest.**

---

## 5. Required new learning

Mission 3 introduces only these new ideas.

### New concept 1 — Game sprite

A **sprite** is a controllable LED object on the micro:bit display.

Students need only:

- create one sprite;
- understand its left-to-right position (`x` from 0 to 4);
- move it one LED at a time;
- recognize the centre position as `x = 2` in the core model.

Do **not** require full x/y coordinate teaching, multiple sprites or direction-angle mathematics in the core mission.

### New concept 2 — Forever as a game loop

Students already understand that a loop repeats instructions. Mission 3 applies that idea with `forever` so the game can keep moving/checking while other input events still occur.

This is an application of a known concept, not a new loop unit.

### New concept 3 — Game state: score and game over

Students already understand stored numbers through variables. Mission 3 introduces the MakeCode game score/game-over blocks as a game-specific version of remembered state:

- correct action → score increases;
- incorrect action → game ends;
- game over shows the final score.

### New concept 4 — Controller mapping

A game controller must be framed as **another source of input**, not as a separate coding system.

The mental model is:

**CONTROLLER INPUT → EVENT → GAME ACTION**

Students first make the game work with a familiar micro:bit input, then map the same action to one controller control.

### New process skill — Playtesting

For the first time, another student must play the creation as a user.

Students must learn:

> **BUILD → PLAYTEST → NOTICE → CHANGE → RETEST**

One evidence-based improvement is required before Ready-for-Check.

---

## 6. Core game model

The required core game should be a **timing / target game**, not a multi-level arcade game.

Recommended baseline model:

### Target Snap

- one LED sprite moves left and right across one row;
- a loop keeps it moving and bouncing at the edges;
- the target position is the centre (`x = 2`);
- the player presses one control when the sprite reaches the target;
- IF the sprite is on the target, score increases;
- ELSE / otherwise, the game ends and shows the score;
- another student can immediately understand the goal: **score as many points as possible before a miss**.

This model is intentionally close to the official MakeCode game-tool pattern and uses the built-in sprite, score and game-over systems.

Randomness is **not required in the core game**. Mission 2 already established it, and forcing randomness into the first controller game would add complexity without improving the main learning goal. Randomness returns naturally in Level It Up.

---

## 7. Six-stage instructional sequence

### Stage 1 — Set Up

**Purpose:** reconnect to known workflow and introduce the controller physically without teaching controller code yet.

Students:

- collect computer, numbered micro:bit kit, USB data cable and game controller;
- confirm Driver/Navigator roles;
- identify the controller control that will eventually be used;
- connect only according to the device-specific connection card;
- complete a 60-second prerequisite check: identify an event, IF and loop from a small example or teacher-provided code image.

**Do not** spend this stage teaching controller libraries or wiring theory.

### Stage 2 — First Code

**Purpose:** get a playable-looking object moving quickly using the micro:bit alone.

Students create a new project named using the established convention, e.g. `FirstName_L1_M3`.

Core steps:

1. create one game sprite in the centre;
2. place sprite movement inside `forever`;
3. move one LED at a time;
4. bounce at the edge;
5. add a short pause to make the speed playable;
6. test in the simulator and on the micro:bit.

**Success looks like:** one dot repeatedly travels across the display without student input.

### Stage 3 — Make It React

**Purpose:** turn moving code into an actual game rule, then transfer a familiar input to the controller.

**Switch partner roles at the start of Stage 3.**

Part A — familiar input first:

- use Button A as the temporary action input;
- when A is pressed, check whether sprite x-position equals the target position;
- TRUE → add one point;
- FALSE → game over.

Students must predict what will happen for x = 2 and x ≠ 2 before testing.

Part B — controller transfer:

- map one controller control to the same game action;
- keep the rule unchanged;
- test controller → event → score/game-over.

Key message:

> **The controller changes the input device. It does not change the game rule.**

### Stage 4 — Build It

**Challenge title:** Build It — Target Game

Students create a playable timing game for another person.

Required characteristics:

- one visible moving sprite;
- movement repeats continuously;
- at least one controller input affects gameplay;
- one clear target/success rule;
- an IF decision checks the rule;
- a correct action changes score;
- an incorrect action can end the round/game;
- the game runs on the physical micro:bit/controller setup;
- instructions are simple enough that another student can start playing within about 20 seconds;
- the pair changes at least one meaningful element from the baseline (speed, target position, controller control, scoring behaviour, theme or rule);
- another student playtests it;
- the creators make **one improvement based on the playtest** and retest.

The core game should not require a written design worksheet. A tiny “Goal / Control / Rule” planning card or on-screen prompt is enough.

### Stage 5 — Level It Up

Only after the core Build It requirements work.

Offer bounded extensions rather than an open feature list.

Recommended choices:

**⭐ Speed Tuner**  
Change pause/speed and decide which version is most playable.

**⭐ Random Target**  
Use Mission 2 randomness to choose a different target position between rounds.

**⭐⭐ Two Controls**  
Use a second controller input for a second meaningful game action.

**⭐⭐ Win Goal**  
Add a score target or another clear ending rule.

**⭐⭐⭐ 2D Challenge**  
Only for fast/experienced students: introduce vertical movement or a second sprite.

Students should choose **one**, not attempt every extension.

### Stage 6 — Checkpoint

The checkpoint remains short and individual.

**Check 1 — Play It**  
Student demonstrates the controller input and earns or loses a point according to the game rule.

**Check 2 — Explain the System**  
Student identifies and explains:

- the controller input/event;
- the loop that keeps the game active;
- the IF rule;
- what the score remembers;
- what causes game over or the end condition.

**Check 3 — Change It**  
Teacher requests one small change, such as:

- change the target position;
- change movement speed;
- change the controller control;
- change scoring behaviour.

Student makes the change, predicts the effect and tests it independently.

**PASS** = playable game + correct explanation + independent modification/test.  
**NOT YET** = revisit one specific skill and retry.

---

## 8. Mission 3 Skill Passport

Record only genuinely new/integrated mastery:

- ☐ I can create and control a game sprite.
- ☐ I can use a loop to keep a game running.
- ☐ I can use a controller input to trigger a game action.
- ☐ I can use an IF rule to change score or end the game.
- ☐ I can playtest a game and make one useful improvement.
- ☐ I can change, test and explain my game independently.

Do not restamp every Mission 1–2 skill unless the student needs remediation.

---

## 9. Complexity ceiling — required guardrails

Mission 3 is **not** a full game-programming unit.

The required pathway must stay below this ceiling:

- one main moving sprite;
- one main controller action in the core game;
- one row / one-dimensional movement in the core game;
- one main IF rule;
- one score system;
- one game-ending rule;
- one loop application;
- no required arrays/lists;
- no required functions;
- no required radio/multiplayer networking;
- no required timers/countdowns;
- no required lives system;
- no required nested conditionals;
- no required multiple levels/screens;
- no required JavaScript/Python;
- no required custom graphics beyond the LED sprite/game display;
- no competition requirement between teams.

Students who want more complexity use Level It Up or later levels.

---

## 10. Controller onboarding guardrail

The exact physical controller model is not identified in the current FutureTech site source. That is **not a Mission 1–2 learning gap**, but it is an implementation dependency for the Mission 3 webpage.

Before the webpage is built, the teacher-facing implementation must confirm the controller model and provide one tiny device-specific connection/mapping card containing only:

1. how to connect it safely;
2. which control is used in the core game;
3. which MakeCode input/event corresponds to that control;
4. one “controller not responding” check.

The mission itself must remain hardware-concept neutral:

> **controller → input event → game action**

Do not turn Mission 3 into an electronics/wiring lesson.

---

## 11. Pacing target

Approximate 90-minute pacing:

- **0–10 min** — Set Up + prerequisite reboot + controller identification
- **10–27 min** — First Code: moving sprite
- **27–45 min** — Make It React: scoring rule + controller transfer
- **45–68 min** — Build It: personalized playable target game
- **68–80 min** — Playtest, improve, Ready-for-Check / Level It Up
- **80–87 min** — individual checkpoints
- **87–90 min** — Passport + Reset

The first visible game-like motion should occur by about minute 20.

---

## 12. Final lock decision

After the Mission 2 loop correction, Missions 1–2 provide a sufficient beginner prerequisite base for Mission 3.

**Mission 3 is locked as an integration mission built around one moving sprite, one controller input, one repeated game loop, one IF-based timing rule, score/game-over, one peer playtest and one evidence-based improvement.**

No Mission 3 webpage should be created until the exact controller model/mapping is confirmed for the device-specific connection card.
