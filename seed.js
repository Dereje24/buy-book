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
    name: 'San Jose City College'
  },
  {
    name: 'San Jose State University'
  },
  {
    name: 'Santa Clara University'
  }
];

db.School.remove({})
  .then(db.Course.remove({})
    .then(db.School.create({name: "USF"})
      .then(newSchool => {
        db.Course.create({title: "Tolerating others"})
          .then( newCourse => {
            newSchool.courses.push(newCourse);
            newSchool
              .save()
              .then(happySchool => {
                happySchool.populate('courses').then(succ => console.log(succ))


              })

          })
      })))

//
// db.Course.remove({}, function(err){
//   err ? console.log(err) :
//   db.Course.create(courseList, function(err, success){
//     err ? console.log(err) :
//     console.log('created course', success);
//   });
// });
//
// // db.School.remove({}, function(err){
// //   err ? console.log(err) :
// //   db.School.create(schoolList, function(err, success){
// //     err ? console.log(err) :
// //     console.log('created schools', success);
// //   });
// // });
//
// db.School.remove({}, function(err){
//   //console.log('removed all schools');
//   // db.School.create(schoolList, function(err, success){
//   //   err ? console.log(err) :
//   //   console.log('created schools', success);
//   // });
//   var title = courseList.title;
//   console.log('title', title);
//   db.Course.find({title: title}, function(err, foundCourse){
//     console.log('foundCourse on line 77', foundCourse);
//     err ? console.log(err) :
//     db.School.course = foundCourse;
//     console.log('foundCourse line 81', foundCourse);
//
//   })
// });
module.exports = {schoolList: schoolList};
