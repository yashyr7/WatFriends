const questionList = {
    questionOne: questionOne = {
        questionNo: 1,
        questionName: "q1",
        dataSkippable: "TRUE",
        scoringType: "none",
        questionType: "Text Field",
        question: "What is your preferred name",
        questionOptions: null
    },
    questionTwo: questionTwo = {
        questionNo: 2,
        questionName: "q2",
        dataSkippable: "TRUE",
        scoringType: "none",
        questionType: "Radio Button",
        question: "What are you looking for?",
        questionOptions: ["Platonic Match (friends)", "Romantic Match"]
    },
    questionThree: questionThree = {
        questionNo: 3,
        questionName: "q3",
        dataSkippable: "FALSE",
        scoringType: "none",
        questionType: "Radio Button",
        question: "Which one of these do you look forward to the most?",
        questionOptions: [ "One-night stand", "Hookup", "Friendship (if you chose platonic)", "Committed relationship", "Friends with benefits", "Don’t know/Unsure"]
    },
    questionFourA: questionFourA = {
        questionNo: "4a",
        questionName: "q4",
        dataSkippable: "TRUE",
        scoringType: "none",
        questionType: "radio button",
        question: "How old are you?",
        questionOptions: ["18", "19","20", "21", "22", "23-24", "25-26", ">26"]
    },
    questionFourB: questionFourB = {
        questionNo: "4b",
        questionName: "q5",
        dataSkippable: "FALSE",
        scoringType: "multiplier",
        questionType: "multiselect",
        question: "Match should not be",
        questionOptions: ["18", "19","20", "21", "22", "23-24", "25-26", ">26", "Doesn't matter"]
    },
    questionFive: questionFive = {
        questionNo: 5,
        questionName: "q6",
        dataSkippable: "TRUE",
        scoringType: "none",
        questionType: "radio button",
        question: "Which university do you attend?",
        questionOptions: ["University of Waterloo", "Wilfrid Laurier"]
    },
    questionSix: questionSix = {
        questionNo: 6,
        questionName: "q7",
        dataSkippable: "FALSE",
        scoringType: "multiplier",
        questionType: "radio button",
        question: "Which University Students do you prefer being matched with?",
        questionOptions: ["University of Waterloo", "Wilfrid Laurier", "Doesn't matter"]
    },
    questionSevenA: questionSevenA = {
        questionNo: "7a",
        questionName: "q8",
        dataSkippable: "TRUE",
        scoringType: "none",
        questionType: "radio button",
        question: "Which faculty do you belong to?",
        questionOptions: [ "Health", "Arts", "Engineering","Environment","Mathematics","Science", "Education", "Graduate and Postdoctoral Studies", "Music", "Business and Economics"]
    },
    questionSevenB: questionSevenB = {
        questionNo: "7b",
        questionName: "q9",
        dataSkippable: "FALSE",
        scoringType: "multiplier",
        questionType: "multiselect",
        question: "Which faculties do you not want to get matched with?",
        questionOptions:  [ "Health", "Arts", "Engineering","Environment","Mathematics","Science", 
"Education", "Graduate and Postdoctoral Studies", "Music", "Business and Economics", "Doesn't matter"]
    },
    questionEightA: questionEightA = {
        questionNo: "8a",
        questionName: "q10",
        dataSkippable: "TRUE",
        scoringType: "none",
        questionType: "Radio Button",
        question: "Which study year are you in (if you are currently on coop, list your previous study term)?",
        questionOptions: ["First","Second","Third","Fourth","Pursuing postgraduate degree", 
"Pursuing PHD"]
    },
    questionEightB: questionEightB = {
        questionNo: "8b",
        questionName: "q11",
        dataSkippable: "FALSE",
        scoringType: "multiplier",
        questionType: "multiselect",
        question: "Match should not be?",
        questionOptions: ["First","Second","Third","Fourth","Pursuing postgraduate degree", 
"Pursuing PHD", "Doesn't matter"]
    },
    questionNine: questionNine = {
        questionNo: 9,
        questionName: "q12",
        dataSkippable: "FALSE",
        scoringType: "none",
        questionType: "Radio Button",
        question: "What do you identify as?",
        questionOptions: ["Cisgender male", "Cisgender female","Transgender male", 
"Transgender female","non-binary","Other (sorry if we missed any)"]
    },
    questionTen: questionTen = {
        questionNo: 10,
        questionName: "q13",
        dataSkippable: "TRUE",
        scoringType: "none",
        questionType: "Radio Button",
        question: "Your sexual orientation is",
        questionOptions: ["Homosexual", "Heterosexual", "Bisexual", "Pansexual", "Questioning", "Asexual", "Other (sorry if we missed any)"]
    },
    questionEleven: questionEleven = {
        questionNo: 11,
        questionName: "q14",
        dataSkippable: "FALSE",
        scoringType: "multiplier",
        questionType: "multiselect",
        question: "You would not prefer getting matched to",
        questionOptions: ["Homosexual", "Heterosexual", "Bisexual", "Pansexual", "Questioning", "Asexual", "Other (sorry if we missed any)", "Doesn't matter"]
    },
    questionTwelveA: questionTwelveA = {
        questionNo: "12a",
        questionName: "q15",
        dataSkippable: "TRUE",
        scoringType: "none",
        questionType: "Radio Button",
        question: "How tall are you?",
        questionOptions: ["<140 cm", "140-150 cm", "151-160 cm", "161-170 cm", "171 – 180 cm", "181- 190 cm", "191-200 cm", "201 – 220 cm", "221 – 240 cm", ">240 cm"]
    },
    questionTwelveB: questionTwelveB = {
        questionNo: "12b",
        questionName: "q16",
        dataSkippable: "FALSE",
        scoringType: "multiplier",
        questionType: "multiselect",
        question: "Match should not be",
        questionOptions: ["<140 cm", "140-150 cm", "151-160 cm", "161-170 cm", "171 – 180 cm", "181- 190 cm", "191-200 cm", "201 – 220 cm", "221 – 240 cm", ">240 cm", "Doesn't Matter"]
    },
    questionThirteen: questionThirteen = {
        questionNo: 13,
        questionName: "q17",
        dataSkippable: "TRUE",
        scoringType: "none",
        questionType: "multiselect",
        question: "What is your religion? ",
        questionOptions: [ "Christianity", "Islam", "Unaffiliated", "Hinduism","Buddhism", "Sikhism", "Judaism", "Folk Religions", "Other Religions (Sorry if we missed any)"]
    },
    questionFourteen: questionFourteen = {
        questionNo: 14,
        questionName: "q18",
        dataSkippable: "FALSE",
        scoringType: "multiplier",
        questionType: "multiselect",
        question: "You would prefer not to be matched with someone who practices the following religion(s):",
        questionOptions: [ "Christianity", "Islam", "Unaffiliated", "Hinduism","Buddhism", "Sikhism", 
"Judaism", "Folk Religions","Other religions" , "Doesn't Matter"]
    },
    questionFifteen: questionFifteen = {
        questionNo: 15,
        questionName: "q19",
        dataSkippable: "TRUE",
        scoringType: "none",
        questionType: "MultiSelect",
        question: "What is your culture ?",
        questionOptions: ["Africa","Central Asia","East Asia","Southeast Asia","South Asia","Middle East", "North America","Central America and Caribbean","South America","West Europe","East Europe and Russia","Oceania and South Pacific Islands","Other"]
    },
    questionSixteen: questionSixteen = {
        questionNo: 16,
        questionName: "q20",
        dataSkippable: "FALSE",
        scoringType: "multiplier",
        questionType: "MultiSelect",
        question: "You would prefer not to be matched with someone of the following culture(s):",
        questionOptions:["Africa","Central Asia","East Asia","Southeast Asia","South Asia","Middle East","North America","Central America and Caribbean","South America","West Europe","East Europe and Russia","Oceania and South Pacific Islands","Other" , "Doesn’t matter"]
    },
    questionSeventeen: questionSeventeen = {
        questionNo: 17,
        questionName: "qnone1",
        dataSkippable: "TRUE",
        scoringType: "none",
        questionType: "sentence",
        question: "What is your level of physical activity",
        questionOptions: null
    },
    questionSeventeenPartOne: questionSeventeenPartOne = {
        questionNo: "17a",
        questionName: "q21",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "Workout",
        questionOptions: ["Very Low", "Very High"]
    },
    questionSeventeenPartTwo: questionSeventeenPartTwo = {
        questionNo: "17b",
        questionName: "q22",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "Sports",
        questionOptions: ["Very Low", "Very High"]
    },
    questionEighteen: questionEighteen = {
        questionNo: 18,
        questionName: "q23",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "Importance of partner being fit",
        questionOptions: ["Low Importance", "Very Important"]
    },
    questionNineteen: questionNineteen = {
        questionNo: 19,
        questionName: "q24",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "Level of cleanliness",
        questionOptions: ["Low Importance", "Very Important"]
    },
    questionTwenty: questionTwenty = {
        questionNo: 20,
        questionName: "q25",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "Level of comfort with partner drinking",
        questionOptions: ["Low Comfort", "Very Comfortable"]
    },
    questionTwentyOne: questionTwentyOne = {
        questionNo: 21,
        questionName: "q26",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "Level of comfort with partner smoking",
        questionOptions: ["Low Comfort", "Very Comfortable"]
    },
    questionTwentyTwo: questionTwentyTwo = {
        questionNo: 22,
        questionName: "q27",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "Level of comfort with partner doing drugs",
        questionOptions: ["Low Comfort", "Very Comfortable"]
    },
    questionTwentyThree: questionTwentyThree = {
        questionNo: 23,
        questionName: "qnone2",
        dataSkippable: "TRUE",
        scoringType: "none",
        questionType: "sentence",
        question: "On a peaceful Friday night would you rather",
        questionOptions: null
    },
    questionTwentyThreePartOne: questionTwentyThreePartOne = {
        questionNo: "23a",
        questionName: "q28",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "Go out clubbing",
        questionOptions: ["Very Low", "Very High"]
    },
    questionTwentyThreePartTwo: questionTwentyThreePartTwo = {
        questionNo: "23b",
        questionName: "q29",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "Stay at home cozy",
        questionOptions: ["Very Low", "Very High"]
    },
    questionTwentyFour: questionTwentyFour = {
        questionNo: 24,
        questionName: "q30",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "How active are you on social media platforms?",
        questionOptions: ["Not Active", "Very Active"]
    },
    questionTwentyFive: questionTwentyFive = {
        questionNo: 25,
        questionName: "q31",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "Would your friends describe you to be funny?",
        questionOptions: ["Not Funny ", "Very Funny"]
    },
    questionTwentySix: questionTwentySix = {
        questionNo: 26,
        questionName: "q32",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "What is your preferred state of mind?",
        questionOptions: ["Calm", "Excited"]
    },
    questionTwentySeven: questionTwentySeven = {
        questionNo: 27,
        questionName: "q33",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "How well do you think your ability of managing stress is?",
        questionOptions: ["Not my best trait", "I'm great at this!"]
    },
    questionTwentyEight: questionTwentyEight = {
        questionNo: 28,
        questionName: "q34",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "Are you more of an optimistic or pessimistic person?",
        questionOptions: ["Optimistic", "Pessimistic"]
    },
    questionTwentyNine: questionTwentyNine = {
        questionNo: 29,
        questionName: "q35",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "Radio Button",
        question: "In a room full of people, who are you more likely to be",
        questionOptions: [ "The Quiet person in the corner", "The Entertainer","Chatty Cathy", 
"Stick to a friend you already know"]
    },
    questionThirty: questionThirty = {
        questionNo: 30,
        questionName: "q36",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "How likely are you to you share your emotions and inner feelings with others?",
        questionOptions: ["Not likely","Very likely"]
    },
    questionThirtyOne: questionThirtyOne = {
        questionNo: 31,
        questionName: "q37",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "How likely are you to try Skydiving (or any other adventure sport)?",
        questionOptions: ["Not likely", "Very likely"]
    },
    questionThirtyTwo: questionThirtyTwo = {
        questionNo: 32,
        questionName: "q38",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "How likely are you to admit when it is your mistake?",
        questionOptions: ["Not likely", "Very likely"]
    },
    questionThirtyThree: questionThirtyThree = {
        questionNo: 33,
        questionName: "q39",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "Would you try opening a business of your own, even if it means sacrificing a stable income?",
        questionOptions: ["No", "Yes"]
    },
    questionThirtyFour: questionThirtyFour = {
        questionNo: 34,
        questionName: "q40",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "How creative are you?",
        questionOptions: ["Not very creative", "Very creative"]
    },
    questionThirtyFive: questionThirtyFive = {
        questionNo: 35,
        questionName: "q41",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "Do you consider yourself more emotional or logical?",
        questionOptions: ["Emotional", "Logical"]
    },
    questionThirtySix: questionThirtySix = {
        questionNo: 36,
        questionName: "q42",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "How frugal do you consider yourself with money?",
        questionOptions: ["Money grows on trees","Very Frugal"]
    },
    questionThirtySeven: questionThirtySeven = {
        questionNo: 37,
        questionName: "q43",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "Radio Button",
        question: "Are you Politically Engaged? If yes, which side of the Canadian political spectrum do you lie on?",
        questionOptions: [ "Liberal","Conservative", "Middle", "No opinion"]
    },
    questionThirtyEight: questionThirtyEight = {
        questionNo: 38,
        questionName: "q44",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "Radio Button",
        question: "Favourite mode of communication",
        questionOptions: ["Texting", "Calling", "Anything is fine"]
    },
    questionThirtyNine: questionThirtyNine = {
        questionNo: 39,
        questionName: "q45",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "Radio Button",
        question: "What would your perfect date be?",
        questionOptions: ["Candle light dinner", "Hiking/ Picnic", "Doesn’t have to be extravagant just good food and company", "Long drive and take out food"]
    },
    questionForty: questionForty = {
        questionNo: 40,
        questionName: "q46",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "Do you enjoy sex with no strings attached?",
        questionOptions: ["No", "Yes"]
    },
    questionFortyOne: questionFortyOne = {
        questionNo: 41,
        questionName: "qnone3",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "sentence",
        question: "Love Languages: rate the importance of the following :)",
        questionOptions: null
    },
    questionFortyOnePartOne: questionFortyOnePartOne = {
        questionNo: "41a",
        questionName: "q47",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "Physical touch",
        questionOptions: ["Not Very Important", "Super Important"]
    },
    questionFortyOnePartTwo: questionFortyOnePartTwo = {
        questionNo: "41b",
        questionName: "q48",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "Quality Time",
        questionOptions: ["Not Very Important", "Super Important"]
    },
    questionFortyOnePartThree: questionFortyOnePartThree = {
        questionNo: "41c",
        questionName: "q49",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "Acts of service",
        questionOptions: ["Not Very Important", "Super Important"]
    },
    questionFortyOnePartFour: questionFortyOnePartFour = {
        questionNo: "41d",
        questionName: "q50",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "Words of affirmation",
        questionOptions: ["Not Very Important", "Super Important"]
    },
    questionFortyOnePartFive: questionFortyOnePartFive = {
        questionNo: "41e",
        questionName: "q51",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "Gift Giving",
        questionOptions: ["Not Very Important", "Super Important"]
    },
    questionFortyTwo: questionFortyTwo = {
        questionNo: 42,
        questionName: "q52",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "radio button",
        question: "If you had x-ray vision, you would",
        questionOptions: ["suffer in silence", "sit and smile", "study to be a surgeon"]
    },
    questionFortyThree: questionFortyThree = {
        questionNo: 43,
        questionName: "q53",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "radio button",
        question: "When you get some juicy info about someone:",
        questionOptions: ["keep it to yourself", "tell a few close friends", "tell everyone"]
    },
    questionFortyfour: questionFortyfour = {
        questionNo: 44,
        questionName: "q54",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "radio button",
        question: "Your decisions are mostly based on input from:",
        questionOptions: ["your intuition", "friends", "parents", "your morals and life experience", "a psychic hotline", "eenie meenie minie..."]
    },
    questionFortyfive: questionFortyfive = {
        questionNo: 45,
        questionName: "q55",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "What is more important to you?",
        questionOptions: ["Work & Money", "Love & FriendShip"]
    },
    questionFortysix: questionFortysix = {
        questionNo: 46,
        questionName: "q56",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "radio button",
        question: "What would your arguments be like if you were trying to get off the hook for something?",
        questionOptions: ["Consistent", "Unique", "Detailed", "Technical"]
    },
    questionFortyseven: questionFortyseven = {
        questionNo: 47,
        questionName: "q57",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "radio button",
        question: "Suppose you got into trouble, then according to you, that would most probably be because you:",
        questionOptions: ["Were bored", "Resisted change", "Wanted to know too much", "Couldn’t keep your hands off of things"]
    },
    questionFortyeight: questionFortyeight = {
        questionNo: 48,
        questionName: "q58",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "radio button",
        question: "If you were criticized, then that would most probably be because of?",
        questionOptions: ["Being too impatient", "Being sensitive", "Being structured", "Being argumentative"]
    },
    questionFortynine: questionFortynine = {
        questionNo: 49,
        questionName: "q59",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "radio button",
        question: "What would you most likely do while communicating an idea?",
        questionOptions: ["Provide written proof", "Use props", "Use imagination", "Use charts and graphs"]
    },
    questionFifty: questionFifty = {
        questionNo: 50,
        questionName: "q60",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "radio button",
        question: "If you were asked to prove your point, you would:",
        questionOptions: ["Show it in some way", "Explain your method", "Explain pros and cons", "Explain the benefits"]
    },
    questionFiftyone: questionFiftyone = {
        questionNo: 51,
        questionName: "q61",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "radio button",
        question: "If something in the system did not work, then what would you most likely do?",
        questionOptions: ["Work around it", "Repair it", "Find out why", "Report it", "Ignore it"]
    },
    questionFiftytwo: questionFiftytwo = {
        questionNo: 52,
        questionName: "qnone4",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "sentence",
        question: "Just a few more questions about you: ",
        questionOptions: null
    },
    questionFiftyTwoPartOne: questionFiftyTwoPartOne = {
        questionNo: "52a",
        questionName: "q62",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "You are willing to help a person before anyone else even if you have to go out of your way. ",
        questionOptions: ["Strongly Disagree", "Strongly Agree"]
    },
    questionFiftyTwoPartTwo: questionFiftyTwoPartTwo = {
        questionNo: "52b",
        questionName: "q63",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "You enjoy learning new things, even though they may take time learning",
        questionOptions: ["Strongly Disagree", "Strongly Agree"]
    },
    questionFiftyTwoPartThree: questionFiftyTwoPartThree = {
        questionNo: "52c",
        questionName: "q64",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "You are easily distracted from your goals",
        questionOptions: ["Strongly Disagree", "Strongly Agree"]
    },
    questionFiftyTwoPartFour: questionFiftyTwoPartFour = {
        questionNo: "52d",
        questionName: "q65",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "You like taking responsibility or leading at the front",
        questionOptions: ["Strongly Disagree", "Strongly Agree"]
    },
    questionFiftyTwoPartFive: questionFiftyTwoPartFive = {
        questionNo: "52e",
        questionName: "q66",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "You’d rather work on something you know your good at rather than working on something you might have to put extra effort in ",
        questionOptions: ["Strongly Disagree", "Strongly Agree"]
    },
    questionFiftyTwoPartSix: questionFiftyTwoPartSix = {
        questionNo: "52f",
        questionName: "q67",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "You voice your opinion even if everyone around you may have a different opinion ",
        questionOptions: ["Strongly Disagree", "Strongly Agree"]
    },
    questionFiftyTwoPartSeven: questionFiftyTwoPartSeven = {
        questionNo: "52g",
        questionName: "q68",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "I am unaware of how my actions might impact those around me ",
        questionOptions: ["Strongly Disagree", "Strongly Agree"]
    },
    questionFiftyTwoPartEight: questionFiftyTwoPartEight = {
        questionNo: "52h",
        questionName: "q69",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "I can easily make out how others may be feeling ",
        questionOptions: ["Strongly Disagree", "Strongly Agree"]
    },
    questionFiftyTwoPartNine: questionFiftyTwoPartNine = {
        questionNo: "52i",
        questionName: "q70",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "It may take a while for me to accept changes or different opinions ",
        questionOptions: ["Strongly Disagree", "Strongly Agree"]
    },
    questionFiftyTwoPartTen: questionFiftyTwoPartTen = {
        questionNo: "52j",
        questionName: "q71",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "I am capable of coming up with new ideas in stressful situations",
        questionOptions: ["Strongly Disagree", "Strongly Agree"]
    },
    questionFiftyTwoPartEleven: questionFiftyTwoPartEleven = {
        questionNo: "52k",
        questionName: "q72",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "I am able to bounce back quickly after setbacks",
        questionOptions: ["Strongly Disagree", "Strongly Agree"]
    },
    questionFiftyTwoPartTwelve: questionFiftyTwoPartTwelve = {
        questionNo: "52l",
        questionName: "q73",
        dataSkippable: "FALSE",
        scoringType: "score",
        questionType: "seven options",
        question: "People who are close to me say I am level-headed (calm and sensible in difficult situations)",
        questionOptions: ["Strongly Disagree", "Strongly Agree"]
    }
}
module.exports = questionList;
