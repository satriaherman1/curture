const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // breakpoints

  breakpoints: {
    767: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const str1 = "Kenalkan Kepada Dunia";
const str2 = "Tunjukkan Kepada Mereka";

var options = {
  strings: [str1, str2],
  typeSpeed: 100,
  backSpeed: 80,
  loop: true,
};

console.log("test");

var typed = new Typed(".title", options);
