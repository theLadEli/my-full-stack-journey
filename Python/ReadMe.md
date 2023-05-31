# Python
Python is extremely versatile, it could be used for the backend of a webapp, for data science and much more!

## Table of Contents:
> 💡 **Note:** This may be out of date and have some broken links as this page is being continuously updated.- [Python](#python)
- [Python](#python)
  - [Table of Contents:](#table-of-contents)
  - [Python Basics](#python-basics)
    - [Expressions](#expressions)
    - [Indentation](#indentation)
    - [Variables](#variables)
      - [Creating a Variable](#creating-a-variable)
      - [Naming a Variable](#naming-a-variable)
    - [Collections](#collections)
      - [Queue](#queue)
      - [Lists](#lists)
        - [Creating a List](#creating-a-list)
        - [Accessing a List](#accessing-a-list)
        - [Editing List Items](#editing-list-items)
        - [Manipulating list items:](#manipulating-list-items)
      - [Tuple](#tuple)
  - [Working with Data Types](#working-with-data-types)
    - [The Different Data Types](#the-different-data-types)
    - [F Strings](#f-strings)
    - [Checking Value Types](#checking-value-types)
    - [Converting Values](#converting-values)
  - [Python Input \& Output](#python-input--output)
    - [Logging](#logging)
    - [Input](#input)
  - [Decision Structures and Iterations](#decision-structures-and-iterations)
    - [Assignment and Comparison](#assignment-and-comparison)
    - [If Statements](#if-statements)
    - [Loops](#loops)
      - [For Loops](#for-loops)
      - [While Loops](#while-loops)
  - [Python Modules](#python-modules)
    - [Random Number Generator](#random-number-generator)


## Python Basics

### Expressions
Expressions are combinations of values, variables and operators that produce results. It can be calculations, comparisons or even functions.

### Indentation
In Python indentation is necessary. For example, if I had an if statement like this:
```py
if 2 == 2:
    print("Correct")
```
Only if the print is indented would it be included in the if statement.


### Variables

#### Creating a Variable
In python a variable is defined simply by giving it a name and then a value.
For example:
```py
my_variable = 10
```
Unlike JS, you don;'t need to make a decision on what type of variable you're using (like a var, const etc.). And unlike C# you don't need to decide what datatype it is, Python will automatically figure it out and it will not be locked in forever, you'd be able to change it later on.

#### Naming a Variable
When naming a variable there are a few guidelines that are recommended to stick to:
 1. **Descriptive Names -** A variable that accurately describes its purpose/functionality
 2. **Lowercase Letters -** For readability Python variables are typically written in all lowercase
 3. **Avoid Reserved Words -** There are some words (keywords) that are to be avoided in variable naming, as these have special meaning in the language
 4. **Keep it Concise -** It should be short to enhance readability
 5. **Snake Casing -** Use underscores to separate words (e.g. `my_variable`)
 6. **Start with a letter -** Variable names need to start with a letter (**A-Z**) or underscore (**_**)
 7. **Be Consistent -** Stick to consistent naming throughout your code to avoid confusion


### Collections
Collections is a way to store and organise lots of pieces of data. There are a few different types of collections:

#### Queue
 * Coming Soon *

#### Lists
A list is an ordered sequence of values.
 - You are able to add, remove or edit items in the list after it's created.
 - You're able to have different data types in the list, so one item can be an integer, another a string etc.

##### Creating a List
To create a list, first give it a name. Then when you give it a value, wrap it in square brackets and separate each list item with a comma.

**Example:**
```py
names = ["Alice", "Bob", "Charlie", "David", "Eli"]
```

##### Accessing a List
To access an item of a list, you just target its index. Like this:
```py
names[2]
```
And that would target `Charlie`. You can also do something with it, like print it:
```py
print(names[2])
```

##### Editing List Items
To edit a list item, first you target it, and then you redefine its value.

**Example:**
```py
names[2] = Chris
```

##### Manipulating list items:
There are various different ways you can manipulate a list:
| Operation    | Example                           | Description                                                                                       |
|--------------|-----------------------------------|---------------------------------------------------------------------------------------------------|
| Append       | names.append("Fred")                 | Adds an element to the end of the list.                                                           |
| Pop          | names.pop(2)                    | Removes and returns the element at the specified index.                                           |
| Clear        | names.clear()                   | Removes all elements from the list, making it empty.                                              |
| Remove       | names.remove("Bob")                 | Removes the first occurrence of the specified element from the list.                              |
| Insert       | names.insert(1, 'Adam')         | Inserts an element at the specified index, shifting existing elements to the right.               |
| Reverse      | names.reverse()                 | Reverses the order of elements in the list.                                                       |
| Sort         | names.sort()                    | Sorts the elements of the list in ascending order.                                                |
| Min          | min_value = min(names)          | Returns the minimum value from the list.                                                           |
| Max          | max_value = max(names)          | Returns the maximum value from the list.                                                           |

#### Tuple
A Tuple is a lot like a list, but they are immutable. This means once a tuple is created, you can not modify any of its items.

To create a tuple, it's the same as `lists`, only with round brackets instead of square.

**Example:**
```py
names = ("Alice", "Bob", "Charlie", "David", "Eli")
```
Now this tuple is fixed and can not be modified at a later point.

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

### F Strings
F strings are Python strings that let you inject Python strings inside it. To define an F string, you just put the letter `f` before the quotation marks, and then wrap any inject Python in curly brackets `{}`.

**Example**
```py
print(f"This is a variable with a value of {my_variable} inside a string.")
```

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

## Decision Structures and Iterations

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

You can also add extra conditions, for example:
```py
x = 5

if x < 5:
    print("x is less than 5")
elif x == 5:
    print("x is equal to 5")
else:
    print("x is greater than 5")
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