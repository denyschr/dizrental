const heroSwiper = require('../libs/swiper-bundle.js');
module.exports = new heroSwiper('.hero__slider', {
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 4000,
  },
});

const bonusSwiper = require('../libs/swiper-bundle.js');
module.exports = new bonusSwiper('.bonus__slider', {
  loop: true,
  speed: 800,
  spaceBetween: 25,
  pagination: {
    el: '.bottom-bonus__pagination',
    clickable: true,
    type: "fraction",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Navigation arrows
  /*    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }, */

  //   // Responsive breakpoints
  //   breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 3,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   },
  // }
});
