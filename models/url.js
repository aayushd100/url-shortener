//models directory
var mongoose = require('mongoose');

var urlSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name can't be empty"
    },
    url: {
        type: String,
        required: "URL can't be empty"
    },
    alloted: {
        type: Boolean,
        default: true
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})

var Url = mongoose.model('Url', urlSchema);

module.exports = Url;
