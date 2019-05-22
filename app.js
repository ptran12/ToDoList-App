
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// EJS
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day });
});

// POST request for input form
app.post("/", function(req, res){
  console.log(req.body.newItem);
})


app.listen(3000, function(){
    console.log("Server is running on port 3000");
});