import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  _getInputValues() {}

  setEventListeners() {}

  close() {
    super.close();
  }
}
