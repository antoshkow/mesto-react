import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }
  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={setSelectedCard}
       />
      <Footer />
      <ImagePopup
      name='A'
      link='B'
      card={selectedCard}
      onClose={closeAllPopups}
      />
      <PopupWithForm
        name={'profile'}
        title={'Редактировать профиль'}
        btnText={'Сохранить'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
          <input type="text" name="name" id="popup-name" className="popup__input" placeholder="Имя" minLength="2" maxLength="40" required />
          <span className="popup__error" id="popup-name-error"></span>
          <input type="text" name="description" id="popup-description" className="popup__input" placeholder="О себе" minLength="2" maxLength="200" required />
          <span className="popup__error" id="popup-description-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name={'add'}
        title={'Новое место'}
        btnText={'Создать'}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
          <input type="text" name="photo-name" id="popup-add-name" className="popup__input" placeholder="Название" minLength="2" maxLength="30" required />
          <span className="popup__error" id="popup-add-name-error"></span>
          <input type="url" name="photo-link" id="popup-photo-link" className="popup__input" placeholder="Ссылка на картинку" required />
          <span className="popup__error" id="popup-photo-link-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name={'confirm'}
        title={'Вы уверены?'}
        btnText={'Да'} />
      <PopupWithForm
        name={'avatar'}
        title={'Обновить аватар'}
        btnText={'Сохранить'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
          <input type="url" name="avatar-link" id="popup-avatar-link" className="popup__input" placeholder="Ссылка на картинку" required />
          <span className="popup__error" id="popup-avatar-link-error"></span>
      </PopupWithForm>
      <ImagePopup />
        <template className="template template_type_default">
          <li className="element">
            <button type="button" className="element__trash"></button>
            <img src="#" alt="Фото" className="element__img" />
            <div className="element__bottom">
              <h2 className="element__title"></h2>
              <div className="element__likes">
                <button type="button" className="element__like"></button>
                <p className="element__counter">0</p>
              </div>
            </div>
          </li>
        </template>
      </div>
  );
}

export default App;
