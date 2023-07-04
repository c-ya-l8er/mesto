import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { initialCards, validationConfig } from "../utils/constants.js";

//enableValidation(validationConfig);

// модальные окна
const editPopup = document.querySelector(".popup_edit-profile");
const addPopup = document.querySelector(".popup_add-card");
const imagePopup = document.querySelector(".popup_open-image");
//const allPopups = document.querySelectorAll(".popup");

// кнопки
const openEditPopupButton = document.querySelector(".profile__edit-btn");
const openAddPopupButton = document.querySelector(".profile__add-btn");
const closePopupButtons = document.querySelectorAll(".popup__close-btn");
//const submitButton = document.querySelector("popup__submit-btn_disabled");

// редактирование профиля
const profileName = document.querySelector(".profile__username");
const profileAbout = document.querySelector(".profile__about");
//const nameInput = document.querySelector(".popup__input_type_username");
//const aboutInput = document.querySelector(".popup__input_type_about");

// создание новой карточки
//const cardName = document.querySelector(".card__title");
//const cardImage = document.querySelector(".card__image");
//const cardInput = document.querySelector(".popup__input_type_cardname");
//const linkInput = document.querySelector(".popup__input_type_link");

// добавление карточек из массива
const cardsList = document.querySelector(".cards");

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
const openPopup = (popupToOpen) => {
  popupToOpen.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEsc);
};

const closePopup = (popupToClosed) => {
  popupToClosed.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEsc);
};

openAddPopupButton.addEventListener("click", () => {
  openPopup(addPopup);
  formAddCardValidator.hideErrorsAndButtons();
});

closePopupButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

// закрытие модального окна по клику на оверлей
document.querySelectorAll(".popup").forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(popup);
    }
  });
});

// закрытие модального окна ESC
function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

// редактирование профиля
const openPopupEdit = () => {
  openPopup(editPopup);
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  formProfileEditValidator.hideErrorsAndButtons();
};

// форма заполнения редактирования профиля
const formProfileEditSubmitHandler = (evt) => {
  evt.preventDefault();
  closePopup(editPopup);
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
};

openEditPopupButton.addEventListener("click", openPopupEdit);
formProfileEdit.addEventListener("submit", formProfileEditSubmitHandler);

const openImagePopup = (link, name) => {
  popupTitle.textContent = name;
  popupImage.src = link;
  popupImage.alt = name;
  openPopup(imagePopup);
};

const createCard = (cardData, templateSelector, openImagePopup) => {
  const newCard = new Card(cardData, templateSelector, openImagePopup);
  return newCard.generateCard();
};

//добавление карточки
const addCard = (evt) => {
  const cardObj = {
    name: cardInput.value,
    link: linkInput.value,
  };
  const cardEl = createCard(cardObj, ".card-template", openImagePopup);

  evt.preventDefault();
  closePopup(addPopup);
  cardsList.prepend(cardEl);
};
formAddCard.addEventListener("submit", addCard);

//добавление карточек из массива
initialCards.forEach((card) => {
  const cardEl = createCard(card, ".card-template", openImagePopup);
  cardsList.append(cardEl);
});

const formProfileEditValidator = new FormValidator(
  validationConfig,
  formProfileEdit
);
formProfileEditValidator.enableValidation();
const formAddCardValidator = new FormValidator(validationConfig, formAddCard);
formAddCardValidator.enableValidation();
