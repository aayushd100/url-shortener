//main directory
var express = require('express');
var app = express();
var bodyParser = require('body-parser');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));



var urlRoutes = require('./routes/urls');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.use('/', urlRoutes);

/*
app.get('/', function(req,res){
res.send("hey now brown cow!");    
})*/








app.listen(process.env.PORT, function(){
    console.log("App is running on port: "+ process.env.PORT);
});
