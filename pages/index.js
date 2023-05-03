document.getElementById('open-popup-btn').addEventListener('click', function(){
    document.getElementById('edit-form').classList.add('popup_opened')
})

document.getElementById('close-popup-btn').addEventListener('click', function(){
    document.getElementById('edit-form').classList.remove('popup_opened')
})

document.querySelector('#edit-form .popup__container').addEventListener('click', event => {
    event.isClickWithinPopup = true;
});

document.getElementById('edit-form').addEventListener('click', event => {
    if (event.isClickWithinPopup) return;
    event.currentTarget.classList.remove('popup_opened')
});
