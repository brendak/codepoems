
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($httpProvider, $routeProvider) {
$httpProvider.interceptors.push(
  function($q, $location) {
  return {
      'responseError':function(rejection){
      if (rejection.status == 401){
          $location.url('/');
      }
      return $q.reject(rejection);
  }
};
});
  $routeProvider
  .when('/',{
      templateUrl: 'assets/partials/home.html',
      controller: 'poemController',
      controllerAs: "meep"
  })
  .when('/list',{
      templateUrl: 'assets/partials/list.html',
      controller: 'poemController',
      controllerAs: "meep"
  })
  .when('/poemone',{
      templateUrl: 'assets/partials/poemone.html',
      controller: 'poemController',
      controllerAs: "meep"
  })
  .when('/poemtwo',{
      templateUrl: 'assets/partials/poemtwo.html',
      controller: 'poemController',
      controllerAs: "meep"
  })
  .when('/poemthree',{
      templateUrl: 'assets/partials/poemthree.html',
      controller: 'poemController',
      controllerAs: "meep"
  })
  .when('/form',{
      templateUrl: 'assets/partials/form.html',
      controller: 'poemController',
      controllerAs: "meep"
  })
  .when('/top',{
      templateUrl: 'assets/partials/top.html',
      controller: 'poemController',
      controllerAs: "meep"
  })
  .when('/codepoem/:id',{
      templateUrl: 'assets/partials/codepoem.html',
      controller: 'showController',
      controllerAs: "meep"
  })
    .otherwise({
      redirectTo: '/'
    });
});
