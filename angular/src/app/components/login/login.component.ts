import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { EncriptionService } from 'src/app/services/encription.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  isUserValid: boolean;

  constructor(private router: Router,
    private auth: AuthService,
    private encService: EncriptionService) { }

  ngOnInit() {
    this.user = this._initUser();
    this.isUserValid = true;
  }

  submitForm() {
    if (!this._formIsValid(this.user))
      return this.isUserValid = false;

    this._encription(this.user.password)
    this.auth.setLoggedInUser(true, this.user.userName);
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

  private _encription(enc: string) {
    let pass = this.encService.set('key', enc);
  }

}
