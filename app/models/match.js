var db = require('../config');
var User = require('./user')


// Model is a row in the database
var Match = db.Model.extend({
  tableName: 'matches',
  hasTimestamps: true,
  users: function(){
    return this.belongsToMany(User, 'matches_users', 'matches_id','users_id');
  },
  initialize: function(){
    //any initialize code goes here
  }
});

module.exports = Bookshelf.model('Match', Match);
