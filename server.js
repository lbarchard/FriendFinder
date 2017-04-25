var express     = require('express')
var app         = express(); 
var html        = require("./app/routing/htmlRoutes.js");
var api         = require("./app/routing/apiRoutes.js")
var port = process.env.PORT || 8080;        // set our port


app.use('/', api)
app.use('/', html)


// html.startHTML(); //allows web pages to be served up
// api.startAPI(); //allows interaction through API

//TODO
//NEED TO COMBINE TO A SINGLE API.  BOTH ARE FIGHTING FOR PORT 8080
app.listen(port);
console.log('Yo port ' + port);

