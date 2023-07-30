import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callbackFormSubmit) {
    super(popupSelector);
    this._callbackFormSubmit = callbackFormSubmit;
    this._formElement = this._popupSelector.querySelector(".popup__form");
    this._inputList = this._formElement.querySelectorAll(".popup__input");
    this._buttonElement = this._formElement.querySelector(".popup__submit-btn");
    this._buttonElement_Default = this._buttonElement.textContent;
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach((inputElement) => {
      this._inputValues[inputElement.name] = inputElement.value;
    });
    return this._inputValues;
  }

  setInputValues(data) {
    this._inputList.forEach((inputElement) => {
      if (data[inputElement.name]) {
        inputElement.value = data[inputElement.name];
      }
    });
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

  renderSavingText(saving) {
    if (saving) {
      this._buttonElement.textContent = "Сохранение...";
    } else {
      this._buttonElement.textContent = this._buttonElement_Default;
    }
  }
}
