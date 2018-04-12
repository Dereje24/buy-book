var mongoose = require('mongoose'),
    Book = require('./book'),
    Course = require('./course'),
    School = require('./school'),
    User = require('./user');
    schoolCourse=require('./school-course'),
    dbUrl = process.env.MONGODB_URI || 'mongodb://localhost/buy-book';

mongoose.connect(dbUrl, {promiseLibrary: global.Promise});

module.exports = {
  Book: Book,
  Course: Course,
  School: School,
  User: User,
  schoolCourse: schoolCourse
};
