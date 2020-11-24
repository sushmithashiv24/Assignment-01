var readLineSync = require("readline-sync");
var chalk = require('chalk');

//array of objects containing all questions and answers
let quiz = [{
  question : chalk.redBright("1. India's population, as on 1 March 2011"),
  a: "[a] 1,010,193,422 Billion" ,
  b: "[b] 9,10,193,422 Billion" ,
  c: "[c] 1,210,193,422 Billion" ,
  d: "[d] 1,910,193,422 Billion" ,
  correctAnswer: "c",
},{
  question:chalk.redBright("2. India's largest city by population?"),
  a: "[a] Delhi",
  b: "[b] Mumbai" ,
  c: "[c] Chennai" ,
  d: "[d] Pune" ,
  correctAnswer: "b",
},{
  question:chalk.redBright("3. Number of state and Union Territories in India?"),
  a: "[a] 27 states and 8 Union Territories",
  b: "[b] 29 states and 7 Union Territories",
  c: "[c] 27 states and 6 Union Territories",
  d: "[d] 23 states and 10 Union Territories",
  correctAnswer : "b",
},{
  question:chalk.redBright("4. India's population density?"),
  a: "[a] 382/km",
  b: "[b] 290/km" ,
  c: "[c] 375/km" ,
  d: "[d] 423/km" ,
  correctAnswer: "a",
},{
  question:chalk.redBright("5. India's total area?"),
  a: "[a] 3.7 Million sq.km ",
  b: "[b] 3.0 Million sq.km " ,
  c: "[c] 4.2 Million sq.km " ,
  d: "[d] 3.3 Million sq.km " ,
  correctAnswer: "d",
},{
  question:chalk.redBright("6. Sex ratio of India according to the 2011 census"),
  a: "[a] 940 ",
  b: "[b] 972 " ,
  c: "[c] 845 " ,
  d: "[d] 774 " ,
  correctAnswer: "a",
},{
  question:chalk.redBright("7. What is the name of India's National water Animal?"),
  a: "[a] River Dolphin",
  b: "[b] Crocodile" ,
  c: "[c] Katla Fish" ,
  d: "[d] Green Frog" ,
  correctAnswer: "a",
},{
  question:chalk.redBright("8. Who designed the Indian Parliment in New Delhi?"),
  a: "[a] Gustave Eiffel",
  b: "[b] Le Corbusier" ,
  c: "[c] Edwin Landseer Lutyens" ,
  d: "[d] Bonanno pisano" ,
  correctAnswer: "c",
},{
  question:chalk.redBright("9. Hindi Divas celebrate in India on?"),
  a: "[a] 14th September",
  b: "[b] 12th April" ,
  c: "[c] 10th April" ,
  d: "[d] 14th December" ,
  correctAnswer: "a",
},{
  question:chalk.redBright("10. In which century did Portuguese merchants first land in Goa?"),
  a: "[a] 17th Century",
  b: "[b] 15th Century" ,
  c: "[c] 14th Century" ,
  d: "[d] 16th Century" ,
  correctAnswer: "d",
}
]

//scoreboard Array
// let scoreboard = [{
//   name : "sush",
//   score: 10
// },{
//   name : " aish",
//   score: 8
// }]

var scoreboard = [
  {name : 'sush' , score :'12'},
  {name : 'santy' , score :'10'},
  {name : 'aishu' , score :'08'}
];


//welcome
console.log('-------------------------------');
console.log(chalk.black.bold.bgGreenBright('WELCOME TO INDIA GK QUIZ!!'));
console.log('-------------------------------\n');

//RULES
console.log(chalk.white.bold('Rules and Guidelines:: '));
console.log(chalk.blue.bold("1.There are 10 questions."));


//intial game score
var initialScore = 0;

//function for getting user name

function getUser(){
  var userName = readLineSync.question(chalk.red("\n\nBefore starting the quiz, Please enter your name?\n"));
  console.log("\n\nWelcome",chalk.bold.cyan(userName),"\nyour quiz has started. All the best!!!");
  console.log("RULES : ");
  console.log("Correct answer : +3 " );
  console.log("Wrong Answer : -1");

}
console.log(chalk.yellowBright.underline('scoreboard:'));
console.log(chalk.cyanBright('Name       Score'));
for (var i = 0; i < scoreboard.length; i++) {
    console.log(chalk.greenBright(scoreboard[i].name, '   ', scoreboard[i].score));
}

//function to get confiramation before playing

function confirmPlaying(){
  if(readLineSync.keyInYN(chalk.red("Would you like to play the quiz?\n"))){
    getUser();
    quizFunction();
  }else{
    console.log(chalk.bold.white.bgRedBright('\n\nThankyou!',"have a great day!"));
  }
}

//function call
confirmPlaying();

//function to get question and answer
function quizFunction(){
  for(var i=0;i<quiz.length;i++){
    var questions = quiz[i].question;
    var optionOne = quiz[i].a;
    var optionTwo = quiz[i].b;
    var optionThree = quiz[i].c;
    var optionFour = quiz[i].d;
    console.log(chalk.bold.redBright(questions),"\n");
    console.log(optionOne);
    console.log(optionTwo);
    console.log(optionThree);
    console.log(optionFour);
    var answer = readLineSync.question("\nYour Answer?");
    if(answer.toLowerCase() === quiz[i].correctAnswer){
      initialScore = initialScore + 3;
      console.log(chalk.green("\n HURRRRYYY,Right Answer (+3) \nScore :", initialScore));
      console.log("----------------------\n");

    }
    else{
      initialScore = initialScore - 1;
      console.log(chalk.red("\noooooooppppps,wrong Answer (-1)\nScore :", initialScore));
      console.log("---------------\n");
    }
  }
  console.log(chalk.bgBlueBright.bold.black("\n The quiz has ended,THANK YOU for playing.\n\n"))
  getLeaderBoardScore();
}

//function for comparing currentscore and high score
function getLeaderBoardScore(){
  if(initialScore === scoreboard[0].score){
    console.log(chalk.redBright("Congratulations! you Scored::",initialScore, "points\n you are now on top of our leaderboard table"))
    console.log(chalk.cyan.bold("Hope to see you soon, have a great day!"))
  }
  else{
    console.log(chalk.cyan.bold("Congratulations! you scored::",initialScore,"points\n But you couldnt make it to the top of our leaderboard table"));
    console.log(chalk.redBright("Better luck next time! have a great day!"));
  }
}

