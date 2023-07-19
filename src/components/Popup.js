export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  open() {
    const openPopup = (popupToOpen) => {
      popupToOpen.classList.add("popup_opened");
      document.addEventListener("keydown", closeByEsc);
    };
  }

  close() {
    const closePopup = (popupToClosed) => {
      popupToClosed.classList.remove("popup_opened");
      document.removeEventListener("keydown", closeByEsc);
    };
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
    }
  }

  _handleOverlayClose(evt) {
    allPopups.forEach((popup) => {
    popup.addEventListener("mousedown", (evt) => {
      if (evt.target === evt.currentTarget) {
        closePopup(popup);
      }
    });
  });
}

  setEventListeners() {
    allPopups.forEach((popup) => {
      popup.addEventListener("mousedown", (evt) => {
        if (evt.target === evt.currentTarget) {
          closePopup(popup);
        }
      });
    });
  }
}
