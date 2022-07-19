# BMI Calculator
**Aim: To get someones weight and height and output their BMI**

## Equasion:
The equation for someone's BMI is: weight (in Kg) divided by height² (in Metres).
`BMI = weight/height²`

***

```js
function bmiCalculator (weight, height) {
```
1.᲼ To start off we create a new function, with the `weight` and `height` parameters

```js
var equasion = weight / Math.pow(height, 2);
```
2.᲼ Then we make a variable where we'll put the equation inside. So inside it, we put the first parameter `weight` divided by `height` squared. To square the height we use the `Math.pow()` property (more on `Math.pow` on [JS Basics](https://github.com/theLadEli/my-full-stack-journey/blob/main/JavaScript/README.md)

```js
    return Math.round(equasion)
}
```
3.᲼ Now we set the output of the function to the variable where we did the equation, but we use the `Math.round()` property to round it to its nearest whole number.

```js
var bmi = bmiCalculator(65, 1.8); 
console.log(bmi)
```᲼᲼
4.᲼ And here, outside the function, we firstly created a variable where we called the function, with the parameters set, then we print the variables to console.
