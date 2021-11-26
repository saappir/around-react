function ImagePopup(props) {
  return (
    <div className={`popup popup_type_image ${props.isOpen ? 'popup_visible' : ''}`}>
      <div className="popup__container">
        <button aria-label="exit" type="button" className="popup__exit-button popup__exit-image" onClick={props.onClose}></button>
        <figure className="popup__figure">
          <img className="popup__figure-image" src={props.card.link} alt={props.card.name} />
          <figcaption className="popup__figure-caption">{props.card.name}</figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ImagePopup;
