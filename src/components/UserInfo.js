export default class UserInfo {
  constructor(nameElement, aboutElement) {
    this._name = document.querySelector(nameElement);
    this._about = document.querySelector(aboutElement);
  }

  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      about: this._about.textContent,
    };
    return userInfo;
  }

  setUserInfo(nameInput, aboutInput) {
    this._name.textContent = nameInput;
    this._about.textContent = aboutInput;
  }
}
