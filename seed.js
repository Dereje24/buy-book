var db = require('./models/index'),
    faker = require('faker');

var courseList = [
  {
    title: 'Math'
  },
  {
    title: 'English'
  },
  {
    title: 'Biology'
  },
  {
    title: 'Chemistry'
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

// db.School.remove({})
//   .then(db.Course.remove({})
//       //School.forEach(function(school){
//         // for(var i=0; i<10; i++){
//     .then(db.School.create({name: faker.name.title()})
//       .then(newSchool => {
//         db.Course.create({title: faker.name.title()})
//           .then( newCourse => {
//             newSchool.courses.push(newCourse);
//             newSchool
//               .save()
//               .then(happySchool => {
//                 happySchool.populate('courses').then(succ => console.log(succ))
//                 //console.log('succ');
//               })
//           })
//       }))}))

// db.School.remove({}, function(err){
//   if(err){console.log(err);}
//     db.Course.remove({}, function(err){
//       if(err){console.log(err);}
//
//           db.School.create({name: faker.name.title()},
//             newSchool => { db.Course.create({title: faker.name.title},
//              // function (err){console.log(err);}
//                newSchool.courses.push(newCourse);
//                  console.log(newSchool);
//           }))
//     })
// })


//
// db.Course.remove({}, function(err){
//   err ? console.log(err) :
//   db.Course.create(courseList, function(err, courses){
//     err ? console.log(err) :
//     console.log('created course', success);
//   });
// });
//       for( school in schoolList){
//         var college = new db.School({
//           name: school.name
//         })
//         var course = db.Course.find({})
//             college.course.push()
//        }
//
// db.School.remove({}, function(err){
//   err ? console.log(err) :
//   db.School.create(schoolList, function(err, success){
//     err ? console.log(err) :
//     console.log('created schools', success);
//   });
// });
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
db.Course.remove({},function(){
  console.log('remooved');
  db.School.remove({},function(){
    console.log('remooved school');
    db.Course.create(courseList,function(err,courseCreated){
      db.School.create(schoolList,function(err,created){
        db.schoolCourse.remove({},function(){
          for(let i=0;i<created.length;i++){
            for(let j=0;j<courseCreated.length;j++){

              db.schoolCourse.create({
                school:created[i],
                course:courseCreated[j]
              },function(a,b){
                console.log(b);
              });

            }

          }
        })

    })

    })
  })
})
