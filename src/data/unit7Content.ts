import type { TopicContent } from './topicContent';

export const unit7Content: Record<string, TopicContent> = {
  'grade-6-math/measurement/area-parallelogram': {
    hook:'A parallelogram looks slanted, but what if you could cut off one end and slide it to the other side? Would its area change?',
    prerequisites:['Find the area of a rectangle using length × width.','Identify parallel and perpendicular lines.','Solve simple multiplication and division equations.'],
    goals:['rearrange a parallelogram to connect its area to a rectangle.','identify the base and perpendicular height.','determine the area of a parallelogram.','use division to determine a missing base or perpendicular height.'],
    estimatedTime:'120 min',
    materials:['pencil','paper or grid paper','optional ruler/scissors'],
    successCriteria:['I can explain why rearranging a parallelogram does not change its area.','I can identify a perpendicular height even when it is outside the shape.','I can determine area using base × perpendicular height.','I can find a missing base or height using division.'],
    bigIdea:'A parallelogram can be rearranged into a rectangle without changing its area.',
    bigIdeaDetail:'When a triangular piece is cut from one side of a parallelogram and moved to the other side, the shape becomes a rectangle with the same base and perpendicular height. The amount of space has not changed, so the area is base × perpendicular height. The slanted side does not tell how tall the shape is above its base.',
    connection:'If two parallelograms have the same base and perpendicular height but different slants, should they have the same area?',
    concepts:[
      {title:'Area measures space inside a 2-D region',text:'Area describes how much two-dimensional space a shape covers. It is measured in square units such as cm², m², or in².',remember:'Perimeter is distance around; area is space inside.'},
      {title:'Any side can be the base',text:'A parallelogram has two pairs of parallel sides. You may choose any side as the base, but the matching height must be perpendicular to that base.',remember:'Base and height must meet at a right angle.'},
      {title:'Perpendicular height is not slant height',text:'The perpendicular height is the shortest distance from the base to the opposite side. It forms a 90° angle with the base. The slanted side is not used for area.',remember:'Look for the right-angle marker.'},
      {title:'Rearranging keeps the same area',text:'Cutting off a triangular end and moving it to the opposite side creates a rectangle. No area is added or removed.',remember:'Same pieces → same total area.'},
      {title:'Multiply base × perpendicular height',text:'Because the rearranged rectangle has the same base and perpendicular height, its area is found with the same multiplication: A = b × h.',remember:'Use square units in the final answer.'},
      {title:'Use division for a missing dimension',text:'If area and one dimension are known, use the inverse relationship. base = area ÷ height or height = area ÷ base.',remember:'This connects directly to solving equations in Unit 6.'}
    ],
    misconceptions:[
      {title:'“The slanted side is the height.”',text:'Height must be perpendicular to the chosen base. A slanted side may be longer, but it does not measure the straight-up distance from base to opposite side.'},
      {title:'“A more slanted parallelogram has more area.”',text:'If base and perpendicular height stay the same, changing the slant does not change area.'},
      {title:'“Area uses linear units.”',text:'Area counts square units, so write cm², m², in², and so on.'},
      {title:'“To find a missing height, subtract.”',text:'Area is a product. Undo multiplication with division.'}
    ],
    examples:[
      {title:'Example 1 · Find area',problem:'A parallelogram has base 8 cm and perpendicular height 5 cm. Find its area.',steps:['Identify the base: 8 cm.','Identify the perpendicular height: 5 cm.','Multiply: 8 × 5 = 40.','Write the area in square units.'],answer:'40 cm²'},
      {title:'Example 2 · Ignore the slant height',problem:'A parallelogram has base 12 m, perpendicular height 7 m, and slanted side 9 m. Find the area.',steps:['The slanted side is extra information for this calculation.','Use base × perpendicular height.','12 × 7 = 84.'],answer:'84 m²'},
      {title:'Example 3 · Find a missing base',problem:'Area = 64 in² and perpendicular height = 16 in. Find the base.',steps:['Write the relationship: 64 = b × 16.','Undo ×16 by dividing by 16.','64 ÷ 16 = 4.'],answer:'4 in'},
      {title:'Example 4 · Real-world design',problem:'A parallelogram-shaped flower bed has area 90 ft² and base 8 ft. Find its perpendicular height.',steps:['Write 90 = 8 × h.','Divide: h = 90 ÷ 8.','90 ÷ 8 = 11.25.'],answer:'11.25 ft'}
    ],
    vocabulary:[
      {term:'Parallelogram',definition:'A quadrilateral with two pairs of parallel opposite sides.',example:'A slanted rectangle-like shape can be a parallelogram.'},
      {term:'Base',definition:'The side of a shape chosen as the reference for an area calculation.',example:'If the bottom side is 8 cm, b = 8 cm.'},
      {term:'Perpendicular height',definition:'The shortest distance from a base to the opposite side, measured at 90°.',example:'A dashed line with a right-angle marker often shows the height.'},
      {term:'Slant height',definition:'A slanted side length that is not perpendicular to the base.',example:'A 9 cm slanted side is not used if the perpendicular height is 6 cm.'},
      {term:'Area',definition:'The amount of two-dimensional space inside a region.',example:'A 5 cm by 4 cm rectangle has area 20 cm².'},
      {term:'Square unit',definition:'A unit used to measure area.',example:'cm², m², and in².'},
      {term:'Substitute',definition:'Replace a variable with a known value.',example:'In A = b × h, substitute b = 8 and h = 5.'}
    ],
    explorePrompt:'Use the Parallelogram Transformer to change the slant, base, and perpendicular height, then rearrange the shape into a rectangle and watch what stays the same.',
    exploreMode:'compare',
    handsOn:{title:'Paper Parallelogram Transformation',instructions:['Draw a parallelogram on grid paper.','Draw a perpendicular height near one end.','Cut along that height to remove a triangular piece.','Move the triangle to the opposite side to form a rectangle.','Compare the base, height, and area before and after.'],reflect:'Why does moving the triangle change the shape but not the area?'},
    practiceIntro:'Identify the base and perpendicular height before calculating. If the area is given, use division to find the missing dimension.',
    questions:[
      {difficulty:'foundations',prompt:'Which measurement is used with the base to find parallelogram area?',choices:['slant height','perpendicular height','perimeter','diagonal'],answer:1,hint:'It must meet the base at 90°.',explain:'Area uses the perpendicular height.'},
      {difficulty:'foundations',prompt:'Find the area when b = 6 cm and h = 4 cm.',choices:['10 cm²','20 cm²','24 cm²','24 cm'],answer:2,hint:'Multiply base × height.',explain:'6 × 4 = 24, so the area is 24 cm².'},
      {difficulty:'foundations',prompt:'Which unit is appropriate for area?',choices:['cm','cm²','cm³','degrees'],answer:1,hint:'Area is two-dimensional.',explain:'Area is measured in square units such as cm².'},
      {difficulty:'standard',prompt:'A parallelogram has b = 9 m, h = 7 m, and slanted side 8 m. What is its area?',choices:['56 m²','63 m²','72 m²','504 m²'],answer:1,hint:'Do not use the slanted side.',explain:'9 × 7 = 63 m².'},
      {difficulty:'standard',prompt:'Area is 48 cm² and height is 6 cm. Find the base.',choices:['6 cm','8 cm','42 cm','288 cm'],answer:1,hint:'Undo multiplication with division.',explain:'48 ÷ 6 = 8 cm.'},
      {difficulty:'standard',prompt:'Area is 52.5 m² and base is 7 m. Find the height.',choices:['6.5 m','7.5 m','45.5 m','367.5 m'],answer:1,hint:'52.5 ÷ 7.',explain:'52.5 ÷ 7 = 7.5 m.'},
      {difficulty:'standard',prompt:'Two parallelograms both have base 10 cm and perpendicular height 4 cm, but one is more slanted. Compare their areas.',choices:['first is larger','second is larger','both are 40 cm²','not enough information'],answer:2,hint:'Slant does not affect area when base and perpendicular height stay fixed.',explain:'Both have area 10 × 4 = 40 cm².'},
      {difficulty:'challenge',prompt:'A stained-glass parallelogram has base 20.2 in and height 9 in. How much glass is needed?',choices:['29.2 in²','90.9 in²','181.8 in²','201.8 in²'],answer:2,hint:'Multiply 20.2 × 9.',explain:'20.2 × 9 = 181.8 in².'},
      {difficulty:'challenge',prompt:'A parallelogram has area 90 ft² and base 8 ft. What is its height?',choices:['10.25 ft','11.25 ft','12.25 ft','720 ft'],answer:1,hint:'90 ÷ 8.',explain:'90 ÷ 8 = 11.25 ft.'}
    ],
    checkQuestions:[
      {difficulty:'foundations',prompt:'A perpendicular height forms what angle with the base?',choices:['45°','60°','90°','180°'],answer:2,hint:'',explain:'Perpendicular lines meet at 90°.'},
      {difficulty:'foundations',prompt:'Find area: b = 5, h = 6.',choices:['11 units²','30 units²','60 units²','30 units'],answer:1,hint:'',explain:'5 × 6 = 30 units².'},
      {difficulty:'foundations',prompt:'Which measurement should NOT replace the perpendicular height?',choices:['vertical distance','90° distance','slanted side','distance from base to opposite side'],answer:2,hint:'',explain:'The slanted side is not the perpendicular height.'},
      {difficulty:'standard',prompt:'Find area: b = 12 mm, h = 20 mm.',choices:['32 mm²','120 mm²','240 mm²','240 mm³'],answer:2,hint:'',explain:'12 × 20 = 240 mm².'},
      {difficulty:'standard',prompt:'Area = 72 cm², height = 9 cm. Base?',choices:['8 cm','9 cm','63 cm','648 cm'],answer:0,hint:'',explain:'72 ÷ 9 = 8 cm.'},
      {difficulty:'standard',prompt:'What stays unchanged when a parallelogram is cut and rearranged into a rectangle?',choices:['its slant','its area','its number of vertices','its perimeter always'],answer:1,hint:'',explain:'The same pieces cover the same total area.'},
      {difficulty:'standard',prompt:'A roof has base 12 ft and perpendicular height 8 ft. Area?',choices:['20 ft²','48 ft²','96 ft²','192 ft²'],answer:2,hint:'',explain:'12 × 8 = 96 ft².'},
      {difficulty:'challenge',prompt:'A parallelogram has area 24.8 in² and height 4 in. Base?',choices:['5.2 in','6.2 in','7.2 in','99.2 in'],answer:1,hint:'',explain:'24.8 ÷ 4 = 6.2 in.'},
      {difficulty:'challenge',prompt:'Which pair gives area 84 m²?',choices:['b=12,h=7','b=14,h=5','b=9,h=8','b=21,h=3'],answer:0,hint:'',explain:'12 × 7 = 84.'},
      {difficulty:'challenge',prompt:'Why can two differently slanted parallelograms have equal area?',choices:['Their perimeters are equal','Area depends on base and perpendicular height','Slant height is always equal to base','All parallelograms have equal area'],answer:1,hint:'',explain:'Equal base and perpendicular height produce equal area.'}
    ],
    application:{title:'Glass Wall Designer',scenario:'Design a parallelogram-shaped glass panel that meets an area requirement.',tasks:['Choose a base and perpendicular height.','Check the area.','Change the slant while keeping base and height fixed.','Explain why the glass amount stays the same.'],reveal:'Changing slant changes appearance but not area when base and perpendicular height stay fixed.'},
    summary:['Parallelogram area can be understood by rearranging it into a rectangle.','Use the perpendicular height, not the slanted side.','Area = base × perpendicular height.','Use division to find a missing base or height.','Area answers use square units.'],
    support:['Highlight the base and draw the perpendicular height with a right-angle marker.','Rotate the diagram so the chosen base is horizontal.','Use grid paper and physically rearrange the shape.','Write A = b × h before substituting values.'],
    extension:['Create three different parallelograms with area 48 cm².','Explain why a parallelogram can have a perpendicular height outside the shape.','Use coordinates to draw a parallelogram and determine its area.'],
    pat:{title:'PAT-STYLE THINKING',prompt:'A student uses the 9 cm slanted side instead of the 6 cm perpendicular height with a 10 cm base. Explain the error.',answer:'Area measures base times the perpendicular distance to the opposite side. The slanted side does not meet the base at 90°, so the correct area is 10 × 6 = 60 cm².'},
    review:['I can identify base and perpendicular height.','I can explain the rectangle connection.','I can find parallelogram area.','I can find a missing base or height.','I can use square units correctly.'],
    next:{title:'Area of a Triangle',slug:'area-triangle',status:'ready'}
  },

  'grade-6-math/measurement/area-triangle': {
    hook:'If you cut a parallelogram along a diagonal, you get two matching triangles. What does that tell you about the area of one triangle?',
    prerequisites:['Determine the area of a parallelogram.','Identify a base and perpendicular height.','Understand congruent shapes as the same size and shape.'],
    goals:['model a parallelogram as two congruent triangles.','explain why triangle area is half the area of a matching parallelogram.','determine the area of triangles with different orientations.','solve real problems involving triangle area.'],
    estimatedTime:'120 min',
    materials:['pencil','grid paper','optional scissors'],
    successCriteria:['I can show how two congruent triangles form a parallelogram.','I can identify base and perpendicular height on a triangle.','I can determine triangle area and remember the half.','I can explain why different-looking triangles can have the same area.'],
    bigIdea:'A triangle has half the area of a parallelogram with the same base and perpendicular height.',
    bigIdeaDetail:'A diagonal divides a parallelogram into two congruent triangles. Because the two triangles share the parallelogram equally, each triangle has half its area. This gives triangle area as base × perpendicular height ÷ 2.',
    connection:'Can a skinny triangle and a wide-looking triangle have the same area if their base and perpendicular height are the same?',
    concepts:[
      {title:'Two congruent triangles make a parallelogram',text:'Cut a parallelogram along a diagonal and the two pieces are congruent triangles. Together they cover the entire original area.',remember:'One triangle is exactly half of that parallelogram.'},
      {title:'Base and height must be perpendicular',text:'Choose a base, then use the perpendicular distance from that base to the opposite vertex. The height may lie inside or outside the triangle.',remember:'A side length is not automatically the height.'},
      {title:'Triangle area is half of base × height',text:'First imagine the matching parallelogram: b × h. One triangle is half, so divide by 2.',remember:'A = (b × h) ÷ 2.'},
      {title:'You can halve first',text:'Because multiplication can be regrouped, you can halve the base or the height first when that makes the arithmetic easier.',remember:'For b=5 and h=6, halve 6 to 3, then 5 × 3 = 15.'},
      {title:'Different shapes can have equal area',text:'Triangles with the same base and perpendicular height have the same area even if the top vertex shifts left or right.',remember:'Area depends on base and perpendicular height, not the slant.'},
      {title:'Use square units',text:'Triangle area is two-dimensional, so final answers use units².',remember:'cm² is area; cm is length; cm³ is volume.'}
    ],
    misconceptions:[
      {title:'“I forgot to divide by 2.”',text:'The triangle is only half of the matching parallelogram, so b × h gives twice the triangle area.'},
      {title:'“Any side can be the height.”',text:'The height must be perpendicular to the chosen base.'},
      {title:'“If the triangle leans, its area changes.”',text:'Sliding the opposite vertex parallel to the base keeps base and perpendicular height unchanged, so area stays the same.'},
      {title:'“Area is b + h ÷ 2.”',text:'Base and height are multiplied before taking half.'}
    ],
    examples:[
      {title:'Example 1 · Build from a parallelogram',problem:'A parallelogram has base 8 cm and height 5 cm. What is the area of one of the two congruent triangles formed by a diagonal?',steps:['Parallelogram area = 8 × 5 = 40 cm².','A diagonal splits it into two congruent triangles.','40 ÷ 2 = 20.'],answer:'20 cm²'},
      {title:'Example 2 · Calculate directly',problem:'A triangle has base 10 m and perpendicular height 6 m. Find its area.',steps:['Multiply base × height: 10 × 6 = 60.','Take half: 60 ÷ 2 = 30.','Write square units.'],answer:'30 m²'},
      {title:'Example 3 · Halve first',problem:'Find the area when b = 7 yd and h = 8 yd.',steps:['Halve the height: 8 ÷ 2 = 4.','Multiply 7 × 4 = 28.'],answer:'28 yd²'},
      {title:'Example 4 · Real-world sail',problem:'A triangular sail has base 7 ft and perpendicular height 16.2 ft. Find its area.',steps:['Multiply 7 × 16.2 = 113.4.','Divide by 2: 113.4 ÷ 2 = 56.7.'],answer:'56.7 ft²'}
    ],
    vocabulary:[
      {term:'Triangle',definition:'A polygon with three sides.',example:'Right, acute, and obtuse triangles are all triangles.'},
      {term:'Congruent',definition:'Exactly the same size and shape.',example:'A diagonal of a parallelogram creates two congruent triangles.'},
      {term:'Diagonal',definition:'A segment joining two non-adjacent vertices of a polygon.',example:'A parallelogram diagonal splits it into two triangles.'},
      {term:'Base',definition:'The side chosen as the reference for an area calculation.',example:'A triangle may be rotated and still use the same base length.'},
      {term:'Perpendicular height',definition:'The 90° distance from the base line to the opposite vertex.',example:'It may be drawn outside an obtuse triangle.'},
      {term:'Area',definition:'The amount of two-dimensional space inside a region.',example:'Triangle area is measured in square units.'}
    ],
    explorePrompt:'Use the Triangle Area Lab to pair two congruent triangles into a parallelogram, move the top vertex, and test which changes affect area.',
    exploreMode:'compare',
    handsOn:{title:'Two-Triangle Proof',instructions:['Draw a parallelogram on grid paper.','Draw one diagonal.','Cut along the diagonal to create two triangles.','Compare the triangles by rotating or flipping one.','Calculate the parallelogram area and then the area of one triangle.'],reflect:'How does the diagonal make the “divide by 2” part of triangle area visible?'},
    practiceIntro:'Always identify a base and its perpendicular height. Then multiply and take half.',
    questions:[
      {difficulty:'foundations',prompt:'A triangle is what fraction of a parallelogram with the same base and height?',choices:['one-fourth','one-third','one-half','the same'],answer:2,hint:'A diagonal makes two congruent triangles.',explain:'Each triangle is one-half of the parallelogram.'},
      {difficulty:'foundations',prompt:'Find area: b = 6 cm, h = 4 cm.',choices:['10 cm²','12 cm²','24 cm²','48 cm²'],answer:1,hint:'6 × 4 ÷ 2.',explain:'24 ÷ 2 = 12 cm².'},
      {difficulty:'foundations',prompt:'Which height should be used?',choices:['any slanted side','the perpendicular distance to the base','the longest side','the perimeter'],answer:1,hint:'Look for 90°.',explain:'Triangle area uses perpendicular height.'},
      {difficulty:'standard',prompt:'Find area: b = 9 m, h = 7 m.',choices:['31.5 m²','63 m²','16 m²','126 m²'],answer:0,hint:'9 × 7 ÷ 2.',explain:'63 ÷ 2 = 31.5 m².'},
      {difficulty:'standard',prompt:'Find area: b = 2.4 yd, h = 3 yd.',choices:['3.6 yd²','5.4 yd²','7.2 yd²','1.8 yd²'],answer:0,hint:'2.4 × 3 ÷ 2.',explain:'7.2 ÷ 2 = 3.6 yd².'},
      {difficulty:'standard',prompt:'Two triangles have the same base and perpendicular height but different slants. Compare their areas.',choices:['first is larger','second is larger','areas are equal','cannot tell'],answer:2,hint:'What measurements control triangle area?',explain:'Same base and perpendicular height means same area.'},
      {difficulty:'standard',prompt:'A parallelogram has area 36 in² and is cut along a diagonal. Area of each triangle?',choices:['9 in²','18 in²','36 in²','72 in²'],answer:1,hint:'Take half.',explain:'36 ÷ 2 = 18 in².'},
      {difficulty:'challenge',prompt:'A triangle has base 30 in and height 13 in. How much felt is needed for one pennant?',choices:['195 in²','390 in²','43 in²','97.5 in²'],answer:0,hint:'30 × 13 ÷ 2.',explain:'390 ÷ 2 = 195 in².'},
      {difficulty:'challenge',prompt:'The area of a triangle is 32 in² and height is 4 in. Find the base.',choices:['8 in','12 in','16 in','32 in'],answer:2,hint:'32 = b × 4 ÷ 2, so double 32 first.',explain:'64 = 4b, so b = 16 in.'}
    ],
    checkQuestions:[
      {difficulty:'foundations',prompt:'Why do we divide b × h by 2 for a triangle?',choices:['Triangles have 2 sides','A triangle is half a matching parallelogram','Height is always even','Area units are squared'],answer:1,hint:'',explain:'Two congruent triangles make the matching parallelogram.'},
      {difficulty:'foundations',prompt:'Find area: b = 5, h = 4.',choices:['9','10','20','40'],answer:1,hint:'',explain:'5 × 4 ÷ 2 = 10.'},
      {difficulty:'foundations',prompt:'Which unit fits triangle area?',choices:['m','m²','m³','°'],answer:1,hint:'',explain:'Area uses square units.'},
      {difficulty:'standard',prompt:'Find area: b = 11 cm, h = 5 cm.',choices:['27.5 cm²','55 cm²','16 cm²','110 cm²'],answer:0,hint:'',explain:'11 × 5 ÷ 2 = 27.5 cm².'},
      {difficulty:'standard',prompt:'A triangle and parallelogram share b=8,h=6. If the parallelogram area is 48 cm², triangle area?',choices:['12','24','48','96'],answer:1,hint:'',explain:'The triangle is half: 24 cm².'},
      {difficulty:'standard',prompt:'A sail has b=7 ft,h=16.2 ft. Area?',choices:['56.7 ft²','113.4 ft²','23.2 ft²','46.2 ft²'],answer:0,hint:'',explain:'7 × 16.2 ÷ 2 = 56.7 ft².'},
      {difficulty:'standard',prompt:'A top vertex slides sideways while base and perpendicular height stay fixed. Area?',choices:['increases','decreases','stays the same','becomes zero'],answer:2,hint:'',explain:'Area depends on base and perpendicular height.'},
      {difficulty:'challenge',prompt:'Five pennants each have b=30 in,h=13 in. Total felt area?',choices:['195 in²','390 in²','975 in²','1950 in²'],answer:2,hint:'',explain:'One is 195 in²; 5 × 195 = 975 in².'},
      {difficulty:'challenge',prompt:'Area=15.05 mm², base=7 mm. Height?',choices:['2.15 mm','4.3 mm','7.5 mm','30.1 mm'],answer:1,hint:'',explain:'15.05 × 2 ÷ 7 = 4.3 mm.'},
      {difficulty:'challenge',prompt:'A student says two measured sides 10 cm and 8 cm guarantee area 40 cm². What is missing?',choices:['perimeter','a perpendicular height/base pairing','a third side only','an angle sum'],answer:1,hint:'',explain:'Area requires a chosen base and its perpendicular height, not just any two side lengths.'}
    ],
    application:{title:'Pennant Designer',scenario:'Design triangular school-spirit pennants while minimizing wasted material.',tasks:['Choose a base and perpendicular height.','Calculate one pennant area.','Scale to several pennants.','Explain why changing the top-vertex position can keep area unchanged.'],reveal:'Triangle area depends on base and perpendicular height, so shape can change while area stays fixed.'},
    summary:['A diagonal can split a parallelogram into two congruent triangles.','Triangle area is half of base × perpendicular height.','The perpendicular height may be inside or outside the triangle.','Different-looking triangles can have equal area.','Use square units.'],
    support:['Pair the triangle with a copy to make a parallelogram.','Highlight the base and draw a dashed perpendicular height.','Halve an even base or height before multiplying.','Use grid paper to estimate first.'],
    extension:['Create three different triangles with base 8 cm, height 6 cm, and equal area.','Find two different base-height pairs that give area 24 cm².','Explain how triangle area connects to a rectangle as well as a parallelogram.'],
    pat:{title:'PAT-STYLE THINKING',prompt:'Three triangles have the same 10 cm base and the same 6 cm perpendicular height, but their top vertices are in different horizontal positions. Which has the greatest area? Explain.',answer:'All three have the same area: 10 × 6 ÷ 2 = 30 cm². Moving the top vertex sideways does not change the perpendicular height.'},
    review:['I can connect triangle area to parallelogram area.','I can identify base and perpendicular height.','I can calculate triangle area.','I can explain equal-area triangles.','I can solve triangle-area applications.'],
    next:{title:'Area of Composite Shapes',slug:'area-composite-shapes',status:'ready'}
  },

  'grade-6-math/measurement/area-composite-shapes': {
    hook:'A playground plan looks complicated until you notice it is really a rectangle, a parallelogram, and two triangles joined together. How can breaking it apart make the area easier?',
    prerequisites:['Find area of rectangles, parallelograms, and triangles.','Identify equal side lengths and perpendicular dimensions.','Add and subtract decimal numbers.'],
    goals:['visualize more than one way to decompose a composite shape.','determine missing dimensions from shape relationships.','calculate the total area from simpler parts.','compare different valid decomposition strategies.'],
    estimatedTime:'80 min',
    materials:['pencil','grid paper','optional ruler/tangram pieces'],
    successCriteria:['I can spot familiar shapes inside a composite figure.','I can draw useful decomposition lines.','I can find missing dimensions before calculating.','I can add component areas to find a total.','I can explain why different decompositions can produce the same area.'],
    bigIdea:'A complicated area becomes manageable when you decompose it into familiar shapes and add their areas.',
    bigIdeaDetail:'Composite shapes can be broken apart in many valid ways. The pieces do not need to be equal. Choose rectangles, parallelograms, and triangles whose dimensions you can determine, calculate each area, then combine the results. Different decompositions should agree because the original total area is unchanged.',
    connection:'If two students draw different decomposition lines through the same shape, can both methods be correct?',
    concepts:[
      {title:'Composite means made from smaller shapes',text:'A composite shape is a larger shape composed of two or more familiar shapes.',remember:'Look for rectangles, parallelograms, and triangles.'},
      {title:'Decompose, do not necessarily partition',text:'Decomposing breaks a figure into useful smaller parts. The parts do not have to be equal.',remember:'Choose pieces that make area easy to calculate.'},
      {title:'More than one decomposition can work',text:'There is often no single correct split. Two different sets of pieces can cover the same original shape.',remember:'Your component areas should still add to the same total.'},
      {title:'Find missing dimensions first',text:'Use opposite sides, equal side marks, and total-length relationships to determine any lengths you need.',remember:'Do not calculate an area with a guessed dimension.'},
      {title:'Calculate each piece with the right relationship',text:'Rectangles and parallelograms use base × height; triangles use half of base × height.',remember:'Match each piece to its own area relationship.'},
      {title:'Combine the component areas',text:'Add the areas of non-overlapping pieces. If using a “large shape minus cutout” method, subtract the missing region instead.',remember:'Check that every part is counted exactly once.'}
    ],
    misconceptions:[
      {title:'“There is only one correct way to split the shape.”',text:'Many composite shapes can be decomposed in several valid ways.'},
      {title:'“I can add all the side lengths to get area.”',text:'Adding side lengths finds perimeter-like information, not two-dimensional area.'},
      {title:'“The drawing is perfectly to scale.”',text:'Use labelled dimensions and geometric relationships rather than measuring the picture unless the task says to measure.'},
      {title:'“I counted a region twice.”',text:'Your pieces should cover the original shape without overlaps or gaps.'}
    ],
    examples:[
      {title:'Example 1 · Rectangle + triangle',problem:'A composite sign is a 10 m × 4 m rectangle topped by a triangle with base 10 m and height 3 m.',steps:['Rectangle area: 10 × 4 = 40 m².','Triangle area: 10 × 3 ÷ 2 = 15 m².','Add: 40 + 15 = 55 m².'],answer:'55 m²'},
      {title:'Example 2 · Parallelogram + triangle',problem:'A design contains a parallelogram with b=8 cm,h=5 cm and a triangle with b=6 cm,h=4 cm.',steps:['Parallelogram: 8 × 5 = 40 cm².','Triangle: 6 × 4 ÷ 2 = 12 cm².','Total: 52 cm².'],answer:'52 cm²'},
      {title:'Example 3 · Large rectangle minus cutout',problem:'A 12 m × 8 m rectangle has a 4 m × 3 m rectangular corner removed. Find the remaining area.',steps:['Whole rectangle: 12 × 8 = 96 m².','Cutout: 4 × 3 = 12 m².','Subtract: 96 − 12 = 84 m².'],answer:'84 m²'},
      {title:'Example 4 · Compare two methods',problem:'A house-shaped figure is a rectangle 8×5 with a triangular roof b=8,h=3. Find total area.',steps:['Method 1: 8×5 + 8×3÷2 = 40+12=52.','Method 2 could split the same roof triangle differently; the pieces still total 12.','Therefore the total remains 52.'],answer:'52 square units'}
    ],
    vocabulary:[
      {term:'Composite shape',definition:'A shape made from two or more simpler shapes.',example:'A house outline can combine a rectangle and triangle.'},
      {term:'Decompose',definition:'Break a whole shape into smaller, simpler parts.',example:'Split an arrow into a rectangle and triangle.'},
      {term:'Dimension',definition:'A measurement such as length, width, base, or height.',example:'A rectangle may have dimensions 8 cm by 5 cm.'},
      {term:'Hash marks',definition:'Marks showing sides have equal length.',example:'Matching hash marks can reveal a missing length.'},
      {term:'Area',definition:'The amount of two-dimensional space a region covers.',example:'Component areas add to the composite area.'},
      {term:'Estimate',definition:'A reasonable approximate value.',example:'Estimate area on grid paper before calculating exactly.'}
    ],
    explorePrompt:'Use the Shape Splitter to reveal different valid decomposition lines, compare component areas, and confirm that different methods produce the same total.',
    exploreMode:'compare',
    handsOn:{title:'Tangram Area Build',instructions:['Use tangram or paper pieces to make a larger composite figure.','Trace the outline and the internal piece boundaries.','Choose a second way to group the pieces into larger familiar shapes.','Estimate the total area.','Explain which decomposition is easiest to calculate and why.'],reflect:'What makes one decomposition more useful than another even when both are correct?'},
    practiceIntro:'Sketch decomposition lines first. Label every dimension you know or can determine, then calculate each component once.',
    questions:[
      {difficulty:'foundations',prompt:'A composite shape is best described as...',choices:['a shape with equal sides only','a shape made from two or more simpler shapes','a 3-D shape','a shape with no area'],answer:1,hint:'Think “composed of parts.”',explain:'Composite shapes are made from two or more simpler shapes.'},
      {difficulty:'foundations',prompt:'A 6×4 rectangle and a triangle with b=6,h=2 are joined without overlap. Total area?',choices:['24','30','36','48'],answer:1,hint:'Rectangle 24; triangle 6.',explain:'24 + 6 = 30 square units.'},
      {difficulty:'foundations',prompt:'When decomposing, must all pieces be equal?',choices:['yes','no','only for triangles','only on grid paper'],answer:1,hint:'Decompose is different from partition into equal parts.',explain:'Useful pieces do not need to be equal.'},
      {difficulty:'standard',prompt:'A 10×4 rectangle has a triangular roof b=10,h=3. Total area?',choices:['40','55','70','100'],answer:1,hint:'40 + 15.',explain:'Rectangle 40 plus triangle 15 = 55.'},
      {difficulty:'standard',prompt:'A 12×8 rectangle has a 4×3 rectangular corner removed. Remaining area?',choices:['84','92','96','108'],answer:0,hint:'Whole minus cutout.',explain:'96 − 12 = 84.'},
      {difficulty:'standard',prompt:'Parallelogram b=8,h=5 plus triangle b=6,h=4. Total area?',choices:['46','52','64','80'],answer:1,hint:'40 + 12.',explain:'40 + 12 = 52 cm².'},
      {difficulty:'standard',prompt:'Two students use different valid decompositions of the same non-overlapping shape. What should happen?',choices:['totals must differ','totals should match','larger pieces give larger total','only one method can work'],answer:1,hint:'The original area is fixed.',explain:'Different valid decompositions cover the same total area.'},
      {difficulty:'challenge',prompt:'A 14×9 rectangle has two 3×2 corner cutouts removed. Remaining area?',choices:['108','114','120','126'],answer:1,hint:'126 − 2(6).',explain:'126 − 12 = 114.'},
      {difficulty:'challenge',prompt:'A composite park contains a parallelogram b=12,h=7 and two congruent triangles each b=6,h=4. Total area?',choices:['84','96','108','132'],answer:2,hint:'84 + 12 + 12.',explain:'84 + 24 = 108 square units.'}
    ],
    checkQuestions:[
      {difficulty:'foundations',prompt:'Which action is decomposition?',choices:['stretching a shape','breaking a shape into simpler parts','finding perimeter','rotating only'],answer:1,hint:'',explain:'Decomposition breaks a shape into useful simpler parts.'},
      {difficulty:'foundations',prompt:'Rectangle 5×4 plus triangle b=5,h=2. Total?',choices:['20','25','30','40'],answer:1,hint:'',explain:'20 + 5 = 25.'},
      {difficulty:'foundations',prompt:'Which is most useful before calculating composite area?',choices:['guess all dimensions','draw decomposition lines and label dimensions','add every side','ignore shape types'],answer:1,hint:'',explain:'A labelled decomposition organizes the calculation.'},
      {difficulty:'standard',prompt:'Whole rectangle 9×7 minus cutout 3×2. Remaining area?',choices:['54','57','61','63'],answer:1,hint:'',explain:'63 − 6 = 57.'},
      {difficulty:'standard',prompt:'Triangle b=8,h=6 plus parallelogram b=5,h=4. Total?',choices:['32','44','48','68'],answer:1,hint:'',explain:'24 + 20 = 44.'},
      {difficulty:'standard',prompt:'Why might two decompositions look different but still be correct?',choices:['area changes with lines','both cover exactly the same original region','one uses perimeter','diagrams are always to scale'],answer:1,hint:'',explain:'Internal lines do not change the original area.'},
      {difficulty:'standard',prompt:'A house is rectangle 8×5 plus roof triangle b=8,h=3. Area?',choices:['40','48','52','64'],answer:2,hint:'',explain:'40 + 12 = 52.'},
      {difficulty:'challenge',prompt:'A 15×10 rectangle has a 5×4 rectangle removed and a triangle b=6,h=4 added. Total?',choices:['130','142','150','162'],answer:1,hint:'',explain:'150 − 20 + 12 = 142.'},
      {difficulty:'challenge',prompt:'A composite figure totals 90 cm². One triangle part is 18 cm² and one rectangle part is 42 cm². Third part?',choices:['20','30','48','66'],answer:1,hint:'',explain:'90 − 18 − 42 = 30 cm².'},
      {difficulty:'challenge',prompt:'What is the strongest check after finding composite area?',choices:['count pieces only','try another valid decomposition or estimate','change units randomly','measure perimeter'],answer:1,hint:'',explain:'A second decomposition or estimate can verify reasonableness.'}
    ],
    application:{title:'Park Planner',scenario:'A community park is built from rectangular, parallelogram, and triangular zones.',tasks:['Choose a decomposition.','Find missing dimensions.','Calculate each zone area.','Compare your method with an alternate decomposition.'],reveal:'Good decompositions make the same total area easier to see and calculate.'},
    summary:['Composite shapes contain familiar smaller shapes.','A shape can often be decomposed in several valid ways.','Find missing dimensions before calculating.','Use the correct area relationship for each component.','Combine each non-overlapping area exactly once.'],
    support:['Trace each component in a different colour.','Write the area beside each piece before adding.','Use a large-shape-minus-cutout method when it is simpler.','Check equal sides and total-length relationships for missing dimensions.'],
    extension:['Solve the same composite area using two different decompositions.','Design a composite shape with area exactly 100 cm².','Create a shape where subtraction is easier than addition.'],
    pat:{title:'PAT-STYLE THINKING',prompt:'Two students decompose the same composite shape differently and get the same total area. Explain why both methods can be valid.',answer:'Decomposition lines only organize the original region; they do not change it. If both sets of non-overlapping pieces cover the whole shape exactly once and each component area is calculated correctly, the totals must match.'},
    review:['I can identify component shapes.','I can choose useful decomposition lines.','I can determine missing dimensions.','I can calculate and combine component areas.','I can compare two valid methods.'],
    next:{title:'Understanding Volume',slug:'understanding-volume',status:'ready'}
  },

  'grade-6-math/measurement/understanding-volume': {
    hook:'A box has a base that fits 12 unit cubes. If you stack 5 identical layers, how many cubes fill the whole box—and why is that a volume idea rather than an area idea?',
    prerequisites:['Distinguish 2-D shapes from 3-D objects.','Find the area of a rectangular base.','Multiply several factors and use the associative property.'],
    goals:['recognize volume in real-world objects.','model volume with congruent units and cubic units.','connect base area and layers to prism volume.','determine and solve problems involving volume of right rectangular prisms.'],
    estimatedTime:'2 learning sessions',
    materials:['pencil','paper','optional centimetre or linking cubes'],
    successCriteria:['I can explain the difference between area, volume, and capacity.','I can count hidden cubes by thinking in complete layers.','I can choose cm³ or m³ appropriately.','I can determine volume using base area × height.','I can find a missing prism dimension when volume is known.'],
    bigIdea:'Volume measures three-dimensional space and can be understood as equal layers of cubic units.',
    bigIdeaDetail:'A right rectangular prism can be filled with congruent cubes without gaps or overlaps. One layer shows the area of the base. Repeating that same layer through the height builds the entire prism, so volume = area of the base × height = length × width × height.',
    connection:'Why can two differently shaped rectangular prisms have exactly the same volume?',
    concepts:[
      {title:'Volume is 3-D space',text:'Volume describes how much three-dimensional space an object occupies. Every 3-D object has volume.',remember:'Area is 2-D; volume adds a third dimension.'},
      {title:'Volume and capacity are related but different',text:'Volume is space occupied by an object. Capacity describes how much a container can hold.',remember:'For this lesson, calculations focus on volume of right rectangular prisms.'},
      {title:'Cubic units fill space',text:'A cubic centimetre is a 1 cm × 1 cm × 1 cm cube. A cubic metre is a 1 m × 1 m × 1 m cube.',remember:'Volume uses cm³ or m³, not cm² or m².'},
      {title:'One layer is the base area',text:'If the base is 4 cubes long and 3 cubes wide, one complete layer contains 12 cubes.',remember:'Do not count only visible cubes.'},
      {title:'Repeat the layer through the height',text:'A prism 5 layers high with 12 cubes per layer contains 12 × 5 = 60 cubes.',remember:'Volume = base area × height.'},
      {title:'Different dimensions can make equal volume',text:'2×3×4 and 1×6×4 both equal 24. Rearranging factors changes shape but not the product.',remember:'This connects to factors and the associative property.'}
    ],
    misconceptions:[
      {title:'“I only count the cubes I can see.”',text:'A solid prism contains hidden cubes too. Count a complete layer, then multiply by the number of layers.'},
      {title:'“Volume is measured in cm².”',text:'cm² measures area. Volume needs three dimensions, so use cm³.'},
      {title:'“Volume and capacity mean exactly the same thing.”',text:'Volume is space occupied; capacity is how much a container can hold.'},
      {title:'“Length × width is enough.”',text:'That only gives the base area. Multiply by height to include all layers.'}
    ],
    examples:[
      {title:'Example 1 · Count by layers',problem:'A prism has 12 cubes in each layer and 3 layers. Find its volume if each cube is 1 cm³.',steps:['One layer contains 12 cubes.','There are 3 identical layers.','12 × 3 = 36.'],answer:'36 cm³'},
      {title:'Example 2 · Use dimensions',problem:'A prism measures 5 cm × 2 cm × 3 cm.',steps:['Base area = 5 × 2 = 10 cm².','Multiply by height: 10 × 3 = 30.','Use cubic units.'],answer:'30 cm³'},
      {title:'Example 3 · Larger prism',problem:'A rectangular prism measures 7 m × 4 m × 3 m.',steps:['Base area = 7 × 4 = 28 m².','28 × 3 = 84.'],answer:'84 m³'},
      {title:'Example 4 · Find missing height',problem:'Volume is 72 cm³. Length is 6 cm and width is 4 cm. Find height.',steps:['Base area = 6 × 4 = 24 cm².','Write 72 = 24 × h.','72 ÷ 24 = 3.'],answer:'3 cm'}
    ],
    vocabulary:[
      {term:'Volume',definition:'The amount of three-dimensional space an object occupies.',example:'A box measuring 2×3×4 has volume 24 cubic units.'},
      {term:'Capacity',definition:'The amount a container can hold.',example:'A bottle has capacity for a certain amount of liquid.'},
      {term:'Cubic centimetre',definition:'The volume of a cube measuring 1 cm by 1 cm by 1 cm.',example:'Written cm³.'},
      {term:'Cubic metre',definition:'The volume of a cube measuring 1 m by 1 m by 1 m.',example:'Written m³.'},
      {term:'Right rectangular prism',definition:'A prism with a rectangular base and faces meeting the base at right angles.',example:'Many boxes resemble right rectangular prisms.'},
      {term:'Base area',definition:'The two-dimensional area of the chosen base face.',example:'A 5×2 base has area 10 cm².'},
      {term:'Dimension',definition:'A measurement such as length, width, or height.',example:'2 cm × 3 cm × 4 cm gives three dimensions.'}
    ],
    explorePrompt:'Use the Volume Builder to change length, width, and height, inspect one base layer, stack layers, and connect the cube count to multiplication.',
    exploreMode:'compare',
    handsOn:{title:'Build Equal-Volume Prisms',instructions:['Choose a target volume such as 24 cubic units.','Use cubes or draw layers to build one rectangular prism.','Find a different set of dimensions with the same volume.','Record the base area and number of layers for each.','Explain why both volumes match.'],reflect:'How can a prism change shape while keeping the same volume?'},
    practiceIntro:'Think in layers: find the base area first, then multiply by height. Use cubic units for the final volume.',
    questions:[
      {difficulty:'foundations',prompt:'Which unit measures volume?',choices:['cm','cm²','cm³','degrees'],answer:2,hint:'Volume is three-dimensional.',explain:'Volume uses cubic units such as cm³.'},
      {difficulty:'foundations',prompt:'A base layer has 8 cubes and there are 4 layers. Volume?',choices:['12','24','32','64'],answer:2,hint:'8 cubes per layer × 4 layers.',explain:'8 × 4 = 32 cubic units.'},
      {difficulty:'foundations',prompt:'Which statement best describes volume?',choices:['distance around a shape','space inside a 2-D region','3-D space occupied by an object','amount a container can hold only'],answer:2,hint:'Think three dimensions.',explain:'Volume is the three-dimensional space an object occupies.'},
      {difficulty:'standard',prompt:'Find volume: 5 cm × 2 cm × 3 cm.',choices:['10 cm³','20 cm³','30 cm³','60 cm³'],answer:2,hint:'5 × 2 × 3.',explain:'The volume is 30 cm³.'},
      {difficulty:'standard',prompt:'Find volume: 7 m × 4 m × 3 m.',choices:['14 m³','28 m³','84 m³','112 m³'],answer:2,hint:'Find base area, then multiply by height.',explain:'7 × 4 × 3 = 84 m³.'},
      {difficulty:'standard',prompt:'Which pair of prisms has equal volume?',choices:['2×3×4 and 1×6×4','2×2×4 and 1×3×5','3×3×3 and 2×4×4','1×8×2 and 2×5×2'],answer:0,hint:'Compare products.',explain:'Both products are 24.'},
      {difficulty:'standard',prompt:'Volume is 60 cm³. Base area is 12 cm². Height?',choices:['4 cm','5 cm','12 cm','72 cm'],answer:1,hint:'60 ÷ 12.',explain:'The prism has 5 layers, so height is 5 cm.'},
      {difficulty:'challenge',prompt:'A candle has a square base 9 cm by 9 cm and height 15 cm. Volume?',choices:['135 cm³','810 cm³','1215 cm³','2430 cm³'],answer:2,hint:'9 × 9 × 15.',explain:'81 × 15 = 1215 cm³.'},
      {difficulty:'challenge',prompt:'A prism volume is 36 m³. If its height doubles while base area stays fixed, what happens to volume?',choices:['halves','stays 36','doubles to 72','quadruples to 144'],answer:2,hint:'V = base area × height.',explain:'Doubling one factor doubles the product.'}
    ],
    checkQuestions:[
      {difficulty:'foundations',prompt:'A 1 cm × 1 cm × 1 cm cube has volume...',choices:['1 cm','1 cm²','1 cm³','3 cm³'],answer:2,hint:'',explain:'It defines one cubic centimetre.'},
      {difficulty:'foundations',prompt:'A layer has 6 cubes and the prism has 5 layers. Volume?',choices:['11','30','36','60'],answer:1,hint:'',explain:'6 × 5 = 30 cubic units.'},
      {difficulty:'foundations',prompt:'What is the difference between area and volume?',choices:['none','area is 2-D; volume is 3-D','area is 3-D; volume is 2-D','volume measures only liquids'],answer:1,hint:'',explain:'Area covers two dimensions; volume includes three.'},
      {difficulty:'standard',prompt:'Volume of 4×3×6 cm prism?',choices:['13 cm³','24 cm³','72 cm³','144 cm³'],answer:2,hint:'',explain:'4 × 3 × 6 = 72 cm³.'},
      {difficulty:'standard',prompt:'A base is 5×3 cm and height is 4 cm. Volume?',choices:['15 cm³','20 cm³','60 cm³','75 cm³'],answer:2,hint:'',explain:'Base area 15; 15 × 4 = 60 cm³.'},
      {difficulty:'standard',prompt:'Which unit is best for the volume of a classroom?',choices:['cm²','cm³','m²','m³'],answer:3,hint:'',explain:'A room is large, so m³ is appropriate.'},
      {difficulty:'standard',prompt:'A prism has volume 84 m³ and base area 28 m². Height?',choices:['2 m','3 m','4 m','56 m'],answer:1,hint:'',explain:'84 ÷ 28 = 3 m.'},
      {difficulty:'challenge',prompt:'120 unit cubes are rearranged into a different rectangular prism with no gaps. New volume?',choices:['depends on dimensions','60','120','240'],answer:2,hint:'',explain:'Rearranging the same 120 unit cubes keeps volume 120 cubic units.'},
      {difficulty:'challenge',prompt:'A fish tank is 60 cm × 15 cm × 34 cm. Volume?',choices:['3060 cm³','30 600 cm³','306 000 cm³','109 cm³'],answer:1,hint:'',explain:'60 × 15 × 34 = 30 600 cm³.'},
      {difficulty:'challenge',prompt:'Why is counting only visible cubes unreliable?',choices:['visible cubes are larger','hidden cubes also occupy space','volume ignores layers','only corners count'],answer:1,hint:'',explain:'A solid prism includes cubes inside and behind the visible faces.'}
    ],
    application:{title:'Storage Stack Challenge',scenario:'Design a rectangular storage container that holds a required volume while fitting a space constraint.',tasks:['Choose dimensions.','Calculate base area.','Determine the number of layers.','Compare a second design with the same volume.'],reveal:'Many dimension sets can create the same volume; base area × height explains why.'},
    summary:['Volume measures three-dimensional space.','Cubic units have length, width, and height.','Think of a prism as repeated equal layers.','Volume = base area × height = length × width × height.','Different prism dimensions can have equal volume.'],
    support:['Build or draw one complete base layer first.','Write the number of cubes per layer and the number of layers.','Keep area units² separate from volume units³.','Use factor pairs to find possible dimensions.'],
    extension:['List as many whole-number dimension sets as possible for volume 120 cm³.','Explain what happens to volume if one dimension doubles.','Design two containers with equal volume but very different shapes.'],
    pat:{title:'PAT-STYLE THINKING',prompt:'A prism has dimensions 2 cm × 3 cm × 4 cm. Another has dimensions 1 cm × 6 cm × 4 cm. Which has greater volume? Explain without relying only on the final numbers.',answer:'They have equal volume. Each base-layer-and-height product represents 24 unit cubes: 2×3×4 and 1×6×4 are different arrangements of the same product.'},
    review:['I can explain volume and cubic units.','I can distinguish volume from area and capacity.','I can calculate base area and layers.','I can calculate prism volume.','I can find a missing dimension.'],
    next:{title:'Unit 7 Review & Math Arcade',slug:'unit-review',status:'ready'}
  }
};
