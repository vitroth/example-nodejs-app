var express = require('express');
var app = express();
var pjson = require('./package.json');

app.get('/', function (req, res) {
  res.send('I went to Automation Tools Bootcamp and all I got was this lousy web page.');
});

app.get('/status', function (req, res) {
  res.send('purple');
});

app.get('/version', function (req, res) {
  res.send(pjson.version);
});

var server = app.listen(8085, function() {
  console.log('Example app listening on port 8085');
});
