// const wrapper = document.querySelector(".sponsorship-wrapper");
// const imageList = document.querySelector(".sponsorship");
// const imageWidth = imageList.offsetWidth;
// const wrapperWidth = wrapper.offsetWidth;

// const checkSponsorshipPosition = () => {
//   if (imageWidth + imageList.offsetLeft < 0) imageList.style.left = `${wrapperWidth} px`;

//   requestAnimationFrame(checkSponsorshipPosition);
// };

// checkSponsorshipPosition();
const addNavbarBg = () => {
  const navbar = document.querySelector("nav");
  const smallNavbar = document.querySelector(".small-nav");

  if (!smallNavbar.classList.contains("active")) {
    if (window.scrollY > 10) {
      navbar.classList.add("bg-white");
      navbar.classList.add("shadow");
    } else {
      navbar.style.backgroundColor = "transparent";
      navbar.classList.remove("shadow");
    }
  } else {
    navbar.classList.add("white");
  }
};

const handleClickNav = (nav) => {
  const navbar = document.querySelector("nav");
  const smallNavbar = document.querySelector(".small-nav");

  if (!smallNavbar.classList.contains("active")) {
    smallNavbar.style.top = navbar.clientHeight + "px";
    navbar.classList.remove("shadow");
  } else {
    smallNavbar.style.top = -100 + "vh";
    navbar.classList.add("shadow");
  }
  nav.classList.toggle("active");
  smallNavbar.classList.toggle("active");
};

window.addEventListener("scroll", addNavbarBg);
