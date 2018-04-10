var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    db = require('./models/index'),
    passport = require('passport'),
    session = require('express-session'),
    LocalStrategy = require('passport-local').Strategy;

var User = db.User;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true })); // req.body

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// passport config
passport.use(new LocalStrategy(db.User.authenticate()));
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());

// auth routes
app.post('/signup', function signup(req,res) {
  console.log(`${req.body.username} ${req.body.password}`);
  User.register(new User({ fullName: req.body.username }), ({email: req.body.email}), req.body.passwords,
    function(err, newUser) {
      passport.authenticate('local')(req, res, function() {
        res.send(newUser);
      });
    }
)
});

app.listen(process.env.PORT || 3000, function(){
  console.log('server started');
})
