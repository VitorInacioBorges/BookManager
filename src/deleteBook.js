const { bookList } = require("../data/book");

function deleteBook(req, res){
    const title = req.body.title;
    let i = 0;
    for ( ; i < bookList.length; i++) {
        if (bookList[i].title === title) {
            bookList.splice(i, 1);
            break;
        }
    }
    res.status(200).send({message: `Livro: ${i}, Título: ${bookList[i].title} deletado com sucesso!`});
}

module.exports = deleteBook;