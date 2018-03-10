//Dependencies
const express = require('express');
const method = require('method-override');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const app = express();

// set port to 3000 or whatever heroku (deployment site) sets it to
var PORT = process.env.PORT || 3000;

// express middleware needed for serving static files. For more details
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// override with POST having ?_method=DELETE or PUT
app.use(method('_method'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");
app.use(routes);
// app.use(app.router);
// routes.initialize(app);

// Initiate the listener.
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
