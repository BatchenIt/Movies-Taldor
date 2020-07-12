import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDetailsGuard } from './services/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { SecureComponent } from './components/secure/secure-page/secure.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'secure', component: SecureComponent }, //, canActivate: [UserDetailsGuard]
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
