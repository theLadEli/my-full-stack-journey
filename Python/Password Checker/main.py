"""
Check a PIN number is correct.

 - If it's correct, it should return "Welcome!".
 - If it's incorrect, it should return "Locked out of system".
"""

correctPin = 1234
secondCorrectPin = 4321


loggedIn = False

while loggedIn == False:
    userInput = input("Input your pin: ")
    userInput = int(userInput)
    
    if userInput == correctPin or userInput == secondCorrectPin:
        print("🎉 Welcome!")
        loggedIn = True
    else:
        print("🛑 Incorrect, you've been locked out of the system.")