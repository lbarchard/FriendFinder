//file handles all HTML GET requests
var express    = require('express');  
var app        = express();
var path       = require("path");
     
var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR HTML
// =============================================================================
var startHTML = function() {

app.use(function(req, res, next) {
    // do logging
    console.log("User navigated to route: " + req.originalUrl);
    next(); // make sure we go to the next routes and don't stop here
});

app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public', 'home.html'));
});

app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '../public', 'survey.html'));
});
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
};

exports.startHTML = startHTML;
