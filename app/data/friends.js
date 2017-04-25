var friends = []

exports.add = function(answers, callback) {
    match(answers);
    friends.push(answers)
    callback(friends[0])//harcoded or now

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
            // console.log(element)
            for (var index = 0; index < element.scores.length; index++) {
                result.currentScore = result.currentScore + Math.abs(element.scores[index]-friendToMatch.scores[index]);
            }        
            if (result.currentScore < result.closestScore) {
                bestScore = result.closestScore
                result.closestScore = bestScore
                result.bestMatchName = element.name
                result.bestMatchPhoto = element.photo
                // console.log("Found a better match:")
                // console.log(result)    
            }
        }, this);
    }
    console.log("ending result value")
    console.log(result)
};