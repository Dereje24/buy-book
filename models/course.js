var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CourseSchema = new Schema({
  title: String
  // school: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'School'
  // }
})

var Course = mongoose.model('Course', CourseSchema);

module.exports = Course;
