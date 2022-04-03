jQuery(function ($) {
  /* =========================================
   *  Scroll Anchor
   * ========================================= */
  $(function () {
    var scroll_func = function () {
      $("html,body").animate(
        { scrollTop: $($(this).attr("href")).offset().top },
        "slow",
        "swing"
      );
      return false;
    };
    $(function () {
      $(".anchor").click(scroll_func);
    });
  });
  /* ========================================= */

  /* =========================================
   *  Top Button
   * ========================================= */
  $(function () {
    $(window).scroll(function () {
      var winTop = $(this).scrollTop();
      //footer
      if (winTop > 200) {
        $(".pagetop").fadeIn(1000);
      } else {
        $(".pagetop").fadeOut(1000);
      }
      if (winTop + $(window).height() < $("#footer").offset().top) {
        $(".pagetop").addClass("fixed");
      } else {
        $(".pagetop").removeClass("fixed");
      }
    });
    $(document).on("click", ".pagetop", function () {
      $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
    });
  });
  /* ========================================= */

  /* =========================================
   *  Header Navi
   * ========================================= */
  $(document).ready(function () {
    var startPos = 0,
      winScrollTop = 0;
    $(window).on("scroll", function () {
      winScrollTop = $(this).scrollTop();
      if (winScrollTop >= startPos && winScrollTop > 100) {
        $(".header-m").addClass("hide");
        if ($("#gnav").hasClass("open")) {
          $("#gnav").hide();
        }
        $(".header-m").removeClass("inView");
      } else {
        $(".header-m").removeClass("hide");
        $(".header-m").addClass("inView");
        if ($("#gnav").hasClass("open")) {
          $("#gnav").show();
        }
      }
      startPos = winScrollTop;
    });
  });

  $(document).on("click", ".navisp-list", function () {
    $("#gnav").fadeToggle();
  });
  $(document).on("click", ".close-img", function () {
    $("#gnav").fadeToggle();
  });
  $(document).on("click", ".close-txtgp", ".ffe", function () {
    $("#gnav").fadeToggle();
  });
  $(document).on("click", ".pri-anchor", function () {
    $("#gnav").hide();
  });
  /* ========================================= */

  /* =========================================
   *  window scroll fade in element
   * ========================================= */
  function fadeAnime() {
    //ふわっ
    $(".fadeInTrigger").each(function () {
      //fadeInTriggerというクラス名が
      var elemPos = $(this).offset().top - 50; //要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("fadeIn"); // 画面内に入ったらfadeInというクラス名を追記
      } else {
        $(this).removeClass("fadeIn"); // 画面外に出たらfadeInというクラス名を外す
      }
    });

    $(".fadeUpTrigger").each(function () {
      //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top - 50; //要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("fadeUp"); // 画面内に入ったらfadeUpというクラス名を追記
      } else {
        $(this).removeClass("fadeUp"); // 画面外に出たらfadeUpというクラス名を外す
      }
    });

    $(".fadeDownTrigger").each(function () {
      //fadeDownTriggerというクラス名が
      var elemPos = $(this).offset().top - 50; //要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("fadeDown"); // 画面内に入ったらfadeDownというクラス名を追記
      } else {
        $(this).removeClass("fadeDown"); // 画面外に出たらfadeDownというクラス名を外す
      }
    });

    // ぱたっ
    $(".flipLeftTopTrigger").each(function () {
      //flipLeftTopTriggerというクラス名が
      var elemPos = $(this).offset().top - 50; //要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("flipLeftTop"); // 画面内に入ったらflipLeftTopというクラス名を追記
      } else {
        $(this).removeClass("flipLeftTop"); // 画面外に出たらflipLeftTopというクラス名を外す
      }
    });

    // ぶわっ、ぽんっ
    $(".zoomInTrigger").each(function () {
      //zoomInTriggerというクラス名が
      var elemPos = $(this).offset().top - 50; //要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("zoomIn"); // 画面内に入ったらzoomInというクラス名を追記
      } else {
        $(this).removeClass("zoomIn"); // 画面外に出たらzoomInというクラス名を外す
      }
    });
    //txt-leftanime
    $(".leftAnime").each(function () {
      var elemPos = $(this).offset().top - 50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("slideAnimeLeftRight");
        $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");
      } else {
        $(this).removeClass("slideAnimeLeftRight");
        $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
      }
    });

    //topself
    $(".selfTrigger").each(function () {
      var elemPos = $(this).offset().top - 50; //要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("self");
      } else {
        $(this).removeClass("self");
      }
    });
  }
  // ページがスクロールされたら動かしたい場合の記述
  $(window).scroll(function () {
    fadeAnime(); //スクロールに連動した動きの関数を呼ぶ
  });

  $(document).ready(function () {
    var winWidth = $(window).width();
    if (winWidth > 768) {
      $(".slider .col3").addClass("flipLeftTopTrigger");
      $(".slider .flipLeftTopTrigger").addClass("flipLeftTop");
    } else {
      $(".slider .col3").removeClass("flipLeftTopTrigger");
      $(".slider .flipLeftTopTrigger").removeClass("flipLeftTop");
      $(".slider .flipLeftTopTrigger").css({ opacity: "1" });
    }
  });
  /* ========================================= */

  $(document).ready(function () {
    var backdata = localStorage.getItem("achor");
    if (backdata == "1") {
      $("html,body").animate(
        { scrollTop: $("#contactanchor").offset().top },
        "slow",
        "swing"
      );
    }
    localStorage.setItem("achor", "");
  });

/* =========================================
 *  Slick Slider
 * ========================================= */
  $(function() {
    $(".pickup-ls").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        centerMode: false,
        variableWidth: true,
        speed:1000,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 1000,
        swipeToSlide: true,
        arrows: false,
        responsive: [{
            breakpoint: 769,
            settings: {
                variableWidth: true,
                mobileFirst: true,
            }
        }]
    });
    $("#testimonials").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        speed:1000,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 5000,
        swipeToSlide: false,
        arrows: true,
        centerPadding: '25%',
        responsive: [{
            breakpoint: 769,
            settings: {
                mobileFirst: true,
            }
        }]
    });
    $("#single-course").slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      centerMode: true,
      variableWidth: true,
      speed:1000,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 5000,
      swipeToSlide: false,
      arrows: true,
      centerPadding: '25%',
      responsive: [{
          breakpoint: 769,
          settings: {
              mobileFirst: true,
          }
      }]
  });
  });
// 
  $(window).scroll(function () {
    var $nav = $(".main-header");
    if ($(window).scrollTop() > $nav.height()) {
      $(".main-header").addClass("main-header-fixed");
    } else {
      $(".main-header").removeClass("main-header-fixed");
    }
  });

  
  $(function() {
    $('.test-txt').matchHeight();
    $('.obj-box').matchHeight();
    $('.school-box-img').matchHeight();
    $('.offer-box').matchHeight();
    $('.offer-head').matchHeight();
    
  });
  // 
  $(function(){
    $(document).on('click', '.gmenu', function(){
      $('.gmenu').addClass('is-active');
      $('.wrapper').addClass('nav-open');
      $('.nav').addClass('open');
      if($('.nav').addClass('open')){
        document.getElementById("mySidenav").style.width = "100%";
      } else {
        document.getElementById("mySidenav").style.width = "0";
      }
    });
    $(document).on('click', '.is-active', function(){
      $('.gmenu').removeClass('is-active');
      $('.wrapper').removeClass('nav-open');
      $('.nav').removeClass('open');
      if($('.nav').removeClass('open')){
        document.getElementById("mySidenav").style.width = "0";
      } else {
        document.getElementById("mySidenav").style.width = "100%";
      }
    });
  });
});