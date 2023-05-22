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

