import "./index.css";
import { initialCards, validationConfig, cardListSection } from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";


// модальные окна
const editPopup = document.querySelector(".popup_edit-profile");
const addPopup = document.querySelector(".popup_add-card");
const imagePopup = document.querySelector(".popup_open-image");
const allPopups = document.querySelectorAll(".popup");

// кнопки
const openEditPopupButton = document.querySelector(".profile__edit-btn");
const openAddPopupButton = document.querySelector(".profile__add-btn");
const closePopupButtons = document.querySelectorAll(".popup__close-btn");

// редактирование профиля
const profileName = document.querySelector(".profile__username");
const profileAbout = document.querySelector(".profile__about");

// открытие фото
const popupImage = document.querySelector(".popup__image");
const popupTitle = document.querySelector(".popup__caption");

// формы
const formProfileEdit = document.forms.profile_edit_form;
const nameInput = formProfileEdit.elements.username;
const aboutInput = formProfileEdit.elements.about;

const formAddCard = document.forms.new_card_form;
const cardInput = formAddCard.elements.cardname;
const linkInput = formAddCard.elements.link;

/*/ открытие и закрытие модального окна
const openPopup = (popupToOpen) => {
  popupToOpen.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEsc);
};

const closePopup = (popupToClosed) => {
  popupToClosed.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEsc);
};*/

openAddPopupButton.addEventListener("click", () => {
  formAddCard.reset();
  formAddCardValidator.hideErrorsAndButtons();
  openPopup(addPopup);
});

closePopupButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

/*/ закрытие модального окна по клику на оверлей
allPopups.forEach((popup) => {
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
}*/

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

const formProfileEditValidator = new FormValidator(
  validationConfig,
  formProfileEdit
);
formProfileEditValidator.enableValidation();
const formAddCardValidator = new FormValidator(validationConfig, formAddCard);
formAddCardValidator.enableValidation();

const createCard = (cardData, templateSelector, openImagePopup) => {
  const newCard = new Card(cardData, templateSelector, openImagePopup);
  return newCard.generateCard();
};

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardEl = createCard(item, ".card-template", openImagePopup);
      cardList.addItem(cardEl);
    },
  },
  cardListSection
);

cardList.renderItems();

//добавление карточек из массива
/*initialCards.forEach((card) => {
  const cardEl = createCard(card, ".card-template", openImagePopup);
  cardListSection.append(cardEl);
});*/

//добавление карточки
const addCard = (evt) => {
  const cardData = {
    name: cardInput.value,
    link: linkInput.value,
  };
  const cardEl = createCard(cardData, ".card-template", openImagePopup);
  evt.preventDefault();
  closePopup(addPopup);
  cardListSection.prepend(cardEl);
};
formAddCard.addEventListener("submit", addCard);


