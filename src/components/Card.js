export default class Card {
  constructor(cardData, templateSelector, handleCardClick) {
    this._templateSelector = templateSelector;
    this._cardData = cardData;
    this._name = cardData.name;
    this._link = cardData.link;
    this._likes = cardData.likes;
    this._handleCardClick = handleCardClick;
    
    //this._userInfoId = userInfoId;
    this._cardId = cardData._id;
    //this._owner = userInfoId;
    //this._owner = cardData.owner._id;
    //this._ownerId = cardData.owner._id;
    //console.log(this._userInfoId);
    //console.log(cardData._id);
    //console.log(this._owner);
    //console.log(this._likes);
    //console.log(this._ownerId);
    //console.log(this._owner);
    //console.log(this._ownerId);
  }

  /*const cardDeleteButtonClassName = (
  `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
);*/

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _handleLikeClick() {
    this._likeBtn.classList.toggle("card__like-btn_active");
    const currentCount = parseInt(this._likeCount.textContent, 10);
    this._likeCount.textContent = currentCount + 1;
  }

  _handleTrashClick() {
    //this._trashBtn.classList.toggle("card__trash-btn");
    this._element.remove();
    this._element = null;
  }

  _handleImageClick() {
    this._handleCardClick(this._link, this._name);
  }

  _setEventListeners() {
    this._likeBtn.addEventListener("click", () => {
      this._handleLikeClick();
    });

    this._trashBtn.addEventListener("click", () => {
      this._handleTrashClick();
    });

    this._cardImage.addEventListener("click", () => {
      this._handleImageClick();
    });
  }

  /*isLiked() {
    //return this.likes.some((user) => user._id === this.userInfoId);
  }

  isOwner() {
    if (this.owner !== this._userInfoId) {
      this._trashBtn.remove();
    }
  }*/

  generateCard() {
    this._element = this._getTemplate();
    this._cardName = this._element.querySelector(".card__title");
    this._cardImage = this._element.querySelector(".card__image");
    this._cardName.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._likeBtn = this._element.querySelector(".card__like-btn");
    this._trashBtn = this._element.querySelector(".card__trash-btn");
    this._likeCount = this._element.querySelector(".card__like-count");
    //this._likeCount.textContent = this._likes.length;
    //if (this.owner === this._userInfoId){
    //this._trashBtn.remove();
    //console.log(this.owner);
    //console.log(this._userInfoId);
    //}
    //console.log(this._element);
    //console.log(this._likes.length);
    //this.isLiked();
    //this.isOwner();
    this._setEventListeners();

    return this._element;
  }
}

/*/ Определяем, являемся ли мы владельцем текущей карточки
const isOwn = card.owner._id === currentUser._id;

// Создаём переменную, которую после зададим в `className` для кнопки удаления
const cardDeleteButtonClassName = (
  `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
);

// Определяем, есть ли у карточки лайк, поставленный текущим пользователем
const isLiked = card.likes.some(i => i._id === currentUser._id);

// Создаём переменную, которую после зададим в `className` для кнопки лайка
const cardLikeButtonClassName = `...`;

function handleCardLike(card) {
  // Снова проверяем, есть ли уже лайк на этой карточке
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  
  // Отправляем запрос в API и получаем обновлённые данные карточки
  api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
  });
}*/
