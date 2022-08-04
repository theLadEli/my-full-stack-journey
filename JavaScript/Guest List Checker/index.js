var guestList = ["David", "James", "Robert", "John", "Joseph", "Andrew", "Ryan", "Brandon", "Jason", "Justin"];

var name = prompt("What's your name?")

if (guestList.includes(name)) {
    alert("Welcome!")
} else {
    alert("Sorry, you're not invited.")
}
