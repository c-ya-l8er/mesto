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

let userId = "";

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userInfo, initialCards]) => {
    userId = userInfo._id;
    addUserInfo.setUserInfo(userInfo);
    cardList.renderItems(initialCards);
  })
  .then()
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });

/*Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then((values) => {
    userId = values[0]._id;
    addUserInfo.setUserInfo({name: values[0].name, about: values[0].about, avatar: values[0].avatar});
    values[1].reverse();
    cardList.renderItems(values[1]);
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });*/

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
      console.log(err); // выведем ошибку в консоль
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
  //const CardEl = createCard(data, ".card-template", handleCardClick);
  //cardList.addItem(cardEl);
  openAddCardPopup.renderSavingText(true);
  api
    .setInitialCards(data)
    .then((res) => {
      //const cardEl = createCard(data, ".card-template", handleCardClick);
      //cardList.addItem(cardEl);
      cardList.addItem(createCard(res));
      //console.log(cardEl);
      //console.log();
      openAddCardPopup.close();
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
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
      console.log(err); // выведем ошибку в консоль
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

// const openConfirmPopup = new PopupWithConfirm(confirmPopup, cardId => {
//     api
//     .removeCard(cardId)
//     .then(() => {
//       openConfirmPopup.close(cardElement);
//       cardElement.removeCard();
//       console.log(cardElement);
//     })
//     .catch((err) => {
//       console.log(err); // выведем ошибку в консоль
//     })
//     .finally(()=> {
//       confirmPopup.close();
//     })
// })
//openConfirmPopup.setEventListeners();
const openConfirmPopup = new PopupWithConfirm(confirmPopup, handleCardDelete);
openConfirmPopup.setEventListeners();

const handleCardDelete = (cardElement) => {
  
  api
    .removeCard(cardElement.id())
    .then(() => {
      openConfirmPopup.close(cardElement);
      cardElement.removeCard();
      console.log(cardElement);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
    openConfirmPopup.open(removeCard(cardElement));
};

const handleTrashClick = (cardElement) => {
  openConfirmPopup.open(cardElement);
};

const handleCardClick = (link, name) => {
  openImagePopup.open(link, name);
};

const handleSetLike = (cardData) => {
  api.setLike(cardData.id).then((data) => {
    cardData.handleLikeClick();
    cardData.likeCounter(data);
  });
};

const handleSetDislike = (cardData) => {
  api.removeLike(cardData.id).then((data) => {
    cardData.handleLikeClick();
    cardData.likeCounter(data);
  });
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

/*const createCard = (cardData, templateSelector, handleCardClick, userId) => {
  const newCard = new Card(cardData, templateSelector, handleCardClick, userId);
  //console.log(currentUser);
  return newCard.generateCard();
};*/

/*const cardList = new Section(
  {
    renderer: (item) => {
      const cardEl = createCard(
        item,
        ".card-template"
      );
      cardList.addItem(cardEl);
    },
  },
  cardListSection
);
cardList.renderItems(initialCards);*/

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
      handleSetLike: (cardData) => {
        //alert("button was clicked");
        api.setLike(cardData.id).then((data) => {
          cardData.handleLikeClick();
          cardData.likeCounter(data);
        });
      },
    },
    {
      handleSetDislike: (cardData) => {
        api.removeLike(cardData.id).then((data) => {
          cardData.handleLikeClick();
          cardData.likeCounter(data);
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
