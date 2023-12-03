const changeImageBtn = document.querySelector(".header button");
const dogImage = document.querySelector(".dogs-block img");
const selectBreeds = document.getElementById("breeds");
const DOG_IMAGE_RANDOM_API = "https://dog.ceo/api/breeds/image/random";
const LIST_ALL_BREEDS_API = "https://dog.ceo/api/breeds/list/all";

let breed = "Random";

fetch(LIST_ALL_BREEDS_API)
  .then((data) => data.json())
  .then((data) => {
    const listBreeds = Object.keys(data.message);

    listBreeds.map((breed) => {
      const newOption = document.createElement("option");

      newOption.value = breed;
      newOption.textContent = breed;

      selectBreeds.append(newOption);
    });
  });

selectBreeds.addEventListener("change", (e) => {
  breed = e.target.value;
});

changeImageBtn.addEventListener("click", () => {
  if (breed == "Random") {
    getDogImageRandom();
  } else {
    getBreedDogImage();
  }
});

function getDogImageRandom() {
  fetch(DOG_IMAGE_RANDOM_API)
    .then((data) => data.json())
    .then((data) => {
      dogImage.src = data.message;
    });
}

function getBreedDogImage() {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then((data) => data.json())
    .then((data) => {
      dogImage.src = data.message;
    });
}
