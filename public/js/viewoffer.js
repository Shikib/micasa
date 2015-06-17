
$(document).ready(function() {
    $('select').material_select();
});


$(window).load(function() {
  var parameters = {};
  $.get('/viewoffersSale', parameters, function(data) {
    console.log(data);
    $("#viewforsale > tbody").html("");
    for (var i in data) {
      var rowString = "<tr>";
      rowString += "<td>" + data[i].offerID + "</td>";
      rowString += "<td>" + data[i].propertyID + "</td>";
      rowString += "<td>" + data[i].salePrice + "</td>";
      rowString += "<td>" + data[i].purchaseAmount + "</td>";
      rowString += "<td>" + data[i].offerMessage + "</td>";
      rowString += "<td>" + data[i].offerDate + "</td>";
      rowString += "<td>" + data[i].buyerName + "</td>";
      rowString += "<td>" + data[i].buyerPhone + "</td>";
      $("#viewforsale > tbody").append(rowString);
    }
  });
});


$(window).load(function() {
  var parameters = {};
  $.get('/viewoffersRent', parameters, function(data) {
    console.log(data);
    $("#viewforrent > tbody").html("");
    for (var i in data) {
      var rowString = "<tr>";
      rowString += "<td>" + data[i].offerID + "</td>";
      rowString += "<td>" + data[i].propertyID + "</td>";
      rowString += "<td>" + data[i].rentPrice + "</td>";
      rowString += "<td>" + data[i].rentAmount + "</td>";
      rowString += "<td>" + data[i].offerMessage + "</td>";
      rowString += "<td>" + data[i].offerDate + "</td>";
      rowString += "<td>" + data[i].buyerName + "</td>";
      rowString += "<td>" + data[i].buyerPhone + "</td>";
      $("#viewforrent > tbody").append(rowString);
    }
  });
});
