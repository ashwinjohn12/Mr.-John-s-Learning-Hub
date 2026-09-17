# FutureTech Lab — Level 1 Mission 3 Instructional Specification

**Mission:** 3 — Build a Game  
**Status:** PRE-BUILD COMPLIANT / webpage not built  
**Audience:** Grade 8/9 beginners who have passed Missions 1 and 2  
**Target length:** one 90-minute class  
**Locked architecture:** Set Up → First Code → Make It React → Build It → Level It Up → Checkpoint → Skill Passport → Reset  
**Governing standard:** `docs/futuretech-level1-mission-design-standard.md`

## 1. Pre-build compliance audit result

Mission 3 is a good instructional fit for the frozen FutureTech Level 1 standard. The core concept, pacing and six-stage architecture do not need redesign.

The pre-build audit identified and corrected these specification-level gaps:

1. **Visual scaffolding is now explicit.** Stage 2 and Stage 3 define where block-finder chips and mini MakeCode models are appropriate, while Stage 4 is protected from showing a complete finished solution.
2. **Success indicators are now explicit at each major guided coding step.** Students will have observable results to compare against rather than relying on “code is correct.”
3. **TRY 4 is explicitly preserved as the permanent troubleshooting routine.** Mission-specific warnings support it without replacing it.
4. **Level It Up is reduced to four bounded choices.** The earlier 2D extension is removed from the standard Mission 3 page so the extension set stays focused and beginner-manageable.
5. **Checkpoint result language is aligned to the course standard:** MISSION COMPLETE / RETRY ONE SKILL / SUPPORT ROUTE.
6. **Skill Passport wording is tightened** so it records what the core mission actually teaches rather than implying full directional sprite control.
7. **Responsive and accessibility requirements are now explicit** for implementation and release testing.
8. **Stage 1 prerequisite review is simplified** to a compact on-page recap rather than relying on a teacher-provided code image.

No change is required to Mission 1, Mission 2, the shared mission frame or the public site.

One implementation dependency remains: the exact physical controller model/mapping must still be confirmed before the webpage is built.

---

## 2. Progression audit result

Mission 1 establishes events, input/output, sequence, simulator-to-device transfer, basic modification/testing, TRY 4, partner roles, checkpoint, Passport and Reset.

Mission 2 establishes variables, SET versus CHANGE, randomness, IF true/false logic, one simple repeat loop, modification/testing and the same workflow routines.

### Material prerequisite gap previously found and corrected

The earlier Mission 2 design did not explicitly teach a loop even though Level 1 progression expects loops before game design. Mission 2 was corrected before this compliance audit: students now use one simple `repeat` loop inside the special-result logic, apply it in Build It, explain it at Checkpoint and record it in the Skill Passport.

No further Mission 1–2 prerequisite correction is required before Mission 3.

---

## 3. What a student should now be able to do independently

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

1. **CHECK** — inspect blocks, values, order and nesting; compare with a code model when one exists.
2. **SIMULATE** — test the newest code on screen.
3. **DOWNLOAD** — send the newest version to the device.
4. **PARTNER** — explain what should happen and what actually happened.

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

## 4. Mission 3 purpose

Mission 3 is the first **integration mission**.

Missions 1 and 2 taught individual coding ideas. Mission 3 combines known ideas into a playable system with a goal, rules, score, failure state and another human player.

The conceptual progression is:

**EVENTS → VARIABLES / IF / LOOPS → GAME SYSTEM**

Mission 3 should feel like a noticeable step forward while introducing only a small number of genuinely new ideas.

---

## 5. Mission question and success criteria

### Mission question

> **How can I combine controls, rules, score and testing to make a game another person can play?**

### Student success statement

> **I can create a playable micro:bit game, control it with a game controller, use a rule to change the score or end the game, and improve it after a playtest.**

---

## 6. Required new learning

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

Students already understand that a loop repeats instructions. Mission 3 applies that idea with `forever` so the game can keep moving while input events can still occur.

This is an application of a known concept, not a new loop unit.

### New concept 3 — Game state: score and game over

Students already understand stored numbers through variables. Mission 3 introduces the MakeCode game score/game-over tools as a game-specific form of remembered state:

- correct action → score increases;
- incorrect action → game ends;
- game over displays the final result/score.

### New concept 4 — Controller mapping

A game controller must be framed as **another source of input**, not as a separate coding system.

The mental model is:

**CONTROLLER INPUT → EVENT → GAME ACTION**

Students first make the game rule work with a familiar micro:bit input, then map the same action to one controller control.

### New process skill — Playtesting

For the first time, another student must play the creation as a user.

Students learn:

> **BUILD → PLAYTEST → NOTICE → CHANGE → RETEST**

One evidence-based improvement is required before Ready-for-Check.

---

## 7. Core game model

The required core game is a **timing / target game**, not a multi-level arcade game.

### Target Snap baseline

- one LED sprite moves left and right across one row;
- a loop keeps it moving and bouncing at the edges;
- the target position is the centre (`x = 2`) in the guided baseline;
- the player presses one control when the sprite reaches the target;
- IF the sprite is on the target, score increases;
- ELSE / otherwise, the game ends and displays the final result/score;
- another student can immediately understand the goal: **score as many points as possible before a miss**.

Randomness is **not required in the core game**. Mission 2 already established it, and forcing randomness into the first controller game would add complexity without improving the main learning goal. Randomness returns in Level It Up.

The guided baseline may demonstrate the structure needed to learn the new game system. Stage 4 must still require meaningful student decisions and must not sit beside a complete copyable finished solution.

---

## 8. Visual scaffolding plan

Mission 3 follows the frozen rule: **use a visual code model only when it prevents a realistic beginner structural error.**

### Stage 1 — no new code model

Use a compact prerequisite recap card only. Students identify familiar ideas such as event, IF and loop from a very small schematic or labelled reminder.

Do not add a full Mission 1/2 review model.

### Stage 2 — one mini model required

Use one simplified mini MakeCode model for the **new movement structure**:

- create one sprite;
- `forever` owns the repeated movement;
- move one step;
- bounce at the edge;
- pause.

The model exists to show **ownership/order**, especially that movement belongs inside the repeating game loop.

Pair it with block-finder chips for only the unfamiliar categories/blocks needed in this step. Exact chip labels must match the current MakeCode interface at implementation time.

Do not show scoring, target logic or controller code in this model.

### Stage 3 — one rule model + one tiny hardware mapping card

Use one simplified code model for the **familiar-input game rule**:

- Button A event;
- IF sprite x-position equals the target;
- true path changes score;
- false path ends the game.

The purpose is to make the decision structure visible, not to provide the final personalized game.

Pair the model with only the block-finder chips needed for the new game-state/position tools.

After the rule works, show a separate **device-specific controller mapping card** containing only:

- the selected controller control;
- the corresponding MakeCode event/input;
- the statement that the game rule stays the same;
- one controller-not-responding troubleshooting check.

Do not create a second full code model merely to show the controller version if only the input event changes.

### Stage 4 — no complete code model

Build It may provide:

- a requirements checklist;
- Goal / Control / Rule planning prompts;
- one or two idea examples;
- success criteria;
- TRY 4.

It must **not** display the complete finished Target Game code beside the challenge.

---

## 9. Six-stage instructional sequence

### Stage 1 — Set Up

**Purpose:** reconnect to known workflow and introduce the controller physically without teaching controller code yet.

Students:

- collect computer, numbered micro:bit kit, USB data cable and game controller;
- confirm Driver/Navigator roles;
- identify the controller control that will eventually be used;
- connect only according to the device-specific connection card;
- complete a 60-second prerequisite recap by identifying an event, IF and loop from a compact on-page reminder.

**Do not** spend this stage teaching controller libraries, wiring theory or a full prerequisite lesson.

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

**Block-finder support:** include only the unfamiliar sprite/game tools plus the known loop/pause tools needed for this structure.

**Mini code model:** show only the movement structure described in Section 8.

**Success looks like:** one dot repeatedly travels across the display without student input and visibly changes direction at the edge.

**Likely bug prompt:** if the dot is too fast to follow, check for the pause; if it stops after one move, check whether movement is inside the repeating loop.

### Stage 3 — Make It React

**Purpose:** turn moving code into an actual game rule, then transfer a familiar input to the controller.

**Switch partner roles at the start of Stage 3.**

Part A — familiar input first:

- use Button A as the temporary action input;
- when A is pressed, check whether sprite x-position equals the target position;
- TRUE → add one point;
- FALSE → game over.

Students predict what will happen for x = 2 and x ≠ 2 before testing.

**Block-finder support:** include the unfamiliar game-position/score/end tools and the Logic blocks needed to read the rule.

**Mini code model:** show the Button A decision structure described in Section 8. Do not combine it with the Stage 2 movement model into one giant finished-game diagram.

**Success looks like:** pressing A at the target increases score; pressing A away from the target ends the round/game.

Part B — controller transfer:

- map one controller control to the same game action;
- keep the rule unchanged;
- test controller → event → score/game-over.

**Success looks like:** the selected physical controller input triggers the same result that Button A triggered.

Key message:

> **The controller changes the input device. It does not change the game rule.**

**Likely bug prompts:** if scoring never occurs, compare the checked x-position with the intended target; if the controller does not respond, use the single device-specific controller check before asking for help.

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
- the pair changes at least one meaningful element from the guided baseline (speed, target position, controller control, scoring behaviour, theme or rule);
- another student playtests it;
- the creators make **one improvement based on the playtest** and retest.

Use a tiny **Goal / Control / Rule** planning prompt rather than a written design worksheet.

**Build It success indicator:** another student can start the game from the creators' explanation, use the controller successfully, experience a score/end result, and the creators can name one change they made after the playtest.

**TRY 4 remains unchanged:** CHECK → SIMULATE → DOWNLOAD → PARTNER. Mission-specific warnings may point students back to sprite movement, target position or controller mapping but do not replace TRY 4.

### Stage 5 — Level It Up

Only after the core Build It requirements work.

Offer exactly four bounded choices on the standard Mission 3 page:

**⭐ Speed Tuner**  
Change pause/speed and decide which version is most playable.

**⭐ Random Target**  
Use Mission 2 randomness to choose a different target position between rounds.

**⭐⭐ Two Controls**  
Use a second controller input for a second meaningful game action.

**⭐⭐ Win Goal**  
Add a score target or another clear ending rule.

Students choose **one**, not every extension.

A 2D/multiple-sprite challenge is deliberately excluded from the standard Mission 3 Level It Up set. It may be reserved for a later level or teacher-selected enrichment after the mission rather than appearing as an ordinary beginner extension.

### Stage 6 — Checkpoint

The checkpoint remains short and individual.

**Check 1 — Play / Identify**  
Student demonstrates the controller input and earns or loses a point according to the game rule. Student identifies the controller event/input that caused the action.

**Check 2 — Explain the System**  
Student explains:

- the loop that keeps the game active;
- the IF rule;
- what the score represents/remembers;
- what causes game over or the end condition.

**Check 3 — Change It**  
Teacher requests one small change, such as:

- change the target position;
- change movement speed;
- change the controller control;
- change scoring behaviour.

Student makes the change, predicts the effect and tests it independently.

Mission result language:

- **MISSION COMPLETE** — playable game + correct explanation + independent modification/test;
- **RETRY ONE SKILL** — revisit one specific skill and retry only that skill;
- **SUPPORT ROUTE** — use when the student needs more guided support before an independent retry.

---

## 10. Mission 3 Skill Passport

Record only genuinely new/integrated mastery:

- ☐ I can create and move a game sprite.
- ☐ I can use a loop to keep a game running.
- ☐ I can use a controller input to trigger a game action.
- ☐ I can use an IF rule to change score or end the game.
- ☐ I can playtest a game and make one useful improvement.
- ☐ I can change, test and explain my game independently.

Do not restamp every Mission 1–2 skill unless the student needs remediation.

The Passport records mastery and must remain compact; it is not a second assignment.

---

## 11. Reset

Mission 3 uses the established hardware reset routine rather than inventing a new one.

Students finish by confirming:

- project saved correctly;
- micro:bit returned to the numbered kit;
- matching USB cable returned and loosely coiled;
- controller returned to its assigned location/container according to the classroom equipment system;
- kit/workspace complete and clear;
- damage, missing equipment or controller faults reported;
- Passport/progress updated when used.

The Reset section should visually match Missions 1–2.

---

## 12. Complexity ceiling — required guardrails

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

Students who want more complexity use the four bounded Level It Up options or later FutureTech levels.

---

## 13. Locked controller mapping

**Default Mission 3 hardware:** Kitronik :GAME Controller for BBC micro:bit, stock code 5644, with BBC micro:bit V2.

This is the standard Mission 3 controller because it works in the normal micro:bit MakeCode editor, supports micro:bit V2, and provides a dedicated MakeCode extension with direct controller-button events.

### Student-facing mapping card — keep this small

1. **Safe connection** — switch the :GAME Controller off. Insert the micro:bit firmly into the controller edge connector with the micro:bit LED display facing the same direction as the front of the controller. Power the controller with its two AA batteries. Do not force the micro:bit into the connector.
2. **Core control** — use **Fire 1** as the single Target Game action button.
3. **MakeCode event** — add the **Kitronik :GAME Controller** extension (`KitronikLtd/pxt-kitronik-game-controller`) and use the controller event **on button Fire 1 Down**. Put the same IF target rule inside this event that previously worked with micro:bit Button A.
4. **Controller not responding check** — temporarily make **Fire 1 → show an icon**. If the icon does not appear, check that the controller is powered, the micro:bit is fully seated in the edge connector, and the project contains the Kitronik :GAME Controller extension before debugging the game rule.

The locked mental model remains:

> **Fire 1 → controller event → IF target rule → score / game over**

The familiar-input-first sequence remains mandatory: students first make the rule work with micro:bit Button A, then transfer only the input event to Fire 1.

### Other available gaming hardware

The ELECFREAKS micro:bit Retro Arcade is **not** the default Mission 3 controller. It is a colour-screen micro:bit V2 expansion designed around Microsoft MakeCode Arcade, so using it here would change the programming environment and add unnecessary cognitive load. Reserve it for a later dedicated MakeCode Arcade/game-design experience.

Do not mix controller platforms within the core Mission 3 instructions. If classroom quantities require mixed hardware, use the Kitronik :GAME Controller pathway as the assessed standard and treat any ELECFREAKS pathway as teacher-prepared enrichment or a later mission.

---

## 14. Responsive implementation requirements

Mission 3 must inherit the responsive behaviour of the frozen FutureTech mission standard.

Required release checks:

- desktop;
- Chromebook/tablet;
- 390 px;
- 375 px;
- 320 px;
- no horizontal page scrolling;
- Stage navigation reflows without becoming unreadable;
- task/check/extension grids collapse cleanly;
- mini code models stack vertically on narrow screens;
- nested logic remains visibly indented after stacking;
- the controller mapping card remains readable without horizontal zoom;
- buttons and next-step CTAs wrap safely and remain tappable;
- no essential instruction depends on hover.

The built mission must pass the existing FutureTech build/audit and rendered-preview smoke gates before release.

---

## 15. Accessibility requirements

Implementation must preserve the Level 1 accessibility baseline:

- semantic heading/section order;
- meaningful link text;
- visible keyboard focus;
- `aria-label` on code-model/controller-mapping regions where useful;
- sufficient text/background contrast;
- do not rely on block colour alone to communicate meaning;
- every code model has accompanying plain-language explanation;
- controller instructions identify controls by name/position as well as any colour/icon;
- reduced-width layouts remain usable without horizontal zoom;
- success/warning meaning is expressed in text as well as colour.

No decorative screenshot should be added unless it solves a real interface-location problem.

---

## 16. Pacing target

Approximate 90-minute pacing:

- **0–10 min** — Set Up + prerequisite recap + controller identification
- **10–27 min** — First Code: moving sprite
- **27–45 min** — Make It React: scoring rule + controller transfer
- **45–68 min** — Build It: personalized playable target game
- **68–80 min** — Playtest, improve, Ready-for-Check / Level It Up
- **80–87 min** — rolling individual checkpoints
- **87–90 min** — Passport + Reset

The first visible game-like motion should occur by about minute 20.

If students reach Ready-for-Check earlier, rolling checkpoints may begin before minute 80 while other students continue Build It or Level It Up.

---

## 17. Final pre-build decision

After the Mission 2 loop correction and this compliance pass, Missions 1–2 provide a sufficient beginner prerequisite base and the Mission 3 specification now conforms to the frozen Level 1 mission design standard.

**Mission 3 is instructionally and hardware-mapping ready to build using the Kitronik :GAME Controller + micro:bit V2 pathway.**

Its locked core remains:

**one moving sprite + one controller input + one repeating game loop + one IF-based timing rule + score/game-over + one peer playtest + one evidence-based improvement.**

The Mission 3 webpage remains unbuilt by this specification task.
