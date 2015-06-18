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
$('#in-submit').click(function(ev) {
 var parameters = {login: login};
 var parID = {propertyID: $('#propertyID').val()};
 $.get('/check_propertyID', parID, function(data) {
  if (data.length == 0) {
    Materialize.toast('The property ID you submitted is not a valid property', 4000);
  }else {
    ev.preventDefault();
    parameters = { buyername: login.buyerName,
    buyerphone:  login.buyerPhone,
    propertyID:  $('#propertyID').val(),
    message:  $('#message').val()};
    $.get('/create_new_interestedIn', parameters, function(data){});
     $('#in-submit').hide();
     $('#form').hide();
      Materialize.toast('rental offer added', 4000);
    }
  });
})
}