# FutureTech Lab — Level 1 Mission 5 Student Webpage Blueprint

**Mission:** 5 — Sense → Think → Act  
**Status:** APPROVED / FROZEN STUDENT-FACING BLUEPRINT — implemented and browser-audited  
**Source specification:** `docs/futuretech-level1-mission5-instructional-spec.md`  
**Governing standard:** `docs/futuretech-level1-mission-design-standard.md`

This blueprint defines the exact student-facing page structure for Mission 5 while preserving the frozen FutureTech mission frame:

**1 Set Up → 2 First Code → 3 Make It React → 4 Build It → 5 Level It Up → 6 Checkpoint → Skill Passport → Reset**

The required pathway stays limited to:

- one Hummingbird Bit Controller;
- one micro:bit V2;
- one Hummingbird Light Sensor on **Sensor Port 1**;
- one single-color LED on **LED Port 1**;
- one sensor variable;
- one threshold;
- one IF/ELSE;
- one forever loop.

The position servo is optional only in Level It Up.

---

# 1. Mission hero and brief

Use the existing `FutureTechMissionFrame.astro` hero and six-stage navigation.

## Mission title

**Mission 5 — Sense → Think → Act**

## Tagline

**Make your robot notice something and react on its own.**

## Mission Question

> **How can a robot sense its environment, make a decision, and react automatically?**

## You Are Ready When...

> **I can read a Hummingbird light sensor, compare its value to a threshold, use IF/ELSE to choose an LED response, and explain the Sense → Think → Act cycle.**

## Persistent support strip

Keep the locked mission support:

**Start at Stage 1 and work in order.**  
**Stuck anywhere? TRY 4: Check → Simulate → Download → Partner.**

Immediately below, add the core mission visual:

**SENSE → THINK → ACT**

Then expand it once:

**LIGHT SENSOR → VALUE → IF / ELSE → LED**

Student caption:

> **The sensor gives the value. The code decides. The LED acts.**

---

# Stage 1 — Set Up

## Stage header

**01 — SENSOR + OUTPUT**  
**Set Up**

## Intro copy

> Today your robot will notice changes in light and react automatically. Connect one sensor and one LED before you turn on Hummingbird power.

## Equipment checklist

- ☐ Computer
- ☐ micro:bit V2
- ☐ USB data cable
- ☐ Hummingbird Bit Controller
- ☐ Hummingbird power
- ☐ Hummingbird Light Sensor
- ☐ single-color LED
- ☐ terminal tool if your station uses one

## Individual-work cue

Use one green success card:

> **This is an individual mission.** Build, test, and explain your own reactive system. Share a hardware station only if controller quantities require it.

## Station identity cue

Keep the Mission 4 station system:

**HB-01 · HB-02 · HB-03...**

Student copy:

> Stay with your assigned Hummingbird station while testing. Keep your own MakeCode project even if another student uses the hardware later.

---

# Stage 1 hardware visual

Use one focused Hummingbird Bit diagram.

Show only:

- micro:bit connection;
- **Sensor Port 1**;
- **LED Port 1**;
- Hummingbird power;
- status lights;
- HB station number.

Do not show servo ports in the required pathway.

## Left callout — SENSE

**SENSOR PORT 1 — LIGHT SENSOR**

Add a large text badge:

**3 WIRES · S / + / –**

Wire order:

**yellow → S**  
**red → +**  
**black → –**

Small label:

**INPUT**

## Right callout — ACT

**LED PORT 1 — SINGLE-COLOR LED**

Add a large text badge:

**2 WIRES · + / –**

Wire order:

**colored wire → +**  
**black wire → –**

Small label:

**OUTPUT**

Add one explicit visual warning directly under both callouts:

> **Do not swap these ports:** the 3-wire light sensor goes to **Sensor Port 1**; the 2-wire LED goes to **LED Port 1**.

This distinction must be visible in text, terminal symbols, and wire count—not by color alone.

## Bottom power callout

**CONNECT / CHANGE → POWER OFF**  
**TEST → POWER ON**

Student wording:

> Turn power OFF again before changing any robot connection.

## Accessibility rule

Repeat all wiring directly under the diagram as plain text. The visual cannot be the only source of connection information.

---

# Safe setup card

Use orange warning treatment.

Header:

**CONNECT WITH POWER OFF**

Numbered steps:

1. **Power OFF first.**
2. Insert/check the micro:bit. Never force it.
3. Connect the Light Sensor to **Sensor Port 1**:
   - yellow → **S**
   - red → **+**
   - black → **–**
4. Connect the LED to **LED Port 1**:
   - colored wire → **+**
   - black wire → **–**
5. Before powering on, do a **3-wire / 2-wire check**:
   - Light Sensor = **3 wires** in **Sensor Port 1**
   - LED = **2 wires** in **LED Port 1**
6. Turn Hummingbird power ON only when you are ready to test.
7. Turn power OFF again before removing or reconnecting any part.

## Stage 1 input/output cue

Use two compact cards:

### INPUT
**Light Sensor**
> Measures light and gives your program a number.

### OUTPUT
**LED**
> Changes brightness when your code tells it to.

## Stage 1 success cue

> ✓ **You are ready when:** the Light Sensor is in Sensor Port 1, the LED is in LED Port 1, both wire orders match the diagram, and you can identify which part senses and which part acts.

---

# 2. Sense → Think → Act visual

Place this at the end of Stage 1 or top of Stage 2.

Use three large linked cards:

## SENSE

**Light Sensor 1 → number**

> The sensor reports what it measures.

## THINK

**Compare number to threshold**

> IF/ELSE chooses one of two responses.

## ACT

**LED 1 → brightness**

> The output changes automatically.

Footer loop:

**SENSE → THINK → ACT → REPEAT**

Add one compact plain-language line directly below:

> **Measure → compare → choose → respond → check again.**

The visual should carry the explanation; surrounding prose should remain shorter than the visual itself.

Do not add long robotics definitions.

---

# Stage 2 — First Code

## Stage header

**02 — READ THE WORLD**  
**First Code**

## Section goal

Students first read real sensor values before building any automatic reaction.

## Intro copy

> Before your robot can decide, you need to know what the light sensor is actually reading.

## Project setup

Student steps:

1. Open micro:bit MakeCode.
2. Create `FirstName_L1_M5`.
3. Add the Hummingbird extension if needed.
4. Put **Start Hummingbird** in `on start`.
5. Create a variable named `light`.
6. Use Button A to read and display the light value.

## Block-finder chips

Show:

- **Hummingbird → Start Hummingbird**
- **Hummingbird → Hummingbird Light · port 1**
- **Variables → set**
- **Input → on button A pressed**
- **Basic → show number**

Before implementation, verify exact current editor labels.

---

# Mini code model 1 — Sensor Reader

Use one dark pseudo-MakeCode workspace.

Header:

**CODE MODEL 1 OF 2**  
**Read Light Sensor 1**

Model:

**on start**
- Start Hummingbird

**on button A pressed**
- set `light` to **Hummingbird Light 1**
- show number `light`

Small mapping cue:

**Light 1 in code → Sensor Port 1 on board**

## Model note

> The sensor does not decide what the robot should do. It only reports a value.

## Sensor test strip

Use three compact test cards:

### ROOM LIGHT
> Press A. **Remember this number.**

### COVERED
> Cover the sensor with your hand. Press A. **Remember this number.**

### BRIGHTER
> Uncover it or move it toward a brighter area. Press A again.

Immediately below, add one tiny two-value memory strip:

**MY COVERED VALUE: ____**  
**MY UNCOVERED VALUE: ____**

This is not a worksheet or formal data table. It exists only so students can choose a threshold without guessing.

## Success cue

> ✓ Covering and uncovering the light sensor gives noticeably different numbers.

## Sensor-value wording lock

Use:

> **A sensor value is a number your robot can use to make a decision.**

Do not introduce raw voltage or calibration mathematics.

---

# Stage 3 — Make It React

## Stage header

**03 — VALUE → DECISION → RESPONSE**  
**Make It React**

## Threshold explanation

Use one compact concept card.

Header:

**WHAT IS A THRESHOLD?**

Student copy:

> A threshold is the value where your robot changes what it does.

Example:

**light < 40**

Plain-language translation:

> **Is the light value less than 40?**

Then state clearly:

> **40 is only an example. Your room may need a different threshold. Test and tune your threshold at the same HB station when possible.**

## Threshold-picking visual

Use two simple reading cards:

**COVERED VALUE**  
example: 25

**UNCOVERED VALUE**  
example: 62

Between them:

**Choose a threshold somewhere between your two readings.**

Add a three-step student rule:

1. Find your lower reading.
2. Find your higher reading.
3. Pick a number **between them**.

Example only:

**25 ← 40 → 62**

Then require one quick prediction:

> **If the sensor reads 25, which branch should run? If it reads 62, which branch should run?**

Do not present 40 as universally correct.

---

# Stage 3 block-finder chips

Use:

- **Loops → forever**
- **Variables → set**
- **Hummingbird → Hummingbird Light · port 1**
- **Logic → if / else**
- **Logic → <**
- **Hummingbird → Hummingbird LED · port 1**
- **Basic → pause** only if needed

---

# Mini code model 2 — Reactive Loop

Use one dark pseudo-MakeCode workspace.

Header:

**CODE MODEL 2 OF 2**  
**Sense → Think → Act**

Model:

**forever**
- set `light` to **Hummingbird Light 1**
- **if** `light < 40`
  - Hummingbird LED **1** → **100%**
- **else**
  - Hummingbird LED **1** → **0%**
- pause **100 ms**

Visually label the model by row:

### SENSE
set `light` to Light Sensor 1

### THINK
IF `light < 40`

### ACT
LED 1 → 100% or 0%

## Model note

> **The threshold 40 is an example. Your best threshold may be different.**

## Key concept card

Use purple concept styling:

> **The sensor gives the value. The IF/ELSE decides. The LED acts.**

## Repeated-sensing cue

Use a loop visual:

**SENSE → THINK → ACT ↺**

Caption:

> `forever` makes the robot check again and again.

## Success cue

> ✓ Covering and uncovering the sensor changes the LED automatically in both directions without pressing a button.

---

# Stage 4 — Build It

## Stage header

**04 — YOUR REACTIVE DEVICE**  
**Build It — Reactive Signal**

## Intro copy

> Build a simple device that senses changing light and automatically communicates two different states using one LED.

Add one small boundary note:

> This is a reactive device, not a rover or driving robot.

---

# Planning strip

Use four compact cards.

## SENSE

> What change in light should your device notice?

## THRESHOLD

> What number will separate the two states?

## STATE 1

> What should the LED do when the condition is true?

## STATE 2

> What should the LED do otherwise?

No worksheet.

---

# Theme ideas

Use no more than six title-only cards:

- **Night Light**
- **Warning Light**
- **Secret Signal**
- **Brightness Guard**
- **Creature Eyes**
- **Light Detector**

Do not provide theme-specific code.

---

# Build It checklist

Use the established scannable checklist:

- ☐ Light Sensor uses **Sensor Port 1**
- ☐ LED uses **LED Port 1**
- ☐ **Start Hummingbird** is present
- ☐ a variable stores the current light value
- ☐ the system senses repeatedly
- ☐ one threshold is chosen from real sensor readings
- ☐ IF/ELSE creates two different responses
- ☐ the LED reacts automatically
- ☐ the threshold works for this station/classroom
- ☐ I changed at least one meaningful design choice
- ☐ the system works after a fresh download
- ☐ I can explain **Sense → Think → Act**

## Meaningful choices

Students choose:

- threshold;
- LED brightness for State 1;
- LED brightness for State 2;
- theme;
- meaning of both states.

No complete Stage 4 code model.

## Build It success cue

> ✓ **Build It is ready when:** your device senses changing light, chooses between two LED responses automatically, and you can explain why your threshold works.

---

# TRY 4 — Mission 5

Use the standard orange TRY 4 card.

## 1 — CHECK

Check in this order:

**power → 3-wire sensor / 2-wire LED check → port numbers → read current sensor value → compare value to threshold → IF/ELSE → newest code**

## 2 — SIMULATE

> Use the simulator to inspect your logic structure. Real sensor values must be tested on the Hummingbird hardware.

## 3 — DOWNLOAD

> Send the newest program to the micro:bit.

## 4 — PARTNER

> Briefly explain your current sensor value, threshold, expected result, and actual result to a nearby student.

Footer:

> Still stuck? Ask for help and say what you already tried.

## Reactive-system troubleshooting card

Use a separate orange mini-card:

> **LED never changes? Do not guess first.**
>
> 1. Read the current sensor value.
> 2. Compare it to your threshold.
> 3. Cover/uncover the sensor and check whether the value crosses the threshold.
> 4. If the value crosses but the LED does not change, inspect the IF/ELSE and LED block.

## Station fault cue

> If hardware still appears faulty after TRY 4, report the **HB station number** instead of moving components between stations.

---

# Stage 5 — Level It Up

## Stage header

**05 — OPTIONAL CHALLENGE**  
**Level It Up**

Intro:

> Only after Reactive Signal works. Choose **one** while you wait for your checkpoint.

Use exactly four cards.

## ⭐ Tune the Threshold

> Change the threshold deliberately. Decide whether the reaction becomes more reliable.

Visual cue:

**TEST → OBSERVE → ADJUST**

## ⭐ Two Brightness Levels

> Use two different non-zero LED brightness values instead of only ON and OFF.

## ⭐⭐ Servo Reaction

> Reuse the Mission 4 position servo as a second output.

Concept only:

**dark → one angle**  
**bright → another angle**

No full code model.

Small note:

> This is optional. Servo reaction is not part of the Mission 5 checkpoint.

## ⭐⭐ Three Light Zones

> Use two thresholds to create three LED response zones.

Small note:

> This may require another IF structure. It is optional.

## Mission 5 limit warning

> **No second sensor, obstacle navigation, wheels, radio, multiple motors, or autonomous roaming in Mission 5.**

## Ready-for-Check cue

> When every Build It box is checked, add your name to **Ready-for-Check**. Keep Leveling Up until you are called.

---

# Stage 6 — Checkpoint

## Stage header

**06 — SHOW WHAT YOU KNOW**  
**Checkpoint**

Intro:

> Bring your reactive system and open your code when you are called. The checkpoint is individual.

Use four compact cards.

## Check 1 — Trace Sense → Think → Act

> Demonstrate the system and trace:
>
> **Light Sensor → sensor value → threshold decision → LED response**

Student identifies:

- Sensor Port 1;
- LED Port 1;
- current sensor value;
- threshold;
- one reason that threshold makes sense for the two readings.

## Check 2 — Explain the Decision

> Explain:
>
> - what the sensor measures;
> - what the sensor value means;
> - what the threshold does;
> - what makes the IF condition true;
> - what ELSE does;
> - why the system must keep checking repeatedly.

## Check 3 — Change It

Teacher chooses one:

- change the threshold;
- reverse the LED responses;
- change one LED brightness;
- change the comparison direction if appropriate.

Student route:

**PREDICT → CHANGE → DOWNLOAD → TEST → EXPLAIN**

## After Your Check

- **MISSION COMPLETE**
- **RETRY ONE SKILL**
- **SUPPORT ROUTE**

No Level It Up feature is required.

---

# Skill Passport

## Stage header

**✓ — SKILL PASSPORT**  
**Mission 5 Skills**

Use:

- ☐ I can safely connect a Hummingbird sensor.
- ☐ I can read a sensor value in MakeCode.
- ☐ I can explain what a threshold does.
- ☐ I can use IF/ELSE to choose between two responses.
- ☐ I can make a Hummingbird output react automatically to a sensor.
- ☐ I can explain the **Sense → Think → Act** cycle.
- ☐ I can change, download, test, and explain my reactive system independently.

No servo-reactive or second-sensor skill statement.

---

# Reset

## Stage header

**↺ — LEAVE IT READY**  
**Reset**

Checklist:

- ☐ project saved correctly
- ☐ Hummingbird power OFF
- ☐ micro:bit returned to numbered kit
- ☐ USB cable loosely coiled
- ☐ Light Sensor returned
- ☐ single-color LED returned
- ☐ battery pack / power lead returned
- ☐ terminal tool returned if used
- ☐ Hummingbird controller returned to assigned HB station
- ☐ loose build materials cleared
- ☐ faults / bent pins / loose wires reported with HB station number
- ☐ Passport/progress updated

## Exit question

> **What part of your system sensed, what part thought, and what part acted?**

---

# Exact visual inventory

Mission 5 should contain **four major instructional visuals total**:

1. **Focused Hummingbird hardware diagram**
   - Sensor Port 1
   - Light Sensor wiring
   - LED Port 1
   - LED wiring
   - power
   - status
   - HB station ID

2. **Sense → Think → Act concept visual**
   - Light Sensor
   - value
   - IF/ELSE threshold
   - LED
   - repeat loop

3. **Mini code model 1**
   - Start Hummingbird
   - Button A
   - set light variable
   - show sensor value

4. **Mini code model 2**
   - forever
   - read light
   - threshold comparison
   - IF/ELSE
   - LED output

The threshold-number comparison strip does not count as a fifth major visual.

Do not add decorative robot art or a full MakeCode screenshot.

---

# Exact block-finder inventory

## Stage 2

- **Hummingbird → Start Hummingbird**
- **Hummingbird → Hummingbird Light · port 1**
- **Variables → set**
- **Input → on button A pressed**
- **Basic → show number**

## Stage 3

- **Loops → forever**
- **Variables → set**
- **Hummingbird → Hummingbird Light · port 1**
- **Logic → if / else**
- **Logic → <**
- **Hummingbird → Hummingbird LED · port 1**
- optional **Basic → pause**

Before implementation, verify current extension labels.

Do not expose distance, dial, sound, rotation-servo, or radio blocks in the required pathway.

---

# Student-facing wording lock

Use these exact support phrases when the concept repeats.

## Sensor value

> **A sensor value is a number your robot can use to make a decision.**

## Threshold

> **A threshold is the value where your robot changes what it does.**

## Decision

> **The sensor gives the value. The IF/ELSE decides. The LED acts.**

## Repeated sensing

> **`forever` makes the robot sense, decide, and react again and again.**

## Sensor wiring

**yellow → S**  
**red → +**  
**black → –**

## LED wiring

**colored wire → +**  
**black wire → –**

## Power

**CONNECT / CHANGE → POWER OFF**  
**TEST → POWER ON**

## Threshold example guardrail

> **40 is only an example. Your room may need a different threshold.**

---

# Responsive blueprint

## Desktop — 1200 px+

- mission frame matches Missions 1–4;
- Hummingbird diagram may use a 3-column structure:
  - sensor callout;
  - controller board;
  - LED callout;
- Sense → Think → Act displays in one horizontal route;
- sensor-test cards use 3 columns;
- threshold-reading cards may sit side by side;
- Stage 4 planning cards use 4 columns if readable;
- theme cards use 3 columns × 2 rows;
- checklist may use 2 columns;
- Level It Up uses 2 columns;
- code models use full available width without stretching.

## Chromebook / tablet — ~1024 px

- keep hardware diagram wide if terminal labels remain readable;
- Sense → Think → Act can remain horizontal;
- sensor test cards may stay 3 columns;
- Stage 4 planning can use 2 × 2;
- no font reduction below the Missions 1–4 baseline.

## 390 px and 375 px

- hardware diagram stacks:
  1. controller;
  2. Sensor Port 1 callout;
  3. LED Port 1 callout;
  4. power cue;
- full wire-order text remains visible;
- **3 WIRES · S/+/-** and **2 WIRES · +/-** badges remain visible above the wiring text;
- Sense → Think → Act becomes a vertical sequence;
- block-finder chips wrap;
- code models become single-column;
- covered / uncovered values and threshold stack vertically in the order **low reading → threshold → high reading**;
- sensor-test cards become one column;
- Stage 4 planning cards become one column;
- Build It checklist becomes one column;
- theme cards become 2 columns only if readable, otherwise 1;
- Level It Up becomes one column;
- checkpoint becomes one column;
- no horizontal scrolling.

## 320 px

Apply all 390 px rules plus:

- controller diagram has no fixed width;
- hardware labels remain outside the board graphic;
- wire-order strips remain full width;
- Sense → Think → Act labels stack clearly;
- code blocks wrap safely;
- nested IF/ELSE indentation remains visible but capped;
- threshold example must not wrap into an ambiguous expression;
- the two-value memory strip becomes two full-width rows;
- TRY 4 diagnostic order may wrap into multiple lines without shrinking text;
- theme cards become one column if needed;
- Ready-for-Check cue remains full width;
- no text smaller than the established Mission 1–4 mobile baseline.

---

# Accessibility blueprint

- semantic stage order;
- meaningful heading hierarchy;
- hardware diagram gets a descriptive `aria-label`;
- wiring appears as plain text immediately below the diagram;
- wire colors are always paired with terminal labels **S**, **+**, **–** and wire-count text (**3 wires** vs **2 wires**);
- Sense → Think → Act meaning is written, not color-only;
- code models get useful `aria-label` text;
- success/warning/concept cards include written meaning;
- keyboard-visible focus remains intact;
- no instruction depends on hover;
- no horizontal scrolling at 320 px.

---

# Final page-authoring test

Before implementation, a beginner should be able to answer:

- What hardware do I need?
- How can I tell the 3-wire sensor from the 2-wire LED before I connect them?
- Where does the light sensor connect?
- Which way do its wires go?
- Where does the LED connect?
- Which way do its wires go?
- What does the sensor value mean?
- What is a threshold?
- How do I choose a threshold from my own two readings?
- Why is 40 only an example?
- What does IF/ELSE decide?
- Why must the code keep sensing in `forever`?
- What part senses?
- What part thinks?
- What part acts?
- What should I build myself?
- What should I check if the LED never changes?
- What do I need to show at the checkpoint?
- What gets powered off and returned at Reset?

If any answer requires a long paragraph or teacher explanation, simplify the visual or support card before implementation.

---

# Final pre-implementation audit decisions

## Grade 8/9 beginner perspective

The blueprint passes after four guardrails:

- Sensor Port 1 and LED Port 1 are distinguished by **port name, terminal labels, and wire count**: 3-wire sensor vs 2-wire LED.
- Students keep two actual readings before choosing a threshold, so threshold selection is evidence-based rather than guesswork.
- The threshold rule is procedural: **lower reading → higher reading → choose a number between them → predict both sides**.
- Sense → Think → Act is carried primarily by the visual sequence **measure → compare → choose → respond → check again**, so the concept is not buried in prose.

The two-code-model ceiling remains intact. The threshold comparison strip and two-value memory strip are support visuals, not additional code models.

Stage 4 remains student-owned because students still choose the threshold, both LED brightness states, device theme, and meaning of the two states without receiving a finished Reactive Signal solution.

## Classroom-teacher perspective

The blueprint now reduces avoidable teacher intervention by:

- adding a fast **3-wire sensor / 2-wire LED** pre-power check;
- keeping students at the same HB station while tuning when possible because ambient light differs by location;
- making TRY 4 start with a real sensor-value check rather than code guessing;
- using a short troubleshooting sequence that separates **sensor/threshold problems** from **IF/ELSE/output problems**;
- requiring students to explain why their threshold makes sense for their measured values at checkpoint.

Hardware access remains separate from Ready-for-Check, and students keep individual MakeCode projects even when stations rotate.

## Visual / mobile decision

No additional major visual is needed. The four-visual ceiling remains appropriate.

At 390 px, 375 px and 320 px, the following must remain visually unambiguous:

- **3 WIRES · S/+/-** = Light Sensor / Sensor Port 1;
- **2 WIRES · +/-** = LED / LED Port 1;
- covered value → threshold → uncovered value;
- SENSE → THINK → ACT → REPEAT;
- visible IF/ELSE nesting in Code Model 2.

---

**Freeze boundary:** This blueprint documents the approved implemented Mission 5 experience. Future changes should preserve the single-sensor/single-output core, Sense → Think → Act visual structure, two-model ceiling, individual-first workflow, threshold-from-real-readings routine, and evidence-based troubleshooting, and should be limited to evidence-based usability, accessibility, hardware-support, safety, or factual corrections.
