import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, callbackDeleteSubmit) {
    super(popupSelector);
    this._callbackDeleteSubmit = callbackDeleteSubmit;
    this._formElement = this._popupSelector.querySelector(".popup__form");
    console.log(this._formElement);
    this._buttonElement =
      this._popupSelector.querySelector(".popup__submit-btn");
  }

  open(cardElement) {
    super.open();
    this._cardElement = cardElement;
  }

  setEventListeners() {
    super.setEventListeners();
    this._buttonElement.addEventListener("submit", (e) => {
      console.log(this._buttonElement);
      e.preventDefault();
      this._callbackDeleteSubmit(this._cardElement);
    });
  }
}
