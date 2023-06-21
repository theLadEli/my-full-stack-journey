"""
A function to convert celsius to fahrenheit
"""

def ctof(celsius):
    """
    Convert Celsius to Fahrenheit
    """
    return( (celsius*9/5) + 32 )

celsius = input("Input the temprature in Celsius: ")
print(ctof(int(celsius)))