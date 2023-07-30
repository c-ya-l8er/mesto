(()=>{"use strict";var t=document.querySelector(".popup_edit-profile"),e=document.querySelector(".popup_add-card"),n=document.querySelector(".popup_open-image"),r=(document.querySelectorAll(".popup"),document.querySelector(".popup_edit-avatar")),o=document.querySelector(".popup_confirm"),i=document.querySelector(".profile__edit-btn"),a=document.querySelector(".profile__add-btn"),u=document.querySelector(".profile__avatar-btn"),l=(o.querySelector(".popup__submit-btn"),document.querySelectorAll(".popup__close-btn"),document.forms.profile_edit_form),c=l.elements.name,s=l.elements.about,f=document.forms.new_card_form,p=(f.elements.name,f.elements.link,document.forms.edit_avatar_form),y=(p.elements.avatar,{formElement:".popup__form",inputElement:".popup__input",buttonElement:".popup__submit-btn",inactiveButtonClass:"popup__submit-btn_disabled",inputErrorClass:"popup__input_invalid",errorClass:"popup__input-error_active"});function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}var v=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var e,n;return e=t,(n=[{key:"statusResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this.statusResponse)}},{key:"setInitialCards",value:function(t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})}).then(this.statusResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this.statusResponse)}},{key:"setUserInfo",value:function(t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about})}).then(this.statusResponse)}},{key:"setUserAvatar",value:function(t){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatar})}).then(this.statusResponse)}},{key:"setLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then(this.statusResponse)}},{key:"removeLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this.statusResponse)}},{key:"removeCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this.statusResponse)}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}var _=function(){function t(e,n,r,o,i,a,u){var l=r.handleCardClick,c=o.handleTrashClick,s=i.handleSetLike,f=a.handleSetDislike;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._templateSelector=n,this._cardData=e,this._name=e.name,this._link=e.link,this._likes=e.likes,this._handleCardClick=l,this._handleTrashClick=c,this._handleSetLike=s,this._handleSetDislike=f,this._userId=u,this._cardId=e._id,this._ownerId=e.owner._id}var e,n;return e=t,(n=[{key:"id",value:function(){return this._cardId}},{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"likeCounter",value:function(t){this._likeCount.textContent=t.likes.length}},{key:"toggleLikeClick",value:function(){this._likeBtn.classList.toggle("card__like-btn_active")}},{key:"removeCard",value:function(){this._element.remove(),this._element=null}},{key:"_trashBtnState",value:function(){this._ownerId!==this._userId&&(this._trashBtn.remove(),this._trashBtn=null)}},{key:"_setEventListeners",value:function(){var t=this;this._likeBtn.addEventListener("click",(function(){t._likeBtn.classList.contains("card__like-btn_active")?t._handleSetDislike(t):t._handleSetLike(t)})),this._trashBtn&&this._trashBtn.addEventListener("click",(function(){t._handleTrashClick(t)})),this._cardImage.addEventListener("click",(function(){t._handleCardClick(t._link,t._name)}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardName=this._element.querySelector(".card__title"),this._cardImage=this._element.querySelector(".card__image"),this._cardName.textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._likeBtn=this._element.querySelector(".card__like-btn"),this._trashBtn=this._element.querySelector(".card__trash-btn"),this._likeCount=this._element.querySelector(".card__like-count"),this._likeCount.textContent=this._likes.length,this._trashBtnState(),this._setEventListeners(),this._element}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}var E=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._validationConfig=e,this._formElement=n,this._inputElement=e.inputElement,this._buttonElement=e.buttonElement,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputElement)),this._buttonElement=this._formElement.querySelector(this._buttonElement)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){var n=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._validationConfig.inputErrorClass),n.textContent=e,n.classList.add(this._validationConfig.errorClass)}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._validationConfig.inputErrorClass),e.textContent="",e.classList.remove(this._validationConfig.errorClass)}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._validationConfig.inactiveButtonClass)):(this._buttonElement.removeAttribute("disabled",!1),this._buttonElement.classList.remove(this._validationConfig.inactiveButtonClass))}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"hideErrorsAndButtons",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners()}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}var C=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.reverse().forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}var P=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupSelector=e,this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this),this._popupCloseButton=this._popupSelector.querySelector(".popup__close-btn")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_handleOverlayClose",value:function(t){t.target===t.currentTarget&&this.close()}},{key:"setEventListeners",value:function(){this._popupSelector.addEventListener("mousedown",this._handleOverlayClose),this._popupCloseButton.addEventListener("click",this._handleOverlayClose)}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=q(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},T.apply(this,arguments)}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function q(t){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},q(t)}var B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(r);if(o){var n=q(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===L(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._popupImage=e._popupSelector.querySelector(".popup__image"),e._popupTitle=e._popupSelector.querySelector(".popup__caption"),e}return e=a,(n=[{key:"open",value:function(t,e){T(q(a.prototype),"open",this).call(this),this._popupTitle.textContent=e,this._popupImage.src=t,this._popupImage.alt=e}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(P);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=V(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},D.apply(this,arguments)}function A(t,e){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},A(t,e)}function V(t){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},V(t)}var N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&A(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=V(r);if(o){var n=V(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===x(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._callbackFormSubmit=e,n._formElement=n._popupSelector.querySelector(".popup__form"),n._inputList=n._formElement.querySelectorAll(".popup__input"),n._buttonElement=n._formElement.querySelector(".popup__submit-btn"),n._buttonElement_Default=n._buttonElement.textContent,n}return e=a,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputValues={},this._inputList.forEach((function(e){t._inputValues[e.name]=e.value})),this._inputValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){t[e.name]&&(e.value=t[e.name])}))}},{key:"setEventListeners",value:function(){var t=this;D(V(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(e){e.preventDefault(),t._callbackFormSubmit(t._getInputValues())}))}},{key:"close",value:function(){D(V(a.prototype),"close",this).call(this),this._formElement.reset()}},{key:"renderSavingText",value:function(t){this._buttonElement.textContent=t?"Сохранение...":this._buttonElement_Default}}])&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(P);function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==J(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===J(o)?o:String(o)),r)}var o}var H=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(e),this._about=document.querySelector(n),this._avatar=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(t){this._name.textContent=t.name,this._about.textContent=t.about,this._avatar.src=t.avatar}}])&&F(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==M(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===M(o)?o:String(o)),r)}var o}function $(){return $="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=K(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},$.apply(this,arguments)}function G(t,e){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},G(t,e)}function K(t){return K=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},K(t)}var Q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&G(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=K(r);if(o){var n=K(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===M(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t,e){var n,r=e.handleCardDelete;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._handleCardDelete=r,n._formElement=n._popupSelector.querySelector(".popup__form"),n}return e=a,(n=[{key:"open",value:function(t){$(K(a.prototype),"open",this).call(this),this._cardElement=t}},{key:"setEventListeners",value:function(){var t=this;$(K(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(e){e.preventDefault(),t._handleCardDelete(t._cardElement)}))}}])&&z(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(P);function W(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var X=new v({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-71/",headers:{authorization:"a04dfc18-37ef-4557-8dab-9c7099f92080","Content-Type":"application/json"}}),Y="";Promise.all([X.getUserInfo(),X.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,u=[],l=!0,c=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(e,n)||function(t,e){if(t){if("string"==typeof t)return W(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?W(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Y=o._id,Z.setUserInfo(o),ct.renderItems(i)})).then().catch((function(t){console.log(t)}));var Z=new H(".profile__username",".profile__about",".profile__avatar"),tt=new B(n);tt.setEventListeners();var et=new N(t,(function(t){et.renderSavingText(!0),X.setUserInfo(t).then((function(t){Z.setUserInfo(t),et.close()})).catch((function(t){console.log(t)})).finally((function(){et.renderSavingText(!1)}))}));i.addEventListener("click",(function(){et.open();var t=Z.getUserInfo();c.value=t.name,s.value=t.about,it.hideErrorsAndButtons()})),et.setEventListeners();var nt=new N(e,(function(t){nt.renderSavingText(!0),X.setInitialCards(t).then((function(t){ct.addItem(lt(t)),nt.close()})).catch((function(t){console.log(t)})).finally((function(){nt.renderSavingText(!1)}))}));a.addEventListener("click",(function(){nt.open(),at.hideErrorsAndButtons()})),nt.setEventListeners();var rt=new N(r,(function(t){rt.renderSavingText(!0),X.setUserAvatar(t).then((function(t){Z.setUserInfo(t),rt.close()})).catch((function(t){console.log(t)})).finally((function(){rt.renderSavingText(!1)}))}));u.addEventListener("click",(function(){rt.open(),ut.hideErrorsAndButtons()})),rt.setEventListeners();var ot=new Q(o,{handleCardDelete:function(t){X.removeCard(t.id()).then((function(){ot.close(t),t.removeCard()})).catch((function(t){console.log(t)}))}});ot.setEventListeners();var it=new E(y,l);it.enableValidation();var at=new E(y,f);at.enableValidation();var ut=new E(y,p);function lt(t){return new _(t,".card-template",{handleCardClick:function(t,e){tt.open(t,e)}},{handleTrashClick:function(t){ot.open(t)}},{handleSetLike:function(t){X.setLike(t.id()).then((function(e){t.toggleLikeClick(),t.likeCounter(e)})).catch((function(t){console.log(t)}))}},{handleSetDislike:function(t){X.removeLike(t.id()).then((function(e){t.toggleLikeClick(),t.likeCounter(e)})).catch((function(t){console.log(t)}))}},Y).generateCard()}ut.enableValidation();var ct=new C((function(t){ct.addItem(lt(t))}),".cards")})();