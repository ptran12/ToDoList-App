
const express = require("express");
const bodyParser = require("body-parser");

const date = require(__dirname + "/date.js");

console.log(date);

const app = express();


let items = ["Study Code", "Study More Code", "Keep Studying Code"];
let workItems = [];


// EJS
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {

  // var today = new Date();

  // var options = {
  //   weekday: "long",
  //   day: "numeric",
  //   month: "long"
  // };

  // var day = today.toLocaleDateString("en-US", options);

  res.render("list", { listTitle: day, newListItem: items });

});

// POST request for input form
app.post("/", function(req, res){

  let item = req.body.newItem

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

  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");

});




app.listen(3000, function(){
    console.log("Server is running on port 3000");
});