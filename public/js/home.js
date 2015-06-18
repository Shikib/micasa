
$(document).ready(function() {
  $.get('/rs_ordered_price', {}, function(data) {
    $('#rs-ordered-price > tbody').html("");
    for (var i in data) {
      var rowString = "<tr>";
      rowString += "<td>" + data[i].city + "</td>";
      rowString += "<td>" + data[i].avgPrice + "</td>";
      rowString += "</tr>";
      $('#rs-ordered-price > tbody').append(rowString);
    }
  });
  $.get('/rs_mm_price', {}, function(data) {
    $('#rs-mm-price > tbody').html("");
    for (var i in data) {
      var rowString = "<tr>";
      rowString += "<td>" + data[i].city + "</td>";
      rowString += "<td>" + data[i].maxPrice + "</td>";
      rowString += "<td>" + data[i].minPrice + "</td>";
      rowString += "<td>" + data[i].count + "</td>";
      rowString += "</tr>";
      $('#rs-mm-price > tbody').append(rowString);
    }
  });
  $.get('/diverse_agencies', {}, function(data) {
    $('#diverse-agency-list > tbody').html("");
    for (var i in data) {
      var rowString = "<tr>";
      rowString += "<td>" + data[i].name + "</td>";
      rowString += "<td>" + data[i].agencyRating + "</td>";
      rowString += "</tr>";
      $('#diverse-agency-list > tbody').append(rowString);
    }
 
  });
  $.get('/popular_cities', {}, function(data) {
    $('#popular-city-list > tbody').html("");
    for (var i in data) {
      var rowString = "<tr>";
      rowString += "<td>" + data[i].city + "</td>";
      rowString += "<td>" + data[i].province + "</td>";
      rowString += "<td>" + data[i].country + "</td>";
      rowString += "</tr>";
      $('#popular-city-list > tbody').append(rowString);
    } 
  });
  $.get('/bw_agencies', {best: true}, function(data) {
    $('#bw-agency-list > tbody').html("");
    for (var i in data) {
      var rowString = "<tr>";
      rowString += "<td>" + data[i].city + "</td>";
      rowString += "<td>" + data[i].province + "</td>";
      rowString += "<td>" + data[i].country + "</td>";
      rowString += "<td>" + data[i].name + "</td>";
      rowString += "<td>" + data[i].count + "</td>";	
      rowString += "</tr>";
      $('#bw-agency-list > tbody').append(rowString);
    }
 
  });
  $.get('/bw_cities', {best: true}, function(data) {
    $('#bw-city-list > tbody').html("");
    for (var i in data) {
      var rowString = "<tr>";
      rowString += "<td>" + data[i].name + "</td>";
      rowString += "<td>" + data[i].city + "</td>";
      rowString += "<td>" + data[i].province + "</td>";
      rowString += "<td>" + data[i].country + "</td>";
      rowString += "<td>" + data[i].count + "</td>";	
      rowString += "</tr>";
      $('#bw-city-list > tbody').append(rowString);
    }
 
  });
});

var cities_best = true;
var agencies_best = true;

$('#switch-city-list').click(function (ev) {
  ev.preventDefault();
  cities_best = !cities_best;
  if (cities_best)
    $('#switch-city-list').text("Best");
  else
    $('#switch-city-list').text("Worst");
  
  $.get('/bw_cities', {best: cities_best}, function(data) {
    $('#bw-city-list > tbody').html("");
    for (var i in data) {
      var rowString = "<tr>";
      rowString += "<td>" + data[i].name + "</td>";
      rowString += "<td>" + data[i].city + "</td>";
      rowString += "<td>" + data[i].province + "</td>";
      rowString += "<td>" + data[i].country + "</td>";
      rowString += "<td>" + data[i].count + "</td>";	
      rowString += "</tr>";
      $('#bw-city-list > tbody').append(rowString);
    }
 
  });
});


$('#switch-agency-list').click(function (ev) {
  ev.preventDefault();
  agencies_best = !agencies_best;
  if (agencies_best)
    $('#switch-agency-list').text("Best");
  else
    $('#switch-agency-list').text("Worst");
  
  $.get('/bw_cities', {best: agencies_best}, function(data) {
    $('#bw-city-list > tbody').html("");
    for (var i in data) {
      var rowString = "<tr>";
      rowString += "<td>" + data[i].name + "</td>";
      rowString += "<td>" + data[i].city + "</td>";
      rowString += "<td>" + data[i].province + "</td>";
      rowString += "<td>" + data[i].country + "</td>";
      rowString += "<td>" + data[i].count + "</td>";	
      rowString += "</tr>";
      $('#bw-city-list > tbody').append(rowString);
    }
 
  });
});
