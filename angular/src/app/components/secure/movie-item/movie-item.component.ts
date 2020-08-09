import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../../interfaces/movie';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/movies.reducer';
import { DeleteMovie } from '../../../store/movies.actions';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input() movie: Movie;

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  deleteMovie() {
    this.store.dispatch(DeleteMovie({ id: this.movie.id }));
  }

  // editMovie() {
  // }

}
