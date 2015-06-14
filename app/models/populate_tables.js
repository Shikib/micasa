var mysqlModule = require("../../mysqlModule");

exports.populate_tables = function() {
  mysqlModule.getConnection(function(err, conn) {

  // All propertyIDs start with an 8xxx
    conn.query("INSERT INTO Property_HasA_Location VALUES (8123, 'Y', 5, 7123, NULL, 2000, '6123', 'Fake Street', 'Canadia', 'Vancouveria', 'BC')," +
               "(8234, 'Y', 0, 7234, 47, 500, '6234', 'Highland Blvd', 'Canadia', 'Vancouveria', 'BC')," +
               "(8345, 'N', 97, 7345, NULL, 10000, '6345', 'Sunrise Lane', 'Amurnica', 'Portlandia', 'OR')," +  
               "(8456, 'N', 10, 7456, 396, 1000, '6456','Highland Blvd', 'Canadia', 'Vancouveria', 'BC')," +
               "(8567, NULL, NULL, 7567, NULL, 5000, '6567', 'Mansion Way', 'Amurnica', 'Seattlilia', 'WA')," +
               "(8678, NULL, 10, 7678, NULL, 10000, '6456','Meverly Mills', 'Ping Pong', 'Lecity', 'PP')," +
               "(8789, 'N', 42, 7789, NULL, 2000, '6452','Highland Blvd', 'Canadia', 'Vancouveria', 'BC')," +
               "(8890, 'Y', 39, 7890, NULL, 700, '6448','Highland Blvd', 'Canadia', 'Vancouveria', 'BC')," +
               "(8910, 'N', 10, 7910, NULL, 6000, '123','Fake St', 'Canadia', 'Vancouveria', 'BC');");

    // All agencyIDs start with 9xxx
    conn.query("INSERT INTO Agency VALUES ('RealRealEstate', 8, 9123)," +
    		   "('The Wayne Bros', 5, 9234)," +
    		   "('RealtorNOW', 10, 9345)," +  
    		   "('AyyHouseNow', 2, 9456)," +
    		   "('RealMax', NULL, 9567);");  

    // All agentIDs start with a 1xxx
    conn.query("INSERT INTO Agent_Represents VALUES (1123, 'Alex Huang', '4101112222', 'ah@real.com',9123, 10)," +
    		   "(1234, 'Katherine Lab', '4102223333', 'kl@waynebros.com',9234, 9)," +
    		   "(1345, 'Joe Baker', '4103334444', 'jb@rNOW.com',9345, 5)," +
    		   "(1456, 'Sam Wise', '4104445555', 'sw@Ayy.com',9456, NULL)," +
    		   "(1567, 'Jack Li', '4105556666', 'jl@MAX.com',9567, 2)," +
               "(1678, 'John Smith, '4106667777', 'JohnSmith@Ayy.com', 9456, 8)," +
               "(1789, 'Ayy Lien', '4107778888', 'AyyLien@Ayy.com', 9456, 10)," +
               "(1890, 'Daicong Chu', '4108889999', 'DaiChu@real.com', 9123, 4);");


    // All purchase offerIDs start with 2xxx, rental offerIDs start with 3xxx
    conn.query("INSERT INTO Offer VALUES (2123, 'I love this house!', '2014-10-11')," +
  			   "(2234, 'When can I move in Kappa', '2014-03-25')," +
  			   "(2345, 'This house has same written all over it', '2014-04-04')," +
               "(2456, NULL, '2015-05-05')," +
               "(2567, 'Accept my offer RIGHT NOW', '2015-06-06')," +
   			   "(3123, NULL, '2014-12-25')," +
	    	   "(3234, 'Its ok', '2014-01-01')," +
               "(3345, 'I can see myself living here for a few years', '2015-05-06')," +
               "(3456, 'This apartment is nice', '2015-06-12');");

    // ALL BUYERS HAVE BUY IN THEIR EMAIL AS WELL AS A PHONE NUMBER STARTING WITH 604
    conn.query("INSERT INTO Buyer VALUES ('pjio198@buy.ca', '6041112222', 'Pinkman Jones')," +
    		   "('mark@buy.ca', '6042223333', 'Markus Lemonis')," +
    		   "('angel@buy.ca', '6043334444', 'Angel Qin')," +  
    		   "('look4@buy.ca', '6044445555', 'Brando Wison')," +
    		   "('Lion@buy.com', '6045556666', 'Hartof Lion')," +
               "(NULL, '6046667777', 'Richy McRich')," +
               "('iAmRich@buy.com', '6046667778', 'Richy McRich')," +
               "('van604@buy.com', '6047778888', 'Guy Van')," +
               "('MarcBranc@buy.com', '6048889999', 'Marc Brancson');");

    // ALL SELLERS HAVE SELL IN THEIR EMAIL AS WELL AS A PHONE STARTING WITH 778
    conn.query("INSERT INTO Seller VALUES ('home@sell.ca', '7781112222', 'Mary Lamb')," +
    		   "('Bill@sell.ca', '7782223333', 'Bill Jones')," +
    		   "('Bye@sell.ca', '7783334444', 'Justin Timb')," +  
    		   "('Liam@sell.ca', '7784445555', 'Liam Neeson')," +
    		   "('BobJ@sell.com', '7785556666', 'Bob Jones'), " + 
               "('ailamao1974@sell.com', '7786667777', 'Aila Mao'), " +
               "(NULL, '7787778888', 'Bob Jones')," +
               "(NULL, '7787778889', 'Bob Jones')," +
               "'Need2@sell.com', '7788889999', 'Manny Hauses');");

    conn.query("INSERT INTO Accepts VALUES (2123, '7781112222', 'Mary Lamb')," +
    		   "(2234, '7782223333', 'Bill Jones')," +
    		   "(2345, '7783334444', 'Justin Timb')," +  
    		   "(3123, '7784445555', 'Liam Neeson')," +
    		   "(3234, '7785556666', 'Bob Jones');");

    conn.query("INSERT INTO PurchaseOffer_Makes VALUES (2123, 500000, 8123, '6041112222', 'Pinkman Jones')," +
    		   "(2234, 1000000, 8234, '6042223333', 'Markus Lemonis')," +
    		   "(2345, 2000000, 8345, '6043334444', 'Angel Qin')," +
               "(2456, 1500000, 8345, '6048889999', 'Marc Brancson')," + 
               "(2567, 900000, 8234, '6045556666', 'Hartof Lion');");

    conn.query("INSERT INTO RentalOffer_Makes VALUES (3123, 1000, 8456, '604444555', 'Brando Wison')," +
    		   "(3234, 1500, 8567, '6045556666', 'Hartof Lion')," +
               "(3345, 1400, 8567, '6047778888', 'Guy Van')," +
               "(3456, 900, 8456, '6046667777', 'Richy McRich');");

    conn.query("INSERT INTO Appointment_View VALUES (123, '2015-06-15', 1, 8123, '6041112222', 'Pinkman Jones')," +
    		   "(234, '2015-05-14', 2, 8234, '6042223333', 'Markus Lemonis')," +
               "(345, '2015-05-14', 1, 8234, '6045556666', 'Hartof Lion');" +
               "(456, '2015-06-14', 1, 8123, '6046667778', 'Richy McRich');");


    conn.query("INSERT INTO Approves VALUES (123, 1123)," +
    	       "(234, 1345)," +
               "(345, 1345)," +
               "(456, 1789);");

    conn.query("INSERT INTO Rates VALUES (10, 1123, '7781112222', 'Mary Lamb')," +
    	 	   "(5, 1456, '7783334444', 'Justin Timb')," +
    	 	   "(4, 1456, '7785556666', 'Bob Jones');");

    // Property ID starts with an 8
    conn.query("INSERT INTO ForRent VALUES (1000, 8456, 'Y')," +
    	       "(1600, 8567, 'N')," +
               "(5000, 8678, 'Y')," +
               "(7000, 8789, 'N');");

    conn.query("INSERT INTO ForSale VALUES (500000, 8123)," +
    		   "(1000000, 8234)," +
    	       "(2500000, 8345)," +
               "(5000000, 8890)," +
               "(3000000, 8910);");

    conn.query("INSERT INTO ResidentialProperty_ForRent VALUES (8456, 'Y', 'Y')," +
               "(8678, 'Y', 'N');");

    conn.query("INSERT INTO ResidentialProperty_ForSale VALUES (8123, 'N', 'Y')," +
    		   "(8234, 'N', 'Y')," + 
               "(8890, 'Y', 'Y');");

    conn.query("INSERT INTO CommercialProperty_ForRent VALUES (8567, 10, 10)," +
               "(8789, 200, 200);");

    conn.query("INSERT INTO CommercialProperty_ForSale VALUES (8345, 200, 200)," +
               "(8910, 300, 300);");

    conn.query("INSERT INTO PostSale VALUES (8123, 'Mary Lamb', '7781112222', 1123)," +
    		   "(8234, 'Bill Jones', '7782223333', 1234)," +
    		   "(8345, 'Justin Timb', '7783334444', 1345)," +
    		   "(8456, 'Liam Neeson', '7784445555', 1456)," +
    		   "(8567, 'Bob Jones', '7785556666', 1567)," +
               "(8678, 'Aila Mao', '7786667777', 1789)," +
               "(8789, 'Bob Jones', '7787778888', 1890)," +
               "(8890, 'Bob Jones', '7787778889', 1678)," +
               "(8910, 'Manny Hauses', '7788889999', 1678);");

    conn.query("INSERT INTO InterestedIn VALUES (8123, 'Pinkman Jones', '6041112222', 'What a beautiful property, I want to buy this REAL QUICK')," +
               "(8234, 'Markus Lemonis', '6042223333','This house will soon be MINE!!!');");


  });
};
