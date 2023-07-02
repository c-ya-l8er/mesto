export default class Card {
  constructor(cardData, templateSelector, openImagePopup) {
    this._templateSelector = templateSelector;
    this._cardData = cardData;
    this._name = cardData.name;
    this._link = cardData.link;
    this._openImagePopup = openImagePopup;
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
    this._openImagePopup(this._link, this._name);
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

  generateCard() {
    this._element = this._getTemplate();
    this._cardName = this._element.querySelector(".card__title");
    this._cardImage = this._element.querySelector(".card__image");
    this._cardName.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._likeBtn = this._element.querySelector(".card__like-btn");
    this._trashBtn = this._element.querySelector(".card__trash-btn");
        
    this._setEventListeners();

    return this._element;
  }
}
