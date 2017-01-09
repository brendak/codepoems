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
  app.post('/createnew', poems.createnew);
  app.get('/getpoem/:id', poems.getpoem);
  app.get('/codepoem/:id', poems.show);
  app.get('/shownewpoem', poems.shownew);

};
