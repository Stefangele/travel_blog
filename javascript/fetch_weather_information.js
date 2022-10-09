function fetchWeather() {
  fetch(
    "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=b8520193268320a9e18a697c4af8766b"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      console.log(result);
    })
    .catch(function (error) {
      console.log(error);
    });
}
fetchWeather();
