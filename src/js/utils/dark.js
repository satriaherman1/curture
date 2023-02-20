const darkSwitcher = document.querySelector("#dark-mode-switch");
const switcherIcon = document.querySelector(".dark-switcher-icon");
const body = document.querySelector("body");

function checkDarkMode() {
  if (this.checked) {
    body.classList.add("dark");
    localStorage.setItem("colorMode", "dark");
  } else {
    body.classList.remove("dark");
    localStorage.setItem("colorMode", "light");
  }
}
darkSwitcher.addEventListener("click", checkDarkMode);

window.onload = function () {
  const colorMode = localStorage.getItem("colorMode");
  if (colorMode === "dark") {
    body.classList.add("dark");
  }
};
