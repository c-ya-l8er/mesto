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
  formEditAvatar,
  avatarInput,
  avatarPopup,
  openAvatarPopupButton,
  confirmPopup,
  openConfirmPopupButton,
} from "../utils/constants.js";

import Api from "../components/Api.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
//import PopupWithConfirm from "../components/PopupWithConfirm.js";

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

//let userInfoId;

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userInfo, initialCards]) => {
    //userInfoId = userInfo._id;
    addUserInfo.setUserInfo(userInfo);
    cardList.renderItems(initialCards);
    //console.log(userInfoId);
    //console.log(currentUser);
    //console.log(initialCards);
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });

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
  //const CardEl = createCard(data, ".card-template", handleCardClick);
  //cardList.addItem(cardEl);
  //openAddCardPopup.close();
  //console.log(data);
  //console.log(CardEl);
  api.setInitialCards(data)
  .then((data) => {
  const CardEl = createCard(data, ".card-template", handleCardClick);
  cardList.addItem(CardEl);
  openAddCardPopup.close();
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });
});

openAddPopupButton.addEventListener("click", () => {
  openAddCardPopup.open();
  formAddCardValidator.hideErrorsAndButtons();
});
openAddCardPopup.setEventListeners();

const openImagePopup = new PopupWithImage(imagePopup);
openImagePopup.setEventListeners();

const openEditAvatarPopup = new PopupWithForm(avatarPopup, (data) => {
  api
    .setUserAvatar(data)
    .then((userInfo) => {
      addUserInfo.setUserInfo(userInfo);
      openEditAvatarPopup.close();
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
});

openAvatarPopupButton.addEventListener("click", () => {
  openEditAvatarPopup.open();
  formEditAvatarValidator.hideErrorsAndButtons();
});
openEditAvatarPopup.setEventListeners();

/*const openConfirmPopup = new PopupWithConfirm(confirmPopup, handleCardDelete);

const handleCardDelete = () => {
  openConfirmPopup.open();
  api
    .removeCard(cardId)
    .then(() => {
      this._element.remove();
      this._element = null;
      openConfirmPopup.close();
      console.log(this._element);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
};

openConfirmPopup.setEventListeners();*/

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

const formEditAvatarValidator = new FormValidator(
  validationConfig,
  formEditAvatar
);
formEditAvatarValidator.enableValidation();

const createCard = (cardData, templateSelector, handleCardClick) => {
  const newCard = new Card(
    cardData,
    templateSelector,
    handleCardClick,
    //userInfoId
  );
  //console.log(currentUser);
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
