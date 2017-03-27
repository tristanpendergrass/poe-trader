$(function() {
  $.get('/foo', function(res) {
    console.log('res is', res);
  });
});
