function createDetailCard(travelLocation) {
  const output = `
  <div class="cardDetailSunsetLocation" >
  <h2>Sunset location: ${travelLocation.city}</h2>
  <table>
    <tr>
      <img src="${travelLocation.image}">
    </tr>
    <tr>
      <th>Country:</th>
      <td>${travelLocation.country}</td>
    </tr>
    <tr>
      <th>City/Place:</th>
      <td>${travelLocation.city}</td>
    </tr>
    <tr>
      <th>Description:</th>
      <td>${travelLocation.description}</td>
    </tr>
    <tr>
      <th>Travel Date:</th>
      <td>${travelLocation.traveldate}</td>
    </tr>
  </table>
  <div class="styleCardDetailSunsetLocationWeatherInfo" id="cardDetailSunsetLocationWeatherInfo-${travelLocation.city}"> Here comes the weather
    </div>
</div>`;
  return output;
}

let travelLocationArray = [];

function fillDetailList() {
  let detailSunsetLocationCard = document.getElementById(
    "detailSunsetLocationCard"
  );
  for (let i = 0; i < travelLocationArray.length; i++) {
    const output = createDetailCard(travelLocationArray[i]);
    detailSunsetLocationCard.innerHTML += output;
    // fetchWeather(travelLocation.city);
  }
}

function cleanDetailList() {
  detailSunsetLocationCard.innerHTML = "";
}

// let cardDetailSunsetLocationWeatherInfo = document.getElementById(
//   "cardDetailSunsetLocationWeatherInfo"
// );

// fetch("/json/card_sunset_info_europe_JSON.json")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (result) {
//     travelLocationArray = result;
//     fillDetailList();
//   })
//   .catch(function (error) {
//     alert("Ooops something didn't work out - blame the weather!");
//   });

function fetchWeather(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b8520193268320a9e18a697c4af8766b&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      //   const icon = result.weather[0].icon;
      //   const weatherIcon = document.querySelector(`#weatherIcon-${city}`);
      //   weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;

      const cardDetailSunsetLocationWeatherInfo = document.getElementById(
        `cardDetailSunsetLocationWeatherInfo-${city}`
      );
      cardDetailSunsetLocationWeatherInfo.innerHTML = `<strong>${result.name}</strong>,<em> ${result.weather[0].main}</em> <br/> Temp ${result.main.temp}°`;
    })
    .catch(function (error) {
      alert("Ooops something didn't work out - blame the weather API!");
    });
}
