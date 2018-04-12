var mongoose = require('mongoose'),
    Book = require('./book'),
    Course = require('./course'),
    School = require('./school'),
    User = require('./user');
    schoolCourse=require('./school-course');

mongoose.connect('mongodb://localhost/buy-book');

module.exports = {
  Book: Book,
  Course: Course,
  School: School,
  User: User,
  schoolCourse: schoolCourse
};
