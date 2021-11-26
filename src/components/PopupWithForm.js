import React from 'react';

function PopupWithForm(props) {
  return (
    <>
      <section className={`popup popup_type_${props.name}, ${props.isOpen ? 'popup_visible' : ''}`} >
        <div className="popup__container">
          <button
            aria-label="exit"
            type="button"
            className="popup__exit-button"
            onClick={props.onClose}
          />
          <form className={`popup__form popup__${props.name}-form`}>
            <h2 className="popup__title">{props.title}</h2>
            {props.children}
            <button type="submit" className="popup__submit-button">
              {props.submitText}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default PopupWithForm;
