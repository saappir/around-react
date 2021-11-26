import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/api.js";
import Card from "./Card";

function Main(props) {
  const [userName, setUsername] = useState();
  const [userDescription, setuserDescription] = useState();
  const [userAvatar, setuserAvatar] = useState();
  const [cards, setCardsArray] = useState([])

  React.useEffect(() => {
    api.getUserinfo()
      .then((res) => {
        setUsername(res.name);
        setuserDescription(res.about);
        setuserAvatar(res.avatar);
      })
  });

  React.useEffect(() => {
    api.getInitialCards()
      .then((res) => {
        setCardsArray(res);
      })
  }, []);

  return (
    <>
      <div className="page">
        <PopupWithForm name="edit" title="Edit profile" submitText="Save" isOpen={props.isEditProfilePopupOpen}
          onClose={props.closeAllPopups}>
          <label className="popup__input-label">
            <input
              className="popup__input popup__input_content_name" type="text"
              name="name" id="input-name" placeholder="Name"
              minLength={2} maxLength={40} required
            />
            <span className="popup__input-error input-name-error"></span>
          </label>
          <label className="popup__input-label">
            <input
              className="popup__input popup__input_content_description" type="text"
              name="about" id="input-description" placeholder="Job"
              minLength={2} maxLength={200} required
            />
            <span className="popup__input-error input-description-error" ></span>
          </label>
        </PopupWithForm>
        <PopupWithForm name="image" title="Update profile picture" submitText="Save" isOpen={props.isEditAvatarPopupOpen}
          onClose={props.closeAllPopups}>
          <label className="popup__input-label">
            <input className="popup__input popup__input_content_profile-image" type="url" name="link" id="input-avatar"
              placeholder="Image link" value="" required />
            <span className="popup__input-error input-avatar-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm name="add" title="New place" submitText="Create" isOpen={props.isAddPlacePopupOpen} onClose={props.closeAllPopups}>
          <label className="popup__input-label" onClose={props.closeAllPopups}>
            <input className="popup__input popup__input_content_title" type="text" name="name" id="input-title"
              placeholder="Title" value="" required="1" maxLength="30" />
            <span className="popup__input-error input-title-error"></span>
          </label>
          <label className="popup__input-label">
            <input className="popup__input popup__input_content_link" type="url" name="link" id="input-image"
              placeholder="Image link" value="" required />
            <span className="popup__input-error input-image-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm name="delete" title="Are you sure?" submitText="Yes" onClose={props.closeAllPopups} />
        <ImagePopup
          card={props.card}
          isOpen={props.isImagePopupOpen}
          onClose={props.closeAllPopups}
        />
        <section className="profile">
          <div className="profile__image-container">
            <img src={userAvatar} alt="" className="profile__image" />
            <button className="profile__button profile__button_type_image"
              onClick={props.onEditAvatarClick} />
          </div>
          <div className="profile__info">
            <div className="profile__inner">
              <h1 className="profile__name">{userName}</h1>
              <button aria-label="edit" type="button" className="profile__button profile__button-hover profile__button_type_edit"
                onClick={props.onEditProfileClick}
              />
            </div>
            <p className="profile__description" >{userDescription}</p>
          </div>
          <button aria-label="add" type="button" className="profile__button profile__button-hover profile__button_type_add"
            onClick={props.onAddPlaceClick}
          />
        </section>
        <section className="cards">
          {cards.map((card) => (
            <Card card={card} onCardClick={props.onCardClick} />
          ))}
        </section>
      </div>
    </>
  )
}

export default Main
