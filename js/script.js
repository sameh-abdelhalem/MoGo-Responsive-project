$(".carousel-indicators li").hover(
  function () {
    $(this).addClass("hover");
  },
  function () {
    $(this).removeClass("hover");
  }
);

$(".quote").slick({
  prevArrow: $(".arrow_prev"),
  nextArrow: $(".arrow_next"),
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});
$(".quote-2").slick({
  prevArrow: $(".arrow_prev2"),
  nextArrow: $(".arrow_next2"),
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});
$(".logos__slider").slick({
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});
