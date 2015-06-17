
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
     rowString += "<td>" + data[i].offerID + "</td>";
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
      rowString += "<td>" + data[i].offerID + "</td>";
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
      rowString += "<td>" + data[i].appointmentID + "</td>";
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

$('#offer-submit').click(function(ev) {

  var offerID = {offerID: $('#delete-offerID').val()};
  $.get('/check_offerID', offerID, function(data) {
    if (data.length == 0) {
      Materialize.toast('The offer ID you submitted is not a valid rental property', 4000);
    }else {
      parameters = {offerID: $('#delete-offerID').val()};
      console.log(parameters);   
      $.get('/delete_from_offer', parameters, function(data){});
      $('#offer-submit').hide();
      $('#delete-offer-field').hide();
      Materialize.toast('offer deleted', 4000);
    }
  });
})

