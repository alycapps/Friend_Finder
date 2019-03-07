var friendsArray = require("../data/friends.js");

module.exports = function(app, path){
    //route to all friends
    app.get("/api/friends", function(req, res) {
        res.send(friendsArray);
    });

    //post for incoming survey results
    app.post("/api/friends", function(req, res) {
        var user = req.body;
        friendsArray.push(user);
    });
};