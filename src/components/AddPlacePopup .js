import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {

  const { isOpen, onClose, onAddPlace } = props

  const [placeName, setPlaceName] = React.useState('')
  const [placeImage, setPlaceImage] = React.useState('')

  function handleInputNameChange(e) {
    setPlaceName(e.target.value)
  }

  function handleInputImageChange(e) {
    setPlaceImage(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: placeName,
      link: placeImage
    });
  }

  return (
    <PopupWithForm name="add" title="New place" submitText="Create"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <label className="popup__input-label">
        <input className="popup__input popup__input_content_title" type="text" name="name" id="input-title"
          placeholder="Title" required="1" maxLength="30" onChange={handleInputNameChange} />
        <span className="popup__input-error input-title-error"></span>
      </label>
      <label className="popup__input-label">
        <input className="popup__input popup__input_content_link" type="url" name="link" id="input-image"
          placeholder="Image link" required onChange={handleInputImageChange} />
        <span className="popup__input-error input-image-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
