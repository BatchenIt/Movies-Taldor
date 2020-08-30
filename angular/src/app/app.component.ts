import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MoviesState } from './store/movies.reducer';
import { LoadMovieAction } from './store/movies.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
  }
}
