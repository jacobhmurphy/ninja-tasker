const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./models/index.js");

app.set("view engine", "ejs");
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var todoExample = [
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "Cupiditate quo maiores beatae natus ipsam!",
  "Doloribus reprehenderit sit ex placeat, eius nulla possimus, tenetur modi error veritatis pariatur?",
  "Eligendi, placeat ex!"
];

app.get("/", function(req, res) {
  res.render("home.ejs", { todo: todoExample });
});

app.post("/ninja", function(req, res) {
  todoExample.push(req.body.todoInputField);
  res.render("home.ejs", { todo: todoExample });
});

app.delete("/delete/:index", function(req, res) {
  let index = req.params.index;
  todoExample.splice(index, 1);
  res.json(todoExample);
});

db.sequelize.sync().then(function() {
  app.listen("3000", function(err) {
    if (err) {
      console.log(err);
    }
    console.log("Listening on port 3000...");
  });
});
