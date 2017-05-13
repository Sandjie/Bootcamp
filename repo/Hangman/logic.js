//Global Variables
//Arrays, Variables
var oils = ['lavendar', 'thieves', 'frankincense', 'lemon', 'vetiver', 'melissa', 'ginger', 'oregano' ];
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
    selectedWord = oils[Math.floor(Math.random() * oils.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;
}


    guesses = 9;
    wrongGuesses = [];
    blanks = [];

    //blanks for the word to be guessed
    for (var i=0; i< numBlanks; i++){
        blanks.push("_");
    
      console.log(selectedWord);
      console.log(lettersinWord);
      console.log(blanks);
}


    document.getElementById("wordToGuess").innerHTML = blanks.join("  ");
    document.getElementById("numWrong").innerHTML = wrongGuesses;
    document.getElementById("numLeft").innerHTML = guesses;
    document.getElementById("winCount").innerHTML = winCount; 
    document.getElementById("lossCount").innerHTML = lossCount;
    


  
function checkLetters(letter){
    var isLetterInWord = false;
    for ( i=0; i < numBlanks; i++){
        if (selectedWord[i] == letter); 
            isLetterInWord == true;
}

if (isLetterInWord){
    for (var i=0; i<numBlanks; i++){
    if (selectedWord[i] == letter){
        blanks[i] = letter;
    }
}
}

else {
    wrongLetter.push(letter);
    wrongGuesses--
}
function roundComplete(){
    console.log("Win count: " + winCount + "| Loss count: " + lossCount + "Guesses Left: " + wrongGuesses);
}
//Main process
startGame();

document.onkeyup = function(event)  {
    var lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(lettersGuessed);
    roundComplete();
}

console.log(lettersGuessed)};

startGame();