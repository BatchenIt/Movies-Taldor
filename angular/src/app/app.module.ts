import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MoviesEffects } from './store/movies.effects';
import { reducers } from './store/index';

import { AppRoutingModule } from './app-routing.module';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MoviesComponent } from './components/secure/movies/movies.component';
import { MovieItemComponent } from './components/secure/movie-item/movie-item.component';
import { AddMovieComponent } from './components/secure/add-movie/add-movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MoviesComponent,
    MovieItemComponent,
    AddMovieComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([MoviesEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule
  ],
  entryComponents: [
    AddMovieComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
