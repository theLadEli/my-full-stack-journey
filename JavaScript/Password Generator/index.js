
// List of all characters to choose from
var characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "?", ".", ",", "$", "£"];

// Getting a random length of password, minimum of eight characters
var length = Math.floor((Math.random() * 14) + 8);

// Creating the array for the password
var password = [];

// A loop to generate the amount of characters equal to the amount of a random number larger than 8
for (let i = 0; i < length; i++) {
    var randomCharacter = characters[Math.floor((Math.random() * characters.length))];
    password.push(randomCharacter);
}

// The generated password:
var strongPass = password.join('');


// document.getElementById('p').setInnerText = strongPass;
document.querySelector('p').innerHTML = strongPass;

function copyToClipboard() {

    // Select the text field
    // document.querySelector('h1').innerHTML.select();
    // copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(strongPass);
    alert("Copied to clipboard!")
}