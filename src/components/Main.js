import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main({ onEditAvatar, onAddPlace, onEditProfile, onCardClick }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);

  React.useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data)
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__left">
          <div className="profile__overlay" onClick={onEditAvatar}>
            <img src={userAvatar} alt="Аватар" className="profile__avatar"  />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__description">{userDescription}</p>
            <button type="button" className="profile__edit-button" id="show-popup" aria-label="Edit" onClick={onEditProfile}></button>
          </div>
        </div>
        <button type="button" className="profile__add-button" id="show-cards-popup" onClick={onAddPlace}></button>
      </section>
      <ul className="elements">
        {
          cards.map((card) => (
            <Card
              key={card._id}
              name={card.name}
              link={card.link}
              likes={card.likes}
              onCardClick={onCardClick}
              />
          ))
        }
      </ul>
    </main>
  );
}

export default Main;
