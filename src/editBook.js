const { bookList }  = require("../data/book");
const listBooks = require("./listBooks");

function editBook(req, res){
    if(bookList.length < 1){
        res.status(200).send({ message: "Empty list!" });
    } else {
            const id = req.params.id;
            let index = bookList.findIndex(book => book.id == id);
            bookList[index] = {
                id: index,
                title: req.body.title,
                year: req.body.year,
                genre: req.body.genre,
                author: req.body.author,
            }
            res.status(200)
               .send({ message: "Book updated succesfully!"});
    }
}

module.exports = editBook;