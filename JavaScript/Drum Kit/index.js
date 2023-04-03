var count = 0;
var numberofDrums = document.querySelectorAll(".drum").length;

while (count < numberofDrums ) {

    //Adds an event listener to the first button, it listens for a click and then calls the onButtonClick() function - Didn't add parenthesis after the function as we don't want the function to be executed when the event listener is added
    document.querySelectorAll(".drum")[count].addEventListener("click", onButtonClick);

    count++;
}


function onButtonClick() {
    alert("I got clicked!")
}