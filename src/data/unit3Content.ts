import type { TopicContent } from './topicContent';

export const unit3Content: Record<string, TopicContent> = {
  'grade-6-math/number-operations/prime-factorization-divisibility': {
    hook: 'A school has 84 red tiles and 126 blue tiles. The tiles must be arranged into equal-sized groups with none left over. How could the hidden factor structure of 84 and 126 help you choose the group size?',
    prerequisites: ['Recall multiplication and division facts.','Identify factor pairs of familiar natural numbers.','Understand that division is exact when the remainder is 0.'],
    goals: ['classify natural numbers greater than 1 as prime or composite.','break a composite number into prime factors using a factor tree or repeated division.','compare prime factorizations to identify common factors.','use factors and prime factors to explain divisibility.'],
    estimatedTime: '75–100 min',
    materials: ['pencil', 'scrap paper', 'optional calculator for checking only'],
    successCriteria: ['I can explain why a number is prime or composite using its factors.','I can create a complete prime factorization and check it by multiplying.','I can use shared prime factors to reason about common factors.','I can decide whether one natural number divides another and justify my answer.'],
    bigIdea: 'Composite numbers can be broken into prime factors, and those prime factors reveal how the number is built.',
    bigIdeaDetail: 'A factor divides a number with no remainder. Prime numbers cannot be broken into smaller natural-number factors other than 1 and themselves. Composite numbers can. When we continue factoring until every factor is prime, we get a prime factorization. Different factor trees may look different, but they end with the same prime factors. Those factors help us reason about common factors and divisibility.',
    connection: 'If 60 = 2 × 2 × 3 × 5, what can you tell immediately about numbers that divide 60 evenly?',
    concepts: [
      { title: 'Factors build products', text: 'A factor is a natural number that divides another natural number with a remainder of 0. For 24, factor pairs include 1 × 24, 2 × 12, 3 × 8, and 4 × 6.', remember: 'If a number divides exactly, it is a factor.' },
      { title: 'Prime and composite describe factor structure', text: 'A prime number greater than 1 has exactly two factors: 1 and itself. A composite number greater than 1 has more than two factors. Zero and one are neither prime nor composite.', remember: '2 is the only even prime number.' },
      { title: 'Factor trees uncover prime factors', text: 'Start with any factor pair for a composite number. If a factor is composite, split it again. Continue until every branch ends in a prime number. The prime numbers at the ends are the prime factors.', remember: 'A factor tree is complete only when every final factor is prime.' },
      { title: 'Prime factorization is a number’s building plan', text: 'Prime factorization writes a composite number as a product of only prime numbers. For example, 60 = 2 × 2 × 3 × 5. Multiplying the prime factors recreates the original number.', remember: 'Different factor trees for the same number lead to the same prime factorization, although the order may differ.' },
      { title: 'Prime factors reveal divisibility and common factors', text: 'If the factors needed to build one number are contained in the prime factorization of another, the division is exact. Shared prime factors also help identify factors that two numbers have in common.', remember: 'Use the structure of the numbers as evidence instead of guessing from size.' }
    ],
    misconceptions: [
      { title: '“1 is prime because only 1 divides it.”', text: 'A prime number must have exactly two factors: 1 and itself. The number 1 has only one factor, so it is neither prime nor composite.' },
      { title: '“A factor tree must start with a particular factor pair.”', text: 'You may begin with any correct factor pair. A complete tree will still end with the same collection of prime factors.' },
      { title: '“If a number is large, it must be composite.”', text: 'Size does not determine whether a number is prime. For example, 97 is prime because its only natural-number factors are 1 and 97.' },
      { title: '“If two numbers share one prime factor, that is their only common factor.”', text: 'Shared prime factors can combine to make larger common factors. For example, 12 and 18 share a factor of 2 and a factor of 3, so they also share 2 × 3 = 6.' }
    ],
    examples: [
      { title: 'Example 1 · Prime or composite?', problem: 'Is 29 prime or composite?', steps: ['Check possible factor pairs.','29 is not divisible evenly by 2, 3, 4, or 5.','The only factors are 1 and 29.'], answer: '29 is prime.' },
      { title: 'Example 2 · Prime factorization', problem: 'Find the prime factorization of 72.', steps: ['Start with 72 = 8 × 9.','Factor 8 as 2 × 2 × 2 and 9 as 3 × 3.','All final factors are prime.','Check: 2 × 2 × 2 × 3 × 3 = 72.'], answer: '72 = 2 × 2 × 2 × 3 × 3.' },
      { title: 'Example 3 · Divisibility from factors', problem: 'Is 84 divisible by 14?', steps: ['Prime factorize 84: 84 = 2 × 2 × 3 × 7.','Prime factorize 14: 14 = 2 × 7.','The factors 2 and 7 needed to build 14 are both contained in 84.','84 ÷ 14 therefore has remainder 0.'], answer: 'Yes. 84 ÷ 14 = 6.' },
      { title: 'Example 4 · Common factor', problem: 'Use prime factors to find a common factor greater than 1 of 30 and 48.', steps: ['30 = 2 × 3 × 5.','48 = 2 × 2 × 2 × 2 × 3.','Both contain a factor 2 and a factor 3.','2 × 3 = 6, so 6 is a common factor.'], answer: '6 is a common factor of 30 and 48.' }
    ],
    vocabulary: [
      { term: 'Factor', definition: 'A natural number that divides another number exactly, with remainder 0.', example: '6 is a factor of 24 because 24 ÷ 6 = 4.' },
      { term: 'Multiple', definition: 'A product of a number and a natural number.', example: '24 is a multiple of 6 because 6 × 4 = 24.' },
      { term: 'Prime number', definition: 'A natural number greater than 1 with exactly two factors: 1 and itself.', example: '2, 3, 5, 7, and 11 are prime.' },
      { term: 'Composite number', definition: 'A natural number greater than 1 with more than two factors.', example: '12 is composite because 1, 2, 3, 4, 6, and 12 are factors.' },
      { term: 'Prime factor', definition: 'A factor of a number that is also prime.', example: 'The prime factors of 18 are 2 and 3.' },
      { term: 'Prime factorization', definition: 'A number written as a product of prime factors only.', example: '36 = 2 × 2 × 3 × 3.' },
      { term: 'Divisible', definition: 'Able to be divided by a number with a remainder of 0.', example: '45 is divisible by 5 because 45 ÷ 5 = 9.' },
      { term: 'Common factor', definition: 'A factor shared by two or more numbers.', example: '6 is a common factor of 18 and 24.' }
    ],
    explorePrompt: 'Investigate the structure of different numbers. Make a prediction first, then use the tool to check factors, primality, and prime factorization.',
    exploreMode: 'compare',
    handsOn: { title: 'Factor Card Investigation', instructions: ['Choose a composite number from 20 to 100.','Write one factor pair on two cards or scraps of paper.','Keep splitting any composite factor until every card shows a prime number.','Rearrange the prime cards and multiply them to check that they rebuild the starting number.','Try a different first factor pair and compare the final prime factors.'], reflect: 'What stayed the same when you started the factor tree in a different way?' },
    practiceIntro: 'Start with identifying factors and prime/composite numbers, then move into full prime factorizations and divisibility reasoning. Use the explanations to check your thinking, not only your answer.',
    questions: [
      { difficulty: 'foundations', prompt: 'Which number is prime?', choices: ['21', '29', '39', '51'], answer: 1, hint: 'A prime number has exactly two factors.', explain: '29 has only the factors 1 and 29. The others can be factored into smaller natural numbers.' },
      { difficulty: 'foundations', prompt: 'Which pair is a factor pair of 42?', choices: ['4 and 10', '5 and 8', '6 and 7', '3 and 15'], answer: 2, hint: 'Multiply each pair.', explain: '6 × 7 = 42, so 6 and 7 are factors of 42.' },
      { difficulty: 'foundations', prompt: 'Which statement is true about the number 1?', choices: ['It is prime.', 'It is composite.', 'It is both.', 'It is neither prime nor composite.'], answer: 3, hint: 'Count how many factors 1 has.', explain: 'The number 1 has only one factor, so it is neither prime nor composite.' },
      { difficulty: 'standard', prompt: 'What is the prime factorization of 36?', choices: ['2 × 18', '3 × 12', '2 × 2 × 3 × 3', '6 × 6'], answer: 2, hint: 'Every factor in a prime factorization must be prime.', explain: '36 = 2 × 2 × 3 × 3, and every factor shown is prime.' },
      { difficulty: 'standard', prompt: 'Which number is divisible by 15?', choices: ['42', '60', '77', '92'], answer: 1, hint: '15 = 3 × 5. Look for both factors.', explain: '60 = 2 × 2 × 3 × 5, so it contains the factors needed to divide by 15.' },
      { difficulty: 'standard', prompt: '30 = 2 × 3 × 5 and 42 = 2 × 3 × 7. Which is a common factor?', choices: ['5', '6', '7', '15'], answer: 1, hint: 'Combine the prime factors the numbers share.', explain: 'Both factorizations contain 2 and 3, so 2 × 3 = 6 is a common factor.' },
      { difficulty: 'challenge', prompt: 'A number has prime factorization 2 × 2 × 3 × 5. Which number must divide it evenly?', choices: ['8', '9', '10', '25'], answer: 2, hint: 'Which choice can be built from prime factors that are available?', explain: '10 = 2 × 5, and both factors appear in the given prime factorization.' },
      { difficulty: 'challenge', prompt: 'Two students make different factor trees for 90. What should be true when both trees are complete?', choices: ['They must have identical branch shapes.', 'They must start with the same pair.', 'They must end with the same prime factors, possibly in a different order.', 'One tree must be wrong.'], answer: 2, hint: 'Think about what makes prime factorization unique.', explain: 'Different correct trees can look different, but they end with the same prime factors.' }
    ],
    checkQuestions: [
      { difficulty: 'foundations', prompt: 'Which number is composite?', choices: ['13', '17', '19', '21'], answer: 3, hint: '', explain: '21 = 3 × 7, so it has more than two factors.' },
      { difficulty: 'foundations', prompt: 'Which is a factor of 56?', choices: ['5', '7', '9', '11'], answer: 1, hint: '', explain: '56 ÷ 7 = 8 with no remainder.' },
      { difficulty: 'standard', prompt: 'Which is a complete prime factorization of 50?', choices: ['5 × 10', '2 × 25', '2 × 5 × 5', '1 × 2 × 5 × 5'], answer: 2, hint: '', explain: '2, 5, and 5 are all prime and multiply to 50.' },
      { difficulty: 'standard', prompt: 'Is 98 divisible by 14?', choices: ['Yes, because 98 = 14 × 7.', 'No, because 98 is even.', 'No, because 14 is composite.', 'Yes, because every even number is divisible by 14.'], answer: 0, hint: '', explain: '98 ÷ 14 = 7, so the remainder is 0.' },
      { difficulty: 'standard', prompt: '24 = 2 × 2 × 2 × 3 and 36 = 2 × 2 × 3 × 3. Which is a common factor?', choices: ['5', '8', '12', '18'], answer: 2, hint: '', explain: 'Both numbers contain 2 × 2 × 3 = 12 in their prime factorizations.' },
      { difficulty: 'challenge', prompt: 'A number is divisible by 6. Which prime factors must be available in its factorization?', choices: ['2 and 3', '2 and 5', '3 and 5', '2 and 7'], answer: 0, hint: '', explain: '6 = 2 × 3, so a number divisible by 6 must contain at least one factor 2 and one factor 3.' },
      { difficulty: 'challenge', prompt: 'Which statement about prime factorization is correct?', choices: ['It can include the factor 1.', 'It uses only prime factors.', 'It works only for even numbers.', 'It changes depending on the first factor pair.'], answer: 1, hint: '', explain: 'A prime factorization is a product made entirely of prime factors.' },
      { difficulty: 'challenge', prompt: 'What number has prime factorization 2 × 2 × 2 × 3 × 5?', choices: ['60', '90', '120', '240'], answer: 2, hint: '', explain: '2 × 2 × 2 × 3 × 5 = 120.' }
    ],
    application: { title: 'Tile Team Challenge', scenario: 'A design team has 84 square red tiles and 126 square blue tiles. They want equal-sized packs of each colour with no tiles left over.', tasks: ['Find the prime factorization of 84 and 126.','Identify at least three common factors.','Determine the greatest number of equal packs they could make if each pack must receive the same number of red tiles and the same number of blue tiles.','Explain how the prime factors support your answer.'], reveal: '84 = 2 × 2 × 3 × 7 and 126 = 2 × 3 × 3 × 7. Shared factors can be built from 2, 3, and 7; 2 × 3 × 7 = 42. They can make 42 equal packs, each with 2 red tiles and 3 blue tiles.' },
    summary: ['Factors divide exactly with remainder 0.','Prime numbers have exactly two factors; composite numbers have more than two.','Prime factorization breaks a composite number into prime factors only.','Different correct factor trees lead to the same prime factors.','Prime factors help explain common factors and divisibility.'],
    support: ['List factor pairs before deciding whether a number is prime or composite.','Circle every final prime factor on a factor tree.','Multiply your prime factors to check the original number.','For divisibility, prime factorize both numbers and compare what factors are needed.'],
    extension: ['Find two different factor trees for 180 and show why they produce the same prime factorization.','Use prime factors to find all common factors of 72 and 90.','Explain a method for finding the greatest common factor using prime factorizations.'],
    pat: { title: 'PAT-STYLE THINKING', prompt: 'A student says 66 is prime because it is not in the 5-times table. Which response best explains the error? A) Every even number greater than 2 is composite. B) Prime numbers must end in 5. C) 66 is prime because 6 + 6 = 12. D) Only multiples of 5 can be composite.', answer: 'A. Since 66 is even and greater than 2, it has at least the factors 1, 2, 33, and 66, so it is composite.' },
    review: ['I can identify factors and classify prime and composite numbers.','I can find a prime factorization.','I can use prime factors to find common factors.','I can justify divisibility using factor structure.'],
    next: { title: 'Expressing Powers', slug: 'expressing-powers', status: 'ready' }
  },

  'grade-6-math/number-operations/expressing-powers': {
    hook: 'A game designer needs to write 3 × 3 × 3 × 3 × 3 many times in the scoring code. Is there a shorter way to communicate exactly the same multiplication?',
    prerequisites: ['Multiply natural numbers accurately.','Recognize repeated factors in a product.','Find prime factorizations of composite numbers.'],
    goals: ['identify the base and exponent in a power.','explain a power as repeated multiplication of identical factors.','translate between repeated multiplication and power notation.','use powers to write repeated prime factors more compactly.','use the form of a power to reason about divisibility by its base.'],
    estimatedTime: '60–90 min',
    materials: ['pencil', 'scrap paper'],
    successCriteria: ['I can point to the base and explain what it represents.','I can point to the exponent and explain what it counts.','I can expand a power into the correct number of repeated factors.','I can compress repeated factors into power notation.','I can explain why a power is divisible by its base.'],
    bigIdea: 'A power is a compact way to communicate repeated multiplication of the same factor.',
    bigIdeaDetail: 'In a power such as 4³, the base 4 is the repeated factor and the exponent 3 tells how many copies of 4 are multiplied. The exponent does not mean multiply the base by the exponent. Power notation is especially useful when the same prime factor appears many times in a prime factorization.',
    connection: 'Why does 2⁵ mean 2 × 2 × 2 × 2 × 2 rather than 2 × 5?',
    concepts: [
      { title: 'Powers communicate repeated multiplication', text: 'When the same factor appears again and again, power notation gives a shorter representation. For example, 7 × 7 × 7 × 7 can be written as 7⁴.', remember: 'A product can become one power only when the repeated factors are identical.' },
      { title: 'The base is the repeated factor', text: 'In 5³, the base is 5. It tells us which number is being multiplied repeatedly.', remember: 'The base stays full-sized and sits on the main line.' },
      { title: 'The exponent counts the factors', text: 'In 5³, the exponent is 3. It tells us there are three factors of 5: 5 × 5 × 5.', remember: 'The exponent counts copies of the base; it is not another factor to multiply by the base.' },
      { title: 'Prime factorizations can be compressed with powers', text: 'A prime factorization such as 2 × 2 × 2 × 3 × 3 can be written 2³ × 3². This keeps the same factors but communicates them more efficiently.', remember: 'Group identical prime factors before writing powers.' },
      { title: 'A power is divisible by its base', text: 'Because a power contains repeated copies of its base as factors, one copy of the base can always divide the product exactly. For example, 3⁴ = 3 × 3 × 3 × 3, so it is divisible by 3.', remember: 'Reason from the repeated factors, not from a memorized rule.' }
    ],
    misconceptions: [
      { title: '“4³ means 4 × 3.”', text: 'The exponent tells how many 4s are factors. 4³ = 4 × 4 × 4 = 64, not 12.' },
      { title: '“3 × 3 × 4 can be written as 3³.”', text: 'A single power represents repeated identical factors only. Here only the two 3s repeat, so the expression could be written 3² × 4.' },
      { title: '“The base and exponent can be swapped.”', text: 'They have different jobs. 2³ = 8 while 3² = 9, so changing their positions changes the value.' },
      { title: '“2³ × 3² means all five factors are the same.”', text: 'It represents two groups of repeated factors: three 2s and two 3s.' }
    ],
    examples: [
      { title: 'Example 1 · Read a power', problem: 'Identify the base and exponent in 6⁴.', steps: ['The full-sized repeated factor is 6, so 6 is the base.','The small raised number is 4, so 4 is the exponent.','The exponent tells us there are four factors of 6.'], answer: 'Base = 6; exponent = 4.' },
      { title: 'Example 2 · Expand a power', problem: 'Write 3⁵ as repeated multiplication.', steps: ['The base is 3.','The exponent is 5, so write five factors of 3.'], answer: '3 × 3 × 3 × 3 × 3.' },
      { title: 'Example 3 · Compress repeated factors', problem: 'Write 2 × 2 × 2 × 2 × 5 × 5 using powers where possible.', steps: ['There are four identical factors of 2, so write 2⁴.','There are two identical factors of 5, so write 5².','Keep the multiplication between the two groups.'], answer: '2⁴ × 5².' },
      { title: 'Example 4 · Divisibility', problem: 'Explain why 7⁴ is divisible by 7 without evaluating 7⁴.', steps: ['Expand the meaning: 7⁴ = 7 × 7 × 7 × 7.','One factor of 7 can be separated from the product.','The remaining product is still a natural number.'], answer: '7⁴ is divisible by 7 because 7 is one of its factors.' }
    ],
    vocabulary: [
      { term: 'Power', definition: 'An expression that represents repeated multiplication of the same factor.', example: '5³ is a power.' },
      { term: 'Base', definition: 'The repeated factor in a power.', example: 'In 5³, the base is 5.' },
      { term: 'Exponent', definition: 'The small raised number that tells how many times the base appears as a factor.', example: 'In 5³, the exponent is 3.' },
      { term: 'Repeated multiplication', definition: 'A product in which the same factor is multiplied several times.', example: '4 × 4 × 4 is repeated multiplication.' },
      { term: 'Power notation', definition: 'A compact way to write repeated multiplication using a base and exponent.', example: '4 × 4 × 4 = 4³.' },
      { term: 'Prime factorization', definition: 'A number written as a product of prime factors; repeated prime factors can be written as powers.', example: '72 = 2³ × 3².' }
    ],
    explorePrompt: 'Change the base and exponent, predict the repeated multiplication, and compare multiple representations of the same product.',
    exploreMode: 'compare',
    handsOn: { title: 'Power Match Cards', instructions: ['Choose a base from 2 to 6 and an exponent from 2 to 5.','Write the power on one card.','Write its repeated multiplication on a second card.','Write the value on a third card if the calculation is manageable.','Mix several sets and match the three representations.'], reflect: 'Which part of the power tells you what repeats, and which part tells you how many copies to write?' },
    practiceIntro: 'Practise reading, expanding, and writing powers before connecting them back to prime factorization and divisibility.',
    questions: [
      { difficulty: 'foundations', prompt: 'What is the base in 8³?', choices: ['3', '8', '11', '24'], answer: 1, hint: 'The base is the repeated factor.', explain: '8 is the base; the exponent 3 tells how many factors of 8 are multiplied.' },
      { difficulty: 'foundations', prompt: 'What is the exponent in 5⁴?', choices: ['4', '5', '9', '20'], answer: 0, hint: 'Look for the small raised number.', explain: 'The exponent is 4.' },
      { difficulty: 'foundations', prompt: 'Which repeated multiplication matches 3⁴?', choices: ['3 × 4', '4 × 4 × 4', '3 × 3 × 3 × 3', '3 + 3 + 3 + 3'], answer: 2, hint: 'Write four copies of the base.', explain: '3⁴ means four factors of 3.' },
      { difficulty: 'standard', prompt: 'How can 7 × 7 × 7 × 7 × 7 be written as a power?', choices: ['7⁵', '5⁷', '7 × 5', '35²'], answer: 0, hint: 'The repeated factor is the base.', explain: 'The base is 7 and there are five factors, so the power is 7⁵.' },
      { difficulty: 'standard', prompt: 'Which expression is equivalent to 2 × 2 × 2 × 3 × 3?', choices: ['2⁵ × 3²', '2³ × 3²', '2² × 3³', '6⁵'], answer: 1, hint: 'Count each group of identical prime factors separately.', explain: 'There are three 2s and two 3s, giving 2³ × 3².' },
      { difficulty: 'standard', prompt: 'What is the value of 4³?', choices: ['12', '16', '64', '81'], answer: 2, hint: 'Expand it before calculating.', explain: '4³ = 4 × 4 × 4 = 64.' },
      { difficulty: 'challenge', prompt: 'Which statement is true?', choices: ['2⁵ = 2 × 5', '5² = 2⁵', '3⁴ is divisible by 3', '4³ is not divisible by 4'], answer: 2, hint: 'Think about the base as a factor.', explain: '3⁴ contains four factors of 3, so it is divisible by 3.' },
      { difficulty: 'challenge', prompt: '72 = 2 × 2 × 2 × 3 × 3. Which power form is correct?', choices: ['2² × 3³', '2³ × 3²', '6⁵', '2⁵ × 3⁵'], answer: 1, hint: 'Count the repeated 2s and repeated 3s.', explain: 'Three 2s give 2³ and two 3s give 3².' }
    ],
    checkQuestions: [
      { difficulty: 'foundations', prompt: 'In 9², which number is the repeated factor?', choices: ['2', '9', '18', '81'], answer: 1, hint: '', explain: 'The base 9 is the repeated factor.' },
      { difficulty: 'foundations', prompt: 'Which power means 6 × 6 × 6?', choices: ['6²', '3⁶', '6³', '18¹'], answer: 2, hint: '', explain: 'There are three factors of 6, so the power is 6³.' },
      { difficulty: 'standard', prompt: 'Which expansion matches 2⁶?', choices: ['2 × 6', '6 × 6', '2 × 2 × 2 × 2 × 2 × 2', '2 + 2 + 2 + 2 + 2 + 2'], answer: 2, hint: '', explain: 'The exponent 6 means six factors of the base 2.' },
      { difficulty: 'standard', prompt: 'What is 5³?', choices: ['15', '25', '125', '625'], answer: 2, hint: '', explain: '5³ = 5 × 5 × 5 = 125.' },
      { difficulty: 'standard', prompt: 'Write 3 × 3 × 5 × 5 × 5 using powers.', choices: ['3² × 5³', '3³ × 5²', '15⁵', '8⁵'], answer: 0, hint: '', explain: 'Two 3s give 3² and three 5s give 5³.' },
      { difficulty: 'challenge', prompt: 'Why is 11⁴ divisible by 11?', choices: ['Because 4 divides 11.', 'Because 11 is a factor of 11⁴.', 'Because every power is even.', 'Because the exponent is smaller than the base.'], answer: 1, hint: '', explain: '11⁴ = 11 × 11 × 11 × 11, so 11 is one of its factors.' },
      { difficulty: 'challenge', prompt: 'Which pair has different values?', choices: ['2³ and 2 × 2 × 2', '3² and 3 × 3', '4² and 4 × 2', '5³ and 5 × 5 × 5'], answer: 2, hint: '', explain: '4² = 16, while 4 × 2 = 8.' },
      { difficulty: 'challenge', prompt: 'Which is the most compact correct form of 2 × 3 × 3 × 2 × 2 × 3?', choices: ['2³ × 3³', '6⁶', '2⁶ × 3⁶', '5⁶'], answer: 0, hint: '', explain: 'Reorder the factors: there are three 2s and three 3s, so 2³ × 3³.' }
    ],
    application: { title: 'Code Compression Challenge', scenario: 'A game stores repeated multiplication in compact notation. One score rule contains 2 × 2 × 2 × 2 × 3 × 3, and another contains 5 × 5 × 5.', tasks: ['Rewrite each rule using powers.','Identify the base and exponent of every power you wrote.','Evaluate each rule.','Explain why the first score is divisible by both 2 and 3 without using long division.'], reveal: 'The first rule is 2⁴ × 3² = 16 × 9 = 144. The second is 5³ = 125. The first score contains factors of both 2 and 3, so it is divisible by each.' },
    summary: ['A power represents repeated multiplication of identical factors.','The base is the repeated factor.','The exponent tells how many copies of the base are factors.','Repeated prime factors can be compressed using powers.','A power is divisible by its base because the base is one of its factors.'],
    support: ['Circle the base and write the exponent as a count before expanding.','Write repeated factors one at a time and count them carefully.','Group identical prime factors before converting a prime factorization into powers.'],
    extension: ['Compare 2⁶ and 4³ by expanding both. What do you notice?','Find three different powers whose values are less than 200.','Write 360 as a prime factorization and then compress repeated factors using powers.'],
    pat: { title: 'PAT-STYLE THINKING', prompt: 'Which expression has the same value as 3⁴? A) 3 × 4 B) 4 × 4 × 4 C) 3 × 3 × 3 × 3 D) 3 + 3 + 3 + 3', answer: 'C. The base 3 is repeated as a factor four times.' },
    review: ['I can identify a base and exponent.','I can expand a power into repeated multiplication.','I can write repeated multiplication using powers.','I can use powers inside prime factorizations and explain divisibility by the base.'],
    next: { title: 'Operations with Parentheses & Powers', slug: 'operations-parentheses-powers', status: 'ready' }
  },

  'grade-6-math/number-operations/operations-parentheses-powers': {
    hook: 'Two students evaluate 18 − 2 × 5. One gets 80 and the other gets 8. How can the same expression lead to different answers, and what shared convention prevents that?',
    prerequisites: ['Add, subtract, multiply, and divide natural numbers.','Understand parentheses as grouping symbols.','Read and evaluate simple powers.'],
    goals: ['explain why a conventional order of operations is needed.','evaluate operations inside parentheses before operations outside them.','evaluate powers before multiplication, division, addition, and subtraction.','treat multiplication and division as equal-priority operations from left to right.','treat addition and subtraction as equal-priority operations from left to right.','evaluate multi-step numerical expressions and explain each step.'],
    estimatedTime: '75–100 min',
    materials: ['pencil', 'scrap paper'],
    successCriteria: ['I can identify which part of an expression should be evaluated next and explain why.','I can correctly evaluate expressions containing parentheses and powers.','I can work multiplication and division from left to right when both appear.','I can work addition and subtraction from left to right when both appear.','I can find and explain an error in another solution.'],
    bigIdea: 'The conventional order of operations makes numerical expressions unambiguous: grouping first, then powers, then equal-priority operation groups from left to right.',
    bigIdeaDetail: 'An expression can contain several operations, and changing the order can change its value. The convention is: evaluate parentheses first; then powers; then multiplication and division from left to right; then addition and subtraction from left to right. Multiplication does not automatically come before division, and addition does not automatically come before subtraction.',
    connection: 'Why does 24 ÷ 6 × 2 equal 8 rather than 2?',
    concepts: [
      { title: 'Expressions need a shared convention', text: 'Without a common order, people could evaluate the same expression in different ways and get different values. The conventional order makes the meaning consistent.', remember: 'The goal is understanding the structure of the expression, not memorizing a string of letters.' },
      { title: 'Parentheses group operations', text: 'Operations inside parentheses are completed before operations outside them. Parentheses can change the value by changing which calculation happens first.', remember: 'Simplify the inside of each set of parentheses before removing it.' },
      { title: 'Powers come after grouping', text: 'Once parentheses are handled, evaluate powers before multiplication, division, addition, or subtraction.', remember: 'Expand a power if you need to remind yourself what it means.' },
      { title: 'Multiplication and division share priority', text: 'After parentheses and powers, multiplication and division are handled as one equal-priority group. Work from left to right when both occur.', remember: 'In 24 ÷ 6 × 2, divide first because it appears first from the left.' },
      { title: 'Addition and subtraction share priority', text: 'After multiplication and division, addition and subtraction are handled as one equal-priority group from left to right.', remember: 'In 15 − 8 + 3, subtract 8 first because it appears first from the left.' },
      { title: 'Show one justified step at a time', text: 'Rewriting the expression after each operation makes your thinking visible and reduces mistakes. Keep the parts you have not evaluated unchanged.', remember: 'Do one priority step, rewrite, and then decide what comes next.' }
    ],
    misconceptions: [
      { title: '“Multiplication always comes before division.”', text: 'Multiplication and division have equal priority. When both appear, evaluate from left to right.' },
      { title: '“Addition always comes before subtraction because A comes first in an acronym.”', text: 'Addition and subtraction also have equal priority and are evaluated from left to right.' },
      { title: '“Parentheses mean multiply.”', text: 'In this lesson, parentheses are grouping symbols that tell you which operations to complete first.' },
      { title: '“I can do whichever operation looks easiest first.”', text: 'That can change the value. Follow the conventional order and preserve all untouched parts of the expression.' }
    ],
    examples: [
      { title: 'Example 1 · Multiplication before addition', problem: 'Evaluate 7 + 4 × 3.', steps: ['There are no parentheses or powers.','Multiply before the addition: 4 × 3 = 12.','Rewrite: 7 + 12.','Add: 7 + 12 = 19.'], answer: '19.' },
      { title: 'Example 2 · Parentheses change the order', problem: 'Evaluate (7 + 4) × 3.', steps: ['Evaluate inside parentheses: 7 + 4 = 11.','Rewrite: 11 × 3.','Multiply: 11 × 3 = 33.'], answer: '33.' },
      { title: 'Example 3 · Powers included', problem: 'Evaluate 5 + 2 × (3² − 4).', steps: ['Inside the parentheses, evaluate the power first: 3² = 9.','Continue inside parentheses: 9 − 4 = 5.','Rewrite: 5 + 2 × 5.','Multiply: 2 × 5 = 10.','Add: 5 + 10 = 15.'], answer: '15.' },
      { title: 'Example 4 · Equal priority', problem: 'Evaluate 24 ÷ 6 × 2.', steps: ['Multiplication and division share priority.','Read from left to right: 24 ÷ 6 = 4.','Rewrite: 4 × 2.','Multiply: 4 × 2 = 8.'], answer: '8.' },
      { title: 'Example 5 · Error analysis', problem: 'A student says 15 − 8 + 3 = 15 − 11 = 4. What is the first error?', steps: ['Addition and subtraction share priority.','Read from left to right.','The first operation should be 15 − 8 = 7.','Then 7 + 3 = 10.'], answer: 'The student added 8 + 3 before completing the subtraction to its left.' }
    ],
    vocabulary: [
      { term: 'Numerical expression', definition: 'A mathematical phrase made of numbers and operations that represents a value.', example: '8 + 3 × 4 is a numerical expression.' },
      { term: 'Parentheses', definition: 'Grouping symbols that indicate which part of an expression should be evaluated first.', example: '(8 + 3) × 4.' },
      { term: 'Order of operations', definition: 'The conventional sequence used to evaluate a numerical expression.', example: 'Parentheses, powers, multiplication/division left to right, then addition/subtraction left to right.' },
      { term: 'Evaluate', definition: 'Find the value of an expression.', example: 'Evaluate 2³ + 1 to get 9.' },
      { term: 'Equal priority', definition: 'Operations that are handled at the same stage and completed from left to right.', example: 'Multiplication and division have equal priority.' },
      { term: 'Verify', definition: 'Check that a result and the reasoning used to obtain it are correct.', example: 'Rework the expression or use a calculator after solving to verify.' }
    ],
    explorePrompt: 'Choose the next operation before the tool reveals the step. Focus on explaining why that operation has priority.',
    exploreMode: 'compare',
    handsOn: { title: 'Operation Order Cards', instructions: ['Write the expression 6 + 2 × (5 − 2)² on a sheet of paper.','Circle the part that should be evaluated first and complete only that step.','Rewrite the whole expression with that one change.','Repeat until you reach one value.','Create a new expression with parentheses and a power, then trade with a partner or solve it yourself later.'], reflect: 'How did rewriting the untouched parts of the expression help you avoid skipping or changing operations?' },
    practiceIntro: 'Work one step at a time. When an answer is wrong, identify the first step where the conventional order was not followed.',
    questions: [
      { difficulty: 'foundations', prompt: 'Which operation should be completed first in 8 + 3 × 4?', choices: ['8 + 3', '3 × 4', '8 + 4', 'Any operation'], answer: 1, hint: 'There are no parentheses or powers.', explain: 'Multiplication is handled before addition, so 3 × 4 is first.' },
      { difficulty: 'foundations', prompt: 'Which part should be evaluated first in 5 × (9 − 6)?', choices: ['5 × 9', '9 − 6', '5 × 6', '5 + 9'], answer: 1, hint: 'Parentheses group the first calculation.', explain: 'Evaluate the operation inside parentheses first: 9 − 6.' },
      { difficulty: 'foundations', prompt: 'Evaluate 2³ + 4.', choices: ['10', '12', '16', '24'], answer: 1, hint: 'Evaluate the power before adding.', explain: '2³ = 8, then 8 + 4 = 12.' },
      { difficulty: 'standard', prompt: 'Evaluate 18 − 2 × 5.', choices: ['8', '16', '40', '80'], answer: 0, hint: 'Complete multiplication before subtraction.', explain: '2 × 5 = 10, then 18 − 10 = 8.' },
      { difficulty: 'standard', prompt: 'Evaluate 24 ÷ 6 × 2.', choices: ['2', '8', '12', '18'], answer: 1, hint: 'Multiplication and division have equal priority.', explain: 'Work left to right: 24 ÷ 6 = 4, then 4 × 2 = 8.' },
      { difficulty: 'standard', prompt: 'Evaluate 15 − 8 + 3.', choices: ['4', '10', '14', '20'], answer: 1, hint: 'Addition and subtraction share priority.', explain: 'Work left to right: 15 − 8 = 7, then 7 + 3 = 10.' },
      { difficulty: 'challenge', prompt: 'Evaluate 4 + 2 × (3² − 5).', choices: ['8', '12', '16', '20'], answer: 1, hint: 'Inside the parentheses, evaluate the power before subtracting.', explain: '3² = 9, then 9 − 5 = 4, then 2 × 4 = 8, then 4 + 8 = 12.' },
      { difficulty: 'challenge', prompt: 'Which expression has a value of 18?', choices: ['6 + 2 × 3', '(6 + 2) × 3', '6 + 2³', '24 ÷ 6 × 3'], answer: 3, hint: 'Evaluate each using the conventional order.', explain: '24 ÷ 6 × 3 = 4 × 3 = 12, so this choice is not 18. None of the listed expressions equals 18; check the choices carefully.' }
    ],
    checkQuestions: [
      { difficulty: 'foundations', prompt: 'What should happen first in 3 + (8 − 2) × 4?', choices: ['3 + 8', '8 − 2', '2 × 4', '3 + 4'], answer: 1, hint: '', explain: 'Evaluate inside the parentheses first.' },
      { difficulty: 'foundations', prompt: 'Evaluate 3² + 7.', choices: ['13', '16', '18', '21'], answer: 1, hint: '', explain: '3² = 9, then 9 + 7 = 16.' },
      { difficulty: 'standard', prompt: 'Evaluate 30 ÷ 5 × 2.', choices: ['3', '12', '15', '20'], answer: 1, hint: '', explain: 'Division and multiplication share priority: 30 ÷ 5 = 6, then 6 × 2 = 12.' },
      { difficulty: 'standard', prompt: 'Evaluate 20 − 6 + 4.', choices: ['10', '18', '22', '30'], answer: 1, hint: '', explain: 'Addition and subtraction share priority: 20 − 6 = 14, then 14 + 4 = 18.' },
      { difficulty: 'standard', prompt: 'Evaluate 2 × (4 + 3²).', choices: ['22', '26', '34', '50'], answer: 1, hint: '', explain: 'Inside parentheses, 3² = 9, then 4 + 9 = 13, then 2 × 13 = 26.' },
      { difficulty: 'challenge', prompt: 'A student evaluates 36 ÷ 6 × 3 as 36 ÷ 18 = 2. What is the error?', choices: ['They should add first.', 'They multiplied before completing the division to its left.', 'They should evaluate a power first.', 'There is no error.'], answer: 1, hint: '', explain: 'Multiplication and division have equal priority, so work left to right: 36 ÷ 6 = 6, then 6 × 3 = 18.' },
      { difficulty: 'challenge', prompt: 'Which expression has a value of 14?', choices: ['2 + 3 × 4', '(2 + 3) × 4', '2³ + 3 × 4', '20 ÷ 5 + 3'], answer: 0, hint: '', explain: '2 + 3 × 4 = 2 + 12 = 14.' },
      { difficulty: 'challenge', prompt: 'Evaluate 5 + 3 × (2² + 1).', choices: ['20', '25', '30', '40'], answer: 0, hint: '', explain: '2² = 4, then 4 + 1 = 5, then 3 × 5 = 15, then 5 + 15 = 20.' }
    ],
    application: { title: 'Arcade Score Formula', scenario: 'A game awards points using the expression 50 + 4 × (3² − 2). A second game uses (50 + 4) × (3² − 2).', tasks: ['Evaluate the first scoring expression one step at a time.','Evaluate the second expression.','Explain why the parentheses change the scores so much.','Create a third expression using the same numbers that produces a different score.'], reveal: 'First: 3² = 9, 9 − 2 = 7, 4 × 7 = 28, 50 + 28 = 78. Second: 50 + 4 = 54 and 9 − 2 = 7, so 54 × 7 = 378. Parentheses change which operation is grouped and therefore change the value.' },
    summary: ['The conventional order gives a numerical expression one consistent value.','Evaluate parentheses before operations outside them.','Evaluate powers after grouping.','Multiplication and division share priority and are completed left to right.','Addition and subtraction share priority and are completed left to right.','Showing one step at a time makes reasoning easier to verify.'],
    support: ['Underline or box the part you will evaluate next.','Rewrite the full expression after every step.','Say “multiply and divide left to right” rather than treating them as separate priorities.','Start with expressions that have only two operation levels, then add parentheses and powers.'],
    extension: ['Insert parentheses into 4 + 6 × 3 − 2 to create two different values.','Create an expression with a power whose value is exactly 50.','Write a wrong solution to a multi-step expression and then annotate the first error.'],
    pat: { title: 'PAT-STYLE THINKING', prompt: 'Which is the correct first step for 6 + 2 × (5 − 2)²? A) 6 + 2 B) 2 × 5 C) 5 − 2 D) 2²', answer: 'C. Operations inside parentheses are evaluated first, so begin with 5 − 2.' },
    review: ['I can explain the purpose of the conventional order of operations.','I can evaluate parentheses and powers in the correct sequence.','I can handle multiplication/division and addition/subtraction as equal-priority groups.','I can show and verify each step of a multi-step expression.'],
    next: { title: 'Unit 3 Review & Math Arcade', slug: 'unit-review', status: 'ready' }
  }
};
