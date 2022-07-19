# Tweet Character Count
**Aim: To make a tweet character count knockoff, it should take input, than display a message showing the characters used and how many characters left.**


 ```js
var tweet = prompt("Insert text below");
```
Above is the prompt for the input, we put it into a variable called `tweet`
```js
var tweetCount = tweet.length;
```
Next, to count the characters, we used the `.length` function for the variable `tweet` above. And we placed that function into a new function called `tweetCount`
```js
alert("You wrote " + tweetCount + " characters. You have " + (140 - tweetCount) + " characters left.")
```
Finally we made the alert for the output, here we put some text, the `tweetCount` variable, some more text and than an equation.
The equation is to display the characters left, so we put the max possible characters (`140`) and deducted from that the tweet length (using the `tweetCount` variable we made above.
* Equations inside strings should be put in brackets

## The Outcome

| **Input** | **Output** |
|-------|------|
| *This is a test Tweet* | `You wrote 20 characters. You have 120 characters left.` |
