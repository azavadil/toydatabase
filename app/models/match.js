var bookshelf = require('../config').bookshelf;
var User = require('./user')


// Model is a row in the database
var Match = bookshelf.Model.extend({
  tableName: 'matches',
  hasTimestamps: true,
  matches: function(){
    this.belongsToMany(User,'matches', 'fb_id', 'user_0_id')
  }
}); 

module.exports = bookshelf.model('Match',Match);

