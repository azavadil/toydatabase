var User = require('./models/user');
var Match = require('./models/match');

var Users = require('./collections/users');
var Matches = require('./collections/matches');

var knex = require('./config').knex;


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

var createMatch = function(userId){
  var match = new Match({
    user_0_id: 1,
    user_1_id: userId,
    count: 1
  });

  match.save()
    .then(function(newMatch){
      new User()
        .query({where:{fb_id: newMatch.attributes.user_0_id}})
        .fetch()
        .then(function(user){
          console.log('user_0', user);
          newMatch.users().attach(user)
          .then(function(relation){
            console.log('match attached');
          });
        });
      // new User()
      //   .query({where:{fb_id: newMatch.attributes.user_1_id}})
      //   .fetch()
      //   .then(function(user){
      //     console.log('user1', user);
      //     newMatch.users().attach(user)
      //     .then(function(relation){
      //       console.log('match attatched');
      //     });
      //   });
    });
}; 


var matchExists = function(){
  new Match()
    .query({where:{matches_users_id: 1}})
    .fetch()
    .then(function(match){
      new User()
      .query({where:{fb_id: newMatch.attributes.user_0_id}})
      .fetch()
      .then(function(user){
        console.log('user_0', user);
        newMatch.users().attach(user)
        .then(function(relation){
          console.log('match attached');
        });
      });
    })
}

new Match()
 .query(function(qb){
  qb.where({user_0_id:'1'}).select()
  .leftOuterJoin('users', 'users.fb_id', 'matches.user_1_id')
  .then(function(results){
    console.log(results);
  });
 });

  // .where('users.fb_id','=','1')
  // .fetch()
  // .then(function(matches){
  //   console.log('matches', matches)
  // });

 // SELECT messages.id, messages.text, messages.roomname, users.username] 
 // FROM messages LEFT OUTER JOIN user ON messages.userid = user.id \
 // ORDER BY messages.ed DESC'
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

// new Match({id:'2'})
//   .fetch({withRelated:['users']})
//   .then(function(results){
//     console.log('results', results);
//   })
//   .catch(function(error){
//     console.log('error', error);
//   });