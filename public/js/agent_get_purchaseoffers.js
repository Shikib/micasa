$(window).load(function() {
  var parameters = {};
  $.get('/agent_purchaseoffers_get', parameters, function(data) {
    console.log(data);
    $("#purchaseresults > tbody").html("");
    for (var i in data) {
      var rowString = "<tr>";
      rowString += "<td>" + data[i].offerID + "</td>";
      rowString += "<td>" + data[i].propertyID + "</td>";
      rowString += "<td>" + data[i].purchaseAmount + "</td>";
      rowString += "<td>" + data[i].buyerName + "</td>";
      rowString += "<td>" + data[i].buyerPhone + "</td>";
      rowString += "<td>" + data[i].offerDate + "</td>";
      rowString += "<td>" + data[i].offerMessage + "</td>";
      $("#purchaseresults > tbody").append(rowString);
    }
  });
});