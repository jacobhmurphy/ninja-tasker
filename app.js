const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
  res.render("home.ejs", { todo: todoExample });
});

app.post("/", function(req, res) {
  todoExample.push(req.body.todoInputField);
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
