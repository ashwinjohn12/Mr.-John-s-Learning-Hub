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
- overflow printer when E3-01 and E3-02 are occupied;
- batch printing where the slicer layout makes that efficient;
- reserve capacity for unusually time-sensitive or teacher-priority jobs;
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
- advanced digital-fabrication platform for later levels;
- possible future dual-material, laser and CNC pathways;
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

Use this default order:

1. **E3-01**
2. **E3-02**
3. **ART-01** as overflow / batch / teacher-priority capacity

Do not interpret this as a strict chronological rule. Assign the next job to the machine that gives the simplest safe classroom workflow.

### Prefer E3-01 / E3-02 when

- printing one standard Maker Tag;
- using normal Level 1 PLA;
- the job fits the established Ender-3 slicing profile;
- both Ender-3 printers are functioning normally;
- no special Artisan capability is needed.

### Prefer ART-01 when

- both Ender-3 printers are occupied;
- several small approved Maker Tags can be efficiently arranged as one batch;
- a teacher-priority job needs available capacity;
- a future advanced project genuinely needs Artisan-specific capability.

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

When several approved files are waiting, use these priorities:

1. files that have already passed the Mission 6 checkpoint;
2. small jobs that keep the fleet moving efficiently;
3. jobs that can be batched without increasing risk;
4. student work that has not yet received one successful Mission 6 print;
5. reprints only after the design or machine cause of failure is understood.

Avoid a pure first-in/first-out rule if it leaves a printer idle while a shorter compatible job could run safely.

Do not let students bypass the queue because ART-01 appears available.

---

## 8. Batch-print guidance

Batching may be useful on ART-01 because of its larger 3D-printing work area.

Use batch printing only when:

- every included STL has already passed checkpoint approval;
- all parts use the same material/profile;
- the batch does not create an unreasonable failure risk;
- parts are spaced appropriately in the slicer;
- one failed object would not jeopardize too many students' work unnecessarily.

For first-time Mission 6 prints, single-object jobs on E3-01 / E3-02 may be easier to diagnose and manage.

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

For Mission 6:

> **E3-01 and E3-02 are the normal Level 1 production printers. ART-01 is overflow, batch and future advanced-fabrication capacity.**

This routing rule is internal only.

It does not change:
- the student-facing Mission 6 webpage;
- the Maker Tag size limits;
- Mission 6 mastery requirements;
- the one-candidate-per-student queue rule;
- the checkpoint-before-export workflow.
