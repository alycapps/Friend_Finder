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
        friendsArray.push(user);
    });
};