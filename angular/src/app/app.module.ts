import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SecureComponent } from './components/secure/secure-page/secure.component';
import { MoviesComponent } from './components/secure/movies/movies.component';
import { MovieItemComponent } from './components/secure/movie-item/movie-item.component';
import { AddMovieComponent } from './components/secure/add-movie/add-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SecureComponent,
    MoviesComponent,
    MovieItemComponent,
    AddMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
