isValid = True

# Ask for a new password
newPassword = input("Type your password here: ")

# Check password is longer then 8 characters
if len(newPassword) <= 8:
    isValid = False

# Check it contains no spaces
elif ' ' in newPassword:
    isValid = False
    
# Ensure it has at least one digit
containsDigit = False

for char in newPassword:
    if char in "0123456789":
        containsDigit = True
        
# Ensure it has at least one letter
containsLetter = False

for char in newPassword:
    if char.lower() in "abcdefghijklmnopqrstuvwxyz":
        containsLetter = True
        
# Ensure it has a punctuation mark
containsPunctuation = False

for char in newPassword:
    if char in "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~":
        containsPunctuation = True
        
if not (containsDigit and containsLetter and containsPunctuation):
    isValid = False
    
if isValid:
    print("✅ Password accepted")
else:
    print("❌ Password does not meet the criteria")

