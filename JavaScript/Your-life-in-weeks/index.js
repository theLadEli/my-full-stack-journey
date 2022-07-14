function lifeInWeeks(age) {
  
var weeksLeft = (52 * 90) - (age * 52);
var monthsLeft = (12 * 90) - (age * 12);
var daysLeft = (365 * 90) - (age * 365);

console.log("You have " + monthsLeft + " months left, " + weeksLeft + " weeks left and " + daysLeft + " days left.");

}

lifeInWeeks(51);

