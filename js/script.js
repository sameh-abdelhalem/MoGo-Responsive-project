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
