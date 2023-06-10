// включение валидации вызовом enableValidation
// все настройки передаются при вызове

/*enableValidation ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});*/

/*const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  buttonElement: ".popup__submit-btn",
  inactiveButtonClass: "popup__submit-btn_disabled",
  inputErrorClass: "popup__input_invalid",
  errorClass: "popup__input-error_active",
};*/

//показываем сообщение о ошибке//
const showInputError = (
  formSelector,
  inputSelector,
  errorMessage,
  validationConfig
) => {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.add(validationConfig.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationConfig.errorClass);
};

//прячем сообщение о ошибке//
const hideInputError = (formSelector, inputSelector, validationConfig) => {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.remove(validationConfig.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(validationConfig.errorClass);
};

//проверка валидности//
const checkInputValidity = (formSelector, inputSelector, validationConfig) => {
  if (!inputSelector.validity.valid) {
    showInputError(
      formSelector,
      inputSelector,
      inputSelector.validationMessage,
      validationConfig
    );
  } else {
    hideInputError(formSelector, inputSelector, validationConfig);
  }
};

//слушатели//
const setEventListeners = (formSelector, validationConfig) => {
  const inputList = Array.from(
    formSelector.querySelectorAll(validationConfig.inputSelector)
  );
  const buttonElement = formSelector.querySelector(
    validationConfig.buttonElement
  );
  /*toggleButtonState(inputList, buttonElement, validationConfig);*/

  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener("input", () => {
      checkInputValidity(formSelector, inputSelector, validationConfig);
      /*toggleButtonState(inputList, buttonElement, validationConfig);*/
    });
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputSelector) => {
    return !inputSelector.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, validationConfig) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute("disabled", true);
    buttonElement.classList.add(validationConfig.inactiveButtonClass);
    buttonElement.classList.remove(buttonElement);
  } else {
    buttonElement.removeAttribute("disabled", false);
    buttonElement.classList.remove(validationConfig.inactiveButtonClass);
    buttonElement.classList.add(buttonElement);
  }
};

const enableValidation = (validationConfig) => {
  const formList = Array.from(
    document.querySelectorAll(validationConfig.formSelector)
  );
  formList.forEach((formSelector) => {
    formSelector.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formSelector, validationConfig);
  });
};

hideErrorsAndButtons = (formSelector, validationConfig) => {
  const inputList = Array.from(
    formSelector.querySelectorAll(validationConfig.inputSelector)
  );
  const buttonElement = formSelector.querySelector(
    validationConfig.buttonElement
  );
  inputList.forEach((inputSelector) => {
    hideInputError(formSelector, inputSelector, validationConfig);
    toggleButtonState(inputList, buttonElement, validationConfig);
  });
};
