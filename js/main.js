(function ($) {
  "use strict";

  // $(document).ready(function () {
  //   $(window).bind("scroll", function () {
  //     var navHeight = $(window).height() - 630;
  //     if ($(window).scrollTop() > navHeight) {
  //       $("header").addClass("fixed");
  //     } else {
  //       $("header").removeClass("fixed");
  //     }
  //   });
  // });

  // Mobile Nav toggle
  $(".menu-toggle > a").on("click", function (e) {
    e.preventDefault();
    $("#responsive-nav").toggleClass("active");
  });

  /////////////////////////////////////////

  // Mobile Only Slider
  mobileOnlySlider(".products-slick");

  function mobileOnlySlider($slidername) {
    var slider = $($slidername);

    var settings = {
      mobileFirst: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: false,
      infinite: true,
      lazyLoad: "ondemand",
      centerMode: true,
      dots: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 767,
          settings: "unslick",
        },
      ],
    };

    slider.slick(settings);

    $(window).on("resize", function () {
      if ($(window).width() > 767) {
        return;
      }
      if (!slider.hasClass("slick-initialized")) {
        return slider.slick(settings);
      }
    });
  }

  // Products Widget Slick
  $(".products-widget-slick").each(function () {
    var $this = $(this),
      $nav = $this.attr("data-nav");

    $this.slick({
      infinite: true,
      autoplay: true,
      speed: 300,
      dots: false,
      arrows: true,
      appendArrows: $nav ? $nav : false,
    });
  });

  /////////////////////////////////////////

  // Product Main img Slick
  $("#product-main-img").slick({
    infinite: true,
    speed: 300,
    dots: false,
    arrows: true,
    fade: true,
    asNavFor: "#product-imgs",
  });

  // Product imgs Slick
  $("#product-imgs").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: 0,
    vertical: true,
    asNavFor: "#product-main-img",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          vertical: false,
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  // Product img zoom
  var zoomMainProduct = document.getElementById("product-main-img");
  if (zoomMainProduct) {
    $("#product-main-img .product-preview").zoom();
  }
})(jQuery);
