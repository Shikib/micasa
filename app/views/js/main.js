$('#basic-search').submit(function() {
  var parameters = {search: $(this).val() };
  $.get('/searching', parameters, function(data) {
    console.log(data);
  });
});

