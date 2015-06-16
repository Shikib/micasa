
$(document).ready(function() {
    $('select').material_select();
});

$(window).load(function() {
  var parameters = {};
<<<<<<< HEAD
  $.get('/buyerloadPurchase', parameters, function(data) {
  	console.log(data);
  	$("#purchaseoffer > tbody").html("");
  	for (var i in data) {
  	  var rowString = "<tr>";
      rowString += "<td>" + data[i].propertyID + "</td>";
      rowString += "<td>" + data[i].houseNumber + "</td>";
      rowString += "<td>" + data[i].street + "</td>";
      rowString += "<td>" + data[i].city + "</td>";
      rowString += "<td>" + data[i].age + "</td>";
      rowString += "<td>" + data[i].area + "</td>";
      rowString += "<td>" + data[i].isFurnished + "</td>";
      rowString += "<td>" + data[i].offerDate+ "</td>";
      rowString += "<td>" + data[i].purchaseAmount + "</td>";
      $("#purchaseoffer > tbody").append(rowString);
    }
  });
});

$(window).load(function() {
  var parameters = {};
  $.get('/buyerloadRent', parameters, function(data) {
    console.log(data);
    $("#rentoffer > tbody").html("");
    for (var i in data) {
      var rowString = "<tr>";
=======
  $.get('/buyerload', parameters, function(data) {
  	console.log(data);
  	$("#results > tbody").html("");
  	for (var i in data) {
  	  var rowString = "<tr>";
>>>>>>> feature/accounts
      rowString += "<td>" + data[i].PropertyID + "</td>";
      rowString += "<td>" + data[i].houseNumber + "</td>";
      rowString += "<td>" + data[i].street + "</td>";
      rowString += "<td>" + data[i].city + "</td>";
      rowString += "<td>" + data[i].age + "</td>";
      rowString += "<td>" + data[i].area + "</td>";
      rowString += "<td>" + data[i].isFurnished + "</td>";
      rowString += "<td>" + data[i].OfferDate+ "</td>";
      rowString += "<td>" + data[i].purchaseAmount + "</td>";
<<<<<<< HEAD
      $("#rentoffer > tbody").append(rowString);
=======
      $("#results > tbody").append(rowString);
>>>>>>> feature/accounts
    }
  });
});
