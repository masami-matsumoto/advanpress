$(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $(".gnav").toggleClass("active");
  });

  $(".gnav a").click(function () {
    $(".hamburger").removeClass("active");
    $(".gnav").removeClass("active");
  });
});

$(function() {
  $(".dropdown span").click(function() {
    $(this).next().slideToggle();
  });

  $(".dropdown__item").click(function() {
    $(this).slideToggle();
  });
});





$(function () {
  $(".category__list .category1").addClass("active");
  $(".category1__content").addClass("active");

  $(".category1, .btn1").click(function () {
    $(".category__list li").removeClass("active");
    $(".category__content").removeClass("active");
    $(".category1").addClass("active");
    $(".category1__content").addClass("active");
  });

  $(".category2, .btn2").click(function () {
    $(".category__list li").removeClass("active");
    $(".category__content").removeClass("active");
    $(".category2").addClass("active");
    $(".category2__content").addClass("active");
  });
  $(".category3, .btn3").click(function () {
    $(".category__list li").removeClass("active");
    $(".category__content").removeClass("active");
    $(".category3").addClass("active");
    $(".category3__content").addClass("active");
  });

  $(".category4, .btn4").click(function () {
    $(".category__list li").removeClass("active");
    $(".category__content").removeClass("active");
    $(".category4").addClass("active");
    $(".category4__content").addClass("active");
  });
  $(".category5, .btn5").click(function () {
    $(".category__list li").removeClass("active");
    $(".category__content").removeClass("active");
    $(".category5").addClass("active");
    $(".category5__content").addClass("active");
  });

  $(".category6, .btn6").click(function () {
    $(".category__list li").removeClass("active");
    $(".category__content").removeClass("active");
    $(".category6").addClass("active");
    $(".category6__content").addClass("active");
  });
});

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("#fixed-btn").fadeIn();
    } else {
      $("#fixed-btn").fadeOut();
    }
  });
});
