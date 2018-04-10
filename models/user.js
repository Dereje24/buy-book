var mongoose = require('mongoose'),
    Schema  = mongoose.Schema;

var UserSchema = new Schema({
  fullName: String,
  email: String,
  password: String
})

UserSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', UserSchema);
module.exports = User;
