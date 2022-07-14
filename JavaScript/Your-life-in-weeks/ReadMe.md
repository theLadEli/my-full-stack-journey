# Your life in weeks
**Aim: Make like a your life in weeks calculator, that shows how many weeks, months and days you have left alive (if you died at 90).**

So to do this, here's what I did:

1. I first created a function called `lifeInWeeks` (note: cammel casing when using multiple worded function/variable names)

2. I made a variable called `weeksLeft`, and in that, I took the number of expected years to live (90), and times that by the number of weeks a year (52) so we get the full number of weeks in a person's lifetime if they live till 90

3. Next, we take the input `age` parameter, and times that by 52, so we get the number of weeks they've lived for so far (approximately), and we deduct that answer from the answer we got in point 2 (the `weeksLeft variable`) to get the remaining years left.

4. And now we do the same for two more variables, `monthsLeft` and `daysLeft`. Obviously we change the equation accordingly; we do `12*90` to get the expected months left, and deduct their `age*12` (months lived so far) to get the expected months left - for the days left we do same but with 365 instead of 12

5. We than want the output of the function to display in the console, so we use `console.log` and than specify what to show (some text and of course the variables)

6. After closing the function we than call it using the function name (`lifeInWeeks`), and parameter (`age`).


### Another - but very similar way of doing this would've been:
```js
function lifeInWeeks(age) {
    var yearsRemaining = 90 - age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;
 
console.log("You have " + months + " months left, " + weeks + " weeks left and " + days + " days left.");
```
