var User = require('./models/user');
var Match = require('./models/match');

var Users = require('./collections/users');
var Matches = require('./collections/matches');

console.log('start query');
  
new Match({ user_0_id: '1' }).fetch().then(function(found) {
  console.log('found', found);
  if (found) {
    if(found.attributes.count === 1){
      console.log('increment count');
      found.set({
        count:2
      });
      found.save()
      .then(function(update){
        console.log('updated', update);
      })
      .catch(function(err){
        console.log('err', err);
      })
    } else if( found.attributes.count ===2 ) {
      console.log('Error: count already 2');
    } 
  } else { //not found cas
 
    var match = new Match({
      user_0_id: '1',
      user_1_id: '10',
      count: 1
    });

    match.save().then(function(newMatch) {
      console.log('save new match');
      Matches.add(newMatch);
    })
    .catch(function(err){
      console.log(err);
    });
  }
});

var match = new Match()
  .query({where: {user_0_id: '1'}, 
         orWhere: {user_1_id: '10'},
         andWhere:{count: 2}})
  .fetch()
  .then(function(model){
    console.log('query: ', model);
  })
  .catch(function(err){
    console.log(err);
  });
  ;

console.log('match', match);





