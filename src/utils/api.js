import cookie from './cookie';
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

  getProfileInfo() {
    if (cookie.getCookie('accessToken')) {
      return this.#request(`${this.url}/auth/user`, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + cookie.getCookie('accessToken'),
        },
      }).then((res) => res);
    } else {
      return Promise.reject(403);
    }
  }

  refreshToken() {
    if (localStorage.getItem('token')) {
      return this.#request(`${this.url}/auth/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: localStorage.getItem('token') }),
      }).then((res) => res);
    } else {
      return Promise.reject(401);
    }
  }

  changeProfileInfo({ email, name, password }) {
    if (cookie.getCookie('accessToken')) {
      return this.#request(`${this.url}/auth/user`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + cookie.getCookie('accessToken'),
        },
        body: JSON.stringify({ email, name, password }),
      }).then((res) => res);
    } else {
      return Promise.reject(403);
    }
  }

  postOrder(ingredients) {
    if (cookie.getCookie('accessToken')) {
      return this.#request(`${this.url}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + cookie.getCookie('accessToken'),
        },
        body: JSON.stringify({ ingredients: ingredients }),
      }).then((res) => res);
    } else {
      return Promise.reject(403);
    }
  }

  setResetCode(email) {
    return this.#request(`${this.url}/password-reset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    }).then((res) => res);
  }

  resetPassword({ password, token }) {
    return this.#request(`${this.url}/password-reset/reset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password, token }),
    }).then((res) => res);
  }

  signup({ email, password, name }) {
    return this.#request(`${this.url}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    }).then((res) => res);
  }

  login({ email, password }) {
    return this.#request(`${this.url}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => res);
  }

  logout() {
    return this.#request(`${this.url}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: localStorage.getItem('token') }),
    }).then(() => {
      cookie.deleteCookie('accessToken');
      localStorage.removeItem('token');
    });
  }
}

const api = new Api(URL_BASE);

export default api;
