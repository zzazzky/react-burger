interface ICookie {
  getCookie: (name: string) => string | null;
  setCookie: (
    name: string,
    value: string,
    props: { expires: number; path: string }
  ) => void;
  deleteCookie: (name: string) => void;
}

class Cookie implements ICookie {
  getCookie(name: string) {
    const matches = document.cookie.match(
      new RegExp(
        '(?:^|; )' +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
          '=([^;]*)'
      )
    );
    return matches ? decodeURIComponent(matches[1]) : null;
  }

  setCookie(
    name: string,
    value: string,
    props: { expires: number | string; path: string }
  ) {
    props = props || {};
    let exp = props.expires;
    if (typeof exp == 'number') {
      const d = new Date();
      d.setTime(d.getTime() + exp * 1000);
      exp = props.expires = d.toUTCString();
    }
    value = encodeURIComponent(value);
    let updatedCookie = name + '=' + value;
    for (const propName in props) {
      if (typeof propName === 'string') {
        updatedCookie += '; ' + propName;
        const propValue = props[propName as keyof typeof props];
        if (Boolean(propValue) !== true) {
          updatedCookie += '=' + propValue;
        }
      }
    }
    document.cookie = updatedCookie;
  }

  deleteCookie(name: string) {
    this.setCookie(name, '', { expires: -1, path: '/' });
  }
}

const cookie = new Cookie();

export default cookie;
