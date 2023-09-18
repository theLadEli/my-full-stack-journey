// See https://aka.ms/new-console-template for more information
using System; //Means the program is using functionality from a namespace called 'system' within .NET core. A namespace is a way of grouping functionality, the way a chapter in a book groups topics.

namespace MyApp // Note: actual namespace depends on the project name.
{
    internal class Program //C# is an object oriented language, where objects are defined as classes. This is a Program Class, called 'Program' by convention.
    {
        static void Main(string[] args) // You must have a class with a static void method called 'Main'. Main is called the entry point, it signifies the beggining of the program, the Main method takes one parameter called 'args', which is an array of strings.
        {
            string myName;
            myName = "Hello";

            string newLine = Environment.NewLine;
            myName = myName + newLine;
            Console.Write(myName);
            Console.Write(myName[0]);
            Console.Write(myName[1]);
            Console.Write(myName[2]);
            Console.Write(myName[3]);
            Console.Write(myName[4]);
            Console.Write(myName[5]); // \r
            Console.Write(myName[6]); // \n
        }
    }
}