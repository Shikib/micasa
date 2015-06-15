$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });



$('#app-submit').click(function(ev) {
  ev.preventDefault();
        parameters = { buyername: $('#buyername').val(),
                      buyerphone:  $('#buyerphone').val(),
                      propertyID:  $('#propertyID').val(),
                      appdate:  $('#appdate').val(),
                      appduration:  $('#appduration').val(),
                      appID: $('#appID').val()};
        console.log(parameters);  
          $.get('/create_new_app', parameters, function(data)

  }  
