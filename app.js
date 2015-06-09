
var express = require('express'),
  config = require('./config/config'),
  db = require('./app/models');

var app = express();

require('./config/express')(app, config);

var mysqlModule = require("./mysqlModule");

mysqlModule.getConnection(function(err, conn) {
  conn.query("CREATE TABLE TEST (" +
        "id int," +
        "name VARCHAR(200))");
});


app.listen(config.port);




