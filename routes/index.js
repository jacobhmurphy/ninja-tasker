const express = require("express");
const routes = express.Router();
const db = require("../models/index.js");

var todoExample = [
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "Cupiditate quo maiores beatae natus ipsam!",
  "Doloribus reprehenderit sit ex placeat, eius nulla possimus, tenetur modi error veritatis pariatur?",
  "Eligendi, placeat ex!"
];

routes.get("/", function(req, res) {
  db.Tasks.findAll({ attributes: ["id", "taskItem"] }).then(function(results) {
    console.log(results);
    res.render("home.ejs", { todo: results });
  });
});

routes.post("/ninja", function(req, res) {
  todoExample.push(req.body.todoInputField);
  db.Tasks.create({ taskItem: req.body.todoInputField }).then(function(
    results
  ) {
    res.redirect("/");
  });
});

routes.delete("/delete/:index", function(req, res) {
  // let index = req.params.index;
  // todoExample.splice(index, 1);
  db.Tasks.destroy({ where: { id: req.params.index } }).then(function(results) {
    res.json(results);
  });
});

module.exports = routes;
