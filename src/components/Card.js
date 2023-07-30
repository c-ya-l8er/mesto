export default class Card {
  constructor(
    cardData,
    templateSelector,
    { handleCardClick },
    { handleTrashClick },
    { handleSetLike },
    { handleSetDislike },
    userId
  ) {
    this._templateSelector = templateSelector;
    this._cardData = cardData;
    this._name = cardData.name;
    this._link = cardData.link;
    this._likes = cardData.likes;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
    this._handleSetLike = handleSetLike;
    this._handleSetDislike = handleSetDislike;
    this._userId = userId;
    this._cardId = cardData._id;
    this._ownerId = cardData.owner._id;
  }
  
  id() {
    return this._cardId;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  likeCounter(cardData) {
    this._likeCount.textContent = cardData.likes.length;
  }

  toggleLikeClick() {
    this._likeBtn.classList.toggle("card__like-btn_active");
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }

  _trashBtnState() {
    if (this._ownerId !== this._userId) {
      this._trashBtn.remove();
      this._trashBtn = null;
    }
  }

  _setEventListeners() {
    this._likeBtn.addEventListener("click", () => {
      this._likeBtn.classList.contains("card__like-btn_active")
        ? this._handleSetDislike(this)
        : this._handleSetLike(this);
    });

    this._trashBtn
      ? this._trashBtn.addEventListener("click", () => {
          this._handleTrashClick(this);
        })
      : null;

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._link, this._name);
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
    this._likeCount = this._element.querySelector(".card__like-count");
    this._likeCount.textContent = this._likes.length;
    // this.likes.some((user) => user._id === this._userId)
    //   ? this._likeBtn.classList.add("card__like-btn_active")
    //   : null;
    this._trashBtnState();
    this._setEventListeners();
    return this._element;
  }
}

// _isLiked() {
//   return this.likes.some((like) => like._id === this._userId);
// }

// _handleLikeClick() {
//   if (this._isLiked()) {
//     this._handleSetDislike(this._cardId);
//   } else {
//     this._handleSetLike(this._cardId);
//   }
// }

// id() {
//   return this._cardId;
// }

// setLike(res) {
//   this._likeCount.textContent = res.likes.length;
//   this._toggleLikeClick();
// }

// setDislike(res) {
//   this._likeCount.textContent = res.likes.length;
//   this._toggleLikeClick();
// }

/*_handleImageClick() {
    this._handleCardClick(this._link, this._name);
  }*/

// _setEventListeners() {
//   this._likeBtn = this._element.querySelector(".card__like-btn");

//   this._likeBtn.addEventListener("click", () => {
//     this._handleLikeClick(this);
//   });

//   this._trashBtn
//     ? this._trashBtn.addEventListener("click", () => {
//         this._handleTrashClick(this);
//       })
//     : null;

//   this._cardImage.addEventListener("click", () => {
//     this._handleCardClick(this._link, this._name);
//   });
// }

// _handleImageClick() {
//   this._handleCardClick(this._link, this._name);
// }

// isLiked() {
//   return this.likes.some((user) => user._id === this._userId);
// }

// likeBtnState() {
//   if (this.isLiked()) {
//     this._likeBtn.classList.add("card__like-btn_active");
//   } else {
//     this._likeBtn.classList.remove("card__like-btn_active");
//   }
//   this._likeCounter();
// }

/*isOwner() {
    return this._cardId.some((cardData) => cardData.owner_id === this._userId);
  }

  trashBtnState() {
    if (this.isOwner) {
      this._trasheBtn.classList.add("card__trash-btn_hidden");
    } else {
      this._trasheBtn.classList.remove("card__trash-btn_hidden");
    }
  }*/
