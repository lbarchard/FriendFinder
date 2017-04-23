var friends = []
var questionNumber = 0
var totalScoreDifference = 0
var personNumber = 0
var bestMatch = 0

exports.add = function(answers) {
    match(answers);
    friends.push(answers)
};

exports.find = function(callback) {
    callback(friends)
};

match = function(friendToMatch) {
    if (friends.length === 0) {
    }
    else {
        bestMatch = 0
        bestScore = 100000
        questionNumber = 0
        totalScoreDifference = 0
        friends.forEach(function(element) {
            (element.scores).forEach(function(score) {
                totalScoreDifference += Math.abs((score) - friendToMatch.scores[questionNumber])
                questionNumber = questionNumber + 1
                console.log(totalScoreDifference)
            }, this);
            console.log(element.name + " difference is " + totalScoreDifference)
            questionNumber = 0
            totalScoreDifference = 0
            personNumber += 1
            console.log(personNumber)
        }, this);
        if (totalScoreDifference < bestScore) {
            bestMatch = personNumber - 1
            bestScore = totalScoreDifference
            console.log("Best match is ")
            console.log(friends[bestMatch]);
            console.log(bestScore)
        }
    }
};