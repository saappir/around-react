const customFetch = (baseUrl, headers) =>
  fetch(baseUrl, headers)
    .then(res => res.ok ? res.json() : Promise.reject(res.statusText))

class Api {
  constructor({ baseUrl, headers }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  getInitialCards() {
    return customFetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
  }

  getUserinfo() {
    return customFetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
  }

  updateUserInfo(data) {
    return customFetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
  }

  createCard(data) {
    return customFetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  deleteCard(cardId) {
    return customFetch(`${this._baseUrl}/cards/${cardId}`, {
      headers: this._headers,
      method: 'DELETE'
    })
  }

  changeLikeCardStatus(cardId, isLiked) {
    return customFetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      headers: this._headers,
      method: isLiked ? 'PUT' : 'DELETE'
    })
  }

  setUserAvatar(avatar) {
    return customFetch(`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify(avatar)
    })
  }
}

 const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "777d758a-9062-4c9b-9afe-60fcbfab24e6",
    "Content-Type": "application/json"
  }
});

export default api;
