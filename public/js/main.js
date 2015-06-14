$(document).ready(function() {
    $('select').material_select();
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
  var parameters = {min-price: $('#cs-min-price').val(),
                    max-price: $('#cs-max-price').val(),
                    min-age:   $('#cs-min-age').val(),
                    max-age:   $('#cs-max-age').val(),
                    min-space: $('#cs-min-space').val(),
                    max-space: $('#cs-max-space').val(),
                    min-office: $('#cs-min-office').val(),
                    max-office: $('#cs-max-office').val(),
                    min-storage: $('#cs-min-storage').val(),
                    max-storage: $('#cs-max-storage').val(),
                    furnishing:  $('#cs-furnishing').val() };
  $.get('/advanced_search_cs', parameters, function(data) {
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
