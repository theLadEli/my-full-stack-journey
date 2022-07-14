# Capitilizing Name
**Aim: We want to take an input, and make only the first letter uppercase.**

To do this, we'll use `.slice()`

```js
var name = prompt("Whats your name?");
```
First we made a variable with a `prompt` for a name
```js
var firstHalf = name.slice(0,1);
```
Than, to get the first character - so we can capitalize it, we use the `.slice()` property to separate that character individually. And we put it inside a variable called `firstHalf
```js
var secondHalf = name.slice(1,name.length);
```
Here to get the rest of the name, we set the slice to go from the first character (not including it), and go all the way to `name.length` (so it gets the full thing - we used the `.length` property as we don't know how long every name will be - we used this function on the tweet length docs)
```js
alert("Hello " + firstHalf.toUpperCase() + secondHalf.toLowerCase() + "!")
```
And lastly, we concatenate it inside an `alert`, we first have some text, then we input the first letter using the `.toUpperCase()` property so it capitalizes, then we have the rest of the name (and we use the `.toLowerCase()` property just in case a user inputs capitalized).
