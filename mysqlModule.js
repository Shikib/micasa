var mysql = require("mysql");
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  database        : 'micasa',
  user            : 'root',
  password        : 'password'
});

exports.getConnection = function(callback) {
  pool.getConnection(function(err, conn) {
    if (err) {
      console.log("!!!!error " + err);
      return callback(err);
    }
    callback(err, conn);
  });
};

exports.query = function(conn, queryString, callback) {
  conn.query(queryString, function (err, rows) {
    if (err) throw err;
    
    if (callback === undefined) { 
      callback = console.log;
    }

    callback(rows);     
  });
};
