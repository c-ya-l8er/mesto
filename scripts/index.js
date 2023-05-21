//модальные окна
const editPopup = document.querySelector(".popup_edit-profile");
const addPopup = document.querySelector(".popup_add-card");
const imagePopup = document.querySelector(".popup_open-image");

//кнопки
const openEditPopupButton = document.querySelector(".profile__edit-btn");
const openAddPopupButton = document.querySelector(".profile__add-btn");
const closePopupButtons = document.querySelectorAll(".popup__close-btn");

//добавление карточек из массива
const cardsList = document.querySelector(".cards");
const cardTemplate = document.querySelector(".cards-template").content;
const trashButton = document.querySelector(".card__trash-btn");

//редактирование профиля
const profileName = document.querySelector(".profile__username");
const profileAbout = document.querySelector(".profile__about");
const nameInput = document.querySelector(".popup__field_type_username");
const jobInput = document.querySelector(".popup__field_type_about");

//создание новой карточки
const cardName = document.querySelector(".card__title");
const cardLink = document.querySelector(".card__image");
const cardInput = document.querySelector(".popup__field_type_cardname");
const linkInput = document.querySelector(".popup__field_type_link");

//открытие фото
const popupImage = document.querySelector(".popup__image");
const popupTitle = document.querySelector(".popup__caption");

//формы
const formProfileEdit = document.querySelector(
  ".popup__form_profile-edit-form"
);
const formNewCard = document.querySelector(".popup__form_new-card-form");

//открытие и закрытие модального окна
const openPopup = (popupToOpen) => popupToOpen.classList.add("popup_opened");
const closePopup = (popupToClosed) =>
  popupToClosed.classList.remove("popup_opened");

openEditPopupButton.addEventListener("click", () => {
  openPopup(editPopup);
});

openAddPopupButton.addEventListener("click", () => {
  openPopup(addPopup);
});

closePopupButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});


//закрытие модального окна по клику на оверлей(пока не реализовано)
//editPopup.addEventListener('click', (evt) => {
//if (evt.target === editPopup) closePopup(editPopup);
//});
//addPopup.addEventListener('click', (evt) => {
//if (evt.target === addPopup) closePopup(addPopup);
//});

//редактирование профиля
openPopupEdit = () => {
  openPopup(editPopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
};

openPopupAdd = () => {
  openPopup(addPopup);
  document.querySelector(".popup__field_type_cardname").reset();
  document.querySelector(".popup__field_type_link").reset();
};

formProfileEditSubmitHandler = (evt) => {
  evt.preventDefault();
  closePopup(editPopup);
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
};

openEditPopupButton.addEventListener("click", openPopupEdit);
formProfileEdit.addEventListener("submit", formProfileEditSubmitHandler);

//добавление карточек из массива
initialCards.forEach((el) => {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__title").textContent = el.name;
  cardElement.querySelector(".card__image").src = el.link;
  cardElement.querySelector(".card__image").alt = el.name;

  cardElement
    .querySelector(".card__like-btn")
    .addEventListener("click", (evt) => {
      evt.target.classList.toggle("card__like-btn_active");
    });

  cardElement
    .querySelector(".card__trash-btn")
    .addEventListener("click", () => {
      cardElement.remove();
    });

  cardElement.querySelector(".card__image").addEventListener("click", () => {
    popupTitle.textContent = el.name;
    popupImage.src = el.link;
    popupImage.alt = el.name;
    openPopup(imagePopup);
  });

  cardsList.append(cardElement);
});

//добавление карточки
addCard = (evt) => {
  evt.preventDefault();
  closePopup(addPopup);
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__title").textContent = cardInput.value;
  cardElement.querySelector(".card__image").src = linkInput.value;
  cardElement.querySelector(".card__image").alt = cardInput.value;

  cardElement
    .querySelector(".card__like-btn")
    .addEventListener("click", (evt) => {
      evt.target.classList.toggle("card__like-btn_active");
    });

  cardElement
    .querySelector(".card__trash-btn")
    .addEventListener("click", () => {
      cardElement.remove();
    });

  formNewCard.reset();
  cardsList.prepend(cardElement);
};

formNewCard.addEventListener("submit", addCard);
