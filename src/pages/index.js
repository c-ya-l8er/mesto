import "./index.css";
import {
  initialCards,
  validationConfig,
  cardListSection,
  editPopup,
  addPopup,
  imagePopup,
  popupElement,
  openEditPopupButton,
  openAddPopupButton,
  closePopupButtons,
  profileName,
  profileAbout,
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

const addUserInfo = new UserInfo(profileName, profileAbout);

const openEditProfilePopup = new PopupWithForm(editPopup, (data) => {
  addUserInfo.setUserInfo(data);
  openEditProfilePopup.close();
});

openEditPopupButton.addEventListener("click", () => {
  openEditProfilePopup.open();
  const userInfo = addUserInfo.getUserInfo();
  nameInput.value = userInfo.name;
  aboutInput.value = userInfo.about;
  formProfileEditValidator.hideErrorsAndButtons();
});
openEditProfilePopup.setEventListeners();

const openAddCardPopup = new PopupWithForm(addPopup, (data) => {
  const cardEl = createCard(data, ".card-template", handleCardClick);
  cardList.addItem(cardEl);
  openAddCardPopup.close();
});

openAddPopupButton.addEventListener("click", () => {
  formAddCardValidator.hideErrorsAndButtons();
  openAddCardPopup.open();
});
openAddCardPopup.setEventListeners();

const openImagePopup = new PopupWithImage(imagePopup);
openImagePopup.setEventListeners();

const handleCardClick = (link, name) => {
  openImagePopup.open(link, name);
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
