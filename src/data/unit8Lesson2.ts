import type { TopicContent } from './topicContent';

export const unit8Lesson2: TopicContent = {
    hook:'A function can look like a pattern, a table, a set of ordered pairs, a graph, or an equation. How can five different-looking representations all describe the same relationship?',
    prerequisites:['Identify functions and input-output rules.','Locate ordered pairs on a Cartesian plane.','Evaluate simple algebraic expressions and equations.'],
    goals:['represent function values in a table.','write ordered pairs and plot the matching points.','write an algebraic equation for a function.','recognize when different representations show the same function.'],
    estimatedTime:'120 min',
    materials:['pencil','graph paper or Cartesian plane','optional coloured pencils'],
    successCriteria:['I can move between a table, ordered pairs, graph, and equation.','I can identify x as input and y as output.','I can test whether an equation matches a table.','I can use a representation to predict another value.'],
    bigIdea:'The same function can be shown in many representations without changing the relationship.',
    bigIdeaDetail:'A table lists input-output pairs. Ordered pairs write the same information as (x,y). A graph places those pairs on a Cartesian plane. An equation describes the rule for any input. Matching representations should produce the same pairs.',
    connection:'If a table contains (1,3), (2,5), (3,7), what should appear on the graph and what equation might describe the same relationship?',
    concepts:[
      {title:'A table organizes corresponding values',text:'The first column lists independent-variable values and the second column lists the dependent-variable values that go with them.',remember:'Input first, output second.'},
      {title:'Ordered pairs preserve the same order',text:'Write each table row as (x,y): independent value first, dependent value second.',remember:'(input, output) = (x, y).'},
      {title:'A graph plots the ordered pairs',text:'The independent variable is shown on the x-axis and the dependent variable is shown on the y-axis.',remember:'A point (3,7) means x=3 and y=7.'},
      {title:'An equation describes the rule',text:'An equation such as y=2x+1 tells how to calculate the output for any input.',remember:'Substitute the input for x, then calculate y.'},
      {title:'Representations must agree',text:'If the table says x=4 gives y=9, the ordered pair, graph, and equation should all show the same relationship.',remember:'One function → matching evidence everywhere.'},
      {title:'Patterns help predict missing values',text:'A constant change in the outputs can help extend a table or graph and test a possible equation.',remember:'Prediction should still match the function rule.'}
    ],
    misconceptions:[
      {title:'“The ordered pair is (output,input).”',text:'The standard order is (x,y), so write the independent/input value first.'},
      {title:'“A graph is a different function from the table.”',text:'If its plotted points are the same input-output pairs, it is simply another representation of the same function.'},
      {title:'“x must always mean the same real-life quantity.”',text:'x is a variable symbol. Its meaning depends on the situation.'},
      {title:'“If points make a line, I can ignore the table.”',text:'The table, graph, ordered pairs, and equation should be used together to check the relationship.'}
    ],
    examples:[
      {title:'Example 1 · Table to ordered pairs',problem:'Table: x=1,2,3,4 and y=3,5,7,9. Write the ordered pairs.',steps:['Match each row.','Write x first and y second.','Keep every pair together.'],answer:'(1,3), (2,5), (3,7), (4,9)'},
      {title:'Example 2 · Rule to equation',problem:'The rule is “multiply the input by 4, then subtract 2.”',steps:['Represent the input with x.','Multiply: 4x.','Subtract 2.','Name the output y.'],answer:'y = 4x − 2'},
      {title:'Example 3 · Check a representation',problem:'Does y=3x+1 match the pair (4,13)?',steps:['Substitute x=4.','y=3(4)+1.','y=13, which matches the pair.'],answer:'Yes.'},
      {title:'Example 4 · Predict using the graph/table pattern',problem:'Pairs are (1,1),(2,3),(3,5),(4,7). Predict y when x=5.',steps:['Outputs increase by 2 when inputs increase by 1.','Continue 7+2=9.','The new pair is (5,9).'],answer:'9'}
    ],
    vocabulary:[
      {term:'Table of values',definition:'A table that lists corresponding independent and dependent variable values.',example:'x:1,2,3; y:3,5,7.'},
      {term:'Ordered pair',definition:'Two coordinates written (x,y) that identify one input-output pair.',example:'(3,7).'},
      {term:'Cartesian plane',definition:'A coordinate plane with x- and y-axes used to graph ordered pairs.',example:'Plot (2,5) by moving 2 horizontally and 5 vertically.'},
      {term:'Graph',definition:'A visual representation of function values as points on a coordinate plane.',example:'The points from a table can be plotted on a graph.'},
      {term:'Algebraic equation',definition:'An equation using variables to express the relationship between input and output.',example:'y=2x+1.'},
      {term:'Variable',definition:'A symbol representing a value that may change.',example:'x and y in y=3x−2.'},
      {term:'Representation',definition:'A way to show a mathematical relationship.',example:'A table, graph, ordered pairs, and equation can represent the same function.'}
    ],
    explorePrompt:'Use the Representation Studio to choose a rule and watch the table, ordered pairs, graph, and equation update together. Hide one view and predict it from the others.',
    exploreMode:'compare',
    handsOn:{title:'Representation Match',instructions:['Choose a simple function rule.','Make a table for at least four inputs.','Write the matching ordered pairs.','Plot the points on graph paper.','Write the algebraic equation.','Trade one representation with a partner and see whether they can reconstruct the others.'],reflect:'Which representation makes the relationship easiest for you to notice? Which makes prediction easiest?'},
    practiceIntro:'Translate carefully. Keep the order input → x → first coordinate and output → y → second coordinate.',
    questions:[
      {difficulty:'foundations',prompt:'Which ordered pair matches table row x=3, y=8?',choices:['(8,3)','(3,8)','(3,3)','(8,8)'],answer:1,hint:'Write x first.',explain:'The ordered pair is (3,8).'},
      {difficulty:'foundations',prompt:'In a graph of a function, the independent variable is usually on the...',choices:['y-axis','x-axis','title','legend'],answer:1,hint:'Independent = x.',explain:'The independent variable is usually represented by x.'},
      {difficulty:'foundations',prompt:'Rule: multiply x by 2, then add 1. Which equation matches?',choices:['y=2x+1','y=x+2','y=2+x','x=2y+1'],answer:0,hint:'Translate the operations in order.',explain:'Multiply x by 2 to get 2x, then add 1.'},
      {difficulty:'standard',prompt:'Which pair belongs to y=3x−2 when x=4?',choices:['(4,10)','(10,4)','(4,14)','(3,10)'],answer:0,hint:'Evaluate 3(4)−2.',explain:'y=12−2=10, so the pair is (4,10).'},
      {difficulty:'standard',prompt:'Pairs (1,4),(2,7),(3,10) match which equation?',choices:['y=3x+1','y=2x+2','y=4x','y=x+3'],answer:0,hint:'Test the first two inputs.',explain:'3(1)+1=4, 3(2)+1=7, 3(3)+1=10.'},
      {difficulty:'standard',prompt:'A table has x:0,1,2,3 and y:−1,1,3,5. What is the next output?',choices:['6','7','8','9'],answer:1,hint:'Look at the constant change.',explain:'Outputs increase by 2, so 5+2=7.'},
      {difficulty:'standard',prompt:'Which representation can show all possible inputs with one concise rule?',choices:['one table row','an equation','one plotted point','one ordered pair'],answer:1,hint:'Think about a general relationship.',explain:'An equation can describe the rule for any valid input.'},
      {difficulty:'challenge',prompt:'Which point would show an error for y=2x+1?',choices:['(0,1)','(1,3)','(2,5)','(4,8)'],answer:3,hint:'Check each point in the equation.',explain:'For x=4, y should be 9, not 8.'},
      {difficulty:'challenge',prompt:'A table shows (1,5),(2,9),(3,13). Which prediction is consistent?',choices:['(4,15)','(4,17)','(5,17)','(0,5)'],answer:1,hint:'Outputs rise by 4.',explain:'The next output is 13+4=17.'}
    ],
    checkQuestions:[
      {difficulty:'foundations',prompt:'Ordered pairs are written in which order?',choices:['(y,x)','(x,y)','(output only)','(rule,x)'],answer:1,hint:'',explain:'Ordered pairs are written (x,y).'},
      {difficulty:'foundations',prompt:'Which equation represents “triple the input, then add 2”?',choices:['y=3x+2','y=2x+3','y=3(x+2)','x=3y+2'],answer:0,hint:'',explain:'Triple x gives 3x; then add 2.'},
      {difficulty:'foundations',prompt:'For y=x+6, input 4 gives output...',choices:['2','10','24','46'],answer:1,hint:'',explain:'4+6=10.'},
      {difficulty:'standard',prompt:'Which pair lies on y=4x−1?',choices:['(2,7)','(2,8)','(3,10)','(1,4)'],answer:0,hint:'',explain:'4(2)−1=7.'},
      {difficulty:'standard',prompt:'Pairs (1,2),(2,5),(3,8) show outputs changing by...',choices:['1','2','3','5'],answer:2,hint:'',explain:'2→5→8 increases by 3 each time.'},
      {difficulty:'standard',prompt:'A table and graph represent the same function when...',choices:['they use different colours','their input-output pairs match','they have the same number of labels','the graph is a curve'],answer:1,hint:'',explain:'Matching pairs mean they show the same relationship.'},
      {difficulty:'standard',prompt:'For y=5x+2, what is y when x=0?',choices:['0','2','5','7'],answer:1,hint:'',explain:'5(0)+2=2.'},
      {difficulty:'challenge',prompt:'Which equation matches (1,6),(2,10),(3,14)?',choices:['y=4x+2','y=5x+1','y=3x+3','y=4x−2'],answer:0,hint:'',explain:'4x+2 gives 6,10,14.'},
      {difficulty:'challenge',prompt:'If a plotted point for x=5 should follow y=2x−3, which y-value belongs there?',choices:['7','8','10','13'],answer:0,hint:'',explain:'2(5)−3=7.'}
    ],
    application:{title:'Representation Studio Challenge',scenario:'A display team needs the same function shown four ways.',tasks:['Build a table.','Write ordered pairs.','Plot the points.','Write the equation.','Check that every representation agrees.'],reveal:'If every representation produces the same input-output pairs, they describe the same function.'},
    summary:['Tables list corresponding input-output values.','Ordered pairs are written (x,y).','Graphs plot those pairs on the Cartesian plane.','Equations express a rule for any input.','Different representations of one function must agree.'],
    support:['Colour-code x/input and y/output consistently.','Read each table row as one ordered pair.','Test an equation with two table rows before deciding it matches.'],
    extension:['Create two different-looking representations of y=4x−3.','Find a graphing error by testing each plotted point in its equation.','Use x=0 to investigate what the graph reveals about a rule.'],
    pat:{title:'PAT-STYLE THINKING',prompt:'A graph contains the point (4,8), but the table and equation y=2x+1 show the same function. Explain the graphing error.',answer:'For x=4, the equation gives y=9. The point should be (4,9), so (4,8) does not match the table/equation relationship.'},
    review:['I can make a table of values.','I can write and plot ordered pairs.','I can write an algebraic equation for a function.','I can recognize matching representations.'],
    next:{title:'Solving Problems Involving Functions',slug:'solving-problems-functions',status:'ready'}
  };
