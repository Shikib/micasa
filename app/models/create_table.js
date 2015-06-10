var mysqlModule = require("../../mysqlModule");

exports.initialize_tables = function() {
  mysqlModule.getConnection(function(err, conn) {
    conn.query("CREATE TABLE Agency (" +
                 "name varchar(20)," +
                 "agencyRating tinyint," +
                 "agencyID smallint PRIMARY KEY)");

    conn.query("CREATE TABLE Agent_Represents (" +
                 "agentID smallint," +
                 "agentName varchar(20)," +
                 "agentPhone char(10)," +
                 "agentEmail varchar(15)," +
                 "agencyID smallint PRIMARY KEY," +
                 "agentRating integer," +
                 "FOREIGN KEY (agencyID) REFERENCES Agency(agencyID))");                  

    conn.query("CREATE TABLE Offer (" +
                 "offerID smallint PRIMARY KEY," +
                 "offerMessage varchar(200)," +
                 "offerDate date not NULL)");

    conn.query("CREATE TABLE Accepts (" +
                 "offerID smallint PRIMARY KEY," +
                 "sellerPhone char(10)," +
                 "sellerName varchar(20)," +
                 "FOREIGN KEY (sellerPhone, sellerName) references Seller(sellerPhone, sellerName)," +
                 "FOREIGN KEY (offerID) references Offer(offerID))");

    conn.query("CREATE TABLE Seller (" +
                 "sellerEmail varchar(15)," +
                 "sellerPhone char(10) not NULL," +
                 "sellerName varchar(20) not NULL," +
                 "PRIMARY KEY(sellerPhone, sellerName))");


  });
};
