$(document).ready(function() {
    $('select').material_select();
});

$('#approve-field').submit(function(ev) {
  ev.preventDefault();
  var parameters = {appID: $('#approve').val() };

  if (parameters.appID > 32767 || parameters.appID < -32768) {
  	Materialize.toast('Please enter a valid appointmentID', 4000);
  } else {
  	$.get('/agent_not_approved_appointmentID', parameters, function(data) {
    	for (var i in data) {
 			if (parameters.appID == data[i].appointmentID) {
 				$.get('/agent_appointment_approve', parameters, function(data) {
 				})
 				Materialize.toast('Successfully approved, please refresh page', 4000);
    		} else {
    			Materialize.toast('Invalid appointmentID', 4000);
    		}
    	}
    })
  }
});