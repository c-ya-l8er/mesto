const popup = document.querySelector(".popup");
const openPopupButton = document.querySelector(".profile__edit-btn");
const closePopupButton = document.querySelector(".popup__close-btn");
const togglePopupState = (popupToToggle) =>
  popupToToggle.classList.toggle("popup_opened");
const formElement = document.querySelector(".popup__form");
const profileName = document.querySelector(".profile__username");
const profileAbout = document.querySelector(".profile__about");
const nameInput = document.querySelector(".popup__field_type_username");
const jobInput = document.querySelector(".popup__field_type_about");
const cardsList = document.querySelector(".cards");
const cardTemplate = document.querySelector(".cards-template").content;

openPopupButton.addEventListener("click", popupOpenHandler);
closePopupButton.addEventListener("click", () => togglePopupState(popup));

//popup.addEventListener("click", (evt) => {
// if (evt.target === popup) togglePopupState(popup);
//});

function popupOpenHandler() {
  togglePopupState(popup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  togglePopupState(popup);
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
}

formElement.addEventListener("submit", formSubmitHandler);

initialCards.forEach((el) => {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector(".card__title").textContent = el.name;
  cardElement.querySelector(".card__image").src = el.link;

  cardsList.append(cardElement);
});
