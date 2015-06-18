$(document).ready(function() {
  $('select').material_select();
    $(".dropdown-button").dropdown();
    $.get('login_info', {}, function (data) {
      logged_in = data.logged_in;
      logged_in_type = data.type;
      login = data.info;
      if (!logged_in && logged_in_type=="2") {
        $('.nlog').show();
        $('.ylog').hide();
      }
      loadpage(); 
    });
});

function loadpage(){
$('#rental-offer-submit').click(function(ev) {
  ev.preventDefault();
  var offerID = Math.floor(Math.random() * 32763);
  $.get('/get_all_offerID', {}, function(data) {
    while (data.indexOf(offerID) > -1)
      offerID = Math.floor(Math.random() * 32763);
  });

  var parID = {propertyID: $('#propertyID').val()};
  $.get('/check_rent_propertyID', parID, function(data) {
    if (data.length == 0) {
      Materialize.toast('The property ID you submitted is not a valid rental property', 4000);
    }else {
      parameters = { buyername: login.buyerName,
    buyerphone:  login.buyerPhone,
      propertyID:  $('#propertyID').val(),
      amount:  $('#amount').val(),
      message:  $('#message').val(),
      offerdate:  $('#offerdate').val(),
      offerID: offerID};
      
      $.get('/create_new_offer', parameters, function(data){});
      $.get('/create_new_rental_offer', parameters, function(data){});
      $('#rental-offer-submit').hide();
       $('#form').hide();
      Materialize.toast('rental offer added', 4000);
    }
  });
})
}