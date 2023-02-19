const darkSwitcher = document.querySelector("#dark-mode-switch");
const switcherIcon = document.querySelector(".dark-switcher-icon");
const body = document.querySelector("body");

function checkDarkMode() {
  if (this.checked) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
}
darkSwitcher.addEventListener("click", checkDarkMode);
