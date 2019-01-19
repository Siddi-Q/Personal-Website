const express = require("express");

const port = process.env.PORT || 3000;
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/styles'));

app.get("/", function(req, res){
  res.render("home");
});

app.get("/home", function(req, res){
  res.redirect("/");
});

app.get("/resume", function(req, res){
  res.render("resume");
});

app.get("/about", function(req, res){
  res.render("about");
});

app.get("/contact", function(req, res){
  res.render("contact");
});

app.listen(port, process.env.IP, function(){
  console.log(`sever started on ${port}!`);
});
