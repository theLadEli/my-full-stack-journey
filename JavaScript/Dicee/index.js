var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var diceNumber1 = "images/dice" + randomNumber1 + ".png";
var diceNumber2 = "images/dice" + randomNumber2 + ".png";



document.querySelector(".dice-image-1").setAttribute("src", diceNumber1);
document.querySelector(".dice-image-2").setAttribute("src", diceNumber2);

function winnerText(){

    if (randomNumber1 > randomNumber2){
        return("🚩 Player 1 Wins!");
    } else if (randomNumber1 < randomNumber2){
        return("Player 2 Wins! 🚩");
    } else if (randomNumber1 == randomNumber2){
        return("Draw!");
    }

}
document.querySelector("h1").textContent = winnerText();

console.log(diceNumber);
