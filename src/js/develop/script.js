$(document).ready(function(){

//Login Popup
  $('.login-link').fancybox({
    openEffect  : 'fade',
    closeEffect : 'fade',
    autoSize:true,
    width : 640,
    height : 250,
    maxWidth : '100%',
    wrapCSS:'login-form',
    'closeBtn' : true,
    fitToView:true,
    padding:'0'
  });
//Login Popup

//Registration Popup  
  $('.reg-link').fancybox({
    openEffect  : 'fade',
    closeEffect : 'fade',
    autoSize:true,
    width : 843,
    height : 286,
    maxWidth : '100%',
    wrapCSS:'reg-form',
    'closeBtn' : true,
    fitToView:true,
    padding:'0'
  });
//Registration Popup 


//Main Slider
  $('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,

    responsive: [{
      breakpoint: 951,
      settings: {
        arrows:false
      }
    }]
  });
//Main Slider


//Commission Slider
  $('.commission-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.commission-info',
    dots: false,
    centerMode: true,
    focusOnSelect: true,

    responsive: [{
      breakpoint: 925,
      settings: {
        arrows:true,
        slidesToShow: 1
      }
    }]
  });

  $('.commission-info').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.commission-slider'
  });
//Commission Slider


//FAQ Slider
  $('.faq-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.faq-tabs',
    dots: false,
    centerMode: true,
    focusOnSelect: true,

    responsive: [{
      breakpoint: 956,
      settings: {
        arrows:true,
        slidesToShow: 1
      }
    }]
  });

  $('.faq-tabs').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.faq-slider'
  });
//FAQ Slider


//FAQ Tabs/Slider
  $('.faq-tabs-slider').slick({
    slidesToShow: 10,
    slidesToScroll: 1,
    vertical: true,
    asNavFor: '.tabs-content',
    dots: false,
    focusOnSelect: true
  });

  $('.tabs-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: true,
    arrows: false,
    fade: true,
    asNavFor: '.faq-tabs-slider'
  });
//FAQ Tabs/Slider

//Burger Menu
  $('.burger').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('open');
    var menu = $('.main-menu');

    if ($('.burger').hasClass('active')) {
      menu.slideUp('fast');
      $(this).removeClass('active');
    } else {
      menu.slideDown('fast');
      $(this).addClass('active');
    }
  });

  $(window).resize(function() {
    var menu = $('.main-menu');
    var w = $(window).width();
    if(w > 827) {
      menu.removeAttr('style');
      $('.burger').removeClass('open');
      $('.burger').removeClass('active');
    }
  });
//Burger Menu

//Button Scroll
  $('.reg').click(function(){
    var el = $(this).attr('href');
    $('body').animate({
      scrollTop: $(el).offset().top}, 2000);
      return false;
  });
//Button Scroll
});

$(window).load(function(){

});

$(window).resize(function(){

});