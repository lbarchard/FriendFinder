//file handles all API requests
var bodyParser = require("body-parser");
var express    = require('express');  
var app        = express(); 
var friends = require("../data/friends.js")

var port = process.env.PORT || 8079;        // set our port

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTES FOR OUR HTML
// =============================================================================
var startAPI = function() {

app.use(function(req, res, next) {
    // do logging
    console.log("API Request: " + req.originalUrl);
    next(); // make sure we go to the next routes and don't stop here
});

app.get('/api/friends', function (req, res) {
    friends.find(function(friends) {
        res.json(
            friends
        )
    });
});

app.post('/api/friends', function (req, res) {
    friends.add(req.body);
    res.json({
        success: true
    })
});

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
};

exports.startAPI = startAPI;
