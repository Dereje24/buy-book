var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SchoolSchema = new Schema({
  course:
  {
    type: Schema.Types.ObjectId,
    ref: 'Course'
  }
})
