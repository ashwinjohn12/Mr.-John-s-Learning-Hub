export type ExploreCheck = { prompt: string; choices: string[]; answer: number; feedback: string };

export const grade7Unit1ExploreChecks: Record<string, ExploreCheck[]> = {
  "more-patterns-in-division": [
    { prompt: "Which remainder fact explains the digit-sum test?", choices: ["10 leaves remainder 1 when divided by 3 or 9", "Every digit is a factor", "Only the final digit matters"], answer: 0, feedback: "Each place-value power contributes the same remainder as its digit." },
    { prompt: "Which number is divisible by 3 but not 9?", choices: ["231", "432", "729"], answer: 0, feedback: "231 has digit sum 6, which is divisible by 3 but not 9." },
    { prompt: "Which number belongs to both the 6 and 9 sets?", choices: ["54", "63", "75"], answer: 0, feedback: "54 is even and has digit sum 9." },
    { prompt: "Why is 0÷0 undefined?", choices: ["No quotient works", "Every quotient works, so there is no unique answer", "The answer is infinity"], answer: 1, feedback: "Every q makes 0×q=0, so division cannot select one quotient." },
  ],
  "algebraic-expressions": [
    { prompt: "At 5 shifts, what happens?", choices: ["Plan A is greater", "Plan B is greater", "The plans match"], answer: 2, feedback: "18(5)=90 and 30+12(5)=90." },
    { prompt: "In 30+12s, which value is fixed?", choices: ["s", "12", "30"], answer: 2, feedback: "The $30 amount does not change with the number of shifts." },
    { prompt: "Which substitution correctly evaluates Plan B at 8 shifts?", choices: ["30+12+8", "30+12(8)", "(30+12)8"], answer: 1, feedback: "The coefficient 12 multiplies the 8 shifts." },
    { prompt: "When is Plan B greater?", choices: ["Fewer than 5 shifts", "Exactly 5 shifts", "More than 5 shifts"], answer: 2, feedback: "After the match at 5, Plan B grows by only $12 per shift instead of $18." },
  ],
  "relationships-in-patterns": [
    { prompt: "How many tiles are in figures 1–4 of 3n+2?", choices: ["3,6,9,12", "5,8,11,14", "2,5,8,11"], answer: 1, feedback: "Each figure has n groups of 3 and 2 fixed tiles." },
    { prompt: "Which part is fixed in 3n+2?", choices: ["3n", "n", "+2"], answer: 2, feedback: "The two tiles remain while the groups of 3 grow." },
    { prompt: "Which is enough to verify the proposed rule?", choices: ["One matching figure", "At least two known figures", "The colour of the tiles"], answer: 1, feedback: "Testing multiple known terms provides stronger evidence." },
    { prompt: "Does 50 appear in 3n+2?", choices: ["Yes, at n=16", "Yes, at n=17", "No"], answer: 0, feedback: "3(16)+2=50." },
  ],
  "patterns-tables": [
    { prompt: "Which pair comes from the machine y=2x+1 at x=6?", choices: ["(6,12)", "(6,13)", "(13,6)"], answer: 1, feedback: "2(6)+1=13, and input comes first." },
    { prompt: "If input rises by 1, output rises by 2. What coefficient is likely?", choices: ["1", "2", "3"], answer: 1, feedback: "The output change per input step becomes the coefficient." },
    { prompt: "Which evidence best verifies y=2x+1?", choices: ["It matches one row", "It matches every recorded row", "It has two operations"], answer: 1, feedback: "A relation must fit all known pairs." },
    { prompt: "Which input gives output 31?", choices: ["14", "15", "16"], answer: 1, feedback: "2(15)+1=31." },
  ],
  "graphing-relations": [
    { prompt: "Which axis setup fits y=3x+2 for x=0–6?", choices: ["x: 0–6 by 1; y: 0–20 by 2", "x: 0–100 by 50; y: 0–6 by 1", "Unlabelled axes"], answer: 0, feedback: "The scales include every value using equal intervals." },
    { prompt: "Which point belongs to y=3x+2?", choices: ["(4,14)", "(14,4)", "(4,12)"], answer: 0, feedback: "3(4)+2=14." },
    { prompt: "Which story should use separate points?", choices: ["Temperature through every moment", "Cost for whole tickets", "Distance during continuous travel"], answer: 1, feedback: "Partial tickets are not possible, so the relation is discrete." },
    { prompt: "A point beyond the measured table should be called…", choices: ["known data", "a prediction", "an axis"], answer: 1, feedback: "It extends the rule beyond collected evidence." },
  ],
  "reading-writing-equations": [
    { prompt: "Which statement is an equation?", choices: ["7x−5", "7x−5=16", "16>5"], answer: 1, feedback: "It claims that two expressions have equal value." },
    { prompt: "Repair ‘n+8’ for ‘a number plus 8 equals 25.’", choices: ["n+8=25", "n=8+25", "8n=25"], answer: 0, feedback: "The full equality claim needs =25." },
    { prompt: "Which equation means ‘three times a number plus 2 is 20’?", choices: ["3(n+2)=20", "3n+2=20", "3+n+2=20"], answer: 1, feedback: "3n represents three times the number, followed by +2." },
    { prompt: "Does n=6 solve 3n+2=20?", choices: ["Yes", "No"], answer: 0, feedback: "The left side becomes 3(6)+2=20, matching the right side." },
  ],
  "equations-algebra-tiles": [
    { prompt: "What preserves equality in x+4=11?", choices: ["Remove 4 from both sides", "Remove 4 from the left only", "Add 11 to both sides"], answer: 0, feedback: "The same operation on both sides keeps the balance." },
    { prompt: "How do you solve 3x=18 with equal groups?", choices: ["Subtract 3", "Divide both sides by 3", "Multiply by 3"], answer: 1, feedback: "Partition both sides into 3 equal groups." },
    { prompt: "Which move is legal for 2x+5=19?", choices: ["Subtract 5 from both sides", "Subtract 5 from the left only", "Delete the 5"], answer: 0, feedback: "Apply the inverse operation equally." },
    { prompt: "Which solution completes x÷4=5?", choices: ["x=1", "x=9", "x=20"], answer: 2, feedback: "Multiply both sides by 4." },
  ],
};
