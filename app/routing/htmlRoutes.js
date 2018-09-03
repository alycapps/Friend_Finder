module.exports = function(app, path){
//home page display
    app.get("/", function(req, res) {
        console.log("home page");
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    //survey route
    app.get("/survey", function(req, res) {
        console.log("survey page");
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}
