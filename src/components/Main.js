import React from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup ";
import AddPlacePopup from "./AddPlacePopup ";

function Main(props) {

  const { isEditProfilePopupOpen, closeAllPopups, isEditAvatarPopupOpen, isAddPlacePopupOpen, isImagePopupOpen, card,
    onCardClick, onEditAvatarClick, onEditProfileClick, onAddPlaceClick, onUpdateUser, onUpdateAvatar, onAddPlace, handleCardLike,
    handleCardDelete } = props

  const currentUser = React.useContext(CurrentUserContext)

  return (
    <>
      <div className="page">
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={onUpdateUser} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={onUpdateAvatar} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={onAddPlace} onSubmit={onAddPlace} />
        <PopupWithForm name="delete" title="Are you sure?" submitText="Yes" onClose={closeAllPopups} />
        <ImagePopup card={card} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
        <section className="profile">
          <div className="profile__image-container">
            <img src={currentUser.avatar} alt="" className="profile__image" />
            <button className="profile__button profile__button_type_image"
              onClick={onEditAvatarClick} />
          </div>
          <div className="profile__info">
            <div className="profile__inner">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button aria-label="edit" type="button" className="profile__button profile__button-hover profile__button_type_edit"
                onClick={onEditProfileClick}
              />
            </div>
            <p className="profile__description" >{currentUser.about}</p>
          </div>
          <button aria-label="add" type="button" className="profile__button profile__button-hover profile__button_type_add"
            onClick={onAddPlaceClick}
          />
        </section>
        <section className="cards">
          {props.cards.map((card) => (
            <Card card={card} onCardClick={onCardClick} key={card._id} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
          ))}
        </section>
      </div>
    </>
  )
}

export default Main
