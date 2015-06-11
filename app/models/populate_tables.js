var mysqlModule = require("../../mysqlModule");

exports.populate_tables = function() {
  mysqlModule.getConnection(function(err, conn) {
    conn.query("INSERT INTO Agency VALUES ('test', 244, 244)");   
  });
};
