var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CourseSchema = new Schema({
  title: String,
  books: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }]
  // school: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'School'
  // }
})

var Course = mongoose.model('Course', CourseSchema);

module.exports = Course;
