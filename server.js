var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    db = require('./models/index'),
    passport = require('passport'),
  //  session = require('express-session'),
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
  db.Course.findOne({},function(err,course){
    db.schoolCourse.find({course:course}).populate('school').exec(function(err,found){
      res.json(found);
    })
  })

});
// auth routes
app.post('/signup', function signup(req,res) {
  User.register(new User({ fullName: req.body.fullName, username: req.body.username }), req.body.password,
    function(err, newUser) {
      passport.authenticate('local')(req, res, function() {
        res.send(newUser);
      });
    }
)});

app.post('/login', passport.authenticate('local'), function(req, res){
  if(req.user){
  res.send(req.user);
} else {res.send('error')}
});

app.get('/logout', function(req, res){
  req.logout();
  res.send('logged out');
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
