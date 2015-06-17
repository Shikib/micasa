
$(document).ready(function() {
    $('select').material_select();
});

$(window).load(function() {
  var parameters = {};
  $.get('/sellerloadPurchase', parameters, function(data) {
  	console.log(data);
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
});

$(window).load(function() {
  var parameters = {};
  $.get('/sellerloadRent', parameters, function(data) {
    console.log(data);
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
});
