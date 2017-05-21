// $(document).ready(function () {
    
    //VARIABLES//
    //========================================================================//

    var matchNumber = "";

    var crystals = {

        crystal1: {
            name: "crystal1",
            value: 0
        },
        crystal2: {
            name: "crystal2",
            value: 0
        },
        crystal3: {
            name: "crystal3",
            value: 0
        },
         crystal4: {
            name: "crystal4",
            value: 0
        },
        
    }

    //Scores
    var winCounter = 0;
    var lossesCounter = 0;
    var currentScore = 0;

    
    //FUNCTIONS//
        //========================================================================//

function startGame(params) {

    var currentScore = 0;
    var getRandom =  function (min , max) {
        var random = Math.floor(Math.random() * (max - min)) + min;
        return random;
    }

    crystal1.value = getRandom(1 , 12);
    crystal2.value = getRandom(1 , 12);
    crystal3.value = getRandom(1 , 12);
    crystal4.value = getRandom(1 , 12);
    console.log(crystal4.value);

    matchNumber = getRandom(19 , 120);
    console.log(matchNumber);

    $("#match").text(matchNumber); 

    
    }

startGame();
//Ocn click events

$(".crystal1").on("click" , function () {
    currentScore += crystals.crystal1.value;
    $("#score").text(currentScore);
});

$(".crystal2").on("click" , function () {
    currentScore += crystals.crystal2.value;
    $("#score").text(currentScore);
});

$(".crystal3").on("click" , function () {
    currentScore += crystals.crystal3.value;
    $("#score").text(currentScore);
});

$(".crystal4").on("click" , function () {
    currentScore += crystals.crystal4.value;
    $("#score").text(currentScore);
});



//end of (document).ready


