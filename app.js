// modules to use
const express = require("express");

// create app
const app = express();

// set up view engine
app.set("view engine", "ejs");

// middleware
app.use(express.static("./public"));

// dummy data
let list = ["Create programs", "Plan to take over the world"];

// ***********
// ROUTES
// ***********
app.get("/home", function(req, res) {
  res.render("index.ejs", { list: list });
});

// turn on server
app.listen(3000, () => {
  console.log("server is live");
});
