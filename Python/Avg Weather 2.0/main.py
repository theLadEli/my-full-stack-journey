next_rain = 0
all_rain = []

while next_rain != "end":
    next_rain = input("next measurement, type 'end' to finish: ")
    
    if next_rain != "end":
        all_rain.append(float(next_rain))

ave = sum(all_rain)/len(all_rain)

print(f"The average weather is: {ave}")