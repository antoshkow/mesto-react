const validationConfig = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
const cardsPopup = document.querySelector('.popup_add');
const popup = document.querySelector('.popup_profile');
const avatarPopupSelector = document.querySelector('.popup_avatar');

export { validationConfig, cardsPopup, popup, avatarPopupSelector };
