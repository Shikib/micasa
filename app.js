
var express = require('express'),
  config = require('./config/config'),
  db = require('./app/models');

var app = express();

require('./config/express')(app, config);


app.listen(config.port);




