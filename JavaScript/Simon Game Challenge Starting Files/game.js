var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var gameStarted = false;
var level = 0;

$(document).on("keypress", function() {

    if (gameStarted == false) {
        nextSequence();
        gameStarted = true;
    }
});

$(".btn").on("click", function() {
    
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour)

    playSound(userChosenColour)
    animatePress(userChosenColour)

    checkAnswer(userClickedPattern.length-1)

});

function nextSequence() {
    
    userClickedPattern = [];

    level++;
    $("#level-title").text(`Level ${level}`)

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour)

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name) {
    
    var audio = new Audio(`sounds/${name}.mp3`);
    audio.play();

}

function animatePress(currentColour){
    $(`#${currentColour}`).addClass("pressed");

    setTimeout(function() {
        $(`#${currentColour}`).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {

    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]){
        console.log("Success.")

        if (userClickedPattern.length === gamePattern.length) {

            setTimeout(function() {
                nextSequence();
            }, 1000);
        }

    } else {
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart")

        startOver();
    }

}

function startOver() {
    level = 0;
    gamePattern = [];
    gameStarted = false;
}