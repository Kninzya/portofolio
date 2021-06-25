//ハンバーガーメニュー
$(function() {
  $(document).on("click", ".p-header__navToggle", function() {
    $(".p-header__navToggle").toggleClass("js-active");
    $(".p-header__menu_sp").toggleClass("js-active");
  });

  $(".p-header__menu_sp__link a").on("click", function() {
    if (window.innerWidth <= 1024) {
      $(".p-header__navToggle").click();
    }
  });
});

//FVスライダー
$('.p-fv__slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    fade: true,
});

//タイピングアニメーション
$(function() {
  $('.p-fv__text').typed({
    strings: ["WELCOME!", "I AM TOMOO OYOBE.","ENJOY FREEDOM LIFE!"],
    typeSpeed: 100,
    startDelay: 1000,
    backSpeed: 20,
    loop: true,
    loopCount: Infinity,
    showCursor: false,
    backDelay: 500
  });
});

//スムーススクロール
$(function(){
	$('a[href^="#"]').click(function() {
    var speed = 400; // ミリ秒で記述
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 80;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
  });
});

//スクロールトリガーアニメーション
$(document).on("load scroll",function() {
  $(".c-slideup").each(function() {
    const position = $(this).offset().top;
    const scroll = $(window).scrollTop() + 50;
    const windowHeight = $(window).height();
    if (scroll > position - windowHeight) {
      $(this).addClass("js-active");
    }

    if (scroll + 100 < position - windowHeight) {
      $(this).removeClass("js-active");
    }
  });
});

$(document).on("load scroll",function() {
  $(".c-slideleft").each(function() {
    const position = $(this).offset().top;
    const scroll = $(window).scrollTop() + 50;
    const windowHeight = $(window).height();
    if (scroll > position - windowHeight) {
      $(this).addClass("js-active");
    }

    if (scroll + 100 < position - windowHeight) {
      $(this).removeClass("js-active");
    }
  });
});

//アコーディオン
$(function() {
  $(".p-works__accordionbtn").on("click", function() {
    $(this).toggleClass("js-active");
    if ($(this).hasClass("js-active")) {
      $(this).text("閉じる");
    } else {
      $(this).text("もっと見る");
    }
    $(this)
      .prev(".js-togglecontent")
      .slideToggle();
  });
});