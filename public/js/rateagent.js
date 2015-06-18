
$(document).ready(function() {
  $('select').material_select();
    $(".dropdown-button").dropdown();
    $.get('login_info', {}, function (data) {
      logged_in = data.logged_in;
      logged_in_type = data.type;
      login = data.info;
      if (!logged_in && logged_in_type=="1") {
        $('.nlog').show();
        $('.ylog').hide();
      }
      loadpage(); 
    });
});

function loadpage(){
$('#in-submit').click(function(ev) {
 var parID = {agentID: $('#agentID').val()};
 $.get('/check_agentID', parID, function(data) {
  if (data.length == 0) {
    Materialize.toast('The agent ID you submitted is not a valid agent', 4000);
  }else {
    ev.preventDefault();
    parameters = { sellerName: login.sellerName,
    sellerPhone:  login.sellerPhone,
    agentID:  $('#agentID').val(),
    sellerRating:  $('#sellerRating').val()};
    $.get('/rateagent_Rates', parameters, function(data){});
     $('#in-submit').hide();
     $('#form').hide();
      Materialize.toast('Agent rating added', 4000);
    }
  });
})
}