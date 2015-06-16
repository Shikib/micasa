
$(document).ready(function() {
    $('select').material_select();
    $(".dropdown-button").dropdown();
});

$(window).load(function() {
  var parameters = {};
  $.get('/buyerloadPurchase', parameters, function(data) {
  	console.log(data);
    console.log("purchase runs");
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
    console.log("rent runs");
    $("#rentoffer > tbody").html("");
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
      rowString += "<td>" + data[i].rentAmount + "</td>";

      $("#rentoffer > tbody").append(rowString);

    }
  });
});



$(window).load(function() {
  var parameters = {};
  $.get('/buyerloadApp', parameters, function(data) {
    console.log(data);
    $("#app> tbody").html("");
    for (var i in data) {
      var rowString = "<tr>";
      rowString += "<td>" + data[i].propertyID + "</td>";
      rowString += "<td>" + data[i].houseNumber + "</td>";
      rowString += "<td>" + data[i].street + "</td>";
      rowString += "<td>" + data[i].city + "</td>";
      rowString += "<td>" + data[i].appointmentTime+ "</td>";
      rowString += "<td>" + data[i].appDuration + "</td>";
      
      $("#app > tbody").append(rowString);

    }
  });
});
