function createCard(travelLocation) {
  const output = `
    <div class="card">
        <table>
            <tr>
                <img src="${travelLocation.flag}">
            </tr>
            <tr>
                <th>Country:</th>
                <td>${travelLocation.country}</td>
            </tr>
            <tr>
                <th>City/Place:</th>
                <td>${travelLocation.city}</td>
            </tr>
        </table>
        <button class="buttonAnimationChooseContinent" id="buttonShowSunsetDetails" data-pos="${travelLocation.continent}">Show details</button>
    </div>`;
  return output;
}

function fillList(travelLocationArray) {
  let country_list = document.getElementById("country_list");
  country_list.innerHTML = "";
  for (let i = 0; i < travelLocationArray.length; i++) {
    const output = createCard(travelLocationArray[i]);
    country_list.innerHTML += output;
  }
}

let contentSliderWorldMap = document.querySelector("#country_list");

country_list.addEventListener("click", function (event) {
  if (event.target.tagName !== "BUTTON") {
    return;
  }
  let button = event.target;

  if (button.dataset.pos == "Europe")
    fetch("/json/card_sunset_info_europe_JSON.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        travelLocationArray = result;
        cleanDetailList();
        fillDetailList();
      })
      .catch(function (error) {
        alert("Ooops something didn't work out - blame the weather!");
      });

  if (button.dataset.pos == "Asia")
    fetch("/json/card_sunset_info_asia_JSON.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        travelLocationArray = result;
        cleanDetailList();
        fillDetailList();
      })
      .catch(function (error) {
        alert("Ooops something didn't work out - blame the weather!");
      });

  if (button.dataset.pos == "Australia")
    fetch("/json/card_sunset_info_australia_JSON.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        travelLocationArray = result;
        cleanDetailList();
        fillDetailList();
      })
      .catch(function (error) {
        alert("Ooops something didn't work out - blame the weather!");
      });

  if (button.dataset.pos == "America")
    fetch("/json/card_sunset_info_america_JSON.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        travelLocationArray = result;
        cleanDetailList();
        fillDetailList();
      })
      .catch(function (error) {
        alert("Ooops something didn't work out - blame the weather!");
      });

  if (button.dataset.pos == "Africa")
    fetch("/json/card_sunset_info_africa_JSON.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        travelLocationArray = result;
        cleanDetailList();
        fillDetailList();
      })
      .catch(function (error) {
        alert("Ooops something didn't work out - blame the weather!");
      });
});

let detailSunsetLocationCard = document.getElementById(
  "detailSunsetLocationCard"
);

function fillDetailLoadingAnimation() {
  detailSunsetLocationCard.innerHTML = `
    <div class="sunAnimationFlexContainer">
      <div class="sun"></div>
      <div>
        <H2>
          The sun is setting - but first choose a continent and a location
        </H2>
      </div>
    </div>
    `;
}
