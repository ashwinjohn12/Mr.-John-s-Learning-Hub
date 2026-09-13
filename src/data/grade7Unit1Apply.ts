export type ApplySupport = {
  resources: { title: string; body: string }[];
  checks: { prompt: string; choices: string[]; answer: number; feedback: string }[];
};

export const grade7Unit1ApplySupport: Record<string, ApplySupport> = {
  "more-patterns-in-division": {
    resources: [
      { title: "Carton records", body: "234, 315, 468, and 1,008 items. Available lines make groups of 3, 6, or 9." },
      { title: "Repair record", body: "Code: 42173□. Invalid setting: 18 items shared among 0 teams." },
    ],
    checks: [
      { prompt: "Largest valid group for 468?", choices: ["3", "6", "9"], answer: 2, feedback: "The digit sum is 18, so 9 works. It is also divisible by 3 and 6, but 9 is the largest offered group." },
      { prompt: "Every digit that repairs 42173□ for divisibility by 9?", choices: ["1 only", "1 and 0", "0 and 9", "8 only"], answer: 0, feedback: "The known digit sum is 17, so □=1 makes 18." },
    ],
  },
  "algebraic-expressions": {
    resources: [{ title: "Pay plans", body: "North: $22 per session. River: $40 plus $16 per session. Let s be the number of sessions." }],
    checks: [
      { prompt: "Which pair models the plans?", choices: ["22+s and 40+16+s", "22s and 40+16s", "22s+40 and 16s"], answer: 1, feedback: "The per-session amounts multiply s; River also has a fixed $40." },
      { prompt: "Which plan pays more for 7 sessions?", choices: ["North", "River", "They match"], answer: 0, feedback: "North pays $154; River pays $152." },
    ],
  },
  "relationships-in-patterns": {
    resources: [
      { title: "Team Cedar", body: "Stages 1–4 contain 5, 8, 11, and 14 cleaned sections." },
      { title: "Team River", body: "Stages 1–4 contain 8, 10, 12, and 14 cleaned sections." },
    ],
    checks: [
      { prompt: "Which rules match the two teams?", choices: ["Cedar 3n+2; River 2n+6", "Cedar 5n; River 8n", "Cedar n+3; River n+2"], answer: 0, feedback: "The changes are 3 and 2; the first rows determine +2 and +6." },
      { prompt: "At which stage do the plans match?", choices: ["2", "4", "8", "They never match"], answer: 1, feedback: "Both plans give 14 at stage 4." },
    ],
  },
  "patterns-tables": {
    resources: [
      { title: "Supply rules", body: "Soap litres S=3r+4. Water litres W=5r+2, where r is the number of refill rounds." },
      { title: "Measured pairs", body: "A mystery supply follows (1,7), (3,15), and (5,23). Target supply: 43 L." },
    ],
    checks: [
      { prompt: "What is the mystery rule?", choices: ["y=4x+3", "y=3x+4", "y=8x−1"], answer: 0, feedback: "Outputs rise 8 when inputs rise 2, giving rate 4; (1,7) requires +3." },
      { prompt: "Which input produces 43 L?", choices: ["8", "10", "11"], answer: 1, feedback: "4(10)+3=43." },
    ],
  },
  "graphing-relations": {
    resources: [
      { title: "Pass plans", body: "Pay-per-visit: C=6v. Membership: C=25+3v. Use visits v=0, 3, 8, and 12." },
      { title: "Graph setup", body: "Horizontal axis: visits, 0–12 by 1. Vertical axis: cost ($), 0–75 by 5. Plot separate points because visits are discrete." },
    ],
    checks: [
      { prompt: "Which plan is cheaper at 8 visits?", choices: ["Pay-per-visit", "Membership", "They cost the same"], answer: 0, feedback: "Pay-per-visit costs $48; membership costs $49." },
      { prompt: "Which plan is cheaper at 12 visits?", choices: ["Pay-per-visit", "Membership", "They cost the same"], answer: 1, feedback: "Pay-per-visit costs $72; membership costs $61." },
    ],
  },
  "reading-writing-equations": {
    resources: [
      { title: "Audit sheet", body: "Entries: 4n+3; 4n+3=27; 12>9; 18=3×6; p+8; 5d=35. Faulty claims: “p+8 for p plus 8 equals 25” and “5+d=35 for five times d is 35.”" },
      { title: "Budget clues", body: "A $6 fee plus h dollars equals $24. Five equal tickets cost $35. Proposed values: h=18 and d=7." },
    ],
    checks: [
      { prompt: "Which repair represents five equal tickets costing $35?", choices: ["5+d=35", "5d=35", "d÷5=35"], answer: 1, feedback: "Five groups of d dollars are represented by 5d." },
      { prompt: "Does d=7 verify 5d=35?", choices: ["Yes", "No"], answer: 0, feedback: "5(7)=35, so both sides match." },
    ],
  },
  "equations-algebra-tiles": {
    resources: [{ title: "Repair records", body: "Record A: x+4=11. Record B: 3x=18. Record C: 19=2x+5. Record D: x÷4=5." }],
    checks: [
      { prompt: "What solves 3x=18?", choices: ["x=6", "x=15", "x=21"], answer: 0, feedback: "Divide both sides into 3 equal groups." },
      { prompt: "What solves x÷4=5?", choices: ["x=1", "x=9", "x=20"], answer: 2, feedback: "Multiply both sides by 4: x=20." },
    ],
  },
};
