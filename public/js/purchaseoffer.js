$('#purchase-offer-submit').click(function(ev) {
  $('#purchase-offer-submit').hide();
  ev.preventDefault();
  var oID = Math.floor(Math.random() * 32763);
        $.get('/get_all_offerID', {}, function(data) {
          while (data.indexOf(offerID) > -1)
            oID = Math.floor(Math.random() * 3276);
        });

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
  })
