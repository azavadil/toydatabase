var User = require('./models/user');
var Match = require('./models/match');

var Users = require('./collections/users');
var Matches = require('./collections/matches');


// var newUser = new User({
//   fb_id: '10',
//   username: 'Tobias Funke',
//   description: 'clown',
//   is_male: true,
//   age: 40
// });

// newUser.save()
//   .then(function(newRow){
//     console.log('newRow', newRow);
//     Users.add(newRow);
//   })
//   .catch(function(err){
//     console.log(err);
//   })
  
// new Match({ user_0_id: '1' }).fetch().then(function(found) {
//   console.log('found', found);
//   if (found) { 
//   } else { //not found cas
 
//     var match = new Match({
//       user_0_id: '1',
//       user_1_id: '10',
//       count: 1
//     });

//     match.save().then(function(newMatch) {
//       console.log('save new match');
//       Matches.add(newMatch);
//     })
//     .catch(function(err){
//       console.log(err);
//     });
//   }
// });

// var match = new Match()
//   .query({where: {user_0_id: '1'}, 
//          orWhere: {user_1_id: '10'},
//          andWhere:{count: 2}})
//   .fetch()
//   .then(function(model){
//     console.log('query: ', model);
//   })
//   .catch(function(err){
//     console.log(err);
//   });

var match = new Match({
  user_0_id: '1',
  user_1_id: '2',
  count: 1
});




console.log('break point');

 // var oldMatch = new Match() 
 //   .query({where: {user_0_id: '1'}, 
 //         orWhere: {user_1_id: '10'},
 //         andWhere:{count: 2}})
 //  .fetch()
 //  .then(function(model){
 //    console.log('query: ', model);
 //  })
 //  .catch(function(err){
 //    console.log(err);
 //  });

new Match({id:'2'})
  .fetch({withRelated:['users']})
  .then(function(results){
    console.log('results', results);
  })
  .catch(function(error){
    console.log('error', error);
  });

