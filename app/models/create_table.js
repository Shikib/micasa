var mysqlModule = require("../../mysqlModule");

exports.initialize_tables = function() {
  mysqlModule.getConnection(function(err, conn) {

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

    // drop all tables
    conn.query("drop table Property_HasA_Location cascade constraints;" +
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
                 "propertyID int PRIMARY KEY," +
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
                 "FOREIGN KEY (agencyID) REFERENCES Agency(agencyID))");                  

    conn.query("CREATE TABLE Offer (" +
                 "offerID smallint PRIMARY KEY," +
                 "offerMessage varchar(200)," +
                 "offerDate date)");

    conn.query("CREATE TABLE Buyer (" +
                 "buyerEmail varchar(15)," +
                 "buyerPhone char(10) not NULL," +
                 "buyerName varchar(20) not NULL," +
                 "PRIMARY KEY (buyerPhone, buyerName))");

    conn.query("CREATE TABLE Seller (" +
                 "sellerEmail varchar(15)," +
                 "sellerPhone char(10) not NULL," +
                 "sellerName varchar(20) not NULL," +
                 "PRIMARY KEY (sellerPhone, sellerName))");


    conn.query("CREATE TABLE Accepts (" +
                 "offerID smallint PRIMARY KEY," +
                 "sellerPhone char(10)," +
                 "sellerName varchar(20)," +
                 "FOREIGN KEY (sellerPhone, sellerName) references Seller(sellerPhone, sellerName)," +
                 "FOREIGN KEY (offerID) references Offer(offerID))");


    conn.query("CREATE TABLE PurchaseOffer_Makes (" +
                 "offerID smallint PRIMARY KEY," +
                 "purchaseAmount integer not null," +
                 "propertyID smallint," +
                 "buyerPhone char(10)," +
                 "buyerName varchar(20)," +
                 "FOREIGN KEY (propertyID) references Property_HasA_Location(propertyID)," +
                 "FOREIGN KEY (buyerPhone, buyerName) references Buyer(buyerPhone, buyerName)," +
                 "FOREIGN KEY (offerID) references Offer(offerID))");

    conn.query("CREATE TABLE RentalOffer_Makes (" +
                 "offerID smallint PRIMARY KEY," +
                 "rentAmount integer not null," +
                 "propertyID smallint," +
                 "buyerPhone char(10)," +
                 "buyerName varchar(20)," +
                 "FOREIGN KEY (propertyID) references Property_HasA_Location(propertyID)," +
                 "FOREIGN KEY (buyerPhone, buyerName) references Buyer(buyerPhone, buyerName))");  


    conn.query("CREATE TABLE Appointment_View (" +
                 "appointmentID smallint PRIMARY KEY," + 
                 "appointmentTime timestamp," +
                 "appDuration integer not null," +
                 "propertyID smallint," + 
                 "buyerPhone char(10)," + 
                 "buyerName varchar(20)," + 
                 "FOREIGN KEY (propertyID) references Property_HasA_Location(propertyID)," +
                 "FOREIGN KEY (buyerPhone, buyerName) references Buyer(buyerPhone, buyerName))");        

    conn.query("CREATE TABLE Approves (" +
                 "appointmentID smallint PRIMARY KEY," + 
                 "agentID smallint," +
                 "FOREIGN KEY (appointmentID) references Appointment_View(appointmentID)," +
                 "FOREIGN KEY (agentID) references Agent_Represents(agentID))");

    conn.query("CREATE TABLE Rates (" +
                 "sellerRating smallint," + 
                 "agentID smallint not NULL," +
                 "sellerPhone char(10)," +
                 "sellerName varchar(20)," +
                 "PRIMARY KEY (agentID, sellerPhone, sellerName),"+
                 "FOREIGN KEY (sellerPhone, sellerName) references Seller(sellerPhone, sellerName)," +
                 "FOREIGN KEY (agentID) references Agent_Represents(agentID))");

    conn.query("CREATE TABLE ForRent (" +
                 "rentPrice smallint not null," + 
                 "propertyID smallint not null PRIMARY KEY," +
                 "petsAllowed char(1)," +
                 "FOREIGN KEY (propertyID) references Property_HasA_Location(propertyID))");

    conn.query("CREATE TABLE ForSale (" +
                 "salePrice int not null," + 
                 "propertyID smallint not null PRIMARY KEY," +
                 "FOREIGN KEY (propertyID) references Property_HasA_Location(propertyID))");

    conn.query("CREATE TABLE ResidentialProperty_ForRent (" +
                 "propertyID smallint not null PRIMARY KEY," +
                 "hasGarden char(1)," +
                 "hasGarage char(1)," +
                 "FOREIGN KEY (propertyID) references Property_HasA_Location(propertyID))");

    conn.query("CREATE TABLE ResidentialProperty_ForSale (" +
                 "propertyID smallint not null PRIMARY KEY," +
                 "hasGarden char(1)," +
                 "hasGarage char(1)," +
                 "FOREIGN KEY (propertyID) references Property_HasA_Location(propertyID))");

    conn.query("CREATE TABLE CommercialProperty_ForRent (" +
                 "propertyID smallint not null PRIMARY KEY," +
                 "storage tinyint," +
                 "offices tinyint," +
                 "FOREIGN KEY (propertyID) references Property_HasA_Location(propertyID))");

    conn.query("CREATE TABLE CommercialProperty_ForSale (" +
                 "propertyID smallint not null PRIMARY KEY," +
                 "storage tinyint," +
                 "offices tinyint," +
                 "FOREIGN KEY (propertyID) references Property_HasA_Location(propertyID))");

    conn.query("CREATE TABLE PostSale (" +
                 "propertyID smallint PRIMARY KEY," +
                 "sellerName varchar(20) not null," +
                 "sellerPhone char(10) not null," +
                 "agentID smallint not null," +
                 "FOREIGN KEY(sellerPhone, sellerName) references Seller(sellerPhone, sellerName)," +
                 "FOREIGN KEY(agentID) references Agent_Represents(agentID)," +
                 "FOREIGN KEY (propertyID) references Property_HasA_Location(propertyID))");

    conn.query("CREATE TABLE InterestedIn (" +
                 "propertyID smallint PRIMARY KEY," +
                 "buyerName varchar(20) not null," +
                 "buyerPhone char(10) not null," +
                 "message varchar(200)," +
                 "FOREIGN KEY (buyerPhone, buyerName) references Buyer(buyerPhone, buyerName)," +
                 "FOREIGN KEY (propertyID) references Property_HasA_Location(propertyID))");


  });
};
