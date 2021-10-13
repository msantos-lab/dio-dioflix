$('.carousel').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 10,
  slidesToScroll: 10,
  arrows: true,
  responsive: [
    {
      breakpoint: 1925,
      settings: {
        slidesToShow: 9,
        slidesToScroll: 9,

      }
    },
    {
      breakpoint: 1885,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,

      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,

      }
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,

      }
    },
    {
      breakpoint: 860,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 390,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
});

