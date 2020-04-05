import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthService} from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private _router: Router) { }

  canActivate():boolean
  {
    if(this.auth.loggedIn()){
      return true;
    }
    else{
      this._router.navigate(['payment/payment-page']);
      return false;
    }
  }
}
