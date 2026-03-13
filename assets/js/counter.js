const startDate = new Date("2021-06-12");

function updateTimer() {
  const countElement = document.getElementById("count");
  if (!countElement) {
    return;
  }

  const currentTime = new Date();
  const diffTime = currentTime - startDate;
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);

  let years = currentTime.getFullYear() - startDate.getFullYear();
  let months = currentTime.getMonth() - startDate.getMonth();
  let days = currentTime.getDate() - startDate.getDate();

  if (days < 0) {
    months--;
    const daysInPrevMonth = new Date(
      currentTime.getFullYear(),
      currentTime.getMonth(),
      0,
    ).getDate();
    days = daysInPrevMonth + days;
  }

  if (months < 0) {
    years--;
    months = 12 + months;
  }

  const timerParts = [
    { value: years, unit: "year" },
    { value: months, unit: "month" },
    { value: days, unit: "day" },
    { value: diffHours % 24, unit: "hour" },
  ]
    .filter((part) => part.value !== 0)
    .map((part) => `${part.value} ${part.unit}${part.value !== 1 ? "s" : ""}`);

  let timerString = timerParts.join(", ");

  if (timerParts.length === 0) {
    timerString = `${diffDays} day${diffDays !== 1 ? "s" : ""}`;
  } else {
    //timerString += ` and ${diffMinutes % 60} minute${diffMinutes % 60 !== 1 ? "s" : ""} or ${diffDays} days.`;
    timerString += ` or ${diffDays} days.`;
  }

  countElement.textContent = timerString;
}

updateTimer();
