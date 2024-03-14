// Dark mode switcher
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Check the system settings and set the initial mode accordingly
let isLight = !prefersDarkScheme.matches;

// Function to toggle the mode
function toggleMode() {
  isLight = !isLight;
  
  const toggleButton = document.getElementById("toggle");
  const svg = toggleButton.querySelector("svg");

  svg.innerHTML = isLight
    ? `<path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z" fill="#292e3e" />
       <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill="#292e3e" />`
    : `<path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z" fill="#fff" /> <!-- Change the fill color to white -->
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill="#fff" /> <!-- Change the fill color to white -->`;

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
  //let logoElement = document.querySelector(".logo-icon");
  //isLight
  //  ? (logoElement.src = "/assets/images/light_cap.png")
  //  : (logoElement.src = "/assets/images/dark_cap.png");
}

// Function to set the default mode
function setDefaultMode() {
  let rootElement = document.body;
  let mainElement = document.querySelector(".main");
  let boxElement = document.querySelectorAll(".box");
  let logoElement = document.querySelector(".logo-icon");
  //const toggleButton = document.getElementById("toggle");
  //const svg = toggleButton.querySelector("svg");

  //if (isLight) {
  if (false) { // I want to set dark mode as the only option (14. 3. 2024)
    rootElement.classList.remove("dark-mode");
    mainElement.classList.remove("dark-mode");
    boxElement.forEach((element) => {
      element.classList.remove("dark-mode");
    });
    //logoElement.src = "/assets/images/light_cap.png";
    //svg.innerHTML = `<path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z" fill="#292e3e" />
                     //<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill="#292e3e" />`;
  } else {
    rootElement.classList.add("dark-mode");
    mainElement.classList.add("dark-mode");
    boxElement.forEach((element) => {
      element.classList.add("dark-mode");
    });
    //logoElement.src = "/assets/images/dark_cap.png";
    svg.innerHTML = `<path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z" fill="#fff" /> <!-- Change the fill color to white -->
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill="#fff" /> <!-- Change the fill color to white -->`;
  }
}

// Call the setDefaultMode function to set the initial mode
setDefaultMode();

// Add event listener to the toggle button
toggle.addEventListener("click", toggleMode);
