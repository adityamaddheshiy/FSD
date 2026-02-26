import express from 'express';
const app = express();
const PORT = 3000;

let books = [
    {
        id: 1,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzg'
    },
    {
        id: 2,
        title: 'To kill a Mockinbird',
        author: 'Harper lee '
    },
];

app.get('/api/book0', (rsq, res) => {
    res.json(books);
});

app.get('api/books/:id',
    (req, res) => {
        const id = parseInt(req.params.id);
        const book = books.find(book => book.id === id);
        if (book) {
            res.json(book);
        } else {
            res.status(404)
                .json({ message:'Book not found' });
        }
    });
app.listen(PORT,
    () => {
        console.log(`server is running on port ${PORT}`);

    });
