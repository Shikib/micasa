
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
});


$(document).ready(function() {
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
});

$(document).ready(function() {
  $.get('/diverse_agencies', {}, function(data) {
    console.log(data);
    $('#diverse-agency-list > tbody').html("");
    for (var i in data) {
      var rowString = "<tr>";
      rowString += "<td>" + data[i].name + "</td>";
      rowString += "<td>" + data[i].agencyRating + "</td>";
      rowString += "</tr>";
      $('#diverse-agency-list > tbody').append(rowString);
    }
 
  });
});

$(document).ready(function() {
  $.get('/popular_cities', {}, function(data) {
    console.log(data);
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
});

$(document).ready(function() {
  $.get('/bw_agencies', {best: true}, function(data) {
    console.log(data);
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
});


$(document).ready(function() {
  $.get('/bw_cities', {best: true}, function(data) {
    console.log("test");
    console.log(data);
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
