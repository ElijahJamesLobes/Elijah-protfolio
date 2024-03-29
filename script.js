/* Please ❤ this if you like it! */

(function ($) {
  "use strict";

  //Page cursors

  document
    .getElementsByTagName("body")[0]
    .addEventListener("mousemove", function (n) {
      (t.style.left = n.clientX + "px"),
        (t.style.top = n.clientY + "px"),
        (e.style.left = n.clientX + "px"),
        (e.style.top = n.clientY + "px"),
        (i.style.left = n.clientX + "px"),
        (i.style.top = n.clientY + "px");
    });
  var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");
  function n(t) {
    e.classList.add("hover"), i.classList.add("hover");
  }
  function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover");
  }
  s();
  for (
    var r = document.querySelectorAll(".hover-target"), a = r.length - 1;
    a >= 0;
    a--
  ) {
    o(r[a]);
  }
  function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
  }

  //This line is to hide the contact section in the beginning as it was causing issues with the responsiveness
  $(".contact-section").hide();

  //About page

  $(".about-text").on("click", function () {
    $("body").addClass("about-on");
  });
  $(".about-close").on("click", function () {
    $("body").removeClass("about-on");
  });

  //Contact page

  $(".contact-text").on("click", function () {
    $(".contact-section").show();
    $("body").addClass("contact-on");
    $(".travel-section").hide();
    $(".wildlife-section").hide();
    $(".nature-section").hide();
  });
  $(".contact-close").on("click", function () {
    $("body").removeClass("contact-on");
    $(".travel-section").show();
    $(".wildlife-section").show();
    $(".nature-section").show();
    $(".contact-section").delay(400).hide(0);
  });

  //Travel portfolio page

  $(".travel").on("click", function () {
    $("body").addClass("travel-on");
  });
  $(".travel-close").on("click", function () {
    $("body").removeClass("travel-on");
  });

  //Wildlife portfolio page

  $(".wildlife").on("click", function () {
    $("body").addClass("wildlife-on");
  });
  $(".wildlife-close").on("click", function () {
    $("body").removeClass("wildlife-on");
  });

  //Nature portfolio page

  $(".nature").on("click", function () {
    $("body").addClass("nature-on");
  });
  $(".nature-close").on("click", function () {
    $("body").removeClass("nature-on");
  });
})(jQuery);

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
