import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  isUserValid: boolean;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.user = this._initUser();
    this.isUserValid = true;
  }

  submitForm() {
    if (!this._formIsValid(this.user))
      return this.isUserValid = false;
    this.auth.userName = this.user.userName;
    this.auth.canActivate = true;
    this.router.navigate(['secure']);
  }

  private _initUser() {
    return {
      userName: '',
      password: ''
    };
  }

  private _formIsValid(user: User) {
    return user.userName.trim() !== '' &&
      user.password.trim() !== ''
  }

}
