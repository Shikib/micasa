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

router.get('/buyer', function (req, res, next) {
    res.render('buyer', {
      title: 'buyer',
    });
});

router.get('/agent', function (req, res, next) {
    res.render('agent', {
      title: 'agent',
    });
});

router.get('/agent_offers', function (req, res, next) {
    res.render('agent_offers', {
      title: 'agent_offers',
    });
});

router.get('/agent_purchaseoffers_get', function (req, res, next) {
    mysqlModule.getConnection(function(err,conn) {
      mysqlModule.query(conn, "SELECT * " +
                              "FROM Offer o, PurchaseOffer_Makes po " +
                              "WHERE o.offerID=po.offerID;",
                        res);
    });
});

router.get('/agent_interest', function (req, res, next) {
    res.render('agent_interest', {
      title: 'agent_interest',
    });
});

router.get('/agent_interest_get', function (req, res, next) {
    mysqlModule.getConnection(function(err,conn) {
      mysqlModule.query(conn, "SELECT * " +
                              "FROM InterestedIn i, PostSale p " +
                              "WHERE i.propertyID=p.propertyID;",
                        res);
    });
});

router.get('/agent_appointments', function (req, res, next) {
    res.render('agent_appointments', {
      title: 'agent_appointments',
    });
});

router.get('/seller', function (req, res, next) {
    res.render('seller', {
      title: 'seller',
    });
});

router.get('/login', function (req, res, next) {
    res.render('login', {
      title: 'login',
    });
});

router.get('/signup', function (req, res, next) {
    res.render('signup', {
      title: 'signup',
    });
});

function test(){
	q("#button-page button").button().on("tap", logEvent("tap"));
var menu = q("#menu").addClass("qx-menu").appendTo(document.body).hide();
q("#menu-button").setMenu(menu);
}
