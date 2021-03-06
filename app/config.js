var path = require('path');
var knex = require('knex');

var knexInstance = knex({
  client: 'sqlite3',
  connection: {
    filename: path.join(__dirname, './db/testdb.sqlite')
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
  } else {
    console.log('Table Exists');
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
      user.string('access_token', 255);
      user.string('username', 100).unique();
      user.string('description', 143);
      user.boolean('is_male');
      user.integer('age');
      user.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  } else {
    console.log('Table exists');
  }
});

// knexInstance.schema.hasTable('matches_users').then(function(exists) {
//   if (!exists) {
//     knexInstance.schema.createTable('matches_users', function (matches_users) {
//       matches_users.increments('matches_users_id').primary();
//       matches_users.integer('matches_id').references('matches.id');
//       matches_users.string('users_id', 100).unique().references('users.fb_id');
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   } else {
//     console.log('Table exists');
//   }
// });

var bookshelf = require('bookshelf')(knexInstance);
bookshelf.plugin('registry');

module.exports.knex = knex;
module.exports.bookshelf = bookshelf;
