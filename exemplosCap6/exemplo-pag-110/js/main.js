$('#show-modal').on('click', function() {
      $('.overlay, .notice').show();
});

$('.overlay, .close').on('click', function() {
  $('.overlay, .notice').hide();
});

//para fechar com ESC também :D
$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    $('.overlay, .notice').hide();
  }
});