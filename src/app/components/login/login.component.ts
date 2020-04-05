import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  obj={username:'', password:''};
  constructor(private _auth: AuthService, private _router: Router ) { }

  ngOnInit() {
  }

  loginUser () {
    console.log(this.obj);
    this._auth.loginUser(this.obj)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token)
        localStorage.setItem('role', res.data.roleid)
        localStorage.setItem('first', "true")
        localStorage.setItem('userinfo', res.data.firstname+' '+res.data.lastname)
        this._router.navigate([''])
      },
      err => {console.log(err)
        swal({
          type: 'error',
          title: 'Oops...',
          text:  err.error.message || 'Something went wrong!',
        })
      }
    );
  }
}
