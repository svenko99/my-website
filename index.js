function DaysBetweenTwoDates(date1, date2) {
  var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  var firstDate = new Date(date1);
  var secondDate = new Date(date2);

  var diffDays = Math.round(
    Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay)
  );
  return diffDays;
}

document.getElementById("p").textContent +=
  DaysBetweenTwoDates("2021-06-12", Date.now()) + " days";
