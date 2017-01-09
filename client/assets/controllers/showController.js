myApp.controller('showController', ['poemFactory', '$location', '$routeParams', showController]);

function showController(poemFactory, $location, $routeParams){
  var _this = this;


  function showpoem(){
    console.log('in the function showpoem client side')
    poemFactory.getpoem($routeParams.id, function(data){
      _this.Poem=data;
    })
  }
  this.Poem = {};
  this.poems = {};
  showpoem();

  this.newSavedPoem = function(){
      var placeholder = document.getElementById("poemtitle").getAttribute("value");
      if (_this.newpoem.title == null){
        _this.newpoem.title = placeholder;
      }
    poemFactory.newSavedPoem(_this.newpoem, function(data) {
      console.log(_this.newpoem)
      if(data.hasOwnProperty('errors')){
        _this.poemErrors = data.errors;
        console.log(data.errors);
      } else {
        console.log('adding poem')
        showpoem(data);
      }
    })
  }

}
