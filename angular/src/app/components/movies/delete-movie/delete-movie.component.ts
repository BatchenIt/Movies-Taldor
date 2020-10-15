import { Component, Input, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Movie } from '../../../interfaces/movie';
import { AppState } from '../../../store';
import { DeleteMovieAction } from 'src/app/store/movies.actions';


@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {

  @Input() movie: Movie;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  deleteMovie() {
    this.store.dispatch(new DeleteMovieAction(this.movie.id));
  }

}
