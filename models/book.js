var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: String,
  edition: String,
  price: Number,
  img: String
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course'
  },
  cart: {
    type: Schema.Types.ObjectId,
    ref: 'Cart'
  },
})

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;
