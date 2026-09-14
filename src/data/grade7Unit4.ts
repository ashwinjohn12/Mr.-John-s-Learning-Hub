import type { Unit3Lesson, Unit3Question, ResponseType } from "./grade7Unit3";

export type Unit4Question = Unit3Question;
export type Unit4Lesson = Unit3Lesson;

const fmt = (n: number, places = 3) => Number(n.toFixed(places)).toString();
const rotate = (choices: string[], answer: number, shift: number) => {
  const k = shift % choices.length;
  return {
    choices: [...choices.slice(-k), ...choices.slice(0, -k)],
    answer: (answer + k) % choices.length,
  };
};
const choice = (
  id: string,
  prompt: string,
  choices: string[],
  answer: number,
  feedback: string,
  hint: string,
  hint2: string,
  category: string,
  route: string,
  responseType: ResponseType = "choice",
): Unit4Question => ({
  id,
  prompt,
  ...rotate(choices, answer, Number(id.replace(/\D/g, "")) || 0),
  feedback,
  hint,
  hint2,
  category,
  route,
  responseType,
});
const number = (
  id: string,
  prompt: string,
  answer: number,
  feedback: string,
  hint: string,
  hint2: string,
  category: string,
  route: string,
  unit = "",
): Unit4Question => ({
  id,
  prompt,
  choices: [
    fmt(answer),
    fmt(answer + 1),
    fmt(answer * 2),
    fmt(Math.max(0, answer - 1)),
  ],
  answer: 0,
  numericAnswer: answer,
  tolerance: 0.011,
  responseType: "number",
  feedback,
  hint,
  hint2,
  category,
  route,
  unit,
});
const multi = (
  id: string,
  prompt: string,
  choices: string[],
  answers: number[],
  feedback: string,
  hint: string,
  hint2: string,
  category: string,
  route: string,
): Unit4Question => ({
  id,
  prompt,
  choices,
  answer: answers[0],
  answers,
  responseType: "multi-select",
  feedback,
  hint,
  hint2,
  category,
  route,
});
const order = (
  id: string,
  prompt: string,
  tokens: string[],
  ordered: string[],
  feedback: string,
  hint: string,
  hint2: string,
  category: string,
  route: string,
): Unit4Question => ({
  id,
  prompt,
  choices: [ordered.join(", ")],
  answer: 0,
  responseType: "order",
  orderTokens: tokens,
  orderAnswer: ordered,
  feedback,
  hint,
  hint2,
  category,
  route,
});

type Blueprint = {
  slug: string;
  number: string;
  title: string;
  outcome: string;
  promise: string;
  goals: string[];
  prerequisites: string[];
  ideas: [string, string][];
  understand: [string, string, string, string][];
  examples: [string, string, string[], string][];
  vocabulary: [string, string, string][];
  exploreTitle: string;
  exploreTool: string;
  applyTitle: string;
  scenario: string;
  applyValues: Unit4Lesson["apply"]["values"];
  applyTasks: string[];
  readiness: string[];
};

const blueprints: Blueprint[] = [
  {
    slug: "investigating-circles",
    number: "4.1",
    title: "Investigating Circles",
    outcome: "SS1 · Circle relationships, central angles, and construction",
    promise:
      "Every point on a circle is the same distance from its centre, so radius controls the whole circle.",
    goals: [
      "Identify and use centre, radius, diameter, circumference, chord, and central angle.",
      "Show that d = 2r and central angles total 360°.",
      "Construct and verify a circle from a radius or diameter.",
    ],
    prerequisites: [
      "Measure a length accurately.",
      "Recognize and measure angles.",
    ],
    ideas: [
      [
        "One centre, one distance",
        "A circle is the set of points equally distant from its centre.",
      ],
      [
        "Diameter crosses the centre",
        "A diameter joins two circle points through the centre, so it contains two radii.",
      ],
    ],
    understand: [
      [
        "Circle parts",
        "The centre anchors the circle. A radius joins the centre to the circle; a diameter crosses the centre; circumference is the outside distance.",
        "On a radius-4 cm circle, every radius is 4 cm and every diameter is 8 cm.",
        "Calling any chord a diameter.",
      ],
      [
        "Radius and diameter",
        "A diameter is made of two radii placed end to end: d=2r and r=d÷2.",
        "r=6 cm gives d=12 cm; d=15 cm gives r=7.5 cm.",
        "Using d=r or doubling a diameter.",
      ],
      [
        "Central angles",
        "Radii split a circle into central angles around one point. A full turn is 360°.",
        "Angles 90°, 120°, and 150° total 360°.",
        "Using 180° for a full circle.",
      ],
      [
        "Construct and verify",
        "Set a compass opening equal to the radius, keep the point fixed, and turn through a full circle.",
        "A requested 5 cm radius must measure 5 cm in several directions.",
        "Measuring the diameter as the compass opening.",
      ],
    ],
    examples: [
      [
        "Name parts",
        "A segment runs from centre O to point A on the circle.",
        [
          "Its first endpoint is the centre.",
          "Its second endpoint lies on the circle.",
          "Therefore it is a radius.",
        ],
        "radius",
      ],
      [
        "Relate measures",
        "A circle has diameter 18 cm.",
        [
          "Use r=d÷2.",
          "Calculate 18÷2.",
          "Check that two radii rebuild the diameter.",
        ],
        "r=9 cm",
      ],
      [
        "Central angle",
        "Two angles are 115° and 95°. Find the third.",
        [
          "A full turn is 360°.",
          "Subtract 115+95 from 360.",
          "Check all three total 360°.",
        ],
        "150°",
      ],
      [
        "Construction",
        "Construct a circle with diameter 10 cm.",
        [
          "Convert to radius: 10÷2=5.",
          "Open the compass 5 cm.",
          "Verify several centre-to-circle distances.",
        ],
        "5 cm compass opening",
      ],
    ],
    vocabulary: [
      [
        "centre",
        "the point equally distant from every point on the circle",
        "O",
      ],
      ["radius", "a segment from centre to circle", "r"],
      ["diameter", "a chord through the centre", "d=2r"],
      ["circumference", "distance around a circle", "C"],
      [
        "chord",
        "a segment joining two points on a circle",
        "a diameter is the longest chord",
      ],
      [
        "central angle",
        "an angle with vertex at the centre",
        "all central angles total 360°",
      ],
    ],
    exploreTitle: "Compass and Chord Explorer",
    exploreTool: "virtual compass, chord slider, and angle dial",
    applyTitle: "Circular Garden Layout",
    scenario:
      "A garden plan needs a 12 m diameter bed divided into three central-angle regions.",
    applyValues: [
      { key: "radius", label: "Required radius", answer: "6" },
      { key: "diameter", label: "Verified diameter", answer: "12" },
      {
        key: "thirdAngle",
        label: "Third angle after 90° and 135°",
        answer: "135",
      },
      { key: "angleTotal", label: "Central-angle total", answer: "360" },
    ],
    applyTasks: [
      "Calculate the compass opening.",
      "Build and label the circle model.",
      "Calculate and check all central angles.",
      "Decide whether the layout is complete and reasonable.",
    ],
    readiness: [
      "Distinguish every named circle part.",
      "Use d=2r in either direction.",
      "Construct a circle and verify 360° around its centre.",
    ],
  },
  {
    slug: "circumference-circle",
    number: "4.2",
    title: "Circumference of a Circle",
    outcome:
      "SS1 · Relate circumference to π and solve circle-measure problems",
    promise:
      "For every circle, circumference divided by diameter is the same constant: π.",
    goals: [
      "Discover π from measured circles.",
      "Use C=πd and C=2πr.",
      "Estimate and solve contextual circumference problems with units.",
    ],
    prerequisites: [
      "Relate radius and diameter.",
      "Divide decimals and round appropriately.",
    ],
    ideas: [
      ["π is a ratio", "C÷d is about 3.14 for every circle."],
      [
        "Estimate before calculating",
        "Circumference should be a little more than three diameters.",
      ],
    ],
    understand: [
      [
        "Measure around and across",
        "Measure circumference around the edge and diameter straight across the centre.",
        "C≈31.4 cm and d=10 cm gives C÷d≈3.14.",
        "Measuring a noncentral chord as diameter.",
      ],
      [
        "Connect to π",
        "π is the constant ratio C/d, not exactly 3.14.",
        "C/d=π, so C=πd.",
        "Treating π as a unit or exact 3.14.",
      ],
      [
        "Choose a formula",
        "Use C=πd when diameter is known or C=2πr when radius is known.",
        "r=5 m gives C≈2π(5)=31.4 m.",
        "Using area formula πr².",
      ],
      [
        "Interpret and round",
        "Circumference uses linear units; round only at the end to the requested precision.",
        "A 7.2 m radius track has C≈45.24 m to hundredths.",
        "Writing square metres or rounding midway.",
      ],
    ],
    examples: [
      [
        "Diameter known",
        "Find C for d=14 cm.",
        [
          "Estimate a little over 42 cm.",
          "Calculate π×14.",
          "Round as requested and attach cm.",
        ],
        "≈43.98 cm",
      ],
      [
        "Radius known",
        "Find C for r=3.5 m.",
        [
          "Use C=2πr.",
          "Calculate 2π(3.5).",
          "Check against three diameters: 3×7=21.",
        ],
        "≈21.99 m",
      ],
      [
        "Find diameter",
        "C=31.4 cm. Find d.",
        [
          "Rearrange d=C÷π.",
          "Calculate 31.4÷π.",
          "Check πd returns about 31.4.",
        ],
        "≈10.00 cm",
      ],
      [
        "Compare",
        "Which needs more edging: d=8 m or r=5 m?",
        [
          "Convert or calculate both circumferences.",
          "8π≈25.13 and 10π≈31.42.",
          "Compare with the same unit.",
        ],
        "the r=5 m circle",
      ],
    ],
    vocabulary: [
      ["pi", "the ratio C÷d for every circle", "π≈3.14"],
      ["circumference", "distance around a circle", "C=πd"],
      ["ratio", "a comparison by division", "C:d"],
      ["approximate", "close but not exact", "≈"],
      ["linear unit", "a unit of length", "cm or m"],
    ],
    exploreTitle: "π Measurement Lab",
    exploreTool:
      "string wrap, diameter ruler, ratio table, and C-versus-d plot",
    applyTitle: "Round Track Planner",
    scenario:
      "A circular walking track has radius 18 m and needs an inside safety rail.",
    applyValues: [
      { key: "diameter", label: "Track diameter", answer: "36" },
      {
        key: "estimate",
        label: "Reasonable circumference estimate",
        answer: "113",
      },
      {
        key: "circumference",
        label: "Circumference to nearest tenth",
        answer: "113.1",
      },
      { key: "rails", label: "Six-metre rail sections required", answer: "19" },
    ],
    applyTasks: [
      "Estimate with three diameters.",
      "Build a labelled circumference model.",
      "Calculate and round with metres.",
      "Decide the whole number of rail sections needed.",
    ],
    readiness: [
      "Explain why C/d stays near π.",
      "Choose C=πd or C=2πr.",
      "Use linear units and justify rounding.",
    ],
  },
  {
    slug: "area-parallelogram",
    number: "4.3",
    title: "Area of a Parallelogram",
    outcome: "SS2 · Develop and apply the parallelogram area formula",
    promise:
      "Cutting and sliding changes the shape, but not its area: a parallelogram becomes a rectangle with the same base and perpendicular height.",
    goals: [
      "Develop A=bh by rearrangement.",
      "Distinguish perpendicular height from slanted side.",
      "Solve and compare parallelogram area problems.",
    ],
    prerequisites: [
      "Calculate rectangle area.",
      "Recognize perpendicular lines.",
    ],
    ideas: [
      [
        "Rearrange without changing area",
        "A triangular piece can slide to make a rectangle.",
      ],
      [
        "Height is perpendicular",
        "Area depends on base and perpendicular height, not slant length.",
      ],
    ],
    understand: [
      [
        "Cut and slide",
        "Move a triangular end to the opposite side; no square units are added or removed.",
        "A base-9, height-4 parallelogram becomes a 9×4 rectangle.",
        "Thinking movement changes area.",
      ],
      [
        "Base and height",
        "Height is the shortest perpendicular distance between parallel bases.",
        "A slanted side of 6 cm may not be the 4 cm height.",
        "Using a diagonal or slanted side.",
      ],
      [
        "Generalize the formula",
        "The related rectangle has length b and width h, so A=bh.",
        "b=12 m,h=5 m gives 60 m².",
        "Adding base and height.",
      ],
      [
        "Find a missing measure",
        "Reverse multiplication: h=A÷b or b=A÷h.",
        "A=72 cm²,b=9 cm gives h=8 cm.",
        "Dividing by the wrong measurement.",
      ],
    ],
    examples: [
      [
        "Area",
        "b=13 cm,h=6 cm.",
        [
          "Identify perpendicular height.",
          "Calculate 13×6.",
          "Attach square centimetres.",
        ],
        "78 cm²",
      ],
      [
        "Slant distractor",
        "b=10 m,h=4 m,slant=7 m.",
        [
          "Ignore slant for area.",
          "Calculate 10×4.",
          "Check against a 10×4 rectangle.",
        ],
        "40 m²",
      ],
      [
        "Missing height",
        "A=54 cm²,b=9 cm.",
        ["Use h=A÷b.", "Calculate 54÷9.", "Check 9×6=54."],
        "6 cm",
      ],
      [
        "Compare",
        "Same base 8 cm; heights 5 cm and 7 cm.",
        [
          "Calculate both areas.",
          "40 cm² and 56 cm².",
          "Compare the 16 cm² difference.",
        ],
        "second is 16 cm² larger",
      ],
    ],
    vocabulary: [
      [
        "parallelogram",
        "a quadrilateral with two pairs of parallel sides",
        "opposite sides are parallel",
      ],
      ["base", "the chosen side paired with a perpendicular height", "b"],
      ["perpendicular height", "shortest distance between parallel bases", "h"],
      ["area", "surface covered in square units", "A=bh"],
      ["rearrange", "move pieces without changing total area", "cut and slide"],
    ],
    exploreTitle: "Cut-and-Slide Area Lab",
    exploreTool: "base, height, slant, and movable triangular piece controls",
    applyTitle: "Solar-Panel Array",
    scenario:
      "A slanted parallelogram array has base 14 m, perpendicular height 6 m, and slanted side 8 m.",
    applyValues: [
      { key: "area", label: "Array area", answer: "84" },
      { key: "unused", label: "Measurement not used for area", answer: "8" },
      { key: "doubleArea", label: "Area if height doubles", answer: "168" },
      {
        key: "unit",
        label: "Area unit",
        answer: "m²",
        kind: "choice",
        options: ["m", "m²", "m³"],
      },
    ],
    applyTasks: [
      "Identify the valid base-height pair.",
      "Build the cut-and-slide model.",
      "Calculate both areas with square units.",
      "Decide which measurement does not affect the area.",
    ],
    readiness: [
      "Identify perpendicular height.",
      "Explain the rearrangement.",
      "Apply and reverse A=bh.",
    ],
  },
  {
    slug: "area-triangle",
    number: "4.4",
    title: "Area of a Triangle",
    outcome: "SS2 · Develop and apply the triangle area formula",
    promise:
      "Two congruent triangles form a parallelogram, so one triangle has half of bh.",
    goals: [
      "Develop A=bh÷2 with a related parallelogram.",
      "Use any base with its matching perpendicular height.",
      "Solve missing-measure and contextual problems.",
    ],
    prerequisites: [
      "Use A=bh for parallelograms.",
      "Identify perpendicular height.",
    ],
    ideas: [
      [
        "Duplicate to see one half",
        "Two matching triangles exactly fill a related parallelogram.",
      ],
      [
        "Match base and height",
        "The chosen height must be perpendicular to the chosen base.",
      ],
    ],
    understand: [
      [
        "Build a pair",
        "Duplicate and rotate a triangle to make a parallelogram with the same b and h.",
        "Two b=10,h=6 triangles fill 60 cm², so each is 30 cm².",
        "Doubling the triangle but forgetting to halve.",
      ],
      [
        "Generalize",
        "A triangle is half its related parallelogram: A=bh/2.",
        "b=9,h=8 gives 9×8÷2=36.",
        "Dividing only b or h incorrectly.",
      ],
      [
        "Choose matching measures",
        "A height may fall inside or outside the triangle, but it meets the base line at 90°.",
        "An obtuse triangle can use an external height.",
        "Using a nonperpendicular side.",
      ],
      [
        "Find a missing measure",
        "From A=bh/2, h=2A/b and b=2A/h.",
        "A=42,b=7 gives h=12.",
        "Forgetting the factor of 2.",
      ],
    ],
    examples: [
      [
        "Area",
        "b=12 cm,h=7 cm.",
        ["Find bh=84.", "Take half: 84÷2.", "Attach cm²."],
        "42 cm²",
      ],
      [
        "External height",
        "b=9 m, external h=4 m.",
        [
          "Confirm the 90° relationship.",
          "Calculate 9×4÷2.",
          "The external location does not change height.",
        ],
        "18 m²",
      ],
      [
        "Missing base",
        "A=30 cm²,h=5 cm.",
        ["Use b=2A÷h.", "Calculate 60÷5.", "Check 12×5÷2=30."],
        "12 cm",
      ],
      [
        "Compare",
        "Triangle and parallelogram share b=8,h=6.",
        [
          "Parallelogram area is 48.",
          "Triangle area is half: 24.",
          "State the 1:2 relationship.",
        ],
        "24 cm² versus 48 cm²",
      ],
    ],
    vocabulary: [
      ["triangle", "a polygon with three sides", "three vertices"],
      [
        "altitude",
        "a perpendicular height from a vertex to the opposite base line",
        "h",
      ],
      ["congruent", "same size and shape", "two matching copies"],
      [
        "related parallelogram",
        "the shape formed by two congruent triangles",
        "area bh",
      ],
      ["square unit", "a unit for area", "cm²"],
    ],
    exploreTitle: "Triangle Pair Builder",
    exploreTool: "duplicate, rotate, base, height, and half-area controls",
    applyTitle: "Festival Flag Designer",
    scenario:
      "A triangular flag has base 1.8 m and perpendicular height 1.2 m; twelve flags are needed.",
    applyValues: [
      { key: "oneArea", label: "Area of one flag", answer: "1.08" },
      { key: "totalArea", label: "Area of twelve flags", answer: "12.96" },
      {
        key: "estimate",
        label: "Reasonable total-area estimate",
        answer: "13",
      },
      {
        key: "unit",
        label: "Required unit",
        answer: "m²",
        kind: "choice",
        options: ["m", "m²", "m³"],
      },
    ],
    applyTasks: [
      "Build two congruent flags as a parallelogram.",
      "Calculate one flag area.",
      "Calculate and estimate the total fabric area.",
      "Decide whether 13 m² of fabric is sufficient.",
    ],
    readiness: [
      "Explain the one-half factor.",
      "Match a base with perpendicular height.",
      "Apply and reverse A=bh/2.",
    ],
  },
  {
    slug: "area-circle",
    number: "4.5",
    title: "Area of a Circle",
    outcome: "SS2 · Estimate and calculate the area of circles",
    promise:
      "Rearranged circle sectors approach a parallelogram with base about πr and height r, giving A=πr².",
    goals: [
      "Estimate circle area without a formula.",
      "Develop A=πr² with sector rearrangement.",
      "Solve circle and ring area problems with square units.",
    ],
    prerequisites: [
      "Use radius and diameter.",
      "Use parallelogram area and powers of 2.",
    ],
    ideas: [
      [
        "Sectors reveal the formula",
        "Alternating sectors approach a parallelogram.",
      ],
      [
        "Radius is squared",
        "Area grows with r×r, so doubling radius makes four times the area.",
      ],
    ],
    understand: [
      [
        "Estimate first",
        "Compare the circle with an inside and outside square or count grid squares.",
        "For r=4, area lies between a reasonable inner and outer bound near 50 square units.",
        "Using circumference as area.",
      ],
      [
        "Rearrange sectors",
        "Alternating sectors make a shape with base about half the circumference, πr, and height r.",
        "A≈πr×r.",
        "Using 2πr as the rearranged base.",
      ],
      [
        "Apply A=πr²",
        "Square the radius before multiplying by π.",
        "r=6 cm gives 36π≈113.10 cm².",
        "Calculating (πr)² or 2πr.",
      ],
      [
        "Composite circle areas",
        "For a ring, subtract inner-circle area from outer-circle area.",
        "R=5,r=3 gives 25π−9π=16π.",
        "Subtracting radii before squaring without justification.",
      ],
    ],
    examples: [
      [
        "Area from radius",
        "r=7 m.",
        ["Estimate near 150 m².", "Calculate π×7²=49π.", "Round at the end."],
        "≈153.94 m²",
      ],
      [
        "Area from diameter",
        "d=12 cm.",
        ["Find r=6 cm.", "Calculate π×36.", "Attach cm²."],
        "≈113.10 cm²",
      ],
      [
        "Ring",
        "outer r=8, inner r=5.",
        [
          "Calculate 64π and 25π.",
          "Subtract to get 39π.",
          "Check ring area is less than outer area.",
        ],
        "≈122.52 units²",
      ],
      [
        "Scale",
        "Radius doubles from 3 to 6.",
        [
          "Compare π(3²) and π(6²).",
          "The square factor changes 9 to 36.",
          "36 is four times 9.",
        ],
        "area becomes 4 times",
      ],
    ],
    vocabulary: [
      ["sector", "a region between two radii and an arc", "a slice"],
      ["square radius", "r×r", "r²"],
      ["circle area", "surface inside a circle", "A=πr²"],
      ["concentric", "sharing the same centre", "rings"],
      [
        "composite area",
        "area built by adding or subtracting shapes",
        "outer minus inner",
      ],
    ],
    exploreTitle: "Sector Rearrangement Studio",
    exploreTool:
      "sector-count control, alternating arrangement, grid estimate, and formula labels",
    applyTitle: "Splash-Pad Surface Plan",
    scenario:
      "A circular splash pad has diameter 16 m with a concentric dry island of radius 3 m.",
    applyValues: [
      { key: "outerRadius", label: "Splash-pad radius", answer: "8" },
      {
        key: "outerArea",
        label: "Outer circle area to nearest tenth",
        answer: "201.1",
      },
      {
        key: "islandArea",
        label: "Island area to nearest tenth",
        answer: "28.3",
      },
      {
        key: "wetArea",
        label: "Wet surface area to nearest tenth",
        answer: "172.8",
      },
    ],
    applyTasks: [
      "Estimate the outer area using square bounds.",
      "Build a sector or ring model.",
      "Calculate both circle areas and their difference.",
      "Decide whether 175 m² of surfacing is sufficient.",
    ],
    readiness: [
      "Estimate before applying a formula.",
      "Use A=πr² with square units.",
      "Find composite circle areas.",
    ],
  },
  {
    slug: "interpreting-circle-graphs",
    number: "4.6",
    title: "Interpreting Circle Graphs",
    outcome: "SP3, SS1 · Interpret circle graphs and central angles",
    promise:
      "A circle graph shows parts of one whole: sector percents total 100% and central angles total 360°.",
    goals: [
      "Identify complete and misleading circle graphs.",
      "Translate sectors among percent, angle, and quantity.",
      "Interpret and compare circle-graph evidence.",
    ],
    prerequisites: [
      "Relate fractions, decimals, and percents.",
      "Use central angles totalling 360°.",
    ],
    ideas: [
      [
        "Every sector is part of one whole",
        "Percent, angle, and count describe the same share.",
      ],
      [
        "Scale from the total",
        "A sector count equals its percent times the total.",
      ],
    ],
    understand: [
      [
        "Read graph structure",
        "A useful graph has a title, labels or legend, categories, and one clear whole.",
        "Four sectors labelled 40%,30%,20%,10% total 100%.",
        "Reading unrelated circles as one whole.",
      ],
      [
        "Percent and angle",
        "A sector angle is percent×360°; percent is angle÷360°×100%.",
        "25% corresponds to 90°.",
        "Using percent as the angle.",
      ],
      [
        "Percent and quantity",
        "Count=percent×total; percent=count÷total×100%.",
        "35% of 200 is 70.",
        "Multiplying by 35 instead of 0.35.",
      ],
      [
        "Check for misleading graphs",
        "Sectors must match their labels and totals; decorative 3-D effects can distort appearance.",
        "A 60% sector must occupy 216°, more than half.",
        "Trusting labels without checking the sector.",
      ],
    ],
    examples: [
      [
        "Find count",
        "A 30% sector represents a total of 80.",
        [
          "Write 30%=0.30.",
          "Calculate 0.30×80.",
          "Check count is less than half of 80.",
        ],
        "24",
      ],
      [
        "Find percent",
        "45 of 150 students choose option A.",
        [
          "Calculate 45÷150=0.30.",
          "Convert to 30%.",
          "Check other sectors can total 70%.",
        ],
        "30%",
      ],
      [
        "Find angle",
        "A category is 15%.",
        [
          "Calculate 0.15×360°.",
          "Check it is less than a right angle.",
          "Attach degrees.",
        ],
        "54°",
      ],
      [
        "Detect error",
        "Angles are 120°,100°,90°,70°.",
        [
          "Add the angles.",
          "The sum is 380°, not 360°.",
          "The graph cannot represent one complete whole.",
        ],
        "20° too large",
      ],
    ],
    vocabulary: [
      [
        "circle graph",
        "a circular display of parts of one whole",
        "also called a pie chart",
      ],
      ["sector", "one category region", "bounded by radii and an arc"],
      [
        "legend",
        "a key matching symbols or colours to categories",
        "must not be the only cue",
      ],
      ["proportion", "a part-to-whole relationship", "30 of 100"],
      [
        "misleading graph",
        "a display whose visual or totals distort the data",
        "wrong sector size",
      ],
    ],
    exploreTitle: "Circle-Graph Detective",
    exploreTool:
      "sector slider, total control, percent-angle-count switcher, and validity checker",
    applyTitle: "School Lunch Survey",
    scenario:
      "A circle graph summarizes 240 lunch choices: 35% hot lunch, 25% packed lunch, 20% cafeteria snack, and the rest other.",
    applyValues: [
      { key: "hot", label: "Hot-lunch students", answer: "84" },
      { key: "packedAngle", label: "Packed-lunch central angle", answer: "90" },
      { key: "otherPercent", label: "Other percent", answer: "20" },
      { key: "otherCount", label: "Other students", answer: "48" },
    ],
    applyTasks: [
      "Check that the percent whole is complete.",
      "Build a labelled proportional sector model.",
      "Calculate all required counts and angle.",
      "Decide whether hot lunch is chosen by more than one third.",
    ],
    readiness: [
      "Check titles, labels, 100%, and 360°.",
      "Translate percent to angle or count.",
      "Identify a misleading circle graph.",
    ],
  },
  {
    slug: "drawing-circle-graphs",
    number: "4.7",
    title: "Drawing Circle Graphs",
    outcome: "SP3, SS1 · Construct and label circle graphs",
    promise:
      "A trustworthy circle graph connects every data value to a proportional percent and central angle, then checks both totals.",
    goals: [
      "Convert a data table to percents and angles.",
      "Construct proportional sectors with a compass and protractor or technology.",
      "Add accessible labels and verify 100% and 360°.",
    ],
    prerequisites: [
      "Interpret circle graphs.",
      "Calculate percent of a total and measure angles.",
    ],
    ideas: [
      [
        "Calculate before drawing",
        "Each category needs a fraction, percent, and central angle.",
      ],
      ["Verify the whole twice", "Percents total 100%; angles total 360°."],
    ],
    understand: [
      [
        "Find the total",
        "Add all category counts before calculating shares.",
        "Counts 12,9,6,3 total 30.",
        "Using one category as the whole.",
      ],
      [
        "Convert each category",
        "Percent=count÷total×100; angle=count÷total×360°.",
        "9 of 30 gives 30% and 108°.",
        "Rounding every value too early.",
      ],
      [
        "Construct sectors",
        "Draw a circle and radius, measure each central angle from the previous radius, and label the sector.",
        "Angles 144°,108°,72°,36° fill the circle.",
        "Measuring at the circumference instead of centre.",
      ],
      [
        "Label and verify",
        "Use a clear title, direct labels or legend plus text, values, and totals. Adjust rounding transparently if needed.",
        "40%+30%+20%+10%=100%.",
        "Relying on colour alone or leaving a gap.",
      ],
    ],
    examples: [
      [
        "Table to graph",
        "Counts 12,9,6,3.",
        [
          "Total 30.",
          "Convert to 40%,30%,20%,10%.",
          "Convert to 144°,108°,72°,36°.",
        ],
        "totals 100% and 360°",
      ],
      [
        "Angle from count",
        "8 of 20 students.",
        ["8÷20=0.4.", "0.4×360°=144°.", "Check sector is less than half."],
        "144°",
      ],
      [
        "Count from angle",
        "A 72° sector from total 50.",
        ["72÷360=0.20.", "0.20×50=10.", "Check 72° is one fifth of a circle."],
        "10",
      ],
      [
        "Rounding",
        "Three equal categories.",
        [
          "Each exact angle is 120°.",
          "Each percent is 33⅓%.",
          "Report the rounding clearly while angles still total 360°.",
        ],
        "120° each",
      ],
    ],
    vocabulary: [
      ["data table", "organized categories and values", "source for the graph"],
      [
        "central angle",
        "sector angle measured at the centre",
        "portion of 360°",
      ],
      [
        "protractor",
        "a tool for measuring or drawing angles",
        "place centre mark at circle centre",
      ],
      [
        "direct label",
        "text placed beside its sector",
        "supports non-colour reading",
      ],
      [
        "rounding adjustment",
        "a small stated change that preserves the whole",
        "totals remain 100% and 360°",
      ],
    ],
    exploreTitle: "Circle-Graph Construction Studio",
    exploreTool:
      "data table, percent converter, angle dial, sector canvas, labels, and total checks",
    applyTitle: "Activity-Day Graph",
    scenario:
      "Students choose activities: soccer 18, art 12, robotics 9, and music 6.",
    applyValues: [
      { key: "total", label: "Total students", answer: "45" },
      { key: "soccerPercent", label: "Soccer percent", answer: "40" },
      { key: "artAngle", label: "Art angle", answer: "96" },
      { key: "roboticsAngle", label: "Robotics angle", answer: "72" },
    ],
    applyTasks: [
      "Calculate the total and every category share.",
      "Build all four proportional sectors.",
      "Add title, text labels, percents, and angles.",
      "Verify 100% and 360°, then decide which activity is most popular.",
    ],
    readiness: [
      "Convert counts to percents and angles.",
      "Construct and label proportional sectors.",
      "Verify both whole totals and communicate rounding.",
    ],
  },
];

const warmupSpecs: [string, string[], number, string, string][] = [
  [
    "Which segment must pass through the centre?",
    ["diameter", "chord", "arc", "circumference"],
    0,
    "Picture the centre between two radius lengths.",
    "A diameter is the special chord that passes through the centre.",
  ],
  [
    "A circle has radius 4 cm. What is its diameter?",
    ["8 cm", "4 cm", "2 cm", "12 cm"],
    0,
    "Use the radius-diameter relationship from Lesson 4.1.",
    "Two radii make one diameter: 2×4.",
  ],
  [
    "What is the area of a 7 cm by 5 cm rectangle?",
    ["35 cm²", "24 cm²", "12 cm²", "70 cm²"],
    0,
    "This rectangle will become the related model.",
    "Multiply length by width and use square units.",
  ],
  [
    "What is half of 48 square units?",
    ["24", "96", "46", "12"],
    0,
    "A triangle will be one of two equal parts.",
    "Divide 48 by 2.",
  ],
  [
    "A circle has diameter 10 cm. What radius will you use?",
    ["5 cm", "10 cm", "20 cm", "2.5 cm"],
    0,
    "Area uses radius, not diameter.",
    "Divide the diameter by 2.",
  ],
  [
    "What percent represents one quarter of a whole?",
    ["25%", "4%", "40%", "75%"],
    0,
    "Rename one quarter as hundredths.",
    "One quarter is 25 out of 100.",
  ],
  [
    "How many degrees are in one full turn?",
    ["360°", "180°", "90°", "100°"],
    0,
    "Think about all central angles around one point.",
    "A full circle measures 360°.",
  ],
];

const practiceSpecs: [string, number, string, string, string, string][][] = [
  [
    [
      "Find d when r=7 cm.",
      14,
      "cm",
      "Use d=2r.",
      "Double the 7 cm radius.",
      "understand-2",
    ],
    [
      "Find r when d=22 m.",
      11,
      "m",
      "Use r=d÷2.",
      "Take half of 22 m.",
      "understand-2",
    ],
    [
      "Find the missing angle: 80°+125°+x=360°.",
      155,
      "°",
      "Use the 360° full turn.",
      "Subtract 205° from 360°.",
      "understand-3",
    ],
    [
      "How many radii span a diameter?",
      2,
      "radii",
      "Picture the centre on a diameter.",
      "Count the two centre-to-circle halves.",
      "understand-2",
    ],
    [
      "Find d when r=4.5 cm.",
      9,
      "cm",
      "Use d=2r.",
      "Calculate 2×4.5.",
      "understand-2",
    ],
    [
      "Find the missing angle: 210°+x=360°.",
      150,
      "°",
      "Central angles total 360°.",
      "Calculate 360−210.",
      "understand-3",
    ],
    [
      "A compass opens 6 cm. What diameter is drawn?",
      12,
      "cm",
      "The opening is the radius.",
      "Double 6 cm.",
      "understand-4",
    ],
    [
      "Find r when d=13 cm.",
      6.5,
      "cm",
      "Radius is half a diameter.",
      "Calculate 13÷2.",
      "understand-2",
    ],
  ],
  [
    [
      "Find C for d=10 cm using π≈3.14.",
      31.4,
      "cm",
      "Use C=πd.",
      "Calculate 3.14×10.",
      "understand-3",
    ],
    [
      "Find C for r=4 m using π≈3.14.",
      25.12,
      "m",
      "Use C=2πr.",
      "Calculate 2×3.14×4.",
      "understand-3",
    ],
    [
      "Find d when C=62.8 cm using π≈3.14.",
      20,
      "cm",
      "Use d=C÷π.",
      "Calculate 62.8÷3.14.",
      "understand-3",
    ],
    [
      "Find C for d=7 m using π≈3.14.",
      21.98,
      "m",
      "Estimate a little over 21.",
      "Calculate 3.14×7.",
      "understand-4",
    ],
    [
      "Find C for r=6 cm using π≈3.14.",
      37.68,
      "cm",
      "Use 2πr.",
      "Calculate 12×3.14.",
      "understand-3",
    ],
    [
      "Find r when C=31.4 m using π≈3.14.",
      5,
      "m",
      "First find diameter or divide by 2π.",
      "31.4÷3.14=10, then halve.",
      "understand-3",
    ],
    [
      "How many metres around a d=25 m circle using π≈3.14?",
      78.5,
      "m",
      "Use diameter form.",
      "Calculate 25×3.14.",
      "understand-3",
    ],
    [
      "How many 5 m sections cover 31.4 m?",
      7,
      "sections",
      "A partial final section still counts.",
      "31.4÷5=6.28, so round up.",
      "understand-4",
    ],
  ],
  [
    [
      "Find A when b=9 cm,h=4 cm.",
      36,
      "cm²",
      "Use A=bh.",
      "Calculate 9×4.",
      "understand-3",
    ],
    [
      "Find A when b=12 m,h=7 m.",
      84,
      "m²",
      "Use perpendicular height.",
      "Calculate 12×7.",
      "understand-2",
    ],
    [
      "Find h when A=54 cm²,b=9 cm.",
      6,
      "cm",
      "Reverse A=bh.",
      "Calculate 54÷9.",
      "understand-4",
    ],
    [
      "Find b when A=72 m²,h=8 m.",
      9,
      "m",
      "Use b=A÷h.",
      "Calculate 72÷8.",
      "understand-4",
    ],
    [
      "Find A for b=6.5 cm,h=4 cm.",
      26,
      "cm²",
      "Ignore any unneeded slant.",
      "Calculate 6.5×4.",
      "understand-3",
    ],
    [
      "Area changes from h=3 to h=6 with same base. Enter the scale factor.",
      2,
      "times",
      "Compare the heights.",
      "6÷3=2, so area doubles.",
      "understand-3",
    ],
    [
      "Find A when b=15 m,h=2.4 m.",
      36,
      "m²",
      "Multiply base by perpendicular height.",
      "15×2.4=36.",
      "understand-3",
    ],
    [
      "Find h when A=45 cm²,b=7.5 cm.",
      6,
      "cm",
      "Divide area by base.",
      "45÷7.5=6.",
      "understand-4",
    ],
  ],
  [
    [
      "Find A for b=10 cm,h=6 cm.",
      30,
      "cm²",
      "Use A=bh÷2.",
      "10×6÷2.",
      "understand-2",
    ],
    [
      "Find A for b=9 m,h=8 m.",
      36,
      "m²",
      "Find related parallelogram, then half.",
      "72÷2=36.",
      "understand-2",
    ],
    [
      "Find h when A=42 cm²,b=7 cm.",
      12,
      "cm",
      "Use h=2A÷b.",
      "84÷7=12.",
      "understand-4",
    ],
    [
      "Find b when A=30 m²,h=5 m.",
      12,
      "m",
      "Use b=2A÷h.",
      "60÷5=12.",
      "understand-4",
    ],
    [
      "Find A for b=6.4 cm,h=5 cm.",
      16,
      "cm²",
      "Multiply then divide by 2.",
      "6.4×5=32; half is 16.",
      "understand-2",
    ],
    [
      "A related parallelogram has area 90 m². Find triangle area.",
      45,
      "m²",
      "The triangle is one of two congruent halves.",
      "90÷2=45.",
      "understand-1",
    ],
    [
      "Find A for b=15 m,h=3.2 m.",
      24,
      "m²",
      "Use perpendicular height.",
      "15×3.2÷2=24.",
      "understand-3",
    ],
    [
      "Find h when A=18 cm²,b=4.5 cm.",
      8,
      "cm",
      "Double the area first.",
      "36÷4.5=8.",
      "understand-4",
    ],
  ],
  [
    [
      "Find A for r=3 cm using π≈3.14.",
      28.26,
      "cm²",
      "Square radius first.",
      "3²=9; 9×3.14.",
      "understand-3",
    ],
    [
      "Find A for d=10 m using π≈3.14.",
      78.5,
      "m²",
      "Convert diameter to radius.",
      "r=5, then 25×3.14.",
      "understand-3",
    ],
    [
      "Find A for r=6 cm using π≈3.14.",
      113.04,
      "cm²",
      "Use A=πr².",
      "6²=36; multiply by 3.14.",
      "understand-3",
    ],
    [
      "Find ring area for R=5,r=3 using π≈3.14.",
      50.24,
      "units²",
      "Subtract inner area from outer.",
      "(25−9)×3.14.",
      "understand-4",
    ],
    [
      "Find A for d=8 m using π≈3.14.",
      50.24,
      "m²",
      "Radius is half the diameter.",
      "r=4; 16×3.14.",
      "understand-3",
    ],
    [
      "Radius doubles. Enter the area scale factor.",
      4,
      "times",
      "Area uses r².",
      "2²=4.",
      "understand-3",
    ],
    [
      "Find A for r=7 cm using π≈3.14.",
      153.86,
      "cm²",
      "Square 7 before multiplying.",
      "49×3.14.",
      "understand-3",
    ],
    [
      "Find ring area for R=10,r=6 using π≈3.14.",
      200.96,
      "units²",
      "Use π(R²−r²).",
      "(100−36)×3.14.",
      "understand-4",
    ],
  ],
  [
    [
      "Find the angle for 25%.",
      90,
      "°",
      "Multiply decimal percent by 360°.",
      "0.25×360.",
      "understand-2",
    ],
    [
      "Find 30% of 80.",
      24,
      "people",
      "Convert 30% to 0.30.",
      "0.30×80.",
      "understand-3",
    ],
    [
      "A 72° sector is what percent?",
      20,
      "%",
      "Compare with 360°.",
      "72÷360×100.",
      "understand-2",
    ],
    [
      "45 of 150 is what percent?",
      30,
      "%",
      "Divide part by whole.",
      "45÷150×100.",
      "understand-3",
    ],
    [
      "Find the angle for 15%.",
      54,
      "°",
      "Use 15% of 360°.",
      "0.15×360.",
      "understand-2",
    ],
    [
      "A 40% sector from 250 represents how many?",
      100,
      "items",
      "Use percent×total.",
      "0.40×250.",
      "understand-3",
    ],
    [
      "Angles 120°,90°,80°. Find the missing angle.",
      70,
      "°",
      "Angles total 360°.",
      "360−290.",
      "understand-1",
    ],
    [
      "Percents 35%,25%,20%. Find the missing percent.",
      20,
      "%",
      "Percents total 100%.",
      "100−80.",
      "understand-1",
    ],
  ],
  [
    [
      "Find total: 12+9+6+3.",
      30,
      "responses",
      "Add every category first.",
      "12+9+6+3=30.",
      "understand-1",
    ],
    [
      "Find the percent for 12 of 30.",
      40,
      "%",
      "Divide count by total.",
      "12÷30×100.",
      "understand-2",
    ],
    [
      "Find the angle for 9 of 30.",
      108,
      "°",
      "Use count÷total×360°.",
      "9÷30×360.",
      "understand-2",
    ],
    [
      "Find the angle for 6 of 30.",
      72,
      "°",
      "Six is one fifth of 30.",
      "One fifth of 360° is 72°.",
      "understand-2",
    ],
    [
      "Find the angle for 3 of 30.",
      36,
      "°",
      "Three is one tenth of 30.",
      "One tenth of 360° is 36°.",
      "understand-2",
    ],
    [
      "Find the count represented by 144° of total 20.",
      8,
      "responses",
      "Convert angle to a fraction of 360.",
      "144÷360×20.",
      "understand-2",
    ],
    [
      "Find missing angle: 144°+108°+72°+x=360°.",
      36,
      "°",
      "Subtract the known angle total.",
      "360−324.",
      "understand-4",
    ],
    [
      "Find missing percent: 40%+30%+20%+x=100%.",
      10,
      "%",
      "Subtract known percents from 100%.",
      "100−90.",
      "understand-4",
    ],
  ],
];

// Exit tickets use new values and structures so they assess transfer rather than
// repeat the supported-practice mathematics.
const exitSpecs: [string, number, string, string, string, string][][] = [
  [["A circle has radius 9.5 cm. Find its diameter.",19,"cm","A diameter crosses the centre from edge to edge.","It contains two radii, so calculate 2×9.5.","understand-2"],["Angles around a centre are 115°, 95°, and x. Find x.",150,"°","The central angles complete one full turn.","Add 115+95, then subtract from 360.","understand-3"],["A 17 cm diameter circle is drawn. Find the compass opening.",8.5,"cm","A compass opening represents the radius.","Take half of the diameter, 17÷2.","understand-4"]],
  [["Find the circumference when d=12 cm and π≈3.14.",37.68,"cm","Use the diameter form of the circumference rule.","Calculate 3.14×12.","understand-3"],["A circumference is 47.1 m. Find d using π≈3.14.",15,"m","Reverse C=πd.","Calculate 47.1÷3.14.","understand-3"],["How many whole 4 m sections are needed around a 28.26 m circle?",8,"sections","A partial last section still must be supplied.","28.26÷4 is just over 7, so round up.","understand-4"]],
  [["Find the area of a parallelogram with b=11 cm and h=6 cm.",66,"cm²","Use the perpendicular height, not a slanted side.","Calculate 11×6.","understand-3"],["A parallelogram has area 96 m² and base 12 m. Find h.",8,"m","Undo multiplication by the base.","Calculate 96÷12.","understand-4"],["The height triples while the base stays fixed. Enter the area scale factor.",3,"times","Area is directly proportional to perpendicular height.","Compare 3h with h.","understand-3"]],
  [["Find the area of a triangle with b=16 cm and h=5 cm.",40,"cm²","A triangle is half its related parallelogram.","Calculate 16×5÷2.","understand-2"],["A triangle has area 54 m² and base 9 m. Find h.",12,"m","Double the area before dividing by the base.","Calculate 108÷9.","understand-4"],["A related parallelogram has area 76 cm². Find the triangle area.",38,"cm²","Two congruent copies form the parallelogram.","Take half of 76.","understand-1"]],
  [["Find the area when r=4 cm and π≈3.14.",50.24,"cm²","Square the radius before multiplying by π.","Calculate 16×3.14.","understand-3"],["Find the area when d=14 m and π≈3.14.",153.86,"m²","Area needs the radius, not the diameter.","Use r=7, then calculate 49×3.14.","understand-3"],["Find the ring area for R=8 and r=4 using π≈3.14.",150.72,"units²","Subtract the squared radii before multiplying by π.","Calculate (64−16)×3.14.","understand-4"]],
  [["Find the central angle for 45%.",162,"°","A sector is the same fraction of 360°.","Calculate 0.45×360.","understand-2"],["A 108° sector is what percent?",30,"%","Compare the sector angle with a full turn.","Calculate 108÷360×100.","understand-2"],["A 22% sector represents how many of 250 people?",55,"people","Convert the percent to a decimal part of the total.","Calculate 0.22×250.","understand-3"]],
  [["Find the total number of responses: 15+10+5+20.",50,"responses","The whole is the sum of all categories.","Add the four counts before converting any share.","understand-1"],["Find the central angle for 12 of 40 responses.",108,"°","Use count÷total×360°.","12÷40=0.30, then multiply by 360.","understand-2"],["Three sectors are 144°, 90°, and 54°. Find the final angle.",72,"°","All constructed sectors must total 360°.","The known angles total 288°; subtract from 360°.","understand-4"]]
];

const phases = (tool: string) => [
  {
    title: "Predict · core",
    instruction:
      "Record the requested estimate, relationship, or sector result before operating the model.",
    target: "The prediction must be specific and checkable.",
  },
  {
    title: "Build · core",
    instruction: `Use the ${tool} to construct every named quantity and label.`,
    target: "Controls, visible state, and transcript must agree.",
  },
  {
    title: "Verify · core",
    instruction:
      "Operate the model, complete the exact checkpoint, and record evidence.",
    target: "The model calculation and checkpoint must both be correct.",
  },
  {
    title: "Repair · consolidation",
    instruction:
      "Inspect the supplied incorrect construction, identify its first mathematical error, and correct it.",
    target:
      "The repaired construction must preserve all required relationships and units.",
  },
  {
    title: "Create · extension",
    instruction:
      "Create a different valid example that meets the displayed target.",
    target:
      "Multiple equivalent valid constructions are accepted when every constraint is satisfied.",
  },
];

function practice(lesson: number): Unit4Question[] {
  return practiceSpecs[lesson].map((x, i) =>
    number(
      `p4${lesson + 1}${i + 1}`,
      x[0],
      x[1],
      `Correct: ${fmt(x[1])}${x[2] ? ` ${x[2]}` : ""}. Check the representation, operation, and unit.`,
      x[3],
      x[4],
      `Lesson 4.${lesson + 1}`,
      x[5],
      x[2],
    ),
  );
}

function exitTicket(lesson:number):Unit4Question[]{return exitSpecs[lesson].map((x,j)=>number(`e4${lesson+1}${j+1}`,x[0],x[1],`Correct: ${fmt(x[1])}${x[2]?` ${x[2]}`:""}. Use the lesson model to justify the result.`,x[3],x[4],`Lesson 4.${lesson+1}`,x[5],x[2]));}

function checkTask(lesson:number,i:number){
  const a=11+i,b=3+i/2;
  if(lesson===0){if(i%3===0)return{prompt:`A circular garden has radius ${a/2} m. Find its diameter.`,answer:a,unit:'m',route:'understand-2'};if(i%3===1)return{prompt:`A circular sign has diameter ${a+7} cm. Find its radius.`,answer:(a+7)/2,unit:'cm',route:'understand-2'};return{prompt:`Central angles are ${80+i}° and ${95+i}°. Find the remaining angle.`,answer:185-2*i,unit:'°',route:'understand-3'};}
  if(lesson===1){if(i%3===0)return{prompt:`Using π≈3.14, find C for a lid with d=${a} cm.`,answer:3.14*a,unit:'cm',route:'understand-3'};if(i%3===1)return{prompt:`Using π≈3.14, find C for a wheel with r=${b} m.`,answer:2*3.14*b,unit:'m',route:'understand-3'};return{prompt:`A circle has C=${fmt(3.14*a)} cm. Find d using π≈3.14.`,answer:a,unit:'cm',route:'understand-3'};}
  if(lesson===2){if(i%2===0)return{prompt:`Find the area of a parallelogram with b=${a} m and perpendicular h=${b} m.`,answer:a*b,unit:'m²',route:'understand-3'};return{prompt:`A parallelogram has area ${a*b} cm² and base ${a} cm. Find its perpendicular height.`,answer:b,unit:'cm',route:'understand-4'};}
  if(lesson===3){if(i%2===0)return{prompt:`Find the area of a triangle with b=${a} cm and perpendicular h=${b*2} cm.`,answer:a*b,unit:'cm²',route:'understand-2'};return{prompt:`A triangle has area ${a*b} m² and height ${b*2} m. Find its base.`,answer:a,unit:'m',route:'understand-4'};}
  if(lesson===4){if(i%3<2)return{prompt:`Using π≈3.14, find the area of a circle with radius ${b+1} cm.`,answer:3.14*(b+1)**2,unit:'cm²',route:'understand-3'};return{prompt:`Using π≈3.14, find the ring area with R=${b+4} m and r=${b} m.`,answer:3.14*((b+4)**2-b**2),unit:'m²',route:'understand-4'};}
  if(lesson===5){const pct=10+2*i;if(i%3===0)return{prompt:`Find the central angle representing ${pct}% of a circle graph.`,answer:pct*3.6,unit:'°',route:'understand-2'};if(i%3===1)return{prompt:`A ${pct}% sector represents a total of 200 people. Find its count.`,answer:pct*2,unit:'people',route:'understand-3'};return{prompt:`A sector measures ${pct*3.6}°. Find its percent of the circle.`,answer:pct,unit:'%',route:'understand-2'};}
  const total=50+5*i,part=total*(1+(i%4))/10;if(i%3===0)return{prompt:`A category has ${part} of ${total} responses. Find its central angle.`,answer:part/total*360,unit:'°',route:'understand-2'};if(i%3===1)return{prompt:`Three sectors total ${250+i}°. Find the final central angle.`,answer:110-i,unit:'°',route:'understand-4'};return{prompt:`A category has ${part} of ${total} responses. Find its percent.`,answer:part/total*100,unit:'%',route:'understand-2'};
}

function checkBank(lesson:number):Unit4Question[]{const out:Unit4Question[]=[];for(let i=0;i<30;i++){const task=checkTask(lesson,i),id=`c4${lesson+1}${String(i+1).padStart(2,'0')}`,category=`Lesson 4.${lesson+1}`,answer=Number(task.answer.toFixed(3)),feedback=`The verified value is ${fmt(answer)} ${task.unit}. Use the lesson model, show the relationship, and check the unit.`;switch(i%5){case 0:out.push(number(id,task.prompt,answer,feedback,`Represent the named quantities in “${task.prompt}” before calculating.`,`Write the Lesson 4.${lesson+1} formula with the given values substituted, then check whether ${task.unit} is linear, square, percent, or angle measure.`,category,task.route,task.unit));break;case 1:out.push(choice(id,task.prompt,[fmt(answer),fmt(answer+2),fmt(answer*2),fmt(Math.max(0,answer-2))],0,feedback,`Estimate the magnitude of “${task.prompt}” before comparing the options.`,`Substitute the given measurements into the lesson formula and complete the operation without using an answer choice as a clue.`,category,task.route));break;case 2:out.push(multi(id,`Select every expression equal to ${fmt(answer)}.`,[fmt(answer),`${fmt(answer*2)}÷2`,`${fmt(answer/4)}×4`,fmt(answer+1)],[0,1,2],feedback,`Evaluate all four expressions for this ${task.unit} target independently.`,`Check both inverse-operation expressions by simplifying multiplication or division before selecting.`,category,task.route));break;case 3:out.push(order(id,`Order these ${task.unit} measurements from least to greatest.`,[fmt(answer+2),fmt(Math.max(0,answer-2)),fmt(answer)],[fmt(Math.max(0,answer-2)),fmt(answer),fmt(answer+2)],'The ordered values preserve a common unit.',`Keep these three ${task.unit} measurements in the same unit and compare their place values.`,`Locate the two values separated by four units; the remaining value belongs between them.`,category,task.route));break;default:out.push(choice(id,`Which model correctly begins this task? ${task.prompt}`,[['circle labelled with centre, radius, and diameter','C-to-d ratio model with units','parallelogram with base and perpendicular height','two congruent triangles forming a parallelogram','circle sectors rearranged to πr by r','proportional sector labelled percent, angle, and count','data table connected to percent and central angle'][lesson],'unlabelled decorative circle','bar without a scale','digit list without a relationship'],0,'The selected model displays the quantities and relationship required by the task.',`List the quantities named in “${task.prompt}” that the model must show.`,`Choose the representation that makes the required operation and units visible before any arithmetic.`,category,'explore','model-select'));}}return out;
}

export const grade7Unit4Lessons: Unit4Lesson[] = blueprints.map((b, i) => {
  const p = practice(i),
    warm = warmupSpecs[i],
    shifted = rotate(warm[1], warm[2], i + 1);
  return {
    slug: b.slug,
    number: b.number,
    title: b.title,
    outcome: b.outcome,
    duration: "Two sessions · core pathway about 35–40 minutes each",
    promise: b.promise,
    goals: b.goals,
    prerequisites: b.prerequisites,
    warmup: {
      id: `w4${i + 1}`,
      prompt: warm[0],
      ...shifted,
      feedback: warm[4],
      hint: warm[3],
      hint2: warm[4],
      category: "Readiness",
      route: "understand-1",
    },
    bigIdeas: b.ideas.map(([title, body]) => ({ title, body })),
    understand: b.understand.map(([title, body, model, mistake]) => ({
      title,
      body: `${body} Use the displayed model to preserve every quantity. Estimate or compare before accepting a result; this exposes the common error of ${mistake.toLowerCase()}`,
      model,
      mistake,
    })),
    examples: b.examples.map(([label, question, steps, answer]) => ({
      label,
      question,
      steps: [
        ...steps,
        `Check that ${answer} is reasonable and uses the required unit or representation.`,
      ],
      answer,
    })),
    vocabulary: b.vocabulary.map(([term, definition, example]) => ({
      term,
      definition,
      example,
    })),
    explore: {
      title: b.exploreTitle,
      launch: `Use the ${b.exploreTool}. Predict, Build, and Verify form the core route; Repair is consolidation and Create is extension.`,
      phases: phases(b.exploreTool),
      reflection: [
        "Record the verified mathematical state.",
        "Describe what the model makes visible.",
        "Connect the model to the symbolic rule.",
      ],
    },
    practice: p,
    check: checkBank(i),
    apply: {
      title: b.applyTitle,
      scenario: b.scenario,
      tasks: b.applyTasks,
      success: [
        "Every required calculation and unit is independently verified.",
        "The constructed model matches the stated quantities and relationship.",
        "The comparison, reasonableness check, and decision follow from verified evidence.",
      ],
      values: b.applyValues,
    },
    exit: exitTicket(i),
    readiness: b.readiness,
    next:
      i < 6
        ? {
            title: `Lesson 4.${i + 2} · ${blueprints[i + 1].title}`,
            body: "Continue when the core route and exit ticket are secure.",
            href: `../${blueprints[i + 1].slug}/`,
          }
        : {
            title: "Unit 4 Review & Water Park Designer",
            body: "Connect all seven lessons in one design mission.",
            href: "../unit-review/",
          },
  };
});

export const grade7Unit4Slugs = blueprints.map((x) => x.slug);
export const findGrade7Unit4Lesson = (slug: string) =>
  grade7Unit4Lessons.find((x) => x.slug === slug);
