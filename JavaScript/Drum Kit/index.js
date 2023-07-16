var NumberOfDrums = document.getElementsByClassName("drum-item").length;

// Detecting Button Press
for (let i = 0; i < NumberOfDrums; i++) {
    document.getElementsByClassName("drum-item")[i].addEventListener("click", function() {
        
        var selectedButton = this.innerHTML;
        makeSound(selectedButton);
        drumButtonAnimation(selectedButton);

    });
}

// Detecting Keyboard Press
document.addEventListener("keydown", function(){

    makeSound(event.key.toLowerCase());
    drumButtonAnimation(event.key);
    
})

// Play the Function
function makeSound(key) {

    switch (key) {
        case "w":
            new Audio(`sounds/${key}-drum-sound.mp3`).play();
            break;

        case "a":
            new Audio(`sounds/${key}-drum-sound.mp3`).play();
            break;
            
        case "s":
            new Audio(`sounds/${key}-drum-sound.mp3`).play();
            break;
                        
        case "d":
            new Audio(`sounds/${key}-drum-sound.mp3`).play();
            break;
                        
        case "j":
            new Audio(`sounds/${key}-drum-sound.mp3`).play();
            break;
                        
        case "k":
            new Audio(`sounds/${key}-drum-sound.mp3`).play();
            break;

        case "l":
            new Audio(`sounds/${key}-drum-sound.mp3`).play();
            break;
            
        default:
            break;
    }

}

function drumButtonAnimation(currentKey) {

    document.querySelector(`.${currentKey}`).classList.add("pressed");

    setTimeout(function(){
        document.querySelector(`.${currentKey}`).classList.remove("pressed");
    }
        ,500)
}
