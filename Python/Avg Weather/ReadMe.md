# Average Weather
### Aim
To get the weather for each day of the week and return the average.

## Solution
To do this it was pretty simple, I created variables for each day of the week, giving them each the value of that days weather:
```py
mon = 19
tues = 21
wed = 22
thur = 23
fri = 24
sat = 27
sun = 26
```

Next I created another variable where the results will be stored, in here I added all the previous variables. I wrapped the addition in brackets as Python follows the laws of Bidmas, and I didn't want it to divide `sun` by `7`, I first wanted it to add up  all the days:
```py
averageWeather = (mon + tues + wed + thur + fri + sat + sun) / 7
```

Once I had the results I wanted to round it down to two digits, to do this I used the `round()` function. I gave it two parameters, the first one the value to round - which in this case was the variable `averageWeather`. The second parameter was how many digits:
```py
averageWeatherRounded = round(averageWeather, 2)
```

Lastly I printed the results to console:
```py
print(f"The average weather this week is {averageWeatherRounded} degrees celsius.")
```

## Output
Now upon running it gave me the below output:
```
The average weather this week is 23.14 degrees celsius.
```