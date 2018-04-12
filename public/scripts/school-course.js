var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schoolCourseSchema = new Schema ({
  school: {
    type: Schema.Types.ObjectId,
    ref: 'School'
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course'
  }
});

var schoolCourse = mongoose.model('schoolCourse', schoolCourseSchema);

module.exports = schoolCourse;
