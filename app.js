var google = require('googleapis');
var googleAuth = require('google-auth-library');
var express = require('express');

var gauth = require('./controllers/gauth');
var gdrive = require('./controllers/gdrive');
var index = require('./controllers/index');

var app = express();

// set up template engine
app.set('view engine','ejs');

// static files
app.use(express.static('./public'));

// fire controllers
index(app);
gdrive(app);
gauth(app);

// listen to port 3000
app.listen(3000);
console.log('listening to port 3000 - localhost:3000');
