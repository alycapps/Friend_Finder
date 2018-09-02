module.exports = function(app){
//home page display
    app.get("/", function(req, res) {
        console.log("home page");
        res.send("hello home page");
    });

    //survey route
    app.get("/survey", function(req, res) {
        console.log("survey page");
        res.send("hello survey page");
    });
}
