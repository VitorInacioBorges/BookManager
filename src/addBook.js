const { bookList } = require("../data/book");

function addBook(req, res) {
  let i = 0;
  const newBook = {
    id: i,
    title: req.body.title,
    year: req.body.year,
    genre: req.body.genre,
    author: req.body.author,
  };
  i++;
  bookList.push(newBook);
  res
    .status(200)
    .send({
      message: `ID: ${newBook.id}, Title: ${newBook.title}, Year: ${newBook.year}, Genre: ${newBook.genre}, Author: ${newBook.author}`,
    });
}

module.exports = addBook;
