const { bookList } = require("../data/book");

function deleteBook(req, res) {
  const title = req.body.title;
  for (let i = 0; i < bookList.length; i++) {
    if (bookList[i].title === title) {
      bookList.splice(i, 1);
      res
        .status(200)
        .send({
         message: `Book deleted succesfully!`,
        });
      break;
    }
  }
}

module.exports = deleteBook;
