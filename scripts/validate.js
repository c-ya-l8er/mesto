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

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  buttonElement: ".popup__submit-btn",
  inactiveButtonClass: "popup__submit-btn_disabled",
  inputErrorClass: "popup__input_invalid",
  errorClass: "popup__input-error_active",
};

//показываем сообщение о ошибке//
const showInputError = (formSelector, inputSelector, errorMessage) => {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.add(validationConfig.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationConfig.errorClass);
};

//прячем сообщение о ошибке//
const hideInputError = (formSelector, inputSelector) => {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.remove(validationConfig.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(validationConfig.errorClass);
};

//проверка валидности//
const checkInputValidity = (formSelector, inputSelector) => {
  if (!inputSelector.validity.valid) {
    showInputError(formSelector, inputSelector, inputSelector.validationMessage);
  } else {
    hideInputError(formSelector, inputSelector);
  }
};

//слушатели//
const setEventListeners = (formSelector) => {
  const inputList = Array.from(formSelector.querySelectorAll(validationConfig.inputSelector));
  const buttonElement = formSelector.querySelector(validationConfig.buttonElement);
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener("input", () => {
      checkInputValidity(formSelector, inputSelector);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputSelector) => {
    return !inputSelector.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute("disabled", true);
    buttonElement.classList.add(validationConfig.inactiveButtonClass);
  } else {
    buttonElement.removeAttribute("disabled", false);
    buttonElement.classList.remove(validationConfig.inactiveButtonClass);
  }
};


const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
  formList.forEach((formSelector) => {
    formSelector.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    /*setEventListeners(validationConfig, formSelector);*/

    const fieldsetList = Array.from(formSelector.querySelectorAll(".popup__set"));
    fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet);
    });
    });
};


/*enableValidation();*/
enableValidation ({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  buttonElement: ".popup__submit-btn",
  inactiveButtonClass: "popup__submit-btn_disabled",
  inputErrorClass: "popup__input_invalid",
  errorClass: "popup__input-error_active",
});

/*resetValidation = (formSelector) => {
  const inputList = Array.from(formSelector.querySelectorAll(validationConfig.inputSelector));
  inputList.forEach((inputSelector) => {
    hideInputError(inputSelector, formSelector);
  });
toggleButtonState(formSelector, buttonElement)
};*/




/*resetValidation = (inputList, buttonElement, validationConfig) => {
  toggleButtonState(inputList, buttonElement, validationConfig);
  inputList.forEach((inputSelector) => {
    hideInputError(inputSelector);
  });
};*/
/*inactiveButton = () => {
  buttonElement.setAttribute("disabled", true);
  buttonElement.classList.add(validationConfig.inactiveButtonClass);
};*/
