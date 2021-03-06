//main directory
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));


var urlRoutes = require('./routes/urls');
app.use(cors());

app.use('/', urlRoutes);






app.listen(process.env.PORT, function(){
    console.log("App is running on port: "+ process.env.PORT);
});
