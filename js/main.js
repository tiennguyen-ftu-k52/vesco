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
  $('.owl-carousel').owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 500,
    loop: true,
    autoplayHoverPause: true
  });
});