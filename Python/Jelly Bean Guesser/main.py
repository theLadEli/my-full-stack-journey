import random

print("Guess how many jelly beans are in the jar!")

correct_answer = random.randint(1,100)

user_guess = input("Enter your guess:")
user_guess = int(user_guess)

if user_guess == correct_answer:
    print("🎉 Correct!")
else:
    print("🛑 Wrong!")

