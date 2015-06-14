$('#search-field').submit(function(ev) {
  ev.preventDefault();
  console.log("1");
  var parameters = {search: $('#search').val() };
  console.log(parameters);
  $.get('/searching', parameters, function(data) {
    console.log(data);
  });
});

