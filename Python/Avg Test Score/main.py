# passScore = 150
# scores = []
newScore = 0

with open("marks.txt", "w") as fp:
    while newScore != "end":
        newScore = input("Input the score here, type 'end' to stop: ")
    
        if newScore != "end":
            name = input("Name of Student: ")
            print(f"{name}: {newScore}", file=fp)
            # scores.append(float(newScore))


# avg = (sum(scores))/len(scores)

# if avg >= 150:
#     avg = "🎉 Pass!"
# else:
#     avg = "🛑 Fail."

# passNumber = 0
# for score in scores:
#     if score >= 150:
#         passNumber+=1

# print(f"""
# Input Stopped.

# All scores: {scores}
# Average Score: {avg}
# Pass Rate: {passNumber}/{len(scores)}
# """)