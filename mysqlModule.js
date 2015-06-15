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
    console.log("test3");
    if (err) {
      console.log("!!!!error " + err);
      return callback(err);
    }
    callback(err, conn);
  });
};

exports.query = function(conn, queryString, res) {
  conn.query(queryString, function (err, rows) {
    if (err) throw err;
    
    if (res === undefined) { 
      return rows;
    }
    console.log(queryString);
    res.send(rows);     
  });
};
