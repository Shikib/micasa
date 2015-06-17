
$(document).ready(function() {
  $.get('/rs_ordered_price', {}, function(data) {
    $('#rs-ordered-price > tbody').html("");
    for (var i in data) {
      var rowString = "<tr>";
      rowString += "<td>" + data[i].City + "</td>";
      rowString += "<td>" + data[i].avgPrice + "</td>";
      rowString += "</tr>";
      $('#rs-ordered-price > tbody').append(rowString);
    }
  });
});

$(document).ready(function() {
  $.get('/rs_min_price', {}, function(data) {
    $.get('/rs_max_price', {}, function(data2) {
       console.log(data);
       console.log(data2);
       $('#rs-mm-price > tbody').html("");
       for (var i in data) {
         var rowString = "<tr>";
         rowString += "<td>" + data[i].City + "</td>";
         rowString += "<td>" + data2[i].maxPrice + "</td>";
         rowString += "<td>" + data[i].minPrice + "</td>";
         rowString += "<td>" + data[i].count + "</td>";
         rowString += "</tr>";
         $('#rs-mm-price > tbody').append(rowString);
       }
    });
  });
});

