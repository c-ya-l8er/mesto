//показываем сообщение о ошибке//
const showInputError = (
  formElement,
  inputSelector,
  errorMessage,
  validationConfig
) => {
  const errorElement = formElement.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.add(validationConfig.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationConfig.errorClass);
};

//прячем сообщение о ошибке//
const hideInputError = (formElement, inputSelector, validationConfig) => {
  const errorElement = formElement.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.remove(validationConfig.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(validationConfig.errorClass);
};

//проверка валидности//
const checkInputValidity = (formElement, inputSelector, validationConfig) => {
  if (!inputSelector.validity.valid) {
    showInputError(
      formElement,
      inputSelector,
      inputSelector.validationMessage,
      validationConfig
    );
  } else {
    hideInputError(formElement, inputSelector, validationConfig);
  }
};

//слушатели//
const setEventListeners = (formElement, validationConfig) => {
  const inputList = Array.from(
    formElement.querySelectorAll(validationConfig.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    validationConfig.buttonElement
  );
  toggleButtonState(inputList, buttonElement, validationConfig);

  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener("input", () => {
      checkInputValidity(formElement, inputSelector, validationConfig);
      toggleButtonState(inputList, buttonElement, validationConfig);
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
  } else {
    buttonElement.removeAttribute("disabled", false);
    buttonElement.classList.remove(validationConfig.inactiveButtonClass);
  }
};
const enableValidation = (validationConfig) => {
  const formList = Array.from(
    document.querySelectorAll(validationConfig.formElement)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, validationConfig);
  });
};

hideErrorsAndButtons = (formElement, validationConfig) => {
  const inputList = Array.from(
    formElement.querySelectorAll(validationConfig.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    validationConfig.buttonElement
  );
  inputList.forEach((inputSelector) => {
    hideInputError(formElement, inputSelector, validationConfig);
    toggleButtonState(inputList, buttonElement, validationConfig);
  });
};