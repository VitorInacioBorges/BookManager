const { bookList } = require("../data/book");

function addBook(req, res) {
  const newBook = {
    id: bookList.length,
    title: req.body.title,
    year: req.body.year,
    genre: req.body.genre,
    author: req.body.author,
  };
  bookList.push(newBook);
  res
    .status(200)
    .send({
      message: `ID: ${newBook.id}, Title: ${newBook.title}, Year: ${newBook.year}, Genre: ${newBook.genre}, Author: ${newBook.author}`,
    });
}

module.exports = addBook;
