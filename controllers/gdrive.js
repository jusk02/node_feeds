module.exports = function(app) {
  var express = require('express');
  var google = require('googleapis');
  var googleAuth = require('google-auth-library');
  var fs = require('fs');

  var getAllFiles = function getAllFiles(auth) {
    var service = google.drive('v2');
    return service.files.list({
      auth:auth,
      maxResults: 10,
    });
  }
};
