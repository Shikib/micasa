
var express = require('express'),
  config = require('./config/config'),
  db = require('./app/models');
var create_tables = require('./app/models/create_table.js'); 
var populate_tables = require('./app/models/populate_tables.js'); 
var app = express();

require('./config/express')(app, config);

create_tables.initialize_tables();
populate_tables.populate_tables();

app.listen(config.port);




