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
    name: 'Academy of Art University'
  },
  {
    name: 'Berkeley City College'
  },
  {
    name: 'Butte College'
  },
  {
    name: 'California College of the Arts'
  },
  {
    name: 'California State University Chico'
  },
  {
    name: 'California State University East Bay'
  },
  {
    name: 'Chabot College'
  },
  {
    name: 'City College of San Francisco'
  },
  {
    name: 'De Anza College'
  },
  {
    name: 'Foothill College'
  },
  {
    name: 'San Jose City College	'
  },
  {
    name: 'San Jose State University'
  },
  {
    name: 'Santa Clara University'
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
