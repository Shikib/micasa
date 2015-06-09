

var express = require('express'),
  config = require('./config/config'),
  db = require('./app/models');

var app = express();

require('./config/express')(app, config);

var mysql = require('mysql');
var connection = mysql.createConnection('mysql://root:password@localhost/micasa');


/*
Example query:

connection.query("CREATE TABLE Test (" +
                "id int," +
                "name VARCHAR(200))");
*/
app.listen(config.port);




