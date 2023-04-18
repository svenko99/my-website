function get_data() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://www.lpp.si/lpp/ajax/1/803211", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const result = [];
      for (const bus of data) {
        for (const bus_stop of bus) {
          if (["N3", "3B", 3].includes(bus_stop.key)) {
            result.push(
              `Trojka pride čez ${bus_stop.minutes} minut ob ${bus_stop.time}`
            );
          }
        }
      }
      const output = document.getElementById("output");
      output.innerHTML = result.map((res) => `<p>${res}</p>`).join("");
    }
  };
  xhr.send();
}

window.addEventListener("load", get_data);
