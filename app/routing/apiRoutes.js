//file handles all API requests
var bodyParser = require("body-parser");
var express    = require('express'); 
var apiRouter  = express.Router(); 
var friends = require("../data/friends.js")

// configure app to use bodyParser()
// this will let us get the data from a POST
apiRouter.use(bodyParser.urlencoded({ extended: true }));
apiRouter.use(bodyParser.json());

// ROUTES FOR OUR HTML
// =============================================================================

apiRouter.use(function(req, res, next) {
    console.log("API Request: " + req.originalUrl);
    next();
});

apiRouter.get('/friends', function (req, res) {
    friends.find(function(friends) {
        res.json(
            friends
        )
    });
});

apiRouter.post('/friends', function (req, res) {
    friends.add(req.body, function(bestMatch){
        if (bestMatch === "fail") {
            res.json({
            "name": "fail",
            "photo": "bestMatch.photo"            
            })
        }
        else {
        res.json({
            "name": bestMatch.name,
            "photo": bestMatch.photo
            })
        };

    })
});

module.exports = apiRouter
