$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });



$('#app-submit').click(function(ev) {
  $('#app-submit').hide();
  ev.preventDefault();
  var appID = Math.floor(Math.random() * 327637);
        $.get('/get_all_appID', {}, function(data) {
          while (data.indexOf(appID) > -1)
            appID = Math.floor(Math.random() * 32767);
        });

        parameters = { buyername: $('#buyername').val(),
                      buyerphone:  $('#buyerphone').val(),
                      propertyID:  $('#propertyID').val(),
                      appdate:  $('#appdate').val(),
                      appduration:  $('#appduration').val(),
                      appID: appID};
        console.log(parameters);  
          $.get('/create_new_app', parameters, function(data){
});
           $('#form').hide();
  })

