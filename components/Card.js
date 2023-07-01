export default class Card {
  constructor(cardData, templateSelector) {
    this._templateSelector = templateSelector;
    this._name = cardData.name;
    this._link = cardData.link;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _handleLikeClick() {
    this._likeBtn.classList.toggle("card__like-btn_active");
  }

  _handleTrashClick() {
    this._element.remove();
  }

  _handleImageClick() {
    this._element.querySelector(".card__title").textContent = this._name;
    this._element.querySelector(".card__image").src = this._link;

  }

  _setEventListeners() {
    this._likeBtn.addEventListener("click", () => {
      this._handleLikeClick();
    });

    this._trashBtn.addEventListener("click", () => {
      this._handleTrashClick();
    });

    this._element.addEventListener("click", () => {
      this._handleImageClick();
    });
  }

  createCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".card__title").textContent = this._name;
    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__title").alt = this._name;
    this._likeBtn = this._element.querySelector(".card__like-btn");
    this._trashBtn = this._element.querySelector(".card__trash-btn");
    this._imagePopup = 
    
    this._setEventListeners();

    return this._element;
  }
}
