# Slice
We can get specific characters from a string using  slice.

## Example One
Here, we'll take the words `Ice Cream ` and extract just the second word (`cream`).
```js
var food = "Ice Cream";
```
So above we just set the text `Ice Cream` to the variable `food`.
```js
food.slice(4,9);
```
Here we're gonna get from the fourth character, until (but not including) the 9th character. So that'd return the word `Cream`.
* This can be useful if for example you wanna take someones full name, and at one point you only want to display their first name

## Example Two
If you'd want just one character, you'd do:
```js
name.slice(4,5)
```
And that'd return just the C.


The slice starts from before the letter, so if you'd want the first letter, you'd do:
```js
name.slice(0.1)
```
So starting from zero and until before the second letter. (And of course it'd return I)
* This can be useful if you'd wanna capitilize it (using toUpperCase function we'll go through later
