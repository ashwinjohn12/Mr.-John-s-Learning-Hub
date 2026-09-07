import type { TopicContent } from './topicContent';

export const unit9Lesson2: TopicContent = {
  hook:'Ten students chose soccer. Is that a lot? It depends: 10 out of 20 is very different from 10 out of 100. How can we compare counts fairly?',
  prerequisites:['Read frequency tables.','Write equivalent fractions.','Connect fractions, decimals, and percentages.'],
  goals:['interpret frequency as relative frequency.','express relative frequency as a fraction, decimal, and percentage.','check that all relative frequencies describe one whole data set.','use relative frequency to describe likelihood and make predictions.'],
  estimatedTime:'80 min',
  materials:['pencil','optional 10-by-10 grid','optional ratio table'],
  successCriteria:['I can compare a category count with the total.','I can express one relative frequency in several equivalent forms.','I can check that all categories total 1 or 100%.','I can use a relative frequency to make a reasonable prediction.'],
  bigIdea:'Relative frequency tells how often an outcome occurred compared with the total number of observations or trials.',
  bigIdeaDetail:'Frequency is a count. Relative frequency is a part-to-whole comparison: category frequency ÷ total frequency. The same relationship can be written as a ratio, fraction, decimal, or percent. Because every category belongs to one whole data set, all relative frequencies together should total 1, or 100%. Relative frequency also lets us compare groups of different sizes and make evidence-based predictions.',
  connection:'Which shows stronger support for an outcome: 12 out of 20 or 20 out of 40? Explain without using only the raw counts.',
  concepts:[
    {title:'Frequency is a count; relative frequency compares to the whole',text:'A count by itself can be misleading when totals differ. Relative frequency compares a category count with the total number of observations or trials.',remember:'relative frequency = frequency ÷ total'},
    {title:'“Out of” is part-to-whole language',text:'If 15 of 50 people choose cats, the relative frequency is 15 out of 50. That can be written 15/50 and simplified.',remember:'The denominator is the total sample size.'},
    {title:'One relationship can have several number forms',text:'A relative frequency can be written as a fraction, decimal, or percent. For example, 10/40 = 0.25 = 25%.',remember:'Different forms, same part of the whole.'},
    {title:'All categories make one whole',text:'If every result belongs to exactly one category, the relative frequencies should add to 1 as fractions/decimals or 100% as percentages.',remember:'Use the total as a built-in error check.'},
    {title:'Relative frequency makes comparisons fairer',text:'Comparing 20 students in one class with 40 in another requires attention to the total. Percentages or equivalent part-to-whole comparisons reveal whether the patterns really match.',remember:'Compare proportions, not just counts.'},
    {title:'Past data can support a prediction',text:'A relative frequency can be scaled to a new total to estimate how often an outcome might occur in a similar future sample.',remember:'A prediction is an estimate, not a guarantee.'}
  ],
  misconceptions:[
    {title:'“The bigger frequency is always more important.”',text:'A bigger count may come from a much bigger group. Compare each count with its total.'},
    {title:'“The denominator is the number in the category.”',text:'The numerator is the category frequency; the denominator is the total number of trials or responses.'},
    {title:'“Fraction, decimal, and percent are different results.”',text:'They can be equivalent representations of the same relative frequency.'},
    {title:'“A prediction tells exactly what will happen.”',text:'Relative frequency supports an estimate based on past data. Future samples can still vary.'}
  ],
  examples:[
    {title:'Example 1 · Count to relative frequency',problem:'In a survey of 50 people, 20 prefer dogs. Express the relative frequency.',steps:['Frequency for dogs = 20.','Total responses = 50.','Write 20/50 and simplify to 2/5.','2÷5=0.4, which is 40%.'],answer:'20/50 = 2/5 = 0.40 = 40%.'},
    {title:'Example 2 · Complete a data set',problem:'Card suits appear 6, 8, 10, and 16 times in 40 draws. What percentage belongs to the 10-card category?',steps:['Use category frequency 10 and total 40.','10/40 simplifies to 1/4.','1/4=0.25=25%.'],answer:'25%.'},
    {title:'Example 3 · Check the whole',problem:'Four categories have relative frequencies 50%, 25%, 15%, and 10%. Is the table complete?',steps:['Add the percentages.','50+25+15+10=100.','A complete set of exclusive categories should total 100%.'],answer:'Yes. The relative frequencies total 100%.'},
    {title:'Example 4 · Predict from data',problem:'5 out of 20 students prefer grapes. About how many out of 80 might prefer grapes in a similar group?',steps:['5/20 = 25%.','80 is four times 20.','Scale 5 by the same factor: 5×4=20.'],answer:'About 20 students.'}
  ],
  vocabulary:[
    {term:'Relative frequency',definition:'A category’s frequency compared with the total number of data values or trials.',example:'12 heads out of 20 tosses has relative frequency 12/20.'},
    {term:'Frequency',definition:'The number of times an outcome or category occurs.',example:'Blue appears 8 times.'},
    {term:'Likelihood',definition:'A description or estimate of how likely an outcome is to occur.',example:'Past data may suggest red is likely about 25% of the time.'},
    {term:'Sample',definition:'The group of observations or trials used to collect data.',example:'40 card draws form a sample of experimental results.'},
    {term:'Part-to-whole',definition:'A comparison between one category and the entire data set.',example:'10 out of 40.'},
    {term:'Prediction',definition:'An estimate of a future result based on a pattern or data.',example:'25% of 80 is about 20.'}
  ],
  explorePrompt:'Use the Relative Frequency Dashboard. Select a data set and a category, then watch frequency turn into a fraction, decimal, percent, 100-grid model, and prediction for a new sample size.',
  exploreMode:'compare',
  handsOn:{title:'Relative Frequency Reporter',instructions:['Collect or choose a small categorical data set.','Find the total number of observations.','Choose one category and write its frequency out of the total.','Convert that relative frequency to a fraction, decimal, and percent.','Repeat for all categories and check that the percentages total 100%.','Use one category to predict a count in a larger similar group.'],reflect:'Why can two groups have different frequencies but the same relative frequency?'},
  practiceIntro:'Always identify the category count and the total before converting. Then ask whether your decimal and percent describe the same part of one whole.',
  questions:[
    {difficulty:'foundations',prompt:'A category occurs 8 times in 20 trials. Which fraction is its relative frequency?',choices:['8/8','8/20','20/8','12/20'],answer:1,hint:'Category count over total count.',explain:'Relative frequency compares 8 occurrences with all 20 trials.'},
    {difficulty:'foundations',prompt:'10 out of 40 equals what percent?',choices:['10%','20%','25%','40%'],answer:2,hint:'10/40=1/4.',explain:'1/4=0.25=25%.'},
    {difficulty:'foundations',prompt:'Which decimal is equivalent to 60%?',choices:['0.06','0.6','6','60'],answer:1,hint:'Percent means out of 100.',explain:'60%=60/100=0.60.'},
    {difficulty:'standard',prompt:'A spinner lands red 12 times in 30 spins. What is the relative frequency as a percent?',choices:['30%','40%','50%','60%'],answer:1,hint:'12÷30.',explain:'12/30=0.4=40%.'},
    {difficulty:'standard',prompt:'Which set of category percentages could represent one complete data set?',choices:['40%,30%,20%','25%,25%,25%,25%','60%,30%,20%','50%,40%,30%'],answer:1,hint:'A complete set totals 100%.',explain:'25+25+25+25=100%.'},
    {difficulty:'standard',prompt:'Class A has 12 of 24 students choose science. Class B has 20 of 40 choose science. Which statement is true?',choices:['Class B has stronger preference because 20>12.','Class A has stronger preference.','Both have relative frequency 50%.','They cannot be compared.'],answer:2,hint:'Compare each count with its total.',explain:'12/24=1/2 and 20/40=1/2, so both are 50%.'},
    {difficulty:'standard',prompt:'If 25% of a sample chose grapes, about how many out of 80 might choose grapes in a similar sample?',choices:['15','20','25','40'],answer:1,hint:'Find one quarter of 80.',explain:'25%=1/4, and 1/4 of 80 is 20.'},
    {difficulty:'challenge',prompt:'A table has 35%, 20%, 25%, and one missing category. What percent is missing?',choices:['10%','15%','20%','25%'],answer:2,hint:'Subtract the known total from 100%.',explain:'35+20+25=80%, so 20% remains.'},
    {difficulty:'challenge',prompt:'Two experiments report 18 successes out of 30 and 24 successes out of 40. Compare the relative frequencies.',choices:['First is greater','Second is greater','They are equal at 60%','Not enough information'],answer:2,hint:'Convert both part-to-whole comparisons.',explain:'18/30=0.60 and 24/40=0.60.'}
  ],
  checkQuestions:[
    {difficulty:'foundations',prompt:'Relative frequency compares a category frequency with...',choices:['the mode only','the total data set','the next category','the largest number'],answer:1,hint:'',explain:'Relative frequency is a part-to-whole comparison.'},
    {difficulty:'foundations',prompt:'5 out of 20 equals...',choices:['5%','20%','25%','40%'],answer:2,hint:'',explain:'5/20=1/4=25%.'},
    {difficulty:'foundations',prompt:'0.35 written as a percent is...',choices:['3.5%','35%','350%','0.35%'],answer:1,hint:'',explain:'0.35×100%=35%.'},
    {difficulty:'standard',prompt:'A coin lands tails 30 times in 50 tosses. Relative frequency of tails is...',choices:['30%','40%','50%','60%'],answer:3,hint:'',explain:'30/50=0.60=60%.'},
    {difficulty:'standard',prompt:'Relative frequencies 0.50,0.25,0.15,0.10 total...',choices:['0.90','1.00','1.10','100.0'],answer:1,hint:'',explain:'0.50+0.25+0.15+0.10=1.00.'},
    {difficulty:'standard',prompt:'16 of 40 card draws are spades. What percent is that?',choices:['16%','25%','40%','60%'],answer:2,hint:'',explain:'16/40=0.4=40%.'},
    {difficulty:'standard',prompt:'A result occurs 15% of the time. About how many times in 200 similar trials?',choices:['15','20','30','45'],answer:2,hint:'',explain:'15% of 200=30.'},
    {difficulty:'challenge',prompt:'Group A: 8 of 20 choose art. Group B: 18 of 45 choose art. Which has greater relative frequency?',choices:['Group A','Group B','They are equal','Cannot tell'],answer:2,hint:'',explain:'8/20=40% and 18/45=40%.'},
    {difficulty:'challenge',prompt:'A table shows 42%,28%,18%, and x%. Find x.',choices:['8%','10%','12%','14%'],answer:2,hint:'',explain:'42+28+18=88%, leaving 12%.'}
  ],
  application:{title:'Data Reporter Challenge',scenario:'You are preparing a one-page report comparing survey and experiment results from groups of different sizes.',tasks:['Identify the total sample size.','Calculate each category’s relative frequency.','Show at least one result as a fraction, decimal, and percent.','Check that the whole table totals 100%.','Use one result to make a prediction for a new sample.'],reveal:'Relative frequency turns raw counts into part-to-whole information that can be compared and scaled fairly.'},
  summary:['Relative frequency compares a category count with the total.','It can be written as a fraction, decimal, or percent.','All categories in a complete data set should total 1 or 100%.','Relative frequency helps compare groups with different totals.','Relative frequency can support predictions for similar future samples.'],
  support:['Write “category count / total” before converting.','Use a 100-grid to connect decimals and percentages visually.','Add all category percentages to check for 100%.'],
  extension:['Create two different-sized data sets with the same relative frequencies.','Design a table with four categories whose percentages total 100% and convert them to decimals.','Explain why a prediction based on relative frequency is reasonable but not guaranteed.'],
  pat:{title:'PAT-STYLE THINKING',prompt:'Class A has 15 students choose basketball out of 30. Class B has 24 students choose basketball out of 48. Mia says Class B prefers basketball more because 24 is greater than 15. Explain the error.',answer:'Mia compared frequencies without considering the different totals. Class A has 15/30=50% and Class B has 24/48=50%, so the relative frequency is the same.'},
  review:['I can calculate relative frequency.','I can express relative frequency as a fraction, decimal, and percent.','I can compare groups using part-to-whole information.','I can use relative frequency to make a prediction.'],
  next:{title:'Analyzing Relative Frequency',slug:'analyzing-relative-frequency',status:'ready'}
};
