'use strict';
let express = require('express');
let router = express.Router();
let jsdom = require("jsdom");


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Key Performance Indicators'
    });
});

module.exports = router;
