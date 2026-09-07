import type { TopicContent } from './topicContent';

export const unit8Lesson3: TopicContent = {
    hook:'A game charges $3 per round plus a $5 starting fee. If you know the number of rounds, you can find the cost. But what if you know the cost and need to work backward to find the number of rounds?',
    prerequisites:['Represent functions with tables, graphs, ordered pairs, and equations.','Evaluate algebraic expressions.','Solve simple equations using inverse operations.'],
    goals:['find an output from a given input.','work backward to find an input from a given output.','determine a function equation from a pattern.','solve real-life problems involving a function.'],
    estimatedTime:'120 min',
    materials:['pencil','paper','optional graph paper'],
    successCriteria:['I can use a rule to find an output.','I can use inverse reasoning to find an input.','I can test a function equation with known pairs.','I can explain what my input and output mean in a real situation.'],
    bigIdea:'A function rule can be used forward to predict an output and backward to determine the input that produced a known output.',
    bigIdeaDetail:'When the input is known, substitute it into the function rule. When the output is known, treat the function equation as an equation to solve for the input. Tables and graphs can also help by locating the corresponding pair.',
    connection:'For y=4x+3, what is different about solving when x=5 is known versus when y=31 is known?',
    concepts:[
      {title:'Forward means input → output',text:'Substitute the known input into the function rule and calculate the dependent value.',remember:'Known x → calculate y.'},
      {title:'Backward means output → input',text:'If the output is known, solve the function equation for the input using inverse operations or locate the matching pair in a table or graph.',remember:'Known y → solve for x.'},
      {title:'Tables and graphs can solve the same problem',text:'A table may show the matching pair directly. A graph may allow you to trace from one coordinate to the other.',remember:'Choose the representation that makes the information easiest to see.'},
      {title:'Constant change helps reveal the multiplier',text:'When outputs change by the same amount each time x increases by 1, that constant change often becomes the number multiplying x. If outputs rise by 4 each step, a rule might begin y=4x and then include a fixed amount such as +3.',remember:'Use the constant change to build the rule, then test it with known pairs.'},
      {title:'The answer must make sense in context',text:'After solving, interpret the input or output using the situation’s units and meaning.',remember:'A number without its meaning may not answer the question.'},
      {title:'Verification catches errors',text:'Substitute a found input back into the function rule to confirm it produces the given output.',remember:'Forward-check your backward solution.'}
    ],
    misconceptions:[
      {title:'“Working backward means reverse the order of the table.”',text:'Working backward means using the known output to determine the input, often with inverse operations.'},
      {title:'“The constant change is always the starting value.”',text:'Constant change and initial value describe different features of a function.'},
      {title:'“If I get an x-value, I am done.”',text:'Check it in the original function and interpret what x means in the situation.'},
      {title:'“A graph and equation use different methods, so answers may differ.”',text:'If they represent the same function, they must produce the same corresponding values.'}
    ],
    examples:[
      {title:'Example 1 · Find an output',problem:'For y=3x+2, find y when x=6.',steps:['Substitute x=6.','y=3(6)+2.','y=18+2.'],answer:'20'},
      {title:'Example 2 · Find an input',problem:'For y=4x+5, find x when y=29.',steps:['Write 29=4x+5.','Subtract 5: 24=4x.','Divide by 4: x=6.','Check: 4(6)+5=29.'],answer:'6'},
      {title:'Example 3 · Build the equation from the pattern',problem:'Table pairs are (1,5),(2,11),(3,17),(4,23).',steps:['The outputs increase by 6 each time x increases by 1.','Start with six times the input: 6, 12, 18, 24.','Each actual output is 1 less than those values.','So subtract 1: y=6x−1.','Test x=3: 6(3)−1=17.'],answer:'y=6x−1'},
      {title:'Example 4 · Real-world function',problem:'A fair charges $2 entrance plus $5 per ride. What does x represent in y=5x+2?',steps:['The repeated cost is $5 per ride.','x counts how many rides are purchased.','y is the total cost.'],answer:'x = number of rides.'}
    ],
    vocabulary:[
      {term:'Function rule',definition:'A rule or equation that determines output from input.',example:'y=4x+1.'},
      {term:'Constant change',definition:'A fixed amount by which outputs change when consecutive inputs increase by 1.',example:'3,7,11,15 has constant change 4.'},
      {term:'Initial value',definition:'A starting output used to help describe a function pattern.',example:'A table may begin with x=1 and y=5.'},
      {term:'Inverse operation',definition:'An operation that undoes another operation.',example:'Division undoes multiplication.'},
      {term:'Predict',definition:'Use a known relationship to determine an unknown value.',example:'Use y=2x+3 to predict y when x=10.'},
      {term:'Verify',definition:'Check a proposed value in the original function.',example:'Substitute x=6 to confirm y=29.'}
    ],
    explorePrompt:'Use Function Detective to switch between forward and backward problems. Solve with the equation, then compare the highlighted matching pair in the table and graph.',
    exploreMode:'compare',
    handsOn:{title:'Function Story Cards',instructions:['Write a real-life rule such as “cost = 4 × games + 3.”','Create three input-output pairs.','Give a partner one forward question and one backward question.','Have your partner solve and verify both.','Compare equation, table, and graph strategies.'],reflect:'When is working backward easier with an equation than with a table?'},
    practiceIntro:'First decide which quantity is known. If input is known, calculate forward. If output is known, solve backward and verify.',
    questions:[
      {difficulty:'foundations',prompt:'For y=2x+3, what is y when x=4?',choices:['8','10','11','14'],answer:2,hint:'Substitute 4 for x.',explain:'2(4)+3=11.'},
      {difficulty:'foundations',prompt:'For y=x+7, y=12. What is x?',choices:['5','7','12','19'],answer:0,hint:'Undo +7.',explain:'12−7=5.'},
      {difficulty:'foundations',prompt:'Working backward from a known output means finding the...',choices:['dependent variable','input','graph title','constant output only'],answer:1,hint:'Output is known; what is missing?',explain:'You are determining the corresponding input.'},
      {difficulty:'standard',prompt:'For y=5x+2, what is y when x=7?',choices:['35','37','39','45'],answer:1,hint:'5(7)+2.',explain:'35+2=37.'},
      {difficulty:'standard',prompt:'For y=3x+4, y=25. Find x.',choices:['6','7','8','9'],answer:1,hint:'Subtract 4, then divide by 3.',explain:'25−4=21; 21÷3=7.'},
      {difficulty:'standard',prompt:'Pairs are (1,4),(2,7),(3,10),(4,13). Which equation fits?',choices:['y=3x+1','y=4x','y=2x+2','y=x+3'],answer:0,hint:'Outputs increase by 3.',explain:'3x+1 produces 4,7,10,13.'},
      {difficulty:'standard',prompt:'A game costs $4 per level plus a $6 start fee. Which equation gives total cost y for x levels?',choices:['y=6x+4','y=4x+6','y=4+x+6','x=4y+6'],answer:1,hint:'Repeated cost multiplies the number of levels.',explain:'$4 for each level gives 4x, then add the $6 fee.'},
      {difficulty:'challenge',prompt:'For y=6x−1, which input gives output 47?',choices:['7','8','9','10'],answer:1,hint:'Solve 47=6x−1.',explain:'48=6x, so x=8.'},
      {difficulty:'challenge',prompt:'A taxi model is y=3x+5, where x is kilometres and y is dollars. A trip costs $26. How far was it?',choices:['5 km','7 km','8 km','9 km'],answer:1,hint:'Solve 26=3x+5.',explain:'21=3x, so x=7 km.'}
    ],
    checkQuestions:[
      {difficulty:'foundations',prompt:'For y=4x+1, x=3 gives y...',choices:['7','12','13','16'],answer:2,hint:'',explain:'4(3)+1=13.'},
      {difficulty:'foundations',prompt:'For y=2x+6, y=16. Find x.',choices:['5','8','10','11'],answer:0,hint:'',explain:'16−6=10; 10÷2=5.'},
      {difficulty:'foundations',prompt:'Which operation undoes multiplication?',choices:['addition','subtraction','division','exponent'],answer:2,hint:'',explain:'Division is the inverse of multiplication.'},
      {difficulty:'standard',prompt:'Which equation matches outputs 5,9,13 for inputs 1,2,3?',choices:['y=4x+1','y=5x','y=3x+2','y=4x−1'],answer:0,hint:'',explain:'4x+1 gives 5,9,13.'},
      {difficulty:'standard',prompt:'For y=7x−3, x=5 gives...',choices:['28','32','35','38'],answer:1,hint:'',explain:'35−3=32.'},
      {difficulty:'standard',prompt:'For y=5x+4, which input gives output 39?',choices:['5','6','7','8'],answer:2,hint:'',explain:'39−4=35; 35÷5=7.'},
      {difficulty:'standard',prompt:'Why verify a backward solution?',choices:['To change the function','To confirm it produces the known output','To make x positive','To avoid units'],answer:1,hint:'',explain:'Substitution checks that the found input actually gives the known output.'},
      {difficulty:'challenge',prompt:'A savings rule is y=10x+25. If y=95, how many weeks x?',choices:['6','7','8','9'],answer:1,hint:'',explain:'95−25=70; 70÷10=7.'},
      {difficulty:'challenge',prompt:'A function has constant change 5 and pair (1,8). Which equation fits?',choices:['y=5x+3','y=8x+5','y=5x−3','y=3x+5'],answer:0,hint:'',explain:'5(1)+3=8, and the multiplier matches the constant change.'}
    ],
    application:{title:'Function Detective Mission',scenario:'Use changing real-life quantities to predict results and work backward from known results.',tasks:['Identify the variables.','Write or choose the function rule.','Solve one forward prediction.','Solve one backward question.','Verify the backward solution.'],reveal:'Forward and backward questions use the same relationship; only the known and unknown quantities change.'},
    summary:['Use a function rule forward to find an output.','Use inverse reasoning backward to find an input.','Tables, graphs, and equations should agree.','Constant change can help identify a rule.','Verify backward solutions in the original function.'],
    support:['Underline which quantity is known and circle what you need to find.','Write the function equation before substituting.','Use Unit 6 inverse-operation thinking when working backward.'],
    extension:['Create a function problem whose backward answer is a decimal.','Find two different real contexts that could use the same equation.','Compare solving a backward problem using a graph versus algebra.'],
    pat:{title:'PAT-STYLE THINKING',prompt:'A function is y=4x+3. Sam says output 35 came from input 8 because 4(8)=32 and 32+3=35. Explain why this is a strong solution.',answer:'Sam used the correct function rule and verified the proposed input by substituting x=8. The calculation gives the known output 35, so the input is confirmed.'},
    review:['I can find outputs from inputs.','I can work backward from outputs to inputs.','I can determine and test a function rule.','I can solve and interpret function problems.'],
    next:{title:'Unit 8 Review & Math Arcade',slug:'unit-review',status:'ready'}
  };
