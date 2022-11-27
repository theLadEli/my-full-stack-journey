# Dicee Game
##### AIM: The aim of this challenge is to make a fully functioning Dicee game, that you and your friend can just load to see who wins and settle an arguement!
***

## Solution Steps
1. First I created the HTML for this. It was pretty simple, I added the heading text, two columns for each player and a default six Dice image for each to start with.
2. Next I styled things up with CSS. I used fonts from Google Fonts, the only thing I slightly struggled with was the column alignments.
3. Lastly I created an `index.js` file to make it functioning
4. I created two variables to give me two random numbers between 1-6, one number for each player.
5. Using concactination, I made two variables to edit the dice-image path with the correct number from the random generated number
6. I used DOM to edit the HTML with the above concactinated variable
7. For the winners text I made a fucntion, and set the return of the function using if statements for the text
8. I used DOM once again, and put the functions return statement inside `document.querySelector("h1").textContent = winnerText();`

#### And there it is! The challenges are much simpler if you just break it down to smaller stages.
