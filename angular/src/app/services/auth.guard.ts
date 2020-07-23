import { Injectable, } from '@angular/core';
import { Router, CanActivate, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class UserDetailsGuard implements CanActivate {

  constructor(private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute) { }

  canActivate(): boolean {
    const isLoggedIn: boolean = this.auth.isLoggedIn();
    if (!isLoggedIn) {
      this.router.navigateByUrl(this.route.snapshot.queryParamMap.get('/'));
    }
    return isLoggedIn;
  }
}

