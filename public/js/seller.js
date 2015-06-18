$(document).ready(function() {
    $('select').material_select();
    $.get('login_info', {}, function (data) {
      logged_in = data.logged_in;
      logged_in_type = data.type;
      login = data.info;
      if (!logged_in && logged_in_type=="1") {
        $('.nlog').show();
        $('.ylog').hide();
      }
      foo();
      bar();
    });  
});

function foo() {
 var parameters = {login: login};
  $.get('/sellerloadPurchase', parameters, function(data) {
  	$("#forsale > tbody").html("");
  	for (var i in data) {
  	  var rowString = "<tr>";
      rowString += "<td>" + data[i].propertyID + "</td>";
      rowString += "<td>" + data[i].houseNumber + "</td>";
      rowString += "<td>" + data[i].street + "</td>";
      rowString += "<td>" + data[i].city + "</td>";
      rowString += "<td>" + data[i].age + "</td>";
      rowString += "<td>" + data[i].area + "</td>";
      rowString += "<td>" + data[i].isFurnished + "</td>";
      rowString += "<td>" + data[i].agentID+ "</td>";
      rowString += "<td>" + data[i].salePrice + "</td>";
      $("#forsale > tbody").append(rowString);
    }
  });
}

function bar() {
  var parameters = {login: login};
  $.get('/sellerloadRent', parameters, function(data) {
    $("#forrent > tbody").html("");
    for (var i in data) {
      var rowString = "<tr>";
      rowString += "<td>" + data[i].propertyID + "</td>";
      rowString += "<td>" + data[i].houseNumber + "</td>";
      rowString += "<td>" + data[i].street + "</td>";
      rowString += "<td>" + data[i].city + "</td>";
      rowString += "<td>" + data[i].age + "</td>";
      rowString += "<td>" + data[i].area + "</td>";
      rowString += "<td>" + data[i].isFurnished + "</td>";
      rowString += "<td>" + data[i].agentID+ "</td>";
      rowString += "<td>" + data[i].rentPrice + "</td>";
      $("#forrent > tbody").append(rowString);
    }
  });
}
