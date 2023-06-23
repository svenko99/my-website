function get_data() {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiUrl = "https://www.lpp.si/lpp/ajax/1/803211";

  fetch(proxyUrl + apiUrl)
    .then((response) => response.json())
    .then((data) => {
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
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

window.addEventListener("load", get_data);
