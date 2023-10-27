document.addEventListener("DOMContentLoaded", function () {
  $(document).ready(function () {
    const slickCarousel = $(".video-carousel").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev">&#9655;</button>',
      nextArrow: '<button type="button" class="slick-next">&#9655;</button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    const players = [];

    $(".video-carousel iframe").each(function () {
      const iframeId = $(this).attr("id");
      const player = new YT.Player(iframeId, {
        events: {
          onStateChange: function (event) {
            if (event.data === YT.PlayerState.PLAYING) {
              pauseCarousel();
            } else if (
              event.data === YT.PlayerState.ENDED ||
              event.data === YT.PlayerState.PAUSED
            ) {
              resumeCarousel();
            }
          },
        },
      });
      players.push(player);
    });

    // Function to pause the carousel
    function pauseCarousel() {
      slickCarousel.slick("slickPause");
     
       
    }

    // Function to resume the carousel
    function resumeCarousel() {
      slickCarousel.slick("slickPlay");
      
    }
  });
});
