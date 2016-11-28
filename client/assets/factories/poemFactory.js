myApp.factory('poemFactory', ['$http', function($http){
var factory = {}

factory.getpoems = function(callback){
  $http.get('/').then(function(returned_data){
    callback(returned_data.data)
  })
}

factory.addpoem = function(poem, callback){
  $http.post('/create', poem).then(function(returned_data){
    callback(returned_data.data);
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

return factory;
}]);
