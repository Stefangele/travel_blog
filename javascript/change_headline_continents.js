let headlineContinents = document.getElementById("headlineSunsetsinContinent");
const linkAsia = document.getElementById("Asia");
const linkAustralia = document.getElementById("Australia");
const linkAfrica = document.getElementById("Africa");
const linkEurope = document.getElementById("Europe");
const linkAmerica = document.getElementById("America");

const linkNavAsia = document.getElementById("linkToAsia");
const linkNavAustralia = document.getElementById("linkToAustralia");
const linkNavAfrica = document.getElementById("linkToAfrica");
const linkNavEurope = document.getElementById("linkToEurope");
const linkNavAmerica = document.getElementById("linkToAmerica");

function changeheadline() {
  linkAsia.addEventListener("click", function () {
    headlineContinents.innerHTML = "Beautiful sunsets in Asia";
    fetch("/json/card_sunset_info_asia_JSON.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        fillList(result);
      })
      .catch(function (error) {
        alert("Ooops something didn't work out - blame the weather!");
      });
  });

  linkAustralia.addEventListener("click", function () {
    headlineContinents.innerHTML = "Beautiful sunsets in Australia";
    fetch("/json/card_sunset_info_australia_JSON.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        fillList(result);
      })
      .catch(function (error) {
        alert("Ooops something didn't work out - blame the weather!");
      });
  });

  linkAfrica.addEventListener("click", function () {
    headlineContinents.innerHTML = "Beautiful sunsets in Africa";
    fetch("/json/card_sunset_info_africa_JSON.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        fillList(result);
      })
      .catch(function (error) {
        alert("Ooops something didn't work out - blame the weather!");
      });
  });

  linkEurope.addEventListener("click", function () {
    headlineContinents.innerHTML = "Beautiful sunsets in Europe";
    fetch("/json/card_sunset_info_europe_JSON.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        fillList(result);
      })
      .catch(function (error) {
        alert("Ooops something didn't work out - blame the weather!");
      });
  });

  linkAmerica.addEventListener("click", function () {
    headlineContinents.innerHTML = "Beautiful sunsets in America";
    fetch("/json/card_sunset_info_america_JSON.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        fillList(result);
      })
      .catch(function (error) {
        alert("Ooops something didn't work out - blame the weather!");
      });
  });

  linkNavAsia.addEventListener("click", function () {
    headlineContinents.innerHTML = "Beautiful sunsets in Asia";
    fetch("/json/card_sunset_info_asia_JSON.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        fillList(result);
      })
      .catch(function (error) {
        alert("Ooops something didn't work out - blame the weather!");
      });
  });

  linkNavAustralia.addEventListener("click", function () {
    headlineContinents.innerHTML = "Beautiful sunsets in Australia";
    fetch("/json/card_sunset_info_australia_JSON.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        fillList(result);
      })
      .catch(function (error) {
        alert("Ooops something didn't work out - blame the weather!");
      });
  });

  linkNavAfrica.addEventListener("click", function () {
    headlineContinents.innerHTML = "Beautiful sunsets in Africa";
    fetch("/json/card_sunset_info_africa_JSON.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        fillList(result);
      })
      .catch(function (error) {
        alert("Ooops something didn't work out - blame the weather!");
      });
  });

  linkNavEurope.addEventListener("click", function () {
    headlineContinents.innerHTML = "Beautiful sunsets in Europe";
    fetch("/json/card_sunset_info_europe_JSON.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        fillList(result);
      })
      .catch(function (error) {
        alert("Ooops something didn't work out - blame the weather!");
      });
  });

  linkNavAmerica.addEventListener("click", function () {
    headlineContinents.innerHTML = "Beautiful sunsets in America";
    fetch("/json/card_sunset_info_america_JSON.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        fillList(result);
      })
      .catch(function (error) {
        alert("Ooops something didn't work out - blame the weather!");
      });
  });
}

changeheadline();
