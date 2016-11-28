
myApp.controller('poemController', ['poemFactory', '$location', '$routeParams', poemController]);

function poemController(poemFactory, $location, $routeParams){
  var _this = this;

  function showpoem(data){
    poemFactory.show(data._id, function(data){
      this.Poem=data;
      if(data.hasOwnProperty('errors')){
        _this.poemErrors = data.errors;
        console.log(data.errors);
      } else {
        $location.path('/codepoem/'+data._id);
      }
    })
  }

  this.addpoem = function(){
    poemFactory.addpoem(this.poem, function(data) {
      if(data.hasOwnProperty('errors')){
        _this.poemErrors = data.errors;
        console.log(data.errors);
      } else {
        showpoem(data);
      }
    })
  }

}
