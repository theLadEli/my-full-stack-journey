# Generate Multiple Copies of The Same Text
This is the first time I've had a problem and was able to solve it through programming!

## 🤔 Problem
I had to get multiple copies of the same number. Sometimes up to 900 copies of it! Originally, when it was only a small number of copies neededd (20-50) I was manually copy & pasting it. Then I realized I could probably just solve it with a few lines of code.

## 💡 Solution
Here's how I did it:
  1. Frst I created an empty array, which I'll use to push all the values into
  2. Then I created a variable called `countValue` with the value of 1. This will be used to keep track of the number of times I need it to add to the array
  3. I created a function with the properties of `number` and `times`. `number` being for the number I want copied & pasted, `times` for the amount of times it should be done
  4. I made a loop, with it set the loop to run until `countValue` was smaller or the same as the `times` property
  5. Inside the loop I had it push the `number` property inside of the array, and add 1 to the `countValue` variable each time the loop was run through
  6. I had it print the loop to console when it was finished

Now, when you call the funtion you specify the number or text you want to be copied, and than the amount of times you want it pasted.

***

### 📝 Notes
It probably would have been easier for me to use a `for` loop instead of a `while` loop. But I feel more comfortable using `while`, so hopefully in the future I'll be able to improve.
