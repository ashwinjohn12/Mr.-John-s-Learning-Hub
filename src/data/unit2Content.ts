import type { TopicContent, PracticeQuestion } from './topicContent';

const q = (difficulty: PracticeQuestion['difficulty'], prompt: string, choices: string[], answer: number, hint: string, explain: string): PracticeQuestion => ({ difficulty, prompt, choices, answer, hint, explain });

const practiceQuestions: PracticeQuestion[] = [
  q('foundations','Which axis is horizontal?',['x-axis','y-axis','origin','Quadrant I'],0,'Think of the first direction in an ordered pair.','The x-axis runs horizontally from left to right.'),
  q('foundations','Which axis is vertical?',['x-axis','y-axis','origin','Quadrant IV'],1,'Vertical movement is the second part of an ordered pair.','The y-axis runs vertically from down to up.'),
  q('foundations','What are the coordinates of the origin?',['(1, 1)','(0, 1)','(1, 0)','(0, 0)'],3,'The origin is where both axes start.','Both coordinates are zero at the origin: (0, 0).'),
  q('foundations','In the ordered pair (−4, 7), which number is the x-coordinate?',['−4','7','4','−7'],0,'x is written first.','The first number is the x-coordinate, so x = −4.'),
  q('foundations','In the ordered pair (6, −2), which number is the y-coordinate?',['6','−6','2','−2'],3,'y is written second.','The second number is the y-coordinate, so y = −2.'),
  q('foundations','From the origin, which directions locate (3, 5)?',['3 left, 5 up','3 right, 5 up','3 right, 5 down','5 right, 3 up'],1,'Read x first, then y.','Positive x means right; positive y means up.'),
  q('foundations','From the origin, which directions locate (−2, 4)?',['2 left, 4 up','2 right, 4 up','2 left, 4 down','4 left, 2 up'],0,'A negative x-coordinate means left.','Move 2 left for x = −2, then 4 up for y = 4.'),
  q('foundations','From the origin, which directions locate (5, −3)?',['5 left, 3 down','5 right, 3 up','5 right, 3 down','3 right, 5 down'],2,'Positive x is right; negative y is down.','Move 5 right and then 3 down.'),
  q('foundations','Where is the point (0, 6)?',['On the x-axis','On the y-axis','At the origin','In Quadrant I'],1,'There is no left or right movement.','When x = 0, a point lies on the y-axis.'),
  q('foundations','Where is the point (−8, 0)?',['On the x-axis','On the y-axis','In Quadrant II','In Quadrant III'],0,'There is no up or down movement.','When y = 0, a point lies on the x-axis.'),

  q('standard','Which point is in Quadrant I?',['(−3, 5)','(4, 2)','(−4, −2)','(3, −5)'],1,'Quadrant I is right and up.','(4, 2) has positive x and positive y coordinates.'),
  q('standard','Which point is in Quadrant II?',['(−5, 3)','(5, 3)','(−5, −3)','(5, −3)'],0,'Quadrant II is left and up.','(−5, 3) has negative x and positive y coordinates.'),
  q('standard','Which point is in Quadrant III?',['(2, 7)','(−2, 7)','(−2, −7)','(2, −7)'],2,'Quadrant III is left and down.','(−2, −7) has negative x and negative y coordinates.'),
  q('standard','Which point is in Quadrant IV?',['(6, −4)','(−6, 4)','(−6, −4)','(6, 4)'],0,'Quadrant IV is right and down.','(6, −4) has positive x and negative y coordinates.'),
  q('standard','A point is 7 units left and 2 units down from the origin. What is its ordered pair?',['(7, 2)','(−7, 2)','(7, −2)','(−7, −2)'],3,'Translate each direction into a sign.','Left gives x = −7 and down gives y = −2.'),
  q('standard','Point A is at (−4, 6). How far is it from the y-axis?',['2 units','4 units','6 units','10 units'],1,'The x-coordinate gives horizontal distance from the y-axis.','The magnitude of x is 4, so the point is 4 units from the y-axis.'),
  q('standard','Point B is at (3, −8). How far is it from the x-axis?',['3 units','5 units','8 units','11 units'],2,'The y-coordinate gives vertical distance from the x-axis.','The magnitude of y is 8, so the point is 8 units from the x-axis.'),
  q('standard','Which two points lie on the same vertical line?',['(2, 5) and (2, −3)','(2, 5) and (−2, 5)','(5, 2) and (2, 5)','(0, 2) and (2, 0)'],0,'Points on a vertical line share an x-coordinate.','Both points have x = 2.'),
  q('standard','Which two points lie on the same horizontal line?',['(−4, 1) and (−4, 6)','(−4, 1) and (3, 1)','(1, −4) and (−4, 1)','(0, 1) and (1, 0)'],1,'Points on a horizontal line share a y-coordinate.','Both points have y = 1.'),
  q('standard','Connect A(1, 1), B(5, 1), C(5, 4), and D(1, 4) in order. What shape forms?',['Triangle','Rectangle','Pentagon','Kite'],1,'Notice two pairs of horizontal and vertical sides.','The four vertices form a rectangle.'),

  q('challenge','A point is in Quadrant II and is 3 units from the y-axis and 6 units from the x-axis. What is the point?',['(3, 6)','(−3, 6)','(−3, −6)','(6, −3)'],1,'Use the quadrant to choose each sign.','Quadrant II has negative x and positive y, giving (−3, 6).'),
  q('challenge','Which statement is always true for a point on the x-axis?',['Its x-coordinate is 0.','Its y-coordinate is 0.','Both coordinates are positive.','It is in Quadrant I.'],1,'A point on the x-axis has no vertical movement.','No vertical movement means y = 0.'),
  q('challenge','Which statement is always true for a point on the y-axis?',['Its x-coordinate is 0.','Its y-coordinate is 0.','Both coordinates are negative.','It belongs to two quadrants.'],0,'A point on the y-axis has no horizontal movement.','No horizontal movement means x = 0.'),
  q('challenge','Point P has the same x-coordinate as (−5, 2) and the same y-coordinate as (4, −7). Where is P?',['(−5, −7)','(4, 2)','(−7, −5)','(5, 7)'],0,'Take x from the first point and y from the second.','P combines x = −5 and y = −7, so P is (−5, −7).'),
  q('challenge','Which point is equally far from both axes?',['(2, 5)','(−4, 4)','(0, 7)','(−3, 8)'],1,'Compare the magnitudes of x and y.','At (−4, 4), the horizontal and vertical distances are both 4.'),
  q('challenge','A square has vertices (−2, 1), (2, 1), and (2, 5). What is the fourth vertex?',['(−2, 5)','(5, −2)','(−2, −5)','(1, 5)'],0,'Match the missing x-value and y-value.','The fourth corner must share x = −2 with the first point and y = 5 with the third.'),
  q('challenge','Points A(−6, 3) and B(2, 3) form a horizontal side. What is its length?',['4 units','8 units','9 units','12 units'],1,'Count the distance from −6 to 2.','The horizontal distance is 2 − (−6) = 8 units.'),
  q('challenge','Point M moves from (−3, −2) to (−3, 5). Which description is correct?',['8 right','7 up','5 up','7 right'],1,'The x-coordinate did not change.','The y-coordinate increases from −2 to 5, a movement of 7 units up.'),
  q('challenge','Which list follows the correct clockwise quadrant order starting at Quadrant I?',['I, II, III, IV','I, IV, III, II','I, III, II, IV','I, IV, II, III'],1,'Picture moving from upper-right to lower-right.','Clockwise from I goes to IV, then III, then II.'),
  q('challenge','A triangle has vertices A(0, 4), B(−3, −2), and C(3, −2). Which axis passes through vertex A?',['x-axis','y-axis','both axes','neither axis'],1,'Look for the coordinate that equals zero.','A has x = 0, so it lies on the y-axis.')
];

const checkQuestions: PracticeQuestion[] = [
  q('foundations','What is the name of the point where the axes meet?',['Origin','Quadrant','Ordered pair','Vertex'],0,'','The axes meet at the origin.'),
  q('foundations','Which ordered pair names a point 4 right and 2 down?',['(4, 2)','(−4, 2)','(4, −2)','(−4, −2)'],2,'','Right is positive x and down is negative y.'),
  q('foundations','Which coordinate is read first?',['y-coordinate','x-coordinate','larger coordinate','positive coordinate'],1,'','Ordered pairs are written (x, y).'),
  q('foundations','Which point lies on the y-axis?',['(4, 0)','(0, −4)','(4, −4)','(−4, 4)'],1,'','A point on the y-axis has x = 0.'),
  q('foundations','What direction does a negative y-coordinate show?',['right','left','up','down'],3,'','Negative y-values are below the origin.'),
  q('foundations','What direction does a positive x-coordinate show?',['right','left','up','down'],0,'','Positive x-values are to the right of the origin.'),
  q('foundations','Which location is the origin?',['(0, 0)','(1, 1)','(0, 1)','(1, 0)'],0,'','The origin is (0, 0).'),
  q('foundations','The point (−6, 0) lies where?',['Quadrant II','Quadrant III','x-axis','y-axis'],2,'','A y-coordinate of zero places the point on the x-axis.'),

  q('standard','Which point lies in Quadrant III?',['(−7, −1)','(−7, 1)','(7, −1)','(7, 1)'],0,'','Quadrant III has negative x and negative y.'),
  q('standard','Which point lies in Quadrant IV?',['(−1, 9)','(1, 9)','(−1, −9)','(1, −9)'],3,'','Quadrant IV has positive x and negative y.'),
  q('standard','A point is 9 left and 3 up. What are its coordinates?',['(9, 3)','(−9, 3)','(9, −3)','(−9, −3)'],1,'','Left gives negative x; up gives positive y.'),
  q('standard','How far is (−7, 2) from the y-axis?',['2 units','5 units','7 units','9 units'],2,'','The magnitude of x gives distance from the y-axis.'),
  q('standard','Which pair shares a y-coordinate?',['(3, −2) and (3, 5)','(3, −2) and (−4, −2)','(−2, 3) and (3, −2)','(0, 3) and (3, 0)'],1,'','Both points have y = −2.'),
  q('standard','Connect (−2, −1), (2, −1), and (0, 3). What polygon forms?',['triangle','rectangle','pentagon','hexagon'],0,'','Three connected vertices form a triangle.'),
  q('standard','Which point is 5 units below the x-axis?',['(5, 0)','(0, 5)','(2, −5)','(−5, 2)'],2,'','Five below means y = −5.'),
  q('standard','Point R(0, −8) is how far from the x-axis?',['0 units','8 units','−8 units','16 units'],1,'','Distance is the magnitude of the y-coordinate.'),

  q('challenge','A point has negative x, positive y, and is not on an axis. Where is it?',['Quadrant I','Quadrant II','Quadrant III','Quadrant IV'],1,'','Negative x is left and positive y is up: Quadrant II.'),
  q('challenge','Point K is on the x-axis and 6 units left of the origin. What is K?',['(0, −6)','(−6, 0)','(6, 0)','(0, 6)'],1,'','Left gives x = −6, and the x-axis means y = 0.'),
  q('challenge','Which point is the same distance from the x-axis as (2, −6)?',['(−6, 2)','(4, 6)','(6, 1)','(0, −2)'],1,'','Look for a y-coordinate with magnitude 6.'),
  q('challenge','Three rectangle vertices are (−4, −3), (1, −3), and (1, 2). Which point completes it?',['(−4, 2)','(2, −4)','(−1, 3)','(4, −2)'],0,'','Complete the missing combination of x = −4 and y = 2.'),
  q('challenge','Two points share x = 5. What must be true?',['They form a horizontal line.','They form a vertical line.','They are in the same quadrant.','They are the same point.'],1,'','Equal x-coordinates line up vertically.'),
  q('challenge','A point moves 4 right and 7 down from (−2, 5). Where does it land?',['(2, −2)','(−6, 12)','(2, 12)','(−6, −2)'],0,'','Change x from −2 to 2 and y from 5 to −2.'),
  q('challenge','Which explanation proves that (0, −5) is not in a quadrant?',['Its coordinates are negative.','Its x-coordinate is zero, so it lies on the y-axis.','Its y-coordinate is −5.','It is below the origin.'],1,'','Points on either axis are not inside a quadrant.'),
  q('challenge','A square has vertices (1, −4), (5, −4), (5, 0), and one missing vertex. What is it?',['(1, 0)','(0, 1)','(−1, 0)','(1, 4)'],0,'','The missing corner shares x = 1 and y = 0.')
];

export const unit2Lesson21Content: TopicContent = {
  hook: 'A video-game designer wants a treasure chest at one exact spot. “Near the middle” is not precise enough. How could two numbers tell the game exactly where to place it?',
  prerequisites: ['Place positive and negative numbers on horizontal and vertical number lines.','Use left, right, up, and down to describe movement.','Recognize and name common polygons such as triangles, rectangles, and squares.'],
  goals: ['connect the axes of a Cartesian plane to two number lines.','locate and describe points using ordered pairs.','identify the origin, axes, and four quadrants.','plot and describe the vertices of a polygon.'],
  estimatedTime: '90–120 min',
  materials: ['pencil', 'optional ruler', 'optional grid paper — use the on-page plane if needed'],
  successCriteria: ['I can label the x-axis, y-axis, origin, and quadrants.','I can read (x, y) in the correct order.','I can plot points in every quadrant and on either axis.','I can connect plotted vertices to identify or create a polygon.','I can explain how a coordinate describes distance and direction from the axes.'],
  bigIdea: 'A Cartesian plane uses two intersecting number lines and an ordered pair to name one exact location.',
  bigIdeaDetail: 'The horizontal x-axis and vertical y-axis meet at the origin, (0, 0). An ordered pair is written (x, y): x tells the horizontal location first, and y tells the vertical location second. Positive and negative values show direction, while each number’s magnitude shows distance. Together, the axes divide the plane into four regions called quadrants.',
  connection: 'How does Unit 1 help you understand why (−4, 3) is left of the y-axis but above the x-axis?',
  concepts: [
    { title: 'Two number lines make one plane', text: 'A Cartesian plane is made from a horizontal number line and a vertical number line that cross at right angles. The horizontal line is the x-axis. The vertical line is the y-axis.', remember: 'x is horizontal; y is vertical.' },
    { title: 'The origin is the starting point', text: 'The axes meet at the origin, written (0, 0). Start at the origin whenever you describe or plot a point.', remember: 'Both coordinates are zero at the origin.' },
    { title: 'Ordered pairs give directions in order', text: 'An ordered pair is written (x, y). Move along the x-axis first: right for positive or left for negative. Then move parallel to the y-axis: up for positive or down for negative.', remember: 'Along the hall, then up or down the stairs: x first, y second.' },
    { title: 'Quadrants organize the plane', text: 'The axes divide the plane into Quadrants I, II, III, and IV. Starting in the upper-right, the quadrants are numbered counter-clockwise. Points on an axis are not inside a quadrant.', remember: 'I: (+,+), II: (−,+), III: (−,−), IV: (+,−).' },
    { title: 'Coordinates can build polygons', text: 'Plot a list of ordered pairs as vertices, connect them in order with line segments, and connect the last point back to the first. The completed outline forms a polygon.', remember: 'Plot, label, connect in order, and close the shape.' },
    { title: 'Zero tells you a point is on an axis', text: 'If y = 0, there is no vertical movement, so the point is on the x-axis. If x = 0, there is no horizontal movement, so the point is on the y-axis.', remember: '(x, 0) is on the x-axis; (0, y) is on the y-axis.' }
  ],
  misconceptions: [
    { title: '“I can read the y-coordinate first.”', text: 'The order cannot be switched. (3, −5) and (−5, 3) are different locations. Always read x first and y second.' },
    { title: '“A point on an axis belongs to two quadrants.”', text: 'Quadrants are open regions between the axes. A point with a zero coordinate lies on an axis, not in a quadrant.' },
    { title: '“I should count grid lines.”', text: 'Coordinates show distance in units. Count the spaces or intervals from the origin, not the line you start on.' },
    { title: '“The negative sign changes the distance.”', text: 'The sign shows direction. The magnitude shows distance. For example, x = −6 means 6 units left.' }
  ],
  examples: [
    { title: 'Example 1 · Describe a point', problem: 'Describe point A(−4, 5) using directions and name its quadrant.', steps: ['Start at the origin, (0, 0).','Read x = −4 first: move 4 units left.','Read y = 5 second: move 5 units up.','Left and up places the point in Quadrant II.'], answer: 'A is 4 units left and 5 units up, in Quadrant II.' },
    { title: 'Example 2 · Write an ordered pair', problem: 'A point is 7 units right and 3 units down from the origin. What is its ordered pair?', steps: ['Right means the x-coordinate is positive: x = 7.','Down means the y-coordinate is negative: y = −3.','Write x first and y second inside parentheses.'], answer: '(7, −3)' },
    { title: 'Example 3 · Point on an axis', problem: 'Where is B(0, −6)?', steps: ['The x-coordinate is 0, so there is no left or right movement.','Move 6 units down for y = −6.','A point with x = 0 lies on the y-axis.'], answer: 'B lies on the negative part of the y-axis, 6 units below the origin.' },
    { title: 'Example 4 · Build a polygon', problem: 'Plot A(−2, 1), B(2, 1), C(2, 4), and D(−2, 4), then connect in order.', steps: ['Plot and label each ordered pair.','Connect A to B, B to C, C to D, and D back to A.','Opposite sides are horizontal or vertical and equal in length.','The four right angles identify the polygon.'], answer: 'The vertices form a rectangle.' }
  ],
  vocabulary: [
    { term: 'Cartesian plane', definition: 'A two-dimensional grid made from a horizontal and vertical number line.', example: 'A Cartesian plane can show locations in all four directions from zero.' },
    { term: 'x-axis', definition: 'The horizontal number line on a Cartesian plane.', example: 'Points such as (−5, 0) lie on the x-axis.' },
    { term: 'y-axis', definition: 'The vertical number line on a Cartesian plane.', example: 'Points such as (0, 7) lie on the y-axis.' },
    { term: 'Origin', definition: 'The point (0, 0), where the x-axis and y-axis intersect.', example: 'Begin at the origin before plotting a point.' },
    { term: 'Ordered pair', definition: 'Two coordinates written in the order (x, y) to name a point.', example: '(−3, 4) means 3 left and 4 up.' },
    { term: 'x-coordinate', definition: 'The first number in an ordered pair; it gives horizontal location.', example: 'The x-coordinate of (−8, 2) is −8.' },
    { term: 'y-coordinate', definition: 'The second number in an ordered pair; it gives vertical location.', example: 'The y-coordinate of (−8, 2) is 2.' },
    { term: 'Quadrant', definition: 'One of the four regions formed by the axes.', example: '(−3, −4) is in Quadrant III.' },
    { term: 'Vertex', definition: 'A corner point where two sides of a polygon meet.', example: 'A triangle has three vertices.' }
  ],
  explorePrompt: 'Begin with the explorer. Make a prediction before moving the point, then test locations in every quadrant, on both axes, and at the origin. Use the target game when you are ready to plot without hints.',
  exploreMode: 'compare',
  handsOn: { title: 'Coordinate Picture Designer', instructions: ['Draw and label a Cartesian plane from −10 to +10 on both axes.','Choose at least six ordered pairs in more than one quadrant.','Plot and label each point, then connect the points in order.','Connect the last point back to the first to close your polygon or picture.','Trade coordinates with a partner, or cover your picture and re-plot your own list to test whether the instructions recreate it.'], reflect: 'Which part of your coordinate list made the picture easiest—or hardest—to recreate accurately?' },
  practiceIntro: 'Choose a level. Sketch a small plane whenever you need one, and use the explanation to check both your answer and your method.',
  questions: practiceQuestions,
  checkQuestions,
  application: { title: 'Video-Game Map Challenge', scenario: 'You are placing objects on a game map. The player begins at the origin. Put a key at K(−6, 4), a bridge at B(0, −3), a treasure chest at T(5, −5), and a safe zone at S(4, 6).', tasks: ['Describe how the player moves from the origin to each object.','Name the quadrant or axis containing each object.','Which object is farthest from the x-axis? Which is closest?','Add four vertices for a rectangular building that does not cover any object.','Explain how another designer could recreate your building using only your coordinate list.'], reveal: 'K is left 6 and up 4 in Quadrant II. B is down 3 on the y-axis. T is right 5 and down 5 in Quadrant IV. S is right 4 and up 6 in Quadrant I. The safe zone is farthest from the x-axis (6 units), and the bridge is closest (3 units). Many buildings are possible if four ordered pairs form a rectangle and avoid the listed points.' },
  summary: ['A Cartesian plane is formed by horizontal and vertical number lines.','The x-axis is horizontal, the y-axis is vertical, and they meet at the origin.','An ordered pair is written (x, y): horizontal first, vertical second.','Signs show direction and magnitudes show distance.','The four quadrants have predictable sign patterns.','A zero coordinate places a point on an axis.','Ordered pairs can locate the vertices of a polygon.'],
  support: ['Say “x first, y second” each time you plot.','Use two colours: one for x/horizontal and one for y/vertical.','Draw arrows from the origin before marking the point.','Start with points in Quadrant I, then add one new sign pattern at a time.'],
  extension: ['Create one point in each quadrant that is exactly 5 units from the y-axis.','Design two different polygons that share one vertex at the origin.','Explain why no point on an axis can be in a quadrant.','Find all possible fourth vertices that could complete a parallelogram from three chosen points.'],
  pat: { title: 'PAT-STYLE THINKING', prompt: 'Point P is in Quadrant II. It is 4 units from the y-axis and 7 units from the x-axis. Which ordered pair represents P? A) (4, 7) B) (−4, 7) C) (−7, 4) D) (4, −7)', answer: 'B. Quadrant II is left and up, so x is negative and y is positive. The distances give magnitudes 4 and 7: P(−4, 7).' },
  review: ['I can label a Cartesian plane.','I can read and write ordered pairs in the correct order.','I can locate points in all quadrants and on the axes.','I can use signs to identify a quadrant.','I can plot and describe polygon vertices.'],
  next: { title: 'Translating Shapes in the Cartesian Plane', slug: 'translating-shapes', status: 'ready' }
};
