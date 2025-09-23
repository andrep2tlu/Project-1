<<<<<<< HEAD
// Get mode from local storage
let mode = localStorage.getItem("themeMode") === "true"; // stored as string

function applyTheme() {
  if (mode) {
    document.body.classList.add("light-mode");
  } else {
    document.body.classList.remove("light-mode");
  }

  const btn = document.querySelector(".button1");
  btn.textContent = mode ? "Dark" : "Light";
}

function toggleLightMode() {
  mode = !mode;
  localStorage.setItem("themeMode", mode);
  applyTheme();
}

//load user previous theme
window.addEventListener('load', () => {
  applyTheme();
});
=======
// Get mode from local storage
let mode = localStorage.getItem("themeMode") === "true"; // stored as string

function applyTheme() {
  if (mode) {
    document.body.classList.add("light-mode");
  } else {
    document.body.classList.remove("light-mode");
  }

  const btn = document.querySelector(".button1");
  btn.textContent = mode ? "Dark" : "Light";
}

function toggleLightMode() {
  mode = !mode;
  localStorage.setItem("themeMode", mode);
  applyTheme();
}

//load user previous theme
window.addEventListener('load', () => {
  applyTheme();
});
>>>>>>> 2e244c5931fe061dc37a0490395c3c4ad58f1022
