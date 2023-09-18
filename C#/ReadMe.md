# C# Basics

## Compiler and Interpreter
A compiler and interpreter transforms the code we input on a machine, into something the CPU understands and works with.

A compiler turns your code into an executable program that can run over and over, independently of any other software. An interpreter is a software program that turns your code (or script) into CPU instructions as needed, as the script executes.;

## .Net's Place 
***

### .Net
`.Net` addresses the issue of different operating systems and CPU's by providing a common instruction set, called the Common Language Runtime (CLR). The CLR is software that gets installed onto computers where you want to run .Net programs, so now, instead of coding against the OS, you code against the CLR.

`.Net` was not the first runtime environment that could be deployed to various Operating Systems, Java and the Java Runtime Environment (JRE) or Java Virtual Machine.

There are several other languages that offer .Net compatibility.

### .Net Framework
.Net started many years ago as a windows only runtime environment, which we now know as the .Net Framework. Over the years, this has evolved, starting with support for Windform Applications (Windows Apps that use native Windows controls). Then ASP was added, to support web development, followed by Silverlight (to support rich and customisable graphical interfaces).

### .Net Versions
.Net now supports a wide range of devices and use-cases, from Windows, Web, Cloud, Gaming, Mobile, IoT devices and even Ai. To support all these devices, this means different versions of .Net exists.

1. .Net Framework
2. Mono / Xamarin, an open source .Net implementation for Linux which then evolved to an android development environment
3. .Net Core

## C# Program Structure

### Variables
Variables and Data Types are closely related, variables must be of a specific Data Type.

#### Variable Declarations
A variable decleration starts with the datatype, for example `string`, this means the variable will hold a text value. You follow this by the name of the variable, variable names can start with any letter or an underscore, they can not start with a number. You don't have to initialise the variable with a value as part of the decleration, although it is best practise to do  so. This means you can declare a variable with just the datatype followed by the name and a semi-colon. You will need to give the variable a value before accessing it, otherwise the computer will assign it some arbitrary value.

### Why Do Empty Variables Get Assigned Arbitrary Values
A variable is a label identified in the memory. In C# a section of memory that can only contain data of the type the variable has been declared to hold.

### Bits, Bytes and Hexadecimals
A bit is the most elementary representation of information in a computer, it is binary and can have the value 1 or 0. A byte is made up of 8 bits, and the significance of each bit is determined by its positions within the byte.

Starting from the right, each position of the byte doubles the value the bit can represent. To represent the number `69` we need 1*64 plus 1*4 plus 1*1.

A byte ccan represent 256 different values, 0 through to 255.

Hexadecimal is base 16, decimal is base 10:
**Decimal:** [0,1,2,3,4,5,6,7,8,9]
**Hexadecimal:** [0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F]
Hexadecimal is sixteen values by using the first 5 letters of the alphabet to represent 10 through to 16.

So if we had the number `69` and wanted to convert it, it would be:
In decimal: (6 * 10) + 9 = 69
In hexadecimal: (4 * 16) + 5 = 45???

## Data Types

### Text
There are two datatype's in C# that can represent text:
#### Char
This is short for Character.
- It is used for a single characrer or letter
- It an also be used for special characters like tab or a new line, and are of course preceded with a backslash (e.g. `tab = '\t'`)
- A literal value is wrapped in single quotes (e.g. `'a'`)
- It could also be a letter digit or punt

#### String
A string is multiple characters in a row, like chars strung togethor.
- The maximum limit is theoretically over a billion
- Each character takes 2 bytes, so the max limit is 2GB
- A literal value is wrapped in double quotes (e.g. `"I am a string"`)
- Special characters like tab or new line are 'escaped' which means they preceded by a backslash (e.g. `tab = \t`)

## ASCII
ASCII stands for **American Standard Code for Information Interchange**. The ASCII table translates a number into a character, even non printing characters like tabs and backspaces. 

- A byte is represented by their hexadecimal value.
- Two bytes combined, which is 16 bits, is called a word. It could hold up to 65,536 values which is ample to display all characters.

## Unicode
- While ASCII is associated with 8-bit character representation, Unicode can represent over one million characters, including emoji's, using up to 32 bits.
- It has various forms such as UTF-8 and UTF-16

## Numbers
Numbers come in two varieties:
- **Integers:** Integer numbers are whole numbers. You don't include fractions, but do include negative numbers.
- **Real:** Real numbers include all numbers, fractions and negative fractions.

Numbers are also Signed and Unsigned:
- **Signed:** Includes negative numbers.
- **Unsigned:** Only positive numbers.



### Namespaces
### Arrays

### Clipboard:
```
// See https://aka.ms/new-console-template for more information
using System; //Means the program is using functionality from a namespace's called 'system' within .NET core. A namespace is a way of grouping functionality, the way a chapter in a book groups topics.

namespace MyApp // Note: actual namespace depends on the project name.
{
    internal class Program //C# is an object oriented language, where objects are defined as classes. This is a Program Class, called 'Program' by convention.
    {
        static void Main(string[] args) // You must have a class with a static void method called 'Main'. Main is called the entry point, it signifies the beggining of the program, the Main method takes one parameter called 'args', which is an array of strings.
        {
            string myName = args[0];
            Console.WriteLine("Hello World! From " + myName); // This is the work of the program
            Console.ReadLine(); // Waits for users input
        }
    }
}a
```