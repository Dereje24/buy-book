var db = require('../models');
var Book = db.Book;


module.exports = {
  create: function (req, res){
    var newBook = req.body;
    //console.log(newBook);
    Book.create(newBook, function (err, savedBook){
        err ? res.status(500).json({error: err.message}) :
        res.send(savedBook);

    });
  },

  show: function (req, res){
    //var bookId = req.params.bookId;

    db.Book.find().populate('books')
    .exec(function (err, allBook){
      err ? res.status(500).json({error: err.message}) :
      res.send(allBook);
    });
  },
  destroy: function (req, res){
    var BookId = req.params.id;

    db.Book.findOneAndRemove({_id: bookId})
    .exec(function (err, deleteBook){
      err ? res.status(500).json({error: err.message}) :
      res.send('Book deleted');
    });
  },
  update: function(req, res){
    var bookId = req.params.id;

    db.Book.findOneAndUpdate({_id: bookId}, req.body, {new: true})
    .exec(function (err, bookUpdated){
      err ? res.status(500).json({error: err.message}) :
      res.send(bookUpdated);
    });
  }
}
