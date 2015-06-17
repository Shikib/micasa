$(document).ready(function() {
    $('select').material_select();
});

$('#delete-app-field').submit(function(ev) {
  ev.preventDefault();
  var parameters = {appID: $('#approve').val() };

  $.get('/buyer_not_approved_appointmentID', parameters, function(data) {
    for (var i in data) {
 		if (parameters.appID == data[i].appointmentID) {
 			$.get('/buyer_appointment_approve', parameters, function(data) {

 			})
    	}
    }
  })
});