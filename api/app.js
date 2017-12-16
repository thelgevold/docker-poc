var express = require('express');
var app = express();

app.get('/api', function (req, res) {
  res.json('Hello World!');
});

const port = process.env.PORT || 9000;

app.listen(port, function () {
  console.log('App Started');
});