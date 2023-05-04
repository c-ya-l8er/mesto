const popup = document.querySelector(".popup");
const openPopupButton = document.querySelector(".profile__edit-btn");
const closePopupButton = document.querySelector(".popup__close-btn");
const togglePopupState = (popupToToggle) =>
  popupToToggle.classList.toggle("popup_opened");
const formElement = document.querySelector(".popup__form");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const nameInput = document.querySelector(".popup__field_type_name");
const jobInput = document.querySelector(".popup__field_type_about");

openPopupButton.addEventListener("click", popupOpenHandler);
closePopupButton.addEventListener("click", () => togglePopupState(popup));
popup.addEventListener("click", (evt) => {
  if (evt.target === popup) togglePopupState(popup);
});

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