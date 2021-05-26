import React from 'react';

function Card(props) {
  const handleCardClick = () => {
    props.onCardClick(props);
  }

  return (
    <li className="element">
      <button type="button" className="element__trash"></button>
      <img src={props.link} alt={props.name} className="element__img" onClick={handleCardClick} />
      <div className="element__bottom">
        <h2 className="element__title">{props.name}</h2>
        <div className="element__likes">
          <button type="button" className="element__like"></button>
          <p className="element__counter">{props.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
