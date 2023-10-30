import cookie from './cookie';
const URL_BASE: string = 'https://norma.nomoreparties.space/api';

interface IApi {
  url: string;
  getIngredients: () => Promise<{}>;
  getProfileInfo: () => Promise<Response>;
  refreshToken: () => Promise<Response>;
  changeProfileInfo: (fw: {
    email: string;
    name: string;
    password: string;
  }) => Promise<Response>;
  postOrder: (ingredients: Array<string>) => Promise<Response>;
  setResetCode: (email: string) => Promise<Response>;
  resetPassword: (fw: { password: string; token: string }) => Promise<Response>;
  signup: (fw: {
    email: string;
    name: string;
    password: string;
  }) => Promise<Response>;
  login: (fw: { email: string; password: string }) => Promise<Response>;
  logout: () => Promise<void>;
}
class Api implements IApi {
  public readonly url: string;
  constructor(url: string) {
    this.url = url;
  }

  private checkRes(res: Response) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  }

  private request(url: string, options: {}) {
    return fetch(url, options).then((res) => this.checkRes(res));
  }

  getIngredients() {
    return this.request(`${this.url}/ingredients`, {
      method: 'GET',
    }).then((res) => res.data);
  }

  getProfileInfo() {
    if (cookie.getCookie('accessToken')) {
      return this.request(`${this.url}/auth/user`, {
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
      return this.request(`${this.url}/auth/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: localStorage.getItem('token') }),
      })
        .then((res) => res)
        .then((res) => {
          return res;
        });
    } else {
      return Promise.reject(401);
    }
  }

  changeProfileInfo(form: { email: string; name: string; password: string }) {
    if (cookie.getCookie('accessToken')) {
      return this.request(`${this.url}/auth/user`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + cookie.getCookie('accessToken'),
        },
        body: JSON.stringify(form),
      }).then((res) => res);
    } else {
      return Promise.reject(403);
    }
  }

  postOrder(ingredients: Array<string>) {
    if (cookie.getCookie('accessToken')) {
      return this.request(`${this.url}/orders`, {
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

  setResetCode(email: string) {
    return this.request(`${this.url}/password-reset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    }).then((res) => res);
  }

  resetPassword(form: { password: string; token: string }) {
    return this.request(`${this.url}/password-reset/reset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password: form.password, token: form.token }),
    }).then((res) => res);
  }

  signup(form: { email: string; password: string; name: string }) {
    return this.request(`${this.url}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((res) => res);
  }

  login(form: { email: string; password: string }) {
    return this.request(`${this.url}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((res) => res);
  }

  logout() {
    return this.request(`${this.url}/auth/logout`, {
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
