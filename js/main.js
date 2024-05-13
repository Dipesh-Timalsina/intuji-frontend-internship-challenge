$(document).ready(function () {
  $("#owl-carousel").owlCarousel({
    responsiveClass: true,
    autoHeight: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 500,
    loop: true,
    margin: 30,
    dots: true,
    nav: false,
    autoWidth: true,
    responsive: {
      768: {
        items: 1,
      },
      1024: {
        items: 2,
      },
    },
  });

  ScrollReveal().reveal(".reveal", {
    delay: 500,
    distance: "50%",
    origin: "bottom",
    duration: 1500,
    reset: false,
  });
});
