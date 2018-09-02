module.exports = function(app){
    //route to all friends
    app.get("/api/friends", function(req, res) {
        console.log("all friends page");
        res.send("howdy fiends page")
    });

    //post for incoming survey results
    app.post("/api/friends", function(req, res) {
        console.log("post friends");
    });
};