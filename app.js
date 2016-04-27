var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static(__dirname+'/'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/start.html'));
});

app.listen( process.env.PORT || 3000,  function(){
    console.log("Server start on PORT: "+(process.env.PORT || 3000));
});
