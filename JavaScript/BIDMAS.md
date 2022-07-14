# Bidmas
**In programming we have Bidmas. So if we have an addition and multiplication, the multiplication takes priority.**


Multiplication and division always take precedence over addition and subtraction

## Example One:
```js
var cost = 3 + 5 * 2;
```
Over here, as multiplication takes precedence, we do that first. So it'd be `5 * 2` which equals `10`, and then we add `3`. So the answer to this would be `13`.


## Example Two:
If you wanted to do the addition or subtraction first, you'd put them in parenthesis.
```js
var cost = (3 + 5) * 2;
```
Now that it's in parenthesis, we do it first. So `3 + 5` equals 8, and times that by `2` and we get 16.


* **Sometimes, even when we know rules of Bidmas anyway make it apply, we use parenthesis just to make reading it clearer**
