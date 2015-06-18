
$(document).ready(function() {
    $('select').material_select();
});

$(window).load(function() {
  var parameters = {};
  $.get('/rateagentGet', parameters, function(data) {
  	console.log(data);
  	$("#agents > tbody").html("");
  	for (var i in data) {
  	  var rowString = "<tr>";
      rowString += "<td>" + data[i].agentID + "</td>";
      rowString += "<td>" + data[i].avgSellerRating + "</td>";
      rowString += "<td>" + data[i].agentName + "</td>";
      rowString += "<td>" + data[i].agentPhone + "</td>";
      rowString += "<td>" + data[i].agentEmail + "</td>";
      $("#agents > tbody").append(rowString);
    }
  });
});

