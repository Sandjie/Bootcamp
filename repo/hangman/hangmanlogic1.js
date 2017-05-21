//global variables, variables and arrays

var fruits = ['apple', 'orange', 'banana', 'pineapple', 'watermelon'  ];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = []; 
var blanks = []; //blanks here
var wrongGuesses = [];

//counters
var winCount = 0;
var lossCount = 0;
var guesses = 9;

//Functions

function startGame(){
    selectedWord = fruits[Math.floor(Math.random() * fruits.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;
}


console.log(selectedWord);