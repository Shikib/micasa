
$(document).ready(function() {
    $('select').material_select();
    $.get('login_info', {}, function (data) {
      logged_in = data.logged_in;
      logged_in_type = data.type;
      login = data.info;
      if (!logged_in) {
        $('.nlog').show();
        $('.ylog').hide();
      }
      if (logged_in) {
        $('.ylog').show();
        $('.nlog').hide();
      }
      if (logged_in_type == "0") {
        $('.agento').show();
        $('.defo').hide();
        $('.sellero').hide();
        $('.buyero').hide();
      }
      else if (logged_in_type == "1") {
        $('.agento').hide();
        $('.defo').show();
        $('.sellero').show();
        $('.buyero').hide();
      }  
      else if (logged_in_type == "2") {
        $('.agento').hide();
        $('.defo').show();
        $('.sellero').hide();
        $('.buyero').show();
      }  
    });
});

$('#search-field').submit(function(ev) {
  ev.preventDefault();
  var parameters = {search: $('#search').val() };
  $.get('/searching', parameters, function(data) {
    console.log(data);
    $("#results > tbody").html("");
    for (var i in data) {
      var rowString = "<tr>";
      rowString += "<td>" + data[i].aptNumber + "</td>";
      rowString += "<td>" + data[i].houseNumber + "</td>";
      rowString += "<td>" + data[i].street + "</td>";
      rowString += "<td>" + data[i].city + "</td>";
      rowString += "<td>" + data[i].age + "</td>";
      rowString += "<td>" + data[i].area + "</td>";
      rowString += "<td>" + data[i].isFurnished + "</td>";
      $("#results > tbody").append(rowString);
    }


  });
});

var commercial;
var for_rent;

$('#filter-commercial').click(function() {
  commercial = true;
  $('#filter-commercial').hide();
  $('#filter-residential').hide();
  $('#filter-sale').show();
  $('#filter-rent').show();
});

$('#filter-residential').click(function() {
  commercial = false;
  $('#filter-commercial').hide();
  $('#filter-residential').hide();
  $('#filter-sale').show();
  $('#filter-rent').show();
});

$('#filter-rent').click(function() {
  for_rent = true;
  $('#filter-sale').hide();
  $('#filter-rent').hide();
  if (commercial)
    $('#commercial-rent').show();
  else
    $('#residential-rent').show();
   
});

$('#filter-sale').click(function() {
  for_rent = false;
  $('#filter-sale').hide();
  $('#filter-rent').hide();
  if (commercial)
    $('#commercial-sale').show();
  else
    $('#residential-sale').show();
});


$('#cs-submit').click(function(ev) {
  ev.preventDefault();
  var parameters = {city:      $('#cs-city').val(),
                    province:  $('#cs-province').val(),
                    country:   $('#cs-country').val(),
                    min_price: $('#cs-min-price').val(),
                    max_price: $('#cs-max-price').val(),
                    min_age:   $('#cs-min-age').val(),
                    max_age:   $('#cs-max-age').val(),
                    min_space: $('#cs-min-space').val(),
                    max_space: $('#cs-max-space').val(),
                    min_office: $('#cs-min-office').val(),
                    max_office: $('#cs-max-office').val(),
                    min_storage: $('#cs-min-storage').val(),
                    max_storage: $('#cs-max-storage').val(),
                    furnishing:  $('#cs-furnishing').val() };
  $.get('/advanced_search_cs', parameters, function(data) {
    console.log(data);
    $('#commercial-sale').hide();
    $('#results-table-cs').show();
    $("#adv-results-cs > tbody").html("");
    for (var i in data) {
      var rowString = "<tr>";
      rowString += "<td>" + data[i].salePrice + "</td>";
      rowString += "<td>" + data[i].aptNumber + "</td>";
      rowString += "<td>" + data[i].houseNumber + "</td>";
      rowString += "<td>" + data[i].street + "</td>";
      rowString += "<td>" + data[i].city + "</td>";
      rowString += "<td>" + data[i].age + "</td>";
      rowString += "<td>" + data[i].area + "</td>";
      rowString += "<td>" + data[i].offices + "</td>";
      rowString += "<td>" + data[i].storage + "</td>";
      rowString += "<td>" + data[i].isFurnished + "</td>";
      $("#adv-results-cs > tbody").append(rowString);
    }
  });
});


$('#cr-submit').click(function(ev) {
  ev.preventDefault();
  var parameters = {city:      $('#cr-city').val(),
                    province:  $('#cr-province').val(),
                    country:   $('#cr-country').val(),
                    min_price: $('#cr-min-price').val(),
                    max_price: $('#cr-max-price').val(),
                    min_age:   $('#cr-min-age').val(),
                    max_age:   $('#cr-max-age').val(),
                    min_space: $('#cr-min-space').val(),
                    max_space: $('#cr-max-space').val(),
                    min_office: $('#cr-min-office').val(),
                    max_office: $('#cr-max-office').val(),
                    min_storage: $('#cr-min-storage').val(),
                    max_storage: $('#cr-max-storage').val(),
                    furnishing:  $('#cr-furnishing').val(), 
                    pets:        $('#cr-pets').val() };
  $.get('/advanced_search_cr', parameters, function(data) {
    console.log(data);
    $('#commercial-rent').hide();
    $('#results-table-cr').show();
    $("#adv-results-cr > tbody").html("");
    for (var i in data) {
      var rowString = "<tr>";
      rowString += "<td>" + data[i].rentPrice + "</td>";
      rowString += "<td>" + data[i].aptNumber + "</td>";
      rowString += "<td>" + data[i].houseNumber + "</td>";
      rowString += "<td>" + data[i].street + "</td>";
      rowString += "<td>" + data[i].city + "</td>";
      rowString += "<td>" + data[i].age + "</td>";
      rowString += "<td>" + data[i].area + "</td>";
      rowString += "<td>" + data[i].offices + "</td>";
      rowString += "<td>" + data[i].storage + "</td>";
      rowString += "<td>" + data[i].isFurnished + "</td>";
      rowString += "<td>" + data[i].petsAllowed + "</td>";
      $("#adv-results-cr > tbody").append(rowString);
    }
  });
});


$('#rs-submit').click(function(ev) {
  ev.preventDefault();
  var parameters = {city:      $('#rs-city').val(),
                    province:  $('#rs-province').val(),
                    country:   $('#rs-country').val(),
                    min_price: $('#rs-min-price').val(),
                    max_price: $('#rs-max-price').val(),
                    min_age:   $('#rs-min-age').val(),
                    max_age:   $('#rs-max-age').val(),
                    min_space: $('#rs-min-space').val(),
                    max_space: $('#rs-max-space').val(),
                    furnishing:  $('#rs-furnishing').val(),
                    garage:      $('#rs-garage').val(),
                    garden:      $('#rs-garden').val() };
  $.get('/advanced_search_rs', parameters, function(data) {
    console.log(data);
    $('#residential-sale').hide();
    $('#results-table-rs').show();
    $("#adv-results-rs > tbody").html("");
    for (var i in data) {
      var rowString = "<tr>";
      rowString += "<td>" + data[i].salePrice + "</td>";
      rowString += "<td>" + data[i].aptNumber + "</td>";
      rowString += "<td>" + data[i].houseNumber + "</td>";
      rowString += "<td>" + data[i].street + "</td>";
      rowString += "<td>" + data[i].city + "</td>";
      rowString += "<td>" + data[i].age + "</td>";
      rowString += "<td>" + data[i].area + "</td>";
      rowString += "<td>" + data[i].isFurnished + "</td>";
      rowString += "<td>" + data[i].hasGarage + "</td>";
      rowString += "<td>" + data[i].hasGarden + "</td>";
      $("#adv-results-rs > tbody").append(rowString);
    }
  });
});



$('#rr-submit').click(function(ev) {
  ev.preventDefault();
  var parameters = {city:      $('#rr-city').val(),
                    province:  $('#rr-province').val(),
                    country:   $('#rr-country').val(),
                    min_price: $('#rr-min-price').val(),
                    max_price: $('#rr-max-price').val(),
                    min_age:   $('#rr-min-age').val(),
                    max_age:   $('#rr-max-age').val(),
                    min_space: $('#rr-min-space').val(),
                    max_space: $('#rr-max-space').val(),
                    furnishing:  $('#rr-furnishing').val(), 
                    garage:      $('#rr-garage').val(),
                    garden:      $('#rr-garden').val(), 
                    pets:        $('#rr-pets').val() };
  $.get('/advanced_search_rr', parameters, function(data) {
    console.log(data);
    $('#residential-rent').hide();
    $('#results-table-rr').show();
    $("#adv-results-rr > tbody").html("");
    for (var i in data) {
      var rowString = "<tr>";
      rowString += "<td>" + data[i].rentPrice + "</td>";
      rowString += "<td>" + data[i].aptNumber + "</td>";
      rowString += "<td>" + data[i].houseNumber + "</td>";
      rowString += "<td>" + data[i].street + "</td>";
      rowString += "<td>" + data[i].city + "</td>";
      rowString += "<td>" + data[i].age + "</td>";
      rowString += "<td>" + data[i].area + "</td>";
      rowString += "<td>" + data[i].isFurnished + "</td>";
      rowString += "<td>" + data[i].hasGarage + "</td>";
      rowString += "<td>" + data[i].hasGarden + "</td>";
      rowString += "<td>" + data[i].petsAllowed + "</td>";
      $("#adv-results-rr > tbody").append(rowString);
    }
  });
});

$('#agent-button').click(function() {
  $('#agent-button').hide();
  $('#seller-button').hide();
  $('#buyer-button').hide();
  $('#agent-signup').show();
  $.get('/agency_list', {}, function(data) {
    for (var i in data) {
      var optionString = "<option value='" + data[i].agencyID +
                         "'>" + data[i].name + "</option>";
      $('#agency').append(optionString); 
    }
    $('#agency').material_select();
  });

});

$('agent-update').load(function() {
  $.get('/agency_list', {}, function(data) {
    for (var i in data) {
      var optionString = "<option value='" + data[i].agencyID +
                         "'>" + data[i].name + "</option>";
      $('#agency').append(optionString); 
    }
    $('#agency').material_select();
  });
});

var sellerPressed;

$('#seller-button').click(function() {
  sellerPressed = true;
  $('#agent-button').hide();
  $('#seller-button').hide();
  $('#buyer-button').hide();
  $('#default-signup').show();
});

$('#buyer-button').click(function() {
  sellerPressed = false;
  $('#agent-button').hide();
  $('#seller-button').hide();
  $('#buyer-button').hide();
  $('#default-signup').show();
});

$('#agent-signup-submit').click(function(ev) {
  ev.preventDefault();
  if ($('#agent-password').val() != $('#agent-confirm-password').val()) {
    Materialize.toast('Passwords must match', 4000);
  }
  else if ($('#agent-password').val().length < 6) {
    Materialize.toast('Password must be at least 6 characters', 4000);
  }
  else if ($('#name').val() == "") {
    Materialize.toast('Name field cannot be empty', 4000);
  }
  else if ($('#phone').val() == "") {
    Materialize.toast('Phone field cannot be empty', 4000);
  }
  else {
    var parameters = {uname: $('#agent-uname').val() };
    $.get('/check_uname_availability', parameters, function(data) {
      if (data.length != 0)
        Materialize.toast('Username is already in use', 4000);
      else {
        var agentID = Math.floor(Math.random() * 32767);
        $.get('/get_all_agentID', {}, function(data) {
          while (data.indexOf(agentID) > -1)
            agentID = Math.floor(Math.random() * 32767);

          parameters = {uname: $('#agent-uname').val(),
                        name:  $('#agent-name').val(),
                        agentID: agentID,
                        agency: $('#agency').val(),
                        email:  $('#agent-email').val(),
                        phone:  $('#agent-phone').val(),
                        password: $('#agent-password').val()};
          console.log(parameters);  
          $.get('/create_new_account', parameters, function(data) {
            $.get('/create_new_agent', parameters, function (data) {});
              location.href = "/login";
          });   
        });

      } 

    });
  }  
});

$('#agent-update-submit').click(function(ev) {
  ev.preventDefault();
  if ($('#agent-update-password').val() != $('#agent-update-confirm-password').val()) {
    Materialize.toast('Passwords must match', 4000);
  }
  else if ($('#agent-update-password').val().length < 6) {
    Materialize.toast('Password must be at least 6 characters', 4000);
  }
  else if ($('#agent-update-name').val() == "") {
    Materialize.toast('Name field cannot be empty', 4000);
  }
  else if ($('#agent-update-phone').val() == "") {
    Materialize.toast('Phone field cannot be empty', 4000);
  }
  else {
    var parameters = {uname: $('#agent-update-uname').val() };
    $.get('/check_uname_availability', parameters, function(data) {
      if (data.length != 0)
        Materialize.toast('Username is already in use', 4000);
      else {
        var agentID = Math.floor(Math.random() * 32767);
        $.get('/get_all_agentID', {}, function(data) {
          while (data.indexOf(agentID) > -1)
            agentID = Math.floor(Math.random() * 32767);

          parameters = {uname: $('#agent-update-uname').val(),
                        name:  $('#agent-update-name').val(),
                        agentID: agentID,
                        agency: $('#agency-update').val(),
                        email:  $('#agent-update-email').val(),
                        phone:  $('#agent-update-phone').val(),
                        password: $('#agent-update-password').val(),
                        login: login};
          console.log(parameters);  
          $.get('/update_account', parameters, function(data) {
            $.get('/update_agent', parameters, function (data) {});
              location.href = "/login";
          });
          Materialize.toast('Successfully updated account', 4000);
        });

      } 

    });
  }  
});

$('#signup-submit').click(function(ev) {
  ev.preventDefault();
  if ($('#password').val() != $('#confirm-password').val()) {
    Materialize.toast('Passwords must match', 4000);
  }
  else if ($('#password').val().length < 6) {
    Materialize.toast('Password must be at least 6 characters', 4000);
  }
  else if ($('#name').val() == "") {
    Materialize.toast('Name field cannot be empty', 4000);
  }
  else if ($('#phone').val() == "") {
    Materialize.toast('Phone field cannot be empty', 4000);
  }
  else {
    var parameters = {uname: $('#uname').val() };
    $.get('/check_uname_availability', parameters, function(data) {
      if (data.length != 0)
        Materialize.toast('Username is already in use', 4000);
      else {
        parameters = {uname: $('#uname').val(),
                      name:  $('#name').val(),
                      email:  $('#email').val(),
                      phone:  $('#phone').val(),
                      password: $('#password').val()};
        console.log(parameters);  
        $.get('/create_new_account', parameters, function(data) {
          if (sellerPressed) {
            $.get('/create_new_seller', parameters, function(data) {
              location.href = "/login";
            });
          } 
          else {
            $.get('/create_new_buyer', parameters, function(data) {
              location.href = "/login";
            });
          }   
        });  
      } 

    });
  }  
});

$('#update-submit').click(function(ev) {
  ev.preventDefault();
  if ($('#password-submit').val() != $('#confirm-password-submit').val()) {
    Materialize.toast('Passwords must match', 4000);
  }
  else if ($('#password-submit').val().length < 6) {
    Materialize.toast('Password must be at least 6 characters', 4000);
  }
  else if ($('#name-submit').val() == "") {
    Materialize.toast('Name field cannot be empty', 4000);
  }
  else if ($('#phone-submit').val() == "") {
    Materialize.toast('Phone field cannot be empty', 4000);
  }
  else {
    var parameters = {uname: $('#uname-submit').val() };
    $.get('/check_uname_availability', parameters, function(data) {
      if (data.length != 0)
        Materialize.toast('Username is already in use', 4000);
      else {
        parameters = {uname: $('#uname-submit').val(),
                      name:  $('#name-submit').val(),
                      email:  $('#email-submit').val(),
                      phone:  $('#phone-submit').val(),
                      password: $('#password-submit').val(),
                      login: login};
        console.log(parameters);  
        $.get('/update_account', parameters, function(data) {
          if (sellerPressed) {
            $.get('/update_seller', parameters, function(data) {
              location.href = "/login";
            });
          } 
          else {
            $.get('/update_buyer', parameters, function(data) {
              location.href = "/login";
            });
          }   
        });
        Materialize.toast('Successfully updated account', 4000);
      } 

    });
  }  
});

$('#delete-account').click(function(ev) {
  ev.preventDefault();
  parameters = {};
  accountParameters = {login: login};
  $.get('/delete_account', accountParameters, function(data) {});
  $.get('/logout', parameters, function(data) {});
  Materialize.toast('Successfully deleted account', 4000);
});

var logged_in = false;
// 0 for agent, 1 for seller, 2 for buyer
var logged_in_type;
var login;

$('#login-submit').click(function(ev) {
  ev.preventDefault();
  var parameters = {uname: $('#uname').val(),
                    password: $('#password').val()};
  $.get('/check_login', parameters, function(data) {
    if (data.length == 0) {
      Materialize.toast('Login info is invalid', 4000);
    }
    else {
      $.get('/login_buyer', parameters, function(data) {
        if (data.length != 0) {
          logged_in = true;
          logged_in_type = 2;
          login = data[0];
          $.get('login_user', {type: logged_in_type, data: data[0]}, function() {
            location.href = "/";
          });
        }
        else {
          $.get('/login_seller', parameters, function(data) {
            if (data.length != 0) {
              console.log(data);
              logged_in = true;
              logged_in_type = 1;
              login = data[0];
              $.get('login_user', {type: logged_in_type, data: data[0]}, function() {
                location.href = "/";
              });
            }
            else {          
              $.get('/login_agent', parameters, function(data) {
                if (data.length != 0) {
                  logged_in = true;
                  logged_in_type = 0;
                  login = data[0];
                  $.get('login_user', {type: logged_in_type, data: data[0]}, function() {
                    location.href = "/";
                  });
                }
                else {
                  Materialize.toast('Login error. Try signing up again', 4000);
                }
              });
            }
          });
        }
      });
    }    
  }); 

});


$('#cs-select').click(function(ev) {
  ev.preventDefault();
  $('#select-type').hide();
  $('#commercial-sale').show(); 
});


$('#cr-select').click(function(ev) {
  ev.preventDefault();
  $('#select-type').hide();
  $('#commercial-rent').show(); 
});

$('#rs-select').click(function(ev) {
  ev.preventDefault();
  $('#select-type').hide();
  $('#residential-sale').show(); 
});
$('#rr-select').click(function(ev) {
  ev.preventDefault();
  $('#select-type').hide();
  $('#residential-rent').show();
});

$('#cs-post').click(function (ev) {
  ev.preventDefault();
  $('#cs-post').hide();
  var parameters = {aptNum: $('#cs-aptNumber').val(),
                    houseNum: $('#cs-houseNumber').val(),
                    street: $('#cs-street').val(),
                    city: $('#cs-city').val(),
                    province: $('#cs-province').val(),
                    country: $('#cs-country').val(),
                    price: $('#cs-price').val(),
                    age: $('#cs-age').val(),
                    space: $('#cs-space').val(),
                    office: $('#cs-office').val(),
                    storage: $('#cs-storage').val(),
                    furnishing: $('#cs-furnishing').val(),
                    sellerName: login.sellerName,
                    sellerPhone: login.sellerPhone};
  $.get('/all_propertyID', {}, function(data) {
    parameters.propertyID = Math.floor(Math.random() * 32767); 
    while (data.indexOf(parameters.propertyID) > -1)
      parameters.propertyID = Math.floor(Math.random() * 32767);
      
    $.get('/get_all_agentID', {}, function(data) {
      parameters.agentID = data[Math.floor(Math.random() * data.length)].agentID;
      $.get('/post_property', parameters, function(data) {
        $.get('/post_fs', parameters, function(data) {
          $.get('/post_cs', parameters, function(data) {
            $.get('/post_sale', parameters, function(data) {
              Materialize.toast('now redirect to property page', 4000);
            });
          });
        });
      });
    });      
  });
});


$('#cr-post').click(function (ev) {
  ev.preventDefault();
  $('#cr-post').hide();
  var parameters = {aptNum: $('#cr-aptNumber').val(),
                    houseNum: $('#cr-houseNumber').val(),
                    street: $('#cr-street').val(),
                    city: $('#cr-city').val(),
                    province: $('#cr-province').val(),
                    country: $('#cr-country').val(),
                    price: $('#cr-price').val(),
                    age: $('#cr-age').val(),
                    space: $('#cr-space').val(),
                    office: $('#cr-office').val(),
                    storage: $('#cr-storage').val(),
                    furnishing: $('#cr-furnishing').val(),
                    sellerName: login.sellerName,
                    sellerPhone: login.sellerPhone};
  $.get('/all_propertyID', {}, function(data) {
    parameters.propertyID = Math.floor(Math.random() * 32767); 
    while (data.indexOf(parameters.propertyID) > -1)
      parameters.propertyID = Math.floor(Math.random() * 32767);
      
    $.get('/get_all_agentID', {}, function(data) {
      parameters.agentID = data[Math.floor(Math.random() * data.length)].agentID;
      $.get('/post_property', parameters, function(data) {
        $.get('/post_fr', parameters, function(data) {
          $.get('/post_cr', parameters, function(data) {
            $.get('/post_sale', parameters, function(data) {
              Materialize.toast('now redirect to property page', 4000);
            });
          });
        });
      });
    });      
  });
});

$('#rs-post').click(function (ev) {
  ev.preventDefault();
  $('#rs-post').hide();
  var parameters = {aptNum: $('#rs-aptNumber').val(),
                    houseNum: $('#rs-houseNumber').val(),
                    street: $('#rs-street').val(),
                    city: $('#rs-city').val(),
                    province: $('#rs-province').val(),
                    country: $('#rs-country').val(),
                    price: $('#rs-price').val(),
                    age: $('#rs-age').val(),
                    space: $('#rs-space').val(),
                    office: $('#rs-office').val(),
                    storage: $('#rs-storage').val(),
                    furnishing: $('#rs-furnishing').val(),
                    sellerName: login.sellerName,
                    sellerPhone: login.sellerPhone};
  $.get('/all_propertyID', {}, function(data) {
    parameters.propertyID = Math.floor(Math.random() * 32767); 
    while (data.indexOf(parameters.propertyID) > -1)
      parameters.propertyID = Math.floor(Math.random() * 32767);
      
    $.get('/get_all_agentID', {}, function(data) {
      parameters.agentID = data[Math.floor(Math.random() * data.length)].agentID;
      $.get('/post_property', parameters, function(data) {
        $.get('/post_fs', parameters, function(data) {
          $.get('/post_rs', parameters, function(data) {
            $.get('/post_sale', parameters, function(data) {
              Materialize.toast('now redirect to property page', 4000);
            });
          });
        });
      });
    });      
  });
});

$('#rr-post').click(function (ev) {
  ev.preventDefault();
  $('#rr-post').hide();
  var parameters = {aptNum: $('#rr-aptNumber').val(),
                    houseNum: $('#rr-houseNumber').val(),
                    street: $('#rr-street').val(),
                    city: $('#rr-city').val(),
                    province: $('#rr-province').val(),
                    country: $('#rr-country').val(),
                    price: $('#rr-price').val(),
                    age: $('#rr-age').val(),
                    space: $('#rr-space').val(),
                    office: $('#rr-office').val(),
                    storage: $('#rr-storage').val(),
                    furnishing: $('#rr-furnishing').val(),
                    sellerName: login.sellerName,
                    sellerPhone: login.sellerPhone};
  $.get('/all_propertyID', {}, function(data) {
    parameters.propertyID = Math.floor(Math.random() * 32767); 
    while (data.indexOf(parameters.propertyID) > -1)
      parameters.propertyID = Math.floor(Math.random() * 32767);
      
    $.get('/get_all_agentID', {}, function(data) {
      parameters.agentID = data[Math.floor(Math.random() * data.length)].agentID;
      $.get('/post_property', parameters, function(data) {
        $.get('/post_fr', parameters, function(data) {
          $.get('/post_rr', parameters, function(data) {
            $.get('/post_sale', parameters, function(data) {
              Materialize.toast('now redirect to property page', 4000);
            });
          });
        });
      });
    });      
  });
});
