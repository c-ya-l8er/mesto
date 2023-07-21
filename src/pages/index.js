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


//const openEditPopup = new PopupWithForm()

const openPopupEdit = () => {
  open(editPopup);
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  formProfileEditValidator.hideErrorsAndButtons();
};

const formProfileEditSubmitHandler = (evt) => {
  evt.preventDefault();
  closePopup(editPopup);
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
};

openEditPopupButton.addEventListener("click", openPopupEdit);
formProfileEdit.addEventListener("submit", formProfileEditSubmitHandler);




const openAddCardPopup = new PopupWithForm(addPopup, addCard);
openAddCardPopup.setEventListeners();

//тут вроде всё правильно
openAddPopupButton.addEventListener("click", () => {
  formAddCard.reset(); //тут под вопросом
  formAddCardValidator.hideErrorsAndButtons();
  openAddCardPopup.open();
});

const addCard = (evt) => {
  const cardData = {
    name: cardInput.value,
    link: linkInput.value,
  };
  const cardEl = createCard(cardData, ".card-template", handleCardClick);
  evt.preventDefault();
  openAddCardPopup.close();
  cardListSection.prepend(cardEl);
};
formAddCard.addEventListener("submit", addCard);

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