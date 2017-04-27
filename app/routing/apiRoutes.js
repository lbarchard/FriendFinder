//file handles all API requests
var bodyParser = require("body-parser");
var express    = require('express'); 
var apiRouter  = express.Router(); 
var friends = require("../data/friends.js")

apiRouter.use(bodyParser.urlencoded({ extended: true }));
apiRouter.use(bodyParser.json());

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
        res.json({
            "name": bestMatch.bestMatchName,
            "photo": bestMatch.bestMatchPhoto
        })
    })
});

module.exports = apiRouter
