import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { AuthService } from '../../../services/auth.service';
import { Movie } from '../../../interfaces/movie';
import { AddMovieComponent } from '../add-movie/add-movie.component';

import { AppState } from '../../../store/index';
import { LoadMovieAction } from '../../../store/movies.actions';

import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  userName: string;

  dialogRef: MatDialogRef<AddMovieComponent>

  movies$: Observable<Movie[]>;
  loading$: Observable<boolean>;
  error$: Observable<Error>;

  constructor(
    private auth: AuthService,
    private store: Store<AppState>,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.userName = this.auth.getUserName();
    this.store.dispatch(new LoadMovieAction());
    this.movies$ = this.store.pipe(select(store => store.moviesState.list));
    this.loading$ = this.store.pipe(select(store => store.moviesState.loading));
    this.error$ = this.store.pipe(select(store => store.moviesState.error));
  }

  openDialog() {
    this.dialogRef = this.dialog.open(AddMovieComponent, {
      data: {
        // categories: this.categories$
      },
    });
  }
}
