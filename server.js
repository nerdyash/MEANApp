var express = require("express"),
    mongoose = require("mongoose");


var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log("Environment is "+ env);

var app = express();
var config = {
  rootPath : __dirname
}

require('./server/config/express')(app, config);

require('./server/config/mongoose')();

require('./server/config/passport')();

require('./server/config/routes')(app);

app.listen(process.env.PORT || 1993, function(){
  console.log("Listening on 1993...");
});
