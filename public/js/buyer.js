$(window).load(function()) {
  console.log("1");
  var parameters = {};
  console.log(parameters);
  $.get('/buyerload', parameters, function(data) {
    console.log(data);
  });
});

