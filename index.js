var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('App NodeJs de ejemplo para tarea2-Packer de Herramientas DevOps ## Ricardo Ollero Castela');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
