var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SchoolSchema = new Schema({
  name: String,
  course: {
    type:Schema.Types.ObjectId,
    ref: 'Course'
  }
});

var School = mongoose.model('School', SchoolSchema);

module.exports = School;
