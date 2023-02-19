const darkSwitcher = document.querySelector("#dark-mode-switch");
const switcherIcon = document.querySelector(".dark-switcher-icon");
const body = document.querySelector("body");

function checkDarkMode() {
  if (this.checked) {
    body.classList.add("dark");
    console.log(switcherIcon);
    switcherIcon.classList.add("fa-moon");
    switcherIcon.classList.remove("fa-sun");
  } else {
    body.classList.remove("dark");
  }
}
darkSwitcher.addEventListener("click", checkDarkMode);
