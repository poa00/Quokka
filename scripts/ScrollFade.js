$(document).ready(function () {
  viewPortHeight = window.innerHeight;
  $(window).scroll(function () {
    $(".hideme").each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var top_of_object = $(this).offset().top - viewPortHeight / 20;
      var top_of_window = document.documentElement.scrollTop;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > top_of_object) {
        $(this).addClass("showme");
      }
      if (bottom_of_window < bottom_of_object) {
        $(this).removeClass("showme");
      }
    });
  });
});

/* For scrolling generally with lenis (not got to do with fading elements) */

const lenis = new Lenis();

lenis.on("scroll", (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

/* Zoom for Documentation  */

const demoDiv = document.querySelector("#DocumentationCard");
window.addEventListener("scroll", function () {
  if (pageYOffset * 0.0001 > 1 || pageYOffset * 0.0001 < 0.2) {
    return;
  } else {
    DocumentationCard.setAttribute(
      "style",
      "transform: scale(" + pageYOffset * 0.00019 + ");"
    );
  }
});
