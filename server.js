var express = require('express');
var app = express();

app.use(express.static(__dirname + '/src'));

app.get('/', function(req, res) {
  res.render('index.html')
})

app.listen(4000, function() {
  console.log('Listening on localhost port 4000')
})
