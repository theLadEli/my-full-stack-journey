var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false;
var level = 0;

$(document).on("keydown", function(){
    if (gameStarted == false) {
        nextSequence();
        gameStarted = true;
    } else {
        return;
    }
})

function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);
    console.log(gamePattern)

    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    level++;
    
    $("h1").text(`Level ${level}`);
};

$(".btn").click (function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    console.log(userClickedPattern);
    checkAnswer();
});

function playSound(soundName){
    new Audio(`sounds/${soundName}.mp3`).play();
}

function animatePress(currentColour) {
    $(`#${currentColour}`).addClass("pressed")

    setTimeout(function (){
        $(`#${currentColour}`).removeClass("pressed")          
    }, 100); 
}

function checkAnswer(currentLevel) {

    console.log(`Game Pattern: ${gamePattern}\nUser Pattern: ${userClickedPattern}`)
    nextSequence()

    // if (userClickedPattern == gamePattern) {
    //     nextSequence()
    // } else {
    //     alert("Wrong.")
    // }

}