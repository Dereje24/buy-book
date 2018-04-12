var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    db = require('./models/index'),
    passport = require('passport'),
    //session = require('express-session'),
    router = express.Router(),
    LocalStrategy = require('passport-local').Strategy;

// DB
var User = db.User;
// import controllers
var indexCtrl = require('./controllers/index');

// static files
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true })); // req.body


// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// passport config
passport.use(new LocalStrategy(db.User.authenticate()));
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());

// SET EJS
app.set('view engine', 'ejs');

// HOME PAGE ROUTES
app.get('/', function(req, res){

    res.render('index');
  })

app.get('/api/allSchoolCourse',function(req,res){
  let all={

  };
    db.schoolCourse.find().populate('school')
      .populate('course')
        .exec(function(err,found){
        for(let i = 0; i < found.length; i++){
          let name = found[i].school.name;
          //console.log(name);
          if(all[name]){
            all[name].courses.push({course:found[i].course,id:found[i]._id});
          }else{
            all[name]={
              courses:[{course:found[i].course,id:found[i]._id}]
            }

          }

        }
        res.status(200).json({all}) ;
    })
})


// auth routes
app.get('/signup', function (req, res){
  res.render('signup')
});
app.post('/signup', function signup(req,res) {
  User.register(new User({ firstName: req.body.firstName, lastName: req.body.lastName, username: req.body.username }), req.body.password,
    function(err, newUser) {
      passport.authenticate('local')(req, res, function() {
        res.send(newUser);
      });
    }
)});


app.get('/login', function (req, res){
  res.render('login')
});
app.post('/login', passport.authenticate('local'), function(req, res){
  res.redirect('/profile')
});
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    console.log("User authenticated.");
    return next(); }
    res.redirect('/login');
  }

app.use('/', ensureAuthenticated);

app.get('/profile', function(req, res){
  res.render('profile')
});

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

// CRUD FOR BOOK
app.post('/api/books', indexCtrl.book.create);
app.put('/api/books/:id', indexCtrl.book.update);
app.get('/api/books', indexCtrl.book.show);
//app.get('/api/books/id', indexCtrl.book.show);
app.delete('/api/books/id', indexCtrl.book.destroy);

// LIST ALL SCHOOLS
app.get('/api/schools', function(req, res){
  res.json(school);

});






app.listen(process.env.PORT || 3000, function(){
  console.log('server started');
});
