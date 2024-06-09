import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  /**
   * get token function
   * @returns JWT token
   */
  getToken(): string | any {
    return localStorage.getItem('ACCESS');
  }

  /**
   * Get refresh token
   * @returns refresh token
   */
  getRefreshToken(): string | any {
    return localStorage.getItem('REFRESH');
  }

  /**
   * Set token in local storage
   * @param token 
   */
  setAccessToken(token: string): string | any {
    localStorage.setItem('ACCESS', token);
  }

  /**
   * Set refresh token in local storage
   * @param token 
   */
  setRefreshToken(token: string): string | any {
    localStorage.setItem('REFRESH', token);
  }

  /**
   * Set logged in user in local storage
   * @param user 
   */
  setLoggedInUser(user: {}): {} | any {
    localStorage.setItem('USER', JSON.stringify(user));
  }

  /**
   * Get logged in user
   * @returns logged in user
   */
  getLoggedInUser(): {} | any {
    return JSON.parse(localStorage.getItem('USER') || '{}');
  }

  /**
   * Remove Token from local storage
   */
  removeToken() {
    localStorage.clear();
  }
}
