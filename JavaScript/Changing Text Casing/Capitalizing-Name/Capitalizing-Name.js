var name = prompt("Whats your name?");

var firstHalf = name.slice(0,1);
var secondHalf = name.slice(1,name.length);

alert("Hello " + firstHalf.toUpperCase() + secondHalf.toLowerCase() + "!")
