var logged_in = false;
var logged_in_type; // 0 for agent, 1 for seller, 2 for buyer
var login;

exports.login = function(type, data, res) {
  logged_in = true;
  logged_in_type = type;
  login = data;
  res.send("logged_in");
}

exports.logout = function(res) {
  logged_in = false;
  logged_in_type = undefined;
  login = undefined;
  res.send("logged_out");
}

exports.get_logged_in = function(res) {
  res.send({logged_in: logged_in, type: logged_in_type, info: login});
}
