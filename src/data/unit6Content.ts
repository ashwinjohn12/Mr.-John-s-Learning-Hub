import type { TopicContent } from './topicContent';

export const unit6Content: Record<string, TopicContent> = {
  'grade-6-math/algebra/simplifying-algebraic-expressions': {
    hook: 'A student says 3x + 5x = 8x, but 3x + 5y cannot become 8xy. What makes some terms combine while others must stay separate?',
    prerequisites: ['Identify variables, coefficients, constants, and terms.','Add and subtract positive and negative integers.','Use the commutative, associative, and distributive properties with numbers.'],
    goals: ['identify like terms in algebraic expressions.','simplify expressions by combining like terms.','rearrange terms using algebraic properties.','evaluate original and simplified expressions to confirm they are equivalent.'],
    estimatedTime: '80 min',
    materials: ['pencil', 'paper', 'optional algebra tiles or pattern blocks'],
    successCriteria: ['I can explain what makes two terms like terms.','I can combine coefficients without changing the variable part.','I can keep unlike terms separate.','I can use the distributive property correctly.','I can check equivalent expressions by substitution.'],
    bigIdea: 'You can simplify an algebraic expression by combining terms that represent the same kind of quantity.',
    bigIdeaDetail: 'Like terms have the same variable part. Their coefficients tell how many of that quantity you have. Combining 4x and 3x is like combining 4 identical x-tiles and 3 identical x-tiles to make 7x. Algebraic properties let us rearrange and regroup terms without changing the value of the expression.',
    connection: 'Why can 5 apples + 3 apples become 8 apples, while 5 apples + 3 oranges cannot become 8 of one thing?',
    concepts: [
      { title:'Like terms represent the same kind of quantity', text:'Terms such as 3x, −5x, and x are like terms because they all have the same variable part, x. Constant terms such as 4 and −9 are also like terms.', remember:'Match the variable part first.' },
      { title:'Combine the coefficients', text:'When you add or subtract like terms, add or subtract the numerical coefficients and keep the variable part unchanged. 4x + 3x = 7x.', remember:'The x does not become x² when you add x + x.' },
      { title:'Unlike terms stay separate', text:'5x and 2y are not like terms, so 5x + 2y is already simplified. The same is true for x and x² because their variable parts are different.', remember:'Do not invent a new variable combination just to make one term.' },
      { title:'Rearrange to put like terms together', text:'The commutative and associative properties let you reorder and regroup addition. For example, 7x − 8y + 5y − 2x can be rearranged to 7x − 2x − 8y + 5y.', remember:'Carry the sign with its term when you rearrange.' },
      { title:'Distribute to remove parentheses', text:'The distributive property multiplies every term inside the parentheses: 3(x + 2) = 3x + 6.', remember:'Distribute to every term, not just the first one.' },
      { title:'Equivalent expressions have the same value', text:'Two expressions can look different but still have the same value for every allowed value of the variable. Substitution is a useful way to check equivalence.', remember:'Simplifying changes the form, not the value.' }
    ],
    misconceptions: [
      { title:'“x + x = x².”', text:'Addition counts how many x-terms there are: x + x = 2x. x² means x multiplied by x, which is a different operation.' },
      { title:'“5x − 3y = 2xy.”', text:'The terms are unlike, so they cannot be combined. The simplified expression stays 5x − 3y.' },
      { title:'“I can drop the sign when I move a term.”', text:'The sign belongs to the term. In 7x − 2x, the second term is −2x.' },
      { title:'“3(x + 2) = 3x + 2.”', text:'The 3 multiplies every term inside the parentheses, so the correct result is 3x + 6.' }
    ],
    examples: [
      { title:'Example 1 · Identify and combine like terms', problem:'Simplify 4x + 6x − 3.', steps:['4x and 6x are like terms because both use x.','Add their coefficients: 4 + 6 = 10.','The constant −3 is not like an x-term, so keep it separate.'], answer:'10x − 3' },
      { title:'Example 2 · Two sets of like terms', problem:'Simplify 7x − 8y + 5y − 2x.', steps:['Group the x-terms: 7x − 2x = 5x.','Group the y-terms: −8y + 5y = −3y.','The x- and y-terms are unlike, so stop.'], answer:'5x − 3y' },
      { title:'Example 3 · Distribute and simplify', problem:'Simplify 2(x + 4) + 3x.', steps:['Distribute 2: 2(x + 4) = 2x + 8.','Write the expression as 2x + 8 + 3x.','Combine like x-terms: 2x + 3x = 5x.'], answer:'5x + 8' },
      { title:'Example 4 · Simplify, then evaluate', problem:'Simplify 4x + 8x − 9x, then evaluate when x = 2.', steps:['Combine coefficients: 4 + 8 − 9 = 3.','The simplified expression is 3x.','Substitute x = 2: 3(2) = 6.'], answer:'3x; value = 6' }
    ],
    vocabulary: [
      { term:'Algebraic expression', definition:'A mathematical phrase containing numbers, operations, and possibly variables, but no equal sign.', example:'4x + 7.' },
      { term:'Term', definition:'A number, variable, or product separated from other parts of an expression by addition or subtraction.', example:'In 5x − 3 + 2y, the terms are 5x, −3, and 2y.' },
      { term:'Coefficient', definition:'The numerical factor multiplying a variable.', example:'7 is the coefficient in 7x.' },
      { term:'Constant term', definition:'A term with no variable.', example:'−4 is the constant in 3x − 4.' },
      { term:'Like terms', definition:'Terms with the same variable part.', example:'3x and −8x are like terms.' },
      { term:'Equivalent expressions', definition:'Expressions that have the same value for the same variable values.', example:'2(x + 3) and 2x + 6.' },
      { term:'Distributive property', definition:'A property that multiplies a factor by every term inside parentheses.', example:'3(x + 2) = 3x + 6.' },
      { term:'Zero pair', definition:'Opposite like terms that combine to make zero.', example:'5x and −5x.' }
    ],
    explorePrompt: 'Use the Expression Lab to sort terms, build zero pairs, combine like terms, and test whether two expressions are equivalent.',
    exploreMode:'compare',
    handsOn: { title:'Human Like-Term Sort', instructions:['Write terms such as 3x, −2x, 5y, y, 4, and −7 on small paper cards.','Sort the cards into groups of like terms.','Choose one group and combine its coefficients.','Create a zero pair using two opposite like terms.','Explain why two cards from different groups cannot be combined.'], reflect:'What information must match before two algebraic terms can be combined?' },
    practiceIntro:'Identify like terms first. Then combine coefficients, distribute when needed, and check that unlike terms remain separate.',
    questions: [
      {difficulty:'foundations',prompt:'Which term is like 6x?',choices:['6y','−2x','x²','6'],answer:1,hint:'Match the variable part.',explain:'−2x has the same variable part x, so it is like 6x.'},
      {difficulty:'foundations',prompt:'Simplify x + x + x.',choices:['x³','3x','3x³','x'],answer:1,hint:'Count how many x-terms there are.',explain:'Three identical x-terms combine to 3x.'},
      {difficulty:'foundations',prompt:'Simplify 8m − 3m.',choices:['5','5m','5m²','11m'],answer:1,hint:'Subtract the coefficients.',explain:'8 − 3 = 5, so the result is 5m.'},
      {difficulty:'standard',prompt:'Simplify 4x + 3y + 2x − y.',choices:['6x + 2y','6xy + 2','2x + 2y','6x + 4y'],answer:0,hint:'Combine x-terms together and y-terms together.',explain:'4x + 2x = 6x and 3y − y = 2y.'},
      {difficulty:'standard',prompt:'Simplify 3(a + 2).',choices:['3a + 2','3a + 5','3a + 6','6a'],answer:2,hint:'Multiply 3 by both terms inside.',explain:'3(a + 2) = 3a + 6.'},
      {difficulty:'standard',prompt:'Simplify 2x + 5 − 4x + 3.',choices:['−2x + 8','6x + 8','−2x + 2','2x + 8'],answer:0,hint:'Combine x-terms and constants separately.',explain:'2x − 4x = −2x and 5 + 3 = 8.'},
      {difficulty:'standard',prompt:'Which expression is equivalent to 2(x + 4) + x?',choices:['2x + 4','3x + 4','3x + 8','2x + 8'],answer:2,hint:'Distribute first, then combine.',explain:'2x + 8 + x = 3x + 8.'},
      {difficulty:'challenge',prompt:'Simplify −4m + m + 2m − 3m.',choices:['−4m','−2m','4m','0'],answer:0,hint:'Add the coefficients −4 + 1 + 2 − 3.',explain:'The coefficients total −4, so the expression is −4m.'},
      {difficulty:'challenge',prompt:'When x = 3, what is the value of 2(x + 5) + 4x?',choices:['22','28','30','32'],answer:1,hint:'You can simplify first.',explain:'2x + 10 + 4x = 6x + 10. At x = 3, the value is 18 + 10 = 28.'}
    ],
    checkQuestions: [
      {difficulty:'foundations',prompt:'Which pair are like terms?',choices:['4x and 4y','3x and −8x','x and x²','5 and 5x'],answer:1,hint:'',explain:'3x and −8x have the same variable part.'},
      {difficulty:'foundations',prompt:'Simplify 5p + 2p.',choices:['7','7p','10p','7p²'],answer:1,hint:'',explain:'5p + 2p = 7p.'},
      {difficulty:'foundations',prompt:'What is the additive inverse of 7x?',choices:['−7x','7','x','−x'],answer:0,hint:'',explain:'7x + (−7x) = 0.'},
      {difficulty:'standard',prompt:'Simplify 9a − 4 + 2a + 7.',choices:['11a + 3','7a + 3','11a − 11','7a + 11'],answer:0,hint:'',explain:'9a + 2a = 11a and −4 + 7 = 3.'},
      {difficulty:'standard',prompt:'Which is equivalent to 4(y + 3)?',choices:['4y + 3','4y + 7','4y + 12','12y'],answer:2,hint:'',explain:'Distribute 4 to y and to 3.'},
      {difficulty:'standard',prompt:'Simplify 6x − 2y − x + 5y.',choices:['5x + 3y','7x + 3y','5xy + 3','5x − 7y'],answer:0,hint:'',explain:'6x − x = 5x and −2y + 5y = 3y.'},
      {difficulty:'standard',prompt:'Which expression is already in simplest form?',choices:['3x + 4x','5y − 2y + 1','4x + 3y','2(a + 5)'],answer:2,hint:'',explain:'4x and 3y are unlike terms, so they cannot be combined.'},
      {difficulty:'challenge',prompt:'Simplify 3(2x + 1) − x.',choices:['5x + 3','6x + 2','5x + 1','6x + 3'],answer:0,hint:'',explain:'3(2x + 1)=6x+3, then 6x−x=5x.'},
      {difficulty:'challenge',prompt:'If x = −2, what is the value of 3x + 5x − 4?',choices:['−20','−16','12','20'],answer:0,hint:'',explain:'3x + 5x = 8x. Then 8(−2) − 4 = −20.'},
      {difficulty:'challenge',prompt:'A student writes 2x + 3y = 5xy. What is the best correction?',choices:['Correct','The terms are unlike, so keep 2x + 3y','It should be 6xy','It should be 5x'],answer:1,hint:'',explain:'x-terms and y-terms are not like terms.'}
    ],
    application:{title:'Expression Builder',scenario:'Sort and simplify expressions to unlock an algebra code.',tasks:['Find the like terms.','Combine coefficients.','Use distribution when needed.','Check an equivalent form.'],reveal:'The code is built by preserving the value while changing the expression to a simpler form.'},
    summary:['Like terms have the same variable part.','Combine coefficients when adding or subtracting like terms.','Unlike terms stay separate.','Algebraic properties let you rearrange, regroup, and distribute without changing value.','Equivalent expressions can be checked by substitution.'],
    support:['Circle or colour-code each family of like terms.','Use algebra tiles or letter cards before working symbolically.','Write subtraction as adding a negative term when signs are confusing.','Expand distribution with arrows to every term inside parentheses.'],
    extension:['Create two different expressions that simplify to 7x − 3.','Find a value of x and verify that 3(x + 2) and 3x + 6 are equal.','Explain why x and x² cannot be like terms using an area model.'],
    pat:{title:'PAT-STYLE THINKING',prompt:'A student simplifies 5x − 3y + 2x + y to 7x − 2y. Explain why this is valid.',answer:'The x-terms are like, so 5x + 2x = 7x. The y-terms are like, so −3y + y = −2y. The x- and y-terms remain separate because they are unlike terms.'},
    review:['I can identify like terms.','I can combine coefficients correctly.','I can use the distributive property.','I can keep unlike terms separate.','I can verify equivalent expressions by substitution.'],
    next:{title:'Solving Equations',slug:'solving-equations',status:'ready'}
  },

  'grade-6-math/algebra/solving-equations': {
    hook: 'Imagine a perfectly balanced scale. If you remove 4 blocks from only one side, what happens? Solving an equation depends on keeping both sides balanced.',
    prerequisites:['Distinguish an algebraic expression from an equation.','Simplify expressions by combining like terms.','Use additive inverses and equal sharing with integers.'],
    goals:['explain what an equation means.','solve one- and two-operation equations using balance or tile models.','preserve equality by doing the same operation to both sides.','write equations for real situations and solve them.'],
    estimatedTime:'80 min',
    materials:['pencil','paper','optional algebra tiles or balance model'],
    successCriteria:['I can tell an expression from an equation.','I can model both sides of an equation.','I can explain why the same change must happen on both sides.','I can use zero pairs and equal sharing to isolate one variable.','I can write and solve an equation from a context.'],
    bigIdea:'Solving an equation means finding the value that keeps the left side and right side equal.',
    bigIdeaDetail:'An equation behaves like a balance. To preserve equality, any change made to one side must also be made to the other. Models such as balance scales and algebra tiles make inverse operations visible: remove equal amounts from both sides, create and remove zero pairs, or divide both sides into equal groups until one variable is isolated.',
    connection:'Why does subtracting 4 from both sides of x + 4 = 9 keep the equation true while subtracting 4 from only one side does not?',
    concepts:[
      {title:'An equation has two equal sides',text:'An equal sign states that the expression on the left has the same value as the expression on the right. An expression such as 3x + 7 has no equal sign.',remember:'Equal means same value, not “the answer comes next.”'},
      {title:'The variable is an unknown value',text:'To solve means to find a value for the variable that makes the equation true.',remember:'The goal is usually to isolate one variable.'},
      {title:'Preserve equality',text:'If you add, subtract, multiply, or divide one side of an equation, make the matching change to the other side.',remember:'Whatever you do to one side, do to the other.'},
      {title:'Zero pairs remove additive terms',text:'If x − 3 = 1, adding 3 to both sides creates a zero pair on the left and leaves x = 4.',remember:'Opposites combine to zero.'},
      {title:'Equal sharing isolates multiplied variables',text:'If 2x = 10, divide both sides into 2 equal groups. One x must equal 5.',remember:'2x means 2 × x.'},
      {title:'Simplify before solving when needed',text:'For 3n + 2n − 1 = 9, combine like terms first to get 5n − 1 = 9. Then use the balance idea.',remember:'Simplifying changes the form but keeps the same solution.'}
    ],
    misconceptions:[
      {title:'“The equal sign means calculate the left side.”',text:'An equal sign compares two values. Both sides must represent the same amount.'},
      {title:'“I can remove something from only one side.”',text:'That breaks equality. A balance stays level only when matching changes happen on both sides.'},
      {title:'“2x = 10 means x = 8.”',text:'2x means two equal x-groups total 10, so equal sharing gives x = 5.'},
      {title:'“I should solve before simplifying.”',text:'When like terms appear on one side, simplifying them first often makes the balance much easier to see.'}
    ],
    examples:[
      {title:'Example 1 · Expression or equation?',problem:'Classify 2(x − 5), 5b = 15, and 3x − 5 = −2.',steps:['Look for an equal sign.','2(x − 5) has no equal sign, so it is an expression.','5b = 15 and 3x − 5 = −2 each compare two equal expressions.'],answer:'One expression; two equations'},
      {title:'Example 2 · Remove the same amount',problem:'Solve x + 15 = 23.',steps:['Picture both sides on a balanced scale.','Remove 15 from the left to isolate x.','Remove 15 from the right to preserve equality.','23 − 15 = 8.'],answer:'x = 8'},
      {title:'Example 3 · Zero pairs and equal sharing',problem:'Solve 2n − 1 = 9.',steps:['Add 1 to both sides to create a zero pair: 2n = 10.','Divide both sides into 2 equal groups.','Each n-group is 5.'],answer:'n = 5'},
      {title:'Example 4 · Simplify before solving',problem:'Solve 3n + 2n − 1 = 9.',steps:['Combine like terms: 5n − 1 = 9.','Add 1 to both sides: 5n = 10.','Divide both sides by 5.'],answer:'n = 2'}
    ],
    vocabulary:[
      {term:'Equation',definition:'A mathematical statement showing that two expressions have equal value.',example:'2x + 3 = 11.'},
      {term:'Solve',definition:'To find the value of a variable that makes an equation true.',example:'x = 4 solves x + 3 = 7.'},
      {term:'Solution',definition:'The value that makes an equation true.',example:'5 is the solution of 2x = 10.'},
      {term:'Preservation of equality',definition:'The idea that matching operations on both sides keep an equation equal.',example:'x + 4 = 9 → x = 5 after subtracting 4 from both sides.'},
      {term:'Inverse operations',definition:'Operations that undo one another.',example:'Addition and subtraction are inverse operations.'},
      {term:'Zero pair',definition:'A number or term and its opposite that combine to zero.',example:'−3 and +3.'},
      {term:'Balance model',definition:'A visual model showing the left and right sides of an equation as equal amounts.',example:'Removing 4 from each side of x + 4 = 9.'}
    ],
    explorePrompt:'Use the Balance Lab to make the same move on both sides, remove zero pairs, and divide equal groups until one variable remains.',
    exploreMode:'compare',
    handsOn:{title:'Paper Balance Equation',instructions:['Draw a vertical line down the middle of a page to represent the equal sign.','Build x + 4 = 9 using one x-card and unit marks.','Cross out four unit marks from both sides.','Repeat with 2x + 2 = 10, then split the remaining units into two equal groups.','Write the symbolic step beside each model move.'],reflect:'How does each model move connect to an inverse operation?'},
    practiceIntro:'Use the balance idea even when you solve mentally. Name the operation you are undoing and make the matching change on both sides.',
    questions:[
      {difficulty:'foundations',prompt:'Which is an equation?',choices:['3x + 4','5(y − 2)','2n + 1 = 9','7a'],answer:2,hint:'Look for an equal sign.',explain:'2n + 1 = 9 is an equation because it states two expressions are equal.'},
      {difficulty:'foundations',prompt:'Solve x + 4 = 11.',choices:['7','15','4','−7'],answer:0,hint:'Undo +4.',explain:'Subtract 4 from both sides: x = 7.'},
      {difficulty:'foundations',prompt:'Solve 3x = 18.',choices:['3','6','15','21'],answer:1,hint:'Share 18 equally among 3 x-groups.',explain:'18 ÷ 3 = 6, so x = 6.'},
      {difficulty:'standard',prompt:'Solve n − 5 = −2.',choices:['−7','−3','3','7'],answer:2,hint:'Undo subtracting 5 by adding 5.',explain:'Add 5 to both sides: n = 3.'},
      {difficulty:'standard',prompt:'Solve 2p + 3 = 11.',choices:['4','7','8','14'],answer:0,hint:'Remove 3 first, then share by 2.',explain:'2p = 8, so p = 4.'},
      {difficulty:'standard',prompt:'Solve 4m − 2 = 14.',choices:['3','4','6','16'],answer:1,hint:'Add 2 to both sides, then divide by 4.',explain:'4m = 16, so m = 4.'},
      {difficulty:'standard',prompt:'Solve 3n + 2n = 20.',choices:['2','4','5','10'],answer:1,hint:'Simplify first.',explain:'5n = 20, so n = 4.'},
      {difficulty:'challenge',prompt:'The temperature rose 3°C to −6°C. Which equation finds the starting temperature t?',choices:['t − 3 = −6','t + 3 = −6','3t = −6','t + 6 = 3'],answer:1,hint:'Starting temperature plus 3 equals the final temperature.',explain:'t + 3 = −6 models a rise of 3 degrees to −6°C.'},
      {difficulty:'challenge',prompt:'Solve 2(x + 3) = 14.',choices:['4','5','7','10'],answer:0,hint:'You can think of two equal groups totaling 14.',explain:'x + 3 = 7, so x = 4.'}
    ],
    checkQuestions:[
      {difficulty:'foundations',prompt:'Which statement best describes an equation?',choices:['A list of terms','Two expressions with equal value','Any expression with x','A multiplication rule'],answer:1,hint:'',explain:'An equation states that two expressions are equal.'},
      {difficulty:'foundations',prompt:'Solve x − 6 = 2.',choices:['−4','4','8','12'],answer:2,hint:'',explain:'Add 6 to both sides: x = 8.'},
      {difficulty:'foundations',prompt:'Solve 4a = 20.',choices:['4','5','16','24'],answer:1,hint:'',explain:'20 ÷ 4 = 5.'},
      {difficulty:'standard',prompt:'Solve 2x + 5 = 15.',choices:['5','7.5','10','20'],answer:0,hint:'',explain:'Subtract 5 to get 2x = 10, then divide by 2.'},
      {difficulty:'standard',prompt:'Solve 7 = 2n − 1.',choices:['3','4','6','8'],answer:1,hint:'',explain:'Add 1: 8 = 2n. Divide by 2: n = 4.'},
      {difficulty:'standard',prompt:'Solve 4p + p = 25.',choices:['4','5','20','25'],answer:1,hint:'',explain:'5p = 25, so p = 5.'},
      {difficulty:'standard',prompt:'Which move preserves equality in x + 7 = 12?',choices:['Subtract 7 only from the left','Subtract 7 from both sides','Add 7 only to the right','Multiply only the left by 2'],answer:1,hint:'',explain:'Matching operations on both sides preserve equality.'},
      {difficulty:'challenge',prompt:'A babysitter earned $36 in 3 equal hours. Which equation can model hourly wage w?',choices:['w + 3 = 36','3w = 36','36w = 3','w − 3 = 36'],answer:1,hint:'',explain:'Three equal hourly amounts total $36, so 3w = 36.'},
      {difficulty:'challenge',prompt:'Solve 3(x + 2) = 15.',choices:['3','5','7','13'],answer:0,hint:'',explain:'x + 2 = 5, so x = 3.'},
      {difficulty:'challenge',prompt:'A student changes 2x − 4 = 10 to 2x = 14. Why is the step valid?',choices:['They added 4 to both sides','They added 4 only to the left','They divided both sides by 4','They combined unlike terms'],answer:0,hint:'',explain:'Adding 4 to both sides creates a zero pair on the left and preserves equality.'}
    ],
    application:{title:'Balance Rescue',scenario:'Repair balanced equations by choosing legal moves and isolating the variable.',tasks:['Identify the operation attached to the variable.','Choose an inverse operation.','Apply it to both sides.','Use equal sharing when a coefficient remains.'],reveal:'Every successful rescue keeps both sides equal while isolating one variable.'},
    summary:['An equation states that two expressions have equal value.','Solving means finding a value that makes the equation true.','Matching operations on both sides preserve equality.','Zero pairs and equal sharing make inverse operations visible.','Simplifying first can make an equation easier to solve.'],
    support:['Draw a vertical divider to separate left and right sides.','Use algebra tiles or paper unit marks for every step.','Say the inverse operation aloud before making a move.','Check that every move happens on both sides.'],
    extension:['Solve the same equation using both a balance drawing and symbolic steps.','Create a one-step equation with a negative solution.','Write a real-life story for 3x + 2 = 20.'],
    pat:{title:'PAT-STYLE THINKING',prompt:'A student solves 2x + 3 = 11 by subtracting 3 from the left side only. Explain the error and show a correct strategy.',answer:'Subtracting only from one side changes the equality. Subtract 3 from both sides to get 2x = 8, then divide both sides by 2 to get x = 4.'},
    review:['I can distinguish expressions from equations.','I can preserve equality.','I can use inverse operations with a model.','I can simplify before solving when needed.','I can write an equation from a situation.'],
    next:{title:'Solving Equations Algebraically',slug:'solving-equations-algebraically',status:'ready'}
  },

  'grade-6-math/algebra/solving-equations-algebraically': {
    hook:'A balance model is powerful, but would you want to draw dozens of tiles every time? Algebraic steps are a faster way to record the same balanced moves.',
    prerequisites:['Solve equations with balance or algebra-tile models.','Use inverse operations with positive and negative numbers.','Simplify expressions using like terms and distribution.'],
    goals:['solve one- and two-operation equations algebraically.','choose inverse operations that preserve equality.','simplify before solving when needed.','verify a solution by comparing the left and right sides.'],
    estimatedTime:'120 min',
    materials:['pencil','paper','optional algebra tiles for checking'],
    successCriteria:['I can translate a model move into an algebraic step.','I can isolate a variable using inverse operations.','I can solve equations containing integers, decimals, or parentheses.','I can verify by substituting into the original equation.','I can write and solve an equation for a word problem.'],
    bigIdea:'Algebraic solving records the same balanced moves as a model, but more efficiently.',
    bigIdeaDetail:'Inverse operations undo operations around the variable while preservation of equality keeps both sides balanced. Simplify first when needed, then isolate the variable. A solution is not complete until it can make the original left-hand side and right-hand side equal when substituted back into the equation.',
    connection:'How is adding 4 to both sides of x − 4 = −10 the symbolic version of adding four positive tiles to each side of a balance model?',
    concepts:[
      {title:'Inverse operations undo each other',text:'Addition and subtraction are inverses; multiplication and division are inverses. Choose the operation that undoes what is attached to the variable.',remember:'Undo operations in a logical order.'},
      {title:'Preserve equality symbolically',text:'Write the same operation on both sides of the equation. This is the written version of keeping a balance level.',remember:'Every legal step creates an equivalent equation.'},
      {title:'Simplify before solving',text:'Combine like terms or distribute first when an equation is not yet in a useful form. 4x + 2x − 3 = 9 becomes 6x − 3 = 9.',remember:'Simplifying is preparation, not a separate solution.'},
      {title:'Use LHS and RHS to verify',text:'Substitute the solution into the original equation. Evaluate the Left Hand Side and Right Hand Side separately. A correct solution makes LHS = RHS.',remember:'Verify in the original equation.'},
      {title:'Equations can model word problems',text:'Choose a variable, translate the situation into an equation, solve, and interpret the result with units or context.',remember:'Define what the variable represents before writing the equation.'},
      {title:'Different strategies can lead to the same solution',text:'Inspection, systematic trial, models, and algebraic inverse operations can all be valid. Algebraic solving becomes more efficient as equations become more complex.',remember:'Choose a strategy you can explain.'}
    ],
    misconceptions:[
      {title:'“Move the number across and change the sign.”',text:'That shortcut hides the reason. Record the inverse operation on both sides so preservation of equality stays visible.'},
      {title:'“Verification means repeat my solving steps.”',text:'Verification substitutes the solution into the original equation and checks whether LHS equals RHS.'},
      {title:'“I can distribute to only one term.”',text:'A factor outside parentheses multiplies every term inside.'},
      {title:'“Once I get x = something, I am finished.”',text:'A quick verification can catch sign, distribution, or arithmetic errors.'}
    ],
    examples:[
      {title:'Example 1 · One operation with integers',problem:'Solve x − 4 = −10 and verify.',steps:['Add 4 to both sides: x − 4 + 4 = −10 + 4.','Simplify: x = −6.','Verify: LHS = −6 − 4 = −10; RHS = −10.'],answer:'x = −6; LHS = RHS'},
      {title:'Example 2 · Two operations',problem:'Solve 4x + 2x − 3 = 9.',steps:['Combine like terms: 6x − 3 = 9.','Add 3 to both sides: 6x = 12.','Divide both sides by 6: x = 2.','Verify in the original expression.'],answer:'x = 2'},
      {title:'Example 3 · Parentheses',problem:'Solve 3(x + 2) = 9.',steps:['Distribute: 3x + 6 = 9.','Subtract 6 from both sides: 3x = 3.','Divide by 3: x = 1.','Verify: 3(1 + 2) = 9.'],answer:'x = 1'},
      {title:'Example 4 · Write an equation from words',problem:'Subtract 1.8 from a number. The result is 2.6.',steps:['Let n be the unknown number.','Write n − 1.8 = 2.6.','Add 1.8 to both sides: n = 4.4.','Verify: 4.4 − 1.8 = 2.6.'],answer:'n = 4.4'}
    ],
    vocabulary:[
      {term:'Inverse operations',definition:'Operations that undo one another.',example:'Addition undoes subtraction.'},
      {term:'Verify',definition:'To check that a solution makes the original equation true.',example:'Substitute x = 3 and confirm LHS = RHS.'},
      {term:'Left Hand Side (LHS)',definition:'The expression to the left of the equal sign.',example:'In 2x + 1 = 9, LHS is 2x + 1.'},
      {term:'Right Hand Side (RHS)',definition:'The expression to the right of the equal sign.',example:'In 2x + 1 = 9, RHS is 9.'},
      {term:'Systematic trial',definition:'Testing carefully chosen variable values and using the result to choose the next value.',example:'Try x = 5, then adjust based on whether the LHS is too high or low.'},
      {term:'Inspection',definition:'Using number facts and mental reasoning to identify a solution.',example:'For 2x = 12, inspection gives x = 6.'},
      {term:'Equivalent equations',definition:'Different forms of an equation that have the same solution.',example:'2x + 4 = 10 and 2x = 6.'}
    ],
    explorePrompt:'Use the Equation Solver Lab to choose inverse operations, record legal steps, and verify solutions with an LHS/RHS check.',
    exploreMode:'compare',
    handsOn:{title:'Model-to-Symbol Bridge',instructions:['Choose an equation such as 2x + 3 = 11.','Model it with algebra tiles or a simple balance drawing.','Write one symbolic equation step for every physical move.','Solve until one x remains.','Substitute your solution into the original equation and compare LHS and RHS.'],reflect:'Which symbolic step matched each model move, and why did equality stay true?'},
    practiceIntro:'Write every inverse operation on both sides. Simplify first when needed, and use verification to catch mistakes rather than treating it as an optional extra.',
    questions:[
      {difficulty:'foundations',prompt:'Solve x + 7 = −3.',choices:['−10','−4','4','10'],answer:0,hint:'Subtract 7 from both sides.',explain:'x = −3 − 7 = −10.'},
      {difficulty:'foundations',prompt:'Solve 5x = 35.',choices:['5','7','30','40'],answer:1,hint:'Divide both sides by 5.',explain:'x = 35 ÷ 5 = 7.'},
      {difficulty:'foundations',prompt:'Which operation should you use first to solve 3x − 4 = 11?',choices:['Add 4 to both sides','Subtract 4 from both sides','Divide by 4','Multiply by 3'],answer:0,hint:'Undo the subtraction around the variable term.',explain:'Add 4 to both sides to get 3x = 15.'},
      {difficulty:'standard',prompt:'Solve 3x − 4 = 11.',choices:['3','5','7','15'],answer:1,hint:'Add 4, then divide by 3.',explain:'3x = 15, so x = 5.'},
      {difficulty:'standard',prompt:'Solve 4x + 2x − 6 = 12.',choices:['2','3','6','9'],answer:1,hint:'Simplify the x-terms first.',explain:'6x − 6 = 12 → 6x = 18 → x = 3.'},
      {difficulty:'standard',prompt:'Solve 2(x + 5) = 18.',choices:['4','5','8','13'],answer:0,hint:'Distribute or divide by 2 first.',explain:'x + 5 = 9, so x = 4.'},
      {difficulty:'standard',prompt:'Which verification proves x = 4 solves 2x + 3 = 11?',choices:['2(4)+3=11','2(4)=11','4+3=11','2+4+3=11'],answer:0,hint:'Substitute 4 for x in the original equation.',explain:'2(4)+3 = 8+3 = 11, which matches the RHS.'},
      {difficulty:'challenge',prompt:'Solve n − 1.8 = 2.6.',choices:['0.8','4.4','−4.4','4.6'],answer:1,hint:'Add 1.8 to both sides.',explain:'n = 2.6 + 1.8 = 4.4.'},
      {difficulty:'challenge',prompt:'Chan adds 7 to a number, then multiplies the sum by 5 to get 60. What is the number?',choices:['5','7','12','53'],answer:0,hint:'Write 5(n + 7) = 60.',explain:'Divide by 5: n + 7 = 12. Subtract 7: n = 5.'}
    ],
    checkQuestions:[
      {difficulty:'foundations',prompt:'Solve x − 8 = 3.',choices:['−5','5','11','24'],answer:2,hint:'',explain:'Add 8 to both sides: x = 11.'},
      {difficulty:'foundations',prompt:'Solve 6x = 42.',choices:['6','7','36','48'],answer:1,hint:'',explain:'42 ÷ 6 = 7.'},
      {difficulty:'foundations',prompt:'What does verify mean?',choices:['Simplify an expression','Check that a solution makes the original equation true','Move a term','Draw algebra tiles'],answer:1,hint:'',explain:'Verification checks the solution in the original equation.'},
      {difficulty:'standard',prompt:'Solve 2x + 7 = 19.',choices:['5','6','12','13'],answer:1,hint:'',explain:'2x = 12, so x = 6.'},
      {difficulty:'standard',prompt:'Solve 5x − 3x + 4 = 18.',choices:['5','7','9','11'],answer:1,hint:'',explain:'2x + 4 = 18 → 2x = 14 → x = 7.'},
      {difficulty:'standard',prompt:'Solve 3(x + 1) = 15.',choices:['3','4','5','12'],answer:1,hint:'',explain:'x + 1 = 5, so x = 4.'},
      {difficulty:'standard',prompt:'If x = −4, what are the LHS and RHS of x − 1 = −5?',choices:['−3 and −5','−5 and −5','−4 and −1','5 and −5'],answer:1,hint:'',explain:'LHS = −4 − 1 = −5, which equals RHS −5.'},
      {difficulty:'challenge',prompt:'Solve 2(b + 3) + 2b = 12.',choices:['1','1.5','2','3'],answer:1,hint:'',explain:'2b + 6 + 2b = 12 → 4b = 6 → b = 1.5.'},
      {difficulty:'challenge',prompt:'Which equation models “five times the sum of a number and 7 is 60”?',choices:['5n + 7 = 60','5(n + 7) = 60','n + 35 = 60','5 + n + 7 = 60'],answer:1,hint:'',explain:'The sum happens first, so parentheses are needed: 5(n + 7)=60.'},
      {difficulty:'challenge',prompt:'A student gets x = 3 for 2x + 5 = 12. What should verification show?',choices:['LHS=11, RHS=12, so the solution is wrong','LHS=12, RHS=12','LHS=6, RHS=5','Verification is not needed'],answer:0,hint:'',explain:'2(3)+5 = 11, not 12, so x = 3 is not a solution.'}
    ],
    application:{title:'Equation Escape',scenario:'Solve and verify equations to unlock a sequence of algebra doors.',tasks:['Simplify if needed.','Choose inverse operations.','Record the same move on both sides.','Verify with LHS and RHS.'],reveal:'The final door opens only when the solution also passes the verification check.'},
    summary:['Algebraic steps record balanced model moves efficiently.','Inverse operations isolate the variable while preserving equality.','Simplify expressions before solving when needed.','A correct solution makes LHS = RHS in the original equation.','Equations can model and solve real situations.'],
    support:['Write the operation on both sides instead of using a “move it across” shortcut.','Use arrows for distribution before simplifying.','Return to a balance drawing if a symbolic step feels mysterious.','Verify every practice answer until the process feels automatic.'],
    extension:['Solve one equation three ways: inspection, a model, and algebraically.','Create a two-step equation with solution x = −4 and verify it.','Write a perimeter problem that can be solved using a two-step equation.'],
    pat:{title:'PAT-STYLE THINKING',prompt:'A student says x = 3 solves 2x + 5 = 12. Without re-solving the equation first, determine whether the student is correct and explain.',answer:'Substitute x = 3 into the original equation. LHS = 2(3) + 5 = 11, while RHS = 12. Since LHS ≠ RHS, x = 3 is not a solution.'},
    review:['I can choose inverse operations.','I can preserve equality in symbolic steps.','I can simplify before solving.','I can verify using LHS and RHS.','I can write and solve equations from contexts.'],
    next:{title:'Unit 6 Review & Math Arcade',slug:'unit-review',status:'ready'}
  }
};