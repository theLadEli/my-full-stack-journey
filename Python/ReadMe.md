# Python
Python is extremely versatile, it could be used for the backend of a webapp, for data science and much more!

## Table of Contents:
> 💡 **Note:** This may be out of date and have some broken links as this page is being continuously updated.
- [Python](#python)
  - [Table of Contents:](#table-of-contents)
  - [Python Basics](#python-basics)
    - [Expressions](#expressions)
    - [Indentation](#indentation)
    - [Scope](#scope)
  - [Variables](#variables)
    - [Creating a Variable](#creating-a-variable)
    - [Naming a Variable](#naming-a-variable)
  - [Collections](#collections)
    - [Lists](#lists)
      - [Creating a List](#creating-a-list)
      - [Accessing a List](#accessing-a-list)
      - [Editing List Items](#editing-list-items)
      - [Manipulating list items:](#manipulating-list-items)
    - [Tuple](#tuple)
    - [Sets](#sets)
    - [Dictionaries](#dictionaries)
      - [Defining Dictionaries:](#defining-dictionaries)
      - [Accessing Values](#accessing-values)
      - [Modifying Values](#modifying-values)
      - [Adding Key-Value Pairs](#adding-key-value-pairs)
      - [Deleting Key-Value Pairs](#deleting-key-value-pairs)
    - [Manipulating Collections](#manipulating-collections)
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
    - [With](#with)
  - [Writing to Files](#writing-to-files)
    - [Specifying the File Path](#specifying-the-file-path)
    - [Opening the File](#opening-the-file)
    - [Writing to the File](#writing-to-the-file)
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
- [Python Modules](#python-modules)
  - [Why Use Modules?](#why-use-modules)
  - [Creating a Module](#creating-a-module)
  - [Importing a Module](#importing-a-module)
  - [Packages](#packages)
    - [Creating a Package](#creating-a-package)
    - [Importing a Package](#importing-a-package)
    - [Random Number Generator](#random-number-generator)
    - [Pickle](#pickle)
  - [RegEx](#regex)


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

### Scope
> *To be Added*

## Variables

### Creating a Variable
In python a variable is defined simply by giving it a name and then a value.
For example:
```py
my_variable = 10
```
Unlike JS, you don;'t need to make a decision on what type of variable you're using (like a var, const etc.). And unlike C# you don't need to decide what datatype it is, Python will automatically figure it out and it will not be locked in forever, you'd be able to change it later on.

### Naming a Variable
When naming a variable there are a few guidelines that are recommended to stick to:
 1. **Descriptive Names -** A variable that accurately describes its purpose/functionality
 2. **Lowercase Letters -** For readability Python variables are typically written in all lowercase
 3. **Avoid Reserved Words -** There are some words (keywords) that are to be avoided in variable naming, as these have special meaning in the language
 4. **Keep it Concise -** It should be short to enhance readability
 5. **Snake Casing -** Use underscores to separate words (e.g. `my_variable`)
 6. **Start with a letter -** Variable names need to start with a letter (**A-Z**) or underscore (**_**)
 7. **Be Consistent -** Stick to consistent naming throughout your code to avoid confusion


## Collections
Collections is a way to store and organise lots of pieces of data. There are a few different types of collections:

### Lists
A list is an ordered sequence of values.
 - You are able to add, remove or edit items in the list after it's created.
 - You're able to have different data types in the list, so one item can be an integer, another a string etc.

#### Creating a List
To create a list, first give it a name. Then when you give it a value, wrap it in square brackets and separate each list item with a comma.

**Example:**
```py
names = ["Alice", "Bob", "Charlie", "David", "Eli"]
```

#### Accessing a List
To access an item of a list, you just target its index. Like this:
```py
names[2]
```
And that would target `Charlie`. You can also do something with it, like print it:
```py
print(names[2])
```

#### Editing List Items
To edit a list item, first you target it, and then you redefine its value.

**Example:**
```py
names[2] = Chris
```

#### Manipulating list items:
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

### Tuple
A Tuple is a lot like a list, but they are immutable. This means once a tuple is created, you can not modify any of its items.

To create a tuple, it's the same as `lists`, only with round brackets instead of square.

**Example:**
```py
names = ("Alice", "Bob", "Charlie", "David", "Eli")
```
Now this tuple is fixed and can not be modified at a later point.

### Sets
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

### Dictionaries
Dictionaries are laid out pretty differently to lists. It is a collection of key-value pairs, so it gives names to each item in it.

#### Defining Dictionaries:
```py
about_eli = {
    'name': 'Eli',
    'age': 16,
    'city': 'London'
}
```
The Keys are the names like `name`, `age` and `city`. The values are what comes after the name, like `Eli`, `17` and `London`.

#### Accessing Values
If I wanted to print my age, I could do this:
```py
print(about_eli['age'])
```
I could also save it as a variable like this:
```py
my_age = about_eli['age']
```

#### Modifying Values
With dictionaries you are able to modify values. To do this, you first target the key you want to change, and then specify its new value.

**Example:**
```py
about_eli['age'] = 17
```

#### Adding Key-Value Pairs
If I wanted to add a new key value pair, I could do the following:
```py
about_eli['occupation'] = 'Web Developer'
```

#### Deleting Key-Value Pairs
To remove a key-value, I could do the following:
```py
del about_eli['occupation']
```

### Manipulating Collections


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

### With
> 👉 *To be Added*

## Writing to Files
Writing to files is a very useful feature, this way you can save users info locally. This could be high scores, settings and much more!

### Specifying the File Path
To create the file you want to write to, you first need to specify its path and then when you open it it'll be created **if it does not already exist**.

**Example:**
```py
# Specifying the Path
file_path = "path/to/file.txt"

# Create the file for writing
file = open(file_path, "w")
file.close()
```

### Opening the File
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

### Writing to the File
Now that we've opened the file with the specified mode and saved it to a variable called `file`, you can write to it by adding `.write()` after it.

**Example:**
```py
file.write("Hello world!")
```

### Closing the File
After you've written to the file, you'd want to close it. If you don't close it, the changes will not be written to the file until the entire program has been stopped. Which is not ideal and takes up unnecessary memory space. To do this, just add the below after you've written to the file:
```py
file.close()
```

## Functions
Functions are reusable blocks of code to perform a specific set of tasks.

### Creating Functions
To define a function you use the `def` keyword, to say you're defining a function. Then you give it a name.
```py
def my_function():
  print("Hello!")
```

### Calling Functions
Once a function is created you can call it as many times as is needed. This way instead of rewriting blocks of code, time and time again, you can just wrap it in a function and call it at a later time.

So if we want to call the function we just created, we'd do this:
```py
my_function()
```

### Parameters
Functions could have a parameter, these are like placeholders or variables that let you pass values into the function when it is called.

#### Creating a Parameter
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

#### Default Parameters / Variadic Functions
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

##### Args
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

##### Kwargs
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

### Returning Data
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


#### Docstrings
Docstrings is a place to provide documentation of a function.
 - It's placed as the first statement in the function.
 - It provides information about the purpose, usage and behaviour of a function.
 - Many IDE's offer built in support for Docstrings, this includes auto-completion, typing hints, usage examples when hovering over the function etc.

##### How to create a Docstring
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

### Pickle
> 👉 *To be Added*

## RegEx
> &nbsp;
> 📄 **Getting Started with Regex**
> See the documentation of RegEx over [here](../Regex/ReadMe.md)
> &nbsp;