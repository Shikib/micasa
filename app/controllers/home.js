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


router.get('/advanced_search', function (req, res, next) {
  res.render('advanced_search', {
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


router.get('/buyerload', function (req, res, next) {

    var bp = "6042223333"; 
    var bn = "Markus Lemonis";

     mysqlModule.getConnection(function(err, conn) {
      mysqlModule.query(conn, "SELECT p.propertyID, p.houseNumber, p.street, p.city, p.age, p.area, p.isFurnished, op.offerDate, o.purchaseAmount " +
                              "FROM Buyer b, PurchaseOffer_Makes o, Property_HasA_Location p, Offer op " +
                              "WHERE b.buyerPhone = '" + bp+ "' AND b.buyerName='"+bn  +
                              "' AND o.buyerPhone = '" + bp+ "' AND o.buyerName='"+bn  +
                              "' AND  p.propertyID = o.propertyID  AND op.offerID = o.offerID ",
                       res);

    }); 
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

router.get('/agent_offers', function (req, res, next) {
//  db.Article.findAll().then(function (articles) {
    res.render('agent_offers', {
      title: 'agent_offers',
//      articles: articles
    });
//  });
});

router.get('/agent_interest', function (req, res, next) {
//  db.Article.findAll().then(function (articles) {
    res.render('agent_interest', {
      title: 'agent_interest',
//      articles: articles
    });
//  });
});


router.get('/advanced_search_cs', function(req, res, next) {
  var queryString = "SELECT * " +
                    "FROM CommercialProperty_ForSale c, ForSale s, Property_HasA_Location p " +
                    "WHERE p.propertyID = c.propertyID AND s.propertyID = p.propertyID" +
                    " AND p.city = '" + req.query.city + "' AND p.province = '" + req.query.province + 
                    "' AND p.country = '" + req.query.country + "'" +
                    " AND s.salePrice >= " + req.query.min_price + " AND s.salePrice <= " + req.query.max_price +
                    " AND p.age >= " + req.query.min_age + " AND p.age <= " + req.query.max_age +
                    " AND p.area >= " + req.query.min_space + " AND p.area <= " + req.query.max_space +
                    " AND c.offices >= " + req.query.min_office + " AND c.offices <= " + req.query.max_office + 
                    " AND c.storage >= " + req.query.min_storage + " AND c.storage <= " + req.query.max_storage; 

  if (req.query.furnishing != 'D') {
    queryString += " AND p.isFurnished = '" + req.query.furnishing + "'";
  }

  queryString += ";";
 
  mysqlModule.getConnection(function(err, conn) {
    mysqlModule.query(conn, queryString, res);
  }); 
  
});


router.get('/advanced_search_cr', function(req, res, next) {
  var queryString = "SELECT * " +
                    "FROM CommercialProperty_ForRent c, ForRent r, Property_HasA_Location p " +
                    "WHERE p.propertyID = c.propertyID AND r.propertyID = p.propertyID" +
                    " AND p.city = '" + req.query.city + "' AND p.province = '" + req.query.province + 
                    "' AND p.country = '" + req.query.country + "'" +
                    " AND r.rentPrice >= " + req.query.min_price + " AND r.rentPrice <= " + req.query.max_price +
                    " AND p.age >= " + req.query.min_age + " AND p.age <= " + req.query.max_age +
                    " AND p.area >= " + req.query.min_space + " AND p.area <= " + req.query.max_space +
                    " AND c.offices >= " + req.query.min_office + " AND c.offices <= " + req.query.max_office + 
                    " AND c.storage >= " + req.query.min_storage + " AND c.storage <= " + req.query.max_storage; 

  if (req.query.furnishing != 'D') {
    queryString += " AND p.isFurnished = '" + req.query.furnishing + "'";
  }

  if (req.query.furnishing != 'D') {
    queryString += " AND r.petsAllowed = '" + req.query.pets + "'";
  }

  queryString += ";";
 
  mysqlModule.getConnection(function(err, conn) {
    mysqlModule.query(conn, queryString, res);
  }); 
  
});

router.get('/advanced_search_rs', function(req, res, next) {
  var queryString = "SELECT * " +
                    "FROM ResidentialProperty_ForSale r, ForSale s, Property_HasA_Location p " +
                    "WHERE p.propertyID = r.propertyID AND r.propertyID = s.propertyID" +
                    " AND p.city = '" + req.query.city + "' AND p.province = '" + req.query.province + 
                    "' AND p.country = '" + req.query.country + "'" +
                    " AND s.salePrice >= " + req.query.min_price + " AND s.salePrice <= " + req.query.max_price +
                    " AND p.age >= " + req.query.min_age + " AND p.age <= " + req.query.max_age +
                    " AND p.area >= " + req.query.min_space + " AND p.area <= " + req.query.max_space; 

  if (req.query.furnishing != 'D') {
    queryString += " AND p.isFurnished = '" + req.query.furnishing + "'";
  }

  if (req.query.garage != 'D') {
    queryString += " AND r.hasGarage = '" + req.query.garage + "'";
  }

  if (req.query.garden != 'D') {
    queryString += " AND r.hasGarden = '" + req.query.garden + "'";
  }

  queryString += ";";
 
  mysqlModule.getConnection(function(err, conn) {
    mysqlModule.query(conn, queryString, res);
  }); 
  
});



router.get('/advanced_search_rr', function(req, res, next) {
  var queryString = "SELECT * " +
                    "FROM ResidentialProperty_ForRent f, ForRent r, Property_HasA_Location p " +
                    "WHERE p.propertyID = f.propertyID AND r.propertyID = p.propertyID" +
                    " AND p.city = '" + req.query.city + "' AND p.province = '" + req.query.province + 
                    "' AND p.country = '" + req.query.country + "'" +
                    " AND r.rentPrice >= " + req.query.min_price + " AND r.rentPrice <= " + req.query.max_price +
                    " AND p.age >= " + req.query.min_age + " AND p.age <= " + req.query.max_age +
                    " AND p.area >= " + req.query.min_space + " AND p.area <= " + req.query.max_space; 

  if (req.query.furnishing != 'D') {
    queryString += " AND p.isFurnished = '" + req.query.furnishing + "'";
  }

  if (req.query.garage != 'D') {
    queryString += " AND f.hasGarage = '" + req.query.garage + "'";
  }

  if (req.query.garden != 'D') {
    queryString += " AND f.hasGarden = '" + req.query.garden + "'";
  }

  if (req.query.furnishing != 'D') {
    queryString += " AND r.petsAllowed = '" + req.query.pets + "'";
  }

  queryString += ";";
 
  mysqlModule.getConnection(function(err, conn) {
    mysqlModule.query(conn, queryString, res);
  }); 
  
});

router.get('/agent_appointments', function (req, res, next) {
//  db.Article.findAll().then(function (articles) {
    res.render('agent_appointments', {
      title: 'agent_appointments',
//      articles: articles
    });
//  });
});


router.get('/check_uname_availability', function(req, res, next) {
  var queryString = "SELECT * " +
                    "FROM Account " +
                    "WHERE uname = '" + req.query.uname + "';";

  mysqlModule.getConnection(function(err, conn) {
    mysqlModule.query(conn, queryString, res);
  });
});


router.get('/get_all_agentID', function(req, res, next) {
  var queryString = "SELECT agentID " +
                    "FROM Agent_Represents;";

  mysqlModule.getConnection(function(err, conn) {
    mysqlModule.query(conn, queryString, res);
  });
});

router.get('/create_new_agent', function(req, res, next) {
  var agentQueryString = "INSERT INTO Agent_Represents " +
                    "VALUES (" + req.query.agentID + ", " 
                         + "'" + req.query.name + "', " 
                         + "'" + req.query.phone + "', "
                         + "'" + req.query.email + "', "
                               + req.query.agency + ", "  
                               + "null" 
                         + "'" + req.query.uname + "';";
  
  var accountQueryString = "INSERT INTO Account " + 
                           "VALUES ('" + req.query.uname + "', " +
                                   "'" + req.query.password + "');";

  mysqlModule.getConnection(function(err, conn) {
    conn.query(conn, agentQueryString);
    conn.query(conn, accountQueryString);
    
    res.send(0);
  });
});


router.get('/create_new_seller', function(req, res, next) {
  var sellerQueryString = "INSERT INTO Seller " +
                          "VALUES ('" + req.query.email + "', " 
                                + "'" + req.query.phone + "', "
                                + "'" + req.query.name + "', "
                                + "'" + req.query.uname + "';";
  
  var accountQueryString = "INSERT INTO Account " + 
                           "VALUES ('" + req.query.uname + "', " +
                                   "'" + req.query.password + "');";

  mysqlModule.getConnection(function(err, conn) {
    conn.query(conn, sellerQueryString);
    conn.query(conn, accountQueryString);
    
    res.send(0);
  });
});


router.get('/create_new_buyer', function(req, res, next) {
  var buyerQueryString = "INSERT INTO Seller " +
                         "VALUES ('" + req.query.email + "', " 
                               + "'" + req.query.phone + "', "
                               + "'" + req.query.name + "', "
                               + "'" + req.query.uname + "';";
  
  var accountQueryString = "INSERT INTO Account " + 
                           "VALUES ('" + req.query.uname + "', " +
                                   "'" + req.query.password + "');";

  mysqlModule.getConnection(function(err, conn) {
    conn.query(conn, buyerQueryString);
    conn.query(conn, accountQueryString);
    
    res.send(0);
  });
});


function test(){
	q("#button-page button").button().on("tap", logEvent("tap"));
var menu = q("#menu").addClass("qx-menu").appendTo(document.body).hide();
 ("#menu-button").setMenu(menu);
}
