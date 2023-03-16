const incompleteURL = "https://api.pexels.com/v1/search?query=";
const AUTH = "znj8z2sZcAVqTn29Rd8N2T0FS1F4yRJFkUDUSx813U4kerlLGQjxEJXe";
let param0 = "river";
let param1 = "mountain";
let param2 = "ocean";

function createFullURL(queryString) {
  return incompleteURL + queryString;
}

// LOADCARDS FUNCTION V.2
function loadCardsV2(queryParam) {
  fetch(createFullURL(queryParam), {
    headers: {
      Authorization: AUTH
    }
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      const photos = data.photos;
      console.log(photos);
      const cards = document.querySelectorAll(".card");

      for (const photo of photos) {
        populateCard(
          photo.id,
          photo.photographer,
          photo.photographer_id,
          photo.photographer_url,
          photo.src.portrait,
          photo.src.landscape
        );
      }
    })
    .catch((err) => console.log(err));
}

// POPULATE CARDS FUNCTION
const populateCard = (
  imgId,
  photographer,
  photographerId,
  photographerUrl,
  portraitSrc,
  landscapeSrc
) => {
  const card = document.querySelector(".card");
  card.removeChild(card.firstElementChild);
  const coverImg = document.createElement("img");
  coverImg.setAttribute("src", portraitSrc);
  card.prepend(coverImg);

  const cardTitle = document.querySelector(".card-title");
  cardTitle.innerHTML = `Image by ${photographer}`;

  const photoId = document.querySelector("small");
  photoId.innerHTML = `id: ${imgId}`;
};

// HIDE BUTTON
const hideBtns = document.querySelectorAll(".hide-btn");
console.log(hideBtns);
hideBtns.forEach((hideBtn) => {
  hideBtn.addEventListener("click", () => {
    console.log(hideBtn.closest(".col-md-4"));
    hideBtn.closest(".col-md-4").remove();
  });
});

//WINDOW ONLOAD
window.addEventListener("load", (event) => {
  loadCardsV2(param1);
});
// LOAD BUTTON
const loadBtn = document.querySelector("#load-btn");
console.log(loadBtn);
loadBtn.addEventListener("click", () => loadCardsV2(0));

// SECONDARY LOAD BUTTON
const secondaryLoadBtn = document.querySelector("#secondaryload-btn");
console.log(secondaryLoadBtn);
secondaryLoadBtn.addEventListener("click", () => loadCardsV2(param2));

// SECONDARY LOAD BUTTON
const searchBtn = document.querySelector("#search-btn");
const searchInput = document.querySelector("#search-input");
console.log(searchBtn);
console.log(searchInput);
console.log(searchInput.value);
const param3 = searchInput.innerText;
searchBtn.addEventListener("click", () => loadCardsV2(param3));
