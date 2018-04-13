$(document).ready(function () {
  $('.add').on('click', function(e){
    // let cartItem = $('.bookDetail');
    e.preventDefault();
    $('.cart').append($(this).clone());
  });
  $('.ch').on('click', function(e) {
    e.preventDefault();
    window.redirect('/profile')
  });
  $('#ch').on('click', function(e){
    $('.modalContainer').addClass('modalopen');
  });
  $('#xClose').on('click', function(e) {
      $('.modalContainer').removeClass('modalopen')
  })

})
