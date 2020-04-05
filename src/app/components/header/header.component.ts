import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public _auth: AuthService) { }
  public user_name="";
  ngOnInit() {
    this.user_name = this._auth.getUserInfo();
  }

}
