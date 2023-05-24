# Introduction to HTML
A web browser is just like an interpreters for code. It takes the code files, and it renders them. You'll typically find these three file types on websites:
 - HTML
 - CSS
 - JavaScript

Although you can't have a website with just HTML or CSS, HTML can be used as a standalone. Although, I wouldn't recomend not using any CSS, as it's a few decades behind 😅

# Why is it called HTML
HTML is an acronym for **H**yper**T**ext **M**arkup **L**anguage. HyperText refers to the peaces of text that links to other documents on the website, hyperlinked text, hypertext for short.

If you look at the worlds first website, by Sir Time Berners Lee - http://info.cern.ch/hypertext/WWW/TheProject.html
You'll find, other then it being a standalone HTML site, it's filled with hyperlinked text.

Markup Language is like the markings you'll find in an editorial review. They are signs to instruct the web browser on how to display things. In HTML these are done using Tags, some of the most common ones are `<h1>`, `<p>`, `<a>` and `<img>`.

# HTML Tags
Almost everything found on a website, will be wrapped in some form of HTML tags. This could be anything form an image tag, heading tag or even an embed tag.

There are two types of tags, a tag that needs a closing tag and a self closing tag. For a tag that needs a closing tag, a forward facing slash is usually added. It looks like this:
```html
<h1>Hello World</h1>
```

You'll often hear of two things which are used interchangeably but in reality mean different things:
1. **Tags**, this means the actual contents wrapper. So in the above example the tags would be `<h1></h1>`.
2. **Elements**, this is the content as well as the tags. So, if you look at the example above, the element is the entire thing (`<h1>Hello World</h1>).

# Indentation
You'll often see two different formatting of HTML, the first one looks like this:
```
<li>List Item</li>
```
The second one is like this:
```
<li>
    List Item
</li>
```
There is absolutely **no difference** in the output, it's just a matter of the developers personal preference.

# File Paths

There are two different path types:
 - Absolute File Paths
 - Relative File Paths

## Absolute File Paths
An absolute file path is a path that starts from the very beggining (usually the `C:` drive) and then directs the user to the file location.

It could look something like this:
```
C:/Project/Images/cat.png
```

You can be in whatever folder on the computer, and using an absolute file path you'll be able to get to where you want.

## Relative File Paths
A relative file path is a path relative only to the websites code location. So the starting point will be the `index.html` (or similar) and you'd be directing the computer to get from here, to the cat image like so:
```
Images/cat.png
```

In relative paths, as it's not starting from the very beginning of the computer, there are a few special characters that could make navigating easier:
| Character | Usage | Description |
| ----------- | ----------- | ----------- |
| `..` | ../essay.docx | This symbol tells the computer to first go up a directory and then find the `essay.docx` file |
| `.` | ./dog.png | This tells the computer that in the same file path, to find the `dog.png`. You could usually ignore the `./` and just target the file name of a file that's in the same directory |

# Boilerplate Code
On a letter you'd start off with a header containing the address, and then an introduction which you'll follow with the actual body of the letter, and lastly you'd finish with a signature or letter closing.

This is very similar to HTML files, in HTML we have a boilerplate. A typical HTML boilerplate looks like this:
```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
Inside the `head` is kept all the important information of the website that is not shown to the user. This could me the character set, title, meta information and more.

Inside the `body` is where you'll create the content for the website, this is what the user see's.