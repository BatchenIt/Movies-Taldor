import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../../interfaces/movie';
import { Store } from '@ngrx/store';
import { MoviesState } from 'src/app/store/movies.reducer';
import { DeleteMovieAction } from '../../../store/movies.actions';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input() movie: Movie;

  constructor(
    private store: Store<MoviesState>
  ) { }

  ngOnInit() {
  }

  deleteMovie() {
    this.store.dispatch(new DeleteMovieAction(this.movie.id));
  }

  // editMovie() {
  // }

}
