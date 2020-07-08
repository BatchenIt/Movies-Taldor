import { Injectable, } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class UserDetailsGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (!this.auth.canActivate)
      this.router.navigateByUrl['/login'];
    return this.auth.canActivate;
  }
}

