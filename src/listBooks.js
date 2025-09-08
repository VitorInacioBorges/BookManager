const { bookList } = require("../data/book");

function listBooks(req, res){
    if(bookList.length < 1){
        res.status(200).send({ message: "Empty list!" });
    } else {
        bookList.forEach(book => {
            return res.status(200)
            .send({
                message: `Title: ${book.title}, Year: ${book.year}, Genre: ${book.genre}, Author: ${book.author}`
            });
        });
    }
}

module.exports = listBooks;