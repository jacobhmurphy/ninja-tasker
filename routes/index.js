const express = require("express");
const routes = express.Router();

var todoExample = [
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "Cupiditate quo maiores beatae natus ipsam!",
  "Doloribus reprehenderit sit ex placeat, eius nulla possimus, tenetur modi error veritatis pariatur?",
  "Eligendi, placeat ex!"
];

routes.get("/", function(req, res) {
  res.render("home.ejs", { todo: todoExample });
});

routes.post("/ninja", function(req, res) {
  todoExample.push(req.body.todoInputField);
  res.render("home.ejs", { todo: todoExample });
});

routes.delete("/delete/:index", function(req, res) {
  let index = req.params.index;
  todoExample.splice(index, 1);
  res.json(todoExample);
});

module.exports = routes;
