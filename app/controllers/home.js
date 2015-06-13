var express = require('express'),
  router = express.Router(),
  db = require('../models');

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

router.get('/buyer', function (req, res, next) {
//  db.Article.findAll().then(function (articles) {
    res.render('buyer', {
      title: 'buyer',
//      articles: articles
    });
//  });
});
router.get('/agent', function (req, res, next) {
//  db.Article.findAll().then(function (articles) {
    res.render('agent', {
      title: 'agent',
//      articles: articles
    });
//  });
});

router.get('/seller', function (req, res, next) {
//  db.Article.findAll().then(function (articles) {
    res.render('seller', {
      title: 'seller',
//      articles: articles
    });
//  });
});

router.get('/login', function (req, res, next) {
//  db.Article.findAll().then(function (articles) {
    res.render('login', {
      title: 'login',
//      articles: articles
    });
//  });
});

router.get('/signup', function (req, res, next) {
//  db.Article.findAll().then(function (articles) {
    res.render('signup', {
      title: 'signup',
//      articles: articles
    });
//  });
});



function test(){
	q("#button-page button").button().on("tap", logEvent("tap"));
var menu = q("#menu").addClass("qx-menu").appendTo(document.body).hide();
q("#menu-button").setMenu(menu);
}
