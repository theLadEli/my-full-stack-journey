# FizzBuzz
#### Aim: 
* Make an array with the numbers 1 - 100
* Whenever a number thats divisible by 3 comes up, replace it with `Fizz`
* If a number divisible by 5 comes up, replace it with `Buzz`
* If a numbers divisible by both 3 & 5, it should replace it with `FizzBuzz`
* Of course, if a numbers not divisble by any of those, it should just print the normal number

***

#### Solution:
1. First i'll make an empty array, this is where all the numbers and `FizzBuzz` will be going - I called it `output`
2. I made a variable called `count` with the value of `1`. We'll use this variable to add one to it every time the function is run, so we can have the array going up in increments of 1
3. Create a function and in here all the `if`/`else` statements will go
4. In the function i'll add two lines:
```js
count++;
console.log (output);
```
This way, whenever the function is run, the `count` variable goes up by a value of one, and we'll also have the array printed to console

5. Now we want to add the conditional logic, we'll put these before everything else inside the function
    * We first create something to replace `3` with Fizz: if `count` is modulo `3` with `0` remainder, we want to push to the `output` (the array), "`Fizz`" instead of the number
    * Now we do if divisible by 5: else if (as we're doing this right below the divisible by `3`), `count` modulo `5` with `0` remainder, push "`Buzz"` to the array
    * Next we need something for FizzBuzz, but if we'd add it directly below the modulo `5`, it won't work - as we'd already have replaced the number with `Fizz` or `Buzz`. As javascript works downwords, doing whatevers closest to the top of the page first. So we'll create a new `if` statement, at put this right at the begining of the function, and change the modulo `3` statement, from an `if` to an `else if`.

      Inside of that new function, we'll put: if `count` is modulo 3 with 0 remainder ***and*** modulo 5 with 0 remainder, push to the array "`FizzBuzz`"
    * After all the `if` and `if else` statements are done, we'll create an `else` statement to push to the array the `count` variable, as we just want the number if it's not divisible by 3 or 5
