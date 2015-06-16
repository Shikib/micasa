$(document).ready(function() {
    $('select').material_select();
});

$('#approve-field').submit(function(ev) {
  ev.preventDefault();
  var parameters = {appID: $('#approve').val() };

  $.get('/agent_not_approved_appointmentID', parameters, function(data) {
    for (var i in data) {
 		if (parameters.appID == data[i].appointmentID) {
 			$.get('/agent_appointment_approve', parameters, function(data) {

 			})
    	}
    }
  })
});