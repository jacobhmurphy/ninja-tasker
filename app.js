const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.get("/", function(req, res) {
  res.render("home.ejs", { todo: todoExample });
});

app.post("/ninja", function(req, res) {
  todoExample.push(req.body.todoInputField);
  res.render("home.ejs", { todo: todoExample });
});

app.delete("/ninja/:id", function() {
  console.log("Received a delete request.");
  // todoExample.splice(i, 1);
  res.render("home.ejs", { todo: todoExample });
});

app.listen("3000", function() {
  console.log("Listening on port 3000...");
});

var todoExample = [
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "Cupiditate quo maiores beatae natus ipsam!",
  "Doloribus reprehenderit sit ex placeat, eius nulla possimus, tenetur modi error veritatis pariatur?",
  "Eligendi, placeat ex!"
];
