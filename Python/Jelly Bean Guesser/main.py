import random

print("Guess how many jelly beans are in the jar!")

correct_answer = random.randint(1,100)
user_guess = None
attempt_count = 0

while user_guess != correct_answer:
    user_guess = int(input("Enter your guess (1-100):"))
    attempt_count+=1

    if user_guess > correct_answer:
        print("🛑 Too high!")
    elif user_guess < correct_answer:
        print("🛑 Too low!")

print(f"🎉 Correct! It took you {attempt_count} times!")