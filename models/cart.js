var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref:'User'
  },
    book: {
      type: Schema.Types.ObjectId,
      ref: 'Book'
    }
})
