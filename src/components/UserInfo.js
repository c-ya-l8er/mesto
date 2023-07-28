export default class UserInfo {
  constructor(nameElement, aboutElement, avatarElement) {
    this._name = document.querySelector(nameElement);
    this._about = document.querySelector(aboutElement);
    this._avatar = document.querySelector(avatarElement);
  }

  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      about: this._about.textContent,
    };
    return userInfo;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._about.textContent = data.about;
    this._avatar.src = data.avatar;
  }
}
