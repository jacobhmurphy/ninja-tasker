const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./models/index.js");
const routes = require("./routes/index.js");

app.set("view engine", "ejs");
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routing manager

app.use(routes);

db.sequelize.sync().then(function() {
  app.listen("3000", function(err) {
    if (err) {
      console.log(err);
    }
    console.log("Listening on port 3000...");
  });
});
