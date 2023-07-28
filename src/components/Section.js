export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
    //console.log(this._container);
  }

  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
      //this._container.append(item);
      //console.log(this._container.append(item));
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
