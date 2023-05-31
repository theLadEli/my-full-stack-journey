print("Guess how many jelly beans are in the jar!")

correct_answer = 42

user_guess = input("Enter your guess:")
user_guess = int(user_guess)

if user_guess == correct_answer:
    print("🎉 Correct!")
else:
    print("🛑 Wrong!")