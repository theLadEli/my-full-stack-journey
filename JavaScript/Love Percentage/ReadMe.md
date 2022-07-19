# Love Percentage Generator
**Aim:** To take two peoples names and give them their "love percentage" (a random number xD)

```js
prompt("Who is the first person?")
prompt("Whose the second guy?")
```
* 1. First, I created two different prompts for the two names (not using variables as we don't need to call them later)

```js
var randomNumber = Math.random();
```
* 2. Next, I used `Math.random` to generate a random number

```js
randomNumber = randomNumber * 100;
```
* 3. As we want the number to be between 1-100, we times the generated number by 100

```js
randomNumber = Math.floor(randomNumber + 1)
```
* 4. The numbers still not 1-100, its 0-9.9999~, so we add 1 to it

```js
alert("The love percentage between them is" + randomNumber + "%")
```
* 5. And finally, we give the results in an `alert`.
