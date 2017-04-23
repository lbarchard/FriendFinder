//file handles all API requests
var express    = require('express');  
var app        = express();
     
var port = process.env.PORT || 8079;        // set our port


// ROUTES FOR OUR HTML
// =============================================================================
var startAPI = function() {

app.use(function(req, res, next) {
    // do logging
    console.log("API Request: " + req.originalUrl);
    next(); // make sure we go to the next routes and don't stop here
});

app.get('/api/friends', function (req, res) {
    console.log("getting friends")
});

app.post('/api/friends', function (req, res) {
    console.log("posting friends")
});
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
};

exports.startAPI = startAPI;
