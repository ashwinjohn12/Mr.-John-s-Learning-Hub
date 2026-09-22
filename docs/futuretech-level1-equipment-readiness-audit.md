# FutureTech Level 1 Equipment-Readiness Audit

**Status:** INTERNAL / APPROVED READINESS AUDIT  
**Scope:** Frozen Level 1 Missions 1–6 against `docs/futuretech-equipment-progression-standard.md`  
**Decision:** Level 1 provides sufficient evidence for entry to Level 2 — Builder, with one narrow equipment-entry micro-check before advanced motion access.  
**Protected content:** No Mission 1–6 changes authorized by this audit.

---

# 1. Overall decision

Missions 1–6 collectively provide enough evidence for students to enter **Level 2 — Builder equipment pathways**.

The sequence demonstrates:

- safe setup and reset habits;
- independent project ownership;
- progressive MakeCode mastery;
- responsible controller use;
- safe Hummingbird wiring and port matching;
- sensor → decision → output reasoning;
- evidence-based troubleshooting;
- file naming / saving discipline;
- first CAD / STL workflow;
- Ready-for-Check and print-queue discipline;
- individual checkpoint performance;
- fault reporting rather than random equipment swapping.

No additional Level 1 mission is required.

One genuine readiness gap remains:

> **Level 1 does not explicitly assess a student response to unexpected physical motion before Level 2 rotation-servo / rover-style access.**

This is best handled as a **short Level 2 equipment-entry micro-check**, not by reopening frozen Mission 4.

---

# 2. Readiness evidence matrix

| Readiness requirement | Level 1 evidence | Decision |
|---|---|---|
| Safe micro:bit setup and reset | Mission 1 setup, USB workflow, numbered-kit Reset; later missions preserve equipment return routines | **Adequate** |
| Independent MakeCode workflow | Missions 1–5 require individual builds, simulator/download testing, project naming and checkpoint changes | **Adequate** |
| Events, variables, loops and conditions | M1 events/sequence; M2 variables, repeat loop, IF; M3–M5 integrate conditions and decisions | **Adequate** |
| Game-controller responsibility | M3 uses assigned controller path, power-off connection, controller testing, labelled-station return and fault reporting | **Adequate** |
| Safe Hummingbird wiring | M4/M5 require power OFF for connect/change, correct wire order, test-on only, moving-part caution | **Adequate** |
| Output-port matching | M4 explicitly maps code → LED Port 1 / Servo Port 1 → physical output | **Adequate** |
| Sensor → decision → output reasoning | M5 explicitly teaches Sense → Think → Act, sensor value, threshold, IF/ELSE, LED output | **Adequate** |
| TRY 4 troubleshooting | M1–M5 coding/hardware TRY 4; M6 CAD-specific Check → View → Undo/Retry → Partner | **Adequate** |
| Project naming and saving | M1/M2 named MakeCode projects; M6 names Tinkercad model and STL; Reset repeatedly requires saved work | **Adequate** |
| Tinkercad navigation | M6 Workplane, Basic Shapes, Orbit, Zoom, select/move/Undo | **Adequate** |
| Exact dimensions | M6 guided 40 × 20 × 4 mm Box and dimension checkpoint | **Adequate** |
| Align, Group and Hole | M6 separate join/cut pathways and checkpoint explanation | **Adequate** |
| Basic printability | M6 flat / connected / thickness / clear hole / size / no-floaters check | **Adequate** |
| Clean STL submission | M6 checkpoint-gated Export Check removes practice geometry and verifies approved STL | **Adequate** |
| Ready-for-Check discipline | Present across missions; students continue Level It Up while waiting | **Adequate** |
| Print-queue discipline | M6 explicitly separates Ready-for-Check from teacher manufacturing queue | **Adequate** |
| Equipment fault reporting | M3 reports controller faults; M4/M5 report HB station number instead of moving components; Reset records damage/faults | **Adequate** |
| Individual checkpoint performance | Every mission uses individual demonstrate / explain / change evidence | **Adequate** |

---

# 3. Safe micro:bit setup and reset

## Evidence

Mission 1 establishes:

- computer + micro:bit + USB data cable setup;
- physical download to the micro:bit;
- numbered-kit return;
- cable return;
- workspace clearing;
- damage / missing equipment reporting.

Later missions reuse the same pattern rather than inventing new reset systems.

## Decision

**Adequate for Level 2.**

Students have enough repeated evidence that setup and reset are normal maker-lab responsibilities rather than one-time Mission 1 instructions.

---

# 4. Independent MakeCode workflow

## Evidence

Across Missions 1–5 students repeatedly:

- open/create a project;
- name it;
- build from a limited model;
- simulate where appropriate;
- download the newest version;
- test on physical hardware;
- troubleshoot;
- make a teacher-requested change at checkpoint;
- explain what changed.

The work is individual by default.

## Decision

**Adequate for Level 2.**

No additional “MakeCode certification” is required.

---

# 5. Coding prerequisite sequence

## Mission 1

Demonstrates:

- events;
- input/output;
- sequence.

## Mission 2

Demonstrates:

- variables;
- SET versus CHANGE;
- random values;
- simple repeat loop;
- IF condition;
- order / nesting.

## Mission 3

Integrates:

- repeated movement;
- controller input;
- IF rule;
- score/end state;
- playtest and revision.

## Mission 4

Transfers coding to:

- external physical outputs.

## Mission 5

Transfers logic to:

- automatic sensor-driven decisions;
- IF/ELSE;
- repeated sensing.

## Decision

**Adequate for Level 2.**

Students have enough coding foundation to expand Hummingbird systems and begin physical-computing/electronics work.

---

# 6. Game-controller responsibility

## Evidence

Mission 3 requires students to:

- use an assigned controller path;
- power/connect as directed;
- stay on that path;
- test the controls;
- return the controller to its labelled station;
- report faults/damage.

Peer playtesting is purposeful rather than default shared ownership.

## Decision

**Adequate for Level 2.**

No requirement to master both controller types is necessary before progression.

---

# 7. Safe Hummingbird wiring

## Mission 4

Students demonstrate:

- Hummingbird power OFF before connecting/changing;
- correct LED wire polarity;
- correct servo wire order;
- power ON only for testing;
- power OFF again before touching connections;
- safe distance from moving servo horn;
- fault reporting by HB station number.

## Mission 5

Students reinforce:

- power OFF before wiring;
- 3-wire sensor versus 2-wire LED;
- Sensor Port 1 versus LED Port 1;
- power ON only for testing;
- power OFF before reconnecting;
- station-specific fault reporting.

## Decision

**Adequate for expanded Level 2 Hummingbird access**, with one motion-specific micro-check noted below.

---

# 8. Output-port matching

Mission 4 explicitly teaches:

**CODE → PORT → ROBOT OUTPUT**

Students map:

- Hummingbird LED → LED Port 1;
- Hummingbird Position Servo → Servo Port 1.

Checkpoint evidence requires tracing code to physical output.

## Decision

**Adequate.**

This is sufficient foundation for additional Level 2 Hummingbird components.

---

# 9. Sensor → decision → output reasoning

Mission 5 explicitly teaches:

**SENSE → THINK → ACT**

with:

**Light Sensor → sensor value → threshold → IF/ELSE → LED response**

Students:

- collect covered/uncovered readings;
- choose a threshold from evidence;
- predict both sides of the threshold;
- run the sensing loop repeatedly;
- debug by reading the current value before changing code.

## Decision

**Adequate.**

This is a strong prerequisite for distance, sound and dial sensors in Level 2.

---

# 10. TRY 4 troubleshooting

Level 1 shows a useful progression rather than rote repetition.

## Coding

**CHECK → SIMULATE → DOWNLOAD → PARTNER**

## Hummingbird

CHECK expands to include:

- power;
- wire order;
- port;
- code/value;
- servo angle;
- sensor value;
- threshold.

## CAD

Mission 6 adapts the same idea to:

**CHECK → VIEW → UNDO / RETRY → PARTNER**

## Decision

**Adequate.**

Students are ready for Level 2 troubleshooting expectations.

---

# 11. Project naming and saving

Evidence includes:

- `FirstName_L1_M1`;
- `FirstName_L1_M2`;
- later mission naming conventions;
- `FirstName_L1_M6_MakerTag`;
- `FirstName_L1_M6_MakerTag.stl`;
- repeated Reset requirement to save correctly.

## Decision

**Adequate.**

Level 2 can now expect project/file naming without re-teaching the habit every mission.

---

# 12. Tinkercad / CAD readiness

Mission 6 demonstrates all Level 1 fabrication prerequisites:

- workspace navigation;
- exact dimensions;
- move / resize;
- Align;
- Group;
- Solid + Hole;
- basic printability;
- student-owned design;
- checkpoint revision;
- clean STL export.

## Decision

**Adequate.**

No additional CAD prerequisite is required before Level 2 functional parts.

---

# 13. Clean STL and print-queue discipline

Mission 6 has a strong gate:

**BUILD → PRINTABILITY CHECK → READY-FOR-CHECK → CHECKPOINT → EXPORT → SUBMIT**

Export Check verifies:

- only intended Maker Tag remains;
- no practice geometry;
- size / printability still valid;
- hole remains open;
- design name is correct.

It also explicitly separates:

- student **Ready-for-Check** queue;
- teacher **Print Queue**.

## Decision

**Adequate.**

This is enough evidence for Level 2 fabrication workflow.

---

# 14. Equipment fault reporting

Level 1 builds this progressively.

## Mission 3

Controller returned to labelled station and faults/damage reported.

## Mission 4

If hardware appears faulty after TRY 4:

> report the **HB station number** rather than moving parts between stations.

## Mission 5

Same station-based fault logic is reinforced after evidence-based debugging.

## Decision

**Adequate.**

This also provides a useful bridge toward Level 2 electronics debugging: students already know not to “fix” a problem by randomly swapping hardware.

---

# 15. Individual checkpoint performance

Every Level 1 mission maintains the same general mastery pattern:

1. demonstrate / identify;
2. explain;
3. make a small requested change;
4. test / inspect;
5. receive:
   - MISSION COMPLETE;
   - RETRY ONE SKILL;
   - SUPPORT ROUTE.

## Decision

**Adequate.**

Level 2 can rely on individual checkpoint evidence rather than assuming completion equals mastery.

---

# 16. Genuine missing prerequisite — unexpected-motion response

The Equipment Progression Standard correctly requires, before rotation-servo / rover-style access:

- safe wiring;
- port matching;
- correct power routine;
- ability to stop or disable unexpected motion;
- independent troubleshooting.

Level 1 strongly demonstrates the first, second, third and fifth items.

Mission 4 also warns students to keep fingers, hair, sleeves, wires and loose materials away from the moving servo.

However, the frozen Level 1 sequence does **not explicitly assess**:

> **What should you do immediately if a motor/servo starts moving in an unexpected or unsafe way?**

This matters more in Level 2 because rotation servos and rover-style systems can continue moving rather than simply move to one bounded position.

## Recommendation

Do **not** reopen Mission 4.

Add a short **Level 2 Hummingbird Motion Access Check** before a student first uses:

- rotation servo;
- wheels / rover drive;
- any continuously moving mechanism.

Student must demonstrate / state:

1. move hands / loose materials clear;
2. stop the program/output if possible;
3. turn Hummingbird power OFF;
4. do not grab or stall the moving mechanism;
5. inspect code, port and mechanical setup before retesting.

Suggested authorization:

> **HUMMINGBIRD MOTION — BUILDER ACCESS**

This should take approximately 30–60 seconds per student and can be embedded in the first Level 2 motion mission.

---

# 17. Inventor’s Kit entry — not a Level 1 gap

Level 1 does **not** demonstrate:

- breadboard rail structure;
- resistor selection;
- transistor switching;
- circuit diagrams;
- potentiometer wiring;
- physical current paths.

That is intentional.

The Equipment Progression Standard defines these as **Level 2 learning**, not Level 1 prerequisites.

Students already bring useful prerequisite habits:

- polarity awareness from Hummingbird;
- signal / + / – wiring awareness;
- port matching;
- power-off-before-change;
- evidence-based troubleshooting;
- fault reporting;
- coding input/output logic.

## Recommendation

Do not retrofit breadboard/electronics lessons into Level 1.

Instead, begin the first Level 2 Inventor’s Kit mission with a short electronics preflight:

- breadboard orientation;
- power / ground;
- resistor purpose;
- LED polarity;
- no random jumper placement;
- power off / disconnect before rewiring;
- follow the circuit diagram before applying power.

This is **new Level 2 instruction**, not an authorization deficit.

---

# 18. High-value recommendations

## Recommendation 1 — approve Level 1 readiness

Treat completion/mastery of Missions 1–6 as sufficient evidence to enter Level 2 Builder pathways.

Do not add another Level 1 mission solely for equipment readiness.

## Recommendation 2 — add one Level 2 motion micro-check

Before rotation servo / rover-style access, verify the unexpected-motion stop response.

This is the only genuine missing safety prerequisite identified.

## Recommendation 3 — keep electronics fundamentals in Level 2

Do not push breadboard, resistor or transistor content backward into Creator Foundations.

Use the first Inventor’s Kit mission to teach those concepts deliberately.

## Recommendation 4 — use targeted authorization rather than whole-level blocking

A student who is ready for Level 2 coding/electronics but has not passed the motion micro-check may still begin non-motion Builder work.

Equipment access should remain granular.

---

# 19. Final readiness decision

**Missions 1–6 provide sufficient evidence for Level 2 entry.**

The sequence successfully establishes:

**safe routines + coding foundations + controller responsibility + plug-and-play robotics + sensor reasoning + troubleshooting + CAD + fabrication queue discipline**

The only additional gate needed before expanded motion hardware is:

> **Level 2 Hummingbird Motion Access Check**

No Level 1 mission revision is justified.

Mission 7 remains outside this audit.
