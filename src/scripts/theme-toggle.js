// theme-toggle.js
let mode = localStorage.getItem("themeMode") === "true";

function applyTheme() {
  document.documentElement.classList.toggle("light-mode", mode);
}

function toggleLightMode() {
  mode = !mode;
  localStorage.setItem("themeMode", mode);
  applyTheme();
}

applyTheme();
