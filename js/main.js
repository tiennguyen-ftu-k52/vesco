/*  ===========================
          SERVICES
=========================== */
$(function() {
  new WOW().init();
});

/*  ===========================
          WORK
=========================== */
$(function() {
  $('#work').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true,
    },
  });
});

/*  ===========================
          TEAM
=========================== */
$(function() {
  $('.team__members').owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 500,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
});

/*  ===========================
          TESTIMONIALS
=========================== */
$(function() {
  $('.testimonials__customers').owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
  });
});

/*  ===========================
          STATS
=========================== */
$(function() {
  $('.counter').counterUp({
    delay: 10,
    time: 2000,
    beginAt: 300,
  });
});

/*  ===========================
          CLIENTS
=========================== */
$(function() {
  $('.clients__list').owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2
      },
      576: {
        items: 3
      },
      768: {
        items: 5
      }
    }
  });
});

/*  ===========================
          NAVIGATION
=========================== */
// Show/hide nav bar
$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() < 50) {
      // hide nav
      $('.vesco-navbar.navbar').removeClass('scrollable');
      $('.btn--back-to-top').fadeOut();
    } else {
      // show nav
      $('.vesco-navbar.navbar').addClass('scrollable');
      $('.btn--back-to-top').fadeIn();
    }
  });
});

// Smooth scrolling
$(function() {
  $('a.smooth-scrolling').click(function(event) {
    event.preventDefault();

    // get section id
    var section = $(this).attr('href');

    $('html, body').animate(
      {
        scrollTop: $(section).offset().top - 64,
      },
      750,
      'easeInOutExpo',
      function () {
        window.location.hash = section;
      }
    );
  });
});

// Close mobile menu on click
$(function() {
  $('.navbar-collapse .nav-item .nav-link').on('click touch', function () {
    $('button.navbar-toggler').click();
  });
});