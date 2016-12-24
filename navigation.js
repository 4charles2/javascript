$(document).ready(function() {
  $('#up').on('click', function() {
    var page = $(this).attr('href');
    var speed = 5;
    $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
      return false;
  })
})