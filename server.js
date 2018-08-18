var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
var app = express();
var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false })); //Inteprets client POST data "false" only allows strings or arrays to be passed


var hbs = exphbs.create({ //creates instance of handlebars which can be used globally
    helpers: {
        inc: function (index) { 
              return parseInt(index) + 1; 
         }
    },
    defaultLayout: 'main'
    });

app.engine('handlebars', hbs.engine) // uses the above handlebars instance
app.set('view engine', 'handlebars'); //set view engine to handlebars

app.use(express.static(process.cwd() + "/public")); //Targets current working directory

app.use(methodOverride("_method")); //package that looks for the text "?_method="*" appended to my POST request action from view.  *(can be PUT or DELETE)

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes); 

app.listen(port, function() {
    console.log(`App listening on port ${port}`);
});
