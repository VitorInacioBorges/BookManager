const express = require('express');
const addBook = require('./src/addBook');

const port = 3000;
const app = express();
app.use(express.json());

app.post('/book', addBook);

app.post('/', (req, res) => {
    res.send("server funcionando");
})

app.listen(port, () => {
    console.log(`rodando na porta ${port}`);
})