$(window).load(function() {
  var parameters = {};
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