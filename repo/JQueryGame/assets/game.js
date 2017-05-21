//Score keeping //show the # of games won and lost
var wins = 0;
var losses = 0;
var currentScore = 0;
var targetScore = 0;


//Generate Random # at start of game between 19-120
var randomNumber = function(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
  };


var startGame = function(){

//reset current score

currentScore = 0;

targetScore = randomNumber(19, 120);

// //Crystals
var crystals = {
     1: {
       name: "crystal1",
       value: 0
     },
     2: {
       name: "crystal2",
       value: 0
     },
     3: {
       name: "crystal3",
       value: 0
     },
     4: {
       name: "crystal4",
       value: 0
     }
}

 

//  //Random Crystal Number generator

var getRandom =  function (min , max) {
    var random = Math.floor(Math.random() * (max - min)) + min;
    return random;
             
}

crystal1 = getRandom(1 , 12);
crystal2 = getRandom(1 , 12);
crystal3 = getRandom(1 , 12);
crystal4 = getRandom(1 , 12);
console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);  

$("#random-number").html(currentScore);
$("#target-score").html(targetScore);

// Testing Console
  console.log("-----------------------------------");
  console.log("Target Score: " + targetScore);
};

var checkWin = function (){
  if (currentScore > targetScore){
    alert("Sorry you lost.");
    console.log("You lost.");

    lossCount++; 

    $("#lost").html(lossCount);

    startGame();
  }

  else if(currentScore === targetScore){
    alert("Hey you won.");
    console.log("You won.");

    winCount++;
    $("#won").html(winCount);

    startGame();
  }
};

var addValues = function(clickedCrystal) {

 // Change currentScore
  currentScore += clickedCrystal.value;

 // Change the HTML to reflect changes in currentScore
  $("#your-score").html(currentScore);

 // Call the checkWin Function
  checkWin();

 // Testing Console
  console.log("Your Score: " + currentScore);
};

startGame();

$("#crystal1").click(function() {
  addValues(crystal.crystal1);
});
