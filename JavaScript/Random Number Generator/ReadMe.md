# Random Number Generator
`Math.random` is a property that generates a random number.

* It's a 16 decimal place number
* Any number between 0 - 9.9999999999999999
* The number will be different every time you run the code

***

## How to make a Dice number Game
By default `Math.random` will give a number 0-0.999~. But if we want a Dice game, we'd want a number between 1-6.

So to do this:
1. We put the generator in a variable
2. Times the variable by 6
3. Round it to the nearest full number
But now, the Dice range is only 0-5, so:
6. We add one to the latest variable value, so we've now got a Dice going 1-6


**Example 1:**
```js
var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);
```

**Example 2:**
```
var n = Math.random();
console.log(Math.floor((n * 6)+1))
```
