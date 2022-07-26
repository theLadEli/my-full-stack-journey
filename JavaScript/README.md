# JS Basics

In this repo i'll have all my JS projects with any relevant documentation and some background documentation as well.

In almost every folder you'll find a `.js` file containing the code of the final project, and a `.md` file (often called `ReadMe.md`), where i document what i was trying to achieve, how i did it, explain the process and any other relevant information.

This (specific) File just contains my notes on Basic JS!

## Table of Contents
- [JS Basics](#js-basics)
  * [Data Types](#data-types)
  * [Variables:](#variables)
    + [Naming Variables](#naming-variables)
    + [Advanced Variables](#advanced-variables)
    + [Calling the variable](#calling-the-variable)
  * [Concatenation](#concatenation)
  * [Commenting on JS](#commenting-on-js)
  * [Working with Numbers](#working-with-numbers)
    + [Bidmas](#bidmas)
    + [Rounding Down](#rounding-down)
    + [Rounding to the Nearest Full Number](#rounding-to-the-nearest-full-number)
    + [Elevating by the Power of a Number](#elevating-by-the-power-of-a-number)
  * [Functions](#functions)
    + [How to create a function:](#how-to-create-a-function-)
    + [How to call a function](#how-to-call-a-function)
    + [Creating Function Parameters](#creating-function-parameters)
  * [Comparators](#comparators)
  * [Conditional Logic](#conditional-logic)
    + [If Else](#if-else)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

***

## Data Types

A String is a Data Type of words; `str`

Numbers are for numbers...; `num`

Boolean is `True` or `False`

***

## Variables:

`var myName = "Eli";`

`var` is the Keyword

`myName` is the variable name

`Eli` is the value

So now the computer knows that `Eli` is the value of `myName`

Later on, I can change the value of myName by using `myName = "New Name Here"`
I don't need to use var as the variable has already been created, we're just changing it.

### Naming Variables

**When naming variables:**
* Give them meaningful names
* You **can't** call your variable a keyword (`var`)
* You **can** have a variable name that *contains* a keyword (`myVar`)
* Your variable **can't be a number** (tho **can contain them**)
* **Can't have spaces**
* Names can only contain letters (ABC), numbers (123), the dollar sign ($), and underscore (_)
* If multiple words, **use caps for start of new words**

### Advanced Variables

A variable can also be a query.

**For example:**
```js
var yourName = prompt("What is your name?");
```
We've set the variable of yourName to whatever the user inputs inside the prompt.

### Calling the variable

```js
var myName = "Eli";
var yourName = prompt("What is your name?");
alert("My name is " + myName + ". Welcome to the site, " + yourName + "!");
```
Here we first made the variable `myName` with the value `Eli`, than we made a variable `yourName` with the value of whatever the user inputs in the `prompt`.
Now to call the variable we made an `alert`, added some text, called `myName`, added more text than called `yourName`.
* Notice how a plus sign (+) is used between all data types in a string.

***

## Concatenation

When writing a string, it'd automatically be linked together.

**Example 1:**
```js
alert("hello" + "world")
```
Would show as:
`helloworld`
<br><br>
**You could do:** `alert("hello" + " " + "world")`<br>
**or** `alert("hello " + "world")`<br>
**or simply just** `alert("hello world")`<br>

**Example 2:**
```js
var name = "Eli"
var message = "Hello"
 
alert(message + " " + name)
```
This would give an alert that says `Hello Eli`

***

## Commenting on JS
on JS use two forward slashes (//) to comment something out.

**Example:**
```js
console.log("Hello!")
// This prints Hello! to console, so only the coder can see it
```
The second line will be ignored when running this code.

***

## Working with Numbers
| Function | Sign | Description | Example |
|---------|---------|---------| ---------- |
| Addition | `+` | Used to add two numbers togethor | `5 + 7` = `12` |
| Subtraction| `-` | Used to subtract from a number | `7 - 5` = `2` |
| Multiplication | `*` | Used to multiply two numbers | `7*5` = `35` |
| Division | `/` | Used to devide a number | `7 / 5` = `1.4` |
| Modulo | `%` | Used to give us the remaining number if you divide it by something | `7 % 5` = `2`* |

<sub>* 5 goes into 7 once and there's 2 remainder.</sub>

### Bidmas
**In programming we have Bidmas. So if we have an addition and multiplication, the multiplication takes priority.**
Multiplication and division always take precedence over addition and subtraction

**Example One:**
```js
var cost = 3 + 5 * 2;
```
Over here, as multiplication takes precedence, we do that first. So it'd be `5 * 2` which equals `10`, and then we add `3`. So the answer to this would be `13`.

**Example Two:**
If you wanted to do the addition or subtraction first, you'd put them in parenthesis.
```js
var cost = (3 + 5) * 2;
```
Now that it's in parenthesis, we do it first. So `3 + 5` equals 8, and times that by `2` and we get 16.
* **Sometimes, even when we know rules of Bidmas anyway make it apply, we use parenthesis just to make reading it clearer**


### Rounding Down
The Math.floor property rounds a number down

So if we have these few lines of code:
```js
var addition = 7/3;
console.log("The answer is " + addition)
```
And we want the `addition` variable rounded down to the nearest full number, we'd do:
```js
var addition = 7/3;
console.log("The answer is " + Math.floor(addition) + "(rounded down to the nearest full number)")
```

### Rounding to the Nearest Full Number
To round a number with JS we use the `Math.round()` property. It rounds the number to the nearest full number.

**Example:**
```js
var roundThisNumber = Math.pow(3.121592653589793236);
console.log(roundThisNumber);
This would return the number 3.
```
It can also round up, depending on whats the nearest full number.


### Elevating by the Power of a Number
To elevate by the power we use the `Math.pow(base, elevation)` property.
You put the number you want to round in the `base` parameter, and "to the power of" in the `elevation` parameter.

**Example 1:**
```js
console.log(Math.pow(13,2));
```

**Example 2:**
```js
var x = 13;
var powerThisNumber = Math.pow(x, 2); 
console.log(powerThisNumber);
```
This would give us `169`.

***

## Functions
How to create a function:
```
function functionsName() {
  }```

**Example:**
```js
function getMilk(){
    alert("leaveHouse");
    alert("moveRight");
    alert("moveUp");
    alert("moveUp");
    alert("moverRight");
    alert("buyMilk");
}
```
Now, whenever i call the function `getMilk` it'd perform all the actions inside it (in our case, the six alerts).
* Can use `console.log` instead of alert if you don't wanna keep closing popups when testing xD

### How to create a function:
1. First type `function` (we only do this when we're creating functions - not when we're calling them
2. Give the function a name (the same rules as [naming variables](#naming-variables))
3. Add parameters or keep the rounded brackets `()` empty
4. Open curly brackets `{` and put the function's actions inside them and close the curly brackets `}`

### How to call a function
To call the function, we just do:
```js
getMilk();
```
In this case, as we never made any function parameters when making it, we just keep the rounded brackets empty

### Creating Function Parameters
```js
function getMilk(bottles) {
```
To give the function some parameters, we first create the function as normal, but inside the rounded brackets we put the parameter name there. If there are multiple parameters, seperate them with a comma. Now, when we call the function we need to specify the parameters, in my case - number of bottles we want
**Example:**
```js
function getMilk(bottles, price)
```

**Full Function with Parameters Example:**
```js
function getMilk(bottles) {
console.log("leaveHouse");
console.log("moveRight");
console.log("moveRight");
console.log("moveUp");
console.log("moveRight");
console.log("buy " + bottles + " bottles of milk")
console.log("moveLeft");
console.log("moveLeft");
console.log("moveDown");
console.log("moveLeft");
console.log("enterHouse");
}
 
getMilk(2);
```
In the example, we called the function `getMilk` and gave it a parameter called `bottles`, so now when we call the function we need to specify the number of bottles.
Inside the function we placed a list of actions to perform, notice how in one of them i included the value of the parameter - so it'd show whatever value we input when calling the function
Now, after closing the function, we added the number of `bottles` we wanted, inside the rounded brackets

***

## Comparators

| Comparator | Usage |
|-----------|-----------|
| `===` | Is equal to (including data types) |
| `==` | Is equal to (not including data types) |
| `!==` | Is not equal to |
| `>` | Is greater than |
| `<` | Is lesser than |
| `>=` | Is greater or equal to |
| `<=` | Is lesser or equal to |
| Combining Comparators |

**Example:**
```js
var age = prompt("How old are you?");
if (age == 16) {
    prompt("Awesome! Your the same age as me :)");
}    
else {
    alert("Your age is " + age)
}
```


### Combining Comparators

| Comparator | Usage |
|-----------|-----------|
| `&&` | And |
| <code>&#124;&#124;</code> | Or |
| `!` | Not |


***

## Conditional Logic

### If Else
`If` + `Else` is a type of conditional logic - Conditional logic is basically controlling the flow of your code. An example of conditional logic would be, `If` the track is clear, then go straight ahead. But if not (`Else`), then turn right.

**Example:**
```js
if (track === "clear"){
    goStrait();
} else {
    turnRight();
}
```
* We used three `=`'s so the if statement only applies when exactly the same (data type as well)
