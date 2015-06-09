var mysql = require("mysql");
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost:3000',
  user            : 'root',
  password        : 'password'
});

exports.getConnection = function(callback) {
  pool.getConnection(function(err, conn) {
    if (err) {
      return callback(err);
    }
    callback(err, conn);
  });
};
