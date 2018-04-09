var db = require('../models');
var Book = db.Book;


module.exports = {
  create: function (req, res){
    var newBook = req.body;
    Book.create(newBook, function (err, savedBook){
        err ? res.status(500).json({error: err.message}) :
        res.send(savedBook);
    });
  },

  show: function (req, res){
    var bookId = req.params.bookId;
    Book.findOne({_id: bookId}, function(err, oneBook){
      err ? res.status(500).json({error: err.message}) :
      res.send(oneBook);
    });
  },
  destroy: function (req, res){
    var BookId = req.params.bookId;
    Book.findOneAndRemove({_id: bookId}, function(err, deleteBook){
      err ? res.status(500).json({error: err.message}) :
      res.send('Book deleted');
    });
  },
  update: function(req, res){
    var bookId = req.params.bookId;
    var updateBook = req.body;
    Book.findOneAndUpdate({_id: bookId}, req.body, {new: true}, function(err, bookUpdated){
      err ? res.status(500).json({error: err.message}) :
      res.send(bookUpdated);
    });
  };
}
