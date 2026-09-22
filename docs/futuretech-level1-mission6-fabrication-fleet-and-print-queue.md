# FutureTech Level 1 Mission 6 — Fabrication Fleet & Print Queue

**Status:** INTERNAL / TEACHER-FACING  
**Applies to:** Mission 6 — Design It. Print It.  
**Student-facing Mission 6 limits remain unchanged:** 60 mm × 40 mm × 8 mm maximum Maker Tag size envelope  
**Default Level 1 material:** PLA

---

## 1. Classroom fabrication fleet

Use these internal printer IDs consistently in queue records, slicer notes, maintenance notes and printed-file records.

### E3-01 — Creality Ender-3

Role:
- primary Level 1 PLA production printer;
- normal single-object Mission 6 queue;
- suitable for standard Maker Tags and similar small Level 1 parts.

Manufacturer-verified baseline:
- original Ender-3 platform;
- build volume: **220 × 220 × 250 mm**;
- FDM/FFF-style Cartesian printer;
- manual bed leveling / classic Bowden platform in Creality's current Ender-series comparison.

### E3-02 — Creality Ender-3

Role:
- primary Level 1 PLA production printer;
- same Mission 6 queue role as E3-01;
- use interchangeably with E3-01 when both machines are calibrated and using compatible PLA.

Manufacturer-verified baseline:
- build volume: **220 × 220 × 250 mm**;
- same original Ender-3 platform assumptions as E3-01.

### ART-01 — Snapmaker Artisan 3-in-1 with enclosure

Role in Mission 6:
- **advanced fabrication printer, not the default Level 1 production printer**;
- normally reserved from routine beginner Mission 6 printing;
- may be used only when the teacher intentionally approves an exception, such as a demonstration, teacher-priority job, or controlled advanced/batch use;
- do **not** use its larger work area as a reason to permit larger Level 1 Maker Tags.

Manufacturer-verified 3D-printing baseline:
- enclosed Snapmaker Artisan 3-in-1 platform;
- dual-nozzle 3D-printing work area: **350 × 400 × 400 mm**;
- left-nozzle work area: **375 × 400 × 400 mm**;
- right-nozzle work area: **400 × 400 × 400 mm**;
- standard nozzle diameter: **0.4 mm**;
- supported materials include **PLA**;
- supported 3D-printing file formats include **STL** and **OBJ**;
- platform also supports laser engraving/cutting and CNC carving/cutting.

Future-course role:
- the primary **advanced digital-fabrication platform** for later FutureTech levels;
- appropriate for students who have already demonstrated Level 1 fabrication habits and are working on more advanced design/manufacturing tasks;
- possible future dual-material, larger-format, laser and CNC pathways;
- those capabilities are outside Mission 6 mastery and should not be introduced as Level 1 requirements.

---

## 2. Mission 6 limit decision

The frozen student-facing Mission 6 Maker Tag limits remain appropriate:

- maximum footprint: **60 mm × 40 mm**;
- maximum height: **8 mm**;
- base thickness: **at least 3 mm**;
- through-hole target: **5 mm diameter or larger**.

These limits are deliberately much smaller than the build volume of every printer in the fleet.

Therefore:

> **Mission 6 size limits are queue-management and beginner-printability limits, not printer-capacity limits.**

Do not enlarge Level 1 designs merely because ART-01 has a much larger work area.

---

## 3. Default material strategy

Use **PLA** as the standard Mission 6 material.

Reasons:

- common denominator across the classroom fleet;
- appropriate for small beginner Maker Tags;
- avoids turning the first CAD mission into a materials-comparison lesson;
- simplifies queue planning, slicing and troubleshooting.

Mission 6 students do not choose advanced materials.

If a later course level introduces PETG, TPU, ABS/ASA, nylon or reinforced materials, treat that as a separate materials/fabrication learning objective.

---

## 4. Printer-assignment strategy

### Normal routing

Use this default Level 1 routing:

1. **E3-01**
2. **E3-02**

For routine Mission 6 beginner prints, **stop there**.

**ART-01 is not the normal third printer in the Level 1 queue.** It is reserved for advanced fabrication and teacher-approved exceptions.

Do not interpret E3-01 then E3-02 as a strict chronological rule. Assign standard Level 1 jobs between the two Ender-3 printers based on availability and print time.

### Prefer E3-01 / E3-02 when

- printing one standard Maker Tag;
- using normal Level 1 PLA;
- the job fits the established Ender-3 slicing profile;
- both Ender-3 printers are functioning normally;
- no special Artisan capability is needed.

### Use ART-01 only when

- the teacher intentionally approves an advanced or demonstration print;
- a later-level project genuinely needs Artisan-specific capability;
- a controlled batch or teacher-priority job is pedagogically useful;
- students using it have demonstrated the prerequisite fabrication habits required for the advanced task.

Do **not** automatically move beginner Mission 6 jobs to ART-01 just because E3-01 and E3-02 are busy.

### Do not route based on student preference

Students submit an approved STL to the queue.

The teacher assigns the printer.

Mission 6 students do not need to know:
- slicer profile;
- nozzle settings;
- layer height;
- infill;
- support settings;
- printer-specific calibration;
- machine assignment logic.

---

## 5. Teacher-facing print queue fields

Use one reusable queue record with these columns:

| Field | Purpose |
|---|---|
| **Student** | Student name |
| **STL File** | Approved submitted file name |
| **Queue Status** | DESIGNING / READY FOR CHECK / APPROVED FOR EXPORT / SUBMITTED / QUEUED / PRINTED / NEEDS REVISION |
| **Estimated Print Time** | Slicer estimate; use for workload planning |
| **Assigned Printer** | E3-01 / E3-02 / ART-01 |
| **Material** | Default: PLA |
| **Notes** | Revision reason, batch note, reprint note, failure note, priority, etc. |

Optional internal fields if useful later:

- submission date;
- print date;
- filament colour;
- slicer profile;
- reprint count.

Do not expose optional production fields to students unless they serve a learning purpose.

---

## 6. Queue workflow

Keep the existing student mastery workflow:

**DESIGNING → READY FOR CHECK → APPROVED FOR EXPORT → SUBMITTED**

Then teacher manufacturing workflow:

**QUEUED → PRINTED**

or:

**NEEDS REVISION**

Important separation:

- **READY FOR CHECK** = waiting for an individual CAD mastery checkpoint;
- **PRINT QUEUE** = manufacturing work after checkpoint approval.

A student can complete Mission 6 before the object is printed.

---

## 7. Queue triage rules

When several approved Level 1 files are waiting, use these priorities on **E3-01 and E3-02**:

1. files that have already passed the Mission 6 checkpoint;
2. small jobs that keep the beginner production queue moving efficiently;
3. student work that has not yet received one successful Mission 6 print;
4. reprints only after the design or machine cause of failure is understood.

Avoid a pure first-in/first-out rule if it leaves an Ender-3 idle while a shorter compatible job could run safely.

Do not let students bypass the beginner queue because ART-01 appears available.

---

## 8. Batch-print guidance

For routine Mission 6 beginner work, prefer single-object or simple small-batch jobs on **E3-01 / E3-02**.

ART-01 batch printing should be treated as an advanced/teacher-managed exception rather than normal Level 1 production.

If ART-01 is used for a batch:

- every included STL has already passed checkpoint approval;
- all parts use the same material/profile;
- the batch does not create unreasonable failure risk;
- parts are spaced appropriately in the slicer;
- one failed object would not jeopardize too many students' work unnecessarily.

---

## 9. Failed-print handling

A failed physical print does not automatically reverse Mission 6 mastery.

### Machine/material failure

Examples:
- adhesion failure caused by machine condition;
- filament issue;
- mechanical interruption;
- printer fault.

Action:
- preserve the student's checkpoint result;
- record the failure in **Notes**;
- requeue if appropriate.

### Design-caused failure

Examples:
- unsupported or disconnected feature;
- hole closed by geometry;
- detail too thin for the chosen classroom profile;
- accidental extra object included in the STL.

Action:
- move status to **NEEDS REVISION**;
- student corrects the specific design issue;
- teacher rechecks only the affected printability requirement;
- submit one corrected STL.

Do not make the student repeat the entire Mission 6 checkpoint unless broader mastery is genuinely in doubt.

---

## 10. ART-01 advanced-capability boundary

The Snapmaker Artisan is a future digital-fabrication asset, not merely a larger Ender-3 replacement.

Its additional capabilities may later support:
- dual-material / dual-colour printing;
- larger prototypes;
- laser engraving/cutting;
- CNC carving/cutting;
- multi-process projects.

Mission 6 should **not** introduce those capabilities simply because the machine is present.

Level 1 remains:

> **small CAD object → approved STL → teacher-managed PLA printing**

---

## 11. Teacher setup standard before a Mission 6 printing cycle

Before accepting a class batch:

- ☐ E3-01 status checked
- ☐ E3-02 status checked
- ☐ ART-01 status checked
- ☐ PLA inventory confirmed
- ☐ slicer profiles available
- ☐ print surfaces ready
- ☐ queue sheet / tracker ready
- ☐ student submission location ready
- ☐ printer IDs visible to teacher
- ☐ maintenance/faulted machine removed from normal assignment

If a machine is unavailable, keep its ID in the system and mark it unavailable rather than renaming the other printers.

---

## 12. Internal fleet rule

For Mission 6 and the wider FutureTech progression:

> **E3-01 and E3-02 are the beginner production printers. ART-01 is the advanced fabrication printer and is not part of the routine Level 1 queue.**

This routing rule is internal only.

It does not change:
- the student-facing Mission 6 webpage;
- the Maker Tag size limits;
- Mission 6 mastery requirements;
- the one-candidate-per-student queue rule;
- the checkpoint-before-export workflow.
