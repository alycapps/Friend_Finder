var friendsArray = require("../data/friends.js");
var user;
module.exports = function(app, path){
    //route to all friends
    app.get("/api/friends", function(req, res) {
        console.log("all friends page");
        res.send(friendsArray);
    });

    //post for incoming survey results
    app.post("/api/friends", function(req, res) {
        console.log("post friends");
        console.log("you clicked me");
        user = req.body;
        // friendsArray.push(user);
        // res.json(friendsArray);
        // res.json(user);
        bestfriends(user);
    });
};

//function to determine match for user
var totals = [];
function bestfriends(user) {
    console.log("best friends function ran")
    //calculates the difference in choices for each friend in the array
    for (var i=0; i <friendsArray.length; i++) {
        var count = 0;
        var sum = 0;
        for (var j=0; j<10; j++) {
            var friendNum = parseInt(friendsArray[i].scores[j]);
            var userNum = parseInt(user.scores[j]);
            sum = sum + Math.abs(friendNum - userNum);
            count ++;
            if (count == 10) {
                totals.push(sum);
                console.log(sum + "final");
                console.log(totals + "totals array");
                console.log("-----------");
            }
        }
    }
    findBFF();
}
var BFFName;
var BFFPic;
function findBFF() {
    console.log(Math.min(...totals) + "min");
    var minDiff = Math.min(...totals);
    for (var l=0; l<totals.length; l++) {
        if (minDiff === totals[l]) {
            console.log(friendsArray[l]);
            BFFName = friendsArray[l].name;
            BFFPic = friendsArray[l].photo;
            console.log("Your new best friend is " + BFFName + "\n" + BFFPic);
            friendsArray.push(user);
            return displayBFF();
        }
        // else {
        //     console.log("not a match");
        // }
    }
}

function displayBFF() {
    console.log
}