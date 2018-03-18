$(document).ready(function(){

  // Mobile Nav
  $('#toggleMenu').click(function(){
    if ($(this).html() == 'Menu') {
      $(this).html('&#10005');
    } else {
      $(this).html('Menu');
    }
    $('.nav-right').slideToggle();
  });

  // Sidenav dots

  $('.sidenav').click(function(){
    $('.sidenav > div').removeClass('selected');
    $('div', this).addClass('selected');
  });

  // Banner manual-cycle

  $(".carousel > .cta:gt(0)").hide();

  $('.cta-arrow').click(function(){
    $('.cta:first')
      .hide()
      .next()
      .fadeIn(500)
      .end()
      .appendTo('.carousel');
  });

  // Testimonial auto-cycle

  $(".testimonials > .container-section > div:gt(0)").hide();

  setInterval(function() {
    $('.testimonials > .container-section > div:first')
      .fadeOut(1)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('.testimonials > .container-section');
  }, 3000);

});
