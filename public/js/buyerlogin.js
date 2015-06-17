$(document).ready(function() {
    $('select').material_select();
    $(".dropdown-button").dropdown();
    $.get('login_info', {}, function (data) {
      logged_in = data.logged_in;
      logged_in_type = data.type;
      login = data.info;
      if (!logged_in && logged_in_type=="0") {
        $('.nlog').show();
        $('.ylog').hide();
      }
    });
});