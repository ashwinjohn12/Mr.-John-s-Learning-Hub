# FutureTech Lab — Level 1 Mission 4 Instructional Specification

**Mission:** 4 — Robot Rookie  
**Status:** PRE-BUILD INSTRUCTIONAL SPECIFICATION — webpage not built  
**Audience:** Grade 8/9 beginners who have completed Missions 1–3  
**Target length:** one 90-minute class  
**Locked architecture:** Set Up → First Code → Make It React → Build It → Level It Up → Checkpoint → Skill Passport → Reset  
**Governing standard:** `docs/futuretech-level1-mission-design-standard.md`  
**Opening-sequence baseline:** frozen Missions 1–3 at the approved individual-first standard

---

## 1. Mission 4 role in the Level 1 progression

Mission 4 is the first **physical robotics output mission**.

The progression from Missions 1–3 is:

**micro:bit output → coding decisions → integrated game system → external robot outputs**

Mission 4 must feel like students are making code affect the physical world in a more obvious way, without yet introducing sensors or autonomous reaction.

The conceptual transition is:

**CODE → OUTPUT PORT → LIGHT / MOTION**

Mission 5 will introduce:

**SENSE → THINK → ACT**

Therefore Mission 4 must deliberately avoid required sensors, sensor thresholds, autonomous decisions, distance detection, light sensing, radio, or multi-part robotic systems.

---

## 2. Hardware assumption and exact required hardware

This specification is written for the **Hummingbird Bit Robotics Kit**, the micro:bit-based Hummingbird controller.

Required hardware per active station:

- Hummingbird Bit Controller;
- BBC micro:bit V2;
- USB data cable;
- Hummingbird battery pack or approved Hummingbird power supply;
- one **single-color LED**;
- one **position servo**;
- one servo horn;
- one terminal tool if needed for the LED terminal connection;
- simple reusable building materials for the Build It challenge, such as cardstock/cardboard, tape, craft sticks, reusable fasteners, or blocks.

Locked ports for the guided pathway:

- **Single-color LED → LED Port 1**
- **Position servo → Servo Port 1**

Do not introduce a rotation servo, tri-color LED, sensor, or second motor in the required pathway.

### Physical-kit verification before webpage build

Before implementing the webpage, confirm the classroom controller is labelled **Hummingbird Bit**.

If the physical kits are Hummingbird Duo rather than Hummingbird Bit, stop and adapt the hardware/setup section because Duo uses a different micro:bit adapter workflow.

---

## 3. Prerequisite skills from Missions 1–3

Students may now be expected to do these without reteaching:

### Coding

- open MakeCode and name a project;
- understand `on start`;
- use Button A / Button B events;
- read short sequences in order;
- use pauses;
- understand inputs and outputs;
- use variables;
- read one IF condition;
- use a repeat/forever structure;
- predict before testing;
- change one parameter and test it;
- explain what a code section does.

### Hardware routine

- connect a micro:bit using USB;
- download the newest MakeCode program;
- recognize a simulator-versus-physical-device problem;
- handle micro:bit hardware without forcing connectors;
- save the project;
- complete numbered-kit Reset.

### Workflow

- work independently by default;
- follow stages in order;
- use TRY 4;
- move to Level It Up only after Build It works;
- join Ready-for-Check;
- complete an individual checkpoint;
- update Skill Passport and Reset.

Mission 4 should not spend time reteaching these routines.

---

## 4. Smallest genuinely new learning set

Mission 4 introduces only four new ideas.

### New concept 1 — External robot output

Students already know that an LED display is an output.

Now they extend the idea:

> **An output can be a physical component connected to the Hummingbird controller.**

Two required output types:

- light output;
- motion output.

### New concept 2 — Port mapping

Students learn one hardware-to-code rule:

> **The port number in the code must match the port where the component is connected.**

The required pathway uses Port 1 for both component types so students learn the idea without managing multiple port numbers.

### New concept 3 — LED brightness

Students learn that a single-color LED can be controlled with a brightness value:

- 0% = off;
- 100% = full brightness;
- values between 0 and 100 change brightness.

The core pathway uses only 0 and 100 at first.

### New concept 4 — Position servo angle

Students learn that a position servo moves to a specific angle and holds that position.

Required beginner angles:

- 30°;
- 90°;
- 150°.

Students do not need mechanical degrees beyond understanding that different numbers create different positions.

Key distinction:

> **A position servo does not “run” continuously. It moves to an angle and stops there until code tells it to move somewhere else.**

---

## 5. Mission Question and success statement

### Mission Question

> **How can code control real robot parts to create light and movement?**

### Student success statement

> **I can connect a Hummingbird LED and position servo, control them with MakeCode, combine light and movement into a simple robotic action, and explain how my code matches the hardware ports.**

---

## 6. Required student-facing mental model

Use one compact common visual early in the mission:

**MICRO:BIT CODE → HUMMINGBIRD PORT → ROBOT OUTPUT**

Then branch visually into:

**LED PORT 1 → LIGHT**

**SERVO PORT 1 → MOTION**

This is more important than a long robotics definition.

---

# Stage 1 — Set Up

## Purpose

Introduce the Hummingbird Bit hardware safely and give students one clear wiring target.

### Student hardware checklist

- ☐ Computer
- ☐ micro:bit V2
- ☐ USB data cable
- ☐ Hummingbird Bit Controller
- ☐ battery pack / approved power supply
- ☐ single-color LED
- ☐ position servo
- ☐ servo horn
- ☐ terminal tool if required

### Individual-work cue

> **This is an individual mission.** Build, test and explain your own robot outputs. Share a hardware station only if controller quantities require it.

### Required hardware diagram

One labelled Hummingbird Bit controller diagram is required.

It should highlight only:

- micro:bit connection;
- LED Port 1;
- Servo Port 1;
- power connector;
- power/status lights.

Do not label every available port or sensor.

### Safe connection card

Student-facing wording should be short:

1. **Power OFF before changing robot connections.**
2. Insert the micro:bit correctly into the Hummingbird controller. Do not force it.
3. **LED Port 1:** colored wire → **+**; black wire → **–**.
4. **Servo Port 1:** white → **S**; red → **+**; black → **–**.
5. Connect Hummingbird power before testing the servo.
6. Keep fingers and loose objects clear of the servo horn while it moves.

### Servo-centering rule

Before attaching a student-built moving piece, students must first command the position servo to **90°**.

Only then attach or align the servo horn/mechanism.

This reduces unexpected range problems when the servo later moves left/right.

### 60-second concept check

Show:

**CODE → PORT → OUTPUT**

Ask students to identify:

- which component makes light;
- which component makes motion;
- which port each component uses.

### Stage 1 success cue

> ✓ **You are ready when:** the LED is in LED Port 1, the position servo is in Servo Port 1, power is still off while you check connections, and you can explain what “port” means.

---

# Stage 2 — First Code

## Purpose

Get the first external Hummingbird output working quickly with the simplest component: the LED.

### Project name

`FirstName_L1_M4`

### MakeCode setup

Students use regular micro:bit MakeCode with the Hummingbird Bit extension/project environment.

### Required unfamiliar block support

Block-finder chips:

- **Hummingbird → start Hummingbird**
- **Hummingbird → single color LED**
- **Basic → pause**

If current editor wording differs slightly, verify exact labels before webpage implementation.

### Mini code model 1 — Hummingbird start + LED

Required visual model:

**on start**
- start Hummingbird

**forever**
- Hummingbird LED 1 brightness 100
- pause 500 ms
- Hummingbird LED 1 brightness 0
- pause 500 ms

The purpose of this model is to teach two genuinely new structures:

1. Hummingbird programs require the Hummingbird startup block.
2. LED code references the physical LED port.

### Plain-language note

> **Port 1 in your code must match LED Port 1 on the controller.**

### Observable success

> ✓ The external LED blinks on and off repeatedly.

### Likely bug prompts

If the LED does not light:

- check colored wire → +;
- check black wire → –;
- check that the code uses LED Port 1;
- check `start Hummingbird`;
- download the newest code.

### Stage 2 micro-change

After the LED works, students change one parameter:

- slower/faster blink, or
- brightness from 100 to another value.

This should take less than 2 minutes.

---

# Stage 3 — Make It React

## Purpose

Add motion and connect a familiar micro:bit input event to a new physical robot output.

### First servo setup

Before attaching a mechanism:

1. connect Hummingbird power;
2. command Servo Port 1 to **90°**;
3. download;
4. confirm the servo moves to the centre position;
5. only then attach/align the servo horn if needed.

### Block-finder chips

Use exactly:

- **Input → on button A pressed**
- **Input → on button B pressed**
- **Hummingbird → position servo**
- **Hummingbird → single color LED**
- **Basic → pause** only if the chosen action needs timing.

### Mini code model 2 — button-controlled servo positions

Use one model showing two familiar events controlling the new servo:

**on button A pressed**
- Hummingbird position servo 1 → 30°

**on button B pressed**
- Hummingbird position servo 1 → 150°

Plain-language note:

> **The servo moves to the angle you choose and stays there until another command changes it.**

### Success cue

> ✓ Button A moves the servo to one position. Button B moves it to a clearly different position.

### Guided combine step

Students now add the LED to one or both button events.

Example structure only:

**Button A**
- servo to one angle
- LED on

**Button B**
- servo to another angle
- LED off

Do not show this as another full code model.

Use a compact route instead:

**BUTTON → SERVO ANGLE + LED BRIGHTNESS**

### Stage 3 success cue

> ✓ One button changes both motion and light, and you can point to the matching Port 1 blocks in the code.

---

# Stage 4 — Build It

## Challenge title

**Build It — Robot Signal**

## Design brief

> Build a simple robotic signal, character, or device that uses **one light and one moving part** to communicate two different states.

The final creation should feel physical and purposeful without becoming a full robot build.

### Student choice examples

Possible themes:

- crossing gate;
- robot arm;
- warning signal;
- creature head/ear/tail;
- thumbs-up / stop indicator;
- mini door;
- signal flag;
- emotion indicator.

These are idea prompts, not prescribed builds.

### Common required checklist

- ☐ Hummingbird Bit is started correctly in code
- ☐ single-color LED uses LED Port 1
- ☐ position servo uses Servo Port 1
- ☐ Button A triggers one clear robot state
- ☐ Button B triggers a different robot state
- ☐ at least one state changes the LED
- ☐ both states change the servo position or one state clearly resets it
- ☐ servo stays within safe, useful angles
- ☐ physical output matches the intended meaning
- ☐ student made at least one meaningful design choice
- ☐ robot works after a fresh download
- ☐ student can explain code → port → output

### Student-owned design prompt

Use three compact planning cards:

**STATE A**  
What should the robot show/do?

**STATE B**  
What should change?

**MEANING**  
What are the light and movement communicating?

No full planning worksheet.

### Build It independence guardrail

Do not show a complete Robot Signal solution next to the checklist.

Students may reuse the Stage 2 LED pattern and Stage 3 servo event structure, but they must decide:

- the physical theme;
- the two servo angles;
- when the LED is on/off or dim/bright;
- what the two robot states mean.

### Build It success cue

> ✓ **Build It is ready when:** Button A and Button B create two clear physical states using both light and motion, and you can explain why you chose those states.

### TRY 4

Preserve course wording:

1. **CHECK** — code block, port number, wire order, power, and servo angle.
2. **SIMULATE** — use the simulator for the micro:bit event logic only; Hummingbird outputs must be checked on the real hardware.
3. **DOWNLOAD** — send the newest program.
4. **PARTNER** — briefly explain expected vs actual to a nearby student.

Then ask the teacher and state what was already tried.

Mission-specific reminder:

> **A working simulator does not prove the Hummingbird hardware is connected correctly.**

---

# Stage 5 — Level It Up

Only after Build It works.

Offer exactly four bounded options.

## 1. ⭐ Brightness Designer

Use a brightness value between 1 and 99 instead of only ON/OFF.

Student decides whether the new brightness improves the signal.

## 2. ⭐ Three Positions

Use A, B, and A+B to move the position servo to three different angles.

No new motor type.

## 3. ⭐⭐ Motion Sequence

Make one input move the servo through three positions with pauses.

Example concept:

**30° → pause → 90° → pause → 150°**

Do not provide a finished solution.

## 4. ⭐⭐ Tri-Color Upgrade

Replace or add the single-color LED with one tri-color LED and use one simple color.

This extension may introduce the tri-color LED block and RGB values, but it remains optional and is not part of the checkpoint.

### Excluded Level It Up ideas

Do not offer:

- sensors;
- rotation servo;
- distance detection;
- automatic reaction;
- radio;
- multiple motors;
- autonomous behavior.

Those belong later.

---

# Stage 6 — Checkpoint

The checkpoint is short and individual.

## Check 1 — Identify the Hardware

Student demonstrates one robot state and identifies:

- LED Port 1;
- Servo Port 1;
- the corresponding blocks in the code.

## Check 2 — Explain the Outputs

Student explains:

- what brightness controls;
- what servo angle controls;
- why the code's port number must match the physical port;
- the difference between the micro:bit button input and the robot outputs.

## Check 3 — Change It

Teacher requests one small change:

- change an LED brightness;
- change one servo angle;
- reverse which button triggers one state;
- adjust one pause if the student used a sequence.

Student:

1. predicts the result;
2. makes the change;
3. downloads;
4. tests on the physical robot;
5. explains the result.

## Outcomes

- **MISSION COMPLETE**
- **RETRY ONE SKILL**
- **SUPPORT ROUTE**

The checkpoint must not require a Level It Up feature.

---

# Skill Passport

Record only new/integrated mastery:

- ☐ I can safely connect a Hummingbird robot output.
- ☐ I can match a MakeCode port number to a physical Hummingbird port.
- ☐ I can control the brightness of an external LED.
- ☐ I can control the angle of a position servo.
- ☐ I can use a micro:bit input to control robot outputs.
- ☐ I can change, download, test, and explain my robot independently.

Do not include sensors or rotation-servo skills.

---

# Reset

Mission 4 extends the established reset routine.

Students confirm:

- ☐ project saved correctly
- ☐ Hummingbird power switched off
- ☐ micro:bit returned to the numbered kit
- ☐ USB cable returned and loosely coiled
- ☐ single-color LED returned correctly
- ☐ position servo + horn returned correctly
- ☐ battery pack / power lead returned
- ☐ terminal tool returned if used
- ☐ Hummingbird controller returned to its labelled station/container
- ☐ loose build materials cleared
- ☐ damage, bent pins, loose wires, or servo faults reported
- ☐ Passport/progress updated

### Exit question

> **What is the difference between telling an LED what brightness to use and telling a servo what angle to use?**

---

# Visual scaffolding plan

Mission 4 should continue the strong visual language of Missions 1–3.

## Required visuals

### Visual 1 — focused Hummingbird Bit connection diagram

Show only:

- micro:bit;
- LED Port 1;
- Servo Port 1;
- power connector;
- power/status lights.

Include wire-order mini labels:

**LED:** color → + · black → –

**Servo:** white → S · red → + · black → –

This is the most important hardware visual.

### Visual 2 — code → port → output diagram

**MakeCode block → Port 1 → physical component**

Use two rows:

- LED block → LED 1 → light
- Position Servo block → Servo 1 → movement

### Mini code model 1

Start Hummingbird + blinking LED.

### Mini code model 2

Button A/B → two position-servo angles.

No third full model is required.

## Do not add

- decorative robot stock art;
- screenshots of the entire MakeCode editor;
- sensor diagrams;
- wiring diagrams containing unused components;
- a complete Stage 4 code solution.

---

# Exact block-finder inventory

Verify current editor labels before webpage implementation.

## Stage 2

- **Hummingbird → start Hummingbird**
- **Hummingbird → single color LED**
- **Basic → pause**

## Stage 3

- **Input → on button A pressed**
- **Input → on button B pressed**
- **Hummingbird → position servo**
- **Hummingbird → single color LED**

Optional only if used:

- **Basic → pause**

## Level It Up — Tri-Color Upgrade only

- **Hummingbird → tri-color LED**

No sensor blocks appear in the required Mission 4 page.

---

# Complexity ceiling

Mission 4 is not a robotics engineering unit.

The required pathway is limited to:

- one Hummingbird Bit controller;
- one micro:bit V2;
- one single-color LED;
- one position servo;
- one LED port;
- one servo port;
- two micro:bit button events;
- two main robot states;
- LED brightness;
- servo angle;
- optional pauses;
- simple lightweight mechanism/material attachment.

Do not require:

- sensors;
- autonomous behavior;
- IF logic for sensing;
- rotation servo;
- gear motors;
- multiple servos;
- multiple LEDs;
- tri-color LED in the core pathway;
- radio;
- functions;
- arrays/lists;
- complex variables;
- mechanical linkages beyond a simple horn-mounted moving piece;
- wheels or rover chassis;
- hot-glue-intensive construction;
- competition.

Mission 4 should end with students thinking:

> **“My code can control real robot parts.”**

Mission 5 can then ask:

> **“How can the robot sense something and decide what to do?”**

---

# 90-minute pacing target

## 0–12 min — Set Up

- identify Hummingbird hardware;
- connect LED and servo with power off;
- inspect wire order;
- learn code → port → output.

## 12–27 min — First Code

- create Mission 4 project;
- add/start Hummingbird;
- blink external LED;
- change brightness or blink speed.

First external physical success should occur by approximately minute 20.

## 27–43 min — Make It React

- centre servo at 90°;
- Button A/B control two angles;
- add LED behavior to one or both button states.

## 43–68 min — Build It

- create Robot Signal physical concept;
- choose two states;
- attach simple moving piece after centering;
- test on physical hardware.

## 68–78 min — Refine / Level It Up

- improve clarity/reliability;
- Level It Up if ready;
- join Ready-for-Check.

## 78–87 min — Rolling individual checkpoints

Early-ready students may checkpoint before minute 78.

## 87–90 min — Skill Passport + Reset

Hardware shutdown and return are non-negotiable.

---

# Classroom management and limited-hardware note

Individual student ownership remains the default.

If there are fewer Hummingbird controllers than students:

- students keep individual MakeCode projects;
- students may complete Stage 1 diagrams/planning and Stage 2 code preparation while waiting;
- physical Hummingbird testing rotates by station;
- do not turn the mission into a permanent pair project merely because hardware is shared;
- Ready-for-Check stays separate from the hardware-access queue.

The same student should return to the same Hummingbird station when practical to reduce wiring confusion.

---

# Final pre-build decision

Mission 4 should be built as an **outputs-only Hummingbird Bit mission**.

Locked core:

**one external LED + one position servo + one Hummingbird startup block + matching ports + two button-controlled physical states + one student-designed Robot Signal + individual explanation/change checkpoint**

This gives students a meaningful robotics experience without stealing the sensor/decision learning reserved for Mission 5.

The Mission 4 webpage remains unbuilt by this specification task.
