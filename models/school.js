var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Course = require('./course');

var SchoolSchema = new Schema({
  name: String
});

var School = mongoose.model('School', SchoolSchema);

module.exports = School;
