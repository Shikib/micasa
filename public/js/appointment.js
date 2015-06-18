$(document).ready(function() {
  $('select').material_select();
    $(".dropdown-button").dropdown();
    $.get('login_info', {}, function (data) {
      logged_in = data.logged_in;
      logged_in_type = data.type;
      login = data.info;
      console.log(login)
      if (!logged_in && logged_in_type=="2") {
        $('.nlog').show();
        $('.ylog').hide();
      }
      loadpage(); 
    });
});

function loadpage(){
  $('#app-submit').click(function(ev) {
  var parID = {propertyID: $('#propertyID').val()};
  $.get('/check_propertyID', parID, function(data) {
    if (data.length == 0) {
      Materialize.toast('The property ID you submitted is not a valid property', 4000);
    }else {
      ev.preventDefault();

      var appID = Math.floor(Math.random() * 32763);
      $.get('/get_all_appID', {}, function(data) {
        while (data.indexOf(appID) > -1)
          appID = Math.floor(Math.random() * 32763);
      });

      parameters = {  buyername: login.buyerName,
      buyerphone:  login.buyerPhone,
      propertyID:  $('#propertyID').val(),
      appdate:  $('#appdate').val(),
      appduration:  $('#appduration').val(),
      appID: appID};
      console.log(parameters);  
      $.get('/create_new_app', parameters, function(data){});
      $('#form').hide();
        $('#app-submit').hide();
      Materialize.toast('Your appointment has been added', 4000);

    }
  });
})
}

