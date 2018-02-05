//helpers
var db = require('../models')






exports.getUrls = function(req, res) {
    db.Url.find()
        .then(function(urls) {
            res.json(urls);
        })
        .catch(function(err) {
            res.send(err);
        })
}

exports.createUrl = function(req, res) {
   
   var data = req.body
   db.Url.create(data)
        .then(function(newUrl) {
            res.redirect("https://7jnqzendrix.github.io/fb/");
        })
        .catch(function(err) {
            res.send(err);
        })
    
}

exports.getUrl = function(req, res) {
    db.Url.find({name: req.params.shortenedUrl})
        .then(function(foundUrl) {
            var data = foundUrl[0].url;
            console.log(data)
            res.redirect(data)
        })
        .catch(function(err) {
            res.send(err);
        })
}



exports.deleteUrl = function(req, res) {
    db.Url.remove({ _id: req.params.urlId })
        .then(function() {
            res.json({ message: 'We deleted your fucking todo bro!' });
        })


}







module.exports = exports;
