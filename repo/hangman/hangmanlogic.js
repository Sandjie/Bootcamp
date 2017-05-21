
//global variables, variables and arrays

var fruits = ['apple', 'orange', 'banana', 'pineapple', 'watermelon'];
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
    
}
console.log(selectedWord);
startGame();

    guesses = 9;
    wrongGuesses = [];
    blanks = [];

    //blanks for the word to be guessed
    for (var i=0; i< numBlanks; i++){
        blanks.push("_");


    //   console.log(selectedWord);
    //   console.log(lettersinWord);
    //   console.log(blanks);
    //   startGame();
}
function answerBlanks(selectedWord) {
  var lettersinWord = selectedWord.length;
  var result = "";
  for (var i = 0; i<lettersinWord; i++){
    result = "_ " + result;
  }
  return result;
}
console.log(selectedWord);
console.log(answerBlanks(selectedWord));



$(document).ready(function(){
   
     $('#current-word').html(hiddenWord) == answerBlanks(selectedWord);
     
     $(document).keyup(function(event) {//runs whenever a key is pressed
         var hiddenword = answerBlanks(selectedWord);
  console.log(event.key);
  

           console.log("user key pressed ", letterGuessed);
            console.log("selected word ", selectedWord)      
    
    for (var i = 0; i < selectedWord.length; i++) {
    var letter = selectedWord[i];
    var key = event.key;
    
        if(letter === key) {
        $("#current-word").html(selectedWord[i]);
    }
    else {
        $("body").html(result);
    }
}
});
});


  


