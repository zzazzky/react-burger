const URL_BASE = 'https://norma.nomoreparties.space/api';

class Api {
  constructor(url) {
    this.url = url;
  }

  #checkRes(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  }

  #request(url, options) {
    return fetch(url, options).then((res) => this.#checkRes(res));
  }

  getIngredients() {
    return this.#request(`${this.url}/ingredients`, {
      method: 'GET',
    }).then((res) => res.data);
  }
}

const api = new Api(URL_BASE);

export default api;
