$(function(){
  /* подключаем slick слайдер, указываем настройки */
  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="arrow-left image">', 
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="arrow-right image">',
    asNavFor: '.slider-dotshead'
  });

  /* внизу хедера подключаем еще слайдер, кторый будет с основным */
  $('.slider-dotshead').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider'
  });

  $('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="arrow-left image">', 
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="arrow-right image">',
    asNavFor: '.slider-map'
  });

  $('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-slider',
    focusOnSelect: true
  });

  
});