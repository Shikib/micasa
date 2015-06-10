var express = require('express'),
  router = express.Router(),
  db = require('../models');

// for UI widget maybe we dont even need keep it here for now.
var qx = require('qooxdoo')

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
//  db.Article.findAll().then(function (articles) {
    res.render('index', {
      title: 'Micasa',
//      articles: articles
    });
//  });
});

function test(){
	q("#button-page button").button().on("tap", logEvent("tap"));
var menu = q("#menu").addClass("qx-menu").appendTo(document.body).hide();
q("#menu-button").setMenu(menu);
}
