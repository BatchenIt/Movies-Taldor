import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDetailsGuard } from './services/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { MoviesComponent } from './components/movies/movies-list/movies.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent, canActivate: [UserDetailsGuard] }, //
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
