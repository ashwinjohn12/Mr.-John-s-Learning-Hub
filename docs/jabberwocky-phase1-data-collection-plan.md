# Jabberwocky Phase 1 — Teacher Data Collection

## Purpose

Phase 1 keeps student work in `localStorage` first and sends only meaningful checkpoints to a teacher-owned Google Sheet. The central copy is for classroom monitoring and summary reporting; it is not the student's only copy.

## Teacher workbook

**Jabberwocky Phase 1 — Teacher Data & Reports**

Spreadsheet ID: `1RjnX1NqWH33IkUqRk_qilzJMr7aZy6hkv5-ONNNchd8`

Tabs:

- `Setup` — endpoint/configuration notes.
- `Intake` — append-only event log used by the collector.
- `Team Directory` — one current row per team.
- `Mission Progress` — one current row per team with Team Profile + Missions 1–5 status.
- `Missing Records` — teams that still have a missing checkpoint.
- `Class Summary` — counts, completion percentage, and continent distribution.

## What is collected

Only:

1. Team Profile — stable Team ID, team name, logo, mission statement, first names, and roles.
2. Assigned continent.
3. Mission 1 — Environment Profile.
4. Mission 2 — Native Species Card.
5. Mission 3 — short digital summary of the paper Ecosystem Map.
6. Mission 4 — Ecosystem Change Record.
7. Mission 5 — short digital copy of the JCEC Recommendation Board.

Not collected:

- clicks or page views;
- temporary drafts;
- Mission 1 prediction answers;
- individual reflections;
- email addresses or Google account identifiers;
- surnames entered after a first name (the endpoint reduces a pasted full name to the first token).

## Reliability model

1. The existing Save action writes to the student's browser first.
2. The Phase 1 collector observes that successful local save and creates a central-submission event.
3. If the endpoint is unavailable or the device is offline, the event remains in `jabberwocky-phase1-submit-queue` on that device.
4. The queue retries when the site is revisited/online.
5. Every event has a random Event ID. The Apps Script rejects duplicate Event IDs, so retries do not create duplicate Intake rows.
6. The stable Team ID is stored inside `jabberwocky-phase1-team-profile` and follows that team's Phase 1 browser state.

## Apps Script deployment — one teacher-owned setup step

The script source is stored in:

`docs/jabberwocky-phase1-collector-apps-script.gs`

To activate central collection:

1. Open the teacher workbook.
2. Choose **Extensions → Apps Script**.
3. Replace the default `Code.gs` contents with the complete contents of `docs/jabberwocky-phase1-collector-apps-script.gs`.
4. Save the project with a clear name such as `Jabberwocky Phase 1 Collector`.
5. Choose **Deploy → New deployment → Web app**.
6. Set **Execute as** to **Me**.
7. Set access to the least restrictive option that still works for student Chromebooks. For a public GitHub Pages site with no student sign-in integration, this normally needs an anonymous-access web app; school Workspace policy may restrict that option.
8. Deploy and authorize access to the teacher workbook.
9. Copy the deployed URL ending in `/exec`.
10. Put that URL in `src/components/JcecPhase1DataCollector.astro` as the `endpoint` constant.
11. Also paste the URL into `Setup!B4` in the teacher workbook and change `Setup!B5` to `Active`.
12. Run the normal site build/release gate and deploy the updated site.

Use the `/exec` deployment URL for production. The `/dev` test URL is editor-only and must not be used by students.

## Endpoint protections

The Apps Script implementation:

- is hard-wired to the single teacher workbook ID;
- accepts Phase 1 only;
- allow-lists three event types and Missions 1–5;
- allow-lists the five approved team roles;
- validates continent slugs;
- limits string and record sizes;
- strips control characters;
- neutralizes spreadsheet-formula prefixes (`=`, `+`, `-`, `@`);
- stores first names only;
- serializes concurrent submissions with `LockService`;
- deduplicates retries by Event ID;
- does not expose student records through `doGet`.

## Teacher workflow

Students should not need to open the old Google Form during normal use once the endpoint is active. The existing form can remain as an emergency/manual fallback.

The teacher should normally use:

- `Team Directory` to identify teams and roles;
- `Mission Progress` to see which checkpoints have arrived;
- `Missing Records` for follow-up;
- `Class Summary` for a quick whole-class view;
- `Intake` only for troubleshooting or audit history.

## Scope guard

This collector is Phase 1 only. It must not transmit or modify Phase 2–5 state, Grade 6 Math, Grade 7 Math, unrelated Grade 7 Science, or other Learning Hub data.
