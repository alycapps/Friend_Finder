var friendsArray = require("../data/friends.js");

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
        var user = req.body;
        // friendsArray.push(user);
        // res.json(friendsArray);
        // res.json(user);
        bestfriends(user);
    });
};

function bestfriends(user) {
    console.log("best friends function ran")
    var totals = [];
    var count = 0;
    for (var i=0; i <friendsArray.length; i++) {
        var sum = 0;
        var friendNum = parseInt(friendsArray[count].scores[i]);
        console.log(friendNum + "friend Number");
        var userNum = parseInt(user.scores[i]);
        console.log(userNum + "user number");
        sum = friendNum - userNum * -1 + sum;
        console.log(sum, "eachtime");
        count ++;
        if (count == friendsArray.length) {
            totals.push(sum);
            console.log(sum + "final");
        }
    }

}