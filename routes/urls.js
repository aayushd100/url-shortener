//routes directory
var express = require('express');
var router = express.Router();
var db = require('../models');
var helpers = require('../helpers/urls')







router.route('/api/')
    .post(helpers.createUrl)
    .get(helpers.getUrls)

router.route('/api/:urlId')
    // .get(helpers.getUrl)
    .delete(helpers.deleteUrl)


router.route('/:shortenedUrl')
    .get(helpers.getUrl)
    



module.exports = router;
