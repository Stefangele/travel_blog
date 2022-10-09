const buttonPrev = document.getElementById("buttonPrev");
const buttonNext = document.getElementById("buttonNext");
const image = document.getElementById("slideshowImage");
const description = document.getElementById("slideDescription");

let slides = [];
let slideDescriptions = [];

function slideShowFunctionality() {
  let counter = 0;
  buttonPrev.addEventListener("click", function () {
    counter++;
    if (counter >= slides.length) {
      counter = 0;
    }
    image.src = slides[counter];
    description.innerHTML = slideDescriptions[counter];
  });

  buttonNext.addEventListener("click", function () {
    counter--;
    if (counter >= slides.length) {
      counter = 0;
    } else if (counter < 0) {
      counter = slides.length - 1;
    }
    image.src = slides[counter];
    description.innerHTML = slideDescriptions[counter];
  });
}

slideShowFunctionality(slides);

fetch("/json/pictures_slideshow_home_JSON.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (result) {
    const newImages = result.map(function (value) {
      return value.image;
    });
    slides = newImages;
    const newDescription = result.map(function (value) {
      return value.description;
    });
    slideDescriptions = newDescription;
  })
  .catch(function (error) {
    alert("Could not find data");
  });
