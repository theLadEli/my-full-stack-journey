# Leap Year Calculator

#### Aim: To make something that you can put in the year, and it'd tell you if it's a leap year or not.

### Calculation:
*A year is a leap year if it is evenly divisible by **4**;*

***except** if that year is also evenly divisible by **100**;*

***unless** that year is also evenly divisible by **400**.*


### How I did it:
To do this, i made a fucntion with a property of `year`. Than i used an if statement, set to modula remainder 0 mutliple times until i went through all leap year requirements with `if` statements.

### Code:
```js
function isLeap(year) {
```
First i created a function, i gave it a property called `year`. This is where we'll input the year we want to check.

```js
    if (year % 4 === 0){
```
The way i'm doing this, i'll be getting the year, checking if it's modulo 4 with no remainder (which means it's cleanly divisible by 4). If yes, we pass it through to the next `if` statement, if not, we know it's not a leap year so we return that.

```js
        if (year % 100 === 0){
```
Now we know they're cleanly divisible by `4`, so we check if it's cleanly divisible by `100`. If not, it's a leap year. If yes, we need to pass it through to the next `if` statement to check it's cleanly divisible by 400.

```js
            if (year % 400 === 0){
                return("Leap year.");
```
Now we know it's definatly a leap year, as its cleanly divisible by `400` as well.

```js
            } else {
                return("Not leap year.");
            }

        } else {
            return("Leap year.");
        }

    } else {
        return("Not leap year.");
    }

}
```
Now we need to clsoe up the appropriate `if` statements. We return `Not leap year.` on all of them, besides `year % 100 === 0`, there we return `Leap year.`.
