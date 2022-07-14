# Changing Text Casing

## Uppercase:
```js
var name = "Eli";
```
First, we created a new variable called name
```js
name.toUpperCase();
```
Now we called that name and set it to upper case using the `.toUpperCase` function

## Lowercase:
```js
jsname.toLowerCase();
```
To make it lower case instead of upper case, we just change it to `toLowerCase`

## Example

| Variable | toChangeCaps | Output |
|--------|--------|--------|
| `var name = "Eli";` | `name.toUpperCase` | **ELI** |
| `var name = "Eli";` | `name.toLowerCase` | **eli** |
| `var name = prompt("What's your name?")`* | `name.toUpperCase` | **PROMPT INPUT UPPERCASED** |

<sub>*Third example will make the prompt input uppercase</sub>
