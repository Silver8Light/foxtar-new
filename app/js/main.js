$(function(){
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$",
    skin: "round"
  });

  $('input, select').styler();

  var mixer = mixitup('.lets__check__container');

  $('.slider__wrapper').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true
  });

});