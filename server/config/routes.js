var path = require('path');
var poems = require('../controllers/poems.js');

// function loginAuthentication(req,res,next){
//   if (req.session.userId){
//     next();
//   }else{
//     res.status(401).send("User not found");
//   }
// }

module.exports = function(app){
  app.get('/', poems.index);
  app.post('/create', poems.create);
  app.get('/getpoem/:id', poems.getpoem);
  app.get('/codepoem/:id', poems.show);
  // app.post('/login', users.login);
  // app.use(loginAuthentication);
  // // app.get('/home', users.home);
  // app.get('/dashboard', users.home);
  // app.post('/addtopic', topics.addtopic);
  // app.get('/topics', topics.index);
  // app.get('/topics/:id/', topics.showtopic);
  //
  // // app.post('/user/:id/comments', comments.create);
  // app.post('/logout', users.logout);
};
