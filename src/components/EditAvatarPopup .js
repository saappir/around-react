import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

  const { isOpen, onClose, onUpdateAvatar } = props

  const imageInput = React.useRef('');
  const [newAvatar, setNewAvatar] = React.useState()

  function handleInputImageChange(e) {
    setNewAvatar(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: newAvatar
    });
  }

  return (
    <PopupWithForm name="image" title="Update profile picture" submitText="Save" isOpen={isOpen}
      onClose={onClose} onSubmit={handleSubmit}>
      <label className="popup__input-label">
        <input className="popup__input popup__input_content_profile-image" type="url" name="link" id="input-avatar"
          placeholder="Image link" required
          //  value=""
          onChange={handleInputImageChange} ref={imageInput} />
        <span className="popup__input-error input-avatar-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
