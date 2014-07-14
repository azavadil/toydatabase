var path = require('path');
var knex = require('knex');

var knexInstance = knex({
  client: 'sqlite3',
  connection: {
    filename: path.join(__dirname, './db/testbd.sqlite')
  }
});

// our database schema will consist of three columns: user_0_id, user_1_id,
// and count. When we store a match we will always sort the ids and put
// the smaller id in the user_0_id field and te larger id in the 
// user_1_id field. This allows us to easily check for a new match 
// by sorting and then querying using the ordered ids

knexInstance.schema.hasTable('matches').then(function(exists){
  if(!exists){
    knexInstance.schema.createTable('matches', function(match){
      match.increments('id').primary();
      match.string('user_0_id', 255);
      match.string('user_1_id', 255);
      match.integer('count');
      match.timestamps();
    }).then(function(table){
      console.log('Created Table', table);
    });
  }
});



// http://knexjs.org/#Schema-createTable
// go to createTable, chainable methods
// Type of user id is string. Specified at
// https://developers.facebook.com/docs/graph-api/reference/v2.0/user
// TODO: matches and events
// TODO: pictures

knexInstance.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    knexInstance.schema.createTable('users', function (user) {
      user.string('fb_id', 100).primary();
      user.string('username', 100).unique();
      user.string('description', 143);
      user.boolean('is_male');
      user.integer('age');
      user.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

var bookshelf = require('bookshelf')(knexInstance);

module.exports = bookshelf;
