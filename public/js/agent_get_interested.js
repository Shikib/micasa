$(document).ready(function() {
    $('select').material_select();
    $.get('login_info', {}, function (data) {
      logged_in = data.logged_in;
      logged_in_type = data.type;
      login = data.info;
      var parameters = {login: login};
      $.get('/agent_interest_get', parameters, function(data) {
      console.log(data);
      $("#results > tbody").html("");
      for (var i in data) {
      var rowString = "<tr>";
      rowString += "<td>" + data[i].propertyID + "</td>";
      rowString += "<td>" + data[i].buyerPhone + "</td>";
      rowString += "<td>" + data[i].buyerName + "</td>";
      rowString += "<td>" + data[i].message + "</td>";
      $("#results > tbody").append(rowString);
      }
    });
  });
});