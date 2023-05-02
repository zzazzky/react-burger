const URL_BASE = 'https://norma.nomoreparties.space/api';

class Api {
  constructor(url) {
    this.url = url;
  }

  _request(url, options) {
    return fetch(url, options).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res.status);
      }
    });
  }

  getIngredients() {
    return this._request(`${this.url}/ingredients`, {
      method: 'GET',
    }).then((res) => res.data);
  }
}

const api = new Api(URL_BASE);

export default api;
