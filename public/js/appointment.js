

$('#app-submit').click(function(ev) {
  $('#app-submit').hide();
  ev.preventDefault();
  var appID = Math.floor(Math.random() * 32);
        $.get('/get_all_appID', {}, function(data) {
          while (data.indexOf(appID) > -1)
            appID = Math.floor(Math.random() * 32);
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

