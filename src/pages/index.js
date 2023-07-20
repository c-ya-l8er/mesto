import "./index.css";
import {
  initialCards,
  validationConfig,
  cardListSection,
  editPopup,
  addPopup,
  imagePopup,
  allPopups,
  openEditPopupButton,
  openAddPopupButton,
  closePopupButtons,
  profileName,
  profileAbout,
  popupImage,
  popupTitle,
  formProfileEdit,
  nameInput,
  aboutInput,
  formAddCard,
  cardInput,
  linkInput,
} from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

/*/ открытие и закрытие модального окна
const openPopup = (popupToOpen) => {
  popupToOpen.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEsc);
};

/*const closePopup = (popupToClosed) => {
  popupToClosed.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEsc);
};*/

openAddPopupButton.addEventListener("click", () => {
  formAddCard.reset();
  formAddCardValidator.hideErrorsAndButtons();
  open(addPopup);
});

// редактирование профиля
const openPopupEdit = () => {
  open(editPopup);
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  formProfileEditValidator.hideErrorsAndButtons();
};

/*closePopupButtons.forEach((button) => {
  //const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

// закрытие модального окна по клику на оверлей
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

// форма заполнения редактирования профиля
const formProfileEditSubmitHandler = (evt) => {
  evt.preventDefault();
  closePopup(editPopup);
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
};

openEditPopupButton.addEventListener("click", openPopupEdit);
formProfileEdit.addEventListener("submit", formProfileEditSubmitHandler);

/*const openImagePopup = (link, name) => {
  popupTitle.textContent = name;
  popupImage.src = link;
  popupImage.alt = name;
  openPopup(imagePopup);
};*/

const openImagePopup = new PopupWithImage(imagePopup);

const handleCardClick = (link, name) => {
  openImagePopup.open(link, name);
  openImagePopup.setEventListeners();
};

const formProfileEditValidator = new FormValidator(
  validationConfig,
  formProfileEdit
);
formProfileEditValidator.enableValidation();
const formAddCardValidator = new FormValidator(validationConfig, formAddCard);
formAddCardValidator.enableValidation();

const createCard = (cardData, templateSelector, handleCardClick) => {
  const newCard = new Card(cardData, templateSelector, handleCardClick);
  return newCard.generateCard();
};

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardEl = createCard(item, ".card-template", handleCardClick);
      cardList.addItem(cardEl);
    },
  },
  cardListSection
);
cardList.renderItems();

//добавление карточки
const addCard = (evt) => {
  const cardData = {
    name: cardInput.value,
    link: linkInput.value,
  };
  const cardEl = createCard(cardData, ".card-template", handleCardClick);
  evt.preventDefault();
  closePopup(addPopup);
  cardListSection.prepend(cardEl);
};
formAddCard.addEventListener("submit", addCard);
