var db = require('./models/index'),
    faker = require('faker'),
    bodyParser = require('body-parser'),
    count = process.argv[5] || 5;

var courseList = [
  {
    title: faker.name.title()
  }
];

var schoolList = [
  {
    name: faker.name.title()
  }
];

db.Course.remove({}, function(err){
  err ? console.log(err) :
  db.Course.create(courseList, function(err, success){
    err ? console.log(err) :
    console.log('created course', success);
  });
});

db.School.remove({}, function(err){
  err ? console.log(err) :
  db.School.create(schoolList, function(err, success){
    err ? console.log(err) :
    console.log('created schools', success);
  });
});
