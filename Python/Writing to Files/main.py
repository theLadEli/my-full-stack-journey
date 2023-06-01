# First I'll save the file path to a variable
file_path = r'C:\Users\cohen\Documents\GitHub\my-full-stack-journey\Python\Writing to Files\my_file.txt'

# Now we're opening the file in mode to write and trext
file_handle = open(file_path, mode='wt')

#This is what we're writing to file
file_handle.write("Hello from Python! :)")

#This saves the file input so it saves the input to file even while the program is still running
file_handle.close()