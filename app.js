var express = require("express");
var app = express();

app.engine('html',require(ejs).renderFile);
app.set("view-engine", "html");

app.get("/", function(req,res){
    res.render("home");
})

app.listen(process.env.PORT, process.env.IP);