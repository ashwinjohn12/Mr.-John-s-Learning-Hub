import type { PracticeQuestion, TopicContent } from './topicContent';

type Difficulty = PracticeQuestion['difficulty'];
const levels: Difficulty[] = ['foundations', 'standard', 'challenge'];
const signed = (n: number) => n < 0 ? `−${Math.abs(n)}` : `${n}`;
const point = (x: number, y: number) => `(${signed(x)}, ${signed(y)})`;
const mc = (difficulty: Difficulty, prompt: string, correct: string, wrong: string[], hint: string, explain: string, shift = 0): PracticeQuestion => {
  const all = [correct, ...wrong.slice(0, 3)];
  const turn = ((shift % 4) + 4) % 4;
  const choices = [...all.slice(turn), ...all.slice(0, turn)];
  return { difficulty, prompt, choices, answer: choices.indexOf(correct), hint, explain };
};

const translationBank = (start: number, withHints: boolean): PracticeQuestion[] => levels.flatMap((difficulty, level) =>
  Array.from({ length: 10 }, (_, i) => {
    const n = start + level * 10 + i, x = (n % 7) - 3, y = ((n * 3) % 9) - 4;
    const dx = ((n * 2) % 5) - 2 || 3, dy = ((n * 4) % 7) - 3 || -2;
    const image = point(x + dx, y + dy);
    if (level === 0) return mc(difficulty, `Translation card ${n}: Point P${point(x, y)} is translated ${Math.abs(dx)} ${dx > 0 ? 'right' : 'left'} and ${Math.abs(dy)} ${dy > 0 ? 'up' : 'down'}. Where is P′?`, image,
      [point(x - dx, y + dy), point(x + dx, y - dy), point(x + dy, y + dx)], withHints ? 'Change x for horizontal movement and y for vertical movement.' : '', `Every point makes the same move, so P′ is ${image}.`, n);
    if (level === 1) {
      const move = `[${Math.abs(dx)}${dx > 0 ? 'R' : 'L'}, ${Math.abs(dy)}${dy > 0 ? 'U' : 'D'}]`;
      return mc(difficulty, `Translation card ${n}: P${point(x, y)} becomes P′${image}. Which movement describes the translation?`, move,
        [`[${Math.abs(dx)}${dx > 0 ? 'L' : 'R'}, ${Math.abs(dy)}${dy > 0 ? 'U' : 'D'}]`, `[${Math.abs(dx)}${dx > 0 ? 'R' : 'L'}, ${Math.abs(dy)}${dy > 0 ? 'D' : 'U'}]`, `[${Math.abs(dy)}${dy > 0 ? 'U' : 'D'}, ${Math.abs(dx)}${dx > 0 ? 'R' : 'L'}]`], withHints ? 'Subtract original coordinates from image coordinates.' : '', `x changes by ${signed(dx)} and y changes by ${signed(dy)}, so the movement is ${move}.`, n);
    }
    const original = point(x, y);
    return mc(difficulty, `Translation card ${n}: P′${image} was made by moving P ${Math.abs(dx)} ${dx > 0 ? 'right' : 'left'} and ${Math.abs(dy)} ${dy > 0 ? 'up' : 'down'}. Where was P?`, original,
      [point(x + 2 * dx, y + 2 * dy), point(x, y + 2 * dy), point(x + 2 * dx, y)], withHints ? 'Undo the movement: use the opposite directions from P′.' : '', `Reverse both components from P′ to recover P${original}.`, n);
  }));

const reflectionBank = (start: number, withHints: boolean): PracticeQuestion[] => levels.flatMap((difficulty, level) =>
  Array.from({ length: 10 }, (_, i) => {
    const n = start + level * 10 + i, x = (n % 8) + 1, y = ((n * 3) % 7) + 1;
    const acrossX = n % 2 === 0, original = point(n % 3 ? x : -x, n % 4 ? y : -y);
    const ox = n % 3 ? x : -x, oy = n % 4 ? y : -y;
    const correct = acrossX ? point(ox, -oy) : point(-ox, oy);
    if (level === 0) return mc(difficulty, `Reflection card ${n}: Reflect P${original} across the ${acrossX ? 'x' : 'y'}-axis. Where is P′?`, correct,
      [point(-ox, -oy), original, acrossX ? point(-ox, oy) : point(ox, -oy)], withHints ? `Across the ${acrossX ? 'x' : 'y'}-axis, only the ${acrossX ? 'y' : 'x'}-coordinate changes sign.` : '', `P and P′ are the same perpendicular distance from the mirror line, so P′ is ${correct}.`, n);
    if (level === 1) return mc(difficulty, `Reflection card ${n}: P${original} maps to P′${correct}. What is the line of reflection?`, acrossX ? 'x-axis' : 'y-axis',
      [acrossX ? 'y-axis' : 'x-axis', 'the line y = x', 'There is no reflection.'], withHints ? 'Which coordinate changed sign?' : '', `Only the ${acrossX ? 'y' : 'x'}-coordinate changes sign, so the mirror line is the ${acrossX ? 'x' : 'y'}-axis.`, n);
    const both = point(-ox, -oy);
    return mc(difficulty, `Reflection card ${n}: Reflect P${original} across the x-axis and then across the y-axis. Where is the final image?`, both,
      [point(ox, oy), point(-ox, oy), point(ox, -oy)], withHints ? 'Apply one reflection at a time and keep the intermediate point.' : '', `The first reflection changes y’s sign and the second changes x’s sign, giving ${both}.`, n);
  }));

const rotationBank = (start: number, withHints: boolean): PracticeQuestion[] => levels.flatMap((difficulty, level) =>
  Array.from({ length: 10 }, (_, i) => {
    const n = start + level * 10 + i, x = (n % 6) + 1, y = ((n * 2) % 7) + 1;
    const angle = [90, 180, 270][n % 3], clockwise = n % 2 === 0;
    const effective = clockwise ? (360 - angle) % 360 : angle;
    const result = effective === 90 ? [-y, x] : effective === 180 ? [-x, -y] : [y, -x];
    const correct = point(result[0], result[1]);
    if (level === 0) {
      const equivalent = angle === 180 ? '180°' : `${360 - angle}°`;
      return mc(difficulty, `Rotation card ${n}: What counter-clockwise angle reaches the same image as ${angle}° clockwise?`, equivalent,
        angle === 180 ? ['90°', '270°', '360°'] : [`${angle}°`, '180°', '360°'], withHints ? 'Equivalent opposite-direction turns add to 360°.' : '', `${angle}° clockwise is equivalent to ${equivalent} counter-clockwise.`, n);
    }
    if (level === 1) return mc(difficulty, `Rotation card ${n}: Rotate P${point(x, y)} ${angle}° ${clockwise ? 'clockwise' : 'counter-clockwise'} about the origin. Where is P′?`, correct,
      [point(-result[0], result[1]), point(result[0], -result[1]), point(-result[0], -result[1])], withHints ? 'Sketch the point and turn the paper or trace the quarter-turns.' : '', `After the turn, P′ is ${correct}.`, n);
    const extra = 90, total = (effective + extra) % 360;
    const final = total === 0 ? [x,y] : total === 90 ? [-y,x] : total === 180 ? [-x,-y] : [y,-x];
    const finalPoint = point(final[0], final[1]);
    return mc(difficulty, `Rotation card ${n}: Rotate P${point(x, y)} ${angle}° ${clockwise ? 'clockwise' : 'counter-clockwise'}, then 90° counter-clockwise, about the origin. Where is the final image?`, finalPoint,
      [point(final[0] + 1, final[1]), point(final[0], final[1] + 1), point(final[0] + 1, final[1] + 1)], withHints ? 'Combine the turns or apply them one at a time.' : '', `The combined turn lands at ${finalPoint}.`, n);
  }));

const conceptBank = (kind: 'symmetry' | 'tessellation', start: number, withHints: boolean): PracticeQuestion[] => levels.flatMap((difficulty, level) =>
  Array.from({ length: 10 }, (_, i) => {
    const n = start + level * 10 + i;
    if (kind === 'symmetry') {
      const casesByLevel: [string, string, string[]][][] = [[
        ['Two squares have side lengths 4 cm and 4 cm. Are they congruent?', 'Yes, because their size and shape match.', ['No, because all squares face differently.', 'Only if they are in the same location.', 'Only if one is reflected.']],
        ['A rectangle is rotated 90°. What changes?', 'Its orientation changes.', ['Its side lengths change.', 'Its area becomes zero.', 'Its shape stops being a rectangle.']],
        ['A shape folds exactly onto itself along a line. What is that line?', 'A line of symmetry', ['An x-coordinate', 'A centre of translation', 'A tessellation gap']],
        ['Which fact is required for two polygons to be congruent?', 'They have the same size and shape.', ['They have the same colour.', 'They face the same direction.', 'They occupy the same position.']],
        ['Which tool can help test whether two figures fit exactly?', 'Tracing paper', ['A calculator only', 'A thermometer', 'A number line only']]
      ],[
        ['A regular hexagon maps onto itself after a 60° turn. What does this show?', 'Rotational symmetry', ['Only reflectional symmetry', 'A translation', 'The shapes are not congruent']],
        ['What is the rotational order of a non-square rectangle?', '2', ['1', '3', '4']],
        ['Two congruent triangles face opposite directions. Which transformation may superimpose them?', 'A reflection', ['A dilation', 'Changing one side length', 'No transformation can']],
        ['A square has how many lines of reflectional symmetry?', '4', ['1', '2', '8']],
        ['Which smallest turn maps an equilateral triangle onto itself?', '120°', ['60°', '90°', '180°']]
      ],[
        ['A figure matches itself at 90°, 180°, 270°, and 360°. What is its rotational order?', '4', ['3', '5', '90']],
        ['Two figures have equal area but different side lengths. What can you conclude?', 'Equal area alone does not prove congruence.', ['They must be congruent.', 'They must be reflections.', 'They have rotational order 2.']],
        ['A figure has rotational order 6. What is its smallest matching angle?', '60°', ['30°', '90°', '120°']],
        ['Which combination can still map congruent figures exactly?', 'A reflection followed by a translation', ['Stretching followed by colouring', 'Changing one angle', 'Increasing every side length']],
        ['A shape has one diagonal line of symmetry. What must happen when folded there?', 'Every point on one side matches a point on the other.', ['The area doubles.', 'The shape rotates 90°.', 'Only the vertices need to match.']]
      ]];
      const cases = casesByLevel[level];
      const selected = cases[n % 5];
      return mc(difficulty, `Shape card ${n}: ${selected[0]}`, selected[1], selected[2], withHints ? 'Ignore colour, position, and direction. Compare size and shape.' : '', 'Congruent figures match exactly after a slide, flip, or turn.', n);
    }
    const casesByLevel: [string, string, string[]][][] = [[
      ['Which description defines a tessellation?', 'A repeating pattern with no gaps or overlaps', ['Any colourful pattern', 'Shapes with gaps between them', 'One polygon drawn once']],
      ['Congruent square tiles cover a floor with no spaces. What have they made?', 'A tessellation', ['A number line', 'A reflection line', 'A non-repeating list']],
      ['What happens if repeating tiles overlap?', 'The pattern is not a tessellation.', ['It is still always a tessellation.', 'The tiles become congruent.', 'The overlap creates an axis.']],
      ['Which word names an uncovered space between tiles?', 'Gap', ['Image', 'Origin', 'Prime']],
      ['Which shape tessellates by repeating edge-to-edge in a grid?', 'Square', ['Circle', 'Oval', 'Semicircle with spaces']]
    ],[
      ['Which transformation can repeat a tile in a straight row without turning it?', 'A translation', ['A reflection only', 'A dilation', 'Changing its side lengths']],
      ['Can an asymmetrical tile help make a symmetrical tessellation?', 'Yes', ['No, never', 'Only if every tile changes size', 'Only with gaps']],
      ['Why do equal circles alone fail to tessellate a plane?', 'Curved gaps remain between them.', ['They are congruent.', 'They have centres.', 'They can be translated.']],
      ['What is a repeating unit?', 'The smallest part that repeats to build the pattern', ['The largest tile only', 'Any one colour', 'A gap between shapes']],
      ['A tile alternates between two orientations. Which movements might create this?', 'Translations and rotations', ['Only resizing', 'Only changing colour', 'No transformations']]
    ],[
      ['A tile has no symmetry, but the full repeating pattern has a mirror line. Is this possible?', 'Yes, the arrangement can create symmetry.', ['No, tile and pattern symmetry must match.', 'Only if gaps are added.', 'Only if tiles overlap.']],
      ['A design repeats congruent tiles and has no gaps, but two tiles overlap. Is it a tessellation?', 'No, overlaps break the definition.', ['Yes, because there are no gaps.', 'Yes, because tiles are congruent.', 'Only if it has rotational symmetry.']],
      ['Which evidence best proves a complex design tessellates?', 'Every boundary meets another boundary with no gaps or overlaps.', ['It uses three colours.', 'It contains a square.', 'It has one line of symmetry.']],
      ['Can one repeating unit contain more than one tile?', 'Yes', ['No, never', 'Only if the tiles overlap', 'Only if all tiles are squares']],
      ['Why should a culturally inspired tessellation be studied from a reliable source?', 'Its source, context, and meaning deserve accurate respect.', ['All patterns mean the same thing.', 'Geometry replaces cultural context.', 'The artist does not matter.']]
    ]];
    const cases = casesByLevel[level];
    const selected = cases[n % 5];
    return mc(difficulty, `Design card ${n}: ${selected[0]}`, selected[1], selected[2], withHints ? 'Check both conditions: the pattern repeats and fully covers the surface.' : '', 'A tessellation covers a surface with repeating tiles and has no gaps or overlaps.', n);
  }));

const sharedSupport = ['Trace the original shape and image in two colours.', 'Work one vertex at a time and label each image point with a prime.', 'Use grid paper or the on-page model whenever you need a visual.'];

export const unit2RemainingContent: Record<string, TopicContent> = {
  'translating-shapes': {
    hook: 'A game character and every point on its shield slide 4 spaces right and 3 spaces down. How can one instruction move the whole design without changing it?',
    prerequisites: ['Read and plot ordered pairs.', 'Identify polygon vertices.', 'Use positive and negative directions on both axes.'],
    goals: ['create the image of a shape after a translation.', 'describe horizontal and vertical translation components.', 'connect every original vertex with its image coordinate.'],
    estimatedTime: '75–100 min', materials: ['pencil', 'optional ruler and tracing paper', 'grid paper — or use the on-page lab'],
    successCriteria: ['I move every vertex the same distance and direction.', 'I label image points with a prime.', 'I describe a translation with words or movement notation.', 'I explain what changes and what stays the same.'],
    bigIdea: 'A translation slides every point of a shape the same horizontal and vertical distance.',
    bigIdeaDetail: 'A translation is a transformation—a change in position. It keeps the shape, size, and orientation the same. A movement such as [4R, 3D] means 4 units right and 3 units down. Each x-coordinate increases by 4 and each y-coordinate decreases by 3.',
    connection: 'If A and B begin on the same horizontal line, why must A′ and B′ still be on one horizontal line after a translation?',
    concepts: [
      { title: 'A translation is a slide', text: 'The shape changes location but does not flip, turn, stretch, or shrink.', remember: 'Every point makes exactly the same move.' },
      { title: 'A movement has two components', text: 'The horizontal component changes x. The vertical component changes y. Describe both, even when one component is zero.', remember: 'Horizontal first, vertical second.' },
      { title: 'Prime marks identify image points', text: 'The original vertex A becomes A′, read “A prime.” B becomes B′, and so on.', remember: 'Parentheses name a point; brackets can describe a movement.' },
      { title: 'Coordinates reveal the move', text: 'Compare x with x′ and y with y′. The same differences should appear for every pair of matching vertices.', remember: 'Equal coordinate changes prove that the whole shape translated.' }
    ],
    misconceptions: [
      { title: '“I only need to move one vertex.”', text: 'Every vertex must make the same horizontal and vertical move.' },
      { title: '“I count the grid lines.”', text: 'Count spaces or units, not the starting grid line.' },
      { title: '“Translation and transformation mean the same thing.”', text: 'A translation is one kind of transformation. Reflections and rotations are transformations too.' }
    ],
    examples: [
      { title: 'Example 1 · Move one point', problem: 'Translate A(−2, 5) using [4R, 3D].', steps: ['Move 4 right: x changes from −2 to 2.', 'Move 3 down: y changes from 5 to 2.', 'Label the image A′.'], answer: 'A′(2, 2)' },
      { title: 'Example 2 · Describe a move', problem: 'B(−5, 1) becomes B′(2, −3). Describe the translation.', steps: ['x increases by 7, so move 7 right.', 'y decreases by 4, so move 4 down.', 'Check both components on another matching vertex if available.'], answer: '[7R, 4D]' },
      { title: 'Example 3 · Translate a polygon', problem: 'A triangle moves 2 left and 5 up.', steps: ['Subtract 2 from every x-coordinate.', 'Add 5 to every y-coordinate.', 'Plot A′, B′, and C′ and connect them in the original order.'], answer: 'The image is congruent and has the same orientation.' }
    ],
    vocabulary: [
      { term: 'Transformation', definition: 'A change to a figure’s position or orientation.', example: 'Translations, reflections, and rotations are transformations.' },
      { term: 'Translation', definition: 'A slide that moves every point the same distance and direction.', example: '[3L, 2U] moves a shape 3 left and 2 up.' },
      { term: 'Image', definition: 'The new figure made by a transformation.', example: 'A′B′C′ is the image of ABC.' },
      { term: 'Prime notation', definition: 'A mark used to label an image point.', example: 'A becomes A′ after a transformation.' },
      { term: 'Component', definition: 'One part of a movement: horizontal or vertical.', example: 'A translation can have a 4-right component and a 1-down component.' }
    ],
    explorePrompt: 'Predict A′ first. Then change each movement component and look for the coordinate change that all three vertices share.', exploreMode: 'compare',
    handsOn: { title: 'Tracing-Paper Translation', instructions: ['Draw a polygon on grid paper and label its vertices.', 'Trace the polygon.', 'Slide the tracing paper without turning or flipping it.', 'Mark the image vertices and record every ordered pair.', 'Describe the movement in words and bracket notation.'], reflect: 'How can you prove every point made the same move?' },
    practiceIntro: 'Choose a level. For each question, change x and y separately, then check the image point.', questions: translationBank(1, true), checkQuestions: translationBank(101, false),
    application: { title: 'Level-Designer Challenge', scenario: 'A platform has vertices (−6, −1), (−1, −1), (−1, 1), and (−6, 1). Move it [7R, 4U].', tasks: ['Find all four image coordinates.', 'Plot the original and image.', 'Explain why their sizes and orientations match.', 'Write a different translation that keeps the platform on the grid.'], reveal: 'The image vertices are (1, 3), (6, 3), (6, 5), and (1, 5). Every x increased by 7 and every y increased by 4.' },
    summary: ['A translation is a slide.', 'Every point moves the same distance and direction.', 'Horizontal movement changes x; vertical movement changes y.', 'Translations preserve size, shape, and orientation.'], support: sharedSupport,
    extension: ['Find a translation that moves a Quadrant II shape into Quadrant IV.', 'Work backward from an image and translation to find the original.', 'Explain why two translations in a row can be replaced by one translation.'],
    pat: { title: 'PAT-STYLE THINKING', prompt: 'A(−3, 4) becomes A′(2, −2). Which translation was used? A) [5R, 6D] B) [5L, 6U] C) [1L, 2D] D) [6R, 5D]', answer: 'A. x increases by 5 and y decreases by 6.' },
    review: ['I can translate a point and polygon.', 'I can describe both movement components.', 'I can use prime notation.', 'I can explain what a translation preserves.'],
    next: { title: 'Reflecting Shapes in the Cartesian Plane', slug: 'reflecting-shapes', status: 'ready' }
  },

  'reflecting-shapes': {
    hook: 'A logo must appear as an exact mirror image on the other side of an axis. Which coordinates change—and which stay the same?',
    prerequisites: ['Plot ordered pairs.', 'Translate and label image vertices.', 'Identify the x-axis and y-axis.'],
    goals: ['reflect a shape across the x-axis or y-axis.', 'describe a line of reflection.', 'connect original and image coordinates.'], estimatedTime: '75–100 min', materials: ['pencil', 'optional ruler, mirror, or tracing paper', 'grid paper — or use the on-page lab'],
    successCriteria: ['I place each image vertex the same perpendicular distance from the mirror line.', 'I reflect across either axis.', 'I label image vertices correctly.', 'I explain the coordinate pattern.'],
    bigIdea: 'A reflection flips a figure across a mirror line so matching points stay the same perpendicular distance from that line.',
    bigIdeaDetail: 'Across the y-axis, the x-coordinate changes sign while y stays the same. Across the x-axis, y changes sign while x stays the same. A reflection preserves size and shape but reverses orientation.',
    connection: 'Why does a point on the line of reflection stay fixed?',
    concepts: [
      { title: 'A reflection is a flip', text: 'The line of reflection acts like a mirror. The original and image lie on opposite sides.', remember: 'Reflect across the named axis, not toward it.' },
      { title: 'Measure perpendicular distance', text: 'Join a point to its image with the shortest path to the mirror line. Both points are equally far from that line.', remember: 'Count spaces straight across the axis.' },
      { title: 'Across y, x changes', text: 'Reflecting (x, y) across the y-axis gives (−x, y).', remember: 'The y-axis is vertical, so the left-right x-location reverses.' },
      { title: 'Across x, y changes', text: 'Reflecting (x, y) across the x-axis gives (x, −y).', remember: 'The x-axis is horizontal, so the up-down y-location reverses.' }
    ],
    misconceptions: [{ title: '“Across the x-axis means change x.”', text: 'The x-axis is the mirror line. The vertical y-location reverses.' }, { title: '“A reflection is a slide.”', text: 'A reflection reverses orientation; a translation does not.' }, { title: '“Every coordinate changes sign.”', text: 'Only the coordinate perpendicular to the mirror axis changes sign.' }],
    examples: [
      { title: 'Example 1 · Across the y-axis', problem: 'Reflect P(−6, 3) across the y-axis.', steps: ['The y-axis is the mirror line.', 'Reverse the left-right x-location.', 'Keep y = 3.'], answer: 'P′(6, 3)' },
      { title: 'Example 2 · Across the x-axis', problem: 'Reflect Q(4, −2) across the x-axis.', steps: ['Keep x = 4.', 'Reverse the up-down y-location.', 'Check equal distance from the x-axis.'], answer: 'Q′(4, 2)' },
      { title: 'Example 3 · Point on an axis', problem: 'Reflect R(0, 5) across the y-axis.', steps: ['R lies on the y-axis.', 'Its perpendicular distance from the mirror line is 0.', 'It therefore maps onto itself.'], answer: 'R′(0, 5)' }
    ],
    vocabulary: [{ term: 'Reflection', definition: 'A transformation that flips a figure across a line.', example: 'A reflection across the y-axis swaps left and right.' }, { term: 'Line of reflection', definition: 'The mirror line halfway between matching original and image points.', example: 'The x-axis can be a line of reflection.' }, { term: 'Perpendicular', definition: 'Meeting a line at a right angle.', example: 'Measure straight across, perpendicular to the mirror line.' }, { term: 'Orientation', definition: 'The direction in which a figure faces.', example: 'A reflection reverses orientation.' }, { term: 'Image', definition: 'The figure made after a transformation.', example: 'P′ is the image of P.' }],
    explorePrompt: 'Switch the mirror line and predict A′. Notice which coordinate stays and which coordinate changes sign.', exploreMode: 'compare',
    handsOn: { title: 'Mirror-Line Test', instructions: ['Draw a polygon that does not cross an axis.', 'Choose the x-axis or y-axis as the mirror line.', 'Use tracing paper or careful counting to reflect every vertex.', 'Draw segments from each point to its image.', 'Check that each segment crosses the mirror line at a right angle and is split in half.'], reflect: 'What evidence proves that your image is a reflection rather than a translation?' },
    practiceIntro: 'Name the mirror axis before changing a sign. This helps prevent the most common x/y mix-up.', questions: reflectionBank(7, true), checkQuestions: reflectionBank(207, false),
    application: { title: 'Logo-Mirror Challenge', scenario: 'A triangular logo has vertices A(2, 1), B(7, 1), and C(5, 5). It must be mirrored across the y-axis.', tasks: ['Find A′, B′, and C′.', 'Describe what stayed the same.', 'Describe what changed.', 'Explain how you could verify the mirror line.'], reveal: 'A′(−2, 1), B′(−7, 1), C′(−5, 5). The y-values stay; each x-value changes sign. The y-axis is halfway between matching points.' },
    summary: ['A reflection is a flip.', 'Matching points are equally far from the mirror line.', 'Across y, x changes sign.', 'Across x, y changes sign.', 'Reflections preserve size and shape but reverse orientation.'], support: sharedSupport,
    extension: ['Reflect a shape across both axes and describe the combined result.', 'Design a polygon with one vertex that stays fixed during reflection.', 'Find the mirror line from a point and its image.'],
    pat: { title: 'PAT-STYLE THINKING', prompt: 'M(−4, −7) is reflected across the x-axis. Which image is correct? A) (4, −7) B) (−4, 7) C) (4, 7) D) (−7, −4)', answer: 'B. Across the x-axis, x stays −4 and y changes sign.' },
    review: ['I can reflect across either axis.', 'I can locate the line of reflection.', 'I can use equal perpendicular distance.', 'I can explain the coordinate pattern.'], next: { title: 'Rotating Shapes in the Cartesian Plane', slug: 'rotating-shapes', status: 'ready' }
  },

  'rotating-shapes': {
    hook: 'A windmill blade turns while its centre stays fixed. How can you describe exactly how far it turned and in which direction?',
    prerequisites: ['Plot and label polygon vertices.', 'Recognize quarter-, half-, and three-quarter turns.', 'Use clockwise and counter-clockwise directions.'],
    goals: ['rotate a figure 90°, 180°, or 270° about a vertex.', 'describe rotation angle and direction.', 'track original and image coordinates.'], estimatedTime: '80–110 min', materials: ['pencil', 'optional tracing paper and push pin', 'grid paper — or use the on-page lab'],
    successCriteria: ['I identify the centre before rotating.', 'I keep the centre point fixed.', 'I state both angle and direction.', 'I place every image vertex the correct distance from the centre.'],
    bigIdea: 'A rotation turns a figure through an angle around one fixed point called the centre of rotation.',
    bigIdeaDetail: 'The centre stays in place while every other point travels along a circular path. Quarter-, half-, and three-quarter turns are 90°, 180°, and 270°. A 90° clockwise turn has the same final position as a 270° counter-clockwise turn.',
    connection: 'Why do 90° clockwise and 270° counter-clockwise produce the same image?',
    concepts: [{ title: 'Find the centre first', text: 'The centre of rotation is the fixed point. In this lesson it is one vertex of the figure.', remember: 'The centre does not need a prime because it does not move.' }, { title: 'State angle and direction', text: 'A complete description includes 90°, 180°, or 270° and clockwise or counter-clockwise.', remember: 'For 180°, both directions end at the same place.' }, { title: 'Distance from the centre stays constant', text: 'Each point turns around the centre without moving closer or farther away.', remember: 'A rotation preserves size and shape.' }, { title: 'Equivalent turns total 360°', text: 'A clockwise turn and matching counter-clockwise turn can reach the same image when their angles add to 360°.', remember: '90° CW = 270° CCW; 270° CW = 90° CCW.' }],
    misconceptions: [{ title: '“The centre vertex moves too.”', text: 'The centre of rotation is fixed. Only the other vertices move around it.' }, { title: '“The shape changes size as it turns.”', text: 'Every distance from the centre stays constant, so size and shape are preserved.' }, { title: '“Angle alone fully describes the rotation.”', text: 'Except for 180°, direction matters. State clockwise or counter-clockwise.' }],
    examples: [{ title: 'Example 1 · Quarter-turn', problem: 'Rotate a shape 90° clockwise about vertex A.', steps: ['Mark A as the fixed centre.', 'Trace or imagine each segment from A making a quarter-turn clockwise.', 'Keep every segment length unchanged.', 'Label moved vertices with primes.'], answer: 'A stays fixed; all other vertices turn one quarter-turn clockwise.' }, { title: 'Example 2 · Equivalent direction', problem: 'Rewrite 270° clockwise using a counter-clockwise turn.', steps: ['A full turn is 360°.', 'Subtract 270° from 360°.', 'Use the opposite direction.'], answer: '90° counter-clockwise' }, { title: 'Example 3 · Half-turn', problem: 'What is special about a 180° rotation?', steps: ['A half-turn moves each point to the opposite side of the centre.', 'Clockwise and counter-clockwise each trace half a circle.', 'Both directions end at the same image.'], answer: '180° clockwise and 180° counter-clockwise are equivalent.' }],
    vocabulary: [{ term: 'Rotation', definition: 'A transformation that turns a figure around a fixed point.', example: 'A quarter-turn is a 90° rotation.' }, { term: 'Centre of rotation', definition: 'The fixed point around which a figure turns.', example: 'Vertex A can be the centre.' }, { term: 'Clockwise', definition: 'The direction clock hands move.', example: 'A 90° clockwise turn is one quarter-turn to the right.' }, { term: 'Counter-clockwise', definition: 'The direction opposite to clock hands.', example: 'A 90° counter-clockwise turn is one quarter-turn to the left.' }, { term: 'Angle of rotation', definition: 'The amount a figure turns, measured in degrees.', example: 'A half-turn has an angle of 180°.' }],
    explorePrompt: 'Keep your eyes on vertex A. Predict A′ and another image point before checking each angle and direction.', exploreMode: 'compare',
    handsOn: { title: 'Tracing-Paper Turn', instructions: ['Draw and label a polygon.', 'Trace it and mark one vertex as the centre.', 'Hold that centre in place with a pencil tip.', 'Turn the tracing paper 90°, 180°, or 270°.', 'Trace the image and record the angle and direction.'], reflect: 'Which measurements stayed unchanged during the turn?' },
    practiceIntro: 'Sketch each turn. The questions use the origin as a convenient centre; the interactive lab also shows rotation about a polygon vertex.', questions: rotationBank(13, true), checkQuestions: rotationBank(313, false),
    application: { title: 'Robot-Arm Challenge', scenario: 'A robot arm begins at P(4, 2) relative to its pivot at the origin.', tasks: ['Find P′ after 90° counter-clockwise.', 'Find P′ after 180°.', 'Name a clockwise turn equivalent to 90° counter-clockwise.', 'Explain why the arm length does not change.'], reveal: 'The images are (−2, 4) and (−4, −2). A 270° clockwise turn is equivalent to 90° counter-clockwise. Rotation preserves distance from the pivot.' },
    summary: ['A rotation turns around a fixed centre.', 'The centre stays in place.', 'State angle and direction.', 'Distance, size, and shape are preserved.', 'Opposite-direction equivalent turns add to 360°.'], support: sharedSupport,
    extension: ['Compose two rotations and replace them with one turn.', 'Create a shape that maps onto itself after 180°.', 'Explain why direction does not affect a 180° image.'],
    pat: { title: 'PAT-STYLE THINKING', prompt: 'Which turn has the same result as 90° clockwise? A) 90° counter-clockwise B) 180° counter-clockwise C) 270° counter-clockwise D) 360° counter-clockwise', answer: 'C. The two opposite-direction angles add to 360°.' },
    review: ['I can identify the centre of rotation.', 'I can rotate through common angles.', 'I can state direction and angle.', 'I can compare equivalent turns.'], next: { title: 'Congruence & Symmetry', slug: 'congruence-symmetry', status: 'ready' }
  },

  'congruence-symmetry': {
    hook: 'Two puzzle pieces face different directions. How can you decide whether one could still fit exactly on top of the other?',
    prerequisites: ['Recognize translations, reflections, and rotations.', 'Compare side lengths and angles.', 'Use tracing to superimpose shapes.'],
    goals: ['decide whether figures are congruent.', 'identify reflectional and rotational symmetry.', 'use transformations to verify a match.'], estimatedTime: '70–95 min', materials: ['pencil', 'optional tracing paper or small mirror'],
    successCriteria: ['I compare size and shape, not colour or direction.', 'I identify lines of symmetry.', 'I describe rotational symmetry.', 'I use a transformation to justify congruence.'],
    bigIdea: 'Congruent figures have exactly the same size and shape, even when their positions or orientations differ.',
    bigIdeaDetail: 'A slide, flip, or turn can place one congruent figure exactly over another. Reflectional symmetry occurs when a line divides one figure into matching mirror halves. Rotational symmetry occurs when a figure maps onto itself during a turn smaller than 360°.',
    connection: 'Why can two shapes be congruent even if one faces left and the other faces right?',
    concepts: [{ title: 'Congruent means an exact fit', text: 'Matching side lengths and angles make figures congruent. Position, orientation, colour, and labels do not decide congruence.', remember: 'Same shape and same size.' }, { title: 'Transformations verify congruence', text: 'If a translation, reflection, rotation, or combination makes one figure lie exactly on another, the figures are congruent.', remember: 'Imagine tracing and superimposing.' }, { title: 'Reflectional symmetry uses a mirror line', text: 'A line of symmetry divides one figure into halves that reflect onto each other.', remember: 'The fold must match exactly.' }, { title: 'Rotational symmetry uses a turn', text: 'A figure has rotational symmetry if a turn less than 360° maps it onto itself.', remember: 'Count the matching positions in one full turn.' }],
    misconceptions: [{ title: '“Same type means congruent.”', text: 'Two rectangles or triangles can have different dimensions. Their measurements must match.' }, { title: '“Congruent figures must face the same way.”', text: 'A transformation may change position or orientation without changing size or shape.' }, { title: '“Every shape has rotational symmetry.”', text: 'A match only at 360° does not count as rotational symmetry.' }],
    examples: [{ title: 'Example 1 · Congruent rectangles', problem: 'One rectangle is 3 cm by 7 cm. Another is 7 cm by 3 cm.', steps: ['Compare the two pairs of side lengths.', 'They match, although their orientation differs.', 'A 90° rotation can superimpose them.'], answer: 'The rectangles are congruent.' }, { title: 'Example 2 · Reflectional symmetry', problem: 'Does a non-square rectangle have reflectional symmetry?', steps: ['Test the vertical middle line.', 'Test the horizontal middle line.', 'Each fold makes matching halves.'], answer: 'Yes. It has 2 lines of symmetry.' }, { title: 'Example 3 · Rotational symmetry', problem: 'What is the smallest turn that maps a square onto itself?', steps: ['A full turn has four equal quarter-turn positions.', 'Divide 360° by 4.', 'The first match occurs after one quarter-turn.'], answer: '90°' }],
    vocabulary: [{ term: 'Congruent', definition: 'Having exactly the same size and shape.', example: 'Two matching puzzle pieces are congruent.' }, { term: 'Superimpose', definition: 'Place one figure over another to check whether they match exactly.', example: 'Tracing paper can help superimpose figures.' }, { term: 'Reflectional symmetry', definition: 'A figure’s ability to map onto itself across a mirror line.', example: 'A square has four lines of reflectional symmetry.' }, { term: 'Rotational symmetry', definition: 'A figure’s ability to map onto itself during a turn smaller than 360°.', example: 'A rectangle maps onto itself after 180°.' }, { term: 'Order of rotation', definition: 'The number of matching positions in one full turn.', example: 'A square has rotational order 4.' }],
    explorePrompt: 'Use the detective game. Ignore colour and direction, then decide whether a slide, flip, or turn could create an exact match.', exploreMode: 'compare',
    handsOn: { title: 'Symmetry Hunt', instructions: ['Choose five flat objects or printed symbols.', 'Trace or sketch each object.', 'Test possible mirror lines by folding or using a small mirror.', 'Turn the tracing to test rotational symmetry.', 'Record the evidence, not only yes or no.'], reflect: 'Did any object have rotational symmetry but no reflectional symmetry?' },
    practiceIntro: 'Use transformations as evidence. “They look the same” is a starting observation, not a complete explanation.', questions: conceptBank('symmetry', 17, true), checkQuestions: conceptBank('symmetry', 417, false),
    application: { title: 'Package-Logo Challenge', scenario: 'Design a logo from two congruent shapes.', tasks: ['Make the shapes match through a translation, reflection, or rotation.', 'Include at least one line of symmetry or a rotational match.', 'Describe the transformation used.', 'Explain how a tracing could verify congruence.'], reveal: 'Many designs work. A correct explanation identifies equal size and shape, names the transformation, and describes a valid symmetry.' },
    summary: ['Congruent figures have the same size and shape.', 'Transformations can verify an exact match.', 'Reflectional symmetry uses a mirror line.', 'Rotational symmetry uses a turn smaller than 360°.'], support: sharedSupport,
    extension: ['Create a shape with rotational but no reflectional symmetry.', 'Compare the symmetries of a square and non-square rectangle.', 'Find two non-congruent shapes with the same number of symmetry lines.'],
    pat: { title: 'PAT-STYLE THINKING', prompt: 'Which fact proves two figures are congruent? A) They have the same colour. B) A transformation places one exactly over the other. C) They point in the same direction. D) They are both quadrilaterals.', answer: 'B. An exact superimposed match proves equal size and shape.' },
    review: ['I can test congruence.', 'I can identify reflectional symmetry.', 'I can identify rotational symmetry.', 'I can justify with a transformation.'], next: { title: 'Tessellations', slug: 'tessellations', status: 'ready' }
  },

  'tessellations': {
    hook: 'A tiled floor must cover every part of the surface without tiles crossing or leaving holes. Which shapes and movements can make that happen?',
    prerequisites: ['Recognize congruent figures.', 'Describe translations, reflections, and rotations.', 'Identify reflectional and rotational symmetry.'],
    goals: ['identify and describe tessellations.', 'analyze symmetry in repeating designs.', 'create a tessellation with transformations.'], estimatedTime: '80–110 min', materials: ['pencil', 'paper', 'optional coloured pencils and tracing paper'],
    successCriteria: ['I check for both gaps and overlaps.', 'I identify the repeating tile.', 'I describe transformations in the pattern.', 'I analyze symmetry without assuming the tile and full design match.'],
    bigIdea: 'A tessellation repeats one or more tiles to cover a surface completely with no gaps and no overlaps.',
    bigIdeaDetail: 'Translations, reflections, and rotations can move congruent tiles into a repeating design. A tile does not need to be symmetrical by itself. The symmetry of the finished tessellation can differ from the symmetry of its individual tile.',
    connection: 'Why can congruent circles not cover a flat surface without gaps or overlaps?',
    concepts: [{ title: 'Two conditions must be true', text: 'A tessellation covers the surface with no uncovered gaps and no overlapping tiles.', remember: 'Repeating is not enough: check coverage.' }, { title: 'Transformations build the pattern', text: 'Tiles may slide, flip, or turn into their repeated positions.', remember: 'Name the movement from one tile to a matching tile.' }, { title: 'The tile and pattern can have different symmetry', text: 'An asymmetrical tile can be arranged into a symmetrical tessellation, and a symmetrical tile can form a pattern with fewer symmetries.', remember: 'Analyze the tile and the whole design separately.' }, { title: 'Tessellations appear in design', text: 'Artists, architects, builders, and many cultural traditions use repeating geometric designs. Study each example in its own context and avoid assuming a design’s meaning.', remember: 'Describe the mathematics while respecting the source and story of the design.' }],
    misconceptions: [{ title: '“Any repeating pattern is a tessellation.”', text: 'The shapes must also cover the surface with no gaps or overlaps.' }, { title: '“Only regular polygons tessellate.”', text: 'Many irregular or asymmetrical tiles can tessellate.' }, { title: '“The tile and pattern have identical symmetry.”', text: 'The arrangement can add or remove symmetry compared with one tile.' }],
    examples: [{ title: 'Example 1 · Square grid', problem: 'Do congruent squares arranged edge-to-edge tessellate?', steps: ['The pattern repeats.', 'Every edge meets another edge.', 'There are no gaps.', 'There are no overlaps.'], answer: 'Yes, the square grid is a tessellation.' }, { title: 'Example 2 · Circle pattern', problem: 'Do congruent circles in rows tessellate?', steps: ['The circles can repeat.', 'Curved boundaries leave spaces between neighbouring circles.', 'Those uncovered spaces are gaps.'], answer: 'No, congruent circles alone do not tessellate the plane.' }, { title: 'Example 3 · Describe movement', problem: 'A tile repeats in a straight row without turning.', steps: ['Choose matching points on neighbouring tiles.', 'Notice each point moves the same distance and direction.', 'Name that transformation.'], answer: 'The row is generated by a translation.' }],
    vocabulary: [{ term: 'Tessellation', definition: 'A repeating arrangement that covers a surface with no gaps or overlaps.', example: 'An edge-to-edge square tile floor is a tessellation.' }, { term: 'Tile', definition: 'A shape used as a repeating unit in a tessellation.', example: 'One hexagon can be the tile in a honeycomb-like pattern.' }, { term: 'Gap', definition: 'An uncovered space between tiles.', example: 'Equal circles leave curved gaps.' }, { term: 'Overlap', definition: 'A region covered by more than one tile.', example: 'Sliding tiles too close makes them overlap.' }, { term: 'Repeating unit', definition: 'The smallest part that repeats to make a pattern.', example: 'The unit may contain one tile or a group of tiles.' }],
    explorePrompt: 'Change the tile and spacing. Decide whether the design qualifies before reading the status, then compare the symmetry of one tile with the whole pattern.', exploreMode: 'compare',
    handsOn: { title: 'Create a Paper Tessellation', instructions: ['Start with a small square paper tile.', 'Cut a shape from one side and tape it to the opposite side without turning it.', 'Trace copies so each tile fits against the next.', 'Cover a rectangular region with no gaps or overlaps.', 'Colour a repeating unit and mark any lines or centres of symmetry.'], reflect: 'Which transformations move one copy of your tile onto another?' },
    practiceIntro: 'Check the definition in order: repeat, no gaps, no overlaps. Then describe transformations and symmetry.', questions: conceptBank('tessellation', 23, true), checkQuestions: conceptBank('tessellation', 523, false),
    application: { title: 'Community-Space Design', scenario: 'Create a repeating tile design for a walkway, wall, or digital background.', tasks: ['Choose or create a tile.', 'Show at least 12 copies with no gaps or overlaps.', 'Mark one repeating unit.', 'Name the transformations that build the pattern.', 'Describe any reflectional or rotational symmetry.', 'If inspired by a cultural design, name and learn from a reliable source rather than copying without context.'], reveal: 'Solutions vary. A successful design fully covers the chosen region, identifies its repeating unit, and accurately describes transformations and symmetry.' },
    summary: ['A tessellation repeats to cover a surface.', 'It has no gaps and no overlaps.', 'Transformations position the tiles.', 'A tile and its full pattern can have different symmetry.', 'Design examples should be studied with respect for their cultural context.'], support: sharedSupport,
    extension: ['Test which regular polygons tessellate by themselves.', 'Create an asymmetrical tile that makes a symmetrical pattern.', 'Combine two tile types into one repeating unit.'],
    pat: { title: 'PAT-STYLE THINKING', prompt: 'A design repeats congruent shapes but leaves small uncovered spaces. Which statement is correct? A) It is a tessellation because it repeats. B) It is not a tessellation because it has gaps. C) It is congruent, so gaps do not matter. D) It becomes a tessellation after colouring.', answer: 'B. A tessellation must have no gaps and no overlaps.' },
    review: ['I can identify a tessellation.', 'I can find a repeating tile or unit.', 'I can describe transformations in a pattern.', 'I can analyze the tile and whole pattern separately.'], next: { title: 'Unit 2 Review & Math Arcade', slug: 'unit-review', status: 'ready' }
  }
};
