fileName = "marks.txt"

student = input("Which student do you want to find? ")

with open(fileName, "r") as fp:
    for line in fp:
        if student in line:
            print(line)
            break