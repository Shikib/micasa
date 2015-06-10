
var express = require('express'),
  config = require('./config/config'),
  db = require('./app/models');
  create_tables = require('./app/models/create_table.js'); 
 
var app = express();

require('./config/express')(app, config);

create_tables.initialize_tables();

app.listen(config.port);




