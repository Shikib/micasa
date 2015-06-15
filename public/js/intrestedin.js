$('#in-submit').click(function(ev) {
	$('#in-submit').hide();

  ev.preventDefault();
        parameters = { buyername: $('#buyername').val(),
                      buyerphone:  $('#buyerphone').val(),
                      propertyID:  $('#propertyID').val(),
                      message:  $('#message').val(),
        console.log(parameters);  
          $.get('/create_new_interestedIn', parameters, function(data)
 
  }  
