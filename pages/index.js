//const popup = document.querySelector('.popup');
//const popupContainer = document.querySelector('.popup__container');
//const openPopupButton = document.querySelectorAll('.profile__edit-btn');
//const closePopupButton = document.querySelector('.popup__close-btn');

//openPopupButton.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popup.classList.add('popup_opened');
        popupContainer.classList.add('popup_opened');
    })
});

//closePopupButton.addEventListener('click',() => {
    popup.classList.remove('popup_opened');
    popupContainer.classList.remove('popup_opened');
});

//document.addEventListener('click', (e) => {
    if(e.target === popup) {
        popup.classList.remove('popup_opened');
        popupContainer.classList.remove('popup_opened');
    }
});