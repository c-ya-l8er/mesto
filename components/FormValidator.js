export default class FormValidator {
  constructor(validationConfig, formElement) {
    this._validationConfig = validationConfig;
    this._formElement = formElement;
    this._inputElement = validationConfig.inputElement;
    this._buttonElement = validationConfig.buttonElement;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputElement)
    );
    this._buttonElement = this._formElement.querySelector(this._buttonElement);
  }

  //показываем сообщение о ошибке//
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._validationConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._validationConfig.errorClass);
  }

  //прячем сообщение о ошибке//
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._validationConfig.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._validationConfig.errorClass);
  }

  // проверка валидности //
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.setAttribute("disabled", true);
      this._buttonElement.classList.add(
        this._validationConfig.inactiveButtonClass
      );
    } else {
      this._buttonElement.removeAttribute("disabled", false);
      this._buttonElement.classList.remove(
        this._validationConfig.inactiveButtonClass
      );
    }
  }

  // слушатели //
  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  hideErrorsAndButtons() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._toggleButtonState();
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this._setEventListeners();
  }
}
