$(document).ready(function() {
    $.get('login_info', {}, function (data) {
      logged_in = data.logged_in;
      logged_in_type = data.type;
      login = data.info;
      if (!logged_in && logged_in_type=="2") {
        $('.nlog').show();
        $('.ylog').hide();
      }
    });
});