const validationConfig = {
  formElement: ".popup__form",
  inputElement: ".popup__input",
  buttonElement: ".popup__submit-btn",
  inactiveButtonClass: "popup__submit-btn_disabled",
  inputErrorClass: "popup__input_invalid",
  errorClass: "popup__input-error_active",
};

enableValidation(validationConfig);

// модальные окна
const editPopup = document.querySelector(".popup_edit-profile");
const addPopup = document.querySelector(".popup_add-card");
const imagePopup = document.querySelector(".popup_open-image");
const allPopups = document.querySelectorAll(".popup");

// кнопки
const openEditPopupButton = document.querySelector(".profile__edit-btn");
const openAddPopupButton = document.querySelector(".profile__add-btn");
const closePopupButtons = document.querySelectorAll(".popup__close-btn");
const submitButton = document.querySelector("popup__submit-btn_disabled");

// редактирование профиля
const profileName = document.querySelector(".profile__username");
const profileAbout = document.querySelector(".profile__about");
//const nameInput = document.querySelector(".popup__input_type_username");
//const aboutInput = document.querySelector(".popup__input_type_about");

// создание новой карточки
const cardName = document.querySelector(".card__title");
const cardImage = document.querySelector(".card__image");
//const cardInput = document.querySelector(".popup__input_type_cardname");
//const linkInput = document.querySelector(".popup__input_type_link");

// добавление карточек из массива
const cardsList = document.querySelector(".cards");
const cardTemplate = document.querySelector(".card-template").content;

// открытие фото
const popupImage = document.querySelector(".popup__image");
const popupTitle = document.querySelector(".popup__caption");

// формы
/*popup__form
//const formElement = document.forms;
//const nameInput = formElement.elements.username;
//const aboutInput = formElement.elements.about;
//const formProfileEdit = document.querySelector(".popup__form_profile-edit-form");
//const formAddCard = document.querySelector(".popup__form_new-card-form");*/

/*const formInputs = document.querySelectorAll(".popup__input");*/

const formProfileEdit = document.forms.profile_edit_form;
const nameInput = formProfileEdit.elements.username;
const aboutInput = formProfileEdit.elements.about;

const formAddCard = document.forms.new_card_form;
const cardInput = formAddCard.elements.cardname;
const linkInput = formAddCard.elements.link;

// открытие и закрытие модального окна
const openPopup = (popupToOpen) => popupToOpen.classList.add("popup_opened");
const closePopup = (popupToClosed) =>
  popupToClosed.classList.remove("popup_opened");

openAddPopupButton.addEventListener("click", () => {
  openPopup(addPopup);
  hideErrorsAndButtons(formAddCard, validationConfig);
});

closePopupButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

// закрытие модального окна по клику на оверлей
editPopup.addEventListener("click", (evt) => {
  if (evt.target === editPopup) closePopup(editPopup);
});
addPopup.addEventListener("click", (evt) => {
  if (evt.target === addPopup) closePopup(addPopup);
});
imagePopup.addEventListener("click", (evt) => {
  if (evt.target === imagePopup) closePopup(imagePopup);
});

// закрытие модального окна ESC
document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    closePopup(imagePopup);
    closePopup(addPopup);
    closePopup(editPopup);
  }
});

// редактирование профиля
openPopupEdit = () => {
  openPopup(editPopup);
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  hideErrorsAndButtons(formProfileEdit, validationConfig);
};

// форма заполнения редактирования профиля
formProfileEditSubmitHandler = (evt) => {
  evt.preventDefault();
  closePopup(editPopup);
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
};

openEditPopupButton.addEventListener("click", openPopupEdit);
formProfileEdit.addEventListener("submit", formProfileEditSubmitHandler);

//создание карточки
createCard = (el) => {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardName = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  cardName.textContent = el.name;
  cardImage.src = el.link;
  cardName.alt = el.name;

  cardElement
    .querySelector(".card__like-btn")
    .addEventListener("click", (evt) => {
      evt.target.classList.toggle("card__like-btn_active");
    });
  cardElement
    .querySelector(".card__trash-btn")
    .addEventListener("click", (evt) => {
      cardElement.remove();
    });

  cardImage.addEventListener("click", () => {
    popupTitle.textContent = el.name;
    popupImage.src = el.link;
    popupImage.alt = el.name;
    openPopup(imagePopup);
  });
  return cardElement;
};

//добавление карточки
addCard = (evt) => {
  evt.preventDefault();
  closePopup(addPopup);
  const cardData = {
    name: cardInput.value,
    link: linkInput.value,
  };
  formAddCard.reset();
  cardsList.prepend(createCard(cardData));
};
formAddCard.addEventListener("submit", addCard);

//добавление карточек из массива
initialCards.forEach((el) => {
  cardsList.append(createCard(el));
});