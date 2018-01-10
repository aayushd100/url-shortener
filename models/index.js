//models directory
var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://public:qwerty123@ds163745.mlab.com:63745/aadb');

mongoose.Promise = Promise;

module.exports.Url = require("./url");