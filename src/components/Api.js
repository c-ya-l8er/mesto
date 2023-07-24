/*export default class Api {
  constructor(options) {
    this.options = options;
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getInitialCards() {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-42/cards", {
      headers: {
        authorization: "a04dfc18-37ef-4557-8dab-9c7099f92080",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  // другие методы работы с API
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-71/",
  headers: {
    authorization: "a04dfc18-37ef-4557-8dab-9c7099f92080",
    "Content-Type": "application/json",
  },
});*/
