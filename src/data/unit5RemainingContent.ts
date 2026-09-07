import type { TopicContent } from './topicContent';

export const unit5RemainingContent: Record<string, TopicContent> = {
  'grade-6-math/ratios-rates/equivalent-ratios': {
    hook: 'A smoothie tastes perfect with 2 scoops of fruit for every 3 scoops of yogurt. If you make a bigger batch, how can you keep the taste exactly the same?',
    prerequisites: [
      'Read a ratio in the correct order.',
      'Multiply and divide natural numbers and decimals.',
      'Recognize equivalent fractions as the same amount written in different forms.'
    ],
    goals: [
      'determine whether two ratios are equivalent.',
      'create equivalent ratios by scaling both terms by the same factor.',
      'write and solve proportions with a missing value.',
      'use equivalent ratios to solve real-life problems.'
    ],
    estimatedTime: '80 min',
    materials: ['pencil', 'paper', 'optional counters or linking cubes'],
    successCriteria: [
      'I can explain why equivalent ratios describe the same relationship.',
      'I can multiply or divide both terms by the same factor.',
      'I can tell when two ratios are not equivalent.',
      'I can set up a proportion with quantities in the same order.',
      'I can solve for a missing term and interpret it in context.'
    ],
    bigIdea: 'Equivalent ratios use different numbers to describe the same relationship between two quantities.',
    bigIdeaDetail: 'If the relationship stays the same, both terms of the ratio scale together. For example, 2 : 3, 4 : 6, and 10 : 15 are equivalent because each pair keeps the same comparison. A proportion is an equation that states that two ratios are equivalent. The goal is to see and use the scaling relationship—not to rely on a shortcut.',
    connection: 'Why does doubling only one term of a ratio change the relationship, while doubling both terms keeps it the same?',
    concepts: [
      { title: 'Ratio order matters', text: 'A ratio compares quantities in a specific order. If a paint mix is 2 red : 3 yellow, then 3 : 2 describes yellow to red, which is a different comparison.', remember: 'Label the quantities before you calculate.' },
      { title: 'Equivalent ratios keep the same relationship', text: 'The numbers can change while the comparison stays constant. 1 : 2, 2 : 4, 3 : 6, and 5 : 10 all describe the same relationship.', remember: 'Different numbers can still represent the same relationship.' },
      { title: 'Scale both terms by the same factor', text: 'Multiply or divide both terms by the same non-zero number. From 2 : 3 to 8 : 12, both terms were multiplied by 4.', remember: 'Whatever you do to one term, do to the other.' },
      { title: 'A proportion says two ratios are equivalent', text: 'Writing 2 : 3 = 8 : 12 is a proportion. The equal sign says that the two ratios describe the same proportional relationship.', remember: 'Keep matching quantities in matching positions.' },
      { title: 'Find the scale factor before the missing value', text: 'In 3 : 4 = 15 : ?, first ask how 3 became 15. It was multiplied by 5, so 4 must also be multiplied by 5.', remember: 'Follow the relationship you can see.' },
      { title: 'Rates are ratios with different units', text: 'A rate such as 60 km in 2 h is still a proportional relationship. Equivalent-rate problems can be solved using the same scaling ideas.', remember: 'Units help you keep the order correct.' }
    ],
    misconceptions: [
      { title: '“I can add the same number to both terms.”', text: 'Equivalent ratios are created by multiplying or dividing both terms by the same factor. Adding the same amount usually changes the relationship. For example, 3 : 5 is not equivalent to 6 : 8.' },
      { title: '“If one number doubles, the other can stay the same.”', text: 'That changes the comparison. If 2 : 3 becomes 4 : 3, the first quantity is now larger relative to the second.' },
      { title: '“The order of the quantities does not matter.”', text: 'Ratios are ordered comparisons. 2 red : 3 yellow is not the same statement as 3 red : 2 yellow.' },
      { title: '“I should always cross-multiply.”', text: 'Cross-multiplication can hide the proportional relationship. In Grade 6, look for multiplication or division that scales both terms together.' }
    ],
    examples: [
      {
        title: 'Example 1 · Build equivalent ratios',
        problem: 'Write three ratios equivalent to 2 : 3.',
        steps: ['Multiply both terms by 2 to get 4 : 6.','Multiply both terms by 3 to get 6 : 9.','Multiply both terms by 5 to get 10 : 15.','Check that each ratio used the same factor on both terms.'],
        answer: 'Possible answers: 4 : 6, 6 : 9, 10 : 15'
      },
      {
        title: 'Example 2 · Are they equivalent?',
        problem: 'Are 4 : 6 and 10 : 15 equivalent?',
        steps: ['Divide 4 : 6 by 2 to get 2 : 3.','Divide 10 : 15 by 5 to get 2 : 3.','Both ratios reduce to the same relationship, so they are equivalent.'],
        answer: 'Yes. Both represent 2 : 3.'
      },
      {
        title: 'Example 3 · Find a missing term',
        problem: 'Solve 3 : 4 = 15 : x.',
        steps: ['Compare the first terms: 3 became 15.','The scale factor is ×5.','Scale the second term by the same factor: 4 × 5 = 20.','Interpret the proportion: 3 : 4 = 15 : 20.'],
        answer: 'x = 20'
      },
      {
        title: 'Example 4 · Recipe scaling',
        problem: 'A recipe uses 2 cups of sugar for every 5 cups of flour. How much flour is needed with 6 cups of sugar?',
        steps: ['Write the ratio in the same order: sugar : flour = 2 : 5.','Sugar changes from 2 to 6, which is ×3.','Scale the flour by ×3: 5 × 3 = 15.','Check: 2 : 5 = 6 : 15.'],
        answer: '15 cups of flour'
      }
    ],
    vocabulary: [
      { term: 'Ratio', definition: 'A comparison of two quantities in a specific order.', example: '2 red : 3 yellow.' },
      { term: 'Equivalent ratios', definition: 'Ratios with different terms that represent the same relationship.', example: '2 : 3 and 8 : 12.' },
      { term: 'Scale factor', definition: 'The number used to multiply or divide both terms of a ratio.', example: 'The scale factor from 2 : 3 to 8 : 12 is 4.' },
      { term: 'Proportion', definition: 'A statement showing that two ratios are equivalent.', example: '2 : 3 = 8 : 12.' },
      { term: 'Proportional relationship', definition: 'A relationship in which quantities scale together by the same factor.', example: 'Every 2 cups of concentrate are paired with 5 cups of water.' },
      { term: 'Rate', definition: 'A ratio that compares quantities with different units.', example: '120 km in 2 h.' },
      { term: 'Term', definition: 'One of the quantities in a ratio.', example: 'In 3 : 5, the terms are 3 and 5.' }
    ],
    explorePrompt: 'Use the Equivalent Ratio Builder to scale a relationship, test whether ratios are equivalent, and solve missing-term proportions. Focus on what factor connects the matching quantities.',
    exploreMode: 'compare',
    handsOn: {
      title: 'Build a Ratio Family',
      instructions: ['Choose a starting ratio such as 2 : 3.','Use two colours of counters, cubes, or marks on paper to build the ratio.','Make a second group by doubling both quantities.','Make two more equivalent groups using different scale factors.','Create one non-example by changing only one term and explain why the relationship changed.'],
      reflect: 'What stays the same in every equivalent ratio even though the numbers change?'
    },
    practiceIntro: 'Start by identifying equivalent ratios, then solve missing-term proportions and real-life scaling problems. Use the hint after you have first looked for the scale factor yourself.',
    questions: [
      { difficulty:'foundations', prompt:'Which ratio is equivalent to 2 : 3?', choices:['4 : 5','4 : 6','5 : 6','6 : 8'], answer:1, hint:'Multiply both terms by the same factor.', explain:'2 × 2 = 4 and 3 × 2 = 6, so 4 : 6 is equivalent.' },
      { difficulty:'foundations', prompt:'Which ratio is NOT equivalent to 1 : 4?', choices:['2 : 8','3 : 12','4 : 16','5 : 16'], answer:3, hint:'Check whether both terms used the same scale factor.', explain:'5 : 16 does not use one common scale factor from 1 : 4.' },
      { difficulty:'foundations', prompt:'Complete 3 : 5 = 6 : ___.', choices:['8','10','12','15'], answer:1, hint:'3 became 6. Apply the same change to 5.', explain:'The scale factor is 2, so 5 × 2 = 10.' },
      { difficulty:'standard', prompt:'Are 6 : 9 and 10 : 15 equivalent?', choices:['Yes','No','Only if you add 4','Not enough information'], answer:0, hint:'Reduce each ratio to a simpler relationship.', explain:'6 : 9 and 10 : 15 both reduce to 2 : 3.' },
      { difficulty:'standard', prompt:'Solve 4 : 7 = 12 : x.', choices:['18','20','21','28'], answer:2, hint:'4 became 12. Use that factor on 7.', explain:'The scale factor is 3, so x = 7 × 3 = 21.' },
      { difficulty:'standard', prompt:'A mix uses 3 cups of juice for every 2 cups of water. If 12 cups of juice are used, how much water is needed?', choices:['6 cups','8 cups','10 cups','18 cups'], answer:1, hint:'3 became 12. Scale 2 the same way.', explain:'3 × 4 = 12, so 2 × 4 = 8 cups of water.' },
      { difficulty:'standard', prompt:'A shelter has a cats : dogs ratio of 3 : 4. If there are 20 dogs, how many cats keep the same ratio?', choices:['12','15','16','24'], answer:1, hint:'4 became 20. What is the scale factor?', explain:'4 × 5 = 20, so 3 × 5 = 15 cats.' },
      { difficulty:'challenge', prompt:'Which statement correctly explains why 3 : 5 is not equivalent to 6 : 8?', choices:['Both terms got bigger.','The first term doubled but the second term did not double.','Equivalent ratios must have the same numbers.','You cannot compare ratios larger than 5.'], answer:1, hint:'Compare how each term changed.', explain:'3 doubled to 6, but 5 doubled would be 10, not 8.' },
      { difficulty:'challenge', prompt:'A printer makes 30 pages in 2 min. At the same rate, how many pages in 8 min?', choices:['60','90','120','240'], answer:2, hint:'2 min became 8 min.', explain:'The time was multiplied by 4, so 30 × 4 = 120 pages.' }
    ],
    checkQuestions: [
      { difficulty:'foundations', prompt:'Which is equivalent to 3 : 4?', choices:['6 : 7','6 : 8','9 : 10','12 : 15'], answer:1, hint:'', explain:'Multiplying both terms by 2 gives 6 : 8.' },
      { difficulty:'foundations', prompt:'Complete 2 : 7 = 6 : ___.', choices:['14','18','21','42'], answer:2, hint:'', explain:'2 × 3 = 6, so 7 × 3 = 21.' },
      { difficulty:'foundations', prompt:'Which pair is NOT equivalent?', choices:['1 : 2 and 4 : 8','2 : 5 and 6 : 15','3 : 4 and 9 : 12','2 : 3 and 6 : 8'], answer:3, hint:'', explain:'2 : 3 scaled by 3 would be 6 : 9, not 6 : 8.' },
      { difficulty:'standard', prompt:'Solve 5 : 6 = 20 : x.', choices:['21','24','26','30'], answer:1, hint:'', explain:'5 became 20 by ×4, so 6 × 4 = 24.' },
      { difficulty:'standard', prompt:'Are 12 : 18 and 2 : 3 equivalent?', choices:['Yes','No','Only when written as fractions','Only if the units are different'], answer:0, hint:'', explain:'12 : 18 ÷ 6 = 2 : 3.' },
      { difficulty:'standard', prompt:'A recipe uses 4 cups flour for every 3 cups sugar. With 15 cups sugar, how much flour is needed?', choices:['12','18','20','24'], answer:2, hint:'', explain:'3 × 5 = 15, so 4 × 5 = 20 cups.' },
      { difficulty:'standard', prompt:'For every ticket sold, 5 reward points are earned. How many tickets earned 45 points?', choices:['5','8','9','10'], answer:2, hint:'', explain:'5 points × 9 = 45, so 1 ticket × 9 = 9 tickets.' },
      { difficulty:'standard', prompt:'Which proportion keeps the quantities in matching order?', choices:['3 cats : 4 dogs = 20 dogs : 15 cats','3 cats : 4 dogs = 15 cats : 20 dogs','4 dogs : 3 cats = 15 cats : 20 dogs','3 cats : 4 dogs = 20 cats : 15 dogs'], answer:1, hint:'', explain:'Cats remain first and dogs remain second in both ratios.' },
      { difficulty:'challenge', prompt:'A student says 4 : 7 = 8 : 11 because 4 was added to both terms. What is the best correction?', choices:['Adding the same number always works.','Multiply both terms by the same factor; doubling gives 8 : 14.','Only subtracting can create equivalent ratios.','The original ratio cannot have an equivalent ratio.'], answer:1, hint:'', explain:'Equivalent ratios preserve multiplication or division relationships; doubling 4 : 7 gives 8 : 14.' },
      { difficulty:'challenge', prompt:'A car uses 5 L to travel 50 km. At the same rate, how far could it travel with 8 L?', choices:['70 km','75 km','80 km','100 km'], answer:2, hint:'', explain:'50 km ÷ 5 L = 10 km per litre, so 8 L gives 80 km.' },
      { difficulty:'challenge', prompt:'Which ratio belongs to the family 6 : 10?', choices:['9 : 15','12 : 18','18 : 25','24 : 35'], answer:0, hint:'', explain:'6 : 10 simplifies to 3 : 5, and 9 : 15 also simplifies to 3 : 5.' },
      { difficulty:'challenge', prompt:'If 2 red : 3 yellow makes a paint colour, which mixture has the SAME colour?', choices:['6 red : 8 yellow','8 red : 12 yellow','10 red : 12 yellow','12 red : 15 yellow'], answer:1, hint:'', explain:'2 : 3 × 4 = 8 : 12, so the relationship stays the same.' }
    ],
    application: { title:'Recipe Remix', scenario:'Scale a recipe while keeping the flavour relationship unchanged.', tasks:['Identify the original ratio.','Choose a scale factor.','Scale both ingredients.','Check that the new ratio is equivalent.'], reveal:'Equivalent recipes multiply both ingredient amounts by the same factor.' },
    summary: ['Equivalent ratios describe the same relationship.','Multiply or divide both terms by the same factor.','A proportion shows two ratios are equivalent.','Matching quantities must stay in the same order.','Scale-factor reasoning can solve missing-value and rate problems.'],
    support: ['Label the quantities above each term of the ratio.','Use a ratio table to organize equivalent pairs.','Look for the easier known-to-known scale factor first.','Build ratios with counters or draw groups if the numbers feel abstract.'],
    extension: ['Find four different ratios equivalent to 7 : 9.','Create a real-life proportion whose scale factor is 2.5.','Explain why adding 4 to both terms does not usually create an equivalent ratio.','Create a three-term ratio challenge and describe how all three terms must scale.'],
    pat: { title:'PAT-STYLE THINKING', prompt:'A student claims 3 : 5 and 6 : 8 are equivalent because both numbers increased by 3. Explain the error and give the correct ratio equivalent to 3 : 5 with first term 6.', answer:'Equivalent ratios are made by multiplying or dividing both terms by the same factor. Since 3 was multiplied by 2 to become 6, 5 must also be multiplied by 2. The correct equivalent ratio is 6 : 10.' },
    review: ['I can create equivalent ratios.','I can decide whether two ratios are equivalent.','I can write and solve a proportion.','I can use scale factors to find a missing term.','I can explain why my answer preserves the original relationship.'],
    next: { title:'Unit Rates', slug:'unit-rates', status:'ready' }
  },

  'grade-6-math/ratios-rates/unit-rates': {
    hook: 'Store A sells 3 notebooks for $4.50. Store B sells 5 notebooks for $7.25. The totals are different, so how can you compare the deals fairly?',
    prerequisites: [
      'Create and recognize equivalent ratios.',
      'Solve simple proportions using scale factors.',
      'Divide natural and decimal numbers.'
    ],
    goals: [
      'explain a unit rate as a rate with a second term of 1.',
      'calculate unit prices and speeds.',
      'compare rates fairly using per-one values.',
      'solve rate and proportion problems using a strategy that makes sense.'
    ],
    estimatedTime: '80 min',
    materials: ['pencil', 'paper', 'calculator for checking only'],
    successCriteria: [
      'I can identify the two units in a rate.',
      'I can find an equivalent rate with a second term of 1.',
      'I can state a unit rate using the word “per.”',
      'I can compare deals or speeds using the same unit.',
      'I can use a unit rate or an equivalent ratio to solve a new situation.'
    ],
    bigIdea: 'A unit rate tells how much of one quantity there is for 1 unit of another quantity.',
    bigIdeaDetail: 'Rates compare quantities with different units, such as dollars and notebooks or kilometres and hours. A unit rate makes the second quantity 1, which creates a common basis for comparison. To find it, scale both parts of the rate so the second term becomes 1. Then use that per-one relationship to compare or extend the situation.',
    connection: 'Why is “$4 for 5 apples” harder to compare with “$5.25 for 7 apples” than their prices per apple?',
    concepts: [
      { title:'A rate compares different units', text:'Rates compare quantities measured in different units, such as dollars and items, kilometres and hours, or pages and days.', remember:'Say the units when you read the rate.' },
      { title:'A unit rate has a second term of 1', text:'A rate such as $12 for 3 books can be rewritten as $4 for 1 book. The unit rate is $4 per book.', remember:'Unit rate means “per 1.”' },
      { title:'Divide both quantities to make the second term 1', text:'For $15 : 5 notebooks, divide both terms by 5. The equivalent rate is $3 : 1 notebook.', remember:'This is still equivalent-ratio thinking.' },
      { title:'The order and units communicate meaning', text:'5 km/h and 0.2 h/km describe related information, but speed is usually communicated as distance per time. Choose the form that matches the question and real-world convention.', remember:'Ask: “What do I want to know per 1?”' },
      { title:'Unit rates make comparisons fair', text:'Different package sizes can be compared using cost per item. Different trips can be compared using distance per hour.', remember:'Compare like with like.' },
      { title:'A unit rate can extend the relationship', text:'If a car travels 90 km per hour, then in 3 hours it travels 270 km. First find “per 1,” then scale to the new quantity.', remember:'Per 1 can be a bridge to any amount.' }
    ],
    misconceptions: [
      { title:'“The cheaper total price is always the better deal.”', text:'Package sizes may differ. Compare the cost for the same quantity, often by finding the price per item.' },
      { title:'“I can ignore the units.”', text:'Units tell what each number means. $3/notebook is different from 3 notebooks/$1.' },
      { title:'“The larger unit rate is always better.”', text:'It depends on what is being compared. Lower cost per item is usually better, while greater distance per hour means faster speed.' },
      { title:'“Unit rate is a new trick.”', text:'It is the same equivalent-ratio reasoning from Lesson 5.2, with one term scaled to 1.' }
    ],
    examples: [
      {
        title:'Example 1 · Find a unit price',
        problem:'Five notebooks cost $20. What is the unit price?',
        steps:['Write the rate: $20 : 5 notebooks.','Make the notebook term 1 by dividing by 5.','Divide the cost by the same number: $20 ÷ 5 = $4.','Read the result using “per.”'],
        answer:'$4 per notebook'
      },
      {
        title:'Example 2 · Compare speeds',
        problem:'Janice runs 10 km in 2 h. Mary runs 18 km in 3 h. Who is faster?',
        steps:['Janice: 10 ÷ 2 = 5 km per hour.','Mary: 18 ÷ 3 = 6 km per hour.','Compare the same unit rates: 6 km/h > 5 km/h.'],
        answer:'Mary is faster.'
      },
      {
        title:'Example 3 · Use the unit rate to extend',
        problem:'A car travels 180 km in 2 h. How far will it travel in 3 h at the same rate?',
        steps:['Find the unit rate: 180 ÷ 2 = 90 km/h.','Use the per-one rate for 3 hours: 90 × 3 = 270.','Check that 180 : 2 and 270 : 3 describe the same rate.'],
        answer:'270 km'
      },
      {
        title:'Example 4 · Best buy',
        problem:'Deal A is 2 chocolate bars for $2.50. Deal B is 3 bars for $3.00. Which has the lower unit price?',
        steps:['Deal A: $2.50 ÷ 2 = $1.25 per bar.','Deal B: $3.00 ÷ 3 = $1.00 per bar.','For price, the lower cost per item is the better deal.'],
        answer:'Deal B at $1.00 per bar'
      }
    ],
    vocabulary: [
      { term:'Rate', definition:'A ratio comparing quantities with different units.', example:'180 km in 3 h.' },
      { term:'Unit rate', definition:'A rate with a second term of 1.', example:'60 km per 1 h = 60 km/h.' },
      { term:'Unit price', definition:'The cost for one item or one unit of measure.', example:'$1.25 per chocolate bar.' },
      { term:'Speed', definition:'A rate comparing distance travelled with time.', example:'90 km/h.' },
      { term:'Per', definition:'A word meaning “for each” that is commonly used to read rates.', example:'$3 per litre.' },
      { term:'Proportion', definition:'An equation showing two equivalent ratios or rates.', example:'$4 : 2 bags = $10 : 5 bags.' },
      { term:'Equivalent rate', definition:'A rate that represents the same proportional relationship with different quantities.', example:'60 km : 1 h and 180 km : 3 h.' }
    ],
    explorePrompt: 'Use the Unit Rate Lab to turn different rates into “per 1” comparisons, then decide which deal or speed is better. Keep the units visible so the numbers always have meaning.',
    exploreMode:'compare',
    handsOn: {
      title:'Unit Price Detective',
      instructions:['Choose two package deals from a flyer, receipt, or made-up example.','Write each price-to-quantity rate.','Find the price per 1 item for each deal.','Circle the better unit price and explain why.','Name one non-math reason a shopper might still choose the other option.'],
      reflect:'Why does unit price make packages with different sizes easier to compare?'
    },
    practiceIntro:'Find “per 1” rates first, then use them to compare prices, speeds, and other situations. Challenge questions ask you to decide what the result means, not just calculate it.',
    questions: [
      { difficulty:'foundations', prompt:'What is the unit rate for $12 for 3 books?', choices:['$3/book','$4/book','$9/book','$12/book'], answer:1, hint:'Find the cost for 1 book.', explain:'$12 ÷ 3 = $4, so the unit rate is $4 per book.' },
      { difficulty:'foundations', prompt:'A student reads 60 pages in 4 days. What is the unit rate?', choices:['15 pages/day','20 pages/day','56 pages/day','240 pages/day'], answer:0, hint:'Divide the pages by the days.', explain:'60 ÷ 4 = 15 pages per day.' },
      { difficulty:'foundations', prompt:'A car travels 180 km in 3 h. What is its speed?', choices:['30 km/h','60 km/h','90 km/h','540 km/h'], answer:1, hint:'Find kilometres per 1 hour.', explain:'180 ÷ 3 = 60 km/h.' },
      { difficulty:'standard', prompt:'Which is the better unit price: 3 notebooks for $6 or 5 notebooks for $9?', choices:['3 for $6','5 for $9','They are equal','Cannot compare'], answer:1, hint:'Find dollars per notebook for both.', explain:'$6 ÷ 3 = $2 each; $9 ÷ 5 = $1.80 each, so 5 for $9 is better.' },
      { difficulty:'standard', prompt:'A recipe uses 6 cups flour for 3 eggs. How much flour is needed for 5 eggs?', choices:['8 cups','9 cups','10 cups','12 cups'], answer:2, hint:'First find cups of flour per 1 egg.', explain:'6 ÷ 3 = 2 cups per egg; 2 × 5 = 10 cups.' },
      { difficulty:'standard', prompt:'15 L of fuel cost $45. What is the unit price?', choices:['$2/L','$3/L','$15/L','$30/L'], answer:1, hint:'Find cost per 1 litre.', explain:'$45 ÷ 15 = $3 per litre.' },
      { difficulty:'standard', prompt:'A car travels 90 km/h. How far in 4 h?', choices:['22.5 km','94 km','270 km','360 km'], answer:3, hint:'The rate is already per 1 hour.', explain:'90 km/h × 4 h = 360 km.' },
      { difficulty:'challenge', prompt:'Deal A: 10 pencils for $4.50. Deal B: 6 pencils for $2.40. Which is cheaper per pencil?', choices:['Deal A','Deal B','Equal','Cannot tell'], answer:1, hint:'Compute each price per pencil.', explain:'A is $0.45/pencil; B is $0.40/pencil. Deal B is cheaper.' },
      { difficulty:'challenge', prompt:'Which statement best explains why unit rates help compare deals?', choices:['They make all totals equal.','They compare each deal using the same quantity of 1 unit.','They always make the numbers whole.','They remove the need for units.'], answer:1, hint:'Think about what “per 1” does.', explain:'A unit rate creates a common basis—one item, one hour, one litre, and so on.' }
    ],
    checkQuestions: [
      { difficulty:'foundations', prompt:'What is the unit rate for 24 apples in 3 bags?', choices:['6 apples/bag','8 apples/bag','21 apples/bag','72 apples/bag'], answer:1, hint:'', explain:'24 ÷ 3 = 8 apples per bag.' },
      { difficulty:'foundations', prompt:'What is $18 for 6 items as a unit price?', choices:['$2/item','$3/item','$6/item','$12/item'], answer:1, hint:'', explain:'$18 ÷ 6 = $3 per item.' },
      { difficulty:'foundations', prompt:'A cyclist travels 48 km in 2 h. What is the speed?', choices:['24 km/h','46 km/h','50 km/h','96 km/h'], answer:0, hint:'', explain:'48 ÷ 2 = 24 km/h.' },
      { difficulty:'standard', prompt:'Which deal has the lower unit price?', choices:['4 cans for $6','5 cans for $8.50','They are equal','Cannot compare'], answer:0, hint:'', explain:'$6 ÷ 4 = $1.50/can; $8.50 ÷ 5 = $1.70/can.' },
      { difficulty:'standard', prompt:'A printer makes 30 pages in 2 min. At the same rate, how many pages in 8 min?', choices:['60','90','120','240'], answer:2, hint:'', explain:'The unit rate is 15 pages/min; 15 × 8 = 120 pages.' },
      { difficulty:'standard', prompt:'A baker uses 3 tsp vanilla for 5 cups batter. How much vanilla for 20 cups?', choices:['8 tsp','10 tsp','12 tsp','15 tsp'], answer:2, hint:'', explain:'20 cups is 4 times 5 cups, so 3 × 4 = 12 tsp.' },
      { difficulty:'standard', prompt:'A runner travels 10 km in 2 h and another travels 18 km in 3 h. Who is faster?', choices:['First runner','Second runner','Same speed','Not enough information'], answer:1, hint:'', explain:'The speeds are 5 km/h and 6 km/h, so the second runner is faster.' },
      { difficulty:'standard', prompt:'A landscaper charges $50 for 200 m². What is the unit rate?', choices:['$0.25/m²','$2.50/m²','$4/m²','$250/m²'], answer:0, hint:'', explain:'$50 ÷ 200 = $0.25 per square metre.' },
      { difficulty:'challenge', prompt:'Store A: 2 packs of 8 markers for $7.20. Store B: 3 packs of 10 markers for $10.50. Which is cheaper per marker?', choices:['Store A','Store B','Equal','Cannot compare'], answer:1, hint:'', explain:'A: $7.20 ÷ 16 = $0.45/marker. B: $10.50 ÷ 30 = $0.35/marker.' },
      { difficulty:'challenge', prompt:'A student says 2 apples per $1 is the only correct unit rate for 8 apples for $4. Which response is best?', choices:['Correct; unit rates have only one form.','The rate is valid, but $0.50 per apple may communicate unit price more clearly.','The answer must be $4/apple.','Money cannot be used in unit rates.'], answer:1, hint:'', explain:'Both describe a per-one relationship, but price per item is usually the more useful shopping comparison.' },
      { difficulty:'challenge', prompt:'A car travels 150 km in 2 h. Is 300 km in 4 h an equivalent rate?', choices:['Yes','No','Only if speed changes','Only if the road is straight'], answer:0, hint:'', explain:'Both distance and time doubled, so the rate stayed 75 km/h.' },
      { difficulty:'challenge', prompt:'A rate is 5 kg for $20. Which question is answered by the unit rate $4/kg?', choices:['How many kilograms for $4?','How much 1 kg costs?','How much 5 kg weighs?','How many dollars are in 1 kg?'], answer:1, hint:'', explain:'$20 ÷ 5 kg = $4 per kg, the cost of 1 kg.' }
    ],
    application: { title:'Rate Race', scenario:'Compare deals and speeds using unit rates, then make a decision.', tasks:['Identify the two units.','Find the per-one rate.','Compare like unit rates.','Explain what better means in this context.'], reveal:'Unit rates make comparisons fair because every option is expressed for the same one unit.' },
    summary: ['A rate compares quantities with different units.','A unit rate has a second term of 1.','Unit rates are equivalent rates made by scaling to “per 1.”','Unit price and speed are common unit rates.','Unit rates help compare options and extend proportional relationships.'],
    support: ['Write the units beside every number.','Ask what you want to know “per 1.”','Use a proportion or ratio table if dividing directly feels unclear.','Check by multiplying the unit rate back to the original quantity.'],
    extension: ['Find both dollars per item and items per dollar for the same deal and compare what each tells you.','Create three package deals where the middle total price is the best unit price.','Compare two speeds given in different time intervals.','Explain when a larger unit rate is better and when a smaller unit rate is better.'],
    pat: { title:'PAT-STYLE THINKING', prompt:'Two stores sell the same notebook. Store A sells 3 for $6.00. Store B sells 5 for $9.00. A student chooses Store A because $6 is less than $9. Explain why that comparison is incomplete and identify the better deal.', answer:'The package sizes are different, so total price alone is not a fair comparison. Store A is $2.00 per notebook. Store B is $1.80 per notebook. Store B has the lower unit price and is the better deal if price per notebook is the only factor.' },
    review: ['I can identify and calculate a unit rate.','I can communicate a rate using “per” and correct units.','I can compare unit prices and speeds.','I can use a unit rate to solve for another quantity.','I can explain why a unit-rate comparison is fair.'],
    next: { title:'Unit 5 Review & Math Arcade', slug:'unit-review', status:'ready' }
  }
};
