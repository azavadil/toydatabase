var db = require('../config');
var Promise = require('bluebird');
var Match = require('./match');

var User = db.Model.extend({
  tableName: 'users',
  matches: function(){
    return this.belongsToMany(Match, 'matches_users', 'users_id', 'matches_id');
  },
  hasTimestamps: true
});

module.exports = Bookshelf.model('User', User);
