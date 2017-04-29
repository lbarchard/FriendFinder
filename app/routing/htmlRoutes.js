//file handles all HTML GET requests
var express    = require('express');  
var htmlRouter  = express.Router(); 
var path       = require("path");
     
htmlRouter.use(function(req, res, next) {
    console.log("User navigated to route: " + req.originalUrl);
    next();
});

htmlRouter.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '../public', 'survey.html'));
});

htmlRouter.use(function (req, res) {
    res.sendFile(path.join(__dirname, '../public', 'home.html'));
});

module.exports = htmlRouter