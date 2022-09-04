$(document).ready(function(){
  const flowerSwiper = new Swiper('.flowers-slider', {
  
    breakpoints: {
      320: {
        slidesPerView: 2
      },
      480: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 4
      },
      1000: {
        slidesPerView: 6
      }
    },
  
    loop: true,
    slidesPerView: 6,
  
    navigation: {
      nextEl: '.flow-next',
      prevEl: '.flow-prev',
    }
  });
  const swiper = new Swiper('.swiper-reviews', {
    loop: true,
    slidesPerView: 1,
  
    navigation: {
      nextEl: '.flow-next',
      prevEl: '.flow-prev',
    }
  });

  $("#review-1").on('click', function() {

    $.fancybox.open([
      {
        src  : 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
        opts : {
          caption : 'First caption',
          thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
        }
      },
      {
        src  : 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
        opts : {
          caption : 'Second caption',
          thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
        }
      },
      {
        src  : 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
        opts : {
          caption : 'Second caption',
          thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });
  
  });

});