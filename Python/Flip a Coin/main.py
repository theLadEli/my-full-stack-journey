import random

coin_sides = ["heads", "tails"]

game_over = False
correct_guesses = 0
question_number = 1

while not game_over:
    coin_side = random.choice(coin_sides)

    users_guess = input(f"{question_number}/3 Will the coin land on heads or tails? Enter your guess (heads/tails):")
    question_number+=1

    if users_guess == coin_side:
        correct_guesses += 1
        print("✅ Correct!")

        if correct_guesses >= 3:
            print("🎉 You won!")
            game_over = True
    else:
        print("❌ Wrong!")
        print("🛑 Game over!")
        game_over = True