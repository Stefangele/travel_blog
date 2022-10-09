const listProposedSunsets = document.querySelector("#listProposedSunsets");
let proposedCity = document.getElementById("proposedCity");
let proposedCountry = document.getElementById("proposedCountry");
let proposedFavoriteSpot = document.getElementById("proposedFavoriteSpot");
let proposedTravelDate = document.getElementById("proposedTravelDate");

let newSunsetEntries = [];

function readNewSunsetInputs() {
  let newSunsetEntry = {
    city: proposedCity.value,
    country: proposedCountry.value,
    favoritespot: proposedFavoriteSpot.value,
    traveldate: proposedTravelDate.value,
  };
  newSunsetEntries.push(newSunsetEntry);
}

function fillProposedSunsetlist() {
  listProposedSunsets.innerHTML = "";
  for (let i = 0; i < newSunsetEntries.length; i++) {
    const { city, country, favoritespot, traveldate } = newSunsetEntries[i];
    listProposedSunsets.innerHTML += `<li data-icon="🌍">You have to go to ${city} in ${country}. You have to go to: ${favoritespot}. Best travel date is: ${traveldate}</li><button class="buttonListProposedSunsets" data-index="${i}">🗑</button><button class="buttonListProposedSunsets" data-index="${i}">👌</button></li>`;
  }
}

let submitNewSunset = document.getElementById("submitNewSunset");

submitNewSunset.addEventListener("click", function () {
  readNewSunsetInputs();
  fillProposedSunsetlist();
  save();
});

listProposedSunsets.addEventListener("click", function (event) {
  if (event.target.tagName !== "BUTTON") {
    return;
  }

  const button = event.target;
  const i = button.dataset.index;

  if (button.textContent === "🗑") {
    const result = confirm(
      "Do you really want to delete this cool sunset spot?"
    );
    if (result) {
      newSunsetEntries.splice(i, 1);
    }
    fillProposedSunsetlist();
    save();
  }
});

function save() {
  const saveNewPost = JSON.stringify(newSunsetEntries);
  localStorage.setItem("SavenewPost", saveNewPost);
}

function load() {
  const saveNewPost = localStorage.getItem("saveNewPost");
  newSunsetEntries = JSON.parse(saveNewPost);
}
