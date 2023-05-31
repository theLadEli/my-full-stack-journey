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

if attempt_count == 1:
    print("🥳 Congrats! You've just been awarded the Jelly Bean Hall of Fame!")
elif attempt_count <= 3:
    print("🎉 Incredible! You are a jelly bean wizard")
elif attempt_count <= 5:
    print("😀 Very impressive!")
elif attempt_count <= 10:
    print("👍 Nicely done! I bet you can get an even better score though...")
else:
    print(f"That took you {attempt_count} times... No comment 🫤")