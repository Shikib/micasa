$('#rental-offer-submit').click(function(ev) {
  //$('#rental-offer-submit').hide();
  ev.preventDefault();
  var offerID = Math.floor(Math.random() * 32763);
        $.get('/get_all_offerID', {}, function(data) {
          while (data.indexOf(offerID) > -1)
            offerID = Math.floor(Math.random() * 3276);
        });

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
 //$('#form').hide();
  })
