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

## Commenting on JS
on JS use two forward slashes (//) to comment something out.

**Example:**
```js
console.log("Hello!")
// This prints Hello! to console, so only the coder can see it
```
The second line will be ignored when running this code.
