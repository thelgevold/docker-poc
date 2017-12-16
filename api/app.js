var express = require('express');
var app = express();

app.get('/api/cars', function (req, res) {
  res.json(['BMW', 'Mercedes-Benz', 'Lamborghini', 'Ferrari', 'Maserati']);
});

const port = process.env.PORT || 9000;

app.listen(port, function () {
  console.log('App Started');
});