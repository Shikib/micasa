
$('#rental-offer-submit').click(function(ev) {
  //$('#rental-offer-submit').hide();
  ev.preventDefault();
  var offerID = Math.floor(Math.random() * 32763);
        $.get('/get_all_offerID', {}, function(data) {
          while (data.indexOf(offerID) > -1)
            offerID = Math.floor(Math.random() * 3276);
        });

 var parID = {propertyID: $('#propertyID').val()};
 var d = {date: $('#date').val()};

//if(d.length!=10){
        //  Materialize.toast('please check your date fromat', 4000);
      //}
       //if(d.date.substring(0,3)<2013){
         //Materialize.toast('please check your date fromat', 4000);
      // }
      //if ((d.date.substring(5,6)<0) ||(d.date.substring(6,7)>13)){
        //  Materialize.toast('please check your date fromat', 4000);
        //}
      //if ((d.date.substring(8,9)<0) || (d.date.substring(8,9)>32)){
        //  Materialize.toast('please check your date fromat', 4000);
        //}

 console.log(parID);  
$.get('/check_rent_propertyID', parID, function(data) {
    if (data.length == 0) {
      Materialize.toast('the property ID you submitted is not a valid rental property', 4000);
    }else {
        parameters = { buyername: $('#buyername').val(),
                      buyerphone:  $('#buyerphone').val(),
                      propertyID:  $('#propertyID').val(),
                      amount:  $('#amount').val(),
                      message:  $('#message').val(),
                      offerdate:  $('#offerdate').val(),
                      offerID: offerID};
        console.log(parameters);   
        $.get('/create_new_offer', parameters, function(data){});
          $.get('/create_new_rental_offer', parameters, function(data){});
          Materialize.toast('rental offer added', 4000);
        }
      });
 //$('#form').hide();
  })
