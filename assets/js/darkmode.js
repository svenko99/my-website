// Dark mode switcher
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Check the system settings and set the initial mode accordingly
let isLight = !prefersDarkScheme.matches;

// Function to toggle the mode
function toggleMode() {
  isLight = !isLight;
  isLight ? (toggle.innerText = "🌞") : (toggle.innerText = "🌚");
  let rootElement = document.body;
  rootElement.classList.toggle("dark-mode");
  // also add dark-mode class to the class main
  let mainElement = document.querySelector(".main");
  mainElement.classList.toggle("dark-mode");
  // also add dark-mode class to all classes box
  let boxElement = document.querySelectorAll(".box");
  boxElement.forEach((element) => {
    element.classList.toggle("dark-mode");
  });
  // also change src of the image with class logo-icon
  let logoElement = document.querySelector(".logo-icon");
  isLight
    ? (logoElement.src = "/assets/images/light_cap.png")
    : (logoElement.src = "/assets/images/dark_cap.png");
}

// Function to set the default mode
function setDefaultMode() {
  let rootElement = document.body;
  let mainElement = document.querySelector(".main");
  let boxElement = document.querySelectorAll(".box");
  let logoElement = document.querySelector(".logo-icon");

  if (isLight) {
    rootElement.classList.remove("dark-mode");
    mainElement.classList.remove("dark-mode");
    boxElement.forEach((element) => {
      element.classList.remove("dark-mode");
    });
    logoElement.src = "/assets/images/light_cap.png";
    toggle.innerText = "🌞";
  } else {
    rootElement.classList.add("dark-mode");
    mainElement.classList.add("dark-mode");
    boxElement.forEach((element) => {
      element.classList.add("dark-mode");
    });
    logoElement.src = "/assets/images/dark_cap.png";
    toggle.innerText = "🌚";
  }
}

// Call the setDefaultMode function to set the initial mode
setDefaultMode();

// Add event listener to the toggle button
toggle.addEventListener("click", toggleMode);
