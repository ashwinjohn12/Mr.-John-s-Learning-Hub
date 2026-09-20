# FutureTech Lab — Level 1 Mission 4 Student Webpage Blueprint

**Mission:** 4 — Robot Rookie  
**Status:** STUDENT-FACING PAGE BLUEPRINT ONLY — no Astro page implemented  
**Source specification:** `docs/futuretech-level1-mission4-instructional-spec.md`  
**Governing standard:** `docs/futuretech-level1-mission-design-standard.md`

This blueprint defines the exact student-facing page structure for Mission 4 while preserving the frozen FutureTech mission frame:

**1 Set Up → 2 First Code → 3 Make It React → 4 Build It → 5 Level It Up → 6 Checkpoint → Skill Passport → Reset**

The page should feel like the next natural step after Missions 1–3:

**micro:bit code → external robot output → light + motion**

The required pathway uses only:

- one Hummingbird Bit Controller;
- one micro:bit V2;
- one single-color LED;
- one position servo;
- LED Port 1;
- Servo Port 1.

No sensors, autonomous behavior, rotation servos, radio, or multiple motors appear in the required pathway.

---

# 1. Mission hero and brief

Use the existing `FutureTechMissionFrame.astro` hero and six-stage jump navigation.

## Mission title

**Mission 4 — Robot Rookie**

## Tagline

**Make code control real robot parts.**

## Mission Question

> **How can code control real robot parts to create light and movement?**

## You Are Ready When...

> **I can connect a Hummingbird LED and position servo, control them with MakeCode, combine light and movement into a simple robotic action, and explain how my code matches the hardware ports.**

## Persistent support strip

Keep the locked mission help:

**Start at Stage 1 and work in order.**  
**Stuck anywhere? TRY 4: Check → Simulate → Download → Partner.**

Immediately below, add one compact mission-flow visual:

**CODE → PORT → ROBOT OUTPUT**

Then show two compact output branches:

**LED PORT 1 → LIGHT**  
**SERVO PORT 1 → MOTION**

Student caption:

> **Your code controls the part connected to the matching Hummingbird port.**

---

# Stage 1 — Set Up

## Section goal

Students identify only the Hummingbird parts needed today, connect them safely with power off, and understand the idea of code → port → output.

## Stage header

**01 — ROBOT HARDWARE**  
**Set Up**

## Intro copy

> Today your code leaves the micro:bit and controls real robot parts. Set up the Hummingbird carefully before you turn on its power.

## Equipment checklist

- ☐ Computer
- ☐ micro:bit V2
- ☐ USB data cable
- ☐ Hummingbird Bit Controller
- ☐ battery pack / approved power supply
- ☐ single-color LED
- ☐ position servo
- ☐ servo horn
- ☐ terminal tool if your station uses one

## Individual-work cue

Use one green success card:

> **This is an individual mission.** Build, test, and explain your own robot outputs. Share a hardware station only if controller quantities require it.

---

# Stage 1 hardware visual

This is the most important visual on the page.

Use a focused **Hummingbird Bit controller diagram**, not a photo of the whole kit.

The diagram should show a simplified top-down controller with only five labelled areas:

1. **micro:bit connection**
2. **LED Port 1**
3. **Servo Port 1**
4. **Power**
5. **Power / status lights**

Do not label sensors, rotation servos, unused LED ports, unused servo ports, or every connector on the board.

## Diagram layout

Use the controller board in the centre.

### Left callout

**LED PORT 1 — LIGHT**

Small wire-order strip:

**colored wire → +**  
**black wire → –**

### Right callout

**SERVO PORT 1 — MOTION**

Small wire-order strip:

**white → S**  
**red → +**  
**black → –**

### Top callout

**MICRO:BIT**

> Insert it correctly. Never force the connector.

### Bottom callout

**POWER**

> Keep power OFF while you change robot connections.

### Small status note

> The Hummingbird needs its own power before the servo can move.

## Accessibility requirement for the diagram

The same connection information must appear immediately below the visual as text. The diagram cannot be the only source of wiring instructions.

---

# Safe connection card

Header:

**CONNECT WITH POWER OFF**

Use six short numbered steps:

1. **Power OFF first.**
2. Insert the micro:bit correctly. Do not force it.
3. **LED Port 1:** colored wire → **+** · black wire → **–**.
4. **Servo Port 1:** white → **S** · red → **+** · black → **–**.
5. Connect Hummingbird power before testing the servo.
6. Keep fingers and loose objects away from the servo horn while it moves.

Use orange warning treatment.

---

# Code → Port → Output visual

Place this directly after the wiring card.

Use two horizontal rows on desktop:

### Row 1

**MakeCode LED 1 block**  
→ **LED PORT 1**  
→ **LIGHT**

### Row 2

**MakeCode Servo 1 block**  
→ **SERVO PORT 1**  
→ **MOTION**

Below it:

> **The number in the code must match the number on the controller.**

This is a visual concept map, not a full code model.

---

# 60-second hardware check

Use three quick prompts:

**Which part makes light?**  
**Which part makes motion?**  
**Which port does each part use?**

Do not turn this into a quiz form.

## Stage 1 success cue

> ✓ **You are ready when:** the LED is in LED Port 1, the position servo is in Servo Port 1, power is OFF while you check the connections, and you can explain what a port does.

---

# Stage 2 — First Code

## Section goal

Students get the first external robot output working quickly by blinking the single-color LED.

## Stage header

**02 — FIRST ROBOT OUTPUT**  
**First Code**

## Intro copy

> Start with the easiest robot output: light. Make the external LED blink before you add any motion.

## Shared ordered steps

1. Open micro:bit MakeCode.
2. Create `FirstName_L1_M4`.
3. Add the Hummingbird blocks.
4. Start the Hummingbird.
5. Control LED Port 1.
6. Download to the real hardware.

## Block-finder chips

Use exactly:

- **Hummingbird → start Hummingbird**
- **Hummingbird → single color LED**
- **Basic → pause**

Before implementation, verify the current editor wording and adjust only the visible chip labels if necessary.

---

# Mini code model 1 — external LED

Use one dark pseudo-MakeCode workspace.

Header:

**CODE MODEL 1 OF 2**  
**Start Hummingbird + blink LED 1**

Model:

**on start**
- start Hummingbird

**forever**
- Hummingbird LED **1** brightness **100**
- pause **500 ms**
- Hummingbird LED **1** brightness **0**
- pause **500 ms**

Highlight the number **1** in the LED block.

Add a small visual arrow under the model:

**LED 1 in code → LED Port 1 on board**

## Model note

> **Brightness 100 = full brightness. Brightness 0 = off.**

## Port reminder

Use a purple concept callout:

> **PORT MATCH:** LED 1 in your code controls the LED connected to LED Port 1.

## Success cue

> ✓ The external LED blinks on and off repeatedly.

## Likely bug card

Orange warning treatment:

> LED not lighting?
>
> - check colored wire → **+**
> - check black wire → **–**
> - check **LED Port 1**
> - check **start Hummingbird**
> - download the newest code

## Tiny independent change

Header:

**CHANGE ONE THING**

Student chooses one:

- change the blink speed; or
- change brightness from 100 to another value.

Success:

> ✓ Your LED still works after your change.

---

# Stage 3 — Make It React

## Section goal

Students add a position servo, centre it safely at 90°, then use familiar micro:bit button events to create two different positions.

## Stage header

**03 — CODE → MOTION**  
**Make It React**

## Servo safety/setup card

Place this before any servo code.

Header:

**CENTER THE SERVO FIRST**

Use five numbered steps:

1. Connect Hummingbird power.
2. Set **Servo Port 1 → 90°**.
3. Download.
4. Watch the servo move to the centre position.
5. Only then attach or align the servo horn / moving piece.

Orange note:

> **Do not attach a tight mechanism before centering the servo.**

Small angle visual:

**30° ← 90° → 150°**

Label:

- 30° = one side
- 90° = centre
- 150° = other side

Do not add a detailed protractor lesson.

---

# Stage 3 block-finder chips

Use exactly:

- **Input → on button A pressed**
- **Input → on button B pressed**
- **Hummingbird → position servo**
- **Hummingbird → single color LED**

Use **Basic → pause** only if a student adds timed motion later.

---

# Mini code model 2 — two servo positions

Use one dark pseudo-MakeCode workspace.

Header:

**CODE MODEL 2 OF 2**  
**Buttons control servo positions**

Model:

**on button A pressed**
- Hummingbird position servo **1** → **30°**

**on button B pressed**
- Hummingbird position servo **1** → **150°**

Add a small port mapping cue:

**Servo 1 in code → Servo Port 1 on board**

## Model note

> A position servo moves to the angle you choose and stays there until another command changes it.

## Success cue

> ✓ Button A moves the servo to one position. Button B moves it to a clearly different position.

---

# Guided combine step

Do not create a third code model.

Use one compact route:

**BUTTON → SERVO ANGLE + LED BRIGHTNESS**

Student copy:

> Now add the LED to one or both button events.

Use two simple idea cards:

### STATE A IDEA
- servo moves
- LED turns on

### STATE B IDEA
- servo moves somewhere different
- LED turns off

Footer:

> **These are examples, not a finished Robot Signal.**

## Stage 3 success cue

> ✓ One button changes both motion and light, and you can point to the matching Port 1 blocks in your code.

---

# Stage 4 — Build It

## Stage header

**04 — YOUR ROBOT**  
**Build It — Robot Signal**

## Intro copy

> Build a simple robotic signal, character, or device that uses **one light and one moving part** to communicate two different states.

Do not use the word “full robot.” The goal is one clear physical mechanism.

---

# Planning strip

Use three compact cards.

### STATE A

> What should the robot show or do?

### STATE B

> What should change?

### MEANING

> What are the light and movement communicating?

No written worksheet.

---

# Idea cards

Use no more than six compact examples:

- **Crossing Gate**
- **Robot Arm**
- **Warning Signal**
- **Creature Head / Tail**
- **Mini Door**
- **Signal Flag**

Each card should contain only the title and one tiny icon/shape cue.

Do not explain how to code each example.

---

# Build It checklist

Use the established scannable checklist.

- ☐ Hummingbird starts correctly in code
- ☐ LED uses **LED Port 1**
- ☐ position servo uses **Servo Port 1**
- ☐ Button A creates one clear robot state
- ☐ Button B creates a different robot state
- ☐ at least one state changes the LED
- ☐ both states use a meaningful servo position
- ☐ servo stays within safe, useful angles
- ☐ light + motion match the intended meaning
- ☐ I made at least one meaningful design choice
- ☐ robot works after a fresh download
- ☐ I can explain **code → port → output**

## Meaningful choices

Students decide:

- physical theme;
- servo angle A;
- servo angle B;
- LED brightness/state;
- what State A means;
- what State B means.

Do not provide a finished Build It code model.

---

# Build It success cue

> ✓ **Build It is ready when:** Button A and Button B create two clear physical states using both light and motion, and you can explain why you chose those states.

---

# TRY 4 — Hummingbird version

Keep the standard orange TRY 4 card.

### 1 — CHECK

> Check the code block, port number, wire order, power, and servo angle.

### 2 — SIMULATE

> Test the micro:bit button logic on screen. Hummingbird outputs must be checked on the real hardware.

### 3 — DOWNLOAD

> Send the newest program to the micro:bit.

### 4 — PARTNER

> Briefly explain what you expected and what actually happened to a nearby student.

Footer:

> Still stuck? Ask for help and say what you already tried.

## Hummingbird-specific warning

Separate orange mini-card:

> **A working simulator does not prove the Hummingbird wiring or power is correct.**

---

# Stage 5 — Level It Up

## Stage header

**05 — OPTIONAL CHALLENGE**  
**Level It Up**

Intro:

> Only after Robot Signal works. Choose **one** while you wait for your checkpoint.

Use four cards only.

## ⭐ Brightness Designer

> Use a brightness value between 1 and 99. Decide whether the new brightness improves your signal.

## ⭐ Three Positions

> Use A, B, and A+B to move the position servo to three different angles.

## ⭐⭐ Motion Sequence

> Make one input move the servo through three positions with pauses.

Use only the concept cue:

**30° → 90° → 150°**

Do not show full blocks.

## ⭐⭐ Tri-Color Upgrade

> Replace or add the single-color LED with one tri-color LED and use one simple color.

Small note:

> This is optional. Tri-color LED skills are not part of the Mission 4 checkpoint.

## Mission 4 limit warning

> **No sensors, autonomous reactions, rotation servos, radio, or multiple motors yet.**

Ready-for-Check cue:

> When every Build It box is checked, add your name to **Ready-for-Check**. Keep Leveling Up until you are called.

---

# Stage 6 — Checkpoint

## Stage header

**06 — SHOW WHAT YOU KNOW**  
**Checkpoint**

Intro:

> Bring your robot and open your code when you are called. The checkpoint is individual.

Use four compact cards.

## Check 1 — Identify the Hardware

> Demonstrate one robot state. Point to:
>
> - LED Port 1
> - Servo Port 1
> - the matching LED and servo blocks in your code

## Check 2 — Explain the Outputs

> Explain:
>
> - what LED brightness controls;
> - what servo angle controls;
> - why the code port must match the physical port;
> - which part is the input and which parts are outputs.

## Check 3 — Change It

Teacher chooses one:

- change LED brightness;
- change one servo angle;
- swap which button triggers one state;
- change one pause if a motion sequence is present.

Student:

**PREDICT → CHANGE → DOWNLOAD → TEST → EXPLAIN**

## After Your Check

- **MISSION COMPLETE**
- **RETRY ONE SKILL**
- **SUPPORT ROUTE**

No Level It Up feature is required for mastery.

---

# Skill Passport

## Stage header

**✓ — SKILL PASSPORT**  
**Mission 4 Skills**

Use:

- ☐ I can safely connect a Hummingbird robot output.
- ☐ I can match a MakeCode port number to a physical Hummingbird port.
- ☐ I can control the brightness of an external LED.
- ☐ I can control the angle of a position servo.
- ☐ I can use a micro:bit input to control robot outputs.
- ☐ I can change, download, test, and explain my robot independently.

No sensor or rotation-servo statements.

---

# Reset

## Stage header

**↺ — LEAVE IT READY**  
**Reset**

Use a two-column checklist on wide screens:

- ☐ project saved correctly
- ☐ Hummingbird power switched off
- ☐ micro:bit returned to numbered kit
- ☐ USB cable loosely coiled
- ☐ single-color LED returned
- ☐ position servo + horn returned
- ☐ battery pack / power lead returned
- ☐ terminal tool returned if used
- ☐ Hummingbird controller returned to its station
- ☐ loose build materials cleared
- ☐ faults / bent pins / loose wires reported
- ☐ Passport/progress updated

## Exit question

> **What is the difference between telling an LED what brightness to use and telling a servo what angle to use?**

---

# Exact visual inventory

Mission 4 should contain **four major instructional visuals total**:

1. **Hummingbird Bit connection diagram**
   - micro:bit
   - LED Port 1
   - Servo Port 1
   - power
   - status lights
   - wire-order mini labels

2. **Code → Port → Output concept visual**
   - LED row
   - Servo row

3. **Mini code model 1**
   - start Hummingbird
   - LED 1 blink

4. **Mini code model 2**
   - Button A/B
   - Servo 1 at two angles

The small 30° ← 90° → 150° servo-centering cue does not count as a full code/hardware model.

Do not add decorative robot art or extra screenshots.

---

# Exact block-finder inventory

## Stage 2

- **Hummingbird → start Hummingbird**
- **Hummingbird → single color LED**
- **Basic → pause**

## Stage 3

- **Input → on button A pressed**
- **Input → on button B pressed**
- **Hummingbird → position servo**
- **Hummingbird → single color LED**

## Level It Up — Tri-Color Upgrade only

- **Hummingbird → tri-color LED**

Before implementation, verify current MakeCode/Hummingbird labels and adjust only wording required to match the live editor.

---

# Hardware wording lock

Use these exact student-facing support phrases wherever the same idea appears.

## LED wiring

**colored wire → +**  
**black wire → –**

## Servo wiring

**white → S**  
**red → +**  
**black → –**

## Port rule

> **The number in your code must match the number on the controller.**

## Servo rule

> **A position servo moves to an angle and stays there until another command changes it.**

## Power rule

> **Power OFF before changing robot connections.**

## Simulator rule

> **The simulator can test your micro:bit logic. It cannot prove the Hummingbird wiring or power is correct.**

---

# Responsive blueprint

## Desktop — 1200 px+

- mission frame matches Missions 1–3;
- Stage 1 hardware diagram may use a wide 3-column composition:
  - LED callout;
  - board diagram;
  - servo callout;
- code → port → output rows remain horizontal;
- Build It planning cards display in 3 columns;
- idea cards may display in 3 columns × 2 rows;
- checklist may use 2 columns;
- Level It Up uses 2 columns;
- code models use full available width without stretching excessively.

## Chromebook / tablet — ~1024 px

- keep the Hummingbird diagram wide if labels remain readable;
- LED and servo callouts may sit beside/below the controller;
- code models remain full-width;
- Build It planning remains 3 columns if readable;
- idea cards use 2–3 columns;
- no font reduction below the Missions 1–3 baseline.

## 390 px and 375 px

- hardware diagram becomes vertical:
  1. controller
  2. LED Port 1 callout
  3. Servo Port 1 callout
  4. power reminder;
- wiring labels remain full text;
- code → port → output visual stacks into two separate vertical cards;
- all block-finder chips wrap;
- code models become a single vertical stack;
- servo 30° / 90° / 150° cue remains on one line only if readable; otherwise stack three labelled positions;
- planning cards become one column;
- Build It checklist becomes one column;
- idea cards become 2 columns if each remains readable, otherwise one column;
- Level It Up becomes one column;
- checkpoint cards become one column;
- no horizontal scrolling.

## 320 px

Apply all 390 px rules plus:

- controller diagram must not use fixed width;
- hardware labels sit outside the board image rather than over tiny ports;
- wire-order labels display as short full-width strips;
- code blocks wrap safely;
- nested code retains visible indentation with capped indent;
- Stage 1 numbered safety steps use full width;
- idea cards become one column if needed;
- Ready-for-Check CTA becomes full width;
- no text smaller than the established Mission 1–3 mobile baseline.

---

# Accessibility blueprint

- semantic section order;
- useful heading hierarchy;
- hardware diagram gets a descriptive `aria-label`;
- plain-text wiring instructions immediately follow the diagram;
- do not identify wires only by color—also include signal/polarity letters where available;
- code models get useful `aria-label` text;
- green/orange/purple status meaning is written, not color-only;
- keyboard-visible focus remains intact;
- no essential instruction depends on hover;
- hardware safety warnings remain readable without zoom;
- no horizontal scrolling at 320 px.

---

# Final page-authoring test

Before implementation is accepted, a beginner should be able to answer:

- What hardware do I need?
- Where does the LED connect?
- Which way do the LED wires go?
- Where does the servo connect?
- Which way do the servo wires go?
- Why must power be off while I change connections?
- What does Start Hummingbird do?
- What does LED brightness control?
- What does servo angle control?
- Why must the code port match the physical port?
- Why do I centre the servo at 90° first?
- What should I build myself?
- What should I try when the robot hardware does not respond?
- What do I need to show at the checkpoint?
- What must be powered off and returned at Reset?

If any answer requires a long paragraph or teacher explanation, simplify the visual or support card before implementation.

---

**Implementation boundary:** This document is a blueprint only. It does not create the Mission 4 route, modify Missions 1–3, alter the shared FutureTech frame, merge to main, or publish the public Learning Hub.
