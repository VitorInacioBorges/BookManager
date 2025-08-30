const express = require('express');
const addBook = require('./addBook');
const deleteBook = require('./deleteBook');
const port = 3000;
const app = express();
app.use(express.json());

app.post('/book', addBook);
app.delete('/book', deleteBook);

app.listen(port, () => {
    console.log(`rodando na porta ${port}`);
})