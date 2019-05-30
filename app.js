
const express = require("express");
const bodyParser = require("body-parser");

const date = require(__dirname + "/date.js");

const app = express();


const items = ["Study Code", "Study More Code", "Keep Studying Code"];
const workItems = [];


// EJS
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {

  const day = date.getDate();

  res.render("list", { listTitle: day, newListItem: items });

});

// POST request for input form
app.post("/", function(req, res){

  const item = req.body.newItem

  if (req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

});

// Work Route

app.get("/work", function(req, res){

  res.render("list", {listTitle: "Work List", newListItem: workItems});

});

app.post("/work", function( req, res){

  const item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");

});




app.listen(3000, function(){
    console.log("Server is running on port 3000");
});