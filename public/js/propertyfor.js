$(document).ready(function() {
    $('select').material_select();
});

$('#property-for-sale-submit').click(function(ev) {
  $('#property-for-sale-submit').hide();
  ev.preventDefault();

        parameters = { propertyID: $('#propertyID').val(),
                      isfurnished:  $('#isfurnished').val(),
                      age:  $('#age').val(),
                      floors:  $('#floors').val(),
                      bathrooms:  $('#bathrooms').val(),
                      area:  $('#area').val(),
                      locationID:  $('#locationID').val(),
                      aptnumber:  $('#aptnumber').val(),
                      housenumber:  $('#housenumber').val(),
                      street:  $('#street').val(),
                      country:  $('#country').val(),
                      city:  $('#city').val(),
                      province:  $('#province').val(),
                      
          $.get('/create_new_property_for_sale', parameters, function(data){});
 $('#form').hide();
  })
