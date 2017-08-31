
module.exports = function(app) {
  var google = require('googleapis');
  var googleAuth = require('google-auth-library');
  var fs = require('fs');

  // Get homepage
  app.get('/',function(req,res){
    res.render('index',{ title: 'Feedster' });
  });

};
