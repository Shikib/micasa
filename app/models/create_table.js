var mysqlModule = require("../../mysqlModule");

exports.initialize_tables = function() {
  mysqlModule.getConnection(function(err, conn) {
  conn.query("CREATE TABLE TEST (" +
        "id int," +
        "name VARCHAR(200))");
  });
};
