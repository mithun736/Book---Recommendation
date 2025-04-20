const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

let books = [];

// Endpoint to get all books
app.get('/books', (req, res) => {
    res.json(books);
});

// Endpoint to add a new book recommendation
app.post('/recommend', (req, res) => {
    const { title, author } = req.body;
    books.push({ title, author });
    res.json({ message: 'Book added successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
