$('#in-submit').click(function(ev) {
 var parID = {propertyID: $('#propertyID').val()};
 $.get('/check_propertyID', parID, function(data) {
  if (data.length == 0) {
    Materialize.toast('The property ID you submitted is not a valid property', 4000);
  }else {
    ev.preventDefault();
    parameters = { buyername: $('#buyername').val(),
    buyerphone:  $('#buyerphone').val(),
    propertyID:  $('#propertyID').val(),
    message:  $('#message').val()};
    console.log(parameters);  
    $.get('/create_new_interestedIn', parameters, function(data){});
     $('#in-submit').hide();
     $('#form').hide();
      Materialize.toast('rental offer added', 4000);
    }
  });
})
