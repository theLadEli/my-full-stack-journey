correctNumber = 45
userGuess = 0
guessNumber = 0


# highScoreFile = open(r"C:\Users\cohen\OneDrive\Not Syncing\Old Stuff\Documentss\GitHub\my-full-stack-journey\Python\Guess the Number\highscoreScore.txt", "r+")
highScoreNumber = open(r"C:\Users\cohen\OneDrive\Not Syncing\Old Stuff\Documentss\GitHub\my-full-stack-journey\Python\Guess the Number\highscoreScore.txt", "r+")
scoreHolderFile = open(r"C:\Users\cohen\OneDrive\Not Syncing\Old Stuff\Documentss\GitHub\my-full-stack-journey\Python\Guess the Number\highscoreName.txt", "r+")


while userGuess != correctNumber:
    userGuess = input("Guess the number, type any number between 1 - 100 here: ")
    userGuess = int(userGuess)
    highScoreNumberInt = int(highScoreNumber.read())

    guessNumber+=1

    if userGuess < correctNumber:
        print("🛑 Too low!")
    
    elif userGuess > correctNumber:
        print("🛑 Too high!")
    
    elif userGuess == correctNumber:
        print("🎉 Correct!")
        print(f"It took you {guessNumber} guesses.")

        if guessNumber < highScoreNumberInt:

            userName = input("🏆 New high score! Save your accomplishment by inputting your name here: ")

            scoreHolderFile.write(userName)
            highScoreNumber.write(str(guessNumber))

            print(f"""
                +------------------------------------+
                |         Current High Score         |
                +------------------------------------+
                | Holder: {scoreHolderFile.read()}            |
                | Score: {highScoreNumberInt.read()}           |
                +------------------------------------+
            """)

highScoreNumberHow.close()
scoreHolderFile.close()
