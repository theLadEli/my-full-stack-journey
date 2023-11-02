# JS Basics

In this repo i'll have all my JS projects with any relevant documentation and some background documentation as well.

In almost every folder you'll find a `.js` file containing the code of the final project, and a `.md` file (often called `ReadMe.md`), where i document what i was trying to achieve, how i did it, explain the process and any other relevant information.

This (specific) File just contains my notes on Basic JS!

## Table of Contents
- [JS Basics](#js-basics)
  - [Table of Contents](#table-of-contents)
  - [Data Types](#data-types)
  - [Variables:](#variables)
    - [Naming Variables](#naming-variables)
    - [Advanced Variables](#advanced-variables)
    - [Calling the variable](#calling-the-variable)
  - [Concatenation](#concatenation)
  - [Commenting on JS](#commenting-on-js)
  - [Working with Numbers](#working-with-numbers)
    - [Bidmas](#bidmas)
    - [Rounding Down](#rounding-down)
    - [Rounding to the Nearest Full Number](#rounding-to-the-nearest-full-number)
    - [Elevating by the Power of a Number](#elevating-by-the-power-of-a-number)
  - [Functions](#functions)
    - [How to create a function:](#how-to-create-a-function)
    - [How to call a function](#how-to-call-a-function)
    - [Creating Function Parameters](#creating-function-parameters)
  - [Comparators](#comparators)
    - [Combining Comparators](#combining-comparators)
  - [Conditional Logic](#conditional-logic)
    - [If Else](#if-else)
  - [Arrays](#arrays)
    - [Creating an Array](#creating-an-array)
    - [Calling the Array](#calling-the-array)
    - [Getting the Length of the Array](#getting-the-length-of-the-array)
    - [Check if the array includes something](#check-if-the-array-includes-something)
    - [Adding New Items on to an Array](#adding-new-items-on-to-an-array)
    - [Removing Items from an Array](#removing-items-from-an-array)
  - [Loops](#loops)
    - [While Loops](#while-loops)
    - [For Loops](#for-loops)
- [Node](#node)
  - [REPL](#repl)
  - [Working with Files](#working-with-files)
    - [Writing to Files](#writing-to-files)
    - [Reading from Files](#reading-from-files)
- [NPM](#npm)
  - [Setting up NPM](#setting-up-npm)
  - [Installing NPM Packages](#installing-npm-packages)
- [Express](#express)
  - [Creating an Express Server](#creating-an-express-server)
    - [1. Creating a Directory](#1-creating-a-directory)
    - [2. Create index.js File](#2-create-indexjs-file)
    - [3. Initialise NPM](#3-initialise-npm)
    - [4. Install Express](#4-install-express)
    - [5. Write Server Application](#5-write-server-application)
    - [6. Start Server](#6-start-server)
  - [What is Localhost?](#what-is-localhost)
  - [What is a Port?](#what-is-a-port)
- [HTTP](#http)
  - [HTTP Requests](#http-requests)
    - [GET](#get)
      - [Providing GET Code](#providing-get-code)
    - [POST](#post)
    - [PUT](#put)
    - [PATCH](#patch)
  - [Endpoints](#endpoints)
  - [HTTP Response Code](#http-response-code)
- [Postman](#postman)

<!-- <small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small> -->

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
```js
function functionsName() {
  }
```

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

***

## Arrays
Arrays can be used to put a collection of data into one variable, as until now we've only been putting one peace of data into a variable.

### Creating an Array
To create an array, it's just like creating any variable, only the value should be all the arrays content in square brackets, seperated by commas.
```js
var guestList = ["David", "James", "Robert", "John", "Joseph", "Andrew", "Ryan", "Brandon", "Jason", "Justin"]
```

### Calling the Array
And now, if we'd want to call a name from the `guestList` variable, we'd do the name of the variable and the position number inside of square brackets.

**Example:**
```js
guestList[3];
```
And that'd retrieve `John`, the name on position `3` from my list.
* The reason `John` is position number 3 and not `Robert`, is because like we said before: Computers always start counting from zero. So the first name (`David`) is in position 0, second name (`James`) is position 1, and so on...

### Getting the Length of the Array
You can also do things like `guestList.length;` and this would count the names inside the array.

### Check if the array includes something
Using the `.includes` property, we can check if an array includes a specific item. The output of this function is boolean (True/False).

So if i were to do:
```js
guestList.includes("David");
```
We would of course get `True`.

But if i were to do:
```js
guestList.includes("Jack");
```
We'd get `False`.

### Adding New Items on to an Array
If you want to add an item to an array (without editing the actual array), you can use a property called `.push()`.

```js
guestList.push("Eli");
```
On a new line, type the varial name, and add `.push()` with the item you'd like to add inside the brackets.
Now, my name `Eli` has been added to the `guestList` array.

* The item will always be added at the end (after all other array items)

### Removing Items from an Array
To remove an item from an array, you can use the property called `.pop`

```js
guestList.pop();
```
Now, the last item on the `guestList` variable (`Eli` - which we just added), has been removed.

***

## Loops
Loops are used to easily perform repetitive tasks until the provided parameters are true.

The two types of loops are `while` and `for` loops. 

### While Loops
While loops are used if you want to check for a state (like while a program is in a certain state, do this...).

To create a while loop, use the `while` keyword and then give it parameters. Inside of it, you could put whatever peace of code you want to be performed until those parameters are true.

```js
var count = 1;

while (count <= 100) {
  count++;
}
```

Now, count will continuously be added by one in value until it reaches 100.

### For Loops
For loops are used if you want to iterate something many times.

For loops include the variable, parameters and change in value all in one. First you put in the variable to track, then you put in the value it should stop at. And lastly you put in the change in value each time.

```js
for (var count = 1; count <= 100; count++){
}
```

# Node
Node is a JavaScript runtime. When JavaScript was first created, it was designed to run in the browser. This meant it was impossible to use JavaScript to write any other program that is not a website.

Node is also asynchronous. Typically JavaScript is synchronous, it would start from top to bottom and wait until one task has completed before moving on to the next. But Node is asynchronous and event driven. 

## REPL
Read Eval Print Loop

## Working with Files
To start, you first need to import the Node Module. This can be done by adding the following snippet at the start of your file:
```js
const fs = require("fs");
```

`fs` stands for File System.

### Writing to Files
Once you've added the Node Module, you can create a file by using `fs.writeFile`:
```js
const fs = require("fs");

fs.writeFile("message.txt", "Hello from NodeJS!", (err) => {
    if (err) throw err;
    console.log("The file has been saved!")
});
```

Inside `.writeFle()` I first added the file name, next the file contents, and lastly error handling. The structure looks like this:
```
fs.writeFile(fileName, fileContents, errorHandling)
```

### Reading from Files
To read a file, you use the `fs.readFile` method. An example is shown below:
```js
const fs = require("fs");

fs.readFile('./message.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
```

The readfiles parameters consist of:`
```
fs.readFile(filePath, encoding to output text, error handling and actions upon reading)
```

# NPM
The NPM is the Node Package Manager. It is a public collection of modules that people have created for Node. You can find loads of code for utilities and tools made by other people that you can use.

## Setting up NPM
NPM comes preinstalled with Node, but to use it, you first have to initialise it. To do this, open terminal and input and then walk through the guided process:
```
npm init
```
This initilisation creates the package file (`package.json`).

## Installing NPM Packages
To install a specific package, use:
```js
npm install <package name>
```

You can install multiple packages at a time, by just adding a space between their name:
```js
npm install packageOne packageTwo packageThree
```

You can also shorten `install` to just `i`. So `npm i package1` would work fine.

Executing this command adds a snippet called `dependencies` to the package file, as well as downloading the packages code to a folder called `node_modules`.

# Express

## Creating an Express Server
There are 6 steps to creating an express server:
  1. Create a directory.
  2. Create an index.js file.
  3. Initialise NPM.
  4. Install the Express package.
  5. Write the Server Application in the index.js file.
  6. Start the server.

### 1. Creating a Directory
This is a simple step. Open terminal, navigate using `cd` to the folder where you want to create the new directory inside. Inside that folder use the `mkdir` command along with the directory name.

**Example**:
```
mkdir "Express Server"
```

### 2. Create index.js File
`cd` into your newly created directory and use the terminal command `touch` to create a new file.

**Example:**
```
touch index.js
```

### 3. Initialise NPM
Typically, to initialise NPM you'd use the `npm init` command and go through the initialisation process.
Alternatively, you could simply use `npm init -y` to just quickly initialise it without going through the setup process step by step.

### 4. Install Express
Once NPM is installed, use the terminall installation command to install express.

**Example:**
```
npm i express
```

### 5. Write Server Application
Back to your code editor, inside the `index.js` file we now want to write the application code.

Before you do this, go to your `package.json` file and add `"type": "module"` to enable the latest version of JS`.

A typical barebone application code looks something like this:
```js
import express from "express";
const app = express();

app.listen(3000. () => {
  console.log("Server running on port 3000.")
})
```

To break down the code line by line:
  1. First we import express from the express module we just installed.
  2. Next we create an app using this express object.
  3. Once we created the app, we add a method to that app called `listen`. Inside, we specify two things, the port to listen for requests and secondly (next line):
  4. The callback, this is what we want to happen upon server request. In this example, it is just a simple console log.

A nice tip is to create a variable called port (`const port = 3000;`) and add that variable name wherever we use it. This way we can quickly change ports.

### 6. Start Server
Starting the server is really simple. Ensure you are inside the correct directory and use the command `node {name_of_file}`.

**Example:**
```
node index.js
```

Now to access that file, you visit `localhost:3000`.

## What is Localhost?
Localhost is simply when we don't have an online server, so instead you host your server locally. Making your own computer the server for your backend.

## What is a Port?
A port is is the equivalent to a bunch of doors on our computer. Each door has an address. There are thousands of possible doors you can create to access your computer. In our case, when setting up our server, we specified that the door (or port) we want to be listening on, is 3000.

# HTTP 

## HTTP Requests
When making HTTP requests, there are five main words you'll often come across:
  1. GET
  2. POST
  3. PUT
  4. PATCH
  5. DELETE

### GET
GET is when we want to request a resource from a server. This can be an HTML website, a piece of text or a string of data. It is any time we are getting something from the server.

If you run the server code provided before and then visited `localhost:3000`, you would have gotten this error:
```
cannot GET /
```
This is because you are trying to get something that there is no server code for.

#### Providing GET Code
If you want something for when the user tries to GET our home page, we can use the below code:
```js
app.get("/", (req, res) => {
  res.send("Hello, world!");
});
```

Breaking this code down:
  1. The first parameter (`"/"`) is for when this should apply. So this is for whenever a user loads the servers root - in this case the home page.
  2. In between the curly braces, we added how the server should respond to the GET request. In our case, it's just a simple "Hello world" message.

Besides for just text, you can also send back fully formatted text. For example:
```js
  res.send("<h1>Hello, world!</h1><button>Click Me</button>");
```

### POST
POST is very similar, except it is when we send things to the server. This could be something like form data, so I send the form contents to the server and on the server side you can do what you want with it (for example save it to your database).


### PUT
A PUT request is when you want to replace a resource with whatever you're sending over. So you're essentially updating it.

### PATCH
PATCH is slightly similar to PUT, it is when you patch up a resource. Although it is similar to PUT, there is a difference. PUT is usually when you replace an entire data piece, patch is when you only update/replace part of it.

## Endpoints
Endpoints is simply the URL path a user is trying to access. Earleir we setup a server response for when the user tried accessing `"/"`, that looked like this:
```js
app.get("/", (req, res) => {
  res.send("Hello, world!");
});
```

We could create and add additional endpoints:
```js
app.get("/about", (req, res) => {
  res.send("About Me");
});
```
## HTTP Response Code
There are five types of response codes:
| Type  |  Code |
|--------|-------|
| Informational responses | `100` - `199` |
| Successful responses  | `200` - `299` |
| Redirection messages  | `300` - `399` |
| Client error responses | `400` - `499`  |
| Server error responses | `500` - `599`  |

# Postman
