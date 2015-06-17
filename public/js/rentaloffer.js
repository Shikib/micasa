$('#rental-offer-submit').click(function(ev) {
  ev.preventDefault();
  var offerID = Math.floor(Math.random() * 32763);
  $.get('/get_all_offerID', {}, function(data) {
    while (data.indexOf(offerID) > -1)
      offerID = Math.floor(Math.random() * 3276);
  });

  var parID = {propertyID: $('#propertyID').val()};
  $.get('/check_rent_propertyID', parID, function(data) {
    if (data.length == 0) {
      Materialize.toast('The property ID you submitted is not a valid rental property', 4000);
    }else {
      parameters = { buyername: $('#buyername').val(),
      buyerphone:  $('#buyerphone').val(),
      propertyID:  $('#propertyID').val(),
      amount:  $('#amount').val(),
      message:  $('#message').val(),
      offerdate:  $('#offerdate').val(),
      offerID: offerID};
      
      console.log(parameters);   
      $.get('/create_new_offer', parameters, function(data){});
      $.get('/create_new_rental_offer', parameters, function(data){});
      $('#rental-offer-submit').hide();
       $('#form').hide();
      Materialize.toast('rental offer added', 4000);
    }
  });
})

