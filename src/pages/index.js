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
  confirmBtn,
} from "../utils/constants.js";

import Api from "../components/Api.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-71/",
  headers: {
    authorization: "a04dfc18-37ef-4557-8dab-9c7099f92080",
    "Content-Type": "application/json",
  },
});

let userId = "";

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userInfo, initialCards]) => {
    userId = userInfo._id;
    addUserInfo.setUserInfo(userInfo);
    cardList.renderItems(initialCards);
  })
  .then()
  .catch((err) => {
    console.log(err);
  });

const addUserInfo = new UserInfo(profileName, profileAbout, profileAvatar);

const openImagePopup = new PopupWithImage(imagePopup);
openImagePopup.setEventListeners();

const openEditProfilePopup = new PopupWithForm(editPopup, (data) => {
  openEditProfilePopup.renderSavingText(true);
  api
    .setUserInfo(data)
    .then((userInfo) => {
      addUserInfo.setUserInfo(userInfo);
      openEditProfilePopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      openEditProfilePopup.renderSavingText(false);
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
  openAddCardPopup.renderSavingText(true);
  api
    .setInitialCards(data)
    .then((res) => {
      cardList.addItem(createCard(res));
      openAddCardPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      openAddCardPopup.renderSavingText(false);
    });
});

openAddPopupButton.addEventListener("click", () => {
  openAddCardPopup.open();
  formAddCardValidator.hideErrorsAndButtons();
});
openAddCardPopup.setEventListeners();

const openEditAvatarPopup = new PopupWithForm(avatarPopup, (data) => {
  openEditAvatarPopup.renderSavingText(true);
  api
    .setUserAvatar(data)
    .then((userInfo) => {
      addUserInfo.setUserInfo(userInfo);
      openEditAvatarPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      openEditAvatarPopup.renderSavingText(false);
    });
});

openAvatarPopupButton.addEventListener("click", () => {
  openEditAvatarPopup.open();
  formEditAvatarValidator.hideErrorsAndButtons();
});
openEditAvatarPopup.setEventListeners();

const openConfirmPopup = new PopupWithConfirm(confirmPopup, {
  handleCardDelete: (cardElement) => {
    api
      .removeCard(cardElement.id())
      .then(() => {
        openConfirmPopup.close(cardElement);
        cardElement.removeCard();
      })
      .catch((err) => {
        console.log(err);
      });
  },
});
openConfirmPopup.setEventListeners();

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

function createCard(cardData) {
  const newCard = new Card(
    cardData,
    ".card-template",
    {
      handleCardClick: (link, name) => {
        openImagePopup.open(link, name);
      },
    },
    {
      handleTrashClick: (cardElement) => {
        openConfirmPopup.open(cardElement);
      },
    },
    {
      handleSetLike: (cardElement) => {
        api
          .setLike(cardElement.id())
          .then((data) => {
            cardElement.toggleLikeClick();
            cardElement.likeCounter(data);
          })
          .catch((err) => {
            console.log(err);
          });
      },
    },
    {
      handleSetDislike: (cardElement) => {
        api
          .removeLike(cardElement.id())
          .then((data) => {
            cardElement.toggleLikeClick();
            cardElement.likeCounter(data);
          })
          .catch((err) => {
            console.log(err);
          });
      },
    },
    userId
  );
  return newCard.generateCard();
}

function renderCards(cardData) {
  cardList.addItem(createCard(cardData));
}

const cardList = new Section(renderCards, cardListSection);
