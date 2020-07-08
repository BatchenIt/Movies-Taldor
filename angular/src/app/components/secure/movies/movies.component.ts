import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../../interfaces/movie';
import { Category } from '../../../interfaces/category';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  @Input() userName: string;
  @Input() movies: Movie[];
  @Input() categories: Category[];
  @Input() categoriesToShow: Category[];
  @Output() deleteMovieEvent: EventEmitter<Movie> = new EventEmitter<Movie>();
  @Output() addMovieEvent: EventEmitter<Movie> = new EventEmitter<Movie>();

  addMoviePage = false;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  deleteMovie(e: Movie) {
    this.deleteMovieEvent.emit(e)
  }

  openAddMoviePage() {
    this.addMoviePage = true;
  }

  addMovie(e: Movie) {
    this.addMovieEvent.emit(e);
    this.addMoviePage = false
    // this.api.addMovieServerRes.subscribe((res) => {
    //   console.log('res', res);
     // To Do - handle errors
    // });
  }

  addMovieCanceled() {
    this.addMoviePage = false;
  }
}
