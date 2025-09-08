const express = require("express");
const addBook = require("./addBook");
const deleteBook = require("./deleteBook");
const listBooks = require("./listBooks");
const editBook = require("./editBook");
const searchBook = require("./searchBook");
const port = 3000;
const app = express();


app.use(express.json());

app.post("/book", addBook);
app.delete("/book", deleteBook);
app.get("/books", listBooks);
app.put("/book/:id", editBook);
app.get("/book/:id", searchBook);

app.listen(port, () => {
  console.log(`Port: ${port}`);
});
