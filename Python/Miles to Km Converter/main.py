"""
Input a distance in miles and print what it is in Kilometres.
"""

# Capturing the users input
miles = input("Please type the distance in miles ")

# Convert the string input to a float so I can run calculations with it
miles = float(miles)

# Converting the miles value to Kilometres
milesInKm = miles * 1.609

# Printing the output to console
print(f"{miles} in Kilometres is {milesInKm}")