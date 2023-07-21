import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callbackFormSubmit) {
    super(popupSelector);
    this._callbackFormSubmit = callbackFormSubmit;
    this._formElement = this._popupSelector.querySelector(".popup__form");
    this._inputList = this._formElement.querySelectorAll(".popup__input");
    this._buttonElement = this._formElement.querySelector(".popup__submit-btn");
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach((inputElement) => {
      this._inputValues[inputElement.name] = inputElement.value;
    });
    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      this._callbackFormSubmit(this._getInputValues());
    });
  } 

  close() {
    super.close();
    this._formElement.reset();
  }
}
