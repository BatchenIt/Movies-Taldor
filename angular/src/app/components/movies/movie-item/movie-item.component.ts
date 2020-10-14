import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { Movie } from '../../../interfaces/movie';
import { AddEditMovieComponent } from '../add-edit-movie/add-edit-movie.component';

import { MoviesState } from 'src/app/store/movies.reducer';
import { DeleteMovieAction } from '../../../store/movies.actions';

import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input() movie: Movie;
  dialogRef: MatDialogRef<AddEditMovieComponent>

  constructor(
    private store: Store<MoviesState>,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  deleteMovie() {
    this.store.dispatch(new DeleteMovieAction(this.movie.id));
  }

  openEditMovieDialog() {
    this.dialogRef = this.dialog.open(AddEditMovieComponent, {
      data: { ... this.movie },
    });
  }

}
