function bmiCalculator (weight, height) {
    var equasion = weight / Math.pow(height, 2);
    return Math.round(equasion)
}
 
var bmi = bmiCalculator(65, 1.8); 
console.log(bmi)
