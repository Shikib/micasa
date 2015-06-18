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


router.get('/advanced_search_cs', function(req, res, next) {
  var isFirst = 1;
  var queryString = "SELECT ";
  if (req.query.checkbox_cs1 && isFirst == 1) {
    queryString += "s.salePrice ";
    isFirst = 0;
  }
  if (req.query.checkbox_cs2 && isFirst == 0) {
    queryString += ", p.aptNumber ";
  }
  if (req.query.checkbox_cs2 && isFirst == 1) {
    queryString += "p.aptNumber ";
    isFirst = 0;
  }
  if (req.query.checkbox_cs3 && isFirst == 0) {
    queryString += ", p.houseNumber ";
  }
  if (req.query.checkbox_cs3 && isFirst == 1) {
    queryString += "p.houseNumber ";
    isFirst = 0;
  }
  if (req.query.checkbox_cs4 && isFirst == 0) {
    queryString += ", p.street ";
  }
  if (req.query.checkbox_cs4 && isFirst == 1) {
    queryString += "p.street ";
    isFirst = 0;
  }
  if (req.query.checkbox_cs5 && isFirst == 0) {
    queryString += ", p.city ";
  }
  if (req.query.checkbox_cs5 && isFirst == 1) {
    queryString += "p.city ";
    isFirst = 0;
  }
  if (req.query.checkbox_cs6 && isFirst == 0) {
    queryString += ", p.age ";
  }
  if (req.query.checkbox_cs6 && isFirst == 1) {
    queryString += "p.age ";
    isFirst = 0;
  }
  if (req.query.checkbox_cs7 && isFirst == 0) {
    queryString += ", p.area ";
  }
  if (req.query.checkbox_cs7 && isFirst == 1) {
    queryString += "p.area ";
    isFirst = 0;
  }
  if (req.query.checkbox_cs8 && isFirst == 0) {
    queryString += ", c.offices ";
  }
  if (req.query.checkbox_cs8 && isFirst == 1) {
    queryString += "c.offices ";
    isFirst = 0;
  }
  if (req.query.checkbox_cs9 && isFirst == 0) {
    queryString += ", c.storage ";
  }
  if (req.query.checkbox_cs9 && isFirst == 1) {
    queryString += "c.storage ";
    isFirst = 0;
  }
  if (req.query.checkbox_cs10 && isFirst == 0) {
    queryString += ", p.isFurnished ";
  }
  if (req.query.checkbox_cs10 && isFirst == 1) {
    queryString += "p.isFurnished ";
    isFirst = 0;
  }
  queryString +=    "FROM CommercialProperty_ForSale c, ForSale s, Property_HasA_Location p " +
                    "WHERE p.propertyID = c.propertyID AND s.propertyID = p.propertyID" +
                    " AND p.city = '" + req.query.city + "' AND p.province = '" + req.query.province + 
                    "' AND p.country = '" + req.query.country + "'" +
                    " AND s.salePrice >= " + req.query.min_price + " AND s.salePrice <= " + req.query.max_price +
                    " AND p.age >= " + req.query.min_age + " AND p.age <= " + req.query.max_age +
                    " AND p.area >= " + req.query.min_space + " AND p.area <= " + req.query.max_space +
                    " AND c.offices >= " + req.query.min_office + " AND c.offices <= " + req.query.max_office + 
                    " AND c.storage >= " + req.query.min_storage + " AND c.storage <= " + req.query.max_storage; 
  console.log(queryString);
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


function test(){
	q("#button-page button").button().on("tap", logEvent("tap"));
var menu = q("#menu").addClass("qx-menu").appendTo(document.body).hide();
 ("#menu-button").setMenu(menu);
}
