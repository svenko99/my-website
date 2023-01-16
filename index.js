// To-do: Add check to a timer if its 0, then don't show it (except for seconds)

var startDate = new Date("2021-06-12");
var currentTime = new Date();
var diff = currentTime - startDate;
var diffSeconds = diff / 1000;
var diffMinutes = diffSeconds / 60;
var diffHours = diffMinutes / 60;
var diffDays = diffHours / 24;

setInterval(updateTimer, 1000);

function updateTimer() {
  diffSeconds++;
  diffMinutes = diffSeconds / 60;
  diffHours = diffMinutes / 60;
  diffDays = diffHours / 24;
  var format = document.querySelector('input[name="format"]:checked').value;

  if (format === "days") {
    document.getElementById("p").textContent = Math.floor(diffDays) + " days";
  } else {
    var years = Math.floor(diffDays / 365);
    var months = Math.floor((diffDays % 365) / 30);
    var days = Math.floor((diffDays % 365) % 30);
    var hours = Math.floor(diffHours % 24);
    var minutes = Math.floor(diffMinutes % 60);
    var seconds = Math.floor(diffSeconds % 60);

    // this timer string checks for singular and plural
    var timerString =
      years +
      " year" +
      (years > 1 ? "s" : "") +
      ", " +
      months +
      " month" +
      (months > 1 ? "s" : "") +
      ", " +
      days +
      " day" +
      (days > 1 ? "s" : "") +
      ", " +
      hours +
      " hour" +
      (hours > 1 ? "s" : "") +
      ", " +
      minutes +
      " minute" +
      (minutes > 1 ? "s" : "") +
      ", " +
      seconds +
      " second" +
      (seconds > 1 ? "s" : "");
    document.getElementById("p").textContent = timerString;
  }
}

const button = document.getElementById("dark-mode-btn");

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  if (button.innerHTML === "Dark Mode") {
    button.innerHTML = "Light Mode";
  } else {
    button.innerHTML = "Dark Mode";
  }
}
