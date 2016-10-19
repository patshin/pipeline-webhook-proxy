/*eslint-env node*/

var express = require('express');
var request = require('request');

var app = express();
app.post('/:url', function(req,res) {
  var url = decodeURIComponent(req.params.url);
  console.log(url);
  if (url) {
    req.pipe(request.post(url));
  }
  res.end();
});

app.listen(process.env.PORT || 3000, '0.0.0.0', function() {
  console.log("server starting");
});
