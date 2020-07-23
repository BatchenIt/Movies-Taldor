import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn: boolean;
  private _userName: string;

  constructor() { }

  setLoggedInUser(isLoggedIn: boolean, userName: string) {
    this._isLoggedIn = isLoggedIn;
    this._userName = userName;
  }

  isLoggedIn() {
    return this._isLoggedIn;
  }

  getUserName() {
    return this._userName;
  }

}
