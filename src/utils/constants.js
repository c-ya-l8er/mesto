export const cardListSection = ".cards";

// модальные окна
export const editPopup = document.querySelector(".popup_edit-profile");
export const addPopup = document.querySelector(".popup_add-card");
export const imagePopup = document.querySelector(".popup_open-image");
export const popupElement = document.querySelectorAll(".popup");

// кнопки
export const openEditPopupButton = document.querySelector(".profile__edit-btn");
export const openAddPopupButton = document.querySelector(".profile__add-btn");
//export const closePopupButtons = document.querySelectorAll(".popup__close-btn");

// редактирование профиля
export const profileName = document.querySelector(".profile__username");
export const profileAbout = document.querySelector(".profile__about");

// открытие фото
//export const popupImage = document.querySelector(".popup__image");
//export const popupTitle = document.querySelector(".popup__caption");

// формы
export const formProfileEdit = document.forms.profile_edit_form;
export const nameInput = formProfileEdit.elements.username;
export const aboutInput = formProfileEdit.elements.about;

export const formAddCard = document.forms.new_card_form;
export const cardInput = formAddCard.elements.cardname;
export const linkInput = formAddCard.elements.link;

export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export const validationConfig = {
  formElement: ".popup__form",
  inputElement: ".popup__input",
  buttonElement: ".popup__submit-btn",
  inactiveButtonClass: "popup__submit-btn_disabled",
  inputErrorClass: "popup__input_invalid",
  errorClass: "popup__input-error_active",
};
