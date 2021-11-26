function Card(props) {

  const handleClick = () => {
    props.onCardClick(props.card);
   // console.log(props.card._id)
  }

  return (
    <>
      <article className="card" key={props.card._id}>
        <button
          aria-label="delete"
          type="button"
          className="card__delete-button" />
        <img
          src={props.card.link}
          alt={props.card.name}
          className="card__image"
          onClick={handleClick} />
        <div className="card__inner">
          <h2 className="card__title">{props.card.name}</h2>
          <div className="card__likes-container">
            <button
              aria-label="like"
              type="button"
              className="card__like-button" />
            <span className="card__likes-count">{props.card.likes.length}</span>
          </div>
        </div>
      </article>
    </>
  )
}

export default Card;
