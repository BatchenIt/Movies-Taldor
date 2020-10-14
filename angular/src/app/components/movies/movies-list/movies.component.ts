import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { AuthService } from '../../../services/auth.service';
import { Movie } from '../../../interfaces/movie';

import { AppState } from '../../../store/index';
import { LoadMovieAction } from '../../../store/movies.actions';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  userName: string;

  movies$: Observable<Movie[]>;
  loading$: Observable<boolean>;
  error$: Observable<Error>;

  constructor(
    private auth: AuthService,
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.userName = this.auth.getUserName();
    this.store.dispatch(new LoadMovieAction());
    this.movies$ = this.store.pipe(select(store => store.moviesState.list));
    this.loading$ = this.store.pipe(select(store => store.moviesState.loading));
    this.error$ = this.store.pipe(select(store => store.moviesState.error));
  }

}
