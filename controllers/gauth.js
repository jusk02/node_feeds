module.exports = function(app) {
  var google = require('googleapis');
  var googleAuth = require('google-auth-library');
  var fs = require('fs');

  var authenticate = function authenticate() {
    console.log('Authe here');
  }

  app.get('/auth_app',function(req,res){
    res.render('auth_app',{ title: 'Feedster' });
  });

};
