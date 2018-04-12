$(document).ready(function () {
  $('.add').on('click', function(e){
    // let cartItem = $('.bookDetail');
    e.preventDefault();
    $('.cart').append($(this).clone());
  })
})
