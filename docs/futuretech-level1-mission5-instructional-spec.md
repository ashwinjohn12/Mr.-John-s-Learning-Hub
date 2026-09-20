# FutureTech Lab — Level 1 Mission 5 Instructional Specification

**Mission:** 5 — Sense → Think → Act  
**Status:** PRE-BUILD INSTRUCTIONAL SPECIFICATION — webpage not built  
**Audience:** Grade 8/9 beginners who have completed Missions 1–4  
**Target length:** one 90-minute class  
**Locked architecture:** Set Up → First Code → Make It React → Build It → Level It Up → Checkpoint → Skill Passport → Reset  
**Governing standard:** `docs/futuretech-level1-mission-design-standard.md`  
**Opening-sequence baseline:** frozen Missions 1–4 at the approved individual-first standard

---

## 1. Mission 5 role in the Level 1 progression

Mission 5 is the first **reactive robotics mission**.

Students already know how to make code control outputs. Mission 5 adds one new idea:

> **The robot can measure something, compare the measurement to a rule, and choose an output automatically.**

The progression is:

**Mission 4:** CODE → OUTPUT  
**Mission 5:** SENSOR → VALUE → DECISION → OUTPUT

Student-facing mental model:

**SENSE → THINK → ACT**

Where:

- **SENSE** = light sensor measures the environment;
- **THINK** = code compares the sensor value to a threshold;
- **ACT** = the Hummingbird LED changes automatically.

Mission 5 must not become a full autonomous-robot build. There are no wheels, navigation, multiple sensors, competing behaviors, obstacle avoidance, radio, or multi-motor systems in the required pathway.

---

## 2. Required sensor and reused Mission 4 output

### Required sensor

Use exactly one:

**Hummingbird Light Sensor → Sensor Port 1**

The light sensor is the required sensor because:

- its value is simple to change by covering/uncovering it;
- students can see the cause-and-effect relationship immediately;
- it returns a beginner-friendly value on the Hummingbird MakeCode scale;
- it allows repeated testing without moving a robot around the room;
- BirdBrain already uses light sensing as a Sense–Think–Act example.

### Required reused output

Reuse:

**single-color LED → LED Port 1**

This is the only required physical output.

The **position servo from Mission 4 is not required** in the core pathway. It may appear in one bounded Level It Up option after the core reactive system works.

This keeps the required mental model focused on:

**one sensor → one threshold decision → one output**

---

## 3. Exact required hardware

Per active station:

- Hummingbird Bit Controller;
- BBC micro:bit V2;
- USB data cable;
- Hummingbird battery pack / approved power supply;
- one Hummingbird light sensor;
- one single-color LED;
- terminal tool if needed;
- optional simple material for the Build It shell/sign/enclosure.

Locked ports:

- **Light Sensor → Sensor Port 1**
- **Single-color LED → LED Port 1**

No second sensor is used in the required pathway.

---

## 4. Wiring and safety

### Light sensor wiring

Use:

- **yellow → S**
- **red → +**
- **black → –**

### LED wiring

Reuse Mission 4 wording:

- **colored wire → +**
- **black wire → –**

### Power rule

Reuse the locked Mission 4 routine:

**CONNECT / CHANGE → POWER OFF**  
**TEST → POWER ON**

Student-facing rule:

> **Turn Hummingbird power OFF before changing any robot connection. Turn it ON only when you are ready to test.**

### Station rule

Keep visible Hummingbird station IDs:

**HB-01, HB-02, HB-03...**

If hardware appears faulty after TRY 4, students report the HB station number rather than moving parts between stations.

---

## 5. Prerequisite skills from Missions 1–4

Do not reteach these from scratch:

- open MakeCode;
- create/name a project;
- add/use the Hummingbird extension;
- use `Start Hummingbird`;
- understand input and output;
- use variables;
- use IF;
- use repeat / forever;
- use Button A/B;
- match a code port to a physical Hummingbird port;
- control LED brightness;
- download and test on physical hardware;
- use TRY 4;
- work independently;
- complete Ready-for-Check, checkpoint, Passport and Reset.

Mission 5 should briefly reactivate these skills only where needed.

---

## 6. Smallest genuinely new concept set

Mission 5 introduces four new ideas.

### New concept 1 — Sensor value

A sensor turns something in the environment into a number.

Student wording:

> **The light sensor measures light and gives your program a number.**

Required range:

**0–100**

Do not teach voltage, analog-to-digital conversion, calibration curves, or raw electrical values.

### New concept 2 — Threshold

A threshold is a chosen dividing number.

Student wording:

> **A threshold is the value where your robot changes what it does.**

Example:

**light < 40**

means:

> “Is the light value less than 40?”

### New concept 3 — IF / ELSE decision

Mission 2 introduced IF. Mission 5 makes the full two-way choice required:

**IF condition is true → do one thing**  
**ELSE → do the other thing**

This is not a new programming language concept so much as a new required use of prior logic.

### New concept 4 — Continuous sensing

A reactive system must keep checking.

Use a simple `forever` loop:

**sense → think → act → repeat**

Students should understand that the robot is not making one decision once; it is checking again and again.

---

## 7. Exact Sense → Think → Act mental model

Use this throughout the mission:

### SENSE

**Light Sensor 1 → light value**

### THINK

**IF light value < threshold**

### ACT

**LED 1 → ON / OFF**

Then loop:

**SENSE → THINK → ACT → REPEAT**

Use one visual route:

**LIGHT SENSOR → VALUE → IF / ELSE → LED**

This should be more visually prominent than a long definition of reactive robotics.

---

## 8. Mission Question and success statement

### Mission Question

> **How can a robot sense its environment, make a decision, and react automatically?**

### Student success statement

> **I can read a Hummingbird light sensor, compare its value to a threshold, use IF/ELSE to choose an LED response, and explain the Sense → Think → Act cycle.**

---

# Stage 1 — Set Up

## Purpose

Connect exactly one new input and reconnect one familiar output.

### Equipment checklist

- ☐ Computer
- ☐ micro:bit V2
- ☐ USB data cable
- ☐ Hummingbird Bit Controller
- ☐ Hummingbird power
- ☐ light sensor
- ☐ single-color LED
- ☐ terminal tool if required

### Individual-work cue

> **This is an individual mission.** Build, test, and explain your own reactive system. Share a hardware station only if controller quantities require it.

### Required hardware diagram

Show one focused Hummingbird Bit diagram with only:

- micro:bit;
- Sensor Port 1;
- LED Port 1;
- power/status;
- station ID.

Callouts:

**SENSOR PORT 1 — SENSE**

- yellow → **S**
- red → **+**
- black → **–**

**LED PORT 1 — ACT**

- colored wire → **+**
- black wire → **–**

Do not show servo ports in the required hardware diagram.

### Setup sequence

1. **Power OFF.**
2. Insert/check the micro:bit.
3. Connect the light sensor to **Sensor Port 1**:
   - yellow → S
   - red → +
   - black → –
4. Connect the LED to **LED Port 1**:
   - colored wire → +
   - black wire → –
5. Compare both connections to the diagram.
6. Turn power ON only when ready to test.

### Stage 1 concept visual

**SENSOR = INPUT**  
**LED = OUTPUT**

Then:

**SENSE → THINK → ACT**

### Stage 1 success cue

> ✓ **You are ready when:** the light sensor is in Sensor Port 1, the LED is in LED Port 1, both wire orders match the diagram, and you can identify which part senses and which part acts.

---

# Stage 2 — First Code

## Purpose

Read the light sensor value before making any automatic decision.

This stage is deliberately a **sensor reader**, not the finished reactive system.

### Project name

`FirstName_L1_M5`

### Required block-finder chips

Verify exact editor wording before webpage implementation.

Expected conceptual inventory:

- **Hummingbird → Start Hummingbird**
- **Hummingbird → Hummingbird Light · port 1**
- **Variables → set**
- **Basic → show number**
- **Input → on button A pressed**

### Mini code model 1 — read a sensor value

Use one model:

**on start**
- Start Hummingbird

**on button A pressed**
- set `light` to **Hummingbird Light 1**
- show number `light`

Purpose:

- connect the physical sensor to a number;
- reuse a familiar variable;
- let students collect evidence before choosing a threshold.

### Plain-language note

> **Light Sensor 1 in code reads the sensor connected to Sensor Port 1.**

### Sensor test

Students press A and record mentally / briefly compare:

- normal room light;
- sensor covered by hand;
- sensor near a brighter light source if safe/available.

No formal data table is required.

### Observable success

> ✓ Covering and uncovering the light sensor produces noticeably different numbers.

### Important misconception cue

> **The sensor does not decide what the robot should do. It only reports a value.**

---

# Stage 3 — Make It React

## Purpose

Turn the changing sensor value into an automatic two-state response.

### Threshold discovery

Before showing the full reactive model, students use their Stage 2 values to choose a beginner threshold.

Recommended teacher fallback:

**40**

But the page should say:

> **Your room may need a different threshold. Use a number between your “covered” and “uncovered” readings when possible.**

This makes the threshold evidence-based rather than arbitrary.

### Required block-finder chips

- **Loops → forever**
- **Variables → set**
- **Hummingbird → Hummingbird Light · port 1**
- **Logic → if / else**
- **Logic → <**
- **Hummingbird → Hummingbird LED · port 1**
- **Basic → pause** only if needed for stability/readability

### Mini code model 2 — complete Sense → Think → Act loop

Use one dark pseudo-MakeCode model:

**forever**
- set `light` to **Hummingbird Light 1**
- **if** `light < 40`
  - Hummingbird LED **1** → **100%**
- **else**
  - Hummingbird LED **1** → **0%**
- pause **100 ms**

Label the model visually:

**SENSE**
- get light value

**THINK**
- compare value to 40

**ACT**
- LED on or off

### Model note

> **The threshold 40 is an example. Your best threshold may be different.**

### Success cue

> ✓ Covering and uncovering the sensor makes the LED change automatically without pressing a button.

### Key concept card

> **The sensor gives the value. The IF/ELSE decides. The LED acts.**

### Repeated-cycle cue

**SENSE → THINK → ACT → REPEAT**

---

# Stage 4 — Build It

## Challenge title

**Build It — Reactive Signal**

## Design brief

> Build a simple reactive device that senses light and automatically communicates two different states using one LED.

This is intentionally not a rover or autonomous vehicle.

### Required pathway

Students must use:

- Light Sensor Port 1;
- LED Port 1;
- one variable storing the light value;
- one threshold;
- one IF/ELSE decision;
- repeated sensing in `forever`;
- two clearly different LED states.

### Student-owned planning cards

Use four compact planning prompts:

**SENSE**  
What change in light should your device notice?

**THRESHOLD**  
What number will separate the two states?

**STATE 1**  
What should the LED do when the condition is true?

**STATE 2**  
What should the LED do otherwise?

No worksheet is needed.

### Build It theme examples

Offer no more than six title-only ideas:

- Night Light
- Warning Light
- Secret Signal
- Brightness Guard
- Creature Eyes
- Light Detector

Do not provide code for individual themes.

### Common Build It checklist

- ☐ light sensor is connected to Sensor Port 1
- ☐ LED is connected to LED Port 1
- ☐ `Start Hummingbird` is present
- ☐ a variable stores the current light value
- ☐ the program senses repeatedly
- ☐ one threshold is used
- ☐ IF/ELSE creates two different responses
- ☐ the LED reacts automatically
- ☐ the threshold works for the classroom conditions
- ☐ I changed at least one meaningful design choice
- ☐ the system works after a fresh download
- ☐ I can explain **Sense → Think → Act**

### Meaningful student choices

Students choose:

- threshold;
- LED brightness for State 1;
- LED brightness for State 2;
- physical theme;
- meaning of the two states.

### Build It success cue

> ✓ **Build It is ready when:** your device senses changing light, chooses between two LED responses automatically, and you can explain why your threshold works.

---

# TRY 4 — Mission 5 version

Keep the standard structure.

### 1 — CHECK

Check in this order:

**power → sensor wire order → sensor port → LED wiring/port → current sensor value → threshold → IF/ELSE → newest code**

### 2 — SIMULATE

> Use the simulator to inspect your logic structure. The real Hummingbird sensor value must be tested on physical hardware.

### 3 — DOWNLOAD

> Send the newest program to the micro:bit.

### 4 — PARTNER

> Briefly explain your current sensor value, threshold, expected result, and actual result to a nearby student.

Footer:

> Still stuck? Ask for help and say what you already tried.

### Mission-specific troubleshooting cue

> **If the LED never changes, do not guess first. Read the sensor value, then compare it to your threshold.**

This should become the key debugging habit for reactive systems.

### Hardware-fault cue

If hardware still appears faulty after TRY 4, report the **HB station number** rather than moving components between stations.

---

# Stage 5 — Level It Up

Only after the required Reactive Signal works.

Use exactly four bounded options.

## ⭐ Tune the Threshold

Change the threshold deliberately and decide whether the reaction becomes more reliable.

Learning emphasis:

**test → observe → adjust**

## ⭐ Two Brightness Levels

Instead of 100% and 0%, choose two different non-zero brightness values.

No new hardware.

## ⭐⭐ Servo Reaction

Reuse the Mission 4 position servo as a second output.

Example concept only:

- dark → one servo angle;
- bright → another servo angle.

Do not provide a finished code model.

This is the only Level It Up option that adds the servo.

## ⭐⭐ Three Light Zones

Use two thresholds to create three LED response zones.

This may require an additional IF structure.

Keep it optional; it is not part of Mission 5 mastery.

### Mission 5 limit warning

> **No second sensor, obstacle navigation, wheels, radio, multiple motors, or autonomous roaming in Mission 5.**

---

# Stage 6 — Checkpoint

The checkpoint is individual and conceptual.

## Check 1 — Trace Sense → Think → Act

Student demonstrates the system and traces:

**light sensor → sensor value → threshold decision → LED output**

The student should identify:

- Sensor Port 1;
- LED Port 1;
- current light value;
- threshold.

## Check 2 — Explain the Decision

Student explains:

- what the sensor measures;
- what the sensor value means;
- what the threshold does;
- what makes the IF condition true;
- what ELSE does;
- why the system must keep sensing repeatedly.

The checkpoint is not about memorizing toolbox locations.

## Check 3 — Change It

Teacher chooses one:

- change the threshold;
- reverse the LED responses;
- change one LED brightness;
- change the comparison direction if appropriate.

Student:

**PREDICT → CHANGE → DOWNLOAD → TEST → EXPLAIN**

## Outcomes

- **MISSION COMPLETE**
- **RETRY ONE SKILL**
- **SUPPORT ROUTE**

No Level It Up feature is required.

---

# Skill Passport

Mission 5 records:

- ☐ I can safely connect a Hummingbird sensor.
- ☐ I can read a sensor value in MakeCode.
- ☐ I can explain what a threshold does.
- ☐ I can use IF/ELSE to choose between two responses.
- ☐ I can make a Hummingbird output react automatically to a sensor.
- ☐ I can explain the **Sense → Think → Act** cycle.
- ☐ I can change, download, test, and explain my reactive system independently.

Do not include second-sensor or servo-reactive skills as required mastery.

---

# Reset

Use the established hardware-reset routine.

- ☐ project saved correctly
- ☐ Hummingbird power OFF
- ☐ micro:bit returned to numbered kit
- ☐ USB cable loosely coiled
- ☐ light sensor returned
- ☐ single-color LED returned
- ☐ battery pack / power lead returned
- ☐ terminal tool returned if used
- ☐ Hummingbird controller returned to assigned HB station
- ☐ loose build materials cleared
- ☐ faults / bent pins / loose wires reported with HB station number
- ☐ Passport/progress updated

### Exit question

> **What part of your system sensed, what part thought, and what part acted?**

---

# 9. Required visual inventory

Keep the visual ceiling controlled.

Mission 5 should contain **four major instructional visuals total**.

## Visual 1 — focused hardware diagram

Show:

- Sensor Port 1;
- Light Sensor wiring;
- LED Port 1;
- LED wiring;
- power;
- HB station ID.

Do not show servo hardware in the required-pathway diagram.

## Visual 2 — Sense → Think → Act concept map

Use:

**LIGHT → SENSOR VALUE → IF / ELSE → LED**

With labels:

- SENSE
- THINK
- ACT

## Mini code model 1

Sensor reader:

- Start Hummingbird;
- Button A;
- set light variable;
- show value.

## Mini code model 2

Reactive loop:

- forever;
- read light;
- compare to threshold;
- IF/ELSE;
- LED response.

No third full code model.

---

# 10. Exact block-finder inventory

Before implementation, verify current MakeCode labels against the BirdBrain extension.

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

Do not surface distance, dial, sound, rotation-servo, or radio blocks in the core pathway.

---

# 11. Complexity ceiling

Mission 5 is a reactive-systems introduction, not an autonomous-robotics unit.

Required pathway is limited to:

- one Hummingbird Bit Controller;
- one micro:bit V2;
- one light sensor;
- one single-color LED;
- Sensor Port 1;
- LED Port 1;
- one sensor variable;
- one threshold;
- one IF/ELSE;
- one forever loop;
- two LED response states.

Do not require:

- multiple sensors;
- sensor averaging;
- calibration mathematics;
- complex Boolean logic;
- nested IF statements;
- AND / OR;
- multiple thresholds in the core pathway;
- servo in the core pathway;
- rotation servo;
- wheels;
- driving;
- navigation;
- obstacle avoidance;
- radio;
- multiple Hummingbirds;
- data logging;
- arrays/lists;
- functions;
- machine learning;
- competition.

Mission 5 should end with:

> **“My robot can sense something, decide, and react.”**

Not:

> “My robot can move around by itself.”

---

# 12. 90-minute pacing target

## 0–12 min — Set Up

- connect light sensor + LED with power OFF;
- identify input/output;
- introduce Sense → Think → Act.

## 12–27 min — First Code

- create Mission 5 project;
- Start Hummingbird;
- read Light Sensor 1;
- show values;
- test covered/uncovered.

Students should see a changing real sensor value by approximately minute 20.

## 27–43 min — Make It React

- choose a threshold;
- build IF/ELSE;
- place reaction in forever;
- test automatic LED response.

## 43–68 min — Build It

- create Reactive Signal;
- choose theme;
- tune threshold;
- test both states repeatedly.

## 68–78 min — Refine / Level It Up

- improve threshold reliability;
- attempt one optional challenge if ready;
- join Ready-for-Check.

## 78–87 min — Rolling individual checkpoints

Early-ready students may checkpoint earlier.

## 87–90 min — Skill Passport + Reset

Hardware shutdown and correct sensor return are non-negotiable.

---

# 13. Classroom management and limited hardware

Individual ownership remains the default.

If Hummingbird stations are limited:

- students keep their own MakeCode projects;
- students can prepare code / threshold predictions while waiting;
- physical sensor testing rotates by HB station;
- do not turn the mission into a permanent pair project;
- Ready-for-Check remains separate from hardware access;
- students report faults using the HB station number;
- avoid moving sensors between stations during troubleshooting unless directed by the teacher.

Because ambient light varies by location, students should test and tune thresholds at the same station where their system will be checked when practical.

---

# 14. Pre-build validation requirements

Before the webpage is implemented:

1. Verify the physical classroom sensor is the standard **Hummingbird Light Sensor**.
2. Verify current MakeCode block wording from the Hummingbird extension.
3. Confirm Sensor Port 1 on the classroom Hummingbird Bit matches the planned diagram.
4. Confirm the light sensor produces a useful covered/uncovered range in the actual classroom.
5. Keep the fallback threshold **40** as an example only; do not hard-code it as the only correct classroom value.

---

# Final pre-build decision

Mission 5 should be built as a **single-sensor, single-output reactive system mission**.

Locked core:

**one light sensor + one single-color LED + one sensor variable + one threshold + IF/ELSE + forever + automatic response + individual Sense → Think → Act explanation**

The position servo is deliberately deferred to an optional Level It Up feature so the required learning stays focused on sensing and decision-making.

The Mission 5 webpage remains unbuilt by this specification task.
