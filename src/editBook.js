const bookList = require("../data/book");
const listBooks = require("./listBooks");

function editBook(req, res){
    if(bookList.length < 1){
        res.status(200).send({ message: "Empty list!" });
    } else {
        listBooks();
        let id = req.body.id;
        bookList.forEach(book => {
            if(id == book.id){
                const [removed] = 
            }
        });
    }
}

module.exports = editBook;