# Jabberwocky: Mission 2190 — Reset and Expedition State

## Student progress

Student-side Jabberwocky choices and progress are stored only in the browser on the student's own Chromebook. Current keys use the prefixes `jcec-` and `jabberwocky-`.

New students with different Chromebooks naturally begin with no saved student state, so there is no annual student-data reset required.

A **Mission Settings** control appears only on Jabberwocky pages. Its **Reset Pathfinder Progress on This Device** button clears only local Jabberwocky browser data after confirmation. It does not change the class storyline or affect another student.

## Class-wide expedition state

The canonical start-of-year storyline baseline is defined in:

`src/data/jabberwockyMissionState.ts`

`DEFAULT_EXPEDITION_STATE` is the single source-of-truth template for a fresh expedition. It records:

- Mission status: ACTIVE
- Mission Day: 001
- Survey completion: 7%
- Permanent human population: 0
- Safe settlement regions: UNKNOWN
- Phase 1 active; Phases 2–5 locked
- Operation 1 active
- Original JCEC preliminary continent ratings
- Arrival Data complete in each Continental Archive
- Ecological, Botanical, Thermal, Engineering, and Geological archive sections empty
- Final JCEC Status locked

Student choices must never be added to this shared default state.

## New school year

Because incoming students use different Chromebooks, no device clearing is needed.

When class-wide storyline features become dynamic, a new class should start by copying `DEFAULT_EXPEDITION_STATE` into the active class-state layer. This will return the planet to the original preliminary ratings, empty scientific archives, Mission Day 001, Phase 1 active, and all future phases locked.

The default object should remain unchanged throughout the year so it is always available as the clean reset template.
