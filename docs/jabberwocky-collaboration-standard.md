# Jabberwocky Collaboration Standard

This is the default collaboration model for all Jabberwocky: Mission 2190 operations.

## Core rule

**Everyone explores → Team discusses → One official team decision → Each student reflects**

The website remains the shared JCEC mission environment. Students can open the same evidence, simulations, maps, transmissions, and investigation tools on their own Chromebooks, but the project should not require each student to complete identical group work independently.

## Three work modes

### 👤 Individual Pathfinder
Use for personal predictions, reflections, explanations, changes in thinking, and individual accountability.

Typical destinations:
- a device-local draft when useful
- Pathfinder Log
- the JCEC Submission Portal when the teacher needs to see or assess the response

The JCEC Submission Portal collects the student's verified Google account email. Local browser storage is never described as teacher submission.

### 👥 Team Investigation
Use when students should investigate evidence together, discuss observations, compare explanations, solve a problem, or reach a shared conclusion.

The website should explicitly tell students to collaborate rather than silently presenting an activity to four separate devices.

Whenever possible, include a short team protocol such as:
1. Explore the evidence together.
2. Make sure every team member can explain what the evidence shows.
3. Compare ideas before choosing a conclusion.
4. Support the conclusion with evidence.
5. Choose one team member to submit the official response when directed.

Team IDs use the phase-continent-group pattern (for example `P1-GY-01`) so groups can change between units without mixing unrelated teams in the teacher dashboard.

### 🗂️ Continental Archive
Use for the team's official scientific record that future teams will inherit.

There should normally be **one archive entry per team**, not one duplicate entry per student. Continental Archive entries are submitted through the JCEC Submission Portal and are automatically routed into the correct continent archive in the teacher dashboard.

Archive entries may include:
- evidence summaries
- maps
- ecological concerns
- revised ratings
- management recommendations
- unresolved questions
- handoff notes

The archive is class-wide work and remains conceptually separate from browser-local student progress.

## JCEC Submission Portal

The single year-long response form is:

`https://docs.google.com/forms/d/e/1FAIpQLSdziTI_SBqRzQbIWU3ZDtZrNtCG3WB78ttvZdtEmq29kapujg/viewform`

Routine responses from every phase use this one form. Website tasks identify the correct:
- Submission Type
- Mission Phase
- Operation / Task
- Continent
- Team ID expectations

The linked teacher dashboard is **JCEC Mission 2190 — Master Submission Dashboard**. Google Classroom remains the preferred location for larger graded artifacts, uploaded files, major reports, models, and final presentations.

## Required design language for new operations

Every substantial task in future Jabberwocky operations should visibly identify its work mode using the reusable `JcecWorkMode.astro` component:

- `mode="individual"`
- `mode="team"`
- `mode="archive"`

A single operation can intentionally move through all three modes.

Recommended sequence:

1. **Team Investigation** — gather and analyze evidence.
2. **Continental Archive** — record the team's official finding.
3. **Individual Pathfinder** — reflect on what changed in the student's own thinking.

When the response needs to be teacher-visible, the task must explicitly show **SUBMIT TO JCEC** and identify whether one student or one team member should submit.

## Data rules

- Individual device interactions may use local browser storage as drafts or convenience state.
- Local browser storage is never described as teacher submission.
- Teacher-visible routine responses go through the JCEC Submission Portal.
- Team work is not considered shared merely because every student can see the same webpage.
- Continental Archive entries use one official team submission and are routed from the master response table.
- Future class-wide mission state must remain resettable to the default expedition state.

## Operation 01

The Mission Assignment initial settlement hypothesis is an **Individual Pathfinder** response. Students may discuss the posting with their team, but each student records an individual starting hypothesis. The website saves a device-local draft and then directs the student to submit that response through JCEC so the teacher has the starting evidence for later comparison.

## Operation 02 onward

Operation 02: Environmental Survey and every later investigation should be designed from this collaboration and submission standard first, rather than adding collaboration after the activity has already been built.
