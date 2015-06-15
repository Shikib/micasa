$(window).load(function() {
  var parameters = {};
  $.get('/agent_appointments_get', parameters, function(data) {
    console.log(data);
    $("#results > tbody").html("");
    for (var i in data) {
      var rowString = "<tr>";
      rowString += "<td>" + data[i].appointmentID + "</td>";
      rowString += "<td>" + data[i].propertyID + "</td>";
      rowString += "<td>" + data[i].buyerPhone + "</td>";
      rowString += "<td>" + data[i].buyerName + "</td>";
      rowString += "<td>" + data[i].appointmentTime + "</td>";
      rowString += "<td>" + data[i].appDuration + "</td>";
      $("#results > tbody").append(rowString);
    }
  });
});