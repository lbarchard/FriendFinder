var friends = []

exports.add = function(answers, callback) {
    var result = match(answers);
    friends.push(answers)
    callback(result)//harcoded or now

};

exports.find = function(callback) {
    callback(friends)
};

match = function(friendToMatch) {
    result = {}
    result.bestMatchName = ""
    result.bestMatchPhoto = ""
    result.closestScore = 99999
    result.currentScore = 0
    if (friends.length === 0) {
    }
    else {
        
        friends.forEach(function(element) {
            for (var index = 0; index < element.scores.length; index++) {
                result.currentScore = result.currentScore + Math.abs(element.scores[index]-friendToMatch.scores[index]);
            }        
            if (result.currentScore < result.closestScore) {
                result.closestScore = result.currentScore
                result.currentScore = 0
                result.bestMatchName = element.name
                result.bestMatchPhoto = element.photo
            }
        }, this);
    }
    return result
};