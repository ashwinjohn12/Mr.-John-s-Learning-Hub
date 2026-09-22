# FutureTech Lab — Level 1 Mission 6 Student Webpage Blueprint

**Mission:** 6 — Design It. Print It.  
**Status:** APPROVED / FROZEN STUDENT-FACING BLUEPRINT — implemented and browser-audited  
**Source specification:** `docs/futuretech-level1-mission6-instructional-spec.md`  
**Governing standard:** `docs/futuretech-level1-mission-design-standard.md`  
**Primary tool:** Autodesk Tinkercad 3D Design

This blueprint defines the exact student-facing page structure for Mission 6 while preserving the frozen FutureTech mission frame:

**1 Set Up → 2 First Code → 3 Make It React → 4 Build It → 5 Level It Up → 6 Checkpoint → Skill Passport → Reset**

Mission 6 keeps the shared stage positions but deliberately adapts Stage 2 and Stage 3 to CAD.

The required pathway remains limited to:

- one Tinkercad 3D Design project;
- primitive shapes;
- exact dimensions in millimetres;
- move / resize;
- Align;
- Group;
- Solid / Hole;
- one personalized Maker Tag;
- one basic printability check;
- checkpoint approval;
- STL export and print-queue submission.

Physical printing is **not** required for Mission 6 mastery.

---

# 1. Mission hero and brief

Use the existing `FutureTechMissionFrame.astro` hero and six-stage navigation.

## Mission title

**Mission 6 — Design It. Print It.**

## Tagline

**Turn simple shapes into a real object you could manufacture.**

## Mission Question

> **How can I turn simple 3D shapes into a useful design that is ready for a 3D printer?**

## You Are Ready When...

> **I can build a small 3D design with exact dimensions, align and group shapes, cut a hole, check basic printability, and prepare the file for the class print queue.**

## Persistent support strip

Keep the familiar mission support location, but adapt TRY 4 wording for CAD:

**Start at Stage 1 and work in order.**  
**Stuck anywhere? TRY 4: Check → View → Undo / Retry → Partner.**

Add one short transition card directly below the support strip:

### SAME FUTURETECH WORKFLOW · NEW TOOL

**SHAPES → SIZE → ALIGN → COMBINE / CUT → CHECK → EXPORT**

Student caption:

> **You are still designing, testing, improving and explaining. The tool is different; the maker process is the same.**

Add a second small process strip:

**CAD MODEL → STL FILE → PRINT QUEUE → 3D PRINTER**

Caption:

> **Your checkpoint proves the design skill. Printing happens later when printer time is available.**

---

# Stage 1 — Set Up

## Stage header

**01 — NEW WORKSPACE**  
**Set Up**

## Intro copy

> Tinkercad is a new tool, but you do not need to learn every button. Start with the few parts of the workspace you will use today.

## Equipment checklist

- ☐ Computer
- ☐ Mouse if available
- ☐ Tinkercad 3D Design access
- ☐ Mission page
- ☐ Teacher-provided print-queue / submission location

Add a small note:

> No micro:bit or Hummingbird hardware is needed for this mission.

## Individual-work cue

Use the established green success treatment:

> **This is an individual mission.** Build, check and explain your own CAD model. A nearby student may help you locate a tool during TRY 4, but your design and checkpoint are your own.

## Project naming card

Header:

**NAME YOUR DESIGN FIRST**

Student instruction:

> Rename the project:

`FirstName_L1_M6`

Then add:

> When you begin the final Maker Tag, rename it:

`FirstName_L1_M6_MakerTag`

---

# Stage 1 visual — Tinkercad workspace map

Use one **simplified current-interface workspace map** rather than a decorative screenshot.

The visual should resemble the spatial layout of Tinkercad without copying the whole interface pixel-for-pixel.

Use two levels of emphasis so a first-time user is not asked to learn the whole interface at once.

### FIND NOW — visually prominent

- **WORKPLANE**
- **BASIC SHAPES / SHAPES PANEL**
- **SELECTED SHAPE**
- **SIZE HANDLES / DIMENSIONS**
- **VIEW CUBE / VIEW CONTROLS**
- **UNDO**

### FIND LATER — visible but visually secondary

- **HEIGHT HANDLE**
- **ALIGN**
- **GROUP**
- **EXPORT**

Add one caption:

> **You only need the FIND NOW tools in Stage 1. The other labels are landmarks for later.**

Do not label Circuits, Codeblocks, Sim Lab, advanced shape generators, Import or Send To.

## Workspace terminology lock

Use these student-visible terms:

- **Workplane**
- **Basic Shapes**
- **Box**
- **Cylinder**
- **Align**
- **Group**
- **Ungroup**
- **Solid**
- **Hole**
- **Ruler**
- **Undo**
- **Export**
- **STL**

Navigation actions:

- **Orbit**
- **Pan**
- **Zoom**

Do not present Orbit / Pan / Zoom as items inside a fictional menu.

## Tool-finder chips — Stage 1

Use:

- **Basic Shapes → Box**
- **Mouse / view controls → Orbit**
- **Mouse / view controls → Zoom**
- **Undo**
- **Workplane**

Optional secondary support:

- **Pan** — only if a student loses the model off-centre

## Navigation micro-practice

Use six short numbered cards:

**1 — PLACE**  
Drag one **Box** onto the Workplane.

**2 — ORBIT**  
Rotate the view until you can see the top and two sides.

**3 — ZOOM**  
Move closer without changing the box.

**4 — SELECT**  
Click the Box.

**5 — MOVE**  
Move the Box a short distance.

**6 — UNDO**  
Undo the move.

Add one orange warning:

> **VIEW ≠ EDIT:** if the shape changes size while you are trying to look around it, Undo and try the view control again.

## Stage 1 success cue

> ✓ **You are ready when:** you can find the Workplane, place a Box, orbit around it, select it, move it and Undo the move.

---

# Stage 2 — First Code / First 3D Build

## Stage header

Keep the shared Stage 2 navigation label **First Code**, but inside the page use:

**02 — FIRST 3D BUILD**  
**First Code — Build to an Exact Size**

Immediately below:

> **No coding in this mission. In CAD, your first “instructions” are shapes and dimensions.**

## Intro copy

> A model that only looks right may still print at the wrong size. CAD lets you design with exact measurements.

## Exact-size guided build

Students start with one Box and set:

- **Width = 40 mm**
- **Length = 20 mm**
- **Height = 4 mm**

Then confirm the Box sits on the Workplane.

## Tool-finder chips — Stage 2

Use:

- **Basic Shapes → Box**
- **Select shape → dimension values**
- **Ruler** — optional measurement helper
- **Undo**

Do not require Ruler placement if the live selected-shape dimension fields are sufficient.

---

# Visual 2 — Exact dimensions model

Use one simplified isometric box visual.

Label:

**40 mm — WIDTH**

**20 mm — LENGTH**

**4 mm — HEIGHT**

Use arrows that clearly point to different axes.

Add one beginner orientation key directly beside the model:

**WIDTH** — side to side  
**LENGTH** — front to back  
**HEIGHT** — up and down

Add one clarification:

> **Orbit changes your view, not the object's dimensions. Width, length and height stay the same even when the model looks rotated on screen.**

Add a small comparison strip:

**DRAG A HANDLE ≈ approximate**  
**TYPE A NUMBER = exact**

Add one terminology cue:

> **Dimensions are the measurements of your object. In this mission we use millimetres (mm).**

## Guided variation

Student task:

> Change **one** dimension on purpose. Observe what changes. Then return the model to **40 × 20 × 4 mm**.

No second model is needed.

## Common bug card

Header:

**MODEL LOOKS RIGHT BUT SIZE IS WRONG?**

> Select the Box and read the actual dimension values. Do not judge size only by how large it looks on screen.

## Stage 2 success cue

> ✓ Your Box measures **40 mm × 20 mm × 4 mm** and sits flat on the Workplane.

---

# Stage 3 — Make It React / Combine & Cut

## Stage header

Keep the shared Stage 3 navigation label **Make It React**, but inside the page use:

**03 — COMBINE + CUT**  
**Make It React — Align, Group & Hole**

Clarification:

> **In CAD, shapes “react” to each other when you line them up, combine them or subtract one from another.**

## Purpose strip

Do **not** show a single linear **ALIGN → GROUP → HOLE** sequence because that can imply that Hole comes after Group.

Instead use two parallel mini-routes:

### JOIN SOLIDS

**OVERLAP → ALIGN → SELECT BOTH → GROUP**

### CUT MATERIAL

**SET SHAPE TO HOLE → OVERLAP → SELECT BOTH → GROUP → CUT**

Then give the one-line meanings:

**ALIGN** — line shapes up accurately  
**GROUP** — applies the relationship between the selected shapes  
**SOLID + SOLID** — Group combines them into one part  
**SOLID + HOLE** — Group subtracts the overlapping Hole area

Student wording:

> **Group does different things depending on what you selected: Solid + Solid joins; Solid + Hole cuts.**

## Tool-finder chips — Stage 3

Use:

- **Basic Shapes → Box**
- **Basic Shapes → Cylinder**
- **Shape panel → Solid / Hole**
- **Select 2+ shapes → Align**
- **Select 2+ shapes → Group**
- **Ungroup** — repair tool
- **Undo** — repair tool

---

# Guided micro-task A — Align + Group

Use short student instructions:

1. Add a second solid shape.
2. Move it so it overlaps the Box.
3. Select both shapes.
4. Choose **Align**.
5. Click an alignment point that lines them up intentionally.
6. Before Group, confirm the two solids **overlap**, not just touch edge-to-edge.
7. Choose **Group**.
8. Orbit around the new combined part.

Success cue:

> ✓ The two solid shapes are lined up and behave as one grouped part.

---

# Guided micro-task B — Cut a practice hole

Use:

1. Add a **Cylinder**.
2. Change it from **Solid** to **Hole**.
3. Place it so the Hole passes completely through the practice solid.
4. Select the Hole and the solid.
5. Choose **Group**.
6. Orbit underneath and around the result.

Success cue:

> ✓ You can see completely through the cut from one side to the other.

---

# Visual 3 — Align / Group / Hole model

Use one combined instructional visual with two rows.

## Row A — ALIGN + GROUP

Panel 1:

**TWO SOLIDS · MISALIGNED**

Arrow:

**ALIGN**

Panel 2:

**LINED UP**

Arrow:

**GROUP**

Panel 3:

**ONE COMBINED PART**

## Row B — CUT WITH A HOLE

Panel 1:

**SOLID + HOLE OVERLAP**

Arrow:

**SELECT BOTH + GROUP**

Panel 2:

**MATERIAL REMOVED**

Add two highlighted rules:

> **Solid + Solid + Group = one combined part.**

> **Solid + Hole + Group = material removed where they overlap.**

Do not show a completed Maker Tag.

## Beginner-bug strip

Use five short warning chips:

- **ONE SHAPE SELECTED?** Group needs both.
- **HOLE TOO SHORT?** Make it pass through.
- **JUST TOUCHING?** Solids should overlap.
- **MODEL FLOATING?** Return the base to the Workplane.
- **WRONG EDIT?** Undo, inspect, retry.

## Stage 3 success cue

> ✓ You can align two shapes, group solids, cut a real through-hole and inspect the result from more than one angle.

---

# Stage 4 — Build It

## Stage header

**04 — YOUR 3D DESIGN**  
**Build It — Maker Tag**

## Design brief

> Design a small personalized tag that could be attached to a backpack, key ring, zipper, equipment bin or classroom tool.

Add one small boundary note:

> Your goal is a **simple, accurate, printable object** — not the most complicated object you can make.

---

# Maker Tag classroom limits card

Header:

**LEVEL 1 PRINT-QUEUE LIMITS**

Use a compact diagram / numbers card:

**MAX FOOTPRINT**  
60 mm × 40 mm

**MAX HEIGHT**  
8 mm

**BASE THICKNESS**  
at least 3 mm

**THROUGH-HOLE**  
target 5 mm diameter or larger

Add one quick student check directly under the numbers:

> **Before Ready-for-Check:** select the finished tag and verify its overall size against all four limits.

Small note:

> These are classroom Mission 6 limits to keep designs sturdy and the print queue manageable. They are not universal 3D-printing rules.

---

# Maker Tag planning cards

Use four compact cards.

## PURPOSE

> What will your tag be used for?

## SIZE

> What dimensions will keep it useful and inside the Level 1 limits?

## PERSONALIZE

> What initials, text, symbol or pattern will make it yours?

## HOLE / ATTACHMENT

> Where should the through-hole go so the tag can actually be attached?

No separate worksheet is required.

---

# Theme ideas

Use title-only cards:

- **Backpack Tag**
- **Key Tag**
- **Equipment Tag**
- **Locker Tag**
- **Team Symbol**
- **Maker Badge**

Do not provide a complete Maker Tag design or construction recipe.

---

# Maker Tag required checklist

Use the established scannable checklist:

- ☐ one flat printable base
- ☐ overall footprint no larger than **60 × 40 mm**
- ☐ overall height no more than **8 mm**
- ☐ base thickness at least **3 mm**
- ☐ at least **two solid shapes** used intentionally
- ☐ at least **one Align** operation
- ☐ at least **one Group** operation
- ☐ one real **through-hole** made with a Hole shape
- ☐ hole target **5 mm or larger**
- ☐ one personalized feature
- ☐ no required floating parts
- ☐ one broad flat face on the Workplane
- ☐ model inspected from more than one angle
- ☐ I can explain why my design should be printable

---

# Visual 4 — Beginner printability

Use a side-by-side comparison visual.

## PRINTABLE

Show simplified examples of:

**FLAT**  
broad base on Workplane

**CONNECTED**  
solid pieces overlap

**THICK ENOUGH**  
base ≥ 3 mm

**HOLE CLEAR**  
through-hole passes completely through

## CHECK AGAIN

Show simplified examples of:

**FLOATING PART**

**PAPER-THIN FEATURE**

**BLIND / INCOMPLETE HOLE**

**UNSUPPORTED SHELF / EXTREME OVERHANG**

Footer strip:

**FLAT? → CONNECTED? → THICK? → HOLE CLEAR? → SIZE OK? → NO FLOATERS?**

## Student-owned choice reminder

Use one purple concept card:

> **Your tag should not look like the example practice pieces.** You choose the base shape, dimensions, hole location, personalization and arrangement.

## Build It success cue

> ✓ **Build It is ready when:** your tag fits the size rules, contains a real through-hole, has no floating required parts, includes your own design choices, and you can explain why it should be printable.

---

# TRY 4 — CAD version

Use the familiar orange TRY 4 card.

Header:

**STUCK? TRY 4**

## 1 — CHECK

> Check what is selected **before clicking another tool**, then check the current dimensions, Solid vs Hole, whether shapes overlap, and whether the base sits on the Workplane.

## 2 — VIEW

> Orbit, zoom and inspect the design from the top, side and underside.

## 3 — UNDO / RETRY

> Undo the last incorrect change, then try the operation again deliberately.

## 4 — PARTNER

> Briefly explain what you wanted the model to do and what happened instead.

Footer:

> Still stuck? Ask for help and say what you **checked, viewed and retried**.

Add one short sentence:

> **Do not export a broken design and hope the printer fixes it.**

## Mission-specific troubleshooting cards

Use no more than five:

**HOLE DISAPPEARED?**  
Check that the cutting shape was set to **Hole** before Group.

**HOLE DID NOT CUT THROUGH?**  
Inspect from the side and make the Hole taller than the base.

**GROUP DID NOTHING?**  
Confirm both shapes are selected.

**PART LOOKS CONNECTED BUT ISN'T?**  
Orbit around it and confirm the solids overlap.

**OBJECT IS FLOATING?**  
Return the required base to the Workplane.

---

# Stage 5 — Level It Up

## Stage header

**05 — OPTIONAL CHALLENGE**  
**Level It Up**

Intro:

> Only after your Maker Tag passes the required checklist. Choose **one** while you wait for your checkpoint.

Use exactly four cards.

## ⭐ Raised Name / Initials

> Add short raised text or initials. Keep the lettering thick and readable.

If Text is unavailable or slow to load in the classroom account, use a simple raised symbol or primitive-shape pattern instead.

## ⭐ Recessed Detail

> Use Text or a simple shape as a Hole to create a recessed feature without cutting through the whole base.

## ⭐⭐ Border / Pattern

> Use Duplicate and Align to create a small repeated geometric pattern.

Small limit:

> Keep the pattern simple. Do not create dozens of tiny pieces.

## ⭐⭐ Shape Remix

> Replace the simple rectangular base with a custom outline made from **2–4 overlapping primitive shapes** while staying inside the same size limits.

## Mission 6 limit warning

> **No articulated models, gears, threads, complex hinges, downloaded meshes, giant prints or multi-part assemblies in Mission 6.**

## Ready-for-Check cue

> When every Maker Tag requirement is complete and your printability check passes, add your name to **Ready-for-Check**.

---

# Stage 6 — Checkpoint

## Stage header

**06 — SHOW WHAT YOU KNOW**  
**Checkpoint**

Intro:

> Bring your **digital Tinkercad model** when you are called. You do not need a finished physical print. The checkpoint is individual.

Use four compact cards.

## Check 1 — Inspect the Model

Student demonstrates:

- orbit around the design;
- show the base;
- show the through-hole;
- show exact dimensions;
- confirm the model sits on the Workplane.

## Check 2 — Explain the Design

Student explains:

- which primitive shapes were used;
- **why** Align was useful in this design;
- what Group did with two solids;
- what Group did with a Solid + Hole;
- how the Hole removed material;
- why the design should be printable;
- one intentional personal design choice.

The student may point to tools while explaining, but the checkpoint is about **what the operations do**, not memorizing where the icons are.

## Check 3 — Change It

Teacher chooses one small edit:

- change one dimension;
- move the hole;
- resize a feature;
- realign a feature;
- switch a simple feature between Solid and Hole if appropriate.

Student route:

**PREDICT → CHANGE → ORBIT / CHECK → EXPLAIN**

Add:

> If the checkpoint change makes the tag invalid for printing, restore it to a valid print-ready state before export.

## After Your Check

- **MISSION COMPLETE**
- **RETRY ONE SKILL**
- **SUPPORT ROUTE**

Add a prominent green note:

> **A printer being busy does not affect your checkpoint result. Mission 6 mastery is about your CAD design.**

---

# Skill Passport

## Stage header

**✓ — SKILL PASSPORT**  
**Mission 6 Skills**

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

Do not include slicer setup, supports, infill, G-code or printer operation.

---

# Export + print-queue workflow

Place this **after the checkpoint**, not before.

## Header

**CHECKPOINT COMPLETE? PREPARE YOUR PRINT FILE**

Use one process strip:

**BUILD → PRINTABILITY CHECK → READY-FOR-CHECK → CHECKPOINT → EXPORT → SUBMIT**

Add:

> **Only export the approved final model.**

Before Export, require one final **EXPORT CHECK**:

- ☐ only the intended Maker Tag remains in the design area;
- ☐ no abandoned practice Box / Cylinder is sitting off to the side;
- ☐ the tag still meets the size and printability checks;
- ☐ the through-hole is still open;
- ☐ the design name is correct.

Purpose:

> **The STL should contain the approved object, not leftover practice shapes.**

## Project-name reminder

Tinkercad design name:

`FirstName_L1_M6_MakerTag`

## Export step

Use the student-visible instruction:

**Export → .STL**

Implementation note:

- lock **Export** as the visible toolbar term;
- lock **STL / .STL** as the file format;
- verify the exact wording/order inside the live export dialog immediately before implementation.

## File-name target

`FirstName_L1_M6_MakerTag.stl`

Add:

> If your browser gives the file a different name, rename it before submission when practical.

## Submission card

Header:

**SUBMIT TO THE FUTURETECH PRINT QUEUE**

Student wording:

> Upload the approved STL to the class location your teacher gives you.

Do not hard-code LMS, Google Drive, Forms or another platform until the actual classroom workflow is chosen.

---

# Print queue status strip

This is a compact process/status strip, not a fifth major instructional visual.

Place one explicit separation banner above it:

> **READY-FOR-CHECK is the student mastery queue. PRINT QUEUE is the teacher manufacturing queue. They are not the same list.**

Use:

**DESIGNING**  
→ still working

**READY FOR CHECK**  
→ waiting for checkpoint

**APPROVED FOR EXPORT**  
→ checkpoint passed

**SUBMITTED**  
→ STL uploaded

**QUEUED**  
→ teacher accepted it for printer time

**PRINTED**  
→ object manufactured

or

**NEEDS REVISION**  
→ design issue found before/during printing

## Queue rule card

> **One Mission 6 print candidate per student.**

Then:

> Printing happens later as the classroom printers become available. A completed physical print is **not required** to finish Mission 6.

Add teacher-boundary wording:

> Your teacher handles slicing, printer assignment, orientation changes, supports, layer height, infill and material settings in Mission 6.

---

# Reset

## Stage header

**↺ — LEAVE IT READY**  
**Reset**

Checklist:

- ☐ Tinkercad design named correctly
- ☐ latest design saved in Tinkercad
- ☐ STL exported only after approval
- ☐ STL submitted if approved
- ☐ unnecessary duplicate downloads cleaned up if your teacher asks
- ☐ mouse / computer area left ready
- ☐ shared measurement / reference tools returned
- ☐ print-queue status updated if used
- ☐ Passport / progress updated

## Exit question

> **What design choice made your object more printable, accurate or useful?**

---

# Exact major visual inventory

Mission 6 should contain **four major instructional visuals total**.

## Visual 1 — Tinkercad workspace map

Purpose:

- show where the few required workspace tools live.

Must include:

- Workplane
- Basic Shapes / Shapes Panel
- selected shape
- size handles / dimensions
- height handle
- view controls
- Undo
- Align
- Group
- Export

Do not show irrelevant tools.

## Visual 2 — Exact dimensions model

Purpose:

- show width, length and height in mm.

Must include:

- 40 mm width
- 20 mm length
- 4 mm height
- approximate drag vs exact typed value

## Visual 3 — Align / Group / Hole model

Purpose:

- show object relationships rather than interface location.

Must include:

- misaligned solids → Align → Group
- solid + Hole overlap → Group → material removed

## Visual 4 — Beginner printability model

Purpose:

- make printability visible before export.

Must contrast:

**PRINTABLE**
- flat
- connected
- useful thickness
- through-hole clear

with:

**CHECK AGAIN**
- floating
- too thin
- incomplete hole
- unsupported shelf / extreme overhang

The Maker Tag size-limit card, tool-finder chips, TRY 4, queue strip and checkpoint are support elements and do not count as additional major visuals.

---

# Exact tool-finder inventory

Use **tool-finder chips** as the CAD equivalent of MakeCode block-finder chips.

## Stage 1

- **Basic Shapes → Box**
- **Workplane**
- **Orbit**
- **Zoom**
- **Undo**

Optional only if needed:

- **Pan**

## Stage 2

- **Select shape → dimension values**
- **Ruler** — optional helper

## Stage 3

- **Basic Shapes → Cylinder**
- **Shape panel → Solid / Hole**
- **Select 2+ shapes → Align**
- **Select 2+ shapes → Group**
- **Ungroup** — repair tool
- **Undo** — repair tool

## Stage 4

- **Basic Shapes**
- **Text** — if enabled/available for personalization
- **Align**
- **Group**
- **Hole**

## Export

- **Export**
- **STL / .STL**

Do not surface:

- Circuits
- Codeblocks
- Sim Lab
- Import
- SVG
- Scribble
- advanced shape generators
- gears
- thread generators

in the required pathway.

---

# Student-facing wording lock

Use these phrases consistently.

## Workplane

> **The Workplane is the surface where your design sits.**

## Primitive shapes

> **Complex 3D objects can be built by combining simple shapes.**

## Dimensions

> **A dimension tells you exactly how large the object will be.**

## Align

> **Align helps shapes line up accurately.**

## Group

> **Group combines selected shapes into one part.**

## Hole

> **A Hole subtracts material where it overlaps a solid when you Group them.**

## Printability

> **A printable model should be flat, connected, thick enough, within the size limit and free of floating required parts.**

## Printing boundary

> **Mission 6 is completed with a checked digital model. A physical print may happen later.**

---

# Responsive blueprint

## Desktop — 1200 px+

- workspace map may use a wide editor-layout schematic;
- tool labels may sit around the schematic with leader lines;
- exact-dimensions visual uses one large isometric object;
- Align / Group / Hole uses a horizontal multi-panel sequence;
- printability visual uses two columns: Printable / Check Again;
- Stage 4 planning uses 4 columns;
- theme ideas use 3 columns × 2 rows;
- required checklist may use 2 columns;
- Level It Up uses 2 columns;
- print-queue strip may remain horizontal.

## Chromebook / tablet — ~1024 px

- workspace map remains wide only if labels remain readable;
- labels must never shrink below the Missions 1–5 baseline;
- dimensions visual remains one object with external labels;
- Align / Group / Hole may remain horizontal;
- Stage 4 planning uses 2 × 2;
- printability visual may remain 2 columns;
- print-queue states may wrap to two rows.

## 390 px and 375 px

- workspace schematic stacks:
  1. compact workspace image / schematic;
  2. tool-location labels as full-width cards;
- do not overlay tiny text on the workspace;
- tool-finder chips wrap;
- exact-dimensions visual stacks labels below the object if necessary;
- 40 / 20 / 4 values must remain attached to the correct dimension names;
- WIDTH / LENGTH / HEIGHT keep the plain-language cues **side to side / front to back / up and down**;
- Align / Group / Hole becomes a vertical step sequence;
- printability becomes:
  1. PRINTABLE card;
  2. CHECK AGAIN card;
- Stage 4 planning becomes one column;
- Maker Tag limits become stacked rows;
- checklist becomes one column;
- theme cards use 2 columns only if readable, otherwise 1;
- Level It Up becomes one column;
- checkpoint becomes one column;
- print-queue states stack vertically;
- export filename wraps safely;
- no horizontal scrolling.

## 320 px

Apply all 390 px rules plus:

- no fixed-width workspace visual;
- interface labels remain outside the schematic;
- tool-finder chips may become full-width;
- dimension labels become three clear rows:
  - WIDTH · 40 mm
  - LENGTH · 20 mm
  - HEIGHT · 4 mm
- the two Stage 3 routes remain separate:
  - **JOIN SOLIDS**
  - **CUT MATERIAL**
- Solid / Hole sequence uses full-width panels;
- Group / Align arrows remain readable without tiny text;
- the 60 × 40 × 8 mm classroom limits do not wrap into ambiguous numbers;
- code-style filenames wrap anywhere without forcing page overflow;
- queue states become one item per row;
- TRY 4 remains normal text size;
- no text smaller than the Missions 1–5 mobile baseline.

---

# Accessibility blueprint

- semantic stage order;
- meaningful heading hierarchy;
- workspace visual gets descriptive alt/aria text;
- interface-location meaning is repeated in text;
- exact dimensions are written, not diagram-only;
- shape relationships use labels as well as arrows;
- Solid and Hole are never distinguished by colour alone;
- Printable / Check Again includes written labels;
- success / warning cards include plain-language meaning;
- keyboard focus remains visible;
- no essential instruction depends on hover;
- no horizontal scrolling at 320 px.

---

# Implementation terminology verification

Current Autodesk materials support the following terms and should be treated as locked unless the live editor has changed at implementation time:

- **Workplane**
- **Basic Shapes**
- **Box**
- **Cylinder**
- **Group**
- **Ungroup**
- **Hole / Make a Hole**
- **Solid**
- **Align**
- **Ruler**
- **Undo**
- **Orbit**
- **Pan**
- **Zoom**
- **Export**
- **STL**

Before implementation, perform a final live-editor check for:

1. the exact placement / label of **Basic Shapes**;
2. whether **Solid / Hole** appears in the selected-shape panel using the same wording;
3. the exact visible **Align** and **Group** labels / icons;
4. how selected-shape dimension values are currently exposed;
5. whether **Ruler** is still the visible helper name;
6. the exact wording/order inside **Export** for **STL**;
7. whether **Text** is available to the student account/classroom mode.

If one label changes, update only the affected student-facing tool chip / workspace callout. Do not redesign the mission.

---

# Final page-authoring test

Before implementation, a Grade 8/9 beginner should be able to answer:

- Where is the Workplane?
- Where do I find a Box?
- How do I orbit without resizing my object?
- How do I tell how large my object really is?
- What are width, length and height, and how do I tell them apart after I orbit the view?
- What does Align do?
- What happens when I Group Solid + Solid?
- What happens when I Group Solid + Hole?
- How does a Hole remove material?
- How can I tell whether my hole really passes through?
- What makes a model printable enough for this mission?
- What size limits apply to my Maker Tag?
- Which parts of the Maker Tag must I design myself?
- What should I inspect if something goes wrong?
- Do I need a physical print to pass?
- When am I allowed to export?
- How do I make sure leftover practice shapes are not included in the STL?
- What file format do I submit?
- What happens after I submit to the print queue?
- What must I do before leaving the computer?

If an answer requires a long teacher explanation, improve the visual or support card before implementation rather than adding a paragraph.

---

# Final pre-implementation audit decisions

## Grade 8/9 beginner perspective

The blueprint passes after four targeted corrections:

1. **Workspace map load reduced.** Stage 1 now visually separates **FIND NOW** tools from **FIND LATER** landmarks so students are not asked to learn Align, Group and Export before they need them.
2. **Dimensions made orientation-proof.** Width, length and height now include plain-language directions — side to side, front to back, up and down — plus the reminder that orbit changes the view, not the dimensions.
3. **Group / Hole logic corrected.** The page no longer implies a misleading **Align → Group → Hole** sequence. Students see two different relationships:
   - Solid + Solid + Group = join;
   - Solid + Hole + Group = cut.
4. **Export made safer.** A final export check removes abandoned practice shapes and confirms the approved object is the only intended STL content.

The four-major-visual ceiling remains intact. These changes refine labels and support cards rather than adding tutorial clutter.

## Classroom-teacher / three-printer perspective

The blueprint is realistic for one 90-minute class **if Tinkercad access is ready before class**, as required by the instructional specification.

The print queue is manageable because:

- the Maker Tag has strict size limits;
- each student submits one Mission 6 print candidate;
- physical printing is not required for mastery;
- checkpoint approval happens before export;
- the final Export Check reduces broken / cluttered STL submissions;
- Ready-for-Check and Print Queue are now explicitly labelled as two separate systems;
- slicing and printer settings remain teacher-controlled.

No slicer-level content should be added to the student pathway.

## Maker Tag limits

The Mission 6 limits remain appropriate as **classroom queue guardrails**, not universal print rules:

- max footprint 60 × 40 mm;
- max height 8 mm;
- base at least 3 mm;
- through-hole target 5 mm or larger.

They must still be confirmed against the actual classroom printers, nozzle/material setup and typical print times before implementation.

## 90-minute pacing

No scope reduction is required.

The pacing remains plausible because:

- Stage 1 is a focused orientation, not a full interface tour;
- Stage 2 uses one Box only;
- Stage 3 uses two short relationship tasks;
- Stage 4 is one small single-part Maker Tag;
- Level It Up is optional;
- checkpoints roll as students finish;
- printing occurs later.

If Text is unavailable or causes classroom delays, personalization may use a simple primitive-shape symbol/pattern without changing mission mastery.

## Mobile / responsive decision

At 390 px, 375 px and 320 px, implementation must preserve:

- FIND NOW vs FIND LATER workspace labels;
- WIDTH / LENGTH / HEIGHT with plain-language direction cues;
- separate **JOIN SOLIDS** and **CUT MATERIAL** routes;
- Solid + Solid vs Solid + Hole Group outcomes;
- printability comparison;
- classroom size limits;
- Ready-for-Check vs Print Queue separation;
- export filename and Export Check without horizontal overflow.

No additional major visual is required.

---

**Freeze boundary:** This blueprint documents the approved implemented Mission 6 experience. Future changes should preserve the beginner CAD scope, FIND NOW / FIND LATER workspace hierarchy, exact-dimensions model, separate JOIN SOLIDS / CUT MATERIAL logic, Maker Tag ownership, checkpoint-gated STL export, Ready-for-Check / Print Queue separation, and CAD-specific TRY 4, and should be limited to evidence-based usability, accessibility, CAD-tool support, printability/queue workflow, safety, or factual corrections.
