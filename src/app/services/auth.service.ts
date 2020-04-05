import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { API_URL } from './app-config';
//import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private _registerUrl = API_URL + "/register";
  private _loginUrl = API_URL + "login";
  private _menuUrl = API_URL + "menu";

  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, JSON.stringify(user));
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, JSON.stringify(user));
  }

  menu() {
    return this.http.post<any>(this._menuUrl, null);
  }

  logoutUser() {
    if (localStorage.getItem('token') != null) {
      localStorage.removeItem('token')
    }
    this._router.navigate(['/login'])
  }

  getToken() {
    return localStorage.getItem('token') || "";
  }

  getUserInfo() {
    return localStorage.getItem('userinfo') || "";
  }

  getUserRole() {
    return localStorage.getItem('role')||"";
  }

  getLoginCount() {
    return localStorage.getItem('first')||"";
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }
}
