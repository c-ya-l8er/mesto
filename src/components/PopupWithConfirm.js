import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, callbackFormSubmit) {
    super(popupSelector);
    this._callbackFormSubmit = callbackFormSubmit;
    this._buttonElement =
      this._popupSelector.querySelector(".popup__submit-btn");
    //console.log(this._buttonElement);
    //console.log(callbackFormSubmit);
  }


  
  setEventListeners() {
    super.setEventListeners();
    this._buttonElement.addEventListener("submit", (e) => {
      e.preventDefault();
      this._callbackFormSubmit(this._element.remove());
    });
  }
}
