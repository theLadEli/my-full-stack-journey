# Python
Python is extremely versatile, ti could be used for the backend of a webapp, for data science and much more!

## Python Basics

### Expressions
Expressions are combinations of values, variables and operators that produce results. It can be calculations, comparisons or even functions.

### Variables
In python a variable is defined simply by giving it a name and then a value.
For example:
```py
my_variable = 10
```
Unlike JS, you don;'t need to make a decision on what type of variable you're using (like a var, const etc.). And unlike C# you don't need to decide what datatype it is, Python will automatically figure it out and it will not be locked in forever, you'd be able to change it later on.

### Indentation
In Python indentation is necessary. For example, if I had an if statement like this:
```py
if 2 == 2:
    print("Correct")
```
Only if the print is indented would it be included in the if statement.

## Working with Data Types

### The Different Data Types
There are many different data types in Python, listed below are the most common ones along with what they do and examples of them:
| Data Type | Example | Description |
|-----------|---------|-------------|
| `int`     | `42`    | Represents whole numbers (positive, negative, or zero) without decimal points. |
| `float`   | `3.14`  | Represents numbers with decimal points or fractional parts. |
| `str`     | `'Hello'` | Represents a sequence of characters, such as text. |
| `bool`    | `True` or `False` | Represents a logical value of either true or false. |
| `list`    | `[1, 2, 3]` | Represents an ordered collection of items, which can be of different types. |
| `dict`    | `{'name': 'John', 'age': 25}` | Represents a collection of key-value pairs, also known as a dictionary. |
| `set`     | `{1, 2, 3}` | Represents an unordered collection of unique elements. |
| `None`    | `None`  | Represents the absence of a value or the null value. |

### Checking Value Types
To check the type of a value, you can use the `type` function.
**Example:**
```py
print(type(user_guess))
```

### Converting Values
If I wanted to convert a string to an integer, I could do the following:
```py
user_guess = input("Enter your guess:")
user_guess = int(user_guess)
```

## Python Input & Output

### Logging
To log something to console you use the `print` command. For example:
```py
print("Hello World")
```

### Input
If you want to give the user an option to input something, you could use the `input()` feature. So if I wanted the variable `name` to be the users name, I could do:
```py
name = input("")
```

You could also add a prompt text before the input, like this:
```py
name = input("Please enter your name:")
```

A user input is always received as a string input, even if you just input a number. This means if you're checking if the input is the value of a number, you'll get false. As the number is an integer, and the input is a string.

To convert from an integer to a string, check out this section [#converting-values](here)

## Control Flow in Python

### Assignment and Comparison
There is a difference between using `==` and `=`. They have different functionality and usecases.

 - `=` is used to assign a value
 - `==` is used to check if it is equal

### If Statements
If statements are laid out like so:
```py
correct_answer = 2
user_answer = input("What is the answer?")

if user_answer = correct_answer:
    print("Correct")
else:
    print("Wrong")
```

### Loops
There are two kinds of loops, a `for` loop and a `while` loop.

#### For Loops
For loops are for when you know how many times you want the loop to run.

So if I have an array of fruits:
```py
fruits = ["Apple", "Banana", "Oranges", "Mango"]
```
And I want it to print a greeting for each fruit in the array, I could just do:
```py
for fruit in fruits:
    print("Hello!")
```

#### While Loops
While loops are for when you don't know how many times to loop.

If I had a variable with the value of 0, like this:
```py
count = 0
```

And I want it to continuously go up in increments of 1 until it hits 10, I can use this `while` loop:
```py
while count < 10:
    print(f'Count: {count}')
    count += 1
```

If I want a notice when it reaches 10, I can just add an `if` statement, an `else` is not needed in this case:
```py
    if count == 10:
        print("Count is now at 10!")
```

So now the entire code looks like this:
```py
count =0

while count < 10:
    print(f'Count: {count}')
    count += 1

    if count == 10:
        print("Count is now at 10!")
```

## Python Modules

### Random Number Generator
Python offers a random number generator module, but to use it you first have to import it. To do this, at the start of the file, add:
```py
import random
```

This offers many helpful functions, the one I'll be using is `random.randint` and then path the range as a parameter. Here's an example:
```py
correct_answer = random.randint(1,100)
```
Now a random number between 1-100 will be generated. Both the parameters (or extremes as they're often referred to) will be included.