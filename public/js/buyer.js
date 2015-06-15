
$(document).ready(function() {
    $('select').material_select();
});

$(window).load(function()) {
  console.log("1");
  $.get('/buyerload', parameters, function(data) {
  	console.log(data);
  	$("#results > tbody").html("");
  	for (var i in data) {
  	  var rowString = "<tr>";
      rowString += "<td>" + data[i].PropertyID + "</td>";
      rowString += "<td>" + data[i].houseNumber + "</td>";
      rowString += "<td>" + data[i].street + "</td>";
      rowString += "<td>" + data[i].city + "</td>";
      rowString += "<td>" + data[i].age + "</td>";
      rowString += "<td>" + data[i].area + "</td>";
      rowString += "<td>" + data[i].isFurnished + "</td>";
       rowString += "<td>" + data[i].OfferDate+ "</td>";
        rowString += "<td>" + data[i].purchaseAmount + "</td>";
      $("#results > tbody").append(rowString);
  }
  });
});
