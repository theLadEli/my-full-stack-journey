// List of all characters to choose from
var characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "?", ".", ",", "$", "£"];

// Getting a random character from the password array
var randomCharacter = characters[Math.floor((Math.random() * characters.length) + 1)];


// Getting a random length of password, minimum of eight characters
var length = Math.floor((Math.random() * 8) + 8);

var password = [];


for (let i = 0; i == length; i++) {
    password.push(randomCharacter)
}

// password.push(randomCharacter)
console.log(password)