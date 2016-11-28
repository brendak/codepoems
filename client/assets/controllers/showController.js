myApp.controller('showController', ['poemFactory', '$location', '$routeParams', showController]);

function showController(poemFactory, $location, $routeParams){
  var _this = this;

  function showpoem(){
    poemFactory.getpoem($routeParams.id, function(data){
      this.Poem=data;
    })
  }
  showpoem();
}
