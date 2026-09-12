export type Topic = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  status: 'ready' | 'planned';
};

export type Unit = {
  slug: string;
  number: string;
  title: string;
  description: string;
  topics: Topic[];
};

export type Course = {
  slug: string;
  grade: string;
  subject: 'Mathematics' | 'Science';
  shortSubject: 'Math' | 'Science';
  color: string;
  accent: string;
  description: string;
  units: Unit[];
};

export const courses: Course[] = [
  {
    slug: 'grade-6-math',
    grade: 'Grade 6',
    subject: 'Mathematics',
    shortSubject: 'Math',
    color: '#174ea6',
    accent: '#dbeafe',
    description: 'Build number sense, mathematical reasoning, and confidence through models, examples, practice, and purposeful challenges.',
    units: [
      {
        slug: 'positive-negative-numbers',
        number: '01',
        title: 'Positive & Negative Numbers',
        description: 'Use direction, magnitude, models, and number lines to understand and operate with integers.',
        topics: [
          { slug: 'understanding-positive-negative', number: '1.1', title: 'Understanding & Comparing Positive and Negative Numbers', summary: 'Use real-life contexts and number lines to understand direction, magnitude, comparison, and order.', status: 'ready' },
          { slug: 'what-are-integers-add', number: '1.2', title: 'What Are Integers and How Do You Add Them?', summary: 'Build integer addition with additive inverses, zero pairs, chips, and number-line models.', status: 'ready' },
          { slug: 'adding-integers', number: '1.3', title: 'Adding Integers', summary: 'Move from models to efficient symbolic strategies for adding integers.', status: 'ready' },
          { slug: 'subtracting-integers-models', number: '1.4', title: 'Subtracting Integers Using Models', summary: 'Represent integer subtraction using chips and number-line models.', status: 'ready' },
          { slug: 'subtracting-integers', number: '1.5', title: 'Subtracting Integers', summary: 'Use relationships between addition and subtraction to calculate differences.', status: 'ready' }
        ]
      },
      {
        slug: 'coordinates-design', number: '02', title: 'Coordinates & Design', description: 'Locate, transform, and analyze shapes on the Cartesian plane.',
        topics: [
          { slug: 'describing-location-cartesian-plane', number: '2.1', title: 'Describing Location on a Cartesian Plane', summary: 'Connect two number lines to form a Cartesian plane, then locate and describe points and polygon vertices with ordered pairs.', status: 'ready' },
          { slug: 'translating-shapes', number: '2.2', title: 'Translating Shapes in the Cartesian Plane', summary: 'Slide shapes and describe how each vertex moves.', status: 'ready' },
          { slug: 'reflecting-shapes', number: '2.3', title: 'Reflecting Shapes in the Cartesian Plane', summary: 'Create and describe mirror images across lines of reflection.', status: 'ready' },
          { slug: 'rotating-shapes', number: '2.4', title: 'Rotating Shapes in the Cartesian Plane', summary: 'Turn shapes around a point and track their vertices.', status: 'ready' },
          { slug: 'congruence-symmetry', number: '2.5', title: 'Congruence & Symmetry', summary: 'Compare shapes and analyze reflectional and rotational symmetry.', status: 'ready' },
          { slug: 'tessellations', number: '2.6', title: 'Tessellations', summary: 'Create repeating designs that cover a surface without gaps or overlaps.', status: 'ready' }
        ]
      },
      {
        slug: 'number-operations',
        number: '03',
        title: 'Number Operations',
        description: 'Use prime factors, powers, and the conventional order of operations to reveal and work with number structure.',
        topics: [
          { slug: 'prime-factorization-divisibility', number: '3.1', title: 'Prime Factorization & Divisibility', summary: 'Compose products in different ways, break composite numbers into prime factors, and use factor structure to reason about common factors and divisibility.', status: 'ready' },
          { slug: 'expressing-powers', number: '3.2', title: 'Expressing Powers', summary: 'Represent repeated multiplication with powers and connect powers to prime factorization and divisibility.', status: 'ready' },
          { slug: 'operations-parentheses-powers', number: '3.3', title: 'Operations with Parentheses & Powers', summary: 'Evaluate multi-step numerical expressions by understanding grouping, powers, and equal-priority operations.', status: 'ready' }
        ]
      },
      {
        slug: 'decimals-fractions',
        number: '04',
        title: 'Operations on Decimals & Fractions',
        description: 'Build flexible, visual, and efficient strategies for fraction and decimal operations in real situations.',
        topics: [
          { slug: 'adding-subtracting-fractions', number: '4.1', title: 'Adding & Subtracting Fractions', summary: 'Use equivalent fractions and common denominators to add and subtract fractions with related and unrelated denominators.', status: 'ready' },
          { slug: 'multiplying-fractions', number: '4.2', title: 'Multiplying Fractions', summary: 'Interpret and calculate multiplication between natural numbers and fractions using models, repeated addition, and part-of reasoning.', status: 'ready' },
          { slug: 'fractions-equal-shares', number: '4.3', title: 'Relating Fractions to Equal Shares', summary: 'Connect equal sharing, fractions, division statements, quotients, and decimal representations.', status: 'ready' },
          { slug: 'adding-subtracting-decimals', number: '4.4', title: 'Adding & Subtracting Decimal Numbers', summary: 'Use place value and standard algorithms to solve decimal addition and subtraction problems.', status: 'ready' },
          { slug: 'multiplying-decimals', number: '4.5', title: 'Multiplying Decimal Numbers', summary: 'Multiply decimal numbers by natural numbers, estimate products, and solve money and measurement problems.', status: 'ready' },
          { slug: 'dividing-decimals', number: '4.6', title: 'Dividing Decimal Numbers', summary: 'Divide decimal numbers by natural numbers, interpret remainders as decimals, estimate quotients, and solve problems.', status: 'ready' }
        ]
      },
      {
        slug: 'ratios-rates',
        number: '05',
        title: 'Ratios & Rates',
        description: 'Connect fractions, decimals, percentages, ratios, proportions, and unit rates to compare quantities and solve real situations.',
        topics: [
          { slug: 'relating-fractions-decimals-percentages', number: '5.1', title: 'Relating Fractions, Decimal Numbers, and Percentages', summary: 'Connect fractions, decimals, ratios, and percentages, then use proportional reasoning to find a percent, a part, or a whole.', status: 'ready' },
          { slug: 'equivalent-ratios', number: '5.2', title: 'Equivalent Ratios', summary: 'Create and compare equivalent ratios, use proportions, and solve problems involving ratios, rates, and proportional relationships.', status: 'ready' },
          { slug: 'unit-rates', number: '5.3', title: 'Unit Rates', summary: 'Interpret and calculate unit rates to compare quantities and make decisions in real-life situations.', status: 'ready' }
        ]
      },
      {
        slug: 'algebra',
        number: '06',
        title: 'Algebra',
        description: 'Simplify algebraic expressions, preserve equality with models, solve equations using inverse operations, and verify solutions.',
        topics: [
          { slug: 'simplifying-algebraic-expressions', number: '6.1', title: 'Simplifying Algebraic Expressions', summary: 'Identify like terms, combine coefficients, use algebraic properties, and recognize equivalent expressions.', status: 'ready' },
          { slug: 'solving-equations', number: '6.2', title: 'Solving Equations', summary: 'Use balance and algebra-tile models to preserve equality, isolate variables, and solve one- and two-operation equations.', status: 'ready' },
          { slug: 'solving-equations-algebraically', number: '6.3', title: 'Solving Equations Algebraically', summary: 'Move from models to efficient inverse-operation steps, simplify when needed, and verify solutions using LHS and RHS.', status: 'ready' }
        ]
      },
      {
        slug: 'measurement',
        number: '07',
        title: 'Measurement',
        description: 'Build area from rectangles to parallelograms and triangles, decompose composite shapes, and model volume with cubic units.',
        topics: [
          { slug: 'area-parallelogram', number: '7.1', title: 'Area of a Parallelogram', summary: 'Rearrange parallelograms into rectangles, use base and perpendicular height to find area, and determine missing dimensions.', status: 'ready' },
          { slug: 'area-triangle', number: '7.2', title: 'Area of a Triangle', summary: 'Connect triangles to parallelograms, understand why triangle area is half of base times perpendicular height, and solve area problems.', status: 'ready' },
          { slug: 'area-composite-shapes', number: '7.3', title: 'Area of Composite Shapes', summary: 'Decompose composite shapes in different ways, find missing dimensions, and combine familiar areas to determine a total area.', status: 'ready' },
          { slug: 'understanding-volume', number: '7.4', title: 'Understanding Volume', summary: 'Model volume with cubic units and layers, distinguish volume from capacity, and solve problems involving right rectangular prisms.', status: 'ready' }
        ]
      },
      {
        slug: 'patterns',
        number: '08',
        title: 'Patterns',
        description: 'Investigate functions as relationships between changing quantities and connect rules, tables, graphs, ordered pairs, and equations.',
        topics: [
          { slug: 'investigating-functions-tables-graphs', number: '8.1', title: 'Investigating Functions in Tables and Graphs', summary: 'Identify independent and dependent variables, explore function machines, and describe rules that connect inputs to outputs.', status: 'ready' },
          { slug: 'representing-functions', number: '8.2', title: 'Representing Functions', summary: 'Represent the same function with tables, ordered pairs, Cartesian graphs, growing patterns, and algebraic equations.', status: 'ready' },
          { slug: 'solving-problems-functions', number: '8.3', title: 'Solving Problems Involving Functions', summary: 'Use function rules to determine outputs, work backward to find inputs, make predictions, and solve real-life problems.', status: 'ready' }
        ]
      },
      {
        slug: 'statistics',
        number: '09',
        title: 'Statistics',
        description: 'Conduct experiments, represent relative frequency in multiple forms, and use sample data to reason about likelihood and predictions.',
        topics: [
          { slug: 'conducting-experiments', number: '9.1', title: 'Conducting Experiments', summary: 'Identify possible and equally likely outcomes, describe events, collect categorized experimental data, and compare predictions with results.', status: 'ready' },
          { slug: 'relative-frequency', number: '9.2', title: 'Relative Frequency', summary: 'Compare frequency with the total, express relative frequency as fractions, decimals, and percentages, and use data to describe likelihood.', status: 'ready' },
          { slug: 'analyzing-relative-frequency', number: '9.3', title: 'Analyzing Relative Frequency', summary: 'Compare experimental samples, use relative frequency to make predictions, and investigate how larger sample sizes improve estimates.', status: 'ready' }
        ]
      }
    ]
  },
  {
    slug: 'grade-7-math', grade: 'Grade 7', subject: 'Mathematics', shortSubject: 'Math', color: '#2457c5', accent: '#dbeafe',
    description: 'Notice patterns, connect representations, justify strategies, and apply mathematics across number, algebra, geometry, and data.',
    units: [
      {
        slug: 'patterns-relations', number: '01', title: 'Patterns and Relations', description: 'Use divisibility, expressions, tables, graphs, and equations to reveal and describe mathematical relationships.',
        topics: [
          { slug: 'patterns-in-division', number: '1.1', title: 'Patterns in Division', summary: 'Discover and explain divisibility rules for 2, 4, 5, 8, and 10 using place-value patterns.', status: 'ready' },
          { slug: 'more-patterns-in-division', number: '1.2', title: 'More Patterns in Division', summary: 'Extend divisibility reasoning to 3, 6, and 9 and explain why division by zero is undefined.', status: 'ready' },
          { slug: 'algebraic-expressions', number: '1.3', title: 'Algebraic Expressions', summary: 'Use variables to represent changing quantities and evaluate expressions.', status: 'ready' },
          { slug: 'relationships-in-patterns', number: '1.4', title: 'Relationships in Patterns', summary: 'Connect visual and contextual patterns to rules involving the term number.', status: 'ready' },
          { slug: 'patterns-tables', number: '1.5', title: 'Patterns and Relationships in Tables', summary: 'Create and analyze tables of values from input-output rules.', status: 'ready' },
          { slug: 'graphing-relations', number: '1.6', title: 'Graphing Relations', summary: 'Graph tables of values and use graphs to answer questions.', status: 'ready' },
          { slug: 'reading-writing-equations', number: '1.7', title: 'Reading and Writing Equations', summary: 'Translate statements into equations and distinguish equations from expressions.', status: 'ready' },
          { slug: 'equations-algebra-tiles', number: '1.8', title: 'Solving Equations Using Algebra Tiles', summary: 'Model and solve introductory whole-number equations while preserving equality.', status: 'ready' }
        ]
      },
      { slug: 'integers', number: '02', title: 'Integers', description: 'Represent, add, and subtract integers using tiles, number lines, and efficient symbolic strategies.', topics: [] },
      { slug: 'fractions-decimals-percents', number: '03', title: 'Fractions, Decimals, and Percents', description: 'Connect positive rational-number representations and solve decimal and percent problems.', topics: [] },
      { slug: 'circles-area-circle-graphs', number: '04', title: 'Circles, Area, and Circle Graphs', description: 'Investigate circle relationships, develop area formulas, and represent data with circle graphs.', topics: [] },
      { slug: 'operations-fractions', number: '05', title: 'Operations with Fractions', description: 'Add and subtract positive fractions and mixed numbers using models and symbols.', topics: [] },
      { slug: 'equations', number: '06', title: 'Equations', description: 'Model, solve, verify, and compare strategies for one- and two-step equations.', topics: [] },
      { slug: 'data-probability', number: '07', title: 'Data Analysis and Probability', description: 'Analyze averages and outliers, then compare theoretical and experimental probability.', topics: [] },
      { slug: 'geometry-transformations', number: '08', title: 'Geometry and Transformations', description: 'Construct geometric relationships and transform figures across four coordinate quadrants.', topics: [] }
    ]
  },
  {
    slug: 'grade-7-science', grade: 'Grade 7', subject: 'Science', shortSubject: 'Science', color: '#087f5b', accent: '#d3f9d8',
    description: 'Investigate living systems, matter, energy, Earth, and structures through evidence and inquiry.',
    units: [
      { slug: 'interactions-ecosystems', number: '01', title: 'Interactions & Ecosystems', description: 'Examine relationships among organisms and environments.', topics: [] },
      { slug: 'plants-food-fibre', number: '02', title: 'Plants for Food & Fibre', description: 'Explore plant needs, uses, and sustainable production.', topics: [] },
      { slug: 'heat-temperature', number: '03', title: 'Heat & Temperature', description: 'Investigate thermal energy and its effects.', topics: [] },
      { slug: 'structures-forces', number: '04', title: 'Structures & Forces', description: 'Analyze design, strength, stability, and load.', topics: [] },
      { slug: 'planet-earth', number: '05', title: 'Planet Earth', description: 'Interpret evidence about Earth’s materials and changes.', topics: [] }
    ]
  },
  {
    slug: 'grade-8-science', grade: 'Grade 8', subject: 'Science', shortSubject: 'Science', color: '#0b7285', accent: '#cff4fc',
    description: 'Use models, experiments, and design challenges to understand systems in the natural and engineered world.',
    units: [
      { slug: 'mix-flow-matter', number: '01', title: 'Mix & Flow of Matter', description: 'Investigate fluids, mixtures, and material transport.', topics: [] },
      { slug: 'cells-systems', number: '02', title: 'Cells & Systems', description: 'Connect cell structures to the function of living systems.', topics: [] },
      { slug: 'light-optical-systems', number: '03', title: 'Light & Optical Systems', description: 'Model light behaviour and optical technologies.', topics: [] },
      { slug: 'mechanical-systems', number: '04', title: 'Mechanical Systems', description: 'Analyze machines, work, efficiency, and design.', topics: [] },
      { slug: 'fresh-saltwater-systems', number: '05', title: 'Freshwater & Saltwater Systems', description: 'Study water systems, processes, and human impacts.', topics: [] }
    ]
  },
  {
    slug: 'grade-9-science', grade: 'Grade 9', subject: 'Science', shortSubject: 'Science', color: '#5f3dc4', accent: '#e5dbff',
    description: 'Explain biological, chemical, electrical, and environmental systems using scientific evidence.',
    units: [
      { slug: 'biological-diversity', number: '01', title: 'Biological Diversity', description: 'Explore variation, inheritance, adaptation, and species survival.', topics: [] },
      { slug: 'matter-chemical-change', number: '02', title: 'Matter & Chemical Change', description: 'Use evidence and models to describe chemical change.', topics: [] },
      { slug: 'environmental-chemistry', number: '03', title: 'Environmental Chemistry', description: 'Analyze substances, pathways, and environmental effects.', topics: [] },
      { slug: 'electrical-principles', number: '04', title: 'Electrical Principles & Technologies', description: 'Investigate circuits, energy transfer, and electrical design.', topics: [] },
      { slug: 'space-exploration', number: '05', title: 'Space Exploration', description: 'Examine observation, technologies, and ideas about space.', topics: [] }
    ]
  }
];

export const findCourse = (slug: string) => courses.find((course) => course.slug === slug);
