$(document).ready(function() {
    $('select').material_select();
    $.get('login_info', {}, function (data){
      logged_in = data.logged_in;
      logged_in_type = data.type;
      login = data.info;
      if (!logged_in && logged_in_type=="1") {
        $('.nlog').show();
        $('.ylog').hide();
      }
      zoo();
      zot();
    }); 
});


function zoo() {
  var parameters = {login: login};
  $.get('/viewoffersSale', parameters, function(data) {
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
}


function zot() {
  var parameters = {login: login};
  $.get('/viewoffersRent', parameters, function(data) {
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
}
