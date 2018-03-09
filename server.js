//Dependencies
const express = require('express');
const method = require('method-override');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const app = express();

// set port to 3000 or whatever heroku (deployment site) sets it to
var PORT = process.env.PORT || 3000;

// express middleware needed for serving static files. For more details
// see here: http://expressjs.com/en/starter/static-files.html
app.use(express.static(__dirname + '/public'));

/// bodyparsers 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

// override with POST having ?_method=DELETE or PUT
app.use(method('_method'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("../controllers/burgers_controller.js");
app.use('/', routes);

// Initiate the listener.
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
