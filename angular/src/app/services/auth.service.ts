import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userName: string;
  canActivate: boolean = false;;
  
  constructor() { }
}
