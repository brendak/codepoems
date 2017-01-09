myApp.factory('poemFactory', ['$http', function($http){
var factory = {}

factory.getpoems = function(callback){
  $http.get('/').then(function(returned_data){
    callback(returned_data.data)
  })
}

factory.addpoem = function(poem, callback){
  console.log('adding poem in facotry rerout to server')
  $http.post('/create', poem).then(function(returned_data){
    callback(returned_data.data);
  })
}

factory.addnewpoem = function(poem, callback){
  console.log('adding poem in facotry rerout to server')
  $http.post('/createnew', poem).then(function(returned_data){
    console.log(returned_data.data);
    if (typeof(callback) == 'function'){
      callback(returned_data.data);
    }
  })
}

factory.newSavedPoem = function(poem, callback){
  console.log("adding new poem in factory rerout to server")
  $http.post('/createnew', poem).then(function(returned_data){
    callback(returned_data.data)
  })
}

factory.getpoem = function(id, callback){
  $http.get('/getpoem/'+id).then(function(returned_data){
    callback(returned_data.data);
  })
}

factory.show = function(id, callback){
  $http.get('/codepoem/'+id).then(function(returned_data){
    callback(returned_data.data);
  })
}

//newly added to show poems from database to list.html
factory.shownew = function(callback){
  $http.get('/shownewpoem').then(function(returned_data){
    console.log(returned_data.data);
    console.log('in the shownew factory')
    callback(returned_data.data);
  })
}
return factory;
}]);
