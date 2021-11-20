import './App.css';

function App() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Around The U.S</title>
      <header className="header">
        <img
          src="<%=require('./images/logo/logo.svg')%>"
          alt="around the US logo"
          className="header__logo"
        />
      </header>
      <section className="popup popup_type_edit popup_hidden">
        <div className="popup__container">
          <button
            aria-label="exit"
            type="button"
            className="popup__exit-button  "
          />
          <form className="popup__form popup__edit-form">
            <h2 className="popup__title">Edit profile</h2>
            <label className="popup__input-label">
              <input
                className="popup__input popup__input_content_name"
                type="text"
                name="name"
                id="input-name"
                placeholder="Name"

                required
                minLength={2}
                maxLength={40}
              />
              <span className="popup__input-error input-name-error" />
            </label>
            <label className="popup__input-label">
              <input
                className="popup__input popup__input_content_description"
                type="text"
                name="about"
                id="input-description"
                placeholder="Job"

                required
                minLength={2}
                maxLength={200}
              />
              <span className="popup__input-error input-description-error" />
            </label>
            <button type="submit" className="popup__submit-button">
              Save
            </button>
          </form>
        </div>
      </section>
      <section className="popup popup_type_add popup_hidden">
        <div className="popup__container">
          <button
            aria-label="exit"
            type="button"
            className="popup__exit-button  "
          />
          <form className="popup__form popup__add-form">
            <h2 className="popup__title">New place</h2>
            <label className="popup__input-label">
              <input
                className="popup__input popup__input_content_title"
                type="text"
                name="name"
                id="input-title"
                placeholder="Title"
                required
                minLength={1}
                maxLength={30}
              />
              <span className="popup__input-error input-title-error" />
            </label>
            <label className="popup__input-label">
              <input
                className="popup__input popup__input_content_link"
                type="url"
                name="link"
                id="input-image"
                placeholder="Image link"
                required
              />
              <span className="popup__input-error input-image-error" />
            </label>
            <button type="submit" className="popup__submit-button  ">
              Create
            </button>
          </form>
        </div>
      </section>
      <section className="profile">
        <div className="profile__image-container">
          <img src="#" alt="" className="profile__image" />
          <button className="profile__button profile__button_type_image" />
        </div>
        <div className="profile__info">
          <div className="profile__inner">
            <h1 className="profile__name">Jacques Cousteau</h1>
            <button
              aria-label="edit"
              type="button"
              className="profile__button profile__button-hover profile__button_type_edit"
            />
          </div>
          <p className="profile__description" />
        </div>
        <button
          aria-label="add"
          type="button"
          className="profile__button profile__button-hover profile__button_type_add"
        />
      </section>
      <section className="cards">
        <template id="cardTemplate" />
      </section>
      <section className="popup popup_type_image popup_hidden">
        <div className="popup__container">
          <button
            aria-label="exit"
            type="button"
            className="popup__exit-button popup__exit-image"
          />
          <figure className="popup__figure">
            <img className="popup__figure-image" src="#" alt="//:0" />
            <figcaption className="popup__figure-caption" />
          </figure>
        </div>
      </section>
      <section className="popup popup_type_delete popup_hidden">
        <div className="popup__container">
          <button
            aria-label="exit"
            type="button"
            className="popup__exit-button popup__exit-image"
          />
          <form className="popup__form popup__image-form">
            <h2 className="popup__title">Are you sure?</h2>
            <button type="submit" className="popup__submit-button">
              Yes
            </button>
          </form>
        </div>
      </section>
      <section className="popup popup_type_avatar popup_hidden">
        <div className="popup__container">
          <button
            aria-label="exit"
            type="button"
            className="popup__exit-button popup__exit-image"
          />
          <form className="popup__form popup__profile-image">
            <h2 className="popup__title">Change profile picture</h2>
            <label className="popup__input-label">
              <input
                className="popup__input popup__input_content_profile-image"
                type="url"
                name="link"
                id="input-avatar"
                placeholder="Image link"
                required
              />
              <span className="popup__input-error input-avatar-error" />
            </label>
            <button type="submit" className="popup__submit-button">
              Save
            </button>
          </form>
        </div>
      </section>
      <footer className="footer">
        <p className="footer__copyright">© 2021 Around The U.S.</p>
      </footer>
    </>

  )
}

export default App;
