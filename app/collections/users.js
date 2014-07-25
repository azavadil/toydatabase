// NOTE: this file is not needed when using MongoDB
var bookshelf = require('../config').bookshelf;
var User = require('../models/user');

var Users = new bookshelf.Collection();

Users.model = User;

module.exports = Users;