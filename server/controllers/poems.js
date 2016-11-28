var mongoose = require('mongoose');
var Poem = mongoose.model('Poem');

function poemsController(){
  this.index = function(req,res){
    Poem.find({}, function(err, poems) {
      res.json(poems);
    })
  };

this.create = function(req,res){
  Poem.create(req.body, function(err, result) {
    if(err) {
      console.log('There were validation errors', err);
      res.json(err);
    } else {
      console.log(result);
      console.log('successfully added a friend!');
   res.json(result);
 }
})
}
this.show = function(req,res){
  Poem.findOne({_id: req.params.id}, function(err, poem) {
    if(err) {
    console.log('wrong id');
    } else {
      console.log(poem);
      res.json(poem);
}
})
}
this.getpoem = function(req,res){
  Poem.findOne({_id: req.params.id}, function(err, poem) {
    if(err) {
    console.log('wrong id');
    } else {
      console.log(poem);
      res.json(poem);
}
})
}


};

module.exports = new poemsController(); // what does this export?
