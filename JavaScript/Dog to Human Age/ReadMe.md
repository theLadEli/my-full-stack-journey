# Dog to Human Age
**Aim: To make a dog to human age prompt

The formula for this is: Dogs Age (in years) minus 2, times it by four plus 21.

```js
var dogAge = prompt("How old is your dog?");
```
Here we set the prompt answer to be the variable `dogAge`
```js
var humanAge = (dogAge - 2) * 4) + 21;
```
Now we want the `humanAge` to be the `dogAge` after the equation. So we take the `dogAge` and first subtract `2` from it, as that was in parenthesis. Next up, also in parentheses so we do it second, is to multiply it by `4`, and lastly, we add `21` to it.
```js
alert("Your dog is " + humanAge + " years old in human years.")
```
And now we set the `humanAge` variable (which is the answer to the equation) to display on the alert.
