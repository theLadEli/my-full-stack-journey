file_path = r"C:\Users\cohen\Documents\GitHub\my-full-stack-journey\Python\Lab 03\top250_movies.txt"
file = open(file_path, "tr")
count = 0

with file as file:
    for line in file:
        count+=1
        print(f"{count}. {line}")