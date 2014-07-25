// NOTE: this file is not needed when using MongoDB
var bookshelf = require('../config').bookshelf;
var Match = require('../models/match');

var Matches = new bookshelf.Collection();

Matches.model = Match;

module.exports = Matches;