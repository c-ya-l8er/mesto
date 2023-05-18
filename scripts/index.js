const popup = document.querySelector(".popup");

const editPopupButton = document.querySelector(".profile__edit-btn");
const addPopupButton = document.querySelector(".profile__add-btn");
const closePopupButton = document.querySelector(".popup__close-btn");

const togglePopupState = (popupToToggle) =>
  popupToToggle.classList.toggle("popup_opened");

const formElement = document.querySelector(".popup__form");

const profileName = document.querySelector(".profile__username");
const profileAbout = document.querySelector(".profile__about");
const nameInput = document.querySelector(".popup__field_type_username");
const jobInput = document.querySelector(".popup__field_type_about");

const cardName = document.querySelector(".card__title");
const cardLink = document.querySelector(".card__image");
const placeInput = document.querySelector(".popup__field_type_placename");
const linkInput = document.querySelector(".popup__field_type_link");

const cardsList = document.querySelector(".cards");
const cardTemplate = document.querySelector(".cards-template").content;
const trashButton = document.querySelector(".card__trash-btn");


initialCards.forEach((el) => {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector(".card__title").textContent = el.name;
  cardElement.querySelector(".card__image").src = el.link;
  cardElement
    .querySelector(".card__like-btn")
    .addEventListener("click", (evt) => {
      evt.target.classList.toggle("card__like-btn_active");
    });
  cardsList.append(cardElement);
});

editPopupButton.addEventListener("click", popupEditHandler);
addPopupButton.addEventListener("click", popupAddHandler);
closePopupButton.addEventListener("click", () => togglePopupState(popup));

//popup.addEventListener("click", (evt) => {
// if (evt.target === popup) togglePopupState(popup);
//});

function popupEditHandler() {
  togglePopupState(popup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
}

function popupAddHandler() {
  togglePopupState(popup);
  placeInput.value = cardName.textContent;
  linkInput.value = cardLink.src;
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  togglePopupState(popup);
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
}

function formCreateHandler(evt) {
  evt.preventDefault();
  togglePopupState(popup);
  cardName.textContent = placeInput.value;
  cardLink.src = linkInput.value;
}

formElement.addEventListener("submit", formCreateHandler);
formElement.addEventListener("submit", formSubmitHandler);








//trashButton.addEventListener("click", function (evt) {
  //const card = document.querySelectorAll(".card");
  //card.parentElement.removeChild(card);
//});
