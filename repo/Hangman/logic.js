//Global Variables
//Arrays, Variables
var essentialOils = ['lavendar', 'thieves', 'frankincense', 'lemon', 'vetiver', 'melissa', 'ginger', 'oregano' ];
var selectedWord = "";
var lettersInWord = "";
var numBlanks = "";
var blanksAndCorrectGuesses = "";
var wrongGuesses = "";


//counters
var winCount = 0;
var lossCount = 0;
var guesses = 9;

//Functions

function startGame (){
    selectedWord = essentialOils[Math.floor(Math.random() * essentialOils.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;

    guesses = 9;
    wrongGuesses = [];
    blanksAndCorrectGuesses = [];

    //blanks for the word to be guessed
    for (i=0; i<numBlanks; i++){
        blanksAndCorrectGuesses.push("_ ");
    }

    document.getElementById("wordToGuess").innerHTML = blanksAndCorrectGuesses.join("  ");
    document.getElementById("numWrong").innerHTML = wrongGuesses;
    document.getElementById("numLeft").innerHTML = guesses;
    document.getElementById("winCount").innerHTML = winCount; 
    document.getElementById("lossCount").innerHTML = lossCount;
    

console.log (essentialOils);
console.log (lettersInWord);
console.log (numBlanks);

}   
function checkLetters(letter){
    var isLetterInWord = false;
    for ( i=0; i<numBlanks; i++){
        if (selectedWord[i] == letter); 
            isLetterInWord == true;
}

if (isLetterInWord){
    for (var i=0; i<numBlanks; i++){
    if (selectedWord[i] == letter){
        blanksAndCorrectGuesses[i] = letter;
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
    checkLetters(lettersGuessed)
}}