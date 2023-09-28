import type { AxiosResponse } from 'axios';

class SessionStorage {
  get refreshToken() {
    return sessionStorage.getItem('refreshToken') as string;
  }

  private set refreshToken(val: string) {
    sessionStorage.setItem('refreshToken', val);
  }

  get token() {
    return sessionStorage.getItem('token') as string;
  }

  private set token(val: string) {
    sessionStorage.setItem('token', val);
  }

  get userData() {
    return JSON.parse(sessionStorage.getItem('userData') as string);
  }

  private set userData(data: Object) {
    sessionStorage.setItem('userData', JSON.stringify(data));
  }

  setJWT(data: AxiosResponse) {
    this.token = data.data['accessToken'];
    this.refreshToken = data.data['refreshToken'];
  }
}

export default new SessionStorage();