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

let b = baffle(".title", {
  characters: "█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░",
  speed: 100,
});
setInterval(() => {
  b.reveal(4000);
  b.stop();
}, 3000);

setInterval(() => {
  b.start();
}, 4000);
// window.onload = function () {
console.log("hi");
AOS.init({
  duration: 650,
  once: true,
});
// };
