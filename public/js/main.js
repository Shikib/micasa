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
  var parameters = {min_price: $('#cs-min-price').val(),
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
