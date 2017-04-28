var express     = require('express')
var app         = express(); 
var html        = require("./app/routing/htmlRoutes.js");
var api         = require("./app/routing/apiRoutes.js")
var port = process.env.PORT || 80;        // set our port

app.use('/api', api)
app.use('/', html)

app.listen(port);
console.log('Yo port ' + port);