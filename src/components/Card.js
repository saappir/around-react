import React from "react";

function Card(props) {

  const { onCardClick, card } = props;

  const handleClick = () => {
    onCardClick(card);
  }

  return (
    <React.Fragment>
      <article className="card">
        <button
          aria-label="delete"
          type="button"
          className="card__delete-button" />
        <img
          src={card.link}
          alt={card.name}
          className="card__image"
          onClick={handleClick} />
        <div className="card__inner">
          <h2 className="card__title">{card.name}</h2>
          <div className="card__likes-container">
            <button
              aria-label="like"
              type="button"
              className="card__like-button" />
            <span className="card__likes-count">{card.likes.length}</span>
          </div>
        </div>
      </article>
    </React.Fragment>
  )
}

export default Card;
