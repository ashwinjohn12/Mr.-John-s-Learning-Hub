import type { TopicContent } from './topicContent';

export const unit1RemainingContent: Record<string, TopicContent> = {
  'grade-6-math/positive-negative-numbers/adding-integers': {
    hook: 'Two game scores change by −8 and +13. Without drawing every chip, can you predict the sign of the final change before calculating the exact sum?',
    prerequisites: ['Model integer addition with chips and number lines.','Recognize additive inverses and zero pairs.','Compare magnitudes of positive and negative integers.'],
    goals: ['add any two integers symbolically.','choose an efficient strategy based on the signs of the addends.','use magnitude to determine the sign of a sum when the signs are different.','use decomposition and the commutative property to make calculations easier.'],
    estimatedTime: '70–90 min',
    materials: ['pencil', 'optional integer chips', 'optional number line'],
    successCriteria: ['I can decide whether to add or compare magnitudes.','I can predict the sign of a sum before calculating.','I can explain why my strategy matches the models from Lesson 1.2.','I can rearrange addends when it makes a calculation easier.'],
    bigIdea: 'The models from Lesson 1.2 lead to efficient symbolic strategies for adding integers.',
    bigIdeaDetail: 'When the addends have the same sign, their movements point in the same direction, so add the magnitudes and keep that sign. When the signs are different, zero pairs cancel. Symbolically, that means subtract the smaller magnitude from the larger magnitude and use the sign of the number with the greater magnitude. You can also decompose an addend to create an additive inverse and a zero pair.',
    connection: 'Why does (+6) + (−10) have the same result as (+6) + (−6) + (−4)?',
    concepts: [
      { title: 'Same signs: combine the magnitudes', text: 'If both integers are positive, the sum is positive. If both are negative, the sum is negative. Add the magnitudes because both addends move in the same direction.', remember: '(−7) + (−5): add 7 + 5 = 12 and keep the negative sign, so the sum is −12.' },
      { title: 'Different signs: compare the magnitudes', text: 'When one addend is positive and the other is negative, the opposite parts cancel as zero pairs. Subtract the smaller magnitude from the larger magnitude.', remember: 'The sign of the sum matches the addend with the greater magnitude.' },
      { title: 'Decompose to make zero', text: 'Break one addend into two parts so one part is the additive inverse of the other addend. For (+6) + (−10), rewrite −10 as −6 + (−4). Then +6 and −6 make 0.', remember: 'Decomposition explains the strategy instead of turning it into a rule to memorize.' },
      { title: 'Zero does not change a sum', text: 'Adding zero leaves a number unchanged. This is useful after an additive inverse pair has combined to make zero.', remember: '0 + (−4) = −4.' },
      { title: 'Order can be changed when adding', text: 'The commutative property of addition says a + b = b + a. Rearranging addends can make additive inverses easier to spot, especially when adding three or more integers.', remember: 'Only rearrange terms when the operation is addition.' }
    ],
    misconceptions: [
      { title: '“Adding a negative always gives a negative answer.”', text: 'Not always. In (+12) + (−5), the positive addend has the greater magnitude, so the sum is +7.' },
      { title: '“Different signs means subtract in the order written.”', text: 'Compare magnitudes first. Subtract the smaller magnitude from the larger magnitude, then use the sign of the greater-magnitude addend.' },
      { title: '“For two negative integers, subtract because the signs are negative.”', text: 'The signs are the same, so the movements combine. (−4) + (−6) = −10.' }
    ],
    examples: [
      { title: 'Example 1 · Same positive signs', problem: 'Find (+8) + (+5).', steps: ['The signs are the same.','Add the magnitudes: 8 + 5 = 13.','Keep the common positive sign.'], answer: '+13' },
      { title: 'Example 2 · Same negative signs', problem: 'Find (−9) + (−4).', steps: ['The signs are the same.','Add the magnitudes: 9 + 4 = 13.','Keep the common negative sign.'], answer: '−13' },
      { title: 'Example 3 · Different signs', problem: 'Find (+7) + (−12).', steps: ['The signs are different.','Compare magnitudes: 12 > 7.','Subtract: 12 − 7 = 5.','The greater magnitude belongs to −12, so the sum is negative.'], answer: '−5' },
      { title: 'Example 4 · Decompose to zero', problem: 'Find (+6) + (−10) by decomposing.', steps: ['Rewrite −10 as (−6) + (−4).','Group +6 with −6.','(+6) + (−6) = 0.','0 + (−4) = −4.'], answer: '−4' }
    ],
    vocabulary: [
      { term: 'Decompose', definition: 'To break a number into smaller addends that have the same total.', example: '−10 can be decomposed as −6 + (−4).' },
      { term: 'Commutative property of addition', definition: 'Changing the order of addends does not change the sum.', example: '(−3) + 8 = 8 + (−3).' },
      { term: 'Magnitude', definition: 'The distance a number is from zero.', example: 'The magnitude of −12 is 12.' },
      { term: 'Additive inverse', definition: 'A number with the same magnitude and opposite sign.', example: '+6 and −6 are additive inverses.' },
      { term: 'Sum', definition: 'The result of addition.', example: 'The sum of −9 and +4 is −5.' }
    ],
    explorePrompt: 'Use the strategy tools to connect what the symbols are doing to the zero-pair and direction models you already understand.',
    exploreMode: 'add',
    handsOn: { title: 'Strategy Sort', instructions: ['Write these sums on separate slips: (−4)+(−7), (+9)+(−3), (−8)+(+2), (+5)+(+6), (−10)+(+10).','Sort them into “same signs,” “different signs,” and “additive inverses.”','Solve each one and explain which feature of the signs told you what to do.','Choose one different-sign example and show it with zero pairs.'], reflect: 'Which symbolic strategy most clearly matches what happened in the chip model?' },
    practiceIntro: 'Try to predict the sign first, then calculate. If a question feels uncertain, return to a zero-pair or number-line model before using the symbolic shortcut.',
    questions: [
      { difficulty: 'foundations', prompt: 'Find (−6) + (−3).', choices: ['−9', '−3', '+3', '+9'], answer: 0, hint: 'The signs are the same.', explain: 'Add 6 + 3 = 9 and keep the negative sign: −9.' },
      { difficulty: 'foundations', prompt: 'Find (+11) + (+4).', choices: ['−15', '+7', '+15', '−7'], answer: 2, hint: 'Both addends point in the positive direction.', explain: '11 + 4 = 15, so the sum is +15.' },
      { difficulty: 'standard', prompt: 'Find (+9) + (−14).', choices: ['−23', '−5', '+5', '+23'], answer: 1, hint: 'Different signs: compare magnitudes 9 and 14.', explain: '14 − 9 = 5, and −14 has the greater magnitude, so the sum is −5.' },
      { difficulty: 'standard', prompt: 'Find (−17) + (+8).', choices: ['−25', '−9', '+9', '+25'], answer: 1, hint: 'Which addend has the greater magnitude?', explain: '17 − 8 = 9. The greater magnitude belongs to −17, so the sum is −9.' },
      { difficulty: 'standard', prompt: 'Which decomposition helps solve (+7) + (−12)?', choices: ['−12 = −7 + (−5)', '−12 = +7 + (−19)', '+7 = −7 + 14', '−12 = −12 + 0 only'], answer: 0, hint: 'Create an additive inverse for +7.', explain: 'Decomposing −12 as −7 + (−5) creates +7 + (−7) = 0, leaving −5.' },
      { difficulty: 'standard', prompt: 'Find (−15) + 0.', choices: ['0', '+15', '−15', '−30'], answer: 2, hint: 'Adding zero does not change a number.', explain: 'The sum is −15.' },
      { difficulty: 'challenge', prompt: 'Find (−15) + (+30) + (−30).', choices: ['−75', '−15', '0', '+15'], answer: 1, hint: 'Look for additive inverses before working left to right.', explain: '+30 and −30 sum to 0, so only −15 remains.' },
      { difficulty: 'challenge', prompt: 'Which statement is true?', choices: ['(−8)+(+3)=+5', '(−8)+(+3)=−5', '(−8)+(+3)=−11', '(−8)+(+3)=+11'], answer: 1, hint: 'Different signs: 8 has the greater magnitude.', explain: '8 − 3 = 5, and the greater magnitude is negative, so the sum is −5.' }
    ],
    checkQuestions: [
      { difficulty: 'foundations', prompt: 'Find (−7) + (−8).', choices: ['−15', '−1', '+1', '+15'], answer: 0, hint: '', explain: 'Same signs: add magnitudes and keep negative.' },
      { difficulty: 'foundations', prompt: 'Find (+13) + (−13).', choices: ['−26', '0', '+13', '+26'], answer: 1, hint: '', explain: 'The addends are additive inverses, so the sum is 0.' },
      { difficulty: 'standard', prompt: 'Find (+18) + (−7).', choices: ['−25', '−11', '+11', '+25'], answer: 2, hint: '', explain: '18 − 7 = 11 and the greater magnitude is positive.' },
      { difficulty: 'standard', prompt: 'Find (−21) + (+9).', choices: ['−30', '−12', '+12', '+30'], answer: 1, hint: '', explain: '21 − 9 = 12 and the greater magnitude is negative.' },
      { difficulty: 'standard', prompt: 'Which sum is positive?', choices: ['(−9)+(+4)', '(−5)+(−2)', '(+6)+(−2)', '(−8)+0'], answer: 2, hint: '', explain: '+6 has greater magnitude than −2, so the sum is +4.' },
      { difficulty: 'standard', prompt: 'Which property explains (+4)+(−9)=(−9)+(+4)?', choices: ['Distributive property', 'Commutative property of addition', 'Zero property', 'Subtraction property'], answer: 1, hint: '', explain: 'The addends changed order but the sum stayed the same.' },
      { difficulty: 'challenge', prompt: 'Evaluate (+14)+(−20)+(+6).', choices: ['−40', '−12', '0', '+12'], answer: 2, hint: '', explain: '+14 and +6 combine to +20, which is the additive inverse of −20.' },
      { difficulty: 'challenge', prompt: 'A temperature falls 9 °C and then rises 14 °C. What is the total change?', choices: ['−23 °C', '−5 °C', '+5 °C', '+23 °C'], answer: 2, hint: '', explain: '−9 + 14 = +5, so the total change is an increase of 5 °C.' }
    ],
    application: { title: 'Bank Balance Strategy Challenge', scenario: 'A class fundraiser records four changes: +$25, −$18, −$7, and +$10.', tasks: ['Write one integer addition expression for the four changes.','Rearrange the addends to make the calculation easier.','Identify any pair or group that makes zero.','Find the total change and explain your strategy.'], reveal: 'One efficient arrangement is +25 + (−18) + (−7) + 10. Since −18 + (−7) = −25, +25 and −25 make 0, leaving +10. The total change is +$10.' },
    summary: ['Same signs: add magnitudes and keep the common sign.','Different signs: subtract magnitudes and use the sign of the greater magnitude.','Decomposition can create an additive inverse and a zero pair.','Adding zero does not change a value.','The commutative property lets you rearrange addends.'],
    support: ['Predict the sign before calculating.','Use a two-column reminder: SAME SIGNS → add magnitudes; DIFFERENT SIGNS → compare magnitudes.','Return to integer chips whenever the symbolic strategy feels disconnected from meaning.'],
    extension: ['Create three different sums with an answer of −6.','Find a four-integer sum that can be simplified by pairing two sets of additive inverses.','Explain why “different signs means subtract” is incomplete without mentioning magnitude.'],
    pat: { title: 'PAT-STYLE THINKING', prompt: 'Which strategy is most efficient for (−18) + (+7)? A) Add 18 + 7 and keep the negative sign. B) Subtract 18 − 7 and use the negative sign. C) Subtract 18 − 7 and use the positive sign. D) Change both signs and add.', answer: 'B. The signs are different, so compare magnitudes. 18 − 7 = 11, and −18 has the greater magnitude, so the sum is −11.' },
    review: ['I can add integers with the same sign.','I can add integers with different signs.','I can use decomposition to create zero pairs.','I can use the commutative property to simplify a sum.'],
    next: { title: 'Subtracting Integers Using Models', slug: 'subtracting-integers-models', status: 'ready' }
  },

  'grade-6-math/positive-negative-numbers/subtracting-integers-models': {
    hook: 'You have a model worth −4, but the instruction says “take away +3.” There are no positive chips to remove. How can adding something worth zero make the subtraction possible?',
    prerequisites: ['Represent integers with positive and negative chips.','Create zero pairs without changing a value.','Add integers using chip and number-line models.'],
    goals: ['identify the minuend, subtrahend, and difference.','model subtraction of positive and negative integers using chips.','add zero pairs when there are not enough chips to remove.','model integer subtraction on a number line and explain the direction of movement.','express a difference as a sum using a model.'],
    estimatedTime: '90–120 min',
    materials: ['integer chips or algebra tiles', 'horizontal number line', 'pencil'],
    successCriteria: ['I can build the minuend correctly.','I can decide when zero pairs are needed.','I can remove the subtrahend without changing the starting value.','I can explain why subtracting a negative can increase the result.'],
    bigIdea: 'Subtraction can be modeled as taking away, and zero pairs make it possible to remove chips that are not initially present.',
    bigIdeaDetail: 'Start by modeling the first integer, called the minuend. Then remove the second integer, called the subtrahend. If the model does not contain enough of the type of chip you need to remove, add zero pairs first. Because each zero pair has value 0, the starting value does not change. On a number line, subtracting a positive moves in the negative direction, while subtracting a negative reverses direction and moves positively.',
    connection: 'Why can (−4) − (+2) be modeled by adding zero pairs even though the starting value must stay −4?',
    concepts: [
      { title: 'Know the parts of subtraction', text: 'In a − b = c, a is the minuend, b is the subtrahend, and c is the difference.', remember: 'The order matters in subtraction.' },
      { title: 'Start with the minuend', text: 'Build only the first integer at the start. If the minuend is −5, begin with five negative chips.', remember: 'Do not build both numbers as if you were adding.' },
      { title: 'Remove the subtrahend', text: 'Subtracting means remove chips that represent the subtrahend. To subtract +3, remove three positive chips. To subtract −3, remove three negative chips.', remember: 'The sign of the subtrahend tells you which type of chip to take away.' },
      { title: 'Add zero pairs when needed', text: 'If the needed chips are missing, add enough +1/−1 pairs so you can remove the subtrahend. The value stays the same because every new pair is worth 0.', remember: 'Add only as many zero pairs as needed to make the removal possible.' },
      { title: 'Number-line subtraction reverses the subtrahend direction', text: 'Subtracting +4 moves 4 units left. Subtracting −4 moves 4 units right. The second negative changes the direction of the subtraction movement.', remember: 'Subtract positive → move left. Subtract negative → move right.' }
    ],
    misconceptions: [
      { title: '“Adding zero pairs changes the starting number.”', text: 'A zero pair is worth 0, so adding one changes the number of chips but not their total value.' },
      { title: '“Subtraction always makes the answer smaller.”', text: 'Subtracting a negative can increase a value. For example, −2 − (−7) = +5.' },
      { title: '“Build both integers and cancel like addition.”', text: 'For subtraction, build the minuend first and then remove the subtrahend. That action is different from combining addends.' }
    ],
    examples: [
      { title: 'Example 1 · Remove what is already there', problem: 'Model (+5) − (+2).', steps: ['Build five positive chips.','Remove two positive chips.','Three positive chips remain.'], answer: '+3' },
      { title: 'Example 2 · Negative minus negative', problem: 'Model (−7) − (−3).', steps: ['Build seven negative chips.','Remove three negative chips.','Four negative chips remain.'], answer: '−4' },
      { title: 'Example 3 · Add zero pairs first', problem: 'Model (+4) − (−5).', steps: ['Build four positive chips.','There are no negative chips to remove.','Add five zero pairs: five positive and five negative chips. The value is still +4.','Remove five negative chips.','Nine positive chips remain.'], answer: '+9' },
      { title: 'Example 4 · Number line', problem: 'Use a number line for (−9) − (−4).', steps: ['Start at −9.','Subtracting a negative means move in the positive direction.','Move 4 units right from −9.','Land at −5.'], answer: '−5' }
    ],
    vocabulary: [
      { term: 'Minuend', definition: 'The number from which another number is subtracted.', example: 'In (+3) − (−4), +3 is the minuend.' },
      { term: 'Subtrahend', definition: 'The number being subtracted.', example: 'In (+3) − (−4), −4 is the subtrahend.' },
      { term: 'Difference', definition: 'The result of subtraction.', example: 'The difference in (+3) − (+2) = +1 is +1.' },
      { term: 'Zero pair', definition: 'A positive unit and negative unit that together have value zero.', example: '+1 and −1 can be added to a model without changing its value.' },
      { term: 'Equivalent', definition: 'Having the same value even if written or modeled differently.', example: 'A model before and after adding zero pairs is equivalent.' }
    ],
    explorePrompt: 'Use the subtraction models to decide whether you can remove the subtrahend immediately or whether zero pairs are needed first.',
    exploreMode: 'add',
    handsOn: { title: 'Take-Away Mat', instructions: ['Draw a line down the middle of a page and label one side +1 and the other −1.','Model (−3) − (+4).','Notice that you do not have positive chips to remove, then add enough zero pairs.','Remove four positive chips and count what remains.','Repeat with (+2) − (−5).'], reflect: 'How did adding zero pairs change the appearance of the model without changing its value?' },
    practiceIntro: 'Use models before shortcuts. The purpose of this lesson is to understand what subtraction is doing so Lesson 1.5 has a strong meaning behind the symbolic rule.',
    questions: [
      { difficulty: 'foundations', prompt: 'In (+6) − (−2), what is the minuend?', choices: ['+6', '−2', '+8', '2'], answer: 0, hint: 'The minuend is the starting number.', explain: '+6 is the number from which −2 is subtracted.' },
      { difficulty: 'foundations', prompt: 'In (+6) − (−2), what is the subtrahend?', choices: ['+6', '−2', '+8', '2'], answer: 1, hint: 'The subtrahend is the number being subtracted.', explain: '−2 is the subtrahend.' },
      { difficulty: 'standard', prompt: 'Model (+5) − (+3). What remains?', choices: ['2 positive chips', '2 negative chips', '8 positive chips', '8 negative chips'], answer: 0, hint: 'Remove three positive chips from five positive chips.', explain: 'Two positive chips remain, so the difference is +2.' },
      { difficulty: 'standard', prompt: 'Model (−6) − (−4). What remains?', choices: ['2 positive chips', '2 negative chips', '10 negative chips', '10 positive chips'], answer: 1, hint: 'Remove four negative chips from six negative chips.', explain: 'Two negative chips remain, so the difference is −2.' },
      { difficulty: 'standard', prompt: 'To model (+3) − (−4), what must happen before the subtraction?', choices: ['Add four zero pairs', 'Remove three positive chips', 'Add three negative chips only', 'Change +3 to −3'], answer: 0, hint: 'You need four negative chips available to remove.', explain: 'Add four zero pairs so four negative chips are available without changing the starting value.' },
      { difficulty: 'standard', prompt: 'On a number line, how do you model (−5) − (+2)?', choices: ['Start at −5 and move 2 right', 'Start at −5 and move 2 left', 'Start at +5 and move 2 left', 'Start at 0 and move 7 left'], answer: 1, hint: 'Subtracting a positive moves in the negative direction.', explain: 'Move 2 units left from −5 to −7.' },
      { difficulty: 'challenge', prompt: 'Why can (+4) − (−5) be greater than +4?', choices: ['Because subtracting a negative reverses direction', 'Because subtraction always increases values', 'Because 5 is greater than 4', 'Because zero pairs add extra value'], answer: 0, hint: 'Think about removing negative chips or moving on a number line.', explain: 'Removing negative value increases the result; on a number line, subtracting −5 moves 5 units right.' },
      { difficulty: 'challenge', prompt: 'How many zero pairs are minimally needed to model (−2) − (+5)?', choices: ['2', '3', '5', '7'], answer: 2, hint: 'You need five positive chips available to remove.', explain: 'Starting with only negative chips, each zero pair adds one positive chip, so five pairs are needed.' }
    ],
    checkQuestions: [
      { difficulty: 'foundations', prompt: 'The result of subtraction is called the:', choices: ['addend', 'difference', 'magnitude', 'inverse'], answer: 1, hint: '', explain: 'The result of subtraction is the difference.' },
      { difficulty: 'foundations', prompt: 'Find (+7) − (+4) using a take-away model.', choices: ['+3', '−3', '+11', '−11'], answer: 0, hint: '', explain: 'Remove four positive chips from seven positive chips; three remain.' },
      { difficulty: 'standard', prompt: 'Find (−8) − (−3).', choices: ['−11', '−5', '+5', '+11'], answer: 1, hint: '', explain: 'Remove three negative chips from eight negative chips; five negative chips remain.' },
      { difficulty: 'standard', prompt: 'Which subtraction needs zero pairs if modeled with chips?', choices: ['(+6)−(+2)', '(−6)−(−2)', '(+4)−(−3)', '(−8)−(−5)'], answer: 2, hint: '', explain: 'A +4 model has no negative chips, so zero pairs are needed before removing −3.' },
      { difficulty: 'standard', prompt: 'Find (−3) − (+4).', choices: ['−7', '−1', '+1', '+7'], answer: 0, hint: '', explain: 'Add four zero pairs, remove four positive chips, and seven negative chips remain.' },
      { difficulty: 'standard', prompt: 'Find (+2) − (−5).', choices: ['−7', '−3', '+3', '+7'], answer: 3, hint: '', explain: 'Subtracting a negative moves right; +2 + 5 = +7.' },
      { difficulty: 'challenge', prompt: 'On a number line, (−2) − (−7) ends at:', choices: ['−9', '−5', '+5', '+9'], answer: 2, hint: '', explain: 'Subtracting −7 means move 7 units right from −2 to +5.' },
      { difficulty: 'challenge', prompt: 'Which statement about zero pairs is true?', choices: ['They increase the value by 2', 'They decrease the value by 2', 'They change the model but not its value', 'They can only be used in addition'], answer: 2, hint: '', explain: '+1 and −1 sum to zero, so the model’s value stays unchanged.' }
    ],
    application: { title: 'Hot-Air Balloon Challenge', scenario: 'Treat positive integers as upward lift and negative integers as downward pull. A balloon is at −3 units and then “removes” a −6 unit pull.', tasks: ['Write the subtraction expression.','Explain whether zero pairs would be needed in a chip model.','Show the movement on a number line.','Find the new position and explain why it is greater than the starting value.'], reveal: 'The expression is (−3) − (−6). A chip model needs six negative chips available to remove, so three zero pairs can be added to the initial −3 model. On a number line, subtracting −6 means move 6 units right. The result is +3.' },
    summary: ['Subtraction begins with the minuend and removes the subtrahend.','Zero pairs can be added without changing the value.','Use zero pairs when the needed chips are not available to remove.','Subtracting a positive moves left on a number line.','Subtracting a negative moves right and can increase the result.'],
    support: ['Label every expression with minuend and subtrahend.','Say the action aloud: “Start with…, take away…”.','Use physical chips before drawing or imagining the model.'],
    extension: ['Find two subtraction expressions that equal +6 but require different chip models.','Explain the smallest number of zero pairs needed for (−4) − (+9).','Create a subtraction where the difference is greater than both the minuend and the subtrahend.'],
    pat: { title: 'PAT-STYLE THINKING', prompt: 'A student models (−4) − (+3). There are no positive chips at first. What should the student do? A) Change −4 to +4. B) Add three zero pairs, then remove three positive chips. C) Remove three negative chips. D) Add +3 to −4.', answer: 'B. Adding three zero pairs keeps the value at −4 while making three positive chips available to remove. Seven negative chips remain, so the difference is −7.' },
    review: ['I can identify minuend, subtrahend, and difference.','I can subtract integers using chips.','I can add zero pairs when needed.','I can model subtraction on a number line.','I can explain why subtraction can increase a value.'],
    next: { title: 'Subtracting Integers', slug: 'subtracting-integers', status: 'ready' }
  },

  'grade-6-math/positive-negative-numbers/subtracting-integers': {
    hook: 'If (+9) − (−5) and (+9) + (+5) both equal +14, what changed between the two expressions—and why do they represent the same calculation?',
    prerequisites: ['Subtract integers using chips and number lines.','Find additive inverses.','Add integers symbolically.'],
    goals: ['rewrite integer subtraction as equivalent addition.','add the additive inverse of the subtrahend.','calculate integer differences efficiently using addition strategies.','explain why subtraction and adding an additive inverse are equivalent.'],
    estimatedTime: '70–85 min',
    materials: ['pencil', 'optional integer chips', 'optional number line'],
    successCriteria: ['I can change a subtraction expression into an equivalent addition expression.','I change only the subtrahend to its additive inverse.','I can use my integer-addition strategies after rewriting.','I can explain the equivalence with a model or number line.'],
    bigIdea: 'Subtracting an integer is equivalent to adding its additive inverse.',
    bigIdeaDetail: 'Every subtraction statement can be rewritten as addition by replacing the subtrahend with its additive inverse: a − b = a + (−b). This does not mean “change every sign.” The minuend stays exactly the same. Once the expression is rewritten as addition, use the addition strategies from Lesson 1.3.',
    connection: 'How are (−4) − (+2) and (−4) + (−2) connected?',
    concepts: [
      { title: 'Rewrite subtraction as addition', text: 'Keep the minuend. Replace subtraction with addition. Change the subtrahend to its additive inverse.', remember: 'a − b = a + (−b).' },
      { title: 'Only the subtrahend changes sign', text: 'For (+8) − (−1), keep +8 and change −1 to +1. The equivalent addition is (+8) + (+1).', remember: 'Do not change the sign of the first integer.' },
      { title: 'Equivalent statements have the same value', text: 'A subtraction statement and its rewritten addition statement look different but produce the same result because the actions are equivalent.', remember: '(+9) − (−5) and (+9) + (+5) are both +14.' },
      { title: 'Then use addition strategies', text: 'After rewriting, decide whether the addends have the same sign or different signs. Apply the same magnitude reasoning from Lesson 1.3.', remember: 'Rewrite first; calculate second.' },
      { title: 'Models explain the rule', text: 'In a chip model, taking away negative chips has the same effect as adding positive value. On a number line, subtracting a negative reverses direction and moves right.', remember: 'The symbolic rule should match what the models already showed.' }
    ],
    misconceptions: [
      { title: '“Change both signs.”', text: 'Only the subtrahend becomes its additive inverse. For (+8) − (−1), the equivalent addition is (+8) + (+1), not (−8) + (+1).' },
      { title: '“Two negatives always make a positive answer.”', text: 'The two signs may cause the operation to become addition, but the final answer still depends on the values. For −10 − (−3), the equivalent sum is −10 + 3 = −7.' },
      { title: '“Put the larger number first.”', text: 'Subtraction is ordered. Keep the original minuend in place and rewrite the operation correctly.' }
    ],
    examples: [
      { title: 'Example 1 · Subtract a positive', problem: 'Find (−4) − (+2).', steps: ['Keep the minuend: −4.','Change subtraction to addition.','The additive inverse of +2 is −2.','Rewrite: (−4) + (−2).','Same signs: 4 + 2 = 6 and keep negative.'], answer: '−6' },
      { title: 'Example 2 · Subtract a negative', problem: 'Find (+9) − (−5).', steps: ['Keep +9.','Change subtraction to addition.','The additive inverse of −5 is +5.','Rewrite: (+9) + (+5).','Add to get +14.'], answer: '+14' },
      { title: 'Example 3 · Different signs after rewriting', problem: 'Find (−12) − (−7).', steps: ['Rewrite as (−12) + (+7).','The signs are different.','12 − 7 = 5.','The greater magnitude is negative.'], answer: '−5' },
      { title: 'Example 4 · Zero', problem: 'Find (+6) − (+6).', steps: ['Rewrite as (+6) + (−6).','The addends are additive inverses.','Their sum is 0.'], answer: '0' }
    ],
    vocabulary: [
      { term: 'Equivalent statements', definition: 'Different statements that have the same value.', example: '(+4) − (+2) and (+4) + (−2) are equivalent.' },
      { term: 'Additive inverse', definition: 'A number with equal magnitude and the opposite sign.', example: 'The additive inverse of −8 is +8.' },
      { term: 'Minuend', definition: 'The starting number in a subtraction expression.', example: 'In −7 − (+3), −7 is the minuend.' },
      { term: 'Subtrahend', definition: 'The number being subtracted.', example: 'In −7 − (+3), +3 is the subtrahend.' },
      { term: 'Difference', definition: 'The result of subtraction.', example: 'The difference of −7 and +3 is −10.' }
    ],
    explorePrompt: 'Use the equivalence tool to watch a subtraction statement turn into addition. Focus on exactly which sign changes and which number stays unchanged.',
    exploreMode: 'add',
    handsOn: { title: 'Match the Equivalent Statements', instructions: ['Write these subtraction statements on cards: (+4)−(+2), (+4)−(−2), (−4)−(+2), (−4)−(−2).','On four more cards, write the matching addition statements using additive inverses.','Mix the cards and match each subtraction with its equivalent addition.','Solve each pair to verify that both statements have the same result.'], reflect: 'What stays the same every time you rewrite subtraction as addition? What changes?' },
    practiceIntro: 'Use a two-step routine every time: (1) rewrite subtraction as addition of the additive inverse; (2) apply your integer addition strategy.',
    questions: [
      { difficulty: 'foundations', prompt: 'Rewrite (+5) − (+3) as addition.', choices: ['(+5)+(+3)', '(−5)+(−3)', '(+5)+(−3)', '(−5)+(+3)'], answer: 2, hint: 'Keep +5 and add the additive inverse of +3.', explain: '(+5) − (+3) = (+5) + (−3).' },
      { difficulty: 'foundations', prompt: 'Rewrite (−6) − (−2) as addition.', choices: ['(−6)+(+2)', '(+6)+(−2)', '(−6)+(−2)', '(+6)+(+2)'], answer: 0, hint: 'The additive inverse of −2 is +2.', explain: '(−6) − (−2) = (−6) + (+2).' },
      { difficulty: 'standard', prompt: 'Find (+8) − (−5).', choices: ['+3', '−3', '+13', '−13'], answer: 2, hint: 'Rewrite as +8 + +5.', explain: '(+8) − (−5) = (+8) + (+5) = +13.' },
      { difficulty: 'standard', prompt: 'Find (−9) − (+4).', choices: ['−13', '−5', '+5', '+13'], answer: 0, hint: 'Rewrite as −9 + −4.', explain: '(−9) − (+4) = (−9) + (−4) = −13.' },
      { difficulty: 'standard', prompt: 'Find (−11) − (−7).', choices: ['−18', '−4', '+4', '+18'], answer: 1, hint: 'Rewrite as −11 + +7.', explain: 'The signs are different: 11 − 7 = 4 and the greater magnitude is negative, so −4.' },
      { difficulty: 'standard', prompt: 'Which expression is equivalent to (+3) − (−8)?', choices: ['(+3)+(+8)', '(−3)+(+8)', '(+3)+(−8)', '(−3)+(−8)'], answer: 0, hint: 'Keep the minuend and change the subtrahend to its inverse.', explain: 'The additive inverse of −8 is +8.' },
      { difficulty: 'challenge', prompt: 'Find (−15) − (−15).', choices: ['−30', '−15', '0', '+30'], answer: 2, hint: 'Rewrite using the additive inverse.', explain: '(−15) + (+15) = 0.' },
      { difficulty: 'challenge', prompt: 'Which explanation is correct for −2 − (−7) = +5?', choices: ['Both negatives become positive.', 'Subtracting −7 is equivalent to adding +7, so −2 + 7 = +5.', '7 is larger than 2, so the answer must be +5.', 'Subtraction always changes direction twice.'], answer: 1, hint: 'Use the equivalent addition statement.', explain: '−2 − (−7) rewrites as −2 + 7, which equals +5.' }
    ],
    checkQuestions: [
      { difficulty: 'foundations', prompt: 'The additive inverse of +9 is:', choices: ['+9', '−9', '0', '18'], answer: 1, hint: '', explain: 'The additive inverse has the opposite sign and equal magnitude.' },
      { difficulty: 'foundations', prompt: 'Rewrite (−3) − (+6).', choices: ['(−3)+(+6)', '(+3)+(−6)', '(−3)+(−6)', '(+3)+(+6)'], answer: 2, hint: '', explain: 'Keep −3 and add the inverse of +6, which is −6.' },
      { difficulty: 'standard', prompt: 'Find (+12) − (+7).', choices: ['+5', '−5', '+19', '−19'], answer: 0, hint: '', explain: '+12 + (−7) = +5.' },
      { difficulty: 'standard', prompt: 'Find (+4) − (−9).', choices: ['−13', '−5', '+5', '+13'], answer: 3, hint: '', explain: '+4 + (+9) = +13.' },
      { difficulty: 'standard', prompt: 'Find (−14) − (+5).', choices: ['−19', '−9', '+9', '+19'], answer: 0, hint: '', explain: '−14 + (−5) = −19.' },
      { difficulty: 'standard', prompt: 'Find (−14) − (−5).', choices: ['−19', '−9', '+9', '+19'], answer: 1, hint: '', explain: '−14 + (+5) = −9.' },
      { difficulty: 'challenge', prompt: 'Which pair is equivalent?', choices: ['(+7)−(−3) and (+7)+(−3)', '(−7)−(+3) and (−7)+(−3)', '(−7)−(−3) and (+7)+(+3)', '(+7)−(+3) and (−7)+(−3)'], answer: 1, hint: '', explain: 'Subtracting +3 means adding −3, while the minuend stays −7.' },
      { difficulty: 'challenge', prompt: 'A temperature is −6 °C and then decreases by −4 °C in a signed-change model. Evaluate −6 − (−4).', choices: ['−10 °C', '−2 °C', '+2 °C', '+10 °C'], answer: 1, hint: '', explain: '−6 − (−4) = −6 + 4 = −2.' }
    ],
    application: { title: 'Elevation Difference Challenge', scenario: 'A hiker is at −18 m relative to a reference point. A second recorded change is −25 m. The calculation needed is (−18) − (−25).', tasks: ['Rewrite the subtraction as equivalent addition.','Predict whether the result should be positive or negative.','Calculate the difference.','Explain the result using a number-line direction.'], reveal: '(−18) − (−25) = (−18) + (+25). The signs are different and 25 has the greater magnitude, so the result is +7. On a number line, subtracting −25 means moving 25 units right from −18.' },
    summary: ['Subtracting a number is the same as adding its additive inverse.','Keep the minuend unchanged.','Change subtraction to addition and replace the subtrahend with its additive inverse.','Then use the integer-addition strategies from Lesson 1.3.','Equivalent subtraction and addition statements have the same value.'],
    support: ['Write “KEEP → CHANGE → INVERSE” above the expression as a reminder, but always connect it to meaning.','Underline the minuend so you do not accidentally change its sign.','Use a number line to verify examples with two negative signs.'],
    extension: ['Create four subtraction statements with a difference of +5 and write each as equivalent addition.','Explain why (−10) − (−3) is still negative even though two negative signs appear.','Write a subtraction expression whose equivalent addition contains two negative addends.'],
    pat: { title: 'PAT-STYLE THINKING', prompt: 'Which expression is equivalent to (−8) − (−5)? A) (+8) + (+5) B) (−8) + (−5) C) (−8) + (+5) D) (+8) + (−5)', answer: 'C. Keep the minuend −8 and add the additive inverse of −5, which is +5. The result is −3.' },
    review: ['I can rewrite subtraction as addition of an additive inverse.','I can identify which sign changes.','I can calculate the resulting sum accurately.','I can explain the equivalence with a model or number line.'],
    next: { title: 'Unit 1 Complete — Positive & Negative Numbers', slug: null, status: 'planned' }
  }
};