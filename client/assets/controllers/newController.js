
myApp.controller('newController', ['poemFactory', newController]);

function newController(poemFactory){
  var _this = this;
  function setPoems(data){
    _this.poems = data;
    _this.poem = {};
  }
  this.poems = {};
  this.poem = {};

  poemFactory.getpoems(setPoems);

  this.addpoem = function(){
    poemFactory.addpoem(this.poem, setPoems);
    $location.path('/codepoem/:id');
  };

  this.editpoem = function(){
    poemFactory.editpoem(this.poem);
  };

  this.showpoem = function(){
    poemFactory.showpoem($routeParams.id, this.poem);
  };

  this.deletepoem = function(id){
    poemFactory.deletepoem(id,setPoems);
  };
}
