# FutureTech Level 1 — Mission 6 Final Browser Audit

**Mission:** 6 — Design It. Print It.  
**Status:** APPROVED / FROZEN  
**Basis:** isolated browser preview + rendered Chromium captures at desktop, Chromebook/tablet, 390 px, 375 px and 320 px

## Final decision

Mission 6 is approved as the Level 1 3D-design mission. No student-facing correction was required during the final browser audit.

## Student-facing findings

- **FIND NOW / FIND LATER** clearly reduces first-screen tool load while still orienting students to later landmarks.
- The workspace schematic is useful without pretending the Tinkercad interface is pixel-fixed.
- Width, length and height remain visually distinct through both numeric labels and the plain-language directions **side to side / front to back / up and down**.
- The guided **40 × 20 × 4 mm** Box gives students an observable first CAD success without turning Stage 2 into a tutorial dump.
- Stage 3 clearly separates:
  - **JOIN SOLIDS** — Solid + Solid + Group;
  - **CUT MATERIAL** — Solid + Hole + Group.
- The Align / Group / Hole visual is more useful than additional prose and does not reveal the Maker Tag solution.
- The Maker Tag remains student-owned through base shape, dimensions, hole location, personalization and arrangement.
- The Level 1 classroom size limits are visually prominent and clearly framed as queue limits rather than universal 3D-printing rules.
- The beginner printability comparison is appropriately limited to flatness, connection, useful thickness, clear through-hole, size and floating parts.
- CAD TRY 4 encourages deliberate inspection and recovery rather than random clicking:
  **CHECK → VIEW → UNDO / RETRY → PARTNER**.
- The digital-model checkpoint assesses what Align, Group, Hole and dimensions do rather than memorized icon locations.
- The Export Check effectively prevents leftover practice shapes and unapproved files from entering the STL queue.
- **Export → STL** appears only after checkpoint approval.
- **Ready-for-Check** and **Print Queue** are visibly separated as different systems.
- Queue states are easy to follow: DESIGNING → READY FOR CHECK → APPROVED FOR EXPORT → SUBMITTED → QUEUED → PRINTED, with NEEDS REVISION available when needed.
- A physical print is clearly not required for Mission 6 mastery.
- The visual language remains consistent with Missions 1–5 through the shared mission frame, stage cards, success/warning/concept treatments, TRY 4, Level It Up, Skill Passport and Reset.

## Responsive findings

### Desktop

- Workspace schematic, exact-dimensions visual and Align / Group / Hole model are easy to scan.
- Maker Tag limits and printability comparison remain balanced.
- Export and queue sections are distinct from the mastery checkpoint.

### Chromebook / tablet

- Workspace map remains readable without crowding.
- Dimensions remain attached to the correct labels.
- Join/cut logic and printability remain clear.
- No material clipping or navigation issue.

### 390 px and 375 px

- Workspace schematic and tool labels stack cleanly.
- FIND NOW / FIND LATER remain distinct.
- Width / length / height labels stay unambiguous.
- JOIN SOLIDS and CUT MATERIAL become clear vertical routes.
- Printability comparison stacks without losing contrast.
- Export filename and queue statuses remain readable.
- No horizontal overflow.

### 320 px

- The final Mission 6 grid uses a shrinkable `minmax(0, 1fr)` track, eliminating the previously detected 9 px intrinsic-width overflow without hiding content.
- Width / length / height remain readable.
- Solid + Solid vs Solid + Hole outcomes remain explicit.
- Maker Tag limits remain unambiguous.
- TRY 4 remains normal text size.
- Export Check and STL filename wrap safely.
- Ready-for-Check vs Print Queue remains clear.
- Queue states stack one per row.
- No horizontal overflow.

## Scrolling burden

Mission 6 is one of the longest Level 1 pages because it introduces a new tool domain and must include:

- workspace orientation;
- exact dimensions;
- Align / Group / Hole;
- printability;
- checkpoint-gated export;
- queue separation.

The page avoids unnecessary duplication and uses stage chunking, compact cards and visual models to keep the long mobile scroll manageable. No scope reduction is justified from the rendered browser evidence.

## Freeze rule

Do not reopen Mission 6 for stylistic redesign.

Future changes should be limited to evidence-based:

- usability;
- accessibility;
- Tinkercad interface/terminology updates;
- CAD-tool support;
- classroom printability / queue workflow;
- safety;
- factual correction;
- real classroom pacing evidence.

Do not begin Mission 7 as part of this freeze task.
