var express = require('express'),
  router = express.Router(),
  db = require('../models');
var mysqlModule = require('../../mysqlModule');

var mysqlModule = require('../../mysqlModule');
var loginModule = require('../../loginModule');
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


router.get('/sellerloadPurchase', function (req, res, next) {

    var sp = "7783334444"; 
    var sn = "Justin Timb";

     mysqlModule.getConnection(function(err, conn) {
      mysqlModule.query(conn, "SELECT p.propertyID, p.houseNumber, p.street, p.city, p.age, p.area, p.isFurnished, ar.agentID, fs.salePrice " + 
                              "FROM Seller s, Property_HasA_Location p, Agent_Represents ar, ForSale fs, PostSale ps " +
                              "WHERE s.sellerPhone = '" + sp + "' AND s.sellerName='"+ sn +
                              "' AND ps.sellerPhone = '" + sp + "' AND ps.sellerName='"+ sn +
                              "' AND fs.propertyID = ps.propertyID AND p.propertyID = ps.propertyID AND ar.agentID = ps.agentID ",
                       res);

    }); 
   });

router.get('/sellerloadRent', function (req, res, next) {

    var sp = "7784445555"; 
    var sn = "Liam Neeson";

     mysqlModule.getConnection(function(err, conn) {
      mysqlModule.query(conn, "SELECT p.propertyID, p.houseNumber, p.street, p.city, p.age, p.area, p.isFurnished, ar.agentID, fr.rentPrice " + 
                              "FROM Seller s, Property_HasA_Location p, Agent_Represents ar, ForRent fr, PostSale ps " +
                              "WHERE s.sellerPhone = '" + sp + "' AND s.sellerName='"+ sn +
                              "' AND ps.sellerPhone = '" + sp + "' AND ps.sellerName='"+ sn +
                              "' AND fr.propertyID = ps.propertyID AND p.propertyID = ps.propertyID AND ar.agentID = ps.agentID ",
                       res);

    }); 
   });

router.get('/commercialforsale', function (req, res, next) {
  res.render('commercialforsale', {
    title: 'Micasa',
  });
});

router.get('/commercialforrent', function (req, res, next) {
  res.render('commercialforrent', {
    title: 'Micasa',
  });
});


router.get('/postproperty', function (req, res, next) {
  res.render('postproperty', {
    title: 'Micasa',
  });
});

router.get('/residentialforsale', function (req, res, next) {
  res.render('residentialforsale', {
    title: 'Micasa',
  });
});




router.get('/buyerloadPurchase', function (req, res, next) {
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

router.get('/buyerloadRent', function (req, res, next) {

    var bp = "6044445555"; 
    var bn = "Brando Wison";

     mysqlModule.getConnection(function(err, conn) {
      mysqlModule.query(conn, "SELECT p.propertyID, p.houseNumber, p.street, p.city, p.age, p.area, p.isFurnished, op.offerDate, o.rentAmount " +
                              "FROM Buyer b, RentalOffer_Makes o, Property_HasA_Location p, Offer op " +
                              "WHERE b.buyerPhone = '" + bp+ "' AND b.buyerName='"+bn  +
                              "' AND o.buyerPhone = '" + bp+ "' AND o.buyerName='"+bn  +
                              "' AND  p.propertyID = o.propertyID  AND op.offerID = o.offerID ",
                       res);

    }); 
   });

router.get('/buyerloadApp', function (req, res, next) {

    var bp = "6042223333"; 
    var bn = "Markus Lemonis";

     mysqlModule.getConnection(function(err, conn) {
       mysqlModule.query(conn, "SELECT op.appointmentID, p.propertyID, p.houseNumber, p.street, p.city, op.appointmentTime, op.appDuration " +
                              "FROM Buyer b, Property_HasA_Location p, appointment_view op " +
                              "WHERE b.buyerPhone = '" + bp+ "' AND b.buyerName='"+bn  +
                              "' AND op.buyerPhone = '" + bp+ "' AND op.buyerName='"+bn  +
                              "' AND p.propertyID = op.propertyID ",
                       res);

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

router.get('/agent_rentaloffers_get', function (req, res, next) {
    mysqlModule.getConnection(function(err,conn) {
      mysqlModule.query(conn, "SELECT * " +
                              "FROM Offer o, RentalOffer_Makes ro " +
                              "WHERE o.offerID=ro.offerID;",
                        res);
    });
});

router.get('/agent_interest', function (req, res, next) {
    res.render('agent_interest', {
      title: 'agent_interest',
    });
});

router.get('/appointment', function (req, res, next) {
//  db.Article.findAll().then(function (articles) {
    res.render('appointment', {
      title: 'appointment',
//      articles: articles
    });
//  });
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

router.get('/agent_not_approved_appointments_get', function (req, res, next) {
    mysqlModule.getConnection(function(err,conn) {
      mysqlModule.query(conn, "SELECT appointmentID, a.propertyID, buyerPhone, buyerName, appointmentTime, appDuration " +
                              "FROM Appointment_View a, PostSale p " +
                              "WHERE a.propertyID=p.propertyID " +
                              "AND a.propertyID NOT IN " +
                              "(SELECT v.propertyID " +
                              "FROM Approves a, Appointment_View v " +
                              "WHERE a.appointmentID=v.appointmentID);",
                        res);
    });
});

router.get('/agent_approved_appointments_get', function (req, res, next) {
    mysqlModule.getConnection(function(err,conn) {
      mysqlModule.query(conn, "SELECT * " +
                              "FROM Approves a, Appointment_View v " +
                              "WHERE a.appointmentID=v.appointmentID;",
                        res);
    });
});

router.get('/buyer_not_approved_appointmentID', function(req, res, next) {
    mysqlModule.getConnection(function(err, conn) {
      mysqlModule.query(conn, "SELECT appointmentID " + 
                              "FROM Appointment_View a, PostSale p " +
                              "WHERE a.propertyID=p.propertyID " +
                              "AND a.propertyID NOT IN " +
                              "(SELECT v.propertyID " +
                              "FROM Approves a, Appointment_View v " +
                              "WHERE a.appointmentID=v.appointmentID);",
                        res);
    });
});

router.get('/buyer_appointment_approve', function(req, res, next) {
  var val = req.query.appID;

  console.log(val);

  mysqlModule.getConnection(function(err, conn) {
    mysqlModule.query(conn, "DELETE FROM Offer WHERE offerID =" + val +");",  
                      res);
    });
});


router.get('/agent_not_approved_appointmentID', function(req, res, next) {
    mysqlModule.getConnection(function(err, conn) {
      mysqlModule.query(conn, "SELECT appointmentID " + 
                              "FROM Appointment_View a, PostSale p " +
                              "WHERE a.propertyID=p.propertyID " +
                              "AND a.propertyID NOT IN " +
                              "(SELECT v.propertyID " +
                              "FROM Approves a, Appointment_View v " +
                              "WHERE a.appointmentID=v.appointmentID);",
                        res);
    });
});

router.get('/agent_appointment_approve', function(req, res, next) {
  var val = req.query.appID;

  console.log(val);

  mysqlModule.getConnection(function(err, conn) {
    mysqlModule.query(conn, "INSERT INTO Approves VALUES (" + 
                            val + ", 1123);",
                      res);
    });
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


router.get('/interested_in', function (req, res, next) {
//  db.Article.findAll().then(function (articles) {
    res.render('interestedin', {
      title: 'interestedin',
//      articles: articles
    });
//  });
});

router.get('/viewoffer', function (req, res, next) {
//  db.Article.findAll().then(function (articles) {
    res.render('viewoffer', {
      title: 'viewoffer',
//      articles: articles
    });
//  });
});

router.get('/rateagent', function (req, res, next) {
//  db.Article.findAll().then(function (articles) {
    res.render('rateagent', {
      title: 'rateagent',
//      articles: articles
    });
//  });
});

router.get('/rateagentGet', function (req, res, next){
     mysqlModule.getConnection(function(err, conn) {
      mysqlModule.query(conn, "SELECT * from Agent_Represents" ,
                       res);

    }); 
   });

router.get('/viewoffersSale', function (req, res, next) {

    var sp = "7781112222"; 
    var sn = "Mary Lamb";

     mysqlModule.getConnection(function(err, conn) {
      mysqlModule.query(conn, "SELECT pom.offerID, p.propertyID, fs.salePrice, pom.purchaseAmount, o.offerMessage, o.offerDate, b.buyerName, b.buyerPhone " + 
                              "FROM Property_HasA_Location p, ForSale fs, PurchaseOffer_Makes pom, Offer o, PostSale ps, Seller s, Buyer b " +
                              "WHERE s.sellerPhone = '" + sp + "' AND s.sellerName='"+ sn +
                              "' AND ps.sellerPhone = '" + sp + "' AND ps.sellerName='"+ sn +
                              "' AND b.buyerPhone = pom.buyerphone AND b.buyerName = pom.buyerName " +
                              " AND fs.propertyID = pom.propertyID AND ps.propertyID = pom.propertyID AND ps.propertyID = p.propertyID " +
                              " AND o.offerID = pom.offerID ",
                       res);

    }); 
   });

router.get('/viewoffersRent', function (req, res, next) {

    var sp = "7784445555"; 
    var sn = "Liam Neeson";

     mysqlModule.getConnection(function(err, conn) {
      mysqlModule.query(conn, "SELECT rom.offerID, p.propertyID, fr.rentPrice, rom.rentAmount, o.offerMessage, o.offerDate, b.buyerName, b.buyerPhone " + 
                              "FROM Property_HasA_Location p, ForRent fr, RentalOffer_Makes rom, Offer o, PostSale ps, Seller s, Buyer b " +
                              "WHERE s.sellerPhone = '" + sp + "' AND s.sellerName='"+ sn +
                              "' AND ps.sellerPhone = '" + sp + "' AND ps.sellerName='"+ sn +
                              "' AND b.buyerPhone = rom.buyerPhone AND b.buyerName = rom.buyerName " +
                              " AND fr.propertyID = rom.propertyID AND ps.propertyID = rom.propertyID AND ps.propertyID = p.propertyID " +
                              " AND o.offerID = rom.offerID ",
                       res);

    }); 
   });





router.get('/makeofferpurchase', function (req, res, next) {
//  db.Article.findAll().then(function (articles) {
    res.render('makeofferpurchase', {
      title: 'makeofferpurchase',
//      articles: articles
    });
//  });
});


router.get('/makeofferrental', function (req, res, next) {
//  db.Article.findAll().then(function (articles) {
    res.render('makeofferrental', {
      title: 'makeofferrental',
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
router.get('/get_all_offerID', function(req, res, next) {
  var queryString = "SELECT offerID " +
                    "FROM offer;";

  mysqlModule.getConnection(function(err, conn) {
    mysqlModule.query(conn, queryString, res);
  });
});

router.get('/get_all_appID', function(req, res, next) {
  var queryString = "SELECT appointmentID " +
                    "FROM appointment_view;";

  mysqlModule.getConnection(function(err, conn) {
    mysqlModule.query(conn, queryString, res);
  });
});

router.get('/get_all_propertyID', function(req, res, next) {
  var queryString = "SELECT propertyID " +
                    "FROM Property_HasA_Location;";

  mysqlModule.getConnection(function(err, conn) {
    mysqlModule.query(conn, queryString, res);
  });
});


router.get('/create_new_account', function(req, res, next) {
  var accountQueryString = "INSERT INTO Account " + 
                           "VALUES ('" + req.query.uname + "', " +
                                   "'" + req.query.password + "');";

  mysqlModule.getConnection(function(err, conn) {
    mysqlModule.query(conn, accountQueryString, res);
  });
});

router.get('/create_new_agent', function(req, res, next) {
  var agentQueryString = "INSERT INTO Agent_Represents " +
                    "VALUES (" + req.query.agentID + ", " 
                         + "'" + req.query.name + "', " 
                         + "'" + req.query.phone + "', "
                         + "'" + req.query.email + "', "
                               + req.query.agency + ", "  
                               + "null, " 
                         + "'" + req.query.uname + "');";
  
  console.log(agentQueryString);
  mysqlModule.getConnection(function(err, conn) {
    mysqlModule.query(conn, agentQueryString, res);
  });
});


router.get('/create_new_seller', function(req, res, next) {
  var sellerQueryString = "INSERT INTO Seller " +
                          "VALUES ('" + req.query.email + "', " 
                                + "'" + req.query.phone + "', "
                                + "'" + req.query.name + "', "
                                + "'" + req.query.uname + "');";
  

  mysqlModule.getConnection(function(err, conn) {
    mysqlModule.query(conn, sellerQueryString, res);
  });
});


router.get('/create_new_buyer', function(req, res, next) {
  var buyerQueryString = "INSERT INTO Buyer " +
                         "VALUES ('" + req.query.email + "', " 
                               + "'" + req.query.phone + "', "
                               + "'" + req.query.name + "', "
                               + "'" + req.query.uname + "');";
  

  mysqlModule.getConnection(function(err, conn) {
    mysqlModule.query(conn, buyerQueryString, res);
  });
});


router.get('/check_login', function(req, res, next) {
  var queryString = "SELECT * " +
                    "FROM Account " +
                    "WHERE uname = '" + req.query.uname + "' AND " +
                       "password = '" + req.query.password + "';";

  mysqlModule.getConnection(function(err, conn) {
    mysqlModule.query(conn, queryString, res);
  });
});
router.get('/create_new_app', function(req, res, next){
  var appQueryString = "INSERT INTO appointment_view"+
                            " VALUES (" + req.query.appID+","+
                                      "'" + req.query.appdate+"',"+
                                     req.query.appduration+","+
                                    req.query.propertyID+","+
                                    "'"+ req.query.buyerphone+"',"+
                                    "'"+ req.query.buyername+"');";
console.log(appQueryString);
  mysqlModule.getConnection(function(err,conn){
    mysqlModule.query(conn, appQueryString, res);
  });
});

router.get('/create_new_interestedIn', function(req, res, next){
  var msgQueryString = "INSERT INTO InterestedIn "+
                            "VALUES (" + req.query.propertyID+","+
                                    "'"+ req.query.buyername+"',"+
                                    "'"+ req.query.buyerphone+"',"+
                                    "'"+ req.query.message+"');";
  console.log(msgQueryString);
  mysqlModule.getConnection(function(err,conn){
    mysqlModule.query(conn, msgQueryString, res);
  });
});

router.get('/create_new_offer', function(req, res, next){
var offerQueryString = "INSERT INTO Offer"+
                            " VALUES (" + req.query.offerID+","+
                                     "'"+ req.query.message+"',"+
                                     "'"+ req.query.offerdate+"');";

console.log(offerQueryString);
mysqlModule.getConnection(function(err,conn){
    mysqlModule.query(conn, offerQueryString, res);
  });
});

router.get('/create_new_rental_offer', function(req, res, next){
  var rentQueryString = "INSERT INTO  RentalOffer_Makes"+
                            " VALUES (" + req.query.offerID+","+
                                          req.query.amount+","+
                                          req.query.propertyID+","+
                                    "'"+ req.query.buyerphone+"',"+
                                    "'"+ req.query.buyername +"');";

console.log(rentQueryString);
mysqlModule.getConnection(function(err,conn){
    mysqlModule.query(conn, rentQueryString, res);
  });
});


router.get('/login_buyer', function(req, res, next) {
  var queryString = "SELECT * " +
                    "FROM Buyer " +
                    "WHERE uname = '" + req.query.uname + "';";

  mysqlModule.getConnection(function(err, conn) {
    mysqlModule.query(conn, queryString, res);
  });             

});


router.get('/login_seller', function(req, res, next) {
  var queryString = "SELECT * " +
                    "FROM Seller " +
                    "WHERE uname = '" + req.query.uname + "';";

  mysqlModule.getConnection(function(err, conn) {
    mysqlModule.query(conn, queryString, res);
  });             

});



router.get('/login_agent', function(req, res, next) {
  var queryString = "SELECT * " +
                    "FROM Agent_Represents " +
                    "WHERE uname = '" + req.query.uname + "';";

  mysqlModule.getConnection(function(err, conn) {
    mysqlModule.query(conn, queryString, res);
  });             

});

router.get('/post_property', function(req, res, next) {
  var queryString = "INSERT INTO Property_HasA_Location VALUES ( "
                  + req.query.propertyID + ", " +
              "'" + req.query.isFurnished + "', " +
                    req.query.age + ", " +
                    "null" + ", " +
                    req.query.aptNumber + ", " +
                    req.query.area + ", " +
              "'" + req.query.houseNumber + "'," + 
              "'" + req.query.street + "', " +
              "'" + req.query.country + "', " +
              "'" + req.query.city + "', " +
              "'" + req.query.province + "');";


  mysqlModule.getConnection(function(err, conn) {
    mysqlModule.query(conn, queryString, res);
  });
});


router.get('/post_fs', function(req, res, next) {
  var queryString = "INSERT INTO ForSale VALUES ( " +
                    req.query.price + ", " +
                    req.query.propertyID + ");";

  mysqlModule.getConnection(function(err, conn) {
    mysqlModule.query(conn, queryString, res);
  });
 
});

router.get('/post_fr', function(req, res, next) {
  var queryString = "INSERT INTO ForRent VALUES ( " +
                    req.query.price + ", " +
                    req.query.propertyID + ", " + 
              "'" + req.query.pets + "');";

  mysqlModule.getConnection(function(err, conn) {
    mysqlModule.query(conn, queryString, res);
  });
 
});

router.get('/post_cs', function(req, res, next) {
  var queryString = "INSERT INTO CommercialProperty_ForSale VALUES ( " +
                    req.query.propertyID + ", " +  
                    req.query.storage + ", " +
                    req.query.offices + ");";

  mysqlModule.getConnection(function(err, conn) {
    mysqlModule.query(conn, queryString, res);
  });
 
});

router.get('/post_cr', function(req, res, next) {
  var queryString = "INSERT INTO CommercialProperty_ForRent VALUES ( " +
                    req.query.propertyID + ", " +  
                    req.query.storage + ", " +
                    req.query.offices + ");";

  mysqlModule.getConnection(function(err, conn) {
    mysqlModule.query(conn, queryString, res);
  });
 
});


router.get('/post_rs', function(req, res, next) {
  var queryString = "INSERT INTO ResidentialProperty_ForSale VALUES ( " +
                    req.query.propertyID + ", " +  
              "'" + req.query.garden + "', " +
              "'" + req.query.garage + "');";

  mysqlModule.getConnection(function(err, conn) {
    mysqlModule.query(conn, queryString, res);
  });
 
});

router.get('/post_rr', function(req, res, next) {
  var queryString = "INSERT INTO ResidentialProperty_ForRent VALUES ( " +
                    req.query.propertyID + ", " +  
              "'" + req.query.garden + "', " +
              "'" + req.query.garage + "');";

  mysqlModule.getConnection(function(err, conn) {
    mysqlModule.query(conn, queryString, res);
  });
 
});

router.get('/all_propertyID', function(req, res, next) {
  var queryString = "SELECT propertyID FROM Property_HasA_Location;";
  mysqlModule.getConnection(function(err, conn) {
    mysqlModule.query(queryString);
  });
});

router.get('/post_sale', function(req, res, next) {
  var queryString = "INSERT INTO PostSale VALUES (" +
                    req.query.propertyID + ", " +
              "'" + req.query.sellerName + "'," +
              "'" + req.query.sellerPhone + "', " +
                  + req.query.agentID + ");";

  mysqlModule.getConnection(function(err, conn) {
    mysqlModule.query(queryString);
  });

});

function test(){
	q("#button-page button").button().on("tap", logEvent("tap"));
var menu = q("#menu").addClass("qx-menu").appendTo(document.body).hide();
 ("#menu-button").setMenu(menu);
}
