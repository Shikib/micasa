$('#purchase-offer-submit').click(function(ev) {
  ev.preventDefault();
  var oID = Math.floor(Math.random() * 32763);
  $.get('/get_all_offerID', {}, function(data) {
    while (data.indexOf(oID) > -1)
      oID = Math.floor(Math.random() * 3276);
  });

  var parID = {propertyID: $('#propertyID').val()};
  $.get('/check_purchase_propertyID', parID, function(data) {
    if (data.length == 0) {
      Materialize.toast('the property ID you submitted is not a valid rental property', 4000);
    }else {
      parameters = { buyername: $('#buyername').val(),
      buyerphone:  $('#buyerphone').val(),
      propertyID:  $('#propertyID').val(),
      amount:  $('#amount').val(),
      message:  $('#message').val(),
      offerdate:  $('#offerdate').val(),
      offerID: oID};
      console.log(parameters);  
      $.get('/create_new_offer', parameters, function(data){});
      $.get('/create_new_purchase_offer', parameters, function(data){});
      $('#form').hide();
      $('#purchase-offer-submit').hide();
      Materialize.toast('Your purchase offer has added', 4000);
    }
  });
})
