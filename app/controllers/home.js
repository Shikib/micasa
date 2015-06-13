var express = require('express'),
  router = express.Router(),
  db = require('../models');

var mysqlModule = require('../../mysqlModule');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
    res.render('index', {
      title: 'Micasa',
    });
});

router.get('/search', function (req, res, next) {
  res.render('search', {
    title: 'Micasa',
  });
});

router.get('/searching', function(req, res, next) {
  var val = req.query.search;
  
  console.log(val);

  console.log(val.split(',').length);

    
  // split up into multiple variables to query appropriately
  var split_location = val.split(',');
  
  // only city specified
  if (split_location.length == 1) {
    mysqlModule.getConnection(function(err, conn) {
      mysqlModule.query(conn, "SELECT * " +
                              "FROM Property_HasA_Location " +
                              "WHERE city = '" + split_location[0] + "';",
                       res);

      }); 
   }
 
  // city + province specified
  else if (split_location.length == 2) {
    mysqlModule.getConnection(function(err, conn) {
      mysqlModule.query(conn, "SELECT * " +
                              "FROM Property_HasA_Location " +
                              "WHERE city = '" + split_location[0] + "' " +
                              "AND province = '" + split_location[1] + "';",
                       res);

      }); 
  }

  // city + province specified
  else {
    mysqlModule.getConnection(function(err, conn) {
      mysqlModule.query(conn, "SELECT * " +
                              "FROM Property_HasA_Location " +
                              "WHERE city = '" + split_location[0] + "' " +
                              "AND province = '" + split_location[1] + "' " +
                              "AND country = '" + split_location[2] + "';",
                       res);

      }); 
   }
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
 ("#menu-button").setMenu(menu);
}
