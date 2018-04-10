var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Course = require('./course');

var SchoolSchema = new Schema({
  name: String,
  courses: [{
    type: Schema.Types.ObjectId,
    ref: 'Course'
  }]
});

var School = mongoose.model('School', SchoolSchema);

module.exports = School;
