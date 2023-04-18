var startDate = new Date("2021-06-12");
var currentTime = new Date();
var diffTime = currentTime - startDate;
var diffSeconds = diffTime / 1000;
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
    document.getElementById("count").textContent =
      Math.floor(diffDays) + " days";
  } else {
    var years = currentTime.getFullYear() - startDate.getFullYear();
    var months = currentTime.getMonth() - startDate.getMonth();
    var days = currentTime.getDate() - startDate.getDate();
    if (days < 0) {
      months--;
      var daysInPrevMonth = new Date(
        currentTime.getFullYear(),
        currentTime.getMonth(),
        0
      ).getDate();
      days = daysInPrevMonth + days;
    }
    if (months < 0) {
      years--;
      months = 12 + months;
    }
    var hours = Math.floor(diffHours % 24) + 2;
    var minutes = Math.floor(diffMinutes % 60);
    var seconds = Math.floor(diffSeconds % 60);

    // this timer string checks for singular and plural
    var timerString =
      years +
      " year" +
      (years > 1 || years == 0 ? "s" : "") +
      ", " +
      months +
      " month" +
      (months > 1 || months == 0 ? "s" : "") +
      ", " +
      days +
      " day" +
      (days > 1 || days == 0 ? "s" : "") +
      ", " +
      hours +
      " hour" +
      (hours > 1 || hours == 0 ? "s" : "") +
      ", " +
      minutes +
      " minute" +
      (minutes > 1 || minutes == 0 ? "s" : "") +
      ", " +
      seconds +
      " second" +
      (seconds > 1 || seconds == 0 ? "s" : "");
    document.getElementById("count").textContent = timerString;
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
