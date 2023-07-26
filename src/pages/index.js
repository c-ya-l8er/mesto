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
  profileAvatar,
  formProfileEdit,
  nameInput,
  aboutInput,
  formAddCard,
  cardInput,
  linkInput,
  formUpdateAvatar,
  avatarInput,
  avatarPopup,
  openAvatarPopupButton,
} from "../utils/constants.js";

import Api from "../components/Api.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { data } from "autoprefixer";

/*function statusResponse(res) {
  
  if (res.ok) {
    return res.json();
  }
  // если ошибка, отклоняем промис
  return Promise.reject(`Ошибка: ${res.status}`);
  
}


//fetch('https://mesto.nomoreparties.co/v1/cohort-71/cards', {
fetch('https://mesto.nomoreparties.co/v1/cohort-71/users/me/', {  
  headers: {
    authorization: 'a04dfc18-37ef-4557-8dab-9c7099f92080'
  }
})
.then(res => res.json())
.then((result) => {
  console.log(result);
});*/

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-71/",
  headers: {
    authorization: "a04dfc18-37ef-4557-8dab-9c7099f92080",
    "Content-Type": "application/json",
  },
});

Promise.all([api.getUserInfo(), api.getInitialCards()]).then(
  ([userInfo, initialCards]) => {
    //console.log(userInfo);
    //console.log(initialCards);
    addUserInfo.setUserInfo(userInfo);
    //console.log(api.setUserInfo(userInfo));
    //initialCards.setInitialCards(item);
    cardList.renderItems(initialCards);
  }
);

const addUserInfo = new UserInfo(profileName, profileAbout, profileAvatar);

const openEditProfilePopup = new PopupWithForm(editPopup, (data) => {
  api
    .setUserInfo(data)
    .then((userInfo) => {
      addUserInfo.setUserInfo(userInfo);
      openEditProfilePopup.close();
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
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
  openAddCardPopup.open();
  formAddCardValidator.hideErrorsAndButtons();
});
openAddCardPopup.setEventListeners();

const openImagePopup = new PopupWithImage(imagePopup);
openImagePopup.setEventListeners();

const openUpdateAvatarPopup = new PopupWithForm(avatarPopup, (data) => {
  api
    .setUserAvatar(data)
    .then((userInfo) => {
      addUserInfo.setUserInfo(userInfo);
      openUpdateAvatarPopup.close();
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
});

openAvatarPopupButton.addEventListener("click", () => {
  openUpdateAvatarPopup.open();
  formUpdateAvatarValidator.hideErrorsAndButtons();
});
openUpdateAvatarPopup.setEventListeners();

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

const formUpdateAvatarValidator = new FormValidator(
  validationConfig,
  formUpdateAvatar
);
formUpdateAvatarValidator.enableValidation();

const createCard = (cardData, templateSelector, handleCardClick) => {
  const newCard = new Card(cardData, templateSelector, handleCardClick);
  return newCard.generateCard();
};

const cardList = new Section(
  {
    renderer: (item) => {
      const cardEl = createCard(item, ".card-template", handleCardClick);
      cardList.addItem(cardEl);
    },
  },
  cardListSection
);
cardList.renderItems(initialCards);
