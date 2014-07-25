var bookshelf = require('../config').bookshelf;
var Promise = require('bluebird');
var Match = require('./match');

var User = bookshelf.Model.extend({
  tableName: 'users',
  matches: function(){
    return this.hasMany(User).through(Match);
  },
  hasTimestamps: true
});

module.exports = bookshelf.model('User', User)