//ハンバーガーメニュー
$(function() {
  $(document).on("click", ".navToggle", function() {
    $(".navToggle").toggleClass("active");
    $(".globalMenuSp").toggleClass("active");
  });

  $(".link a").on("click", function() {
    if (window.innerWidth <= 768) {
      $(".navToggle").click();
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
$(window).scroll(function() {
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

$(window).scroll(function() {
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
