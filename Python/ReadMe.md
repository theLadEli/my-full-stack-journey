# Python
Python is extremely versatile, it could be used for the backend of a webapp, for data science and much more!

## Table of Contents:
> 💡 **Note:** This may be out of date and have some broken links as this page is being continuously updated.
 
<!-- no toc -->
- [Python Basics](#python-basics)
  - [Expressions](#expressions)
  - [Indentation](#indentation)
  - [Scope](#scope)
- [Variables](#variables)
  - [Creating a Variable](#creating-a-variable)
  - [Naming a Variable](#naming-a-variable)
- [Operators](#operators)
  - [Basic Operators](#basic-operators)
  - [Logical Operators](#logical-operators)
  - [Assignment Operators](#assignment-operators)
- [Working with Data Types](#working-with-data-types)
  - [The Different Data Types](#the-different-data-types)
  - [Strings](#strings)
    - [String Formatting](#string-formatting)
    - [Index Positions](#index-positions)
    - [F Strings](#f-strings)
    - [Slicing Strings](#slicing-strings)
    - [Stripping Strings](#stripping-strings)
    - [Replacing Strings](#replacing-strings)
    - [Multiplying Strings](#multiplying-strings)
  - [Checking Value Types](#checking-value-types)
  - [Converting Values](#converting-values)
  - [Getting Data Type Options](#getting-data-type-options)
- [Collections](#collections)
  - [Lists](#lists)
    - [Creating a List](#creating-a-list)
    - [Accessing a List](#accessing-a-list)
    - [Editing List Items](#editing-list-items)
    - [Manipulating list items:](#manipulating-list-items)
    - [List Functions](#list-functions)
  - [Tuple](#tuple)
  - [Sets](#sets)
  - [Dictionaries](#dictionaries)
    - [Defining Dictionaries:](#defining-dictionaries)
    - [Accessing Values](#accessing-values)
    - [Modifying Values](#modifying-values)
    - [Adding Key-Value Pairs](#adding-key-value-pairs)
    - [Deleting Key-Value Pairs](#deleting-key-value-pairs)
  - [Manipulating Collections](#manipulating-collections)
- [Python Input \& Output](#python-input--output)
  - [Logging](#logging)
  - [Input](#input)
- [Decision Structures and Iterations](#decision-structures-and-iterations)
  - [Assignment and Comparison](#assignment-and-comparison)
  - [If Statements](#if-statements)
  - [Loops](#loops)
    - [For Loops](#for-loops)
    - [While Loops](#while-loops)
  - [With](#with)
- [Writing to Files](#writing-to-files)
  - [Specifying the File Path](#specifying-the-file-path)
  - [Opening the File](#opening-the-file)
  - [Writing to the File](#writing-to-the-file)
  - [Appending to a File](#appending-to-a-file)
  - [Closing the File](#closing-the-file)
- [Functions](#functions)
  - [Creating Functions](#creating-functions)
  - [Calling Functions](#calling-functions)
  - [Parameters](#parameters)
    - [Creating a Parameter](#creating-a-parameter)
    - [Default Parameters / Variadic Functions](#default-parameters--variadic-functions)
      - [Args](#args)
      - [Kwargs](#kwargs)
  - [Returning Data](#returning-data)
    - [Docstrings](#docstrings)
      - [How to create a Docstring](#how-to-create-a-docstring)
- [Object Oriented Programming](#object-oriented-programming)
  - [Terminolagy](#terminolagy)
  - [Classes](#classes)
    - [Creating an Object (Instance)](#creating-an-object-instance)
    - [Accessing Attributes](#accessing-attributes)
    - [Accessing Methods](#accessing-methods)
  - [Inheritence](#inheritence)
- [Python Modules](#python-modules)
  - [Why Use Modules?](#why-use-modules)
  - [Creating a Module](#creating-a-module)
  - [Importing a Module](#importing-a-module)
  - [Packages](#packages)
    - [Creating a Package](#creating-a-package)
    - [Importing a Package](#importing-a-package)
  - [The `__name__` Variable](#the-__name__-variable)
    - [Random Number](#random-number)
    - [Pickle](#pickle)
  - [RegEx](#regex)
- [Error Handling](#error-handling)
- [Machine Learning](#machine-learning)


# Python Basics

## Expressions
Expressions are combinations of values, variables and operators that produce results. It can be calculations, comparisons or even functions.

## Indentation
In Python indentation is necessary. For example, if I had an if statement like this:
```py
if 2 == 2:
    print("Correct")
```
Only if the print is indented would it be included in the if statement.

## Scope
> *To be Added*

# Variables

## Creating a Variable
In python a variable is defined simply by giving it a name and then a value.
For example:
```py
my_variable = 10
```
Unlike JS, you don;'t need to make a decision on what type of variable you're using (like a var, const etc.). And unlike C# you don't need to decide what datatype it is, Python will automatically figure it out and it will not be locked in forever, you'd be able to change it later on.

**Variable names are case sensitive.**

To create multi-line text variables, you wrap the text in tripple quotes:
```py
textBlock = """
Lorem ipsum dolor sit amet consectetur, adipiscing elit elementum curae nisi, eleifend duis facilisi netus.

Orci non magna consequat volutpat taciti libero himenaeos nascetur eros pulvinar, id ligula feugiat bibendum urna fermentum per morbi erat accumsan, leo ad cursus lacinia odio iaculis suspendisse nulla ac.

Aptent fames habitasse convallis mus ut pretium ultricies primis eleifend rutrum curabitur, magnis et tortor condimentum fermentum diam tincidunt massa accumsan ligula, facilisi scelerisque dignissim himenaeos suscipit malesuada elementum nibh donec nunc.

Justo gravida dis morbi nullam etiam convallis massa, molestie phasellus scelerisque cum lectus nam, sodales urna nunc torquent ullamcorper facilisis.
"""
```

## Naming a Variable
When naming a variable there are a few guidelines that are recommended to stick to:
 1. **Descriptive Names -** A variable that accurately describes its purpose/functionality
 2. **Lowercase Letters -** For readability Python variables are typically written in all lowercase except...
 3. **Unchanging Values -** To indicate a variable which has a value that should not be changed (such as a password), the variable name is sometimes written in full uppercase.
 4. **Avoid Reserved Words -** There are some words (keywords) that are to be avoided in variable naming, as these have special meaning in the language
 5. **Keep it Concise -** It should be short to enhance readability
 6. **Snake Casing -** Use underscores to separate words (e.g. `my_variable`)
 7. **Start with a letter -** Variable names need to start with a letter (**A-Z**) or underscore (**_**)
 8. **Be Consistent -** Stick to consistent naming throughout your code to avoid confusion

# Operators
You can use mathematical operators to perform calculations in Python. Below are some of the most common ones:

## Basic Operators
| Operator | Description                 | Example                       | Output    |
|----------|-----------------------------|-------------------------------|-----------|
| +        | Addition                    | 2 + 3                         | 5         |
| -        | Subtraction                 | 5 - 3                         | 2         |
| *        | Multiplication              | 2 * 3                         | 6         |
| /        | Division                    | 6 / 3                         | 2.0       |
| //       | Floor Division (divides and then rounds to the nearest whole number)              | 7 // 3                        | 2         |
| %        | Modulo (Remainder)          | 7 % 3                         | 1         |
| **       | Exponentiation (power by)             | 2 ** 3                        | 8         |
| ==       | Equal to                    | 2 == 3                        | False     |
| !=       | Not equal to                | 2 != 3                        | True      |
| >        | Greater than                | 2 > 3                         | False     |
| <        | Less than                   | 2 < 3                         | True      |
| >=       | Greater than or equal to     | 2 >= 3                        | False     |
| <=       | Less than or equal to        | 2 <= 3                        | True      |

## Logical Operators
| Operator | Description                    | Example            | Output |
|----------|--------------------------------|--------------------|--------|
| and      | Logical AND operator           | True and False     | False  |
| or       | Logical OR operator            | True or False      | True   |
| not      | Logical NOT operator           | not True           | False  |

Logical operators can be used for example to see if something equals something `or` something else. 

## Assignment Operators
| Operator | Description              | Example                        | Output   |
|----------|--------------------------|--------------------------------|----------|
| +=       | Add and assign           | x += 2 (where x = 3)           | x = 5    |
| -=       | Subtract and assign      | x -= 2 (where x = 3)           | x = 1    |
| *=       | Multiply and assign      | x *= 2 (where x = 3)           | x = 6    |
| /=       | Divide and assign        | x /= 2 (where x = 6)           | x = 3.0  |
| //=      | Floor divide and assign  | x //= 2 (where x = 7)          | x = 3    |
| %=       | Modulo and assign        | x %= 3 (where x = 7)           | x = 1    |
| **=      | Exponentiate and assign  | x **= 2 (where x = 2)          | x = 4    |
| and=     | Logical AND and assign   | x and= False (where x = True)  | x = False|
| or=      | Logical OR and assign    | x or= True (where x = False)   | x = True |

These assignment operators allow you to perform an operation and update the value of a variable in a single step, making your code more concise and readable.

# Working with Data Types

## The Different Data Types
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

## Strings
 - To make a string in python, you surround the text with double or single quotes.
 - To make a multiline string, you surround the text with triple quotes

### String Formatting
Like most languages, to make a new line, you use `\n`.
To add a tab (indent), you use `\t`.
For characters not available on the keyboard, you may need to use the unicode value.

### Index Positions
Each character in a string has an index, like in arrays. The index of the first character is `0`, the last  character is `-1`.

**Example Input:**
```py
stringIndex = 'Hello, my name is Eli'

print(stringIndex[0], stringIndex[1], stringIndex[-1])
```

**Example Output:**
```py
H e i
```

Here's the different outputs:
 - `H`, this is for the character in the string of the index `0`
 - `e`, this is for the character in the string of the index `1`
 - `i`, this is for the character in the string of the index `-1`

### F Strings
F strings are Python strings that let you inject Python strings inside it. To define an F string, you just put the letter `f` before the quotation marks, and then wrap any inject Python in curly brackets `{}`.

**Example**
```py
print(f"This is a variable with a value of {my_variable} inside a string.")
```

### Slicing Strings
If you want to extract only certain ranges of characters from a string, you can slice it.

So if I had the following string:
```py
myString = "abcdefghijklmnopqrstuvwxyx"
```
And I wanted the range `d-g`, I'll do this:
```py
myString[3:7]
```
If I wanted every second character between `a - n` I could do:
```py
myString[0:13:2]
```
If I just wanted `n` until the end of the string I'd do this:
```py
myString[13:]
```
If I wanted from the start of the string until `n`, I'd do this:
```py
myString[:13]
```
To reverse the string I'd do this:
```py
myString[::-5]
```

## Stripping Strings
You can specify characters in a string to remove.

For example, with the following string:
```py
myString = "Hello World!"
```
If I want to remove the 'l' in the string, I could do:
```py
myString = myString.strip('!')
```

**Notes:**
- Strip will only work to remove a character at the very start of end of the string.
- Strip with no argument will remove spaces from the start or end of the string.

## Replacing Strings
You can replace characters in the string by specifying the character to target, and then the character to replace it with. You can also leave the replacement empty, to just remove the targeted characters.

Example of replacing a letter in a string with another letter:
```py
myString = "Heard"
myString = myString.replace('H', 'B')
```
Now `myString` would contain the string value "Beard".
I could also run
```py
myString = myString.replace('H', '')
```
And now `myString` would contain "eard".

## Multiplying Strings
By multiplying a string, you can have it appear many times.

**Example Input:**
```py
myString = "abc"

print(myString*7)
```
**Example Output:**
```
abcabcabcabcabcabcabc
```

## Checking Value Types
To check the type of a value, you can use the `type` function.
**Example:**
```py
print(type(user_guess))
```

## Converting Values
If I wanted to convert a string to an integer, I could do the following:
```py
user_guess = input("Enter your guess:")
user_guess = int(user_guess)
```

## Getting Data Type Options
In Python you can use `dir()` to check all the available option with a data type.

**Example Input:**
```py
myString = "Hello, my name is Eli"
print(dir(myString))
```

**Example Output:**
```
['__add__', '__class__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__getstate__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mod__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmod__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'capitalize', 'casefold', 'center', 'count', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'format_map', 'index', 'isalnum', 'isalpha', 'isascii', 'isdecimal', 'isdigit', 'isidentifier', 'islower', 'isnumeric', 'isprintable', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'maketrans', 'partition', 'removeprefix', 'removesuffix', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill']
```
All the above items that begin with `__` are built in operators that aren't  so relevant at the moment. But the ones without, like `upper`, `swapcase`, `replace` etc. are some way you can manipulate the data type.

To use one of these operators, you follow the variable with `.operatername()`, obviously replacing `operatorname` with the name of the operator you want to use. Here's an example:

**Input:**
```py
myString = "Hello, my name is Eli"
print(myString.upper())
```

**Output:**
```py
HELLO, MY NAME IS ELI
```

# Collections
Collections is a way to store and organise lots of pieces of data. There are a few different types of collections:

## Lists
A list is an ordered sequence of values.
 - You are able to add, remove or edit items in the list after it's created.
 - You're able to have different data types in the list, so one item can be an integer, another a string etc.

### Creating a List
To create a list, first give it a name. Then when you give it a value, wrap it in square brackets and separate each list item with a comma.

**Example:**
```py
names = ["Alice", "Bob", "Charlie", "David", "Eli"]
```

### Accessing a List
To access an item of a list, you just target its index. Like this:
```py
names[2]
```
And that would target `Charlie`. You can also do something with it, like print it:
```py
print(names[2])
```

You can also access ranges like in strings:

If I wanted the range `Bob - David`, I'll do this:
```py
myString[1:3]
```
If I wanted every second item I could do:
```py
myString[0:4:2]
```
If I just wanted `Charlie` until the end of the string I'd do this:
```py
myString[2:]
```
If I wanted from the start of the string until `David`, I'd do this:
```py
myString[:3]
```
To reverse the string I'd do this:
```py
myString[::-1]
```

### Editing List Items
To edit a list item, first you target it, and then you redefine its value.

**Example:**
```py
names[2] = Chris
```

### Manipulating list items:
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

### List Functions
Built-in functions you can use with lists include:
| Function | Example                  | Description                                                                                       |
|----------|--------------------------|---------------------------------------------------------------------------------------------------|
| len      | `len(names)`             | Gives the number of elements.                                                                     |
| min      | `min(names)`             | Gives the smallest element.                                                                       |
| max      | `max(names)`             | Gives the largest element.                                                                        |
| sum      | `sum(numbers)`           | Gives the sum of the elements. 'sum' only works for lists of numbers, other lists will get an error.|

## Tuple
A Tuple is a lot like a list, but they are immutable. This means once a tuple is created, you can not modify any of its items.

To create a tuple, it's the same as `lists`, only with round brackets instead of square.

**Example:**
```py
names = ("Alice", "Bob", "Charlie", "David", "Eli")
```
Now this tuple is fixed and can not be modified at a later point.

## Sets
Set is an unordered collection of unique elements.
 - Sets do not allow duplicate elements, adding a duplicate will not have any affect
 - As sets are unordered, each time you print it, it will have a different order. This means you can not target a specific item index

Creating a set is like the other list types, just with curly brackets:
```py
names = {"Alice", "Bob", "Charlie", "David", "Eli"}
```

If you were to add a duplicate to the list, it will only output one. An example is below.
**Input:**
```py
names = {"Alice", "Bob", "Charlie", "David", "David", "Eli"}#
print(names)
```
**Output**
```py
{'David', 'Charlie', 'Eli', 'Bob', 'Alice'}
```
As you can see, it only output David once. You also might have noticed the change in order, this is because sets do not have an order.

## Dictionaries
Dictionaries are laid out pretty differently to lists. It is a collection of key-value pairs, so it gives names to each item in it.

### Defining Dictionaries:
```py
about_eli = {
    'name': 'Eli',
    'age': 16,
    'city': 'London'
}
```
The Keys are the names like `name`, `age` and `city`. The values are what comes after the name, like `Eli`, `17` and `London`.

### Accessing Values
If I wanted to print my age, I could do this:
```py
print(about_eli['age'])
```
I could also save it as a variable like this:
```py
my_age = about_eli['age']
```

### Modifying Values
With dictionaries you are able to modify values. To do this, you first target the key you want to change, and then specify its new value.

**Example:**
```py
about_eli['age'] = 17
```

### Adding Key-Value Pairs
If I wanted to add a new key value pair, I could do the following:
```py
about_eli['occupation'] = 'Web Developer'
```

### Deleting Key-Value Pairs
To remove a key-value, I could do the following:
```py
del about_eli['occupation']
```


# Python Input & Output

## Logging
To log something to console you use the `print` command. For example:
```py
print("Hello World")
```

## Input
If you want to give the user an option to input something, you could use the `input()` feature. So if I wanted the variable `name` to be the users name, I could do:
```py
name = input("")
```

You could also add a prompt text before the input, like this:
```py
name = input("Please enter your name:")
```

A user input is always received as a string input, even if you just input a number. This means if you're checking if the input is the value of a number, you'll get false. As the number is an integer, and the input is a string.

To convert from an integer to a string, check out this section [here](#converting-values)


# Decision Structures and Iterations

## Assignment and Comparison
There is a difference between using `==` and `=`. They have different functionality and usecases.

 - `=` is used to assign a value
 - `==` is used to check if it is equal

## If Statements
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

## Loops
There are two kinds of loops, a `for` loop and a `while` loop.

To stop a loop from running, you could use `break`. This can be useful for if statements inside a loop.

### For Loops
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

### While Loops
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

## With
> 👉 *To be Added*

# Writing to Files
Writing to files is a very useful feature, this way you can save users info locally. This could be high scores, settings and much more!

## Specifying the File Path
To create the file you want to write to, you first need to specify its path and then when you open it it'll be created **if it does not already exist**.

**Example:**
```py
# Specifying the Path
file_path = "path/to/file.txt"

# Create the file for writing
file = open(file_path, "w")
file.close()
```

## Opening the File
To open a file you use the `open()` function. There are many different modes you can open a file with, here they are:

| Mode | Description                                           |
|------|-------------------------------------------------------|
| "w"  | Write mode. Creates a new file or overwrites an existing file.       |
| "a"  | Append mode. Appends content to an existing file or creates a new file if it doesn't exist. |
| "r"  | Read mode. Opens an existing file for reading. This is the default mode.    |
| "x"  | Exclusive creation mode. Creates a new file but raises an error if the file already exists. |
| "b"  | Binary mode. Used for binary files.                     |
| "t"  | Text mode. Used for text files. This is the default mode. |

So, if you want to open a file in read mode, you'd use `r` like so:
```py
file = open(file_path, "r")
```
In the above example, `file_path` is a variable we created at a previous point that contains the file path.

You can also combine modes, like this:
```py
file = open(file_path, "wt")
```
So now it's opening in text mode and write mode, so it overwrites an existing file.

## Writing to the File
Now that we've opened the file with the specified mode and saved it to a variable called `file`, you can write to it by adding `.write()` after it.

**Example:**
```py
file.write("Hello world!")
```

**Note: When writing to files, it'll overwrite anything already inside the file. To keep the existing contents, you can use Append.**

## Appending to a File
To append to a file, it's very similar to writing to the file, only the mode is set to `a` instead of `w`.

**Example:**
```py
filePath = ("path/to/file.txt")
file = open(filePath, "a")

file.write("Some new text...")

file.close()
```

## Closing the File
After you've written to the file, you'd want to close it. If you don't close it, the changes will not be written to the file until the entire program has been stopped. Which is not ideal and takes up unnecessary memory space. To do this, just add the below after you've written to the file:
```py
file.close()
```

# Functions
Functions are reusable blocks of code to perform a specific set of tasks.

## Creating Functions
To define a function you use the `def` keyword, to say you're defining a function. Then you give it a name.
```py
def my_function():
  print("Hello!")
```

## Calling Functions
Once a function is created you can call it as many times as is needed. This way instead of rewriting blocks of code, time and time again, you can just wrap it in a function and call it at a later time.

So if we want to call the function we just created, we'd do this:
```py
my_function()
```

## Parameters
Functions could have a parameter, these are like placeholders or variables that let you pass values into the function when it is called.

### Creating a Parameter
So if we wanted to pass a name into the function we created, so it gives a custom greeting to a person, we can use a parameter like this:
```py
def my_function(name):
  print(f"Hello {name}")
```
So now, if I want to call the function I'll do:
```py
print(my_function("Eli"))
```
and it'd `print` this:
```
Hello Eli
```

### Default Parameters / Variadic Functions
You can also assign parameters default values, for example:
```py
def greet(name, message="Hello"):
  print(f"{message}, {name}!")
```
So when you call a function you could just specify the name, like this:
```py
greet("Eli")
```
And the output would be:
```
Hello, Eli!
```

You could also override the default parameter values, like this:
```py
greet("Jack")
greet("Eli", "Hi")
```
The output would be:
```
Jack, Hello!
Eli, Hi!
```

#### Args
By using `args` in a function parameter you can accept any number of parameters, and it'll be stored as a tuple.
To use `args` you just add an asterisk before the parameter name like this:
```py
def calculate_sum(*numbers):
    total = sum(numbers)
    return total

print(calculate_sum(1, 2, 3))  # Output: 6
print(calculate_sum(4, 5, 6, 7, 8))  # Output: 30
```
In the above snippet, the function `calculate_sum` will accept any number of arguments and store them in the `numbers` parameter as a tuple. We could then easily just sum all the `numbers` arguments.

#### Kwargs
Similar to `args`, using `kwargs` lets you accept any number of keyword arguments but instead of storing them as tuples it stores them as dictionaries.
Here's an example:
```py
def user_info(**details):
    for key, value in details.items():
        print(f"{key}: {value}")

user_info(name="Eli", age=16, city="London")
```

I'll break down the example line by line:
```py
def user_info(**details):
```
The above is the start of a function, and in the parameters instead of just a normal parameter we use a `kwarg`. So now we can input however many arguments we want as dictionaries, with key-values.

```py
    for key, value in details.items():
```
Next, I created a `for` each key and value in the `details` parameter

```py
        print(f"{key}: {value}")
```
Now to specify what happens to each key-value, I set it to `print` its values.

```py
user_info(name="Eli", age=16, city="London")
```
When calling the agreement I can now create however many dictionary key-values as I want. And using the functions `for each` it'll print every key-value.

## Returning Data
In functions, the `return` statement is used to specify the functions output.
 - When a `return` statement is used, the function gets terminated. So any code after the `return` within the function is not executed

So it'd work like this:
```py
def my_function(name):
  return(f"Hello {name}")
```
Now, I can just print the function, and it'd print the functions value like this:

**Input:**
```py
print(my_function("Eli"))
```
**Output:**
```py
Hello Eli
```
The benefit of using `return` rather then `print` as in the previous example, is you have the ability to capture the `return`, you can store it to a variable or use it as an input for other computations. But with a `print`, there is no way to capture the output and re-use it.


### Docstrings
Docstrings is a place to provide documentation of a function.
 - It's placed as the first statement in the function.
 - It provides information about the purpose, usage and behaviour of a function.
 - Many IDE's offer built in support for Docstrings, this includes auto-completion, typing hints, usage examples when hovering over the function etc.

#### How to create a Docstring
Docstrings are wrapped in tipple quotes (""") and placed at the start of functions.

Here's an example of how a Docstring should be structured:
```py
def add_numbers(a, b):
    """
    Adds two numbers and returns the result.
    
    Arguments:
    a -- the first number (int or float)
    b -- the second number (int or float)
    
    Returns:
    The sum of the two numbers (int or float)
    """
    return a + b
```
In the above example, it's structured like this:
 1. First it has a brief one-line summary of what the function does
 2. Next, introduced with `Arguments`, it explains what each of the parameters are for
 3. Lastly it says what you should expect back from the function

# Object Oriented Programming
A class is a blueprint for objects. For example, you can have a class of `Car`, this will be a blueprint for how generally Cars should behave. And an individual car instance would be an object.

## Terminolagy
- **OOP:** Object Oriented Programming
- **Objects:** Same as Instances
- **Attributes:** Object characteristics
- **Parameters:** Arguments (what we pass when creating an instance of the class)
- **Methods:** A function when it's a part of a class
- **Dundermethod:**
- **Inheritence:**
- **Polymorphism:**
- **Encapsulation:**

## Classes
The below code created the `Car` class, it provides the accepted attributes as parameters. When creating classes, keep in mind:
- The class name should be capitalised
- An initialiser is a Class method that runs automatically when creating a new Object in the class
- You define the initialiser with `__init__` instead of a function name
- Self is a placeholder for the new objects name

```py
class Car:
    # The initializer (constructor) method
    def __init__(self, color, brand, speed):
        self.color = color   # Attribute
        self.brand = brand   # Attribute
        self.speed = speed   # Attribute

    # A method (function within a class) to describe the car
    def describe(self):
        print(f"This is a {self.color} {self.brand} car moving at {self.speed} mph.")
```

You can also provide default values with attributes, but the default value needs to be the last attribute specified:
```py
class Car:
    def __init__(self, color, brand = 'McLaren', speed = 225):
        self.color = color
        self.brand = brand
        self.speed = speed
```

### Creating an Object (Instance)
Now that we've created the `Car` class, we want to create an object within it, to do so we can within a variable call the `Car` class and provide the attribute values.
```py
my_car = Car("red", "Toyota", 60)
```

### Accessing Attributes
Now that we've created a class object, if we want to call a specific object value, we can just call the object name with the atribute after a `.`:
```py
print(my_car.color)        # Outputs: red
```

### Accessing Methods
my_car.describe()          # Outputs: This is a red Toyota car moving at 60 mph.

## Inheritence
Usually when defining a class, you do not add the round brackets. But when you want to inherit values from another class, you add the parent class within brackets of the newly defined child class.

# Python Modules
Modules is essentially just code someone has written that you're able to use.

## Why Use Modules?
Modules helps us achieve Modularity: Breaking code into smaller, independent and reusable parts.
 - Simplicity
 - Maintainability
 - Reusability
 - Scoping
   - Named objects (variables / functions) won't cause conflicts between modules

## Creating a Module
Creating a module is very simple, you just paste your code into a seperate python file, for example something called `my_module.py`. And if you'd want to import the module, you'd just do:
```py
import my_module
```

## Importing a Module
To access something inside the module, you use `.` notation. So if inside the `my_module.py` I have a function called `test_function()`, I'd use `my_module.test_function()`.

I can also only import that specific function rather then the entire module, like this:
```py
from my_module import test_function, second_function
```
You can import how ever many objects as needed,, just by separating them with a comma.

## Packages
A package is just a group of modules.

### Creating a Package
To create a package, you just create a folder and put all your modules inside it. Inside that folder you'll also have to create a file called `__innit__.py`. You can leave it empty, it just tells the computer that this folder is a package.

### Importing a Package
To import a package, it's similar to modules, you just do:
```py
from my_package import *
```
In the above example `my_package` was the folder name, and `import *` makes it import everything.

If you want, you can also only import specific packages from modules, like this:
```py
from my_package import my_module_one, my_module_two
```

## The `__name__` Variable
> 👉 *To be Added*


### Random Number
Python offers a random number generator module, but to use it you first have to import it. To do this, at the start of the file, add:
```py
import random
```

This offers many helpful functions, the one I'll be using is `random.randint` and then path the range as a parameter. Here's an example:
```py
correct_answer = random.randint(1,100)
```
Now a random number between 1-100 will be generated. Both the parameters (or extremes as they're often referred to) will be included.

### Pickle
> 👉 *To be Added*

## RegEx
> &nbsp;
> 📄 **Getting Started with Regex**
> See the documentation of RegEx over [here](../Regex/ReadMe.md)
> &nbsp;

# Error Handling
You can use `try` and `except` to handle errors and give a desired output. An example is below:
```py
try:
  miles = float(miles)

  km = miles * 1.6
  print(f"{miles} miles is {km} Km.")

except ValueError:
  print("Not a number.")
```
Above we first gave it an expression to try, if it didn't work and gave us a `ValueError`, it printed **"Not a number."**. Giving the type of error (`ValueError`) in our case, is not required. Something called a **bear exception** is when you just add `except` without specifying the type of error. But then you'd struggle to find what went wrong as you'll get the same output for each.

You can follow one `except` type with another, so for example I could do `except FileNotFoundError` after `except OSERROR`. Those are both two types of problems, and now I've set an output for whatever one has come up.

# Machine Learning
A machine learning program can be used for various methods, an example being a spam filter that learns your preferences over time and improves its decision based on what is and isn't spam. Many websites like Netflix use machine learning to see what content you watch and suggest others that you'll like based on data that they've collected from you.

SKit Learn