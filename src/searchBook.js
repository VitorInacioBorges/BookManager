const { bookList } = require("../data/book");

function searchBook(req, res){
    if(bookList.length < 1){
        res.status(200).send({ message: "Empty list!" });
    } else {
        const id = req.params.id
        const results = bookList.filter(book => book.id == id);
        res.status(200)
           .send({ results });
    }
}

module.exports = searchBook;