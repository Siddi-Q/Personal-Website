const express = require("express");

const port = process.env.PORT || 3000;
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/assets/styles'));
app.use(express.static(__dirname + '/assets/js'));

app.get("/", function(req, res){
  res.render("home", {page: "Home"});
});

app.get("/home", function(req, res){
  res.redirect("/");
});

app.get("/resume", function(req, res){
  res.render("resume", {page: "Resume"});
});

app.get("/about", function(req, res){
  res.render("about", {page: "About"});
});

app.get("/contact", function(req, res){
  res.render("contact", {page: "Contact"});
});

app.listen(port, process.env.IP, function(){
  console.log(`sever started on ${port}!`);
});
