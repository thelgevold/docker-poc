var express = require('express');
var app = express();

var id;

app.get('/api/cars', function (req, res) {
  const payload = {id: id, cars: ['BMW', 'Mercedes-Benz', 'Lamborghini', 'Ferrari', 'Maserati']};
  res.json(payload);
});

const port = process.env.PORT || 9000;

app.listen(port, function () {
  id = new Date().getTime();
  console.log(`Instance ${id} Started`);
});