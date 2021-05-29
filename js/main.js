/*Slider Swiper */
const slider = new Swiper('.slider', {
    slidesPerView: 1,
    loop: false,
    navigation: {
        nextEl: '.slider-next',
        prevEl: '.slider-prev',
      },
});
slider.on('activeIndexChange', function () {
  const title = document.querySelectorAll(".obj1");
  const subTitle = document.querySelectorAll(".obj2");
  const botao = document.querySelectorAll(".obj3");

  TweenMax.from(title, 0.7, {
    y: -100,
    opacity: 0,
  });

  TweenMax.from(subTitle, 0.5, {
    delay:1,
    x: 50,
    opacity: 0,
  });

  TweenMax.from(botao, 0.1, {
    delay:1,
    y: 50,
    opacity: 0,
  });
});

const sliderGaleria = new Swiper('.galeria', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.prev',
        prevEl: '.next',
      },
});

const sliderCalendario = new Swiper('.calendario', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
      nextEl: '.prev-cal',
      prevEl: '.next-cal',
    },
    breakpoints: {
      320: {
       slidesPerView: 1,
      },

       640: {
       slidesPerView: 2,
     },

      800:{
        slidesPerView:3,
      }
  },
});
