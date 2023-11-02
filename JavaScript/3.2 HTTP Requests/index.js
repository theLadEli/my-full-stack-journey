import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<h1>Hello world!<h1><button>Hello</button>")
});

app.get('/about', (req, res) => {
    res.send("<h1>About Me</h1><p>I am me.</p>")
});

app.get('/contact', (req, res) => {
    res.send("<h1>Contact Me</h1><p>Send me an email at info@echocreations.co.uk</p>")
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
}) 