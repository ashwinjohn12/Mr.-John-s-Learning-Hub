export type ChoiceQuestion = {
  prompt: string;
  choices: string[];
  answer: number;
  feedback: string;
  hint?: string;
  category?: string;
};
export type LessonSpec = {
  slug: string;
  number: string;
  title: string;
  outcome: string;
  promise: string;
  duration: string;
  goals: string[];
  prerequisites: string[];
  bigIdeas: { title: string; body: string }[];
  understand: { title: string; body: string; model: string; mistake: string }[];
  examples: {
    label: string;
    question: string;
    steps: string[];
    answer: string;
  }[];
  vocabulary: { term: string; definition: string; example: string }[];
  explore: {
    title: string;
    launch: string;
    phases: { title: string; instruction: string; target: string }[];
    reflection: string[];
  };
  practice: ChoiceQuestion[];
  check: ChoiceQuestion[];
  apply: {
    title: string;
    scenario: string;
    instructions: string;
    tasks: string[];
    success: string[];
  };
  exit: ChoiceQuestion[];
  readiness: string[];
  next: { title: string; body: string; href: string } | null;
};

const q = (
  prompt: string,
  choices: string[],
  answer: number,
  feedback: string,
  hint = "",
  category = "mixed",
): ChoiceQuestion => ({ prompt, choices, answer, feedback, hint, category });
const rotateChoices = (item: ChoiceQuestion, shift: number): ChoiceQuestion => {
  const amount = shift % item.choices.length;
  if (!amount) return item;
  return {
    ...item,
    choices: [
      ...item.choices.slice(-amount),
      ...item.choices.slice(0, -amount),
    ],
    answer: (item.answer + amount) % item.choices.length,
  };
};
const expr = (s: string) => s.replaceAll("*", "×");

const makeDivisionCheck = () => {
  const out: ChoiceQuestion[] = [];
  [
    [6432, 15, true],
    [8127, 18, true],
    [5146, 16, false],
    [7218, 18, true],
    [4511, 11, false],
    [9993, 30, false],
  ].forEach(([n, sum, yes], i) =>
    out.push(
      q(
        `Is ${Number(n).toLocaleString()} divisible by ${i % 2 ? 9 : 3}?`,
        ["Yes", "No"],
        yes ? 0 : 1,
        `The digit sum is ${sum}.`,
        "",
        "digit sum",
      ),
    ),
  );
  [
    [7314, true],
    [9123, false],
    [4028, false],
    [132, true],
    [414, true],
    [728, false],
  ].forEach(([n, yes]) =>
    out.push(
      q(
        `Is ${Number(n).toLocaleString()} divisible by 6?`,
        ["Yes", "No"],
        yes ? 0 : 1,
        `${yes ? "Both" : "At least one of"} the even and digit-sum tests ${yes ? "pass" : "fails"}.`,
        "Check divisibility by 2 AND 3.",
        "combined rules",
      ),
    ),
  );
  [
    q(
      "Which digits make 5□4 divisible by 3?",
      ["0, 3, 6, 9", "1, 4, 7", "2, 5, 8", "0 and 9"],
      0,
      "5 + □ + 4 must be a multiple of 3.",
    ),
    q(
      "What is the least digit that makes 82□5 divisible by 9?",
      ["0", "3", "6", "9"],
      1,
      "8 + 2 + 3 + 5 = 18.",
    ),
    q(
      "Where does 90 belong in sets divisible by 6 and 9?",
      ["6 only", "9 only", "both", "neither"],
      2,
      "90 passes both tests.",
    ),
    q(
      "Which list gives all factor pairs of 45?",
      ["1×45, 3×15, 5×9", "1×45, 5×9", "3×15, 5×9", "1×45, 3×15, 5×8"],
      0,
      "Pair factors systematically.",
    ),
    q(
      "Which list contains every factor of 36?",
      ["1,2,3,4,6,9,12,18,36", "1,2,3,6,9,18,36", "2,3,4,6,9,12", "1,4,6,9,36"],
      0,
      "Each listed number divides 36 with no remainder.",
    ),
    q(
      "A number is divisible by 2 and 9. Which rule must it also pass?",
      ["4", "5", "6", "8"],
      2,
      "Divisible by 2 and 3 means divisible by 6.",
    ),
  ].forEach((x) => {
    x.category = "construct and factors";
    out.push(x);
  });
  [
    q(
      "What is 0 ÷ 7?",
      ["0", "7", "undefined", "infinity"],
      0,
      "Zero items shared among seven groups gives zero per group.",
    ),
    q(
      "What is 7 ÷ 0?",
      ["0", "7", "undefined", "infinity"],
      2,
      "No number q makes 0 × q = 7.",
    ),
    q(
      "Why is 0 ÷ 0 undefined?",
      [
        "The answer is too large",
        "Every quotient would fit, so no unique quotient is named",
        "The quotient is always 0",
        "Zero is odd",
      ],
      1,
      "0 × q = 0 is true for every q, so division does not select one quotient.",
    ),
    q(
      "If 24 ÷ 0 = q, multiplication would require…",
      ["24q=0", "0q=24", "q+0=24", "q÷24=0"],
      1,
      "No q makes 0q equal 24.",
    ),
    q(
      "Which equal-sharing situation represents 18 ÷ 0?",
      [
        "18 items in 1 group",
        "0 items in 18 groups",
        "18 items shared among zero groups",
        "18 groups of zero plus 18",
      ],
      2,
      "In this model, the divisor names the number of groups. Zero groups cannot receive the 18 items.",
    ),
    q(
      "Which statement is true?",
      [
        "Every number divided by 0 is 0",
        "0 divided by a nonzero number is 0",
        "Division by 0 gives infinity",
        "0÷0 has one quotient",
      ],
      1,
      "Do not confuse 0 ÷ a with a ÷ 0.",
    ),
  ].forEach((x) => {
    x.category = "zero";
    out.push(x);
  });
  [
    q(
      "Divisible by 9 means divisible by 3.",
      ["Always", "Sometimes", "Never", "Only for even numbers"],
      0,
      "Every multiple of 9 is also a multiple of 3.",
    ),
    q(
      "Divisible by 3 means divisible by 9.",
      ["Always", "Sometimes", "Never", "Only for odd numbers"],
      1,
      "18 works, while 12 is a counterexample.",
    ),
    q(
      "Which number is divisible by 3 and 5 but not 2?",
      ["120", "135", "240", "450"],
      1,
      "135 has digit sum 9, ends in 5, and is odd.",
    ),
    q(
      "A student tests 4,572 for 9 by looking at its last digit. What needs repair?",
      [
        "Only the conclusion",
        "Only the evidence",
        "Nothing",
        "Both rule and conclusion",
      ],
      1,
      "The conclusion is yes, but the evidence must be digit sum 18.",
    ),
    q(
      "Which number is divisible by 6 but not 9?",
      ["108", "114", "126", "180"],
      1,
      "114 is even with digit sum 6, not a multiple of 9.",
    ),
    q(
      "Which implication is false?",
      ["9→3", "6→2", "6→3", "3→6"],
      3,
      "A multiple of 3 can be odd, such as 9.",
    ),
  ].forEach((x) => {
    x.category = "reasoning";
    out.push(x);
  });
  return out;
};

const makeExpressionCheck = () => {
  const items = [
    q(
      "What is the coefficient in 13x + 4?",
      ["13", "x", "4", "17"],
      0,
      "The coefficient multiplies the variable.",
    ),
    q(
      "What is the constant in 8p − 6?",
      ["8", "p", "−6", "6p"],
      2,
      "The signed constant term is −6.",
    ),
    q(
      "What is the variable in 25 + 3h?",
      ["25", "3", "h", "28"],
      2,
      "h can change.",
    ),
    q(
      "How many terms are in 7n + 2?",
      ["1", "2", "7", "9"],
      1,
      "The addition separates two terms.",
    ),
    q(
      "In 5d + 12 for delivery stops, what does d mean?",
      ["cost", "number of stops", "starting fee", "five deliveries"],
      1,
      "The context defines the variable.",
    ),
    q(
      "Which is an algebraic expression?",
      ["4x + 1", "4 + 1 = 5", "x = 3", "4 > 1"],
      0,
      "An expression names a value without an equals sign.",
    ),
    q(
      "Translate “six more than a number.”",
      ["n+6", "6−n", "6n", "n−6"],
      0,
      "Start with n and add 6.",
    ),
    q(
      "Translate “six less than a number.”",
      ["n+6", "n−6", "6−n", "6n"],
      1,
      "Six is removed from the number.",
    ),
    q(
      "Translate “a number subtracted from 18.”",
      ["n−18", "18−n", "18n", "n+18"],
      1,
      "The number is removed from 18.",
    ),
    q(
      "Translate “five times a number, then add 2.”",
      ["5(n+2)", "5n+2", "n+7", "2n+5"],
      1,
      "Multiply first, then add 2.",
    ),
    q(
      "Translate “add 2 to a number, then multiply by 5.”",
      ["5n+2", "5(n+2)", "n+10", "2(n+5)"],
      1,
      "The parentheses preserve the order.",
    ),
    q(
      "Translate “one-third of a number plus 4.”",
      ["3n+4", "n/(3+4)", "n/3+4", "4n/3"],
      2,
      "Divide n by 3, then add 4.",
    ),
    q(
      `Evaluate ${expr("7*k+1")} for k=6.`,
      ["42", "43", "48", "49"],
      1,
      "7×6+1=43.",
    ),
    q("Evaluate 30 − 2m for m=9.", ["12", "21", "28", "162"], 0, "30−18=12."),
    q("Evaluate 4(a + 2) for a=3.", ["14", "20", "24", "9"], 1, "4(3+2)=20."),
    q("Evaluate p/5 + 6 for p=45.", ["9", "11", "15", "51"], 2, "45÷5+6=15."),
    q(
      "Evaluate 3x + 2x − 4 for x=7.",
      ["27", "31", "35", "66"],
      1,
      "21+14−4=31.",
    ),
    q("Evaluate 48/(y + 2) for y=4.", ["6", "8", "10", "14"], 1, "48÷6=8."),
    q(
      "Which expression models $8 per ticket plus a $5 fee?",
      ["8t+5", "5t+8", "13t", "8(t+5)"],
      0,
      "The repeated amount is 8t and the one-time fee is 5.",
    ),
    q(
      "A tank starts with 60 L and loses 4 L/min.",
      ["60+4m", "4m−60", "60−4m", "56m"],
      2,
      "Subtract 4m from the starting amount.",
    ),
    q(
      "A square has side length s. Its perimeter is…",
      ["s²", "4s", "s+4", "2s"],
      1,
      "Four equal sides total 4s.",
    ),
    q(
      "A game awards 3 points per target and subtracts 2 once.",
      ["3(t−2)", "3t−2", "t+1", "2t−3"],
      1,
      "The penalty is a constant.",
    ),
    q(
      "A ribbon of length r is cut into 6 equal pieces. One piece is…",
      ["6r", "r−6", "r/6", "6/r"],
      2,
      "The total is divided into six parts.",
    ),
    q(
      "Cost of n $4 notebooks and two $3 pens?",
      ["4n+6", "6n+4", "7n", "4(n+6)"],
      0,
      "The pens cost $6 in total.",
    ),
    q(
      "Does 4n mean 4+n?",
      ["Always", "Sometimes", "No; it means 4×n", "Only when n=4"],
      2,
      "Juxtaposition means multiplication.",
    ),
    q(
      "For x=6, which is greater?",
      ["2x+5", "3x−2", "They are equal", "Cannot tell"],
      0,
      "The values are 17 and 16.",
    ),
    q(
      "Do 2(n+3) and 2n+3 always match?",
      ["Yes", "No", "Only for even n", "Only for n=3"],
      1,
      "For n=1 the values are 8 and 5.",
    ),
    q("Which n makes 5n+4 equal 24?", ["2", "3", "4", "5"], 2, "5(4)+4=24."),
    q(
      "Which has coefficient 7 and constant 10?",
      ["10x+7", "7x+10", "17x", "7(x+10)"],
      1,
      "7 multiplies x; 10 stands alone.",
    ),
    q(
      "A student gets 26 for 6x+2 at x=4 but writes 6+4+2.",
      [
        "Answer and reasoning correct",
        "Answer correct; reasoning wrong",
        "Answer wrong; reasoning correct",
        "Both wrong",
      ],
      1,
      "The correct substitution is 6×4+2.",
    ),
  ];
  return items.map((x, i) => ({
    ...x,
    category:
      i < 6
        ? "anatomy"
        : i < 12
          ? "translation"
          : i < 18
            ? "evaluation"
            : i < 24
              ? "context"
              : "reasoning",
  }));
};

const linearBank = (kind: "pattern" | "table" | "graph") => {
  const rules = [
    { a: 3, b: 2 },
    { a: 4, b: 3 },
    { a: 2, b: 5 },
    { a: 5, b: 1 },
    { a: 6, b: 2 },
    { a: 7, b: 4 },
  ];
  const out: ChoiceQuestion[] = [];
  for (let i = 0; i < 30; i++) {
    const { a, b } = rules[i % rules.length];
    const n = (i % 6) + 1;
    const y = a * n + b;
    const stage = Math.floor(i / 6);
    if (kind === "pattern") {
      if (stage === 0)
        out.push(
          q(
            `A growing pattern follows ${a}n + ${b}. How many tiles are in figure ${n}?`,
            [String(y), String(y + a), String(y + a + 1), String(y - 1)],
            0,
            `Substitute n=${n}: ${a}(${n})+${b}=${y}.`,
            "Use the figure number as the input.",
            "identify",
          ),
        );
      if (stage === 1)
        out.push(
          q(
            `The first three terms are ${a + b}, ${2 * a + b}, ${3 * a + b}. What is the fourth term?`,
            [
              String(4 * a + b),
              String(3 * a + b),
              String(4 * a),
              String(4 * a + b + 1),
            ],
            0,
            `The constant change is ${a}, so the next term is ${4 * a + b}.`,
            "Find the repeated change first.",
            "extend",
          ),
        );
      if (stage === 2)
        out.push(
          q(
            `Which rule describes ${a + b}, ${2 * a + b}, ${3 * a + b}, … for term number n?`,
            [`${a}n+${b}`, `${b}n+${a}`, `${a}n−${b}`, `n+${a + b}`],
            0,
            `The change is ${a}; term 1 needs the fixed part ${b}.`,
            "The repeated change becomes the coefficient.",
            "rule",
          ),
        );
      if (stage === 3)
        out.push(
          q(
            `The rule is ${a}n+${b}. Which term number produces ${y}?`,
            [String(n), String(n + 1), String(y), String(Math.max(0, n - 1))],
            0,
            `${a}(${n})+${b}=${y}, so it is term ${n}.`,
            "Work backward or test the choices.",
            "compare",
          ),
        );
      if (stage === 4)
        out.push(
          q(
            `What evidence best explains the growth in ${a + b}, ${2 * a + b}, ${3 * a + b}, …?`,
            [
              `Each term adds ${a}`,
              `Each term adds ${b}`,
              `Each term multiplies by ${a}`,
              `The change is not constant`,
            ],
            0,
            `Consecutive terms differ by ${a}.`,
            "Compare neighbouring terms.",
            "reason",
          ),
        );
    }
    if (kind === "table") {
      if (stage === 0)
        out.push(
          q(
            `A table uses y=${a}x+${b}. What output belongs to x=${n}?`,
            [String(y), String(y + 1), String(y + 2), String(y + 3)],
            0,
            `${a}(${n})+${b}=${y}.`,
            "Follow multiply, then add.",
            "complete",
          ),
        );
      if (stage === 1)
        out.push(
          q(
            `Pairs (1,${a + b}), (2,${2 * a + b}), and (3,${3 * a + b}) follow which rule?`,
            [`${a}x+${b}`, `${b}x+${a}`, `${a + b}x`, `${a}x−${b}`],
            0,
            `The outputs change by ${a}; testing x=1 gives the fixed part ${b}.`,
            "Use change, then verify every pair.",
            "rule",
          ),
        );
      if (stage === 2)
        out.push(
          q(
            `For y=${a}x+${b}, which input gives output ${y}?`,
            [String(n), String(y), String(n + 1), String(Math.max(0, n - 1))],
            0,
            `${a}(${n})+${b}=${y}.`,
            "Undo the fixed part, then divide by the coefficient.",
            "reverse",
          ),
        );
      if (stage === 3)
        out.push(
          q(
            `A student claims x=${n} gives y=${y + a} for y=${a}x+${b}. What is the repair?`,
            [
              `The output should be ${y}`,
              `The input should be ${y}`,
              `The rule should be y=${b}x+${a}`,
              `No repair is needed`,
            ],
            0,
            `Substitution gives ${a}(${n})+${b}=${y}.`,
            "Substitute before accepting the row.",
            "error",
          ),
        );
      if (stage === 4)
        out.push(
          q(
            `A service charges $${b} once and $${a} per visit. What does (${n}, ${y}) mean?`,
            [
              `${n} visits cost $${y}`,
              `${y} visits cost $${n}`,
              `The rate is $${y}`,
              `The fixed fee is $${n}`,
            ],
            0,
            `The first coordinate is visits; the second is total cost.`,
            "Keep the input and output roles attached.",
            "context",
          ),
        );
    }
    if (kind === "graph") {
      if (stage === 0)
        out.push(
          q(
            `Which point lies on y=${a}x+${b} when x=${n}?`,
            [
              `(${n}, ${y})`,
              `(${y}, ${n})`,
              `(${n}, ${y + a})`,
              `(${a}, ${b})`,
            ],
            0,
            `The ordered pair is (input, output) = (${n}, ${y}).`,
            "Find the output, then write (x,y).",
            "plot",
          ),
        );
      if (stage === 1)
        out.push(
          q(
            `A graph contains (${n}, ${y}) for y=${a}x+${b}. Which table row matches?`,
            [
              `x=${n}, y=${y}`,
              `x=${y}, y=${n}`,
              `x=${a}, y=${b}`,
              `x=${n}, y=${y + a}`,
            ],
            0,
            `A point and table row keep the same input-output order.`,
            "Read horizontal first, then vertical.",
            "read",
          ),
        );
      if (stage === 2)
        out.push(
          q(
            `On a cost graph, what does the point (${n}, ${y}) communicate?`,
            [
              `${n} items cost $${y}`,
              `${y} items cost $${n}`,
              `The starting cost is $${y}`,
              `The graph has ${n + y} points`,
            ],
            0,
            `Coordinates must be interpreted using the axis meanings.`,
            "Use input first, output second.",
            "interpret",
          ),
        );
      if (stage === 3)
        out.push(
          q(
            `Plan A follows y=${a}x+${b}; Plan B follows y=${a + 2}x+${b}. Which graph rises more for each 1-unit x-change?`,
            [
              "Plan B",
              "Plan A",
              "They rise equally",
              "The starting value decides",
            ],
            0,
            `Plan B rises by ${a + 2}, compared with ${a} for Plan A.`,
            "Compare equal horizontal intervals.",
            "compare",
          ),
        );
      if (stage === 4)
        out.push(
          q(
            `A graph shows whole tickets sold using y=${a}x+${b}. Why might its points stay unconnected?`,
            [
              "Partial-ticket inputs are not meaningful",
              "The relation has no rule",
              "Axes cannot show whole numbers",
              "Connected points are always incorrect",
            ],
            0,
            "The context allows only whole-number inputs, so the relation is discrete.",
            "Ask whether in-between inputs make sense.",
            "reason",
          ),
        );
    }
  }
  return out.map((item, index) => rotateChoices(item, index % 4));
};

const equationBank = () => {
  const out: ChoiceQuestion[] = [];
  for (let i = 0; i < 30; i++) {
    const stage = Math.floor(i / 5),
      a = (i % 5) + 2,
      x = (i % 6) + 3,
      b = (i % 4) + 2,
      total = a * x + b;
    if (stage === 0)
      out.push(
        q(
          `Which statement using ${a}, ${b}, and n is an equation?`,
          [`${a}n+${b}=${total}`, `${a}n+${b}`, `n−${b}`, `${total}>${b}`],
          0,
          "An equation uses an equals sign to claim equal values.",
          "Look for a complete equality claim.",
          "identify",
        ),
      );
    if (stage === 1)
      out.push(
        q(
          `Translate “${a} times a number plus ${b} is ${total}.”`,
          [
            `${a}n+${b}=${total}`,
            `${a}(n+${b})=${total}`,
            `${a}+n+${b}`,
            `${total}−${b}`,
          ],
          0,
          "Preserve the operations, then use = for “is.”",
          "Translate in the order described.",
          "translate",
        ),
      );
    if (stage === 2)
      out.push(
        q(
          `A team pays $${b} once and $${a} per player for a total of $${total}. Which equation models this?`,
          [
            `${a}p+${b}=${total}`,
            `${b}p+${a}=${total}`,
            `${a}(p+${b})=${total}`,
            `${a}p+${b}`,
          ],
          0,
          "The equation connects the variable cost and fixed fee to the total.",
          "Separate repeated and fixed amounts.",
          "context",
        ),
      );
    if (stage === 3)
      out.push(
        q(
          `What value makes n + ${b} = ${x + b} true?`,
          [String(x), String(x + b), String(Math.max(0, x - b)), String(x + 1)],
          0,
          `Substitution gives ${x}+${b}=${x + b}.`,
          "Undo the addition or test each choice.",
          "substitute",
        ),
      );
    if (stage === 4)
      out.push(
        q(
          `Does n=${x} make ${a}n+${b}=${total} true?`,
          ["Yes", "No", "Only if n=0", "There is not enough information"],
          0,
          `${a}(${x})+${b}=${total}, so both sides match.`,
          "Evaluate the entire left side.",
          "truth",
        ),
      );
    if (stage === 5)
      out.push(
        q(
          `A student writes ${a}n+${b} for “${a} times a number plus ${b} equals ${total}.” What is missing?`,
          [
            "The equality and right-hand side",
            "The variable",
            "The coefficient",
            "Nothing",
          ],
          0,
          `The complete equation is ${a}n+${b}=${total}.`,
          "An equation must make a complete equality claim.",
          "reason",
        ),
      );
  }
  return out.map((item, index) => rotateChoices(item, index % 4));
};

const tileBank = () => {
  const out: ChoiceQuestion[] = [];
  for (let i = 0; i < 30; i++) {
    const stage = Math.floor(i / 6),
      x = (i % 6) + 3,
      c = (i % 5) + 2,
      groups = (i % 4) + 2;
    if (stage === 0)
      out.push(
        q(
          `Solve x + ${c} = ${x + c}.`,
          [String(x), String(x + c), String(x + 1), String(c)],
          0,
          `Subtract ${c} from both sides: x=${x}.`,
          "Remove the same unit tiles from both sides.",
          "additive",
        ),
      );
    if (stage === 1)
      out.push(
        q(
          `Which tile move solves x + ${c} = ${x + c} while preserving equality?`,
          [
            `Remove ${c} units from both sides`,
            `Remove ${c} units from the left only`,
            `Add ${c} units to the right only`,
            `Divide the left side by ${c}`,
          ],
          0,
          `Equal changes leave x=${x}.`,
          "A balance stays true only when both sides receive the same operation.",
          "model",
        ),
      );
    if (stage === 2)
      out.push(
        q(
          `Which value verifies x + ${c} = ${x + c}?`,
          [String(x), String(x + c), String(x - 1), String(x + c + 1)],
          0,
          `${x}+${c}=${x + c}.`,
          "Substitute into the original equation.",
          "verify",
        ),
      );
    if (stage === 3)
      out.push(
        q(
          `${groups} equal groups contain ${groups * x} tiles in total. What value solves ${groups}x = ${groups * x}?`,
          [String(x), String(x + 2), String(groups * x), String(x + 1)],
          0,
          `Divide both sides into ${groups} equal groups: x=${x}.`,
          "Partition both sides into the same number of groups.",
          "multiplicative",
        ),
      );
    if (stage === 4)
      out.push(
        q(
          `A student solves ${groups}x=${groups * x} by subtracting ${groups}. Which repair is valid?`,
          [
            `Divide both sides by ${groups}`,
            `Subtract ${groups} from the left only`,
            `Multiply both sides by ${groups}`,
            `Change x to ${groups * x}`,
          ],
          0,
          `Division undoes multiplication, giving x=${x}.`,
          "Name the inverse operation and apply it to both sides.",
          "reason",
        ),
      );
  }
  return out.map((item, index) => rotateChoices(item, index % 4));
};

export const grade7Unit1Lessons: LessonSpec[] = [
  {
    slug: "more-patterns-in-division",
    number: "1.2",
    title: "More Patterns in Division",
    outcome:
      "N1 — determine and explain divisibility by 2, 3, 4, 5, 6, 8, 9, and 10, and why division by zero is undefined.",
    duration: "55–70 minutes",
    promise:
      "Use digit patterns to test 3, 6, and 9, find factors, and explain why zero cannot be a divisor.",
    goals: [
      "Test divisibility by 3 and 9 using a digit sum.",
      "Test divisibility by 6 using both 2 and 3.",
      "Combine all Unit 1 divisibility rules to classify numbers and find factors.",
      "Explain division by zero with equal groups and multiplication.",
    ],
    prerequisites: [
      "Rules for 2, 4, 5, 8, and 10 from Lesson 1.1.",
      "Factor, multiple, remainder, and quotient.",
      "Rule → Evidence → Conclusion explanations.",
    ],
    bigIdeas: [
      {
        title: "Digit sums preserve remainders",
        body: "For 3 and 9, each place-value power contributes the same remainder as its digit.",
      },
      {
        title: "Six is an AND rule",
        body: "A number is divisible by 6 only when it is divisible by both 2 and 3.",
      },
      {
        title: "Rules reveal factor pairs",
        body: "A successful test gives a divisor and its paired quotient.",
      },
      {
        title: "Zero is not a divisor",
        body: "No quotient makes 0 × q equal a nonzero dividend; 0 ÷ 0 also fails to name one unique quotient.",
      },
    ],
    understand: [
      {
        title: "Divisibility by 3",
        body: "Add the digits. If the sum is divisible by 3, the original number is too.",
        model: "2,364 → 2+3+6+4=15 → divisible by 3.",
        mistake: "Do not inspect only the last digits.",
      },
      {
        title: "Divisibility by 9",
        body: "Add the digits and test the sum for 9.",
        model: "7,245 → 18 → divisible by 9 and therefore by 3.",
        mistake: "Divisible by 3 does not always imply 9.",
      },
      {
        title: "Divisibility by 6",
        body: "Check evenness and the digit sum. Both tests must pass.",
        model: "4,518 is even and its digit sum is 18.",
        mistake: "Passing either test alone is not enough.",
      },
      {
        title: "Division by zero",
        body: "Division can be checked with multiplication. For a÷0=q, we would need 0q=a.",
        model: "12÷0 is undefined because no q makes 0q=12.",
        mistake: "0÷6=0 is different from 6÷0.",
      },
    ],
    examples: [
      {
        label: "TEST MANY RULES",
        question: "Which rules work for 53,460?",
        steps: [
          "Digit sum 18 proves 3 and 9.",
          "Ending 0 proves 2, 5, and 10; 2 and 3 together prove 6.",
          "The final two digits, 60, prove divisibility by 4; the final three digits, 460, are not divisible by 8.",
        ],
        answer: "2, 3, 4, 5, 6, 9, and 10.",
      },
      {
        label: "BUILD A NUMBER",
        question: "Greatest digit in 4□5 for divisibility by 9?",
        steps: [
          "Known digit sum is 9.",
          "The missing digit may be 0 or 9.",
          "Choose the greatest valid digit.",
        ],
        answer: "495.",
      },
      {
        label: "FACTOR PAIRS",
        question: "Find every factor of 84.",
        steps: [
          "Pair 1×84, 2×42, 3×28.",
          "Continue 4×21, 6×14, 7×12.",
          "Stop once factors cross.",
        ],
        answer: "1,2,3,4,6,7,12,14,21,28,42,84.",
      },
      {
        label: "REPAIR AN ERROR",
        question: "“24 ÷ 0 = 0.”",
        steps: [
          "Check the claim by multiplication.",
          "0×0 is 0, not 24.",
          "No possible quotient works.",
        ],
        answer: "24 ÷ 0 is undefined.",
      },
    ],
    vocabulary: [
      {
        term: "Digit sum",
        definition: "The sum of all digits in a whole number.",
        example: "The digit sum of 4,572 is 18.",
      },
      {
        term: "Divisor",
        definition: "The number a dividend is divided by.",
        example: "In 24÷6, the divisor is 6.",
      },
      {
        term: "Dividend",
        definition: "The total being divided.",
        example: "In 24÷6, the dividend is 24.",
      },
      {
        term: "Factor pair",
        definition: "Two whole numbers whose product is the target.",
        example: "7 and 12 are a factor pair of 84.",
      },
      {
        term: "Undefined",
        definition: "A result that does not name one mathematical value.",
        example: "18÷0 is undefined.",
      },
    ],
    explore: {
      title: "Digit-Sum Detective & Zero-Group Simulator",
      launch: "Gather evidence strong enough to convince a skeptic.",
      phases: [
        {
          title: "Collect evidence",
          instruction:
            "Choose a run of numbers and compare each remainder with its digit-sum remainder.",
          target: "Record one pattern for 3 and one for 9.",
        },
        {
          title: "Build and break",
          instruction:
            "Construct numbers that meet “3 not 9,” “9,” and “6” conditions.",
          target: "Create two valid numbers.",
        },
        {
          title: "Sort the evidence",
          instruction:
            "Classify generated numbers using 2-and-3 overlap and 4-by-9 categories.",
          target: "Explain what every overlap number shares.",
        },
        {
          title: "Zero-group test",
          instruction:
            "Compare 18÷3, 0÷3, 18÷0, and 0÷0 with counters and multiplication.",
          target: "Write two sentences explaining both zero cases.",
        },
      ],
      reflection: [
        "Why does the digit sum work?",
        "Why is 6 an AND rule?",
        "How do 18÷0 and 0÷0 fail for different reasons?",
      ],
    },
    practice: [
      q(
        "Is 4,713 divisible by 3, 9, both, or neither?",
        ["3 only", "9 only", "both", "neither"],
        2,
        "Digit sum 18 passes both.",
        "Add every digit.",
      ),
      q(
        "Is 2,418 divisible by 6?",
        ["Yes", "No"],
        0,
        "It is even and digit sum 15 is divisible by 3.",
        "A 6-test needs two true statements.",
      ),
      q(
        "Which listed divisors work for 18,270?",
        ["2,3,5,6,9,10", "2,3,4,5,6,8,9,10", "3,5,9", "2,5,10"],
        0,
        "Each selected rule has direct evidence.",
        "Test each rule separately.",
      ),
      q(
        "Where does 108 belong for sets 6 and 9?",
        ["6 only", "9 only", "both", "neither"],
        2,
        "108 is divisible by both 6 and 9.",
        "Use digit sum, then evenness.",
      ),
      q(
        "Which digits make 7□2 divisible by 9?",
        ["0 or 9", "3 or 6", "0 only", "9 only"],
        0,
        "7+□+2 must be a multiple of 9.",
        "The known sum is 9.",
      ),
      q(
        "Which is the complete factor list of 72?",
        [
          "1,2,3,4,6,8,9,12,18,24,36,72",
          "1,2,3,4,6,8,9,12",
          "2,3,4,6,8,9",
          "1,2,4,8,9,18,36,72",
        ],
        0,
        "Factor pairs must include both partners.",
        "Build factor pairs from 1 upward.",
      ),
      q(
        "“Divisible by 9 means divisible by 6.”",
        ["Always", "Sometimes", "Never"],
        1,
        "18 supports it; 27 is a counterexample.",
        "Find one example and one counterexample.",
      ),
      q(
        "Why is 35÷0 undefined?",
        [
          "The answer is 0",
          "No q makes 0q=35",
          "The answer is infinity",
          "35 is odd",
        ],
        1,
        "Zero groups cannot contain 35, and no multiplication check works.",
        "What must 0×q equal?",
      ),
    ],
    check: makeDivisionCheck(),
    apply: {
      title: "Festival Shipment Validator",
      scenario:
        "Choose packaging lines for festival cartons and repair an invalid zero-team setting.",
      instructions:
        "Classify each carton, choose the most restrictive valid line, repair one code, and justify a corrected plan.",
      tasks: [
        "Classify 234, 315, 468, and 1,008 for 3, 6, and 9.",
        "Choose the largest valid group size—3, 6, or 9—for each carton.",
        "Repair the code 42173□ so its digit sum is divisible by 9. Find every possible digit.",
        "Explain what is wrong with “18 items, 0 teams, 0 per team.”",
      ],
      success: [
        "Every classification has rule evidence.",
        "All valid repair digits are found.",
        "The zero error uses groups and multiplication.",
      ],
    },
    exit: [
      q(
        "Which divisors work for 6,750?",
        ["2,3,5,6,9,10", "2,3,4,5,6,8,9,10", "3,5,9", "2,5,10"],
        0,
        "Digit sum 18 and ending 50 supply the evidence.",
      ),
      q(
        "Which digit makes 31□ divisible by 9?",
        ["2", "4", "5", "9"],
        2,
        "3+1+5=9.",
      ),
      q(
        "Why is 27÷0 undefined?",
        [
          "No q makes 0q=27",
          "The quotient is 0",
          "The quotient is 27",
          "27 is not even",
        ],
        0,
        "Multiplication confirms that no quotient works.",
      ),
    ],
    readiness: [
      "At least 4/5 on Check Yourself.",
      "At least 2/3 on the exit ticket, including the zero question.",
      "Can explain one overlap and organize factor pairs.",
    ],
    next: {
      title: "Lesson 1.3 · Algebraic Expressions",
      body: "Use a letter to represent changing values in one compact rule.",
      href: "../algebraic-expressions/",
    },
  },
  {
    slug: "algebraic-expressions",
    number: "1.3",
    title: "Algebraic Expressions",
    outcome:
      "PR4 — distinguish expressions from equations (introduced); PR5 — evaluate expressions by substitution.",
    duration: "55–70 minutes",
    promise:
      "Translate situations into expressions, identify each part, and evaluate for a chosen value.",
    goals: [
      "Explain how a variable can represent changing values.",
      "Identify variables, coefficients, constants, and terms.",
      "Translate operation phrases without reversing subtraction or division.",
      "Substitute values and follow order of operations.",
    ],
    prerequisites: [
      "Whole-number operations and order of operations.",
      "A rule can describe many numbers, as in Lesson 1.2.",
    ],
    bigIdeas: [
      {
        title: "Variables can vary",
        body: "A letter may represent any value allowed by the situation.",
      },
      {
        title: "Juxtaposition means multiplication",
        body: "7n means 7 × n, not 7+n and not a two-digit number.",
      },
      {
        title: "Order matters",
        body: "n−4 differs from 4−n, and 2(n−5) differs from 2n−5.",
      },
      {
        title: "Expressions name values",
        body: "They do not claim that two quantities are equal.",
      },
    ],
    understand: [
      {
        title: "Expression anatomy",
        body: "Terms are separated by addition or subtraction. A coefficient multiplies a variable; a constant stands alone.",
        model: "5n+8: coefficient 5, variable n, constant 8.",
        mistake: "Keep the sign with a constant term.",
      },
      {
        title: "Translate phrases",
        body: "Follow the described action and protect grouped actions with parentheses.",
        model: "Subtract 4, then triple → 3(n−4).",
        mistake: "“Subtracted from” reverses the written order.",
      },
      {
        title: "Substitute",
        body: "Replace every copy of the variable with its value, using parentheses.",
        model: "4x+2x−3 at x=5 → 20+10−3=27.",
        mistake: "Do not replace only one occurrence.",
      },
      {
        title: "Interpret",
        body: "The evaluated value should include the context and unit.",
        model: "4h+6 at h=3 gives a rental cost of $18.",
        mistake: "A bare number may not answer a contextual question.",
      },
    ],
    examples: [
      {
        label: "ANATOMY",
        question: "Describe 7p+9.",
        steps: [
          "7 multiplies p.",
          "p is the changing quantity.",
          "9 is the constant term.",
        ],
        answer: "Coefficient 7, variable p, constant 9.",
      },
      {
        label: "ORDER-SENSITIVE WORDS",
        question: "Five less than twice a number.",
        steps: ["Twice the number is 2n.", "Five less means subtract 5."],
        answer: "2n−5.",
      },
      {
        label: "GROUPED OPERATIONS",
        question: "Subtract 4, then triple the result.",
        steps: [
          "First result: n−4.",
          "Triple the entire result: 3(n−4).",
          "At n=10 the value is 18.",
        ],
        answer: "3(n−4), not 3n−4.",
      },
      {
        label: "CONTEXT",
        question: "$6 fee plus $4 per hour.",
        steps: [
          "The repeated amount is 4h.",
          "The fixed amount is 6.",
          "For h=3: 12+6.",
        ],
        answer: "4h+6; $18.",
      },
    ],
    vocabulary: [
      {
        term: "Expression",
        definition: "A mathematical phrase that names a value.",
        example: "4n+3",
      },
      {
        term: "Variable",
        definition: "A symbol that represents one or more values.",
        example: "n in 4n+3",
      },
      {
        term: "Coefficient",
        definition: "The number multiplying a variable.",
        example: "4 in 4n+3",
      },
      {
        term: "Constant term",
        definition: "A term without a variable.",
        example: "3 in 4n+3",
      },
      {
        term: "Substitute",
        definition: "Replace a variable with a value.",
        example: "n=5 gives 4(5)+3.",
      },
      {
        term: "Evaluate",
        definition: "Find the value of an expression.",
        example: "4(5)+3=23.",
      },
    ],
    explore: {
      title: "Expression Composer",
      launch:
        "Two youth jobs pay differently. Build a rule and decide when each is better.",
      phases: [
        {
          title: "Generate evidence",
          instruction: "Adjust shifts from 0 to 12 and record both totals.",
          target: "Record four comparison rows.",
        },
        {
          title: "Compose rules",
          instruction:
            "Build Plan A 18s and Plan B 30+12s from operation blocks.",
          target: "Explain both coefficients and the constant.",
        },
        {
          title: "Predict and evaluate",
          instruction:
            "Predict totals before calculating for 2, 5, 8, and 12 shifts.",
          target: "Check all four rows.",
        },
        {
          title: "Make a decision",
          instruction: "Find when the plans match and where each is greater.",
          target: "Recommend a plan with a condition.",
        },
      ],
      reflection: [
        "What does each coefficient mean?",
        "Why is 30 a constant?",
        "Why can the better plan change?",
      ],
    },
    practice: [
      q(
        "Identify coefficient, variable, constant in 6t+11.",
        ["6, t, 11", "t, 6, 11", "6, 11, t", "11, t, 6"],
        0,
        "Each part has a different role.",
        "Locate what multiplies t.",
      ),
      q(
        "Write “nine times a number.”",
        ["9+n", "9n", "n−9", "n/9"],
        1,
        "A coefficient beside a variable means multiplication.",
        "Use compact multiplication notation.",
      ),
      q(
        "Write “four less than a number.”",
        ["4−n", "n−4", "4n", "n+4"],
        1,
        "Start with the number, then remove 4.",
        "Follow the word order by meaning.",
      ),
      q(
        "Write “a number subtracted from 20.”",
        ["n−20", "20−n", "20n", "n+20"],
        1,
        "The number is removed from 20.",
        "What is the starting amount?",
      ),
      q(
        "Halve a number, then add 7.",
        ["2n+7", "n/2+7", "n/(2+7)", "7n/2"],
        1,
        "Divide n by 2, then add 7.",
        "Build the operation path.",
      ),
      q(
        "Evaluate 5x+3 for x=8.",
        ["40", "43", "48", "56"],
        1,
        "5(8)+3=43.",
        "Substitute with parentheses.",
      ),
      q(
        "Evaluate 2(n−3) for n=11.",
        ["16", "19", "22", "8"],
        0,
        "2(8)=16.",
        "Complete the parentheses first.",
      ),
      q(
        "A club charges $15 plus $4 per visit. Cost for 6 visits?",
        ["$24", "$34", "$39", "$90"],
        2,
        "4(6)+15=$39.",
        "Separate repeated and fixed costs.",
      ),
    ],
    check: makeExpressionCheck(),
    apply: {
      title: "Youth Program Pay Choice",
      scenario:
        "Compare Plan North at $22 per session with Plan River at $40 plus $16 per session.",
      instructions:
        "Write both expressions, compare at several inputs, and recommend a plan for seven sessions.",
      tasks: [
        "Build 22s and 40+16s.",
        "Evaluate both at 2, 6, 7, and 10 sessions.",
        "Recommend a plan at 7 sessions and say when it might change.",
        "Repair the incorrect rule 40+16+s.",
      ],
      success: [
        "Both expressions match the situation.",
        "Every comparison shows substitution.",
        "The recommendation includes a condition.",
      ],
    },
    exit: [
      q(
        "In 9p+4, which list is coefficient, variable, constant?",
        ["9,p,4", "p,9,4", "4,p,9", "9,4,p"],
        0,
        "9 multiplies p; 4 stands alone.",
      ),
      q("Evaluate 3n+8 for n=7.", ["21", "29", "32", "77"], 1, "3(7)+8=29."),
      q(
        "Subtract 5 from a number, then double.",
        ["2n−5", "2(n−5)", "n−10", "5−2n"],
        1,
        "The whole first result must be doubled.",
      ),
    ],
    readiness: [
      "At least 4/5 on Check Yourself.",
      "At least 2/3 on the exit ticket, including the grouped translation.",
      "Can explain variable, coefficient, and constant in context.",
    ],
    next: {
      title: "Lesson 1.4 · Relationships in Patterns",
      body: "Turn a growing design into a rule using its figure number.",
      href: "../relationships-in-patterns/",
    },
  },
  ...(
    [
      "relationships-in-patterns",
      "patterns-tables",
      "graphing-relations",
    ] as const
  ).map((slug, index): LessonSpec => {
    const specs = [
      {
        number: "1.4",
        title: "Relationships in Patterns",
        outcome:
          "PR1 — demonstrate an understanding of oral and written patterns and their relations.",
        promise:
          "Connect a growing visual pattern to its term number and write a rule that predicts any term.",
        goals: [
          "Identify a constant change in a visual pattern.",
          "Separate the growing part from the fixed part.",
          "Write and test a rule using the term number.",
          "Use a rule to predict and justify distant terms.",
        ],
        prior: [
          "Expressions and substitution from Lesson 1.3.",
          "Counting and extending visual patterns.",
        ],
        big: [
          [
            "Term number is the input",
            "The figure position and the number of objects are different quantities.",
          ],
          [
            "Growth and fixed parts work together",
            "In 3n+2, 3n grows while 2 stays fixed.",
          ],
          [
            "A rule predicts beyond the picture",
            "Substitution can find any term without drawing every earlier one.",
          ],
          [
            "Different designs can share a relation",
            "Appearance may change while input-output values stay the same.",
          ],
        ],
        under: [
          [
            "Build a table",
            "Record term number n and number of tiles.",
            "Figures 1–4: 5, 8, 11, 14.",
            "Do not label the first term as n=0 unless the context says so.",
          ],
          [
            "Find the change",
            "A constant first difference becomes the coefficient.",
            "Add 3 each step → start with 3n.",
            "The common difference is not the full rule.",
          ],
          [
            "Find the fixed part",
            "Compare 3n with an actual term.",
            "At n=1, 3n=3 but the figure has 5, so add 2.",
            "Do not use the first term as the coefficient.",
          ],
          [
            "Verify and predict",
            "Test at least two known terms before using the rule.",
            "3(4)+2=14, then 3(20)+2=62.",
            "One matching term is not enough evidence.",
          ],
        ],
        examples: [
          [
            "SEE THE STRUCTURE",
            "Figures contain 4, 7, 10, 13 tiles.",
            [
              "The change is +3.",
              "Start with 3n.",
              "At n=1, add 1 to reach 4.",
            ],
            "Rule 3n+1.",
          ],
          [
            "DISTANT TERM",
            "How many tiles in figure 25 for 3n+1?",
            ["Substitute n=25.", "3(25)+1=76."],
            "76 tiles.",
          ],
          [
            "WORK BACKWARD",
            "Could 50 be a term of 3n+2?",
            ["Test nearby n values.", "3(16)+2=50."],
            "Yes, term 16.",
          ],
          [
            "COMPARE",
            "Do 2n+5 and 3n+1 ever match?",
            ["Test a short table.", "At n=4 both equal 13."],
            "They match at term 4.",
          ],
        ],
        vocab: [
          [
            "Term number",
            "The position of a term in a pattern.",
            "n=4 means the fourth figure.",
          ],
          [
            "Term value",
            "The quantity at a given position.",
            "The fourth value may be 14.",
          ],
          [
            "Constant difference",
            "The equal change between consecutive values.",
            "5,8,11 changes by 3.",
          ],
          ["Rule", "An expression connecting term number and value.", "3n+2."],
        ],
        explore: {
          title: "Growing Design Builder",
          launch: "Build, measure, and defend a rule for a design that grows.",
          phases: [
            [
              "Build figures",
              "Add one repeated growth chunk at a time.",
              "Create figures 1–4.",
            ],
            [
              "Mark structure",
              "Label the repeating groups and fixed tiles.",
              "Describe growth and fixed parts.",
            ],
            [
              "Write the rule",
              "Compose an expression and test it on two figures.",
              "Pass two verification checks.",
            ],
            [
              "Challenge the rule",
              "Predict figure 10 and decide whether a target tile count appears.",
              "Justify without drawing all figures.",
            ],
          ],
        },
        practice: [
          q(
            "Values are 5,8,11,14. What is the constant difference?",
            ["2", "3", "5", "8"],
            1,
            "Each value increases by 3.",
            "Subtract consecutive values.",
          ),
          q(
            "A pattern grows by 4 and has rule 4n+2. What is term 3?",
            ["10", "12", "14", "18"],
            2,
            "4(3)+2=14.",
            "Substitute n=3.",
          ),
          q(
            "Which rule gives 6,10,14,18 for n=1,2,3,4?",
            ["4n+2", "4n−2", "6n", "2n+4"],
            0,
            "4(1)+2=6 and the change is 4.",
            "Use change, then fixed part.",
          ),
          q(
            "What is term 12 of 5n+1?",
            ["56", "60", "61", "66"],
            2,
            "5(12)+1=61.",
            "Replace n with 12.",
          ),
          q(
            "Which statement best explains 3n+2?",
            [
              "Add 3 once, then double",
              "Three per term plus two fixed",
              "Two per term plus three fixed",
              "Start at 3 and add n",
            ],
            1,
            "The coefficient is growth per term.",
            "Interpret each part.",
          ),
          q(
            "Could 42 be a term of 4n+2?",
            ["Yes, n=10", "Yes, n=11", "No", "Only if n=0"],
            0,
            "4(10)+2=42.",
            "Work backward by testing the proposed n.",
          ),
          q(
            "Two designs both produce 7,11,15. What can you conclude?",
            [
              "They look identical",
              "They share the same relation for those terms",
              "They must use the same colours",
              "They have no rule",
            ],
            1,
            "Values can match even if appearances differ.",
            "Separate appearance from quantity.",
          ),
          q(
            "A student says +3 means the rule is n+3 for 4,7,10. Repair it.",
            ["3n+1", "n+3", "4n+3", "3n+4"],
            0,
            "The change gives coefficient 3; the fixed part is 1.",
            "Test n=1.",
          ),
        ],
        bank: linearBank("pattern"),
        apply: {
          title: "Community Clean-up Plans",
          scenario:
            "Compare two teams whose cleaned sections follow different growing patterns.",
          tasks: [
            "Build a rule for each team from figures and a table.",
            "Predict totals at stages 8 and 20.",
            "Find a stage where the plans match, if one exists.",
            "Recommend a plan and justify the time range.",
          ],
        },
        exit: [
          q(
            "What is the change in 7,11,15,19?",
            ["3", "4", "7", "11"],
            1,
            "Every term rises by 4.",
          ),
          q(
            "Which rule gives 7,11,15,19?",
            ["4n+3", "3n+4", "4n−3", "7n"],
            0,
            "At n=1, 4+3=7.",
          ),
          q("Term 15 of 4n+3 is…", ["60", "63", "67", "75"], 1, "4(15)+3=63."),
        ],
        next: [
          "Lesson 1.5 · Patterns and Relationships in Tables",
          "Organize inputs and outputs so a hidden relation becomes visible.",
          "../patterns-tables/",
        ],
      },
      {
        number: "1.5",
        title: "Patterns and Relationships in Tables",
        outcome:
          "PR2 — create a table of values from a relation and use it to describe and predict.",
        promise:
          "Create, complete, and analyze tables of values from input-output rules.",
        goals: [
          "Identify independent and dependent variables.",
          "Generate outputs from a rule.",
          "Infer a rule from a table.",
          "Use forward and reverse reasoning to solve problems.",
        ],
        prior: [
          "Expressions and substitution.",
          "Term-number rules from Lesson 1.4.",
        ],
        big: [
          [
            "Inputs are chosen",
            "The independent variable can be selected within the context.",
          ],
          [
            "Outputs depend on inputs",
            "A rule determines each dependent value.",
          ],
          [
            "Tables organize relations",
            "Rows make change and correspondence visible.",
          ],
          [
            "A rule needs more than one match",
            "Test it against every known pair.",
          ],
        ],
        under: [
          [
            "Read a table",
            "Keep input and output roles consistent.",
            "x: 1,2,3; y: 6,9,12.",
            "Do not swap columns mid-table.",
          ],
          [
            "Generate outputs",
            "Substitute each input into the same rule.",
            "y=3x+3 gives 6,9,12.",
            "Apply both operations.",
          ],
          [
            "Infer a rule",
            "Use output change and a known pair.",
            "Change +2 gives 2x; pair (1,5) requires +3.",
            "The first output is not always the constant.",
          ],
          [
            "Reverse the machine",
            "Find the input that produces a target output.",
            "For y=4x+1 and y=21, x=5.",
            "Check by forward substitution.",
          ],
        ],
        examples: [
          [
            "COMPLETE A TABLE",
            "Use y=2x+5 for x=0,2,4.",
            ["Substitute each input.", "Outputs are 5,9,13."],
            "Pairs (0,5),(2,9),(4,13).",
          ],
          [
            "FIND A RULE",
            "Inputs 1,2,3; outputs 7,11,15.",
            ["Outputs rise by 4.", "Begin 4x.", "At x=1 add 3."],
            "y=4x+3.",
          ],
          [
            "WORK BACKWARD",
            "When does 3x+2 give 20?",
            ["Try x=6.", "3(6)+2=20."],
            "Input 6.",
          ],
          [
            "ERROR ANALYSIS",
            "A rule matches only one row. Is that enough?",
            ["Different rules may share one point.", "Test every row."],
            "One match is insufficient.",
          ],
        ],
        vocab: [
          ["Relation", "A rule connecting two quantities.", "y=3x+2."],
          [
            "Independent variable",
            "The input that is chosen.",
            "Number of refills.",
          ],
          [
            "Dependent variable",
            "The output determined by the input.",
            "Total litres.",
          ],
          [
            "Table of values",
            "Organized input-output pairs.",
            "Rows (1,5),(2,8).",
          ],
        ],
        explore: {
          title: "Mystery Machine Forensics",
          launch:
            "Collect input-output evidence and identify a hidden machine rule.",
          phases: [
            [
              "Probe the machine",
              "Choose four inputs and predict outputs before revealing them.",
              "Record four pairs.",
            ],
            [
              "Compare changes",
              "Sort machines by multiply-then-add structure.",
              "Identify a coefficient candidate.",
            ],
            [
              "Name the rule",
              "Build a rule and test every recorded pair.",
              "Pass all evidence rows.",
            ],
            [
              "Reverse challenge",
              "Find inputs for two target outputs.",
              "Verify by sending them forward.",
            ],
          ],
        },
        practice: [
          q(
            "For y=3x+2, output when x=4?",
            ["9", "12", "14", "18"],
            2,
            "3(4)+2=14.",
            "Follow the rule.",
          ),
          q(
            "Which is the independent variable in a cost table?",
            ["Total cost", "Number purchased", "Dollar sign", "Rule"],
            1,
            "The number purchased is chosen.",
            "Ask what can be selected first.",
          ),
          q(
            "Complete y=5x−1 at x=3.",
            ["10", "14", "15", "16"],
            1,
            "5(3)−1=14.",
            "Substitute carefully.",
          ),
          q(
            "Inputs 1,2,3 give 5,8,11. Which rule?",
            ["3x+2", "2x+3", "5x", "3x−2"],
            0,
            "The output change is 3 and x=1 needs +2.",
            "Use change then fixed part.",
          ),
          q(
            "For y=4x+1, which input gives 21?",
            ["4", "5", "6", "20"],
            1,
            "4(5)+1=21.",
            "Test the choices forward.",
          ),
          q(
            "Which pair belongs to y=2x+7?",
            ["(3,10)", "(3,13)", "(13,3)", "(2,7)"],
            1,
            "2(3)+7=13.",
            "Ordered pair is input, output.",
          ),
          q(
            "A rule matches one table row. What should happen next?",
            [
              "Accept it",
              "Test every known pair",
              "Change the table",
              "Ignore the row",
            ],
            1,
            "Several rules may share a single pair.",
            "Gather more evidence.",
          ),
          q(
            "Outputs 11,21,31 for inputs 5,10,15 follow…",
            ["2x+1", "x+6", "3x−4", "x+1"],
            0,
            "The output rises 10 when input rises 5, so rate 2; then add 1.",
            "Compare paired changes.",
          ),
        ],
        bank: linearBank("table"),
        apply: {
          title: "Refill Station Supply Plan",
          scenario:
            "A refill station uses relations to predict soap and water supplies.",
          tasks: [
            "Complete two tables from their rules.",
            "Infer a missing rule from measured pairs.",
            "Use reverse reasoning for a target supply.",
            "Recommend a schedule and explain your evidence.",
          ],
        },
        exit: [
          q(
            "For y=3x+4, output at x=5?",
            ["15", "19", "20", "23"],
            1,
            "3(5)+4=19.",
          ),
          q(
            "Pairs (1,6),(2,10),(3,14) follow…",
            ["4x+2", "2x+4", "6x", "4x−2"],
            0,
            "The change is 4 and the fixed part is 2.",
          ),
          q(
            "For y=5x+2, which input gives 27?",
            ["4", "5", "6", "7"],
            1,
            "5(5)+2=27.",
          ),
        ],
        next: [
          "Lesson 1.6 · Graphing Relations",
          "Turn every table row into a point and interpret the graph.",
          "../graphing-relations/",
        ],
      },
      {
        number: "1.6",
        title: "Graphing Relations",
        outcome:
          "PR2 — graph and analyze relations from tables of values, draw conclusions, and solve problems.",
        promise:
          "Graph tables of values and use the shape and coordinates to answer questions.",
        goals: [
          "Write ordered pairs as input then output.",
          "Choose and label a useful scale.",
          "Plot a relation accurately.",
          "Interpret and compare points and trends in context.",
        ],
        prior: [
          "Tables of values from Lesson 1.5.",
          "First-quadrant coordinate knowledge.",
        ],
        big: [
          [
            "Each row becomes one point",
            "Input is the horizontal coordinate; output is vertical.",
          ],
          [
            "Axes need meaning",
            "Labels, units, and scale make a graph interpretable.",
          ],
          [
            "A graph shows the whole relation",
            "Direction and steepness reveal how quantities change.",
          ],
          [
            "Points keep context",
            "Discrete situations should not be joined as if all in-between inputs are possible.",
          ],
        ],
        under: [
          [
            "Order coordinates",
            "Write (input, output) or (x,y).",
            "Table row x=2,y=9 → (2,9).",
            "Do not reverse the coordinates.",
          ],
          [
            "Design axes",
            "Use equal intervals and include every value.",
            "x by 1, y by 5 may fit the data.",
            "A scale can skip numbers only with clear equal intervals.",
          ],
          [
            "Plot precisely",
            "Move along x, then up y.",
            "(3,11) means right 3, up 11.",
            "Do not treat grid squares as unlabeled units.",
          ],
          [
            "Analyze",
            "Read coordinates and compare change.",
            "A steeper rise means more output per input interval.",
            "Do not extend beyond the data without stating it is a prediction.",
          ],
        ],
        examples: [
          [
            "TABLE TO GRAPH",
            "Graph y=3x+2 for x=0–3.",
            [
              "Make pairs (0,2),(1,5),(2,8),(3,11).",
              "Label axes and choose a scale.",
              "Plot each pair.",
            ],
            "Four points represent the relation.",
          ],
          [
            "READ A POINT",
            "What does (4,18) mean on a cost graph?",
            ["First coordinate is quantity.", "Second coordinate is cost."],
            "Four items cost $18.",
          ],
          [
            "COMPARE",
            "Which plan grows faster?",
            [
              "Compare equal horizontal intervals.",
              "The greater vertical rise has the greater rate.",
            ],
            "Use slope-like change language, not a formal slope formula.",
          ],
          [
            "DISCRETE DATA",
            "Should points be connected for whole tickets?",
            [
              "Partial tickets are not allowed.",
              "Only whole-number inputs are meaningful.",
            ],
            "Leave the points discrete.",
          ],
        ],
        vocab: [
          ["Ordered pair", "Two coordinates written (x,y).", "(3,11)."],
          [
            "Horizontal axis",
            "The left-right axis, usually the input.",
            "x-axis.",
          ],
          ["Vertical axis", "The up-down axis, usually the output.", "y-axis."],
          [
            "Scale",
            "The value represented by equal intervals.",
            "Count y by 5s.",
          ],
          [
            "Discrete",
            "Separate allowed points rather than every in-between value.",
            "Whole tickets.",
          ],
        ],
        explore: {
          title: "Graph Story Studio",
          launch:
            "Build a graph, then choose the story its points can honestly tell.",
          phases: [
            [
              "Stage the axes",
              "Choose labels, units, and scales for a table.",
              "Fit every point without crowding.",
            ],
            [
              "Plot the evidence",
              "Place points from ordered pairs.",
              "Reach full coordinate accuracy.",
            ],
            [
              "Match the story",
              "Compare three contexts with the same or different graphs.",
              "Justify using coordinates.",
            ],
            [
              "Interrogate the graph",
              "Read, compare, and cautiously predict values.",
              "Label prediction versus known data.",
            ],
          ],
        },
        practice: [
          q(
            "Table row x=2,y=9 becomes…",
            ["(9,2)", "(2,9)", "2+9", "[2;9]"],
            1,
            "Ordered pairs use input first.",
            "Read the column roles.",
          ),
          q(
            "Which axis usually shows the independent variable?",
            ["vertical", "horizontal", "both", "neither"],
            1,
            "The input is usually horizontal.",
            "Think x-axis.",
          ),
          q(
            "Which point lies on y=3x+2 at x=4?",
            ["(4,14)", "(14,4)", "(4,12)", "(3,2)"],
            0,
            "3(4)+2=14.",
            "Find output, then order coordinates.",
          ),
          q(
            "A y-axis counts 0,5,10,15. What is its scale?",
            ["1", "3", "5", "15"],
            2,
            "Equal intervals represent 5.",
            "Compare adjacent labels.",
          ),
          q(
            "On a ticket graph, should whole-ticket points be connected?",
            [
              "Yes, always",
              "No, inputs are discrete",
              "Only above 10",
              "Scale decides",
            ],
            1,
            "Partial tickets are not meaningful.",
            "Consider the context.",
          ),
          q(
            "Point (6,27) on hours-cost means…",
            [
              "$6 for 27 hours",
              "6 hours cost $27",
              "27 hours cost $6",
              "rate is 33",
            ],
            1,
            "Read the axis labels in coordinate order.",
            "Input first, output second.",
          ),
          q(
            "Which graph grows faster?",
            [
              "The one with greater vertical rise for equal horizontal change",
              "The one starting higher",
              "The one with more points",
              "The one coloured darker",
            ],
            0,
            "Compare change over the same input interval.",
            "Ignore decoration.",
          ),
          q(
            "A value beyond the table is shown. It should be labelled…",
            ["fact", "prediction", "error", "axis"],
            1,
            "It extends the known data.",
            "Distinguish evidence from extrapolation.",
          ),
        ],
        bank: linearBank("graph"),
        apply: {
          title: "Recreation Pass Decision",
          scenario:
            "Compare pay-per-visit and membership plans using tables and graphs.",
          tasks: [
            "Graph both relations with shared axes.",
            "Interpret two labelled points.",
            "Decide which plan is cheaper for 3, 8, and 12 visits.",
            "Recommend a plan and state the range where it makes sense.",
          ],
        },
        exit: [
          q(
            "Which ordered pair is x=3,y=12?",
            ["(12,3)", "(3,12)", "3,12", "(3+12)"],
            1,
            "Input comes first.",
          ),
          q(
            "Which point lies on y=4x+1 at x=5?",
            ["(5,21)", "(21,5)", "(5,20)", "(4,1)"],
            0,
            "4(5)+1=21.",
          ),
          q(
            "Why leave ticket points unconnected?",
            [
              "Colour choice",
              "Whole tickets make the relation discrete",
              "The scale is too large",
              "Graphs never use lines",
            ],
            1,
            "The context does not allow partial tickets.",
          ),
        ],
        next: [
          "Lesson 1.7 · Reading and Writing Equations",
          "Use an equals sign to turn a relation statement into a claim that can be true or false.",
          "../reading-writing-equations/",
        ],
      },
    ][index];
    return {
      slug,
      number: specs.number,
      title: specs.title,
      outcome: specs.outcome,
      duration: "50–65 minutes",
      promise: specs.promise,
      goals: specs.goals,
      prerequisites: specs.prior,
      bigIdeas: specs.big.map(([title, body]) => ({ title, body })),
      understand: specs.under.map(([title, body, model, mistake]) => ({
        title,
        body,
        model,
        mistake,
      })),
      examples: specs.examples.map(([label, question, steps, answer]) => ({
        label,
        question,
        steps,
        answer,
      })),
      vocabulary: specs.vocab.map(([term, definition, example]) => ({
        term,
        definition,
        example,
      })),
      explore: {
        title: specs.explore.title,
        launch: specs.explore.launch,
        phases: specs.explore.phases.map(([title, instruction, target]) => ({
          title,
          instruction,
          target,
        })),
        reflection: [
          "What pattern does your evidence show?",
          "How does the representation support the rule?",
          "What would convince someone who disagrees?",
        ],
      },
      practice: specs.practice,
      check: specs.bank,
      apply: {
        title: specs.apply.title,
        scenario: specs.apply.scenario,
        instructions:
          "Complete the evidence, make a decision, and justify it so another student can verify your work.",
        tasks: specs.apply.tasks,
        success: [
          "Representations agree.",
          "Calculations are shown and accurate.",
          "The decision cites mathematical evidence.",
        ],
      },
      exit: specs.exit,
      readiness: [
        "At least 4/5 on Check Yourself.",
        "At least 2/3 on the exit ticket.",
        "Can connect the lesson representation to its rule and context.",
      ],
      next: { title: specs.next[0], body: specs.next[1], href: specs.next[2] },
    } as LessonSpec;
  }),
  {
    slug: "reading-writing-equations",
    number: "1.7",
    title: "Reading and Writing Equations",
    outcome:
      "PR4 — explain the difference between an expression and an equation; translate and verify equation statements.",
    duration: "50–65 minutes",
    promise:
      "Distinguish equations from expressions and translate situations into equality statements.",
    goals: [
      "Tell an expression from an equation.",
      "Explain the meaning of the equals sign.",
      "Translate words and contexts into equations.",
      "Test whether a value makes an equation true.",
    ],
    prerequisites: [
      "Expression language from Lesson 1.3.",
      "Relations, tables, and graphs from Lessons 1.4–1.6.",
    ],
    bigIdeas: [
      {
        title: "An expression names a value",
        body: "It contains operations but no equality claim.",
      },
      {
        title: "An equation makes a claim",
        body: "The equals sign says two expressions have the same value.",
      },
      {
        title: "Equality is balanced",
        body: "Both sides can look different and still have equal values.",
      },
      {
        title: "Substitution verifies",
        body: "A value is a solution only when it makes both sides equal.",
      },
    ],
    understand: [
      {
        title: "Classify",
        body: "Look for a relation symbol and determine whether equality is claimed.",
        model: "4n+3 is an expression; 4n+3=27 is an equation.",
        mistake: "An equals sign does not mean “the answer comes next.”",
      },
      {
        title: "Read both directions",
        body: "Read = as “has the same value as.”",
        model: "12=3×4 and 3×4=12 are both true.",
        mistake: "Do not assume the more complicated side must be left.",
      },
      {
        title: "Translate",
        body: "Represent the unknown with a variable, then connect equal quantities.",
        model: "Five more than a number is 18 → n+5=18.",
        mistake: "Preserve order-sensitive language.",
      },
      {
        title: "Verify",
        body: "Substitute into both sides and compare the results.",
        model: "n=13: 13+5=18, so the equation is true.",
        mistake: "A value that works in the expression alone is not enough.",
      },
    ],
    examples: [
      {
        label: "CLASSIFY",
        question: "4x+1 versus 4x+1=21",
        steps: [
          "The first names a value.",
          "The second claims that value equals 21.",
        ],
        answer: "Expression; equation.",
      },
      {
        label: "TRANSLATE",
        question: "Three times a number plus 2 is 20.",
        steps: ["Three times n is 3n.", "Add 2.", "Use = for “is.”"],
        answer: "3n+2=20.",
      },
      {
        label: "VERIFY",
        question: "Does n=6 solve 3n+2=20?",
        steps: ["LHS: 3(6)+2=20.", "RHS: 20.", "Both sides match."],
        answer: "Yes.",
      },
      {
        label: "REPAIR",
        question: "A student writes n+8 for “a number plus 8 equals 25.”",
        steps: [
          "The operations are present.",
          "The equality claim is missing.",
        ],
        answer: "n+8=25.",
      },
    ],
    vocabulary: [
      {
        term: "Equation",
        definition: "A statement that two expressions have equal value.",
        example: "3n+2=20.",
      },
      {
        term: "Equals sign",
        definition: "A relation symbol meaning “has the same value as.”",
        example: "12=7+5.",
      },
      {
        term: "Left-hand side",
        definition: "The expression left of the equals sign.",
        example: "3n+2.",
      },
      {
        term: "Right-hand side",
        definition: "The expression right of the equals sign.",
        example: "20.",
      },
      {
        term: "Solution",
        definition: "A value that makes an equation true.",
        example: "n=6 for 3n+2=20.",
      },
    ],
    explore: {
      title: "Equation or Expression? Case Files",
      launch:
        "Examine mathematical evidence and decide whether each statement names a value or makes an equality claim.",
      phases: [
        {
          title: "Sort the files",
          instruction: "Classify cards as expression, equation, or neither.",
          target: "Explain the feature that decides each case.",
        },
        {
          title: "Repair the statement",
          instruction:
            "Add, remove, or reposition a relation symbol to match the context.",
          target: "Repair three statements.",
        },
        {
          title: "Translate testimony",
          instruction: "Build equations from original word and picture clues.",
          target: "Preserve every operation and the equality.",
        },
        {
          title: "Verify a suspect",
          instruction: "Test proposed values on both sides.",
          target: "Accept or reject with LHS/RHS evidence.",
        },
      ],
      reflection: [
        "What information does an equals sign add?",
        "Can equal expressions look different?",
        "What makes a proposed value a solution?",
      ],
    },
    practice: [
      q(
        "Which is an equation?",
        ["4n+3", "4n+3=27", "n−5", "7x"],
        1,
        "It makes an equality claim.",
        "Look for a meaningful equals sign.",
      ),
      q(
        "What does = mean?",
        [
          "calculate next",
          "has the same value as",
          "approximately",
          "greater than",
        ],
        1,
        "Equality compares two values.",
        "Read both sides.",
      ),
      q(
        "Translate “a number plus 7 is 19.”",
        ["n+7", "n+7=19", "19+7=n", "7n=19"],
        1,
        "“Is” becomes an equality relation.",
        "Do not omit the right side.",
      ),
      q(
        "Translate “five times a number equals 35.”",
        ["5+n=35", "5n=35", "n/5=35", "35n=5"],
        1,
        "Five times n is 5n.",
        "Use coefficient notation.",
      ),
      q(
        "Does n=4 solve 3n+2=14?",
        ["Yes", "No"],
        0,
        "3(4)+2=14.",
        "Evaluate the left side.",
      ),
      q(
        "Does x=5 solve 2x+1=12?",
        ["Yes", "No"],
        1,
        "2(5)+1=11, not 12.",
        "Compare both sides.",
      ),
      q(
        "Repair n+8 for “n plus 8 equals 25.”",
        ["n+8=25", "n=8+25", "n+25=8", "8n=25"],
        0,
        "The equals sign and result were missing.",
        "Represent the full claim.",
      ),
      q(
        "Which equality is true?",
        ["8+4=10", "7×3=20", "18=9+9", "24÷6=5"],
        2,
        "Both sides of 18=9+9 equal 18.",
        "Evaluate each side.",
      ),
    ],
    check: equationBank(),
    apply: {
      title: "School Event Equation Audit",
      scenario:
        "Event planners have mixed expressions, equations, and incomplete claims in a budget sheet.",
      instructions:
        "Classify every line, repair incomplete statements, verify proposed values, and explain which plan is valid.",
      tasks: [
        "Label six entries as expression, equation, or neither.",
        "Repair two missing or misused equals signs.",
        "Translate two budget situations into equations.",
        "Verify proposed solutions using LHS and RHS.",
      ],
      success: [
        "Classifications name the deciding feature.",
        "Translations preserve the context.",
        "Verification evaluates both sides.",
      ],
    },
    exit: [
      q(
        "Which is an expression?",
        ["3n+4", "3n+4=19", "n=5", "12=12"],
        0,
        "It names a value without claiming equality.",
      ),
      q(
        "Translate “twice a number is 18.”",
        ["2+n", "2n=18", "n/2=18", "18n=2"],
        1,
        "Twice n is 2n; “is” means equals.",
      ),
      q("Does n=5 solve 3n+4=19?", ["Yes", "No"], 0, "3(5)+4=19."),
    ],
    readiness: [
      "At least 4/5 on Check Yourself.",
      "At least 2/3 on the exit ticket.",
      "Can explain equality and verify both sides.",
    ],
    next: {
      title: "Lesson 1.8 · Solving Equations Using Algebra Tiles",
      body: "Use balance models to find an unknown while keeping equality true.",
      href: "../equations-algebra-tiles/",
    },
  },
  {
    slug: "equations-algebra-tiles",
    number: "1.8",
    title: "Solving Equations Using Algebra Tiles",
    outcome:
      "PR3 — demonstrate preservation of equality (developed); PR6 — model and solve x + a = b problems (introduced); PR7 — model and solve ax = b problems (introduced).",
    duration: "55–70 minutes",
    promise:
      "Model and solve introductory whole-number equations while preserving equality.",
    goals: [
      "Represent a variable and constants with algebra tiles.",
      "Explain why the same move must be made to both sides.",
      "Solve addition and multiplication equations.",
      "Verify a solution by substitution.",
    ],
    prerequisites: [
      "Equation and equality meaning from Lesson 1.7.",
      "Whole-number inverse operations.",
      "Expressions, tables, and graphs as representations of relations.",
    ],
    bigIdeas: [
      {
        title: "Equality behaves like balance",
        body: "Changing one side only can make a true equation false.",
      },
      {
        title: "Inverse operations isolate",
        body: "Remove addition with subtraction; undo multiplication with division.",
      },
      {
        title: "Tiles make structure visible",
        body: "A variable tile represents one unknown value; unit tiles represent ones.",
      },
      {
        title: "Verification closes the loop",
        body: "Substitute the solution and compare the original sides.",
      },
    ],
    understand: [
      {
        title: "Build the equation",
        body: "Place identical-value models on opposite sides of a balance.",
        model: "x+4=11 uses one x-tile and four units opposite eleven units.",
        mistake: "Do not treat x as one unit tile.",
      },
      {
        title: "Remove equal amounts",
        body: "For x+c=t, remove c unit tiles from both sides.",
        model: "x+4=11 → x=7.",
        mistake: "Removing from one side breaks equality.",
      },
      {
        title: "Partition equal groups",
        body: "For ax=t, divide both sides into a equal groups.",
        model: "3x=18 → x=6.",
        mistake: "Subtracting 3 does not undo multiplication by 3.",
      },
      {
        title: "Verify and compare",
        body: "Check by substitution and connect the model to arithmetic reasoning.",
        model: "3(6)=18, so x=6 works.",
        mistake: "A correct-looking tile move still needs a numerical check.",
      },
    ],
    examples: [
      {
        label: "ADDITION MODEL",
        question: "Solve x+5=13.",
        steps: [
          "Remove five unit tiles from each side.",
          "Eight units remain opposite x.",
          "Check 8+5=13.",
        ],
        answer: "x=8.",
      },
      {
        label: "MULTIPLICATION MODEL",
        question: "Solve 4x=28.",
        steps: [
          "Partition both sides into four equal groups.",
          "Each x matches seven units.",
          "Check 4(7)=28.",
        ],
        answer: "x=7.",
      },
      {
        label: "UNKNOWN ON RIGHT",
        question: "Solve 19=2x+5.",
        steps: [
          "Equality works in either direction.",
          "Remove 5 from both sides: 14=2x.",
          "Divide into two groups.",
        ],
        answer: "x=7.",
      },
      {
        label: "ERROR ANALYSIS",
        question: "A student removes 4 only from x+4=11.",
        steps: [
          "The left becomes x.",
          "The right must also decrease by 4.",
          "Balance then gives x=7.",
        ],
        answer: "Apply the same move to both sides.",
      },
    ],
    vocabulary: [
      {
        term: "Algebra tile",
        definition: "A model piece representing a variable or a unit.",
        example: "One x-tile and four units model x+4.",
      },
      {
        term: "Balance",
        definition: "A model showing equal values on two sides.",
        example: "x+4 balances 11.",
      },
      {
        term: "Inverse operation",
        definition: "An operation that undoes another.",
        example: "Subtraction undoes addition.",
      },
      {
        term: "Isolate",
        definition: "Leave the variable alone on one side.",
        example: "x=7.",
      },
      {
        term: "Verify",
        definition: "Check a solution in the original equation.",
        example: "7+4=11.",
      },
    ],
    explore: {
      title: "Balance Lab: Same Move, Both Sides",
      launch:
        "Use tiles and a balance to discover which moves preserve equality.",
      phases: [
        {
          title: "Build the balance",
          instruction:
            "Represent x+4=11 and 3x=18 with variable and unit tiles.",
          target: "Match both symbolic equations.",
        },
        {
          title: "Test a move",
          instruction:
            "Remove or partition tiles and predict whether balance remains.",
          target: "Identify legal and illegal moves.",
        },
        {
          title: "Solve and explain",
          instruction: "Complete addition and multiplication equations.",
          target: "State the inverse operation used.",
        },
        {
          title: "Compare methods",
          instruction:
            "Place tile reasoning beside arithmetic reasoning and a relation view.",
          target: "Explain what all methods preserve.",
        },
      ],
      reflection: [
        "Why must the same move affect both sides?",
        "How does partitioning undo multiplication?",
        "How does a graph or table confirm the same solution?",
      ],
    },
    practice: [
      q(
        "Solve x+6=15.",
        ["9", "11", "15", "21"],
        0,
        "Subtract 6 from both sides.",
        "Remove six unit tiles from each side.",
      ),
      q(
        "Solve x+9=22.",
        ["13", "22", "31", "11"],
        0,
        "22−9=13.",
        "Use the inverse operation.",
      ),
      q(
        "Solve 3x=21.",
        ["6", "7", "18", "24"],
        1,
        "Divide both sides by 3.",
        "Partition into three groups.",
      ),
      q(
        "Solve 5x=40.",
        ["5", "8", "35", "45"],
        1,
        "40÷5=8.",
        "Make five equal groups.",
      ),
      q(
        "Which move preserves x+4=11?",
        [
          "Subtract 4 from the left only",
          "Subtract 4 from both sides",
          "Add 4 to the right only",
          "Divide the left by 4",
        ],
        1,
        "Equal changes preserve equality.",
        "Think balance.",
      ),
      q(
        "Does x=7 verify 2x+3=17?",
        ["Yes", "No"],
        0,
        "2(7)+3=17.",
        "Substitute into the original equation.",
      ),
      q(
        "Solve 19=2x+5.",
        ["5", "7", "12", "14"],
        1,
        "Remove 5, then divide 14 into two groups.",
        "Equality can be read in either direction.",
      ),
      q(
        "A student solves 4x=24 by subtracting 4. Repair it.",
        ["Add 4", "Divide both sides by 4", "Multiply by 4", "Subtract 24"],
        1,
        "Division undoes multiplication.",
        "Name the inverse operation.",
      ),
    ],
    check: tileBank(),
    apply: {
      title: "Robotics Parts Packing Repair",
      scenario:
        "A robotics team uses tile equations to repair incorrect packing records.",
      instructions:
        "Model each packing equation, correct illegal balance moves, solve, and recommend a verified packing plan.",
      tasks: [
        "Model x+8=23 with tiles.",
        "Model 4x=36 as equal groups.",
        "Repair a solution that changes only one side.",
        "Verify every corrected solution in its original equation.",
        "Connect one solution to a point on a relation.",
      ],
      success: [
        "Tile and symbolic models agree.",
        "Every move preserves equality.",
        "Every solution is verified.",
      ],
    },
    exit: [
      q(
        "Solve x+7=19.",
        ["12", "19", "26", "7"],
        0,
        "Subtract 7 from both sides.",
      ),
      q("Solve 4x=28.", ["6", "7", "24", "32"], 1, "Divide both sides by 4."),
      q(
        "Why make the same move on both sides?",
        [
          "To keep equal values equal",
          "To make x larger",
          "Because every equation uses addition",
          "To change the answer",
        ],
        0,
        "Equal operations preserve the equality relation.",
      ),
    ],
    readiness: [
      "At least 4/5 on Check Yourself.",
      "At least 2/3 on the exit ticket, including the equality explanation.",
      "Can model, solve, and verify both equation types.",
    ],
    next: {
      title: "Unit 1 Review & Math Arcade",
      body: "Repair weak spots, take a mixed Unit Check, and restore the Pattern Machine.",
      href: "../unit-review/",
    },
  },
];

export const getGrade7Unit1Lesson = (slug: string) =>
  grade7Unit1Lessons.find((x) => x.slug === slug);
