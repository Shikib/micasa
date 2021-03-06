var mysqlModule = require("../../mysqlModule");

exports.initialize_tables = function() {
  mysqlModule.getConnection(function(err, conn) {
/*
    // clear all existing tuples 
    conn.query("delete from Property_HasA_Location;");
    conn.query("delete from Agency;");
    conn.query("delete from Agent_Represents;");
    conn.query("delete from Offer;");
    conn.query("delete from Buyer;");
    conn.query("delete from Seller;");
    conn.query("delete from Accepts;");
    conn.query("delete from PurchaseOffer_Makes;");
    conn.query("delete from RentalOffer_Makes;");
    conn.query("delete from Appointment_View;");
    conn.query("delete from Approves;");
    conn.query("delete from Rates;");
    conn.query("delete from ForRent;");
    conn.query("delete from ForSale;");
    conn.query("delete from CommercialProperty_ForRent;");
    conn.query("delete from CommercialProperty_ForSale;");
    conn.query("delete from ResidentialProperty_ForRent;");
    conn.query("delete from ResidentialProperty_ForSale;");
    conn.query("delete from PostSale;");
    conn.query("delete from InterestedIn;");
*/
    // drop all tables
    conn.query("drop database micasa; ");
   conn.query("create database micasa;");
    conn.query("use micasa;")
    conn.query("drop table Property_HasA_Location cascade constraints;" +
                 "drop table Account cascade constraints;" +
                 "drop table Agency cascade constraints;" +
                 "drop table Agent_Represents cascade constraints;" +
                 "drop table Offer cascade constraints;" +
                 "drop table Buyer cascade constraints;" +
                 "drop table Seller cascade constraints;" +
                 "drop table Accepts cascade constraints;" +
                 "drop table PurchaseOffer_Makes cascade constraints;" +
                 "drop table RentalOffer_Makes cascade constraints;" +
                 "drop table Appointment_View cascade constraints;" +
                 "drop table Approves cascade constraints;" +
                 "drop table Rates cascade constraints;" +
                 "drop table ForRent cascade constraints;" +
                 "drop table ForSale cascade constraints;" +
                 "drop table CommercialProperty_ForRent cascade constraints;" +
                 "drop table CommercialProperty_ForSale cascade constraints;" +
                 "drop table ResidentialProperty_ForRent cascade constraints;" +
                 "drop table ResidentialProperty_ForSale cascade constraints;" +
                 "drop table PostSale cascade constraints;" +
                 "drop table InterestedIn cascade constraints;");

    conn.query("CREATE TABLE Property_HasA_Location (" +
                 "propertyID smallint PRIMARY KEY," +
                 "isFurnished char(1)," +
                 "age smallint," +
                 "locationID smallint," +
                 "aptNumber smallint," +
                 "area smallint," +
                 "houseNumber char(6)," +
                 "street char(20)," +
                 "country char(20)," +
                 "city char(20)," +
                 "province char(20))");

    conn.query("CREATE TABLE Account (" +
               "uname varchar(20) PRIMARY KEY," +
               "password varchar(20) not NULL)");

    conn.query("CREATE TABLE Agency (" +
                 "name varchar(20)," +
                 "agencyRating tinyint," +
                 "agencyID smallint PRIMARY KEY)");

    conn.query("CREATE TABLE Agent_Represents (" +
                 "agentID smallint PRIMARY KEY," +
                 "agentName varchar(20)," +
                 "agentPhone char(10)," +
                 "agentEmail varchar(15)," +
                 "agencyID smallint," +
                 "agentRating integer," +
                 "uname       varchar(20) not NULL," +
                 "FOREIGN KEY (uname) REFERENCES Account(uname) ON UPDATE CASCADE," +
                 "FOREIGN KEY (agencyID) REFERENCES Agency(agencyID) ON UPDATE CASCADE)");                  

    conn.query("CREATE TABLE Offer (" +
                 "offerID smallint PRIMARY KEY," +
                 "offerMessage varchar(200)," +
                 "offerDate date not NULL)");

    conn.query("CREATE TABLE Buyer (" +
                 "buyerEmail varchar(15)," +
                 "buyerPhone char(10) not NULL," +
                 "buyerName varchar(20) not NULL," +
                 "uname       varchar(20) not NULL," +
                 "FOREIGN KEY (uname) REFERENCES Account(uname) ON UPDATE CASCADE," +
                 "PRIMARY KEY (buyerPhone, buyerName))");

    conn.query("CREATE TABLE Seller (" +
                 "sellerEmail varchar(15)," +
                 "sellerPhone char(10) not NULL," +
                 "sellerName varchar(20) not NULL," +
                 "uname       varchar(20) not NULL," +
                 "FOREIGN KEY (uname) REFERENCES Account(uname) ON UPDATE CASCADE," +
                 "PRIMARY KEY (sellerPhone, sellerName))");


    conn.query("CREATE TABLE Accepts (" +
                 "offerID smallint PRIMARY KEY," +
                 "sellerPhone char(10)," +
                 "sellerName varchar(20)," +
                 "FOREIGN KEY (sellerPhone, sellerName) references Seller(sellerPhone, sellerName) ON UPDATE CASCADE," +
                 "FOREIGN KEY (offerID) references Offer(offerID) ON UPDATE CASCADE)");


    conn.query("CREATE TABLE PurchaseOffer_Makes (" +
                 "offerID smallint PRIMARY KEY," +
                 "purchaseAmount integer not null," +
                 "propertyID smallint," +
                 "buyerPhone char(10)," +
                 "buyerName varchar(20)," +
                 "FOREIGN KEY (propertyID) references Property_HasA_Location(propertyID) ON UPDATE CASCADE," +
                 "FOREIGN KEY (buyerPhone, buyerName) references Buyer(buyerPhone, buyerName) ON UPDATE CASCADE, " +
                 "FOREIGN KEY (offerID) references Offer(offerID) ON UPDATE CASCADE)");


    conn.query("CREATE TABLE RentalOffer_Makes (" +
                 "offerID smallint PRIMARY KEY," +
                 "rentAmount integer not null," +
                 "propertyID smallint," +
                 "buyerPhone char(10)," +
                 "buyerName varchar(20)," +
                 "FOREIGN KEY (propertyID) references Property_HasA_Location(propertyID) ON UPDATE CASCADE," +
                 "FOREIGN KEY (buyerPhone, buyerName) references Buyer(buyerPhone, buyerName) ON UPDATE CASCADE, " +
                 "FOREIGN KEY (offerID) references Offer(offerID) ON UPDATE CASCADE)"); 

    conn.query("CREATE TABLE Appointment_View (" +
                 "appointmentID smallint PRIMARY KEY," + 
                 "appointmentTime timestamp," +
                 "appDuration integer not null," +
                 "propertyID smallint," + 
                 "buyerPhone char(10)," + 
                 "buyerName varchar(20)," + 
                 "FOREIGN KEY (propertyID) references Property_HasA_Location(propertyID) ON UPDATE CASCADE," +
                 "FOREIGN KEY (buyerPhone, buyerName) references Buyer(buyerPhone, buyerName) ON UPDATE CASCADE)");        

    conn.query("CREATE TABLE Approves (" +
                 "appointmentID smallint PRIMARY KEY," + 
                 "agentID smallint," +
                 "FOREIGN KEY (appointmentID) references Appointment_View(appointmentID) ON UPDATE CASCADE," +
                 "FOREIGN KEY (agentID) references Agent_Represents(agentID) ON UPDATE CASCADE)");

    conn.query("CREATE TABLE Rates (" +
                 "sellerRating smallint," + 
                 "agentID smallint not NULL," +
                 "sellerPhone char(10)," +
                 "sellerName varchar(20)," +
                 "PRIMARY KEY (agentID, sellerPhone, sellerName),"+
                 "FOREIGN KEY (sellerPhone, sellerName) references Seller(sellerPhone, sellerName) ON UPDATE CASCADE," +
                 "FOREIGN KEY (agentID) references Agent_Represents(agentID) ON UPDATE CASCADE)");

    conn.query("CREATE TABLE ForRent (" +
                 "rentPrice smallint not null," + 
                 "propertyID smallint not null PRIMARY KEY," +
                 "petsAllowed char(1)," +
                 "FOREIGN KEY (propertyID) references Property_HasA_Location(propertyID) ON UPDATE CASCADE)");

    conn.query("CREATE TABLE ForSale (" +
                 "salePrice int not null," + 
                 "propertyID smallint not null PRIMARY KEY," +
                 "FOREIGN KEY (propertyID) references Property_HasA_Location(propertyID) ON UPDATE CASCADE)");

    conn.query("CREATE TABLE ResidentialProperty_ForRent (" +
                 "propertyID smallint not null PRIMARY KEY," +
                 "hasGarden char(1)," +
                 "hasGarage char(1)," +
                 "FOREIGN KEY (propertyID) references Property_HasA_Location(propertyID) ON UPDATE CASCADE)");

    conn.query("CREATE TABLE ResidentialProperty_ForSale (" +
                 "propertyID smallint not null PRIMARY KEY," +
                 "hasGarden char(1)," +
                 "hasGarage char(1)," +
                 "FOREIGN KEY (propertyID) references Property_HasA_Location(propertyID) ON UPDATE CASCADE)");

    conn.query("CREATE TABLE CommercialProperty_ForRent (" +
                 "propertyID smallint not null PRIMARY KEY," +
                 "storage tinyint," +
                 "offices tinyint," +
                 "FOREIGN KEY (propertyID) references Property_HasA_Location(propertyID) ON UPDATE CASCADE)");

    conn.query("CREATE TABLE CommercialProperty_ForSale (" +
                 "propertyID smallint not null PRIMARY KEY," +
                 "storage tinyint," +
                 "offices tinyint," +
                 "FOREIGN KEY (propertyID) references Property_HasA_Location(propertyID) ON UPDATE CASCADE)");

    conn.query("CREATE TABLE PostSale (" +
                 "propertyID smallint PRIMARY KEY," +
                 "sellerName varchar(20) not null," +
                 "sellerPhone char(10) not null," +
                 "agentID smallint not null," +
                 "FOREIGN KEY(sellerPhone, sellerName) references Seller(sellerPhone, sellerName) ON UPDATE CASCADE," +
                 "FOREIGN KEY(agentID) references Agent_Represents(agentID) ON UPDATE CASCADE," +
                 "FOREIGN KEY (propertyID) references Property_HasA_Location(propertyID) ON UPDATE CASCADE)");

    conn.query("CREATE TABLE InterestedIn (" +
                 "propertyID smallint not null, " +
                 "buyerName varchar(20) not null," +
                 "buyerPhone char(10) not null," +
                 "message varchar(200)," +
                 "FOREIGN KEY (buyerPhone, buyerName) references Buyer(buyerPhone, buyerName) ON UPDATE CASCADE," +
                 "FOREIGN KEY (propertyID) references Property_HasA_Location(propertyID) ON UPDATE CASCADE)");

      // All propertyIDs start with an 8xxx
    conn.query("INSERT INTO Property_HasA_Location VALUES (8123, 'Y', 5, 7123, NULL, 2000, '6123', 'Fake Street', 'Canadia', 'Vancouveria', 'BC')," +
               "(8234, 'Y', 0, 7234, 47, 500, '6234', 'Highland Blvd', 'Canadia', 'Vancouveria', 'BC')," +
               "(8345, 'N', 97, 7345, NULL, 10000, '6345', 'Sunrise Lane', 'Amurnica', 'Portlandia', 'OR')," +  
               "(8456, 'N', 10, 7456, 396, 1000, '6456','Highland Blvd', 'Canadia', 'Vancouveria', 'BC')," +
               "(8567, NULL, NULL, 7567, NULL, 5000, '6567', 'Mansion Way', 'Amurnica', 'Seattlilia', 'WA')," +
               "(8678, 'Y', 5, 7678, NULL, 5000, '6678', 'Mansion Way', 'Amurnica', 'Seattlilia', 'WA')," +
               "(8789, 'N', 1, 7789, NULL, 1500, '6789', 'Hillcrest Ave', 'Amurnica', 'Portlandia', 'OR')," +
               "(8890, NULL, 0, 7890, NULL, 10000, '6890', 'Algorithm Ave', 'Amurnica', 'Portlandia', 'OR')," +
               "(8910, 'N', 5, 7910, NULL, 7000, '6910', 'Math Drive', 'Amurnica', 'Portlandia', 'OR')," +
               "(8911, 'Y', 22, 7911, NULL, 9000, '6911', 'Database Ln', 'Amurnica', 'Portlandia', 'OR')," +
               "(8913, 'Y', 57, 7913, NULL, 3000, '6913', 'Lauren Ln', 'Canadia', 'Vancouveria', 'BC')," +
               "(8912, 'N', 3, 7912, NULL, 5000, '6912', 'Ardor St', 'Amurnica', 'Portlandia', 'OR');");

    conn.query("INSERT INTO Account VALUES ('ahuang', 'rarestpepes69')," +
               "('katherinelab', 'katherineisbeautiful')," +
               "('bakedjoe', 'omg11iamsobaked')," +
               "('samiam', 'iamsam')," +
               "('jackli', 'hunter2')," +
               "('pinkjones', 'pinkmanisme')," +
               "('itsmarkus', 'colonrightbracket')," +
               "('aqin', 'tanqin25')," +
               "('bwis', 'le69wiskid')," +
               "('lionman', 'bannedfromlocalzoo')," +
               "('marylamb', 'hadalittle')," +
               "('billyhuangsds', 'sdsgaming')," +
               "('timberlak', 'fishing8')," +
               "('liam', 'l14mismyname')," +
               "('jonesbob', 'notbobjones');");


    // All agencyIDs start with 9xxx
    conn.query("INSERT INTO Agency VALUES ('RealRealEstate', 8, 9123)," +
               "('The Wayne Bros', 5, 9234)," +
               "('RealtorNOW', 10, 9345)," +  
               "('AyyHouseNow', 2, 9456)," +
               "('RealMax', NULL, 9567);");  

    // All agentIDs start with a 1xxx
    conn.query("INSERT INTO Agent_Represents VALUES (1123, 'Alex Huang', 1113456789, 'ah@real.com',9123, 2, 'ahuang')," +
               "(1234, 'Katherine Lab', 1113334444, 'kl@wb.com',9234, 9, 'katherinelab')," +
               "(1345, 'Joe Baker', 1112223333, 'jb@rNOW.com',9345, 5, 'bakedjoe')," +
               "(1456, 'Sam Wise', 1115556666, 'sw@Ayy.com',9456, NULL, 'samiam')," +
               "(1567, 'Jack Li', 1118889999, 'jl@MAX.com',9567, 10, 'jackli');");

    // All purchase offerIDs start with 2xxx, rental offerIDs start with 3xxx
    conn.query("INSERT INTO Offer VALUES (2123, 'I love this house! Today will be the day that I finally purchase my dream house lmao', '2014-10-11')," +
               "(2234, 'When can I move in Kappa', '2014-03-25')," +
               "(2345, 'This house has same written all over it', '2014-04-04')," +
               "(3123, NULL, '2014-12-25')," +
               "(3234, 'Its ok', '2014-01-01');");

    // ALL BUYERS HAVE BUY IN THEIR EMAIL AS WELL AS A PHONE NUMBER STARTING WITH 604
    conn.query("INSERT INTO Buyer VALUES ('pjio198@buy.ca', '6041112222', 'Pinkman Jones', 'pinkjones')," +
               "('mark@buy.ca', '6042223333', 'Markus Lemonis', 'itsmarkus')," +
               "('angel@buy.ca', '6043334444', 'Angel Qin', 'aqin')," +  
               "('look4@buy.ca', '6044445555', 'Brando Wison', 'bwis')," +
               "('Lion@buy.com', '6045556666', 'Hartof Lion', 'lionman');");

    // ALL SELLERS HAVE SELL IN THEIR EMAIL AS WELL AS A PHONE STARTING WITH 778
    conn.query("INSERT INTO Seller VALUES ('home@sell.ca', '7781112222', 'Mary Lamb', 'marylamb')," +
               "('Bill@sell.ca', '7782223333', 'Bill Jones', 'billyhuangsds')," +
               "('Bye@sell.ca', '7783334444', 'Justin Timb', 'timberlak')," +  
               "('Liam@sell.ca', '7784445555', 'Liam Neeson', 'liam')," +
               "('BobJ@sell.com', '7785556666', 'Bob Jones', 'jonesbob');");

    conn.query("INSERT INTO Accepts VALUES (2123, '7781112222', 'Mary Lamb')," +
               "(2234, '7782223333', 'Bill Jones')," +
               "(2345, '7783334444', 'Justin Timb')," +  
               "(3123, '7784445555', 'Liam Neeson')," +
               "(3234, '7785556666', 'Bob Jones');");

    conn.query("INSERT INTO PurchaseOffer_Makes VALUES (2123, 500000, 8123, '6041112222', 'Pinkman Jones')," +
               "(2234, 1000000, 8234, '6042223333', 'Markus Lemonis'),"+
               "(2345, 2000000, 8345, '6043334444', 'Angel Qin');");

    conn.query("INSERT INTO RentalOffer_Makes VALUES (3123, 1000, 8456, '6044445555', 'Brando Wison')," +
               "(3234, 1500, 8567, '6045556666', 'Hartof Lion');");

    conn.query("INSERT INTO Appointment_View VALUES (123, '2015-06-15', 1, 8123, '6041112222', 'Pinkman Jones')," +
               "(234, '2015-05-14', 2, 8234, '6042223333', 'Markus Lemonis')," +
               "(345, '2015-07-02', 4, 8345, '6043334444', 'Angel Qin');");

    conn.query("INSERT INTO Approves VALUES (123, 1123)," +
               "(234, 1345);");

    conn.query("INSERT INTO Rates VALUES (10, 1123, '7781112222', 'Mary Lamb')," +
               "(5, 1456, '7783334444', 'Justin Timb')," +
               "(4, 1456, '7785556666', 'Bob Jones');");

    // Property ID starts with an 8
    conn.query("INSERT INTO ForRent VALUES (1000, 8456, 'Y')," +
               "(1600, 8567, 'N')," +
               "(5500, 8911, 'Y')," +
               "(7000, 8913, 'N')," +
               "(800, 8912, 'N');");

    conn.query("INSERT INTO ForSale VALUES (500000, 8123)," +
               "(1000000, 8234)," +
               "(2500000, 8345)," +
               "(3000000, 8678)," +
               "(500000, 8789),"+
               "(1790000, 8890);");

    conn.query("INSERT INTO ResidentialProperty_ForRent VALUES (8456, 'Y', 'Y')," +
              "(8912, 'N', 'N');");

    conn.query("INSERT INTO ResidentialProperty_ForSale VALUES (8123, 'N', 'Y')," +
               "(8234, 'N', 'Y')," +
               "(8678, 'Y', 'Y')," +
               "(8890, 'Y', 'N');");

    conn.query("INSERT INTO CommercialProperty_ForRent VALUES (8567, 10, 10), " +
              "(8913, 50, 50), " +
              "(8911, 20, 20);");

    conn.query("INSERT INTO CommercialProperty_ForSale VALUES (8345, 50, 50)," +
              "(8789, 20, 20)," +
              "(8910, 10, 5);");

    conn.query("INSERT INTO PostSale VALUES (8123, 'Mary Lamb', '7781112222', 1123)," +
               "(8234, 'Bill Jones', '7782223333', 1234)," +
               "(8345, 'Justin Timb', '7783334444', 1345)," +
               "(8456, 'Liam Neeson', '7784445555', 1456)," +
               "(8567, 'Bob Jones', '7785556666', 1567)," +
               "(8678, 'Liam Neeson', '7784445555', 1123)," +
               "(8789, 'Liam Neeson', '7784445555', 1123)," +
               "(8890, 'Bob Jones', '7785556666', 1234)," +
               "(8910, 'Bob Jones', '7785556666', 1345)," +
               "(8911, 'Bob Jones', '7785556666', 1456)," +
               "(8913, 'Mary Lamb', '7781112222', 1567)," +
               "(8912, 'Bob Jones', '7785556666', 1567);");

    conn.query("INSERT INTO InterestedIn VALUES (8123, 'Pinkman Jones', '6041112222', 'What a beautiful property, I want to buy this REAL QUICK')," +
               "(8234, 'Markus Lemonis', '6042223333','This house will soon be MINE!!!');");

  });
};
