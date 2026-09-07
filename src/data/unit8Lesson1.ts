import type { TopicContent } from './topicContent';

export const unit8Lesson1: TopicContent = {
    hook:'A mystery machine takes in a number and sends out a new number. After a few tests, can you discover the rule before the machine tells you?',
    prerequisites:['Use input-output patterns and tables.','Evaluate simple algebraic expressions.','Read ordered pairs and points on a Cartesian plane.'],
    goals:['identify independent and dependent variables.','decide whether a relationship is a function.','describe a rule that connects inputs to outputs.','use input-output evidence to test a predicted rule.'],
    estimatedTime:'160 min',
    materials:['pencil','paper or whiteboard','optional graph paper'],
    successCriteria:['I can explain which variable is independent and which is dependent.','I can explain the one-output-for-each-input requirement.','I can discover and test a function rule.','I can explain why repeated outputs are allowed but conflicting outputs for one input are not.'],
    bigIdea:'A function is a relationship in which every input has exactly one output.',
    bigIdeaDetail:'The input is the independent variable. The output is the dependent variable because its value is determined by the function rule. Different inputs may share the same output, but one input cannot lead to two different outputs in the same function.',
    connection:'If input 4 gives output 11 today, could the same function give output 15 when input 4 is tested again? Why or why not?',
    concepts:[
      {title:'Inputs and outputs describe changing quantities',text:'A function connects two quantities. The input is chosen or known first; the output is determined from it.',remember:'Think input → rule → output.'},
      {title:'Independent means input',text:'The independent variable is the quantity selected, controlled, or used as the starting value.',remember:'In a table or graph, it is usually represented by x.'},
      {title:'Dependent means output',text:'The dependent variable changes because of the independent variable and the rule connecting them.',remember:'In a table or graph, it is usually represented by y.'},
      {title:'A function gives one output for each input',text:'If the same input appears more than once, it must have the same output every time.',remember:'One input → one output.'},
      {title:'Different inputs may share an output',text:'A function does not require every output to be different. Two or more inputs may lead to the same output.',remember:'The restriction is on each input, not on each output.'},
      {title:'Rules can be discovered by testing examples',text:'A few input-output pairs may suggest several possible rules. Test more inputs before deciding which rule fits all the evidence.',remember:'A rule must work for every pair you are given.'}
    ],
    misconceptions:[
      {title:'“Every output must be different.”',text:'Different inputs are allowed to have the same output. A function only requires each input to have one consistent output.'},
      {title:'“Input and independent variable are different ideas.”',text:'In this unit, the input represents the independent variable and the output represents the dependent variable.'},
      {title:'“One matching pair proves the rule.”',text:'Many different rules can fit one input-output pair. Test several pairs before deciding.'},
      {title:'“A function has to use numbers.”',text:'Functions describe relationships. Inputs and outputs can represent many kinds of quantities, although this unit mostly uses numerical examples.'}
    ],
    examples:[
      {title:'Example 1 · Identify the variables',problem:'A plant’s height is recorded each week. Which variable is independent?',steps:['The week number is chosen first.','The plant height changes as time passes.','So week is the input and plant height is the output.'],answer:'Independent: week; dependent: plant height.'},
      {title:'Example 2 · Is it a function?',problem:'Pairs are (1,5), (2,7), (3,7), (4,9). Is this a function?',steps:['Check each input.','Every input appears with only one output.','Two different inputs may both have output 7.'],answer:'Yes, it is a function.'},
      {title:'Example 3 · Spot a non-function',problem:'Pairs are (2,6), (3,8), (2,9). Is this a function?',steps:['Input 2 appears twice.','It has outputs 6 and 9.','One input has two different outputs.'],answer:'No, it is not a function.'},
      {title:'Example 4 · Discover a rule',problem:'Inputs 1, 2, 5 give outputs 5, 7, 13. What rule fits?',steps:['Compare output to input.','Each output is double the input, then add 3.','Test: 2(5)+3=13.'],answer:'Output = 2 × input + 3.'}
    ],
    vocabulary:[
      {term:'Function',definition:'A relationship in which each input corresponds to exactly one output.',example:'Input 3 always gives the same output under one function rule.'},
      {term:'Independent variable',definition:'The input quantity whose value is selected or known first.',example:'Time is often an independent variable.'},
      {term:'Dependent variable',definition:'The output quantity whose value depends on the input.',example:'Distance travelled may depend on time.'},
      {term:'Input',definition:'A starting value entered into a function.',example:'In x=4, the input is 4.'},
      {term:'Output',definition:'The value produced after applying the function rule.',example:'If the rule is ×2+1, input 4 outputs 9.'},
      {term:'Rule',definition:'The operation or relationship that determines the output from the input.',example:'Multiply by 3, then subtract 2.'}
    ],
    explorePrompt:'Use the Mystery Function Machine. Test inputs, record the outputs, predict the secret rule, and compare examples that are functions with examples that are not.',
    exploreMode:'compare',
    handsOn:{title:'Human Function Machine',instructions:['Choose a secret rule such as “multiply by 2, then add 1.”','Have a partner give you an input.','Return only the output without revealing the rule.','Record each input-output pair.','After several trials, have your partner state and test a predicted rule.'],reflect:'Why is repeating an input especially useful when checking whether a relationship is a function?'},
    practiceIntro:'Focus on the relationship before calculating. Ask: What is the input? What depends on it? Does each input have exactly one output?',
    questions:[
      {difficulty:'foundations',prompt:'In a function describing distance travelled over time, which variable is usually independent?',choices:['distance','time','both','neither'],answer:1,hint:'Which value is used as the starting input?',explain:'Time is the independent variable; distance depends on how much time has passed.'},
      {difficulty:'foundations',prompt:'Which statement defines a function?',choices:['Every output must be different.','Each input has exactly one output.','Inputs must be positive.','Outputs must increase.'],answer:1,hint:'Focus on what is allowed for one input.',explain:'A function assigns exactly one output to every input.'},
      {difficulty:'foundations',prompt:'Rule: add 4. What is the output for input 7?',choices:['3','11','28','74'],answer:1,hint:'Apply the rule to the input.',explain:'7+4=11.'},
      {difficulty:'standard',prompt:'Which set is NOT a function?',choices:['(1,3),(2,5),(3,7)','(1,4),(2,4),(3,4)','(2,5),(2,7),(3,9)','(0,1),(1,2),(2,3)'],answer:2,hint:'Look for one repeated input with two different outputs.',explain:'Input 2 has both output 5 and output 7.'},
      {difficulty:'standard',prompt:'Inputs 1,2,3 produce outputs 6,9,12. Which rule fits?',choices:['×3+3','×2+4','+5','×6'],answer:0,hint:'Test more than one pair.',explain:'3(1)+3=6, 3(2)+3=9, and 3(3)+3=12.'},
      {difficulty:'standard',prompt:'Two different inputs both produce output 10. Does that automatically mean the relationship is not a function?',choices:['Yes','No','Only if inputs are negative','Only on a graph'],answer:1,hint:'The rule concerns each input.',explain:'Different inputs may share the same output.'},
      {difficulty:'standard',prompt:'A square’s area depends on its side length. What is the dependent variable?',choices:['side length','area','number of sides','perimeter always'],answer:1,hint:'Which quantity changes because the other one changes?',explain:'Area depends on the chosen side length.'},
      {difficulty:'challenge',prompt:'A machine gives 4→13, 6→17, 9→23. Which rule fits all three?',choices:['×2+5','×3+1','+9','×2+4'],answer:0,hint:'Test each choice on more than one pair.',explain:'2(4)+5=13, 2(6)+5=17, and 2(9)+5=23.'},
      {difficulty:'challenge',prompt:'Why is one input-output pair usually not enough to prove a secret rule?',choices:['Functions cannot use one pair.','Several different rules can match one pair.','Outputs must repeat.','Inputs must be consecutive.'],answer:1,hint:'Think about how many rules could turn 2 into 7.',explain:'Many rules can fit one pair, so more evidence is needed.'}
    ],
    checkQuestions:[
      {difficulty:'foundations',prompt:'Input is another name for the...',choices:['dependent variable','independent variable','output','answer key'],answer:1,hint:'',explain:'The input represents the independent variable.'},
      {difficulty:'foundations',prompt:'Rule: multiply by 5. Input 3 gives...',choices:['8','15','2','35'],answer:1,hint:'',explain:'3×5=15.'},
      {difficulty:'foundations',prompt:'Which can happen in a function?',choices:['One input has two outputs','Two inputs share one output','The same input changes output randomly','No rule exists'],answer:1,hint:'',explain:'Different inputs may share an output.'},
      {difficulty:'standard',prompt:'Are (1,2),(2,4),(1,2),(3,6) a function?',choices:['Yes','No','Only if 1 appears once','Not enough information'],answer:0,hint:'',explain:'Repeated input 1 has the same output 2, so the relationship is still a function.'},
      {difficulty:'standard',prompt:'Are (4,7),(5,8),(4,9) a function?',choices:['Yes','No','Only on a graph','Only if 9 is removed'],answer:1,hint:'',explain:'Input 4 has two different outputs.'},
      {difficulty:'standard',prompt:'Inputs 2,3,4 give outputs 7,10,13. Which rule fits?',choices:['×3+1','×2+3','+5','×4−1'],answer:0,hint:'',explain:'3x+1 gives 7,10,13 for inputs 2,3,4.'},
      {difficulty:'standard',prompt:'In a bike ride, speed changes based on how hard you pedal. Which is dependent?',choices:['pedaling effort','speed','the bike','time always'],answer:1,hint:'',explain:'Speed depends on pedaling effort in this relationship.'},
      {difficulty:'challenge',prompt:'A rule always outputs 3 no matter the input. Is it a function?',choices:['Yes','No','Only for input 3','Only with positive inputs'],answer:0,hint:'',explain:'Each input still has exactly one output: 3.'},
      {difficulty:'challenge',prompt:'Why would repeating an input help test whether a machine is a function?',choices:['The output should remain the same','The output should double','The input should disappear','Functions need repeated values'],answer:0,hint:'',explain:'A function must return the same single output for the same input.'}
    ],
    application:{title:'Function Machine Inspector',scenario:'You are testing a machine before it is used in a science exhibit.',tasks:['Test several inputs.','Record the outputs.','Identify the likely rule.','Repeat an input to check consistency.','Decide whether the machine represents a function.'],reveal:'A valid function must give one consistent output for every input, even if different inputs sometimes share an output.'},
    summary:['The input is the independent variable.','The output is the dependent variable.','A function gives exactly one output for each input.','Different inputs may have the same output.','A rule should be tested against several input-output pairs.'],
    support:['Draw arrows from input → rule → output.','Circle any repeated inputs in a table and compare their outputs.','Test a possible rule on at least three pairs.'],
    extension:['Create a function where every input has the same output.','Create a non-function and explain exactly what breaks the definition.','Invent a real-life pair of independent and dependent variables and explain the relationship.'],
    pat:{title:'PAT-STYLE THINKING',prompt:'A table contains (2,5), (3,7), (4,7), (2,5). A student says it is not a function because output 7 repeats. Explain whether the student is correct.',answer:'The student is incorrect. Repeated outputs are allowed. Input 2 repeats, but it has the same output each time, so each input still has exactly one output.'},
    review:['I can identify independent and dependent variables.','I can decide whether a relationship is a function.','I can discover and test a function rule.','I can explain why repeated outputs are allowed.'],
    next:{title:'Representing Functions',slug:'representing-functions',status:'ready'}
  };
