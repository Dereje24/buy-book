var db = require('../models');
var User = db.User;


module.exports = {
  create: function (req, res){
    var newUser = req.body;
    User.create(newUser, function (err, savedUser){
        err ? res.status(500).json({error: err.message}) :
        res.send(savedUser);
    });
  },

  show: function (req, res){
    var userId = req.params.userId;
    User.findOne({_id: userId}, function(err, oneUser){
      err ? res.status(500).json({error: err.message}) :
      res.send(oneUser);
    });
  },
  destroy: function (req, res){
    var userId = req.params.userId;
    User.findOneAndRemove({_id: userId}, function(err, deleteUser){
      err ? res.status(500).json({error: err.message}) :
      res.send('User deleted');
    });
  },
  update: function(req, res){
    var userId = req.params.userId;
    var updateUser = req.body;
    User.findOneAndUpdate({_id: userId}, req.body, {new: true}, function(err, userUpdated){
      err ? res.status(500).json({error: err.message}) :
      res.send(userUpdated);
    });
  }
}
