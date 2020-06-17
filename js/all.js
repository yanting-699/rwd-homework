$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      loop: true,
      speed: 3000,
      autoplay: {
          delay: 5000,

      },

      pagination: {
          el: '.swiper-pagination',
      },

    })

    lightbox.option({
        'resizeDuration': 1000,
        'wrapAround': true,
      })

    

});

  $(document).ready(function () {
    $('.top-up-button').click(function () { 
        event.preventDefault();
        $('html,css').animate({
            scrollTop:0
        },1000);
    });

    $('.dropdown').click(function (){
        event.preventDefault();
        $('.dropdown-open').slideToggle(500);
    });

  });

  