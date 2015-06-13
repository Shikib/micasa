var mysqlModule = require("../../mysqlModule");

exports.populate_tables = function() {
  mysqlModule.getConnection(function(err, conn) {
    conn.query("INSERT INTO Agency VALUES ('RealRealEstate', 8, 9123);" +
    		   "INSERT INTO Agency VALUES ('The Wayne Bros', 5, 9234);" +
    		   "INSERT INTO Agency VALUES ('RealtorNOW', 10, 9345);" +  
    		   "INSERT INTO Agency VALUES ('AyyHouseNow', 2, 9456);" +
    		   "INSERT INTO Agency VALUES ('RealMax', NULL, 9567);");

    conn.query("INSERT INTO Property_HasA_Location VALUES (8123, Y, 5, 7123, NULL, 2000, '6123', 
    			'Fake Street', 'Canadia', 'Vancouveria', 'BC');" +
    		   "INSERT INTO Property_HasA_Location VALUES (8234, Y, 0, 7234, 47, 500, '6234',
    		   	'Highland Blvd', 'Canadia', 'Vancouveria', 'BC');" +
    		   "INSERT INTO Property_HasA_Location VALUES (8345, N, 97, 7345, NULL, 10000, '6345',
    		   	'Sunrise Lane', 'Amurnica', 'Portlandia', 'OR');" +  
    		   "INSERT INTO Property_HasA_Location VALUES (8456, N, 10, 7456, 396, 1000, '6456',
    		   	'Highland Blvd', 'Canadia', 'Vancouveria', 'BC');" +
    		   "INSERT INTO Property_HasA_Location VALUES (8567, NULL, NULL, 7567, NULL, 5000, '6567',
    		   	'Mansion Way', 'Amurnica', 'Seattlilia', 'WA');");

    conn.query("INSERT INTO Agent_Represents VALUES (1123, 'Alex Huang', 1113456789, 'ah@real.com',
    	9123, 10);" +
    		   "INSERT INTO Agent_Represents VALUES (1234, 'Katherine Lab', 1113334444, 'kl@wb.com',
    	9234, 9);" +
    		   "INSERT INTO Agent_Represents VALUES (1345, 'Joe Baker', 1112223333, 'jb@rNOW.com',
    	9345, 5);" +
    		   "INSERT INTO Agent_Represents VALUES (1456, 'Sam Wise', 1115556666, 'sw@Ayy.com',
    	9456, NULL);" +
    		   "INSERT INTO Agent_Represents VALUES (1567, 'Jack Li', 1118889999, 'jl@MAX.com',
    	9567, 2);");

    conn.query("INSERT INTO Offer VALUES (2123, 'I love this house!', 
    	TO_DATE('10-NOV-2014','DD-MM-YYYY'));" +
  			  "INSERT INTO Offer VALUES (2234, 'When can I move in Kappa', 
    	TO_DATE('05-MAR-2014','DD-MM-YYYY'));" +
  			  "INSERT INTO Offer VALUES (2345, 'This house has same written all over it', 
    	TO_DATE('30-OCT-2014','DD-MM-YYYY'));" +
   			 "INSERT INTO Offer VALUES (3123, NULL, 
    	TO_DATE('10-NOV-2014','DD-MM-YYYY'));" +
	    	 "INSERT INTO Offer VALUES (3234, 'It's ok', 
    	TO_DATE('01-JAN-2014','DD-MM-YYYY'));");


    // ALL BUYERS HAVE BUY IN THEIR EMAIL AS WELL AS A PHONE NUMBER STARTING WITH 604
    conn.query("INSERT INTO Buyer VALUES ('pjio198@buy.ca', '6041112222', 'Pinkman Jones');" +
    		   "INSERT INTO Buyer VALUES ('mark@buy.ca', '6042223333', 'Markus Lemonis');" +
    		   "INSERT INTO Buyer VALUES ('angel@buy.ca', '6043334444', 'Angel Qin');" +  
    		   "INSERT INTO Buyer VALUES ('look4@buy.ca', '6044445555', 'Brando Wison');" +
    		   "INSERT INTO Buyer VALUES ('Lion@buy.com', '6045556666', 'Hartof Lion');");

    // ALL SELLERS HAVE SELL IN THEIR EMAIL AS WELL AS A PHONE STARTING WITH 778
    conn.query("INSERT INTO Seller VALUES ('home@sell.ca', '7781112222', 'Mary Lamb');" +
    		   "INSERT INTO Seller VALUES ('Bill@sell.ca', '7782223333', 'Bill Jones');" +
    		   "INSERT INTO Seller VALUES ('Bye@sell.ca', '7783334444', 'Justin Timb');" +  
    		   "INSERT INTO Seller VALUES ('Liam@sell.ca', '7784445555', 'Liam Neeson');" +
    		   "INSERT INTO Seller VALUES ('BobJ@sell.com', '7785556666', 'Bob Jones');");

    conn.query("INSERT INTO Accepts VALUES (2123, '7781112222', 'Mary Lamb');" +
    		   "INSERT INTO Accepts VALUES (2234, '7782223333', 'Bill Jones');" +
    		   "INSERT INTO Accepts VALUES (2345, '7783334444', 'Justin Timb');" +  
    		   "INSERT INTO Accepts VALUES (3123, '7784445555', 'Liam Neeson');" +
    		   "INSERT INTO Accepts VALUES (3234, '7785556666', 'Bob Jones');");

    conn.query("INSERT INTO PurchaseOffer_Makes VALUES (2123, 500000, 8123, '6041112222', 
    			'Pinkman Jones');" +
    		   "INSERT INTO PurchaseOffer_Makes VALUES (2234, 1000000, 8234, '6042223333', 
    		   	'Markus Lemonis');" +
    		   "INSERT INTO PurchaseOffer_Makes VALUES (2345, 2000000, 8345, '6043334444', 
    		   	'Angel Qin');");

    conn.query("INSERT INTO RentalOffer_Makes VALUES (3123, 1000, 8456, '604444555', 
    			'Brando Wison');" +
    			"INSERT INTO RentalOffer_Makes VALUES (3234, 1500, 8567, '6045556666', 
    			'Hartof Lion');");

    conn.query("INSERT INTO Appointment_View VALUES (123, 
    			to_timestamp('2015/06/15 12:00', 'YYYY/MM/DD HH24 MI'), 1, 8123, '6041112222', 
    			'Pinkman Jones');" +
    			"INSERT INTO Appointment_View VALUES (234, 
    			to_timestamp('2015/05/14 13:00', 'YYYY/MM/DD HH24 MI'), 2, 8234, '6042223333', 
    			'Markus Lemonis');");

    conn.query("INSERT INTO Approves VALUES (123, 1123);" +
    	       "INSERT INTO Approves VALUES (234, 1345);");

    conn.query("INSERT INTO Rates VALUES (10, 1123, '7781112222', 'Mary Lamb');" +
    	 	   "INSERT INTO Rates VALUES (5, 1456, '7783334444', 'Justin Timb');" +
    	 	   "INSERT INTO Rates VALUES (4, 1456, '778555666', 'Bob Jones');");

    // Property ID starts with an 8
    conn.query("INSERT INTO ForRent VALUES (1000, 8456, 'Y');" +
    	       "INSERT INTO ForRent VALUES (1600, 8567, 'N');");

    conn.query("INSERT INTO ForSale VALUES (500000, 8123);" +
    		   "INSERT INTO ForSale VALUES (1000000, 8234);" +
    	       "INSERT INTO ForSale VALUES (2500000, 8345);");

    conn.query("INSERT INTO ResidentialProperty_ForRent VALUES (8456, 'Y', 'Y');");

    conn.query("INSERT INTO ResidentialProperty_ForSale VALUES (8123, 'N', 'Y');" +
    		   "INSERT INTO ResidentialProperty_ForSale VALUES (8234, 'N', 'Y');");

    conn.query("INSERT INTO CommercialProperty_ForRent VALUES (8567, 10, 10);");

    conn.query("INSERT INTO CommercialProperty_ForSale VALUES (8345, 200, 200);");

    conn.query("INSERT INTO PostSale VALUES (8123, 'Mary Lamb', '7781112222', 1123);" +
    		   "INSERT INTO PostSale VALUES (8234, 'Bill Jones', '7782223333', 1234);" +
    		   "INSERT INTO PostSale VALUES (8345, 'Justin Timb', '7783334444', 1345);" +
    		   "INSERT INTO PostSale VALUES (8456, 'Liam Neeson', '7784445555', 1456);" +
    		   "INSERT INTO PostSale VALUES (8567, 'Bob Jones', '7785556666', 1567);");

    conn.query("INSERT INTO InterestedIn VALUES (8123, 'Pinkman Jones', '6041112222',
    			'What a beautiful property, I want to buy this REAL QUICK');" +
               "INSERT INTO InterestedIn VALUES (8234, 'Markus Lemonis', '6042223333',
    			'This house will soon be MINE!!!');");


  });
};
