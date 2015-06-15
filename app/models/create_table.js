var mysqlModule = require("../../mysqlModule");

exports.initialize_tables = function() {
  mysqlModule.getConnection(function(err, conn) {

    conn.query("drop table Property_HasA_Location;" +
                 "drop table Agency;" +
                 "drop table Agent_Represents;" +
                 "drop table Offer;" +
                 "drop table Buyer;" +
                 "drop table Seller;" +
                 "drop table Accepts;" +
                 "drop table PurchaseOffer_Makes;" +
                 "drop table RentalOffer_Makes;" +
                 "drop table Appointment_View;" +
                 "drop table Approves;" +
                 "drop table Rates;" +
                 "drop table ForRent;" +
                 "drop table ForSale;" +
                 "drop table CommercialProperty_ForRent;" +
                 "drop table CommercialProperty_ForSale;" +
                 "drop table ResidentialProperty_ForRent;" +
                 "drop table ResidentialProperty_ForSale;" +
                 "drop table PostSale;" +
                 "drop table InterestedIn;");

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
                 "offerDate date not NULL)");

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
                 "FOREIGN KEY (buyerPhone, buyerName) references Buyer(buyerPhone, buyerName))");

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
                 "salePrice smallint not null," + 
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


    mysqlModule.query(conn, "SELECT * FROM Agency;");

  });
};
