const { bookList } = require("../data/book");

function addBook(req, res){
    const newBook = {
        id: Date.now(),
        title: req.body.title,
        year: req.body.year,
        genre: req.body.genre,
        author: req.body.author
    }
    bookList.push(newBook);
    res.status(200).send({message: `${newBook.id}, ${newBook.title}, ${newBook.year}, ${newBook.genre}, ${newBook.author}`});
}

module.exports = addBook;