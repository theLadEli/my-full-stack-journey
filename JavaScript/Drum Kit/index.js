function playSound(){
    var selectedButton = this.innerHTML;

    switch (selectedButton) {
        case "W":
            new Audio(`sounds/${selectedButton}-drum-sound.mp3`).play();
            break;

        case "a":
            new Audio(`sounds/${selectedButton}-drum-sound.mp3`).play();
            break;
            
        case "s":
            new Audio(`sounds/${selectedButton}-drum-sound.mp3`).play();
            break;
                        
        case "d":
            new Audio(`sounds/${selectedButton}-drum-sound.mp3`).play();
            break;
                        
        case "j":
            new Audio(`sounds/${selectedButton}-drum-sound.mp3`).play();
            break;
                        
        case "k":
            new Audio(`sounds/${selectedButton}-drum-sound.mp3`).play();
            break;

        case "l":
            new Audio(`sounds/${selectedButton}-drum-sound.mp3`).play();
            break;
            
        default:
            break;
    }
}

var NumberOfDrums = document.getElementsByClassName("drum-item").length;

for (let i = 0; i < NumberOfDrums; i++) {
    document.getElementsByClassName("drum-item")[i].addEventListener("click", playSound);
}

document.addEventListener("keydown", function(){
    let key = event.key;

    if (key == "w"){
        alert("W was pressed.")
    } else {
        alert("Something was pressed.")
    }
})