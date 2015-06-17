$(document).ready(function() {
  if (!logged_in || logged_in_type != 0)
    $('.ylog').hide();
    $('.nlog').show();
})