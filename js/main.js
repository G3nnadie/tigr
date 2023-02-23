$(document).ready(function () {

  // Activation button add class
  $('.activation__item button').on('click', function() {
    $('.activation__item').removeClass('activation__item--active');
    $(this).parents('.activation__item').addClass('activation__item--active');
  });

  // About body open
  $('.about__moreBtn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('about__moreBtn--active');
    $('.about__body').slideToggle();
  })

  // Scroll speed
  $('.anchor-link').on('click','a', function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 800);
  });

  // Modal open
  $('.open-modal-moreNum').on('click', function(e) {
    e.preventDefault();
    $('.modal--moreNum').fadeIn(200);
  })

  $('.open-modal-partner').on('click', function(e) {
    e.preventDefault();
    $('.modal--partner').fadeIn(200);
  })

  // Modal close
  $('.modal__close').on('click', function() {
    $('.modal').fadeOut(200);
  })

  $('.modal').mouseup(function (e) {
    let modalContent = $(".modal__box");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).fadeOut(200);
    }
  });

  // Filter
  $('.filter').on('click', function() {
    $(this).toggleClass('filter--active');
  });

  // Accardion
  var accordion = function() {
    var data = $('.accordion').attr('data-accordion')
    $('.accordion-header').on('click', function(){
      $(this).next('.accordion-body').not(':animated').slideToggle()
    })
    $('.accordion-header').click(function () {
      $(this).parent('.accordion li').toggleClass('active');
    });
  }
  accordion();

  // Intro sl
  var swiper = new Swiper(".intro__sl", {
    effect: 'fade',
    spaceBetween: 0,
    slidesPerView: 1,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination--intro",
      clickable: true,
    },
  });

  // Blog sl
  var swiper = new Swiper(".blog__sl", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
    breakpoints: {
      1200: {
        spaceBetween: 70,
        slidesPerView: 3,
      },
    },
  });

});