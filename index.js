function DaysBetweenTwoDates(date) {
  var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  var firstDate = new Date(date);
  var secondDate = new Date();

  var diffDays = Math.round(
    Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay)
  );
  return diffDays;
}

document.getElementById("p").textContent +=
  DaysBetweenTwoDates("2021-06-12") + " days";
