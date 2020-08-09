import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { moviesReducer } from './store/movies.reducer';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MoviesComponent } from './components/secure/movies/movies.component';
import { MovieItemComponent } from './components/secure/movie-item/movie-item.component';
import { AddMovieComponent } from './components/secure/add-movie/add-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MoviesComponent,
    MovieItemComponent,
    AddMovieComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ movies: moviesReducer }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
