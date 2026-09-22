# FutureTech Lab — Level 1 Mission 6 Instructional Specification

**Mission:** 6 — Design It. Print It.  
**Status:** APPROVED / FROZEN LEVEL 1 MISSION 6 SPECIFICATION — implemented and browser-audited  
**Audience:** Grade 8/9 beginners who have completed Missions 1–5  
**Target length:** one 90-minute class  
**Primary CAD tool:** Autodesk Tinkercad 3D Design  
**Locked FutureTech workflow:** Set Up → First Code → Make It React → Build It → Level It Up → Checkpoint → Skill Passport → Reset  
**Governing standard:** `docs/futuretech-level1-mission-design-standard.md`  
**Sequence baseline:** frozen Missions 1–5 first phase

---

# 1. Mission 6 role in Level 1

Mission 6 is the first **3D design / CAD mission**.

It introduces a new tool domain without changing the FutureTech learning rhythm.

The important transition is:

**same creator workflow → new tool**

Students already know how to:

- open, name and save a digital project;
- follow a staged workflow;
- use a visual model without copying a finished Build It solution;
- test against observable requirements;
- change one parameter intentionally;
- troubleshoot before asking the teacher;
- explain a design choice;
- complete an individual checkpoint;
- leave shared tools ready.

Mission 6 applies those maker habits to 3D design.

It does **not** require coding, robotics, slicing, printer setup or printer operation.

---

# 2. Why Tinkercad

Use **Autodesk Tinkercad 3D Design** for the required pathway.

It is appropriate for Level 1 because students can build printable models from primitive shapes, enter dimensions, align parts, group shapes, subtract holes, add text and export designs for 3D printing.

The mission should use the browser-based 3D Design workspace only.

Do not require:

- Tinkercad Circuits;
- Codeblocks;
- Fusion;
- Blender;
- slicer software;
- direct printer control.

### Account / classroom launch rule

The teacher provides the normal classroom access method:

- teacher-provided Tinkercad class link/code; or
- student Tinkercad login already used by the school.

Account creation must not consume the instructional mission.

If account access is not already ready, resolve it before Mission 6 begins.

---

# 3. Smallest useful CAD concept set

Mission 6 introduces only the concepts needed to make one small printable object.

## New concept 1 — Workplane and 3D view

Student wording:

> **The workplane is the surface where your design sits.**

Students need only:

- orbit;
- zoom;
- basic pan if needed;
- return to a useful view;
- understand that the design has width, length and height.

Do not teach coordinate geometry formally.

## New concept 2 — Primitive shapes

Student wording:

> **Complex 3D objects can be built by combining simple shapes.**

Required primitives:

- Box;
- Cylinder;
- one student-chosen additional primitive or Text object.

No freeform sculpting.

## New concept 3 — Exact dimensions

Students learn that printable CAD is not only about appearance.

Student wording:

> **A dimension tells you exactly how large the object will be.**

Use **millimetres (mm)**.

Required ideas:

- width;
- length/depth;
- height;
- typing an exact dimension rather than only dragging by eye.

## New concept 4 — Move and resize

Students learn:

- move a shape on the workplane;
- raise/lower only when needed;
- resize using handles or typed values.

Rotation is introduced only if needed for a student design.

## New concept 5 — Align

Student wording:

> **Align helps two shapes line up accurately.**

Required use:

- align at least two shapes on one axis or centre line.

Do not require advanced multi-axis alignment.

## New concept 6 — Solid + Hole

Student wording:

> **A Hole shape subtracts material when you group it with a solid.**

Students must:

1. place a solid;
2. place a second shape;
3. change the second shape to Hole;
4. overlap the hole with the solid;
5. Group;
6. inspect the result from multiple angles.

## New concept 7 — Group

Student wording:

> **Group combines selected shapes into one part.**

Students use Group for:

- joining solid features; and
- applying a hole subtraction.

Ungroup may be used as a repair tool but is not required mastery.

## New concept 8 — Beginner printability

The required printability ideas are deliberately small:

1. **Flat base** — the object has a stable face on the workplane.
2. **Connected parts** — nothing required is floating separately.
3. **Useful thickness** — avoid paper-thin features.
4. **Clear hole** — a required through-hole actually passes through.
5. **Reasonable size** — stay inside the Level 1 size limit.
6. **Simple overhangs** — avoid unsupported shelves / extreme shapes.

Students do not need to learn slicer settings, support generation, nozzle diameter, infill or layer height in Mission 6.

---

# 4. Level 1 classroom printability limits

These are **classroom queue limits**, not universal 3D-printing laws.

They are intended to keep beginner designs sturdy and the print queue manageable.

Required Mission 6 limits:

- maximum overall footprint: **60 mm × 40 mm**;
- maximum overall height: **8 mm**;
- base thickness: **at least 3 mm**;
- raised or recessed detail: target **about 1 mm or more**;
- required hanging / key-ring hole: target **5 mm diameter or larger**;
- all required solid features must visibly overlap / connect;
- at least one broad flat surface must sit on the workplane.

The teacher may revise these values later if the classroom printer/nozzle/material setup requires it.

Do not teach these values as universal engineering standards.

---

# 5. Mission Question and readiness statement

## Mission Question

> **How can I turn simple 3D shapes into a useful design that is ready for a 3D printer?**

## Student success statement

> **I can build a small 3D design with exact dimensions, align and group shapes, cut a hole, check basic printability, and prepare the file for the class print queue.**

---

# 6. Required mental model

Use this throughout the mission:

**SHAPES → SIZE → ALIGN → COMBINE / CUT → CHECK → EXPORT**

Then connect it to fabrication:

**CAD MODEL → STL FILE → PRINT QUEUE → 3D PRINTER**

Important student wording:

> **Finishing the CAD mission does not mean your object prints immediately. Your checkpoint proves the design skill; printing happens later as printer time is available.**

---

# Stage 1 — Set Up

## Purpose

Enter a completely new digital workspace without overwhelming students with every Tinkercad tool.

### Student equipment

- ☐ Computer
- ☐ mouse if available
- ☐ Tinkercad 3D Design access
- ☐ Mission page
- ☐ teacher-provided print-queue/submission location

No micro:bit or Hummingbird hardware is required.

### Individual-work cue

> **This is an individual mission.** Build, check and explain your own CAD model. A nearby student may help you locate a view/tool during TRY 4, but your design and checkpoint are your own.

### Project naming

Students create or rename the design:

`FirstName_L1_M6`

For the final Build It object:

`FirstName_L1_M6_MakerTag`

### Workspace orientation

Students identify only:

- workplane;
- shapes panel;
- selected object;
- resize handles;
- height/lift handle;
- view cube / view control;
- Undo;
- Group / Align area;
- Export.

Do not tour the entire interface.

### Required visual 1 — CAD workspace map

Use one simplified visual that labels:

**WORKPLANE**  
**SHAPES**  
**SELECTED SHAPE**  
**DIMENSIONS / HANDLES**  
**VIEW CONTROLS**  
**UNDO**  
**ALIGN / GROUP**  
**EXPORT**

This is the one place where an annotated Tinkercad screenshot may be appropriate if the live interface location itself is the learning problem.

Verify the current Tinkercad interface before implementation.

### Navigation micro-practice

Students:

1. drag one Box onto the workplane;
2. orbit so they can see the top and two sides;
3. zoom closer;
4. return to a useful view;
5. click the object;
6. move it a short distance;
7. Undo once.

### Stage 1 success cue

> ✓ **You are ready when:** you can find the workplane, place a shape, orbit around it, select it, move it and Undo the move.

---

# Stage 2 — First Code / First 3D Build

The shared FutureTech mission frame retains the course-wide Stage 2 position.

Student-facing kicker:

**FIRST 3D BUILD**

Student-facing heading may use:

**First Code — Build to an Exact Size**

Add one short clarification:

> **No coding in this mission. In CAD, your first “instructions” are shapes and dimensions.**

## Purpose

Create one accurately sized object before combining multiple shapes.

### Guided build

Start with one Box.

Set it to:

- width: **40 mm**
- length: **20 mm**
- height: **4 mm**

Then place it flat on the workplane.

### Tool-finder chips

Mission 6 adapts block-finder chips into **tool-finder chips**.

Use:

- **Basic Shapes → Box**
- **Select shape → dimension values**
- **View → Orbit / Zoom**
- **Helper / Ruler → exact measurements** only if required by the live interface

Verify exact Tinkercad labels before implementation.

### Required visual 2 — Dimensions model

Use a simplified 3D box visual with three labels:

**40 mm — width**  
**20 mm — length**  
**4 mm — height**

Show:

**dragging = approximate**  
**typing a value = exact**

Do not use a full interface screenshot for this.

### Guided variation

Students change exactly one dimension:

- width, or
- length.

Then return it to the required dimensions.

Purpose:

- prove they can intentionally resize;
- reinforce that dimensions are editable values.

### Observable success cue

> ✓ Your box measures **40 mm × 20 mm × 4 mm** and sits flat on the workplane.

---

# Stage 3 — Make It React / Combine & Cut

The shared FutureTech Stage 3 position remains familiar, but the CAD task changes.

Student-facing kicker:

**COMBINE + CUT**

Student-facing heading:

**Make It React — Align, Group & Hole**

Clarification:

> **In CAD, this stage is about how shapes affect each other.**

## Purpose

Teach only the three operations students need for the final object:

- Align;
- Group;
- Hole.

### Guided micro-task A — Align + Group solids

Students:

1. add a second solid primitive;
2. overlap it with the Box;
3. select both shapes;
4. use Align to line them up intentionally;
5. Group them;
6. orbit to inspect the joined result.

The second primitive should be visually simple.

Do not create the finished Maker Tag.

### Guided micro-task B — Cut a practice hole

Students:

1. add a Cylinder;
2. switch it from Solid to **Hole**;
3. move it so it passes fully through the practice solid;
4. select both;
5. Group;
6. orbit underneath / around the object to confirm the hole passes through.

### Tool-finder chips

Use:

- **Basic Shapes → Box / Cylinder**
- **Shape settings → Solid / Hole**
- **Select 2+ shapes → Align**
- **Select 2+ shapes → Group**
- **Undo / Ungroup** as repair tools

Verify exact live UI labels before page implementation.

### Required visual 3 — Solid / Hole operation model

Use a three-panel visual:

**1 · SOLID + HOLE OVERLAP**  
→  
**2 · SELECT BOTH + GROUP**  
→  
**3 · MATERIAL REMOVED**

Add a smaller align visual:

**misaligned → ALIGN → centred / lined up**

Do not show a finished key tag.

### Common beginner bugs

- only one shape selected before Group;
- Hole does not pass completely through;
- solid parts merely touch but do not overlap;
- student changes object size while trying to orbit;
- object accidentally lifted above the workplane.

### Success cue

> ✓ You can align two shapes, group solids, cut a real through-hole, and inspect the result from more than one angle.

---

# Stage 4 — Build It

## Challenge title

**Build It — Maker Tag**

## Design brief

> Design a small personalized tag that could be attached to a backpack, key ring, zipper, equipment bin or classroom tool.

The object must be small enough for the Level 1 print queue and strong enough to handle normally.

### Required features

Every Maker Tag must include:

- one flat printable base;
- exact overall size within **60 × 40 × 8 mm**;
- base thickness of at least **3 mm**;
- at least **two solid shapes** used intentionally;
- at least **one Align** operation;
- at least **one Group** operation;
- one **through-hole** made with a Hole shape;
- hole diameter target **5 mm or larger**;
- one personalized feature:
  - initials;
  - short name;
  - symbol;
  - geometric pattern;
  - student-designed shape arrangement;
- no floating required parts;
- one broad flat face on the workplane.

### Student-owned planning prompts

Use four compact cards:

**PURPOSE**  
What will your tag be used for?

**SIZE**  
What dimensions will keep it useful and printable?

**PERSONALIZE**  
What makes it yours?

**HOLE / ATTACHMENT**  
Where will the through-hole go and why?

### Theme examples

Title-only ideas:

- Backpack Tag
- Key Tag
- Equipment Tag
- Locker Tag
- Team Symbol
- Maker Badge

Do not provide a complete Maker Tag model.

### Printability check

Use one compact visual checklist:

**FLAT?**  
Does a broad face sit on the workplane?

**CONNECTED?**  
Are all required solid parts attached?

**THICK ENOUGH?**  
Does the base meet the 3 mm minimum?

**HOLE CLEAR?**  
Does the hole pass through?

**SIZE OK?**  
Is the object within the Level 1 size limit?

**NO FLOATERS?**  
Are there disconnected pieces above or beside the object?

### Student choices

Students choose:

- outline / base shape;
- exact dimensions within limits;
- hole location;
- text / initials / symbol / pattern;
- arrangement;
- raised versus recessed personalization if they are ready.

### Build It success cue

> ✓ **Build It is ready when:** your tag fits the size rules, contains a real through-hole, has no floating required parts, includes your own design choices, and you can explain why it should be printable.

---

# TRY 4 — CAD version

Mission 6 preserves the recognizable **TRY 4** routine but adapts the actions to CAD.

## 1 — CHECK

Check:

- what is selected;
- current dimensions;
- solid vs Hole;
- whether parts overlap;
- whether the design sits on the workplane.

## 2 — VIEW

> Orbit, zoom and inspect the design from the top, side and underside.

This replaces simulator testing because a 3D model must be inspected spatially.

## 3 — UNDO / RETRY

> Undo the last incorrect change, then try the operation again deliberately.

Do not export a broken design and hope the printer fixes it.

## 4 — PARTNER

> Briefly explain what you wanted the model to do and what happened instead.

Then:

> Still stuck? Ask the teacher and say what you checked, viewed and retried.

### Mission-specific troubleshooting cues

**Hole disappeared?**
- check that the shape was changed to Hole before Group.

**Hole did not cut through?**
- inspect from the side and make the Hole taller than the base.

**Group did nothing?**
- confirm both shapes are selected.

**Part looks connected but is not?**
- orbit around it and confirm the solids visibly overlap.

**Object is floating?**
- return the required base to the workplane.

---

# Stage 5 — Level It Up

Only after the Maker Tag passes the required checklist.

Use exactly four bounded options.

## ⭐ Raised Name / Initials

Add short raised text or initials.

Keep lettering thick and readable.

## ⭐ Recessed Detail

Turn text or a simple shape into a Hole and recess it into the tag.

The recess should not cut completely through unless that is the intentional design.

## ⭐⭐ Border / Pattern

Use Duplicate and Align to create a simple repeated geometric border or pattern.

Do not create dozens of tiny features.

## ⭐⭐ Shape Remix

Replace the rectangular base with a simple custom outline made from 2–4 overlapping primitives while staying within the same print-size limits.

### Mission 6 limit warning

> **No articulated models, gears, threads, complex hinges, downloaded meshes, giant prints or multi-part assemblies in Mission 6.**

---

# Stage 6 — Individual Checkpoint

The checkpoint happens on the **digital model**.

A completed physical print is not required.

## Check 1 — Inspect the Model

Student:

- orbits the design;
- identifies the base;
- shows the through-hole;
- shows exact dimensions;
- confirms the object sits on the workplane.

## Check 2 — Explain the Design

Student explains:

- which primitive shapes were used;
- where Align was used;
- what Group did;
- how the Hole removed material;
- why the design should be printable;
- one intentional personal design choice.

## Check 3 — Change It

Teacher chooses one small edit:

- change one dimension;
- move the hole;
- resize a feature;
- realign a feature;
- change a solid detail into a hole or vice versa where appropriate.

Student route:

**PREDICT → CHANGE → ORBIT / CHECK → EXPLAIN**

Then restore the design to a valid print-ready state if the checkpoint change made it unsuitable.

## Outcomes

- **MISSION COMPLETE**
- **RETRY ONE SKILL**
- **SUPPORT ROUTE**

A printer being busy does not affect the mastery result.

A later failed print caused by machine/material problems does not invalidate the checkpoint.

A later failed print caused by a design flaw becomes revision evidence, not an automatic loss of previously demonstrated CAD skill.

---

# Skill Passport

Use:

- ☐ I can navigate a 3D workspace.
- ☐ I can create and resize primitive shapes.
- ☐ I can use exact dimensions in millimetres.
- ☐ I can move and align shapes accurately.
- ☐ I can group shapes into one part.
- ☐ I can use a Hole shape to remove material.
- ☐ I can check basic printability.
- ☐ I can prepare and submit a 3D model for the class print queue.
- ☐ I can change, inspect and explain my CAD design independently.

Do not include slicer setup or printer operation.

---

# File naming, export and submission workflow

## Tinkercad design name

Required final design name:

`FirstName_L1_M6_MakerTag`

## Checkpoint before export

Students do **not** export immediately when the model looks finished.

Workflow:

**BUILD → PRINTABILITY CHECK → READY-FOR-CHECK → CHECKPOINT → EXPORT → SUBMIT**

This prevents the teacher from receiving repeated broken STL files.

## Export format

After checkpoint approval:

**Export → .STL**

Before webpage implementation, verify the live Tinkercad export labels.

Students should export the **approved final model only**.

## File name

Use:

`FirstName_L1_M6_MakerTag.stl`

If the browser preserves a different generated name, students rename the downloaded file before submission when practical.

## Submission

Submit the STL to the teacher-designated **FutureTech Print Queue** location.

The exact delivery method may be:

- school LMS assignment;
- shared class upload location;
- print-queue form;
- teacher-designated folder.

Do not hard-code a platform until the teacher chooses the actual classroom workflow.

---

# Print queue expectations

Mission completion does **not** require a finished physical print.

Use these queue states:

**DESIGNING**  
→ student still working

**READY FOR CHECK**  
→ digital design meets the checklist

**APPROVED FOR EXPORT**  
→ individual checkpoint passed

**SUBMITTED**  
→ STL placed in class print queue

**QUEUED**  
→ teacher has accepted it for available printer time

**PRINTED**  
→ physical object produced

or

**NEEDS REVISION**  
→ design problem discovered before or during slicing/printing

### Queue rule

Students may submit **one Mission 6 Level 1 print candidate**.

Printing happens later as the three classroom printers become available.

Printer order may depend on:

- class schedule;
- estimated print time;
- material availability;
- printer availability;
- whether a submitted file needs revision.

There is no promise that every student's design will be physically printed during the Mission 6 class.

### Teacher / slicer boundary

The teacher controls:

- slicing;
- orientation changes if needed;
- supports;
- layer height;
- infill;
- nozzle / material settings;
- printer assignment.

Students do not need these skills for Mission 6 mastery.

---

# Reset

Mission 6 has a digital + physical workspace reset.

Students confirm:

- ☐ Tinkercad design named correctly
- ☐ latest design saved in Tinkercad
- ☐ STL exported only after approval
- ☐ STL submitted if approved
- ☐ duplicate / abandoned downloads cleaned up if teacher requests
- ☐ mouse / computer area left ready
- ☐ shared measurement/reference tools returned
- ☐ print-queue status updated if used
- ☐ Passport/progress updated

### Exit question

> **What design choice made your object more printable, accurate or useful?**

---

# Required visual inventory

Mission 6 should contain **four major instructional visuals**.

## Visual 1 — Tinkercad workspace map

Show only:

- workplane;
- shapes;
- selected object;
- dimensions / handles;
- view controls;
- Undo;
- Align / Group;
- Export.

A current annotated screenshot may be used if interface location is genuinely needed.

## Visual 2 — Exact-dimensions model

A simplified 3D box showing:

- width;
- length;
- height;
- exact mm values.

Include:

**drag ≈ approximate**  
**type = exact**

## Visual 3 — Align / Group / Hole model

Show:

**two shapes → ALIGN → GROUP**

and:

**solid + hole overlap → GROUP → material removed**

No complete Maker Tag.

## Visual 4 — Printability model

Compare:

### PRINTABLE
- flat base;
- connected;
- useful thickness;
- through-hole clear.

### CHECK AGAIN
- floating part;
- paper-thin feature;
- blind / incomplete hole;
- unsupported shelf.

Keep it simple and visual.

---

# Tool-finder inventory

Mission 6 adapts the course's block-finder convention into **tool-finder chips**.

Before implementation, verify the current Tinkercad interface wording.

Expected tools:

## Stage 1

- **Basic Shapes → Box**
- **View → Orbit / Zoom**
- **Undo**

## Stage 2

- **Select shape → dimensions**
- **Helpers → Ruler** if needed for live exact dimensions

## Stage 3

- **Basic Shapes → Cylinder**
- **Shape settings → Solid / Hole**
- **Select 2+ shapes → Align**
- **Select 2+ shapes → Group**
- **Ungroup** as troubleshooting support only

## Stage 4

- **Basic Shapes**
- **Text** or simple personalization primitive as appropriate
- **Align**
- **Group**
- **Hole**

## Export

- **Export → STL**

Do not show advanced shape generators, codeblocks, import, SVG, scribble, gears or thread generators in the required pathway.

---

# Complexity ceiling

Mission 6 is a beginner CAD / print-readiness mission.

The required pathway is limited to:

- one Tinkercad design;
- primitive solids;
- one base object;
- exact mm dimensions;
- move / resize;
- Align;
- Group;
- one Hole subtraction;
- one personalized feature;
- one small printable object;
- STL export after checkpoint.

Do not require:

- complex rotation;
- custom workplanes on angled surfaces;
- complex coordinates;
- advanced duplication patterns;
- downloaded STL files;
- SVG import;
- organic sculpting;
- threads;
- gears;
- snap fits;
- hinges;
- articulated models;
- multi-part assemblies;
- tolerances / fit testing;
- slicer software;
- printer calibration;
- support settings;
- g-code;
- direct printer operation.

Mission 6 should end with:

> **“I can design a small object accurately and prepare it for printing.”**

not:

> “I know how to run a 3D printer.”

---

# 90-minute pacing target

## 0–12 min — Set Up

- launch Tinkercad;
- rename design;
- identify workplane / shapes / view;
- place first Box;
- orbit / zoom / Undo.

## 12–27 min — First 3D Build

- set exact dimensions;
- move / resize deliberately;
- establish mm scale;
- return object to required dimensions.

Students should have a correctly sized 3D object by approximately minute 20.

## 27–43 min — Align / Group / Hole

- add second primitive;
- Align;
- Group;
- practice Hole subtraction;
- inspect from multiple angles.

## 43–68 min — Build It

- create Maker Tag;
- personalize;
- create through-hole;
- check size / flatness / connection / thickness.

## 68–78 min — Refine / Level It Up

- run printability check;
- improve design;
- attempt one optional challenge if ready;
- join Ready-for-Check.

## 78–87 min — Rolling individual checkpoints

Students who finish earlier may checkpoint earlier.

After approval they may export and submit the STL.

## 87–90 min — Queue status + Passport + Reset

Physical printing happens later.

---

# Classroom-management notes

## Computer / mouse access

Students work individually whenever devices allow.

If students must share a computer temporarily:

- each student keeps a separate named Tinkercad design;
- do not turn the required Build It into one shared submission;
- checkpoint remains individual.

## Print queue

The queue is not the same as Ready-for-Check.

**Ready-for-Check** = student is waiting to prove the CAD skill.

**Print Queue** = teacher-managed manufacturing queue after checkpoint approval.

Keep those two systems visually and operationally separate.

## Three printers

Because the classroom has three printers, Mission 6 should deliberately favor small models with short print times.

Do not create a first-mission expectation that the printers operate continuously during the 90-minute class.

---

# Pre-build validation requirements

Before webpage implementation:

1. Verify the current Tinkercad 3D Design interface and exact labels for:
   - Basic Shapes;
   - Solid / Hole;
   - Align;
   - Group;
   - Ruler / dimension editing;
   - Export;
   - STL.
2. Confirm the school's Tinkercad classroom/login workflow is ready.
3. Confirm the actual classroom printer/slicer setup can reliably handle the proposed Level 1 queue limits.
4. Adjust the classroom limits if printer/nozzle/material realities require it.
5. Choose the actual student STL submission location before publishing the webpage.
6. Confirm whether students may use Text in the required Build It pathway with the school's Tinkercad access/version.

---

# Final pre-build decision

Mission 6 should be built as a **small-object CAD and print-readiness mission**, not as a printer-operation lesson.

Locked core:

**workplane + primitive shapes + exact dimensions + move/resize + Align + Group + Hole + personalized Maker Tag + basic printability check + individual checkpoint + STL print-queue submission**

Physical printing is an optional later manufacturing event and is not required for Mission 6 completion.

Mission 6 is implemented and frozen. Future changes should be limited to evidence-based usability, accessibility, CAD-tool support, printability/queue workflow, safety, or factual corrections.
