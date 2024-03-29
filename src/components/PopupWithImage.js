import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popupSelector.querySelector(".popup__image");
    this._popupTitle = this._popupSelector.querySelector(".popup__caption");
  }

  open(link, name) {
    super.open();
    this._popupTitle.textContent = name;
    this._popupImage.src = link;
    this._popupImage.alt = name;
  }
}
