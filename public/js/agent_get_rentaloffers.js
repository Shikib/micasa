$(document).ready(function() {
    $('select').material_select();
    $.get('login_info', {}, function (data) {
      logged_in = data.logged_in;
      logged_in_type = data.type;
      login = data.info;
      var parameters = {login: login};
      $.get('/agent_rentaloffers_get', parameters, function(data) {
      $("#rentalresults > tbody").html("");
      for (var i in data) {
      var rowString = "<tr>";
      rowString += "<td>" + data[i].offerID + "</td>";
      rowString += "<td>" + data[i].propertyID + "</td>";
      rowString += "<td>" + data[i].rentAmount + "</td>";
      rowString += "<td>" + data[i].buyerName + "</td>";
      rowString += "<td>" + data[i].buyerPhone + "</td>";
      rowString += "<td>" + data[i].offerDate + "</td>";
      rowString += "<td>" + data[i].offerMessage + "</td>";
      $("#rentalresults > tbody").append(rowString);
      }
    });
  });
});