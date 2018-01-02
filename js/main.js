/*  ===========================
          SERVICES
=========================== */
$(function () {
  new WOW().init();
});

/*  ===========================
          WORK
=========================== */
$(function () {
  $('#work').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  });
});

/*  ===========================
          TEAM
=========================== */
$(function () {
  $('.team__members').owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 500,
    loop: true,
    autoplayHoverPause: true
  });
});

/*  ===========================
          TESTIMONIALS
=========================== */
$(function () {
  $('.testimonials__customers').owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 500,
    loop: true,
    autoplayHoverPause: true
  });
});

/*  ===========================
          STATS
=========================== */
$(function () {
  $('.counter').counterUp({
    delay: 10,
    time: 2000,
    beginAt: 300
  });
});