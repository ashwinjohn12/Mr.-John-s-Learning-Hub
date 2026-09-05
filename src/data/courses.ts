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
          { slug: 'translating-shapes', number: '2.2', title: 'Translating Shapes in the Cartesian Plane', summary: 'Slide shapes and describe how each vertex moves.', status: 'planned' },
          { slug: 'reflecting-shapes', number: '2.3', title: 'Reflecting Shapes in the Cartesian Plane', summary: 'Create and describe mirror images across lines of reflection.', status: 'planned' },
          { slug: 'rotating-shapes', number: '2.4', title: 'Rotating Shapes in the Cartesian Plane', summary: 'Turn shapes around a point and track their vertices.', status: 'planned' },
          { slug: 'congruence-symmetry', number: '2.5', title: 'Congruence & Symmetry', summary: 'Compare shapes and analyze reflectional and rotational symmetry.', status: 'planned' },
          { slug: 'tessellations', number: '2.6', title: 'Tessellations', summary: 'Create repeating designs that cover a surface without gaps or overlaps.', status: 'planned' }
        ]
      },
      { slug: 'number-operations', number: '03', title: 'Number Operations', description: 'Explore prime factorization, powers, and order of operations.', topics: [] },
      { slug: 'decimals-fractions', number: '04', title: 'Operations on Decimals & Fractions', description: 'Develop flexible strategies for operations with fractions and decimal numbers.', topics: [] },
      { slug: 'ratios-rates', number: '05', title: 'Ratios & Rates', description: 'Compare quantities and use proportional thinking in real situations.', topics: [] },
      { slug: 'patterns-algebra', number: '06', title: 'Patterns & Algebra', description: 'Describe relationships with tables, expressions, and equations.', topics: [] },
      { slug: 'statistics-probability', number: '07', title: 'Statistics & Probability', description: 'Collect, interpret, and communicate information from data and chance.', topics: [] }
    ]
  },
  {
    slug: 'grade-7-math', grade: 'Grade 7', subject: 'Mathematics', shortSubject: 'Math', color: '#2457c5', accent: '#dbeafe',
    description: 'Connect representations, strategies, and applications across number, algebra, geometry, and data.',
    units: [
      { slug: 'number-operations', number: '01', title: 'Number & Operations', description: 'Develop flexible strategies for rational-number operations.', topics: [] },
      { slug: 'fractions-decimals-percent', number: '02', title: 'Fractions, Decimals & Percent', description: 'Move fluently among proportional representations.', topics: [] },
      { slug: 'patterns-relations', number: '03', title: 'Patterns & Relations', description: 'Model and analyze changing quantities.', topics: [] },
      { slug: 'shape-space', number: '04', title: 'Shape & Space', description: 'Reason about measurement and geometric relationships.', topics: [] },
      { slug: 'statistics-probability', number: '05', title: 'Statistics & Probability', description: 'Use data and chance to make informed conclusions.', topics: [] }
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
